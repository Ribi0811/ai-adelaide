import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Websites for Retail Shops Adelaide | Shop Website Design",
  description:
    "Retail websites for Adelaide shops. Product showcase, location & hours, Google reviews, e-commerce integration. From $699, live in 48 hours.",
  alternates: {
    canonical: "/websites-for-retail-shops-adelaide",
  },
};

const buildItems = [
  {
    title: "Product showcase",
    body:
      "Display your products beautifully — categories, filters, high-res photos, and pricing. Customers browse your range before visiting, then come in ready to buy.",
  },
  {
    title: "Location, hours & directions",
    body:
      "Suburb, opening hours, parking info, and tap-to-open Google Maps directions — all above the fold. Critical for capturing foot traffic from search.",
  },
  {
    title: "Google reviews prominent",
    body:
      "Retail depends on trust. Your Google reviews displayed right on the homepage. New customers see your 4.8-star rating and decide to visit within seconds.",
  },
  {
    title: "E-commerce integration",
    body:
      "Already selling online? We connect with Shopify, WooCommerce, Squarespace Commerce, or your existing setup. The site acts as both showcase and shop.",
  },
  {
    title: "In-store events & promotions",
    body:
      "We add a section for current promotions, sales, and in-store events. Update weekly to keep your site fresh and give search engines new content to crawl.",
  },
  {
    title: "Mobile-first design",
    body:
      "Most retail browsing happens on a phone during a commute or lunch break. Your site loads fast, looks beautiful on every screen, and makes visiting the store effortless.",
  },
];

const steps = [
  {
    title: "Step 1 — 15-min call",
    body:
      "Tell us about your shop, your product range, your customers, and your suburb. We need photos, your trading hours, and any e-commerce platform you use.",
  },
  {
    title: "Step 2 — We build",
    body:
      "We write the copy, design the layout, build the product pages, wire up the reviews, and connect your e-commerce if applicable. You don&apos;t write a word.",
  },
  {
    title: "Step 3 — You review",
    body:
      "One review round. Tweak the wording, swap photos, adjust hours. We update it same day.",
  },
  {
    title: "Step 4 — Live",
    body:
      "We push it live on your domain, set up Google, and hand you the keys. Total time: 48 hours from first call to live site.",
  },
];

const whoItsFor = [
  "Boutique retail shops with no website, relying on Instagram and foot traffic",
  "Vintage, antique, and second-hand shops wanting to reach collectors online",
  "Specialty stores (books, gifts, fashion, homewares) needing a curated online presence",
  "Pop-up shops and market stallholders wanting a permanent online home",
  "Established retailers whose current site is slow or doesn't show on mobile",
  "New shops launching and need a website from day one",
];

const localAdelaide = [
  "Norwood & The Parade — premium boutique strip, design + curation matter most",
  "Glenelg & Jetty Road — tourist + beach lifestyle, mobile-first is critical",
  "Unley & King William Road — premium fashion + gifts, design-forward clientele",
  "Burnside & Glen Osmond — Hills lifestyle, established customer base",
  "Mitcham & Belair — suburban family retail, Google reviews drive discovery",
];

const faqs = [
  {
    question: "Can you connect with my existing e-commerce platform?",
    answer:
      "Yes. We integrate with Shopify, WooCommerce, Squarespace Commerce, BigCommerce, Square Online, and most other platforms. The site acts as both showcase and shop — your existing cart, checkout, and inventory stay intact.",
  },
  {
    question: "I don't sell online. Can you still build a good retail site?",
    answer:
      "Absolutely. Many Adelaide retailers use their site as a digital window — products, location, hours, reviews. The site drives foot traffic and phone calls rather than online sales. We&apos;ll design it for your model.",
  },
  {
    question: "What does it cost?",
    answer:
      "Websites start from $699 for a complete retail site. One setup fee, then a small monthly for hosting and maintenance. SEO add-on from $399/month for sustained Google rankings. E-commerce integrations may add a small setup fee depending on complexity.",
  },
  {
    question: "Can customers see what's in stock?",
    answer:
      "If you have an e-commerce platform with inventory tracking (Shopify, WooCommerce, etc.), we can display real-time stock on the site. For pure showcase sites, you can update featured products manually as inventory changes.",
  },
  {
    question: "Can I run promotions and sales on the site?",
    answer:
      "Yes. We add a dedicated promotions section. You update the copy and dates whenever you have a sale, in-store event, or seasonal promotion. Keeps the site fresh and gives Google new content to index.",
  },
  {
    question: "Will it rank on Google for shops in my area?",
    answer:
      "Yes — the site is set up with local SEO from day one. For competitive suburbs (&lsquo;vintage shop Norwood&rsquo;), add the SEO retainer for sustained page-1 rankings. Retail searches have strong local intent — high conversion potential.",
  },
  {
    question: "Can I show in-store events?",
    answer:
      "Yes. We add an &lsquo;Events &amp; Workshops&rsquo; section — perfect for bookshop readings, vintage sales, pop-up collaborations, and trunk shows. Great for SEO and customer engagement.",
  },
  {
    question: "How long until I see SEO results?",
    answer:
      "Your site is live in 48 hours. Google movement depends on competition — niche suburbs in 2-4 weeks, competitive suburbs in 2-3 months. The SEO retainer accelerates this significantly.",
  },
];

export default function WebsitesForRetailShopsPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Websites", href: "/website-design-adelaide" },
          { label: "Websites for Retail Shops Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design for Adelaide Retail Shops</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            A Retail Website That Brings Customers Through Your Door
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Adelaide shoppers research online before they visit. If your shop doesn&apos;t have a beautiful, fast website with Google reviews, location, and product photos, they walk past your door into the chain store down the road. We build retail websites for Adelaide boutiques and specialty stores — with product showcases, reviews, and e-commerce integration if you sell online. From $699, live in 48 hours.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What You Get</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {buildItems.map((item, index) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <h3
                  className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">From Brief to Live in 48 Hours</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.title} className="panel-light-soft p-5 md:p-6">
                <h3
                  className="mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: step.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Built For</h2>
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Suburbs we build retail websites for
          </h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We build retail shop websites right across Adelaide. Here are the suburbs we work in most:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {localAdelaide.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  📍
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials
        industry="retail"
        count={2}
        heading="What Adelaide shop owners say"
        eyebrow="From our clients"
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3
                  className="mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Bring More Shoppers Through the Door?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat — no obligation. We&apos;ll scope your retail site, show you examples from local Adelaide shops, and give you a fixed quote on the spot.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              See Website Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Looking for our general web design services?{" "}
            <Link href="/website-design-adelaide" className="underline hover:text-accent">
              See our Adelaide website design page
            </Link>{" "}
            or learn about our{" "}
            <Link href="/seo" className="underline hover:text-accent">
              SEO services
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
