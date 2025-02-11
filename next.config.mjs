/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during production builds
  },
  images: {
    unoptimized: true, // Disables built-in image optimization
  },
};

export default nextConfig;
