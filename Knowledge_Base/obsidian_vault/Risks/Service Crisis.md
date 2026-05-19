> [!insight] The Single Most Important Thing
> Ola's service center crisis is the single largest driver of its market share collapse from **55.81% (Apr-2022) to 8.6% (Oct-2025)** — an 80.8% relative decline. The D2C model with only **~300 repair-capable centers** (vs [[TVS Motor]]'s 1,000+ and [[Bajaj Auto]]'s 1,480+) created 7-15 day repair backlogs that triggered a compounding death spiral: complaints → CCPA intervention → negative media → buyer deterrence → sales collapse. The [[Hyperservice]] response improved operations but trust damage is structural: at negative [[Market/Net_Promoter_Score]] (below 0), every existing owner becomes a detractor.

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv
> Ola's monthly registrations collapsed from peak **53,320 (Mar-24)** to trough **7,567 (Nov-25)** — an **85.8% decline** over 20 consecutive months. YoY growth went from **+146.98%** to **-69.73%**. Meanwhile, the total E2W market grew from 119,320 to 148,713 — Ola lost share in a rapidly expanding market.

# The Service Center Crisis & Reliability Moat: Complete Analysis

## Part 1: The Trust Deficit (Quantified)

### Scale of Consumer Complaints
| Metric | Number | Source |
|--------|--------|--------|
| CCPA complaints ([[National Consumer Helpline]]) | ~10,000+ | CCPA show-cause notice, Oct 2024 |
| [[Risks/Consumer Court Crisis]] cases ([[DRHP]] disclosure, pre-IPO) | 189 | Ola DRHP, 2024 |
| Consumer court cases (post-IPO, estimated) | 500+ | Consumer forums, media reports |
| [[Market/Google Play Store Rating]] rating (Ola Electric app) | ~3.2/5 | Play Store (declining from 4.0) |
| Primary complaint categories | Repair delays, battery defects, delivery failures, parts unavailability | CCPA investigation |

> [!data] Source: CUSTOMER_SENTIMENT.csv
> Ola's Google Play Store rating declined from **4.0 at launch to 3.2** with 200,000+ reviews heavily skewed to 1-star. By contrast, [[Companies/TVS iQube]] app is rated **4.2/5.0** and [[Ather Energy]] app is rated **4.0/5.0**. The National Consumer Helpline ranked Ola in the **Top 5 among all Indian companies** for complaint volume across ALL industries.

### Timeline of the Service Crisis
| Date | Event | Severity |
|------|-------|----------|
| 2022-2023 | Early complaints surface on social media | Low — attributed to "scaling pains" |
| Q1 FY25 (Apr-Jun 2024) | Complaint volumes accelerate as 100K+ scooters on road | Medium |
| Aug 2024 | [[IPO]] listing — management focused on growth narrative | Medium — hidden under IPO hype |
| **Oct 2024** | **[[Risks/CCPA_Regulatory_Intervention]] issues show-cause notice after 10,000 complaints** | **CRITICAL** |
| Oct 2024 | [[MHI]] asks [[ARAI]] to investigate subsidy eligibility | Critical — threatens [[FAME]]/[[Market/PM E-DRIVE Subsidy]] income |
| Nov 2024 | Ola launches "Project Vistaar" (network transformation) | Response — restructuring begins |
| Q3 FY25 | Consumer court rulings go against Ola — orders refunds/replacements | High |
| Q4 FY25 | Bhavish Aggarwal acknowledges crisis on earnings call | High — "We scaled faster than infrastructure" |
| Q1 FY26 | "Hyperservice" deployed — 1,000 service vans, [[AI Diagnostics]] | Response — aggressive fix attempt |
| Q3 FY26 | Service backlog reduced 50%, 80% same-day resolution (Ola claim) | Improving — but trust damage done |

> [!data] Source: SERVICE_CRISIS_TIMELINE.csv
> Complaint progression: **~500 (Q1-FY24)** → **~2,000 (Q3-FY24)** → **~5,000 (Q1-FY25)** → **10,000+ (Oct-2024)**. Each quarter's count roughly doubled from the previous, indicating compounding dissatisfaction. The CCPA notice was triggered when Ola was ranked **Top 5 among all Indian companies** for complaint volume.

### Consumer Court Patterns
- **[[District Consumer Forums]]** across India have ruled against Ola multiple times
- Common orders: Full refund + compensation for "mental agony" + litigation costs
- Courts have cited "pattern of neglect" — systemic, not isolated incidents
- Some cases escalated to **[[High Court]] level**
- Reports of **bailable warrants** issued over unresolved consumer court summons

> [!data] Source: CUSTOMER_SENTIMENT.csv
> Consumer court cases grew from **189 (pre-IPO, DRHP disclosure)** to **500+ (estimated by May 2026)** — a 164% increase post-IPO. Typical rulings: **full refund + Rs 10,000-50,000 compensation**. Courts specifically cited "pattern of neglect" as a systemic finding. By Q4-FY25, reports emerged of bailable warrants over unresolved summons.

### The Root Cause: D2C Model Failure at Scale
Ola's [[D2C]] (Direct-to-Consumer) service model worked at low volumes but catastrophically failed at scale:

| Problem | Detail |
|---------|--------|
| **No independent mechanics** | Unlike [[Companies/TVS Motor]]/[[Companies/Bajaj Auto]] where any roadside mechanic can service an ICE scooter, Ola scooters REQUIRE company-trained technicians |
| **Spare parts bottleneck** | Parts were centrally managed — no distributor network like [[Legacy OEMs]] |
| **Software dependency** | Many issues required [[OTA]] updates or app-based diagnostics — couldn't be fixed physically |
| **Experience centers ≠ service centers** | Ola's 900 "experience centers" were designed for sales, not repair. Limited service bays and tools |
| **Geographic gaps** | Customers in [[Tier 2/3 cities]] had no service access at all |

---

## Part 2: The "Reliability Moat" — Why Legacy Players Won

### Service Network Comparison (The Smoking Gun)
| Company | Total Dealer/Service Network | EV-Specific Service Points | Service Cost/Visit | Parts Availability |
|---------|----------------------------|---------------------------|-------------------|-------------------|
| **[[Companies/Hero MotoCorp]]** | 6,000+ dealerships & service points | 500+ dedicated EV stations + 3,600 fast-charging points | Standard mechanic rates | Nationwide parts distribution |
| **[[Bajaj Auto]]** | 1,480+ dealers, 1,217 TPM-certified | 850+ GoGo/Chetak outlets | ₹400 per 5,000 km | Extremely low service cost structure |
| **[[TVS Motor]]** | 1,000+ pan-India service centers | Integrated EV support in existing network | [[TVS Connect App]] for scheduling | Dense spare parts network |
| **[[Ather Energy]]** | 700 experience centers | Purpose-built for EV service | Higher than legacy but reliable | Growing but still limited |
| **[[Companies/Ola Electric]]** | ~900 experience centers (FY25 peak) | Limited service capability at most centers | Variable, often delayed | Centralized, frequently out of stock |

> [!data] Source: SERVICE_NETWORK_COMPARISON.csv
> Legacy players collectively control **3,000+ service points** vs Ola's ~300 repair-capable centers. [[Companies/TVS Motor]] has **95% parts availability** vs Ola's estimated **60-75%**. [[Companies/Bajaj Auto]] service costs **Rs 400/visit** — 2x to 3.75x cheaper than Ola's Rs 800-1,500. [[Companies/Hero MotoCorp]]'s 6,000+ dealers represent the "sleeping giant" with 20x Ola's repair-capable footprint.

### The Trust Gap in Numbers
| Metric | Ola | TVS | Bajaj |
|--------|-----|-----|-------|
| Service centers with repair capability | ~300 of 900 | 1,000+ (all full-service) | 1,480+ (all full-service) |
| Average service turnaround time | 7-15 days (peak crisis) | Same-day to 2 days | Same-day to 2 days |
| Parts availability rate | ~60% (estimated) | ~95% | ~95% |
| Customer can use independent mechanic | No (proprietary tech) | Yes (hybrid capability) | Yes (hybrid capability) |
| Service cost for routine maintenance | ₹800-1,500 | ₹500-800 | ₹400 |

### Why Legacy Networks Are a "Moat"
[[Legacy OEMs]] don't just have more service centers — they have a **fundamentally different service architecture**:

1. **Decades of mechanic training:** [[Companies/TVS Motor]] and [[Companies/Bajaj Auto]] have trained hundreds of thousands of mechanics over 30+ years. These mechanics already know how to handle electric variants with minimal retraining.

2. **Distributed parts inventory:** Legacy OEMs have regional warehouses, state distributors, and local dealers who stock parts. When a [[Chetak]] needs a brake pad, it's available in the same town. When an [[Ola S1]] needs a battery module, it ships from [[Market/State_EV_Policies]].

3. **Trust inheritance:** A customer who has owned 3 [[TVS Jupiter]] scooters already trusts TVS. Buying an [[iQube]] is an easy decision because TVS's service promise carries over. Ola has NO trust inheritance.

4. **Cost structure:** [[Companies/Bajaj Auto]]'s Chetak service costs ₹400 per 5,000 km. That's comparable to [[ICE]] scooters. Ola's service model is unpredictable in both cost and timeline.

> [!data] Source: EV_SEGMENT_COMPARISON.csv
> [[Companies/TVS Motor]] reached **23.0% FY26 E2W market share** (371,000 EV units, 33% YoY growth). [[Companies/Bajaj Auto]] reached **21.0%** (289,000 units, 25% YoY growth, already profitable with "Double-Digit Positive" EV EBITDA). Combined legacy (TVS+Bajaj+Hero Vida) share hit **65.23% in Mar-26** — up from 20.93% in Apr-22. The crossover where legacy first exceeded Ola was **Feb-24** (42.51% vs 41.92%).

---

## Part 3: The Hyperservice Response

### What Ola Did (Q3 FY25 → Q3 FY26)
| Initiative | Detail | Impact |
|-----------|--------|--------|
| **Project Vistaar** (Nov 2024) | Network transformation — optimize retail + service footprint | Reduced delivery time from 12 days to 3-4 days |
| **HyperDelivery** | Same-day delivery capability at select centers | Improved customer acquisition at point-of-sale |
| **Hyperservice Vans** | 1,000 mobile service vans deployed to reach customers | Extends service reach beyond fixed centers |
| **AI Diagnostics** | Remote troubleshooting via app, automated issue detection | 80% of service tickets resolved same-day (Ola claim) |
| **Project Lakshya** | Cost optimization — OpEx target ₹250-300 Cr/quarter | [[Breakeven]] lowered to 15,000 units/month |
| **Service Backlog Clearance** | Dedicated sprint to clear accumulated service tickets | 50% reduction in backlog (Ola claim) |

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv
> Despite the service crisis, Ola's [[EBITDA]] margin turned positive for the first time: **+2.1% (Q3 FY26)** and **+4.5% (Q4 FY26)** — after hitting a trough of **-22.1% (Q4 FY25)**. [[Gross margin]] improved from **12% to 36%** driven by [[Technology/Gigafactory_Updates]] cell integration and [[Opportunities/S1 X]] mix shift (72% of sales, ASP Rs 90,000). The breakeven volume dropped from ~40,000 to ~15,000 units/month.

### Assessment: Is it Working?
**Partially.** The operational metrics have improved, but the brand damage is done:
- **Operationally:** Service response times have improved significantly
- **Financially:** The leaner model works (34.3% gross margin proves it)
- **Commercially:** Sales have NOT recovered. Monthly volumes in Q3/Q4 FY26 averaged ~12,000 units — far below the 15,000 breakeven

**The core issue:** [[Trust]], once lost, takes 2-3 product cycles to rebuild. [[Companies/TVS Motor]] and [[Companies/Bajaj Auto]] customers who switched during the crisis will not switch back for at least 2-3 years.

---

## Part 4: Correlation Data — Service Crisis → Sales Collapse

### The Timeline Overlay (Service Events vs. Market Share)
| Month | Ola Market Share | Key Service Event |
|-------|-----------------|-------------------|
| Apr 2024 | 40.2% | Post-IPO, still market leader |
| Jul 2024 | 32.8% | Complaints accelerating |
| **Oct 2024** | **26.4%** | **CCPA notice issued** |
| Jan 2025 | 20.9% | Consumer courts ruling against Ola |
| Apr 2025 | 17.5% | Legacy players aggressively marketing "reliability" |
| Jul 2025 | 11.7% | Hyperservice deployed but trust damage irreversible |
| **Oct 2025** | **8.6%** | **Ola falls to 5th place** |
| Jan 2026 | 12.8% | Slight recovery ([[Technology/Gen_3_Platform]] + Hyperservice effect) |
| Mar 2026 | 15.9% | March fiscal-year-end push |

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv
> Ola's share loss accelerated through three phases: **slow erosion (47%→44%, ~1pp/quarter)**, **acceleration (44%→26%, ~9pp/quarter)**, then **collapse (26%→8.6%, ~4.4pp/quarter)**. The CCPA notice (Oct-24) was the catalytic event: within 2 months, Ola went from market leader to **3rd place** behind TVS and Bajaj.

### The Causal Chain (for your strategy deck)
```
Scale without service infrastructure
        ↓
10,000+ unresolved complaints pile up (2023-2024)
        ↓
Social media amplifies negative sentiment (viral effect)
        ↓
CCPA formal intervention (Oct 2024) → media coverage
        ↓
New buyers choose "safe" legacy brands (TVS/Bajaj)
        ↓
Existing Ola customers DON'T recommend → word-of-mouth collapses
        ↓
Monthly sales drop from 33,000 (Apr 2024) → 7,500 (Nov 2025)
        ↓
Market share: 40% → 8% in 18 months
```

> [!data] Source: market/SERVICE_NETWORK_COMPARISON.csv
> Ola's post-Hyperservice turnaround time of 3-4 days is still 2-3x worse than the 1-2 day standard across all legacy players. At peak crisis, Ola's 7-15 day turnaround meant customers waited 2 weeks for basic repairs.
> Causal chain: Even after Hyperservice improvements, Ola still cannot match the 1-2 day standard because the fundamental constraint is parts availability (60-75%) and insufficient service points (~300)
> Cells: Row 6 (Ola): Avg_Turnaround_Days = 7-15 (peak) / 3-4 (post-Hyperservice); Row 2-4: 1-2

> [!data] Source: Ola_after_ipo.txt
> TVS had 1,000+ existing dealer-service centers before entering EVs. Bajaj had 3,800+ touchpoints. Hero had the largest dealer network in India. Ola had ~900 experience centers with limited service capability. When scooters failed, customers had nowhere to go.
> Causal chain: Ola's D2C model lacked the service density of legacy OEM dealer networks. This structural disadvantage became fatal when product quality issues emerged.
> Cells: Section 2: 'Why legacy players won' paragraph

> [!data] Source: financial_mda.txt
> Ola had 935 experience centres + 414 service centres (410 co-located within experience centres) as of Oct 31, 2023. The 410 co-located service centres within 935 experience centres meant only 44% of locations had service capability - a structural weakness that became fatal at scale.
> Causal chain: The 410 co-located service centres within 935 experience centres meant only 44% of locations had service capability - a structural weakness.
> Cells: Page 312: Network details

---

> [!data] Source: ola/QUATERS.csv
> Ola's quarterly revenue collapsed from Rs 1,644 Cr (Q1 FY25) to Rs 470 Cr (Q3 FY26) - a 71% decline in 7 quarters. Meanwhile, unit sales dropped from 108,000 to 35,000 per quarter (68% decline), driven by the service crisis and trust erosion.
> Causal chain: The service crisis (CCPA notice Oct-2024, 10,000+ complaints, 7-15 day turnarounds) directly caused customers to switch to Ather/TVS/Bajaj, triggering a revenue death spiral
> Cells: Row 2 Col Jun-24 = 1644, Row 2 Col Dec-25 = 470; PRODUCT_MIX Row 2 Units_Sold = 108000, Row 8 Units_Sold = 35000

> [!data] Source: ola/SERVICE_CRISIS_TIMELINE.csv
> Ola's EV market share fell from ~47% (early FY24) to 15.9% (FY26) - a 66% share loss in 2 years. The CCPA show-cause notice in Oct-2024 (10,000+ complaints) marked the inflection point where share dropped from 26% to 16%.
> Causal chain: Each service crisis escalation (CCPA notice, consumer court rulings, bailable warrants) triggered another wave of customer defection, compounding the market share decline
> Cells: Row 2 = 47% (Q1-FY24), Row 6 = 26% (Oct-2024), Row 13 = 16% (Q4-FY26)

> [!data] Source: ola/PRODUCT_MIX_QUARTERLY.csv
> Ola's product mix shifted dramatically from 35% premium S1 Pro (Q1 FY25) to 75% low-end S1 X (Q3 FY26), destroying blended ASP from Rs 135,000 to Rs 89,000 (-34%). This was a defensive move to maintain volume as premium buyers fled due to service concerns.
> Causal chain: As premium customers (S1 Pro buyers) abandoned Ola due to service complaints, Ola was forced to sell more low-end S1 X models to budget-conscious customers, creating a self-reinforcing revenue decline and brand devaluation
> Cells: Row 2: S1_Pro_Pct=35, S1_X_Pct=15, ASP=135000; Row 8: S1_Pro_Pct=6, S1_X_Pct=75, ASP=89000

> [!data] Source: ola/CUSTOMER_SENTIMENT.csv
> The CCPA received 10,000+ formal complaints against Ola Electric, making it one of the top 5 most complained-about companies across all sectors on the National Consumer Helpline. This is unprecedented for an automotive company in India.
> Causal chain: 10,000+ formal complaints triggered a CCPA show-cause notice, which triggered MHI subsidy investigation, which created media coverage that drove market share from 26% to 16% - a cascading regulatory and reputational crisis
> Cells: Row 4: Formal Complaints = 10000+ (Oct-2024); Row 12: Complaint Volume Rank = Top 5 among all companies

> [!data] Source: ola/CUSTOMER_SENTIMENT.csv
> Consumer courts have consistently ruled against Ola Electric, ordering full refunds plus Rs 10,000-50,000 compensation per case. Courts cited 'pattern of neglect' in their rulings. With 500+ estimated post-IPO cases, total liability could exceed Rs 25 Cr in compensation alone.
> Causal chain: Adverse legal rulings compound reputational damage - each court case becomes a news item that reaches potential buyers, making them question Ola's reliability and customer commitment
> Cells: Row 6: Cases Filed Estimated Post-IPO = 500+; Row 7: Typical Ruling = Full refund + Rs 10000-50000 compensation; Row 7 Notes = 'pattern of neglect'

> [!data] Source: ola/SERVICE_CRISIS_TIMELINE.csv
> Ola's Hyperservice initiative (1000+ service vans + AI diagnostics launched Q1 FY26) claimed 50% backlog reduction and 80% same-day resolution by Q3 FY26. However, these are self-reported and unverified, and market share only recovered to 16% from 9% trough.
> Causal chain: While Hyperservice improved operational metrics, trust recovery lags actual service improvement by 6-12 months because customers only trust consistent positive experiences over multiple service visits
> Cells: Row 11: Hyperservice deployed Q1-FY26; Row 12: 50% backlog reduction, 80% same-day resolution claimed; Row 12: Market share 9%, Row 13: recovered to 16%

> [!data] Source: market/COMPETITOR_EV_METRICS.csv
> Ola's FY26 EV unit decline of -52% (340K to 164K) is the steepest annual decline for any major automotive brand in India, surpassing even COVID-era drops. For context, the entire EV segment grew ~30% in FY26, meaning Ola lost massive market share.
> Causal chain: While the entire EV scooter market expanded ~30%, Ola's 52% volume decline means it didn't just lose relative share - it lost absolute customers who permanently switched to competitors
> Cells: Row 3: Ola_FY25=340000, Ola_FY26=164000 (-52%); EV_SEGMENT Row 8: Ather +75%, TVS +33%, Bajaj +25%, Hero +206% YoY

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv + SERVICE_CRISIS_TIMELINE.csv
> SMOKING GUN — CCPA notice timing: In Oct-2024, CCPA issued a show-cause notice with 10,000+ formal complaints (SERVICE_CRISIS Row 6). At that moment, Ola's market share was exactly 26.40% (E2W Row 32 Oct-24). Twelve months prior (Oct-23), Ola was at 45.19%. In the 12 months following CCPA (Oct-24 to Sep-25), share collapsed from 26.40% to 9.71% — the regulatory action was the inflection point that transformed a gradual decline into a freefall.
> Causal chain: CCPA regulatory action→media amplification→consumer trust terminal damage→accelerated market share decline→legacy competitors capture fleeing customers
> Cells: E2W Row 32 Ola_Market_Share_Pct=26.40 (Oct-24); SERVICE_CRISIS Row 6 Date=Oct-2024, Event_Category=CRITICAL, Complaints_Count=10000+; E2W Row 43 Ola_Market_Share_Pct=9.71 (Sep-25)

> [!data] Source: SERVICE_CRISIS_TIMELINE.csv + CUSTOMER_SENTIMENT.csv
> Hyperservice deployment (Q1 FY26): 1,000 service vans + AI diagnostics deployed. Claimed 50% backlog reduction and 80% same-day resolution by Q3 FY26 (SERVICE_CRISIS Row 11-12). However, these are self-reported metrics not independently verified, and customer app rating remains at 3.2/5.0 (CUSTOMER_SENTIMENT Row 2). The gap between claimed and perceived improvement is significant.
> Causal chain: Hyperservice deployment→operational metrics improve→self-reported success→customer perception lags→app rating still low→trust recovery takes longer than operational recovery→market share recovery slow
> Cells: SERVICE_CRISIS Row 11 Hyperservice deployed Q1-FY26; Row 12 'Service backlog reduced 50% - 80% same-day resolution claimed' Q3-FY26; CUSTOMER_SENTIMENT Row 2 App Rating=3.2/5.0 (May-2026)

> [!data] Source: SERVICE_CRISIS_TIMELINE.csv + SERVICE_NETWORK_COMPARISON.csv
> Project Vistaar launched Nov-2024 (SERVICE_CRISIS Row 10) as network transformation response, but Ola's service network restructured from 900 experience centers peak to ~300 with repair capability — an effective service point reduction of 67% despite claiming 'network transformation.' True service capability was far below the claimed 900 centers.
> Causal chain: Claimed 900 centers→only 300 have repair capability→service gap→Project Vistaar→network restructuring→but real capacity was always much lower→misleading metric
> Cells: SERVICE_CRISIS Row 10 Project Vistaar launched Nov-2024, Market_Share_At_Time=24%; SERVICE_NETWORK Row 6 Ola: Total_Dealer_Network=900 (peak), EV_Service_Points='~300 with repair capability'

> [!data] Source: PROFIT_AND_LOSS.csv
> Selling & Admin expenses ballooned from Rs 58.06 Cr (FY21) to Rs 1,598 Cr (FY25) - a 27.5x increase, far outpacing the 5,249x revenue growth in percentage terms. By FY25, S&A alone was 35.4% of revenue, indicating massive overhead.
> Causal chain: D2C model required expensive experience centers and service network, creating fixed overhead that became burdensome when sales declined.
> Cells: Row 8: Selling and admin for Mar-21 through Mar-25

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Oct 2024: CCPA issued a show-cause notice after receiving ~10,000 complaints on the National Consumer Helpline. Complaints cited: repair delays, delivery failures, parts unavailability.
> Context: Section 2: The Service Center Crisis — Key events

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Oct-Nov 2024: Ministry of Heavy Industries (MHI) asked ARAI to investigate whether Ola was violating warranty/service conditions required for FAME/PM E-DRIVE subsidy eligibility — threatening their subsidy income.
> Context: Section 2: The Service Center Crisis — Key events

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Q3 FY26: Ola launched "Hyperservice" initiative deploying 1,000 new service vans with AI-enabled diagnostics for remote troubleshooting. Claimed 50% reduction in service backlog and 80% of tickets resolved same-day.
> Context: Section 2: The Service Center Crisis — Key events

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Why legacy players won: TVS had 1,000+ existing dealer-service centers before entering EVs. Bajaj had 3,800+ touchpoints. Hero had the largest dealer network in India. Ola had ~900 experience centers with limited service capability. When Ola's scooters started failing, customers had nowhere to go.
> Context: Section 2: The Service Center Crisis — Why legacy players won

> [!data] Source: ola_ipo/risk_factors.txt
> As of October 31, 2023: 935 experience centres and 414 service centres (410 within experience centres) across India. Majority of experience centres open for less than one year. First experience centre opened September 2022.
> Context: Page 39 & 42-43, Risk Factors 11 and 16

> [!data] Source: ola_ipo/risk_factors.txt
> Up to June 30, 2023, experience centres and service centres were operated by related party Ola Fleet Technologies Pvt Ltd. Ola assumed control of operations on July 1, 2023. Prior to June 2023, selling and distribution expenses comprised fees paid to Ola Fleet Technologies.
> Context: Page 39 & 42-43, Risk Factors 11 and 16

> [!data] Source: ola_ipo/risk_factors.txt
> Pre-IPO risk disclosure: Ola has "limited experience servicing EVs and providing after-sales service" partly through third-party service providers. Cannot assure that service arrangements will adequately address customer requirements or that sufficient resources exist "in a timely manner as the volume of EVs we deliver increases."
> Context: Page 39, Risk Factor 11

> [!data] Source: ola_ipo/risk_factors.txt
> Road-side assistance provided through third-party service providers. At-home scooter servicing also available. Any deficiency in grievance redressal can affect customer satisfaction, reputation, and brand.
> Context: Page 39, Risk Factor 11

> [!data] Source: ola_ipo/industry_overview_business.txt
> Service network details: 414 service centres across 23 states as of October 31, 2023. Customers book service appointments online. Pin code mapping-based network design. Ola Electric Companion app enables service tracking. Customer concerns categorized as: (i) sales/fulfilment or (ii) service-related.
> Context: Page 186, Our Business - After Sales

> [!data] Source: ola_ipo/industry_overview_business.txt
> Customer support channels: email, phone (IVR), chatbot on Ola Electric Companion app, social media monitoring. Service-related complaints assigned ticket numbers with monitoring. Escalation emails to support@olaelectric.com and legal@olaelectric.com tracked daily.
> Context: Page 186, Our Business - Redressal of customer concerns

> [!data] Source: ola_ipo/risk_factors.txt
> Pre-IPO risk that materialized post-IPO: Ola acknowledged its D2C distribution model is "different from the predominant current distribution model." The internet-led model is "relatively new and unproven" in India's auto industry (Redseer). Inadequate sales and service performance could "negatively impact our reputation and brand."
> Context: Page 42-43, Risk Factor 16

## Connections

### Causes
- [[D2C]] service model designed for low volumes, inadequate for scale
- Only **~300 of 900** experience centers had repair capability
- Centralized spare parts management created distribution bottlenecks
- No [[trust inheritance]] — Ola had zero brand equity in automotive service
- [[Hypergrowth]] (12,000 to 53,320 monthly registrations in 23 months) overwhelmed infrastructure

### Effects
- **Market share collapse**: 55.81% → 8.6% (18 months)
- **Revenue decline**: -71% peak-to-trough (Rs 1,644 Cr → Rs 450 Cr quarterly)
- **Stock crash**: ~Rs 150 post-IPO peak to ~Rs 29 (80.7% decline)
- **Brand destruction**: [[Market/Net_Promoter_Score]] negative (below 0) for 2025-2026
- **Regulatory jeopardy**: CCPA investigation + MHI/ARAI subsidy probe
- **Competitive surrender**: [[Companies/TVS Motor]] (23%), [[Companies/Bajaj Auto]] (21%), [[Companies/Ather Energy]] (16%), [[Hero]] (11%) captured lost share

### Amplifiers
- **News media coverage** (ET, Mint, BS) gave CCPA action front-page prominence
- **Social media virality** (#OlaElectric trending, Reddit recommending competitors)
- **Consumer court rulings** created public legal records deterring new buyers
- **Negative NPS** means each existing owner becomes a detractor influencing 10-20 potential buyers
- **Google Play rating gap** (3.2 vs TVS 4.2, Ather 4.0) visible at every purchase research touchpoint

### Linked Nodes
- [[Customer_Sentiment_Analysis]] — App rating erosion, NPS data, social media sentiment
- [[Risks/Customer Experience Gap]] — Pre-IPO analysis of service concerns from DRHP
- [[Risks/Competition]] — Legacy players' service advantage captured market share
- [[Risks/Product Quality]] — Build quality issues that necessitated service visits
- [[Risks/Revenue Decline FY25]] — Service crisis directly caused revenue contraction
- [[Risks/Financial Losses]] — Cash burn accelerated by service crisis response costs
- [[Post-IPO_Updates]] — Full market share collapse data
- [[Post-IPO_Quarterly_Calls]] — Management's response quarter by quarter
- [[Product_Mix_Cannibalization]] — Why the product ISN'T the problem
- [[Gigafactory_Updates]] — Why the unit economics ARE fixed
- [[Hyperservice]] — Ola's operational response (mobile vans, AI diagnostics)
