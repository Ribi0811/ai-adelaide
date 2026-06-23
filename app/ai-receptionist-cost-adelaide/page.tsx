import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Receptionist Cost Adelaide | 2026",
  description:
    "How much does an AI receptionist cost in Adelaide? From $199/mo vs $4k+ for a real one.",
  alternates: {
    canonical: "/ai-receptionist-cost-adelaide",
  },
};

/* ------------------------------------------------------------------ */
/*  FAQ data — extracted by the Next.js schema pattern as FAQPage      */
/* ------------------------------------------------------------------ */
const faqItems = [
  {
    question: "How much does an AI receptionist cost in Adelaide?",
    answer:
      "From $199/month as part of our AI Automation service. That includes the AI receptionist, missed call text-back, quote follow-ups, appointment booking, and review request automation. Setup is included. No long-term contracts — you can cancel any time. Most Adelaide businesses recover the monthly cost within the first week by capturing leads they would otherwise lose.",
  },
  {
    question: "Is an AI receptionist cheaper than a virtual receptionist?",
    answer:
      "Yes — substantially. A human virtual receptionist service in Australia typically charges $30-$80 per hour, with minimum monthly commitments of $400-$1,200+. For a small Adelaide business that means $800-$3,000+/month for limited coverage. An AI receptionist from $199/month delivers 24/7 coverage, unlimited simultaneous calls, consistent quality, and integrates with your calendar and CRM. The math favours AI for any business taking more than a handful of calls a week.",
  },
  {
    question: "What's included in the $199/month AI receptionist?",
    answer:
      "Everything you need to never miss a call: 24/7 AI receptionist configured with your business name, FAQs, and call routing rules. Missed call text-back within 30 seconds. Direct appointment booking into Google Calendar, Calendly, or your booking software. Detailed SMS and email summaries after every call. Quote follow-up sequences on Day 2 and Day 5. Monthly review call to refine the AI. Adelaide-based support — talk to a real human when you need to.",
  },
  {
    question: "Are there setup fees?",
    answer:
      "No. The $199/month is the all-in price. Setup, configuration, calendar integration, FAQ training, and testing are included. You're not paying a $1,000 setup fee on top. The only thing we'd recommend (and it's optional) is a $300 voice-cloning upgrade if you want the AI to sound like a specific person's voice — most clients don't need this.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Month-to-month. No lock-in contracts, no exit fees. If the AI isn't earning its keep, you cancel. We've designed it this way because the AI should pay for itself within weeks — if it doesn't, we shouldn't be holding you hostage. Most clients stay for 12+ months because the ROI is obvious, but you're never locked in.",
  },
  {
    question: "Do I pay per call or a flat fee?",
    answer:
      "Flat fee. $199/month covers unlimited calls and unlimited call duration. We don't bill per minute, per call, or surprise you with overage charges. If you have a busy month and the AI takes 500 calls instead of 200, you pay the same. That's the whole point of an AI receptionist — it's there whenever you need it.",
  },
  {
    question: "How does AI receptionist pricing compare to hiring a real receptionist?",
    answer:
      "An AI receptionist from $199/month ($2,388/year) vs a full-time human receptionist at $55,000-$70,000/year in Adelaide (plus super, leave, training, management — realistically $75,000-$90,000 all-in). That's a 30-40x cost difference. The AI works 24/7/365, the human works 38 hours a week. The AI handles unlimited simultaneous calls, the human handles one at a time. The AI never calls in sick.",
  },
  {
    question: "What's the ROI on a $199/month AI receptionist?",
    answer:
      "Most Adelaide businesses recover the cost within the first week. Real example: a Glenelg plumber was missing 15 calls a week on jobs. At an average job value of $350, that's $5,250/week in lost revenue. At a 20% close rate on recovered calls, the AI receptionist earns $1,050/week in new jobs — against a $199/month cost. That's a 525% ROI in Week 1. Different businesses have different numbers, but the pattern is consistent.",
  },
];

/* ------------------------------------------------------------------ */
/*  JSON‑LD Schemas                                                    */
/* ------------------------------------------------------------------ */

function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (faqs.length === 0) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      }}
    />
  );
}

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Receptionist Adelaide",
    serviceType: "AI Receptionist",
    provider: {
      "@type": "LocalBusiness",
      name: "AI Adelaide",
      url: "https://aiadelaide.com.au",
    },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
    },
    description:
      "AI receptionist service for Adelaide small businesses. 24/7 call answering, appointment booking, lead capture. Transparent pricing from $199/month.",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "199",
        priceCurrency: "AUD",
        unitText: "MONTH",
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AIReceptionistCostAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqItems} />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI Automation Pricing</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            How Much Does an AI Receptionist Cost in Adelaide?
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Straight answer: the AI receptionist is part of our AI Automation service, from $199/month. But what you actually get — and what you&apos;re comparing it to — is where the real story is. Here&apos;s an honest breakdown for Adelaide small businesses, including how we stack up against hiring a real receptionist, virtual receptionist services, and other AI providers in Australia.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            The Short Answer
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            An AI receptionist for an Adelaide small business costs from <strong>$199/month</strong> through AI Adelaide. That&apos;s the all-in price — no setup fee, no per-call charges, no lock-in contracts.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            For context, here&apos;s what Adelaide businesses typically pay for the alternatives:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li><strong>Full-time human receptionist:</strong> $55,000–$70,000/year in salary. Realistically $75,000–$90,000 all-in once you add super, leave, training, and management overhead.</li>
            <li><strong>Part-time human receptionist:</strong> $25,000–$40,000/year, plus the same overheads. Limited hours, still needs cover for sick days and holidays.</li>
            <li><strong>Virtual receptionist service:</strong> $30–$80/hour, usually with monthly minimums of $400–$1,200+. Quality varies wildly between providers.</li>
            <li><strong>Bare-bones AI answering service:</strong> $50–$150/month. Doesn&apos;t book appointments well, often misses context, sounds robotic.</li>
            <li><strong>Full AI automation stack (what we do):</strong> from $199/month flat. Unlimited calls, appointment booking, calendar integration, missed call text-back, quote follow-ups.</li>
          </ul>
          <p className="text-body-mobile text-slate-700 md:text-body">
            The AI option wins on cost, coverage, and consistency for almost every Adelaide small business we work with.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            How We Compare to Other AI Receptionist Providers in Australia
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Transparency matters. Here&apos;s how our $199/month AI receptionist compares to other named providers you&apos;ll see when you search:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 text-left font-semibold">Provider</th>
                  <th className="py-2 pr-4 text-left font-semibold">Starting Price</th>
                  <th className="py-2 pr-4 text-left font-semibold">Coverage</th>
                  <th className="py-2 pr-4 text-left font-semibold">Setup Fee</th>
                  <th className="py-2 pr-4 text-left font-semibold">Lock-in</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold">AI Adelaide</td>
                  <td className="py-3 pr-4">From $199/mo</td>
                  <td className="py-3 pr-4">24/7, unlimited calls</td>
                  <td className="py-3 pr-4">None</td>
                  <td className="py-3 pr-4">None (month-to-month)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Aussie AI Agency</td>
                  <td className="py-3 pr-4">From $297/mo</td>
                  <td className="py-3 pr-4">24/7</td>
                  <td className="py-3 pr-4">None (14-day trial)</td>
                  <td className="py-3 pr-4">Monthly</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">AutoReception</td>
                  <td className="py-3 pr-4">From $299/mo</td>
                  <td className="py-3 pr-4">24/7, Australian accent</td>
                  <td className="py-3 pr-4">None</td>
                  <td className="py-3 pr-4">Monthly</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">PalmConnect</td>
                  <td className="py-3 pr-4">From $149/mo</td>
                  <td className="py-3 pr-4">24/7</td>
                  <td className="py-3 pr-4">None</td>
                  <td className="py-3 pr-4">Monthly</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Square AI</td>
                  <td className="py-3 pr-4">From $2,500 + $349/mo</td>
                  <td className="py-3 pr-4">24/7</td>
                  <td className="py-3 pr-4">$2,500</td>
                  <td className="py-3 pr-4">12-month</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">PRJ Automations</td>
                  <td className="py-3 pr-4">Custom quote</td>
                  <td className="py-3 pr-4">24/7</td>
                  <td className="py-3 pr-4">First month free</td>
                  <td className="py-3 pr-4">Limited to 25 businesses</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-body-mobile text-slate-700 md:text-body mt-4">
            Pricing sourced from public provider websites, June 2026. Always verify current pricing before committing — AI receptionist market is moving fast and providers update monthly.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            What&apos;s Included in Our $199/Month AI Receptionist
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li><strong>24/7 AI receptionist</strong> configured with your business name, FAQs, call routing rules</li>
            <li><strong>Missed call text-back</strong> within 30 seconds (when the AI can&apos;t answer or the caller prefers SMS)</li>
            <li><strong>Appointment booking</strong> direct into Google Calendar, Calendly, ServiceM8, or your booking system</li>
            <li><strong>Detailed SMS and email summaries</strong> after every call — caller name, number, what they wanted</li>
            <li><strong>Quote follow-up sequences</strong> on Day 2 and Day 5 (recover the 60% of quotes that go cold)</li>
            <li><strong>Appointment reminders</strong> via SMS and email to reduce no-shows</li>
            <li><strong>Google review request automation</strong> after completed jobs</li>
            <li><strong>Monthly review call</strong> to refine the AI based on real call data</li>
            <li><strong>Adelaide-based support</strong> — talk to a real human when you need to change something</li>
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            The Real Cost: What Happens If You Don&apos;t Have One
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            The question isn&apos;t really &ldquo;can I afford an AI receptionist?&rdquo; — it&apos;s &ldquo;can I afford to keep missing calls?&rdquo;
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Most Adelaide small businesses miss 30–40% of their phone calls. For a tradie doing $2,000/day in average job value, that&apos;s $600/day in lost revenue. Over a year, that&apos;s $150,000+ in work that went to competitors who picked up the phone.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            An AI receptionist at $199/month recovers even a fraction of that. A plumber in Glenelg told us he was missing 15 calls a week on jobs. At his average job value of $350, that was 60 jobs/month going elsewhere. His AI recovered enough of those to pay for itself 5x over in the first month.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            The maths always works out. The only question is whether you&apos;re ready to stop leaving money on the table.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            FAQ: AI Receptionist Cost Adelaide
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.question}>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  {faq.question}
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Ready to See the Numbers for Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We&apos;ll look at your call volume, your current setup, and give you a fixed quote for the full AI automation stack — no obligation.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/ai-receptionist-adelaide" className="btn-primary px-8 py-4">
              Learn About AI Receptionist <span aria-hidden>→</span>
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