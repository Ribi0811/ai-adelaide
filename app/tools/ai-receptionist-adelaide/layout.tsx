import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Try AI Receptionist Free",
  description: "Try our AI receptionist for Adelaide businesses free — 24/7 call answering, instant text-back, calendar booking. No setup, no lock-in.",
  alternates: { canonical: "/tools/ai-receptionist-adelaide" },
  openGraph: {
    title: "Try AI Receptionist Free",
    description: "Try our AI receptionist for Adelaide businesses free — 24/7 call answering, instant text-back, calendar booking. No setup, no lock-in.",
    url: `${siteConfig.url}/tools/ai-receptionist-adelaide`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
