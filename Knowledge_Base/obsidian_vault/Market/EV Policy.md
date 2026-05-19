# EV Policy Landscape

> [!insight] The Single Most Important Thing: India's E2W subsidy is on a one-way path to zero — from Rs 40,000/vehicle (FAME-II) to Rs 5,000 (PM E-DRIVE) to Rs 0 after July 31, 2026. The subsidy cliff is only 2.5 months away. With Rs 5,000 representing 123% of Ola's current per-unit EBITDA profit (+Rs 4,050/unit at 4.5% margin), absorbing the removal will either wipe out margins or depress volumes. State policy divergence (Tamil Nadu favorable, Karnataka now unfavorable) creates geographic winners and losers.

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv — FAME-II: Rs 10,000 Cr outlay, up to Rs 40,000/E2W, expired Mar-2024. EMPS-2024 bridge: Rs 500 Cr outlay, Rs 5,000/E2W, expired Sep-2024.

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv — PM E-DRIVE: Rs 10,900 Cr outlay, Rs 5,000/E2W via e-voucher, TERMINAL DATE Jul-2026 for E2W. No successor scheme announced.

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv — Karnataka ended 100% road tax exemption Apr-2026; new tiered LTT of 5-10%. Tamil Nadu maintains 100% road tax exemption + Rs 10,000-20,000 subsidy through Dec-2027.

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv — ACC PLI (Batteries): Rs 18,100 Cr outlay (2021-2030). Ola has allocation but "disbursement lagging" behind capex.

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv — Post-FAME-II expiry: total market dropped from 119,320 (Mar-24) to 84,463 (Apr-24) — 29% single-month contraction. Ola dropped 36% from 53,320 to 33,963.

> [!data] Source: EV_SEGMENT_COMPARISON.csv — Ola EBITDA turned positive (+4.5% Q4 FY26) enabled by Gigafactory cost savings, but subsidy cliff threatens this hard-won profitability.

---

## Central Government Schemes

### FAME II (Faster Adoption and Manufacturing of EVs)
- **Budget:** ₹10,000 Cr
- **Duration:** FY2020-FY2024 (extended)
- **E2W Subsidy:** Capped at 15% of ex-factory price (reduced from 40% in May 2023)
- **Ola Benefit:** ₹21,916/vehicle (S1), ₹22,444/vehicle (S1 Pro) as of Q1 FY24
- **Risk:** Extension beyond FY2024 not guaranteed

### PLI Automobile Scheme
- **Budget:** ₹25,900 Cr
- **Duration:** 5 years from FY2023
- **Incentive:** 13-18% of "determined sales value"
- **Requirement:** Minimum 50% domestic value addition
- **Ola Status:** Approved (Champion OEM Incentive Scheme)

### PLI ACC Battery Scheme
- **Budget:** ₹18,100 Cr
- **Total Capacity:** 50 GWh across all recipients
- **Incentive:** Per kWh based on value addition % and actual sales
- **Ola Award:** **20 GWh** (largest single allocation)
- **Duration:** 5 years from Gigafactory commissioning

---

## State-Level (Tamil Nadu)

| Incentive | Details |
|-----------|---------|
| SGST Reimbursement | 100% for 20 years on EVs sold + registered in TN |
| Investment Promotion Subsidy | Capital assistance for EV hub |
| GST on Capital Goods | Incentive for inverted tax situation |
| Land Cost Subsidy | SIPCOT-leased land at concessional rates |
| Electricity Tax Incentive | Reduced power costs for manufacturing |
| Corporate Tax | 15% for new manufacturing companies |

---

## GST Advantage
- EVs taxed at **5% GST** vs 28% for ICE vehicles
- Significant price advantage embedded in up-front purchase cost

---

## Policy Risk Summary

- FAME II expired Mar 2024. EMPS-2024 bridge (Apr-Sep 2024) at Rs 5,000/E2W. Now PM E-DRIVE (Oct 2024-Jul 2026) at Rs 5,000/E2W — **hard terminal date Jul 31, 2026 with no successor announced**. See [[Market/PM E-DRIVE Subsidy]] and [[Market/Subsidy_Cliff_Jul2026]]
- PLI schemes are time-bound (5 years) and milestone-dependent — Ola has both Auto PLI (13-18% DSV) and Cell PLI (20 GWh). See [[Opportunities/PLI Dual Beneficiary]]
- State incentives tied to investment + employment commitments — significant divergence (TN favorable, KA adverse). See [[Market/State_EV_Policies]]
- Any policy reversal directly impacts Ola's price competitiveness vs [[Risks/Competition|ICE incumbents]]

> [!data] Source: market_insights.json / POLICY_REGULATORY_TIMELINE.csv
> FAME-II (Apr-2019 to Mar-2024) provided up to Rs 40,000 per E2W with Rs 10,000 Cr outlay, driving the initial E2W boom. It was replaced by EMPS-2024 (Apr-Sep 2024) at just Rs 5,000 per E2W — an 87.5% subsidy reduction — causing immediate market disruption.
> Causal chain: FAME-II expiry→massive subsidy reduction→market shock→volume contraction→policy uncertainty→Ola's high subsidy dependence exposed
> Cells: Row 2 FAME-II: E2W_Subsidy_Per_Vehicle='Up to Rs 15000/kWh (max Rs 40000 for E2W)', Outlay_Cr=10000; Row 3 EMPS-2024: E2W_Subsidy_Per_Vehicle=5000, Outlay_Cr=500

> [!data] Source: market_insights.json / POLICY_REGULATORY_TIMELINE.csv
> PM E-DRIVE (Oct-2024 to Jul-2026) provides Rs 5,000 per E2W via e-voucher with mandatory 50% DVA (Domestic Value Addition) and is fund-limited. The DVA requirement favors Ola's in-house manufacturing and cell production compared to import-dependent competitors, giving Ola a structural policy advantage despite its market share collapse.
> Causal chain: DVA requirement under PM E-DRIVE→domestic cell production incentivized→Ola's Gigafactory becomes competitive advantage→import-dependent competitors disadvantaged→policy tailwind partially offsets service crisis
> Cells: Row 4 PM E-DRIVE: E2W_Subsidy_Per_Vehicle=5000, Key_Conditions='Fund-limited; e-voucher mandatory; 50% DVA', Status=Active, End_Date='Jul-2026 (E2W)'

> [!data] Source: market_insights.json / POLICY_REGULATORY_TIMELINE.csv
> ACC PLI (Batteries) scheme: Rs 18,100 Cr outlay (2021-2030) for cell manufacturing with minimum 50 GWh capacity bid and DVA requirements. Ola has allocation but disbursement is lagging — cumulative only Rs 2,322 Cr by Dec-2025 against committed targets.
> Causal chain: ACC PLI scheme→Ola gets allocation→disbursement lags→Ola must fund Gigafactory from cash flow→financial strain→delays may impact expansion timeline
> Cells: Row 5 ACC PLI: Outlay_Cr=18100, Key_Conditions='Min 50 GWh capacity bid; DVA requirements'; Row 6 Auto PLI: cumulative disbursement='Rs 2322 Cr by Dec 2025'

> [!data] Source: market_insights.json / POLICY_REGULATORY_TIMELINE.csv
> Tamil Nadu EV Policy (2019-Dec 2027) offers Rs 10,000-20,000 per E2W with 100% road tax + registration exemption. Ola's Krishnagiri factory is in Tamil Nadu, giving it home state policy advantage — double the central subsidy level.
> Causal chain: Tamil Nadu policy→Ola factory benefit→production cost advantage→partially offsets Karnataka negative→policy geography matters for manufacturing location decisions
> Cells: Row 12 Tamil Nadu EV Policy: E2W_Subsidy_Per_Vehicle='Rs 10000-20000 per E2W', Key_Conditions='100% road tax + registration exempt'

> [!data] Source: market_insights.json / POLICY_REGULATORY_TIMELINE.csv
> Delhi EV Policy (Draft 2026): up to Rs 30,000 per E2W in Year 1 (tapering) with 100% road tax waiver for EVs under Rs 30L. This is the most aggressive state subsidy — 6x the central subsidy. For Ola's S1 X, the Delhi policy would add a massive 33-43% price advantage.
> Causal chain: Delhi aggressive subsidy→up to Rs 30K per vehicle→significant price advantage→demand boost in capital market→Ola opportunity if service quality restored
> Cells: Row 11 Delhi EV Policy: E2W_Subsidy_Per_Vehicle='Up to Rs 30000 per E2W (Year 1 tapering)', Key_Conditions='100% road tax waiver for EVs under Rs 30L'

> [!data] Source: market_insights.json / POLICY_REGULATORY_TIMELINE.csv
> Gujarat EV Policy direct subsidy discontinued (2025) — now only 1% motor vehicle tax + registration waiver remains. This removes a key incentive in one of India's most prosperous E2W markets. Gujarat was previously a strong market for Ola due to high disposable income and EV adoption rates.
> Causal chain: Gujarat discontinues EV subsidy→reduced incentive in high-income market→Ola loses demand support→trend of state-level subsidy rationalization→increases dependence on central subsidy
> Cells: Row 13 Gujarat EV Policy: Key_Conditions='Direct subsidy discontinued', Status='Partially Expired'

> [!data] Source: market_insights.json / POLICY_REGULATORY_TIMELINE.csv
> GST on EVs: 5% vs 28%+cess on ICE — a 23+ percentage point price advantage that is critical for all EV makers. Any GST rate increase would devastate E2W economics. GST on standalone/swappable batteries is 18% — higher than the vehicle 5%, creating a tax penalty for the BaaS model.
> Causal chain: GST differential→EVs cheaper than ICE→demand driver→BaaS taxed at 18%→business model disadvantage→impacts export BaaS model viability
> Cells: Row 7 GST on EVs: '5% GST on EVs vs 28%+cess on ICE'; Row 8 GST on EV Batteries: '18% GST on standalone/swappable batteries'

> [!data] Source: market_insights.json / POLICY_REGULATORY_TIMELINE.csv
> Auto PLI scheme (2022-2027) with Rs 25,938 Cr outlay based on incremental sales of AAT products with minimum 50% DVA. Cumulative disbursement only Rs 2,322 Cr by Dec-2025 — 9% of total allocation disbursed in 3+ years. Slow PLI disbursement adds to Ola's cash flow pressure.
> Causal chain: Policy announced→companies invest→disbursement lags→Ola awaiting incentives→cash flow mismatch→investment burden on Ola's balance sheet→dependence on policy execution
> Cells: Row 6 Auto PLI: Outlay_Cr=25938, Key_Conditions='Min 50% DVA; investment threshold', Cumulative disbursement='Rs 2322 Cr by Dec 2025'

> [!data] Source: market_insights.json / POLICY_REGULATORY_TIMELINE.csv
> Maharashtra EV Policy (2025-2030) offers Rs 10,000 per E2W with 100% road tax + registration exemption and toll waivers — double the central PM E-DRIVE subsidy. This makes Maharashtra (Mumbai/Pune) one of the most attractive E2W markets in India.
> Causal chain: Maharashtra double subsidy→strong urban market→critical for Ola recovery→service quality must match→to capture policy benefit→Ola home market disadvantage (Karnataka) partially offset
> Cells: Row 10 Maharashtra EV Policy: E2W_Subsidy_Per_Vehicle='Rs 10000 per E2W', Key_Conditions='100% road tax + registration exempt; toll waivers'

> [!data] Source: ola_insights.json / industry_overview_business.txt, financial_mda.txt
> Ola is the only EV manufacturer benefitting from BOTH PLI schemes (Automobile PLI + Cell PLI). Awarded 20 GWh capacity under Cell PLI - the most by any recipient. OET qualifies for 15% lower corporate tax rate under Section 115BAB.
> Causal chain: Dual PLI scheme eligibility + reduced tax rate provide cost advantages, but Cell PLI requires meeting capacity milestones (1/5/10/20 GWh in years 1-4) with penalties for shortfall.
> Cells: industry_overview_business Page 321-322. financial_mda Page 318

> [!data] Source: ola_ipo/industry_overview_business.txt
> PLI scheme budget across 14 sectors: ₹2.73 Tn (US$34.1 Bn). Auto PLI: ₹259 Bn for AAT products with minimum 50% DVA, 13-18% of DSV for 5 consecutive years from FY2023. ACC PLI: ₹181 Bn for 50 GWh total capacity. India Semiconductor Mission: ₹760 Bn. PLI Auto attracted proposed investment of ₹748.5 Bn against target ₹425 Bn (176%).
> Context: Pages 132, 136-137, Industry Overview

> [!data] Source: ola_ipo/industry_overview_business.txt
> FAME II (FY2020-FY2024, extended): ₹100 Bn budget, 86% for demand creation. Demand incentive: ₹10,000/kWh capped at 15% of ex-factory price (reduced from 40% effective June 1, 2023). Phase I (FY2015-19): ₹9 Bn. FAME II Phase II sanctioned 2,877 charging stations in 68 cities across 25 States/UTs.
> Context: Pages 132, 139, 144, Industry Overview

> [!data] Source: ola_ipo/industry_overview_business.txt
> EV GST rate: 5% (no cess) vs 28%+cess up to 22% for ICE vehicles — a 23+ percentage point structural price advantage. State subsidies: ₹2,500-10,000/kWh across states. MoRTH exempted EVs from permit requirement (October 2018). Customs duties on imported vehicles increased 5-10% (Budget 2023-24). Ministry of Power allows electricity sale as 'service' for EV charging.
> Context: Pages 137, 139, Industry Overview

> [!data] Source: ola_ipo/industry_overview_business.txt
> Three selected bidders signed the Cell PLI Program Agreement (out of 10 received bids). Manufacturing facility must be set up within 2 years. Incentive disbursed over 5 years on sale of batteries. Private players expected to create ~95 GWh additional battery manufacturing beyond PLI allocations. E2W batteries alone would require 40-60 GWh by FY2028.
> Context: Pages 139, 143, Industry Overview

---

## Connections

### Causes
- [[Market/FAME_II_Scheme]] (Rs 10,000 Cr, 2019-2024) created the initial E2W boom — Ola was the top beneficiary
- [[Market/PM E-DRIVE Subsidy]] (Oct 2024 - Jul 2026) maintains Rs 5,000/vehicle subsidy but has hard terminal date
- [[Market/State_EV_Policies]] reversed 100% road tax exemption (Apr 2026), imposing 5-10% tiered LTT — disproportionately impacts [[Companies/Ather Energy]] (Bangalore HQ)
- [[ACC PLI]] (Rs 18,100 Cr) has disbursement lagging behind Ola's capex milestones
- [[GST]] structure (5% EV vs 28%+cess ICE) remains the only permanent structural price advantage

### Effects
- Post-Jul 2026: zero central subsidy for E2W for first time since 2019
- State policy divergence creates geographic winners: [[Market/State_EV_Policies]] (Ola home state) maintains 100% tax exemption + Rs 10,000-20,000 subsidy through Dec 2027
- [[Market/State_EV_Policies]] policy reversal makes Ather's home market less favorable — Ola gains relative advantage
- PM E-DRIVE removal = Rs 5,000 price increase = 123% of Ola's current per-unit EBITDA profit

### Amplifiers
- [[PLI ACC]] disbursement lag forced Ola to front-load ~Rs 4,000 Cr in capex before subsidy receipts
- Fund-limited PM E-DRIVE could exhaust before Jul 2026 if demand surges
- Gujarat subsidies expired Mar-2026; Karnataka reversed Apr-2026 — trend is policy withdrawal, not expansion

### Linked Nodes
- [[Market/E2W Market India]]
- [[Market/TCO Advantage]]
- [[Market/Policy_Regulatory_Timeline]]
- [[Financial/Revenue Trajectory]]
- [[Financial/Post-IPO_Quarterly_Calls]]
- [[Risks/Subsidy Dependency]]
- [[Opportunities/PLI Dual Beneficiary]]
- [[Strategy/EV Hub Tamil Nadu]]
