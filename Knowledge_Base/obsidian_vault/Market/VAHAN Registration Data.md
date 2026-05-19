> [!insight] VAHAN Is the Single Source of Truth for E2W Market Share
> The Indian government's VAHAN database (Ministry of Road Transport and Highways) records every vehicle registration in India and is the definitive data source for E2W market share analysis. All monthly registration figures used in this vault -- including Ola's decline from 55.81% (Apr 2022) to 9.71% (Sep 2025) and subsequent recovery to 15.95% (Mar 2026) -- are drawn from VAHAN data via the E2W_MONTHLY_REGISTRATIONS.csv dataset. However, month-end data truncation and reporting lags can cause discrepancies of 2-7% vs company-reported sales.

> [!data] Source: E2W_MONTHLY_REGISTRATIONS.csv, VAHAN government portal
> VAHAN captures all new vehicle registrations in India, state-wise and model-wise. Methodology: OEM-reported production + dealer registrations tracked by state transport departments. Data lag: 2-4 weeks. Discrepancy vs audited financials: typically 2-7% due to month-end cutoffs and pending registrations.
> Causal chain: Vehicle sale → dealer registration on VAHAN portal → government data repository → third-party aggregation → market share calculation
> Cells: E2W_MONTHLY_REGISTRATIONS.csv all rows; methodology notes in companion datasets

# VAHAN Registration Data

The VAHAN database, maintained by the Ministry of Road Transport and Highways (MoRTH), is India's official vehicle registration repository. Every new vehicle sold in India must be registered with a state-level Regional Transport Office (RTO), and VAHAN aggregates these registrations into a national database. For E2W market analysis, VAHAN is the primary data source because it captures actual retail registrations rather than OEM shipment or production figures, which can include inventory held at dealerships.

The vault's E2W_MONTHLY_REGISTRATIONS.csv dataset tracks monthly registrations for all major E2W players (Ola Electric, TVS Motor, Bajaj Auto, Ather Energy, Hero Vida) alongside total market size and individual market share percentages. Critical metrics derived from VAHAN include: absolute monthly registrations per OEM, month-over-month growth rates, year-over-year growth rates, market share percentage, and the combined legacy OEM market share (TVS+Bajaj+Hero).

## Methodology and Limitations

VAHAN data is collected at the state RTO level, consolidated nationally, and released with a 2-4 week lag. Third-party aggregators (e.g., SIAM, JMK Research) further compile and standardize the raw data. Key limitations to consider:

- **Month-end truncation**: Registrations submitted in the last 2-3 days of a month often appear in the following month's data, creating discrepancies of 2-7% between VAHAN-reported sales and company quarterly filings
- **State-level variation**: States with slower digitization (Bihar, UP, West Bengal) may report with longer lags, understating national figures in recent months
- **Model-level granularity**: VAHAN provides OEM-level registration data; model-level splits require additional data sources (e.g., PRODUCT_MIX_QUARTERLY.csv)
- **Subsidy registration effects**: FAME-II and PM E-DRIVE subsidy claims depend on VAHAN registration proof, meaning some subsidy-related timing effects can distort monthly registration patterns
- **Exports excluded**: VAHAN only captures domestic Indian registrations; export volumes must be sourced from separate company disclosures

## Key Data Points

- Ola Electric market share tracked via VAHAN: 55.81% (Apr 2022 peak) → 9.71% (Sep 2025 trough) → 15.95% (Mar 2026)
- Total E2W market per VAHAN: grew from 21,500 units/month (Apr 2022) to 148,713 units/month (Mar 2026) -- 6.9x growth
- TVS monthly registrations per VAHAN: 3,000 (Apr 2022) → 42,000 (Mar 2026) -- 14x growth
- Bajaj monthly registrations per VAHAN: 1,500 (Apr 2022) → 35,000 (Mar 2026) -- 23x growth
- Ola single-month peak per VAHAN: 53,320 units (Mar 2024); trough: 7,567 units (Nov 2025) -- 86% decline
- Recovery signal per VAHAN: 9,020 units (Dec 2025) was first sequential uptick after 14 months of consecutive decline
- Typical VAHAN vs company-reported discrepancy: 2-7%

---

## Connections

### Causes
- [[Market/E2W Market India]] — VAHAN data is the empirical foundation for understanding E2W market dynamics
- [[Market/Policy_Regulatory_Timeline]] — Subsidy eligibility (FAME-II, PM E-DRIVE) is verified through VAHAN registration records

### Effects
- [[Market/VAHAN_Market_Share_Story]] — The narrative of Ola's market share collapse and legacy OEM resurgence is constructed from VAHAN monthly registration data
- [[Financial/Revenue Trajectory]] — VAHAN registration trends lead revenue recognition by 1-2 months (registrations precede revenue booking)
- [[Risks/Revenue Decline FY25]] — VAHAN data provided early warning of the volume decline before quarterly financials confirmed the revenue impact

### Linked Nodes
- [[Companies/Ola Electric]]
- [[Companies/TVS Motor]]
- [[Companies/Ather Energy]]
- [[Companies/Bajaj Auto]]
- [[Companies/Hero MotoCorp]]
- [[Financial/Post-IPO_Quarterly_Calls]]
