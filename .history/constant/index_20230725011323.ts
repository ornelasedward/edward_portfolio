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
    lebel: "works",
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
      name: "Because Bitcoin Landing Page",
      tools: ["HTML", "CSS", "Javascript", "TypeScript"],
      features_iamge: BB1,
      describetion:
        "Frontend with subscription authenticator for premium newsletter",
      liveLink: "https://www.becausebitcoin.com/",
      github: "https://github.com/MiredWebServices/BecauseBitcoin",
    },
    {
      name: "Because Bitcoin Academy",
      tools: ["React", "NextJS", "Node.js", "SanityCMS"],
      features_iamge: BB2,
      describetion:
        "Backend course portal with Stripe paywall, using Vimeo and SanityCMS for seamless content management",
      liveLink: "https://www.becausebitcoin.com/academy",
      github: "https://github.com/MiredWebServices/BecauseBitcoin",
    },
    {
      name: "Twitch Clone",
      tools: ["JavaScript", "TailwindCSS", "NextJS", "RestAPI's"],
      features_iamge: TwitchClone,
      describetion: "Interactice twitch Clone",
      liveLink: "https://twitch-clone-fawn.vercel.app",
      github: "https://github.com/ornelasedward/twitch_clone",
    },
    // {
    //   name: "Daizy AI",
    //   tools: ["HTML", "CSS", "Express", "Node.js"],
    //   features_iamge: kahot,
    //   describetion: "Get answers to your kahoot quiz",
    //   liveLink: "/",
    //   github: "",
    // },
    // {
    //   name: "Portfolio",
    //   tools: ["Vue", "TS", "Less"],
    //   features_iamge: eliasPortfolio,
    //   describetion: "You’re using it rn",
    //   liveLink: "/",
    //   github: "",
    // },
  ],
  smallProject: [
    {
      name: "Twitch Project",
      tools: ["Discord.js", "TS", "JS"],

      describetion: "Recreation of the UI of Twitch streaming platform.",
      liveLink: "/",
    },
    {
      name: "My blog",
      tools: ["Vue", "CSS", "JS"],

      describetion: "Front-end of my future blog website written in vue",
      liveLink: "/",
    },
    {
      name: "Chess pro",
      tools: ["Figma"],

      describetion:
        "Figma landing page about service for viewing chess tournaments",
      liveLink: "/",
    },
    {
      name: "CSS expirementse",
      tools: ["Figma"],

      describetion: "Collection of my different little projects in css",
      liveLink: "/",
    },
    {
      name: "Web Dev nvim config",
      tools: ["Lua", "NeoVim"],

      describetion: "Recreation of the UI of Twitch streaming platform.",
      liveLink: "/",
    },
    {
      name: "Crash protect website",
      tools: ["Figma"],

      describetion:
        "Figma template for website about anti-raid, anti-crash discord bot",
      liveLink: "/",
    },
  ],
};

export { navLinksData, projectsData };
