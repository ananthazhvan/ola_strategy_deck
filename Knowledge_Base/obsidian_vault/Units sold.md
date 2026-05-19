# Units Sold

> [!data] Source: market/COMPETITOR_EV_METRICS.csv
> Ola's FY26 EV unit decline of -52% (340K to 164K) is the steepest annual decline for any major automotive brand in India, surpassing even COVID-era drops. For context, the entire EV segment grew ~30% in FY26, meaning Ola lost massive market share.
> Causal chain: While the entire EV scooter market expanded ~30%, Ola's 52% volume decline means it didn't just lose relative share - it lost absolute customers who permanently switched to competitors
> Cells: Row 3: Ola_FY25=340000, Ola_FY26=164000 (-52%); EV_SEGMENT Row 8: Ather +75%, TVS +33%, Bajaj +25%, Hero +206% YoY

> [!data] Source: ola/QUARTERLY_FINANCIALS_EXT.csv
> Unit sales trajectory: 108K (Q1 FY25) -> 95K (Q2) -> 82K (Q3) -> 74K (Q4) -> 48K (Q1 FY26) -> 32K (Q2 FY26 - trough) -> 35K (Q3) -> 39K (Q4 FY26). Trough was 32K units in Q2 FY26, down 70% from peak 108K.
> Causal chain: CCPA show-cause notice (Oct 2024) and viral negative sentiment triggered a demand collapse that bottomed at 32K units 4 quarters later
> Cells: Row 2-9: Col D (Units_Sold)

> [!data] Source: ola/PRODUCT_MIX_QUARTERLY.csv
> Ola's sales trajectory shows stabilization in Q4 FY26 (39,000 units, Rs 520 Cr) compared to Q2 FY26 trough (32,000 units, Rs 450 Cr). The Gen 3 S1 launch and service improvements are showing early signs of volume recovery, but at 39K/quarter vs 108K/quarter peak.
> Causal chain: Q4 FY26 stabilization (39K units) suggests Ola may have found a floor, but at 36% of peak quarterly volume (108K), the company needs to nearly 3x current sales to return to FY25-level revenue
> Cells: Row 7 (Q2_FY26): Units=32000, Revenue=450; Row 9 (Q4_FY26): Units=39000, Revenue=520

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv
> Ola's volume collapse from 53,320 units (Mar-24, its all-time peak) to 7,567 units (Nov-25, its nadir) represents an 86% volume destruction in 20 months. This is the most severe volume decline by any major OEM in Indian E2W history.
> Causal chain: Peak demand→service failure→regulatory crisis→volume collapse→survival restructuring
> Cells: Row 25 Ola=53320; Row 45 Ola=7567

> [!data] Source: ola/SERVICE_CRISIS_TIMELINE.csv, ola/CUSTOMER_SENTIMENT.csv
> Ola's Hyperservice initiative (1,000 service vans + AI diagnostics launched Q1 FY26) claimed 50% backlog reduction and 80% same-day resolution by Q3 FY26. Market share bottomed at 9% before recovering to 16% by Q4 FY26. Q4 FY26 unit sales of 39,000 represent stabilization but at only 36% of the 108,000 peak quarterly volume.
> Causal chain: Hyperservice deployment→operational metrics improve→market share bottom→partial recovery from 9% to 16%→but volume still at 36% of peak→trust recovery lags operational improvement
> Cells: SERVICE_CRISIS Row 11 Hyperservice deployed Q1-FY26; Row 12 'Service backlog reduced 50% - 80% same-day resolution claimed' Q3-FY26; Row 12 Market share 9%, Row 13 recovered to 16%

> [!data] Source: ola/financial_mda.txt
> Total 247,437 units of Ola S1 and S1 Pro sold from inception through Jun 30, 2023. Scooter sales volumes: 20,948 units (FY22), 156,251 units (FY23), 70,238 units (Q1 FY24 alone). From 0 to 247K units in 18 months demonstrated rapid execution capability that impressed IPO investors before the service crisis.
> Causal chain: From 0 to 247K units in 18 months demonstrated rapid execution capability that impressed IPO investors
> Cells: Page 314-315: Sales volume data

## Connections
**Causes:** [[Risks/Revenue Decline FY25]], [[Risks/Service_Center_Crisis]]
**Effects:** [[Financial/Revenue Trajectory]], [[Market/VAHAN_Market_Share_Story]]
**Amplifiers:** [[Risks/Customer_Sentiment_Analysis]]
**Linked Nodes:** [[Technology/Gen_3_Platform]], [[Risks/Competition]]
