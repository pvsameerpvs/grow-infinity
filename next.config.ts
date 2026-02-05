import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Vercel handles Next.js apps natively - no static export needed
  trailingSlash: true,
};

export default nextConfig;

