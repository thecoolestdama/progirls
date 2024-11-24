import type { NextConfig } from "next";

const basePath = process.env.BASE_PATH ?? undefined;
if (!basePath) console.warn("BASE_PATH env is not defined");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  publicRuntimeConfig: {
    basePath,
  },
};

export default nextConfig;
