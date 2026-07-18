import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/home-v3/Reveal";
import { PRICING, siteConfig } from "@/lib/constants";
import FindYouDemo from "./parts";

// NDIS provider vertical page (new, 2026-07-17). Original copy — no existing
// ranking page is touched. Tone is deliberately calm and care-appropriate, not
// the tradie voice. No participant testimonials or invented outcomes (NDIS
// privacy + our never-invent rule); a real case study is HUMAN-INPUT-gated.
// Longtail keywords are carried in the H2s and FAQ questions for organic reach.
export const metadata: Metadata = {
  title: "NDIS Provider Websites & SEO Adelaide",
  description:
    "Websites, local SEO and enquiry automation for Adelaide NDIS providers — get found by participants, capture every enquiry, and grow referrals. From $699.",
  alternates: { canonical: "/ndis-provider-marketing-adelaide" },
};

const pillars = [
  {
    n: "01",
    title: "A website participants and families trust",
    body: "Clear services, service areas, and whether you take self-managed, plan-managed or NDIA-managed participants — laid out the way a family actually decides. Mobile-first, fast, and easy to enquire from. Live in 48 hours.",
    href: "/website-design-adelaide",
    link: "Website design",
  },
  {
    n: "02",
    title: "Get found when participants search",
    body: "Local SEO tuned to the terms people actually type — “support coordinator near me”, “NDIS [support] [suburb]”, “disability support provider Adelaide” — plus the directories participants browse when they compare providers.",
    href: "/seo",
    link: "Local SEO",
  },
  {
    n: "03",
    title: "Never miss an enquiry",
    body: "When a family finally works up to calling and it rings out, they call the next provider on the list. Missed-call text-back, enquiry capture and intake reminders make sure the people who reach out actually reach you.",
    href: "/ai-automation-adelaide",
    link: "Enquiry automation",
  },
];

const journey = [
  {
    title: "They search or ask",
    body: "A participant, family member, or support coordinator looks for providers — on Google, in a directory, or by word of mouth.",
  },
  {
    title: "They shortlist online",
    body: "Before anyone picks up the phone, they compare websites, read what you do, check your service area, and look for signs you’re the right fit.",
  },
  {
    title: "They reach out",
    body: "The provider who is easy to find, clear about their services, and quick to respond gets the enquiry — and the chance to help.",
  },
];

const whoFor = [
  "Support coordination and recovery coaching",
  "Supported independent living (SIL) and SDA",
  "Community, social and domestic support",
  "Allied health and therapeutic supports",
  "Plan management",
  "Support work and personal care providers",
];

const faqs = [
  {
    question: "How do NDIS participants find providers online?",
    answer:
      "Most participants, families and support coordinators research providers before making contact — through Google searches, the NDIS provider finder, independent directories, social media, and word of mouth. Self-managed and plan-managed participants in particular choose freely, so a clear website, an easy way to enquire, and being findable in local search all shape who they contact first.",
  },
  {
    question: "Do NDIS providers really need a website?",
    answer:
      "Yes. A professional website is one of the main ways participants and families decide whether to enquire. It’s where they learn what you offer, which supports and areas you cover, how you work, and how to get in touch. Without one, you rely on directories and referrals alone — and you’re invisible to the people searching online right now.",
  },
  {
    question: "How can NDIS providers get more clients and referrals?",
    answer:
      "By being easy to find and easy to trust. That means a clear website, strong local SEO so you appear when people search for your supports in your area, presence in the directories participants browse, and a reliable way to capture every enquiry so none slip through. We build all three so more of the right participants find you and follow through.",
  },
  {
    question: "Can you do SEO for NDIS providers in Adelaide?",
    answer:
      `Yes — local SEO is one of our core services (${PRICING.seo.fromLabel}). For NDIS providers we target the specific searches your participants use, build useful service and area pages, and improve your Google Business Profile so you show up when families look for support near them.`,
  },
  {
    question: "Is marketing allowed for NDIS providers?",
    answer:
      "Yes, providers can promote their services — but it must not be misleading, must respect participant privacy, and registered providers have obligations under the NDIS Commission. We build clear, honest websites and marketing designed to work within those rules, so you can grow without crossing a line. We’re not lawyers, so for specific compliance questions we’ll point you to the right guidance.",
  },
  {
    question: "What should an NDIS provider website include?",
    answer:
      "The essentials families look for: the supports you provide, the areas you service, whether you take self-managed, plan-managed or NDIA-managed participants, how you work, and a simple way to enquire or refer. We keep it clear and accessible, mobile-first, and quick to load — because many visitors are on a phone.",
  },
  {
    question: "How much does an NDIS provider website cost?",
    answer:
      `Websites start at ${PRICING.website.tiers[0].price} one-off and you own it outright, or from ${PRICING.website.monthly.price} on a monthly plan with hosting and care included. Local SEO is ${PRICING.seo.fromLabel} and enquiry automation is ${PRICING.automation.fromLabel} — all month to month, no lock-in. We’ll recommend the right mix on a free chat.`,
  },
  {
    question: "How long does it take to get set up?",
    answer:
      "A Starter website can be live in 48 hours; larger builds take 5–14 days. SEO builds over the following months, and enquiry automation is usually live in 2–5 business days. We start with the one thing that will make the biggest difference for your service first.",
  },
];

const INK = "#1D1D1F";

export default function NdisProviderMarketingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NDIS Provider Websites, SEO & Enquiry Systems",
    serviceType: "Digital marketing for NDIS providers",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "Websites, local SEO and enquiry automation for Adelaide NDIS providers — built to help participants and families find, trust and contact your service.",
    offers: {
      "@type": "Offer",
      price: PRICING.website.tiers[0].price.replace(/[^\d]/g, ""),
      priceCurrency: "AUD",
    },
  };

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
    <div className="bg-[#FBFBFD]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-14 pt-32 md:pb-16 md:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.15] blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "NDIS Provider Websites & SEO" },
            ]}
          />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="v3-rise font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
                For Adelaide NDIS providers · Websites · SEO · Enquiries
              </p>
              <h1
                className="v3-rise mt-4 max-w-2xl text-[34px] font-semibold leading-[1.07] tracking-[-0.03em] [animation-delay:.12s] [text-wrap:balance] md:text-[50px]"
                style={{ color: INK }}
              >
                Help the participants who need your NDIS service actually find it
              </h1>
              <p className="v3-rise mt-6 max-w-xl text-[16px] leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-[17px]">
                Participants, families and support coordinators research
                providers online before they ever make contact. We build the
                website, local search presence and enquiry systems that help
                Adelaide NDIS providers get found, get trusted, and get the
                enquiry — clearly and within the rules.
              </p>
              <div className="v3-rise mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:.36s]">
                <Link
                  href="/contact?service=website#send-message"
                  data-track="quote_ndis_hero"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0E8C74] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
                >
                  Get a free chat
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <a
                  href="https://cal.com/aiadelaide"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="book_call_ndis_hero"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.12] px-7 py-3.5 text-[15px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
                >
                  Book a 15-min call
                </a>
              </div>
              <p className="v3-rise mt-5 text-[13px] text-[#98989D] [animation-delay:.42s]">
                Adelaide-based · websites {PRICING.website.fromLabel} · SEO {PRICING.seo.fromLabel} · no lock-in
              </p>
            </div>
            <div className="v3-rise [animation-delay:.3s]">
              <FindYouDemo />
            </div>
          </div>
        </div>
      </section>

      {/* The shift — editorial */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[36px]" style={{ color: INK }}>
              Participants choose differently now
            </h2>
            <div className="mt-6 space-y-4 border-l-2 border-[#0E8C74]/30 pl-6">
              <p className="text-[16px] leading-relaxed text-[#424245] md:text-[17px]">
                More participants are self-managed and plan-managed, which means
                they — and their families and support coordinators — choose
                providers themselves. Before anyone picks up the phone, they
                compare providers online: your website, your service area, how
                clearly you explain what you do, and how easy you are to reach.
              </p>
              <p className="text-[16px] leading-relaxed text-[#424245] md:text-[17px]">
                If your service is hard to find, unclear, or slow to respond,
                the enquiry quietly goes to someone else — not because your care
                is worse, but because they never got that far. Being easy to
                find and easy to trust is now part of doing good work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">What we build</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Everything an NDIS provider needs to grow online
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-[24px] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,29,31,0.1)]">
                  <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#0E8C74]">{p.n}</p>
                  <h3 className="mt-3 text-[18px] font-semibold tracking-tight" style={{ color: INK }}>{p.title}</h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-[#6E6E73]">{p.body}</p>
                  <Link href={p.href} className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#0E8C74] transition hover:opacity-70">
                    {p.link}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How participants choose — journey */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">01</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              How participants choose a provider
            </h2>
          </Reveal>
          <div className="relative mt-12 hidden h-1 rounded-full bg-black/[0.07] md:block" aria-hidden>
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#5EF2D6] via-[#0E8C74] to-[#0E8C74]" />
            {journey.map((_, i) => (
              <span key={i} className="absolute top-1/2 h-3.5 w-3.5 rounded-full border-[3px] border-[#FBFBFD] bg-[#0E8C74] shadow-sm" style={{ left: `${(i / (journey.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }} />
            ))}
          </div>
          <div className="mt-4 grid gap-8 md:mt-10 md:grid-cols-3 md:gap-6">
            {journey.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.12}>
                <div className="border-l-2 border-[#0E8C74]/20 pl-5 md:border-l-0 md:pl-0">
                  <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0E8C74]">Step {i + 1}</p>
                  <h3 className="mt-2 text-[17px] font-semibold tracking-tight" style={{ color: INK }}>{j.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#6E6E73]">{j.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance — the dark moment */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-[#1D1D1F] p-9 text-white md:p-14">
              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#5EF2D6]/[0.13] blur-[90px]" aria-hidden />
              <p className="relative font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5EF2D6]">
                Built for the sector
              </p>
              <h2 className="relative mt-3 max-w-2xl text-[26px] font-semibold leading-tight tracking-[-0.02em] md:text-[34px]">
                Marketing that respects the rules — and your participants
              </h2>
              <p className="relative mt-4 max-w-3xl text-[15px] leading-relaxed text-white/65">
                NDIS providers work under real obligations: marketing can’t be
                misleading, participant privacy has to be protected, and
                registered providers answer to the NDIS Commission. We build
                clear, honest websites and marketing designed to work within
                those expectations — no exaggerated claims, no participant
                details shared without consent, no dark patterns. Growth and
                good conduct aren’t opposites.
              </p>
              <p className="relative mt-4 max-w-3xl text-[13px] text-white/40">
                We’re a digital studio, not legal advisers — for specific
                compliance questions we’ll point you to the right guidance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">02</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Who we work with
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73]">
              Registered and unregistered providers across the supports Adelaide
              participants search for most:
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {whoFor.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 0.08}>
                <li className="flex h-full items-start gap-3 rounded-[20px] border border-black/[0.06] bg-white p-6 text-[15px] leading-relaxed text-[#424245] shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0E8C74] text-[12px] font-bold text-white">✓</span>
                  <span>{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">03</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Clear pricing, no lock-in
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { label: "Website", price: PRICING.website.tiers[0].price, unit: "one-off", body: "A clear, accessible, mobile-first site — live in 48 hours. Or from " + PRICING.website.monthly.price + " with hosting and care included.", href: "/website-pricing" },
              { label: "Local SEO", price: PRICING.seo.tiers[0].price, unit: "", body: "Get found when participants and families search for your supports in your area. Month to month.", href: "/seo", dark: true },
              { label: "Enquiry automation", price: PRICING.automation.tiers[0].price, unit: "", body: "Missed-call text-back, enquiry capture and reminders so no enquiry slips away.", href: "/ai-automation-adelaide" },
            ].map((t, i) => (
              <Reveal key={t.label} delay={i * 0.08}>
                <div className={`flex h-full flex-col rounded-[28px] p-7 ${t.dark ? "v3-shimmer-border bg-[#1D1D1F] text-white shadow-[0_30px_80px_rgba(29,29,31,0.35)]" : "border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(29,29,31,0.05)]"}`}>
                  <p className={`font-mono text-[11px] font-semibold uppercase tracking-[0.16em] ${t.dark ? "text-[#5EF2D6]" : "text-[#0E8C74]"}`}>{t.label}</p>
                  <p className={`mt-3 text-[32px] font-semibold leading-none tracking-[-0.02em] ${t.dark ? "text-white" : "text-[#1D1D1F]"}`}>
                    {t.price.replace("/mo", "")}
                    {t.unit ? <span className={`text-[14px] font-normal ${t.dark ? "text-white/50" : "text-[#98989D]"}`}> {t.unit}</span> : <span className={`text-[14px] font-normal ${t.dark ? "text-white/50" : "text-[#98989D]"}`}>{t.price.includes("/mo") ? "/mo" : ""}</span>}
                  </p>
                  <p className={`mt-3.5 flex-1 text-[14px] leading-relaxed ${t.dark ? "text-white/70" : "text-[#6E6E73]"}`}>{t.body}</p>
                  <Link href={t.href} className={`mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold transition hover:opacity-70 ${t.dark ? "text-[#5EF2D6]" : "text-[#0E8C74]"}`}>
                    Learn more <span aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-3xl text-[14px] leading-relaxed text-[#6E6E73]">
              Most providers start with the one thing that will move the needle
              first — usually the website or getting found — then add the rest.
              Everything is month to month with no lock-in.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HUMAN INPUT NEEDED: a real, permission-backed NDIS provider result
          (service type, area, what changed, timeframe) once one exists. NDIS
          participant privacy applies — provider outcome only, never a
          participant's details. Do not invent client copy. Logged in
          docs/claims-to-verify.md. */}

      {/* FAQ */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">04</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              NDIS provider marketing questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
              {faqs.map((faq, i) => (
                <details key={faq.question} className="group" open={i === 0}>
                  <summary data-track="faq_open" className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 text-[16px] font-semibold text-[#1D1D1F] transition hover:bg-black/[0.02] [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="shrink-0 text-xl font-normal text-[#0E8C74] transition-transform duration-300 group-open:rotate-45" aria-hidden>+</span>
                  </summary>
                  <p className="px-7 pb-6 text-[15px] leading-relaxed text-[#6E6E73]">{faq.answer}</p>
                  {i < faqs.length - 1 && <div className="mx-7 border-t border-black/[0.06]" />}
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5EF2D6]/[0.16] blur-[110px]" aria-hidden />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] [text-wrap:balance] md:text-[48px]" style={{ color: INK }}>
              Let’s help more of the right participants find you
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              Book a free chat and we’ll look at how participants find providers
              like yours today, where you’re missing out, and the one change
              that would make the biggest difference — no obligation.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact?service=website#send-message"
                data-track="quote_ndis_cta"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0E8C74] px-8 py-4 text-[16px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
              >
                Send a Message
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="https://cal.com/aiadelaide"
                target="_blank"
                rel="noopener noreferrer"
                data-track="book_call_ndis_cta"
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-8 py-4 text-[16px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
              >
                Book a 15-min call
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
