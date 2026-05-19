# Cash Flow Analysis

> [!insight] The Single Most Important Thing: Ola is in a funding-dependent cycle — "Issue equity → Fund losses → Deplete cash → Issue more equity." Cumulative operating cash outflow of Rs 5,668 Cr (FY21-FY25) has never been positive. The FY25 IPO of Rs 5,429 Cr merely replenished what was already burned. Cash runway at current burn rates is 12-18 months.

> [!data] Source: CASH_FLOW_AND_DERIVED.csv — Operating CF: FY22: -885 Cr, FY23: -1,507 Cr, FY24: -633 Cr, FY25: -2,391 Cr. Cumulative operating cash outflow FY22-FY25: Rs 5,416 Cr.

> [!data] Source: CASH_FLOW_AND_DERIVED.csv — Investing CF: FY24: -1,136 Cr, FY25: -2,864 Cr (Gigafactory construction). Cumulative investing outflow FY22-FY25: Rs 5,639 Cr.

> [!data] Source: CASH_FLOW_AND_DERIVED.csv — Financing CF: FY25: +5,429 Cr (IPO proceeds). Cumulative financing inflow FY22-FY25: Rs 10,763 Cr — the company is entirely funded by external capital.

> [!data] Source: BALANCE_SHEET.csv — Cash position: Mar-24: Rs 1,663 Cr, Mar-25: Rs 3,516 Cr (only increased due to IPO).

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv — EBITDA turned positive at +2.1% (Q3 FY26) for first time ever, reaching +4.5% (Q4 FY26). Operating cash generation may follow with a lag.

---

## Annual Cash Flow Summary (₹ Cr)

| Component | FY21 | FY22 | FY23 | FY24 | FY25 |
|-----------|------|------|------|------|------|
| Operating CF | -252 | -885 | -1,507 | -633 | **-2,391** |
| Investing CF | +549 | -1,322 | -319 | -1,136 | **-2,864** |
| Financing CF | +3 | +3,085 | +659 | +1,590 | **+5,429** |
| **Net CF** | +300 | +878 | -1,167 | -179 | +174 |

---

## FY25: The Alarm Bell Year

### Operating Cash Flow: -₹2,391 Cr
- Nearly **4x worse** than FY24 (-₹633 Cr)
- Revenue declining while cash costs remain
- Working capital build consuming cash

### Investing Cash Flow: -₹2,864 Cr
- Gigafactory construction capex ramping
- Product development (motorcycles, S1 X series)
- Capacity expansion

### Financing Cash Flow: +₹5,429 Cr
- Massive equity raise to cover the cash burn
- Share count increased from 1,955 Cr → 4,411 Cr (125% dilution)
- The company is surviving on external capital, not operations

---

## Cash Position

| Date | Cash & Bank (₹ Cr) |
|------|---------------------|
| Mar-21 | 1,366 |
| Mar-22 | 2,097 |
| Mar-23 | 1,529 |
| Mar-24 | 1,663 |
| Mar-25 | 3,516 |

FY25 cash increased only due to massive financing inflow (+₹5,429 Cr), not operational improvement.

---

## Sustainability Assessment

Without continuous external funding, Ola Electric has **12-18 months of cash runway** at current burn rates (Rs 3,516 Cr cash at Mar-25 vs ~Rs 2,400 Cr/yr operating burn). The company is in a **funding-dependent cycle**:
```
Issue equity → Fund losses → Deplete cash → Issue more equity
```

> [!data] Source: ola/BALANCE_SHEET.csv
> Ola Electric's cash runway is critically short: Rs 3,516 Cr cash at FY25-end, burning Rs 2,391 Cr annually from operations. At this rate, Ola has approximately 1.5 years of runway before needing emergency funding, without additional financing.
> Causal chain: Ola's negative operating cash flow of Rs 2,391 Cr in FY25, combined with Rs 3,516 Cr cash, means the company needs either dramatic margin improvement or another major fundraising round within 18 months
> Cells: Row 14, Col F (Mar-25) = 3516; CASH_FLOW Row 2, Col F (Mar-25) = -2391

> [!data] Source: PROFIT_AND_LOSS.csv
> Ola's cumulative losses since FY21: -Rs 199 Cr (FY21) + -Rs 784 Cr (FY22) + -Rs 1,472 Cr (FY23) + -Rs 1,584 Cr (FY24) + -Rs 2,276 Cr (FY25) = total cumulative loss of -Rs 6,315 Cr. The company has never posted a profitable year and losses accelerated in FY25 as the service crisis destroyed volumes.
> Causal chain: Continuous losses→accumulated deficit→Rs 6,315 Cr total→funding requirement→dilution or debt→further pressure on stock→acquisition becomes viable exit for investors
> Cells: Row 15 Net profit: Mar-21=-199.23, Mar-22=-784.15, Mar-23=-1472.08, Mar-24=-1584.4, Mar-25=-2276

> [!data] Source: QUATERS.csv + QUARTERLY_FINANCIALS_EXT.csv
> Ola's quarterly net loss trajectory: -Rs 347 Cr (Jun-24, peak revenue quarter) → -Rs 870 Cr (Mar-25, worst quarter) → -Rs 487 Cr (Dec-25, still deep losses despite restructuring). Despite EBITDA turning positive in Q3 FY26 (+2.1%), net losses continue due to depreciation (Rs 170 Cr/quarter) and interest (Rs 80 Cr/quarter) from Gigafactory capex.
> Causal chain: EBITDA positive→but high depreciation+interest→net losses continue→cash burn from Gigafactory→funding need→dilution risk→depressed stock continues
> Cells: QUATERS Row 9 Net profit: Jun-24=-347, Mar-25=-870, Dec-25=-487; QUARTERLY_FINANCIALS_EXT Row 7 EBITDA_Margin_Pct=2.1 (Q3 FY26); QUATERS Row 5 Depreciation Dec-25=170, Row 6 Interest Dec-25=80

> [!data] Source: PROFIT_AND_LOSS.csv + QUATERS.csv
> Ola's depreciation rose from Rs 19.6 Cr (Mar-21) to Rs 566 Cr (Mar-25) — a 29x increase — driven by Gigafactory asset capitalization. Quarterly depreciation reached Rs 170 Cr by Dec-25. Even after EBITDA breakeven, Ola will report net losses of ~Rs 250 Cr/quarter from depreciation + interest alone.
> Causal chain: Asset build-up→depreciation charges→non-cash but impacts net income→reported losses despite operational profitability→investor perception negative→stock pressure continues
> Cells: PROFIT Row 11 Depreciation: Mar-21=19.62, Mar-25=566; QUATERS Row 5 Depreciation Dec-25=170

> [!data] Source: CASH_FLOW_AND_DERIVED.csv
> Cash from Operations was consistently negative: Rs -252 Cr (FY21), -885 Cr (FY22), -1,507 Cr (FY23), -633 Cr (FY24), -2,391 Cr (FY25). Total operating cash outflow over 5 years: Rs 5,668 Cr.
> Causal chain: Ola has never generated positive operating cash flow; every year of operations consumed cash, funded by financing activities (IPO and debt).
> Cells: Row 2: Cash from Operating Activity for Mar-21 through Mar-25

> [!data] Source: BALANCE_SHEET.csv
> Cash & Bank balance: Rs 1,365.93 Cr (FY21) -> Rs 2,096.76 Cr (FY22) -> Rs 1,529.29 Cr (FY23) -> Rs 1,663.09 Cr (FY24) -> Rs 3,516 Cr (FY25). The FY25 jump reflects IPO proceeds of ~Rs 5,500 Cr partially offset by debt repayment and operating losses.
> Causal chain: IPO proceeds boosted cash to Rs 3,516 Cr, giving Ola an estimated 12-18 month runway at current burn rate (~Rs 200-300 Cr/quarter).
> Cells: Row 14: Cash & Bank for Mar-21 through Mar-25

> [!data] Source: Ola_after_ipo.txt
> New EBITDA breakeven: 15,000 units/month (down from ~40,000+ previously). Current run-rate ~13,000 units/month. Cash on hand: ~Rs 3,516 Cr (from IPO proceeds). Runway: 12-18 months at current burn.
> Causal chain: Drastic cost cutting reduced the breakeven threshold from 40K to 15K units/month. At 13K current run-rate, Ola is within striking distance of cash-flow positivity.
> Cells: Section 3: Financial Restructuring section

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv
> ACC PLI (Batteries) scheme: Rs 18,100 Cr outlay (2021-2030) for cell manufacturing with minimum 50 GWh capacity bid and DVA requirements. Ola has allocation but disbursement is lagging — cumulative only Rs 2,322 Cr by Dec-2025 against committed targets. The slow disbursement creates cash flow pressure on Ola's Gigafactory investment.
> Causal chain: ACC PLI scheme→Ola gets allocation→disbursement lags→Ola must fund Gigafactory from cash flow→financial strain→delays may impact expansion timeline
> Cells: Row 5 ACC PLI: Outlay_Cr=18100, Key_Conditions='Min 50 GWh capacity bid; DVA requirements'; Row 6 Auto PLI: cumulative disbursement='Rs 2322 Cr by Dec 2025'

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv
> Auto PLI scheme (2022-2027) with Rs 25,938 Cr outlay based on incremental sales of AAT products with minimum 50% DVA. Cumulative disbursement only Rs 2,322 Cr by Dec-2025 — 9% of total allocation disbursed in 3+ years. Slow PLI disbursement adds to Ola's cash flow pressure as it awaits policy-linked incentives.
> Causal chain: Policy announced→companies invest→disbursement lags→Ola awaiting incentives→cash flow mismatch→investment burden on Ola's balance sheet→dependence on policy execution
> Cells: Row 6 Auto PLI: Outlay_Cr=25938, Key_Conditions='Min 50% DVA; investment threshold', Cumulative disbursement='Rs 2322 Cr by Dec 2025'

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP cash flow summary: Operating CF negative Rs 252.03 Cr (FY21), negative Rs 884.95 Cr (FY22), negative Rs 1,507.27 Cr (FY23), negative Rs 97.24 Cr (Q1 FY24). Investing CF: positive Rs 548.94 Cr (FY21), negative Rs 1,321.83 Cr (FY22), negative Rs 318.55 Cr (FY23), positive Rs 154.62 Cr (Q1 FY24). Financing CF: positive Rs 3.15 Cr (FY21), positive Rs 3,084.83 Cr (FY22), positive Rs 658.70 Cr (FY23), negative Rs 29.52 Cr (Q1 FY24).
> Context: Page 333-334, Cash Flows table

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP cash and cash equivalents: Rs 358.19 Cr (FY21), Rs 1,235.00 Cr (FY22), Rs 242.91 Cr (FY23), Rs 231.71 Cr (Jun 30, 2023). Bank balances other than cash and cash equivalents: Rs 908.48 Cr (Jun 30, 2023).
> Context: Pages 321, 333

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP cash used in operating activities: Q1 FY24 negative Rs 97.24 Cr with operating loss before working capital changes of Rs 187.32 Cr. Difference primarily from increase in trade payables of Rs 350.08 Cr and other financial liabilities of Rs 48.55 Cr, partially offset by increase in other financial assets of Rs 192.70 Cr and inventories of Rs 59.74 Cr.
> Context: Page 334

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP cash used in operating activities FY23: negative Rs 1,507.27 Cr with operating loss before working capital changes of Rs 1,202.76 Cr. Driven by inventory build of Rs 299.67 Cr and other financial assets of Rs 520.69 Cr, partially offset by trade payables increase of Rs 338.07 Cr.
> Context: Page 334

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP investing activities Q1 FY24: Net cash generated Rs 154.62 Cr primarily from net proceeds from interest bearing deposits of Rs 450.53 Cr, partially offset by acquisition of PPE of Rs 161.98 Cr, investment in interest bearing deposits of Rs 78.67 Cr, and development expenditure on intangible assets of Rs 75.33 Cr.
> Context: Page 334

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP investing activities FY23: Net cash used Rs 318.55 Cr including acquisition of PPE Rs 433.60 Cr and intangible assets Rs 5.98 Cr, partially offset by proceeds from interest bearing deposits of Rs 3,412.04 Cr and sale of mutual fund units of Rs 882.88 Cr.
> Context: Page 334

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP investing activities FY22: Net cash used Rs 1,321.83 Cr including acquisition of PPE Rs 763.57 Cr, purchase of mutual fund units Rs 2,345.69 Cr, and acquisition of intangible assets Rs 13.38 Cr, partially offset by proceeds from interest bearing deposits of Rs 10,486.56 Cr.
> Context: Page 334

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP capital expenditure on property, plant and equipment (acquisition): Rs 108.53 Cr (FY21), Rs 763.57 Cr (FY22), Rs 433.60 Cr (FY23), Rs 161.98 Cr (Q1 FY24). Development expenditure on internally generated intangible assets: nil (FY21), Rs 110.33 Cr (FY22), Rs 403.03 Cr (FY23), Rs 75.33 Cr (Q1 FY24).
> Context: Page 321, Capital allocation strategy

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP net decrease in cash and cash equivalents: Rs 300.07 Cr increase (FY21), Rs 878.05 Cr increase (FY22), Rs 1,167.12 Cr decrease (FY23), Rs 27.86 Cr increase (Q1 FY24).
> Context: Page 334

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP liquidity position as of Jun 30, 2023: Cash and cash equivalents Rs 231.71 Cr (Rs 2,317.08M), bank balances other than cash Rs 908.48 Cr (Rs 9,084.80M), non-current borrowings Rs 701.74 Cr (Rs 7,017.36M), current borrowings Rs 914.84 Cr (Rs 9,148.37M). Management believed sufficient liquidity for next 12 months including expected cash from operations, borrowings, and Offer proceeds.
> Context: Pages 333-334

## Connections

### Causes
- [[Service Crisis]] drove unit sales from 108K/quarter to 39K/quarter, collapsing revenue
- [[Technology/Gigafactory_Updates]] capex of Rs 1,136 Cr (FY24) + Rs 2,864 Cr (FY25) = Rs 4,000 Cr consumed cash
- [[Market/FAME_II_Scheme]] expiry forced Rs 40,000 ASP pass-through to consumers, depressing volumes
- [[Opportunities/S1 X]] mix shift to 75% compressed ASP from Rs 1.35L to Rs 0.89L

### Effects
- IPO of Rs 5,429 Cr was entirely consumed by operations and capex in FY25
- Shares diluted 125% (1,955 Cr to 4,411 Cr) in one year
- Borrowings peaked at Rs 5,684 Cr (Mar-24), partially repaid post-IPO to Rs 3,556 Cr
- EBITDA positive (+4.5% in Q4 FY26) — operating cash may follow

### Amplifiers
- [[PLI ACC]] disbursement has been "lagging" behind capex milestones (per POLICY_REGULATORY_TIMELINE)
- [[Global Overcapacity]] (900 GWh excess) makes B2B cell sales a low-margin business
- [[Lithium Carbonate]] V-shaped recovery from CNY 95,000 to CNY 192,000 adds input cost pressure

### Linked Nodes
- [[Financial/Quarterly Losses]]
- [[Financial/Balance Sheet Analysis]]
- [[Financial/IPO Proceeds]]
- [[Financial/Post-IPO_Updates]]
- [[Market/Battery_Supply_Chain]]
- [[Market/Policy_Regulatory_Timeline]]
- [[Risks/Financial Losses]]
