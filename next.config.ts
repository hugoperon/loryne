import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/loryne" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/loryne/" : "",
};

export default nextConfig;
