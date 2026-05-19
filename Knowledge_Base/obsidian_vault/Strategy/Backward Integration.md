> [!insight] The Single Most Important Thing
> Controlling the full value chain from raw materials to distribution is Ola's primary moat, but the [[Technology/Gigafactory_Updates|Gigafactory]] only reached cell cost parity with import prices ($80/kWh) in April 2026 — meaning the first 2 years of production were more expensive than buying from Chinese suppliers.

> [!data] Source: GIGAFACTORY_MILESTONES.csv
> Cell cost reduced from $130/kWh (imported, FY24) to $80/kWh (in-house [[Technology/4680 Cell Tech|LFP 46100]], Apr 2026) — a 38% reduction. BOM_Reduction_Pct reached 30%, targeting 40% by full build-out (Mar 2028).

> [!data] Source: EXPORT_MARKET_ASSESSMENT.csv
> Ola domestic E2W share stuck at 8-16%, making cost leadership via vertical integration essential for survival in a market where TVS (23%) and Bajaj (21%) control 44% combined.

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Global LFP pack price at $80/kWh with 4,200 GWh capacity and ~900 GWh excess supply — Ola's in-house cost is at parity, not below market, making the make-vs-buy case structurally neutral.

> [!data] Source: CASH_FLOW_AND_DERIVED.csv
> Cumulative [[Technology/Gigafactory_Updates|Gigafactory]] capex of ~₹4,000 Cr over FY24-FY25 funded by ₹5,429 Cr IPO proceeds and borrowings peaking at ₹5,684 Cr (Mar 24). Net Block grew to ₹3,154 Cr by Mar 25.

# Backward Integration Strategy

## Core Thesis

Control the full value chain from raw materials → cells → battery packs → vehicles → distribution to achieve **cost leadership** and **supply security**.

---

## Key Components

### 1. Cell Manufacturing (Highest Impact)
- Battery = **35% of BOM** for Ola S1 Pro
- [[Technology/4680 Cell Tech|4680 form factor cells]] being developed in-house
- [[Companies/Ola Electric#Gigafactory|Ola Gigafactory]]: Phase 1(a) 1.4 GWh → Phase 1(b) 5 GWh → Target 20 GWh
- Currently importing cells with **no long-term contracts >1 year**
- In-house manufacturing eliminates import dependency, forex exposure, and supplier margin

### 2. In-House Component Manufacturing
Already manufacturing at [[Companies/Ola Electric#Futurefactory|Futurefactory]]:
- Battery packs
- Motors (since Aug 2023)
- Vehicle frames (since Aug 2023)
- Electronics and power modules
- BMS (Battery Management System)

### 3. Co-Located Suppliers
- Building supplier park within [[Strategy/EV Hub Tamil Nadu|EV hub]]
- Reduces logistics costs, improves JIT delivery, enables quality control
- Part of the SIPCOT-leased 417.59 acres

### 4. Raw Material Security
- Evaluating long-term supply agreements for lithium, nickel, cobalt, manganese
- Assessing direct/indirect ownership of processing facilities

---

## Financial Impact

| Lever | Current State | Target State |
|-------|---------------|--------------|
| Cell cost | Imported, ~35% BOM | In-house, cost reduced |
| BOM/Revenue | 89.6% (Q1 FY24) | Declining with vertical integration |
| Supply security | No contracts >1yr | Long-term + in-house |
| Gross margin | 13.2% (Q1 FY24) | Target 20%+ |

---

> [!data] Source: financial_mda.txt
> Battery constituted ~35% of BOM for S1 Pro as of Sep 2023. This is why in-house cell manufacturing (Gigafactory) was the highest-leverage cost reduction strategy — reducing 35% of BOM cost by 28-40% directly transformed unit economics from loss-making to profitable.
> Causal chain: Battery being the single largest cost component made vertical integration into cell manufacturing the highest-leverage cost reduction strategy
> Cells: Page 317: Battery as % of BOM

> [!data] Source: PRODUCT_MIX_QUARTERLY.csv + GIGAFACTORY_MILESTONES.csv
> Cell source evolution: Imported (Q1-Q3 FY25) → Mixed Import+NMC pilot (Q4 FY25) → In-house NMC 4680 (Q1-Q3 FY26) → Mixed NMC+LFP 46100 pilot (Q4 FY26). Each stage reduced battery cost: $130→$125→$110→$105→$85/kWh. The 35% cost reduction from vertical integration directly drove gross margin from 12% to 36%.
> Causal chain: The shift from imported cells to in-house NMC was always the plan; the addition of LFP 46100 was a strategic pivot announced in Apr 2026
> Cells: PRODUCT_MIX: Battery_Cost_Per_kWh_USD rows 2-9; GIGAFACTORY: Col F (Battery_Cost_Per_kWh_USD)

> [!data] Source: BATTERY_SUPPLY_CHAIN.csv
> Global LFP pack price at $80/kWh with 4,200 GWh capacity and ~900 GWh excess supply. Ola's in-house cost of $80/kWh is at parity, not below market — meaning the make-vs-buy case is structurally neutral. The real value of vertical integration is NOT cell cost savings but supply chain security and BOM optimization at the pack level.
> Causal chain: China overcapacity→global LFP at $80/kWh→Ola at $80/kWh parity→zero cost advantage from making vs buying→integration value is in pack-level BOM optimization and supply security, not cell price
> Cells: Row 8 2022=1500, 2026=4200; Row 9 2022=140, 2026=80

> [!data] Source: POLICY_REGULATORY_TIMELINE.csv
> PM E-DRIVE (Oct-2024 to Jul-2026) mandatory 50% DVA (Domestic Value Addition) requirement favors Ola's in-house manufacturing and cell production compared to import-dependent competitors. This gives Ola a structural policy advantage despite its market share collapse.
> Causal chain: DVA requirement under PM E-DRIVE→domestic cell production incentivized→Ola's Gigafactory becomes competitive advantage→import-dependent competitors disadvantaged→policy tailwind partially offsets service crisis
> Cells: Row 4 PM E-DRIVE: Key_Conditions='Fund-limited; e-voucher mandatory; 50% DVA'

## Connections
**Causes:** [[Technology/4680 Cell Tech]], [[Technology/Gigafactory_Updates]]
**Effects:** [[Strategy/Operating Leverage]], [[Strategy/Product_Mix_Cannibalization]]
**Amplifiers:** [[Technology/R&D Investment]], [[Strategy/EV Hub Tamil Nadu]]
**Linked Nodes:** [[Strategy/D2C Omnichannel]], [[Technology/Gen 2 Platform]]
