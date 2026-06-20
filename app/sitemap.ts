import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import suburbs from "@/data/suburbs.json";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    // Top-tier money pages (highest priority)
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/website-pricing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/website-design-adelaide`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/seo`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/audit`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // Comparison / cost / decision-stage pages
    {
      url: `${siteConfig.url}/website-cost-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/seo-vs-google-ads-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Industry-specific website pages
    {
      url: `${siteConfig.url}/websites-for-hairdressers-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-cafes-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-plumbers-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-electricians-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-clinics-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-beauty-salons-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/websites-for-retail-shops-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Existing automation/service pages (kept for existing SEO)
    {
      url: `${siteConfig.url}/ai-automation-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/ai-receptionist-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/missed-call-text-back-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/after-hours-answering-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/missed-call-answering-service-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/ai-receptionist-cost-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/ai-automation-vs-hiring-staff-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/ai-receptionist-vs-virtual-receptionist`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/after-hours-answering`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Tradie / industry pages (kept)
    {
      url: `${siteConfig.url}/tradie-website-bundle`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/missed-call-service`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-for-tradies`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/ai-automation-for-tradies-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/ai-automation-for-clinics-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/ai-for-allied-health`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-for-builders-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-for-electricians-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-for-plumbers-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Consulting pages
    {
      url: `${siteConfig.url}/ai-consulting-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-consulting-brisbane`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-consulting-melbourne`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/ai-office-worker-adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Locations hub
    {
      url: `${siteConfig.url}/locations`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/adelaide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/lost-leads-calculator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // Audit funnel pages
    {
      url: `${siteConfig.url}/audit/quiz`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/audit/report`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/audit/results`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Legal
    {
      url: `${siteConfig.url}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/cookie-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Suburb routes — dynamic via [suburb] route
  const suburbRoutes: MetadataRoute.Sitemap = suburbs.map((suburb) => ({
    url: `${siteConfig.url}/${suburb.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Blog routes
  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticRoutes, ...suburbRoutes, ...blogRoutes];
}
