
import type { NextConfig } from "next";

const projectRoot = process.cwd();

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  outputFileTracingRoot: projectRoot,

  turbopack: {
    root: projectRoot,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
