> [!insight] Related Party Entity That Managed Ola's Retail Network
> Ola Fleet Technologies was the related-party entity that operated Ola's experience centre network before operations were brought in-house in July 2023. Ola Electric paid Rs 722.6 Cr in fees to Ola Fleet Technologies in FY23 for managing the retail and service network. The in-sourcing decision consolidated the D2C network under Ola Electric's direct control but transferred the fixed cost burden onto the public company's P&L.

> [!data] Source: IPO offer document disclosures (related party transactions)
> Ola Fleet Technologies managed Ola's 935 experience centres and 414 service centres. Fee paid in FY23: Rs 722.6 Cr. Operations brought in-house Jul 2023. Significant related party entity.
> Causal chain: Separate entity manages retail → Ola Electric pays management fees → IPO requires related party simplification → operations brought in-house → D2C cost structure transfers to public company books
> Cells: Offer Document related party transaction section

# Ola Fleet Technologies

Ola Fleet Technologies was a related party entity that operated Ola Electric's network of experience centres and service centres during the company's high-growth phase. It served as the retail and service arm, managing customer-facing operations including showroom sales, test rides, vehicle deliveries, and service centre operations across India. The entity was part of the broader Ola group structure before the IPO.

The FY23 fee of Rs 722.6 Cr paid to Ola Fleet Technologies represented a significant related party transaction. At that point, Ola Electric was selling vehicles through a network of 935 experience centres and 414 service centres (of which 410 were co-located with experience centres), all operated by Ola Fleet Technologies. This arrangement meant that Ola Electric's reported revenue was partially offset by these management fees, and the true cost of the D2C retail network was partially opaque to external investors.

In July 2023 -- approximately 13 months before the IPO listing -- Ola brought these operations in-house, consolidating the experience centre network directly under Ola Electric. This restructuring simplified the corporate structure for the IPO and eliminated the related party leakage, but it also transferred the full fixed cost of the D2C network onto Ola Electric's books. This contributed to the SG&A ballooning from Rs 58 Cr (FY21) to Rs 1,598 Cr (FY25) -- a 27.5x increase -- as the costs of the once-separate retail network became directly visible in the public company financials.

## Key Data Points

- Fee paid to Ola Fleet Technologies in FY23: Rs 722.6 Cr
- Entity operated experience centres and service centres until July 2023
- Operations brought in-house ~13 months before IPO listing (Aug 2024)
- Network at time of in-sourcing: 935 experience centres, 414 service centres (410 co-located)
- Only ~300 of the 935 experience centres had actual repair capability
- In-sourcing transferred D2C retail network fixed costs onto Ola Electric's P&L
- SG&A grew from Rs 58 Cr (FY21) to Rs 1,598 Cr (FY25), partly reflecting this consolidation

---

> [!data] Source: ola_insights.json / financial_mda.txt
> Of Ola's 935 experience centres at peak, only 414 had service centres and only 410 were co-located within experience centres. This means only 44% of Ola's retail locations had even basic service capability. In contrast, every one of Bajaj's 1,480+ dealers and TVS's 1,000+ dealers is a service-capable outlet. Ola Fleet Technologies operated a retail network that was primarily a sales channel with service as an afterthought — 56% of centres were pure showrooms with no ability to fix the products they sold. This structural design flaw — embedded in the related-party operating model — ensured that when sales volume surged past 50,000 units/month, the service infrastructure would be catastrophically overwhelmed.
> Causal chain: Ola Fleet operates asset-light retail network → 56% of centres are showroom-only → service capacity insufficient at scale → volume surge overwhelms ~300 repair-capable centres → 7-15 day turnaround times → CCPA complaints → market share collapse
> Cells: financial_mda.txt Page 312: '935 experience centres + 414 service centres (410 co-located within experience centres)'

> [!data] Source: market_insights.json / SERVICE_NETWORK_COMPARISON.csv
> The D2C model operated through Ola Fleet Technologies created a structural service density disadvantage that became fatal when product issues emerged. Legacy OEMs entered the EV market with existing infrastructure: TVS had 1,000+ dealer-service centres before launching the iQube, Bajaj had 3,800+ touchpoints, and Hero had the largest network in India at 6,000+. Ola Fleet Technologies had built 935 experience centres — impressive for a startup but hopelessly inadequate against incumbents. When Ola scooters needed repairs, customers had nowhere to go — no independent mechanic ecosystem, no multi-brand service centre, no fallback. Every service failure was Ola's alone to bear.
> Causal chain: Ola Fleet's 935 centres vs legacy 1,000-6,000 dealer networks → inadequate service density → long customer wait times → frustration escalates to CCPA/courts → customers defect to legacy brands with better service → D2C model without service redundancy fails
> Cells: Row 6 Ola: Total_Dealer_Network=900 (peak), EV_Service_Points=~300; Row 3 Bajaj: 1480+; Row 4 TVS: 1000+; Row 2 Hero: 6000+

> [!data] Source: ola_insights.json / PROFIT_AND_LOSS.csv
> The in-sourcing of Ola Fleet Technologies' network (Jul 2023) transferred the full D2C retail fixed cost onto Ola Electric's P&L. The result was visible almost immediately: Ola's SG&A-to-sales ratio deteriorated from 67% in FY21 (when revenue was minimal) to 35% of revenue in FY25 — meaning Rs 35 of every Rs 100 earned went to selling and administration costs. By contrast, Bajaj operates at ~8-10% SG&A-to-sales. The 27.5x SG&A increase (Rs 58 Cr to Rs 1,598 Cr) reflected a cost structure designed for 50%+ market share that became unsustainable when share collapsed to 16%. The Ola Fleet in-sourcing was the moment this cost structure transferred from a private entity to the public company.
> Causal chain: Fleet in-sourcing → D2C retail costs on public books → SG&A explodes to 35% of revenue → cost structure built for peak volumes → market share collapse makes it unsustainable → extreme OpEx cuts required (Rs 840 Cr to Rs 484 Cr) → survival restructuring
> Cells: Row 8 Selling and admin: Mar-21=58.06, Mar-25=1598; Row 2 Sales: Mar-21=0.86, Mar-25=4514

> [!data] Source: market_insights.json / SERVICE_CRISIS_TIMELINE.csv + SERVICE_NETWORK_COMPARISON.csv
> Project Vistaar (launched Nov 2024) was Ola's response to the network failure that Ola Fleet Technologies' model had created. The network was restructured from 900 peak experience centres to approximately 300 with actual repair capability — an effective service point REDUCTION of 67%. This was not network expansion but reality recognition: the 600+ showroom-only centres were closed because they could not be economically converted to service centres. The post-Vistaar network of ~300 repair-capable centres is still inadequate for the 164,000+ vehicles on road, explaining why Ola's post-Hyperservice turnaround time (3-4 days) remains 2-3x the legacy standard (1-2 days).
> Causal chain: Ola Fleet model → 67% of centres are sales-only → service crisis → Project Vistaar → 600+ centres closed → network shrinks to ~300 repair-capable → still below legacy density → turnaround remains 2-3x slower
> Cells: SERVICE_CRISIS Row 10 Project Vistaar launched Nov-2024; SERVICE_NETWORK Row 6 Ola: Total_Dealer_Network=900 (peak), EV_Service_Points='~300 with repair capability'

> [!data] Source: ola_insights.json / Ola_after_ipo.txt
> The core investment thesis emerging from analysis of the Ola Fleet model is: "Diagnosis — D2C model without service infrastructure was the real failure, not product." The Gigafactory proves product economics work (34.3% gross margin at Rs 89,000 ASP). The Ola Fleet Technologies structure proves the distribution model was broken — it built a sales machine without a service backbone. The Fleet decision created a related-party structure that extracted Rs 722.6 Cr from the public company while building an asset-light network that had no repair capability in 56% of locations. The in-sourcing fixed the related-party leakage but revealed the underlying structural weakness.
> Causal chain: Fleet model prioritized sales showrooms over service capability → related party extracted fees for inadequate infrastructure → in-sourcing exposed service gap → service crisis unfolded → but product economics (proven by gross margin improvement) remain sound → fix distribution, not product
> Cells: Ola_after_ipo.txt Section 5: Strategic Implications — 'D2C model without service infrastructure was the real failure, not product'

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP related party context: Ola Fleet Technologies (OFT), a wholly-owned subsidiary of ANI Technologies, operated Ola's experience centres and service centres until June 30, 2023. On July 1, 2023, OET acquired OFT's business via Business Transfer Agreement on a slump sale basis as a going concern, with accounting for the acquisition still being finalized as of the DRHP date.
> Context: Page 308, Post-reporting period events

> [!data] Source: ola_ipo/financial_mda.txt
> DRHP selling and distribution expenses (fee paid to Ola Fleet Technologies): Rs 35.33 Cr (FY22), Rs 72.26 Cr (FY23), Rs 34.55 Cr (Q1 FY24). Starting July 1, 2023, Ola assumed direct control of experience centres and service centres and was no longer required to pay such fees, eliminating the related party leakage.
> Context: Page 316

> [!data] Source: ola_ipo/outstanding_litigation.txt
> DRHP disclosed that except for outstanding borrowings of OET (material subsidiary) and OCT (subsidiary), there are no outstanding borrowings of Ola Electric or any of its other subsidiaries. OET's loans were secured by charge over current assets, movable/immovable assets, plant and machinery, and corporate guarantee by Ola Electric.
> Context: Page 340, Financial Indebtedness

## Connections

### Causes
- [[Companies/Ola Electric]] — Ola Fleet Technologies was a related party entity within the broader Ola group
- [[Strategy/D2C Omnichannel]] — The experience centre model was the backbone of Ola's D2C retail strategy, operated through this entity

### Effects
- [[Financial/Balance Sheet Analysis]] — In-sourcing transferred retail operating costs onto Ola Electric's books, expanding reported SG&A
- [[Risks/Customer Experience Gap]] — The service network capacity was inadequate even before in-sourcing, with only 300 of 935 centres having repair capability
- [[Risks/D2C Model Fixed Cost Trap]] — The fixed cost of the D2C retail network became a direct burden on Ola Electric's P&L post-consolidation

### Linked Nodes
- [[Companies/Competitor_Firepower]]
- [[Financial/Cash Flow Analysis]]
- [[Risks/Service_Center_Crisis]]
- [[Market/E2W Market India]]
