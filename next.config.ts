import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: false,
  images:{
    unoptimized:false
  }
};

export default nextConfig;