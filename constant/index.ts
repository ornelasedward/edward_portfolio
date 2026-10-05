import { bizscout, calvis, telo, terminal, traderx } from "@/assets";
import type { StaticImageData } from "next/image";

// Every role, date and number on this page mirrors the resume (Resume.docx). Change them together
// so a reviewer who reads both sees one story.

export const profile = {
  name: "Edward Ornelas",
  title: "AI Engineer & Tech Lead",
  location: "Austin, TX",
  availability: "Open to on-site or hybrid in Austin, and remote",
  headline: "I ship AI products to production.",
  summary:
    "4 years shipping production applications and systems. I lead a team of 8 developers and build products end to end, from the architecture to the partnerships that bring people in. My focus is putting AI to work across three layers of a business: how the team builds, how operations run, and what customers use. Each one is a loop that keeps improving while a person sets the direction.",
  focus: ["AI harnesses", "Agents", "Evals", "MCP", "Full-stack", "Team lead"],
  email: "ornelasedward@rocketmail.com",
};

// Rendered black (brightness-0) in the marquee; keepDetail logos go grayscale instead because a
// solid silhouette would lose their mark. h is the display height, tuned per logo so wide
// wordmarks don't out-shout compact ones.
export const logos: {
  name: string;
  src: string;
  width: number;
  height: number;
  h: number;
  keepDetail?: boolean;
}[] = [
  { name: "Calvis", src: "/logos/calvis.svg", width: 380, height: 73, h: 22 },
  { name: "Hyperliquid", src: "/logos/hyperliquid.svg", width: 115, height: 19, h: 22 },
  { name: "BizScout", src: "/logos/bizscout.svg", width: 202, height: 41, h: 24 },
  { name: "TradingView", src: "/logos/tradingview.svg", width: 147, height: 28, h: 22 },
  { name: "Contrarian Thinking", src: "/logos/contrarian-thinking.svg", width: 170, height: 60, h: 34 },
  { name: "Glassnode", src: "/logos/glassnode.png", width: 500, height: 102, h: 24 },
  { name: "Telos Health Solutions", src: "/logos/telos.png", width: 1640, height: 546, h: 32 },
  { name: "CoinGecko", src: "/logos/coingecko.png", width: 592, height: 130, h: 26, keepDetail: true },
  { name: "Mastermind", src: "/logos/mastermind.svg", width: 199, height: 24, h: 20 },
  { name: "Layer3", src: "/logos/layer3-mark.svg", width: 152, height: 28, h: 22 },
  { name: "CoinGlass", src: "/logos/coinglass.svg", width: 1076, height: 256, h: 24 },
  { name: "Moralis", src: "/logos/moralis.webp", width: 218, height: 52, h: 26 },
  { name: "MoonPay", src: "/logos/moonpay.svg", width: 100, height: 20, h: 22 },
];

export const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: "https://github.com/ornelasedward" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/edward-ornelas/" },
  { label: "X", href: "https://x.com/_edwardornelas" },
  { label: "YouTube", href: "https://www.youtube.com/@EdwardOrnelas" },
];

export type Stat = { value: string; label: string };

export type Project = {
  id: string;
  name: string;
  role?: string;
  kind: string;
  period?: string;
  image: StaticImageData;
  href: string;
  hrefLabel: string;
  summary: string;
  ai?: string[];
  features?: string[];
  engineering?: string[];
  built?: string[];
  growth?: string[];
  stats: Stat[];
  statsNote?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "traderx",
    name: "BB TraderX",
    role: "Lead Software Engineer",
    kind: "Build a trading strategy, or follow one. Your account trades it live.",
    period: "Nov 2025 – now",
    image: traderx,
    href: "https://www.bbtraderx.com/",
    hrefLabel: "bbtraderx.com",
    summary:
      "I directed and built TraderX, an automated strategy marketplace routing perpetual futures execution through Hyperliquid. Users build a strategy, others follow it with real money in one click, and it runs autonomously in each account's isolated wallet. Idea to production in six months.",
    features: [
      "I lead a team of 8 engineers, set the roadmap with the CEO and CFO and ship against it weekly. Every change gets an AI code review in CI/CD, and a developer approves each production merge.",
      "AI Studio generates a trading strategy from a single ticker. Market data is normalized behind defined endpoints, and the model works through deterministic tool calls, choosing from the indicators, conditions and strategy types I built. Each combination is backtested for PnL; the model keeps the most profitable one and adds a trend filter when it needs one, like only going long above the 200 EMA.",
      "The trading infrastructure runs on C#/.NET microservices with Redis and PostgreSQL. Every follow gets its own custodial Solana or EVM wallet with keys encrypted at rest, and when a strategy fires, the backend fans the signal out as one task per follower and sizes each order against that wallet.",
      "I wrote the internal MCP server: 28 read-only tools over users, deposits, withdrawals, follows, copy tasks, trades and revenue, served over Streamable HTTP with OAuth, so leadership can query live platform data through AI models.",
    ],
    growth: [
      "I run partner campaigns end to end with Layer3, Austin Hill and Zach Humphreys: a custom metrics API per partner (onboarding, quests, referrals, deposits, volume), plus the landing pages, signup and win-back emails, dashboards and CRM.",
    ],
    stats: [
      { value: "4,000+", label: "Users" },
      { value: "$50M", label: "Trading volume" },
      { value: "6 mo", label: "Idea to production" },
      { value: "8", label: "Engineers led" },
    ],
    stack: [
      "Claude API",
      "Vercel AI SDK",
      "MCP",
      "Next.js",
      "TypeScript",
      "C# / .NET",
      "SignalR",
      "Redis",
      "PostgreSQL",
      "Supabase",
      "Hyperliquid",
      "Docker",
    ],
  },
  {
    id: "becausebitcoin",
    name: "BecauseBitcoin",
    role: "Full-Stack Software Engineer",
    kind: "Joined as the sole developer at $0 revenue. Built the products that grew it to $300K a month.",
    period: "Jan 2023 – Nov 2025",
    image: terminal,
    href: "https://app.bbterminal.com/degen",
    hrefLabel: "bbterminal.com",
    summary:
      "I rebuilt the site from WordPress into Next.js, Tailwind and Firebase with auth, Stripe checkout and a CMS, then moved the stack to Dockerized microservices on Azure. From there I built the news and analytics platform, then BB Terminal, the market-data and on-chain trading platform that TraderX now runs on. The company grew to a team of 8.",
    features: [
      "BB Terminal covers 60+ chains and 100k+ assets: live TradingView charts, holder and top-trader data, and in-app trading from custodial Solana and EVM wallets. A swap is built unsigned, held while the user confirms, then signed and broadcast, and fills come back over SignalR.",
      "Token search routes through GeckoTerminal with batched DexScreener lookups. Slow providers time out and fall back to cached pool info instead of hanging the page.",
    ],
    ai: [
      "I wrote BB's AI strategy and built the automations behind it: a newsroom where one editor reviews 20 AI-drafted articles a day, and a Cloudflare pipeline that transcribes, summarizes and formats daily recordings into a weekly paid-member recap email.",
    ],
    growth: [
      "Grew the YouTube channel from under 1,000 to 22,000+ subscribers, built BB Academy with the sales pipeline and checkout behind its courses, and wrote and automated the newsletter.",
    ],
    stats: [
      { value: "$300K/mo", label: "Revenue, from $0" },
      { value: "10,000+", label: "Registered readers" },
      { value: "2,000+", label: "Daily Terminal users" },
      { value: "22K+", label: "YouTube subscribers" },
    ],
    stack: ["Next.js", "TypeScript", "Firebase", "Stripe", ".NET", "SignalR", "PostgreSQL", "Cloudflare", "Docker", "Azure"],
  },
  {
    id: "telos",
    name: "Telos Health",
    role: "Front-End and Mobile Engineer",
    kind: "Remote patient monitoring for Texas home health agencies.",
    period: "Aug 2023 – Apr 2024",
    image: telo,
    href: "https://teloshs.com/",
    hrefLabel: "teloshs.com",
    summary:
      "Telos lets Texas home health agencies monitor patients between visits. I built the frontend for its portals and its patient app.",
    built: [
      "Built the frontend for the agency, staff and clinician portals and the React Native patient app (check-ins, messaging their nurse) on Directus and PostgreSQL.",
      "Built the patient intake flow from import through activation, with approval steps and decline reasons.",
      "Sat in on meetings with agency owners and stakeholders, then shipped fixes and features from what they told us, including a phone-first clinician app built around collapsible patient cards for use between visits.",
    ],
    stats: [
      { value: "20,000+", label: "Patients served" },
      { value: "3", label: "Portals + patient app" },
    ],
    stack: ["JavaScript", "React Native", "Lit", "Directus", "Node.js", "PostgreSQL"],
  },
];

// Smaller AI builds. The Calvis AI repo is private, so it links to their site rather than the code.
export type AiBuild = {
  name: string;
  role?: string;
  kind: string;
  period: string;
  image?: StaticImageData;
  imageHref?: string;
  href?: string;
  hrefLabel?: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const aiBuilds: AiBuild[] = [
  {
    name: "Calvis AI · Prompt eval harness",
    role: "AI Engineer",
    kind: "Proves a prompt change is safe before it ships.",
    period: "Sep 2026",
    image: calvis,
    href: "https://calvis.com/",
    hrefLabel: "calvis.com",
    summary:
      "Calvis runs an AI copilot for security guards. I built a self-improving eval harness that decides whether a prompt change is safe to ship, by replaying recorded guard shifts against the old and new prompt.",
    points: [
      "The replay and scoring engine: every change declares what must improve, what must stay true and what must never happen, and is graded on decisions, tool calls and escalations rather than prose.",
      "A recorded tool result is served only on an exact match of tool and input, so a changed prompt can't borrow the old run's answers.",
      "It fixes itself. Point it at a shift and it finds what the copilot got wrong, patches the prompt, re-runs the safety checks and keeps the fix only if nothing regresses. A person approves the merge.",
    ],
    stack: ["Python", "pytest", "GitHub Actions", "OpenAI API", "Claude API"],
  },
  {
    name: "agentd",
    kind: "Push an agent. Get an API, an MCP server and a playground.",
    period: "2026",
    href: "https://github.com/ornelasedward/mcp-deploy",
    hrefLabel: "GitHub",
    summary:
      "A deployment platform for AI agents. One git push ships an agent as an API, an MCP server, a CLI and a shareable playground.",
    points: [
      "An agent is a folder with a manifest. The platform builds it into an immutable artifact and serves it over HTTP, SSE streaming, a CLI and an auto-generated MCP server from one registry.",
      "Agent code runs in an E2B sandbox, but model calls, traces and tools go back through a bridge to the platform gateway, which is the only path to an LLM and enforces each org's monthly budget.",
      "Deploys come from a signed GitHub webhook with PR preview URLs. Eval cases, including LLM-as-judge, run on every deploy and block a regression, and long runs are durable on Inngest and can pause for human approval.",
    ],
    stack: ["TypeScript", "Hono", "Next.js", "MCP", "PostgreSQL", "E2B", "Inngest", "Docker"],
  },
];

export const sideProjects: AiBuild[] = [
  {
    name: "BizScout · httpbin Monitor",
    kind: "Ask your monitoring data what went wrong.",
    period: "2026",
    image: bizscout,
    href: "https://www.bizscout.com/",
    hrefLabel: "bizscout.com",
    summary:
      "A technical assessment for BizScout: a live API monitor with a Claude analyst inside. Ask it why latency spiked, and it writes its own incident report when response times double.",
    points: [
      "A scheduler posts randomized payloads to httpbin, stores every result in Postgres through Prisma, and pushes new rows to the dashboard over Socket.IO.",
      "The chat streams over SSE and can query the data with tools, up to three rounds per question. Every 60 seconds a monitor looks for responses slower than twice the rolling average and has Claude file a report through a forced tool call, so the output is always structured before it's saved.",
      "Costs stay predictable: a token count before every call, an 8k input budget, a shared hourly rate limit, and a cache keyed to a fingerprint of the data, so answers go stale the moment new pings land.",
    ],
    stack: ["Claude API", "Node.js", "Express", "Socket.IO", "Prisma", "PostgreSQL", "React"],
  },];

// AI rows lead and name the projects that back them, so each claim has a place to check it.
export const stack: { label: string; note?: string; items: string[]; proof?: string }[] = [
  {
    label: "AI harnesses",
    items: [
      "harnesses that run, replay and grade models against real production data",
      "self-improving prompt loops",
      "prompt and context assembly",
      "a trace on every run",
    ],
    proof: "Calvis AI, agentd",
  },
  {
    label: "LLM products",
    items: [
      "Claude (Opus, Sonnet, Haiku) and OpenAI",
      "Vercel AI SDK",
      "streaming chat",
      "structured output via forced tool calls",
      "image input",
    ],
    proof: "TraderX, BecauseBitcoin, BizScout",
  },
  {
    label: "Agents and tools",
    items: [
      "tool-use loops",
      "MCP servers with OAuth",
      "sandboxed agent runtimes",
      "durable runs with human approval",
    ],
    proof: "agentd, TraderX",
  },
  {
    label: "Evals",
    items: [
      "deterministic scorers",
      "safety holdouts",
      "LLM-as-judge",
      "regression gates on deploy",
    ],
    proof: "Calvis AI, agentd",
  },
  {
    label: "Cost and reliability",
    items: [
      "token budgets checked before every call",
      "per-team spend caps",
      "rate limits",
      "caches that invalidate on new data",
      "picking the model per task",
    ],
    proof: "BizScout, agentd",
  },
  {
    label: "How I ship",
    items: ["Claude Code", "Cursor", "Codex", "AI code review in CI/CD", "a developer approves every production merge"],
  },
  { label: "Languages", items: ["TypeScript", "C#", "Python", "SQL"] },
  {
    label: "Product engineering",
    items: ["React", "Next.js", "React Native", "Tailwind", ".NET / ASP.NET Core", "Node.js (Hono, Express)", "SignalR", "background workers"],
  },
  {
    label: "Data and infra",
    items: ["PostgreSQL", "Supabase", "Redis", "Docker", "Kubernetes", "GitHub Actions", "Vercel", "Cloudflare", "AWS", "Azure", "GCP"],
  },
];

export const education = {
  degree: "B.S. Information & Communication Technologies",
  focus: "Cyber Defense",
  school: "New Mexico State University",
  gpa: "3.9",
};
