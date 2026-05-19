> [!insight] Warranty Is a Trust Signal, and Ola's Is the Weakest in the Industry
> Hero Vida offers the longest warranties in the Indian E2W market: 5 years vehicle + 5 years battery on the V1 Pro. Ola offers the weakest at 3 years vehicle + 3 years battery on its cheapest model (S1 X 2kWh at Rs 69,999). The combination of lowest price and shortest warranty creates a value perception problem: Ola is signaling that it trusts its product less than any competitor. Meanwhile, Ola's own warranty provisions grew 5.3x in 18 months (Rs 12.85 Cr to Rs 68.16 Cr), indicating the quality fears behind the short warranty are well-founded.

> [!data] Source: competitor_insights.json / market/PRODUCT_SPECS_COMPARISON.csv
> Hero Vida offers 5-year vehicle warranty and 5-year battery warranty on V1 Pro, significantly exceeding the 3-year vehicle and 3-8 year battery warranty offered by Ola, Ather, TVS, and Bajaj. This is a direct trust-building mechanism for a late entrant brand.
> Causal chain: Extended warranty signals product confidence and reduces buyer risk perception. For a brand (Hero Vida) entering EV market late, this is a critical trust-building tool that legacy incumbents can afford due to robust financials
> Cells: Row 17 (Vida V1 Pro): Warranty_Vehicle_Yr = 5, Warranty_Battery_Yr = 5; Row 2-16 (all others): Warranty_Vehicle = 3

> [!data] Source: market_insights.json / PRODUCT_SPECS_COMPARISON.csv
> Ola's cheapest model S1 X (2kWh) at Rs 69,999 has only 75km range and 3kW motor — severely limiting for practical use. Warranty is 3yr vehicle + 3yr battery vs Hero Vida's 5yr+5yr. Ola has the weakest warranty in the industry at the lowest price point, creating a value perception problem even in its own segment.
> Causal chain: Lowest price→limited specs→short warranty→perceived low quality→brand image damaged→even budget buyers choose competitors→trust problem at all price points
> Cells: Row 5 S1 X 2kWh: Price=69999, Range=75, Motor_kW=3, Warranty_Vehicle_Yr=3, Warranty_Battery_Yr=3; Row 17 Vida V1 Plus: Price=99000, Warranty_Vehicle_Yr=5, Warranty_Battery_Yr=5

> [!data] Source: ola_insights.json / financial_mda.txt
> Warranty provision: Rs 128.54 Mn (FY22) -> Rs 446.73 Mn (FY23) -> Rs 681.56 Mn (Jun 2023). The 5.3x increase in warranty provisions signals deteriorating product quality as volume scaled. This foreshadowed the service crisis that would erupt in Oct 2024.
> Causal chain: Warranty provisions grew faster than sales, indicating product quality issues were emerging at scale and foreshadowing the service crisis
> Cells: Page 316: Warranty provisions details

> [!data] Source: competitor_insights.json / PRODUCT_SPECS_COMPARISON.csv
> Ola S1 Pro+ at Rs 199,000 (ex-showroom) is the most expensive EV scooter in India, with class-leading 320 km range, 141 kmph top speed, and 11 kW motor. However, it competes directly with TVS iQube ST (Rs 171,000) and Ather 450X (Rs 177,000) at lower prices. Ola's spec leadership in the premium segment is undermined by its service reputation.
> Causal chain: Ola's performance leadership (320km range, 141kmph) justifies premium pricing, but TVS and Ather undercut on price while offering comparable real-world utility, since Indian speed limits cap real usage well below 141kmph
> Cells: Row 2 (S1 Pro+): Price=199000, Range=320km, Speed=141kmph, Motor=11kW; Row 7 (iQube ST): 171000, 250km, 82kmph, 6kW; Row 13 (450X): 177000, 150km, 90kmph, 6.4kW

> [!data] Source: market_insights.json / E2W_MONTHLY_REGISTRATIONS.csv + SERVICE_NETWORK_COMPARISON.csv
> Hero Vida entered at 100 units (Sep-22) and grew to 20,000 units (Mar-26), achieving 11% EV market share by FY26. Hero's 6,000+ dealer network and 5-year vehicle warranty (longest in industry) give it a structural advantage despite late entry.
> Causal chain: Decades of trust→massive dealer network→long warranty→consumer confidence→rapid EV market share capture despite late entry
> Cells: Row 7 Hero_Vida=100; Row 49 Hero_Vida=20000; SERVICE_NETWORK_COMPARISON Row 2 Total_Dealer_Network=6000+

# EV Warranty Competition

Warranty terms in the Indian E2W market have become a proxy war for manufacturer confidence and product quality. The market leader in warranty terms — Hero MotoCorp's Vida V1 Pro offering 5 years vehicle + 5 years battery — is the same company that entered the EV market last (Sep 2022 at just 100 units) and grew fastest (206% YoY in FY26). This is not coincidental: extended warranties are a deliberate trust-building strategy for a late entrant that needs to overcome the perception that its EV product is unproven.

At the opposite end of the spectrum sits Ola Electric, offering the industry's shortest warranty (3 years vehicle, 3 years battery) on its cheapest product (S1 X 2kWh at Rs 69,999). The combination of lowest price and shortest warranty is strategically problematic: it signals that Ola has the least confidence in its own product quality, precisely at the price point where buyers are most price-sensitive and risk-averse. For a first-time EV buyer considering a Rs 70,000 purchase that represents 3-4 months of disposable income, knowing that Hero offers 5+5 years of protection while Ola offers only 3+3 creates a powerful trust differential.

## The Warranty Claims Data

The objective warranty claims data validates the concern that consumers intuitively sense. Ola's warranty provisions grew from Rs 12.85 Cr (FY22) to Rs 44.67 Cr (FY23) to Rs 68.16 Cr (by June 2023) — a 5.3x increase in 18 months. This growth rate far exceeded sales growth during the same period, meaning product failure rates were accelerating as more vehicles aged in the field. The warranty provisions foreshadowed the CCPA service crisis that erupted in October 2024: by the time complaints became public, Ola was already setting aside significantly more money for warranty repairs than the industry norms would suggest.

## Competitive Comparison

| Company | Vehicle Warranty | Battery Warranty | Price Range | Trust Signal |
|---------|-----------------|------------------|-------------|--------------|
| Hero Vida | 5 years | 5 years | Rs 99,000-149,000 | Highest confidence |
| Bajaj Chetak | 3 years | 3-8 years | Rs 91,000-140,000 | Standard |
| TVS iQube | 3 years | 3-8 years | Rs 115,000-171,000 | Standard |
| Ather | 3 years | 3-8 years | Rs 109,000-177,000 | Standard |
| **Ola Electric** | **3 years** | **3-8 years** | **Rs 69,999-199,000** | **Weakest (entry level)** |

Ola's Gen 3 S1 platform launched with an improved 8-year battery warranty (up from 3 years on S1 X), signaling recognition that warranty terms needed strengthening. However, the vehicle warranty remains 3 years, and the key weakness of "Unproven reliability" persists.

## Key Data Points
- Hero Vida V1 Pro: 5-year vehicle + 5-year battery warranty (industry best)
- Ola S1 X (2kWh): 3-year vehicle + 3-year battery warranty (industry weakest at entry level)
- Bajaj, TVS, Ather: Standard 3-year vehicle + 3-8 year battery warranty
- Ola warranty provisions: Rs 12.85 Cr (FY22) -> Rs 68.16 Cr (Q1 FY24) — 5.3x increase
- Warranty provisions grew faster than sales — indicating accelerating failure rates
- Ola Gen 3 S1: improved to 8-year battery warranty (up from 3 years) — "Unproven reliability" still a key weakness
- Hero Vida: 100 units (Sep-22) to 20,000 units (Mar-26) — 206% YoY growth driven partly by warranty-led trust
- Ola App Rating: 3.2/5.0 vs TVS iQube 4.2/5.0 and Ather 4.0/5.0
- Ola 500+ consumer court cases with courts citing "pattern of neglect"

---

## Connections

### Causes
- [[Risks/Product Quality]] — The root cause behind weak warranty terms: Ola cannot afford to offer longer warranties because product failure rates are high
- [[Risks/Service_Center_Crisis]] — Warranty claims overwhelmed service capacity, creating the crisis spiral
- [[Risks/CCPA_Regulatory_Intervention]] — Warranty failures escalated to regulatory action
- [[Risks/Consumer Court Crisis]] — 500+ court cases from warranty-related service failures

### Effects
- [[Market/Brand Trust Deficit]] — Short warranty signals low manufacturer confidence, deepening the trust deficit
- [[Risks/Customer Experience Gap]] — Warranty experience (claims process, turnaround) is a key component of overall ownership experience
- [[Market/VAHAN_Market_Share_Story]] — Trust erosion from warranty/quality concerns drove the market share collapse

### Amplifiers
- Hero's 5+5 year warranty is affordable only because of Hero's massive cash reserves (Rs 19,286 Cr in investments) — a structural advantage pure-play EV makers cannot match
- Ola's worst warranty at lowest price point creates a self-reinforcing perception of low quality
- Gen 3's 8-year battery warranty improvement shows Ola recognizes the problem, but vehicle warranty remains at 3 years
- Warranty claims data (5.3x growth) is a lagging indicator that suggests product quality issues from the high-volume production era are still surfacing
- TVS and Ather maintain standard 3+3 terms but compensate with superior service experience (4.0+ app ratings, 1-3 day turnaround)

### Linked Nodes
- [[Risks/Product Quality]]
- [[Risks/Service_Center_Crisis]]
- [[Risks/CCPA_Regulatory_Intervention]]
- [[Risks/Consumer Court Crisis]]
- [[Market/Brand Trust Deficit]]
- [[Risks/Customer Experience Gap]]
- [[Companies/Hero MotoCorp]]
- [[Companies/Ola Electric]]
- [[Companies/Ather Energy]]
- [[Companies/Bajaj Auto]]
- [[Companies/TVS Motor]]
- [[Market/VAHAN_Market_Share_Story]]
- [[Market/E2W Market India]]
- [[Technology/Gen_3_Platform]]
