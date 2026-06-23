import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Your AI Audit Report",
  description: "Your personalised AI audit report for your Adelaide business. Website, SEO and automation scored, with concrete next-action recommendations.",
  alternates: { canonical: "/audit/report" },
  openGraph: {
    title: "Your AI Audit Report",
    description: "Your personalised AI audit report for your Adelaide business. Website, SEO and automation scored, with concrete next-action recommendations.",
    url: `${siteConfig.url}/audit/report`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
