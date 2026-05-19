# Quarterly Losses Worsening

> [!insight] The Single Most Important Thing: Ola has NEVER posted a profitable quarter in 2.5 years of data. The cumulative FY22-FY25 net loss of Rs 6,116 Cr is larger than the entire IPO proceeds of Rs 5,429 Cr. Yet the EBITDA trajectory has inflected — from -22.1% trough to +4.5% positive — proving the restructuring is real.

> [!data] Source: PROFIT_AND_LOSS.csv — Net losses trajectory: FY22: -784 Cr, FY23: -1,472 Cr, FY24: -1,584 Cr, FY25: -2,276 Cr. Cumulative loss FY22-FY25: Rs 6,116 Cr.

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv — EBITDA margin trajectory: -22.1% (Q4 FY25 trough) to +4.5% (Q4 FY26). Worst quarterly EBITDA loss: Rs 243 Cr (Q4 FY25).

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv — Gross margin improved from 12% (Q4 FY25) to 36% (Q4 FY26) despite ASP crashing from Rs 98,000 to Rs 90,000. Gross profit per unit rose 26% from Rs 24,300 to Rs 30,527.

> [!data] Source: CASH_FLOW_AND_DERIVED.csv — Operating cash flow was -Rs 2,391 Cr in FY25 alone, nearly 4x worse than FY24's -Rs 633 Cr. Every year since inception has seen negative operating cash flow.

---

## Quarterly Profit/Loss Trend

| Quarter | Net Loss (₹ Cr) | Revenue (₹ Cr) | Operating Profit (₹ Cr) |
|---------|----------------|----------------|------------------------|
| Sep-23 | -52.4 | 87.3 | -43.5 |
| Dec-23 | -37.6 | 129.6 | -30.1 |
| Mar-24 | -41.6 | 159.8 | -31.2 |
| Jun-24 | -34.7 | 164.4 | -20.5 |
| Sep-24 | -49.5 | 121.4 | -37.9 |
| Dec-24 | -56.4 | 104.5 | -46.0 |
| Mar-25 | **-87.0** | 61.1 | **-69.5** |
| Jun-25 | -42.8 | 82.8 | -23.7 |
| Sep-25 | -41.8 | 69.0 | -20.3 |
| Dec-25 | -48.7 | 47.0 | -27.1 |

---

## Key Observations

1. **Losses are structural** — Every single quarter shows losses; no breakeven quarter in 2.5 years of data
2. **Worst quarter: Mar-25** — ₹87 Cr loss, ₹69.5 Cr operating loss
3. **Q4 (Mar) consistently bad** — Year-end adjustments, warranty provisions, or discounting
4. **Revenue-loss disconnect** — Even in higher-revenue quarters (~₹164 Cr), losses persist
5. **FY25 loss: ₹2,276 Cr** — significantly worse than FY24 (₹1,584 Cr)

---

## Why Losses Persist Despite Revenue Scale

1. **[[Financial/Unit Economics|BOM too high]]** — Cost of materials was running at 90%+ of revenue before Gigafactory integration. In-house cells cut battery cost from $130/kWh to $85/kWh (-35%).
2. **Operating leverage not enough** — Fixed cost absorption limited by revenue volatility. Depreciation of Rs 566 Cr/yr and interest of Rs 366 Cr/yr are structural.
3. **[[Financial/Revenue Trajectory|Revenue declining]]** — Scale benefits reversing; units sold dropped from 108K/quarter peak to 39K/quarter trough (-64%).
4. **Interest burden** — Borrowings peaked at Rs 5,684 Cr (Mar-24), reduced to Rs 3,556 Cr (Mar-25) post-IPO. Interest cost Rs 366 Cr/yr at 8.75-10.90%.

> [!data] Source: ola/PROFIT_AND_LOSS.csv
> Ola's net loss of Rs 2,276 Cr in FY25 was the largest ever for an Indian auto company, exceeding Ather's cumulative losses. Ola's expense-to-revenue ratio was 138.5% - spending Rs 1.39 for every Rs 1 earned.
> Causal chain: The massive loss reflects both operating inefficiency (service crisis driving support costs) and competitive pressure (price cuts to maintain volume against legacy entrants)
> Cells: Row 13, Col F (Mar-25) = -2276; Row 2, Col F = 4514; QUATERS Row 3 total FY25 expenses = 1849+1593+1505+1306 = 6253

> [!data] Source: ola/QUATERS.csv
> Ola's quarterly losses stabilized at Rs 400-500 Cr range through FY26, significantly improved from the Rs 870 Cr loss in Q4 FY25. With Rs 828 Cr (Jun-25) dropping to Rs 470 Cr (Dec-25) quarterly sales, however, loss-per-rupee-revenue remains extremely high.
> Causal chain: Ola's cost base (Rs 741 Cr expenses on Rs 470 Cr revenue in Dec-25) is too high for the current scale. The company needs either 2x volume or 50% cost reduction to approach breakeven at current ASPs
> Cells: Row 7, Col Mar-25 = -870, Row 7 Col Jun-25 = -428, Row 7 Col Sep-25 = -418, Row 7 Col Dec-25 = -487

> [!data] Source: PROFIT_AND_LOSS.csv
> Net loss widened every year: Rs -199.23 Cr (FY21), Rs -784.15 Cr (FY22), Rs -1,472.08 Cr (FY23), Rs -1,584.4 Cr (FY24), and Rs -2,276 Cr (FY25). Cumulative losses over 5 years: Rs 6,315.86 Cr.
> Causal chain: Heavy investment in R&D, manufacturing capacity, and service network expansion before achieving operating leverage drove accumulating losses.
> Cells: Row 15: Net profit values for Mar-21 through Mar-25

> [!data] Source: QUATERS.csv
> Quarterly net losses: Rs -524 Cr (Sep-23), -376 Cr (Dec-23), -416 Cr (Mar-24), -347 Cr (Jun-24), -495 Cr (Sep-24), -564 Cr (Dec-24), -870 Cr (Mar-25), -428 Cr (Jun-25), -418 Cr (Sep-25), -487 Cr (Dec-25). The worst loss was Rs -870 Cr in Mar-25 (Q4 FY25).
> Causal chain: Losses peaked in Q4 FY25 as revenue collapsed while expenses hadn't yet been cut; subsequent quarters showed narrowing losses as cost-cutting took effect.
> Cells: Row 9: Net profit values from Sep-23 through Dec-25

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP restated consolidated losses: FY21 loss Rs 199.23 Cr (Rs 1,992.32M), FY22 loss Rs 784.15 Cr (Rs 7,841.50M), FY23 loss Rs 1,472.08 Cr (Rs 14,720.79M), and three-months ended Jun 30, 2023 loss Rs 267.16 Cr (Rs 2,671.56M).
> Context: Page 309, Accounting Ratios table and Page 327, Summary Results of Operations

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP EBITDA trajectory: FY21 EBITDA loss Rs 178.82 Cr (Rs 1,788.22M), FY22 EBITDA loss Rs 717.55 Cr (Rs 7,175.52M), FY23 EBITDA loss Rs 1,197.10 Cr (Rs 11,970.98M), Q1 FY24 EBITDA loss Rs 183.81 Cr (Rs 1,838.11M).
> Context: Pages 309, 329-330, Reconciliation of EBITDA

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP EBITDA margins: FY21 negative 168.57%, FY22 negative 157.27%, FY23 negative 43.02%, Q1 FY24 negative 14.38% -- showing progressive improvement as revenue scaled.
> Context: Pages 309, 329-330

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP loss before tax: FY21 Rs 199.23 Cr (Rs 1,992.32M), FY22 Rs 784.15 Cr (Rs 7,841.50M), FY23 Rs 1,472.08 Cr (Rs 14,720.79M), Q1 FY24 Rs 267.16 Cr (Rs 2,671.56M). Loss before tax as % of total income: negative 187.81% (FY21), negative 171.86% (FY22), negative 52.90% (FY23), negative 20.89% (Q1 FY24).
> Context: Pages 327-328, 332

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP discontinued the practice of reporting separate standalone financial statements for material subsidiaries Ola Electric Mobility B.V. and Etergo B.V. in the DRHP itself, noting these are available on the company website for SEBI compliance. Etergo B.V. became a subsidiary effective May 26, 2020.
> Context: Page 310

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP exceptional items: FY23 exceptional expense of Rs 964.20M (Rs 96.42 Cr) and Q1 FY24 exceptional expense of Rs 17.71M (Rs 1.77 Cr), both arising from decision to fully refund customers who purchased Ola S1 Pro scooters prior to Mar 31, 2023 for the cost of chargers they had purchased separately. As of Oct 31, 2023, more than 90% of eligible customers had been refunded.
> Context: Pages 328-329

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP notes that FY22 results are not strictly comparable to FY23 because Ola S1 Pro deliveries commenced only in Dec 2021, so FY22 had only ~4 months of revenue recognition versus the full year in FY23.
> Context: Page 329

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP finance costs: FY21 Rs 0.79 Cr (Rs 7.90M), FY22 Rs 17.62 Cr (Rs 176.18M), FY23 Rs 107.92 Cr (Rs 1,079.17M), Q1 FY24 Rs 35.93 Cr (Rs 359.30M). Increase driven by borrowings from financial institutions to finance business operations.
> Context: Pages 327, 329-330

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP depreciation and amortization: FY21 Rs 19.62 Cr (Rs 196.20M), FY22 Rs 48.98 Cr (Rs 489.80M), FY23 Rs 167.06 Cr (Rs 1,670.64M), Q1 FY24 Rs 47.42 Cr (Rs 474.15M). Increases aligned with ramp-up of business operations and manufacturing activities.
> Context: Pages 327, 329-330

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP total expenses: FY21 Rs 284.90 Cr (Rs 2,849.03M), FY22 Rs 1,173.81 Cr (Rs 11,738.12M), FY23 Rs 3,883.38 Cr (Rs 38,833.75M), Q1 FY24 Rs 1,460.72 Cr (Rs 14,607.15M). As % of total income: 268.57% (FY21), 257.27% (FY22), 139.55% (FY23), 114.24% (Q1 FY24).
> Context: Page 327

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP loss before exceptional items and tax: FY21 Rs 199.23 Cr, FY22 Rs 784.15 Cr, FY23 Rs 1,375.66 Cr (Rs 13,756.59M), Q1 FY24 Rs 265.39 Cr (Rs 2,653.85M). FY23 exceptional items added Rs 96.42 Cr to the loss.
> Context: Page 327

## Connections

### Causes
- [[Service Crisis]] destroyed consumer trust; 10,000+ CCPA complaints; market share fell from 44.69% to 8.6%
- [[Market/FAME_II_Scheme]] expiry forced Rs 40,000/vehicle subsidy reduction, compressing margins
- [[Opportunities/S1 X]] cannibalization drove blended ASP from Rs 1.35L to Rs 0.89L (-34%)
- [[Global Overcapacity]] pushed LFP cell prices to $80/kWh, making import cheaper than in-house production for 2 years

### Effects
- Cumulative losses of Rs 6,116 Cr (FY22-FY25) exceed IPO proceeds of Rs 5,429 Cr
- [[Equity Dilution]]: shares outstanding grew from 1,955 Cr to 4,411 Cr (+125%) in FY25 alone
- Negative reserves of Rs 2,909 Cr (FY24) reversed to Rs 732 Cr only due to equity infusion
- Stock price: ~Rs 150 peak to ~Rs 29 trough (-80.7%)

### Amplifiers
- [[Technology/Gigafactory_Updates]] capex of ~Rs 4,000 Cr (FY24-FY25) burned cash before it could generate savings
- [[PLI ACC]] disbursement lagged behind capex spending, forcing IPO to bridge the gap
- [[Market/Battery_Raw_Materials]] price spike to $56,000/MT (2026) validated LFP pivot but NMC costs were already sunk

### Linked Nodes
- [[Financial/Revenue Trajectory]]
- [[Financial/Cash Flow Analysis]]
- [[Financial/Balance Sheet Analysis]]
- [[Financial/Unit Economics]]
- [[Market/EV Policy]]
- [[Risks/Financial Losses]]
- [[Post-IPO_Quarterly_Calls]]
