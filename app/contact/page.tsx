import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/home-v3/Reveal";

export const metadata: Metadata = {
  // Phase 8 punch list P4: raw title contained "AI Adelaide" and the root
  // layout's title.template would have appended " | AI Adelaide" again,
  // producing a double-brand title. `absolute` bypasses the template so
  // this exact string renders with no suffix appended.
  title: { absolute: "Contact AI Adelaide — Free Website, SEO & Automation Quote" },
  description:
    "Free 15-minute consultation with Adelaide website, SEO and AI automation specialists. Fixed quote on the spot, reply within 2 business hours. No pressure.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact AI Adelaide | Free Chat",
    description: "Free 15-minute consultation. We look at your Adelaide business and recommend the right website, SEO, or AI automation plan — with a fixed quote on the spot.",
    url: `${siteConfig.url}/contact`,
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Contact AI Adelaide | Free Chat",
    description: "Free 15-minute consultation. We look at your Adelaide business and recommend the right website, SEO, or AI automation plan — with a fixed quote on the spot.",
    images: ["/twitter-image"],
  },
};

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Websites are live in 48 hours (Starter) to 14 days (Growth). SEO shows first movement in 30-60 days. AI automation is live in 2-5 business days.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "None. We handle everything. You tell us what you do, we design, write, and build. You review once, then we push it live.",
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "That's what the free chat is for. If we don't think a website, SEO, or automation will genuinely help you, we'll tell you upfront — and recommend someone else if that's the right answer.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Websites from $699 (one-off). SEO from $399/month. AI automation from $199/month. No lock-in, no agency bloat. You'll get a fixed quote on the free chat.",
  },
];

const steps: [string, string][] = [
  ["01", "Tell us about your business"],
  ["02", "We recommend the right service (website, SEO, or automation)"],
  ["03", "You get a fixed quote on the spot"],
];

const INK = "#1D1D1F";

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${siteConfig.url}/contact#webpage`,
        name: "Book Free Chat",
        url: `${siteConfig.url}/contact`,
        inLanguage: "en-AU",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/contact#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#FBFBFD]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-12 pt-32 md:pb-14 md:pt-44">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.15] blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
          <div className="mt-10 text-center">
            <p className="v3-rise font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
              Message us — we reply within 2 business hours
            </p>
            <h1
              className="v3-rise mx-auto mt-4 max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] [animation-delay:.12s] [text-wrap:balance] md:text-[64px]"
              style={{ color: INK }}
            >
              Send Us a Message
            </h1>
            <p className="v3-rise mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-[17px]">
              Browsing at night? Send a message now, we&apos;ll reply in the
              morning. Tell us about your Adelaide business — what you do,
              what&apos;s not working, what you&apos;re trying to figure out.
              We&apos;ll send a useful reply (and a fixed quote if a website,
              SEO, or AI automation makes sense).
            </p>
          </div>
        </div>
      </section>

      {/* Three steps — gradient rail */}
      <section className="px-6 pb-14 md:pb-16">
        <div className="mx-auto max-w-container">
          <div className="relative hidden h-1 rounded-full bg-black/[0.07] md:block" aria-hidden>
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#5EF2D6] via-[#0E8C74] to-[#0E8C74]" />
            {steps.map((_, i) => (
              <span
                key={i}
                className="absolute top-1/2 h-3.5 w-3.5 rounded-full border-[3px] border-[#FBFBFD] bg-[#0E8C74] shadow-sm"
                style={{ left: `${(i / (steps.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }}
              />
            ))}
          </div>
          <div className="mt-4 grid gap-6 md:mt-8 md:grid-cols-3">
            {steps.map(([step, copy], i) => (
              <Reveal key={step} delay={i * 0.1}>
                <div className="h-full rounded-[20px] border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E8C74]">
                    Step {step}
                  </p>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#424245]">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The form */}
      <section className="px-6 pb-16 md:pb-20">
        <div id="send-message" className="mx-auto max-w-container scroll-mt-28">
          <ContactForm />
        </div>
      </section>

      {/* Prefer to book a time? — cal.com */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-container">
          <Reveal>
            <div className="flex flex-col items-center gap-5 rounded-[28px] border border-black/[0.06] bg-white p-8 text-center shadow-[0_2px_12px_rgba(29,29,31,0.05)] sm:flex-row sm:items-center sm:justify-between sm:text-left md:p-10">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0E8C74]">
                  Prefer to pick a time?
                </p>
                <h2 className="mt-2 text-[22px] font-semibold tracking-tight text-[#1D1D1F] md:text-[26px]">
                  Book a free 15-minute call
                </h2>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#6E6E73]">
                  Grab a slot that suits you — no forms, no phone tag.
                </p>
              </div>
              <a
                href="https://cal.com/aiadelaide"
                target="_blank"
                rel="noopener noreferrer"
                data-track="book_call_contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0E8C74] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
              >
                Pick a time
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prefer email — the dark moment */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-[#1D1D1F] p-10 text-center text-white md:p-14">
              <div
                className="pointer-events-none absolute left-1/2 top-[-140px] h-[320px] w-[560px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.13] blur-[90px]"
                aria-hidden
              />
              <p className="relative font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5EF2D6]">
                Prefer email?
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="relative mt-4 inline-block text-[24px] font-semibold tracking-tight text-white underline decoration-[#5EF2D6]/40 underline-offset-8 transition hover:decoration-[#5EF2D6] md:text-[32px]"
              >
                {siteConfig.email}
              </a>
              <p className="relative mt-5 text-[15px] text-white/55">
                Response time: Within 2 business hours
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs — accordion */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="text-center">
              <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
                Questions before booking?
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
                Frequently Asked Questions
              </h2>
            </div>
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
    </div>
  );
}
