import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StackCTA from "@/components/StackCTA";
import DemoLine from "@/components/DemoLine";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Answering Service Adelaide | 24/7 AI Calls",
  description:
    "AI answering service for Adelaide businesses. 24/7 call handling, lead capture, instant SMS summaries, no missed calls. From $199/mo, no lock-in.",
  alternates: {
    canonical: "/answering-service-adelaide",
  },
  openGraph: {
    title: "Answering Service Adelaide | 24/7 AI Call Handling",
    description: "AI answering service for Adelaide small businesses. 24/7 call handling, lead capture, appointment booking, instant SMS summaries.",
    url: "https://aiadelaide.com.au/answering-service-adelaide",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Adelaide answering service workflow diagram",
      },
    ],
  },
};

// Merged with /24-7-answering-service-adelaide during Phase 2 cannibal-cluster
// consolidation (SEO audit 2026-07) — that page was more developed than this
// one, so most of its content was ported in rather than the reverse.
const costComparison = [
  { option: "AI 24/7 answering (AI Adelaide)", cost: "From $199", coverage: "24/7/365, unlimited simultaneous calls", speed: "Instant" },
  { option: "Live human answering service", cost: "$300-$1,500+", coverage: "Usually business hours or rostered shifts", speed: "Queue-dependent" },
  { option: "Per-minute answering (call centre)", cost: "$1-$3/min + base fee", coverage: "24/7 if paid for", speed: "Hold time varies" },
  { option: "Voicemail (DIY)", cost: "$0", coverage: "Always", speed: "Caller gives up after 60 seconds" },
];

const whoNeedsIt = [
  {
    title: "Tradies (plumbers, electricians, builders)",
    body: "You're on-site, under a house, or driving between jobs when the phone rings. After hours, you're either off the tools entirely or missing emergencies worth thousands. AI catches both.",
  },
  {
    title: "Allied health clinics (physio, chiro, dental)",
    body: "Patients reschedule at 9pm on a Sunday. New patient enquiries land at 11pm on a Tuesday. The front desk goes home at 5pm — but the patient doesn't. AI handles intake, reschedules, and bookings around the clock.",
  },
  {
    title: "Retail & hospitality (cafes, restaurants, gift shops)",
    body: "Weekend and after-hours bookings go to voicemail right now. Tourists and late-night planners book the venue that actually answers. AI captures weekend demand while your team is flat out.",
  },
  {
    title: "Professional services (accountants, lawyers, real estate)",
    body: "After-hours enquiries are usually high-value — they came back to the question late at night, or it's urgent. AI qualifies, books a callback, or escalates, so you don't wake up to six voicemails from prospects you should have caught.",
  },
];

const decisionMatrix = [
  { factor: "Cost", ai: "$199-$497/mo flat", live: "$300-$1,500+/mo + per-minute" },
  { factor: "Calls at once", ai: "Unlimited", live: "One human at a time" },
  { factor: "Quality", ai: "Same script, same tone every time", live: "Varies by operator" },
  { factor: "Setup time", ai: "2-5 business days", live: "Days to weeks" },
  { factor: "Best for", ai: "High volume, low cost, consistent service", live: "Niche, human-only tasks" },
];

const faqs = [
  {
    question: "What is an answering service?",
    answer:
      "It's a service that answers your business phone so you don't have to — every call, every hour if you want 24/7 coverage. Modern answering services are either AI-powered (virtual receptionist software handles the call) or live-human (a real person in a call centre answers on your behalf). Both keep you from missing leads. They differ on cost, coverage, and how quickly they answer.",
  },
  {
    question: "How much does an answering service cost in Adelaide?",
    answer:
      "Live human services in Adelaide typically run $300-$1,500+/month depending on call volume, after-hours coverage, and per-minute overage fees. Our AI-powered answering service starts from $199/month as part of the full AI automation stack, with no per-call or per-minute charges — nights, weekends, and public holidays included at no extra cost. No lock-in, no setup fees.",
  },
  {
    question: "Do I need an AI or live answering service?",
    answer:
      "If your priority is lowest cost, fastest answer, and 24/7 coverage for high-volume calls, AI is the practical choice. If you need a human voice for sensitive calls and are happy to pay premium rates for a small number of calls, live can still work. Most Adelaide small businesses we work with choose AI once they see the cost and coverage difference.",
  },
  {
    question: "Does the AI sound human?",
    answer:
      "Yes. Modern AI voices are genuinely good — Australian accent available, natural pace, professional tone. Most callers don't realise they're talking to AI unless you tell them.",
  },
  {
    question: "Can the AI book appointments?",
    answer:
      "Yes. It connects to your Google Calendar, Calendly, or booking software. It checks availability in real time and books the slot — while the caller is still on the line.",
  },
  {
    question: "What if I need to talk to the caller directly?",
    answer:
      "The AI can transfer urgent calls to your mobile, or send you an instant SMS with the caller's details so you can call back within minutes. You set the rules for what counts as urgent.",
  },
  {
    question: "What if I already have an answering service?",
    answer:
      "Then AI is even more valuable. It can cover overflow, after-hours, weekends, and the simple FAQs that eat up your front desk's time. Or, if you want to retire your existing service, switching usually takes a week — and most clients see their monthly bill drop by 50-70%.",
  },
  {
    question: "Do you cover weekends and public holidays?",
    answer:
      "Yes. The AI doesn't take holidays. Christmas, New Year's, Easter long weekend — all covered at the same flat monthly rate. For businesses with genuinely reduced weekend coverage, the AI can adjust its tone and responses (e.g. \"We're closed today but can book you in for Monday morning\") while still capturing the lead.",
  },
  {
    question: "Will I get voicemails or full transcripts?",
    answer:
      "You get a clean text summary, not a voicemail. The AI sends you the caller's name, number, what they wanted, whether it was urgent, and any actions taken. You can read it in 5 seconds on your phone. Full transcripts and recordings are available if you want them — most clients prefer the summary.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most answering services are live within 2-3 business days. Complex setups with custom CRM integration can take up to a week.",
  },
];

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Answering Service Adelaide",
    serviceType: "Answering Service",
    provider: { "@type": "LocalBusiness", name: "AI Adelaide", url: "https://aiadelaide.com.au" },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "AI answering service for Adelaide small businesses. 24/7 call handling, lead capture, appointment booking, instant SMS summaries. Part of AI automation stack from $199/month.",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "AUD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "199", priceCurrency: "AUD", unitText: "MONTH" },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AnsweringServiceAdelaidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Answering Service Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI Automation Feature</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI Answering Service for Adelaide Small Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Our AI answering service is one feature of the full AI automation stack. It picks up every call 24/7, captures the lead, books appointments, and sends you a full summary in under 60 seconds. From $199/mo, no lock-in, Adelaide-based setup.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/ai-automation-adelaide" className="btn-primary px-6 py-3">
              See Full AI Automation Service →
            </Link>
            <Link href="/ai-receptionist-cost-adelaide" className="btn-secondary px-6 py-3">
              See Cost Breakdown →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What an AI Answering Service Does</h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            An AI answering service picks up every call to your business — during work hours, after hours, weekends, public holidays. It sounds like a real person. It understands what the caller is asking. It captures their details, books an appointment, or takes a message.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            You get an SMS or email with the full summary within 60 seconds of the call ending. You decide which calls you want to be alerted about (urgent ones) and which can wait until morning.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Most Adelaide businesses recover 3-5 extra jobs per week just from calls they used to miss.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">24/7 answering service cost in Adelaide (real numbers)</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Most Adelaide business owners search for 24/7 coverage and end up choosing between three options. Here&apos;s how they actually compare in cost, coverage, and quality — without the brochure fluff.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Option</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Monthly cost</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Coverage</th>
                  <th className="py-2 font-semibold text-slate-950">Speed to answer</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((c, i) => (
                  <tr key={c.option} className={i === costComparison.length - 1 ? "" : "border-b border-slate-100"}>
                    <td className="py-3 pr-4 font-semibold text-slate-950">{c.option}</td>
                    <td className="py-3 pr-4">{c.cost}</td>
                    <td className="py-3 pr-4">{c.coverage}</td>
                    <td className="py-3">{c.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            AI is the cheapest, fastest, and most consistent option for most Adelaide small businesses. Live services still earn their keep on narrow, human-only tasks — but you pay for the privilege.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Who actually needs a 24/7 answering service in Adelaide?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {whoNeedsIt.map((w) => (
              <div key={w.title} className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{w.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">AI vs live: which answering option fits your business?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Decision factor</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">AI answering</th>
                  <th className="py-2 font-semibold text-slate-950">Live human answering</th>
                </tr>
              </thead>
              <tbody>
                {decisionMatrix.map((d, i) => (
                  <tr key={d.factor} className={i === decisionMatrix.length - 1 ? "" : "border-b border-slate-100"}>
                    <td className="py-3 pr-4 font-semibold text-slate-950">{d.factor}</td>
                    <td className="py-3 pr-4">{d.ai}</td>
                    <td className="py-3">{d.live}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide businesses say after going 24/7"
        eyebrow="Real results"
        subheadline="These are the kinds of wins that happen when the phone finally gets answered every time, day or night."
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

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Explore More</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/ai-receptionist-vs-virtual-receptionist" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              AI vs Virtual Receptionist Compared →
            </Link>
            <Link href="/after-hours-answering-adelaide" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              After Hours Answering Adelaide →
            </Link>
            <Link href="/websites-for-hairdressers-adelaide" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              Websites for Hairdressers Adelaide →
            </Link>
            <Link href="/websites-for-cafes-adelaide" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              Websites for Cafes Adelaide →
            </Link>
            <Link href="/prospect" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              Answering Service in Prospect →
            </Link>
            <Link href="/mitcham" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              Answering Service in Mitcham →
            </Link>
          </div>
        </div>
      </section>

      <StackCTA variant="automation" />
      <DemoLine />

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Ready to Never Miss Another Call?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Our AI answering service is part of a full AI automation stack. Book a free chat and we&apos;ll show you the complete setup — websites, SEO, and automation — with a fixed quote.
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
