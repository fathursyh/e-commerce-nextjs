import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn0-production-images-kly.akamaized.net",
      },
    ],
  },
};

export default nextConfig;
