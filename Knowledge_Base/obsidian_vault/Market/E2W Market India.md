# Indian E2W Market

> [!insight] The Single Most Important Thing: India's E2W market grew from ~50K monthly units to ~149K (Mar-26) while Ola's share collapsed from 55.81% to 15.95%. Legacy players (TVS + Bajaj + Hero) now control 65.23% of monthly registrations. The market is NOT shrinking — Ola is losing share in a rapidly expanding market. The crossover point was Feb-24 when legacy (42.51%) first exceeded Ola (41.92%).

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv — Total market grew from 77,864 (Apr-22) to 148,713 (Mar-26). Ola registrations fell from 53,320 (Mar-24 peak) to 7,567 (Nov-25 trough).

> [!data] Source: EV_SEGMENT_COMPARISON.csv — FY26 market shares: TVS 23.0%, Bajaj 21.0%, Ola 15.9%, Ather 16.0%, Hero Vida 11.0%. Ola's YoY unit growth: -52% (worst among all players).

> [!data] Source: EV_SEGMENT_COMPARISON.csv — Revenue/unit: Ola Rs 223,902 (highest) vs TVS Rs 126,686 vs Bajaj Rs 138,408 vs Ather Rs 139,582. Ola's highest unit price but negative EBITDA.

> [!data] Source: SERVICE_NETWORK_COMPARISON.csv — TVS has 1,000+ pan-India centers, Bajaj has 1,480+ (1,217 TPM-certified). Ola peaked at 900 experience centers but only ~300 had repair capability. Parts availability: Ola 60-75% vs competitors 95%.

> [!data] Source: CUSTOMER_SENTIMENT.csv — Google Play rating: Ola 3.2 vs TVS iQube 4.2 vs Ather 4.0. NPS: negative (below 0). CCPA complaints: 10,000+.

## Market Size & Growth

| Metric | FY2023 | FY2028 (Projected) |
|--------|--------|--------------------|
| E2W Penetration of 2W Sales | ~4.5% | 41-56% |
| Market Size | US$35 billion | US$45 billion |
| Growth Rate | — | 11% CAGR |

---

## Key Growth Drivers

### 1. Total Cost of Ownership
- [[Market/TCO Advantage|E2W TCO ~45% lower]] than ICE 2W over vehicle life
- Fuel cost: electricity = ~1/10th of petrol
- Lower maintenance (fewer moving parts)
- Registration subsidies and tax benefits

### 2. Rising Fuel Prices
- India imports ~87.3% of crude oil
- Petrol/diesel prices rising steadily over 5 years
- Electricity prices stable (India is power surplus: 417 GW capacity vs 221 GW peak demand)

### 3. Government Push
- [[Market/EV Policy|FAME II]], PLI Schemes, 5% GST on EVs
- Net zero emissions target by 2070
- State-level incentives (TN: 100% SGST rebate for 20 years)

### 4. Technology Evolution
- Cell technology improving: NMC (higher energy density) and LFP (safer, longer life)
- Software-defined vehicles enabling connected features
- Electronics as % of vehicle BOM increasing: 5-10pp in last 2-3 years → projected 25-30% by 2030

---

## India's Automotive Context

- India = **15-20% of global 2W production**
- Annual production: ~26 million vehicles
- Auto sector: ~35% of manufacturing GDP, 5-6% of overall GDP
- 3rd largest 4W passenger vehicle market globally

> [!data] Source: competitor_insights.json / market/EV_SEGMENT_COMPARISON.csv
> Legacy players (TVS+Bajaj+Hero) collectively control 55% of the EV scooter market, up from near-zero 3 years ago. TVS leads at 23%, Bajaj at 21%, Ather at 16%, Ola at 15.9%, Hero Vida at 11%.
> Causal chain: Legacy OEMs leveraged existing dealer networks and manufacturing expertise to rapidly scale EV production, overwhelming Ola's first-mover advantage through superior service infrastructure
> Cells: Row 7: Ola=15.9%, Ather=16.0%, TVS=23.0%, Bajaj=21.0%, Hero=11.0%

> [!data] Source: market_insights.json / E2W_MONTHLY_REGISTRATIONS.csv
> The total E2W market grew from 21,500 units (Apr-22) to a peak of 148,713 units (Mar-26) — 6.9x growth — driven by FAME-II subsidies, expanding charging infrastructure, and consumer shift to EVs. Ola's decline occurred against this massive tailwind, amplifying the competitive failure.
> Causal chain: Subsidy support→market expansion→Ola should benefit→but fails to capture growth→structural competitive disadvantage exposed
> Cells: Row 2 Total_Market=21500; Row 49 Total_Market=148713

> [!data] Source: market_insights.json / E2W_MONTHLY_REGISTRATIONS.csv
> TVS Motor grew monthly registrations from 3,000 units (Apr-22) to 42,000 units (Mar-26) — a 14x increase — while expanding EV dealer count from 800 (FY24) to 1,200 (FY26). TVS became the #1 EV player by FY26 with 23% market share.
> Causal chain: Legacy trust→dealer network expansion→service reliability→consumer preference→market leadership capture
> Cells: Row 2 TVS=3000; Row 49 TVS=42000; COMPETITOR_EV_METRICS Row 4 TVS_EV_FY24_Dealer_Count=800, TVS_EV_FY26_Dealer_Count=1200

> [!data] Source: market_insights.json / E2W_MONTHLY_REGISTRATIONS.csv
> Bajaj Auto grew monthly registrations from 1,500 units (Apr-22) to 35,000 units (Mar-26) — a 23x increase. Bajaj expanded EV dealer count from 2,000 (FY24) to 3,800 (FY26), the most aggressive retail expansion in the industry.
> Causal chain: Existing ICE dealer network→EV integration→lower service cost→scale advantage→fastest EV growth among legacy
> Cells: Row 2 Bajaj=1500; Row 49 Bajaj=35000; COMPETITOR_EV_METRICS Row 9 Bajaj_EV_FY24_Dealer_Count=2000, Bajaj_EV_FY26_Dealer_Count=3800

> [!data] Source: market_insights.json / E2W_MONTHLY_REGISTRATIONS.csv
> Ather Energy grew monthly registrations from 5,000 (Apr-22) to 28,000 (Mar-26) — a 5.6x increase — and maintained the highest revenue per unit (~Rs 139,582 in FY26) proving premium pricing + reliable service is a winning strategy. Ather overtook Ola in revenue by Q2 FY26.
> Causal chain: Premium product→service reliability→higher ASP→revenue overtake→market validation of quality-over-volume strategy
> Cells: Row 2 Ather=5000; Row 49 Ather=28000; COMPETITOR_EV_METRICS Row 5 Ather_FY26_Revenue_Per_Unit=139582

> [!data] Source: market_insights.json / E2W_MONTHLY_REGISTRATIONS.csv
> Hero Vida entered at 100 units (Sep-22) and grew to 20,000 units (Mar-26), achieving 11% EV market share by FY26. Hero's 6,000+ dealer network and 5-year vehicle warranty (longest in industry) give it a structural advantage despite late entry.
> Causal chain: Decades of trust→massive dealer network→long warranty→consumer confidence→rapid EV market share capture despite late entry
> Cells: Row 7 Hero_Vida=100; Row 49 Hero_Vida=20000; SERVICE_NETWORK_COMPARISON Row 2 Total_Dealer_Network=6000+

> [!data] Source: ola_insights.json / industry_overview_business.txt
> Pre-IPO (H1 FY24): E2W penetration in India was ~4.5% of domestic 2W registrations (Fiscal 2023). Expected to reach 41-56% by Fiscal 2028. Industry CAGR of 11%. India automotive market ~26Mn vehicles annual production contributing 5-6% GDP.
> Causal chain: The massive addressable market (41-56% E2W penetration by FY28) means Ola is shrinking in a growing market — making its share loss even more significant.
> Cells: Page 129-133: Industry Overview data

> [!data] Source: ola_ipo/industry_overview_business.txt
> India automotive market consists of ~26Mn vehicles (annual production FY23), contributing ~35% to manufacturing GDP and 5-6% to overall GDP. India accounts for 15-20% of global 2W production, producing ~19.5Mn 2Ws in FY23 — making it the second largest 2W producer globally after China. Domestic 2W market value was ₹1.4-1.6 Tn (US$17-20 Bn) in FY 2023.
> Context: Pages 133, 138, Industry Overview

> [!data] Source: ola_ipo/industry_overview_business.txt
> E2W penetration grew from ~4.5% (FY23) to ~5.1% of total 2W registrations (H1 FY2024) and is projected to reach 41-56% by FY2028. Global E2W battery pack prices declined ~88% between CY2010 (US$1,183/kWh) and CY2023P (US$139/kWh). Battery pack constitutes 35-40% of E2W BOM cost. Projected additional ~43% reduction in battery pack prices over next 7-8 years.
> Context: Pages 141, 143, Industry Overview

> [!data] Source: ola_ipo/industry_overview_business.txt
> E2Ws have ~45% lower total cost of ownership vs ICE 2Ws over vehicle life, driven by lower fuel costs (~1/10th of petrol), lower maintenance, and registration subsidies. TCO breakeven between E2W and ICE 2W occurs in ~2 years. India imports ~87.3% of crude oil, while electricity prices are stable (India is power surplus: 417 GW capacity vs 221 GW peak demand).
> Context: Pages 133-134, Industry Overview

> [!data] Source: ola_ipo/industry_overview_business.txt
> Domestic 2W sales have headroom: India has ~160 2Ws per '000 population (CY2022) versus higher penetration in SEA countries. Domestic 2W market projected to grow at ~11% CAGR to reach ₹2.8-3.6 Tn (US$35-45 Bn) by FY2028. 86% of scooter sales are in the <₹100K price bracket (ex-showroom, H1 FY2024), reflecting price-conscious mass market.
> Context: Pages 139, Industry Overview

> [!data] Source: ola_ipo/industry_overview_business.txt
> Within scooters, the premium subsegment (>₹100K) has ~75% EV penetration, while the mass market has lower penetration — indicating the growth opportunity lies in affordable price points. EV motorcycle penetration is <1%, primarily in >₹100K segment. India's E2W journey has seen penetration increase 6x between FY2021 and FY2022 and 2x between FY2022 and FY2023.
> Context: Pages 139-140, Industry Overview

> [!data] Source: ola_ipo/industry_overview_business.txt
> Total addressable market for E2W OEMs: ₹4.5-5.4 Tn (US$55-65 Bn) in FY2023, projected to reach ₹8.0-9.1 Tn (US$100-115 Bn) by FY2028. This covers domestic sales of scooters (~5.2Mn units), motorcycles (~10.8Mn), and 4W-passenger vehicles (~3.9Mn) in FY2023, growing to ~32Mn units by FY2028.
> Context: Pages 147, Industry Overview

> [!data] Source: ola_ipo/industry_overview_business.txt
> India had 6,586 public EV charging stations as of March 2023 (632 under FAME I & II), with 419 on national highways. State-level EV subsidies range from ₹2,500-10,000/kWh. MoRTH exempted EVs from permit requirements in October 2018. The Ministry of Power allows sale of electricity as 'service' for EV charging, incentivizing charging infrastructure investment.
> Context: Pages 139, 144, Industry Overview

> [!data] Source: ola_ipo/risk_factors.txt
> Pre-IPO risk: E2W OEMs with vertically integrated approach (controlling R&D, manufacturing, charging network, sales, and after-sales) have generated better outcomes globally. Disruptor OEMs in India have captured >70% of E2W market share (H1 FY2024). Incumbents face challenges including ICE dependency, split R&D focus, limited EV powertrain expertise, and longer product development timelines.
> Context: Pages 148-153, Risk Factors

---

## Connections

### Causes
- [[Market/FAME_II_Scheme]] expiry (Mar-2024) removed Rs 40,000/vehicle subsidy, collapsing Ola's volume 36% in one month
- [[Service Crisis]] (10,000+ CCPA complaints, 7-15 day repair backlogs) drove buyers to [[Companies/TVS Motor]] and [[Companies/Bajaj Auto]]
- [[Legacy Pincer]] — TVS's 1,000+ dealers and Bajaj's 1,480+ dealers with 95% parts availability and Rs 400/visit service cost created insurmountable service economics advantage
- [[Global Overcapacity]] (900 GWh excess) pressured cell prices, making import cheaper than domestic for 2 years

### Effects
- Ola share fell from 55.81% (Apr-22) to 15.95% (Mar-26) — the fastest share destruction in Indian auto history
- [[Companies/TVS Motor]] captured 23% share, [[Companies/Bajaj Auto]] 21%, [[Companies/Ather Energy]] 16%, [[Companies/Hero MotoCorp]] 11% — each growing at Ola's expense
- Legacy (TVS+Bajaj+Hero) monthly registration share rose from 20.93% (Apr-22) to 65.23% (Mar-26)
- Ola's revenue/unit at Rs 223,902 is 1.77x TVS (Rs 126,686) — trapped between premium and mass

### Amplifiers
- [[Risks/CCPA_Regulatory_Intervention]] show-cause notice (Oct-2024) provided official government validation of every customer complaint
- Google Play rating of 3.2 (vs TVS 4.2, Ather 4.0) deters first-time EV buyers at the research stage
- [[Technology/Gen 2 Platform]] (68.85% commonality) enabled S1 X margin improvement despite ASP compression

### Linked Nodes
- [[Market/EV Policy]]
- [[Market/TCO Advantage]]
- [[Market/Policy_Regulatory_Timeline]]
- [[Financial/Revenue Trajectory]]
- [[Financial/Post-IPO_Updates]]
- [[Opportunities/Mass Market E2W]]
- [[Opportunities/Motorcycle Market]]
