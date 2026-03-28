import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Only include the IP if it's defined in your local environment
  allowedDevOrigins: process.env.ALLOWED_DEV_IP ? [process.env.ALLOWED_DEV_IP] : [],
};

export default nextConfig;
