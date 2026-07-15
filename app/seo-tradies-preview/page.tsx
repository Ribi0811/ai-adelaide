import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StackCTA from "@/components/StackCTA";
import TradieLeadForm from "@/components/TradieLeadForm";
import Reveal from "@/components/home-v3/Reveal";
import { PRICING } from "@/lib/constants";
import RankLadder from "./parts";

// DESIGN PREVIEW — Phase D re-skin of /seo-for-tradies-adelaide in the v4
// language. RULE: every visible string is copied VERBATIM from the live page
// (it ranks 3.2 for its target query — words and metadata are untouchable).
// TradieLeadForm + StackCTA are the page's own existing components, reused.
// RankLadder adds zero copy. Noindexed; delete = remove this dir.
export const metadata: Metadata = {
  title: { absolute: "Tradie SEO redesign preview | AI Adelaide" },
  description: "Internal design preview of the tradie SEO page re-skin.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/seo-tradies-preview" },
};

const searchBuckets = [
  {
    label: "Emergency searches",
    example: "‘burst pipe plumber Adelaide’, ‘emergency electrician Norwood’",
    body: "These spike at night and on weekends. The searcher wants a phone number, fast. If your Google Business Profile lists 24/7 availability and your site loads in under 2 seconds, you win the call. If it doesn't, the next tradie on the map does.",
  },
  {
    label: "Comparison searches",
    example: "‘best plumber Adelaide Hills’, ‘electrician reviews Mount Barker’",
    body: "The searcher is collecting 2-3 options before contacting anyone. Reviews, photos of real jobs, and clear pricing all matter here — this is where a weak Google Business Profile costs you the job before you even get the call.",
  },
  {
    label: "How-to searches",
    example: "‘how to fix a leaking tap’, ‘do I need a sparkie or can I DIY’",
    body: "Not direct leads, but trust builders. A tradie with the best how-to content in Adelaide wins the comparison searches months later, when the reader finally needs the job done properly.",
  },
];

const foundations = [
  {
    title: "Google Business Profile",
    body: "Claim it, choose the most accurate category, list only areas you genuinely service, add real job photos, and keep details current. It is a strong local-search foundation, but it is only one part of the ranking and conversion picture.",
  },
  {
    title: "NAP consistency",
    body: "Your business name, address, and phone number need to be identical everywhere online — your website, GBP, directories, invoices. Two versions of your name tells Google you're two different businesses.",
  },
  {
    title: "Reviews",
    body: "Review quantity, recency, quality and your responses all help customers compare tradies. Ask soon after a completed job, make the process easy, and reply professionally. Never buy reviews or pressure customers for a particular rating.",
  },
  {
    title: "Local citations",
    body: "List your business — with identical NAP — on Yellow Pages, True Local, hipages, and your industry association (Master Plumbers SA, NECA, HIA). Duplicate or inconsistent listings confuse Google and quietly hurt rankings.",
  },
];

const onPage = [
  {
    title: "One page per service",
    body: "A single ‘Services’ page listing everything is not enough. Hot water repairs, blocked drains, and ceiling fan installs each deserve their own page targeting their own search.",
  },
  {
    title: "One page per suburb",
    body: "If you service multiple Adelaide suburbs, each needs its own page: common jobs in that suburb, response time, and a suburb-specific FAQ. We've built this out across dozens of Adelaide suburbs on our own site — the same structure works for any tradie.",
  },
  {
    title: "Schema markup",
    body: "Appropriate FAQPage, Service, and LocalBusiness structured data can help search engines understand what you do and where. It must match visible page content and does not guarantee rankings or enhanced search results.",
  },
];

const mistakes = [
  "One ‘Services’ page trying to cover everything, instead of one page per job type.",
  "No repeatable process for requesting genuine reviews after completed jobs.",
  "Stock photos instead of real job photos — an easy tell that a business isn't really local.",
  "No schema markup, while the competitor down the road has all three types.",
  "Buying links, which Google penalises — partnerships and quality content work instead.",
  "Setting up Google Business Profile once and never touching it again.",
];

const tiers = [
  {
    name: "Local SEO",
    price: PRICING.seo.tiers[0].price,
    body: "Google Business Profile optimisation, suburb pages, monthly content, technical foundations. The right starting point for a solo tradie or two-person crew.",
  },
  {
    name: "Growth SEO",
    price: PRICING.seo.tiers[1].price,
    body: "Everything in Local SEO plus more content, more suburb pages, and active link building — for a crew ready to actively out-rank established competitors across several suburbs.",
  },
];

const faqs = [
  {
    question: "How long does SEO take to work for Adelaide tradies?",
    answer:
      "There is no fixed timetable. Lower-competition suburb searches may move earlier, while established Adelaide terms can require sustained work over many months. Be cautious of guaranteed page-one dates: a responsible provider should explain the baseline, work completed, movement measured and factors outside their control.",
  },
  {
    question: "Is SEO better than Google Ads for tradies?",
    answer:
      "For most Adelaide tradies the honest answer is: use both. Ads bring leads today; SEO builds leads that keep arriving for years without a per-click cost. We usually recommend starting with both and scaling SEO as it matures.",
  },
  {
    question: "How much should an Adelaide tradie spend on SEO?",
    answer:
      `For a solo tradie or two-person crew, ${PRICING.seo.tiers[0].price} Local SEO is the usual starting scope. A larger operation may need ${PRICING.seo.tiers[1].price} Growth SEO for additional content and authority work, but we recommend the tier from the audit rather than headcount alone.`,
  },
  {
    question: "Do tradies really need a website for SEO to work?",
    answer:
      "Your Google Business Profile makes you eligible for map visibility, while your website can appear in organic results and gives customers more information before they call. Neither guarantees placement, but together they provide a stronger discovery and trust path.",
  },
  {
    question: "What's the difference between local SEO and regular SEO?",
    answer:
      "Local SEO targets searches tied to a place or nearby provider — including map and local organic results. For most Adelaide tradies, those service-and-location searches deserve priority because the customer usually needs someone who can attend the job. Broader content can still support trust and authority.",
  },
  {
    question: "Should I hire a freelancer or a tradie-focused agency?",
    answer:
      "Choose the provider who can show a clear process, understands local service businesses, communicates directly, measures enquiries, and avoids guarantees. A capable freelancer or agency can both work; relevant experience and accountable execution matter more than the label.",
  },
  {
    question: "How do I know if my SEO provider is doing real work?",
    answer:
      "Ask for the starting baseline, completed work, Google Business Profile insights, content and technical changes, and lead tracking where available. Early months may focus on foundations, but your provider should still be able to show exactly what was done and why.",
  },
  {
    question: "Do you lock me into a contract?",
    answer:
      "No. Both SEO tiers run month to month with no lock-in. You can leave if the service no longer makes sense; we'd rather earn the renewal through clear work, communication and measurable progress.",
  },
];

const INK = "#1D1D1F";

const linkCls =
  "font-semibold text-[#0E8C74] underline decoration-[#0E8C74]/30 underline-offset-4 transition hover:text-[#1D1D1F]";

export default function SeoTradiesPreview() {
  return (
    <div className="bg-[#FBFBFD]">
      <p className="fixed bottom-4 left-4 z-50 rounded-full border border-black/10 bg-white/80 px-4 py-1.5 font-mono text-[11px] text-[#6B6B67] shadow-sm backdrop-blur">
        tradie SEO re-skin preview · not live
      </p>

      {/* Hero + rank ladder */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:pb-20 md:pt-44">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#5EF2D6]/[0.15] blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "SEO", href: "/seo" },
              { label: "SEO for Tradies Adelaide" },
            ]}
          />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="v3-rise font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">
                The Tradie SEO Playbook
              </p>
              <h1
                className="v3-rise mt-4 max-w-2xl text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] [animation-delay:.12s] [text-wrap:balance] md:text-[48px]"
                style={{ color: INK }}
              >
                SEO for Tradies Adelaide: How Plumbers, Electricians &amp; Builders Rank on Google
              </h1>
              <p className="v3-rise mt-6 max-w-xl text-[15px] leading-relaxed text-[#6E6E73] [animation-delay:.24s] md:text-[16px]">
                Plumbers, electricians, builders, HVAC technicians,
                landscapers, and painters are all competing for the same
                searches — and the jobs go to whoever shows up first, not
                whoever does the best work. This is the exact framework we run
                for Adelaide tradies: Google Business Profile, suburb pages,
                schema, content, and the ongoing work that keeps you ranking.
              </p>
              <div className="v3-rise mt-8 flex flex-wrap gap-3 [animation-delay:.36s]">
                <a
                  href="#tradie-review"
                  data-track="quote_tradie_hero"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0E8C74] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(14,140,116,0.35)]"
                >
                  Get a free visibility review
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="/contact#send-message"
                  className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-7 py-3.5 text-[15px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
                >
                  Talk to us
                </a>
              </div>
            </div>
            <div className="v3-rise [animation-delay:.3s]">
              <RankLadder />
            </div>
          </div>
        </div>
      </section>

      {/* Inline lead capture — kept high for mobile-first conversion (T3) */}
      <section id="tradie-review" className="mx-auto max-w-container px-6 pb-16 md:pb-20">
        <TradieLeadForm />
      </section>

      {/* Why it matters — editorial */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[36px]" style={{ color: INK }}>
              Why This Matters Now
            </h2>
            <div className="mt-6 space-y-4 border-l-2 border-[#0E8C74]/30 pl-6">
              <p className="text-[16px] leading-relaxed text-[#424245]">
                Adelaide homeowners often compare tradies through Google before
                they call. The map results, organic listings, reviews and
                website all shape that shortlist, so the job is to make your
                business easy to find and easy to trust across the whole
                results page.
              </p>
              <p className="text-[16px] leading-relaxed text-[#424245]">
                If your business doesn&apos;t show up in the top three for
                &quot;plumber [suburb]&quot; or &quot;electrician
                Adelaide&quot;, you&apos;re paying for clicks your competitors
                get for free. Word of mouth still matters — but in 2026
                it&apos;s your website and your Google Business Profile that
                decide whether that word-of-mouth lead becomes your customer or
                someone else&apos;s.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Search buckets — examples styled as search bars */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">01</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Who Is Actually Searching for Adelaide Tradies
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73]">
              Understanding the searcher helps you write the right content.
              Adelaide tradie searches fall into three buckets:
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {searchBuckets.map((bucket, i) => (
              <Reveal key={bucket.label} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-[24px] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,29,31,0.1)]">
                  <h3 className="text-[17px] font-semibold tracking-tight" style={{ color: INK }}>
                    {bucket.label}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 rounded-full border border-black/[0.08] bg-[#FAFAFC] px-3.5 py-2">
                    <span className="shrink-0 text-[13px] text-[#4285F4]" aria-hidden>⌕</span>
                    <span className="text-[11.5px] italic leading-snug text-[#6E6E73]">{bucket.example}</span>
                  </div>
                  <p className="mt-4 text-[14px] leading-relaxed text-[#6E6E73]">{bucket.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* HUMAN INPUT NEEDED: one real tradie result (name, suburb, baseline, outcome, timeframe, permission) — replace this note with a verified case study once available. Do not invent client copy. */}
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-[#424245]">
              The same approach applies whether you need a{" "}
              <Link href="/websites-for-plumbers-adelaide" className={linkCls}>
                plumber website in Adelaide
              </Link>{" "}
              or an{" "}
              <Link href="/websites-for-electricians-adelaide" className={linkCls}>
                electrician website
              </Link>{" "}
              — and if you work the southern suburbs, we build dedicated pages
              for areas like{" "}
              <Link href="/marion" className={linkCls}>
                Marion
              </Link>{" "}
              and{" "}
              <Link href="/reynella" className={linkCls}>
                Reynella
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Fundamentals */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">02</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Local SEO Fundamentals
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73]">
              Local SEO is a practical starting point for tradies whose
              customers come from defined service areas. Google Maps and local
              organic results both matter, and the right priority depends on
              your current visibility and where profitable jobs come from.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {foundations.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-[24px] border border-black/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
                  <h3 className="text-[17px] font-semibold tracking-tight" style={{ color: INK }}>
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#6E6E73]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* On-page */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">03</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              On-Page SEO for Tradie Websites
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73]">
              Your Google Business Profile supports eligibility for map
              visibility. Your website can earn organic visibility and gives
              customers the service detail and proof needed to compare you.
              Both matter, but neither guarantees a position.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {onPage.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="h-full rounded-[24px] border border-black/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(29,29,31,0.04)]">
                  <h3 className="text-[17px] font-semibold tracking-tight" style={{ color: INK }}>
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#6E6E73]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Content + links + technical — editorial */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">04</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[36px]" style={{ color: INK }}>
              Content, Links, and the Technical Basics
            </h2>
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-[#424245] md:text-[16px]">
              <p>
                Content is how a newer tradie outranks a competitor who&apos;s
                been around for twenty years. Blog posts answering real
                customer questions — &quot;how much does [X] cost in
                Adelaide&quot;, &quot;how long does [X] take&quot; — build
                trust and rank for long-tail searches. One well-written
                2,000-word post beats five 300-word fillers. Pair every service
                page with 5-10 FAQs; they double as Google &quot;People also
                ask&quot; candidates and long-tail ranking content.
              </p>
              <p>
                Links from other sites signal authority. For tradies, the
                highest-value links come from local business associations
                (Master Plumbers SA, Master Electricians SA, HIA SA), local
                partnerships with complementary trades, and supplier
                accreditation pages — not from buying links, which Google
                penalises.
              </p>
              <p>
                On the technical side, the website must work properly on a
                phone, use HTTPS, load quickly, and make calls and quote
                requests easy. Structured data should be added only where it is
                appropriate and matches the visible content. These foundations
                support discovery and conversion but do not replace useful
                pages, proof, or authority.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mistakes */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#E8590C]">05</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              Common Adelaide Tradie SEO Mistakes
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {mistakes.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 0.08}>
                <li className="flex h-full items-start gap-3 rounded-[20px] border border-[#E8590C]/[0.15] bg-[#FFF9F6] p-6 text-[15px] leading-relaxed text-[#424245]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8590C]/[0.12] text-[12px] font-bold text-[#E8590C]">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing tiers — Growth is the dark card */}
      <section className="bg-[#F5F5F7] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">06</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              SEO Pricing for Adelaide Tradies
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73]">
              Two clearly scoped tiers, both month to month with no lock-in
              contract. Choose based on the amount of content, service-area
              coverage and authority work your current position actually
              requires.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {tiers.map((tier, i) => {
              const dark = i === 1;
              return (
                <Reveal key={tier.name} delay={i * 0.1}>
                  <div
                    className={`flex h-full flex-col rounded-[28px] p-8 ${
                      dark
                        ? "v3-shimmer-border bg-[#1D1D1F] text-white shadow-[0_30px_80px_rgba(29,29,31,0.35)]"
                        : "border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(29,29,31,0.05)]"
                    }`}
                  >
                    <h3 className={`text-[19px] font-semibold tracking-tight ${dark ? "text-white" : "text-[#1D1D1F]"}`}>
                      {tier.name}
                    </h3>
                    <p className={`mt-4 text-[38px] font-semibold leading-none tracking-[-0.02em] tabular-nums ${dark ? "text-white" : "text-[#1D1D1F]"}`}>
                      {tier.price}
                    </p>
                    <p className={`mt-4 text-[14.5px] leading-relaxed ${dark ? "text-white/70" : "text-[#6E6E73]"}`}>
                      {tier.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.15}>
            <p className="mt-8 text-[14px] leading-relaxed text-[#6E6E73]">
              Need a new site too? Websites start from{" "}
              <Link href="/website-pricing" className={linkCls}>
                {PRICING.website.tiers[0].price}
              </Link>
              , and we bundle SEO with the build for tradies who want both live
              at once — see the{" "}
              <Link href="/tradie-website-bundle" className={linkCls}>
                tradie website bundle
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* How AI helps — editorial */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">07</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[36px]" style={{ color: INK }}>
              How AI Helps Tradies With SEO
            </h2>
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-[#424245] md:text-[16px]">
              <p>
                AI speeds up the content side of SEO without replacing the
                judgment behind it. A blog post or suburb page that used to
                take hours to draft from scratch takes a fraction of the time
                with AI doing the first pass — which is how we can build out
                suburb pages and FAQ content at a pace a solo tradie or small
                agency team couldn&apos;t match manually.
              </p>
              <p>
                AI also handles the repetitive technical work: generating
                schema markup consistently across every page, drafting meta
                descriptions in your business&apos;s tone, and flagging when a
                new suburb page is worth building based on search demand. A
                person still reviews and approves everything before it goes
                live — AI removes the grunt work, not the oversight.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <StackCTA variant="seo" />

      {/* FAQs — accordion */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#0E8C74]">08</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] md:text-[40px]" style={{ color: INK }}>
              SEO for Tradies FAQs
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

      {/* Related reading */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-container">
          <Reveal>
            <div className="rounded-[28px] border border-black/[0.06] bg-white p-8 shadow-[0_2px_12px_rgba(29,29,31,0.05)] md:p-10">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0E8C74]">
                Related
              </p>
              <h2 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.02em] md:text-[30px]" style={{ color: INK }}>
                Weighing SEO Against Paid Ads?
              </h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#6E6E73]">
                SEO and Google Ads solve different problems: ads can buy
                immediate visibility, while SEO builds organic visibility over
                time without a fee for each click. Our comparison guide
                explains the trade-offs without promising a fixed result.
              </p>
              <Link
                href="/seo-vs-google-ads-adelaide"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-6 py-3 text-[15px] font-semibold text-[#1D1D1F] transition hover:border-black/30 hover:bg-black/[0.03]"
              >
                Read SEO vs Google Ads <span aria-hidden>→</span>
              </Link>
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
              Ready to Start Ranking?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6E6E73] md:text-base">
              Book a free chat and we&apos;ll show you where you stand today,
              which searches are worth targeting, and the work most likely to
              improve visibility and enquiries. No ranking guarantees.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact#send-message"
                data-track="quote_tradie_cta"
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
