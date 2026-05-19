> [!insight] The Single Most Important Thing
> The [[Technology/Gigafactory_Updates]] is Ola's **highest-stakes strategic initiative** — a Rs 4,000+ Cr bet on domestic cell manufacturing that faces **three existential risks simultaneously**: (1) **catastrophic under-utilization** — 6.0 GWh capacity at only ~16% utilization (~1 GWh consumed vs 6 GWh built), (2) **import parity, not advantage** — Ola's $80/kWh LFP cost only matches (doesn't beat) the global LFP price of $80/kWh, and (3) **a B2B pivot with ZERO confirmed orders** — the stated hedge against under-utilization has no revenue evidence as of May 2026. Without execution, Rs 4,000+ Cr of capex becomes a stranded asset.

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Full build-out timeline: **0 GWh (Mar-2024, DRHP filing)** → 0.5 GWh (Sep-2024, pilot) → 2.0 GWh (Mar-2025, commercial NMC) → **5.9 GWh (Mar-2026, FY26 end)** → **6.0 GWh (Apr-2026, LFP 46100)**. Target: 12.0 GWh (Jul-2027 Phase 2) → 20.0 GWh (Mar-2028 full build-out).
> Chemistry evolution: **NMC 4680 (planned)** → **NMC 4680 (commercial)** → **NMC + LFP pilot** → **LFP 46100 (commercial)**.
> BOM reduction: **0% (Mar-2024)** → **10% (Mar-2025)** → **28% (Mar-2026)** → **30% (Apr-2026, LFP)** → target **40% (Mar-2028)**.
> Cumulative cells produced by Mar-2026: **~100,000 cells**.

# Gigafactory Execution Risk

**Criticality:** 🔴 HIGH

---

## The Stakes

[[Ola Gigafactory]] is the single most important strategic initiative for [[Companies/Ola Electric]]. Success means cost leadership and supply independence. Failure means continued import dependence, subsidy penalties, and competitive disadvantage.

---

## Capacity Milestones ([[Cell PLI]] Scheme)

| Year | Required Capacity | Penalty if Missed |
|------|-------------------|-------------------|
| 1 (FY2024) | 1 GWh | 2x shortfall deducted from subsidy |
| 2 | 5 GWh | 2x shortfall deducted |
| 3 | 10 GWh | 2x shortfall deducted |
| 4 | 20 GWh | 2x shortfall deducted |

Government can also **discontinue all subsidy payments** and **appropriate performance security** if milestones not met.

> [!data] Source: CASH_FLOW_AND_DERIVED.csv
> Gigafactory capex: **Rs 4,000 Cr invested over FY24-FY25** (investing cash outflow: -Rs 1,136 Cr in FY24, -Rs 2,864 Cr in FY25). Funded by Rs 5,429 Cr [[IPO]] (FY25) and peak borrowings of Rs 5,684 Cr (Mar-24). [[Net Block]]: Rs 2,491 Cr (Mar-24) → Rs 3,154 Cr (Mar-25). [[Cash]] position: Rs 1,663 Cr (Mar-24) → Rs 3,516 Cr (Mar-25 post-IPO). [[Depreciation]]: Rs 566 Cr/yr. [[Interest]]: Rs 366 Cr/yr — fixed costs that don't reduce with utilization.

---

## Key Risks

### Technology Risk
- [[Technology/4680 Cell Tech|4680 form factor cells]] still in testing — Ola pivoted to **LFP 46100** instead (announced Apr-2026)
- **5x energy density** vs conventional — ambitious target, now likely deferred for LFP (lower density but cheaper)
- New form factors have unproven manufacturing yield at scale
- **Low cell yield is expected during initial production** (per [[DRHP]])
- Cumulative production of only **~100,000 cells by Mar-2026** against 5.9 GWh capacity suggests yield issues

### Construction Risk
- Phase 1(a): **1.4 GWh expected by Mar-2024** — actually achieved 2.0 GWh by Mar-2025 (1 year delay)
- Phase 1(b): **5 GWh by Oct-2024** — actually achieved ~5.9 GWh by Mar-2026 (17 month delay)
- Imported + local machinery integration
- Government approvals may be delayed
- Phase 2 (12 GWh) targeted Jul-2027 — requires additional capex before export revenue materializes

### Financial Risk
- Rs 1,910 Cr [[SBI]] term loan (11-year, 10.90% interest)
- [[OCT]] must meet minimum investment + employment obligations per [[SIPCOT]] MoU
- Offtake agreement: [[OET]] must purchase cells from [[OCT]] (6-year agreement, minimum commitments)
- Default triggers: nominee director appointment, debt-to-equity conversion, security enforcement
- **Stranded asset risk**: 6 GWh built at ~Rs 4,000 Cr capex, only ~1 GWh consumed — 90%+ idle capacity

### Competitive Risk
- Cell technology evolving rapidly — LFP, [[Technology/Cobalt Supply Risk and LFP Pivot]], and new chemistries competing
- [[Global overcapacity]]: 4,200 GWh global capacity with **900 GWh excess** — "bad if selling B2B"
- Risk of obsolescence if LFP 46100 doesn't achieve cost/performance targets vs next-gen chemistries (solid state, sodium-ion)
- Chinese manufacturers ([[CATL]], [[BYD]]) have massive scale at $80/kWh — Ola has zero cost advantage

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> The make-vs-buy analysis reveals Ola has consistently **traded** the import price, not beaten it:
> | Date | Ola Cost/kWh | Market LFP Price | Gap |
> |------|-------------|-----------------|-----|
> | Mar-2024 | $135 (NMC pilot) | $100/kWh | **+35%** |
> | Mar-2025 | $115 (NMC commercial) | $90/kWh | **+28%** |
> | Sep-2025 | $105 (NMC ramp) | $85/kWh | **+24%** |
> | Apr-2026 | $80 (LFP 46100) | $80/kWh | **0% (parity)** |
> | Jul-2027 target | $75 (LFP) | ~$70/kWh (projected) | **Above market** |
> | Mar-2028 target | $70 (LFP) | ~$65/kWh (projected) | **Above market** |
> 
> Ola has **never** achieved a cost advantage over import. The entire Gigafactory value proposition rests on being able to produce below market price — a claim the data does not yet support.

---

## Related
- [[Technology/4680 Cell Tech]]
- [[Opportunities/Cell Manufacturing]]
- [[Strategy/Backward Integration]]
- [[Financial/IPO Proceeds]] — Rs 1,226 Cr allocated
- [[Risks/Supply Chain]] — Why this matters

> [!data] Source: ola/PRODUCT_MIX_QUARTERLY.csv
> Ola's battery cost reduced from $130/kWh (imported cells, FY25) to $85/kWh (in-house NMC 4680, Q4 FY26) - a 35% reduction directly enabling gross margin expansion from 12% to 36%. This is Ola's most significant competitive advantage.
> Causal chain: In-house cell manufacturing at the Gigafactory gives Ola a structural cost advantage that competitors buying cells from LG/CATL cannot match, potentially enabling profitable pricing below competitor cost base once volumes recover
> Cells: Row 2 (Q1_FY25): Battery_Cost=130, Cell_Source=Imported; Row 9 (Q4_FY26): Battery_Cost=85, Cell_Source='Mixed (NMC + LFP 46100 pilot)'; Row 2 Gross_Margin=18, Row 9 Gross_Margin=36

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv + GIGAFACTORY_MILESTONES.csv
> Ola's Gigafactory make-vs-buy breakeven: At $80/kWh global LFP pack price (2026) and Ola's $85/kWh in-house cost, Ola is currently ~6% above global parity. The Gigafactory only becomes economically justified at Phase 2 (12 GWh, $75/kWh, Jul-2027) when Ola undercuts global prices. Until then, buying from Chinese suppliers is cheaper.
> Causal chain: China overcapacity -> global LFP at $80 -> Ola at $85 -> negative spread currently -> scale needed for positive spread -> gigafactory viable at 12+ GWh -> time pressure
> Cells: BATTERY Row 9 2026=80 (LFP pack global); GIGAFACTORY Row 10 Battery_Cost_Per_kWh_USD=80 (LFP 46100 Apr-2026); GIGAFACTORY Row 11 Battery_Cost_Per_kWh_USD=75 (Phase 2 Jul-2027)

> [!data] Source: POST_IPO_EVENTS.csv + GIGAFACTORY_MILESTONES.csv
> B2B Cell Supply Talks (May-2026): Gigafactory at 2.5->6 GWh, Ola pivoting from D2C dependency to B2B battery supplier. This is a strategic recognition that Ola cannot absorb 6+ GWh of cell capacity with its own vehicle sales at 15-16K units/month - it must sell cells externally to utilize Gigafactory capacity.
> Causal chain: Ola vehicle sales too low -> Gigafactory underutilized -> B2B cell sales -> revenue diversification -> capacity utilization -> gigafactory economics depend on external sales -> competes with Chinese cells globally
> Cells: POST_IPO Row 9 Category=Strategic, Event_Name='B2B Cell Supply Talks', Metric_Impact='Gigafactory hits 2.5 GWh', Strategic_Implication='Pivoting from D2C dependency to B2B battery supplier'; GIGAFACTORY Row 9 Capacity_GWh=5.9 (Mar-26), Row 10 Capacity_GWh=6.0 (Apr-26)



> [!data] Source: QUATERS.csv + QUARTERLY_FINANCIALS_EXT.csv
> Ola's quarterly net loss trajectory: -Rs 347 Cr (Jun-24, peak revenue quarter) -> -Rs 870 Cr (Mar-25, worst quarter) -> -Rs 487 Cr (Dec-25, still deep losses despite restructuring). Despite EBITDA turning positive in Q3 FY26 (+2.1%), net losses continue due to depreciation (Rs 170 Cr/quarter) and interest (Rs 80 Cr/quarter) from Gigafactory capex.
> Causal chain: EBITDA positive->but high depreciation+interest->net losses continue->cash burn from Gigafactory->funding need->dilution risk->depressed stock continues
> Cells: QUATERS Row 9 Net profit: Jun-24=-347, Mar-25=-870, Dec-25=-487; QUARTERLY_FINANCIALS_EXT Row 7 EBITDA_Margin_Pct=2.1 (Q3 FY26); QUATERS Row 5 Depreciation Dec-25=170, Row 6 Interest Dec-25=80

> [!data] Source: PROFIT_AND_LOSS.csv
> Ola's interest cost grew from Rs 0.79 Cr (Mar-21) to Rs 366 Cr (Mar-25) — a 463x increase — driven by Gigafactory debt financing. Interest now exceeds total revenue of FY21 (Rs 0.86 Cr) by 425x. The debt service burden is a structural cost that cannot be cut and will consume cash flow even at EBITDA breakeven.
> Causal chain: Gigafactory capex->debt financing->interest cost explosion->fixed financial burden->cannot cut->cash flow constraint->limits pricing/marketing flexibility->competitive disadvantage
> Cells: Row 12 Interest: Mar-21=0.79, Mar-25=366

> [!data] Source: PROFIT_AND_LOSS.csv + QUATERS.csv
> Ola's depreciation rose from Rs 19.6 Cr (Mar-21) to Rs 566 Cr (Mar-25) — a 29x increase — driven by Gigafactory asset capitalization. Quarterly depreciation reached Rs 170 Cr by Dec-25. Even after EBITDA breakeven, Ola will report net losses of ~Rs 250 Cr/quarter from depreciation + interest alone.
> Causal chain: Asset build-up->depreciation charges->non-cash but impacts net income->reported losses despite operational profitability->investor perception negative->stock pressure continues
> Cells: PROFIT Row 11 Depreciation: Mar-21=19.62, Mar-25=566; QUATERS Row 5 Depreciation Dec-25=170

> [!data] Source: financial_mda.txt
> Cell PLI scheme requires: 1 GWh in year 1, 5 GWh in year 2, 10 GWh in year 3, 20 GWh by year 4 from commissioning. Failure penalty: Government can deduct TWICE the shortfall from total subsidy. Can also discontinue payment and appropriate performance security.
> Causal chain: If Ola doesn't meet Cell PLI capacity milestones, not only does it lose subsidy income, it faces punitive deductions - a significant risk given current capacity is 2.5 GWh vs 5 GWh required in year 2.
> Cells: Page 322: Cell PLI commitments

> [!data] Source: financial_mda.txt, Ola_after_ipo.txt
> Ola Futurefactory installed capacity: 1 million units per year as of Oct 2023. FY25 sales were ~340K units (34% utilization). FY26 sales ~164K units (16.4% utilization). Massive fixed cost under-absorption.
> Causal chain: 1M unit factory running at 16-34% utilization means massive fixed cost under-absorption, making each unit more expensive to produce and compressing margins.
> Cells: financial_mda Page 312 (capacity). Ola_after_ipo Section 1 (FY25/FY26 units)

> [!data] Source: ola_ipo/risk_factors.txt
> Pre-IPO disclosure: Phase 1(a) of the Ola Gigafactory expected operational by March 31, 2024 with production capacity of 1.4 GWh. Phase 1(b) expected to expand to 5 GWh by October 2024. This pre-IPO timeline has since been significantly delayed in practice.
> Context: Page 34, Risk Factor 4

> [!data] Source: ola_ipo/risk_factors.txt
> Ola Gigafactory in Krishnagiri district, Tamil Nadu. Land leased from SIPCOT with 99-year lease. MoU with TN government includes minimum investment in fixed assets and minimum employment covenants. Failure can result in fines, penalties, legal proceedings, and cancellation of allotment.
> Context: Page 34-35, Risk Factor 4

> [!data] Source: ola_ipo/risk_factors.txt
> SBI term loan: Common Rupee Facility Agreement dated October 12, 2023, tenor of 11 years. OCT and OET entered into offtake agreement (Jan 30, 2023) for supply of 4680 cells, valid 6 years, with minimum purchase commitments by OET. Default on offtake agreement triggers event of default under SBI facility.
> Context: Page 35, Risk Factor 4

> [!data] Source: ola_ipo/risk_factors.txt
> IPO proceeds allocation: ₹12,264.27M for Gigafactory expansion from 5 GWh to 6.4 GWh. Costs estimated based on Dun & Bradstreet 'Project Cost Vetting Report' (Dec 21, 2023). No orders placed for plants/machinery as of DRHP date. Quotations valid for limited period subject to revision.
> Context: Page 44-45, Risk Factors 19-20

> [!data] Source: ola_ipo/risk_factors.txt
> Cell PLI Scheme: Ola must achieve 1GWh capacity in FY24, 5GWh Y2, 10GWh Y3, 20GWh Y4. Government may deduct twice the shortfall from subsidy payable, discontinue payments, and appropriate performance security for failure to meet milestones.
> Context: Page 35-36, Risk Factor 5

> [!data] Source: ola_ipo/industry_overview_business.txt
> Ola Gigafactory Phase 1(a) capacity: 1.5 GWh (stated in business section, vs 1.4 GWh in risk factors). Expansion to 6.4 GWh by April 2025 using IPO proceeds. Factory will be automated with vision and metrology equipment for quality at each process step.
> Context: Page 187-188, Our Business

> [!data] Source: ola_ipo/risk_factors.txt
> Cell technology risks: 4680 form factor testing in progress — no guarantee of general market acceptance. Competitors developing more advanced cell tech (NMC, LFP alternatives) that could make Ola's technology obsolete. Prolonged disadvantageous exchange rate movements and inflation may increase costs.
> Context: Page 35, Risk Factor 4

> [!data] Source: ola_ipo/industry_overview_business.txt
> India projected ACC demand: 104-260 GWh by 2030 (from 2.7 GWh) per Niti Aayog. India's E2W battery requirements projected at 40-60 GWh by FY2028. PLI ACC target: 50 GWh domestic capacity by 2030.
> Context: Page 155, Industry Overview

---

## Connections

### Causes
- [[Global battery overcapacity]] (900 GWh excess) created import parity at $80/kWh — hard to beat
- Ola's NMC technology plateaued at $100/kWh by Dec-2025 — could not compete with LFP pricing
- [[Market/Battery_Raw_Materials]] price spike ($24K→$56K/MT, +133%) validated the forced pivot from NMC to LFP
- Domestic scooter sales collapsed from 108K to 32K quarterly — Gigafactory sized for growth that didn't materialize
- [[ACC PLI]] disbursement "lagging" — required front-loading Rs 4,000 Cr capex

### Effects
- **Only ~16% capacity utilization**: 6 GWh built, ~1 GWh consumed — ~5 GWh idle
- **Stranded asset risk**: Rs 4,000+ Cr capex serving a fraction of its potential demand
- **B2B pivot announced**: "B2B Battery Supply & Margin Defense" — zero confirmed orders or revenue as of May 2026
- **Fixed cost burden**: Rs 566 Cr/yr depreciation + Rs 366 Cr/yr interest regardless of utilization
- **[[PLI]] penalty risk**: failing Cell PLI milestones triggers 2x shortfall deduction
- **Export necessity**: must find external demand (Africa, [[Technology/BaaS]], stationary storage) to absorb 6+ GWh capacity

### Amplifiers
- **Scooter sales at 39K/quarter vs 108K peak** — 3x mismatch between planned and actual demand
- **Chinese manufacturers with 4,200 GWh capacity** and 900 GWh excess can price below Ola's $80/kWh
- **Lithium recovery** (+102% to CNY 192K/T) adds cost pressure to LFP chemistry
- **Phase 2 expansion** (12 GWh by Jul-2027) requires more capex before any export/3rd party revenue
- **3-5 year export timeline** means factory under-utilization persists through FY2027-2028

### Linked Nodes
- [[Technology/4680 Cell Tech]] — Original NMC technology now partially superseded by LFP
- [[Opportunities/Cell Manufacturing]] — Upside if factory reaches scale
- [[Strategy/Backward Integration]] — Strategic rationale for the factory
- [[Financial/IPO Proceeds]] — Rs 1,226 Cr allocated for Gigafactory
- [[Risks/Supply Chain]] — Why import dependency motivated the factory
- [[Risks/Financial Losses]] — Depreciation and interest burden from factory capex
- [[Risks/Subsidy Dependency]] — PLI disbursement lag and milestone penalty risk
- [[Opportunities/Export Market]] — 1.88M unit export TAM as utilization bridge
- [[Opportunities/PLI Dual Beneficiary]] — Both Auto and Cell PLI benefits at stake
