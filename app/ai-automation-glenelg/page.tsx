import type { Metadata } from "next";
import SuburbAutomationPage from "@/components/SuburbAutomationPage";

export const metadata: Metadata = {
  title: "AI Automation for Glenelg Small Businesses & Tradies | AI Adelaide",
  description:
    "Local AI automation for tradies and small businesses in Glenelg. Capture missed calls, follow up quotes, and book jobs automatically — Adelaide-based setup.",
  alternates: { canonical: "/ai-automation-glenelg" },
};

export default function Page() {
  return (
    <SuburbAutomationPage
      suburb="Glenelg"
      region="western beachside"
      tradieFocus="Hospitality, retail, and marine services"
      knownFor="its beachfront tourism, Jetty Road dining precinct, and seasonal hospitality demand that spikes dramatically in summer months"
    />
  );
}
