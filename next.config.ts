import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        // Allow Google Drive direct image URLs (uc?export=view)
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        // Allow lh3.googleusercontent.com (Google's image CDN, used by Drive)
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
