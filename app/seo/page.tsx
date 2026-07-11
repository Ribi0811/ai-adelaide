import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  // Fixed 2026-07 (Phase 2 SEO audit): title previously duplicated
  // /local-seo-adelaide's "Local SEO Adelaide" title almost verbatim. /seo
  // owns the broader "SEO Adelaide" head term; /local-seo-adelaide owns the
  // distinct "local seo" modifier — titles must stay differentiated.
  title: "SEO Adelaide | Local SEO Services From $399/mo",
  description:
    "SEO for Adelaide small businesses — local SEO, on-page, technical SEO, content, and link building. Suburb targeting, GBP, monthly reporting.",
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
      "We build clean, Google-friendly pages for every suburb you work in — Glenelg, Norwood, Modbury, Salisbury, you name it. Each page ranks for \"[your trade] [suburb]\" searches.",
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
      "Content published, local signals building, rankings start moving",
  },
  {
    label: "3–6 months",
    body:
      "Sustainable visibility for your core keywords and service areas",
  },
];

const faqs = [
  {
    question: "How much does SEO cost in Adelaide?",
    answer:
      "Our local SEO starts at $399/mo and Growth SEO is $699/mo — month to month, no lock-in. Adelaide agencies commonly charge $1,000-$2,500/mo for comparable work. Every plan includes content, Google Business Profile optimisation, and monthly rank reporting, so you always know what you're paying for.",
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
      "Depends on your trade and competition. Niche trades in outer suburbs can see movement in 4-6 weeks. Competitive trades in inner Adelaide take 3-6 months for solid page 1 rankings. We'll give you an honest assessment before we start.",
  },
  {
    question: "What SEO packages do you offer, and what do they cost?",
    answer:
      "Local SEO runs from $399/month — Google Business Profile, suburb pages, monthly content. Growth SEO runs $699/month with more content, more pages, and active link building. All month-to-month, no lock-in contracts.",
  },
  {
    question: "What's the difference between your SEO and a big agency?",
    answer:
      "Big agencies charge $2,000-5,000/month, lock you in for 12 months, and you'll never meet the people doing the work. We're Adelaide-based, transparent, and you get a direct line to the person running your account. Same or better results at a fraction of the price.",
  },
];

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Local SEO Adelaide",
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
      "Local SEO for Adelaide small businesses. We help you show up on Google with suburb targeting, Google Business Profile optimisation, and content that ranks.",
    offers: {
      "@type": "Offer",
      price: "399",
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "399",
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
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Local SEO Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Local SEO for Adelaide Businesses</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Get Found on Google Before Your Competitors Do
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Most Adelaide small businesses have great service and zero Google visibility. When someone in Norwood searches &quot;plumber near me&quot; or a homeowner in Salisbury types &quot;electrician Adelaide&quot;, the jobs go to whoever shows up first. We help you be that business — across trades, clinics, retail, hospitality, and professional services.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Your Next Customer Is Already Searching</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            70% of people searching for a tradie click one of the first three results. If you're not there, you're invisible — and your competitor who is ranked is taking those calls.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Local SEO isn't about tricks. It's about making sure Google understands exactly what you do, where you work, and who you serve. We do that setup once, and it keeps working for you 24/7.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What's Included in Our SEO Setup</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {includedItems.map((item, index) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Built for Adelaide Small Businesses</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {whoItsFor.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">How Long Does It Take?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.label} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {item.label}
                </p>
                <p className="mt-3 text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-body-mobile text-slate-700 md:text-body">
            SEO isn't instant. But it's the only marketing that keeps working after you stop paying for ads.
          </p>
        </div>
      </section>

      {/* Deep dive — link to the tradie-specific guide */}
      <section className="max-w-container mx-auto px-6 pt-10 md:pt-12">
        <div className="panel-light p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
            Tradie playbook
          </p>
          <h2 className="mb-3 text-h2-mobile text-slate-950 md:text-h2">
            Read the full <span className="text-accent">SEO for Tradies Adelaide</span> guide
          </h2>
          <p className="mb-5 max-w-3xl text-body-mobile text-slate-700 md:text-body">
            Plumbers, electricians, builders, HVAC, landscapers and painters — this is the
            playbook we use with Adelaide tradies. Covers Google Business Profile,
            reviews, suburb pages, schema, content, and pricing from $399/mo.
            The same framework we deploy on client sites.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/seo-for-tradies-adelaide"
              className="btn-primary px-6 py-3"
            >
              Read the tradie guide <span aria-hidden>→</span>
            </Link>
            <span className="text-sm text-slate-500">
              Local SEO $399/mo · Growth SEO $699/mo · no lock-in
            </span>
          </div>
        </div>
      </section>

      {/* Cluster hub — exact-anchor links to every SEO spoke page. GSC
          (2026-07-11) showed /local-seo-adelaide with one internal link
          sitewide while /seo soaked up its 498-impr target query; this block
          is how the hub hands each query to the page built for it. */}
      <section className="max-w-container mx-auto px-6 pt-10 md:pt-12">
        <div className="panel-light p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
            Find your fit
          </p>
          <h2 className="mb-3 text-h2-mobile text-slate-950 md:text-h2">
            SEO services by focus
          </h2>
          <p className="mb-6 max-w-3xl text-body-mobile text-slate-700 md:text-body">
            Same engine, tuned to what you need: suburb-level visibility, AI-era
            search, or your specific industry.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/local-seo-adelaide", label: "Local SEO Adelaide", note: "Google Business Profile, suburb pages, reviews, citations" },
              { href: "/ai-seo-adelaide", label: "AI SEO Adelaide", note: "Rank on Google and get recommended by ChatGPT & AI Overviews" },
              { href: "/seo-for-tradies-adelaide", label: "SEO for tradies Adelaide", note: "The playbook for plumbers, sparkies, builders and HVAC" },
              { href: "/google-business-profile-optimisation-adelaide", label: "Google Business Profile optimisation", note: "The single biggest local-pack ranking factor, done properly" },
              { href: "/automotive-seo-services", label: "Automotive SEO services", note: "Mechanics, panel beaters, dealerships, tyre shops" },
              { href: "/hotel-seo-services", label: "Hotel SEO services", note: "Direct bookings instead of OTA commissions" },
              { href: "/aged-care-seo-services", label: "Aged care SEO services", note: "Home care, retirement living, NDIS providers" },
              { href: "/seo-vs-google-ads-adelaide", label: "SEO vs Google Ads", note: "Which one first? An honest comparison for Adelaide budgets" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="panel-light-soft group block p-5">
                <span className="text-body-mobile font-semibold text-slate-950 group-hover:text-accent md:text-body">
                  {s.label} <span aria-hidden>→</span>
                </span>
                <span className="mt-1 block text-sm text-slate-600">{s.note}</span>
              </Link>
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

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
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

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Start Showing Up on Google?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free audit — no obligation. We'll look at where you're ranking now and tell you exactly what it would take to get you in front of more Adelaide customers.
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
