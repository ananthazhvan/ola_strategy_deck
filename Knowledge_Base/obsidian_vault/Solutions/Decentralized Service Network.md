> [!insight] The Single Most Important Thing
> Ola's D2C service model was designed like an Apple Store — beautiful showrooms, centralized control, limited repair capability. It failed catastrophically because a scooter is not an iPhone: it needs service in every town, not just metro cities, and turnaround must be 1-2 days, not 7-15. The Hub & Spoke model fixes this by keeping Ola-owned hubs for complex EV repairs (battery, motor, BMS, software) while certifying and supplying 2,000+ local independent garages for routine service (brakes, tires, lights, body panels). This achieves Bajaj's service density at 1/5th the capex.

> [!data] Source: SERVICE_NETWORK_COMPARISON.csv, Service_Center_Crisis.md
> Current service metrics: ~300 repair-capable centers (of 935 total experience centres = 32%), 7-15 day turnaround (peak crisis, now 3-4 days post-Hyperservice), 60-75% parts availability (vs 95% TVS/Bajaj), Rs 800-1,500/visit (vs Rs 400 Bajaj, Rs 500-800 TVS). Competitor networks: Hero 6,000+ dealers, Bajaj 1,480+ TPM-certified, TVS 1,000+ with 95% parts. Ola's service reach deficit: ~300 vs combined legacy 8,500+ points.

# Operational Fix: Decentralized Hub & Spoke Service Network

**Timeline:** 12 months to full deployment
**Investment:** Rs 300 Cr
**Target:** 300 Ola Hubs + 2,000 Certified Partner Garages = 2,300 service points covering 95% of Ola customers within 15km

---

## The Problem: Why D2C Service Failed

Ola's service model was built on three assumptions that proved catastrophically wrong:

1. **"Customers will travel to experience centres for service"** — In reality, customers compare Ola's 900 centres (mostly in cities) against Bajaj's 1,480+ dealers (in every town) and Hero's 6,000+ dealers (in every village). Convenience is non-negotiable.

2. **"Centralized parts supply works for EVs"** — In reality, 60-75% parts availability meant every repair required 2-3 visits: one to diagnose, one after parts arrive, sometimes a third for missed items. This is the 7-15 day turnaround root cause.

3. **"EVs need less service than ICE vehicles"** — True in theory (fewer moving parts). False in practice when first-generation products have quality issues. Ola's warranty provisions grew 5.3x — the vehicles needed MORE service, not less.

---

## The Hub & Spoke Model

### Tier 1: Ola Service Hubs (300 units)
**Role:** Complex repairs, parts warehousing, training, quality control
**Staffing:** 15-20 Ola-employed EV-certified technicians per hub
**Capabilities:**
- Battery diagnostics, cell replacement, BMS recalibration
- Motor and controller repair/replacement
- Software updates, MoveOS troubleshooting
- Major accident repair, frame straightening
- Parts inventory: 95%+ of SKUs in stock, rest in 24 hours from central warehouse

**Locations:** 300 hubs placed to cover every district with ≥500 Ola vehicles on road. Hub density: 1 per ~3,000 vehicles.

**Investment per hub:** Rs 60 Lakh (equipment, parts inventory, training, lease deposit) = Rs 180 Cr total

### Tier 2: Certified Partner Garages (2,000 units)
**Role:** Routine maintenance, wear-and-tear, minor repairs
**Staffing:** 1-2 Ola-certified mechanics per garage (existing garage owner + staff, trained by Ola)
**Capabilities:**
- Brake pads, tires, lights, mirrors, body panels
- Routine service: 12-point check, chain tension, bearing inspection
- Basic diagnostics via Ola-provided tablet with AI-guided troubleshooting
- Parts ordering via Ola Partner app (delivery from nearest Hub within 24 hours)
- Customer-facing service booking integrated into Ola app

**Certification process:**
1. Garage owner applies via Ola Partner portal
2. 2-week intensive EV training at nearest Ola Hub (battery safety, diagnostics, customer handling)
3. Pass certification exam (written + practical)
4. Ola provides: diagnostic tablet, basic tool kit, signage, parts catalog, app access
5. Recertification every 6 months

**Investment per garage:** Rs 60,000 (training, tablet, toolkit, signage) = Rs 12 Cr total

**Garage economics (why they'll join):**
- Ola directs customers to certified garages via app
- Garage earns service fees directly from customers (Ola takes 0% commission for first 2 years)
- Parts sold at MSRP with 15% garage margin
- Guaranteed minimum 20 service jobs/month from Ola app referrals

### Tier 3: Mobile Service Vans (1,000 units — existing Hyperservice fleet)
**Role:** Emergency roadside assistance, home service for simple repairs
**Already deployed** — integrate into Hub & Spoke routing system

---

## Parts Supply Chain Fix

The 60-75% parts availability is the binding constraint. Solution:

1. **Central warehouse (Krishnagiri, Tamil Nadu):** All parts consolidated. 100% SKU coverage. 24-hour dispatch to any Hub.
2. **Hub-level inventory:** Top 200 moving SKUs maintained at 95%+ availability. AI-driven replenishment based on local vehicle population and failure patterns.
3. **Partner garage inventory:** Top 50 SKUs (brake pads, lights, mirrors, cables). Rest ordered on-demand with 24-hour delivery.
4. **Supplier integration:** Gen 3 platform designed with 80%+ component commonality — fewer unique SKUs, higher availability.

**Investment:** Rs 100 Cr (warehouse + inventory + logistics software) — included in Rs 300 Cr total

---

## Why Hub & Spoke Beats Building More Ola-Owned Centers

| Model | Ola-Owned Expansion | Hub & Spoke |
|-------|--------------------|------------|
| Cost per service point | Rs 1.5 Cr (experience centre) | Rs 6 Lakh (certified garage) |
| Time to deploy | 12-18 months (real estate, construction) | 2 weeks (train existing garage) |
| Service points for Rs 300 Cr | 200 | 2,300 |
| Coverage | Metro + Tier 1 cities | Every district with ≥500 Ola vehicles |
| Service turnaround | 3-4 days (improving) | 1-2 days (routine jobs at local garages) |
| Fixed cost burden | High (Ola pays salaries) | Low (garages earn per job) |

---

## Success Metrics

| Metric | Current | 6-Month Target | 12-Month Target |
|--------|---------|---------------|-----------------|
| Total service points | ~300 | 1,200 | 2,300 |
| Parts availability | 60-75% | 85% | 95% |
| Average turnaround | 3-4 days | 2-3 days | 1-2 days |
| Customer satisfaction | — | 3.5/5 | 4.0/5 |
| Service cost/visit | Rs 800-1,500 | Rs 600-1,000 | Rs 500-800 |
| Service revenue/vehicle/year | — | Rs 2,000 | Rs 3,500 |
| % customers within 15km of service | ~40% | 70% | 95% |

---

## Connections

### Causes
- [[Risks/Service_Center_Crisis]] — Root cause analysis of D2C service failure
- [[Risks/Customer Experience Gap]] — Quantified service quality deficit vs competitors
- [[Strategy/D2C Omnichannel]] — The existing D2C model this replaces
- [[Strategy/Service Recovery Initiatives]] — Hyperservice and Project Vistaar are precursors to this model

### Effects
- [[Solutions/Marketing Campaign Radical Transparency]] — Service Dashboard requires this network to show improving metrics
- [[Solutions/Zero-Tolerance QA]] — Better service data feeds back into manufacturing quality improvements
- [[Solutions/GTM Strategy Project Horizon]] — Phase 1-2 rely on service network credibility

### Linked Nodes
- [[Risks/CCPA_Regulatory_Intervention]]
- [[Risks/Consumer Court Crisis]]
- [[Companies/Bajaj Auto]] — competing service model benchmark
- [[Companies/TVS Motor]] — competing service model benchmark
- [[Companies/Hero MotoCorp]] — dealer network density benchmark
- [[Market/Brand Trust Deficit]]
