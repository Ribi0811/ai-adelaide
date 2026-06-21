import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Receptionist Cost Adelaide | 2026",
  description:
    "How much does an AI receptionist cost in Adelaide? Honest pricing — from $199/mo as part of our AI automation stack. Compare to hiring a real receptionist ($4k+/mo).",
  alternates: {
    canonical: "/ai-receptionist-cost-adelaide",
  },
};

export default function AIReceptionistCostAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI Automation Pricing</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            How Much Does an AI Receptionist Cost in Adelaide?
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Straight answer: the AI receptionist is part of our AI Automation service, from $199/month. But what you actually get — and what you&apos;re comparing it to — is where the real story is. Here&apos;s an honest breakdown for Adelaide small businesses.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Three Tiers, One Honest Comparison</h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Most &ldquo;AI receptionist&rdquo; offerings fall into one of three buckets:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>
              <strong>Cheap overseas call centre:</strong> $1-3 per minute, shared between multiple clients, inconsistent quality.
            </li>
            <li>
              <strong>Bare-bones AI answering service:</strong> $50-150/month, but it doesn&apos;t book appointments or capture details well.
            </li>
            <li>
              <strong>Full AI automation (what we do):</strong> from $199/month for the AI receptionist, missed call text-back, quote follow-ups, and review automation — integrated with your calendar and CRM.
            </li>
          </ul>
          <p className="text-body-mobile text-slate-700 md:text-body">
            For most Adelaide small businesses, the third option pays for itself in the first week by recovering leads you&apos;d otherwise lose.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Compare to a Real Receptionist</h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            A full-time receptionist in Adelaide costs roughly $55,000-$70,000 per year in salary, plus superannuation, leave, training, and management overhead. Realistically $75,000-$90,000 all-in.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            That person also works 38 hours a week. Miss anything outside those hours? Still goes to voicemail. On annual leave? Still voicemail.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            An AI receptionist, from $199/month, works 24/7/365. It never calls in sick, never goes on holiday, and never puts a customer on hold.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What You Get for $199/Month</h2>
          <ul className="list-disc pl-6 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>24/7 AI receptionist with your business name and FAQs</li>
            <li>Missed call text-back within 30 seconds</li>
            <li>Appointment booking (Google Calendar, Calendly, or your booking system)</li>
            <li>Detailed SMS/email summaries after every call</li>
            <li>Quote follow-up automation (Day 2 + Day 5 touchpoints)</li>
            <li>Monthly automation review call</li>
            <li>Adelaide-based support</li>
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Ready to See the Numbers for Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We&apos;ll look at your call volume, your current setup, and give you a fixed quote for the full AI automation stack.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See AI Automation Service <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4">
              Book Free Chat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
