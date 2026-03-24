import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Enable static export
  output: 'export',
  // Next.js static exports require unoptimized images 
  // because the Image Optimization API (server-side) won't exist
  images: {
    unoptimized: true,
  },
};

export default nextConfig;