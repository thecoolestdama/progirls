import type { NextConfig } from "next";

const basePath = process.env.BASE_PATH ?? undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
};

export default nextConfig;
