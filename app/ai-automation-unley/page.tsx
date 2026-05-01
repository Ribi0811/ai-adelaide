import type { Metadata } from "next";
import SuburbAutomationPage from "@/components/SuburbAutomationPage";

export const metadata: Metadata = {
  title: "AI Automation for Unley Small Businesses & Tradies | AI Adelaide",
  description:
    "Local AI automation for tradies and small businesses in Unley. Capture missed calls, follow up quotes, and book jobs automatically — Adelaide-based setup.",
  alternates: { canonical: "/ai-automation-unley" },
};

export default function Page() {
  return (
    <SuburbAutomationPage
      suburb="Unley"
      region="inner southern suburbs"
      tradieFocus="Professional services, allied health, and premium trades"
      knownFor="King William Road's upscale retail and dining, a dense concentration of allied health clinics and professional offices, and established residential areas with high renovation demand"
    />
  );
}
