import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Builder Website Adelaide | From $699",
  description:
    "Websites for Adelaide builders — renovation and new-build companies. Portfolio-ready, quote forms, mobile-first, Google-ready. From $699, live in days.",
  alternates: {
    canonical: "/websites-for-builders-adelaide",
  },
};

const features = [
  {
    title: "Project galleries that sell the job before you quote",
    body: "A builder's website lives or dies on its photos. We structure your site around before-and-after project galleries — a Burnside kitchen renovation, a Mount Barker new build — so a homeowner scrolling on their phone can see the standard of work before they call.",
  },
  {
    title: "Quote request forms built for scoped jobs",
    body: "Building work isn't a five-minute callout — it's a scoped conversation. Our quote forms let a prospective client describe the project, upload a site photo or plan, and pick a rough budget range, so you walk into the first call already informed.",
  },
  {
    title: "Trade credentials front and centre",
    body: "Builders compete on trust as much as price. Licensing, insurance, and industry association membership (HIA, Master Builders SA) get a dedicated, visible spot — not buried in a footer nobody reads.",
  },
  {
    title: "Suburb and project-type pages",
    body: "A 'renovations' page and a 'new builds' page rank for different searches, and a Norwood renovation searcher wants different proof points than a Mount Barker new-build searcher. We build separate pages so each search finds the right pitch.",
  },
  {
    title: "Mobile-first, fast-loading",
    body: "Most homeowners research builders on their phone during evenings and weekends. Your site loads fast, shows your number prominently, and makes requesting a quote effortless on any screen.",
  },
];

const tiers = [
  { name: "Starter", price: "$699", body: "A 3-page site — home, projects, contact. Enough to look credible and start taking quote requests this week." },
  { name: "Business", price: "$1,299", body: "Adds a project gallery, one suburb page, and a month of SEO setup — the right fit once you're ready to actively chase local search traffic." },
  { name: "Growth", price: "$2,499", body: "10+ pages, three suburb pages, full SEO setup, and automation for after-hours enquiries — for builders serious about owning their local market." },
];

const faqs = [
  {
    question: "Can the site handle a proper project portfolio?",
    answer:
      "Yes — before/after galleries, project descriptions, and suburb tags so visitors can filter by the type of job they want done. Your own project photos convert far better than generic stock.",
  },
  {
    question: "What does it cost?",
    answer:
      "Sites start from $699 for a 3-page Starter build. Business ($1,299) and Growth ($2,499) add project galleries, suburb pages, and SEO setup. See our full breakdown on the website pricing page.",
  },
  {
    question: "Can I add suburb pages for the areas I build in?",
    answer:
      "Yes. If you take on jobs across several suburbs, each one can get its own page targeting '[builder/renovation] [suburb]' searches — the same approach we use across dozens of Adelaide suburbs on our own site.",
  },
  {
    question: "How long until the site is live?",
    answer:
      "A Starter site is live within days of your brief call. Business and Growth builds — with more pages and SEO setup — typically take 5-14 days depending on scope.",
  },
  {
    question: "Do I need to supply the project photos myself?",
    answer:
      "Ideally yes — real photos of your own projects convert far better than stock imagery. If you don't have a curated set yet, we can launch with a smaller selection and add more as jobs complete, or use tasteful stock as a placeholder in the meantime.",
  },
];

export default function WebsitesForBuildersPage() {
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
          { label: "Websites for Builders Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design for Adelaide Builders</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            A Builder&apos;s Website That Wins the Quote Before the First Call
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Homeowners comparing builders for a renovation or new build look at your website before they pick up the phone — and a slow site with no project photos loses the job to whoever looks more credible. We build websites for Adelaide builders with project galleries, quote forms, and local SEO that actually rank. From $699, live in days.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Why This Matters for a Building Business</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            Building work is a high-value, considered purchase — a homeowner planning a renovation or new build spends weeks comparing options before they call anyone. That research happens on your website, whether you've invested in it or not. A slow, generic site with no real project photos signals the same thing a scruffy work van does: not worth the risk on a $50,000+ job.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Most Adelaide builders still run on referrals and a Facebook page. That works until the referral pipeline slows down — and by then, the builders who invested in a proper website and local SEO have already captured the search traffic you're missing. Getting a credible site live doesn't need to be a slow, expensive project — it needs project photos, clear pricing signals, and a quote form that makes the first step easy.
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
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Pricing for Builder Websites</h2>
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

      {/* HUMAN INPUT NEEDED: real builder project screenshots, client list, and permissions — populate once supplied. Logged in docs/claims-to-verify.md. */}
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Recent Builder Work</h2>
          <div className="panel-light-soft flex flex-col items-center gap-3 p-8 text-center md:p-10">
            <p className="text-body-mobile text-slate-600 md:text-body">
              Project screenshots and live examples for Adelaide builder sites go here — coming soon.
            </p>
            <Link href="/contact" className="btn-secondary px-6 py-3">
              Ask to See Examples <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Builder Websites by Area</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We build builder and renovation websites right across Adelaide — including these areas:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              { href: "/burnside", label: "Builders in Burnside" },
              { href: "/mount-barker", label: "Builders in Mount Barker" },
              { href: "/henley-beach", label: "Builders in Henley Beach" },
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready for a Website That Wins More Quotes?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat — no obligation. We&apos;ll scope your builder site, show you examples, and give you a quote on the spot.
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
