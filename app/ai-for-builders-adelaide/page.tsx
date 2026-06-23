import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "AI for Builders Adelaide | From $199/mo",
  description:
    "AI for Adelaide builders: quote follow-up, missed call capture, after-hours booking, and project enquiry qualification. From $199/mo.",
  alternates: { canonical: "/ai-for-builders-adelaide" },
};

const problems = [
  { stat: "$5K-50K", label: "average job value — every missed quote hurts" },
  { stat: "5-10", label: "quotes sent per week, half go cold" },
  { stat: "60%", label: "of quote enquiries go to the builder who replied first" },
  { stat: "10-15 hrs", label: "of admin per week lost to follow-up and scheduling" },
];

const features = [
  {
    title: "Quote follow-up automation",
    body:
      "AI sends a follow-up email/SMS 24 hours after every quote, then again at Day 3 and Day 7. Recovers 30-40% of cold quotes without you lifting a finger. For a builder sending 8 quotes a week at $15K average, that's $36K-48K/month in additional booked jobs.",
  },
  {
    title: "Missed call capture",
    body:
      "If you're on-site, in a meeting, or driving between jobs, AI catches every call. Captures the project details, qualifies the scope, sends you a clean SMS. No more losing the $50K renovation to voicemail.",
  },
  {
    title: "Project enquiry qualification",
    body:
      "AI asks the right questions: project type, suburb, budget range, timeline, decision-maker. Filters out the tyre-kickers and sends you warm leads ready for a quote walkthrough.",
  },
  {
    title: "After-hours booking",
    body:
      "Most clients research builders at 9pm after the kids are in bed. AI captures those enquiries, logs the project details, and books a callback for the next morning. You wake up to warm leads, not missed opportunities.",
  },
  {
    title: "Subcontractor coordination",
    body:
      "AI sends reminders to sparkies, plumbers, concreters before each site visit. Reduces no-shows and keeps your project on schedule.",
  },
  {
    title: "Review request automation",
    body:
      "Auto-sends a Google review link 24 hours after project completion. Builds your reputation portfolio — essential for the next client who's comparing 3-4 builders before deciding.",
  },
];

const suburbTargets = [
  "Builder Norwood", "Builder Glenelg", "Builder Burnside", "Builder Mitcham",
  "Builder Prospect", "Builder Unley", "Builder Magill", "Builder Campbelltown",
  "Builder Payneham", "Builder Stepney", "Builder Medindie", "Builder Beulah Park",
];

const faqs = [
  {
    question: "How much does AI for builders cost in Adelaide?",
    answer:
      "From $199/month as part of the full AI automation stack. Most Adelaide builders spend $199-$497/month depending on call volume and the number of workflows automated. Setup is included in the monthly fee.",
  },
  {
    question: "Does it work with my project management software?",
    answer:
      "Yes. We connect with Buildertrend, Co-Construct, Procore, and most CRMs. AI captures enquiry details and pushes them into your project management workflow.",
  },
  {
    question: "How does the quote follow-up work?",
    answer:
      "When you send a quote, AI tracks when it was sent and automatically follows up at Day 1, Day 3, and Day 7. Each follow-up is in your voice, references the project, and asks if they have questions. Recovers 30-40% of cold quotes.",
  },
  {
    question: "Will it work for high-value projects ($50K+)?",
    answer:
      "Yes. For high-value projects, AI captures detailed qualification (budget, timeline, decision-maker) so you walk into the quote meeting prepared. The follow-up cadence is more conservative to match the longer sales cycle.",
  },
  {
    question: "Can it handle multiple enquiry types?",
    answer:
      "Yes. Renovations, extensions, new builds, commercial fitouts — each can have its own qualification flow and follow-up sequence. AI routes the right enquiry to the right person on your team.",
  },
  {
    question: "Will it work on weekends and public holidays?",
    answer:
      "Yes. AI answers every call, every day. Most clients research builders on weekends — that's when you need coverage most.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most builder AI setups are live within 2-5 business days. We configure call flows, integrate with your CRM/project management software, test with sample calls, and hand over with a walkthrough.",
  },
  {
    question: "Can I keep my existing phone number?",
    answer:
      "Yes. We layer the AI on top of your current number. The number your clients have is the number that answers.",
  },
];

function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
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
    name: "AI for Builders Adelaide",
    serviceType: "AI for Builders",
    provider: { "@type": "LocalBusiness", name: "AI Adelaide", url: "https://aiadelaide.com.au" },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "AI for Adelaide builders: quote follow-up, missed call capture, after-hours booking, project enquiry qualification. From $199/mo.",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "AUD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "199", priceCurrency: "AUD", unitText: "MONTH" },
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "3", bestRating: "5", worstRating: "1" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AIForBuildersAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI for Builders Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI for Builders</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI for Builders Adelaide — Quote Follow-Up, After-Hours Bookings, More Jobs
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            You send 8 quotes a week. Half go cold because you&apos;re on-site and forget to follow up. The other half go to the builder who replied first. We fix both — AI handles quote follow-up automatically, catches every missed call, qualifies the project, and books callbacks while you sleep. From $199/month, no lock-in.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See AI Stack <span aria-hidden>→</span>
            </Link>
            <Link href="/missed-call-text-back-adelaide" className="btn-secondary px-8 py-4">
              Missed-Call Text-Back <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">The numbers behind missed builder enquiries</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {problems.map((p) => (
              <div key={p.label} className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6 text-center">
                <p className="text-3xl font-bold text-slate-950">{p.stat}</p>
                <p className="mt-2 text-sm text-slate-700">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What AI does for Adelaide builders</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            Built around how building businesses actually run: long sales cycles, high-value quotes, on-site focus, and tight margins.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{f.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Adelaide suburbs we help builders rank for</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Local SEO setup targets the searches your future clients actually make. Suburb service pages so when someone in Norwood searches &quot;builder Norwood&quot;, you have a page Google can rank for that.
          </p>
          <div className="flex flex-wrap gap-2">
            {suburbTargets.map((s) => (
              <span key={s} className="rounded-full border border-slate-200/80 bg-white px-3 py-1 text-sm text-slate-700">{s}</span>
            ))}
          </div>
          <Link href="/locations" className="mt-4 inline-block text-sm font-semibold text-accent underline">
            See full suburb list →
          </Link>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide builders say"
        eyebrow="Real results"
        subheadline="The follow-up that used to slip through the cracks now happens automatically."
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to stop losing builder leads?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            15-minute chat, no fluff. We&apos;ll show you what the AI would say when a Burnside homeowner enquires about an extension at 9pm on a Saturday.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See Full Stack <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4">
              Book Free Chat <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}