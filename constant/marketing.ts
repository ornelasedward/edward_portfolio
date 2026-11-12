// Content for marketing.edward-ornelas.com (served from /marketing). Every number here mirrors the
// marketing resume (Edward_Ornelas_Resume_Marketing) and the main page. Change them together.

export const marketingProfile = {
  title: "Marketing Engineer",
  headline: "I build the product and the engine that brings people to it.",
  summary:
    "I've been making content for more than ten years, from editing videos for creators like Ryan Trahan to growing BecauseBitcoin's YouTube channel from under 1,000 to over 22,000 subscribers. As the lead engineer at BecauseBitcoin I also run a lot of our growth: partner campaigns, onboarding, newsletters, and the AI automations that let a small team publish like a big one.",
  focus: [
    "Growth systems",
    "Partner campaigns",
    "Onboarding funnels",
    "Video & content",
    "AI content ops",
    "Analytics & CRM",
  ],
};

export const marketingStats = [
  { value: "22K+", label: "YouTube subscribers grown" },
  { value: "4,500+", label: "Users onboarded in a month" },
  { value: "4x+", label: "Revenue after onboarding rebuild" },
  { value: "$0 → $300K", label: "Monthly company revenue" },
];

export type CaseStudy = {
  id: string;
  label: string;
  title: string;
  context: string;
  stats?: { value: string; label: string }[];
  points: string[];
  href?: string;
  hrefLabel?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "onboarding",
    label: "Growth",
    title: "BB TraderX onboarding rebuild",
    context:
      "TraderX is an automated trading strategy marketplace. At launch, getting started meant connecting an outside account, approving an agent and depositing somewhere else. People dropped off at every step.",
    stats: [
      { value: "4,500+", label: "Users in about a month" },
      { value: "$17M+", label: "Trading volume" },
      { value: "4x+", label: "Revenue" },
    ],
    points: [
      "Rebuilt signup into one managed flow, with a wallet created for each user and deposits routed to the right place behind the scenes.",
      "Took the platform from about 300 to over 4,000 users and $50M in trading volume.",
      "Kept the hard parts invisible, so creating, following and funding a strategy feels like a few clicks.",
    ],
    href: "https://www.bbtraderx.com/",
    hrefLabel: "bbtraderx.com",
  },
  {
    id: "partners",
    label: "Partnerships",
    title: "Partner campaigns, end to end",
    context:
      "I run TraderX's partner campaigns with Layer3, Austin Hill and Zach Humphreys, from the first landing page to the numbers we report back.",
    points: [
      "Built a custom metrics API for each partner that tracks onboarding, quests, referrals, deposits and volume.",
      "Shipped the landing pages, signup and win-back emails, dashboards and the CRM behind every campaign.",
      "Every partner can see exactly where their users came from and what they did after signing up.",
    ],
  },
  {
    id: "content",
    label: "Content",
    title: "BecauseBitcoin's audience",
    context:
      "I joined BecauseBitcoin as the only developer when it had no revenue. Content and the products behind it grew the company to $300K a month.",
    stats: [
      { value: "22K+", label: "YouTube subscribers" },
      { value: "10,000+", label: "Registered readers" },
      { value: "9K+", label: "My own channel" },
    ],
    points: [
      "Grew the YouTube channel from under 1,000 to over 22,000 subscribers by curating, editing and publishing the content.",
      "Built BB Academy, with the sales pipeline and checkout behind its courses.",
      "Wrote and automated the newsletter, and built a news and analytics platform with over 10,000 registered readers.",
    ],
    href: "https://www.youtube.com/@EdwardOrnelas",
    hrefLabel: "My YouTube",
  },
  {
    id: "ai-ops",
    label: "AI content ops",
    title: "A small team that publishes like a big one",
    context:
      "I wrote BecauseBitcoin's AI strategy and built the automations behind it. A person always signs off before anything goes out.",
    points: [
      "A newsroom where one editor reviews around 20 AI-drafted articles a day and publishes the same day.",
      "A pipeline that turns daily recordings into a weekly recap for paid members.",
      "A read-only MCP server that lets our marketing team and leadership ask questions about live platform data through Claude.",
      "Used ElevenLabs for the voiceover on the TraderX launch trailer.",
    ],
  },
];

export const marketingBackground = [
  "Picked up my first video camera in 2013 and started making short films, then shot weddings for about two years.",
  "Edited videos for big creators like Ryan Trahan and Hoopin Life.",
  "Made crypto content from 2017 to 2020, which led to partnerships with projects where I led their funding rounds.",
  "Built WordPress sites for clients from 2016, including on-page SEO for a Dallas agency's local business clients.",
];

export const marketingToolkit: { label: string; items: string[] }[] = [
  { label: "Content", items: ["Video editing", "YouTube", "Newsletters", "Courses"] },
  {
    label: "Growth",
    items: ["Landing pages", "Signup and win-back email", "Referrals and quests", "CRM", "Dashboards", "SEO"],
  },
  { label: "AI", items: ["Claude", "MCP servers", "AI drafting pipelines", "ElevenLabs", "Cloudflare Workers"] },
  { label: "Build", items: ["Next.js", "React", "TypeScript", "PostgreSQL", "Stripe"] },
];
