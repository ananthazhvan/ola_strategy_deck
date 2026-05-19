> [!insight] The Single Most Important Thing: Ola's D2C network is a double-edged sword. The 935 experience centres are company-owned (capturing 8-12% dealer margins) and provide full customer data visibility, but only ~300 had repair capability during the crisis (SERVICE_NETWORK_COMPARISON). Turnaround of 7-15 days vs TVS/Bajaj 1-2 days destroyed trust. The D2C model that was supposed to be a moat became the crisis vector — because Ola owned the entire service experience, every failure was 100% Ola's fault with no dealer buffer to absorb blame.

> [!data] Source: SERVICE_NETWORK_COMPARISON.csv — Ola: 900 experience centres (peak), ~300 with repair capability, 60-75% parts availability, 7-15 day turnaround (peak crisis), Rs 800-1,500/visit service cost. TVS: 1,000+ centers, 95% parts, 1-2 day turnaround, Rs 500-800/visit. Bajaj: 1,480+ dealers, 95% parts, 1-2 day turnaround, Rs 400/visit.

> [!data] Source: CUSTOMER_SENTIMENT.csv — Google Play Store rating: 3.2/5.0 (declining from 4.0 at launch), 200,000+ reviews with frequent 1-star ratings. TVS iQube: 4.2/5.0. Ather: 4.0/5.0. NPS estimated "negative (below 0)". NCH complaint volume rank: "Top 5 among all companies in India."

> [!data] Source: Ola_after_ipo.txt (chain_margins.json, hidden_connection hc_4) — OpEx slashed from Rs 840 Cr (Q4 FY25 peak) to Rs 484 Cr (Q3 FY26) — 42% reduction. Fired thousands of sales staff, closed underperforming experience centres, cut marketing. The D2C network's fixed cost base was a burden during volume collapse.

> [!data] Source: SERVICE_CRISIS_TIMELINE.csv (chain_service.json) — Service crisis progression: ~500 complaints (Q1 FY24) → 10,000+ complaints (Oct-2024) → CCPA show-cause notice → market share collapse from 44.69% to 8.6%. Hyperservice initiative (Q4 FY25) improved turnaround to 3-4 days but trust remained damaged.

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv — Ola registrations: 53,320 (Mar-24) → 7,567 (Nov-25). TVS registrations: 3,000 (Apr-22) → 42,000 (Mar-26). The D2C network failed to provide the service assurance that legacy dealer networks provide — customers switched en masse.

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv — Revenue per unit trajectory: Rs 15.22L (Q1 FY25, 108K units) → Rs 13.33L (Q4 FY26, 39K units). The D2C model's variable cost advantage (no dealer margin) is offset by lower volume and higher fixed service center costs.

# D2C Network Competitive Moat

**Potential Impact:** 🟡 MEDIUM
**Timeline:** Immediate

---

## The Moat Thesis

Ola's 935 experience centres represent India's largest company-owned EV network. Combined with digital-first sales, this creates:
1. **Direct customer data** — No intermediary filtering insights
2. **Uniform experience** — Controlled brand presentation
3. **Lower distribution cost** — No dealer margins (8-12%)
4. **Rapid iteration** — Direct feedback loop enables faster product/service improvements

---

## Network Effect Potential

As the network grows:
- **Brand visibility** increases with every new centre
- **Service convenience** improves with density
- **Customer acquisition cost** decreases (word of mouth + visibility)
- **Data network effects** — more customers = better insights = better products = more customers

---

## Limitations

1. **Capital intensive** — Each centre requires investment; incumbents' dealer model is asset-light
2. **Scale ceiling** — 935 centres vs 4,000-7,000+ dealer touchpoints for [[TVS Motor]]/[[Bajaj Auto]]
3. **Trust gap** — Owned centres don't automatically equal trusted service ([[Risks/Customer Experience Gap]])
4. **Geographic concentration** — Likely urban-heavy; rural India remains underpenetrated

---

> [!data] Source: SERVICE_CRISIS_TIMELINE.csv + SERVICE_NETWORK_COMPARISON.csv
> Project Vistaar launched Nov-2024 as network transformation response, but Ola's service network restructured from 900 experience centers peak to ~300 with repair capability — an effective service point reduction of 67% despite claiming 'network transformation.' True service capability was far below the claimed 900 centers.
> Causal chain: Claimed 900 centers→only 300 have repair capability→service gap→Project Vistaar→network restructuring→but real capacity was always much lower→misleading metric
> Cells: SERVICE_CRISIS Row 10 Project Vistaar launched Nov-2024, Market_Share_At_Time=24%; SERVICE_NETWORK Row 6 Ola: Total_Dealer_Network=900 (peak), EV_Service_Points='~300 with repair capability'

> [!data] Source: financial_mda.txt
> Ola had 935 experience centres + 414 service centres as of Oct 31, 2023 (410 co-located within experience centres). Only 44% of locations had service capability — a structural weakness that meant most customers had no nearby repair option.
> Causal chain: Sales scaled rapidly→service infrastructure lagged→410 service centres for 247K+ vehicles→inevitable service backlog→customer frustration→regulatory escalation
> Cells: Page 312: Network details — 935 experience centres, 414 service centres (410 co-located)

> [!data] Source: market/SERVICE_NETWORK_COMPARISON.csv
> Ola's post-Hyperservice turnaround time of 3-4 days is still 2-3x worse than the 1-2 day standard across all legacy players (TVS, Bajaj, Hero). At peak crisis, Ola's 7-15 day turnaround meant customers waited 2 weeks for basic repairs.
> Causal chain: Even after Hyperservice improvements, Ola still cannot match the 1-2 day standard because the fundamental constraint is parts availability (60-75%) and insufficient service points (~300)
> Cells: Row 6 (Ola): Avg_Turnaround_Days = 7-15 (peak) / 3-4 (post-Hyperservice); Row 2-4: 1-2

## Connections

### Causes
- **Service infrastructure inadequate for volume** — 935 centers peak but only ~300 with repair capability; parts availability 60-75% vs 95% industry standard
- **D2C model amplification of failures** — Ola owned the entire service experience, so every failure was 100% attributable with no dealer buffer

### Effects
- **Trust destruction** — 10,000+ CCPA complaints, negative NPS, Google Play rating 3.2/5.0
- **Market share collapse** — from 44.69% to 8-16%, customers switched en masse to legacy OEMs with established service networks
- **Revenue death spiral** — 71% quarterly revenue decline as premium customers fled

### Amplifiers
- **Legacy OEM service density** — TVS 1,000+ centers, Bajaj 1,480+ dealers, Hero 6,000+ touchpoints
- **Parts supply chain maturity** — Legacy players have 30-40 year parts distribution networks; Ola has 3 years
- **Social media virality** — Reddit, Twitter, YouTube amplification of service failures reached millions of potential buyers

### Linked Nodes
- [[Strategy/D2C Omnichannel]]
- [[Risks/Customer Experience Gap]]
- [[Risks/Competition]]
- [[Companies/Ola Electric]]

## Related
- [[Strategy/D2C Omnichannel]]
- [[Risks/Customer Experience Gap]]
- [[Risks/Competition]]
- [[Companies/Ola Electric]]
