import type { Metadata } from "next";
import SuburbAutomationPage from "@/components/SuburbAutomationPage";

export const metadata: Metadata = {
  title: "AI Automation for Burnside Small Businesses & Tradies | AI Adelaide",
  description:
    "Local AI automation for tradies and small businesses in Burnside. Capture missed calls, follow up quotes, and book jobs automatically — Adelaide-based setup.",
  alternates: { canonical: "/ai-automation-burnside" },
};

export default function Page() {
  return (
    <SuburbAutomationPage
      suburb="Burnside"
      region="eastern suburbs"
      tradieFocus="Electricians, plumbers, and builders"
      knownFor="its premium residential properties, village shopping precinct, and high concentration of renovation and maintenance work across established homes"
    />
  );
}
