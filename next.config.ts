import type { NextConfig } from "nexgt";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
  },
};

export default nextConfig;
