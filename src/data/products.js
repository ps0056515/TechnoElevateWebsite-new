/** TestYantra / TechnoElevate product portfolio — built via Cursor engineering. */
export const PRODUCTS = [
  {
    slug: 'ivrai-bot',
    name: 'IVRAI-BOT',
    tagline: 'Voice AI for admissions calls & CRM',
    category: 'AI & Voice',
    svcClass: 'svc-ai',
    summary:
      'Real-time voice pipeline for education admissions — speech-to-text, LLM dialogue, and text-to-speech with a full interview CRM API, Postgres, and async workers.',
    description:
      'IVRAI-BOT (VoiceBot) is a monorepo for IVR and browser-based voice experiences. The voice service streams microphone audio over WebSocket through Whisper STT, Claude Haiku for dialogue, and gTTS for playback. The interview service exposes a FastAPI CRM for lead intake, call webhooks, admissions pipeline stages, JWT auth, and Celery-backed background jobs — designed for institutes that need automated outreach plus human handoff.',
    features: [
      'WebSocket voice demo UI with sub-second round-trip architecture',
      'Whisper STT → Claude LLM → gTTS TTS pipeline',
      'FastAPI interview CRM with OpenAPI contracts',
      'Postgres data model, Redis queues, Celery workers',
      'Webhook ingestion, JWT-secured admin CRM webapp',
      'Docker Compose full-stack local and deploy profile',
    ],
    tech: ['Python', 'FastAPI', 'WebSockets', 'Whisper', 'Claude', 'PostgreSQL', 'Redis', 'Celery'],
    industries: ['EdTech', 'Admissions', 'CRM'],
  },
  {
    slug: 'admitiq',
    name: 'AdmitIQ',
    tagline: 'AI voice agent for Indian education admissions',
    category: 'EdTech · Admissions',
    svcClass: 'svc-digital',
    summary:
      'Multi-tenant admissions platform with AI voice workers, BullMQ orchestration, and role-based consoles for admins, ops, and counsellors.',
    description:
      'AdmitIQ is a production-grade monorepo for institutes that run high-volume admission campaigns. NestJS powers the REST API with Swagger and JWT tenancy. Dedicated orchestrator and voice workers schedule and simulate (or connect) outbound calls. React frontends cover tenant admin, internal ops, counsellor PWA, and an embeddable CRM widget — all backed by PostgreSQL via Prisma and Redis for queues.',
    features: [
      'NestJS 11 API with multi-tenant JWT auth',
      'BullMQ orchestrator + voice session workers',
      'Admin, ops, counsellor, and CRM widget apps',
      'LeadSquared-style webhook lead intake',
      'Prisma schema, seed data, Dockerized Postgres + Redis',
      'Swagger docs and shared Zod contracts',
    ],
    tech: ['NestJS', 'React 19', 'Vite', 'Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'pnpm'],
    industries: ['Higher Ed', 'Coaching', 'Admissions'],
  },
  {
    slug: 'agentic-platform',
    name: 'Agentic Platform',
    tagline: 'Enterprise multi-team AI agents',
    category: 'Enterprise AI',
    svcClass: 'svc-ai',
    summary:
      'Control plane for LangGraph-style agents with LLM gateway failover, 15+ tool integrations, approvals, audit, and team tenancy.',
    description:
      'The Enterprise Agentic AI Platform is a control plane for teams that need governed agent execution — not one-off chat demos. FastAPI backend routes chat and streaming through OpenAI, Anthropic, and Gemini with rate limits and budget tracking. Agents are defined in YAML, executed sync or via Celery, and can call GitHub, Jira, Slack, Confluence, email, RAG bridges, and more. PostgreSQL with pgvector, optional Redis session memory, JWT auth, and a Next.js operator UI complete the stack.',
    features: [
      'Multi-provider LLM gateway with failover and cost heuristics',
      'Tool registry: GitHub, GitLab, Jira, Azure DevOps, Slack, Teams, Notion, web search',
      'Mail-triggered agent runs (IMAP poll & Graph webhooks)',
      'Approvals queue, audit logs, marketplace agent flags',
      'Team tenancy, pgvector memory, Celery async executions',
      'Bridge to external ai-services for RAG and document query',
    ],
    tech: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'Redis', 'Celery', 'LangGraph'],
    industries: ['Enterprise IT', 'Platform Engineering', 'Automation'],
  },
  {
    slug: 'zupfly',
    name: 'ZupFly',
    tagline: 'Ed-tech vocabulary & learning platform',
    category: 'EdTech',
    svcClass: 'svc-digital',
    summary:
      'ZupFly-branded learning experience with CMS-driven content, production web deploy, and Android packaging for standardized test prep.',
    description:
      'ZupFly is the ed-tech product brand behind vocabulary and test-prep delivery — engineered as a deployable web portal with themed UX, Google Sheets–backed CMS workflows, and a path to Play Store distribution. Content editors export and import word banks without redeploying application code, while learners get a polished, mobile-ready study flow aligned with competitive exam prep markets.',
    features: [
      'ZupFly-branded responsive learning portal',
      'Google Sheets CMS export / import pipeline',
      'Production deployment and Android build workflow',
      'Themed CSS design system (zupfly.com brand)',
      'Privacy policy and go-live documentation',
      'Airlearn-inspired UX iterations via Cursor delivery',
    ],
    tech: ['HTML/CSS/JS', 'Capacitor', 'Google Sheets CMS', 'Node tooling'],
    industries: ['Test Prep', 'EdTech', 'Consumer Learning'],
  },
  {
    slug: 'accesshub',
    name: 'AccessHub',
    tagline: 'Accessibility community portal',
    category: 'Community · A11y',
    svcClass: 'svc-appdev',
    summary:
      'Full-stack accessibility practitioner community — discussions, resources, events, NVDA testing guide, and PostgreSQL-backed auth.',
    description:
      'AccessHub (Allcanaccess) is a React community portal built accessible-by-design: ARIA landmarks, skip links, semantic HTML, and keyboard-first navigation. Members browse discussions with upvotes and search, a resources library, tools directory, and events. An interactive NVDA testing guide provides step-by-step checklists for practitioners. Express API with PostgreSQL, JWT and Google OAuth, password reset via SMTP, and Jenkins-friendly production deploy scripts.',
    features: [
      'Community discussions with filters, search, and upvotes',
      'Resources library and accessibility tools directory',
      'Events & workshops listing',
      'Interactive NVDA testing guide with checklist',
      'PostgreSQL migrations, seed scripts, OAuth + JWT auth',
      'Forgot-password flow; Netlify / Vercel deploy ready',
    ],
    tech: ['React', 'Express', 'PostgreSQL', 'JWT', 'Google OAuth'],
    industries: ['Accessibility', 'Community', 'Non-profit'],
  },
  {
    slug: 'lexiquest',
    name: 'LexiQuest',
    tagline: 'GRE, GMAT & IELTS vocabulary trainer',
    category: 'EdTech · Mobile',
    svcClass: 'svc-digital',
    summary:
      'Vocabulary trainer with GRE synonym groups, flat dictionary mode, Capacitor Android app, and Sheets-driven content ops.',
    description:
      'LexiQuest helps learners master vocabulary for GRE, GMAT, and IELTS. A single HTML application core syncs to Android via Capacitor — edit once, run `npm run android`, and ship to the Play Store. The CMS layer exports word lists, groups, and dictionary membership to CSV for Google Sheets editing, then imports back without code changes. Built to compete with consumer vocab apps while staying white-label friendly under ZupFly.',
    features: [
      'GRE grouped synonyms + flat dictionary study modes',
      'Capacitor Android packaging from lexiquest.html',
      'Google Sheets CMS (Words, WordLists, Groups, DictionaryWords)',
      'Text-to-speech and local notifications (Capacitor plugins)',
      'Play Store go-live and privacy policy assets',
      'Browser demo + native app from one codebase',
    ],
    tech: ['HTML/CSS/JS', 'Capacitor', 'Google Sheets', 'Android'],
    industries: ['Test Prep', 'Mobile Learning', 'EdTech'],
  },
  {
    slug: 'interviewiq',
    name: 'InterviewIQ',
    tagline: 'AI interview prep & recruiter intelligence',
    category: 'HR Tech · AI',
    svcClass: 'svc-ai',
    summary:
      'End-to-end mock interviews with live copilot, code runner, behavioral coach, scored debriefs, and recruiter pipeline views.',
    description:
      'InterviewIQ closes the gap between LeetCode drills and real hiring loops. Candidates upload a JD and resume; the system builds gap maps, question banks, and multi-round live sessions (voice, code, system design, STAR). A dedicated code-runner service executes solutions safely. Recruiters configure jobs, add pipeline candidates, and review debriefs with rubric scores, speech analytics, and exportable JSON. SQLite-backed MVP monorepo with React, Express API, and WebSocket sessions.',
    features: [
      'Candidate setup wizard, live session, and debrief flows',
      'IDE copilot, behavioral coach, and assessments modules',
      'Recruiter pipeline, job config, and candidate detail views',
      'JD + resume parsing → targeted question generation',
      'Rubric scoring, speech analytics, 7-day action plans',
      'Monorepo: @interviewiq/api, web, code-runner workspaces',
    ],
    tech: ['React', 'Express', 'SQLite', 'WebSockets', 'OpenAI / Anthropic'],
    industries: ['Recruiting', 'EdTech', 'Career Services'],
  },
];

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
