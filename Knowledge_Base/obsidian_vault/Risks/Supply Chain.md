> [!insight] The Single Most Important Thing
> Ola's supply chain risk is fundamentally a **battery cost and availability dependency** — the battery represents **35% of [[BOM]]** for the [[Ola S1 Pro]] (single largest component), and cells were imported without contracts exceeding 1 year. The [[Technology/Gigafactory_Updates]] was the strategic fix, but it created a new set of risks: **only ~16% capacity utilization** (6 GWh built, ~1 GWh consumed), cell cost at **$80/kWh** (import parity, not advantage), and a B2B pivot with **zero confirmed orders** as of May 2026. The global context is brutal: **4,200 GWh global cell capacity, ~900 GWh excess** — Ola is trying to compete in a market flooded with cheap cells.

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Key commodity price data (2026 current):
> - [[Lithium carbonate]]: CNY 192,000/tonne — **V-shaped recovery** (+102% from 2025 H1 low of CNY 95,000), Trend: "Rising"
> - [[Market/Battery_Raw_Materials]] (LME): $56,000/MT — spiked **+133%** from 2025 H2 trough ($24,000), Trend: "Rising (DRC supply constraints)"
> - [[Technology/LFP_46100_Cell]] pack: $80/kWh — declined **43%** from 2022 peak ($140/kWh), Trend: "Declining"
> - [[Technology/Cobalt Supply Risk and LFP Pivot]] pack: $100/kWh — declined **38%** from 2022 peak ($160/kWh), Trend: "Declining but slower than LFP"
> - Global cell mfg capacity: **4,200 GWh** with **~900 GWh excess** (21% overhang)

# Supply Chain Risk

**Criticality:** 🔴 HIGH

---

## The Battery Problem

Batteries = **35% of Ola S1 Pro BOM** — the single largest cost component. Cells are currently **imported from foreign suppliers** with **no long-term contracts exceeding 1 year**.

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Ola's cell cost trajectory: **$135/kWh (Mar-2024, pilot)** → $115/kWh (Mar-2025, commercial NMC) → $100/kWh (Dec-2025, record NMC production) → **$80/kWh (Apr-2026, LFP 46100)**. The [[BOM]] reduction went from **0% (Mar-2024)** to **30% (Apr-2026, LFP)**, targeting **40% by Mar-2028**. However, Ola's cost trajectory has consistently **TRACKED (not beaten)** import market prices — the gap narrowed from +$35/kWh to parity entirely through the [[Technology/Cobalt Supply Risk and LFP Pivot]]→[[Technology/LFP_46100_Cell]] pivot, not manufacturing efficiency.

---

## Key Vulnerabilities

### 1. Cell Supply Concentration
- Limited number of global Li-ion cell manufacturers
- Geopolitical concentration ([[China]] dominates processing — 4,200 GWh global capacity)
- No guaranteed supply at scale as global [[EV]] demand grows
- Global overcapacity (**900 GWh excess**) means China can flood market at any time

### 2. Raw Material Exposure
| Material | Risk | 2026 Price | Trend |
|----------|------|-----------|-------|
| [[Market/Battery_Raw_Materials]] | Price volatility, concentrated supply | CNY 192,000/T | **V-shaped recovery (+102%)** |
| [[Market/Battery_Raw_Materials]] | [[DRC]] supply constraints, child labor | $56,000/MT | **Spiking (+133%), supply-driven** |
| [[Nickel]] | Price spikes, Russia supply risk | — | Volatile |
| [[Manganese]] | Supply chain concentration | — | Stable |
| [[Graphite]] | China dominates processing | — | Stable |

### 3. Semiconductor Dependency
- 2022: Global chip shortage caused electronic child part delays
- Production delayed due to component unavailability
- Auto industry increasingly dependent on chips

### 4. Cost Volatility
- Cost of materials = **89.6% of revenue** (Q1 FY24)
- Even small raw material price movements significantly impact already-negative margins
- [[Market/Battery_Raw_Materials]] at $56,000/MT (+133%) validates the [[Technology/LFP_46100_Cell]] pivot — but [[Lithium carbonate]] recovery adds cost pressure to LFP too

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv
> The supply chain transformation shows in financial outcomes. When Ola relied on imported cells ($130/kWh, Q1-Q3 FY25), gross margins were **12-18%** and EBITDA was **-8% to -22%**. Once in-house NMC cells came online ($100/kWh, Q3 FY26), gross margins hit **34.3%** and EBITDA turned **positive (+2.1%)** for the first time. The LFP pivot ($80/kWh) pushed gross margin to **36%** with **+4.5% EBITDA** — proving vertical integration works.

---

## Mitigation Progress

| Initiative | Status | Details |
|------------|--------|---------|
| [[Strategy/Backward Integration|In-house cell manufacturing]] | **Operational** (Phase 1a) | 6.0 GWh at Apr-2026, LFP 46100 cells at $80/kWh |
| Co-located suppliers in EV hub | Being developed | — |
| Long-term supply agreements | Under evaluation | — |
| Raw material source ownership | Under assessment | — |
| [[B2B Battery Supply]] | **Stated intent, zero confirmed orders** | Q4 FY26 mgmt focus but no revenue evidenced |

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv (Hidden Connection)
> **The Supply Chain Paradox**: Global overcapacity (900 GWh excess) simultaneously (a) makes cell prices cheap — good for buyers, (b) makes Ola's Gigafactory economics harder to justify — import is at $80/kWh, same as Ola's cost, (c) makes B2B cell sales unviable — the CSV explicitly states overcapacity is "bad if selling B2B." Ola's Gigafactory must be a VERTICAL INTEGRATION play (cells → vehicles → margin) not a cell manufacturing business. The 30% BOM reduction enables vehicle-level margin even if cell-level margin is zero.

---

## Related
- [[Strategy/Backward Integration]]
- [[Risks/Gigafactory Execution]]
- [[Opportunities/Cell Manufacturing]]
- [[Financial/Unit Economics]]

> [!data] Source: market/SERVICE_NETWORK_COMPARISON.csv
> Ola's parts availability at 60-75% is catastrophic versus the 95% industry standard maintained by Bajaj, TVS, and Hero. This means 1 in 3 Ola service visits cannot be completed due to parts unavailability, directly causing the 7-15 day turnaround times.
> Causal chain: Without vertically integrated parts distribution, Ola depends on third-party suppliers for spares. Legacy players with 30-40 year parts supply chains maintain 95% availability through established vendor relationships
> Cells: Row 6 (Ola): Parts_Availability_Pct = 60-75, Avg_Turnaround_Days = 7-15; Row 2-4 (Hero/Bajaj/TVS): Parts_Availability = 95, Avg_Turnaround = 1-2

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Cobalt price spike validates LFP pivot: Cobalt (LME) surged from $24,000/MT (2025 H2) to $56,000/MT (2026 Current) - a 133% increase driven by DRC supply constraints. This makes NMC cells structurally more expensive and vindicates Ola's decision to pivot from NMC 4680 to LFP 46100 chemistry.
> Causal chain: DRC supply constraints -> cobalt price spike -> NMC uneconomical -> Ola LFP pivot validated -> gigafactory chemistry decision proven correct -> competitors on NMC face cost pressure
> Cells: Row 3 2025_H2=24000, 2026_Current=56000, Trend='Rising (DRC supply constraints)'

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Lithium carbonate (China) shows a V-shaped recovery: CNY 590,000/T peak (2022) -> crashed to CNY 95,000 (2025 H1) -> rebounded to CNY 192,000 (2026 Current) - a 102% H1-to-Current increase. This directly raises Ola's input costs for both NMC and LFP cells.
> Causal chain: Lithium supply deficit -> price recovery -> cell input cost increase -> Ola's in-house production hedges partially -> gigafactory becomes more valuable as hedge against commodity volatility
> Cells: Row 2 2022_Peak=590000, 2025_H1=95000, 2026_Current=192000, Trend='Rising (V-shaped recovery)'

> [!data] Source: ola_ipo/risk_factors.txt
> Cells imported from foreign suppliers with NO long-term contracts exceeding one year with cell supplier as of DRHP date. Batteries constituted approximately 35% of the BOM for Ola S1 Pro scooters as of September 30, 2023.
> Context: Page 33-34, Risk Factor 2

> [!data] Source: ola_ipo/risk_factors.txt
> Cost of materials consumed as percentage of total expenses: 76.23% (Q1 FY24), 64.50% (FY23), 49.83% (FY22). This ratio was rapidly increasing, indicating Ola had limited ability to reduce material costs through vertical integration at that stage.
> Context: Page 33, Risk Factor 2

> [!data] Source: ola_ipo/risk_factors.txt
> Calendar 2022: Ola faced delays in delivery of electronic child parts due to global shortage in the auto industry, causing production delays. Pre-IPO risk that materialized: this foreshadowed persistent supply chain vulnerability.
> Context: Page 33, Risk Factor 2

> [!data] Source: ola_ipo/risk_factors.txt
> Lead time of 3-6 months from purchase order submission for raw materials/EV components until delivery. Suppliers may not provide adequate materials as Ola scales up operations.
> Context: Page 36, Risk Factor 6

> [!data] Source: ola_ipo/risk_factors.txt
> Raw material supply risks for cell manufacturing: lithium, nickel, cobalt, manganese oxides, aluminium, graphite, copper. Growth in EV popularity without significant expansion in cell production capacity could result in shortages and price increases.
> Context: Page 34, Risk Factor 2

> [!data] Source: ola_ipo/industry_overview_business.txt
> Indian OEMs can localize 50-60% of cell BOM cost. Raw materials like graphite, manganese, and aluminum are abundantly present in India. However lithium, nickel, and cobalt are NOT available in India, creating structural import dependence.
> Context: Page 155-156, Industry Overview Section C

> [!data] Source: ola_ipo/industry_overview_business.txt
> ~70% of cell cost comes from raw materials. Cell constitutes 80-85% of battery pack cost, and battery pack is 35-40% of E2W vehicle BOM cost.
> Context: Page 154, Industry Overview

> [!data] Source: ola_ipo/risk_factors.txt
> Ola imports EV components from China. Strain in trade relations between India and China could adversely impact supply of such components.
> Context: Page 62, Risk Factor 61

---

## Connections

### Causes
- Battery is **35% of BOM** — single largest cost, making cell supply the critical dependency
- Cells were imported with **no contracts > 1 year** — no price or supply security
- China dominates global cell processing (4,200 GWh capacity) creating geopolitical concentration risk
- [[Market/Battery_Raw_Materials]] and [[Market/Battery_Raw_Materials]] prices are volatile — lithium recovering (+102%), cobalt spiking (+133%)
- [[Semiconductor]] dependency adds electronic component risk

### Effects
- **[[Technology/Gigafactory_Updates]] built as mitigation** — Rs 4,000+ Cr capex, 6.0 GWh capacity, $80/kWh LFP cells
- **Only ~16% capacity utilization** — 6 GWh built, ~1 GWh consumed; ~5 GWh idle = stranded asset risk
- **[[BOM reduction]] achieved**: 30% by Apr-2026 — enabled gross margin expansion from 12% to 36%
- **Cobalt spike validated [[LFP pivot]]** — $56,000/MT (+133%) would have crushed NMC margins
- **Global LFP price floor** at $80/kWh — Ola cannot achieve cost advantage vs Chinese manufacturers

### Amplifiers
- **Global overcapacity (900 GWh)**: Chinese manufacturers have massive scale advantage, can price aggressively in export markets
- **LFP uses MORE lithium than NMC**: as lithium recovers ($95K→$192K CNY/T), LFP's cost advantage vs NMC narrows
- **Ola's B2B pivot competes against CATL/BYD** with decades of scale advantage and $80/kWh costs
- **PLI disbursement lagging**: scheme pays after production milestones, Ola front-loaded ~Rs 4,000 Cr capex

### Linked Nodes
- [[Strategy/Backward Integration]] — Primary mitigation strategy
- [[Risks/Gigafactory Execution]] — Construction and milestone risk
- [[Opportunities/Cell Manufacturing]] — Long-term opportunity from vertical integration
- [[Financial/Unit Economics]] — Cell cost impact on per-unit profitability
- [[Technology/4680 Cell Tech]] — Technology risk of unproven yield at scale
- [[Financial/Margin_Paradox]] — How cell cost reduction enabled margin improvement despite revenue decline
