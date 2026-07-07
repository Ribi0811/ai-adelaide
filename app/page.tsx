import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/lib/constants";
import ClockHUD from "@/components/home-day/ClockHUD";
import Celestial from "@/components/home-day/Celestial";
import DawnHero from "@/components/home-day/DawnHero";
import MorningSearch from "@/components/home-day/MorningSearch";
import MiddayQuote from "@/components/home-day/MiddayQuote";
import BuildYours from "@/components/home-day/BuildYours";
import DuskCatch from "@/components/home-day/DuskCatch";
import NightSleep from "@/components/home-day/NightSleep";
import NewDawn from "@/components/home-day/NewDawn";
import SuburbStrip from "@/components/home-day/SuburbStrip";
import FAQV3 from "@/components/home-v3/FAQV3";
import StickyBar from "@/components/home-v3/StickyBar";

// Homepage — the "One Day" design (promoted from /v4, 7 Jul 2026).
// The page is a single day, dawn to dawn: the sky darkens as you scroll,
// a clock HUD ticks with scroll position, and each hour shows the system
// winning work. Previous homepage archived at
// docs/archive/page-home-v2-backup.tsx.bak; /v2 /v3 /v4 now 301 here.
export const metadata: Metadata = {
  // title.absolute bypasses the "%s | AI Adelaide" layout template — the
  // brand is already in the string (59 chars rendered).
  title: { absolute: "Website Design, SEO & AI Automation Adelaide | AI Adelaide" },
  description:
    "Websites from $699 live in 48 hours, local SEO from $399/mo, AI automation from $199/mo. Adelaide small businesses, open 24 hours. No lock-in, free chat.",
  keywords: [
    "website design Adelaide",
    "web design Adelaide",
    "affordable websites Adelaide",
    "small business websites Adelaide",
    "local SEO Adelaide",
    "SEO Adelaide",
    "AI automation Adelaide",
    "AI receptionist Adelaide",
    "missed call text back Adelaide",
    "AI Adelaide",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  // Schema: layout.tsx publishes the single canonical LocalBusiness
  // (@id ".../#organization"). This page adds only the WebSite node.
  // FAQPage JSON-LD comes from <FAQV3 /> and matches its visible Q&As —
  // exactly one FAQPage per URL (the old inline FAQPage was removed with
  // the old design so markup never describes invisible content).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "en-AU",
    publisher: {
      "@id": "https://aiadelaide.com.au/#organization",
    },
  };

  return (
    <div id="day-wrapper" className="bg-[#FDF1E3]">
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClockHUD />
      <Celestial />
      <DawnHero />
      <MorningSearch />
      <MiddayQuote />
      <BuildYours />
      <DuskCatch />
      <NightSleep />
      <NewDawn />
      <SuburbStrip />
      <FAQV3 />
      <StickyBar />
    </div>
  );
}
