# Innovexce Proof Pack

Everything on the public website must be traceable to evidence in this folder — or the copy must change.

**Start here:** [CONTENT-INDEX.md](CONTENT-INDEX.md)

---

## Folder structure

```
proof-pack/
├── README.md                      ← You are here
├── CONTENT-INDEX.md               ← Master map (pages + cases + sections)
├── SITE-CLAIMS-AUDIT.md           ← Claim-by-claim status & recommendations
├── PROOF-GAPS-ACTION-PLAN.md      ← Priority remediation timeline
├── METRICS-REGISTER.csv           ← Every number/metric on the site (87 rows)
├── PROJECT-REGISTER.csv           ← All 20 published projects
├── CLIENT-REFERENCE-MATRIX.csv    ← Logo & reference approval tracking
├── CASE-STUDY-CHECKLIST.md        ← Per-project sign-off template
├── pages/                         ← Proof index per route (26 pages)
│   ├── home.md                      ← Detailed homepage claim table
│   └── …
├── scripts/
│   └── generate-proof-pack.mjs    ← Regenerate manifests after content changes
└── evidence/                      ← Drop PDFs here
    ├── 01-company/                ← Group structure, offices, headcount
    ├── 02-certifications/         ← CMMI, AWS, ISO, etc.
    ├── 03-case-studies/           ← 20 folders — one PROOF-MANIFEST.md each
    │   ├── kotak-sra/
    │   │   ├── PROOF-MANIFEST.md
    │   │   ├── DROP-FILES-HERE.txt
    │   │   └── (your PDFs)
    │   └── …
    ├── 04-testimonials/           ← 3 testimonial proof manifests
    ├── 05-security/               ← SDLC, OWASP, AI governance docs
    ├── 06-insights/               ← 7 insight article proof folders
    ├── 07-leadership/             ← Bio verification
    ├── 08-newsroom/               ← Press release backing
    └── 09-whitepapers/            ← PDFs or remove download CTAs
```

---

## Golden rule

**If it is on the website, it must exist in `evidence/` — or the website wording must change.**

---

## Quick prep before a client call (30 min)

1. Open [SITE-CLAIMS-AUDIT.md](SITE-CLAIMS-AUDIT.md) — know 🔴 items
2. Pull Tier A case folders from `evidence/03-case-studies/` (kotak-sra, kotak-lcrms, legaldst, cars24-credit, verizon-mybiz, tekion-dms)
3. CMMI cert in `evidence/02-certifications/`
4. Logo rights in [CLIENT-REFERENCE-MATRIX.csv](CLIENT-REFERENCE-MATRIX.csv)
5. Never cite a metric not in [METRICS-REGISTER.csv](METRICS-REGISTER.csv) with `verified=Y`

---

## Standard case study evidence (7 files)

Each case folder expects:

| File | Purpose |
|------|---------|
| `01-sow-or-po-redacted.pdf` | Engagement existed |
| `02-architecture-diagram-sanitized.pdf` | Scope matches website |
| `03-uat-or-go-live-signoff.pdf` | Delivered to production |
| `04-metrics-evidence.pdf` | Every outcome metric verified |
| `05-client-case-study-approval.pdf` | Public narrative approved |
| `06-screenshots-or-demo-redacted.pdf` | Optional demo proof |
| `07-case-study-sales-2pager.pdf` | Sales-ready PDF |

See each case's `PROOF-MANIFEST.md` for the exact website text to match.

---

## Regenerate after website edits

```bash
node proof-pack/scripts/generate-proof-pack.mjs
```

Then re-review [SITE-CLAIMS-AUDIT.md](SITE-CLAIMS-AUDIT.md) and update CSV status columns.

---

## Status legend

| Status | Meaning |
|--------|---------|
| ✅ Verified | Proof on file; safe to state publicly |
| 🟡 Qualified | True with context; soften copy if needed |
| 🔴 Needs proof | No evidence — do not use in live pitches |
| ⚠️ Soften | Change website wording immediately |

---

## Owner

Assign one **Proof Pack Owner** (Delivery Lead or Sales Ops) to update CSV files when projects close and run monthly review per [PROOF-GAPS-ACTION-PLAN.md](PROOF-GAPS-ACTION-PLAN.md).
