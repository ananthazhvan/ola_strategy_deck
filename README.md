# Ola Electric — Strategy Knowledge Graph

> **A 107-file neural knowledge base diagnosing Ola Electric's collapse and charting its turnaround.**  
> Built for the IIT-BHU "Big Brand Theory" strategy competition. May 2026.

---

## Why This Exists

Most strategy decks are linear: slide 1 → slide 2 → slide 3. They tell a story, but they don't let you explore. If a judge wants to verify a claim, they can't. If they want to go deeper on a specific topic, the deck controls the pace, not them.

A knowledge graph inverts this. Every claim traces back to its source. Every concept links to every other concept. You don't read it — you navigate it.

I built this because I wanted to understand Ola Electric not as a narrative ("they failed because of service") but as a system — where the D2C model failure, the subsidy dependency, the Gigafactory investment, the competitive dynamics, and the brand trust destruction are interconnected nodes in a causal web. You can't fix one without understanding how it amplifies or mitigates the others.

The vault contains **107 interconnected markdown files** across 8 folders, with **~800 sourced data callouts** tracing back to 40+ CSV financial files, DRHP documents, VAHAN registration data, and post-IPO analysis. Every number has a cell reference. Every claim has a source.

---

## Repository Structure

```
ola_strategy_deck/
│
├── Knowledge_Base/obsidian_vault/     ← The knowledge graph (open in Obsidian)
│   ├── Index.md                       ← Navigation hub — start here
│   ├── Companies/          (15 files) ← Ola, competitors, investors
│   ├── Risks/              (15 files) ← Every documented risk factor
│   ├── Financial/          (9 files)  ← P&L, balance sheet, cash flow, unit economics
│   ├── Market/             (21 files) ← Market structure, policy, competitors, sentiment
│   ├── Opportunities/      (11 files) ← Growth vectors: motorcycles, exports, cells
│   ├── Strategy/           (7 files)  ← Existing strategies and their outcomes
│   ├── Technology/         (11 files) ← Gigafactory, cell chemistry, platforms
│   ├── Solutions/          (10 files) ← Turnaround strategy (competition output)
│   └── Root notes/         (7 files)  ← Cross-cutting topics
│
├── Knowledge_Base/
│   ├── ola_insights.json              ← 81 Ola-specific extracted insights
│   ├── competitor_insights.json        ← 61 competitor insights
│   ├── market_insights.json            ← 75 market/macro insights
│   ├── vault_health.json              ← Vault audit report
│   └── temp_chains/                   ← 6 causal chain JSONs (57 nodes, 55 edges)
│
├── screener_data_csv/                 ← 40 raw financial CSVs (source of truth)
│   ├── ola/                           ← Ola: P&L, balance sheet, cash flow, etc.
│   ├── ather/                         ← Ather Energy financials
│   ├── bajaj/                         ← Bajaj Auto financials
│   ├── tvs/                           ← TVS Motor financials
│   ├── hero/                          ← Hero MotoCorp financials
│   └── market/                        ← E2W registrations, policy, service data
│
├── ola_ipo/                           ← DRHP documents (6 text files)
│   ├── risk_factors.txt               ← Pre-IPO risk disclosures
│   ├── financial_mda.txt              ← Management discussion & analysis
│   ├── industry_overview_business.txt ← Industry + business description
│   ├── offer_document_summary.txt     ← IPO structure + terms
│   ├── outstanding_litigation.txt     ← Legal disclosures
│   └── Ola_after_ipo.txt              ← Post-IPO analysis (Aug 2024–May 2026)
│
├── Slides/                            ← Competition presentation + screenshots
├── build_obsidian_site.py             ← Site generation script
├── competition_info.md                ← Competition brief
└── open_design.md                     ← Architecture + design decisions
```

---

## How to Explore the Vault

### Option 1: Obsidian (Recommended)
1. Install [Obsidian](https://obsidian.md)
2. Open the `Knowledge_Base/obsidian_vault/` folder as a vault
3. Start at `Index.md` — the navigation hub
4. Use the **Graph View** to see all 107 nodes and their connections
5. Click any `[[wikilink]]` to follow connections between concepts

### Option 2: GitHub Web
Browse the markdown files directly. Wikilinks won't resolve, but all content is readable.

### Option 3: Static Website (see below)
A D3.js interactive graph visualization is planned for GitHub Pages deployment.

---

## The Knowledge Graph Philosophy

### Each file is a neuron. Each wikilink is a synapse.

The vault is organized as a **directed knowledge graph**:

- **`> [!insight]`** — The single most important takeaway from each file
- **`> [!data]`** — Sourced data callouts with file references and cell numbers
- **`[[wikilinks]]`** — Bidirectional connections between concepts
- **`## Connections`** — Structured as Causes → Effects → Amplifiers → Linked Nodes

Every claim traces back to its source. The `Source:` field in every data callout points to a specific CSV file or DRHP page. You can verify everything.

### Why This Beats a Linear Report
1. **Verifiable** — Every number has a cell reference
2. **Navigable** — Follow your curiosity, not the author's sequence
3. **Updatable** — New data slots in without restructuring
4. **Queryable** — The graph reveals connections you wouldn't find in prose

---

## What's Inside: Key Findings

### The Diagnosis
- **Market share collapsed** from 55.81% (Apr-22) to 8.6% (Oct-25) — the steepest decline in Indian auto history
- **Root cause**: D2C model without service infrastructure. Only 300 of 935 experience centres had repair capability. 7-15 day repair backlogs destroyed trust that 40+ year legacy OEMs inherited.
- **Compounding factors**: Product quality sacrificed for speed (500+ consumer cases), subsidy dependency exposed (87.5% subsidy cut post-FAME-II), and competitors with structural advantages Ola couldn't replicate (Bajaj: Rs 38,552 Cr reserves, Rs 400/visit service; Hero: 6,000+ dealers; TVS: 95% parts availability).
- **The paradox**: Gross margins doubled from 12% to 36% even as revenue collapsed 71% peak-to-trough. Ola is not dying — it's shrinking to profitability. Breakeven dropped from ~40,000 to ~15,000 units/month.

### The Turnaround Strategy
A 5-pillar, 30-month architecture:

1. **Survive the subsidy cliff** (Jul 2026) — cost hardening + state arbitrage + pricing architecture
2. **Fix product & service** — Hub & Spoke network (300 hubs + 2,000 certified garages), Zero-Tolerance QA
3. **Rebrand through truth** — Radical Transparency campaign: live factory streams, public service dashboards
4. **Grow differently** — Stop fighting for scooter share. Enter motorcycles. Export to tropical markets. Pivot to B2B battery supply.
5. **Bring back the money** — Investor confidence restoration from Rs 29 to Rs 67+ stock price

Full details: `Knowledge_Base/obsidian_vault/Solutions/`

---

## Deploying to GitHub Pages

### Option A: Host the HTML Visualization (Recommended)

If you have a D3.js knowledge graph HTML file in the `Slides/` folder:

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Choose `master` (or `main`) branch, folder: `/ (root)` or `/docs`
4. If your HTML file is at the root named `index.html`, GitHub Pages serves it automatically
5. Your site will be at: `https://<your-username>.github.io/<repo-name>/`

**Quick setup:** Rename your visualization HTML to `index.html` and place it at the repo root. GitHub Pages picks it up immediately.

### Option B: Host Using Quartz (Obsidian-native static site generator)

[Quartz](https://quartz.jzhao.xyz/) renders Obsidian vaults as beautiful static websites with graph view, backlinks, and search.

```bash
# Clone Quartz
git clone https://github.com/jackyzha0/quartz.git quartz-site
cd quartz-site

# Copy your vault content
cp -r ../Knowledge_Base/obsidian_vault/* content/

# Build and serve locally
npx quartz build
npx quartz sync  # deploys to GitHub Pages
```

### Option C: Manual HTML Export

The `build_obsidian_site.py` script in this repo can generate a static HTML snapshot. Run it and push the output to a `docs/` folder. Configure GitHub Pages to serve from `/docs`.

---

## Source Data

This project uses real financial and operational data from:

| Source | Type | Files |
|--------|------|-------|
| **Screener.in** | Financial statements | 40 CSVs across Ola, Ather, Bajaj, TVS, Hero, and market data |
| **VAHAN** | Vehicle registration data | Monthly E2W registrations by OEM, Apr 2022–Mar 2026 |
| **DRHP (SEBI)** | IPO prospectus | Ola Electric DRHP dated Dec 2023 |
| **BSE/NSE filings** | Post-IPO disclosures | Quarterly financials, shareholding patterns, earnings calls |
| **CCPA / Consumer Courts** | Legal/regulatory | Complaint volumes, court rulings, regulatory actions |
| **Google Play Store** | App ratings | Customer sentiment proxy data |
| **Social media** | Public sentiment | Reddit, Twitter/X, YouTube brand perception |

All data is publicly sourced. No proprietary or confidential information is included.

---

## Competition Context

This repository was built for **The Big Brand Theory** competition hosted by IIT-BHU (Apr–May 2026).

**Task:** Reposition Ola Electric as India's most reliable, aspirational, and scalable EV ecosystem.

**Submission requirements:** 8–10 slide presentation + comprehensive market analysis + GTM strategy + marketing campaign plan.

The vault serves as the evidence base. The `Solutions/` folder contains the actual strategy output. The rest of the vault is the research infrastructure that backs every claim.

---

## Mental Model

> *"Most people think of knowledge as a book. You read it front to back. But the world doesn't work that way — everything connects to everything. A knowledge graph thinks like a brain: neurons fire, synapses connect, patterns emerge. That's what this vault is. Not a report about Ola Electric. A map of everything we know about Ola Electric, and everything that connects to everything else."*

---

## License

MIT — Use this data, learn from it, build on it. If this helps you understand the Indian EV market or build something interesting, that's the point.

---

*Built with Obsidian, Python, Claude, and an unreasonable amount of curiosity about why companies fail and how they can come back.*
