# Cash Burn

> [!data] Source: ola/BALANCE_SHEET.csv, ola/CASH_FLOW_AND_DERIVED.csv
> Ola Electric's cash runway is critically short: Rs 3,516 Cr cash at FY25-end, burning Rs 2,391 Cr annually from operations. At this rate, Ola has approximately 1.5 years of runway before needing emergency funding, without additional financing.
> Causal chain: Ola's negative operating cash flow of Rs 2,391 Cr in FY25, combined with Rs 3,516 Cr cash, means the company needs either dramatic margin improvement or another major fundraising round within 18 months
> Cells: Row 14, Col F (Mar-25) = 3516; CASH_FLOW Row 2, Col F (Mar-25) = -2391

> [!data] Source: ola/CASH_FLOW_AND_DERIVED.csv
> Cash from Operations was consistently negative: Rs -252 Cr (FY21), -885 Cr (FY22), -1,507 Cr (FY23), -633 Cr (FY24), -2,391 Cr (FY25). Total operating cash outflow over 5 years: Rs 5,668 Cr.
> Causal chain: Ola has never generated positive operating cash flow; every year of operations consumed cash, funded by financing activities (IPO and debt).
> Cells: Row 2: Cash from Operating Activity for Mar-21 through Mar-25

> [!data] Source: ola/PROFIT_AND_LOSS.csv
> Ola's net loss of Rs 2,276 Cr in FY25 was the largest ever for an Indian auto company, exceeding Ather's cumulative losses. Ola's expense-to-revenue ratio was 138.5% - spending Rs 1.39 for every Rs 1 earned.
> Causal chain: The massive loss reflects both operating inefficiency (service crisis driving support costs) and competitive pressure (price cuts to maintain volume against legacy entrants).
> Cells: Row 13, Col F (Mar-25) = -2276; Row 2, Col F = 4514

> [!data] Source: ola/PROFIT_AND_LOSS.csv
> Ola's cumulative losses since FY21: -Rs 199 Cr (FY21) + -Rs 784 Cr (FY22) + -Rs 1,472 Cr (FY23) + -Rs 1,584 Cr (FY24) + -Rs 2,276 Cr (FY25) = total cumulative loss of -Rs 6,315 Cr. The company has never posted a profitable year.
> Causal chain: Continuous losses→accumulated deficit→Rs 6,315 Cr total→funding requirement→dilution or debt→further pressure on stock
> Cells: Row 15 Net profit: Mar-21=-199.23, Mar-22=-784.15, Mar-23=-1472.08, Mar-24=-1584.4, Mar-25=-2276

> [!data] Source: market/POLICY_REGULATORY_TIMELINE.csv
> ACC PLI (Batteries) scheme: Rs 18,100 Cr outlay (2021-2030) for cell manufacturing with minimum 50 GWh capacity bid and DVA requirements. Ola has allocation but disbursement is lagging — cumulative only Rs 2,322 Cr by Dec-2025 against committed targets. The slow disbursement creates cash flow pressure on Ola's Gigafactory investment.
> Causal chain: ACC PLI scheme→Ola gets allocation→disbursement lags→Ola must fund Gigafactory from cash flow→financial strain→delays may impact expansion timeline
> Cells: Row 5 ACC PLI: Outlay_Cr=18100, Key_Conditions='Min 50 GWh capacity bid; DVA requirements'; Row 6 Auto PLI: cumulative disbursement='Rs 2322 Cr by Dec 2025'

> [!data] Source: market/POLICY_REGULATORY_TIMELINE.csv
> Auto PLI scheme (2022-2027) with Rs 25,938 Cr outlay based on incremental sales of AAT products with minimum 50% DVA. Cumulative disbursement only Rs 2,322 Cr by Dec-2025 — 9% of total allocation disbursed in 3+ years. Slow PLI disbursement adds to Ola's cash flow pressure as it awaits policy-linked incentives.
> Causal chain: Policy announced→companies invest→disbursement lags→Ola awaiting incentives→cash flow mismatch→investment burden on Ola's balance sheet→dependence on policy execution
> Cells: Row 6 Auto PLI: Outlay_Cr=25938, Key_Conditions='Min 50% DVA; investment threshold', Cumulative disbursement='Rs 2322 Cr by Dec 2025'

> [!data] Source: ola/PROFIT_AND_LOSS.csv
> Other Income grew from Rs 98.34 Cr (FY21) to Rs 391 Cr (FY25) — 4x growth, partly from government incentives (Tamil Nadu SGST reimbursement) and interest on IPO proceeds deposits.
> Causal chain: Tamil Nadu state incentives and IPO proceeds parked in deposits generated growing other income, partially offsetting operating losses.
> Cells: Row 10: Other Income for Mar-21 through Mar-25

> [!data] Source: ola/BALANCE_SHEET.csv
> Receivables jumped from Rs 0.38 Cr (FY21) to Rs 158.48 Cr (FY24) before collapsing to Rs 9 Cr (FY25) — suggesting aggressive collections or factoring as cash became tight. Inventory grew from Rs 3.22 Cr (FY21) to Rs 784 Cr (FY25).
> Causal chain: The receivables collapse from FY24 to FY25 (-94%) alongside revenue decline suggests either factoring receivables or sales shift to cash/dealer model.
> Cells: Row 12: Receivables, Row 13: Inventory for Mar-21 through Mar-25

> [!data] Source: ola/PROFIT_AND_LOSS.csv, ola/QUATERS.csv
> New EBITDA breakeven: 15,000 units/month (down from ~40,000+ previously). Current run-rate ~13,000 units/month. Cash on hand: ~Rs 3,516 Cr (from IPO proceeds). Runway: 12-18 months at current burn.
> Causal chain: Drastic cost cutting reduced the breakeven threshold from 40K to 15K units/month. At 13K current run-rate, Ola is within striking distance of cash-flow positivity.
> Cells: PROFIT_AND_LOSS Row 14 Cash: Mar-25=3516; QUATERS Row 7-9: Units sold Q3/Q4 FY26

## Connections
**Causes:** [[Technology/R&D Investment]], [[Risks/Gigafactory Execution]]
**Effects:** [[Strategy/Operating Leverage]], [[Financial/Cash Flow Analysis]]
**Amplifiers:** [[Risks/Financial Losses]]
**Linked Nodes:** [[Financial/IPO Proceeds]], [[Companies/SoftBank Vision Fund]]
