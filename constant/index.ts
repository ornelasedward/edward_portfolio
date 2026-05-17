import {
  chertNode,
  eliasPortfolio,
  kahot,
  protectX,
  traderx,
  BB2,
  logoForge,
  TwitchClone,
  terminalImage,
  terminalImage2,
  telo,
  bbAcademy,
} from "@/assets";

const navLinksData = [
  {
    label: "home",
    href: "/#hero",
  },
  {
    label: "work",
    href: "/#things-i-shipped",
  },
  {
    label: "about-me",
    href: "/#about-me",
  },
  {
    label: "contacts",
    href: "/contact",
  },
];

// project

const credentialsData = [
  {
    label: "Role",
    value: "Full Stack Engineer · Founding Builder",
  },
  {
    label: "Built in",
    value: "Healthcare · Fintech · Crypto ·\u00a0Creator\u00a0economy",
  },
  {
    label: "Favorite AI stack",
    value: "Cursor · Codex · Claude",
  },
  {
    label: "Education",
    value: "B.S. Information & Communications Technology · Cyber Defense",
  },
];

const aboutContent = {
  label: "01 — about-me",
  paragraphs: [
    "Based in Austin, I build products end-to-end across AI, crypto, healthcare, and education. Over the last few years I've shipped trading platforms, analytics systems, internal tools, CMS platforms, and automations—working directly with founders and owning implementation from idea to launch.",
    "I like ambiguity, shipping fast, and turning rough concepts into working products. Most of my recent work has involved AI-assisted development, automation systems, and taking products from 0→1.",
    "I hold a B.S. in Information and Communications Technology with a focus in Cyber Defense, and I bring a bias for shipping, strong ownership, and building systems that people actually use.",
  ],
  detailSections: [
    [
      { label: "Now", value: "Full Stack Engineer · Founding Builder" },
      { label: "Since", value: "Shipping products independently" },
      { label: "Based in", value: "Austin, Texas" },
    ],
    [
      { label: "Built in", value: "Healthcare · Fintech · Crypto ·\u00a0Creator\u00a0economy" },
      { label: "Stack", value: "Cursor · Codex · Claude · Next.js · .NET" },
    ],
    [
      { label: "Edu", value: "B.S. Information & Communications Technology · Cyber Defense" },
      { label: "Also", value: "AI-native workflows · Live in production" },
    ],
  ],
};

const contactContent = {
  headline: {
    before: "Let's build ",
    accent: "software",
    after: " that actually ships.",
  },
  links: [
    {
      label: "Email",
      value: "ornelasedward@rocketmail.com",
      href: "mailto:ornelasedward@rocketmail.com",
    },
    {
      label: "Phone",
      value: "575-513-6238",
      href: "tel:+15755136238",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/edward-ornelas",
      href: "https://www.linkedin.com/in/edward-ornelas-681b52131/",
    },
  ],
};

const techStackContent = {
  tag: "// stack",
  title: "What I build with",
  subtitle: "The tools I reach for to take products from a blank repo to live in production.",
  categories: [
    {
      icon: "{ }",
      label: "Languages",
      items: ["Python", "C#", "TypeScript", "JavaScript", "SQL"],
    },
    {
      icon: "</>",
      label: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML / CSS"],
    },
    {
      icon: "⟨⟩",
      label: "Backend",
      items: [".NET", "Node.js", "Python", "REST APIs", "Microservices"],
    },
    {
      icon: "DB",
      label: "Data",
      items: ["PostgreSQL", "Redis", "Firebase", "BigQuery"],
    },
    {
      icon: "☁",
      label: "Cloud & Infra",
      items: ["Azure", "AWS", "GCP", "Docker", "Linux", "CI/CD"],
    },
    {
      icon: "🔒",
      label: "Security",
      items: [
        "Auth systems",
        "Encryption",
        "Cloudflare WAF",
        "Rate limiting",
        "Sentry",
        "Bot detection",
      ],
    },
  ],
};

const aiToolkitContent = {
  tag: "// ai-toolkit",
  title: "AI-native toolkit",
  subtitle: "The tools that shorten the distance between idea and shipped product.",
  tools: [
    {
      num: "01",
      name: "Cursor",
      role: "Primary IDE",
      description:
        "Where the code actually gets written. Pair-programming with frontier models in the loop turns half-day tasks into half-hour tasks.",
    },
    {
      num: "02",
      name: "Codex",
      role: "Code generation",
      description:
        "Reach-for-it tool for scaffolding, refactors, and turning a paragraph of intent into working code in a single pass.",
    },
    {
      num: "03",
      name: "Claude",
      role: "Reasoning & product thinking",
      description:
        "Architecture decisions, gnarly debugging, and the kind of long-context reasoning that turns rough specs into clean systems.",
    },
    {
      num: "04",
      name: "Anthropic API",
      role: "In-product AI",
      description:
        "The layer I ship AI features on. RAG systems, agentic workflows, and LLM pipelines integrated directly into production products.",
    },
  ],
};

const shippedProjects = [
  {
    name: "BB TraderX",
    tags: ["AI Trading", "Next.js", ".NET", "Agentic Workflows"],
    paragraphs: [
      "AI-powered trading automation platform built end-to-end with strategy generation, Hyperliquid integrations, and agentic development workflows.",
      "Shipped to 205+ users in the first 1.5 weeks with 120+ strategies published and 140+ strategy followers.",
    ],
    stats: [
      { value: "205+", label: "Users in 1.5 weeks" },
      { value: "120+", label: "Strategies published" },
    ],
    features_image: traderx,
    liveLink: "https://www.bbtraderx.com/",
    linkSublabel: "Visit the platform",
  },
  {
    name: "BB Terminal",
    tags: ["Crypto Analytics", "Next.js", "PostgreSQL", "Real-time Data"],
    paragraphs: [
      "All-in-one crypto intelligence platform tracking 50+ assets with pro trading indicators, portfolio tools, and real-time market data.",
      "Scaled to 275k+ monthly views and $150k/mo in business impact after shipping from zero.",
    ],
    stats: [
      { value: "275k+", label: "Monthly views" },
      { value: "$150k", label: "Mo business impact" },
    ],
    features_image: terminalImage2,
    liveLink: "https://app.bbterminal.com/home",
    linkSublabel: "Visit the platform",
  },
  {
    name: "Telos Health",
    tags: ["Healthcare", "HIPAA", "Angular", "NestJS"],
    paragraphs: [
      "Modular healthcare platform for clinicians, admins, and patients—HIPAA-compliant infrastructure with responsive frontends and secure APIs.",
      "Shipped across 3 portals serving 20,000+ patients for home health agencies.",
    ],
    stats: [
      { value: "20,000+", label: "Patients served" },
      { value: "3", label: "Portals shipped" },
    ],
    features_image: telo,
    liveLink: "https://www.linkedin.com/company/telos-health-solutions/posts/?feedView=images",
    linkSublabel: "View company",
  },
];

const projectsData = {
  complete: [
    {
      name: "BB TraderX",
      tools: ["Next.js", ".NET", "TypeScript", "Hyperliquid APIs", "AI Agents"],
      features_image: traderx,
      description:
        "AI-powered trading automation platform—205+ users in the first 1.5 weeks, 120+ strategies published, 140+ strategy followers. Built end-to-end with agentic development workflows, strategy generation, and Hyperliquid integrations.",
      liveLink: "https://www.bbtraderx.com/",
      github: "",
    },
    {
      name: "BB Terminal",
      tools: ["Next.js", "React", "TypeScript", "Firebase", "PostgreSQL", "Docker", "Azure"],
      features_image: terminalImage2,
      description:
        "Crypto intelligence platform tracking 50+ assets with pro trading indicators, portfolio tools, and real-time market data. Shipped and scaled to 275k+ monthly views and $150k/mo business impact.",
      liveLink: "https://app.bbterminal.com/home",
      github: "",
    },
    {
      name: "Telos Health",
      tools: ["Angular", "NestJS", "PostgreSQL", "SCSS", "Docker", "Directus"],
      features_image: telo,
      description:
        "Modular healthcare platform for clinicians, admins, and patients—HIPAA-compliant infra, responsive frontends, and secure APIs. Shipped across 3 portals serving 20,000+ patients.",
      liveLink: "https://www.linkedin.com/company/telos-health-solutions/posts/?feedView=images",
      github: "",
    },
    {
      name: "BB Academy",
      tools: ["React", "Next.js", "Node.js", "SanityCMS", "Stripe", "Vimeo", "Google Cloud Functions", "Firebase"],
      features_image: bbAcademy,
      description:
        "Course platform + CMS that created a new revenue stream—checkout, modular course management, and self-serve publishing built end-to-end with Stripe and Sanity.",
      liveLink: "https://becausebitcoin.com/academy",
      github: "",

    },
    // {
    //   name: "Daizy AI",
    //   tools: ["HTML", "CSS", "Express", "Node.js"],
    //   features_image: kahot,
    //   description: "Get answers to your kahoot quiz",
    //   liveLink: "/",
    //   github: "",
    // },
    // {
    //   name: "Portfolio",
    //   tools: ["Vue", "TS", "Less"],
    //   features_image: eliasPortfolio,
    //   description: "You’re using it rn",
    //   liveLink: "/",
    //   github: "",
    // },
  ],
  smallProject: [
    {
      name: "profitwise blog",
      tools: ["Sanity CMS", "TS", "JS", "API"],

      description:
        "Ultizing NextJS and Sanity to create a Dynamically SSR blog",
      liveLink: "https://profitwise.blog",
    },
    {
      name: "Daizy AI",
      tools: ["GPT-4 API", "TS", "T3 Stack"],

      description:
        "A Saas inspired landing page with integrations with Open AI;s API",
      liveLink: "https://daizyai.com",
    },
    {
      name: "Mired",
      tools: ["Figma", "NextJS", "JS", "Mail API"],

      description: "From Figma to Development, Mired a Web design Site",
      liveLink: "https://mired.io",
    },
    // {
    //   name: "CSS expirementse",
    //   tools: ["Figma"],

    //   description: "Collection of my different little projects in css",
    //   liveLink: "/",
    // },
    // {
    //   name: "Web Dev nvim config",
    //   tools: ["Lua", "NeoVim"],

    //   description: "Recreation of the UI of Twitch streaming platform.",
    //   liveLink: "/",
    // },
    // {
    //   name: "Crash protect website",
    //   tools: ["Figma"],

    //   description:
    //     "Figma template for website about anti-raid, anti-crash discord bot",
    //   liveLink: "/",
    // },
  ],
};

export {
  navLinksData,
  credentialsData,
  aboutContent,
  contactContent,
  shippedProjects,
  projectsData,
  techStackContent,
  aiToolkitContent,
};
