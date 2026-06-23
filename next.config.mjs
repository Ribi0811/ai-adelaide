/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["ivans-mac-mini.local", "*.local"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Old /ai-for-X pages directly conflict with new /websites-for-X pages.
      // Redirect to the new positioning equivalents.
      {
        source: "/ai-for-tradies",
        destination: "/tradie-website-bundle",
        permanent: true,
      },
      {
        source: "/ai-for-physiotherapists-adelaide",
        destination: "/websites-for-clinics-adelaide",
        permanent: true,
      },
      {
        source: "/ai-for-retail-shops-adelaide",
        destination: "/websites-for-retail-shops-adelaide",
        permanent: true,
      },
      // Old AI-receptionist-focused pages — fold into the AI Automation offering.
      {
        source: "/ai-automation-for-tradies-adelaide",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      {
        source: "/ai-automation-for-clinics-adelaide",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      // Legacy variations and related redirects.
      {
        source: "/adelaide",
        destination: "/services",
        permanent: true,
      },
      // Tier 7 — consolidate /ai-for-X onto /websites-for-X (web dev focus)
      {
        source: "/ai-for-plumbers-adelaide",
        destination: "/websites-for-plumbers-adelaide",
        permanent: true,
      },
      {
        source: "/ai-for-electricians-adelaide",
        destination: "/websites-for-electricians-adelaide",
        permanent: true,
      },
      {
        source: "/ai-for-builders-adelaide",
        destination: "/websites-for-retail-shops-adelaide",
        permanent: true,
      },
      {
        source: "/ai-for-allied-health",
        destination: "/websites-for-clinics-adelaide",
        permanent: true,
      },
      // Tier 7 — consolidate marketing cluster onto /seo + /ai-marketing-adelaide
      {
        source: "/marketing-adelaide",
        destination: "/seo",
        permanent: true,
      },
      {
        source: "/marketing-agencies-adelaide",
        destination: "/ai-marketing-adelaide",
        permanent: true,
      },
      {
        source: "/marketing-consulting-adelaide",
        destination: "/ai-marketing-adelaide",
        permanent: true,
      },
      {
        source: "/digital-marketing-adelaide",
        destination: "/ai-marketing-adelaide",
        permanent: true,
      },
      {
        source: "/ai-marketing-automation",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
