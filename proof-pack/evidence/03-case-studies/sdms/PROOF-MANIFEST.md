# Proof manifest — Dalmia Bharat Cement

**Case ID:** `sdms`  
**Website:** `/case-studies/sdms`  
**Source:** `shared/cases.js`  
**Proof folder:** `evidence/03-case-studies/sdms/`

---

## Published content (must match proof)

| Field | Website text |
|-------|----------------|
| Client | Dalmia Bharat Cement |
| Project | SDMS — Sales Discount Management System |
| Industry | Manufacturing |
| Engagement | T&M |
| Regions | India |
| Services | App Dev, Migration & Modernisation |

### Problem
Dealer rebate and discount schemes across 18+ scheme types were running on a Java 8 monolith with a 3,000-thread pool masking DB bottlenecks, a God Object with 80+ fields, and brittle SAP HANA integration.

### Solution
Designed a monolith-to-microservices transformation using DDD, Kafka-driven event sourcing, Kubernetes-native stateless calculation engine — maintaining zero-downtime migration throughout.

### Tech stack
- Java
- Spring Boot
- Kafka
- Kubernetes
- SAP HANA
- DDD

---

## Outcomes — evidence required

| # | Claim on website | Evidence type | Collected |
|---|------------------|---------------|-----------|
| 1 | Horizontal scaling of discount calculation engine | Internal KPI / client email / load test | ☐ |
| 2 | Eliminated DB thread-pool bottlenecks entirely | Internal KPI / client email / load test | ☐ |
| 3 | Resilient, decoupled SAP HANA integration | Internal KPI / client email / load test | ☐ |
| 4 | Zero-downtime migration path validated | Internal KPI / client email / load test | ☐ |

---

## Files to drop in this folder

| File | Description |
|------|-------------|
| `01-sow-or-po-redacted.pdf` | See naming convention below |
| `02-architecture-diagram-sanitized.pdf` | See naming convention below |
| `03-uat-or-go-live-signoff.pdf` | See naming convention below |
| `04-metrics-evidence.pdf` | See naming convention below |
| `05-client-case-study-approval.pdf` | See naming convention below |
| `06-screenshots-or-demo-redacted.pdf` | See naming convention below |
| `07-case-study-sales-2pager.pdf` | See naming convention below |

**Naming convention:** use the filenames above. Redact client-confidential data; keep metric validation visible.

---

## Approval checklist

- [ ] SOW or PO on file (`01-sow-or-po-redacted.pdf`)
- [ ] Architecture diagram sanitized (`02-architecture-diagram-sanitized.pdf`)
- [ ] UAT / go-live sign-off (`03-uat-or-go-live-signoff.pdf`)
- [ ] Each outcome metric verified (`04-metrics-evidence.pdf`)
- [ ] Client approved public case study (`05-client-case-study-approval.pdf`)
- [ ] Logo / name use cleared in `CLIENT-REFERENCE-MATRIX.csv`
- [ ] Row updated in `PROJECT-REGISTER.csv`
- [ ] Full checklist: `../../CASE-STUDY-CHECKLIST.md`

---

## Status

| Field | Value |
|-------|-------|
| Proof tier | See PROJECT-REGISTER.csv |
| Safe for enterprise pitch with metrics | ☐ No — until Tier A checklist complete |
| Last reviewed | |
| Owner | |
