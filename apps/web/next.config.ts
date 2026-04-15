import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const appDirectory = fileURLToPath(new URL("./", import.meta.url));
const workspaceRoot = path.resolve(appDirectory, "../..");

const nextConfig: NextConfig = {
  outputFileTracingRoot: workspaceRoot,
  transpilePackages: ["@atlasops/core", "@atlasops/ui"],
  turbopack: {
    root: workspaceRoot,
  },
  typedRoutes: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
