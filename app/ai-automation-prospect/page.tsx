import type { Metadata } from "next";
import SuburbAutomationPage from "@/components/SuburbAutomationPage";

export const metadata: Metadata = {
  title: "AI Automation for Prospect Small Businesses & Tradies | AI Adelaide",
  description:
    "Local AI automation for tradies and small businesses in Prospect. Capture missed calls, follow up quotes, and book jobs automatically — Adelaide-based setup.",
  alternates: { canonical: "/ai-automation-prospect" },
};

export default function Page() {
  return (
    <SuburbAutomationPage
      suburb="Prospect"
      region="inner northern suburbs"
      tradieFocus="Tradies, cafes, and allied health clinics"
      knownFor="its vibrant Prospect Road strip with popular cafes and restaurants, a growing residential renovation market, and an increasing number of allied health and wellness businesses"
    />
  );
}
