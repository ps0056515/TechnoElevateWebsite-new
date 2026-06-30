# Site Claims Audit — Innovexce

**Audit date:** May 2026  
**Scope:** All public claims on innovexce website  
**Source of truth:** `shared/cases.js` (20 published case studies)

---

## Executive summary

| Category | ✅ Verified | 🟡 Qualified | 🔴 Needs proof | ⚠️ Soften now |
|----------|------------|-------------|---------------|---------------|
| Company / group | 2 | 3 | 4 | 2 |
| Homepage stats | 1 | 2 | 2 | 1 |
| Certifications | 0 | 1 | 5 | 1 |
| Client logos | 0 | 0 | 8 | 0 |
| Case studies (20) | 0* | 20 | 0 | varies |
| Testimonials (3) | 0 | 0 | 3 | 3 |
| Leadership (8) | 0 | 0 | 8 | 8 |
| Locations | 1 | 2 | 4 | 1 |
| Newsroom (6) | 0 | 0 | 6 | 6 |
| Whitepapers (6) | 0 | 0 | 6 | 0 |
| Insights (7) | 0 | 7 | 0 | 0 |

\*Case study *narratives* exist internally in `cases.js` but each needs a **proof pack** before Tier A status.

**Critical inconsistency:** Site claims **60+ projects** but only **20 case studies** are documented in code. Industry page counts (e.g. BFSI = 35) do not reconcile with the 20-case register unless 40+ projects exist off-site.

---

## 1. Company & About (`about.html`, footer)

| Claim | Location | Status | Proof required | Recommended action |
|-------|----------|--------|----------------|-------------------|
| Innovexce since 2016 | Homepage eyebrow, about | 🟡 | Incorporation / first SOW date | Define: "Innovexce practice since 2016" |
| Part of TestYantra Software Solutions | About, footer | ✅ | Group structure doc | Keep |
| TestYantra founded 2003 | About group block | 🔴 | Company registration | Verify date or remove |
| CMMI Level 3 (group) | About, homepage, security | 🔴 | Appraisal certificate PDF | Add cert to evidence/ or soften to "group practices aligned with CMMI L3" |
| 500+ group engineers | About group block | 🔴 | HR headcount report | Remove number or replace with verified figure |
| 6 global delivery regions | About, locations, homepage | 🟡 | Office addresses list | Name the 6 regions explicitly; Middle East card needs office proof |
| 60+ projects delivered | Homepage, about, locations, casestudies | 🔴 | Project register with 60 rows | **Reconcile:** either document 60+ projects or change to "20+ published case studies" |
| 12+ industries served | Homepage stats | 🟡 | Project register by industry | Count from PROJECT-REGISTER.csv |
| 100% client retention | Homepage, about, leadership | ⚠️ | Client list + repeat engagement proof | Change to "Strong client retention" or define period |
| 8+ years engineering | About float card | 🟡 | Same as since 2016 | OK if 2016 start verified |
| Architecture-first / embedded partner | About copy | 🟡 | Methodology doc + references | Qualitative — OK with case backing |

---

## 2. Certifications & partners (`index.html`, `security.html`)

| Badge / claim | Status | Proof required | Recommended action |
|---------------|--------|----------------|-------------------|
| CMMI Level 3 | 🔴 | CMMI appraisal certificate (org name, scope, expiry) | Certificate in evidence/ or remove badge |
| AWS Partner | 🔴 | AWS Partner Central screenshot (tier, status) | Remove or show Select/Advanced tier |
| Microsoft Azure | 🔴 | Microsoft partner ID / credentials | Remove or add partner badge link |
| Google Cloud | 🔴 | GCP partner enrollment | Remove until enrolled |
| Kubernetes | ⚠️ | Not a certification — misleading badge | Change to "Kubernetes expertise" text, not badge |
| ISO 27001 Aligned | 🟡 | ISO cert OR internal ISMS docs | OK if "aligned practices"; **not** "ISO 27001 certified" without cert |
| AWS Partner Network (security page) | 🔴 | Same as AWS Partner | Align both pages |

---

## 3. Homepage hero & bento (`index.html`)

| Claim | Status | Proof required |
|-------|--------|----------------|
| 80–90% branch SR automated · Kotak | 🟡 | Kotak SOW, UAT, client sign-off |
| LLM/RAG, DevOps, Microservices, BFSI tags | ✅ | Capability — no numeric claim |
| Architecture-first · CMMI L3 processes | 🔴 / 🟡 | CMMI cert (see above) |
| India's largest private bank (featured CS copy) | ⚠️ | Kotak is top private bank — OK as industry fact; don't imply exclusive partnership |

---

## 4. Client logos & marquee (`index.html`)

| Client shown | Status | Proof required |
|--------------|--------|----------------|
| Kotak Mahindra Bank | 🔴 | Logo usage approval + reference agreement |
| JPMorgan Chase | 🔴 | Contract allows name use? Often restricted |
| Lloyds Banking Group | 🔴 | Logo / reference approval |
| Verizon | 🔴 | Logo / reference approval |
| CARS24 | 🔴 | Logo / reference approval |
| LegalDST | 🔴 | Logo / reference approval |
| Autonomo | 🔴 | Logo / reference approval |

**Action:** Complete `CLIENT-REFERENCE-MATRIX.csv` before next enterprise pitch.

---

## 5. Testimonials (`index.html`)

| Quote source | Status | Proof required | Action |
|--------------|--------|----------------|--------|
| Engineering Lead, Kotak | 🔴 | Named person, signed quote, email on file | ⚠️ Remove names until signed |
| Product Director, CARS24 | 🔴 | Same | ⚠️ Add "available under NDA" or get sign-off |
| Founder & CEO, LegalDST | 🔴 | Same | ⚠️ Get written approval |

---

## 6. Leadership (`leadership.html`)

| Person | Claim | Status | Action |
|--------|-------|--------|--------|
| Rajesh Srinivasan | Head of Innovexce, 18+ yrs, 60+ projects | 🔴 | Real bio + LinkedIn OR remove page |
| Anita Patel | AI practice, LegalDST + CARS24 | 🔴 | Verify employment + projects |
| Vikram Krishnan | BFSI director, Kotak/JPM/Lloyds | 🔴 | Verify |
| Sarah Mitchell | US delivery director | 🔴 | Verify |
| Deepak Prasad | Chief Architect, SDMS/ProcureHere | 🔴 | Verify |
| Nisha Mehta | Quality & Security head | 🔴 | Verify |
| Arun Kumar | Cloud/DevOps, AWS/Azure certified, 20+ deployments | 🔴 | Cert copies + verify count |
| Lisa Chen | 100% retention track record | ⚠️ | Remove absolute claim |

**Recommendation:** Hide leadership page until real profiles are ready, or replace with "Leadership — contact us" and group-level TestYantra leadership only.

---

## 7. Locations (`locations.html`)

| Claim | Status | Proof required |
|-------|--------|----------------|
| Bengaluru HQ (TestYantra) | ✅ | Registered office address |
| 6 global regions | 🟡 | List offices with addresses |
| 200+ engineers | 🔴 | Headcount report — conflicts with 500+ group on about page |
| 60+ projects | 🔴 | Project register |
| 24/7 delivery coverage | 🟡 | Support roster / follow-the-sun model doc |
| US — Verizon, AT&T, Tekion clients | 🟡 | Delivery from India vs US office — clarify |
| UK — Lloyds | 🟡 | Same |
| Middle East — BFSI clients | 🔴 | Named clients? Office? Remove if aspirational |
| Europe listed twice (UK + Continental Europe) | ⚠️ | Clarify region count |

---

## 8. Industry pages & counts

**Published case studies in `cases.js` by industry:**

| Industry | Cases in register | Website claim | Gap |
|----------|-------------------|---------------|-----|
| BFSI | 6 | 35 projects | −29 |
| Telecom | 2 | 7 projects | −5 |
| Automotive | 2 | 5 projects | −3 |
| Insurance | 2 | 5 projects | −3 |
| Healthcare | 1 | 4 projects | −3 |
| Manufacturing | 2 | 4 projects | −2 |
| Retail | 1 | 3 projects | −2 |
| Energy | 1 | 3 projects | −2 |
| Public Sector | 1 | 2 projects | −1 |
| AgriTech/EdTech | 0 | 2 projects | −2 |
| LegalTech | 1 | (not counted on grid) | — |
| Enterprise SaaS | 1 | (not counted) | — |
| **Total in register** | **20** | **~60+ implied** | **~40 gap** |

**Action:** Either add 40+ projects to PROJECT-REGISTER.csv or reduce all industry counts to match verified register.

---

## 9. Case studies — all 20 projects

Use `CASE-STUDY-CHECKLIST.md` per project. Summary tier recommendation:

### Tier A — prioritize proof packs (strongest stories)

| ID | Client | Key metric on site | Status |
|----|--------|-------------------|--------|
| kotak-sra | Kotak | 80–90% SR automation | 🔴 Needs SOW + metrics |
| kotak-lcrms | Kotak | Sub-1s API, 10K+ cases | 🔴 Needs load test / sign-off |
| legaldst | LegalDST | Live RAG + Razorpay | 🔴 Needs demo + client approval |
| cars24-credit | CARS24 | In-house ML scoring | 🔴 Needs metrics + NDA clearance |
| tekion-dms | Tekion | Cloud-native DMS | 🔴 Needs reference approval |
| verizon-mybiz | Verizon | Managed services / SRE | 🔴 Needs reference approval |

### Tier B — documented, metrics softer

jpmorgan-tps, lloyds-ddrx, saarathi, tekion-hub, att-wos, sdms, procurehere, autonomo

### Tier C — anonymize or soften client names if needed

iiot (Industrial IoT Client), transconnect, medhost, talic, tata-aig, mndot-etbos

---

## 10. Newsroom (`newsroom.html`)

| Date | Headline | Status | Action |
|------|----------|--------|--------|
| Mar 2026 | AI Hub launch | 🔴 | Future date — remove or backdate to actual launch |
| Jan 2026 | LegalDST live | 🔴 | Verify go-live date + press approval |
| Nov 2025 | CARS24 ML production | 🔴 | Client approval for public statement |
| Sep 2025 | Tekion OEM hub | 🔴 | Client approval |
| Jun 2025 | CMMI Level 3 | 🔴 | Must match actual cert date |
| Apr 2025 | Autonomo Europe | 🔴 | Verify deployment + client approval |

**Action:** Remove newsroom items without press release or internal announcement backing.

---

## 11. Whitepapers (`whitepapers.html`)

| Title | Status | Action |
|-------|--------|--------|
| Enterprise AI Readiness | 🔴 | No PDF exists — change CTA to "Request briefing" |
| Monolith to Microservices | 🔴 | Same |
| BFSI Digital Transformation | 🔴 | Same |
| Cloud-Native SaaS Patterns | 🔴 | Same |
| Computer Vision in Retail | 🔴 | Same |
| Secure SDLC | 🟡 | Links to security page only |

---

## 12. Insights articles (7)

| Article | Based on case | Status |
|---------|---------------|--------|
| insight-legaldst-rag | legaldst | 🟡 — OK if case is Tier A |
| insight-cars24-ml | cars24-credit | 🟡 |
| insight-kotak-automation | kotak-sra | 🟡 |
| insight-tekion-dms | tekion-dms | 🟡 |
| insight-sdms-kafka | sdms | 🟡 |
| insight-iiot-ml | iiot | 🟡 |
| insight-devops-sre | verizon-mybiz | 🟡 |

Articles are acceptable as **thought leadership derived from projects** if case study proof exists.

---

## 13. Services & capability pages

| Page | Risk claims | Status |
|------|-------------|--------|
| devops-sre.html | 24/7 ops, Prometheus/Grafana production | 🟡 — back with Verizon case pack |
| ai-hub.html | Production AI, not PoC | 🟡 — back with LegalDST + CARS24 |
| security.html | OWASP, secure SDLC, ISO aligned | 🟡 — need security policy docs |
| careers.html | Open roles | 🔴 — verify jobs are real and current |
| methodology.html | CMMI, five-phase delivery | 🟡 — methodology doc + CMMI cert |

---

## 14. Recommended website copy changes (immediate)

1. **60+ projects** → "20+ documented case studies" OR fill register to 60+ with proof  
2. **100% client retention** → "Long-term client partnerships" or cite defined period  
3. **Remove or qualify** partner badges without certificates  
4. **Testimonials** → add disclaimer or get signed quotes  
5. **Leadership page** → real profiles or hide until ready  
6. **Newsroom** → remove future-dated / unverified items  
7. **Industry project counts** → align with PROJECT-REGISTER.csv totals  
8. **500+ / 200+ engineers** → pick one verified headcount or remove  
9. **Kubernetes badge** → change to capability statement  

See `PROOF-GAPS-ACTION-PLAN.md` for week-by-week remediation.
