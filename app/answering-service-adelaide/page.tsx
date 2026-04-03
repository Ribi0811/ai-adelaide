import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Answering Service Adelaide | AI Receptionist for Tradies & Small Business",
  description:
    "Adelaide answering service that answers your calls 24/7. AI receptionist captures every lead and sends you the full picture in under 60 seconds. Setup in 2-5 days. No lock-in. Book free audit.",
  alternates: {
    canonical: "/answering-service-adelaide",
  },
  openGraph: {
    title: "Answering Service Adelaide | AI Receptionist for Tradies & Small Business",
    description:
      "Adelaide answering service that answers your calls 24/7. AI receptionist captures every lead and sends you the full picture in under 60 seconds. Setup in 2-5 days. No lock-in. Book free audit.",
    url: "https://www.aiadelaide.com.au/answering-service-adelaide",
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

export default function AnsweringServiceAdelaidePage() {
  const faqs = [
    {
      question: "How much does an answering service cost in Adelaide?",
      answer:
        "Traditional answering services in Adelaide typically charge $500–$800 per month for a call centre operator reading from a script. Our AI answering service starts from $79/month — that's 24/7 coverage, real conversations, and SMS alerts to your phone in under 60 seconds. No lock-in contract.",
    },
    {
      question: "Does it work with my existing business phone?",
      answer:
        "Yes. You don't need any new hardware or apps. We give you a number to divert your calls to when you can't answer. Takes about 30 seconds to set up on any mobile or landline — your existing number stays exactly the same. Callers ring you like normal, and the AI picks up when you can't.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most businesses are live within 2–5 business days. We handle everything — setting up your AI receptionist, customising the greeting, and configuring the questions it asks callers. You'll have a short onboarding call with us (about 15 minutes), and then you're done. No IT department needed.",
    },
    {
      question: "Can it handle after-hours calls?",
      answer:
        "Yes — that's one of the biggest advantages over a traditional answering service. Our AI receptionist is available 24/7, including weekends and public holidays. For after-hours calls, it captures the lead details and sends them to you immediately. You call back the next morning and the job is already half-sold because someone actually answered.",
    },
    {
      question: "Can I listen back to the calls?",
      answer:
        "Yes. Every call is recorded and you get a full transcript. You can see exactly what was said, review the lead details, and spot any questions your AI receptionist should be handling better. It's like having a call log, but actually useful.",
    },
    {
      question: "What's the difference between AI and a traditional answering service?",
      answer:
        "A traditional answering service uses a human operator at a call centre — usually overseas or interstate — reading from a script. They don't know your business, your regular customers, or your local area. Our AI receptionist learns your business, handles calls with a natural Australian accent, adapts to the conversation, and sends you a full summary within 60 seconds. It's faster, smarter, and a fraction of the cost.",
    },
    {
      question: "Do I need a lock-in contract?",
      answer:
        "No contracts. Month to month, cancel anytime. We're confident you'll stick around once you see the leads you're no longer missing — but we'd rather earn your business every month than lock you in.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Answering Service Adelaide",
    description:
      "24/7 AI-powered answering service for Adelaide small businesses and tradies. Answers calls, captures every lead, and texts you the full picture in under 60 seconds.",
    provider: {
      "@type": "LocalBusiness",
      name: "AI Adelaide",
      telephone: "08 7100 9788",
      url: "https://www.aiadelaide.com.au",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Adelaide",
        addressRegion: "SA",
        addressCountry: "AU",
      },
    },
    serviceType: "Answering Service",
    areaServed: "Adelaide",
    priceRange: "From $79/month",
  };

  const industries = [
    { icon: "🔧", label: "Tradies & plumbers" },
    { icon: "⚡", label: "Electricians" },
    { icon: "🏥", label: "Allied health clinics" },
    { icon: "💇", label: "Beauty & wellness" },
    { icon: "🏠", label: "Real estate agents" },
    { icon: "🌿", label: "Landscapers" },
    { icon: "🛠️", label: "Builders & renovators" },
    { icon: "🐾", label: "Pet services" },
  ];

  const steps = [
    {
      number: "1",
      heading: "Your call comes in",
      body: "A potential customer calls your business number. You're on a job, in a meeting, or it's 10pm on a Sunday.",
    },
    {
      number: "2",
      heading: "AI receptionist answers",
      body: "Your AI receptionist picks up within seconds — 24/7, every single time. It greets the caller with your business name, asks the right questions, and has a real conversation. Not a robot menu. Not a voicemail. A real conversation.",
    },
    {
      number: "3",
      heading: "You get the full picture in 60 seconds",
      body: "Within 60 seconds of the call ending, you receive an SMS with everything you need: caller's name, number, what they need, how urgent it is, and any other details you've configured. You call back when you're free — the lead is warm and waiting.",
    },
    {
      number: "4",
      heading: "You win the job",
      body: "You call back faster than any competitor who didn't pick up. The customer already feels looked after. Job confirmed.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Available 24/7",
      ai: true,
      traditional: false,
      voicemail: false,
    },
    {
      feature: "Real conversation (not a menu)",
      ai: true,
      traditional: true,
      voicemail: false,
    },
    {
      feature: "SMS alert within 60 seconds",
      ai: true,
      traditional: false,
      voicemail: false,
    },
    {
      feature: "Call recordings + transcripts",
      ai: true,
      traditional: false,
      voicemail: false,
    },
    {
      feature: "Knows your business & local area",
      ai: true,
      traditional: false,
      voicemail: false,
    },
    {
      feature: "No lock-in contract",
      ai: true,
      traditional: false,
      voicemail: true,
    },
    {
      feature: "Typical monthly cost",
      ai: "From $79/mo",
      traditional: "$500–$800/mo",
      voicemail: "Free (but lose the job)",
    },
  ];

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-electric/8 via-transparent to-accent/8" />
          <div className="relative">
            <div className="mb-6">
              <span className="eyebrow-light">Answering Service Adelaide</span>
            </div>
            <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
              Adelaide Answering Service That Never Misses a Call
            </h1>
            <p className="mx-auto max-w-3xl text-body-mobile text-slate-600 md:text-body">
              Stop losing jobs to missed calls. Our AI receptionist answers your phones 24/7, captures every lead, and sends you the full picture by SMS in under 60 seconds — so you can call back when you&apos;re free, not when it&apos;s too late. Setup in 2–5 days. No lock-in contract.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/audit" className="btn-primary px-8 py-4">
                Book Your Free Missed Call Audit <span aria-hidden>→</span>
              </Link>
              <a href="tel:+61871009788" className="btn-secondary px-8 py-4">
                Call 08 7100 9788
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            When You&apos;re on a Job, Your Phone Goes Unanswered. Here&apos;s What That Actually Costs.
          </h2>
          <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
            You&apos;re on a roof in Seaford. Under a house in Morphett Vale. Knee-deep in a client consultation in the CBD. Your phone rings. You can&apos;t get to it.
          </p>
          <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
            By the time you check your missed calls, that person has already called the next business on Google. They didn&apos;t leave a voicemail — almost nobody does anymore. They just moved on.
          </p>
          <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
            That&apos;s not a one-off. The average small business in Adelaide misses 3–5 calls per week during business hours alone. Each missed call is a potential job worth anywhere from $200 to $5,000. Over a year, that&apos;s real money walking straight to your competitors.
          </p>
          <p className="text-body-mobile text-slate-600 md:text-body">
            The fix isn&apos;t hiring a full-time receptionist at $50,000+ per year. It&apos;s an <Link href="/ai-receptionist-adelaide" className="text-accent hover:underline">AI receptionist</Link> that answers every call, every time — including <Link href="/after-hours-answering-adelaide" className="text-accent hover:underline">after hours</Link> — for a fraction of the cost.
          </p>
        </div>
      </section>

      {/* WHAT IS AN ANSWERING SERVICE */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            What Is an Answering Service?
          </h2>
          <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
            An answering service answers your business phone calls on your behalf when you can&apos;t. Instead of callers hitting voicemail — or worse, just hanging up — a real conversation happens. Details are captured. The caller feels heard.
          </p>
          <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
            Traditional answering services use human operators at a call centre. They&apos;re fine, but they typically cost $500–$800/month, are only available during certain hours, and they don&apos;t know your business or your local Adelaide area.
          </p>
          <p className="text-body-mobile text-slate-600 md:text-body">
            Our answering service uses AI — specifically trained on your business — to have natural, helpful conversations with your callers 24 hours a day, 7 days a week. It answers with your business name, asks the right questions, and sends you a full lead summary within 60 seconds. No call centre. No scripts. No hold music. Just a professional answer, every time.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-2 text-h2-mobile text-slate-950 md:text-h2">
            AI Answering Service vs Traditional vs Voicemail
          </h2>
          <p className="mb-8 text-body-mobile text-slate-600 md:text-body">
            See how we stack up against the alternatives:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 text-left font-semibold text-slate-700 pr-4">Feature</th>
                  <th className="pb-3 text-center font-semibold text-accent pr-4">AI Adelaide</th>
                  <th className="pb-3 text-center font-semibold text-slate-700 pr-4">Traditional Service</th>
                  <th className="pb-3 text-center font-semibold text-slate-700">Voicemail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-3 pr-4 font-medium text-slate-800">{row.feature}</td>
                    <td className="py-3 pr-4 text-center">
                      {typeof row.ai === "boolean" ? (
                        row.ai ? (
                          <span className="text-green-600 font-bold">✓</span>
                        ) : (
                          <span className="text-red-400">✗</span>
                        )
                      ) : (
                        <span className="font-semibold text-accent">{row.ai}</span>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-center">
                      {typeof row.traditional === "boolean" ? (
                        row.traditional ? (
                          <span className="text-green-600 font-bold">✓</span>
                        ) : (
                          <span className="text-red-400">✗</span>
                        )
                      ) : (
                        <span className="text-slate-600">{row.traditional}</span>
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {typeof row.voicemail === "boolean" ? (
                        row.voicemail ? (
                          <span className="text-green-600 font-bold">✓</span>
                        ) : (
                          <span className="text-red-400">✗</span>
                        )
                      ) : (
                        <span className="text-slate-500 text-xs">{row.voicemail}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">How It Works</h2>
          <p className="mb-8 text-body-mobile text-slate-600 md:text-body">
            No new hardware. No apps to learn. Here&apos;s what happens from the moment a call comes in:
          </p>
          <ol className="mb-6 space-y-8">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {step.number}
                </span>
                <div>
                  <h3 className="mb-2 font-semibold text-slate-950">{step.heading}</h3>
                  <p className="text-body-mobile text-slate-600 md:text-body">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="rounded-xl bg-[#f6fffe] p-5">
            <p className="text-sm font-semibold text-slate-950">Example SMS you&apos;d receive:</p>
            <p className="mt-2 font-mono text-sm text-slate-700">
              New lead: Sarah Chen | 0412 345 678 | Blocked drain, urgent — water backing up in kitchen. 47 King William Rd, Goodwood.
            </p>
          </div>
        </div>
      </section>

      {/* CALL RECORDINGS & TRANSCRIPTS */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            Every Call Recorded. Every Word Transcribed.
          </h2>
          <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
            Unlike a traditional answering service where you just get a scribbled message, our AI answering service gives you the full picture after every call:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#f6fffe] p-6">
              <div className="mb-3 text-2xl">🎙️</div>
              <h3 className="mb-2 font-semibold text-slate-950">Full call recordings</h3>
              <p className="text-sm text-slate-600">
                Listen back to any call, any time. Hear exactly how the conversation went and how your AI receptionist handled it.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f6fffe] p-6">
              <div className="mb-3 text-2xl">📋</div>
              <h3 className="mb-2 font-semibold text-slate-950">Word-for-word transcripts</h3>
              <p className="text-sm text-slate-600">
                Every call is transcribed automatically. Search, review, and share call details without listening to recordings.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f6fffe] p-6">
              <div className="mb-3 text-2xl">📊</div>
              <h3 className="mb-2 font-semibold text-slate-950">Call analytics dashboard</h3>
              <p className="text-sm text-slate-600">
                See call volumes, peak times, how many leads were captured, and where callers are coming from — all in one place.
              </p>
            </div>
          </div>
          <p className="mt-6 text-body-mobile text-slate-600 md:text-body">
            This kind of visibility used to cost thousands per month with enterprise call centre software. It&apos;s included in every AI Adelaide plan from $79/month.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            Why Adelaide Businesses Choose Our Answering Service
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#f6fffe] p-6">
              <h3 className="mb-2 font-semibold text-slate-950">Adelaide-based team + AI backbone</h3>
              <p className="text-body-mobile text-slate-600 md:text-body">
                We&apos;re a local Adelaide business. We understand the local market, the suburbs, the industries. Your AI is backed by a team who knows what an Adelaide small business actually needs.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f6fffe] p-6">
              <h3 className="mb-2 font-semibold text-slate-950">Setup in 2–5 days, no hardware needed</h3>
              <p className="text-body-mobile text-slate-600 md:text-body">
                No new phone systems. No technician visits. Your existing business number stays the same. We configure everything remotely and you&apos;re live in days — not weeks.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f6fffe] p-6">
              <h3 className="mb-2 font-semibold text-slate-950">Real conversations, not voicemail trees</h3>
              <p className="text-body-mobile text-slate-600 md:text-body">
                Callers speak to an AI that sounds natural, adapts to the conversation, and actually gets the information you need. No robotic menus. No &quot;press 1 for sales.&quot; Just a real, helpful answer.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f6fffe] p-6">
              <h3 className="mb-2 font-semibold text-slate-950">No lock-in contract</h3>
              <p className="text-body-mobile text-slate-600 md:text-body">
                Month to month. Cancel anytime. We earn your business every month — we&apos;re not interested in trapping you. Most of our clients stay because the results speak for themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Who It&apos;s For</h2>
          <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
            Any Adelaide business that answers its own phone and can&apos;t always be there to pick up:
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.label}
                className="flex flex-col items-center gap-2 rounded-2xl bg-[#f6fffe] p-5 text-center"
              >
                <span className="text-3xl">{industry.icon}</span>
                <span className="text-sm font-medium text-slate-800">{industry.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-body-mobile text-slate-600 md:text-body">
            If you&apos;re running a business in Adelaide and missing calls costs you money, this is for you. Whether you&apos;re a one-person tradie in Mount Barker or a 10-person allied health clinic in the CBD — our answering service scales to fit.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="panel-light-soft group p-5 open:ring-1 open:ring-accent/20"
              >
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-950 marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Ready to Stop Missing Calls?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book your free missed call audit. We&apos;ll show you exactly how many calls you&apos;re missing and what they&apos;re costing you — with no obligation. Most businesses are live within 5 days.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link href="/audit" className="btn-primary px-8 py-4">
              Book Your Free Missed Call Audit <span aria-hidden>→</span>
            </Link>
            <a href="tel:+61871009788" className="text-accent hover:text-accent/80">
              Or call us: 08 7100 9788
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
