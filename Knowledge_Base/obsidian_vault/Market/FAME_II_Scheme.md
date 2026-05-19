> [!insight] FAME-II Created India's E2W Market; Its Expiry Revealed Ola's Subsidy Dependence
> FAME-II (Apr 2019 - Mar 2024) provided up to Rs 40,000 per E2W through a Rs 10,000 Cr outlay, driving the initial E2W boom that Ola rode to 47% market share. When it expired in Mar 2024 and was replaced by EMPS-2024 at just Rs 5,000 per E2W (an 87.5% subsidy reduction), Ola's volume collapsed 36% single-month from 53,320 to 33,963 units. The FAME-II expiry is the historical precedent for the PM E-DRIVE cliff in Jul 2026 and a stress test that exposed how deeply Ola's demand depended on subsidy support.

> [!data] Source: market_insights.json / POLICY_REGULATORY_TIMELINE.csv
> FAME-II (Apr-2019 to Mar-2024) provided up to Rs 40,000 per E2W with Rs 10,000 Cr outlay, driving the initial E2W boom. It was replaced by EMPS-2024 (Apr-Sep 2024) at just Rs 5,000 per E2W — an 87.5% subsidy reduction — causing immediate market disruption. Every E2W OEM saw volumes dip post FAME-II expiry.
> Causal chain: FAME-II expiry→massive subsidy reduction→market shock→volume contraction→policy uncertainty→Ola's high subsidy dependence exposed
> Cells: Row 2 FAME-II: E2W_Subsidy_Per_Vehicle='Up to Rs 15000/kWh (max Rs 40000 for E2W)', Outlay_Cr=10000; Row 3 EMPS-2024: E2W_Subsidy_Per_Vehicle=5000, Outlay_Cr=500

> [!data] Source: market_insights.json / E2W_MONTHLY_REGISTRATIONS.csv (+ connected by FAME-II causality)
> The total E2W market grew from 21,500 units (Apr-22) to a peak of 148,713 units (Mar-26) — 6.9x growth — driven by FAME-II subsidies, expanding charging infrastructure, and consumer shift to EVs. Ola's decline occurred against this massive tailwind, amplifying the competitive failure.
> Causal chain: Subsidy support→market expansion→Ola should benefit→but fails to capture growth→structural competitive disadvantage exposed
> Cells: Row 2 Total_Market=21500; Row 49 Total_Market=148713

> [!data] Source: market_insights.json / E2W_MONTHLY_REGISTRATIONS.csv
> Post-FAME-II crash single-month: total market from 119,320 (Mar-24) to 84,463 (Apr-24) = -29%. Ola from 53,320 to 33,963 = -36.3%. The market impact was immediate and severe, triggering a permanent reset in Ola's volume trajectory.
> Causal chain: FAME-II expiry→subsidy cliff→demand shock→Ola volume collapse→permanent share loss to legacy OEMs
> Cells: Row 25 Ola=53320; Row 26 Ola=33963

> [!data] Source: market_insights.json / POLICY_REGULATORY_TIMELINE.csv
> PM E-DRIVE (Oct-2024 to Jul-2026) provides Rs 5,000 per E2W via e-voucher with mandatory 50% DVA. The Jul-2026 cliff could trigger a similar or worse demand shock as FAME-II did, especially with Ola still at fragile 16% share.
> Causal chain: PM E-DRIVE expiry→Rs 5,000 subsidy loss→E2W price increase→demand contraction in price-sensitive segment→Ola's fragile recovery disrupted→further financial pressure
> Cells: POLICY Row 4 PM E-DRIVE End_Date='Jul-2026 (E2W)', E2W_Subsidy_Per_Vehicle=5000; E2W Row 25 Ola=53320 (Mar-24); E2W Row 26 Ola=33963 (Apr-24)

> [!data] Source: competitor_insights.json / bajaj/BALANCE_SHEET.csv
> Bajaj Auto's reserves of Rs 38,552 Cr (FY26) are 24x Ola's total cash of Rs 3,516 Cr. Even if Bajaj's EV business lost Rs 500 Cr/year (which it doesn't - it's profitable), it could absorb losses for 77+ years from reserves alone. This "subsidy moat" means Bajaj can sustain pricing through any policy shock.
> Causal chain: Reserves this massive mean Bajaj can undercut pricing, invest in R&D, and expand EV capacity without any external funding, creating a subsidy moat no pure-play EV can match
> Cells: Row 3, Col J (Mar-26) = 38552.49

> [!data] Source: competitor_insights.json / market/EV_SEGMENT_COMPARISON.csv
> Bajaj's 'Parent Can Subsidize EV for 15+ years' combined with Rs 38,552 Cr reserves means Bajaj can sustain EV price wars indefinitely. Chetak is already double-digit EBITDA positive, so no subsidy required for Bajaj's EV operations.
> Causal chain: Bajaj can keep Chetak prices low to gain market share even if margins compress, while loss-making Ola cannot sustain price competition - this is Bajaj's ultimate unfair advantage
> Cells: Row 10, Col Bajaj_EV = '15+'; Row 11, Col Bajaj_EV = 'Already profitable'

# FAME-II Scheme

FAME-II (Faster Adoption and Manufacturing of Electric Vehicles Phase II) was India's flagship EV demand incentive scheme, operational from April 2019 to March 2024. With a total outlay of Rs 10,000 Cr, it provided up to Rs 15,000 per kWh of battery capacity, capped at Rs 40,000 for electric two-wheelers. This made E2Ws substantially cheaper than their ICE equivalents and was the primary driver behind the first E2W boom that peaked at 53,320 monthly units for Ola in March 2024.

## The 87.5% Subsidy Cliff

When FAME-II expired in March 2024, the government replaced it with the EMPS-2024 bridge scheme (April-September 2024) that slashed E2W subsidies to just Rs 5,000 per vehicle — an 87.5% reduction from FAME-II's Rs 40,000 maximum. The impact was immediate: the total E2W market contracted 29% single-month from 119,320 to 84,463 units, and Ola lost 36.3% of its volume from 53,320 to 33,963 units. For Ola, this was the beginning of a volume decline that the subsequent CCPA service crisis would amplify into an 86% peak-to-trough collapse.

The FAME-II expiry exposed a critical structural weakness: Ola's demand was heavily subsidy-dependent. With the subsidy reduction, the effective price of an Ola scooter to the consumer increased by up to Rs 35,000, and the company did not have enough brand equity or service quality to retain buyers at the higher effective price. Legacy OEMs, with stronger brand trust and lower service costs, were better positioned to absorb the subsidy shock.

## Legacy Comparison: The Subsidy Moat

FAME-II expiry created asymmetric impacts on competitors. Legacy players like Bajaj, with Rs 38,552 Cr in reserves, could effectively self-subsidize their EV businesses through the policy transition. Bajaj's Chetak was already EBITDA-positive, meaning it did not need subsidy support at all. In contrast, Ola — with only Rs 3,516 Cr in cash and burning Rs 2,391 Cr annually from operations — had no buffer to absorb the subsidy reduction without volume destruction.

This "subsidy moat" is the most consequential financial asymmetry in the Indian E2W market. Bajaj, Hero, and TVS all generate sufficient profits from their ICE businesses to sustain EV operations through any policy shock. Pure-play EV makers like Ola and Ather must either achieve profitability before the subsidy cliff or rely on continuous external fundraising.

## The FAME-II Precedent for July 2026

The FAME-II expiry serves as the critical stress-test precedent for the July 31, 2026 PM E-DRIVE cliff. The Rs 5,000 loss from PM E-DRIVE is smaller in absolute terms than the Rs 35,000 reduction from FAME-II to EMPS-2024. However, the cumulative effect of two years of subsidy erosion (Rs 40,000 to Rs 5,000 to Rs 0) and the fragile state of Ola's recovery (16% market share, EBITDA only recently turned positive at +4.5%) make the 2026 cliff potentially more dangerous for Ola specifically. At current per-unit EBITDA of approximately Rs 4,050, losing the Rs 5,000 subsidy would entirely eliminate profit if passed through to consumers.

## Key Data Points
- FAME-II duration: Apr 2019 to Mar 2024 (5 years)
- Outlay: Rs 10,000 Cr total
- E2W subsidy: Up to Rs 15,000/kWh (max Rs 40,000 per vehicle)
- Replacement: EMPS-2024 bridge at Rs 5,000/E2W — 87.5% reduction
- Post-FAME-II market crash: total E2W -29% MoM (119,320 to 84,463)
- Ola post-FAME-II crash: -36.3% MoM (53,320 to 33,963)
- Bajaj reserves: Rs 38,552 Cr — can self-subsidize for 77+ years
- Ola total cash: Rs 3,516 Cr — burning Rs 2,391 Cr/year from operations
- Bajaj Chetak EV EBITDA: double-digit positive (no subsidy needed)
- PM E-DRIVE cliff parallel: Rs 5,000 removal vs Ola per-unit profit of ~Rs 4,050
- Ola's EBITDA margin at cliff: +4.5% (Q4 FY26, fragile and recently turned positive)
- No successor scheme to PM E-DRIVE announced as of May 2026

---

## Connections

### Causes
- [[Market/EV Policy]] — The broader EV policy framework that FAME-II inaugurated
- [[Market/Policy_Regulatory_Timeline]] — The full timeline from FAME-II through PM E-DRIVE to the Jul 2026 cliff
- [[Risks/Subsidy Dependency]] — Ola's structural dependence on subsidy support revealed by the FAME-II expiry

### Effects
- [[Market/PM E-DRIVE Subsidy]] — The current successor scheme and its Jul 2026 terminal date
- [[Market/Subsidy_Cliff_Jul2026]] — The upcoming cliff that FAME-II's expiry precedents
- [[Risks/Revenue Decline FY25]] — The volume collapse that followed FAME-II expiry and was compounded by the service crisis
- [[Companies/Competitor_Firepower]] — Legacy players' financial ability to absorb subsidy shocks (the subsidy moat)
- [[Financial/Margin_Paradox]] — How Ola's margin improvement interacts with post-subsidy pricing pressure
- [[Market/TCO Advantage]] — How the GST differential (5% EV vs 28% ICE) is the only permanent price advantage post-subsidy

### Amplifiers
- FAME-II expiry exposed that Ola's 47% market share was built on subsidy-supported demand, not brand loyalty
- Bajaj's Subsidy_Moat (Rs 38,552 Cr reserves) vs Ola's cash burn creates an asymmetric ability to survive policy shocks
- The post-FAME-II volume decline was the trigger that revealed Ola's service infrastructure was inadequate for even reduced volumes
- Cumulative subsidy erosion over 2 years (Rs 40,000 -> Rs 5,000 -> Rs 0) desensitizes consumer price expectations
- State-level policy divergence (Tamil Nadu supports, Karnataka reverses) creates geographic winners and losers post-cliff

### Linked Nodes
- [[Market/PM E-DRIVE Subsidy]]
- [[Market/Subsidy_Cliff_Jul2026]]
- [[Market/Policy_Regulatory_Timeline]]
- [[Market/EV Policy]]
- [[Market/E2W Market India]]
- [[Market/TCO Advantage]]
- [[Risks/Subsidy Dependency]]
- [[Risks/Revenue Decline FY25]]
- [[Financial/Margin_Paradox]]
- [[Companies/Competitor_Firepower]]
- [[Companies/Ola Electric]]
- [[Companies/Bajaj Auto]]
- [[Market/VAHAN_Market_Share_Story]]
