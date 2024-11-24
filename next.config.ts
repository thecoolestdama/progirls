import type { NextConfig } from "next";

const basePath = process.env.BASE_PATH ?? undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  publicRuntimeConfig: {
    basePath,
  },
};

export default nextConfig;
