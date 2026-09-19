import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/home-v3/Reveal";
import { PRICING, siteConfig } from "@/lib/constants";
import QuoteChase from "./parts";

// Quote Chaser — feature landing page (Ivan-approved 2026-07-17). Sells the
// quote-follow-up capability of the Automation Starter plan; deliberately NOT
// a separately priced product (CTA lands on plan=automation-starter). New URL,
// new copy — additive to the site, no existing ranking pages touched.
export const metadata: Metadata = {
  title: "Quote Chaser — Quote Follow-Up Adelaide",
  description:
    "Quote Chaser follows up every quote you send — three polite, perfectly timed nudges, automatically. Part of AI automation from $199/mo for Adelaide tradies.",
  alternates: {
    canonical: "/quote-chaser-adelaide",
  },
};

const steps = [
  {
    title: "You send the quote",
    body: "Nothing changes about how you work. Send quotes the way you always do — email, SMS, or from your job software.",
  },
  {
    title: "Quote Chaser waits, then nudges",
    body: "If there's no reply, it sends a polite follow-up at the right moment — then another, then a final check-in. Three touchpoints, perfectly timed, written to sound like you.",
  },
  {
    title: "You get the yes",
    body: "When the customer replies, it lands straight in your inbox or phone and the chasing stops instantly. Hot leads get flagged so you can call while they're keen.",
  },
];

const included = [
  "Missed call text back (instant SMS)",
  "SMS appointment reminders",
  "Quote follow-up sequence (3 touchpoints)",
  "Monthly automation review",
];

const faqs = [
  {
    question: "Will the follow-ups sound robotic?",
    answer:
      "No. The messages are written with you during setup, in your tone, and they read like a busy tradie checking in — not a marketing blast. You approve every template before anything is sent.",
  },
  {
    question: "What happens when the customer replies?",
    answer:
      "The sequence stops immediately and the reply comes straight to you. Quote Chaser never argues with a customer or negotiates on your behalf — it hands over the moment a human is needed.",
  },
  {
    question: "How much does Quote Chaser cost?",
    answer:
      `Quote Chaser is included in the Automation Starter plan at ${PRICING.automation.tiers[0].price}, alongside missed-call text-back and appointment reminders. Month to month, no lock-in.`,
  },
  {
    question: "Do I need a new website to use it?",
    answer:
      "No. Quote Chaser works with your existing phone number and email. If you want the full stack — website, SEO and automation together — we can do that too, but it's not required.",
  },
];

const INK = "#1D1D1F";

export default function QuoteChaserPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Quote Chaser — Automated Quote Follow-Up",
    serviceType: "Business Automation",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "Automated quote follow-up for Adelaide trades and service businesses. Three polite, timed touchpoints per quote, included in the Automation Starter plan.",
    offers: {
      "@type": "Offer",
      price: PRICING.automation.tiers[0].price.replace(/[^\d]/g, ""),
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: PRICING.automation.tiers[0].price.replace(/[^\d]/g, ""),
        priceCurrency: "AUD",
        unitText: "MONTH",
      },
    },
  };

  return (
    <div className="bg-[#FBFBFD]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero + live chase */}
      <section className="relative overflow-hidden px-6 pb-10 pt-32 md:pb-12 md:pt-44">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.15] blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "AI Automation", href: "/ai-automation-adelaide" },
              { label: "Quote Chaser" },
            ]}
          />
          <div className="mt-8 grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="v3-rise font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
                Automation · Quote follow-up
              </p>
              <h1
                className="v3-rise mt-4 max-w-2xl text-[36px] font-semibold leading-[1.06] tracking-[-0.03em] [animation-delay:.12s] [text-wrap:balance] md:text-[52px]"
                style={{ color: INK }}
              >
                Quote Chaser: the follow-up you never have to remember
              </h1>
              <p className="v3-rise mt-6 max-w-xl text-[16px] leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-[17px]">
                Most quotes don&apos;t get rejected — they get forgotten.
                Quote Chaser sends three polite, perfectly timed follow-ups on
                every quote you send, automatically, and stops the second the
                customer replies. You stay on the tools; it gets the yes.
              </p>
              <div className="v3-rise mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:.36s]">
                <Link
                  href="/contact?service=automation&plan=automation-starter#send-message"
                  data-track="quote_chaser_cta_hero"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0E8C74] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
                >
                  Start chasing quotes
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <a
                  href="tel:+61871009788"
                  data-track="tel_quote_chaser"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.12] px-7 py-3.5 font-mono text-[15px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
                >
                  08 7100 9788
                </a>
              </div>
              <p className="v3-rise mt-5 text-[13px] text-[#98989D] [animation-delay:.42s]">
                Included in Automation Starter — {PRICING.automation.tiers[0].price}, no lock-in.
              </p>
            </div>
            <div className="v3-rise [animation-delay:.3s]">
              <QuoteChase />
            </div>
          </div>
        </div>
      </section>

      {/* Why quotes die */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[36px]" style={{ color: INK }}>
              Quotes don&apos;t say no. They go quiet.
            </h2>
            <div className="mt-6 space-y-4 border-l-2 border-[#0E8C74]/30 pl-6">
              <p className="text-[16px] leading-relaxed text-[#424245] md:text-[17px]">
                You spend an evening pricing a job, send the quote, and hear
                nothing. The customer isn&apos;t rude — they&apos;re busy, they
                got three quotes, and the tradie who checks in first usually
                wins the work. Following up feels awkward and always happens
                &quot;tomorrow&quot;.
              </p>
              <p className="text-[16px] leading-relaxed text-[#424245] md:text-[17px]">
                Quote Chaser makes the awkward part automatic. Three polite
                touchpoints, perfectly timed — because following up is the
                difference between a quote and a job, and something should be
                doing it even when you can&apos;t.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works — gradient rail */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">01</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              How It Works
            </h2>
          </Reveal>
          <div className="relative mt-12 hidden h-1 rounded-full bg-black/[0.07] md:block" aria-hidden>
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#5EF2D6] via-[#0E8C74] to-[#0E8C74]" />
            {steps.map((_, i) => (
              <span
                key={i}
                className="absolute top-1/2 h-3.5 w-3.5 rounded-full border-[3px] border-[#F5F5F7] bg-[#0E8C74] shadow-sm"
                style={{ left: `${(i / (steps.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }}
              />
            ))}
          </div>
          <div className="mt-4 grid gap-8 md:mt-10 md:grid-cols-3 md:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="border-l-2 border-[#0E8C74]/20 pl-5 md:border-l-0 md:pl-0">
                  <h3 className="text-[17px] font-semibold tracking-tight" style={{ color: INK }}>
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#6E6E73]">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — dark moment */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-[#1D1D1F] p-8 text-white md:p-12">
              <div
                className="pointer-events-none absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#5EF2D6]/[0.13] blur-[90px]"
                aria-hidden
              />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
                <div>
                  <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5EF2D6]">
                    Part of Automation Starter
                  </p>
                  <h2 className="mt-4 text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[36px]">
                    One plan. Every lead chased.
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/65">
                    Quote Chaser isn&apos;t a separate subscription — it comes
                    bundled with the rest of the Automation Starter plan, so
                    missed calls, reminders and quote follow-ups are all
                    handled by the same system.
                  </p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {included.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-white/80">
                        <span className="mt-[2px] font-semibold text-[#5EF2D6]">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-[22px] bg-white/[0.05] p-7 text-center">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5EF2D6]">
                      Automation Starter
                    </p>
                    <p className="mt-2 text-[38px] font-semibold leading-none tracking-[-0.02em] tabular-nums">
                      {PRICING.automation.tiers[0].price}
                    </p>
                    <p className="mt-3 text-[12.5px] text-white/45">
                      Month to month · no lock-in
                    </p>
                  </div>
                  <Link
                    href="/contact?service=automation&plan=automation-starter#send-message"
                    data-track="quote_chaser_cta_pricing"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0E8C74] px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.5)]"
                  >
                    Get Quote Chaser
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">02</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Quote Chaser FAQs
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
              {faqs.map((faq, i) => (
                <details key={faq.question} className="group" open={i === 0}>
                  <summary
                    data-track="faq_open"
                    className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 text-[16px] font-semibold text-[#1D1D1F] transition hover:bg-black/[0.02] [&::-webkit-details-marker]:hidden"
                  >
                    {faq.question}
                    <span className="shrink-0 text-xl font-normal text-[#0E8C74] transition-transform duration-300 group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="px-7 pb-6 text-[15px] leading-relaxed text-[#6E6E73]">{faq.answer}</p>
                  {i < faqs.length - 1 && <div className="mx-7 border-t border-black/[0.06]" />}
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related + CTA */}
      <section className="relative overflow-hidden px-6 pb-24 pt-4 md:pb-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5EF2D6]/[0.16] blur-[110px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] [text-wrap:balance] md:text-[48px]" style={{ color: INK }}>
              Stop losing quotes to silence
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              Book a free chat and we&apos;ll set up Quote Chaser around the
              way you already quote. Want the whole system? See{" "}
              <Link href="/ai-automation-adelaide" className="font-semibold text-[#0E8C74] underline decoration-[#0E8C74]/30 underline-offset-4 transition hover:text-[#1D1D1F]">
                AI automation
              </Link>{" "}
              or{" "}
              <Link href="/missed-call-text-back-adelaide" className="font-semibold text-[#0E8C74] underline decoration-[#0E8C74]/30 underline-offset-4 transition hover:text-[#1D1D1F]">
                missed-call text-back
              </Link>
              .
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact?service=automation&plan=automation-starter#send-message"
                data-track="quote_chaser_cta_footer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0E8C74] px-8 py-4 text-[16px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
              >
                Send a Message
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-8 py-4 text-[16px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
              >
                Book Free Chat <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
