import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StackCTA from "@/components/StackCTA";
import TradieLeadForm from "@/components/TradieLeadForm";

export const metadata: Metadata = {
  // Phase 8 punch list P4: rendered title was 68 chars (max 60); description
  // was 167 chars (want 140-160).
  title: "SEO for Tradies Adelaide | From $399/mo",
  description:
    "SEO for Adelaide tradies — plumbers, electricians, builders, HVAC, landscapers. Local SEO from $399/mo, Growth SEO from $699/mo. No lock-in.",
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
    body: "Claim it, pick the most specific category (Plumber, Electrician — not just ‘Contractor’), list every suburb you actually service, add 10+ real job photos, and post weekly. This is the single highest-ROI hour you can spend.",
  },
  {
    title: "NAP consistency",
    body: "Your business name, address, and phone number need to be identical everywhere online — your website, GBP, directories, invoices. Two versions of your name tells Google you're two different businesses.",
  },
  {
    title: "Reviews",
    body: "The top 3 map pack results for tradie searches typically carry 50-200+ reviews; the bottom of page 1 has 10-30. Ask at the moment the job's done, not by email a week later, and reply to every review within 24 hours.",
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
    body: "FAQPage, Service, and LocalBusiness schema tell Google exactly what you do, where, and answer common questions directly in the search results. It's invisible to visitors but it's how Google decides you're the real deal.",
  },
];

const mistakes = [
  "One ‘Services’ page trying to cover everything, instead of one page per job type.",
  "Fewer than 10 reviews in the first three months — the single biggest local ranking factor, ignored.",
  "Stock photos instead of real job photos — an easy tell that a business isn't really local.",
  "No schema markup, while the competitor down the road has all three types.",
  "Buying links, which Google penalises — partnerships and quality content work instead.",
  "Setting up Google Business Profile once and never touching it again.",
];

const tiers = [
  {
    name: "Local SEO",
    price: "$399/mo",
    body: "Google Business Profile optimisation, suburb pages, monthly content, technical foundations. The right starting point for a solo tradie or two-person crew.",
  },
  {
    name: "Growth SEO",
    price: "$699/mo",
    body: "Everything in Local SEO plus more content, more suburb pages, and active link building — for a crew ready to actively out-rank established competitors across several suburbs.",
  },
];

const faqs = [
  {
    question: "How long does SEO take to work for Adelaide tradies?",
    answer:
      "Realistically 3-6 months to see meaningful movement, 6-12 months to sit top 3 in your service area. Any agency promising page-1 rankings in 30 days is either lying or using tactics that will get you penalised later.",
  },
  {
    question: "Is SEO better than Google Ads for tradies?",
    answer:
      "For most Adelaide tradies the honest answer is: use both. Ads bring leads today; SEO builds leads that keep arriving for years without a per-click cost. We usually recommend starting with both and scaling SEO as it matures.",
  },
  {
    question: "How much should an Adelaide tradie spend on SEO?",
    answer:
      "For a solo tradie or 2-person crew, our Local SEO tier at $399/month is the realistic starting point. A 5+ person operation usually needs Growth SEO at $699/month for the extra content and link building.",
  },
  {
    question: "Do tradies really need a website for SEO to work?",
    answer:
      "Your Google Business Profile gets you into the map pack. Your website gets you into the organic results underneath it — most tradie searches show both. Without a website you're only getting half the visibility.",
  },
  {
    question: "What's the difference between local SEO and regular SEO?",
    answer:
      "Local SEO targets suburb-specific searches — map pack plus local organic results. For a tradie, that's roughly 80% of the opportunity, which is why we focus almost entirely on local for trade clients rather than broad national SEO.",
  },
  {
    question: "Should I hire a freelancer or a tradie-focused agency?",
    answer:
      "For most Adelaide tradies, an agency that specialises in trades wins — they already know the directories, the schema, and the conversion patterns specific to your industry. Generalist freelancers are cheaper but spread thin across unrelated industries.",
  },
  {
    question: "How do I know if my SEO provider is doing real work?",
    answer:
      "Ask for monthly ranking reports, Google Business Profile insights, a list of content added that month, and directories submitted to. If they can't show you this within the first 60 days, they're not doing real work.",
  },
  {
    question: "Do you lock me into a contract?",
    answer:
      "No. Both SEO tiers run month to month with no lock-in. If the results aren't showing up, you can walk away — we'd rather earn the renewal than force it.",
  },
];

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO for Tradies Adelaide",
    serviceType: "Local SEO",
    provider: {
      "@type": "LocalBusiness",
      name: "AI Adelaide",
      url: "https://aiadelaide.com.au",
    },
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
        price: "399",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "399",
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Growth SEO",
        price: "699",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "699",
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
            Most Adelaide homeowners search online before hiring a tradie. The top three map pack results capture the large majority of clicks for &quot;near me&quot; searches, and page 2 of Google gets under 1% of clicks — being invisible is the default if you're not on page 1.
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
            Local SEO is the highest-ROI starting point for any tradie. Most of your customers are within 10-20km of your base, which makes Google Maps where you win or lose the job.
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
            Your Google Business Profile gets you into the map pack. Your website gets you into the organic results underneath it — both matter, because most tradie searches show both on the same page.
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
            On the technical side: 60-70% of tradie searches happen on mobile, so your site needs to load in under 3 seconds on a phone. Every site needs HTTPS (free with modern hosting) and the FAQPage, Service, and LocalBusiness schema mentioned above. None of this is optional — it's the baseline your competitors are already meeting.
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
            Two tiers, month to month, no lock-in contracts. Compare that to $1,500-3,000/month for a generalist marketer, or $2,000-5,000/month at a big agency that locks you in for 12 months.
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
              $699
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
            SEO and Google Ads solve different problems — one gets you leads today, the other keeps working for years without a per-click cost. Our comparison guide breaks down the real costs and timelines for Adelaide businesses.
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
            Book a free chat and we'll tell you exactly where you stand today and what it would take to get you into the top three for your trade and suburb.
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
