import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Your AI Audit Results",
  description: "Your free AI audit results for your Adelaide business. Scored PDF report with concrete next steps across website, SEO, and AI automation.",
  alternates: { canonical: "/audit/results" },
  openGraph: {
    title: "Your AI Audit Results",
    description: "Your free AI audit results for your Adelaide business. Scored PDF report with concrete next steps across website, SEO, and AI automation.",
    url: `${siteConfig.url}/audit/results`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
