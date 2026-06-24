/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["ivans-mac-mini.local", "*.local"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    // Tier 9E — security headers (audit 2026-06-25 found only HSTS present).
    // HSTS comes from Vercel default config. We add the other 4 standard
    // security headers for site trust + ranking signal.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
          },
        ],
      },
    ];
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
      // Tier 9 — restore /blog/adelaide-seo-for-tradies (Google had it indexed)
      // and consolidate URL variants that may also be linked from the web.
      {
        source: "/blog/seo-for-tradies-adelaide",
        destination: "/blog/adelaide-seo-for-tradies",
        permanent: true,
      },
      {
        source: "/blog/tradies-seo-adelaide",
        destination: "/blog/adelaide-seo-for-tradies",
        permanent: true,
      },
      {
        source: "/blog/seo-adelaide-tradies",
        destination: "/blog/adelaide-seo-for-tradies",
        permanent: true,
      },
      {
        source: "/blog/adelaide-seo-tradies",
        destination: "/blog/adelaide-seo-for-tradies",
        permanent: true,
      },
      {
        source: "/blog/seo-for-adelaide-tradies",
        destination: "/blog/adelaide-seo-for-tradies",
        permanent: true,
      },
      {
        source: "/blog/adelaide-tradies-seo",
        destination: "/blog/adelaide-seo-for-tradies",
        permanent: true,
      },
      {
        source: "/blog/seo-tradies-adelaide",
        destination: "/blog/adelaide-seo-for-tradies",
        permanent: true,
      },
      {
        source: "/blog/tradies-adelaide-seo",
        destination: "/blog/adelaide-seo-for-tradies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
