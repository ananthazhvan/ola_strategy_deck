# Unit Economics

> [!insight] The Single Most Important Thing: The Margin Paradox — Ola's gross profit per unit ROSE 26% (Rs 24,300 to Rs 30,527) even as ASP crashed 34% (Rs 1.35L to Rs 0.89L). This is because the S1 X's simpler BOM combined with Gigafactory in-house cells ($130/kWh to $85/kWh) collapsed COGS faster than ASP. EBITDA breakeven dropped from 40K to 15K units/month.

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv — Gross margin trajectory: 18% (Q1 FY25, imported cells $130/kWh) to 36% (Q4 FY26, in-house NMC+LFP at $85/kWh). The trough was 12% in Q4 FY25.

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv — Blended ASP: Rs 1,35,000 (Q1 FY25) to Rs 89,000 (Q3 FY26). S1 X mix grew from 15% to 75%.

> [!data] Source: GIGAFACTORY_MILESTONES.csv — Battery cost per kWh: $135 (Mar-2024 pilot) to $80 (Apr-2026 LFP). BOM reduction reached 30% with LFP 46100.

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv — EBITDA margin: -22.1% (Q4 FY25 worst) to +4.5% (Q4 FY26 best). First positive EBITDA ever in Q3 FY26 at +2.1%.

> [!data] Source: GIGAFACTORY_MILESTONES.csv — Gen 2 platform provides 68.85% component commonality across S1 Pro, S1 Air, and S1 X — enabling the "strip-down" strategy.

---

## Bill of Materials (BOM) Breakdown — Ola S1 Pro

| Component | % of BOM |
|-----------|----------|
| Battery (cells) | **35%** |
| Motor & Drivetrain | ~15% |
| Electronics & Software | ~12% |
| Frame & Body | ~18% |
| Tires, Suspension, Brakes | ~12% |
| Other | ~8% |

---

## Cost Structure (% of Revenue)

| Component | FY22 | FY23 | Q1 FY24 |
|-----------|------|------|---------|
| Cost of Materials | 128.2% | 90.0% | 87.1% |
| Employee Cost | 61.9% | 15.3% | 7.4% |
| Other Expenses | 89.9% | 31.9% | 20.1% |
| **Total Expenses** | **257.3%** | **139.6%** | **114.2%** |
| Adjusted Gross Margin | -5.4% | 7.6% | 13.2% |
| EBITDA Margin | -157.3% | -43.0% | -14.4% |

---

## Operating Leverage Trajectory

| Metric | FY22 | FY23 | Q1 FY24 |
|--------|------|------|---------|
| Employee Cost / Revenue | 61.9% | 15.3% | 7.4% |
| Ad Spend / Revenue | 10.8% | — | 1.0% |
| R&D Spend / Revenue | 38.5% | 18.3% | 7.3% |
| Asset Turnover | 0.34 | — | 2.68 (annualized) |

---

## Path to Breakeven

Current adj. gross margin (13.2%) must expand to cover:
- Employee costs: 7.4% of revenue
- Other opex: ~20% of revenue
- Depreciation + interest: ~6.5% of revenue

**Implied breakeven adj. gross margin: ~34%**

### Getting There:
1. **Battery in-house** (35% of BOM): 10-15% BOM reduction
2. **Platform commonality** (68.85%): Scale purchasing discounts
3. **Co-located suppliers**: Logistics cost reduction
4. **Gen 3 platform**: Further component optimization
5. **Revenue recovery**: Fixed cost absorption at higher volumes

> [!data] Source: ather/PROFIT_AND_LOSS.csv
> Ather's net loss narrowed from Rs 812 Cr (FY25) to Rs 517 Cr (FY26) even as revenue grew 63% from Rs 2,255 Cr to Rs 3,672 Cr. Loss-to-sales ratio improved from -36% to -14%, showing strong operating leverage.
> Causal chain: As Ather scales, fixed costs (R&D, employee, depreciation) are spread over larger revenue base, naturally improving margins without requiring price increases
> Cells: Row 15, Col F (Mar-25) = -812.3, Col G (Mar-26) = -517.17; Row 2, Col F = 2255, Col G = 3671.76

> [!data] Source: PROFIT_AND_LOSS.csv
> Employee Cost grew from Rs 197.25 Cr (FY21) to Rs 465 Cr (FY25) - only 2.36x growth, far slower than revenue growth (5,248x), demonstrating operating leverage in fixed costs. As % of sales, it dropped from 22,935% to 10.3%.
> Causal chain: Fixed employee base was leveraged across growing sales, dramatically reducing employee cost as % of revenue.
> Cells: Row 7: Employee Cost for Mar-21 through Mar-25

> [!data] Source: PROFIT_AND_LOSS.csv
> Selling & Admin expenses ballooned from Rs 58.06 Cr (FY21) to Rs 1,598 Cr (FY25) - a 27.5x increase, far outpacing the 5,249x revenue growth in percentage terms. By FY25, S&A alone was 35.4% of revenue, indicating massive overhead.
> Causal chain: D2C model required expensive experience centers and service network, creating fixed overhead that became burdensome when sales declined.
> Cells: Row 8: Selling and admin for Mar-21 through Mar-25

> [!data] Source: QUATERS.csv
> Quarterly expenses exceeded revenue every quarter. Expenses peaked at Rs 1,910 Cr (Mar-24) then declined to Rs 741 Cr (Dec-25). Operating loss (EBITDA): worst at Rs -695 Cr (Mar-25), best at Rs -203 Cr (Sep-25).
> Causal chain: Expenses declined slower than revenue because fixed costs (depreciation, employee, service network) couldn't be reduced proportionally.
> Cells: Row 3: Expenses, Row 10: Operating Profit from Sep-23 through Dec-25

> [!data] Source: Ola_after_ipo.txt
> New EBITDA breakeven: 15,000 units/month (down from ~40,000+ previously). Current run-rate ~13,000 units/month. Cash on hand: ~Rs 3,516 Cr (from IPO proceeds). Runway: 12-18 months at current burn.
> Causal chain: Drastic cost cutting reduced the breakeven threshold from 40K to 15K units/month. At 13K current run-rate, Ola is within striking distance of cash-flow positivity.
> Cells: Section 3: Financial Restructuring section

> [!data] Source: financial_mda.txt
> 68.85% of components were common across S1 Pro, S1 Air, and S1 X+ models as of Oct 2023, demonstrating the platform approach. Gen 2 platform started manufacturing Jul 2023 with enhanced specs (acceleration, speed, range, motor power, battery).
> Causal chain: High component commonality across models reduced per-unit costs and sped up new model development, enabling the rapid S1 X launch.
> Cells: Page 318: Platform commonality and Gen 2 details

> [!data] Source: financial_mda.txt
> Battery constituted ~35% of BOM for S1 Pro as of Sep 2023. This is why in-house cell manufacturing (Gigafactory) was critical - reducing 35% of BOM cost by 28-40% directly transformed unit economics.
> Causal chain: Battery being the single largest cost component made vertical integration into cell manufacturing the highest-leverage cost reduction strategy.
> Cells: Page 317: Battery as % of BOM

> [!data] Source: financial_mda.txt, Ola_after_ipo.txt
> Ola Futurefactory installed capacity: 1 million units per year as of Oct 2023. FY25 sales were ~340K units (34% utilization). FY26 sales ~164K units (16.4% utilization). Massive fixed cost under-absorption.
> Causal chain: 1M unit factory running at 16-34% utilization means massive fixed cost under-absorption, making each unit more expensive to produce and compressing margins.
> Cells: financial_mda Page 312 (capacity). Ola_after_ipo Section 1 (FY25/FY26 units)

> [!data] Source: Ola_after_ipo.txt
> OpEx was slashed from Rs 840 Cr (Q4 FY25 peak) to Rs 484 Cr (Q3 FY26) - a 42% reduction in two quarters. Achieved by firing thousands of sales staff, closing underperforming experience centers, and cutting marketing spend drastically.
> Causal chain: The drastic OpEx reduction was a survival move: revenue had collapsed and costs had to follow. This is what drove the EBITDA breakeven threshold from 40K to 15K units/month.
> Cells: Section 3: Cost cutting details

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP cost of materials consumed as % of revenue from operations: 89.60% (Q1 FY24), 95.21% (FY23), 156.64% (FY22). Cost of materials includes raw materials for scooter production. BOM cost tracking and backward integration are key strategies for margin improvement.
> Context: Pages 314, 331

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP cost of materials consumed: nil (FY21, pre-revenue), Rs 584.93 Cr (FY22), Rs 2,504.79 Cr (FY23), Rs 1,113.55 Cr (Q1 FY24). Purchase of stock-in-trade (chargers, accessories): nil (FY21), Rs 56.18 Cr (FY22), Rs 139.26 Cr (FY23), Rs 19.31 Cr (Q1 FY24).
> Context: Page 327

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP change in inventories of finished goods, stock-in-trade and work-in-progress: nil (FY21), negative Rs 160.22 Cr (expense decrease, FY22), negative Rs 73.64 Cr (FY23), negative Rs 23.37 Cr (Q1 FY24). Closing inventories: Rs 3.22 Cr (FY21), Rs 163.44 Cr (FY22), Rs 237.08 Cr (FY23), Rs 260.45 Cr (Jun 30, 2023).
> Context: Pages 327-328, 330

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP adjusted gross margin: FY22 negative Rs 24.64 Cr (negative 5.40%), FY23 positive Rs 212.29 Cr (7.63%), Q1 FY24 positive Rs 169.19 Cr (13.23%). For FY21, adjusted gross margin was not applicable as the company had no sale of finished and traded goods.
> Context: Pages 309-310, 332

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP Futurefactory installed capacity: 1 million units per year as of October 31, 2023, making it the largest integrated and automated E2W manufacturing plant in India by an E2W-only OEM, according to the Redseer Report.
> Context: Page 312

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP battery constituted approximately 35% of the BOM for Ola S1 Pro scooters as of September 30, 2023. This made in-house cell manufacturing (Gigafactory) the highest-leverage cost reduction strategy.
> Context: Page 317

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP 68.85% of components were common across S1 Pro, S1 Air, and S1 X+ models as of October 31, 2023. Gen 2 platform commenced manufacturing at Ola Futurefactory in July 2023 with enhanced acceleration, speed, range, motor power, and battery performance compared to Gen 1.
> Context: Page 318

---

## Connections

### Causes
- [[Opportunities/S1 X]] cannibalization drove ASP from Rs 1.35L to Rs 0.89L — S1 X grew from 15% to 75% of sales mix
- [[Technology/Gigafactory_Updates]] in-house cells cut battery cost from $130/kWh (imported) to $85/kWh (in-house mixed NMC+LFP) — a 35% reduction
- [[Technology/Gen 2 Platform]] with 68.85% component commonality enabled the S1 X "strip-down" strategy at minimal incremental engineering cost
- [[Technology/LFP_46100_Cell]] pivot achieved $80/kWh cell cost — exact parity with global import price
- [[Market/Battery_Raw_Materials]] price spike to $56,000/MT validated the LFP pivot (LFP has zero cobalt content)
- [[OpEx]] slashed 42% from Rs 840 Cr (Q4 FY25) to Rs 484 Cr (Q3 FY26)

### Effects
- Gross profit per unit rose 26% from Rs 24,300 to Rs 30,527 — the Margin Paradox
- EBITDA breakeven dropped from ~40,000 to ~15,000 units/month
- EBITDA turned positive for the first time: +2.1% (Q3 FY26), +4.5% (Q4 FY26)
- S1 X at 75% mix with $100/kWh cells generates MORE gross profit per unit than S1 Pro at 35% mix with $130/kWh imported cells

### Amplifiers
- [[BOM Reduction]] trajectory: 0% (Mar-2024) to 30% (Apr-2026 LFP), targeting 40% by Mar-2028
- [[PLI ACC]] scheme could add further subsidy benefits if production milestones are met
- [[B2B Battery Supply]] (Ola Shakti) could improve capacity utilization from ~16%, spreading fixed costs

### Linked Nodes
- [[Financial/Revenue Trajectory]]
- [[Financial/Quarterly Losses]]
- [[Financial/Cash Flow Analysis]]
- [[Financial/Post-IPO_Quarterly_Calls]]
- [[Market/Battery_Supply_Chain]]
- [[Market/Policy_Regulatory_Timeline]]
- [[Strategy/Backward Integration]]
- [[Strategy/Operating Leverage]]
