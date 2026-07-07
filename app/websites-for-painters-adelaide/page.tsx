import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Painter Website Adelaide | From $699",
  description:
    "Websites for Adelaide painting businesses — before/after galleries, quote forms, mobile-first, Google-ready design. From $699, live in days.",
  alternates: {
    canonical: "/websites-for-painters-adelaide",
  },
};

const features = [
  {
    title: "Before/after galleries that prove the finish",
    body: "Paint work is judged on finish quality — and photos are the only way to prove it before a client commits. We structure your site around real before/after shots, interior and exterior, so a Unley homeowner can see the standard of work before they call.",
  },
  {
    title: "Quote forms built for scoped jobs",
    body: "A repaint isn't a five-minute callout. Our quote forms let a client describe the rooms or exterior surfaces involved, upload photos, and pick a rough timeframe — so your first call is already informed, not a cold scoping exercise.",
  },
  {
    title: "Interior vs exterior pages",
    body: "Interior repaints and exterior/heritage jobs are different searches with different buyers and different proof points. Separate pages for each — instead of one generic 'painting services' page — let each one rank and convert on its own.",
  },
  {
    title: "Heritage and period-home ready",
    body: "A lot of Adelaide painting work is on older homes — North Adelaide, Unley, Glenelg — where heritage colour schemes and surface prep matter as much as the paint itself. We tailor copy and imagery to that context.",
  },
  {
    title: "Mobile-first, fast-loading",
    body: "Most homeowners compare painters on their phone during evenings and weekends. Your site loads fast and makes requesting a quote effortless on any screen.",
  },
];

const tiers = [
  { name: "Starter", price: "$699", body: "A 3-page site — home, gallery, contact. Enough to look credible and start taking quote requests this week." },
  { name: "Business", price: "$1,299", body: "Adds a before/after gallery, one suburb page, and a month of SEO setup — for painters ready to actively chase local search traffic." },
  { name: "Growth", price: "$2,499", body: "10+ pages, three suburb pages, full SEO setup, and automation for after-hours enquiries — for painting businesses looking to own their local market." },
];

const faqs = [
  {
    question: "Can the site show real before/after photos?",
    answer:
      "Yes — before/after galleries for interior and exterior work, organised so visitors can find jobs similar to their own. Your own project photos convert far better than generic stock images.",
  },
  {
    question: "What does it cost?",
    answer:
      "Sites start from $699 for a 3-page Starter build. Business ($1,299) and Growth ($2,499) add galleries, suburb pages, and SEO setup. See the full breakdown on our website pricing page.",
  },
  {
    question: "Can you build separate pages for interior and exterior painting?",
    answer:
      "Yes. Interior and exterior repaints are different searches, so we build dedicated pages for each rather than one generic services page — better for both visitors and Google.",
  },
  {
    question: "How long until the site is live?",
    answer:
      "A Starter site is live within days of your brief call. Business and Growth builds — with more pages and SEO setup — typically take 5-14 days depending on scope.",
  },
  {
    question: "Do I need to supply my own before/after photos?",
    answer:
      "Ideally yes — your own finished jobs convert far better than stock imagery. If you're just starting out, we can launch with a smaller curated set and add more as jobs complete.",
  },
];

export default function WebsitesForPaintersPage() {
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
          { label: "Websites for Painters Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design for Adelaide Painters</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            A Painter&apos;s Website That Proves the Finish Before You Quote
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Homeowners comparing painters judge on finish quality — and photos are how they judge it before they ever call. We build websites for Adelaide painting businesses with before/after galleries, quote forms, and local SEO that actually ranks. From $699, live in days.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Why This Matters for a Painting Business</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Painting is a trust-heavy purchase — the client is letting a stranger loose on their walls, ceilings, or the front of their home, and finish quality is hard to judge from a phone call alone. Photos do the convincing that a generic services list can't, which is why painters with an organised before/after gallery consistently win jobs over painters relying on word of mouth alone.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Adelaide has a large stock of older, heritage-listed homes, particularly around North Adelaide and Unley, where surface prep and colour-matching are as much a selling point as the paint itself. A website that speaks to that — rather than a generic template — signals you understand the job before the client even calls, and gives a heritage-conscious homeowner a reason to trust you over a painter with no visible track record on similar properties.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What You Get</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((item, index) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">0{index + 1}</p>
                <h3 className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Pricing for Painter Websites</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">{tier.name}</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">{tier.price}</p>
                <p className="text-body-mobile text-slate-700 md:text-body">{tier.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Full breakdown, add-ons, and package comparisons on our{" "}
            <Link href="/website-pricing" className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:text-slate-900">
              website pricing page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* HUMAN INPUT NEEDED: real painter before/after screenshots, client list, and permissions — populate once supplied. Logged in docs/claims-to-verify.md. */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Recent Painting Work</h2>
          <div className="panel-light-soft flex flex-col items-center gap-3 p-8 text-center md:p-10">
            <p className="text-body-mobile text-slate-600 md:text-body">
              Before/after screenshots and live examples for Adelaide painter sites go here — coming soon.
            </p>
            <Link href="/contact" className="btn-secondary px-6 py-3">
              Ask to See Examples <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Painter Websites by Area</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We build painting business websites right across Adelaide — including these areas:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              { href: "/unley", label: "Painters in Unley" },
              { href: "/north-adelaide", label: "Painters in North Adelaide" },
              { href: "/glenelg", label: "Painters in Glenelg" },
              { href: "/website-cost-adelaide", label: "How Much Does a Website Cost?" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready for a Website That Proves Your Finish?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat — no obligation. We&apos;ll scope your painting site, show you examples, and give you a quote on the spot.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              See Website Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
