> [!insight] The Single Most Important Thing
> The Gigafactory reached 6 GWh capacity with [[Technology/4680 Cell Tech|LFP 46100 cells]] at $80/kWh and 30% BOM reduction, but only ~16% utilisation (serving 39K units/quarter) creates a stranded asset risk that forces a B2B pivot — with zero confirmed orders as of May 2026.

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Capacity scaled from 0 GWh (Mar 2024) to 6.0 GWh (Apr 2026). Cells produced: Q1 FY26 ~10,000 → Q2 FY26 36,000 → Q3 FY26 72,418 (101% QoQ). Phase 2 targets 12 GWh by Jul 2027.

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Battery cost per kWh fell from $130 (imported) to $80 (in-house LFP), with BOM reduction reaching 30% — enabling gross margin expansion from 12% (Q4 FY25) to 36% (Q4 FY26).

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Global LFP pack price at $80/kWh with 4,200 GWh capacity and ~900 GWh excess — Ola's in-house cost is at parity, NOT below market. The make-vs-buy case delivered zero structural cost advantage.

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Input cost headwinds: Lithium carbonate V-shaped recovery from CNY 95,000 to CNY 192,000 (+102%), Cobalt surging to $56,000/MT (+133%). [[Technology/R&D Investment|LFP chemistry]] hedges cobalt but remains exposed to lithium.

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv
> At 39K units/quarter (Q4 FY26), Ola's own demand absorbs only ~0.5 GWh of 6 GWh capacity — ~90% idle. B2B pivot ([[Strategy/EV Hub Tamil Nadu|Ola Shakti]], OEM cell supply) has zero confirmed orders.

# Ola Gigafactory: Complete Technical & Financial Deep-Dive

## Facility Overview
- **Location:** Krishnagiri, Tamil Nadu (500 acres, SEZ)
- **India's first** large-scale lithium-ion cell manufacturing plant
- **PLI Beneficiary:** Advanced Chemistry Cell (ACC) PLI scheme allocation

## Capacity Timeline
| Date | Capacity (GWh) | Status |
|------|----------------|--------|
| H1 FY25 | Pilot line | Commissioning, first test cells |
| Q2 FY26 | 2.5 GWh | Commercial production begins |
| Q3 FY26 | 2.5 GWh (installed), ramping | 72,418 cells produced (2x QoQ) |
| Mar 2026 | 5.9 GWh | Target (end of FY26) |
| Current (May 2026) | 6 GWh | Commercially operational |
| Jul 2027 | 12 GWh | Phase 2 expansion target |
| FY28 end | 20 GWh | Full build-out target |
| Long-term | 100 GWh | Ultimate vision (multi-decade) |

## The Chemistry Pivot (4680 NMC → 46100 LFP)

### 4680 "Bharat Cell" (NMC Chemistry)
- **Format:** 46mm diameter × 80mm length, cylindrical
- **Chemistry:** Nickel-Manganese-Cobalt (NMC)
- **Status:** First commercially deployed in-house cell in India
- **Currently powering:** Thousands of Ola scooters on the road
- **Strengths:** High energy density (~250 Wh/kg), good for range
- **Weaknesses:** Expensive (cobalt + nickel), thermal management needed, shorter cycle life

### 46100 Cell (LFP Chemistry) — The New Bet
- **Format:** 46mm diameter × 100mm length (25% larger than 4680)
- **Chemistry:** Lithium Iron Phosphate (LFP)
- **Announced:** April 2026
- **Strengths:**
  - 30-40% cheaper raw materials (zero cobalt, zero nickel)
  - Superior thermal stability for Indian climate (safe up to 60°C)
  - 3,000+ cycle life (vs. 1,500 for NMC) → better warranty economics
  - Simpler thermal management → cheaper pack design
- **Weaknesses:**
  - ~15% lower energy density (~170 Wh/kg vs 250)
  - Heavier battery for same range
- **Why acceptable for scooters:** A 100-150 km range scooter needs ~3-4 kWh. The weight penalty of LFP at this pack size is only 2-3 kg — negligible for a 100+ kg scooter.

## Cell Production Milestones
| Period | Cells Produced | QoQ Growth | Notes |
|--------|---------------|------------|-------|
| Q1 FY26 | ~10,000 | - | Pilot production, engineering cells |
| Q2 FY26 | 36,000 | 260% | First commercial-grade cells |
| Q3 FY26 | 72,418 | 101% | Doubled QoQ, validated in vehicles |
| Q4 FY26 | ~100,000 (est) | ~38% | LFP cells entering production |

## Financial Impact on BOM & Margins

### Battery Cost Reduction
| Cost Component | Before Gigafactory | After Gigafactory (NMC) | After LFP Pivot |
|----------------|-------------------|------------------------|-----------------|
| Cell cost per kWh | ~$130-140 (imported) | ~$100-110 (in-house NMC) | ~$75-85 (in-house LFP) |
| Pack cost per kWh | ~$170-180 | ~$130-140 | ~$100-110 |
| Battery as % of BOM | 38-42% | 30-35% | 25-28% |
| **Total BOM reduction** | Baseline | ~15% | ~28-30% |

### Impact on Scooter Margins
| Metric | Pre-Gigafactory (FY24) | Post-NMC Cell (H1 FY26) | Post-LFP Cell (H2 FY26) |
|--------|----------------------|------------------------|------------------------|
| Battery cost (3 kWh pack) | ₹51,000-54,000 | ₹39,000-42,000 | ₹30,000-33,000 |
| Total BOM (S1 X 3kWh) | ₹68,000 | ₹58,000 | ₹52,000 |
| Selling Price (S1 X 3kWh) | ₹89,999 | ₹89,999 | ₹89,999 |
| **Gross Margin** | **~24%** | **~35%** | **~42%** |

*Note: These are estimates based on reported BOM reduction of "up to 30%" and gross margin trajectory reported in quarterly results.*

### The 34.3% Gross Margin Explained (Q3 FY26)
The record gross margin was driven by three simultaneous factors:
1. **In-house NMC cells** replacing imported cells (Phase 1 cost reduction)
2. **Gen 3 platform** reducing non-battery BOM (simpler design, fewer parts)
3. **OpEx optimization** — not directly gross margin, but reduced overhead allocation per unit

## B2B Pivot: From Scooter Company to Energy Company

### Why B2B?
- Current scooter sales: ~13,000 units/month
- Gigafactory capacity: Can supply cells for ~80,000+ scooters/month
- **Utilization rate: ~16%** → massive excess capacity

### B2B Revenue Streams
| Stream | Product | Target Customer | Status (May 2026) |
|--------|---------|----------------|-------------------|
| **Ola Shakti** | Residential home battery | Indian homeowners | Announced, pilot units |
| **Cell Supply** | 4680 NMC / 46100 LFP cells | Domestic/global OEMs | In negotiations |
| **Energy Storage** | Grid-scale battery packs | Utilities, renewables | Conceptual stage |

### The CATL/BYD Playbook
Ola is attempting what CATL and BYD did:
- Start as a captive consumer (making cells for your own vehicles)
- Scale the factory beyond your own needs
- Become a merchant supplier to the industry
- Battery supply becomes the higher-margin, recurring-revenue business

### Key Risk
No confirmed B2B orders as of May 2026. This is currently a narrative, not revenue. If scooter sales don't recover AND B2B deals don't materialize, the Gigafactory becomes an expensive stranded asset.

## PLI Scheme & Government Support
- **ACC PLI allocation:** Ola received capacity allocation under the ACC PLI scheme
- **Budget 2026:** Extended BCD exemptions on capital goods for cell manufacturing
- **Potential PLI revenue:** If production targets are met, Ola could receive ₹500-800 Cr over the PLI period
- **Risk:** PLI disbursement is linked to production milestones — if yields underperform, payments are deferred

> [!data] Source: ola/PRODUCT_MIX_QUARTERLY.csv
> Ola's battery cost reduced from $130/kWh (imported cells, FY25) to $85/kWh (in-house NMC 4680, Q4 FY26) — a 35% reduction directly enabling gross margin expansion from 12% to 36%. This is Ola's most significant competitive advantage.
> Causal chain: In-house cell manufacturing at the Gigafactory gives Ola a structural cost advantage that competitors buying cells from LG/CATL cannot match, potentially enabling profitable pricing below competitor cost base once volumes recover
> Cells: Row 2 (Q1_FY25): Battery_Cost=130, Cell_Source=Imported; Row 9 (Q4_FY26): Battery_Cost=85, Cell_Source='Mixed (NMC + LFP 46100 pilot)'; Row 2 Gross_Margin=18, Row 9 Gross_Margin=36

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv + GIGAFACTORY_MILESTONES.csv
> Ola replaced imported cells with in-house production progressively: $130/kWh imported (Q1 FY25) → $110/kWh in-house NMC (Q1 FY26) → $85/kWh NMC+LFP (Q4 FY26). This 35% cost reduction directly enabled gross margin improvement from 18% (Q1 FY25) to 36% (Q4 FY26) despite ASP declining from Rs 135,000 to Rs 90,000.
> Causal chain: In-house cell production→BOM reduction→gross margin expansion→EBITDA breakeven→financial survival despite volume collapse
> Cells: PRODUCT_MIX Row 2 Battery_Cost_Per_kWh_USD=130 (Q1 FY25); Row 8 Battery_Cost_Per_kWh_USD=85 (Q4 FY26); PRODUCT_MIX Row 2 Gross_Margin_Pct=18; Row 9 Gross_Margin_Pct=36; GIGAFACTORY Row 8 Battery_Cost_Per_kWh_USD=100 (Dec-25); Row 9 Battery_Cost_Per_kWh_USD=90 (Mar-26); Row 10 Battery_Cost_Per_kWh_USD=80 (Apr-26)

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Ola's Gigafactory progressed from 0 GWh (Mar-2024) to 6 GWh (Apr-2026) in 24 months. Cells produced went from ~2,000 pilot cells (Sep-2024) to ~100,000 (Mar-2026) — a 50x scale-up. BOM cost reduced 28% from initial pilot to Mar-2026, with target of 40% reduction by full build-out (Mar-2028).
> Causal chain: Gigafactory construction→pilot production→commercial ramp→cost reduction→margin improvement→strategic asset
> Cells: Row 2 Capacity_GWh=0 (Mar-2024); Row 9 Capacity_GWh=5.9 (Mar-2026); Row 3 Cells_Produced=~2000 (Sep-2024); Row 9 Cells_Produced=~100000 (Mar-2026); Row 9 BOM_Reduction_Pct=28

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Ola's LFP 46100 cell announced Apr-2026 at $80/kWh — exactly at global LFP pack price parity. This is the critical validation point: at $80/kWh, Ola can compete with Chinese cell imports on cost. Phase 2 target (Jul-2027): $75/kWh at 12 GWh. Full build-out (Mar-2028): $70/kWh at 20 GWh, below global average.
> Causal chain: LFP chemistry pivot→cost parity with global prices→scale targets→below-global-average cost→Gigafactory thesis validated
> Cells: Row 10 Chemistry=LFP 46100, Battery_Cost_Per_kWh_USD=80 (Apr-2026); Row 11 Capacity_GWh=12.0, Battery_Cost_Per_kWh_USD=75 (Jul-2027); Row 12 Capacity_GWh=20.0, Battery_Cost_Per_kWh_USD=70 (Mar-2028)

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Cobalt price spike validates LFP pivot: Cobalt (LME) surged from $24,000/MT (2025 H2) to $56,000/MT (2026 Current) — a 133% increase driven by DRC supply constraints. This makes NMC cells structurally more expensive and vindicates Ola's decision to pivot from NMC 4680 to LFP 46100 chemistry.
> Causal chain: DRC supply constraints→cobalt price spike→NMC uneconomical→Ola LFP pivot validated→gigafactory chemistry decision proven correct→competitors on NMC face cost pressure
> Cells: Row 3 2025_H2=24000, 2026_Current=56000, Trend='Rising (DRC supply constraints)'

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Lithium carbonate (China) shows a V-shaped recovery: CNY 590,000/T peak (2022) → crashed to CNY 95,000 (2025 H1) → rebounded to CNY 192,000 (2026 Current) — a 102% H1-to-Current increase. This directly raises Ola's input costs for both NMC and LFP cells.
> Causal chain: Lithium supply deficit→price recovery→cell input cost increase→Ola's in-house production hedges partially→gigafactory becomes more valuable as hedge against commodity volatility
> Cells: Row 2 2022_Peak=590000, 2025_H1=95000, 2026_Current=192000, Trend='Rising (V-shaped recovery)'

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Global cell manufacturing capacity: 1,500 GWh (2022) → 4,200 GWh (2026) — 180% expansion in 4 years, creating ~900 GWh of excess capacity in 2026. This massive Chinese-driven overcapacity suppresses global cell prices and challenges Ola's Gigafactory thesis — why build cells when you can buy at $80/kWh from CATL/BYD?
> Causal chain: Chinese overcapacity→global cell price collapse→makes buying cheaper than building→Ola must achieve cost parity→gigafactory only viable at 12+ GWh scale→race against time
> Cells: Row 8 2022=1500, 2026=4200, Notes='Massive overcapacity (~900 GWh excess)'

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> LFP pack price declined from $140/kWh (2022) to $80/kWh (2026) — a 43% drop in 4 years. NMC pack price declined from $160/kWh (2022) to $100/kWh (2026) — a 37.5% drop. LFP is declining faster and is now 20% cheaper than NMC, confirming the industry-wide shift to LFP for cost-sensitive E2W applications.
> Causal chain: LFP technology maturation+overcapacity→faster price decline→LFP becomes dominant chemistry→Ola's LFP pivot aligns with industry trend→NMC becomes niche premium chemistry
> Cells: Row 9 2022=140, 2026=80; Row 10 2022=160, 2026=100

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv + GIGAFACTORY_MILESTONES.csv
> Ola's Gigafactory make-vs-buy breakeven: At $80/kWh global LFP pack price (2026) and Ola's $85/kWh in-house cost, Ola is currently ~6% above global parity. The Gigafactory only becomes economically justified at Phase 2 (12 GWh, $75/kWh, Jul-2027) when Ola undercuts global prices. Until then, buying from Chinese suppliers is cheaper.
> Causal chain: China overcapacity→global LFP at $80→Ola at $85→negative spread currently→scale needed for positive spread→gigafactory viable at 12+ GWh→time pressure
> Cells: BATTERY Row 9 2026=80 (LFP pack global); GIGAFACTORY Row 10 Battery_Cost_Per_kWh_USD=80 (LFP 46100 Apr-2026); GIGAFACTORY Row 11 Battery_Cost_Per_kWh_USD=75 (Phase 2 Jul-2027)

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Separator film prices declining from $2.5/sqm (2022) to $1.7/sqm (2026) (−32%) and electrolyte from $12/kg (2022) to $5.2/kg (2026) (−57%) — both driven by overcapacity. These falling input costs benefit all cell manufacturers including Ola's Gigafactory, partially offsetting the lithium and cobalt price increases.
> Causal chain: Global overcapacity in battery components→falling separator & electrolyte prices→input cost relief for cell manufacturers→partial hedge against lithium/cobalt increases→benefits Ola Gigafactory
> Cells: Row 6 2022=2.5, 2026=1.7; Row 7 2022=12, 2026=5.2

> [!data] Source: SHAREHOLDING_PATTERN.csv + META.csv + GIGAFACTORY_MILESTONES.csv
> Acquisition target risk: With market cap of Rs 15,923 Cr (~$1.9B), stock at Rs 36.10 (76% below peak), and FII exiting (5.41%→3.99%), Ola is vulnerable to acquisition. A strategic buyer (Mahindra, Hero, international OEM) could acquire controlling stake for $1.5-2B — cheap relative to Gigafactory asset value (20 GWh target capacity, built at significant investment).
> Causal chain: Depressed stock→low market cap→Gigafactory asset undervalued→acquisition opportunity for strategic buyer→promoter stake only 34.59%→control achievable→SoftBank exit aligns with acquisition scenario
> Cells: SHAREHOLDING Row 4 FII signal='Foreign money exiting — bearish'; Row 7 Pre-IPO signal='Major overhang'; META Row 7 Current Price=36.1, Row 8 Market Capitalization=15923.14; GIGAFACTORY Row 12 Capacity_GWh=20.0 (target)

> [!data] Source: POST_IPO_EVENTS.csv + GIGAFACTORY_MILESTONES.csv
> B2B Cell Supply Talks (May-2026): Gigafactory at 2.5→6 GWh, Ola pivoting from D2C dependency to B2B battery supplier. This is a strategic recognition that Ola cannot absorb 6+ GWh of cell capacity with its own vehicle sales at 15-16K units/month — it must sell cells externally to utilize Gigafactory capacity.
> Causal chain: Ola vehicle sales too low→Gigafactory underutilized→B2B cell sales→revenue diversification→capacity utilization→gigafactory economics depend on external sales→competes with Chinese cells globally
> Cells: POST_IPO Row 9 Category=Strategic, Event_Name='B2B Cell Supply Talks', Metric_Impact='Gigafactory hits 2.5 GWh', Strategic_Implication='Pivoting from D2C dependency to B2B battery supplier'; GIGAFACTORY Row 9 Capacity_GWh=5.9 (Mar-26), Row 10 Capacity_GWh=6.0 (Apr-26)

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv + QUARTERLY_FINANCIALS_EXT.csv
> Ola product mix shift to budget: S1 X mix went from 15% (Q1 FY25) to 75% (Q3 FY26) — the premium-to-mass pivot. Blended ASP collapsed from Rs 135,000 to Rs 89,000 (−34%). However, gross margin improved from 18% to 36% during the same period, proving that in-house cell integration can overcome ASP decline.
> Causal chain: Volume decline→shift to cheapest model→ASP decline→cell integration→BOM reduction→gross margin expansion→EBITDA turnaround→survival via cost structure change
> Cells: PRODUCT_MIX Row 2 S1_X_Pct=15, Blended_ASP=135000, Gross_Margin_Pct=18 (Q1 FY25); PRODUCT_MIX Row 8 S1_X_Pct=75, Blended_ASP=89000, Gross_Margin_Pct=34.3 (Q3 FY26)

> [!data] Source: QUATERS.csv + QUARTERLY_FINANCIALS_EXT.csv
> Ola's quarterly net loss trajectory: -Rs 347 Cr (Jun-24, peak revenue quarter) → -Rs 870 Cr (Mar-25, worst quarter) → -Rs 487 Cr (Dec-25, still deep losses despite restructuring). Despite EBITDA turning positive in Q3 FY26 (+2.1%), net losses continue due to depreciation (Rs 170 Cr/quarter) and interest (Rs 80 Cr/quarter) from Gigafactory capex.
> Causal chain: EBITDA positive→but high depreciation+interest→net losses continue→cash burn from Gigafactory→funding need→dilution risk→depressed stock continues
> Cells: QUATERS Row 9 Net profit: Jun-24=-347, Mar-25=-870, Dec-25=-487; QUARTERLY_FINANCIALS_EXT Row 7 EBITDA_Margin_Pct=2.1 (Q3 FY26); QUATERS Row 5 Depreciation Dec-25=170, Row 6 Interest Dec-25=80

> [!data] Source: PROFIT_AND_LOSS.csv
> Ola's employee cost grew from Rs 197 Cr (Mar-21) to Rs 465 Cr (Mar-25) — 136% increase — but was relatively flat from Mar-23 (Rs 430 Cr) to Mar-25 (Rs 465 Cr), indicating hiring freeze in the crisis period. Despite 56% revenue decline from peak, the employee base was not significantly reduced, suggesting retention of Gigafactory and R&D talent.
> Causal chain: Crisis hits→revenue declines→employee cost stable→headcount preserved for Gigafactory→strategic choice→near-term losses for long-term capability→but cash burn continues
> Cells: Row 6 Employee Cost: Mar-21=197.25, Mar-23=429.72, Mar-24=450.6, Mar-25=465

> [!data] Source: PROFIT_AND_LOSS.csv
> Ola's interest cost grew from Rs 0.79 Cr (Mar-21) to Rs 366 Cr (Mar-25) — a 463x increase — driven by Gigafactory debt financing. Interest now exceeds total revenue of FY21 (Rs 0.86 Cr) by 425x. The debt service burden is a structural cost that cannot be cut and will consume cash flow even at EBITDA breakeven.
> Causal chain: Gigafactory capex→debt financing→interest cost explosion→fixed financial burden→cannot cut→cash flow constraint→limits pricing/marketing flexibility→competitive disadvantage
> Cells: Row 12 Interest: Mar-21=0.79, Mar-25=366

> [!data] Source: PROFIT_AND_LOSS.csv + QUATERS.csv
> Ola's depreciation rose from Rs 19.6 Cr (Mar-21) to Rs 566 Cr (Mar-25) — a 29x increase — driven by Gigafactory asset capitalization. Quarterly depreciation reached Rs 170 Cr by Dec-25. Even after EBITDA breakeven, Ola will report net losses of ~Rs 250 Cr/quarter from depreciation + interest alone.
> Causal chain: Asset build-up→depreciation charges→non-cash but impacts net income→reported losses despite operational profitability→investor perception negative→stock pressure continues
> Cells: PROFIT Row 11 Depreciation: Mar-21=19.62, Mar-25=566; QUATERS Row 5 Depreciation Dec-25=170

> [!data] Source: PROFIT_AND_LOSS.csv
> Depreciation grew from Rs 19.62 Cr (FY21) to Rs 566 Cr (FY25) — a 29x increase, reflecting massive capital expenditure on Futurefactory and Gigafactory assets becoming operational.
> Causal chain: Heavy capital investment in manufacturing capacity created a growing depreciation charge that weighs on profitability.
> Cells: Row 11: Depreciation for Mar-21 through Mar-25

> [!data] Source: CASH_FLOW_AND_DERIVED.csv
> Cash from Investing was also negative except FY21: Rs 549 Cr (FY21), -1,322 Cr (FY22), -319 Cr (FY23), -1,136 Cr (FY24), -2,864 Cr (FY25). Cumulative investing outflow: Rs 5,092 Cr, reflecting Gigafactory and Futurefactory CapEx.
> Causal chain: Massive capital expenditure on manufacturing and cell production capacity consumed cash, with the heaviest spending in FY25 as Gigafactory commercial production began.
> Cells: Row 3: Cash from Investing Activity for Mar-21 through Mar-25

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv, PRODUCT_MIX_QUARTERLY.csv
> S1 X mix grew from 15% (Q1 FY25) to 75% (Q3 FY26). Blended ASP declined from Rs 1,35,000 (Q1 FY25) to Rs 89,000 (Q3 FY26) — a 34% decline. Despite lower ASP, gross margins IMPROVED from 18% to 34.3% because S1 X has simpler build and fewer parts.
> Causal chain: As sales declined, Ola shifted to cheaper S1 X model which has better unit economics (fewer features, simpler manufacturing). Combined with Gigafactory cell cost reduction, gross margins improved despite falling ASP.
> Cells: QUARTERLY_FINANCIALS_EXT: Row 2-9. PRODUCT_MIX_QUARTERLY: Row 2-9, Col 3-4 (S1_X_Pct, Blended_ASP_INR)

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv
> Gross Margin trajectory: 18% (Q1 FY25) → 16% → 14% → 12% (Q4 FY25 trough, imported cells) → 22% (Q1 FY26, Gigafactory begins) → 28% → 34.3% (Q3 FY26 peak) → 36% (Q4 FY26). Improvement from 12% to 36% in 4 quarters = 3x improvement.
> Causal chain: In-house NMC 4680 cells replaced imported cells starting Q1 FY26, reducing battery cost from $130/kWh to $85/kWh, directly driving gross margin expansion.
> Cells: Rows 2-9: Gross_Margin_Pct

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv, GIGAFACTORY_MILESTONES.csv
> Battery cost per kWh: $130 (Q1-Q3 FY25, imported) → $125 (Q4 FY25, mixed import+NMC pilot) → $110 (Q1 FY26, in-house NMC) → $105 (Q2) → $100 (Q3) → $85 (Q4 FY26, NMC+LFP pilot). Cumulative 35% reduction from $130 to $85/kWh.
> Causal chain: Each Gigafactory production milestone reduced battery cost. The transition from imported cells ($130) to in-house NMC ($110) to NMC+LFP pilot ($85) drove the 35% reduction.
> Cells: PRODUCT_MIX: Battery_Cost_Per_kWh_USD rows 2-9. GIGAFACTORY: Col F (Battery_Cost_Per_kWh_USD)

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Gigafactory Q2 FY26: 2.5 GWh capacity, 36,000 cells produced, 20% BOM reduction. Q3 FY26: 2.5 GWh capacity, 72,418 cells produced (2.01x QoQ), 25% BOM reduction — the 'record production quarter'.
> Causal chain: Cell production doubled QoQ from 36,000 to 72,418, demonstrating the production learning curve and capacity utilization improvement.
> Cells: Rows 7-8: Sep-2025 and Dec-2025 entries

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> FY26 end (Mar-2026): Capacity expanded to 5.9 GWh, ~100,000 cells produced cumulatively, 28% BOM reduction, battery cost down to $90/kWh. LFP 46100 cells entered pilot production.
> Causal chain: FY26-end milestones show the parallel path: scaling NMC capacity while initiating LFP pilot for future chemistry shift.
> Cells: Row 9: Mar-2026 entry

> [!data] Source: Ola_after_ipo.txt
> Ola Shakti residential B2B battery storage system announced. Ola exploring deals to supply cells to other automakers, following a CATL/BYD model but India-based. This hedges against scooter sales decline.
> Causal chain: With excess cell capacity (6 GWh target → ~1M scooters/year vs actual sales of 164K/year), Ola needs B2B customers to utilize Gigafactory capacity.
> Cells: Section 4: B2B pivot paragraph

> [!data] Source: financial_mda.txt
> Battery constituted ~35% of BOM for S1 Pro as of Sep 2023. This is why in-house cell manufacturing (Gigafactory) was critical — reducing 35% of BOM cost by 28-40% directly transformed unit economics.
> Causal chain: Battery being the single largest cost component made vertical integration into cell manufacturing the highest-leverage cost reduction strategy.
> Cells: Page 317: Battery as % of BOM

> [!data] Source: financial_mda.txt
> Cell PLI scheme requires: 1 GWh in year 1, 5 GWh in year 2, 10 GWh in year 3, 20 GWh by year 4 from commissioning. Failure penalty: Government can deduct TWICE the shortfall from total subsidy. Can also discontinue payment and appropriate performance security.
> Causal chain: If Ola doesn't meet Cell PLI capacity milestones, not only does it lose subsidy income, it faces punitive deductions — a significant risk given current capacity is 2.5 GWh vs 5 GWh required in year 2.
> Cells: Page 322: Cell PLI commitments

> [!data] Source: financial_mda.txt, Ola_after_ipo.txt
> Ola Futurefactory installed capacity: 1 million units per year as of Oct 2023. FY25 sales were ~340K units (34% utilization). FY26 sales ~164K units (16.4% utilization). Massive fixed cost under-absorption.
> Causal chain: 1M unit factory running at 16-34% utilization means massive fixed cost under-absorption, making each unit more expensive to produce and compressing margins.
> Cells: financial_mda Page 312 (capacity). Ola_after_ipo Section 1 (FY25/FY26 units)

> [!data] Source: Ola_after_ipo.txt
> LFP chemistry advantages: 30-40% cheaper raw materials (no cobalt/nickel), better thermal stability for 45C+ Indian summers, 3,000+ cycles vs 1,500 for NMC. Trade-off: ~15% lower energy density (acceptable for 100-150km scooter range).
> Causal chain: The LFP pivot addresses both cost (30-40% cheaper raw materials) and Indian climate suitability (thermal stability), making it the right chemistry for the Indian mass market.
> Cells: Section 4: LFP pivot rationale

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Original Gigafactory plan was 4680-format NMC chemistry. New plan announced Jan 2026: 46100-format LFP chemistry, pivoting away from NMC due to cost and thermal stability advantages.
> Context: Section 4: Gigafactory & Technology Pivot — Bharat Cell pivot

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Cell production milestones: Q2 FY26 — 36,000 cells produced; Q3 FY26 — 72,418 cells produced (2x QoQ). Installed capacity reached 2.5 GWh, targeting 6 GWh (enough for ~1 million scooters/year).
> Context: Section 4: Gigafactory & Technology Pivot — Production milestones

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Ola Shakti residential home battery storage system announced as part of B2B pivot. Ola exploring deals to supply cells to other automakers (domestic + global) following a CATL/BYD model but India-based. This hedges against scooter sales decline.
> Context: Section 4: Gigafactory & Technology Pivot — B2B pivot

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> LFP chemistry advantages for Indian market: 30-40% cheaper raw materials (no cobalt/nickel), better thermal stability for 45°C+ summers, longer cycle life (3,000+ cycles vs 1,500 for NMC). Trade-off: ~15% lower energy density, but acceptable for 100-150km scooter range.
> Context: Section 4: Gigafactory & Technology Pivot — Why LFP over NMC

> [!data] Source: ola_ipo/industry_overview_business.txt
> Phase 1(a) of the Ola Gigafactory was expected to be completed and operational by March 31, 2024 (DRHP date: December 22, 2023). After Phase 1(a), further phased expansion would continue. Ola currently sourced cells from suppliers and was in the process of developing cell technologies at the BIC.
> Context: Page 161, Our Business — Vertically Integrated Approach

> [!data] Source: ola_ipo/industry_overview_business.txt
> Ola developed the preliminary design of a 4680 cell in-house at the BIC, for which testing was in progress as of DRHP date. The BIC is focused on developing cell and battery technology including material synthesis, cell manufacturing technology, material characterization, prototyping, and testing. Currently focused on NMC formulations but evaluating other chemistries including LFP.
> Context: Pages 164-165, Our Business

> [!data] Source: ola_ipo/industry_overview_business.txt
> Under the Cell PLI Scheme, Ola is required to achieve capacity milestones: 1 GWh in year 1 (FY2024), 5 GWh in year 2, 10 GWh in year 3, and 20 GWh by year 4 from commissioning. Failure penalty: Government can deduct twice the shortfall from total subsidy payable, discontinue payment, and appropriate the performance security.
> Context: Page 163, Our Business — PLI Schemes

> [!data] Source: ola_ipo/industry_overview_business.txt
> Battery pack constitutes 35-40% of E2W BOM cost, of which 80-85% is the cell cost — making cell the most critical cost component. The 4680 format (46x80mm cylindrical) was expected to replace the 2170 format with 5.5x more energy per cell, higher charging rate, improved heat dissipation, and lower cost per kWh.
> Context: Pages 150-151, Industry Overview

> [!data] Source: ola_ipo/industry_overview_business.txt
> India's ACC demand for batteries is projected at 104-260 GWh by 2030. E2W batteries alone would require 40-60 GWh by FY2028. Three bidders were selected under the Cell PLI scheme (out of 10 bids received). Private players are expected to create additional battery manufacturing capacity of ~95 GWh beyond PLI allocations.
> Context: Pages 139, 143, Industry Overview

## Connections
**Causes:** [[Technology/4680 Cell Tech]], [[Technology/R&D Investment]]
**Effects:** [[Strategy/Backward Integration]], [[Strategy/Product_Mix_Cannibalization]]
**Amplifiers:** [[Strategy/EV Hub Tamil Nadu]]
**Linked Nodes:** [[Strategy/Operating Leverage]], [[Technology/Gen 2 Platform]]
