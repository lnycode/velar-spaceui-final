import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  emv: {
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
  },
};

export default nextConfig;
