import {
  chertNode,
  eliasPortfolio,
  kahot,
  protectX,
  BB1,
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
    href: "/",
  },
  {
    label: "work",
    href: "/projects",
  },
  {
    label: "about-me",
    href: "/about-me",
  },
  {
    label: "contacts",
    href: "/contact",
  },
];

// project

const projectsData = {
  complete: [
    {
      name: "BB Terminal",
      tools: ["Next.js", "React", "TypeScript", "Firebase", "PostgreSQL", "Docker", "Azure"],
      features_image: terminalImage2,
      description:
        "All-in-one crypto analytics platform tracking 50+ assets with 20+ pro trading indicators, portfolio tools, and real-time market intelligence. I led a team of 6 as the Lead Software Engineer, architecting the entire platform and scaling it from 275,000+ monthly views and $150K/month in revenue.",
      liveLink: "https://app.bbterminal.com/home",
      github: "",
    },
  
    {
      name: "Telos Health",
      tools: ["Angular", "NestJS", "PostgreSQL", "SCSS", "Docker", "Directus"],
      features_image: telo,
      description:
        "Modular healthcare platform supporting clinicians, admins, and patients for home health agencies with HIPAA-compliant infrastructure. I built responsive frontend components and secure backend APIs, helping launch across 3 portals with 20,000+ patients and supporting investor demos through performance-optimized landing pages.",
      liveLink: "https://www.linkedin.com/company/telos-health-solutions/posts/?feedView=images",
      github: "",
    },
    {
      name: "BB Academy",
      tools: ["React", "Next.js", "Node.js", "SanityCMS", "Stripe", "Vimeo", "Google Cloud Functions", "Firebase"],
      features_image: bbAcademy,
      description:
        "Proprietary course and content platform for BecauseBitcoin, providing a seamless CMS-like experience for creating, selling, and managing educational content. I built the end-to-end academy experience, including checkout flows and modular course management, driving new revenue streams and enabling self-serve course publishing for the team.",
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

export { navLinksData, projectsData };
