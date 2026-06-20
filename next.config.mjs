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
        destination: "/website-design-adelaide",
        permanent: true,
      },
      {
        source: "/ai-for-allied-health",
        destination: "/websites-for-clinics-adelaide",
        permanent: true,
      },
      {
        source: "/ai-for-tradies",
        destination: "/services",
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
        source: "/ai-office-worker-adelaide",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      {
        source: "/missed-call-service",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
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
        source: "/after-hours-answering",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      {
        source: "/adelaide",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/tradie-website-bundle",
        destination: "/website-design-adelaide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
