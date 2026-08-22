import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/home-v3/Reveal";
import { PRICING, siteConfig } from "@/lib/constants";
import RankLadder from "./parts";

export const metadata: Metadata = {
  // /seo owns the broad "SEO services Adelaide" intent; /local-seo-adelaide
  // owns the "local SEO Adelaide" modifier. T5 (2026-07-13) shifted this
  // page's title/description/schema/breadcrumb off "Local SEO" so the two
  // pages stop competing for the same query. Visible H1 intent unchanged.
  title: `SEO Services Adelaide — Plans ${PRICING.seo.fromLabel}`,
  description:
    `SEO services for Adelaide small businesses: on-page and technical SEO, content, link building, Google Business Profile, reporting. ${PRICING.seo.fromLabel}, no lock-in.`,
  alternates: {
    canonical: "/seo",
  },
};

const includedItems = [
  {
    title: "Google Business Profile optimisation",
    body:
      "Your GBP is your most powerful free tool — if it's set up right. We optimise your categories, services, photos, and get you set up for reviews that build trust.",
  },
  {
    title: "Suburb targeting pages",
    body:
      "Where search demand and your real service coverage justify it, we build useful suburb pages for areas such as Glenelg, Norwood, Modbury, and Salisbury. Each page is written to match local buying intent without duplicating thin copy.",
  },
  {
    title: "On-page SEO",
    body:
      "Title tags, meta descriptions, heading structure, internal links — all the technical foundations that tell Google your site is the real deal.",
  },
  {
    title: "Content that ranks",
    body:
      "We write practical, useful content that answers the questions your customers are actually Googling. Not filler. Not keyword stuffing. Stuff people actually read.",
  },
  {
    title: "Monthly reporting",
    body:
      "You see exactly where you're ranking, what's improving, and what we're working on. Plain English, no jargon.",
  },
  {
    title: "Link building",
    body:
      "Digital PR, local citations, industry partnerships, and niche-relevant backlinks from real Adelaide and Australian sites — not spammy directories.",
  },
  {
    title: "Conversion tracking",
    body:
      "Call tracking, form tracking, Google Analytics 4, Search Console. We measure what turns into jobs, not just traffic.",
  },
];

const whoItsFor = [
  "Trades businesses — plumbers, electricians, builders, painters, landscapers",
  "HVAC and air conditioning installers",
  "Allied health clinics — physio, chiro, dental, massage",
  "Cafes, restaurants, and retail shops",
  "Beauty salons, hairdressers, and wellness studios",
  "Professional services — accountants, real estate, legal",
  "Any Adelaide small business that relies on inbound leads",
];

const timeline = [
  {
    label: "First 30 days",
    body:
      "Foundation work — GBP optimisation, suburb pages built, on-page fixes complete",
  },
  {
    label: "Days 30–90",
    body:
      "Content published, local signals building, early movement measured where Google has recrawled the work",
  },
  {
    label: "3–6 months",
    body:
      "A common review window for judging meaningful visibility gains; competition and starting position affect the pace",
  },
];

const clusterLinks = [
  { href: "/local-seo-adelaide", label: "Local SEO Adelaide", note: "Google Business Profile, suburb pages, reviews, citations" },
  { href: "/ai-seo-adelaide", label: "AI SEO Adelaide", note: "Improve your eligibility for Google and AI-assisted discovery" },
  { href: "/seo-for-tradies-adelaide", label: "SEO for tradies Adelaide", note: "The playbook for plumbers, sparkies, builders and HVAC" },
  { href: "/google-business-profile-optimisation-adelaide", label: "Google Business Profile optimisation", note: "Improve relevance, completeness, reviews, and local customer confidence" },
  { href: "/automotive-seo-services", label: "Automotive SEO services", note: "Mechanics, panel beaters, dealerships, tyre shops" },
  { href: "/hotel-seo-services", label: "Hotel SEO services", note: "Direct bookings instead of OTA commissions" },
  { href: "/aged-care-seo-services", label: "Aged care SEO services", note: "Home care, retirement living, NDIS providers" },
  { href: "/seo-vs-google-ads-adelaide", label: "SEO vs Google Ads", note: "Which one first? An honest comparison for Adelaide budgets" },
  { href: "/blog/how-much-does-seo-cost-adelaide", label: "How much does SEO cost in Adelaide?", note: "Understand common scopes, price tiers and quote warning signs" },
];

const faqs = [
  {
    question: "How much does SEO cost in Adelaide?",
    answer:
      `Our Local SEO plan is ${PRICING.seo.tiers[0].price} and Growth SEO is ${PRICING.seo.tiers[1].price} — month to month, with no lock-in. Every plan includes an agreed scope covering content, Google Business Profile work, and reporting, so you can see what was completed and what changed.`,
  },
  {
    question: "Do I need a new website to do SEO?",
    answer:
      "Not necessarily. If your current site is functional, we can work with it. If it's genuinely holding you back, we'll tell you honestly — and we can build you a new one fast.",
  },
  {
    question: "How is this different from what my web guy already does?",
    answer:
      "Most web developers don't do ongoing SEO. They build the site and move on. We specifically focus on local visibility — suburb targeting, GBP, content — the stuff that gets Adelaide customers finding you.",
  },
  {
    question: "Do you lock me into a contract?",
    answer:
      "No lock-in. We work month to month. If you're not happy with the progress, you can walk away. We'd rather keep you because the results are good.",
  },
  {
    question: "What results can I expect?",
    answer:
      "It depends on your starting position, website, competition, service area, and Google's crawl and ranking systems. Some lower-competition searches can move earlier; competitive Adelaide terms usually need sustained work over several months. We set a baseline first, report movement monthly, and never guarantee a position.",
  },
  {
    question: "What SEO packages do you offer, and what do they cost?",
    answer:
      `Local SEO is ${PRICING.seo.tiers[0].price} and includes Google Business Profile, local pages and monthly content. Growth SEO is ${PRICING.seo.tiers[1].price} with more content, pages and active authority work. Both are month to month with no lock-in.`,
  },
  {
    question: "What's the difference between your SEO and a big agency?",
    answer:
      "We're Adelaide-based, month to month, and transparent about what is being worked on. You get a direct line to the person responsible for your account, a clear monthly scope, and reporting tied to enquiries and search visibility rather than vague activity lists.",
  },
];

const INK = "#1D1D1F";

function ServiceJsonLd() {
  const monthlyPrice = PRICING.seo.tiers[0].price.replace(/[^\d]/g, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Services Adelaide",
    serviceType: "Search Engine Optimization",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
    },
    description:
      "SEO services for Adelaide small businesses: technical foundations, useful service content, local search, authority building and enquiry tracking.",
    offers: {
      "@type": "Offer",
      price: monthlyPrice,
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: monthlyPrice,
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

export default function SeoPage() {
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
      <ServiceJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero + rank ladder */}
      <section className="relative overflow-hidden px-6 pb-10 pt-32 md:pb-12 md:pt-44">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.15] blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "SEO Services Adelaide" },
            ]}
          />
          <div className="mt-8 grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="v3-rise font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
                SEO Services for Adelaide Businesses
              </p>
              <h1
                className="v3-rise mt-4 max-w-2xl text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] [animation-delay:.12s] [text-wrap:balance] md:text-[56px]"
                style={{ color: INK }}
              >
                SEO Services Adelaide for More Enquiries
              </h1>
              <p className="v3-rise mt-6 max-w-xl text-[16px] leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-[17px]">
                We improve the parts of your website and online presence that
                help Adelaide customers discover, understand, and contact your
                business: technical SEO, service content, local search,
                authority building, and conversion tracking.
              </p>
              <p className="v3-rise mt-4 max-w-xl text-[14px] leading-relaxed text-[#6E6E73] [animation-delay:.3s]">
                Need Google Maps and suburb visibility first? Start with{" "}
                <Link href="/local-seo-adelaide" className="font-semibold text-[#0E8C74] underline underline-offset-4 hover:opacity-70">
                  Local SEO Adelaide
                </Link>
                . If your current website is the constraint, see our{" "}
                <Link href="/website-design-adelaide" className="font-semibold text-[#0E8C74] underline underline-offset-4 hover:opacity-70">
                  website design service
                </Link>
                .
              </p>
              <div className="v3-rise mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:.36s]">
                <Link
                  href="/audit"
                  data-track="quote_seo_hero"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0E8C74] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
                >
                  Get a Free SEO Audit
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/contact#send-message"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.12] px-7 py-3.5 text-[15px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
                >
                  Talk to an Adelaide SEO Specialist <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="v3-rise [animation-delay:.3s]">
              <RankLadder />
            </div>
          </div>
        </div>
      </section>

      {/* Already searching — editorial */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[36px]" style={{ color: INK }}>
              Your Next Customer Is Already Searching
            </h2>
            <div className="mt-6 space-y-4 border-l-2 border-[#0E8C74]/30 pl-6">
              <p className="text-[16px] leading-relaxed text-[#424245] md:text-[17px]">
                Your next customer may be comparing several Adelaide businesses
                right now. Strong visibility earns the click; clear services,
                genuine proof, and a fast path to contact turn that visit into
                an enquiry.
              </p>
              <p className="text-[16px] leading-relaxed text-[#424245] md:text-[17px]">
                SEO is not about tricks. It is ongoing work that helps search
                engines and customers understand what you do, where you work
                and why your business is credible. We monitor the result and
                improve the pages as competition and demand change.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's Included — bento */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">01</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              What&apos;s Included in Our SEO Setup
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 0.08} className={index === 6 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <div className="flex h-full flex-col rounded-[24px] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,29,31,0.1)]">
                  <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#0E8C74]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-[17px] font-semibold tracking-tight" style={{ color: INK }}>
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#6E6E73]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built for */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">02</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Built for Adelaide Small Businesses
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {whoItsFor.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 0.08}>
                <li className="flex h-full items-start gap-3 rounded-[20px] border border-black/[0.06] bg-white p-6 text-[15px] leading-relaxed text-[#424245] shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0E8C74] text-[12px] font-bold text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">03</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              How Long Does It Take?
            </h2>
          </Reveal>
          <div className="relative mt-12 hidden h-1 rounded-full bg-black/[0.07] md:block" aria-hidden>
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#5EF2D6] via-[#0E8C74] to-[#0E8C74]" />
            {timeline.map((_, i) => (
              <span
                key={i}
                className="absolute top-1/2 h-3.5 w-3.5 rounded-full border-[3px] border-[#FBFBFD] bg-[#0E8C74] shadow-sm"
                style={{ left: `${(i / (timeline.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }}
              />
            ))}
          </div>
          <div className="mt-4 grid gap-8 md:mt-10 md:grid-cols-3 md:gap-6">
            {timeline.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.12}>
                <div className="border-l-2 border-[#0E8C74]/20 pl-5 md:border-l-0 md:pl-0">
                  <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0E8C74]">
                    {item.label}
                  </p>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#6E6E73]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-3xl text-[15px] leading-relaxed text-[#6E6E73]">
              SEO isn&apos;t instant, and rankings are never guaranteed. The
              advantage is that useful pages and authority can continue
              attracting searches without a fee for every click, provided the
              site stays accurate and competitive.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tradie playbook — the dark moment */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-[#1D1D1F] p-9 text-white md:p-14">
              <div
                className="pointer-events-none absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#5EF2D6]/[0.13] blur-[90px]"
                aria-hidden
              />
              <p className="relative font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5EF2D6]">
                Tradie playbook
              </p>
              <h2 className="relative mt-3 max-w-2xl text-[26px] font-semibold leading-tight tracking-[-0.02em] md:text-[34px]">
                Read the full <span className="text-[#5EF2D6]">SEO for Tradies Adelaide</span> guide
              </h2>
              <p className="relative mt-4 max-w-3xl text-[15px] leading-relaxed text-white/65">
                Plumbers, electricians, builders, HVAC, landscapers and painters
                — this is the playbook we use with Adelaide tradies. Covers
                Google Business Profile, reviews, suburb pages, schema, content,
                and pricing {PRICING.seo.fromLabel}. The same framework we
                deploy on client sites.
              </p>
              <div className="relative mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/seo-for-tradies-adelaide"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0E8C74] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.5)]"
                >
                  Read the tradie guide
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <span className="text-[13px] text-white/45">
                  Local SEO {PRICING.seo.tiers[0].price} · Growth SEO {PRICING.seo.tiers[1].price} · no lock-in
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cluster hub */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
              Find your fit
            </p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              SEO services by focus
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              Same engine, tuned to what you need: suburb-level visibility,
              AI-era search, or your specific industry.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clusterLinks.map((s, i) => (
              <Reveal key={s.href} delay={(i % 4) * 0.06}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-[20px] border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_rgba(29,29,31,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0E8C74]/50 hover:shadow-[0_16px_40px_rgba(14,140,116,0.12)]"
                >
                  <span className="text-[15px] font-semibold tracking-tight text-[#1D1D1F] transition-colors group-hover:text-[#0E8C74]">
                    {s.label}{" "}
                    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                  <span className="mt-2 text-[13px] leading-relaxed text-[#6E6E73]">{s.note}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        count={3}
        heading="What Adelaide businesses say after the rankings start moving"
        eyebrow="Real results"
        subheadline="SEO takes a bit longer than ads, but once it lands, it keeps sending leads without you paying per click."
      />

      {/* FAQs — accordion */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">04</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Common Questions
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

      {/* CTA */}
      <section className="relative overflow-hidden px-6 pb-24 pt-4 md:pb-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5EF2D6]/[0.16] blur-[110px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] [text-wrap:balance] md:text-[48px]" style={{ color: INK }}>
              Ready to Start Showing Up on Google?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              Book a free audit — no obligation. We&apos;ll review your current
              visibility, identify the strongest opportunities and explain what
              we would prioritise to reach more Adelaide customers.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact#send-message"
                data-track="quote_seo_cta"
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
