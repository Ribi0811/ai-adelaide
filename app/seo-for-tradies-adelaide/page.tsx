import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StackCTA from "@/components/StackCTA";
import TradieLeadForm from "@/components/TradieLeadForm";
import { PRICING, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  // Phase 8 punch list P4: rendered title was 68 chars (max 60); description
  // was 167 chars (want 140-160).
  title: "SEO for Tradies Adelaide",
  description:
    `SEO for Adelaide tradies: Google Business Profile, useful service-area pages, reviews, content, technical foundations and reporting. ${PRICING.seo.fromLabel}.`,
  alternates: {
    canonical: "/seo-for-tradies-adelaide",
  },
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

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO for Tradies Adelaide",
    serviceType: "Local SEO",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
    },
    description:
      "Local SEO built specifically for Adelaide tradies — plumbers, electricians, builders, HVAC technicians, landscapers, and painters. Suburb pages, Google Business Profile, schema, and content that ranks.",
    offers: [
      {
        "@type": "Offer",
        name: "Local SEO",
        price: PRICING.seo.tiers[0].price.replace(/[^\d]/g, ""),
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: PRICING.seo.tiers[0].price.replace(/[^\d]/g, ""),
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Growth SEO",
        price: PRICING.seo.tiers[1].price.replace(/[^\d]/g, ""),
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: PRICING.seo.tiers[1].price.replace(/[^\d]/g, ""),
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function SeoForTradiesAdelaidePage() {
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
          { label: "SEO", href: "/seo" },
          { label: "SEO for Tradies Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">The Tradie SEO Playbook</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            SEO for Tradies Adelaide: How Plumbers, Electricians &amp; Builders Rank on Google
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Plumbers, electricians, builders, HVAC technicians, landscapers, and painters are all competing for the same searches — and the jobs go to whoever shows up first, not whoever does the best work. This is the exact framework we run for Adelaide tradies: Google Business Profile, suburb pages, schema, content, and the ongoing work that keeps you ranking.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#tradie-review" className="btn-primary px-6 py-3">
              Get a free visibility review →
            </a>
            <a href="/contact#send-message" className="btn-secondary px-6 py-3">
              Talk to us
            </a>
          </div>
        </div>
      </section>

      {/* Inline lead capture — kept high for mobile-first conversion (T3) */}
      <section id="tradie-review" className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <TradieLeadForm />
      </section>

      {/* Why it matters */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Why This Matters Now</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Adelaide homeowners often compare tradies through Google before they call. The map results, organic listings, reviews and website all shape that shortlist, so the job is to make your business easy to find and easy to trust across the whole results page.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            If your business doesn't show up in the top three for &quot;plumber [suburb]&quot; or &quot;electrician Adelaide&quot;, you're paying for clicks your competitors get for free. Word of mouth still matters — but in 2026 it's your website and your Google Business Profile that decide whether that word-of-mouth lead becomes your customer or someone else's.
          </p>
        </div>
      </section>

      {/* Search intent buckets */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Who Is Actually Searching for Adelaide Tradies</h2>
          <p className="mb-6 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Understanding the searcher helps you write the right content. Adelaide tradie searches fall into three buckets:
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {searchBuckets.map((bucket) => (
              <div key={bucket.label} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{bucket.label}</h3>
                <p className="mb-3 text-xs italic text-slate-500">{bucket.example}</p>
                <p className="text-body-mobile text-slate-700 md:text-body">{bucket.body}</p>
              </div>
            ))}
          </div>
          {/* HUMAN INPUT NEEDED: one real tradie result (name, suburb, baseline, outcome, timeframe, permission) — replace this note with a verified case study once available. Do not invent client copy. */}
          <p className="mt-6 text-body-mobile text-slate-700 md:text-body">
            The same approach applies whether you need a{" "}
            <Link href="/websites-for-plumbers-adelaide" className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:text-slate-900">
              plumber website in Adelaide
            </Link>{" "}
            or an{" "}
            <Link href="/websites-for-electricians-adelaide" className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:text-slate-900">
              electrician website
            </Link>{" "}
            — and if you work the southern suburbs, we build dedicated pages for areas like{" "}
            <Link href="/marion" className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:text-slate-900">
              Marion
            </Link>{" "}
            and{" "}
            <Link href="/reynella" className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:text-slate-900">
              Reynella
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Local SEO fundamentals */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Local SEO Fundamentals</h2>
          <p className="mb-6 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Local SEO is a practical starting point for tradies whose customers come from defined service areas. Google Maps and local organic results both matter, and the right priority depends on your current visibility and where profitable jobs come from.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {foundations.map((item) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-page SEO */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">On-Page SEO for Tradie Websites</h2>
          <p className="mb-6 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Your Google Business Profile supports eligibility for map visibility. Your website can earn organic visibility and gives customers the service detail and proof needed to compare you. Both matter, but neither guarantees a position.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {onPage.map((item) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content + links + technical, condensed */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Content, Links, and the Technical Basics</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Content is how a newer tradie outranks a competitor who's been around for twenty years. Blog posts answering real customer questions — &quot;how much does [X] cost in Adelaide&quot;, &quot;how long does [X] take&quot; — build trust and rank for long-tail searches. One well-written 2,000-word post beats five 300-word fillers. Pair every service page with 5-10 FAQs; they double as Google &quot;People also ask&quot; candidates and long-tail ranking content.
          </p>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Links from other sites signal authority. For tradies, the highest-value links come from local business associations (Master Plumbers SA, Master Electricians SA, HIA SA), local partnerships with complementary trades, and supplier accreditation pages — not from buying links, which Google penalises.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            On the technical side, the website must work properly on a phone, use HTTPS, load quickly, and make calls and quote requests easy. Structured data should be added only where it is appropriate and matches the visible content. These foundations support discovery and conversion but do not replace useful pages, proof, or authority.
          </p>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Adelaide Tradie SEO Mistakes</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {mistakes.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-rose-300/40 bg-rose-50 text-xs text-rose-500">
                  ✕
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">SEO Pricing for Adelaide Tradies</h2>
          <p className="mb-6 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Two clearly scoped tiers, both month to month with no lock-in contract. Choose based on the amount of content, service-area coverage and authority work your current position actually requires.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {tiers.map((tier) => (
              <div key={tier.name} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">{tier.name}</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">{tier.price}</p>
                <p className="text-body-mobile text-slate-700 md:text-body">{tier.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Need a new site too? Websites start from{" "}
            <Link href="/website-pricing" className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:text-slate-900">
              {PRICING.website.tiers[0].price}
            </Link>
            , and we bundle SEO with the build for tradies who want both live at once — see the{" "}
            <Link href="/tradie-website-bundle" className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:text-slate-900">
              tradie website bundle
            </Link>
            .
          </p>
        </div>
      </section>

      {/* How AI helps */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">How AI Helps Tradies With SEO</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            AI speeds up the content side of SEO without replacing the judgment behind it. A blog post or suburb page that used to take hours to draft from scratch takes a fraction of the time with AI doing the first pass — which is how we can build out suburb pages and FAQ content at a pace a solo tradie or small agency team couldn't match manually.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            AI also handles the repetitive technical work: generating schema markup consistently across every page, drafting meta descriptions in your business's tone, and flagging when a new suburb page is worth building based on search demand. A person still reviews and approves everything before it goes live — AI removes the grunt work, not the oversight.
          </p>
        </div>
      </section>

      <StackCTA variant="seo" />

      {/* FAQs */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">SEO for Tradies FAQs</h2>
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

      {/* Related reading */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            Related
          </p>
          <h2 className="mb-3 text-h2-mobile text-slate-950 md:text-h2">
            Weighing SEO Against Paid Ads?
          </h2>
          <p className="mb-5 max-w-3xl text-body-mobile text-slate-700 md:text-body">
            SEO and Google Ads solve different problems: ads can buy immediate visibility, while SEO builds organic visibility over time without a fee for each click. Our comparison guide explains the trade-offs without promising a fixed result.
          </p>
          <Link href="/seo-vs-google-ads-adelaide" className="btn-secondary px-6 py-3">
            Read SEO vs Google Ads <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Ready to Start Ranking?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat and we'll show you where you stand today, which searches are worth targeting, and the work most likely to improve visibility and enquiries. No ranking guarantees.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <Link href="/audit" className="btn-secondary px-8 py-4">
              Book Free Chat <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
