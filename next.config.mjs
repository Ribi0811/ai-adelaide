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
      // Design previews (v2 Apple / v3 cinema / v4 One Day) — v4 promoted to
      // the homepage on 2026-07-07; preview URLs collapse into /.
      { source: "/v2", destination: "/", permanent: true },
      { source: "/v3", destination: "/", permanent: true },
      { source: "/v4", destination: "/", permanent: true },
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
        // Fixed 2026-07: was incorrectly pointing builders at the retail-shops
        // page, then temporarily at the tradie bundle. Phase 5.3 shipped a
        // dedicated /websites-for-builders-adelaide page — point there now.
        source: "/ai-for-builders-adelaide",
        destination: "/websites-for-builders-adelaide",
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
      // Tier 11 — Phase 2 cannibal-cluster consolidation (SEO audit 2026-07).
      // Answering/receptionist cluster: 11 live pages down to 6 distinct
      // intents. Unique content ported to survivors before adding these.
      {
        source: "/tools/ai-receptionist-adelaide",
        destination: "/ai-receptionist-adelaide",
        permanent: true,
      },
      {
        source: "/missed-call-service",
        destination: "/missed-call-answering-service-adelaide",
        permanent: true,
      },
      {
        source: "/after-hours-answering",
        destination: "/after-hours-answering-adelaide",
        permanent: true,
      },
      {
        source: "/24-7-answering-service-adelaide",
        destination: "/answering-service-adelaide",
        permanent: true,
      },
      // SEO cluster: 3 pages down to 2 (local-seo-adelaide survives as the
      // distinct "local seo" modifier; seo-services-adelaide duplicated /seo).
      {
        source: "/seo-services-adelaide",
        destination: "/seo",
        permanent: true,
      },
      // Tier 10 — no route exists for this slug but it has appeared in live
      // Google SERPs (indexed before this repo's route history). Redirect to
      // the closest surviving equivalent rather than let it 404.
      {
        source: "/ai-receptionist-for-medical-practices-adelaide",
        destination: "/ai-receptionist-adelaide",
        permanent: true,
      },
      // Tier 9 — Phase 5.2: the tradie SEO guide was consolidated from the
      // /blog/adelaide-seo-for-tradies post into the dedicated landing page
      // /seo-for-tradies-adelaide. The blog slug itself now redirects there,
      // and every URL variant below points straight at the landing page
      // (not at the blog slug) to keep every hop a single redirect.
      {
        source: "/blog/adelaide-seo-for-tradies",
        destination: "/seo-for-tradies-adelaide",
        permanent: true,
      },
      {
        source: "/blog/seo-for-tradies-adelaide",
        destination: "/seo-for-tradies-adelaide",
        permanent: true,
      },
      {
        source: "/blog/tradies-seo-adelaide",
        destination: "/seo-for-tradies-adelaide",
        permanent: true,
      },
      {
        source: "/blog/seo-adelaide-tradies",
        destination: "/seo-for-tradies-adelaide",
        permanent: true,
      },
      {
        source: "/blog/adelaide-seo-tradies",
        destination: "/seo-for-tradies-adelaide",
        permanent: true,
      },
      {
        source: "/blog/seo-for-adelaide-tradies",
        destination: "/seo-for-tradies-adelaide",
        permanent: true,
      },
      {
        source: "/blog/adelaide-tradies-seo",
        destination: "/seo-for-tradies-adelaide",
        permanent: true,
      },
      {
        source: "/blog/seo-tradies-adelaide",
        destination: "/seo-for-tradies-adelaide",
        permanent: true,
      },
      {
        source: "/blog/tradies-adelaide-seo",
        destination: "/seo-for-tradies-adelaide",
        permanent: true,
      },
      // Phase 8 punch list P1 — 32 in-body blog links pointed at /services/*
      // paths that were never real routes (only /services itself exists as
      // an index page). Links themselves were fixed directly in
      // data/posts.ts; these are safety nets in case any of the old paths
      // were crawled or bookmarked externally.
      {
        source: "/services/automation",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      {
        source: "/services/ai-receptionist",
        destination: "/ai-receptionist-adelaide",
        permanent: true,
      },
      {
        source: "/services/seo",
        destination: "/seo",
        permanent: true,
      },
      // Tier 12 — GSC dead-URL sweep (2026-07-11). Every URL below appeared
      // in GSC page data within the last 6 months and returned a live 404.
      // Sources: fresh GSC API pull (sc-domain:aiadelaide.com.au, page
      // dimension, 180d) + curl verification of all 163 known URLs.
      // Destinations follow the established consolidation patterns:
      // ai-for-{trade} → websites-for-{trade} (or tradie bundle when no
      // dedicated page), automation-flavoured slugs → /ai-automation-adelaide,
      // ai-automation-{suburb} → /{suburb}, deleted blog posts → the money
      // page or live post that owns the topic now.
      {
        source: "/services/ai-automation",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      {
        source: "/ai-automation-burnside",
        destination: "/burnside",
        permanent: true,
      },
      {
        source: "/ai-automation-norwood",
        destination: "/norwood",
        permanent: true,
      },
      {
        source: "/ai-automation-prospect",
        destination: "/prospect",
        permanent: true,
      },
      {
        source: "/ai-for-allied-health-adelaide",
        destination: "/websites-for-clinics-adelaide",
        permanent: true,
      },
      {
        source: "/ai-for-dentists-adelaide",
        destination: "/websites-for-clinics-adelaide",
        permanent: true,
      },
      {
        source: "/ai-for-cafes-adelaide",
        destination: "/websites-for-cafes-adelaide",
        permanent: true,
      },
      {
        source: "/ai-for-hvac-adelaide",
        destination: "/tradie-website-bundle",
        permanent: true,
      },
      {
        source: "/ai-for-cleaners-adelaide",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      {
        source: "/ai-job-scheduling-adelaide",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      {
        source: "/quote-follow-up-adelaide",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      {
        source: "/service-business-automation",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      // Deleted blog posts (Tier 12 continued) — each points at the live
      // page that now owns the topic, never at another redirect.
      {
        source: "/blog/ai-for-tradies-adelaide",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      {
        source: "/blog/ai-phone-answering-service-adelaide",
        destination: "/answering-service-adelaide",
        permanent: true,
      },
      {
        source: "/blog/local-seo-adelaide-tradies-what-to-pay",
        destination: "/seo-for-tradies-adelaide",
        permanent: true,
      },
      {
        source: "/blog/ai-receptionist-24-7-adelaide",
        destination: "/ai-receptionist-adelaide",
        permanent: true,
      },
      {
        source: "/blog/ai-for-adelaide-real-estate-agents",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      {
        source: "/blog/real-cost-missed-calls-adelaide-tradie",
        destination: "/blog/how-much-does-a-missed-call-cost-your-business-adelaide",
        permanent: true,
      },
      {
        source: "/blog/how-much-tradie-website-cost-adelaide-2026",
        destination: "/website-cost-adelaide",
        permanent: true,
      },
      {
        source: "/blog/ai-for-allied-health-adelaide",
        destination: "/websites-for-clinics-adelaide",
        permanent: true,
      },
      {
        source: "/blog/ai-for-dental-practices-adelaide",
        destination: "/websites-for-clinics-adelaide",
        permanent: true,
      },
      {
        source: "/blog/why-tradie-website-needs-to-sell",
        destination: "/tradie-website-bundle",
        permanent: true,
      },
      {
        source: "/blog/quote-follow-up-automation-adelaide",
        destination: "/ai-automation-adelaide",
        permanent: true,
      },
      {
        source: "/blog/ai-for-cafes-adelaide",
        destination: "/websites-for-cafes-adelaide",
        permanent: true,
      },
      {
        source: "/blog/ai-for-roofers-adelaide",
        destination: "/tradie-website-bundle",
        permanent: true,
      },
      {
        source: "/blog/ai-powered-website-vs-traditional-website-australian-trades",
        destination: "/website-design-adelaide",
        permanent: true,
      },
      {
        source: "/blog/invoice-chasing-adelaide-tradies",
        destination: "/blog/admin-tasks-killing-adelaide-tradies",
        permanent: true,
      },
      {
        source: "/blog/adelaide-seo-for-cafes-and-restaurants",
        destination: "/local-seo-adelaide",
        permanent: true,
      },
      {
        source: "/blog/tradie-website-quote-builder-adelaide",
        destination: "/tradie-website-bundle",
        permanent: true,
      },
      {
        source: "/blog/ai-for-accountants-adelaide",
        destination: "/bookkeeping-adelaide",
        permanent: true,
      },
      {
        source: "/blog/ai-for-adelaide-retail-shops",
        destination: "/blog/ai-automation-for-adelaide-retail-shops",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
