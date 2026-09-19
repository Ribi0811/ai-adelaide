import type { PortfolioItem } from "@/components/Portfolio";

/**
 * Real websites we have permission to feature. These are not presented as
 * AI Adelaide-owned properties, client testimonials or measured SEO results.
 * Keep the descriptions factual unless the site owner supplies more proof.
 */
export const selectedWork: PortfolioItem[] = [
  {
    name: "CarHire.global",
    industry: "Travel · comparison platform",
    scope: "Website / SEO updates",
    platform: "Next.js / React",
    url: "https://www.carhire.global/",
    screenshotSrc: "/portfolio/carhire-global.png",
    screenshotAlt:
      "CarHire.global homepage showing a car-hire comparison experience with a coastal road hero image",
    description:
      "A modern international car-hire comparison platform with destination content, planning tools and a live search journey.",
  },
  {
    name: "365CarHire",
    industry: "Travel · content platform",
    scope: "SEO / content updates",
    platform: "WordPress",
    url: "https://365carhire.com/",
    screenshotSrc: "/portfolio/365carhire.png",
    screenshotAlt:
      "365CarHire homepage showing its international car-rental search form and destination navigation",
    description:
      "An established WordPress car-hire platform with broad destination coverage, booking pathways and a substantial editorial content layer.",
  },
];
