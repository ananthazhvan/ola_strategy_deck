document.addEventListener('DOMContentLoaded', async () => {
    // UI Elements
    const sidePanel = document.getElementById('side-panel');
    const closeBtn = document.getElementById('close-btn');
    const noteContent = document.getElementById('note-content');
    const panelTitle = document.getElementById('panel-title');
    const nodeCountSpan = document.getElementById('node-count');
    const edgeCountSpan = document.getElementById('edge-count');
    const legendContainer = document.getElementById('legend');
    const togglePhantoms = document.getElementById('toggle-phantoms');
    
    // Settings Elements
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsContent = document.getElementById('settings-content');
    const settingLinkThickness = document.getElementById('setting-link-thickness');
    const settingTextFade = document.getElementById('setting-text-fade');
    const settingNodeSize = document.getElementById('setting-node-size');
    const settingColorMode = document.getElementById('setting-color-mode');

    // Search Elements
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // State
    let originalGraphData = { nodes: [], links: [] };
    let currentGraphData = { nodes: [], links: [] };
    let notesData = {};
    let selectedNodeId = null;
    let nodeSelection, linkSelection, textSelection;
    let simulation;
    let g;
    let currentZoomK = 1;

    // Colors mapping
    const colorScale = d3.scaleOrdinal()
        .domain(['Root', 'Companies', 'Risks', 'Financial', 'Market', 'Opportunities', 'Strategy', 'Technology', 'Solutions', 'Phantom'])
        .range([
            '#88c0d0', '#bf616a', '#d08770', '#ebcb8b', 
            '#a3be8c', '#b48ead', '#5e81ac', '#8fbcbb', '#00ff88', '#4c566a'
        ]);

    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = d3.select('#graph-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .call(d3.zoom().scaleExtent([0.1, 4]).on('zoom', (event) => {
            g.attr('transform', event.transform);
            currentZoomK = event.transform.k;
            updateTextVisibility();
        }))
        .append('g');

    g = svg.append('g');

    // Load data
    try {
        const [graphRes, notesRes] = await Promise.all([
            fetch('graph_data.json'),
            fetch('notes_data.json')
        ]);
        
        originalGraphData = await graphRes.json();
        notesData = await notesRes.json();
        
        calculateDegrees(originalGraphData);
        buildLegend();
        updateGraphData();
    } catch (error) {
        console.error("Error loading graph data:", error);
    }

    function calculateDegrees(data) {
        data.nodes.forEach(n => n.degree = 0);
        data.links.forEach(link => {
            const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
            const targetId = typeof link.target === 'object' ? link.target.id : link.target;
            const sourceNode = data.nodes.find(n => n.id === sourceId);
            const targetNode = data.nodes.find(n => n.id === targetId);
            if (sourceNode) sourceNode.degree++;
            if (targetNode) targetNode.degree++;
        });
    }

    function buildLegend() {
        const categories = Array.from(new Set(originalGraphData.nodes.map(n => n.category)));
        categories.forEach(cat => {
            const item = document.createElement('div');
            item.className = 'legend-item';
            const color = document.createElement('div');
            color.className = 'legend-color';
            color.style.backgroundColor = colorScale(cat);
            const text = document.createElement('span');
            text.textContent = cat;
            item.appendChild(color);
            item.appendChild(text);
            legendContainer.appendChild(item);
        });
    }

    function updateGraphData() {
        const hidePhantoms = togglePhantoms.checked;
        if (hidePhantoms) {
            currentGraphData.nodes = originalGraphData.nodes.filter(n => !n.is_phantom);
            const existingNodeIds = new Set(currentGraphData.nodes.map(n => n.id));
            currentGraphData.links = originalGraphData.links.filter(link => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;
                return existingNodeIds.has(sourceId) && existingNodeIds.has(targetId);
            });
        } else {
            currentGraphData.nodes = originalGraphData.nodes.map(n => ({...n}));
            currentGraphData.links = originalGraphData.links.map(l => {
                 const sourceId = typeof l.source === 'object' ? l.source.id : l.source;
                 const targetId = typeof l.target === 'object' ? l.target.id : l.target;
                 return { source: sourceId, target: targetId };
            });
        }
        
        calculateDegrees(currentGraphData);
        nodeCountSpan.textContent = currentGraphData.nodes.length;
        edgeCountSpan.textContent = currentGraphData.links.length;
        renderGraph();
    }

    function getNodeColor(d) {
        if (settingColorMode.value === 'white') {
            return d.is_phantom ? '#888888' : '#ffffff';
        }
        return colorScale(d.category);
    }

    function renderGraph() {
        g.selectAll('*').remove();

        const maxDegree = d3.max(currentGraphData.nodes, d => d.degree) || 1;
        const sizeMulti = parseFloat(settingNodeSize.value);
        
        const sizeScale = d3.scaleSqrt()
            .domain([0, maxDegree])
            .range([4 * sizeMulti, 20 * sizeMulti]);

        simulation = d3.forceSimulation(currentGraphData.nodes)
            .force('link', d3.forceLink(currentGraphData.links).id(d => d.id).distance(120))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collide', d3.forceCollide().radius(d => sizeScale(d.degree) + 15));

        // Draw Links (Bottom layer)
        linkSelection = g.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(currentGraphData.links)
            .enter().append('line')
            .attr('class', 'link')
            .attr('stroke-width', parseFloat(settingLinkThickness.value));

        // Draw Nodes (Middle layer)
        nodeSelection = g.append('g')
            .attr('class', 'nodes')
            .selectAll('g')
            .data(currentGraphData.nodes)
            .enter().append('g')
            .attr('class', 'node')
            .attr('id', d => `node-${d.id.replace(/\s+/g, '-')}`)
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended)
            );

        nodeSelection.append('circle')
            .attr('r', d => sizeScale(d.degree))
            .attr('fill', d => getNodeColor(d))
            .on('click', (event, d) => selectNode(d.id));

        // Draw Texts (Top layer, separate group so it renders above all circles)
        textSelection = g.append('g')
            .attr('class', 'texts')
            .selectAll('text')
            .data(currentGraphData.nodes)
            .enter().append('text')
            .attr('class', 'node-text')
            .attr('dx', d => sizeScale(d.degree) + 8)
            .attr('dy', 4)
            .text(d => d.label)
            .on('click', (event, d) => selectNode(d.id)); // click text to select too

        updateTextVisibility();

        simulation.on('tick', () => {
            linkSelection
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);
            
            nodeSelection
                .attr('transform', d => `translate(${d.x},${d.y})`);
                
            textSelection
                .attr('transform', d => `translate(${d.x},${d.y})`);
        });

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
        
        if (selectedNodeId) highlightNode(selectedNodeId);
    }

    function updateTextVisibility() {
        if (!textSelection) return;
        const fadeThreshold = parseFloat(settingTextFade.value);
        textSelection.style('opacity', function(d) {
            // Always show if highlighted/selected
            if (d3.select(this).classed('highlighted') || d.id === selectedNodeId) {
                return 1;
            }
            return currentZoomK < fadeThreshold ? 0 : 1;
        });
    }

    function getNeighbors(nodeId) {
        const neighbors = new Set();
        currentGraphData.links.forEach(link => {
            const sId = link.source.id || link.source;
            const tId = link.target.id || link.target;
            if (sId === nodeId) neighbors.add(tId);
            if (tId === nodeId) neighbors.add(sId);
        });
        return neighbors;
    }

    function highlightNode(nodeId) {
        const neighbors = getNeighbors(nodeId);
        
        nodeSelection.classed('dimmed', d => d.id !== nodeId && !neighbors.has(d.id));
        nodeSelection.classed('highlighted', d => d.id === nodeId || neighbors.has(d.id));
        nodeSelection.classed('selected', d => d.id === nodeId);
        
        textSelection.classed('dimmed', d => d.id !== nodeId && !neighbors.has(d.id));
        textSelection.classed('highlighted', d => d.id === nodeId || neighbors.has(d.id));
        
        linkSelection.classed('dimmed', d => {
            const sId = d.source.id || d.source;
            const tId = d.target.id || d.target;
            return sId !== nodeId && tId !== nodeId;
        });
        linkSelection.classed('highlighted', d => {
            const sId = d.source.id || d.source;
            const tId = d.target.id || d.target;
            return sId === nodeId || tId === nodeId;
        });
        
        // Ensure link thickness is applied to highlighted specifically
        const baseThickness = parseFloat(settingLinkThickness.value);
        linkSelection.attr('stroke-width', d => {
            const sId = d.source.id || d.source;
            const tId = d.target.id || d.target;
            if (sId === nodeId || tId === nodeId) return baseThickness + 1; // slightly thicker for highlighted
            return baseThickness;
        });

        updateTextVisibility();
    }

    function resetHighlight() {
        nodeSelection.classed('dimmed', false)
            .classed('highlighted', false)
            .classed('selected', false);
        textSelection.classed('dimmed', false)
            .classed('highlighted', false);
        linkSelection.classed('dimmed', false)
            .classed('highlighted', false)
            .attr('stroke-width', parseFloat(settingLinkThickness.value));
        updateTextVisibility();
    }

    function selectNode(nodeId) {
        // If node is filtered out, show it
        const isPhantom = originalGraphData.nodes.find(n => n.id === nodeId)?.is_phantom;
        if (isPhantom && togglePhantoms.checked) {
            togglePhantoms.checked = false;
            updateGraphData();
        }

        selectedNodeId = nodeId;
        highlightNode(nodeId);
        
        panelTitle.textContent = nodeId;
        const contentHtml = notesData[nodeId];
        noteContent.innerHTML = contentHtml ? contentHtml : `<p>No content found.</p>`;
        sidePanel.classList.remove('hidden');
        searchResults.classList.add('hidden'); // hide search results on selection
        searchInput.value = ''; // clear search
    }

    // Toggle Settings
    settingsToggle.addEventListener('click', () => {
        settingsContent.classList.toggle('hidden');
    });

    // Settings Listeners
    togglePhantoms.addEventListener('change', updateGraphData);
    
    settingLinkThickness.addEventListener('input', (e) => {
        if(linkSelection) linkSelection.attr('stroke-width', parseFloat(e.target.value));
        if(selectedNodeId) highlightNode(selectedNodeId); // re-apply highlight thickness
    });

    settingTextFade.addEventListener('input', updateTextVisibility);

    settingNodeSize.addEventListener('input', () => {
        renderGraph(); // Needs re-render to update physics collision radius
    });

    settingColorMode.addEventListener('change', () => {
        if(nodeSelection) {
            nodeSelection.selectAll('circle').attr('fill', d => getNodeColor(d));
        }
    });

    // Strip HTML function for text search
    function stripHtml(html) {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    // Search Logic
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        
        if (query.length < 2) {
            searchResults.classList.add('hidden');
            return;
        }

        let results = [];
        
        // 1. Search Node Names (Highest Priority)
        const nodeMatches = originalGraphData.nodes.filter(n => n.id.toLowerCase().includes(query));
        nodeMatches.forEach(n => {
            results.push({
                type: 'Node',
                id: n.id,
                context: 'Matches Node Title'
            });
        });

        // 2. Search Text Content
        const contentMatches = [];
        for (const [nodeId, htmlContent] of Object.entries(notesData)) {
            // Skip if already matched as Node
            if (nodeMatches.find(n => n.id === nodeId)) continue;
            
            const plainText = stripHtml(htmlContent).toLowerCase();
            const idx = plainText.indexOf(query);
            if (idx !== -1) {
                // Get surrounding text
                const start = Math.max(0, idx - 30);
                const end = Math.min(plainText.length, idx + query.length + 30);
                let snippet = plainText.substring(start, end);
                
                // Highlight query
                const highlightRegex = new RegExp(`(${query})`, 'gi');
                snippet = snippet.replace(highlightRegex, '<span class="search-highlight">$1</span>');

                contentMatches.push({
                    type: 'Content',
                    id: nodeId,
                    context: `...${snippet}...`
                });
            }
        }

        // Limit results
        const totalResults = [...results, ...contentMatches].slice(0, 10);

        if (totalResults.length === 0) {
            searchResults.innerHTML = '<div class="search-item"><span class="search-item-context">No results found.</span></div>';
            searchResults.classList.remove('hidden');
            return;
        }

        // Render Results
        let currentCategory = '';
        totalResults.forEach(res => {
            if (currentCategory !== res.type) {
                const catHeader = document.createElement('div');
                catHeader.className = 'search-category';
                catHeader.textContent = res.type + ' Matches';
                searchResults.appendChild(catHeader);
                currentCategory = res.type;
            }

            const item = document.createElement('div');
            item.className = 'search-item';
            item.innerHTML = `
                <div class="search-item-title">${res.id}</div>
                <div class="search-item-context">${res.context}</div>
            `;
            item.addEventListener('click', () => selectNode(res.id));
            searchResults.appendChild(item);
        });

        searchResults.classList.remove('hidden');
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    });

    closeBtn.addEventListener('click', () => {
        sidePanel.classList.add('hidden');
        selectedNodeId = null;
        resetHighlight();
    });

    noteContent.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.classList.contains('internal-link')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('data-target');
            if (targetId) selectNode(targetId);
        }
    });

    window.addEventListener('resize', () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        svg.attr('width', w).attr('height', h);
    });
});
