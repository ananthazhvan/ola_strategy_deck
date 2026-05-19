> [!insight] The Single Most Important Thing
> Ola's D2C network of 935 Experience Centres eliminated dealer margins (8-12% in auto) and saved ₹700+ Cr annually in selling fees, but the thin service network (~300 repair-capable centres) became a catastrophic bottleneck — 7-15 day turnaround at peak vs 1-2 days for [[Strategy/Backward Integration|legacy competitors]].

> [!data] Source: SERVICE_NETWORK_COMPARISON.csv
> Ola's ~300 repair-capable centres vs TVS 1,000+ and Bajaj 1,480+ dealers. Parts availability: Ola 60-75% vs Bajaj/TVS 95%. Turnaround: Ola 7-15 days vs TVS/Bajaj 1-2 days. Service cost: Ola ₹800-1,500 vs Bajaj ₹400.

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv
> Ola eliminated ₹722.6 Cr annual selling/distribution fee (FY23) by bringing Experience Centres in-house from Jul 2023 — a structural cost saving that enabled [[Strategy/Operating Leverage|operating leverage gains]].

> [!data] Source: EV_SEGMENT_COMPARISON.csv
> Ola's FY26 revenue/unit ₹223,902 is the highest in the industry (TVS ₹126,686, Bajaj ₹138,408), reflecting the fixed-cost burden of company-owned D2C vs legacy franchisee models at scale.

> [!data] Source: CUSTOMER_SENTIMENT.csv
> Google Play Store rating declined from 4.0 (launch) to 3.2 (May 2026) vs TVS iQube 4.2 and Ather 4.0 — the [[Technology/MoveOS|D2C digital touchpoint]] became a net negative for purchase conversion.

# D2C Omnichannel Distribution Network

---

## Network Scale (as of Oct 2023)

| Component | Count |
|-----------|-------|
| Experience Centres | 935 |
| Service Centres | 414 (410 within experience centres) |
| Coverage | Pan-India |
| Rank | India's largest company-owned EV experience centre network |

---

## How It Works

### Digital-First Sales Journey
1. **Discovery** — Ola Electric website / app
2. **Experience** — Visit experience centre (see, touch, test ride)
3. **Purchase** — Online booking via website
4. **Financing** — Through [[Companies/Ola Electric#ola_financial_services|Ola Financial Services]] + 12 partner institutions (up to 5-year loans)
5. **Delivery** — Direct to customer with same-day registration
6. **After-sales** — Service booking via Ola Electric Companion app

---

## Strategic Rationale

### Why D2C?
1. **Customer relationship** — Direct data on preferences, behavior, feedback
2. **Cost efficiency** — No dealer margins (typically 8-12% in auto)
3. **Pricing control** — Uniform pan-India pricing, no dealer negotiation
4. **Brand experience** — Controlled environment, consistent messaging

### Previous Model (until Jul 2023)
- Experience centres operated by Ola Fleet Technologies (group company)
- Ola Electric paid selling/distribution fees: ₹722.6 Cr (FY23)
- **From Jul 2023:** Operations brought in-house → eliminates ₹700 Cr+ annual fee

---

## Competitive Comparison

| Dimension | Ola D2C | TVS/Bajaj/Hero Dealers |
|-----------|---------|------------------------|
| Touchpoints | 935 | 4,000-7,000+ |
| Cost structure | Company-owned (higher fixed, lower variable) | Franchisee (variable) |
| Customer data | Full visibility | Limited/dealer-mediated |
| Brand experience | Controlled | Variable by dealer |
| Scale | Limited, needs capital to expand | Already at scale |
| Trust | New relationship | Multi-decade relationships |

---

> [!data] Source: market/SERVICE_NETWORK_COMPARISON.csv
> Legacy players (Hero, Bajaj, TVS) all offer hybrid mechanic access — customers can get their EVs serviced at any independent local mechanic. Ola and Ather use proprietary service networks, creating a coverage disadvantage in smaller towns. India's 2W market depends on 50,000+ independent mechanics for service.
> Causal chain: India's 2-wheeler market depends on 50,000+ independent mechanics for service. Legacy OEMs leverage decades of mechanic training networks. Pure-play EVs lack this ecosystem, limiting reach to Tier 3+ towns
> Cells: Row 2-4 (Hero/Bajaj/TVS): Independent_Mechanic_Access = Yes (hybrid); Row 5-6 (Ather/Ola): Independent_Mechanic_Access = No (proprietary)

> [!data] Source: SERVICE_CRISIS_TIMELINE.csv
> Hyperservice deployment (Q1 FY26): 1,000 service vans + AI diagnostics deployed. Claimed 50% backlog reduction and 80% same-day resolution by Q3 FY26. However, these are self-reported metrics not independently verified, and customer app rating remains at 3.2/5.0. The gap between claimed and perceived improvement is significant.
> Causal chain: Hyperservice deployment→operational metrics improve→self-reported success→customer perception lags→app rating still low→trust recovery takes longer than operational recovery
> Cells: SERVICE_CRISIS Row 11 Hyperservice deployed Q1-FY26; Row 12 'Service backlog reduced 50% - 80% same-day resolution claimed' Q3-FY26

> [!data] Source: Ola_after_ipo.txt
> TVS had 1,000+ existing dealer-service centers before entering EVs. Bajaj had 3,800+ touchpoints. Hero had the largest dealer network in India. Ola had ~900 experience centers with limited service capability. When scooters failed, customers had nowhere to go — the D2C model lacked the service density of legacy dealer networks.
> Causal chain: Ola's D2C model lacked the service density of legacy OEM dealer networks. This structural disadvantage became fatal when product quality issues emerged
> Cells: Section 2: 'Why legacy players won' paragraph

> [!data] Source: CUSTOMER_SENTIMENT.csv
> Ola's service cost at Rs 800-1,500 per visit is the highest in the industry — double Bajaj's Rs 400. Combined with 7-15 day turnaround (vs 1-2 for Bajaj/TVS/Hero), Ola offers the worst service economics in the E2W industry despite having only 3 years of service experience vs 30-40+ for legacy players.
> Causal chain: No legacy service network→higher per-visit cost→longer turnaround→worst TCO for consumer→brand switching→market share loss
> Cells: Row 6 Ola: Service_Cost_Per_Visit_INR=800-1500, Avg_Turnaround_Days=7-15(peak), Years_Of_Service_Experience=3; Row 3 Bajaj: Service_Cost_Per_Visit_INR=400, Avg_Turnaround_Days=1-2

> [!data] Source: ola_ipo/risk_factors.txt
> Pre-IPO model: Ola sold EVs online through the Ola Electric website, accessible at experience centres. Ola acts as "both EV manufacturer and dealer in India" — a model "relatively new and unproven in India's automobile industry" (Redseer Report). Ola had 935 experience centres as of Oct 31, 2023, majority open less than one year.
> Context: Page 42-43, Risk Factor 16

> [!data] Source: ola_ipo/risk_factors.txt
> Pre-IPO distribution structure: Up to June 30, 2023, experience centres and service centres were operated by related party Ola Fleet Technologies Pvt Ltd. Ola paid selling and distribution fees to OFTP. Ola assumed control on July 1, 2023. Prior experience distributing through these centres was limited.
> Context: Page 39 & 42-43, Risk Factors 11 and 16

> [!data] Source: ola_ipo/risk_factors.txt
> Pre-IPO risk that materialized post-IPO: "Inadequate sales and service performance could negatively impact our reputation and brand." "Failure to deliver a superior sales service through our experience centres could weaken our competitive advantage." Ola plans to use third-party dealers internationally where it cannot control them directly.
> Context: Page 42-43, Risk Factor 16

> [!data] Source: ola_ipo/industry_overview_business.txt
> D2C omnichannel network: 935 experience centres across 24 states + Ola Electric website serving all 27 states and 6 UTs. 54.80M unique website visitors (FY23), 23.22M (June-October 2023). 80.68% of EV scooter owners used Ola Electric Companion app (October 2023). D2C model eliminates dealership margins (Redseer).
> Context: Page 162-163, Our Business

> [!data] Source: ola_ipo/industry_overview_business.txt
> Ola assumed control of experience centres and service centres from Ola Fleet Technologies on July 1, 2023. Before that, Ola Fleet operated them. Post-assumption, Ola directly manages all sales, deliveries, and service operations.
> Context: Page 179, Our Business - Go-To-Market Strategy

> [!data] Source: ola_ipo/industry_overview_business.txt
> Digital purchase journey: customers can complete purchase online in few clicks. Ola facilitates financing through Ola Financial Services (Group Company) and 12 partner financial institutions. ~56.55% of EV scooters purchased in Q1 FY24 were financed through bank loans via OFSPL or partners.
> Context: Page 184-185, Our Business - Purchase & Financing

> [!data] Source: ola_ipo/risk_factors.txt
> Customer cancellation data at IPO: 6-9% of fully paid confirmed orders cancelled (Oct 2022-May 2023). FAME subsidy cut caused spike to 24% in June 2023. Wait period from confirmation to delivery: 15-20 days. Pre-order deposits: ₹499 (S1 Pro, S1), ₹999 (S1 Air, S1 X+, S1 X models).
> Context: Page 43-44, Risk Factor 18

## Connections
**Causes:** [[Strategy/Backward Integration]]
**Effects:** [[Strategy/Product_Mix_Cannibalization]], [[Technology/MoveOS]]
**Amplifiers:** [[Strategy/EV Hub Tamil Nadu]], [[Technology/Gen 2 Platform]]
**Linked Nodes:** [[Strategy/Operating Leverage]], [[Technology/R&D Investment]]
