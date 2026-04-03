import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Missed Call Service Adelaide — AI Answers Every Call",
  description:
    "Never lose a job to voicemail again. Our AI answers missed calls instantly, qualifies the lead, and sends you a summary. Adelaide tradies, book a free chat.",
  alternates: {
    canonical: "/missed-call-service",
  },
};

export default function MissedCallServicePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Missed Call Service Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Every Missed Call Gets a Response — Automatically
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            85% of callers never ring back if they hit voicemail. That means your next job often goes to the tradie who answered first. Our missed call service Adelaide setup uses AI to catch those leads instantly.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">How it works</h2>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Call comes in → AI answers instantly → asks qualifying questions → sends you a summary → caller knows they&apos;ll hear back. No dead-end voicemail, no cold leads.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Why businesses use this</h2>
          <ul className="list-disc space-y-2 pl-6 text-body-mobile text-slate-700 md:text-body">
            <li>You&apos;re on the tools and can&apos;t answer every call</li>
            <li>After-hours enquiries are going to voicemail</li>
            <li>Weekend calls disappear before Monday</li>
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Who it&apos;s for</h2>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Plumbers, electricians, builders, physios, and any service business that depends on inbound phone leads.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">The numbers are simple</h2>
          <p className="text-body-mobile text-slate-700 md:text-body">
            A typical Adelaide tradie misses 10-15 calls/week. At $400 average job value, that&apos;s $4,000-$6,000 in potential weekly revenue walking out the door.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Need the full growth stack?</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Missed call text back Adelaide automation is step one. If you also need a conversion-focused website and local SEO, see the complete tradie package.
          </p>
          <Link href="/tradie-website-bundle" className="text-base font-semibold text-slate-900 underline-offset-4 hover:underline">
            See the Full Bundle →
          </Link>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Stop losing jobs to voicemail</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            We&apos;ll show you how to capture missed calls, qualify leads, and respond instantly.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">
            Book a Free Chat <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
