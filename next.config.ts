import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old multi-page site had these routes; everything now lives on the home page.
  async redirects() {
    return [
      { source: "/projects", destination: "/#work", permanent: true },
      { source: "/about-me", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
