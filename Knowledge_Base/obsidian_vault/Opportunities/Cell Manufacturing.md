> [!insight] The Single Most Important Thing: Ola's NMC→LFP pivot was validated by the 2.33x cobalt price spike ($24,000 → $56,000/MT) from DRC supply constraints. LFP 46100 cells at $80/kWh achieve cost parity with Chinese imports but still face a critical problem: the 6 GWh Gigafactory operates at ~16% utilization because Ola's scooter sales have collapsed 64% from peak. Without B2B orders (none confirmed as of May 2026), the ~4,000 Cr capex risks becoming a stranded asset.

> [!data] Source: GIGAFACTORY_MILESTONES.csv — Capacity: 0 (Mar-2024) → 6.0 GWh (Apr-2026, LFP 46100). Battery cost: $135/kWh (pilot) → $80/kWh (LFP). BOM reduction: 0% → 30%. Phase 2 target: 12 GWh (Jul-2027), Full build-out: 20 GWh (Mar-2028).

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv — Global cell capacity: 4,200 GWh with ~900 GWh excess (21% overhang). LFP pack price: $140/kWh (2022 peak) → $80/kWh (2026 current, -43%). NMC pack: $160→$100/kWh (-37.5%). Cobalt: $24,000 (2025 H2) → $56,000 (2026, +133% from DRC constraints).

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv — Gross margin trajectory: 18% (Q1 FY25, imported $130/kWh) → 12% trough (Q4 FY25, mixed $125/kWh) → 36% (Q4 FY26, in-house NMC+LFP $85/kWh). Cell cost transition: $130 (imported) → $110 (in-house NMC) → $85 (in-house mixed) → $80 (LFP).

> [!data] Source: CASH_FLOW_AND_DERIVED.csv (chain_giga.json) — Cumulative investing outflows FY22-FY25: -Rs 5,639 Cr. Gigafactory funded via Rs 5,429 Cr IPO (FY25) + Rs 1,910 Cr SBI term loan. PLI ACC disbursement "lagging" behind capex spend.

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv — Q4 FY26 management focus: "B2B Battery Supply & Margin Defense". Ola Shakti (stationary storage) and OEM cell supply announced but zero confirmed orders or revenue. 100% of Q4 FY26 revenue remains from E2W sales.

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv — ACC PLI (Batteries): Rs 18,100 Cr outlay (2021-2030), min 50 GWh capacity bid, 50% DVA requirement. Status: Active. Impact on Ola: "Ola has allocation; disbursement lagging."

# Cell Manufacturing Opportunity

**Potential Impact:** 🔴 HIGH
**Timeline:** Medium-term (2-4 years)

---

## The Opportunity

India currently **imports almost all Li-ion cells**. The PLI ACC Battery Scheme aims to build **50 GWh of domestic cell manufacturing capacity**. Ola Electric has been awarded **20 GWh — the largest allocation to any single recipient**.

---

## Strategic Significance

### 1. Cost Reduction
- Battery = **35% of BOM** for Ola S1 Pro
- In-house manufacturing eliminates supplier margins, import duties, logistics costs
- Potential to reduce vehicle cost by 15-25%

### 2. Supply Security
- Currently no long-term cell contracts >1 year
- Global lithium/cobalt supply concentrated in few countries
- Domestic manufacturing reduces geopolitical and supply disruption risk

### 3. New Revenue Stream
- Supply cells to other EV OEMs
- Energy storage systems (grid-scale, commercial, residential)
- Export potential for cells

### 4. PLI Cash Incentives
- Quarterly cash incentives based on value addition % and actual cell sales
- 5-year incentive period from Gigafactory commissioning
- 20 GWh total committed capacity

---

## Capacity Ramp-up Plan

| Year | Capacity Target | Penalty for Missing |
|------|----------------|---------------------|
| Year 1 | 1 GWh | 2x shortfall deduction from subsidy |
| Year 2 | 5 GWh | 2x shortfall deduction |
| Year 3 | 10 GWh | 2x shortfall deduction |
| Year 4 | 20 GWh | 2x shortfall deduction |

---

## Prerequisites for Success
- [[Technology/4680 Cell Tech|4680 cell technology]] must pass testing and achieve commercial viability
- [[Risks/Gigafactory Execution|Gigafactory construction]] on schedule
- Raw material supply agreements for lithium, nickel, cobalt secured
- Manufacturing yield improvement (low initial yield is expected)

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Cobalt price spike validates LFP pivot: Cobalt (LME) surged from $24,000/MT (2025 H2) to $56,000/MT (2026 Current) — a 133% increase driven by DRC supply constraints. This makes NMC cells structurally more expensive and vindicates Ola's decision to pivot from NMC 4680 to LFP 46100 chemistry.
> Causal chain: DRC supply constraints→cobalt price spike→NMC uneconomical→Ola LFP pivot validated→gigafactory chemistry decision proven correct→competitors on NMC face cost pressure
> Cells: Row 3 2025_H2=24000, 2026_Current=56000, Trend='Rising (DRC supply constraints)'

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Lithium carbonate (China) shows a V-shaped recovery: CNY 590,000/T peak (2022) → crashed to CNY 95,000 (2025 H1) → rebounded to CNY 192,000 (2026 Current) — a 102% H1-to-Current increase. This directly raises Ola's input costs for both NMC and LFP cells.
> Causal chain: Lithium supply deficit→price recovery→cell input cost increase→Ola's in-house production hedges partially→gigafactory becomes more valuable as hedge against commodity volatility
> Cells: Row 2 2022_Peak=590000, 2025_H1=95000, 2026_Current=192000, Trend='Rising (V-shaped recovery)'

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Separator film prices declining from $2.5/sqm (2022) to $1.7/sqm (2026) (−32%) and electrolyte from $12/kg (2022) to $5.2/kg (2026) (−57%) — both driven by overcapacity. These falling input costs benefit all cell manufacturers including Ola's Gigafactory, partially offsetting the lithium and cobalt price increases.
> Causal chain: Global overcapacity in battery components→falling separator & electrolyte prices→input cost relief for cell manufacturers→partial hedge against lithium/cobalt increases→benefits Ola Gigafactory
> Cells: Row 6 2022=2.5, 2026=1.7; Row 7 2022=12, 2026=5.2

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Nickel (LME) stable at $18,000/MT (2026) after crashing from $48,000 peak (2022). Nickel stability is neutral for NMC cell costs but has no impact on LFP (which contains no nickel). Ola's LFP pivot reduces nickel exposure, a strategic de-risking move.
> Causal chain: Nickel price stability→NMC costs predictable→but Ola pivoting to LFP→eliminates nickel dependency→commodity risk reduction
> Cells: Row 4 2022_Peak=48000, 2026_Current=18000

> [!data] Source: Ola_after_ipo.txt
> LFP chemistry advantages: 30-40% cheaper raw materials (no cobalt/nickel), better thermal stability for 45C+ Indian summers, 3,000+ cycles vs 1,500 for NMC. Trade-off: ~15% lower energy density (acceptable for 100-150km scooter range).
> Causal chain: The LFP pivot addresses both cost (30-40% cheaper raw materials) and Indian climate suitability (thermal stability), making it the right chemistry for the Indian mass market.
> Cells: Section 4: LFP pivot rationale

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv + GIGAFACTORY_MILESTONES.csv
> Global cell manufacturing capacity: 1,500 GWh (2022) → 4,200 GWh (2026) — 180% expansion in 4 years, creating ~900 GWh of excess capacity in 2026. This massive Chinese-driven overcapacity suppresses global cell prices and challenges Ola's Gigafactory thesis — why build cells when you can buy at $80/kWh from CATL/BYD?
> Causal chain: Chinese overcapacity→global cell price collapse→makes buying cheaper than building→Ola must achieve cost parity→gigafactory only viable at 12+ GWh scale→race against time
> Cells: Row 8 2022=1500, 2026=4200, Notes='Massive overcapacity (~900 GWh excess)'

---

## Connections

### Causes
- **[[Technology/Gigafactory_Updates|NMC→LFP pivot driven by cobalt price dynamics]]** — DRC supply constraints pushed cobalt to $56,000/MT (+133%); Impact column states "validates LFP pivot"
- **[[Risks/Gigafactory Execution|Gigafactory execution risk]]** — 6 GWh built but ~16% utilization; PLI milestones (1→5→10→20 GWh) have 2x shortfall penalties
- **PLI ACC disbursement lag** — "Disbursement lagging" behind Ola's capex spend (cumulative -Rs 5,639 Cr); forced Rs 5,429 Cr IPO + Rs 5,684 Cr peak borrowings

### Effects
- **[[Opportunities/Export Markets|Export imperative for excess capacity]]** — 6 GWh factory, ~1 GWh used internally; ~5 GWh idle capacity requires B2B or export markets
- **B2B pivot (Ola Shakti + OEM cell supply)** — Announced Q4 FY26 strategy; ZERO confirmed orders as of May-2026
- **Global overcapacity paradox** — Impact column: "good for Ola if buying; bad if selling B2B" — Ola is trying to do both simultaneously

### Amplifiers
- **Make-vs-buy paradox** — Ola's cell cost has TRACKED (not beaten) market import price. At $80/kWh parity, fixed costs from 6 GWh capacity make effective cost above market
- **Lithium price V-shaped recovery** — CNY 95,000 (2025 H1) → CNY 192,000 (2026, +102%); LFP uses MORE lithium per kWh than NMC, creating input cost headwind
- **Chinese pricing pressure** — 4,200 GWh global capacity, ~900 GWh excess enables aggressive pricing from CATL/BYD

### Linked Nodes
- [[Technology/4680 Cell Tech]] — Original NMC 4680 plan, now pivoted to LFP 46100
- [[Technology/Gigafactory_Updates]] — Full facility timeline and financial impact
- [[Strategy/Backward Integration]] — Vertical integration thesis driving cell manufacturing
- [[Opportunities/PLI Dual Beneficiary]] — Dual PLI scheme advantage underpinning economics
- [[Companies/Ola Electric]] — Primary beneficiary of cell manufacturing
- [[Risks/Gigafactory Execution]] — Primary risk factor

## Related
- [[Risks/Gigafactory Execution]]
- [[Strategy/Backward Integration]]
- [[Technology/4680 Cell Tech]]
- [[Opportunities/PLI Dual Beneficiary]]
- [[Market/EV Policy]]
