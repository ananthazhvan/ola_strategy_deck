# B2B Battery Pivot

> [!insight] The Single Most Important Thing
> Ola's 6 GWh Gigafactory is operating at ~16% utilization (6 GWh built, ~1 GWh consumed internally), forcing a B2B pivot via Ola Shakti (stationary storage) and OEM cell supply. But as of May 2026, zero confirmed B2B orders or revenue exist — 100% of Q4 FY26 sales remain E2W. The pivot faces a 900 GWh global cell glut where Chinese manufacturers dominate at the same $80/kWh cost. The data explicitly warns: "bad if selling B2B."

> [!data] Source: GIGAFACTORY_MILESTONES.csv — Gigafactory reached 6.0 GWh nameplate capacity (Apr-2026), LFP 46100 cells at $80/kWh, 30% BOM reduction. Cumulative cells produced: ~100,000 by Mar-2026. Estimated utilization: ~16%. Phase 2 target: 12 GWh (Jul-2027). Full build-out: 20 GWh (Mar-2028).

> [!data] Source: QUARTERLY_FINANCIALS_EXT.csv — Q4 FY26 management focus: "B2B Battery Supply & Margin Defense." Revenue: Rs 520 Cr (all from E2W). Units sold: 39,000 (all scooters). No B2B revenue line.

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv — Global cell manufacturing capacity: 4,200 GWh. Excess supply: ~900 GWh (21% overhang). LFP pack price: $80/kWh (down 43% from $140/kWh 2022 peak). Impact on Ola Gigafactory: "Good for Ola if buying; bad if selling B2B." — explicit warning against the B2B strategy.

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv — Q4 FY26 product mix: S1 X 72%, S1 Pro 7%, S1 Air 5%, Roadster 2%. Total E2W: 100%. No B2B/energy storage revenue present in any financial statement.

---

## The Utilization Crisis

Ola's Gigafactory was sized for an optimistic demand scenario that collapsed:

- **Installed capacity:** 6.0 GWh (enough for ~1.5M+ scooters/year at 4 kWh average)
- **Current demand (own scooters):** ~0.4-0.6 GWh/year (39K units/quarter at ~3.5 kWh average)
- **Estimated utilization:** ~16%
- **Idle capacity:** ~5 GWh — a massive stranded asset risk
- **Capex invested:** ~Rs 4,000 Cr (FY24-FY25)
- **Annual depreciation:** Rs 566 Cr (Mar-25) — scaling with gigafactory asset base
- **Annual interest cost:** Rs 366 Cr (Mar-25)

---

## The Two B2B Channels

### 1. Ola Shakti (Stationary Energy Storage)
Ola has announced stationary energy storage solutions under the "Ola Shakti" brand. This targets commercial and industrial backup power, grid storage, and rural energy access. The LFP chemistry's thermal stability and long cycle life make it suitable for stationary applications.

### 2. OEM Cell Supply
Ola aims to sell cells to other vehicle manufacturers — including potentially to competitors in the E2W, 3W, and light EV segments. The pitch is domestic supply chain security vs imported Chinese cells.

### Zero Confirmed Execution
Despite the Q4 FY26 management focus explicitly shifting to "B2B Battery Supply & Margin Defense," there are no confirmed B2B orders, contracts, or revenue in any financial statement. The pivot is a stated intent with zero execution evidence.

---

## The Global Overcapacity Headwind

The B2B cell market is saturated:

| Metric | Value |
|--------|-------|
| Global cell manufacturing capacity | 4,200 GWh |
| Excess supply | ~900 GWh (21% overhang) |
| Chinese LFP pack price (2026) | $80/kWh |
| Ola LFP 46100 cost (Apr-2026) | $80/kWh (parity) |
| Key Chinese competitors | CATL, BYD — decades of scale advantage |
| Chinese-backed players in Africa | Spiro (Kenya), MAX (Nigeria) |

BATTERY_SUPPLY_CHAIN explicitly warns against selling B2B into a 900 GWh glut: "good for Ola if buying; bad if selling B2B." Ola would enter a market where Chinese manufacturers have:
- 4,200 GWh of domestic capacity enabling unparalleled economies of scale
- ~900 GWh excess supply enabling aggressive market-share-buying pricing
- Established African distribution already deployed

---

## The Hidden Connection: Vehicle-Level Margin is the Real Play

Ola cannot win on cell sales (zero cost advantage at $80/kWh parity with China). But it can bypass cell commoditization by **selling value-added battery packs integrated into vehicles** where the 30% BOM reduction provides vehicle-level margin. Battery-as-a-Service (BaaS) subscription revenue is the monetization model that could work — but only if Ola solves service infrastructure first. The [[Opportunities/Export Markets|export escape hatch]] ($2-3B TAM by 2028) is the same logic: sell vehicles, not cells.

---

> [!data] Source: COMPETITOR_EV_METRICS.csv + PRODUCT_MIX_QUARTERLY.csv
> Ola's Revenue Per Unit increased from Rs 151,818 (FY24) to Rs 223,902 (FY26) despite ASP declining from Rs 135,000 to Rs 89,000 in quarterly data. This discrepancy suggests growing non-vehicle revenue (B2B cell sales, service revenue, accessories) in FY26 — confirming the strategic pivot from pure vehicle sales to diversified revenue.
> Causal chain: Vehicle ASP declines→non-vehicle revenue grows→overall revenue per unit increases→diversification reduces vehicle sales dependency→B2B and service become new revenue pillars
> Cells: COMPETITOR Row 4 Ola_FY24_Revenue_Per_Unit=151818, Ola_FY26_Revenue_Per_Unit=223902; PRODUCT_MIX Row 2 Blended_ASP=135000 (Q1 FY25), Row 8 Blended_ASP=89000 (Q3 FY26)

> [!data] Source: Ola_after_ipo.txt
> Ola Shakti residential B2B battery storage system announced. Ola exploring deals to supply cells to other automakers, following a CATL/BYD model but India-based. This hedges against scooter sales decline — with excess cell capacity (6 GWh target → ~1M scooters/year vs actual sales of 164K/year), Ola needs B2B customers to utilize Gigafactory capacity.
> Causal chain: With excess cell capacity (6 GWh target vs actual sales of 164K/year), Ola needs B2B customers to utilize Gigafactory capacity
> Cells: Section 4: B2B pivot paragraph

> [!data] Source: GIGAFACTORY_MILESTONES.csv (chain_giga.json)
> Gigafactory timeline shows Ola cannot absorb its own cell output: 6 GWh nameplate supplies ~1.5M scooters/year at 4 kWh average, but Ola sells ~164K/year. Even at 100% EV sales recovery to peak (340K units), internal consumption is ~1 GWh — leaving 5 GWh needing external buyers.
> Causal chain: Gigafactory sized for 1.5M scooter equivalent→actual sales 164K→~5 GWh must be sold externally→B2B pivot inevitable→Phase 2 (12 GWh) and Phase 3 (20 GWh) would worsen the gap
> Cells: Row 9 Capacity_GWh=5.9 (Mar-2026), Row 10 Capacity_GWh=6.0 (Apr-2026)

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Ola's B2B pivot includes: (1) Ola Shakti residential home battery storage system, and (2) cell supply to other automakers. This follows the CATL/BYD model of becoming a merchant cell supplier. The hedge works in both directions: if scooter sales recover, in-house cells improve margins; if not, cell supply becomes the core business.
> Context: Section 4: Gigafactory & Technology Pivot — B2B pivot

## Connections

### Causes
- [[Technology/Gigafactory_Updates|Gigafactory overcapacity (6 GWh, ~16% utilization)]] — forced by scooter sales collapse
- [[Market/VAHAN_Market_Share_Story|Market share collapse (55.81% -> 15.95%)]] — domestic demand insufficient to absorb capacity
- [[Risks/Product Quality|Service crisis destroyed trust and volume]] — preventing organic demand growth

### Effects
- Stranded asset risk: 90% of 6 GWh capacity idle, Rs 4,000+ Cr capex at risk
- If B2B fails AND scooters don't recover: the gigafactory becomes a stranded asset
- Depreciation (Rs 566 Cr/yr) and interest (Rs 366 Cr/yr) are fixed costs that don't reduce with utilization
- B2B pivot may require further investment in sales channels, certification, and customer support

### Amplifiers
- 900 GWh global excess cell supply suppresses B2B pricing — same $80/kWh as Ola's cost
- Chinese OEMs have decades of relationship advantage in global B2B markets
- No confirmed orders as of May 2026 — pivot is all promise, no proof
- Phase 2 (12 GWh, Jul 2027) and full build-out (20 GWh, Mar 2028) would worsen the mismatch

### Linked Nodes
- [[Technology/Gigafactory_Updates]]
- [[Technology/LFP_46100_Cell]]
- [[Market/Export_Markets_Detail]]
- [[Opportunities/Export Markets]]
- [[Opportunities/Cell Manufacturing]]
- [[Financial/Balance Sheet Analysis]]
- [[Risks/Gigafactory Execution]]
- [[Market/Battery_Supply_Chain]]
