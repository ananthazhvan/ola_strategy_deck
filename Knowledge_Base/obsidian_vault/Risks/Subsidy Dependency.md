> [!insight] The Single Most Important Thing
> India's E2W subsidy regime is on a **one-way path from generous (FAME-II: Rs 40,000/vehicle) to terminal (Jul 2026: Rs 0/vehicle)**. Each policy inflection directly maps to Ola's financial outcomes: the Mar-2024 FAME-II expiry triggered a **36% single-month volume collapse** and a **92.5% passthrough** of subsidy loss to ASP cuts (Rs 1,35,000 → Rs 98,000), crushing EBITDA to -22.1% within 3 quarters. The current PM E-DRIVE subsidy of Rs 5,000 represents only **5.6% of ASP** — but its removal would consume **123% of current per-unit profit** (Rs 4,050).

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv
> **FAME II**: Expired Mar-2024. Rs 40,000/vehicle max, Rs 10,000 Cr outlay. Drove initial E2W boom.
> **EMPS-2024 (Interim)**: Apr-Sep 2024. Rs 5,000/vehicle. Rs 500 Cr outlay. 87.5% reduction from FAME II.
> **PM E-DRIVE**: Active Oct-2024 to Jul-2026. Rs 5,000/vehicle via e-voucher. Rs 10,900 Cr outlay. **Hard terminal date Jul 2026 for E2W — no successor announced.**
> **ACC PLI (Batteries)**: Active 2021-2030. Rs 18,100 Cr outlay. Ola has allocation but **"disbursement lagging"**.

# Subsidy Dependency Risk

**Criticality:** 🔴 HIGH
**Likelihood:** HIGH | **Impact:** HIGH

---

## The FAME Shock

In May 2023, the [[Government of India]] reduced [[FAME II]] subsidy caps on E2Ws from **40% of vehicle cost to 15% of ex-factory price**, effective June 1, 2023.

### Impact on Ola:
| Metric | Before (May 2023) | After (Jun 2023) | Change |
|--------|-------------------|------------------|--------|
| [[Ola S1]] Price | — | +₹22,784 | Increase |
| [[Ola S1 Pro]] Price | — | +₹37,106 | Increase |
| Monthly Orders | Baseline | -58.14% | Decline |

### Historical FAME Subsidies (as of Q1 FY24 — now superseded):
- Ola S1: ₹21,916 per vehicle (FAME-II era)
- Ola S1 Pro: ₹22,444 per vehicle (FAME-II era)
- **Current (May 2026):** PM E-DRIVE at Rs 5,000/E2W, expiring Jul 31, 2026. See [[Market/PM E-DRIVE Subsidy]]

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv (post-FAME crash)
> The FAME-II expiry on Mar-31, 2024 triggered massive demand pull-forward (total market 119,320 units in Mar-24, highest ever), followed by a **29% single-month market contraction** (119K → 84K in Apr-24). Ola's registrations crashed from **53,320 (Mar-24)** to **33,963 (Apr-24)** — a **36.3% month-over-month decline**. Ola's [[ASP]] dropped from Rs 1,35,000 (Q1 FY25) to Rs 98,000 (Q4 FY25) — Rs 37,000 reduction that almost exactly matches the FAME-II subsidy amount (92.5% passthrough).

---

## PLI Scheme Dependency

Ola is the **only EV manufacturer in India** benefiting from both:

1. **[[Automobile PLI Scheme]]** — 13-18% of "determined sales value", 5 years from FY2023
2. **[[Cell PLI Scheme]]** — 20 GWh awarded capacity, cash incentives based on value addition + sales

### Cell PLI Capacity Milestones (or face 2x shortfall penalty):
| Year | Required Capacity | Penalty if Missed |
|------|-------------------|-------------------|
| 1 (FY2024) | 1 GWh | 2x shortfall deducted from subsidy |
| 2 | 5 GWh | 2x shortfall deducted |
| 3 | 10 GWh | 2x shortfall deducted |
| 4 | 20 GWh | 2x shortfall deducted |

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> The subsidy landscape interacts with global battery pricing. [[Technology/LFP_46100_Cell]] pack prices crashed from **$140/kWh (2022 peak) to $80/kWh (2026 current)** — a 43% decline driven by **4,200 GWh global capacity** with **~900 GWh excess supply**. This overcapacity is "good for Ola if buying; bad if selling B2B." Ola's [[Technology/LFP_46100_Cell]] cells at $80/kWh match the global LFP price — achieving [[import parity]] but not beating it. [[Market/Battery_Raw_Materials]] prices spiked to $56,000/MT (+133% from 2025 H2) due to [[DRC]] supply constraints, validating Ola's [[Technology/Cobalt Supply Risk and LFP Pivot]]-to-[[Technology/LFP_46100_Cell]] pivot.

---

## Structural Vulnerability

Without government subsidies:
- Ola EVs become **significantly more expensive** than [[ICE]] alternatives
- ICE 2W scooters from [[TVS Motor]], [[Bajaj Auto]], [[Companies/Hero MotoCorp]] already have cost advantages at scale
- [[FAME II]] expired Mar 2024. EMPS-2024 bridge (Apr-Sep 2024) provided temporary relief. **PM E-DRIVE terminates Jul 31, 2026 with no successor announced** — the subsidy cliff is now 2.5 months away
- PLI incentives are contingent on meeting strict [[domestic value addition]] and capacity milestones

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv
> Ola's subsidy response capability: In Q4 FY25, EBITDA margin was **-22.1%** (worst ever) when ASP had dropped to Rs 98,000. By Q4 FY26, EBITDA was **+4.5%** at Rs 90,000 ASP — margins improved because [[Technology/Gigafactory_Updates]] cell integration cut battery cost from $130 to $85/kWh. However, the [[Market/PM E-DRIVE Subsidy]] subsidy cliff (Jul 2026) threatens to reverse this: removing Rs 5,000/vehicle would consume **123% of current per-unit profit** (Rs 4,050). Ola must either absorb it (reverting to near-zero margin) or pass it on (demand risk).

### State Policy Divergence
| State | EV Policy | Impact on Ola |
|-------|-----------|---------------|
| **[[Market/State_EV_Policies]]** | Rs 10,000-20,000 subsidy + 100% road tax exempt thru Dec-2027 | **Positive** — Ola factory location creates home-state advantage |
| **[[Maharashtra]]** | Rs 10,000 subsidy + 100% road tax + toll waivers thru 2030 | Positive |
| **[[Delhi]]** | Up to Rs 30,000 tapering + 100% road tax waiver thru 2030 | Positive |
| **[[Market/State_EV_Policies]]** | 100% exemption ended Apr-2026; now 5-10% tiered LTT | **Negative** — Ather (HQ) disproportionately impacted |
| **[[Market/State_EV_Policies]]** | Direct subsidy expired Mar-2026; only 1% tax remains | Neutral/negative |

---

## Related
- [[Market/EV Policy]] — Full policy landscape
- [[Risks/Gigafactory Execution]] — Cell PLI milestone risk
- [[Opportunities/PLI Dual Beneficiary]] — Competitive advantage while it lasts
- [[Risks/Competition]] — Competitors less dependent on subsidies
- [[Strategy/Backward Integration]] — Path to subsidy-independent cost structure

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv
> Karnataka (Bangalore) road tax policy changed Apr-2026: ended 100% exemption, now 5-10% tiered LTT. This increases on-road price by ~Rs 7,000-14,000 on a Rs 140,000 scooter. As Ola's recovery showed signs of life (16% share by Mar-26), this tax headwind arrives at the worst possible time.
> Causal chain: Karnataka ends EV road tax exemption -> on-road price increases -> demand contraction in Bangalore -> Ola's home market hit -> further volume pressure during fragile recovery
> Cells: Row 9 Policy_Name='Karnataka Road Tax', Status=Changed, Start_Date=Apr-2026, Key_Conditions='Ended 100% exemption; now 5-10% tiered LTT', Impact_On_Ola='Increases on-road price in key market (Bangalore)'

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv
> Delhi EV Policy (Draft 2026): up to Rs 30,000 per E2W in Year 1 (tapering) with 100% road tax waiver for EVs under Rs 30L. This is the most aggressive state subsidy - 6x the central subsidy. For Ola's S1 X (Rs 69,999-89,999), the Delhi policy would add a massive 33-43% price advantage.
> Causal chain: Delhi aggressive subsidy -> up to Rs 30K per vehicle -> significant price advantage -> demand boost in capital market -> Ola opportunity if service quality restored
> Cells: Row 11 Delhi EV Policy: E2W_Subsidy_Per_Vehicle='Up to Rs 30000 per E2W (Year 1 tapering)', Key_Conditions='100% road tax waiver for EVs under Rs 30L'

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv
> PM E-DRIVE (Oct-2024 to Jul-2026) provides Rs 5,000 per E2W via e-voucher with mandatory 50% DVA (Domestic Value Addition) and is fund-limited. The DVA requirement favors Ola's in-house manufacturing and cell production compared to import-dependent competitors, giving Ola a structural policy advantage despite its market share collapse.
> Causal chain: DVA requirement under PM E-DRIVE -> domestic cell production incentivized -> Ola's Gigafactory becomes competitive advantage -> import-dependent competitors disadvantaged -> policy tailwind partially offsets service crisis
> Cells: Row 4 PM E-DRIVE: E2W_Subsidy_Per_Vehicle=5000, Key_Conditions='Fund-limited; e-voucher mandatory; 50% DVA', Status=Active, End_Date='Jul-2026 (E2W)'



> [!data] Source: POLICY_REGULATORY_TIMELINE.csv + E2W_MONTHLY_REGISTRATIONS.csv
> Subsidy cliff on July 31, 2026 — PM E-DRIVE ends for E2W. Every E2W loses Rs 5,000 subsidy. For Ola's cheapest S1 X (2kWh) at Rs 69,999, this is a 7.1% price increase. When FAME-II ended Mar-2024 (subsidy dropped Rs 40,000->Rs 5,000), Ola's volume dropped 36% MoM (53,320->33,963 in Apr-24). The Jul-2026 cliff could trigger a similar or worse demand shock, especially with Ola still at fragile 16% share.
> Causal chain: PM E-DRIVE expiry->Rs 5,000 subsidy loss->E2W price increase->demand contraction in price-sensitive segment->Ola's fragile recovery disrupted->further financial pressure
> Cells: POLICY Row 4 PM E-DRIVE End_Date='Jul-2026 (E2W)', E2W_Subsidy_Per_Vehicle=5000; E2W Row 25 Ola=53320 (Mar-24); E2W Row 26 Ola=33963 (Apr-24)

> [!data] Source: SERVICE_CRISIS_TIMELINE.csv, Ola_after_ipo.txt
> CCPA show-cause notice (Oct 2024) was unprecedented for an EV company in India. MHI also asked ARAI to investigate subsidy eligibility violations, threatening FAME/PM E-DRIVE subsidy income. Two simultaneous government investigations.
> Causal chain: Consumer complaints escalated to regulatory level; CCPA and MHI actions threatened both reputation and subsidy income simultaneously.
> Cells: SERVICE_CRISIS: Rows 6-7 (Oct-2024). Ola_after_ipo.txt Section 2

> [!data] Source: ola_ipo/risk_factors.txt
> Pre-IPO disclosure: FAME subsidy cap reduced from 40% to 15% of ex-factory price effective June 1, 2023. This caused customer price increases of ₹22,784 (Ola S1) and ₹37,106 (Ola S1 Pro). Orders declined 58.14% in June 2023 vs May 2023.
> Context: Page 35-36, Risk Factor 5. This pre-IPO risk materialized immediately and foreshadowed further subsidy dependence risk.

> [!data] Source: ola_ipo/risk_factors.txt
> FAME subsidy amounts at DRHP date: ₹21,916/vehicle for Ola S1 and ₹22,444/vehicle for Ola S1 Pro (as of June 30, 2023).
> Context: Page 36, Risk Factor 5

> [!data] Source: ola_ipo/risk_factors.txt
> Cell PLI Scheme milestones: Ola required to achieve 1GWh capacity in FY24, 5GWh in Y2, 10GWh in Y3, 20GWh in Y4. Failure: Government deducts twice the shortfall from subsidy payable, may discontinue payments and appropriate the performance security.
> Context: Page 35-36, Risk Factor 5

> [!data] Source: ola_ipo/risk_factors.txt
> OET approved for Champion OEM Incentive under Automobile PLI Scheme (letter of award Feb 22, 2022). Incentive ranges 13%-18% of "determined sales value" (DSV). Ola expected to become eligible from January 2024 onwards.
> Context: Page 36, Risk Factor 5 & Page 163-164, Our Business

> [!data] Source: ola_ipo/risk_factors.txt
> Ola receives Tamil Nadu state subsidies: (i) investment promotion subsidies; (ii) GST incentive on capital goods; (iii) land cost subsidy; (iv) electricity tax incentive. Additionally, EVs are eligible for concessional GST rate of 5% (vs 28% for ICE vehicles with up to 22% cess).
> Context: Page 36, Risk Factor 5

> [!data] Source: ola_ipo/industry_overview_business.txt
> Ola's material subsidiary OET and OCT qualify for lower corporate income tax rate of 15% available to new manufacturing domestic companies under Indian income tax law (Section 115BAB).
> Context: Page 168, Our Business

> [!data] Source: ola_ipo/industry_overview_business.txt
> OET has imported capital goods without customs duty under EPCG Scheme (Foreign Trade Policy 2023), subject to export obligation equal to 6x the duty saved, to be fulfilled within 6 years.
> Context: Page 131-132, Annexure III

---

## Connections

### Causes
- [[FAME II]] ended Mar-2024 — Rs 40,000/vehicle subsidy replaced by Rs 5,000/vehicle
- [[Market/PM E-DRIVE Subsidy]] has hard terminal date Jul-2026 — no successor announced as of May 2026
- [[ACC PLI]] disbursement is "lagging" behind Ola's Gigafactory capex spending
- [[Market/State_EV_Policies]] ended 100% EV road tax exemption (Apr 2026), creating a key-market headwind

### Effects
- **ASP collapse**: Ola passed through 92.5% of FAME-II subsidy loss to consumers (Rs 37,000 drop)
- **EBITDA destruction**: Margins went from -8.2% to -22.1% as volumes fell and ASP was cut
- **Volume crash**: 36% single-month drop immediately post-FAME expiry; total 85.8% over 20 months
- **[[Margin compression]] risk**: PM E-DRIVE removal equals 123% of current per-unit profit
- **Geographic bifurcation**: Ola benefits in Tamil Nadu (factory state), loses relative advantage elsewhere

### Amplifiers
- **Global battery overcapacity** (900 GWh excess) keeps LFP prices at $80/kWh — Ola's $80/kWh cost is parity, not advantage
- **[[Lithium carbonate]] V-shaped recovery** (CNY 95,000 to CNY 192,000 — +102%) adds input cost pressure
- **State-level divergence** creates uneven competitive landscape post-central subsidy removal
- **No successor scheme** announced for post-Jul 2026 — policy vacuum expected

### Linked Nodes
- [[Market/EV Policy]] — Full policy landscape
- [[Risks/Gigafactory Execution]] — Cell PLI milestone risk
- [[Opportunities/PLI Dual Beneficiary]] — Competitive advantage while it lasts
- [[Risks/Competition]] — Competitors less dependent on subsidies
- [[Risks/Revenue Decline FY25]] — Subsidy removal drove ASP and volume decline
- [[Risks/Financial Losses]] — Subsidy erosion worsened cash burn
- [[Strategy/Backward Integration]] — Path to subsidy-independent cost structure
- [[Technology/4680 Cell Tech]] — Cell chemistry affects PLI eligibility
