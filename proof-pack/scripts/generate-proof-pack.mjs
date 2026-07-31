/**
 * Generates proof manifests for all website content.
 * Run: node proof-pack/scripts/generate-proof-pack.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REPO = path.resolve(__dirname, "../..");
const EVIDENCE = path.join(ROOT, "evidence");

const casesSrc = fs.readFileSync(path.join(REPO, "shared/cases.js"), "utf8");
const casesMatch = casesSrc.match(/const CASES=(\[.*?\]);/s);
if (!casesMatch) throw new Error("Could not parse CASES from shared/cases.js");
const CASES = eval(casesMatch[1]);

const INSIGHTS = [
  {
    slug: "insight-legaldst-rag",
    caseId: "legaldst",
    title: "Building production RAG with verified legal citations",
  },
  {
    slug: "insight-cars24-ml",
    caseId: "cars24-credit",
    title: "In-house ML credit scoring at production volume",
  },
  {
    slug: "insight-kotak-automation",
    caseId: "kotak-sra",
    title: "Automating 80–90% of Branch Service Requests at Kotak",
  },
  {
    slug: "insight-tekion-dms",
    caseId: "tekion-dms",
    title: "Cloud-Native DMS: Replacing Legacy Dealership Systems",
  },
  {
    slug: "insight-sdms-kafka",
    caseId: "sdms",
    title: "Monolith to Kafka: SDMS discount engine migration",
  },
  {
    slug: "insight-iiot-ml",
    caseId: "iiot",
    title: "IIoT analytics and ML anomaly detection",
  },
  {
    slug: "insight-devops-sre",
    caseId: "verizon-mybiz",
    title: "DevOps & SRE for regulated enterprise workloads",
  },
];

const PAGES = [
  { route: "/", source: "src/pages/HomePage.jsx", file: "home" },
  { route: "/about", source: "src/content/pages/about.js", file: "about" },
  {
    route: "/services",
    source: "src/content/pages/services.js",
    file: "services",
  },
  {
    route: "/casestudies",
    source: "src/pages/CaseStudiesPage.jsx",
    file: "casestudies",
  },
  {
    route: "/case-studies/:id",
    source: "src/pages/CaseStudyPage.jsx + shared/cases.js",
    file: "case-study-detail",
  },
  {
    route: "/industries",
    source: "src/content/pages/industries.js",
    file: "industries",
  },
  {
    route: "/industry-bfsi",
    source: "src/content/pages/industry-bfsi.js",
    file: "industry-bfsi",
  },
  {
    route: "/industry-telecom",
    source: "src/content/pages/industry-telecom.js",
    file: "industry-telecom",
  },
  {
    route: "/industry-automotive",
    source: "src/content/pages/industry-automotive.js",
    file: "industry-automotive",
  },
  { route: "/ai-hub", source: "src/content/pages/ai-hub.js", file: "ai-hub" },
  {
    route: "/ai-llm-rag",
    source: "src/content/pages/ai-llm-rag.js",
    file: "ai-llm-rag",
  },
  {
    route: "/ai-agentic",
    source: "src/content/pages/ai-agentic.js",
    file: "ai-agentic",
  },
  {
    route: "/ai-ml-platform",
    source: "src/content/pages/ai-ml-platform.js",
    file: "ai-ml-platform",
  },
  {
    route: "/ai-computer-vision",
    source: "src/content/pages/ai-computer-vision.js",
    file: "ai-computer-vision",
  },
  {
    route: "/devops-sre",
    source: "src/content/pages/devops-sre.js",
    file: "devops-sre",
  },
  {
    route: "/engagement",
    source: "src/content/pages/engagement.js",
    file: "engagement",
  },
  {
    route: "/methodology",
    source: "src/content/pages/methodology.js",
    file: "methodology",
  },
  {
    route: "/technology",
    source: "src/content/pages/technology.js",
    file: "technology",
  },
  {
    route: "/security",
    source: "src/content/pages/security.js",
    file: "security",
  },
  {
    route: "/locations",
    source: "src/content/pages/locations.js",
    file: "locations",
  },
  {
    route: "/leadership",
    source: "src/content/pages/leadership.js",
    file: "leadership",
  },
  {
    route: "/careers",
    source: "src/content/pages/careers.js",
    file: "careers",
  },
  {
    route: "/contact",
    source: "src/content/pages/contact.js",
    file: "contact",
  },
  {
    route: "/insights",
    source: "src/content/pages/insights.js",
    file: "insights",
  },
  {
    route: "/whitepapers",
    source: "src/content/pages/whitepapers.js",
    file: "whitepapers",
  },
  {
    route: "/newsroom",
    source: "src/content/pages/newsroom.js",
    file: "newsroom",
  },
];

const TESTIMONIALS = [
  {
    id: "kotak",
    client: "Kotak Mahindra Bank",
    role: "Engineering Lead",
    caseId: "kotak-lcrms",
  },
  {
    id: "cars24",
    client: "CARS24",
    role: "Product Director",
    caseId: "cars24-credit",
  },
  {
    id: "legaldst",
    client: "LegalDST",
    role: "Founder & CEO",
    caseId: "legaldst",
  },
];

const LEADERS = [
  "Rajesh Srinivasan",
  "Anita Patel",
  "Vikram Krishnan",
  "Sarah Mitchell",
  "Deepak Prasad",
  "Nisha Mehta",
  "Arun Kumar",
  "Lisa Chen",
];

const EVIDENCE_FILES = [
  "01-sow-or-po-redacted.pdf",
  "02-architecture-diagram-sanitized.pdf",
  "03-uat-or-go-live-signoff.pdf",
  "04-metrics-evidence.pdf",
  "05-client-case-study-approval.pdf",
  "06-screenshots-or-demo-redacted.pdf",
  "07-case-study-sales-2pager.pdf",
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content, "utf8");
}

function caseManifest(c) {
  const folder = `evidence/03-case-studies/${c.id}/`;
  const outcomes = c.outcomes
    .map(
      (o, i) =>
        `| ${i + 1} | ${o.replace(/\|/g, "\\|")} | Internal KPI / client email / load test | ☐ |`,
    )
    .join("\n");
  return `# Proof manifest - ${c.client}

**Case ID:** \`${c.id}\`  
**Website:** \`/case-studies/${c.id}\`  
**Source:** \`shared/cases.js\`  
**Proof folder:** \`${folder}\`

---

## Published content (must match proof)

| Field | Website text |
|-------|----------------|
| Client | ${c.client} |
| Project | ${c.project} |
| Industry | ${c.industryNorm} |
| Engagement | ${c.engagement} |
| Regions | ${c.regions.join(", ")} |
| Services | ${c.services.join(", ")} |

### Problem
${c.problem}

### Solution
${c.solution}

### Tech stack
${c.tech.map((t) => `- ${t}`).join("\n")}

---

## Outcomes - evidence required

| # | Claim on website | Evidence type | Collected |
|---|------------------|---------------|-----------|
${outcomes}

---

## Files to drop in this folder

| File | Description |
|------|-------------|
${EVIDENCE_FILES.map((f) => `| \`${f}\` | See naming convention below |`).join("\n")}

**Naming convention:** use the filenames above. Redact client-confidential data; keep metric validation visible.

---

## Approval checklist

- [ ] SOW or PO on file (\`01-sow-or-po-redacted.pdf\`)
- [ ] Architecture diagram sanitized (\`02-architecture-diagram-sanitized.pdf\`)
- [ ] UAT / go-live sign-off (\`03-uat-or-go-live-signoff.pdf\`)
- [ ] Each outcome metric verified (\`04-metrics-evidence.pdf\`)
- [ ] Client approved public case study (\`05-client-case-study-approval.pdf\`)
- [ ] Logo / name use cleared in \`CLIENT-REFERENCE-MATRIX.csv\`
- [ ] Row updated in \`PROJECT-REGISTER.csv\`
- [ ] Full checklist: \`../../CASE-STUDY-CHECKLIST.md\`

---

## Status

| Field | Value |
|-------|-------|
| Proof tier | See PROJECT-REGISTER.csv |
| Safe for enterprise pitch with metrics | ☐ No - until Tier A checklist complete |
| Last reviewed | |
| Owner | |
`;
}

function insightManifest(i) {
  const c = CASES.find((x) => x.id === i.caseId);
  return `# Proof manifest - Insight article

**Route:** \`/${i.slug}\`  
**Title:** ${i.title}  
**Based on case:** \`${i.caseId}\` (${c?.client ?? "unknown"})

---

## Rule

Insight articles are **thought leadership derived from delivery**. They are publishable only if the backing case study proof pack exists.

## Required proof

1. Complete proof pack: \`../03-case-studies/${i.caseId}/\`
2. Article technical claims trace to case outcomes (no new metrics)
3. Author identified (delivery lead or architect)
4. Legal review if client named

## Article-specific claims to verify

Review the live page at \`/${i.slug}\` and list any **numbers or superlatives** - each needs a row in \`METRICS-REGISTER.csv\`.

## Files

| File | Purpose |
|------|---------|
| \`01-article-draft.pdf\` | Final published text |
| \`02-fact-check-signoff.pdf\` | Delivery lead approval |
| \`03-link-to-case-proof.pdf\` | Reference to case folder |

## Status: ☐ Not verified
`;
}

function pageManifest(p) {
  return `# Page proof index - ${p.file}

**Route:** \`${p.route}\`  
**Content source:** \`${p.source}\`

---

## How to use

1. Open the source file and list **every factual claim** (numbers, client names, certifications, dates).
2. For each claim, find a row in \`SITE-CLAIMS-AUDIT.md\` or add one.
3. Attach proof to the \`evidence/\` subfolder referenced in the audit.
4. Mark page status in \`CONTENT-INDEX.md\`.

## Cross-references

| Claim type | Proof location |
|------------|----------------|
| Case study metrics | \`evidence/03-case-studies/{case_id}/\` |
| Company / group facts | \`evidence/01-company/\` |
| Certifications | \`evidence/02-certifications/\` |
| Testimonials | \`evidence/04-testimonials/\` |
| Security statements | \`evidence/05-security/\` |
| Leadership bios | \`evidence/07-leadership/\` |
| News items | \`evidence/08-newsroom/\` |
| Whitepapers | \`evidence/09-whitepapers/\` |

## Page review

| Reviewer | Date | Status |
|----------|------|--------|
| | | ☐ Pending |

> **Tip:** Run a diff after each website edit and update this page's proof links.
`;
}

function testimonialManifest(t) {
  return `# Testimonial proof - ${t.client}

**Website location:** Homepage \`Testimonials\` section  
**Attribution:** ${t.role}, ${t.client}  
**Backing case:** \`${t.caseId}\`

---

## Required evidence

| File | Description |
|------|-------------|
| \`${t.id}-signed-quote.pdf\` | Signed quote OR email approval on client letterhead |
| \`${t.id}-contact-details.pdf\` | Named person, title, company (internal CRM) |
| \`${t.id}-nda-scope.pdf\` | What may be said publicly |

## Website quote

Extract exact text from \`src/pages/HomePage.jsx\` → \`Testimonials\` and verify character-for-character match.

## Status

- [ ] Quote approved for public use
- [ ] Matches approved text exactly
- [ ] Case proof pack exists: \`../03-case-studies/${t.caseId}/\`

**Current site disclaimer:** "Representative feedback from client engagements - full references available under NDA."
`;
}

// Generate case study folders
for (const c of CASES) {
  const dir = path.join(EVIDENCE, "03-case-studies", c.id);
  ensureDir(dir);
  write(path.join(dir, "PROOF-MANIFEST.md"), caseManifest(c));
  write(
    path.join(dir, "DROP-FILES-HERE.txt"),
    EVIDENCE_FILES.map((f) => f).join("\n") + "\n",
  );
}

// Generate insight folders
for (const i of INSIGHTS) {
  const dir = path.join(EVIDENCE, "06-insights", i.slug);
  ensureDir(dir);
  write(path.join(dir, "PROOF-MANIFEST.md"), insightManifest(i));
}

// Generate page indexes
for (const p of PAGES) {
  write(path.join(ROOT, "pages", `${p.file}.md`), pageManifest(p));
}

// Testimonials
for (const t of TESTIMONIALS) {
  write(
    path.join(EVIDENCE, "04-testimonials", `${t.id}-PROOF-MANIFEST.md`),
    testimonialManifest(t),
  );
}

// Leadership
write(
  path.join(EVIDENCE, "07-leadership", "PROOF-MANIFEST.md"),
  `# Leadership page - proof requirements

**Route:** \`/leadership\`  
**Source:** \`src/content/pages/leadership.js\`

## Profiles requiring verification

${LEADERS.map((n) => `- [ ] **${n}** - employment verification, LinkedIn, bio approval`).join("\n")}

## For each leader, collect

| File pattern | Content |
|--------------|---------|
| \`{name-slug}-bio-approved.pdf\` | Approved public bio |
| \`{name-slug}-linkedin-screenshot.pdf\` | Profile matches website |
| \`{name-slug}-project-claims.pdf\` | Every project name cited is in PROJECT-REGISTER.csv |

## Action if proof unavailable

Hide profile or replace with TestYantra group leadership only.

**Status:** ☐ All profiles unverified (placeholders)
`,
);

// Newsroom & whitepapers
write(
  path.join(EVIDENCE, "08-newsroom", "PROOF-MANIFEST.md"),
  `# Newsroom - proof requirements

**Route:** \`/newsroom\`  
**Source:** \`src/content/pages/newsroom.js\`

Each news item needs:

| File | Description |
|------|-------------|
| \`{date}-{slug}-press-release.pdf\` | Internal or external announcement |
| \`{date}-{slug}-client-approval.pdf\` | If client named |
| \`{date}-{slug}-fact-check.pdf\` | Delivery lead sign-off |

**Do not publish future-dated items without proof.**

## Items on site (verify against live page)

Review \`newsroom.js\` and add one subfolder per item as you collect proof.
`,
);

write(
  path.join(EVIDENCE, "09-whitepapers", "PROOF-MANIFEST.md"),
  `# Whitepapers - proof requirements

**Route:** \`/whitepapers\`

Each whitepaper card with "Request PDF" must either:

1. Have a PDF in this folder (\`{slug}.pdf\`), OR  
2. Website CTA must say "Request briefing" only (no implied document exists)

## Expected files

| Title slug | File |
|------------|------|
| enterprise-ai-readiness | \`enterprise-ai-readiness.pdf\` |
| monolith-to-microservices | \`monolith-to-microservices.pdf\` |
| bfsi-digital-transformation | \`bfsi-digital-transformation.pdf\` |
| cloud-native-saas-patterns | \`cloud-native-saas-patterns.pdf\` |
| computer-vision-retail | \`computer-vision-retail.pdf\` |
| secure-sdlc | Link to \`../05-security/\` only |

**Status:** ☐ No PDFs on file - do not imply downloads exist
`,
);

// Company & certifications templates
write(
  path.join(EVIDENCE, "01-company", "REQUIRED-EVIDENCE.md"),
  `# Company facts - required evidence

| Claim | File to collect | Status |
|-------|-----------------|--------|
| Innovexce part of TestYantra | \`testyantra-group-structure.pdf\` | ☐ |
| Practice since 2016 | \`first-engagement-letter-2016.pdf\` | ☐ |
| TestYantra founded 2003 | \`company-registration.pdf\` | ☐ |
| 6 global regions | \`office-addresses.pdf\` | ☐ |
| Bengaluru HQ | \`registered-office.pdf\` | ☐ |
| Engineer headcount (any number on site) | \`hr-headcount-report.pdf\` | ☐ |
| Website contact email | \`contactus@testyantra.com\` - verify mailbox | ☐ |
`,
);

write(
  path.join(EVIDENCE, "02-certifications", "REQUIRED-EVIDENCE.md"),
  `# Certifications & partner badges - required evidence

| Badge on site | File | Expiry tracked | Status |
|---------------|------|----------------|--------|
| CMMI Level 3 | \`cmmi-appraisal-certificate.pdf\` | ☐ | ☐ |
| AWS Partner | \`aws-partner-central-screenshot.pdf\` | ☐ | ☐ |
| Microsoft Azure | \`microsoft-partner-verification.pdf\` | ☐ | ☐ |
| Google Cloud | \`gcp-partner-enrollment.pdf\` | ☐ | ☐ |
| ISO 27001 Aligned | \`iso-cert-or-isms-summary.pdf\` | ☐ | ☐ |
| Kubernetes | N/A - capability only, not a cert | - | ☐ Relabel on site |

**Rule:** Remove badge or change to "experience with X" until PDF is filed.
`,
);

write(
  path.join(EVIDENCE, "05-security", "REQUIRED-EVIDENCE.md"),
  `# Security page - required evidence

| Claim area | File |
|------------|------|
| Secure SDLC process | \`secure-sdlc-policy.pdf\` |
| OWASP practices | \`owasp-checklist-adoption.pdf\` |
| Data protection | \`data-handling-policy.pdf\` |
| AI governance | \`ai-governance-framework.pdf\` |
| Client questionnaires | \`sample-security-questionnaire-responses.pdf\` |
`,
);

// METRICS-REGISTER.csv
const metricRows = [
  [
    "claim_id",
    "case_id",
    "page_route",
    "claim_text",
    "claim_type",
    "evidence_file",
    "verified",
    "owner",
    "notes",
  ],
];
let mid = 1;
for (const c of CASES) {
  for (const o of c.outcomes) {
    metricRows.push([
      `M${String(mid++).padStart(3, "0")}`,
      c.id,
      `/case-studies/${c.id}`,
      o.replace(/"/g, '""'),
      "outcome",
      `evidence/03-case-studies/${c.id}/04-metrics-evidence.pdf`,
      "N",
      "",
      "",
    ]);
  }
  if (c.problem.match(/\d+/)) {
    metricRows.push([
      `M${String(mid++).padStart(3, "0")}`,
      c.id,
      `/case-studies/${c.id}`,
      c.problem.replace(/"/g, '""'),
      "problem-context",
      `evidence/03-case-studies/${c.id}/04-metrics-evidence.pdf`,
      "N",
      "",
      "Verify numbers in problem statement",
    ]);
  }
}

const homepageMetrics = [
  [
    "M-home-01",
    "",
    "/",
    "20+ Documented Engagements",
    "stat",
    "evidence/01-company/project-count-register.pdf",
    "N",
    "",
    "Must match PROJECT-REGISTER.csv count",
  ],
  [
    "M-home-02",
    "",
    "/",
    "12+ Industries Served",
    "stat",
    "evidence/01-company/industry-count.pdf",
    "N",
    "",
    "",
  ],
  [
    "M-home-03",
    "",
    "/",
    "6 Global Regions",
    "stat",
    "evidence/01-company/office-addresses.pdf",
    "N",
    "",
    "",
  ],
  [
    "M-home-04",
    "kotak-sra",
    "/",
    "80–90% Branch SR automated · Kotak",
    "hero-metric",
    "evidence/03-case-studies/kotak-sra/04-metrics-evidence.pdf",
    "N",
    "",
    "",
  ],
  [
    "M-home-05",
    "",
    "/",
    "CMMI Level 3 processes",
    "certification",
    "evidence/02-certifications/cmmi-appraisal-certificate.pdf",
    "N",
    "",
    "",
  ],
];
metricRows.push(...homepageMetrics);

const csv = metricRows
  .map((row) => row.map((c) => `"${c}"`).join(","))
  .join("\n");
write(path.join(ROOT, "METRICS-REGISTER.csv"), csv);

// CONTENT-INDEX.md
const pageList = PAGES.map(
  (p) => `| \`${p.route}\` | [pages/${p.file}.md](pages/${p.file}.md) | ☐ |`,
).join("\n");
const caseList = CASES.map(
  (c) =>
    `| \`${c.id}\` | [evidence/03-case-studies/${c.id}/PROOF-MANIFEST.md](evidence/03-case-studies/${c.id}/PROOF-MANIFEST.md) | ☐ |`,
).join("\n");

write(
  path.join(ROOT, "CONTENT-INDEX.md"),
  `# Content proof index

Master map of **every public page and case study** to its proof folder.  
Generated: ${new Date().toISOString().slice(0, 10)}

---

## Quick start

1. [SITE-CLAIMS-AUDIT.md](SITE-CLAIMS-AUDIT.md) - claim status overview  
2. [METRICS-REGISTER.csv](METRICS-REGISTER.csv) - every number on the site  
3. [PROJECT-REGISTER.csv](PROJECT-REGISTER.csv) - project master list  
4. Drop PDFs into \`evidence/\` subfolders per PROOF-MANIFEST.md  

---

## Pages (${PAGES.length})

| Route | Proof index | Reviewed |
|-------|-------------|----------|
${pageList}

---

## Case studies (${CASES.length})

| Case ID | Proof manifest | Complete |
|---------|----------------|----------|
${caseList}

---

## Other content

| Section | Proof manifest |
|---------|----------------|
| Insights (7) | \`evidence/06-insights/{slug}/\` |
| Testimonials (3) | \`evidence/04-testimonials/\` |
| Leadership | [evidence/07-leadership/PROOF-MANIFEST.md](evidence/07-leadership/PROOF-MANIFEST.md) |
| Newsroom | [evidence/08-newsroom/PROOF-MANIFEST.md](evidence/08-newsroom/PROOF-MANIFEST.md) |
| Whitepapers | [evidence/09-whitepapers/PROOF-MANIFEST.md](evidence/09-whitepapers/PROOF-MANIFEST.md) |
| Company | [evidence/01-company/REQUIRED-EVIDENCE.md](evidence/01-company/REQUIRED-EVIDENCE.md) |
| Certifications | [evidence/02-certifications/REQUIRED-EVIDENCE.md](evidence/02-certifications/REQUIRED-EVIDENCE.md) |
| Security | [evidence/05-security/REQUIRED-EVIDENCE.md](evidence/05-security/REQUIRED-EVIDENCE.md) |

---

## Regenerate manifests

\`\`\`bash
node proof-pack/scripts/generate-proof-pack.mjs
\`\`\`

Run after editing \`shared/cases.js\` or adding new pages.
`,
);

console.log(`Generated proof pack:`);
console.log(`  ${CASES.length} case study manifests`);
console.log(`  ${INSIGHTS.length} insight manifests`);
console.log(`  ${PAGES.length} page indexes`);
console.log(`  ${TESTIMONIALS.length} testimonial manifests`);
console.log(`  METRICS-REGISTER.csv (${metricRows.length - 1} rows)`);
