> [!insight] Cobalt's 133% Price Spike and Lithium's V-Shaped Recovery Drive the Economics of Ola's LFP Pivot and Gigafactory Viability
> Battery raw material prices are the most volatile and strategically consequential input costs in the EV industry. Cobalt surged 133% from $24,000/MT to $56,000/MT (2025 H2 to 2026 Current) on DRC supply constraints, directly validating Ola's NMC-to-LFP chemistry pivot. Lithium carbonate rebounded 102% from its trough to CNY 192,000, raising input costs for both chemistries. These commodity dynamics determine whether Ola's Gigafactory -- targeting $80/kWh in 2026 down to $70/kWh by 2028 -- can undercut Chinese import prices and deliver the structural cost advantage that Ola's turnaround depends on.

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv (market_insights.json)
> Cobalt price spike validates LFP pivot: Cobalt (LME) surged from $24,000/MT (2025 H2) to $56,000/MT (2026 Current) -- a 133% increase driven by DRC supply constraints. This makes NMC cells structurally more expensive and vindicates Ola's decision to pivot from NMC 4680 to LFP 46100 chemistry.
> Causal chain: DRC supply constraints→cobalt price spike→NMC uneconomical→Ola LFP pivot validated→gigafactory chemistry decision proven correct→competitors on NMC face cost pressure
> Cells: Row 3 2025_H2=24000, 2026_Current=56000, Trend='Rising (DRC supply constraints)'

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv (market_insights.json)
> Lithium carbonate (China) shows a V-shaped recovery: CNY 590,000/T peak (2022) → crashed to CNY 95,000 (2025 H1) → rebounded to CNY 192,000 (2026 Current) -- a 102% H1-to-Current increase. This directly raises Ola's input costs for both NMC and LFP cells.
> Causal chain: Lithium supply deficit→price recovery→cell input cost increase→Ola's in-house production hedges partially→gigafactory becomes more valuable as hedge against commodity volatility
> Cells: Row 2 2022_Peak=590000, 2025_H1=95000, 2026_Current=192000, Trend='Rising (V-shaped recovery)'

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv (market_insights.json)
> LFP pack price declined from $140/kWh (2022) to $80/kWh (2026) -- a 43% drop in 4 years. NMC pack price declined from $160/kWh (2022) to $100/kWh (2026) -- a 37.5% drop. LFP is declining faster and is now 20% cheaper than NMC, confirming the industry-wide shift to LFP for cost-sensitive E2W applications.
> Causal chain: LFP technology maturation+overcapacity→faster price decline→LFP becomes dominant chemistry→Ola's LFP pivot aligns with industry trend→NMC becomes niche premium chemistry
> Cells: Row 9 2022=140, 2026=80; Row 10 2022=160, 2026=100

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv (market_insights.json)
> Global cell manufacturing capacity: 1,500 GWh (2022) → 4,200 GWh (2026) -- 180% expansion in 4 years, creating ~900 GWh of excess capacity in 2026. This massive Chinese-driven overcapacity suppresses global cell prices and challenges Ola's Gigafactory thesis.
> Causal chain: Chinese overcapacity→global cell price collapse→makes buying cheaper than building→Ola must achieve cost parity→gigafactory only viable at 12+ GWh scale→race against time
> Cells: Row 8 2022=1500, 2026=4200, Notes='Massive overcapacity (~900 GWh excess)'

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv (market_insights.json)
> Separator film prices declining from $2.5/sqm (2022) to $1.7/sqm (2026) (−32%) and electrolyte from $12/kg (2022) to $5.2/kg (2026) (−57%) -- both driven by overcapacity. These falling input costs benefit all cell manufacturers including Ola's Gigafactory.
> Causal chain: Global overcapacity in battery components→falling separator & electrolyte prices→input cost relief for cell manufacturers→partial hedge against lithium/cobalt increases→benefits Ola Gigafactory
> Cells: Row 6 2022=2.5, 2026=1.7; Row 7 2022=12, 2026=5.2

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv (market_insights.json)
> Nickel (LME) stable at $18,000/MT (2026) after crashing from $48,000 peak (2022). Nickel stability is neutral for NMC cell costs but has no impact on LFP (which contains no nickel). Ola's LFP pivot reduces nickel exposure, a strategic de-risking move.
> Causal chain: Nickel price stability→NMC costs predictable→but Ola pivoting to LFP→eliminates nickel dependency→commodity risk reduction
> Cells: Row 4 2022_Peak=48000, 2026_Current=18000

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv, GIGAFACTORY_MILESTONES.csv (ola_insights.json)
> Battery cost per kWh: $130 (Q1-Q3 FY25, imported) → $125 (Q4 FY25, mixed import+NMC pilot) → $110 (Q1 FY26, in-house NMC) → $105 (Q2) → $100 (Q3) → $85 (Q4 FY26, NMC+LFP pilot). Cumulative 35% reduction from $130 to $85/kWh.
> Causal chain: Each Gigafactory production milestone reduced battery cost. The transition from imported cells ($130) to in-house NMC ($110) to NMC+LFP pilot ($85) drove the 35% reduction
> Cells: PRODUCT_MIX: Battery_Cost_Per_kWh_USD rows 2-9. GIGAFACTORY: Col F (Battery_Cost_Per_kWh_USD)

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv + GIGAFACTORY_MILESTONES.csv (market_insights.json)
> Ola's Gigafactory make-vs-buy breakeven: At $80/kWh global LFP pack price (2026) and Ola's $85/kWh in-house cost, Ola is currently ~6% above global parity. The Gigafactory only becomes economically justified at Phase 2 (12 GWh, $75/kWh, Jul-2027) when Ola undercuts global prices.
> Causal chain: China overcapacity→global LFP at $80→Ola at $85→negative spread currently→scale needed for positive spread→gigafactory viable at 12+ GWh→time pressure
> Cells: BATTERY Row 9 2026=80 (LFP pack global); GIGAFACTORY Row 10 Battery_Cost_Per_kWh_USD=80 (LFP 46100 Apr-2026); GIGAFACTORY Row 11 Battery_Cost_Per_kWh_USD=75 (Phase 2 Jul-2027)

> [!data] Source: Ola_after_ipo.txt, financial_mda.txt (ola_insights.json)
> LFP chemistry advantages: 30-40% cheaper raw materials (no cobalt/nickel), better thermal stability for 45C+ Indian summers, 3,000+ cycles vs 1,500 for NMC. Trade-off: ~15% lower energy density (acceptable for 100-150km scooter range). Battery constituted ~35% of BOM for S1 Pro as of Sep 2023.
> Causal chain: Battery being the single largest cost component made vertical integration into cell manufacturing the highest-leverage cost reduction strategy
> Cells: Ola_after_ipo.txt Section 4 (LFP pivot rationale); financial_mda.txt Page 317 (Battery as % of BOM)

# Battery Raw Materials

Cobalt, lithium, nickel, and graphite form the commodity foundation of lithium-ion battery economics, and their price volatility creates strategic winners and losers in the EV industry. The 2025-2026 cobalt price surge -- from $24,000/MT to $56,000/MT, a 133% increase -- was the clearest signal yet that NMC (nickel-manganese-cobalt) chemistry carries structural commodity risk that LFP (lithium-iron-phosphate) does not. The Democratic Republic of Congo's ~70% share of global cobalt production means any political instability, regulatory change, or artisanal mining disruption in a single country directly threatens the cost structure of every NMC-dependent manufacturer. Ola's pivot to LFP 46100, announced with the April 2026 Gigafactory milestone, eliminates this risk entirely and positions the company to benefit from LFP's faster price decline trajectory ($140/kWh to $80/kWh, a 43% drop over 4 years).

Lithium carbonate's V-shaped recovery from CNY 95,000 (2025 H1 trough) to CNY 192,000 (2026 Current) -- a 102% rebound -- demonstrates that battery raw materials remain structurally volatile even as cell manufacturing capacity expands. Unlike cobalt, lithium is required by both NMC and LFP chemistries, so this price pressure affects all cell producers. However, LFP's lower lithium content per kWh (approximately 30% less than NMC per unit of energy) provides a partial hedge. The falling prices of separator film ($2.5→$1.7/sqm, -32%) and electrolyte ($12→$5.2/kg, -57%), driven by Chinese overcapacity in battery components, provide offsetting input cost relief that benefits Ola's Gigafactory as it scales.

The critical strategic question for Ola is whether its Gigafactory can reach cost parity with Chinese imports before the company's cash runway expires. At $85/kWh (Q4 FY26), Ola's in-house cell cost is approximately 6% above the global LFP pack price of $80/kWh. The make-vs-buy breakeven -- where building cells becomes cheaper than buying from CATL or BYD -- requires Phase 2 scale of 12 GWh and a target cost of $75/kWh (Jul-2027). This 12-15 month window is tight: Ola needs to expand capacity from the current 6 GWh to 12 GWh while maintaining the BOM reduction trajectory (28% achieved, 35-40% required). The global cell overcapacity of ~900 GWh, driven by massive Chinese expansion, means import prices could fall further, pushing the breakeven target further out. This commodity price context -- not just Ola's execution -- will determine whether the Gigafactory becomes the strategic asset that enables Ola's turnaround or a stranded-cost burden that accelerates the need for additional funding.

## Key Data Points
- Cobalt: $24,000/MT (2025 H2) → $56,000/MT (2026 Current) — 133% surge
- DRC accounts for ~70% of global cobalt production — extreme supply concentration risk
- Lithium carbonate: CNY 95,000 (2025 H1 trough) → CNY 192,000 (2026 Current) — 102% V-shaped recovery
- LFP pack price: $140/kWh (2022) → $80/kWh (2026) — 43% decline
- NMC pack price: $160/kWh (2022) → $100/kWh (2026) — 37.5% decline
- Global cell capacity: 1,500 GWh (2022) → 4,200 GWh (2026) — 180% expansion, ~900 GWh excess
- Separator film: $2.5/sqm (2022) → $1.7/sqm (2026) — 32% decline
- Electrolyte: $12/kg (2022) → $5.2/kg (2026) — 57% decline
- Nickel: stable at $18,000/MT (2026) vs $48,000 peak (2022)
- Ola battery cost: $130/kWh (imported) → $85/kWh (in-house NMC+LFP) — 35% reduction
- Ola LFP 46100 target: $80/kWh (Apr 2026), $75/kWh (12 GWh, Jul 2027), $70/kWh (20 GWh, Mar 2028)
- Ola make-vs-buy: currently ~6% above global LFP parity ($85 vs $80/kWh)
- Battery constitutes ~35% of BOM for S1 Pro — highest single cost component

---

## Connections

### Causes
- [[Market/Battery_Supply_Chain]] — Global battery supply chain dynamics, Chinese overcapacity, and raw material price trends form the macro context for cell cost economics
- [[Technology/Cobalt Supply Risk and LFP Pivot]] — DRC supply concentration and cobalt price volatility drove Ola's chemistry decision, with LFP eliminating cobalt entirely

### Effects
- [[Technology/Gigafactory_Updates]] — Raw material prices directly determine whether the Gigafactory's make-vs-buy calculus favors in-house production over Chinese imports
- [[Financial/Unit Economics]] — Battery raw material costs cascade through BOM to gross margins, determining Ola's path to EBITDA breakeven at 15,000 units/month

### Amplifiers
- [[Technology/Global Cell Price Parity]] — Chinese overcapacity is driving global cell prices below Ola's current in-house cost, compressing the window for Gigafactory economic viability
- [[Risks/Gigafactory Execution]] — The PLI milestone penalties (doubled deduction for capacity shortfall) amplify the financial consequences of missing raw-material-driven cost targets

### Linked Nodes
- [[Technology/LFP_46100_Cell]]
- [[Technology/4680 Cell Tech]]
- [[Opportunities/Cell Manufacturing]]
- [[Strategy/Backward Integration]]
- [[Risks/Supply Chain]]
- [[Companies/Ola Electric]]
- [[Technology/Battery Innovation Centre]]
- [[Graphite]]
- [[Market/Chinese OEM Export Competition]]
- [[Strategy/B2B_Battery_Pivot]]
