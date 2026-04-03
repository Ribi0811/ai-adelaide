import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation Adelaide | Local Business Automation",
  description:
    "AI Automation Adelaide services for local businesses. Automate lead response, bookings, quote follow-up, and admin workflows with measurable ROI.",
  alternates: { canonical: "/ai-automation-adelaide" },
};

export default function AIAutomationAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <span className="eyebrow-light">ai automation adelaide</span>
          <h1 className="mt-4 text-h1-mobile text-slate-950 md:text-h1">AI Automation Adelaide for Local Business Growth</h1>
          <p className="mt-5 max-w-3xl text-body-mobile text-slate-700 md:text-body">
            If your team is busy but growth still feels chaotic, this is where automation helps. We design practical systems that handle repeatable tasks while your team focuses on customers and delivery.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">What we automate first</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Missed-call response and instant SMS acknowledgement</li>
            <li>Lead qualification and booking handoff</li>
            <li>Quote follow-up sequences</li>
            <li>Reminder workflows for bookings and appointments</li>
            <li>Post-job review requests and referral prompts</li>
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">Adelaide-first, implementation-ready</h2>
          <p className="mt-4 text-slate-700">
            We work with Adelaide businesses across trades, clinics, and service teams. Every engagement is built around your current systems and targets, with a staged rollout so you can measure impact quickly.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="/services" className="underline">See service options</Link>
            <Link href="/adelaide" className="underline">Adelaide local coverage</Link>
            <Link href="/locations" className="underline">All locations</Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="text-h2-mobile text-slate-950 md:text-h2">Book Free Audit</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-700">We&apos;ll map your biggest automation opportunities and show what to launch first.</p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex px-8 py-4">Book Free Audit <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}
