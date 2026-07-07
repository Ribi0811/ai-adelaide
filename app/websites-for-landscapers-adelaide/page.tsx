import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Landscaper Website Adelaide | From $699",
  description:
    "Websites for Adelaide landscapers and garden designers. Project galleries, quote forms, mobile-first, Google-ready. From $699, live in days.",
  alternates: {
    canonical: "/websites-for-landscapers-adelaide",
  },
};

const features = [
  {
    title: "Garden and hardscape galleries",
    body: "Landscaping is a visual sell. We build your site around real project photos — retaining walls, paving, planting schemes — organised so a Stirling homeowner can see work similar to their own property before they enquire.",
  },
  {
    title: "Seasonal quote request forms",
    body: "Garden projects come with photos, sketches, and a rough scope. Our quote forms let a client upload a site photo, describe what they want, and pick a budget range — so you can prioritise the jobs worth chasing.",
  },
  {
    title: "Service-type pages, not one generic page",
    body: "Garden design, paving, retaining walls, and irrigation are different searches with different buyers. Separate pages for each service — rather than one crowded 'services' page — let each one rank on its own.",
  },
  {
    title: "Adelaide Hills-ready design",
    body: "A lot of landscaping work in Adelaide happens in the Hills — Stirling, Crafers, Hahndorf — where block size, slope, and native planting all matter. We tailor the copy and imagery to that context rather than a generic suburban template.",
  },
  {
    title: "Mobile-first, fast-loading",
    body: "Most homeowners browse landscaper portfolios on their phone over a weekend. Your site loads fast and makes requesting a quote effortless on any screen.",
  },
];

const tiers = [
  { name: "Starter", price: "$699", body: "A 3-page site — home, projects, contact. Enough to look credible and start taking enquiries this week." },
  { name: "Business", price: "$1,299", body: "Adds a project gallery, one suburb page, and a month of SEO setup — for landscapers ready to actively chase local search traffic." },
  { name: "Growth", price: "$2,499", body: "10+ pages, three suburb pages, full SEO setup, and automation for after-hours enquiries — for landscapers looking to own their local area." },
];

const faqs = [
  {
    question: "Can the site show off a full garden portfolio?",
    answer:
      "Yes — before/after galleries organised by project type (paving, planting, retaining walls) so visitors can find work similar to what they're planning. Your own project photos convert better than stock imagery.",
  },
  {
    question: "What does it cost?",
    answer:
      "Sites start from $699 for a 3-page Starter build. Business ($1,299) and Growth ($2,499) add project galleries, suburb pages, and SEO setup. See the full breakdown on our website pricing page.",
  },
  {
    question: "Can you build pages for the Adelaide Hills specifically?",
    answer:
      "Yes. If Stirling, Crafers, or Hahndorf are core to your business, we build dedicated pages for those areas — same approach we use across all 34 Adelaide suburbs on our own site.",
  },
  {
    question: "How long until the site is live?",
    answer:
      "A Starter site is live within days of your brief call. Business and Growth builds — with more pages and SEO setup — typically take 5-14 days depending on scope.",
  },
  {
    question: "Do I need to supply my own project photos?",
    answer:
      "Ideally yes — your own garden and hardscape photos convert far better than stock imagery. If you're just starting out, we can launch with a smaller curated set and add more as jobs complete.",
  },
];

export default function WebsitesForLandscapersPage() {
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
          { label: "Websites for Landscapers Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design for Adelaide Landscapers</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            A Landscaping Website That Shows the Work, Not Just Tells It
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Landscaping is a visual, project-based sale — homeowners want to see real work before they book a quote. We build websites for Adelaide landscapers with project galleries, service-specific pages, and quote forms that make enquiring effortless. From $699, live in days.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Why This Matters for a Landscaping Business</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Landscaping is one of the most visually-driven trades — a homeowner deciding between quotes is really deciding based on whose past work looks closest to what they want. If your only proof is a Facebook album buried under old posts, you're losing jobs to whoever has an organised, easy-to-browse gallery.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Adelaide's landscaping market spans everything from small courtyard makeovers to full Hills acreage projects, and each type of client searches differently. A website built around real project photos and service-specific pages — rather than one generic 'landscaping services' page — captures more of that search traffic and pre-sells the quality of your work before the first phone call. It also gives you somewhere to send people who find you through word of mouth, so a referral doesn't stall out on a Facebook page that hasn't been updated in months.
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
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Pricing for Landscaper Websites</h2>
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

      {/* HUMAN INPUT NEEDED: real landscaper project screenshots, client list, and permissions — populate once supplied. Logged in docs/claims-to-verify.md. */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Recent Landscaping Work</h2>
          <div className="panel-light-soft flex flex-col items-center gap-3 p-8 text-center md:p-10">
            <p className="text-body-mobile text-slate-600 md:text-body">
              Project screenshots and live examples for Adelaide landscaper sites go here — coming soon.
            </p>
            <Link href="/contact" className="btn-secondary px-6 py-3">
              Ask to See Examples <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Landscaper Websites by Area</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We build landscaping websites right across Adelaide — including these areas:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              { href: "/stirling", label: "Landscapers in Stirling" },
              { href: "/crafers", label: "Landscapers in Crafers" },
              { href: "/hahndorf", label: "Landscapers in Hahndorf" },
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready for a Website That Shows Off Your Work?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat — no obligation. We&apos;ll scope your landscaping site, show you examples, and give you a quote on the spot.
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
