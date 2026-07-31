# Proof manifest - Kotak Mahindra Bank

**Case ID:** `kotak-lcrms`  
**Website:** `/case-studies/kotak-lcrms`  
**Source:** `shared/cases.js`  
**Proof folder:** `evidence/03-case-studies/kotak-lcrms/`

---

## Published content (must match proof)

| Field      | Website text                                         |
| ---------- | ---------------------------------------------------- |
| Client     | Kotak Mahindra Bank                                  |
| Project    | LCRMS - Loan Collection & Recovery Management System |
| Industry   | BFSI                                                 |
| Engagement | Fixed-Scope                                          |
| Regions    | India                                                |
| Services   | App Dev, Cloud & DevOps                              |

### Problem

Collections across retail and commercial loans were fragmented - delinquent accounts pulled manually from Core Banking, cases mis-assigned across regions, receipts reconciled days late, and month-end closure buckling under 10,000+ simultaneous case assignments.

### Solution

Built a secure, microservices-based backend that pulls delinquent accounts from CBS, assigns cases by DPD bucket and region using rule-based logic, and integrates field payment rails (Ebix, UPI, Bharat BillPay) for instant reconciliation and digital receipts.

### Tech stack

- Java
- Spring Boot
- Microservices
- Oracle
- Payment Gateway APIs

---

## Outcomes - evidence required

| #   | Claim on website                                        | Evidence type                           | Collected |
| --- | ------------------------------------------------------- | --------------------------------------- | --------- |
| 1   | Sub-1s API response at peak load                        | Internal KPI / client email / load test | ☐         |
| 2   | Zero duplicate case assignments                         | Internal KPI / client email / load test | ☐         |
| 3   | Real-time on-ground collection tracking                 | Internal KPI / client email / load test | ☐         |
| 4   | Role-based visibility from national head to field agent | Internal KPI / client email / load test | ☐         |

---

## Files to drop in this folder

| File                                    | Description                 |
| --------------------------------------- | --------------------------- |
| `01-sow-or-po-redacted.pdf`             | See naming convention below |
| `02-architecture-diagram-sanitized.pdf` | See naming convention below |
| `03-uat-or-go-live-signoff.pdf`         | See naming convention below |
| `04-metrics-evidence.pdf`               | See naming convention below |
| `05-client-case-study-approval.pdf`     | See naming convention below |
| `06-screenshots-or-demo-redacted.pdf`   | See naming convention below |
| `07-case-study-sales-2pager.pdf`        | See naming convention below |

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

| Field                                  | Value                                  |
| -------------------------------------- | -------------------------------------- |
| Proof tier                             | See PROJECT-REGISTER.csv               |
| Safe for enterprise pitch with metrics | ☐ No - until Tier A checklist complete |
| Last reviewed                          |                                        |
| Owner                                  |                                        |
