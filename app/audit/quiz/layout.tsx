import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free AI Audit Quiz",
  description: "Free 15-question AI readiness audit for Adelaide small businesses. Get a scored PDF report on website, SEO, and automation in 5 minutes.",
  alternates: { canonical: "/audit/quiz" },
  openGraph: {
    title: "Free AI Audit Quiz",
    description: "Free 15-question AI readiness audit for Adelaide small businesses. Get a scored PDF report on website, SEO, and automation in 5 minutes.",
    url: `${siteConfig.url}/audit/quiz`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
