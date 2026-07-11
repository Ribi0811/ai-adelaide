import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import suburbs from "@/data/suburbs.json";
import { posts } from "@/data/posts";

// Real per-route lastModified dates, seeded 2026-07-03 from git history
// (`git log -1 --format=%cs -- <file>`) as part of the SEO audit sitemap
// cleanup. Google de-prioritises crawl signals from sitemaps that claim
// every URL changed today — keep this map honest going forward: bump a
// route's date here when you meaningfully edit its content.
//
// Path (relative, no leading site URL) -> ISO date string.
const PAGE_DATES: Record<string, string> = {
  "/": "2026-07-07",
  "/website-pricing": "2026-06-23",
  "/website-design-adelaide": "2026-06-25",
  "/seo": "2026-06-25",
  "/seo-for-tradies-adelaide": "2026-07-04",
  "/services": "2026-06-25",
  "/contact": "2026-06-23",
  "/audit": "2026-06-23",
  "/website-cost-adelaide": "2026-06-23",
  "/seo-vs-google-ads-adelaide": "2026-06-25",
  "/websites-for-hairdressers-adelaide": "2026-06-23",
  "/websites-for-cafes-adelaide": "2026-06-23",
  "/websites-for-plumbers-adelaide": "2026-06-22",
  "/websites-for-electricians-adelaide": "2026-06-23",
  "/websites-for-clinics-adelaide": "2026-06-23",
  "/websites-for-beauty-salons-adelaide": "2026-06-23",
  "/websites-for-retail-shops-adelaide": "2026-06-23",
  "/websites-for-builders-adelaide": "2026-07-04",
  "/websites-for-landscapers-adelaide": "2026-07-04",
  "/websites-for-painters-adelaide": "2026-07-04",
  "/ai-automation-adelaide": "2026-06-25",
  "/ai-receptionist-adelaide": "2026-06-21",
  "/missed-call-text-back-adelaide": "2026-06-25",
  "/after-hours-answering-adelaide": "2026-06-22",
  "/missed-call-answering-service-adelaide": "2026-06-23",
  "/ai-receptionist-cost-adelaide": "2026-06-23",
  "/ai-automation-vs-hiring-staff-adelaide": "2026-06-23",
  "/ai-receptionist-vs-virtual-receptionist": "2026-06-23",
  "/tradie-website-bundle": "2026-06-25",
  "/ai-consulting-adelaide": "2026-06-20",
  "/ai-consulting-brisbane": "2026-06-20",
  "/ai-consulting-melbourne": "2026-06-20",
  "/ai-office-worker-adelaide": "2026-06-25",
  "/locations": "2026-06-23",
  "/local-seo-adelaide": "2026-07-11",
  "/automotive-seo-services": "2026-07-03",
  "/hotel-seo-services": "2026-07-11",
  // Added 2026-07-11 (Tier 12 content-gap fill: "ai seo adelaide" and
  // "aged care seo services" queries had impressions but no page).
  "/ai-seo-adelaide": "2026-07-11",
  "/aged-care-seo-services": "2026-07-11",
  "/ai-app-development-adelaide": "2026-07-03",
  "/about": "2026-06-23",
  "/faq": "2026-06-20",
  "/lost-leads-calculator": "2026-06-23",
  "/privacy-policy": "2026-04-04",
  "/terms": "2026-04-04",
  "/cookie-policy": "2026-04-04",
  "/blog": "2026-06-23",
  // Added to sitemap 2026-07-03 (previously live but missing from sitemap.ts)
  "/virtual-receptionist-adelaide": "2026-06-25",
  "/answering-service-adelaide": "2026-06-23",
  "/bookkeeping-adelaide": "2026-06-25",
  "/google-business-profile-optimisation-adelaide": "2026-06-25",
  "/ai-marketing-adelaide": "2026-06-23",
  "/best-ai-receptionist-australia": "2026-06-23",
  "/testimonials": "2026-06-25",
  "/tools/ai-readiness-calculator": "2026-06-23",
};

// Suburb content lives in one data file with no per-suburb history yet —
// use the file's last commit date for all suburb routes until Phase 5
// (suburb depth pass) gives each one real edit history.
const SUBURBS_LAST_MODIFIED = "2026-06-24";

// Fallback for any route not yet in PAGE_DATES (shouldn't normally hit this —
// add new pages to the map above when you add them to this sitemap).
const FALLBACK_LAST_MODIFIED = "2026-07-03";

function dateFor(path: string): Date {
  return new Date(PAGE_DATES[path] ?? FALLBACK_LAST_MODIFIED);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    // Top-tier money pages (highest priority)
    {
      url: siteConfig.url,
      lastModified: dateFor("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/website-pricing`,
      lastModified: dateFor("/website-pricing"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/website-design-adelaide`,
      lastModified: dateFor("/website-design-adelaide"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/seo`,
      lastModified: dateFor("/seo"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/seo-for-tradies-adelaide`,
      lastModified: dateFor("/seo-for-tradies-adelaide"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: dateFor("/services"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: dateFor("/contact"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/audit`,
      lastModified: dateFor("/audit"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // Comparison / cost / decision-stage pages
    {
      url: `${siteConfig.url}/website-cost-adelaide`,
      lastModified: dateFor("/website-cost-adelaide"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/seo-vs-google-ads-adelaide`,
      lastModified: dateFor("/seo-vs-google-ads-adelaide"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Industry-specific website pages
    {
      url: `${siteConfig.url}/websites-for-hairdressers-adelaide`,
      lastModified: dateFor("/websites-for-hairdressers-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-cafes-adelaide`,
      lastModified: dateFor("/websites-for-cafes-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-plumbers-adelaide`,
      lastModified: dateFor("/websites-for-plumbers-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-electricians-adelaide`,
      lastModified: dateFor("/websites-for-electricians-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-clinics-adelaide`,
      lastModified: dateFor("/websites-for-clinics-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-beauty-salons-adelaide`,
      lastModified: dateFor("/websites-for-beauty-salons-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-retail-shops-adelaide`,
      lastModified: dateFor("/websites-for-retail-shops-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-builders-adelaide`,
      lastModified: dateFor("/websites-for-builders-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-landscapers-adelaide`,
      lastModified: dateFor("/websites-for-landscapers-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-painters-adelaide`,
      lastModified: dateFor("/websites-for-painters-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Automation / receptionist / answering pages (harvest tier — cheap
    // rankings that feed the website+SEO stack via StackCTA, Phase 4)
    {
      url: `${siteConfig.url}/ai-automation-adelaide`,
      lastModified: dateFor("/ai-automation-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/ai-receptionist-adelaide`,
      lastModified: dateFor("/ai-receptionist-adelaide"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/virtual-receptionist-adelaide`,
      lastModified: dateFor("/virtual-receptionist-adelaide"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/answering-service-adelaide`,
      lastModified: dateFor("/answering-service-adelaide"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/missed-call-text-back-adelaide`,
      lastModified: dateFor("/missed-call-text-back-adelaide"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/after-hours-answering-adelaide`,
      lastModified: dateFor("/after-hours-answering-adelaide"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/missed-call-answering-service-adelaide`,
      lastModified: dateFor("/missed-call-answering-service-adelaide"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/ai-receptionist-cost-adelaide`,
      lastModified: dateFor("/ai-receptionist-cost-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/ai-automation-vs-hiring-staff-adelaide`,
      lastModified: dateFor("/ai-automation-vs-hiring-staff-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/ai-receptionist-vs-virtual-receptionist`,
      lastModified: dateFor("/ai-receptionist-vs-virtual-receptionist"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // NOTE: /after-hours-answering and /missed-call-service were merged into
    // /after-hours-answering-adelaide and /missed-call-answering-service-adelaide
    // respectively during Phase 2 cluster consolidation (SEO audit 2026-07)
    // and now 301 via next.config.mjs — removed from here accordingly.
    {
      url: `${siteConfig.url}/best-ai-receptionist-australia`,
      lastModified: dateFor("/best-ai-receptionist-australia"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/bookkeeping-adelaide`,
      lastModified: dateFor("/bookkeeping-adelaide"),
      changeFrequency: "monthly",
      priority: 0.65,
    },
    // Tradie / industry pages (kept)
    {
      url: `${siteConfig.url}/tradie-website-bundle`,
      lastModified: dateFor("/tradie-website-bundle"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Consulting pages
    {
      url: `${siteConfig.url}/ai-consulting-adelaide`,
      lastModified: dateFor("/ai-consulting-adelaide"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-consulting-brisbane`,
      lastModified: dateFor("/ai-consulting-brisbane"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-consulting-melbourne`,
      lastModified: dateFor("/ai-consulting-melbourne"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-office-worker-adelaide`,
      lastModified: dateFor("/ai-office-worker-adelaide"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-marketing-adelaide`,
      lastModified: dateFor("/ai-marketing-adelaide"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Locations hub
    {
      url: `${siteConfig.url}/locations`,
      lastModified: dateFor("/locations"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // SEO verticals (added Jul 2026 — content gap fills for adelaide seo / local seo queries)
    {
      url: `${siteConfig.url}/local-seo-adelaide`,
      lastModified: dateFor("/local-seo-adelaide"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // NOTE: /seo-services-adelaide was merged into /seo during Phase 2
    // cluster consolidation (SEO audit 2026-07) and now 301s — removed.
    {
      url: `${siteConfig.url}/automotive-seo-services`,
      lastModified: dateFor("/automotive-seo-services"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/hotel-seo-services`,
      lastModified: dateFor("/hotel-seo-services"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/ai-seo-adelaide`,
      lastModified: dateFor("/ai-seo-adelaide"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/aged-care-seo-services`,
      lastModified: dateFor("/aged-care-seo-services"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/ai-app-development-adelaide`,
      lastModified: dateFor("/ai-app-development-adelaide"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/google-business-profile-optimisation-adelaide`,
      lastModified: dateFor("/google-business-profile-optimisation-adelaide"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: dateFor("/about"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/faq`,
      lastModified: dateFor("/faq"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/testimonials`,
      lastModified: dateFor("/testimonials"),
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${siteConfig.url}/lost-leads-calculator`,
      lastModified: dateFor("/lost-leads-calculator"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/tools/ai-readiness-calculator`,
      lastModified: dateFor("/tools/ai-readiness-calculator"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // NOTE: /audit/quiz, /audit/report, /audit/results are deliberately
    // excluded — they're in-progress/personalised funnel steps and are
    // noindexed via their layout.tsx metadata (SEO audit, 2026-07-03).
    // Legal
    {
      url: `${siteConfig.url}/privacy-policy`,
      lastModified: dateFor("/privacy-policy"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: dateFor("/terms"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/cookie-policy`,
      lastModified: dateFor("/cookie-policy"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Suburb routes — dynamic via [suburb] route
  const suburbRoutes: MetadataRoute.Sitemap = suburbs.map((suburb) => ({
    url: `${siteConfig.url}/${suburb.slug}`,
    lastModified: new Date(SUBURBS_LAST_MODIFIED),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Blog routes — each post carries its own `date` field in data/posts.ts;
  // use that instead of a single build-time timestamp.
  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/blog`,
      lastModified: dateFor("/blog"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticRoutes, ...suburbRoutes, ...blogRoutes];
}
