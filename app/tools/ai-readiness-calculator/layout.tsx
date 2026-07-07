import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Free AI Readiness Calculator",
  description: "Free AI readiness score for your Adelaide small business. Get a PDF report in 5 minutes covering website, SEO, automation gaps.",
  alternates: { canonical: "/tools/ai-readiness-calculator" },
  openGraph: {
    title: "Free AI Readiness Calculator",
    description: "Free AI readiness score for your Adelaide small business. Get a PDF report in 5 minutes covering website, SEO, automation gaps.",
    url: `${siteConfig.url}/tools/ai-readiness-calculator`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Readiness Calculator" },
        ]}
        className="pt-28 md:pt-32"
      />
      {children}
    </>
  );
}
