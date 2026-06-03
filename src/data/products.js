/** TestYantra / TechnoElevate product portfolio — built via Cursor engineering. */

/** Local hero / card / gallery assets under public/products/ */
const productImg = (key, role) => `/products/${key}-${role}.jpg`;

export const PRODUCTS = [
  {
    slug: 'ivrai-bot',
    imageKey: 'ivrai',
    name: 'IVRAI-BOT',
    tagline: 'Voice AI for admissions calls & CRM',
    category: 'AI & Voice',
    svcClass: 'svc-ai',
    heroClass: 'bg-product-ivrai',
    heroImage: productImg('ivrai', 'hero'),
    cardImage: productImg('ivrai', 'card'),
    galleryAlt: productImg('ivrai', 'alt'),
    accent: '#6366F1',
    summary:
      'Real-time voice pipeline for education admissions — speech-to-text, LLM dialogue, and text-to-speech with a full interview CRM API, Postgres, and async workers.',
    description:
      'IVRAI-BOT (VoiceBot) is a production-ready monorepo for institutes that need AI voice on phone and web — not a chatbot widget. The voice service streams microphone audio over WebSocket through Whisper STT, Claude Haiku for natural dialogue, and gTTS for spoken responses. The interview service exposes a FastAPI CRM for lead intake, call webhooks, pipeline stages, JWT-secured admin, and Celery workers — so counsellors see every call, outcome, and follow-up in one place.',
    problem:
      'Admission teams drown in outbound calls, manual CRM updates, and inconsistent scripts. IVR trees frustrate parents; spreadsheets lose context between counsellor handoffs.',
    solution:
      'A unified voice + CRM stack: AI handles first-touch qualification and FAQs, humans take over warm leads, and every interaction is logged with webhook-ready integrations.',
    metrics: [
      { value: 'Real-time', label: 'Voice round-trip' },
      { value: '2-in-1', label: 'Voice + CRM monorepo' },
      { value: 'Docker', label: 'Full-stack deploy' },
      { value: 'OpenAPI', label: 'Contract-first API' },
    ],
    personas: ['Admission heads', 'Inside sales teams', 'EdTech operators', 'CRM integrators'],
    useCases: [
      { title: 'Outbound qualification', desc: 'AI calls leads, captures intent, and pushes scored outcomes to your CRM pipeline.' },
      { title: 'Browser voice demo', desc: 'Prospects talk to the bot on web — same stack as telephony, faster iteration for pilots.' },
      { title: 'Webhook lead intake', desc: 'Marketing forms and partner feeds land in Postgres with auditable stage transitions.' },
      { title: 'Counsellor handoff', desc: 'Warm transfers with full transcript context — no repeat questions for families.' },
    ],
    modules: [
      { title: 'Voice service', desc: 'WebSocket STT → LLM → TTS with static demo UI for sales and QA.' },
      { title: 'Interview CRM API', desc: 'FastAPI REST layer with JWT, roles, and admissions-specific entities.' },
      { title: 'Worker plane', desc: 'Celery + Redis for async jobs, retries, and scheduled outreach batches.' },
      { title: 'Ops & deploy', desc: 'Docker Compose profile for local parity and production-shaped environments.' },
    ],
    workflow: ['Lead ingested via webhook or CRM', 'Voice bot qualifies & captures answers', 'Pipeline stage updated in Postgres', 'Counsellor notified for human close'],
    features: [
      'WebSocket voice pipeline with Whisper, Claude Haiku, and gTTS',
      'FastAPI interview CRM with OpenAPI contracts and JWT admin',
      'Postgres data model with Redis queues and Celery workers',
      'Webhook ingestion for marketing and partner lead sources',
      'CRM webapp for operators — calls, recordings, pipeline boards',
      'Docker Compose: voice UI, API, Postgres, Redis, worker in one command',
    ],
    tech: ['Python', 'FastAPI', 'WebSockets', 'Whisper', 'Claude', 'PostgreSQL', 'Redis', 'Celery'],
    industries: ['EdTech', 'Admissions', 'CRM'],
  },
  {
    slug: 'admitiq',
    imageKey: 'admitiq',
    name: 'AdmitIQ',
    tagline: 'AI voice agent for Indian education admissions',
    category: 'EdTech · Admissions',
    svcClass: 'svc-digital',
    heroClass: 'bg-product-admitiq',
    heroImage: productImg('admitiq', 'hero'),
    cardImage: productImg('admitiq', 'card'),
    galleryAlt: productImg('admitiq', 'alt'),
    accent: '#0EA5E9',
    summary:
      'Multi-tenant admissions platform with AI voice workers, BullMQ orchestration, and role-based consoles for admins, ops, and counsellors.',
    description:
      'AdmitIQ is how coaching institutes and universities run admission season at scale. A NestJS API with Swagger and JWT multi-tenancy sits at the core. BullMQ orchestrator and voice workers schedule, simulate, or connect real outbound campaigns. Four React apps — tenant admin, internal ops, counsellor PWA, and embeddable CRM widget — share Prisma models and Zod contracts so product, ops, and engineering stay aligned.',
    problem:
      'Institutes juggle LeadSquared, phone banks, and spreadsheets. Voice campaigns are expensive; counsellors lack a single view of call outcomes and lead temperature.',
    solution:
      'One product line for tenant config, campaign orchestration, voice sessions, and counsellor workflows — with webhook-native lead intake matching Indian ed-market habits.',
    metrics: [
      { value: '4', label: 'Role-based web apps' },
      { value: 'Multi', label: 'Tenant isolation' },
      { value: 'BullMQ', label: 'Campaign orchestration' },
      { value: 'pnpm', label: 'Monorepo scale' },
    ],
    personas: ['Coaching institute admins', 'Admission ops managers', 'Field counsellors', 'Platform owners'],
    useCases: [
      { title: 'Seasonal admission drives', desc: 'Spin up voice campaigns per course intake with tenant-scoped quotas and scripts.' },
      { title: 'Counsellor PWA', desc: 'Mobile-first follow-up for counsellors in the field — calls, notes, next actions.' },
      { title: 'Ops command center', desc: 'Internal team monitors queue depth, failures, and SLA across all tenants.' },
      { title: 'CRM widget embed', desc: 'Drop AdmitIQ into existing institute sites for lead capture without rebuild.' },
    ],
    modules: [
      { title: 'API & auth', desc: 'NestJS 11, Swagger, JWT tenancy, Prisma on PostgreSQL.' },
      { title: 'Orchestrator', desc: 'BullMQ jobs for scheduling, retries, and campaign lifecycle.' },
      { title: 'Voice worker', desc: 'Dedicated worker for voice session simulation and live connect paths.' },
      { title: 'Frontends', desc: 'Admin, ops, counsellor, and CRM widget — React 19 + Vite.' },
    ],
    workflow: ['Lead webhook from LMS or ads', 'Orchestrator queues voice touch', 'Counsellor reviews outcome in PWA', 'Conversion tracked per tenant'],
    features: [
      'NestJS 11 API with multi-tenant JWT and Swagger documentation',
      'BullMQ orchestrator plus dedicated voice session workers',
      'Admin, ops, counsellor, and embeddable CRM widget applications',
      'LeadSquared-style webhook lead intake with demo seed data',
      'Prisma schema, Dockerized PostgreSQL + Redis, shared Zod contracts',
      'pnpm monorepo with @admitiq/shared types and API client package',
    ],
    tech: ['NestJS', 'React 19', 'Vite', 'Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'pnpm'],
    industries: ['Higher Ed', 'Coaching', 'Admissions'],
  },
  {
    slug: 'agentic-platform',
    imageKey: 'agentic',
    name: 'Agentic Platform',
    tagline: 'Enterprise multi-team AI agents',
    category: 'Enterprise AI',
    svcClass: 'svc-ai',
    heroClass: 'bg-product-agentic',
    heroImage: productImg('agentic', 'hero'),
    cardImage: productImg('agentic', 'card'),
    galleryAlt: productImg('agentic', 'alt'),
    accent: '#8B5CF6',
    summary:
      'Control plane for LangGraph-style agents with LLM gateway failover, 15+ tool integrations, approvals, audit, and team tenancy.',
    description:
      'The Enterprise Agentic AI Platform is what teams need after ChatGPT pilots stall: governed agents with tools, budgets, and audit trails. FastAPI routes chat and streaming through OpenAI, Anthropic, and Gemini with failover and cost heuristics. Agents are YAML-defined, run sync or on Celery, and invoke GitHub, Jira, Slack, email, RAG bridges, and more. PostgreSQL + pgvector, Redis session memory, JWT tenancy, and a Next.js operator UI mirror how platform engineering teams actually ship.',
    problem:
      'Copilot experiments don’t scale — no approvals, no tool governance, no team isolation, and no idea which agent burned the API budget.',
    solution:
      'A control plane: register agents, attach tools from env secrets, enforce approvals on sensitive actions, and audit every execution for compliance-ready ops.',
    metrics: [
      { value: '15+', label: 'Built-in tools' },
      { value: '3', label: 'LLM providers' },
      { value: 'YAML', label: 'Agent definitions' },
      { value: 'pgvector', label: 'Semantic memory' },
    ],
    personas: ['Platform engineering', 'DevOps & SRE', 'IT automation leads', 'AI CoE teams'],
    useCases: [
      { title: 'Mail-triggered agents', desc: 'IMAP poll or Graph webhook kicks off triage, draft, or ticket-creation flows.' },
      { title: 'Dev workflow bots', desc: 'GitHub/GitLab/Jira/Azure DevOps actions from a single agent run.' },
      { title: 'RAG + documents', desc: 'Bridge to ai-services for enterprise retrieval — not a siloed chat UI.' },
      { title: 'Human-in-the-loop', desc: 'Approval queue before destructive or external-facing tool calls execute.' },
    ],
    modules: [
      { title: 'LLM gateway', desc: 'Chat, stream, failover, rate limits, and per-team budget tracking.' },
      { title: 'Tool registry', desc: 'GitHub, Slack, Confluence, web search, python_exec, email, and more.' },
      { title: 'Execution engine', desc: 'Sync runs or Celery async with execution IDs and status polling.' },
      { title: 'Governance', desc: 'Approvals, audit logs, marketplace flags, team tenancy.' },
    ],
    workflow: ['Define agent in YAML', 'Attach tools & secrets', 'Trigger via UI, API, or mail', 'Approve if required → audit log'],
    features: [
      'Multi-provider LLM gateway with failover, rate limits, and cost heuristics',
      'Tool registry: GitHub, GitLab, Jira, Azure DevOps, Slack, Teams, Notion, email, RAG',
      'Mail-triggered runs via IMAP poll and Microsoft Graph webhooks',
      'Approvals queue, immutable audit logs, marketplace agent catalogue',
      'Team tenancy, pgvector memory, Celery async execution plane',
      'Next.js operator UI + FastAPI OpenAPI surface at /docs',
    ],
    tech: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'Redis', 'Celery', 'LangGraph'],
    industries: ['Enterprise IT', 'Platform Engineering', 'Automation'],
  },
  {
    slug: 'zupfly',
    imageKey: 'zupfly',
    name: 'ZupFly',
    tagline: 'Ed-tech vocabulary & learning platform',
    category: 'EdTech',
    svcClass: 'svc-digital',
    heroClass: 'bg-product-zupfly',
    heroImage: productImg('zupfly', 'hero'),
    cardImage: productImg('zupfly', 'card'),
    galleryAlt: productImg('zupfly', 'alt'),
    accent: '#F97316',
    summary:
      'ZupFly-branded learning experience with CMS-driven content, production web deploy, and Android packaging for standardized test prep.',
    description:
      'ZupFly is the consumer-facing ed-tech brand for competitive exam prep — engineered for the same polish learners expect from global vocab and course apps. A responsive web portal carries the zupfly.com design system. Content teams edit word banks in Google Sheets and sync via export/import pipelines — no developer in the loop for every content tweak. Capacitor packaging turns the same HTML core into a Play Store–ready Android app.',
    problem:
      'Test-prep content changes weekly; engineering bottlenecks slow launches. Learners churn when UX feels dated next to Airlearn-style competitors.',
    solution:
      'Decouple content from code with Sheets CMS, ship branded web + Android from one codebase, and iterate UX in Cursor with production deploy docs baked in.',
    metrics: [
      { value: 'Sheets', label: 'CMS workflow' },
      { value: 'Web +', label: 'Android ship path' },
      { value: '1', label: 'Codebase core' },
      { value: 'Brand', label: 'ZupFly theme system' },
    ],
    personas: ['EdTech product owners', 'Content editors', 'Growth marketers', 'Learners (GRE/GMAT/IELTS)'],
    useCases: [
      { title: 'Competitive vocab portals', desc: 'Branded study flows with streaks, lists, and exam-specific positioning.' },
      { title: 'Content ops at scale', desc: 'Editors maintain thousands of words in Sheets; devs import on schedule.' },
      { title: 'Android distribution', desc: 'Capacitor build pipeline documented for Play Store go-live.' },
      { title: 'Rapid UX experiments', desc: 'HTML-first core lets design iterations ship without native rebuilds.' },
    ],
    modules: [
      { title: 'Learner portal', desc: 'Responsive web app with ZupFly theme CSS and study modes.' },
      { title: 'Sheets CMS', desc: 'Export/import CSV pipeline for words, lists, and groups.' },
      { title: 'Mobile packaging', desc: 'Capacitor sync, assets, and Android Studio workflow.' },
      { title: 'Go-live kit', desc: 'Deployment, privacy policy, and store listing documentation.' },
    ],
    workflow: ['Edit content in Google Sheets', 'Import to app data layer', 'Deploy web + build Android', 'Learners study on any device'],
    features: [
      'ZupFly-branded responsive portal with dedicated theme system',
      'Google Sheets CMS — export, edit, import without redeploying code',
      'Capacitor Android pipeline from single HTML application core',
      'Production deployment and Play Store go-live documentation',
      'Privacy policy and learner-facing compliance pages',
      'Competitive UX parity targets (Airlearn / Jamboree-class flows)',
    ],
    tech: ['HTML/CSS/JS', 'Capacitor', 'Google Sheets CMS', 'Node tooling'],
    industries: ['Test Prep', 'EdTech', 'Consumer Learning'],
  },
  {
    slug: 'accesshub',
    imageKey: 'accesshub',
    name: 'AccessHub',
    tagline: 'Accessibility community portal',
    category: 'Community · A11y',
    svcClass: 'svc-appdev',
    heroClass: 'bg-product-accesshub',
    heroImage: productImg('accesshub', 'hero'),
    cardImage: productImg('accesshub', 'card'),
    galleryAlt: productImg('accesshub', 'alt'),
    accent: '#10B981',
    summary:
      'Full-stack accessibility practitioner community — discussions, resources, events, NVDA testing guide, and PostgreSQL-backed auth.',
    description:
      'AccessHub (Allcanaccess) is a community product built accessible-first — because the audience are practitioners who will notice shortcuts. React front-end with ARIA landmarks, skip links, semantic regions, and keyboard paths throughout. Members run discussions with upvotes and search, browse a resources library, discover tools, and register for events. The NVDA testing guide is an interactive checklist, not a PDF. Express API on PostgreSQL with JWT, Google OAuth, and production-ready password reset.',
    problem:
      'Accessibility knowledge is fragmented across forums and Slack. Teams lack a curated place for tools, events, and structured NVDA test guidance.',
    solution:
      'A dedicated community portal with moderation-ready discussions, resource taxonomy, and hands-on testing guides — shipped with the same rigour as a commercial SaaS.',
    metrics: [
      { value: 'A11y-first', label: 'Design system' },
      { value: 'NVDA', label: 'Interactive guide' },
      { value: 'OAuth', label: 'Google + JWT auth' },
      { value: 'PG', label: 'Production database' },
    ],
    personas: ['A11y specialists', 'QA engineers', 'Design leads', 'Community moderators'],
    useCases: [
      { title: 'Practitioner discussions', desc: 'Threads, upvotes, filters — knowledge base that grows with the community.' },
      { title: 'Tool discovery', desc: 'Curated directory of real accessibility tools with outbound links and context.' },
      { title: 'Events & workshops', desc: 'Listings for meetups and training — central calendar for the community.' },
      { title: 'NVDA lab guide', desc: 'Step-by-step interactive checklist for screen-reader testing workflows.' },
    ],
    modules: [
      { title: 'Community', desc: 'Discussions, search, upvotes, and category filters.' },
      { title: 'Resources & tools', desc: 'Libraries with tagging and editorial structure.' },
      { title: 'NVDA guide', desc: 'Interactive checklist UX for manual testing.' },
      { title: 'Identity', desc: 'JWT sessions, Google OAuth, forgot-password via SMTP.' },
    ],
    workflow: ['Member signs up (OAuth or email)', 'Posts, upvotes, bookmarks', 'Uses NVDA guide during audits', 'Discovers events and tools'],
    features: [
      'Accessible-by-design UI: landmarks, skip links, keyboard navigation',
      'Community discussions with search, filters, and upvotes',
      'Resources library, tools directory, and events listings',
      'Interactive NVDA testing guide with progress checklist',
      'PostgreSQL migrations, seed scripts, JWT + Google OAuth',
      'Forgot-password flow; Netlify, Vercel, and Jenkins deploy paths',
    ],
    tech: ['React', 'Express', 'PostgreSQL', 'JWT', 'Google OAuth'],
    industries: ['Accessibility', 'Community', 'Non-profit'],
  },
  {
    slug: 'lexiquest',
    imageKey: 'lexiquest',
    name: 'LexiQuest',
    tagline: 'GRE, GMAT & IELTS vocabulary trainer',
    category: 'EdTech · Mobile',
    svcClass: 'svc-digital',
    heroClass: 'bg-product-lexiquest',
    heroImage: productImg('lexiquest', 'hero'),
    cardImage: productImg('lexiquest', 'card'),
    galleryAlt: productImg('lexiquest', 'alt'),
    accent: '#EC4899',
    summary:
      'Vocabulary trainer with GRE synonym groups, flat dictionary mode, Capacitor Android app, and Sheets-driven content ops.',
    description:
      'LexiQuest competes in the GRE, GMAT, and IELTS vocab space with a study experience tuned for serious test takers — synonym groups for GRE, flat dictionary mode for quick drills, text-to-speech, and local notifications on Android. One `lexiquest.html` core powers browser demo and Capacitor builds: edit once, `npm run android`, ship to Play Store. Google Sheets CMS means content velocity without waiting on release trains.',
    problem:
      'Learners use generic apps that don’t match GRE grouping logic. Content updates require app store releases when words are hardcoded.',
    solution:
      'Exam-specific study modes plus Sheets-backed content pipeline and Capacitor — web and Android from a single source of truth.',
    metrics: [
      { value: '3', label: 'Exam targets' },
      { value: 'TTS', label: 'Pronunciation' },
      { value: 'Android', label: 'Store-ready' },
      { value: 'CMS', label: 'Sheets-driven' },
    ],
    personas: ['GRE/GMAT aspirants', 'IELTS candidates', 'Content authors', 'EdTech publishers'],
    useCases: [
      { title: 'GRE synonym groups', desc: 'Clustered study aligned with how high-scorers memorise vocabulary.' },
      { title: 'Dictionary drills', desc: 'Flat lists for last-mile revision before exam day.' },
      { title: 'Mobile-first prep', desc: 'Notifications and TTS on Android for commute-friendly learning.' },
      { title: 'White-label ready', desc: 'Ship under ZupFly or partner brands with shared CMS.' },
    ],
    modules: [
      { title: 'Study engine', desc: 'Group mode, dictionary mode, progress and spaced repetition hooks.' },
      { title: 'Sheets CMS', desc: 'Words, WordLists, Groups, DictionaryWords CSV round-trip.' },
      { title: 'Capacitor Android', desc: 'Plugins for TTS, notifications, splash, assets.' },
      { title: 'Store ops', desc: 'Go-live checklist and privacy policy assets.' },
    ],
    workflow: ['Content team updates Sheets', 'Import builds data JSON', 'Learner studies on web or app', 'Push updates without native code changes'],
    features: [
      'GRE grouped synonyms and flat dictionary study modes',
      'Capacitor Android build from single lexiquest.html core',
      'Google Sheets CMS for words, lists, groups, and membership',
      'Text-to-speech and local notifications via Capacitor plugins',
      'Play Store go-live documentation and privacy policy',
      'Browser demo for marketing and QA before mobile release',
    ],
    tech: ['HTML/CSS/JS', 'Capacitor', 'Google Sheets', 'Android'],
    industries: ['Test Prep', 'Mobile Learning', 'EdTech'],
  },
  {
    slug: 'interviewiq',
    imageKey: 'interviewiq',
    name: 'InterviewIQ',
    tagline: 'AI interview prep & recruiter intelligence',
    category: 'HR Tech · AI',
    svcClass: 'svc-ai',
    heroClass: 'bg-product-interviewiq',
    heroImage: productImg('interviewiq', 'hero'),
    cardImage: productImg('interviewiq', 'card'),
    galleryAlt: productImg('interviewiq', 'alt'),
    accent: '#0EA5E9',
    summary:
      'End-to-end mock interviews with live copilot, code runner, behavioral coach, scored debriefs, and recruiter pipeline views.',
    description:
      'InterviewIQ bridges LeetCode practice and real hiring loops. Candidates upload a JD and resume; the platform maps skill gaps, generates tailored question banks, and runs multi-round live sessions — voice, IDE copilot, system design, and STAR behavioral. A isolated code-runner service executes submissions safely. Recruiters configure jobs, manage pipeline candidates, and read debriefs with rubric dimensions, speech analytics (WPM, fillers), and exportable JSON for coaches or ATS handoff.',
    problem:
      'Candidates rehearse on static question banks that ignore their resume. Recruiters lack structured mock feedback before expensive onsite loops.',
    solution:
      'Intel-driven mocks: every question tied to JD + resume gaps, scored debrief with action plan, and recruiter visibility into pipeline readiness.',
    metrics: [
      { value: 'Multi', label: 'Interview rounds' },
      { value: 'Rubric', label: 'Scored debrief' },
      { value: '2-sided', label: 'Candidate + recruiter' },
      { value: 'Runner', label: 'Safe code exec' },
    ],
    personas: ['Job seekers', 'University career services', 'Recruiting teams', 'Tech interview coaches'],
    useCases: [
      { title: 'Candidate mock loop', desc: 'Setup wizard → live session → debrief with 7-day action plan.' },
      { title: 'IDE copilot', desc: 'Coding rounds with hints and execution against hidden tests.' },
      { title: 'Recruiter pipeline', desc: 'Jobs, candidates, session status, debrief access per role.' },
      { title: 'Behavioral STAR', desc: 'Structured behavioral coach separate from technical tracks.' },
    ],
    modules: [
      { title: 'Candidate app', desc: 'Dashboard, setup, live session, debrief, assessments.' },
      { title: 'Code runner', desc: 'Isolated execution service for technical rounds.' },
      { title: 'Recruiter console', desc: 'Pipeline, job config, candidate detail with rubric view.' },
      { title: 'Intelligence layer', desc: 'JD/resume parse, gap map, Tavily company intel optional path.' },
    ],
    workflow: ['Upload JD + resume', 'AI plans rounds & questions', 'Live mock with copilot', 'Debrief → recruiter pipeline update'],
    features: [
      'Candidate setup wizard, live session, debrief, and dashboard flows',
      'IDE copilot, behavioral coach, and structured assessments',
      'Recruiter pipeline, job configuration, and candidate detail views',
      'JD + resume parsing with gap-driven question generation',
      'Rubric scoring, speech analytics, model answers, 7-day action plans',
      'Monorepo: @interviewiq/api, web, and code-runner workspaces',
    ],
    tech: ['React', 'Express', 'SQLite', 'WebSockets', 'OpenAI / Anthropic'],
    industries: ['Recruiting', 'EdTech', 'Career Services'],
  },
];

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
