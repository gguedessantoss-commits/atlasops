import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@atlasops/core", "@atlasops/ui"],
  typedRoutes: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
