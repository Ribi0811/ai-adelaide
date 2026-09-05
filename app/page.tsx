import type { Metadata } from "next";
import { PRICING, siteConfig } from "@/lib/constants";
import HomeStudio from "@/components/home-studio/HomeStudio";

export const metadata: Metadata = {
  // title.absolute bypasses the "%s | AI Adelaide" layout template — the
  // brand is already in the string (59 chars rendered).
  title: { absolute: "Website Design, SEO & AI Automation Adelaide | AI Adelaide" },
  description:
    `Websites ${PRICING.website.fromLabel}, local SEO ${PRICING.seo.fromLabel} and practical automation for Adelaide small businesses. Clear project scope, local support. Get a quote.`,
  keywords: [
    "website design Adelaide",
    "web design Adelaide",
    "affordable websites Adelaide",
    "small business websites Adelaide",
    "local SEO Adelaide",
    "SEO Adelaide",
    "AI automation Adelaide",
    "AI Adelaide",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "WebSite",
    "@id": `${siteConfig.url}#website`, url: siteConfig.url,
    name: siteConfig.name, inLanguage: "en-AU",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
  return <>
    <script id="home-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <HomeStudio />
  </>;
}
