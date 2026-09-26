import { bizscout, calvis, telo, terminal, traderx } from "@/assets";
import type { StaticImageData } from "next/image";

// BB TraderX numbers come from the production database (real-money only: demo/sandbox trades
// excluded, the same rule the admin panel uses). Users and trades cover the growth window
// Aug 1 – Sep 25, 2026; volume and copy traders are all-time. Refresh both together.
export const STATS_WINDOW = "Aug 1 – Sep 25, 2026";

export const profile = {
  name: "Edward Ornelas",
  title: "Senior AI Engineer",
  location: "Austin, TX",
  availability: "Open to on-site or hybrid in Austin, and remote",
  headline: "I ship AI products to production.",
  summary:
    "I build AI systems you can measure, from the harness that tests them to the backend they run on.",
  focus: ["AI harnesses", "Agents", "Evals", "MCP", "Full-stack"],
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
  stats: Stat[];
  statsNote?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "traderx",
    name: "BB TraderX",
    kind: "Follow a trading strategy. Your account trades it live.",
    period: "2026 – now",
    image: traderx,
    href: "https://www.bbtraderx.com/",
    hrefLabel: "bbtraderx.com",
    summary:
      "A marketplace of automated trading strategies. Publishers build and prove a strategy, and anyone can follow it with real money in one click, across crypto and stocks on Hyperliquid.",
    features: [
      "A three-click AI strategy builder. Pick a coin, hit Find, and AI Studio hands back a strategy that's profitable after trading fees and holds up on out-of-sample and walk-forward tests. Improve swaps better rules into a strategy that's already live.",
      "Every follow gets its own custodial wallet. When a strategy fires, the backend fans the signal out as one task per follower and sizes each order against that wallet.",
      "Deposits come in from anywhere. Chain webhooks record them, a backstop job catches the ones the webhooks miss, and USDC gets forwarded into Hyperliquid's bridge. Wrong-token or wrong-chain deposits are swapped or bridged through Relay instead of getting stranded.",
      "I also wrote the team's MCP server: 28 read-only tools over users, deposits, withdrawals, follows, copy tasks, trades and revenue, served statelessly over Streamable HTTP with OAuth discovery, so anyone on the team can ask Claude about live platform data.",
    ],
    stats: [
      { value: "2,200+", label: "New users in 8 weeks" },
      { value: "47k+", label: "Trades in 8 weeks" },
      { value: "$45M+", label: "Trading volume" },
      { value: "500+", label: "Traders copying strategies" },
    ],
    statsNote: `8-week figures: ${STATS_WINDOW}. Volume and copy traders: all time.`,
    stack: [
      "Claude API",
      "Vercel AI SDK",
      "MCP",
      "Next.js 16",
      "TypeScript",
      ".NET 10",
      "SignalR",
      "PostgreSQL",
      "Supabase",
      "Hyperliquid",
      "Docker",
    ],
  },
  {
    id: "terminal",
    name: "BB Terminal",
    kind: "Research a token and trade it without leaving the chart.",
    image: terminal,
    href: "https://app.bbterminal.com/degen",
    hrefLabel: "bbterminal.com",
    summary:
      "A crypto trading terminal with live charts, holder and top-trader data, and in-app trading from custodial Solana and EVM wallets. I've worked on it since 2024, across the Next.js front end and the .NET backend.",
    features: [
      "On-chain trading straight from the chart. Each user gets custodial Solana and EVM trade wallets; a swap is built unsigned, held for 80 seconds while the user confirms, then signed and broadcast through Particle Network, and fills come back over SignalR. I built the trade panel around it, with the watchlist and trending pairs beside the order form and a deposit prompt when you buy with an empty wallet.",
      "Built out the token pages. On the backend I wired in CoinGecko token info, holder PnL, a megafilter screener and new chains like Robinhood and Stable. On the front end, TradingView charts that prefetch candles, reuse one widget as you move between tokens, and keep price and market cap in sync.",
      "Made token search fast by routing it through GeckoTerminal and batching DexScreener lookups. Slow providers now time out and fall back to cached pool info instead of hanging the page.",
      "Wrote the staff-only admin APIs for dashboard stats, trading activity and favorites, and wired the admin panel to them.",
    ],
    stats: [
      { value: "67", label: "Chains of token data" },
      { value: "25+", label: "Market data providers" },
      { value: "160+", label: "API endpoints" },
      { value: "12", label: "Backend microservices" },
    ],
    stack: ["Next.js", "TypeScript", "TradingView", "SignalR", ".NET", "PostgreSQL", "Particle Network", "Kubernetes"],
  },
  {
    id: "telos",
    name: "Telos Health",
    kind: "Remote patient monitoring for home health agencies.",
    period: "Aug 2023 – Jan 2024",
    image: telo,
    href: "https://teloshs.com/",
    hrefLabel: "teloshs.com",
    summary:
      "Telos lets Texas home health agencies monitor patients between visits and get reimbursed by Medicaid for it. I was a front-end engineer on the platform.",
    built: [
      "Worked across all three portals: the agency portal for home health admins, the staff portal Telos uses to onboard patients, and the clinician app nurses check between visits.",
      "Built the patient intake flow (import, pending, queued, active) with approval and activation steps and decline reasons.",
      "Rebuilt the clinician app around collapsible patient cards with search, and made it work on a phone.",
      "Standardized the data tables and filters across the portals, and added care team and permissions management.",
    ],
    stats: [
      { value: "20,000+", label: "Patients served" },
      { value: "3", label: "Portals" },
    ],
    stack: ["JavaScript", "Lit", "Tabulator", "Directus", "Node.js", "PostgreSQL"],
  },
];

// Smaller AI builds. The Calvis AI eval harness was built onsite with their CTO; the repo is
// private, so it links to their site rather than the code.
export type AiBuild = {
  name: string;
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
    kind: "Proves a prompt change is safe before it ships.",
    period: "2026",
    image: calvis,
    href: "https://calvis.com/",
    hrefLabel: "calvis.com",
    summary:
      "Calvis runs an AI copilot for security guards. Working onsite with their CTO, I built the eval harness that decides whether a prompt change ships, by replaying real shifts against the old and new prompt on the same model.",
    points: [
      "The dataset is recorded guard shifts, replayed turn by turn and as full shifts. A recorded tool result is served only on an exact match of tool and input, so a changed prompt can't borrow the old run's answers.",
      "Every change names what must improve, what must stay true and what must never happen, scored on behavior and tool calls rather than prose, over three runs. One edit took claim verification from 67–75% to 100% without losing a reply or an escalation.",
      "It fixes itself. Point it at a shift and it finds what the copilot got wrong, writes a one-file prompt fix, and keeps it only if every safety check still passes. A human just approves the merge.",
    ],
    stack: ["Python", "OpenAI API", "Claude API", "pytest", "GitHub Actions"],
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
      "Built for BizScout: a live API monitor with a Claude analyst inside. Ask it why latency spiked, and it writes its own incident report when response times double.",
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
    proof: "TraderX, BizScout",
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
    items: ["Claude Code", "Cursor", "Codex", "agents in the loop on every change"],
  },
  { label: "Languages", items: ["TypeScript", "C#", "Python", "SQL"] },
  {
    label: "Product engineering",
    items: ["React", "Next.js", "Tailwind", ".NET / ASP.NET Core", "Node.js", "SignalR", "background workers"],
  },
  {
    label: "Data and infra",
    items: ["PostgreSQL", "Supabase", "Redis", "Docker", "Kubernetes", "GitHub Actions", "Vercel", "Cloudflare", "AWS", "Azure", "GCP"],
  },
];

export const education = {
  degree: "B.S. Information & Communications Technology",
  focus: "Cyber Defense",
};
