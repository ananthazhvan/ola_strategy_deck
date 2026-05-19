# LFP 46100 Cell

> [!insight] The Single Most Important Thing
> Ola's pivot from NMC 4680 to LFP 46100 chemistry is a strategic masterstroke validated by a 133% cobalt price spike ($24,000 to $56,000/MT in 6 months due to DRC supply constraints). LFP is cobalt-free, thermally stable (runaway threshold ~270°C vs NMC's ~210°C), and costs $80/kWh vs NMC's $100/kWh. The pivot achieved import-cost parity, 30% BOM reduction, and enabled Ola's gross margin expansion from 12% to 36% — all while insulating cell costs from cobalt market volatility.

> [!data] Source: GIGAFACTORY_MILESTONES.csv — LFP 46100 commercially announced Apr-2026 at $80/kWh, achieving parity with import price. BOM reduction reached 30% (up from 25% with NMC in Dec-2025). Target: 35% (Jul-2027, Phase 2), 40% (Mar-2028, full build-out).

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv — Cobalt: $82,000/MT (2022 peak) -> $24,000 (2025 H2 trough) -> $56,000 (2026 current, +133% in 6 months). Trend: "Rising (DRC supply constraints)." Impact on Ola: "NMC cells more expensive; validates LFP pivot."

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv — LFP pack price: $140/kWh (2022 peak) -> $80/kWh (2026 current, -43%). NMC pack price: $160/kWh (2022 peak) -> $100/kWh (2026 current, -38%). LFP increasingly dominant for cost-sensitive applications.

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv — Gross margin impact: 12% (Q4 FY25 trough, imported cells $125/kWh) -> 36% (Q4 FY26, in-house mixed NMC+LFP $85/kWh). The LFP pivot directly enabled the margin recovery.

---

## Chemistry Comparison

| Property | NMC 4680 | LFP 46100 | Advantage |
|----------|---------|-----------|-----------|
| Cost per kWh (2026) | $100 | $80 | LFP 20% cheaper |
| Cobalt content | 6-8% by weight | **Zero** | LFP: no DRC supply risk |
| Thermal runaway threshold | ~210°C | **~270°C** | LFP safer in heat |
| Energy density | Higher | Lower | NMC advantage |
| Cycle life | ~2,000 cycles | ~3,000+ cycles | LFP longer life |
| Lithium per kWh | ~0.1 kg | ~0.14 kg | NMC advantage (if Li prices spike) |
| Ideal use case | Premium/long-range | Cost-sensitive/stationary | LFP for mass market |

---

## Why the Pivot Was Critical

### 1. Cobalt Price Shock
Cobalt prices more than doubled from $24,000/MT (2025 H2) to $56,000/MT (2026 current) — a 133% increase in ~6 months. The DRC (Democratic Republic of Congo) supplies ~70% of global cobalt, making the market structurally vulnerable to geopolitical disruption. NMC 4680 cells contain 6-8% cobalt, meaning each $1/kg increase in cobalt adds ~$2-3/kWh to NMC cell cost. At $56,000/MT, NMC faces a persistent cost headwind that LFP avoids entirely.

### 2. Import Cost Parity
Ola's NMC cell cost had plateaued at $100/kWh (Dec-2025), stuck above the LFP import price of $83/kWh. The pivot to LFP unlocked the leap to $80/kWh — achieving import parity for the first time in the Gigafactory's 2-year development. The data shows Ola has always been at or above market price; LFP finally closed the gap.

### 3. Thermal Advantage for Export Markets
LFP's higher thermal runaway threshold (~270°C vs ~210°C) is critical for [[Opportunities/Export Markets|African export markets]] where ambient temperatures reach 35-45°C and enclosed battery compartments can experience even higher internal temperatures. For commercial B2B fleets operating 8-12 hours daily, LFP provides safer operation without active cooling requirements.

### 4. Gross Margin Enablement
The cell cost reduction from $130/kWh (imported NMC) to $85/kWh (in-house LFP mix) directly enabled gross margin expansion from 18% to 36%. The inflection point (Q4 FY25 -> Q1 FY26: 12% -> 22%) coincides exactly with the transition from imported to in-house cells.

---

## The Form Factor Change: 4680 -> 46100

The change from 4680 (46mm diameter x 80mm height) to 46100 (46mm x 100mm) is significant:
- **46100** is taller, allowing higher energy capacity per cell
- The 46mm diameter retains the structural advantages of the larger form factor
- The taller cell is optimised for LFP chemistry's lower energy density — more active material per cell compensates for LFP's inherent energy density disadvantage

---

## Vulnerability: Lithium Price Exposure

LFP chemistry uses ~40% more lithium per kWh than NMC (0.14 kg/kWh vs 0.1 kg/kWh). With lithium carbonate at CNY 192,000/T and rising (102% V-shaped recovery from 2025 H1), LFP's lithium intensity is a vulnerability:

- At 192,000 CNY/T: lithium cost ~$2.3/kWh for LFP vs ~$1.6/kWh for NMC
- If lithium approaches 2022 peak ($90,000/MT or ~590,000 CNY/T): LFP lithium cost would more than triple
- The hedge: LFP's simpler manufacturing (no cobalt processing, easier dry room) saves more than the incremental lithium cost

---

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Ola's LFP 46100 cell announced Apr-2026 at $80/kWh — exactly at global LFP pack price parity. This is the critical validation point: at $80/kWh, Ola can compete with Chinese cell imports on cost. Phase 2 target (Jul-2027): $75/kWh at 12 GWh. Full build-out (Mar-2028): $70/kWh at 20 GWh, below global average.
> Causal chain: LFP chemistry pivot→cost parity with global prices→scale targets→below-global-average cost→Gigafactory thesis validated
> Cells: Row 10 Chemistry=LFP 46100, Battery_Cost_Per_kWh_USD=80 (Apr-2026); Row 11 Capacity_GWh=12.0, Battery_Cost_Per_kWh_USD=75 (Jul-2027); Row 12 Capacity_GWh=20.0, Battery_Cost_Per_kWh_USD=70 (Mar-2028)

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Cobalt price spike validates LFP pivot: Cobalt (LME) surged from $24,000/MT (2025 H2) to $56,000/MT (2026 Current) — a 133% increase driven by DRC supply constraints. This makes NMC cells structurally more expensive and vindicates Ola's decision to pivot from NMC 4680 to LFP 46100 chemistry.
> Causal chain: DRC supply constraints→cobalt price spike→NMC uneconomical→Ola LFP pivot validated→gigafactory chemistry decision proven correct→competitors on NMC face cost pressure
> Cells: Row 3 2025_H2=24000, 2026_Current=56000, Trend='Rising (DRC supply constraints)'

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Lithium carbonate (China) shows a V-shaped recovery: CNY 590,000/T peak (2022) → crashed to CNY 95,000 (2025 H1) → rebounded to CNY 192,000 (2026 Current) — a 102% H1-to-Current increase. This directly raises Ola's input costs for both NMC and LFP cells.
> Causal chain: Lithium supply deficit→price recovery→cell input cost increase→Ola's in-house production hedges partially→gigafactory becomes more valuable as hedge against commodity volatility
> Cells: Row 2 2022_Peak=590000, 2025_H1=95000, 2026_Current=192000, Trend='Rising (V-shaped recovery)'

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> LFP pack price declined from $140/kWh (2022) to $80/kWh (2026) — a 43% drop in 4 years. NMC pack price declined from $160/kWh (2022) to $100/kWh (2026) — a 37.5% drop. LFP is declining faster and is now 20% cheaper than NMC, confirming the industry-wide shift to LFP for cost-sensitive E2W applications.
> Causal chain: LFP technology maturation+overcapacity→faster price decline→LFP becomes dominant chemistry→Ola's LFP pivot aligns with industry trend→NMC becomes niche premium chemistry
> Cells: Row 9 2022=140, 2026=80; Row 10 2022=160, 2026=100

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv + GIGAFACTORY_MILESTONES.csv
> Ola's Gigafactory make-vs-buy breakeven: At $80/kWh global LFP pack price (2026) and Ola's $85/kWh in-house cost, Ola is currently ~6% above global parity. The Gigafactory only becomes economically justified at Phase 2 (12 GWh, $75/kWh, Jul-2027) when Ola undercuts global prices. Until then, buying from Chinese suppliers is cheaper.
> Causal chain: China overcapacity→global LFP at $80→Ola at $85→negative spread currently→scale needed for positive spread→gigafactory viable at 12+ GWh→time pressure
> Cells: BATTERY Row 9 2026=80 (LFP pack global); GIGAFACTORY Row 10 Battery_Cost_Per_kWh_USD=80 (LFP 46100 Apr-2026); GIGAFACTORY Row 11 Battery_Cost_Per_kWh_USD=75 (Phase 2 Jul-2027)

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Nickel (LME) stable at $18,000/MT (2026) after crashing from $48,000 peak (2022). Nickel stability is neutral for NMC cell costs but has no impact on LFP (which contains no nickel). Ola's LFP pivot reduces nickel exposure, a strategic de-risking move.
> Causal chain: Nickel price stability→NMC costs predictable→but Ola pivoting to LFP→eliminates nickel dependency→commodity risk reduction
> Cells: Row 4 2022_Peak=48000, 2026_Current=18000

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> FY26 end (Mar-2026): Capacity expanded to 5.9 GWh, ~100,000 cells produced cumulatively, 28% BOM reduction, battery cost down to $90/kWh. LFP 46100 cells entered pilot production.
> Causal chain: FY26-end milestones show the parallel path: scaling NMC capacity while initiating LFP pilot for future chemistry shift.
> Cells: Row 9: Mar-2026 entry

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> LFP 46100 cell announced Apr-2026: 6.0 GWh capacity, 30% BOM reduction, $80/kWh battery cost. Future targets: Jul-2027: 12 GWh, 35% reduction, $75/kWh. Mar-2028: 20 GWh full build-out, 40% reduction, $70/kWh target cost.
> Causal chain: LFP chemistry pivot (Jan 2026 announced) targets 30-40% cheaper raw materials vs NMC (no cobalt, no nickel), better thermal stability for Indian climate, 3000+ cycle life vs 1500 NMC.
> Cells: Rows 10-12: Apr-2026, Jul-2027, Mar-2028 entries

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Ola pivoted from 4680-format NMC to 46100-format LFP chemistry in Jan 2026. LFP advantages: 30-40% cheaper raw materials, better thermal stability for Indian 45°C+ summers, 3,000+ cycle life vs 1,500 for NMC. Trade-off: ~15% lower energy density, acceptable for 100-150km scooter range.
> Context: Section 4: Gigafactory & Technology Pivot — Why LFP over NMC

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Cell production: 36,000 cells (Q2 FY26), 72,418 cells (Q3 FY26, 2x QoQ). Installed capacity: 2.5 GWh, target: 6 GWh (enough for ~1 million scooters/year).
> Context: Section 4: Gigafactory & Technology Pivot — Production milestones

> [!data] Source: ola_ipo/Ola_after_ipo.txt
> Ola is hedging its scooter business by becoming a battery supplier (like CATL/BYD model, but India-based). Ola Shakti residential storage and cell supply to other automakers are the two B2B channels being explored.
> Context: Section 4: Gigafactory & Technology Pivot — B2B pivot

## Connections

### Causes
- [[Technology/Gigafactory_Updates|Gigafactory development]] from 0 to 6.0 GWh enabled in-house chemistry choice
- Global LFP price decline ($140 -> $80/kWh, -43%) made LFP increasingly dominant for cost-sensitive apps
- [[Market/Battery_Supply_Chain|DRC cobalt supply constraints]] ($24K -> $56K/MT, +133%) validated the pivot
- NMC cost plateau at $100/kWh (Dec-2025) — couldn't reach parity without chemistry change

### Effects
- 30% BOM reduction achieved (Apr-2026), target 40% by full build-out
- Gross margin expanded from 12% to 36% — directly enabled by cell cost reduction
- $80/kWh import parity achieved for first time in Gigafactory's development
- Cobalt price volatility neutralised — zero cobalt content insulates Ola permanently
- Thermal stability opens [[Opportunities/Export Markets|African export opportunity]] (B2B fleets in 35-45°C ambient)

### Amplifiers
- 133% cobalt price spike in 6 months proves DRC supply risk is structural, not transient
- Global LFP dominance trend means more manufacturers entering LFP — driving further cost declines
- Chinese LFP capacity (4,200 GWh) sets the benchmark; Ola at $80/kWh is at parity, not below
- If lithium price continues rising toward 2022 peak (590,000 CNY/T), LFP's lithium intensity becomes a vulnerability

### Linked Nodes
- [[Technology/Gigafactory_Updates]]
- [[Technology/Gen 2 Platform]]
- [[Technology/4680 Cell Tech]]
- [[Technology/Gen_3_Platform]]
- [[Market/Battery_Supply_Chain]]
- [[Financial/Margin_Paradox]]
- [[Opportunities/Export Markets]]
- [[Strategy/B2B_Battery_Pivot]]
