# Global Battery Supply Chain & Gigafactory Economics

> [!insight] The Single Most Important Thing: Global cell overcapacity (900 GWh excess on 4,200 GWh capacity) simultaneously (a) crashed LFP prices to $80/kWh (benefiting Ola as buyer), (b) destroyed the make-vs-buy case for the Gigafactory (Ola only reached parity in Apr-2026 after 2 years above market), and (c) makes the B2B cell pivot difficult (Ola would compete against Chinese giants with 900 GWh of excess supply). The paradox: the same market condition that justified domestic manufacturing (supply security) makes it uneconomic. Ola must export VEHICLES (not cells) to capture value via vertical integration.

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv — Global cell mfg capacity: 1,500 GWh (2022) to 4,200 GWh (2026). Excess supply: ~900 GWh. Impact: "Pressure on cell prices; good for Ola if buying; bad if selling B2B."

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv — LFP pack price: $140/kWh (2022 peak) to $80/kWh (2026 current) — 43% decline. NMC pack: $160/kWh to $100/kWh — 38% decline.

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv — Cobalt: $24,000/MT (2025 H2) to $56,000/MT (2026 current) — 133% spike. DRC supply constraints. Impact: "NMC cells more expensive; validates LFP pivot."

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv — Lithium carbonate: CNY 95,000/T (2025 H1) to CNY 192,000/T (2026 current) — 102% V-shaped recovery. Impact: "Higher input costs; but in-house LFP partially hedges."

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv — Ola Gigafactory: 6.0 GWh (Apr-2026), LFP 46100 at $80/kWh, 30% BOM reduction. Phase 2 target: 12 GWh (Jul-2027). Full build-out: 20 GWh (Mar-2028).

> [!data] Source: GIGAFACTORY_MILESTONES.csv — Ola cell cost trajectory: $135/kWh (Mar-2024) to $80/kWh (Apr-2026). The gap vs market narrowed from +$35/kWh to $0 (parity) — entirely via chemistry pivot, not manufacturing efficiency.

---

## Commodity Price Trends (2022-2026)

### Lithium Carbonate (The Key Input)
| Period | Price (CNY/T) | Trend | Driver |
|--------|--------------|-------|--------|
| Late 2022 | ~590,000 | **Peak** | Supply shortage + EV demand boom |
| 2023 Avg | ~180,000 | Crash (-70%) | Oversupply; demand miss |
| 2024 Avg | ~110,000 | Continued decline | Inventory destocking |
| 2025 H1 | ~95,000 | **Bottom** | Producer curtailments |
| 2025 H2 | ~135,000 | V-shaped recovery (+23% in Q4) | Supply tightening |
| May 2026 | ~192,000 | Elevated | Sustained demand; controlled output |

### Cobalt (NMC Chemistry Dependent)
| Period | Price (USD/MT) | Trend |
|--------|---------------|-------|
| 2022 Peak | ~82,000 | Peak |
| 2023-2025 | ~24,000-33,000 | Stagnation |
| May 2026 | ~55,000-56,000 | **Bullish** (DRC export quotas + supply disruption) |

### Why This Validates Ola's LFP Pivot
- Cobalt prices doubling in 2026 makes NMC chemistry increasingly expensive
- LFP uses ZERO cobalt, ZERO nickel — immune to these price spikes
- Lithium is still needed in LFP, but at lower concentration per kWh

## Global Cell Manufacturing Overcapacity
- **Estimated global overcapacity:** ~900 GWh (as of early 2026)
- **Impact:** Margin compression for Tier 2/3 cell makers
- **Strategic pivot:** GM, Ford, LG pivoting excess capacity to **grid-scale energy storage (BESS)** — same pivot Ola is attempting with "Ola Shakti"
- **AI data center demand:** New demand driver for battery storage from tech companies building data centers

## Cell Price Trajectory (Pack Level)
| Chemistry | 2022 | 2023 | 2024 | 2025 | 2026 | Trend |
|-----------|------|------|------|------|------|-------|
| LFP Pack ($/kWh) | $140 | $120 | $100 | $87 | **$80** | Declining steadily |
| NMC Pack ($/kWh) | $160 | $140 | $120 | $107 | **$100** | Declining but slower |

### The Make-vs-Buy Question for Ola's Gigafactory
If global LFP cell prices are at $80/kWh, Ola's Gigafactory must produce cells at **<$80/kWh** to justify the capital expenditure. With 6 GWh capacity and only ~16% utilization for scooters, the economics depend heavily on:
1. Achieving scale (>50% utilization via B2B)
2. Maintaining cost advantage over imports
3. PLI scheme subsidy bridging any cost gap

> [!data] Source: competitor_insights.json / ola/PRODUCT_MIX_QUARTERLY.csv
> Ola's gross margin improved dramatically from 12% (Q4 FY25) to 36% (Q4 FY26), driven by in-house NMC 4680 cell production reducing battery cost from $130/kWh to $85/kWh. However, this was offset by ASP declining from Rs 135,000 to Rs 90,000 as product mix shifted to low-end S1 X.
> Causal chain: In-house cell production cuts battery cost by 35% ($130 to $85/kWh), directly boosting gross margins, but the service crisis forced Ola to discount and sell more low-end S1 X models, destroying ASP
> Cells: Row 5 Gross_Margin=12, Row 9 Gross_Margin=36; Row 5 Battery_Cost=125, Row 9 Battery_Cost=85; Row 5 ASP=98000, Row 2 ASP=135000; Row 5 S1_X_Pct=60, Row 8 S1_X_Pct=75

> [!data] Source: competitor_insights.json / ola/PRODUCT_MIX_QUARTERLY.csv
> Ola's battery cost reduced from $130/kWh (imported cells, FY25) to $85/kWh (in-house NMC 4680, Q4 FY26) — a 35% reduction directly enabling gross margin expansion from 12% to 36%. This is Ola's most significant competitive advantage.
> Causal chain: In-house cell manufacturing at the Gigafactory gives Ola a structural cost advantage that competitors buying cells from LG/CATL cannot match, potentially enabling profitable pricing below competitor cost base once volumes recover
> Cells: Row 2 (Q1_FY25): Battery_Cost=130, Cell_Source=Imported; Row 9 (Q4_FY26): Battery_Cost=85, Cell_Source='Mixed (NMC + LFP 46100 pilot)'; Row 2 Gross_Margin=18, Row 9 Gross_Margin=36

> [!data] Source: market_insights.json / PRODUCT_MIX_QUARTERLY.csv + GIGAFACTORY_MILESTONES.csv
> Ola replaced imported cells with in-house production progressively: $130/kWh imported (Q1 FY25) → $110/kWh in-house NMC (Q1 FY26) → $85/kWh NMC+LFP (Q4 FY26). This 35% cost reduction directly enabled gross margin improvement from 18% (Q1 FY25) to 36% (Q4 FY26) despite ASP declining from Rs 135,000 to Rs 90,000.
> Causal chain: In-house cell production→BOM reduction→gross margin expansion→EBITDA breakeven→financial survival despite volume collapse
> Cells: PRODUCT_MIX Row 2 Battery_Cost_Per_kWh_USD=130 (Q1 FY25); Row 8 Battery_Cost_Per_kWh_USD=85 (Q4 FY26); PRODUCT_MIX Row 2 Gross_Margin_Pct=18; Row 9 Gross_Margin_Pct=36; GIGAFACTORY Row 8 Battery_Cost_Per_kWh_USD=100 (Dec-25); Row 9 Battery_Cost_Per_kWh_USD=90 (Mar-26); Row 10 Battery_Cost_Per_kWh_USD=80 (Apr-26)

> [!data] Source: market_insights.json / GIGAFACTORY_MILESTONES.csv
> Ola's Gigafactory progressed from 0 GWh (Mar-2024) to 6 GWh (Apr-2026) in 24 months. Cells produced went from ~2,000 pilot cells (Sep-2024) to ~100,000 (Mar-2026) — a 50x scale-up. BOM cost reduced 28% from initial pilot to Mar-2026, with target of 40% reduction by full build-out (Mar-2028).
> Causal chain: Gigafactory construction→pilot production→commercial ramp→cost reduction→margin improvement→strategic asset
> Cells: Row 2 Capacity_GWh=0 (Mar-2024); Row 9 Capacity_GWh=5.9 (Mar-2026); Row 3 Cells_Produced=~2000 (Sep-2024); Row 9 Cells_Produced=~100000 (Mar-2026); Row 9 BOM_Reduction_Pct=28

> [!data] Source: market_insights.json / GIGAFACTORY_MILESTONES.csv
> Ola's LFP 46100 cell announced Apr-2026 at $80/kWh — exactly at global LFP pack price parity. This is the critical validation point: at $80/kWh, Ola can compete with Chinese cell imports on cost. Phase 2 target (Jul-2027): $75/kWh at 12 GWh. Full build-out (Mar-2028): $70/kWh at 20 GWh, below global average.
> Causal chain: LFP chemistry pivot→cost parity with global prices→scale targets→below-global-average cost→Gigafactory thesis validated
> Cells: Row 10 Chemistry=LFP 46100, Battery_Cost_Per_kWh_USD=80 (Apr-2026); Row 11 Capacity_GWh=12.0, Battery_Cost_Per_kWh_USD=75 (Jul-2027); Row 12 Capacity_GWh=20.0, Battery_Cost_Per_kWh_USD=70 (Mar-2028)

> [!data] Source: market_insights.json / BATTERY_SUPPLY_CHAIN.csv
> Cobalt price spike validates LFP pivot: Cobalt (LME) surged from $24,000/MT (2025 H2) to $56,000/MT (2026 Current) — a 133% increase driven by DRC supply constraints. This makes NMC cells structurally more expensive and vindicates Ola's decision to pivot from NMC 4680 to LFP 46100 chemistry.
> Causal chain: DRC supply constraints→cobalt price spike→NMC uneconomical→Ola LFP pivot validated→gigafactory chemistry decision proven correct→competitors on NMC face cost pressure
> Cells: Row 3 2025_H2=24000, 2026_Current=56000, Trend='Rising (DRC supply constraints)'

> [!data] Source: market_insights.json / BATTERY_SUPPLY_CHAIN.csv
> Lithium carbonate (China) shows a V-shaped recovery: CNY 590,000/T peak (2022) → crashed to CNY 95,000 (2025 H1) → rebounded to CNY 192,000 (2026 Current) — a 102% H1-to-Current increase. This directly raises Ola's input costs for both NMC and LFP cells.
> Causal chain: Lithium supply deficit→price recovery→cell input cost increase→Ola's in-house production hedges partially→gigafactory becomes more valuable as hedge against commodity volatility
> Cells: Row 2 2022_Peak=590000, 2025_H1=95000, 2026_Current=192000, Trend='Rising (V-shaped recovery)'

> [!data] Source: market_insights.json / BATTERY_SUPPLY_CHAIN.csv
> Global cell manufacturing capacity: 1,500 GWh (2022) → 4,200 GWh (2026) — 180% expansion in 4 years, creating ~900 GWh of excess capacity in 2026. This massive Chinese-driven overcapacity suppresses global cell prices and challenges Ola's Gigafactory thesis — why build cells when you can buy at $80/kWh from CATL/BYD?
> Causal chain: Chinese overcapacity→global cell price collapse→makes buying cheaper than building→Ola must achieve cost parity→gigafactory only viable at 12+ GWh scale→race against time
> Cells: Row 8 2022=1500, 2026=4200, Notes='Massive overcapacity (~900 GWh excess)'

> [!data] Source: market_insights.json / BATTERY_SUPPLY_CHAIN.csv
> LFP pack price declined from $140/kWh (2022) to $80/kWh (2026) — a 43% drop in 4 years. NMC pack price declined from $160/kWh (2022) to $100/kWh (2026) — a 37.5% drop. LFP is declining faster and is now 20% cheaper than NMC, confirming the industry-wide shift to LFP for cost-sensitive E2W applications.
> Causal chain: LFP technology maturation+overcapacity→faster price decline→LFP becomes dominant chemistry→Ola's LFP pivot aligns with industry trend→NMC becomes niche premium chemistry
> Cells: Row 9 2022=140, 2026=80; Row 10 2022=160, 2026=100

> [!data] Source: market_insights.json / BATTERY_SUPPLY_CHAIN.csv + GIGAFACTORY_MILESTONES.csv
> Ola's Gigafactory make-vs-buy breakeven: At $80/kWh global LFP pack price (2026) and Ola's $85/kWh in-house cost, Ola is currently ~6% above global parity. The Gigafactory only becomes economically justified at Phase 2 (12 GWh, $75/kWh, Jul-2027) when Ola undercuts global prices. Until then, buying from Chinese suppliers is cheaper.
> Causal chain: China overcapacity→global LFP at $80→Ola at $85→negative spread currently→scale needed for positive spread→gigafactory viable at 12+ GWh→time pressure
> Cells: BATTERY Row 9 2026=80 (LFP pack global); GIGAFACTORY Row 10 Battery_Cost_Per_kWh_USD=80 (LFP 46100 Apr-2026); GIGAFACTORY Row 11 Battery_Cost_Per_kWh_USD=75 (Phase 2 Jul-2027)

> [!data] Source: market_insights.json / BATTERY_SUPPLY_CHAIN.csv
> Separator film prices declining from $2.5/sqm (2022) to $1.7/sqm (2026) (−32%) and electrolyte from $12/kg (2022) to $5.2/kg (2026) (−57%) — both driven by overcapacity. These falling input costs benefit all cell manufacturers including Ola's Gigafactory, partially offsetting the lithium and cobalt price increases.
> Causal chain: Global overcapacity in battery components→falling separator & electrolyte prices→input cost relief for cell manufacturers→partial hedge against lithium/cobalt increases→benefits Ola Gigafactory
> Cells: Row 6 2022=2.5, 2026=1.7; Row 7 2022=12, 2026=5.2

> [!data] Source: market_insights.json / BATTERY_SUPPLY_CHAIN.csv
> Nickel (LME) stable at $18,000/MT (2026) after crashing from $48,000 peak (2022). Nickel stability is neutral for NMC cell costs but has no impact on LFP (which contains no nickel). Ola's LFP pivot reduces nickel exposure, a strategic de-risking move.
> Causal chain: Nickel price stability→NMC costs predictable→but Ola pivoting to LFP→eliminates nickel dependency→commodity risk reduction
> Cells: Row 4 2022_Peak=48000, 2026_Current=18000

> [!data] Source: ola_insights.json / PRODUCT_MIX_QUARTERLY.csv
> Gross Margin trajectory: 18% (Q1 FY25) -> 16% -> 14% -> 12% (Q4 FY25 - trough due to imported cells) -> 22% (Q1 FY26, Gigafactory begins) -> 28% -> 34.3% (Q3 FY26 peak) -> 36% (Q4 FY26). Improvement from 12% to 36% in 4 quarters = 3x improvement.
> Causal chain: In-house NMC 4680 cells replaced imported cells starting Q1 FY26, reducing battery cost from $130/kWh to $85/kWh, directly driving gross margin expansion
> Cells: Rows 2-9: Gross_Margin_Pct

> [!data] Source: ola_insights.json / PRODUCT_MIX_QUARTERLY.csv, GIGAFACTORY_MILESTONES.csv
> Battery cost per kWh: $130 (Q1-Q3 FY25, imported) -> $125 (Q4 FY25, mixed import+NMC pilot) -> $110 (Q1 FY26, in-house NMC) -> $105 (Q2) -> $100 (Q3) -> $85 (Q4 FY26, NMC+LFP pilot). Cumulative 35% reduction from $130 to $85/kWh.
> Causal chain: Each Gigafactory production milestone reduced battery cost. The transition from imported cells ($130) to in-house NMC ($110) to NMC+LFP pilot ($85) drove the 35% reduction.
> Cells: PRODUCT_MIX: Battery_Cost_Per_kWh_USD rows 2-9. GIGAFACTORY: Col F (Battery_Cost_Per_kWh_USD)

> [!data] Source: ola_insights.json / PRODUCT_MIX_QUARTERLY.csv
> Cell source evolution: Imported (Q1-Q3 FY25) -> Mixed Import+NMC pilot (Q4 FY25) -> In-house NMC 4680 (Q1-Q3 FY26) -> Mixed NMC+LFP 46100 pilot (Q4 FY26). This mirrors the Gigafactory production ramp.
> Causal chain: The shift from imported cells to in-house NMC was always the plan; the addition of LFP 46100 was a strategic pivot announced in Apr 2026.
> Cells: Rows 2-9: Cell_Source

> [!data] Source: ola_insights.json / GIGAFACTORY_MILESTONES.csv
> Gigafactory timeline: Mar-2024 (DRHP filing - planned, 0 GWh) -> Sep-2024 (first pilot cells, 0.5 GWh, ~2,000 cells) -> Dec-2024 (pilot line operational, 1 GWh, ~8,000 cells) -> Mar-2025 (commercial production begins, 2 GWh, ~10,000 cells) -> Jun-2025 (production ramp, 2.5 GWh, ~15,000 cells).
> Causal chain: The Gigafactory progressed from DRHP plan to commercial production in exactly 12 months (Mar 2024 to Mar 2025), in line with IPO timeline.
> Cells: Rows 2-6: Date, Milestone, Capacity_GWh, Cells_Produced

> [!data] Source: ola_insights.json / GIGAFACTORY_MILESTONES.csv
> Gigafactory Q2 FY26: 2.5 GWh capacity, 36,000 cells produced, 20% BOM reduction. Q3 FY26: 2.5 GWh capacity, 72,418 cells produced (2.01x QoQ), 25% BOM reduction — the 'record production quarter'.
> Causal chain: Cell production doubled QoQ from 36,000 to 72,418, demonstrating the production learning curve and capacity utilization improvement.
> Cells: Rows 7-8: Sep-2025 and Dec-2025 entries

> [!data] Source: ola_insights.json / GIGAFACTORY_MILESTONES.csv
> FY26 end (Mar-2026): Capacity expanded to 5.9 GWh, ~100,000 cells produced cumulatively, 28% BOM reduction, battery cost down to $90/kWh. LFP 46100 cells entered pilot production.
> Causal chain: FY26-end milestones show the parallel path: scaling NMC capacity while initiating LFP pilot for future chemistry shift.
> Cells: Row 9: Mar-2026 entry

> [!data] Source: ola_insights.json / GIGAFACTORY_MILESTONES.csv
> LFP 46100 cell announced Apr-2026: 6.0 GWh capacity, 30% BOM reduction, $80/kWh battery cost. Future targets: Jul-2027: 12 GWh, 35% reduction, $75/kWh. Mar-2028: 20 GWh full build-out, 40% reduction, $70/kWh target cost.
> Causal chain: LFP chemistry pivot (Jan 2026 announced) targets 30-40% cheaper raw materials vs NMC (no cobalt, no nickel), better thermal stability for Indian climate, 3000+ cycle life vs 1500 NMC.
> Cells: Rows 10-12: Apr-2026, Jul-2027, Mar-2028 entries

> [!data] Source: ola_insights.json / financial_mda.txt
> Battery constituted ~35% of BOM for S1 Pro as of Sep 2023. This is why in-house cell manufacturing (Gigafactory) was critical — reducing 35% of BOM cost by 28-40% directly transformed unit economics.
> Causal chain: Battery being the single largest cost component made vertical integration into cell manufacturing the highest-leverage cost reduction strategy.
> Cells: Page 317: Battery as % of BOM

> [!data] Source: ola_insights.json / Ola_after_ipo.txt
> LFP chemistry advantages: 30-40% cheaper raw materials (no cobalt/nickel), better thermal stability for 45C+ Indian summers, 3,000+ cycles vs 1,500 for NMC. Trade-off: ~15% lower energy density (acceptable for 100-150km scooter range).
> Causal chain: The LFP pivot addresses both cost (30-40% cheaper raw materials) and Indian climate suitability (thermal stability), making it the right chemistry for the Indian mass market.
> Cells: Section 4: LFP pivot rationale

## Connections

### Causes
- [[Global Overcapacity]]: 4,200 GWh capacity with ~900 GWh excess (21% overhang) — capacity grew 180% from 2022 to 2026, massively outpacing EV demand
- [[Market/Battery_Raw_Materials]] supply constraints in [[DRC]] (70% of global supply) drove prices from $24K to $56K/MT — 133% spike in 6 months
- [[Lithium Carbonate]] V-shaped recovery from CNY 95,000 to CNY 192,000 (+102%) due to supply tightening and sustained demand
- [[Technology/LFP_46100_Cell]] chemistry dominance in cost-sensitive applications — $80/kWh vs NMC at $100/kWh; no cobalt exposure

### Effects
- Ola's [[NMC-to-LFP pivot]] validated by cobalt price dynamics — LFP contains zero cobalt
- Ola cell cost reached import parity at $80/kWh only in Apr-2026 — 2 years after factory construction began
- Battery cost declined from $130/kWh (imported, Q1 FY25) to $85/kWh (in-house mixed, Q4 FY26) — delivering ~12pp gross margin improvement
- Global overcapacity = "bad if selling B2B" — Ola's B2B battery supply pivot faces 900 GWh of Chinese excess

### Amplifiers
- Ola's LFP 46100 at $80/kWh has zero cost advantage vs Chinese competitors — must win on vehicle integration + local presence
- PLI ACC disbursement lag (per POLICY_REGULATORY_TIMELINE) means Ola can't rely on subsidies to bridge cost gap
- B2B pivot to stationary storage (Ola Shakti) and export markets ($2-3B TAM) are the logical capacity absorption channels
- Phase 2 gigafactory expansion to 12 GWh (Jul 2027) would worsen utilization without B2B demand

### Linked Nodes
- [[Market/Policy_Regulatory_Timeline]]
- [[Market/Export_Markets_Detail]]
- [[Financial/Unit Economics]]
- [[Financial/Post-IPO_Updates]]
- [[Financial/Post-IPO_Quarterly_Calls]]
- [[Opportunities/Gigafactory Economics]]
- [[Risks/Gigafactory Execution]]
