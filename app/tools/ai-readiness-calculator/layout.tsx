import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Free AI Readiness Calculator",
  description: "Check your Adelaide business’s AI readiness with nine practical questions. See your score instantly and choose whether to request a follow-up.",
  alternates: { canonical: "/tools/ai-readiness-calculator" },
  openGraph: {
    title: "Free AI Readiness Calculator",
    description: "Check your Adelaide business’s AI readiness with nine practical questions. See your score instantly and choose whether to request a follow-up.",
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
