import type { Metadata } from "next";
import LostLeadsCalculator from "@/components/LostLeadsCalculator";

export const metadata: Metadata = {
  title: "Missed Call Calculator — How Much Are You Losing?",
  description:
    "Find out exactly how much revenue your Adelaide business is losing to missed calls. Enter two numbers, get your annual leakage figure instantly.",
  alternates: {
    canonical: "/lost-leads-calculator",
  },
};

export default function LostLeadsCalculatorPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <LostLeadsCalculator />
    </div>
  );
}
