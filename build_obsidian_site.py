import os
import re
import json
import shutil
from pathlib import Path

VAULT_DIR = "Knowledge_Base/obsidian_vault"
SITE_DIR = "Knowledge_Base/site"

def ensure_dir(path):
    if not os.path.exists(path):
        os.makedirs(path)

def parse_callout(block):
    lines = block.strip().split('\n')
    if not lines or not lines[0].startswith('> [!'):
        return None
    
    first_line = lines[0]
    match = re.match(r'> \[!(.*?)\](.*)', first_line)
    if not match: return None
    
    ctype = match.group(1).strip().lower()
    title = match.group(2).strip()
    
    body_lines = []
    for line in lines[1:]:
        if line.startswith('> '): body_lines.append(line[2:])
        elif line.startswith('>'): body_lines.append(line[1:])
        else: body_lines.append(line)
        
    body = '<br>'.join(body_lines)
    return {
        'type': ctype,
        'title': title,
        'body': body
    }

def format_callout_html(c):
    ctype = c['type']
    title = c['title'] if c['title'] else ""
    body = c['body']
    
    # Process bold/italic in body
    body = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', body)
    body = re.sub(r'\*(.*?)\*', r'<em>\1</em>', body)
    
    title_html = f'<div class="callout-title">{ctype.upper()}: {title}</div>' if title else f'<div class="callout-title">{ctype.upper()}</div>'
    return f'<div class="callout callout-{ctype}">{title_html}<div class="callout-body">{body}</div></div>'

def process_markdown(content):
    # Extract Connections
    parts = re.split(r'(?i)^##?\s*Connections\s*$|^\*\*\s*Connections\s*\*\*:?\s*$', content, flags=re.MULTILINE)
    main_text = parts[0]
    connections_text = parts[1] if len(parts) > 1 else ""
    
    # Extract Callouts
    callout_blocks = []
    current_callout = []
    other_lines = []
    
    in_callout = False
    for line in main_text.split('\n'):
        if line.startswith('> [!'):
            if in_callout: callout_blocks.append('\n'.join(current_callout))
            in_callout = True
            current_callout = [line]
        elif line.startswith('>') and in_callout:
            current_callout.append(line)
        else:
            if in_callout:
                callout_blocks.append('\n'.join(current_callout))
                in_callout = False
                current_callout = []
            other_lines.append(line)
            
    if in_callout:
        callout_blocks.append('\n'.join(current_callout))
        
    parsed_callouts = []
    for block in callout_blocks:
        parsed = parse_callout(block)
        if parsed: parsed_callouts.append(parsed)
        else: other_lines.extend(block.split('\n'))
        
    insights = [c for c in parsed_callouts if c['type'] == 'insight']
    datasources = [c for c in parsed_callouts if c['type'] == 'data']
    warnings = [c for c in parsed_callouts if c['type'] == 'warning']
    
    # Format Content
    content_html = '\n'.join(other_lines)
    content_html = re.sub(r'^### (.*?)$', r'<h3>\1</h3>', content_html, flags=re.MULTILINE)
    content_html = re.sub(r'^## (.*?)$', r'<h2>\1</h2>', content_html, flags=re.MULTILINE)
    content_html = re.sub(r'^# (.*?)$', r'<h1>\1</h1>', content_html, flags=re.MULTILINE)
    content_html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content_html)
    content_html = re.sub(r'\*(.*?)\*', r'<em>\1</em>', content_html)
    content_html = re.sub(r'^- (.*?)$', r'<li>\1</li>', content_html, flags=re.MULTILINE)
    content_html = re.sub(r'(<li>.*?</li>\n?)+', lambda m: f"<ul>\n{m.group(0)}</ul>\n", content_html)
    
    blocks = content_html.split('\n\n')
    parsed_blocks = []
    for block in blocks:
        block = block.strip()
        if not block: continue
        if not block.startswith('<h') and not block.startswith('<ul') and not block.startswith('<div'):
            block = block.replace('\n', '<br>')
            block = f'<p>{block}</p>'
        parsed_blocks.append(block)
    
    content_html = '\n'.join(parsed_blocks)
    
    # Format Connections
    conn_html = ""
    if connections_text:
        c_lines = []
        for line in connections_text.strip().split('\n'):
            line = line.strip()
            if not line: continue
            line = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line)
            c_lines.append(f'<p>{line}</p>')
        conn_html = f'<div class="connections-section"><h2>Connections</h2>\n{"".join(c_lines)}</div>'
        
    # Build final HTML
    final_html = []
    
    for c in insights: final_html.append(format_callout_html(c))
    for c in warnings: final_html.append(format_callout_html(c))
    
    if content_html.strip(): final_html.append(content_html)
    
    if datasources:
        final_html.append('<div class="datasources-section"><h3>Data Sources</h3>')
        for c in datasources: final_html.append(format_callout_html(c))
        final_html.append('</div>')
        
    if conn_html:
        final_html.append(conn_html)
        
    return '\n'.join(final_html)

def main():
    print(f"Parsing vault at {VAULT_DIR}...")
    ensure_dir(SITE_DIR)
    
    nodes_dict = {}
    links_list = []
    notes_content = {}
    
    # Pass 1: Discover files
    for root, dirs, files in os.walk(VAULT_DIR):
        if '.obsidian' in root: continue
        for file in files:
            if file.endswith('.md'):
                file_path = Path(root) / file
                rel_path = file_path.relative_to(VAULT_DIR)
                node_id = file_path.stem
                category = rel_path.parent.name if str(rel_path.parent) != '.' else 'Root'
                
                nodes_dict[node_id] = {
                    "id": node_id,
                    "label": node_id,
                    "category": category,
                    "is_phantom": False
                }
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                wikilinks = re.findall(r'\[\[(.*?)\]\]', content)
                html_content = content
                for link in wikilinks:
                    parts = link.split('|')
                    target = parts[0]
                    alias = parts[1] if len(parts) > 1 else target
                    base_target = target.split('#')[0].split('/')[-1]
                    
                    links_list.append({"source": node_id, "target": base_target})
                    link_html = f'<a href="#" class="internal-link" data-target="{base_target}">{alias}</a>'
                    html_content = html_content.replace(f'[[{link}]]', link_html)
                
                notes_content[node_id] = process_markdown(html_content)

    # Pass 2: Phantoms
    for link in links_list:
        target_id = link['target']
        if target_id not in nodes_dict:
            nodes_dict[target_id] = {
                "id": target_id,
                "label": target_id,
                "category": "Phantom",
                "is_phantom": True
            }
            notes_content[target_id] = f'<div class="phantom-note"><h2>{target_id}</h2><p>This is an empty node.</p></div>'

    graph_data = {"nodes": list(nodes_dict.values()), "links": links_list}
    
    with open(os.path.join(SITE_DIR, 'graph_data.json'), 'w') as f:
        json.dump(graph_data, f, indent=2)
    with open(os.path.join(SITE_DIR, 'notes_data.json'), 'w') as f:
        json.dump(notes_content, f, indent=2)
        
    print(f"Generated site data in {SITE_DIR}/")

if __name__ == "__main__":
    main()
