import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable faster builds
  images: {
    domains: ['your-image-source.com'], // Allow external images if needed
  },
  eslint: {
    ignoreDuringBuilds: false, // true only if you want to skip lint errors during build
  }
};

export default nextConfig;
