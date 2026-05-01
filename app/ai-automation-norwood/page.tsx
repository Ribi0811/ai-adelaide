import type { Metadata } from "next";
import SuburbAutomationPage from "@/components/SuburbAutomationPage";

export const metadata: Metadata = {
  title: "AI Automation for Norwood Small Businesses & Tradies | AI Adelaide",
  description:
    "Local AI automation for tradies and small businesses in Norwood. Capture missed calls, follow up quotes, and book jobs automatically — Adelaide-based setup.",
  alternates: { canonical: "/ai-automation-norwood" },
};

export default function Page() {
  return (
    <SuburbAutomationPage
      suburb="Norwood"
      region="inner eastern suburbs"
      tradieFocus="Retail, hospitality, and professional services"
      knownFor="The Parade shopping and dining strip, high-density commercial activity, and a mix of boutique retail, cafes, and professional offices that generate high inquiry volumes"
    />
  );
}
