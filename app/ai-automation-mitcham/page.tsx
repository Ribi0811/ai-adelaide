import type { Metadata } from "next";
import SuburbAutomationPage from "@/components/SuburbAutomationPage";

export const metadata: Metadata = {
  title: "AI Automation for Mitcham Small Businesses & Tradies | AI Adelaide",
  description:
    "Local AI automation for tradies and small businesses in Mitcham. Capture missed calls, follow up quotes, and book jobs automatically — Adelaide-based setup.",
  alternates: { canonical: "/ai-automation-mitcham" },
};

export default function Page() {
  return (
    <SuburbAutomationPage
      suburb="Mitcham"
      region="southern suburbs"
      tradieFocus="Builders, landscapers, and allied health"
      knownFor="its family-oriented neighbourhoods, Mitcham Square shopping centre, and a strong mix of residential renovation work alongside growing allied health services"
    />
  );
}
