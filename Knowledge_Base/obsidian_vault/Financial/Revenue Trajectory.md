# Revenue Growth Trajectory

> [!insight] The Single Most Important Thing: Revenue fell 71% peak-to-trough (Rs 1,644 Cr to Rs 470 Cr) but the company used the crisis to restructure — slashing OpEx 42% and doubling gross margins. Ola is not dying; it is shrinking to profitability. Breakeven now requires only ~15,000 units/month.

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv — Revenue declined from Rs 1,644 Cr (Q1 FY25) to Rs 470 Cr (Q3 FY26), a 71% peak-to-trough drop. Units sold collapsed from 108,000 to 35,000 in the same period.

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv — Blended ASP crashed 34% from Rs 1,35,000 (Q1 FY25) to Rs 89,000 (Q3 FY26) as S1 X cannibalized premium models, growing from 15% to 75% of mix.

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv — Monthly VAHAN registrations collapsed from peak 53,320 (Mar-24) to trough 7,567 (Nov-25), and market share fell from 55.81% (Apr-22) to 15.95% (Mar-26).

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv — EBITDA margin swung from -22.1% (Q4 FY25 trough) to +4.5% (Q4 FY26), proving the restructuring is outpacing the revenue contraction.

---

## Annual Revenue

| Fiscal Year | Revenue from Ops (₹ Cr) | YoY Growth | Scooter Units Sold |
|-------------|------------------------|------------|--------------------|
| FY21 | 0.86 | — | — (pre-revenue) |
| FY22 | 373 | +43,300% | 20,948 |
| FY23 | 2,631 | +605% | 156,251 |
| FY24 | 5,010 | +90% | — |
| FY25 | 4,514 | **-9.9%** | — |

---

## Quarterly Revenue Trend (Screener Data)

| Quarter | Revenue (₹ Cr) | QoQ Change |
|---------|---------------|------------|
| Sep-23 | 873 | — |
| Dec-23 | 1,296 | +48% |
| Mar-24 | 1,598 | +23% |
| Jun-24 | 1,644 | +3% |
| Sep-24 | 1,214 | **-26%** |
| Dec-24 | 1,045 | -14% |
| Mar-25 | 611 | **-42%** |
| Jun-25 | 828 | +36% |
| Sep-25 | 690 | -17% |
| Dec-25 | 470 | **-32%** |

---

## Key Observations

1. **FY22-FY24:** Hypergrowth phase — revenue grew 13x from FY22 to FY24
2. **FY25 Reversal:** Revenue declined 9.9% year-over-year, first annual decline
3. **Quarterly Trend:** Sales peaked at ₹1,644 Cr (Jun-24) and have been declining since
4. **Dec-25 quarter:** ₹470 Cr — lowest quarterly revenue since Sep-23

---

## Drivers of Decline

- [[Risks/Subsidy Dependency|FAME subsidy reduction]] — demand shock from price increases; Rs 40,000/vehicle subsidy dropped 87.5% to Rs 5,000 under EMPS-2024
- [[Risks/Competition|Intensifying competition]] — [[Companies/TVS Motor]] (23%), [[Companies/Bajaj Auto]] (21%) combined at 44% share, legacy players control 65.23% of monthly registrations by Mar-26
- [[Risks/Product Quality|Quality concerns]] — brand trust erosion; CCPA show-cause notice after 10,000+ complaints
- [[Risks/Customer Experience Gap|Service gaps]] — 7-15 day repair backlog vs TVS/Bajaj 1-2 days; 60-75% parts availability vs competitors' 95%

## Mitigation Through New Products

- [[Opportunities/Mass Market E2W|S1 X series]] — targeting price-sensitive buyers at Rs 69,999 entry price; became 75% of sales mix by Q3 FY26
- [[Opportunities/Motorcycle Market|Motorcycles]] — 65% of 2W market by H1 FY2026; Roadster at 2% of Q4 FY26 mix
- [[Opportunities/Export Markets|Exports]] — $2-3B TAM by 2028 across [[Nigeria]], [[Kenya]], [[Rwanda]], [[Indonesia]], [[Brazil]]; requires local assembly + BaaS + service network

> [!data] Source: ola/QUATERS.csv
> Ola's quarterly revenue collapsed from Rs 1,644 Cr (Q1 FY25) to Rs 470 Cr (Q3 FY26) - a 71% decline in 7 quarters. Meanwhile, unit sales dropped from 108,000 to 35,000 per quarter (68% decline), driven by the service crisis and trust erosion.
> Causal chain: The service crisis (CCPA notice Oct-2024, 10,000+ complaints, 7-15 day turnarounds) directly caused customers to switch to Ather/TVS/Bajaj, triggering a revenue death spiral
> Cells: Row 2 Col Jun-24 = 1644, Row 2 Col Dec-25 = 470; PRODUCT_MIX Row 2 Units_Sold = 108000, Row 8 Units_Sold = 35000

> [!data] Source: ola/PRODUCT_MIX_QUARTERLY.csv
> Ola's sales trajectory shows stabilization in Q4 FY26 (39,000 units, Rs 520 Cr) compared to Q2 FY26 trough (32,000 units, Rs 450 Cr). The Gen 3 S1 launch and service improvements are showing early signs of volume recovery, but at 39K/quarter vs 108K/quarter peak.
> Causal chain: Q4 FY26 stabilization (39K units) suggests Ola may have found a floor, but at 36% of peak quarterly volume (108K), the company needs to nearly 3x current sales to return to FY25-level revenue
> Cells: Row 7 (Q2_FY26): Units=32000, Revenue=450; Row 9 (Q4_FY26): Units=39000, Revenue=520; Row 2 (Q1_FY25): Units=108000, Revenue=1644

> [!data] Source: market/COMPETITOR_EV_METRICS.csv
> Ola's FY26 EV unit decline of -52% (340K to 164K) is the steepest annual decline for any major automotive brand in India, surpassing even COVID-era drops. For context, the entire EV segment grew ~30% in FY26, meaning Ola lost massive market share.
> Causal chain: While the entire EV scooter market expanded ~30%, Ola's 52% volume decline means it didn't just lose relative share - it lost absolute customers who permanently switched to competitors
> Cells: Row 3: Ola_FY25=340000, Ola_FY26=164000 (-52%); EV_SEGMENT Row 8: Ather +75%, TVS +33%, Bajaj +25%, Hero +206% YoY

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv
> Ola's YoY growth turned negative for the first time in Aug-24 at -3.45%, then worsened progressively to -69.73% by Nov-25 — the worst single-month decline in the dataset. The negative growth persisted for 17 consecutive months (Aug-24 to Dec-25) before turning slightly positive again at +1.19% in Mar-26.
> Causal chain: Service issues compound→negative growth accelerates→brand enters death spiral→extreme OpEx cuts→fragile stabilization
> Cells: Row 30 Ola_YoY_Growth_Pct=-3.45; Row 45 Ola_YoY_Growth_Pct=-69.73; Row 49 Ola_YoY_Growth_Pct=1.19

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv
> Ola's volume collapse from 53,320 units (Mar-24, its all-time peak) to 7,567 units (Nov-25, its nadir) represents an 86% volume destruction in 20 months. This is the most severe volume decline by any major OEM in Indian E2W history.
> Causal chain: Peak demand→service failure→regulatory crisis→volume collapse→survival restructuring
> Cells: Row 25 Ola=53320; Row 45 Ola=7567

> [!data] Source: PROFIT_AND_LOSS.csv
> Ola Electric's annual revenue grew from Rs 0.86 Cr in FY21 to Rs 5,009.83 Cr in FY24 (5,826x growth over 3 years), then declined to Rs 4,514 Cr in FY25 (-9.9% YoY decline) as the service crisis hit sales.
> Causal chain: Massive scale-up post-IPO was followed by service quality failures that triggered demand collapse and revenue decline in FY25.
> Cells: Row 2: Sales values for Mar-21 through Mar-25

> [!data] Source: QUATERS.csv
> Quarterly revenue peaked at Rs 1,644 Cr (Q1 FY25 - Jun-24) then collapsed 71.4% to Rs 470 Cr (Q4 FY26 - Dec-25). The sequential quarterly decline accelerated through Q4 FY25 and Q1 FY26.
> Causal chain: Service crisis (Oct 2024 CCPA notice) caused demand collapse that accelerated through Q4 FY25 and Q1 FY26, with the steepest drops in the crisis aftermath quarters.
> Cells: Row 2: Sales values from Sep-23 through Dec-25

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv
> Unit sales trajectory: 108K (Q1 FY25) -> 95K (Q2) -> 82K (Q3) -> 74K (Q4) -> 48K (Q1 FY26) -> 32K (Q2 FY26 - trough) -> 35K (Q3) -> 39K (Q4 FY26). Trough was 32K units in Q2 FY26, down 70% from peak 108K.
> Causal chain: CCPA show-cause notice (Oct 2024) and viral negative sentiment triggered a demand collapse that bottomed at 32K units 4 quarters later.
> Cells: Row 2-9: Col D (Units_Sold)

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv
> Revenue trajectory: Rs 1,644 Cr (Q1 FY25) -> 1,450 Cr -> 1,210 Cr -> 1,100 Cr -> 680 Cr (Q1 FY26) -> 450 Cr (Q2 FY26 - trough) -> 480 Cr (Q3) -> 520 Cr (Q4). Revenue fell 73% from peak to trough.
> Causal chain: Every quarter from Q1 FY25 to Q2 FY26 showed sequential revenue decline, followed by stabilization and slight recovery in Q3-Q4 FY26 as Hyperservice initiative began showing results.
> Cells: Row 2-9: Col B (Revenue_Cr)

> [!data] Source: financial_mda.txt
> Total 247,437 units of Ola S1 and S1 Pro sold from inception through Jun 30, 2023. Scooter sales volumes: 20,948 units (FY22), 156,251 units (FY23), 70,238 units (Q1 FY24 alone).
> Causal chain: From 0 to 247K units in 18 months demonstrated rapid execution capability that impressed IPO investors.
> Cells: Page 314-315: Sales volume data

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP revenue trajectory: FY21 revenue from operations was Rs 0.86 Cr (Rs 8.64M), FY22 revenue from operations was Rs 373.42 Cr (Rs 3,734.23M), FY23 revenue from operations was Rs 2,630.93 Cr (Rs 26,309.27M), and three-months ended Jun 30, 2023 revenue was Rs 1,242.75 Cr (Rs 12,427.46M).
> Context: Pages 327-328, Summary Results of Operations tables

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP total income progression: FY21 Rs 106.08 Cr (Rs 1,060.81M), FY22 Rs 456.26 Cr (Rs 4,562.60M), FY23 Rs 2,782.70 Cr (Rs 27,826.97M), Q1 FY24 Rs 1,278.68 Cr (Rs 12,786.75M). Revenue from operations grew from 0.81% of total income in FY21 to 97.19% in Q1 FY24, demonstrating transition from pre-revenue to commercial stage.
> Context: Page 327, Summary Results of Operations table

> [!data] Source: ola_ipo/financial_mda.txt
> Total income for Q1 FY24 was Rs 12,786.75M comprising revenue from operations of Rs 12,427.46M and other income of Rs 359.29M. Other income primarily included interest on bank deposits of Rs 193.93M, gain on disposal of mutual fund units of Rs 66.70M, and Tamil Nadu government incentive of Rs 49.02M.
> Context: Pages 327-328

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP revenue from operations increased from Rs 3,734.23M (FY22) to Rs 26,309.27M (FY23) primarily due to increase in Ola S1 Pro sales and commencement of Ola S1 sales in Sep 2022. Revenue from finished products constituted 87.27% (Q1 FY24), 87.55% (FY23), and 85.07% (FY22) of revenue from operations.
> Context: Pages 313, 329

> [!data] Source: ola_ipo/financial_mda.txt
> Revenue recognized upon delivery and same-day vehicle registration. Revenue excludes GST and is net of returns and trade discounts. Prior to Mar 31, 2023, chargers were sold separately; from Mar 31, 2023 onwards, chargers are included with all scooter purchases.
> Context: Page 313

> [!data] Source: ola_ipo/financial_mda.txt
> Ola became the best-selling E2W brand in India within 9 months of first delivery (Dec 2021), with over 31% market share in Q1 FY24 based on VAHAN registrations, according to the Redseer Report commissioned for the DRHP.
> Context: Page 312

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> FY26 total units: 164,000 vs ~340,000 in FY25 — a 52% year-on-year decline in volume.
> Context: Section 1: Market Share Collapse

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Quarterly revenue progression: Rs 1,644 Cr (Q1 FY25) -> Rs 1,450 Cr (Q2) -> Rs 1,210 Cr (Q3) -> Rs 1,100 Cr (Q4) -> Rs 680 Cr (Q1 FY26) -> Rs 450 Cr (Q2) -> Rs 480 Cr (Q3) -> Rs 520 Cr (Q4 FY26). Revenue stabilized in Q3-Q4 FY26 after 6 quarters of sequential decline.
> Context: Section 3: Financial Restructuring — Quarterly progression

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> EBITDA turned positive for the first time in Q3 FY26 (+2.1%) and improved to +4.5% in Q4 FY26, driven by 42% OpEx reduction and record gross margins from in-house cell production.
> Context: Section 3: Financial Restructuring — The paradox explained

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> New EBITDA breakeven: 15,000 units/month (down from ~40,000+ previously), enabled by Gigafactory cost advantages and extreme OpEx restructuring.
> Context: Section 3: Financial Restructuring — The paradox explained

## Connections

### Causes
- [[Market/FAME_II_Scheme]] expiry (Mar-2024) triggered 36% single-month volume collapse and forced ASP cuts from Rs 1,35,000 to Rs 98,000 (-27%)
- [[Service Crisis]] eroded trust; CCPA show-cause notice (Oct-2024) was the catalytic event
- [[Technology/Gigafactory_Updates]] integration reduced battery cost from $130/kWh (imported) to $85/kWh (in-house), enabling margin recovery

### Effects
- [[EBITDA]] turned positive (+2.1% Q3 FY26, +4.5% Q4 FY26) for first time ever
- Breakeven volume dropped from ~40,000 to ~15,000 units/month
- Stock price crashed from ~Rs 150 (post-IPO peak) to ~Rs 29

### Amplifiers
- [[Opportunities/S1 X]] cannibalization compressed ASP 34% from Rs 1.35L to Rs 0.89L
- [[Technology/Gen 2 Platform]] with 68.85% component commonality enabled margin improvement despite lower ASP
- [[Technology/LFP_46100_Cell]] cell pivot at $80/kWh delivered 30% BOM reduction

### Linked Nodes
- [[Financial/Quarterly Losses]]
- [[Financial/Unit Economics]]
- [[Financial/Cash Flow Analysis]]
- [[Market/E2W Market India]]
- [[Market/EV Policy]]
- [[Risks/Subsidy Dependency]]
- [[Post-IPO_Updates]]
