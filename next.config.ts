import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix Windows / monorepo path issues
  outputFileTracingRoot: __dirname,

  turbopack: {
    root: __dirname,
  },

  typescript: {
    // Avoid build crashes during development (can disable later)
    ignoreBuildErrors: true,
  },

  // ✅ Allow external devices (mobile / LAN / WSL)
  allowedDevOrigins: [
    "172.28.3.137",   // your current IP
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
