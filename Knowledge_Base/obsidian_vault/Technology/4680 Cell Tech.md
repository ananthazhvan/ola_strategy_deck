> [!insight] The Single Most Important Thing
> 4680 cells are the linchpin of Ola's [[Technology/Gigafactory_Updates|Gigafactory]] thesis — if the chemistry fails, the entire ₹4,000 Cr investment and [[Strategy/Backward Integration|vertical integration strategy]] unravels. The pivot from NMC 4680 to LFP 46100 was validated by cobalt's 133% price surge.

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Ola pivoted from NMC 4680 to LFP 46100 (Apr 2026), achieving $80/kWh cell cost — from $135/kWh at announcement (Mar 2024). BOM reduction jumped from 25% (NMC, Dec 2025) to 30% (LFP, Apr 2026).

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Cobalt price surged from $24,000/MT (2025 H2) to $56,000/MT (2026 current) — a 133% spike driven by DRC supply constraints. NMC cells contain 6-8% cobalt; LFP contains zero, insulating Ola from this volatility.

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Global LFP pack price at $80/kWh with 4,200 GWh capacity and ~900 GWh excess — Ola is at import parity, meaning the make-vs-buy case for the [[Technology/Gigafactory_Updates|Gigafactory]] is neutral, not advantageous.

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Cell production ramped from ~10,000 (Q1 FY26 pilot) to ~100,000 cumulative (Mar 2026), with 72,418 cells in Q3 FY26 alone (101% QoQ). Target of 12 GWh Phase 2 by Jul 2027.

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Lithium carbonate at CNY 192,000 (2026 current, up 102% from CNY 95,000 in 2025 H1) adds input cost pressure to [[Technology/R&D Investment|LFP chemistry]] — a vulnerability if the V-shaped recovery continues.

# 4680 Form Factor Cell Technology

**Status:** In Testing
**Criticality:** HIGH — Determines Gigafactory viability

---

## Technical Claims

- **5x energy density** claim (NMC 4680-era, pre-pivot) — superseded by LFP 46100 which has ~15% lower energy density but superior thermal stability (45C+) and 3,000+ cycle life
- Advanced electrode manufacturing technologies developed at [[Technology/Battery Innovation Centre|BIC]]
- Original target: power existing products, future EVs, and energy storage systems
- **April 2026 pivot**: NMC 4680 abandoned for LFP 46100 format — cobalt-free, $80/kWh, 30% BOM reduction. See [[Technology/Gigafactory_Updates]] and [[Technology/LFP_46100_Cell]]

---

## Why 4680 Matters

### For Ola
- [[Companies/Ola Electric#Gigafactory|Gigafactory]] is being built specifically for 4680 cells
- If 4680 fails, the entire Gigafactory investment thesis is at risk
- Battery = 35% of BOM — cell cost is the single biggest margin lever

### For the Industry
- Tesla pioneered 4680 development; Ola is among first in India to attempt
- Larger form factor = fewer cells per pack = simpler assembly = lower cost
- Higher energy density = longer range or smaller/lighter packs

---

## Risks

1. **Technology not proven at scale** — Tesla itself struggled with 4680 ramp-up
2. **Low initial yield** — DRHP explicitly warns of this for "considerable duration"
3. **Competing chemistries** — LFP (lithium iron phosphate) gaining popularity for safety + cost
4. **Time pressure** — Cell PLI milestones (1→5→10→20 GWh) start ticking with penalties
5. **Raw material availability** — 4680 requires specific cathode/anode materials

---

## Implications of Failure

- Gigafactory would need to switch to alternative cell formats (costly retooling)
- Cell PLI subsidies at risk (20 GWh commitment)
- ₹1,910 Cr SBI loan at risk of default (offtake agreement dependent)
- Continuing import dependence defeats vertical integration thesis

---

> [!data] Source: ola/PRODUCT_MIX_QUARTERLY.csv
> Ola's gross margin improved dramatically from 12% (Q4 FY25) to 36% (Q4 FY26), driven by in-house NMC 4680 cell production reducing battery cost from $130/kWh to $85/kWh. However, this was offset by ASP declining from Rs 135,000 to Rs 90,000 as product mix shifted to low-end S1 X.
> Causal chain: In-house cell production cuts battery cost by 35% ($130 to $85/kWh), directly boosting gross margins, but the service crisis forced Ola to discount and sell more low-end S1 X models, destroying ASP
> Cells: Row 5 Gross_Margin=12, Row 9 Gross_Margin=36; Row 5 Battery_Cost=125, Row 9 Battery_Cost=85; Row 5 ASP=98000, Row 2 ASP=135000; Row 5 S1_X_Pct=60, Row 8 S1_X_Pct=75

> [!data] Source: ola/PRODUCT_MIX_QUARTERLY.csv
> Ola's battery cost reduced from $130/kWh (imported cells, FY25) to $85/kWh (in-house NMC 4680, Q4 FY26) — a 35% reduction directly enabling gross margin expansion from 12% to 36%. This is Ola's most significant competitive advantage.
> Causal chain: In-house cell manufacturing at the Gigafactory gives Ola a structural cost advantage that competitors buying cells from LG/CATL cannot match, potentially enabling profitable pricing below competitor cost base once volumes recover
> Cells: Row 2 (Q1_FY25): Battery_Cost=130, Cell_Source=Imported; Row 9 (Q4_FY26): Battery_Cost=85, Cell_Source='Mixed (NMC + LFP 46100 pilot)'; Row 2 Gross_Margin=18, Row 9 Gross_Margin=36

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv + GIGAFACTORY_MILESTONES.csv
> Ola replaced imported cells with in-house production progressively: $130/kWh imported (Q1 FY25) → $110/kWh in-house NMC (Q1 FY26) → $85/kWh NMC+LFP (Q4 FY26). This 35% cost reduction directly enabled gross margin improvement from 18% (Q1 FY25) to 36% (Q4 FY26) despite ASP declining from Rs 135,000 to Rs 90,000.
> Causal chain: In-house cell production→BOM reduction→gross margin expansion→EBITDA breakeven→financial survival despite volume collapse
> Cells: PRODUCT_MIX Row 2 Battery_Cost_Per_kWh_USD=130 (Q1 FY25); Row 8 Battery_Cost_Per_kWh_USD=85 (Q4 FY26); PRODUCT_MIX Row 2 Gross_Margin_Pct=18; Row 9 Gross_Margin_Pct=36; GIGAFACTORY Row 8 Battery_Cost_Per_kWh_USD=100 (Dec-25); Row 9 Battery_Cost_Per_kWh_USD=90 (Mar-26); Row 10 Battery_Cost_Per_kWh_USD=80 (Apr-26)

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Ola's Gigafactory progressed from 0 GWh (Mar-2024) to 6 GWh (Apr-2026) in 24 months. Cells produced went from ~2,000 pilot cells (Sep-2024) to ~100,000 (Mar-2026) — a 50x scale-up. BOM cost reduced 28% from initial pilot to Mar-2026, with target of 40% reduction by full build-out (Mar-2028).
> Causal chain: Gigafactory construction→pilot production→commercial ramp→cost reduction→margin improvement→strategic asset
> Cells: Row 2 Capacity_GWh=0 (Mar-2024); Row 9 Capacity_GWh=5.9 (Mar-2026); Row 3 Cells_Produced=~2000 (Sep-2024); Row 9 Cells_Produced=~100000 (Mar-2026); Row 9 BOM_Reduction_Pct=28

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv
> Gross Margin trajectory: 18% (Q1 FY25) → 16% → 14% → 12% (Q4 FY25 trough, imported cells) → 22% (Q1 FY26, Gigafactory begins) → 28% → 34.3% (Q3 FY26 peak) → 36% (Q4 FY26). Improvement from 12% to 36% in 4 quarters = 3x improvement.
> Causal chain: In-house NMC 4680 cells replaced imported cells starting Q1 FY26, reducing battery cost from $130/kWh to $85/kWh, directly driving gross margin expansion.
> Cells: Rows 2-9: Gross_Margin_Pct

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv, GIGAFACTORY_MILESTONES.csv
> Battery cost per kWh: $130 (Q1-Q3 FY25, imported) → $125 (Q4 FY25, mixed import+NMC pilot) → $110 (Q1 FY26, in-house NMC) → $105 (Q2) → $100 (Q3) → $85 (Q4 FY26, NMC+LFP pilot). Cumulative 35% reduction from $130 to $85/kWh.
> Causal chain: Each Gigafactory production milestone reduced battery cost. The transition from imported cells ($130) to in-house NMC ($110) to NMC+LFP pilot ($85) drove the 35% reduction.
> Cells: PRODUCT_MIX: Battery_Cost_Per_kWh_USD rows 2-9. GIGAFACTORY: Col F (Battery_Cost_Per_kWh_USD)

## Connections
**Causes:** [[Technology/R&D Investment]]
**Effects:** [[Strategy/Backward Integration]], [[Technology/Gigafactory_Updates]]
**Amplifiers:** [[Strategy/EV Hub Tamil Nadu]]
**Linked Nodes:** [[Strategy/Product_Mix_Cannibalization]], [[Technology/Gen 2 Platform]]
