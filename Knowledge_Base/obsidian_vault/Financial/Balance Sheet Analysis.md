# Balance Sheet Analysis

> [!insight] The Single Most Important Thing: Ola's balance sheet is entirely dependent on external capital. Reserves were Rs 2,909 Cr negative (FY24) before the Rs 5,429 Cr IPO reversed them to positive Rs 732 Cr (FY25). Without continuous equity infusion, accumulated losses would have made the company technically insolvent. Net Block grew from Rs 2,491 Cr to Rs 3,154 Cr (Gigafactory capitalization), but this asset generates minimal returns at ~16% utilization.

> [!data] Source: BALANCE_SHEET.csv — Total Assets grew from Rs 2,113 Cr (FY21) to Rs 11,075 Cr (FY25), but "Other Assets" ballooned to Rs 7,179 Cr — quality is unclear.

> [!data] Source: BALANCE_SHEET.csv — Net Block: Rs 2,491 Cr (FY24) to Rs 3,154 Cr (FY25) reflects Gigafactory capitalization. CWIP steady at ~Rs 700 Cr.

> [!data] Source: BALANCE_SHEET.csv — Borrowings: Rs 5,684 Cr (FY24) reduced to Rs 3,556 Cr (FY25) via IPO-funded repayment. Interest cost Rs 366 Cr/yr.

> [!data] Source: BALANCE_SHEET.csv — Equity Share Capital doubled from Rs 1,955 Cr to Rs 4,411 Cr in FY25 — 125% dilution.

> [!data] Source: PROFIT_AND_LOSS.csv — Depreciation charge of Rs 566 Cr/yr (FY25) will scale as Gigafactory assets are capitalized, creating fixed-cost headwind.

> [!data] Source: CASH_FLOW_AND_DERIVED.csv — Investments liquidated from Rs 1,102 Cr (FY22) to Rs 40 Cr (FY25) — company burned through its safety buffer.

---

## Annual Balance Sheet (₹ Cr)

| Component | FY21 | FY22 | FY23 | FY24 | FY25 |
|-----------|------|------|------|------|------|
| **Assets** | | | | | |
| Net Block | 104 | 1,025 | 1,219 | 2,491 | 3,154 |
| CWIP | 43 | 83 | 507 | 713 | 702 |
| Investments | 455 | 1,102 | 276 | 64 | 40 |
| Other Assets | 1,510 | 3,186 | 3,571 | 4,468 | 7,179 |
| **Total Assets** | 2,113 | 5,396 | 5,573 | 7,735 | 11,075 |
| | | | | | |
| **Liabilities & Equity** | | | | | |
| Equity Share Capital | 0.01 | 1,955 | 1,955 | 1,955 | 4,411 |
| Reserves | 1,971 | -98 | -1,409 | **-2,909** | 732 |
| Borrowings | 42 | 2,608 | 3,505 | 5,684 | 3,556 |
| Other Liabilities | 100 | 931 | 1,521 | 3,006 | 2,376 |
| **Total L+E** | 2,113 | 5,396 | 5,573 | 7,735 | 11,075 |

---

## Stress Indicators

### 1. Negative Reserves (FY22-FY24)
- Accumulated losses wiped out all reserves by FY22
- FY24: Negative reserves of -₹2,909 Cr
- FY25: Positive ₹732 Cr only due to massive equity infusion, not retained earnings

### 2. Equity Dilution
| Year | Shares (Cr) | Change |
|------|-------------|--------|
| FY21 | 0.001 | Pre-IPO |
| FY22 | 195.54 | IPO + CCPS conversion |
| FY23 | 195.54 | Stable |
| FY24 | 195.54 | Stable |
| FY25 | **441.08** | **+125% dilution** |

### 3. Rising Borrowings
- FY21: ₹42 Cr → FY24: ₹5,684 Cr peak
- FY25: Reduced to ₹3,556 Cr (likely through equity-funded repayment)
- Still significant debt: 0.32x total assets

### 4. Asset Quality
- Other Assets ballooning (₹7,179 Cr in FY25) — unclear quality
- Investments declining (₹1,102 → ₹40 Cr) — liquidated for cash

---

> [!data] Source: PROFIT_AND_LOSS.csv
> Interest cost grew from Rs 0.79 Cr (FY21) to Rs 366 Cr (FY25) - a 463x increase, while borrowings rose from Rs 42.18 Cr to Rs 3,556 Cr (84x). Interest-to-borrowing ratio suggests increasing cost of debt.
> Causal chain: Rising debt to fund CapEx and operating losses created growing interest burden that compounded losses.
> Cells: Row 12: Interest for Mar-21 through Mar-25

> [!data] Source: BALANCE_SHEET.csv
> Equity Share Capital went from Rs 0.01 Cr (FY21) to Rs 1,955.45 Cr (FY22-FY24) to Rs 4,411 Cr (FY25). Reserves went from Rs 1,970.6 Cr (FY21) positive to deeply negative Rs -2,909.43 Cr (FY24) before bouncing to Rs 732 Cr (FY25) in positive territory due to IPO.
> Causal chain: Cumulative losses eroded reserves deeply negative until the IPO infusion restored positive reserves in FY25.
> Cells: Row 2: Equity Share Capital, Row 3: Reserves for Mar-21 through Mar-25

> [!data] Source: BALANCE_SHEET.csv
> Borrowings peaked at Rs 5,683.72 Cr (FY24) then declined to Rs 3,556 Cr (FY25) as IPO proceeds were used to repay debt. Net Block grew from Rs 104.18 Cr (FY21) to Rs 3,154 Cr (FY25) - 30x increase reflecting asset build.
> Causal chain: A portion of IPO proceeds was earmarked for debt repayment, visible in the Rs 2,128 Cr reduction from FY24 to FY25.
> Cells: Row 4: Borrowings, Row 7: Net Block for Mar-21 through Mar-25

> [!data] Source: BALANCE_SHEET.csv
> Total Liabilities grew from Rs 2,112.64 Cr (FY21) to Rs 11,075 Cr (FY25) - 5.2x growth. Total Assets grew commensurately from Rs 2,112.64 Cr to Rs 11,075 Cr.
> Causal chain: Assets and liabilities grew in lockstep as the company scaled, funded by a mix of debt and equity.
> Cells: Row 6: Total Liabilities, Row 11: Total Assets for Mar-21 through Mar-25

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP restated consolidated assets: Total assets grew from Rs 2,112.64 Cr (FY21) to Rs 5,395.86 Cr (FY22) to Rs 5,573.17 Cr (FY23) to Rs 5,711.12 Cr (Jun 30, 2023). Non-current assets: Rs 242.94 Cr (FY21), Rs 1,332.33 Cr (FY22), Rs 2,123.54 Cr (FY23), Rs 2,326.49 Cr (Jun 30, 2023).
> Context: Page 333, Selected Restated Consolidated Statement of Assets and Liabilities

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP equity and net worth: Equity share capital steady at Rs 1,955.45 Cr (Rs 19,554.50M) across FY22, FY23, and Jun 30, 2023 (was Rs 0.01 Cr in FY21). Instruments entirely equity in nature: Rs 1,809.70 Cr (Jun 30, 2023/FY23), Rs 1,804.13 Cr (FY22), Rs 0.007 Cr (FY21). Other equity: negative Rs 1,653.64 Cr (Jun 30, 2023), negative Rs 1,408.70 Cr (FY23), negative Rs 98.12 Cr (FY22), positive Rs 1,970.60 Cr (FY21).
> Context: Page 333, Reconciliation of Net Worth

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP net worth declined from Rs 1,970.62 Cr (FY21) to Rs 3,661.45 Cr (FY22) to Rs 2,356.44 Cr (FY23) to Rs 2,111.51 Cr (Jun 30, 2023). The FY22 increase was from CCPS issuance; subsequent decline was due to cumulative losses.
> Context: Page 333

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP liability structure: Total liabilities Rs 142.03 Cr (FY21), Rs 1,734.41 Cr (FY22), Rs 3,216.73 Cr (FY23), Rs 3,599.61 Cr (Jun 30, 2023). Non-current liabilities: Rs 4.31 Cr (FY21), Rs 577.90 Cr (FY22), Rs 865.82 Cr (FY23), Rs 872.88 Cr (Jun 30, 2023). Current liabilities: Rs 137.72 Cr (FY21), Rs 1,156.51 Cr (FY22), Rs 2,350.90 Cr (FY23), Rs 2,726.73 Cr (Jun 30, 2023).
> Context: Page 333

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP current assets decreased from Rs 4,063.53 Cr (FY22) to Rs 3,449.63 Cr (FY23) to Rs 3,384.63 Cr (Jun 30, 2023) primarily due to reduction in cash and cash equivalents used for business operations. FY22 increase was from CCPS proceeds.
> Context: Page 333

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP non-current liability increase from Rs 4.31 Cr (FY21) to Rs 577.90 Cr (FY22) to Rs 865.82 Cr (FY23) primarily due to term loans availed for setting up manufacturing facility.
> Context: Page 333

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP current liability increase from Rs 137.72 Cr (FY21) to Rs 1,156.51 Cr (FY22) to Rs 2,350.90 Cr (FY23) primarily due to short-term credit facilities for working capital, outstanding creditor dues, and related party payments.
> Context: Page 333

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP net asset value per equity share: Rs 5.83 (FY21), Rs 10.43 (FY22), Rs 6.26 (FY23), Rs 5.61 (Jun 30, 2023). EPS basic/diluted: (Rs 0.59) FY21, (Rs 2.23) FY22, (Rs 3.91) FY23, (Rs 0.71) Q1 FY24. Return on Net Worth: negative 10.11% (FY21), negative 21.42% (FY22), negative 62.47% (FY23), negative 12.65% (Q1 FY24).
> Context: Pages 309, 311

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP total equity and liabilities: Rs 2,112.64 Cr (FY21), Rs 5,395.86 Cr (FY22), Rs 5,573.17 Cr (FY23), Rs 5,711.12 Cr (Jun 30, 2023). Balance sheet consistently balanced with matching totals.
> Context: Page 333

> [!data] Source: ola_ipo/outstanding_litigation.txt
> Capitalization statement as of Jun 30, 2023: Current borrowings Rs 914.84 Cr (Rs 9,148.37M), Non-current borrowings Rs 701.74 Cr (Rs 7,017.36M), Total borrowings Rs 1,616.57 Cr (Rs 16,165.73M), Total equity Rs 2,111.51 Cr (Rs 21,115.05M). Borrowings/Total Equity ratio: 0.77. Non-current borrowings/Total Equity: 0.33.
> Context: Page 335, Capitalisation Statement

## Connections

### Causes
- [[Technology/Gigafactory_Updates]] construction drove Net Block from Rs 104 Cr (FY21) to Rs 3,154 Cr (FY25)
- Cumulative losses of Rs 6,116 Cr (FY22-FY25) destroyed reserves
- [[IPO]] of Rs 5,429 Cr was the only reason reserves turned positive in FY25
- [[Service Crisis]] crushed revenue, preventing organic reserve accumulation

### Effects
- [[Equity Dilution]] of 125% in a single year (FY25) — existing holders massively diluted
- Borrowings reduced from Rs 5,684 Cr to Rs 3,556 Cr post-IPO, but debt remains significant at 0.32x total assets
- Depreciation charge of Rs 566 Cr/yr creates fixed-cost burden at low utilization
- Total Assets grew 5.2x (Rs 2,113 Cr to Rs 11,075 Cr) but asset turns are poor without revenue

### Amplifiers
- [[PLI ACC]] disbursement lag (per POLICY_REGULATORY_TIMELINE) meant Ola front-loaded capex without subsidy support
- [[Global Overcapacity]] (900 GWh excess) makes Gigafactory B2B pivot difficult
- [[Lithium Carbonate]] at CNY 192,000 (V-shaped recovery) adds input cost pressure

### Linked Nodes
- [[Financial/Cash Flow Analysis]]
- [[Financial/Quarterly Losses]]
- [[Financial/IPO Proceeds]]
- [[Financial/Revenue Trajectory]]
- [[Market/Battery_Supply_Chain]]
- [[Risks/Financial Losses]]
