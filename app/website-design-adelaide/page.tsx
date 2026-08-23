import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/home-v3/Reveal";
import BuildYours from "@/components/home-day/BuildYours";
import { PRICING } from "@/lib/constants";
import { selectedWork } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Website Design Adelaide",
  description:
    `Website design for Adelaide small businesses. Mobile-first, Google-ready, professionally written and built to turn visitors into enquiries. ${PRICING.website.fromLabel} one-off.`,
  alternates: {
    canonical: "/website-design-adelaide",
  },
};

const buildItems = [
  {
    title: "Conversion-focused design",
    body:
      "Every page is built to do one thing — get the visitor to call or enquire. Clear headlines, real trust signals, one obvious call to action. No clutter, no confusion.",
  },
  {
    title: "Mobile-first",
    body:
      "Many tradie website visits happen on a phone. We design mobile first, with tap-to-call actions, fast pages and thumb-friendly layouts.",
  },
  {
    title: "Google-ready from day one",
    body:
      "Proper title tags, meta descriptions, clean URL structure, and local schema markup. Your site is set up for Google to understand it from the moment it goes live.",
  },
  {
    title: "Suburb targeting built in",
    body:
      "Where the business genuinely serves an area and the content is useful, we can add suburb service pages so Google and customers have a relevant page to consider for searches such as ‘plumber Glenelg’.",
  },
  {
    title: "Contact form + AI call capture ready",
    body:
      "Enquiry form wired up, and ready to connect with our AI missed call system if you want 24/7 lead capture.",
  },
];

const steps = [
  {
    title: "Step 1 — 15-min call",
    body:
      "Tell us what you do, where you work, and who your customers are. That's all we need to get started.",
  },
  {
    title: "Step 2 — We build",
    body:
      "We write the copy, design the layout, and build the full site. You don't write a word or touch a builder.",
  },
  {
    title: "Step 3 — You review",
    body: "One review round. Tell us what to change, we update it same day.",
  },
  {
    title: "Step 4 — Live",
    body:
      "We push it live, set up your domain, and hand you the keys. Total time: 48 hours from first call to live site.",
  },
];

const whoItsFor = [
  "Adelaide small businesses with no website, or one that's embarrassing",
  "Businesses using a Facebook page as a website (it's not the same)",
  "Anyone who got quoted thousands by an agency and walked away",
  "Existing clients who want to add website design to their AI package",
];

const faqs = [
  {
    question: "Are you a web design agency or a freelance web designer?",
    answer:
      "We're a small Adelaide web design studio. You get a direct point of contact who learns your business, while AI-assisted production helps us deliver efficiently without turning the finished website into generic AI copy.",
  },
  {
    question: "Do I really need a website if I already have Facebook or Instagram?",
    answer:
      "Yes — social profiles rent attention, a small business website owns it. When someone Googles your trade plus their suburb, Facebook pages rarely rank; a proper website with local SEO does. Your socials should feed the website, not replace it.",
  },
  {
    question: "Do I need to write my own content?",
    answer:
      "No. We handle all the copywriting using AI trained on your industry. You tell us about your business in a 15-minute call, we write it. You review and request changes — we don't publish until you're happy.",
  },
  {
    question: "What platform is it built on?",
    answer:
      "For new builds, we typically recommend Next.js — fast, modern, and designed for strong technical performance. We can also improve an existing WordPress site when its content, booking setup or editing workflow makes that the sensible choice. Either way, we test the finished site on mobile and address performance issues before launch.",
  },
  {
    question: "Can I update it myself?",
    answer:
      "For basic text changes and image swaps, yes. For structural changes, most clients just ask us — it's usually done same day. We include 30 days of free changes after launch, then a small monthly maintenance fee if you want ongoing support.",
  },
  {
    question: "What does website design cost in Adelaide?",
    answer:
      `Our Starter tier is ${PRICING.website.tiers[0].price} one-off, Business is ${PRICING.website.tiers[1].price}, and Growth is ${PRICING.website.tiers[2].price}. The exact page count and inclusions are set out on our pricing page. Every build includes mobile-first design, core search setup and clear enquiry actions. The build fee is one-off and you own the finished website.`,
  },
  {
    question: "How long until my website is live?",
    answer:
      "48 hours from our kickoff call. We do a 15-minute brief, build the site overnight using AI-assisted workflows, you review the next day, we make your changes, and it's live the following morning. If we need a custom domain, add 24 hours for DNS setup.",
  },
  {
    question: "Do you write the SEO content too?",
    answer:
      "Yes. Every page is built with the core search foundations included: keyword research tied to your services and genuine service areas, proper title tags, meta descriptions, heading structure, internal linking, and appropriate structured data. Ongoing rankings still depend on competition, useful content and authority after launch.",
  },
  {
    question: "Can I add the AI receptionist later?",
    answer:
      `Absolutely. The website can connect with our missed-call and follow-up systems whenever the need is clear. Automation starts from ${PRICING.automation.from}; we recommend adding it when there is a real lead-handling bottleneck to solve.`,
  },
  {
    question: "Will my website work on phones?",
    answer:
      "Yes — every site we build is mobile-first by default. We design the phone experience first, then scale it to tablet and desktop. Tap-to-call buttons, fast load times and thumb-friendly layouts are standard.",
  },
];

const suburbLinks = [
  { href: "/marion", label: "Marion" },
  { href: "/reynella", label: "Reynella" },
  { href: "/moana", label: "Moana" },
  { href: "/seaford", label: "Seaford" },
  { href: "/morphett-vale", label: "Morphett Vale" },
  { href: "/henley-beach", label: "Henley Beach" },
];

const industryWebsiteLinks = [
  { href: "/websites-for-plumbers-adelaide", label: "Plumbers" },
  { href: "/websites-for-electricians-adelaide", label: "Electricians" },
  { href: "/websites-for-builders-adelaide", label: "Builders" },
  { href: "/websites-for-clinics-adelaide", label: "Clinics" },
  { href: "/websites-for-cafes-adelaide", label: "Cafes" },
  { href: "/websites-for-hairdressers-adelaide", label: "Hairdressers" },
];

const INK = "#1D1D1F";

function ServiceJsonLd() {
  const startingPrice = PRICING.website.tiers[0].price.replace(/[^\d.]/g, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Design Adelaide",
    serviceType: "Website Design",
    provider: {
      "@id": "https://aiadelaide.com.au/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
    },
    description:
      `Website design for Adelaide small businesses. Mobile-first, Google-ready and built for enquiries. ${PRICING.website.fromLabel} one-off.`,
    offers: {
      "@type": "Offer",
      price: startingPrice,
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: startingPrice,
        priceCurrency: "AUD",
        unitText: "ONE_OFF",
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

export default function WebsiteDesignAdelaidePage() {
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

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-14 pt-32 md:pb-20 md:pt-44">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.15] blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Website Design Adelaide" },
            ]}
          />
          <p className="v3-rise mt-8 font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
            Website Design for Adelaide Small Businesses
          </p>
          <h1
            className="v3-rise mt-4 max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] [animation-delay:.12s] [text-wrap:balance] md:text-[64px]"
            style={{ color: INK }}
          >
            Website Design Adelaide for Small Businesses
          </h1>
          <p className="v3-rise mt-6 max-w-2xl text-[17px] leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-lg">
            Not a template you have to figure out yourself. Not a big agency
            build. A clean, fast, mobile-first website built for Adelaide small
            businesses — designed to turn visitors into enquiries, bookings,
            and sales. Done for you, live in two days.
          </p>
          <div className="v3-rise mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-semibold text-[#424245] [animation-delay:.3s]">
            <span>{PRICING.website.fromLabel} one-off</span>
            <span aria-hidden>•</span>
            <span>You own the finished site</span>
            <span aria-hidden>•</span>
            <span>Free 15-minute brief</span>
          </div>
          <div className="v3-rise mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center [animation-delay:.36s]">
            <Link
              href="/contact?service=website#send-message"
              data-track="quote_design_hero"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0E8C74] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
            >
              Start with a free brief
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/website-pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.12] px-7 py-3.5 text-[15px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
            >
              See website pricing <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get — bento */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">01</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              What You Get
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-6">
            {buildItems.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className={index < 2 ? "md:col-span-3" : "md:col-span-2"}
              >
                <div
                  className={`flex h-full flex-col rounded-[24px] p-7 transition-all duration-300 hover:-translate-y-1 ${
                    index === 0
                      ? "bg-[#1D1D1F] text-white shadow-[0_24px_60px_rgba(29,29,31,0.3)] hover:shadow-[0_30px_70px_rgba(29,29,31,0.35)]"
                      : "border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(29,29,31,0.05)] hover:shadow-[0_20px_50px_rgba(29,29,31,0.1)]"
                  }`}
                >
                  <p className={`font-mono text-[11px] font-semibold tracking-[0.16em] ${index === 0 ? "text-[#5EF2D6]" : "text-[#0E8C74]"}`}>
                    0{index + 1}
                  </p>
                  <h3 className={`mt-3 text-[18px] font-semibold tracking-tight ${index === 0 ? "text-white" : "text-[#1D1D1F]"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2.5 text-[14px] leading-relaxed ${index === 0 ? "text-white/65" : "text-[#6E6E73]"}`}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio — permission-backed real work */}
      <section id="selected-work" className="scroll-mt-24 bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">02</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Work we can show you
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73] md:text-[17px]">
              Two live examples across two different stacks—Next.js / React and WordPress. See how the booking journey, content and details come together before you decide what your own site needs.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {selectedWork.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.12}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_20px_60px_rgba(29,29,31,0.10)] transition hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(29,29,31,0.16)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E7E7E7]">
                    <Image
                      src={item.screenshotSrc}
                      alt={item.screenshotAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-[#0E8C74]/20 bg-[#0E8C74]/[0.07] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#0E8C74]">
                        {item.industry}
                      </span>
                      <span className="rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#6E6E73]">
                        {item.platform}
                      </span>
                      <span className="text-xs font-medium text-[#6E6E73]">{item.scope}</span>
                    </div>
                    <h3 className="mt-4 text-[20px] font-semibold tracking-tight" style={{ color: INK }}>
                      {item.name}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#6E6E73] md:text-[15px]">
                      {item.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0E8C74]">
                      Visit live site <span aria-hidden>→</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof boundary — transparent about the scope of the examples. */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-[#0E8C74]/20 bg-[#0E8C74]/[0.05] p-8 md:p-12">
          <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
            Proof before promises
          </p>
          <h2 className="mt-3 max-w-2xl text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
            See the quality before you commit
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#424245] md:text-[17px]">
            Different businesses need different platforms. These examples show a modern React stack and a proven WordPress setup, both organised around a clear customer journey. Want to see what that could look like for your business?
          </p>
          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?service=website#send-message"
              data-track="quote_design_proof"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D1D1F] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(29,29,31,0.2)]"
            >
              Ask to see examples <span aria-hidden>→</span>
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.12] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
            >
              Get a free visibility review <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The live demo — reused homepage module (additive) */}
      <BuildYours />

      {/* 48-hour steps — timeline */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">03</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              From Brief to Live in 48 Hours
            </h2>
          </Reveal>
          <div className="relative mt-12 hidden h-1 rounded-full bg-black/[0.07] md:block" aria-hidden>
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#5EF2D6] via-[#0E8C74] to-[#0E8C74]" />
            {steps.map((_, i) => (
              <span
                key={i}
                className="absolute top-1/2 h-3.5 w-3.5 rounded-full border-[3px] border-[#FBFBFD] bg-[#0E8C74] shadow-sm"
                style={{ left: `${(i / (steps.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }}
              />
            ))}
          </div>
          <div className="mt-4 grid gap-8 md:mt-10 md:grid-cols-4 md:gap-5">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="border-l-2 border-[#0E8C74]/20 pl-5 md:border-l-0 md:pl-0">
                  <h3 className="text-[16px] font-semibold tracking-tight" style={{ color: INK }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#6E6E73]">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">04</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Built For
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {whoItsFor.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 0.1}>
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

      <Testimonials
        count={3}
        heading="What Adelaide businesses say"
        eyebrow="Real results"
        subheadline="These are outcomes clients have reported from the work shown; individual results depend on the business, offer and traffic."
      />

      {/* FAQs — accordion */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">05</p>
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

      {/* Website hub links: connect the main service to industry, suburb and guide spokes. */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <Reveal>
            <h2 className="text-[20px] font-semibold tracking-tight" style={{ color: INK }}>
              Website design for Adelaide business types
            </h2>
            <p className="mt-2 max-w-2xl text-[15px] text-[#6E6E73]">
              See the pages, enquiry paths and local-search foundations we recommend for your type of business.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {industryWebsiteLinks.map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="rounded-full border border-black/[0.1] bg-white px-4 py-2 text-[14px] font-medium text-[#424245] transition-all hover:-translate-y-0.5 hover:border-[#0E8C74] hover:text-[#0E8C74]"
                >
                  Websites for {industry.label}
                </Link>
              ))}
            </div>

            <h2 className="mt-10 text-[20px] font-semibold tracking-tight" style={{ color: INK }}>
              Popular areas we design websites for
            </h2>
            <p className="mt-2 text-[15px] text-[#6E6E73]">
              Every Adelaide suburb gets a dedicated page. A few we&apos;re asked about most:
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {suburbLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-full border border-black/[0.1] bg-white px-4 py-2 text-[14px] font-medium text-[#424245] transition-all hover:-translate-y-0.5 hover:border-[#0E8C74] hover:text-[#0E8C74]"
                >
                  Website designer {s.label}
                </Link>
              ))}
              <Link
                href="/locations"
                className="rounded-full px-4 py-2 text-[14px] font-semibold text-[#0E8C74] transition hover:opacity-70"
              >
                All Adelaide suburbs →
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-black/[0.06] pt-6 text-[14px]">
              <Link href="/website-cost-adelaide" className="font-semibold text-[#0E8C74] hover:opacity-70">
                Adelaide website cost guide →
              </Link>
              <Link href="/blog/cheap-website-design-adelaide" className="font-semibold text-[#0E8C74] hover:opacity-70">
                What a $699 website includes →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 pb-24 pt-8 md:pb-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5EF2D6]/[0.16] blur-[110px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] [text-wrap:balance] md:text-[48px]" style={{ color: INK }}>
              Ready to Get a Website That Actually Works?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              Book a free audit — no obligation. We&apos;ll scope your site,
              tell you exactly what we&apos;d build, and give you a quote on
              the spot.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact#send-message"
                data-track="quote_design_cta"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0E8C74] px-8 py-4 text-[16px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
              >
                Send a Message
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-8 py-4 text-[16px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
              >
                See Our Services <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
