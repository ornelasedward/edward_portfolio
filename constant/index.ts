import {
  chertNode,
  eliasPortfolio,
  kahot,
  protectX,
  BB1,
  BB2,
  TwitchClone,
} from "@/assets";

const navLinksData = [
  {
    lebel: "home",
    href: "/",
  },
  {
    lebel: "work",
    href: "/projects",
  },
  {
    lebel: "about-me",
    href: "/about-me",
  },
  {
    lebel: "contacts",
    href: "/contact",
  },
];

// project

const projectsData = {
  complete: [
    {
      name: "Logo Forge",
      tools: ["GPT-4", "NextJS", "Postgres", "Prisma", "TailwindCSS", "Node.js", "Stripe"],
      features_iamge: BB1,
      description:
        "Frontend with subscription authenticator for premium newsletter",
      liveLink: "https://www.becausebitcoin.com/",
      github: "https://github.com/MiredWebServices/BecauseBitcoin",
    },
    {
      name: "Because Bitcoin Landing Page",
      tools: ["HTML", "CSS", "Javascript", "TypeScript"],
      features_iamge: BB1,
      description:
        "Frontend with subscription authenticator for premium newsletter",
      liveLink: "https://www.becausebitcoin.com/",
      github: "https://github.com/MiredWebServices/BecauseBitcoin",
    },
    {
      name: "Because Bitcoin Academy",
      tools: ["React", "NextJS", "Node.js", "SanityCMS"],
      features_iamge: BB2,
      description:
        "Backend course portal with Stripe paywall, using Vimeo and SanityCMS for seamless content management",
      liveLink: "https://www.becausebitcoin.com/academy",
      github: "https://github.com/MiredWebServices/BecauseBitcoin",
    },
    {
      name: "Twitch Clone",
      tools: ["JavaScript", "TailwindCSS", "NextJS", "RestAPI's"],
      features_iamge: TwitchClone,
      description: "Interactice twitch Clone",
      liveLink: "https://twitch-clone-fawn.vercel.app",
      github: "https://github.com/ornelasedward/twitch_clone",
    },
    // {
    //   name: "Daizy AI",
    //   tools: ["HTML", "CSS", "Express", "Node.js"],
    //   features_iamge: kahot,
    //   description: "Get answers to your kahoot quiz",
    //   liveLink: "/",
    //   github: "",
    // },
    // {
    //   name: "Portfolio",
    //   tools: ["Vue", "TS", "Less"],
    //   features_iamge: eliasPortfolio,
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
