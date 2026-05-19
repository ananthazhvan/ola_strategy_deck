# SoftBank

> [!data] Source: ola/META.csv, ola/SHAREHOLDING_PATTERN.csv
> Ola Electric's market cap stands at just Rs 15,923 Cr with share price Rs 36.1, down significantly from its IPO. With 54.39% retail ownership and declining FII (3.99% and falling), the stock has weak institutional support and pre-IPO investor overhang (SoftBank, Tiger Global lockup expiry).
> Causal chain: The service crisis destroyed investor confidence, causing FII exodus and retail accumulation (typical of beaten-down stocks), limiting Ola's ability to raise follow-on equity without massive dilution
> Cells: Row 7 = Price 36.1, Row 8 = MCap 15923.14; SHAREHOLDING_PATTERN.csv Row 3 FII 3.99%, Row 8 Retail 54.39%

> [!data] Source: ola/SHAREHOLDING_PATTERN.csv
> Pre-IPO investors (SoftBank, Tiger Global, others) lockup expiry creates a major overhang. These investors hold significant stakes from pre-IPO rounds and are likely seeking exit. At current Rs 36.10 price (vs Rs 150 peak), any large secondary sale would further depress the stock.
> Causal chain: Lockup expiry→pre-IPO investors seek exit→secondary supply→downward price pressure→depressed valuation→acquisition opportunity for strategic buyer
> Cells: Row 7 Pre-IPO Investors: Change_Trend='Declining (lockup expiry sales)', Signal='Major overhang; SoftBank likely reducing'

> [!data] Source: ola/SHAREHOLDING_PATTERN.csv
> FII holding declined steadily: 5.41% (Jun-25) → 4.85% (Sep-25) → 4.22% (Dec-25) → 3.99% (Mar-26). This is a 26% reduction in FII exposure over 9 months, indicating sustained institutional loss of confidence.
> Causal chain: Service crisis→revenue decline→institutional concern→FII selling→stock price decline→further FII exit→self-reinforcing bear cycle→acquisition target risk increases
> Cells: Row 4 FII/FPI: Pct_Mar2026=3.99, Pct_Dec2025=4.22, Pct_Sep2025=4.85, Pct_Jun2025=5.41

> [!data] Source: offer_document_summary.txt
> Pre-IPO shareholding: SVF II Ostrich (SoftBank) held 21.98% — the largest external shareholder. Bhavish Aggarwal held 36.94%. SoftBank's weighted average acquisition price was Rs 50.94/share vs current Rs 36.10 — sitting on ~29% unrealized loss.
> Causal chain: SoftBank's large 21.98% stake created lockup expiry overhang risk, which materialized as selling pressure post-IPO
> Cells: Page 18-19: Pre-Offer Shareholding table; Pages 20-21: Weighted average acquisition prices

> [!data] Source: ola/BALANCE_SHEET.csv
> Ola's outstanding shares increased from 195.54 Cr (Mar-24) to 441.08 Cr (Mar-25) — a 126% dilution in one year, driven by the IPO and follow-on fundraising. The pre-IPO investor overhang (SoftBank, Tiger Global) threatens further dilution as lockup expires.
> Causal chain: Massive dilution means even if Ola recovers revenue, per-share earnings will be significantly lower. Every new fundraising round further dilutes existing shareholders, creating downward pressure on stock price
> Cells: Row 2, Col D (Mar-24) = 1955.45 (x10 = 195.54 Cr shares), Col F (Mar-25) = 4411 (x10 = 441.08 Cr shares)

> [!data] Source: ola/SHAREHOLDING_PATTERN.csv, ola/META.csv, ola/GIGAFACTORY_MILESTONES.csv
> Acquisition target risk: With market cap of Rs 15,923 Cr (~$1.9B), stock at Rs 36.10 (76% below peak), and FII exiting (5.41% to 3.99%), Ola is vulnerable to acquisition. A strategic buyer could acquire controlling stake for $1.5-2B — cheap relative to Gigafactory asset value (20 GWh target capacity).
> Causal chain: Depressed stock→low market cap→Gigafactory asset undervalued→acquisition opportunity for strategic buyer→promoter stake only 34.59%→control achievable→SoftBank exit aligns with acquisition scenario
> Cells: SHAREHOLDING Row 4 FII signal='Foreign money exiting — bearish'; META Row 7 Price=36.1, Row 8 Market Capitalization=15923.14; GIGAFACTORY Row 12 Capacity_GWh=20.0

> [!data] Source: offer_document_summary.txt
> IPO fresh issue was Rs 55,000 Mn (Rs 5,500 Cr). Offer for Sale component was up to 95,191,195 equity shares from selling shareholders including SoftBank (SVF II Ostrich — 21.98% pre-IPO), Bhavish Aggarwal (36.94% pre-IPO), and others. The fresh issue was intended for Gigafactory CapEx, debt repayment, R&D, and organic growth.
> Causal chain: The Rs 5,500 Cr fresh issue was intended for CapEx (Rs 1,226 Cr for Gigafactory), debt repayment (Rs 800 Cr), R&D (Rs 1,600 Cr), and organic growth (Rs 350 Cr)
> Cells: Page 17-18: Offer Size and Pre-Offer Shareholding

> [!data] Source: offer_document_summary.txt
> Pre-IPO weighted average acquisition prices: Internet Fund III at Rs 11.70/share (lowest), Matrix at Rs 8.22/share, Sarin Family at Rs 8.22/share — suggesting early-stage pricing. SoftBank at Rs 50.94/share. Highest: Tekne Private Ventures at Rs 113.12/share and Ab Initio at Rs 111.51/share.
> Causal chain: Early investors (Internet Fund III, Matrix) acquired at Rs 8-12/share, while later investors (Tekne, Ab Initio) paid Rs 111-113/share, indicating massive valuation escalation. SoftBank at Rs 50.94 is sitting on ~29% unrealized loss at current Rs 36.10.
> Cells: Pages 20-21: Weighted average acquisition prices

> [!data] Source: ola/META.csv, ola/Ola_after_ipo.txt
> IPO listing price was approximately Rs 76 (Aug 2024). Stock hit post-IPO high of ~Rs 150, then crashed to ~Rs 29 (May 2026) — a 52% decline from highs and 62% decline from listing price. Market cap collapsed from ~Rs 66,000 Cr at peak to Rs 15,923 Cr, destroying ~Rs 36,000 Cr in equity value from peak.
> Causal chain: IPO success→capital raised→service crisis→stock collapse→market cap down 76%→equity value destroyed→acquisition target risk emerges
> Cells: META Row 7 Current Price=36.1, Row 8 Market Capitalization=15923.14

> [!data] Source: ola/SHAREHOLDING_PATTERN.csv
> Retail + Individual investors increased steadily: 52.23% (Jun-2025) -> 53.74% (Sep-2025) -> 53.84% (Dec-2025) -> 54.39% (Mar-2026). This is typical for beaten-down stocks — retail investors are 'bag holding' while institutions exit, a classic pattern preceding either a turnaround or further distress.
> Causal chain: Institutional exit→retail buys dip→retail concentration→less price discovery→higher volatility→vulnerable to acquisition at depressed valuation
> Cells: Row 6 Retail+Others: Pct_Mar2026=54.39, Pct_Dec2025=53.84, Pct_Sep2025=53.74, Pct_Jun2025=52.23

> [!data] Source: ola/Ola_after_ipo.txt
> Ather Energy market cap: $2.63 Billion vs Ola's $1.56 Billion. Ather (IPO-bound, pre-IPO) is valued higher than Ola (publicly listed) despite Ola having more manufacturing capacity and Gigafactory assets. The market values Ather's premium brand and better service reputation more than Ola's manufacturing scale and vertical integration.
> Causal chain: The market values Ather's premium brand + better service reputation more than Ola's manufacturing scale and vertical integration
> Cells: Section 1: Market cap comparison

## Connections
**Causes:** [[Companies/SoftBank Vision Fund]]
**Effects:** [[Financial/IPO Proceeds]], [[Risks/Financial Losses]]
**Amplifiers:** [[Companies/Tiger Global]]
**Linked Nodes:** [[Companies/Ola Electric]], [[Financial/Post-IPO_Updates]]
