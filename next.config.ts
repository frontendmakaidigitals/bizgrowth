import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: false,
  serverExternalPackages: [
    "@prisma/client",
    "app/generated/prisma",
  ],
};

export default nextConfig;