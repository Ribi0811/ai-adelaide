/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["ivans-mac-mini.local", "*.local"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
