import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best AI Receptionist Australia (2026)",
  description:
    "Looking for the best AI receptionist in Australia? Compare AI Adelaide vs Ruby vs CallSorted on price, integrations, and 24/7 answering.",
  alternates: {
    canonical: "/best-ai-receptionist-australia",
  },
};

const competitors = [
  {
    name: "AI Adelaide",
    type: "AI + setup service (Adelaide-built)",
    startingPrice: "From $199/mo",
    adelaideLocal: true,
    australianVoice: true,
    bookingIntegration: "ServiceM8, Tradify, Jobber, Calendly, Google Calendar, Cliniko, Nookal",
    support: "Local AU team, same-day responses",
    bestFor: "Adelaide small businesses and tradies who want a complete setup + ongoing tuning",
    notes: "Includes setup, integrations, and ongoing tuning — not just software access.",
  },
  {
    name: "Ruby Receptionists",
    type: "Live human answering (US)",
    startingPrice: "From ~$310/mo + usage",
    adelaideLocal: false,
    australianVoice: false,
    bookingIntegration: "Limited — message-taking focus",
    support: "US-based, AU business hours overlap only",
    bestFor: "US-style businesses with light call volume and human-voice preference",
    notes: "Quality good, but per-minute pricing stacks up fast and timezone overlap is real friction.",
  },
  {
    name: "AnswerConnect",
    type: "Live human call centre",
    startingPrice: "From ~$425/mo",
    adelaideLocal: false,
    australianVoice: false,
    bookingIntegration: "Custom — usually via Zapier or webhook",
    support: "AU phone support, US operators",
    bestFor: "Businesses wanting human voice + 24/7 and okay with offshore operators",
    notes: "Established provider; offshoring means occasional accent and process mismatches.",
  },
  {
    name: "CallSorted",
    type: "AI receptionist (newer entrant)",
    startingPrice: "From ~$149/mo",
    adelaideLocal: false,
    australianVoice: true,
    bookingIntegration: "Basic calendar integrations",
    support: "Self-serve, limited onboarding",
    bestFor: "Tech-savvy owners happy to configure themselves",
    notes: "No native app, instant SMS — DIY setup, less handholding.",
  },
  {
    name: "AnswR",
    type: "AI receptionist (general SMB)",
    startingPrice: "From ~$99/mo",
    adelaideLocal: false,
    australianVoice: true,
    bookingIntegration: "Google Calendar, basic CRM",
    support: "Email support",
    bestFor: "Budget-conscious buyers who want software-only",
    notes: "Cheap, but lacks Adelaide-local setup and integration depth.",
  },
  {
    name: "Valory",
    type: "AI receptionist (comparison-favourite)",
    startingPrice: "From ~$249/mo",
    adelaideLocal: false,
    australianVoice: true,
    bookingIntegration: "Cal.com, HubSpot, Salesforce",
    support: "Email + chat",
    bestFor: "Sales-heavy businesses prioritising lead qualification",
    notes: "Often #1 in comparison rankings — strong on inbound qualification.",
  },
];

const faqItems = [
  {
    question: "What is an AI receptionist?",
    answer:
      "An AI receptionist is software that answers your business phone, talks to callers like a human would, captures the lead's details, books appointments, and forwards urgent calls. Modern AI receptionists use natural Australian voices and don't sound robotic. They cost a fraction of a live human receptionist and answer every call, 24/7.",
  },
  {
    question: "How much does an AI receptionist cost in Australia?",
    answer:
      "Most AI receptionists in Australia start from $99-$300/month for the software alone. Setup, integration, and ongoing tuning usually adds $300-$2,000 one-off. Our AI Adelaide service bundles both — software + setup + ongoing tuning — from $199/month, which is why most of our clients pay less than the national average while getting more support.",
  },
  {
    question: "Which AI receptionist is best for tradies in Adelaide?",
    answer:
      "For tradies, the practical pick is an AI receptionist that integrates with ServiceM8, Tradify, or Jobber — that's how jobs flow into your calendar without manual entry. Pricing should be flat monthly (no per-call charges), support should be Australian, and the voice should sound local. AI Adelaide ticks all three. Valory and CallSorted are fine software-only options if you want to set it up yourself.",
  },
  {
    question: "Which AI receptionist is best for clinics?",
    answer:
      "Clinics need appointment booking, intake forms, after-hours coverage, and integration with Cliniko, Nookal, or Best Practice. The AI should sound warm but professional and handle rescheduling without friction. AI Adelaide is built for this. Ruby and AnswerConnect are good live alternatives if your patient demographic insists on a human voice.",
  },
  {
    question: "Will callers know they're talking to AI?",
    answer:
      "Not unless you tell them. We use natural Australian voices with proper pacing and tone. Most callers assume they're speaking to your team. Some industries (luxury services, complex medical intake) benefit from disclosing it; most don't.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most AI receptionists are live within 2-5 business days. Software-only options (Valory, CallSorted, AnswR) take an afternoon once you've configured your services and FAQs. Bundled services like AI Adelaide take a few days because we handle the configuration, integration, and testing for you.",
  },
  {
    question: "Can it transfer urgent calls?",
    answer:
      "Yes. You set the rules. If a caller mentions an emergency, the AI forwards the call to your mobile or sends an immediate SMS. This is the biggest practical difference vs voicemail or DIY setups.",
  },
  {
    question: "What if the AI misunderstands?",
    answer:
      "Modern AI is good enough that misunderstandings are rare. When they happen, the AI takes a detailed message, escalates as urgent, and we review the call logs to fix the gap. Most issues are caught and patched within a day.",
  },
  {
    question: "Is this worth it for a small business?",
    answer:
      "For most Adelaide small businesses, yes. If you miss even 5 calls a week at a $300 average job value, that's $1,500/week in opportunity. Recovering just 20% of those calls more than pays for an AI receptionist.",
  },
  {
    question: "Can I switch providers later?",
    answer:
      "Yes. Most providers don't lock you in. Switching usually takes a week — redirect your number, configure the new AI, test. If you're on AI Adelaide, switching is even easier because we own the integration layer, not the phone number.",
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

export default function BestAIReceptionistAustraliaPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <FaqJsonLd faqs={faqItems} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/blog" },
          { label: "Best AI Receptionist Australia 2026" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">Comparison Guide · 2026</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Best AI Receptionist Australia 2026: An Honest Comparison
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Most AI receptionist reviews are affiliate-driven fluff. This one isn't. We built one, we use one, and we benchmark it against the alternatives every quarter. Below is the shortlist for Adelaide small businesses — tradies, clinics, retail, professional services — and the honest reasoning behind each pick.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/ai-receptionist-adelaide" className="btn-primary px-8 py-4">
              See Our AI Receptionist <span aria-hidden>→</span>
            </Link>
            <Link href="/ai-receptionist-cost-adelaide" className="btn-secondary px-8 py-4">
              See Cost Breakdown <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">How we picked the shortlist</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            We tested (or actively benchmarked against) the main contenders on five factors that actually matter to Adelaide small businesses:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              {
                title: "Australian voice quality",
                body: "Does it actually sound Australian, or does it still feel like a robot wearing a fake accent?",
              },
              {
                title: "Integration depth",
                body: "Does it plug into ServiceM8, Tradify, Cliniko, Xero, MYOB, Google Calendar? Or do you spend a week wiring it up?",
              },
              {
                title: "Real cost",
                body: "Monthly fee + per-call charges + setup + integration. The brochure price is the cheapest part of the bill.",
              },
              {
                title: "Local support",
                body: "If something breaks at 9pm on a Sunday, do you talk to someone in Adelaide who understands tradies?",
              },
              {
                title: "Lead handling",
                body: "Does it just take messages, or does it book appointments, qualify leads, and follow up automatically?",
              },
            ].map((factor) => (
              <li key={factor.title} className="panel-light-soft flex items-start gap-3 p-5 md:p-6">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">✓</span>
                <div>
                  <p className="font-semibold text-slate-950">{factor.title}</p>
                  <p className="text-sm text-slate-700">{factor.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">The 2026 shortlist</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Provider</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Type</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Starting price</th>
                  <th className="py-2 font-semibold text-slate-950">Best for</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c, i) => (
                  <tr key={c.name} className={i === competitors.length - 1 ? "" : "border-b border-slate-100 align-top"}>
                    <td className="py-3 pr-4 font-semibold text-slate-950">{c.name}</td>
                    <td className="py-3 pr-4">{c.type}</td>
                    <td className="py-3 pr-4">{c.startingPrice}</td>
                    <td className="py-3">{c.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="grid gap-6 md:grid-cols-2">
          {competitors.map((c) => (
            <div key={c.name} className="panel-light p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{c.name}</h3>
              <p className="mb-3 text-sm text-slate-500">{c.type}</p>
              <div className="mb-3 space-y-1 text-sm">
                <p><strong className="text-slate-950">Starting price:</strong> {c.startingPrice}</p>
                <p><strong className="text-slate-950">Adelaide-local:</strong> {c.adelaideLocal ? "Yes" : "No"}</p>
                <p><strong className="text-slate-950">Australian voice:</strong> {c.australianVoice ? "Yes" : "No"}</p>
                <p><strong className="text-slate-950">Booking integrations:</strong> {c.bookingIntegration}</p>
                <p><strong className="text-slate-950">Support:</strong> {c.support}</p>
              </div>
              <p className="text-sm text-slate-700">{c.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Best AI receptionist for tradies (Adelaide)</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Tradie-specific picks prioritise ServiceM8/Tradify integration, after-hours emergency handling, and per-call pricing that's flat (not per-minute). Top picks in order:
          </p>
          <ol className="space-y-3 text-body-mobile text-slate-700 md:text-body">
            <li><strong>1. AI Adelaide — From $199/mo.</strong> Adelaide-built, includes setup and integrations, integrates with ServiceM8/Tradify/Jobber. Best for tradies who want a done-for-you setup.</li>
            <li><strong>2. Valory — From ~$249/mo.</strong> Strong on inbound qualification and CRM integration. DIY setup, no Adelaide-local support.</li>
            <li><strong>3. CallSorted — From ~$149/mo.</strong> Cheapest option with decent AI quality. DIY setup, basic integrations.</li>
            <li><strong>4. AnswR — From ~$99/mo.</strong> Lowest entry price, but limited Adelaide-local integrations and email-only support.</li>
          </ol>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Best AI receptionist for clinics</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Clinics need patient intake, appointment rescheduling, and after-hours coverage. They also need a warm, professional voice. Top picks:
          </p>
          <ol className="space-y-3 text-body-mobile text-slate-700 md:text-body">
            <li><strong>1. AI Adelaide — From $199/mo.</strong> Integrates with Cliniko and Nookal. Australian voice, after-hours patient rescheduling, intake forms. Done-for-you setup.</li>
            <li><strong>2. Ruby Receptionists — From ~$310/mo.</strong> Live human voice. Strong if your patient demographic insists on human-only contact. Per-minute pricing adds up.</li>
            <li><strong>3. AnswerConnect — From ~$425/mo.</strong> Established call centre, AU phone support, US operators. Good for high-volume clinics.</li>
            <li><strong>4. Valory — From ~$249/mo.</strong> Strong on lead qualification, less clinic-specific. Best if you're growing and need CRM-grade routing.</li>
          </ol>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">How much does an AI receptionist cost in 2026?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Tier</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Software</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Setup</th>
                  <th className="py-2 font-semibold text-slate-950">Total first year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">DIY software (Valory, CallSorted, AnswR)</td>
                  <td className="py-3 pr-4">$99-$300/mo</td>
                  <td className="py-3 pr-4">$0 (you do it)</td>
                  <td className="py-3">$1,200-$3,600</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Bundled service (AI Adelaide)</td>
                  <td className="py-3 pr-4">$199-$497/mo</td>
                  <td className="py-3 pr-4">Included</td>
                  <td className="py-3">$2,388-$5,964</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Live human (Ruby, AnswerConnect)</td>
                  <td className="py-3 pr-4">$310-$1,500+/mo</td>
                  <td className="py-3 pr-4">$0-$500</td>
                  <td className="py-3">$3,720-$18,000+</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-950">In-house receptionist</td>
                  <td className="py-3 pr-4">~$3,500-$4,500/mo</td>
                  <td className="py-3 pr-4">$1,000+</td>
                  <td className="py-3">$43,000-$55,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Most Adelaide small businesses land in the bundled-service tier. The ROI is fastest because setup and integrations are done for you.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqItems.map((faq) => (
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Want to see how AI Adelaide stacks up for your business?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            15-minute call, no fluff. We&apos;ll show you what your AI receptionist would say, what tools it would plug into, and what your monthly cost would look like.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/ai-receptionist-adelaide" className="btn-primary px-8 py-4">
              See Our AI Receptionist <span aria-hidden>→</span>
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