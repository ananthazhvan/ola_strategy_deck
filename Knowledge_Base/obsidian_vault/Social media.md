# Social Media

> [!data] Source: ola/CUSTOMER_SENTIMENT.csv
> Social media sentiment: Predominantly negative across Twitter/X, YouTube, Reddit. #OlaElectric trending negatively. Reddit r/ElectricVehicles community consistently recommends Ather/TVS over Ola. YouTube long-term ownership reviews highlight service issues.
> Causal chain: Negative social media created a viral feedback loop: complaints generated content, content attracted more complainants, and the algorithm amplified negativity
> Cells: Rows 8-10: Social Media sentiment entries

> [!data] Source: ola/CUSTOMER_SENTIMENT.csv
> Ola's Net Promoter Score is estimated to be negative (below 0), meaning more customers are detractors than promoters. TVS iQube app rating is 4.2/5, Ather 4.0/5, Ola Electric 3.2/5 — a 1-point gap that translates to dramatically different word-of-mouth.
> Causal chain: Negative NPS creates a self-reinforcing cycle: unhappy customers don't recommend, new buyers choose competitors, volumes decline, service infrastructure becomes underutilized, further degrading service quality
> Cells: Row 15: NPS = Negative (below 0); Row 2: Ola App Rating = 3.2/5.0

> [!data] Source: ola/CUSTOMER_SENTIMENT.csv
> Reddit community r/ElectricVehicles consistently recommends Ather and TVS over Ola. This peer influence has outsized impact on first-time EV buyers who research online before purchasing, directly driving Ola's market share erosion among informed buyers.
> Causal chain: First-time EV buyers heavily rely on online communities. When a critical mass of community members recommends against Ola, it creates a structural demand barrier that price cuts alone cannot overcome
> Cells: Row 10: Reddit Sentiment = Negative

> [!data] Source: ola/CUSTOMER_SENTIMENT.csv
> The CCPA received 10,000+ formal complaints against Ola Electric, making it one of the top 5 most complained-about companies across all sectors on the National Consumer Helpline. This is unprecedented for an automotive company in India.
> Causal chain: Service complaints→NCH top 5→regulatory attention→CCPA notice→media coverage→brand damage→market share decline→worst complaint-to-sales ratio in India
> Cells: Row 4: Formal Complaints = 10000+ (Oct-2024); Row 12: Complaint Volume Rank = Top 5 among all companies

> [!data] Source: SERVICE_CRISIS_TIMELINE.csv, CUSTOMER_SENTIMENT.csv
> Legal escalation snowballed: 189 cases disclosed in DRHP (Aug-2024) to estimated 500+ post-IPO (May-2026) with multiple consumer court rulings ordering full refund + Rs 10,000-50,000 compensation. Courts cited a 'pattern of neglect' by Ola. Each ruling sustained negative media coverage, preventing any market share recovery.
> Causal chain: DRHP disclosure→post-IPO case explosion→adverse court rulings→media coverage→sustained negative sentiment→prevents recovery
> Cells: SERVICE_CRISIS Row 5 Date=Aug-2024, Complaints_Count=189 (court cases); CUSTOMER_SENTIMENT Row 7 Typical_Ruling='Full refund + Rs 10000-50000 compensation'

> [!data] Source: SERVICE_NETWORK_COMPARISON.csv
> Ola's trust inheritance rated 'Very Low (trust damaged)' — contrasting with 'Very High' for Hero, Bajaj, and TVS (decades of trust). Ola has only 3 years of service experience vs 30-40+ years for legacy OEMs. This structural trust deficit made the service crisis exponentially more damaging and brand recovery far harder.
> Causal chain: No brand equity buffer→first major crisis destroys trust completely→trust recovery requires years→legacy players with trust inheritance benefit asymmetrically
> Cells: Row 6 Ola: Trust_Inheritance='Very Low (trust damaged)', Years_Of_Service_Experience=3

> [!data] Source: ola/CUSTOMER_SENTIMENT.csv
> Google Play Store rating: 3.2/5.0 (May 2026), declining from 4.0 at launch. Total reviews: 200,000+. High volume indicates engagement but skews negative — frequent 1-star reviews. TVS iQube rated 4.2/5.0, Ather 4.0/5.0.
> Causal chain: App rating decline from 4.0 to 3.2 mirrors the service quality deterioration. Competitor apps (TVS 4.2, Ather 4.0) significantly outperformed, creating a visible quality signal for prospective buyers.
> Cells: Rows 2-3: App Rating and Total Reviews. Rows 16-18: Competitor comparisons

## Connections
**Causes:** [[Risks/Service_Center_Crisis]], [[Risks/Customer Experience Gap]]
**Effects:** [[Risks/Customer_Sentiment_Analysis]], [[Market/VAHAN_Market_Share_Story]]
**Amplifiers:** [[Risks/CCPA_Regulatory_Intervention]]
**Linked Nodes:** [[Companies/Ola Electric]]
