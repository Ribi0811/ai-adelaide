import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  // Phase 8 punch list P4: rendered title was 83 chars (max 60); description
  // was 211 chars (want 140-160).
  title: "Local SEO Adelaide — Get Found on Google",
  description:
    "Local SEO for Adelaide businesses — Google Business Profile, suburb pages, reviews, citations, NAP consistency. Get found across SA. From $399/mo.",
  alternates: { canonical: "/local-seo-adelaide" },
};

const whatsIncluded = [
  { title: "Google Business Profile optimisation", body: "We tune every section — categories, services, photos, posts, hours, attributes. GBP is the single biggest factor in local pack rankings, and most Adelaide businesses have it 60% wrong." },
  { title: "Suburb service pages", body: "Glenelg, Norwood, Modbury, Burnside — we build a dedicated page for every suburb you serve, each one targeting \"[trade] [suburb]\" searches with Adelaide-specific content." },
  { title: "Citation building + NAP consistency", body: "Your business Name, Address, Phone must match across 50+ directories (Yellow Pages, True Local, Hotfrog, Yelp, Apple Maps). Inconsistencies kill rankings. We fix and build." },
  { title: "Review generation system", body: "More Google reviews = higher rankings AND more clicks. We set up automated post-job SMS review requests that bring in 5-15 new reviews per month on autopilot." },
  { title: "Local schema markup", body: "LocalBusiness, FAQPage, Service, Review schema — the structured data that helps Google understand exactly where you work, what you do, and who you serve." },
  { title: "Monthly ranking reports", body: "Plain-English reports showing where you rank, what's improving, what we're working on next. No jargon, no fluff." },
];

const faqs = [
  { question: "What is local SEO and why does it matter for Adelaide businesses?", answer: "Local SEO is the process of ranking your business for searches with geographic intent — \"plumber Norwood\", \"physio Glenelg\", \"cafe Mount Barker\". 46% of all Google searches have local intent, and 70% of local searchers visit a business within 24 hours. If you're not showing up in Google's local pack (the map results at the top), you're invisible to the highest-intent customers in your service area." },
  { question: "How long does local SEO take to work in Adelaide?", answer: "Honest answer: 1-3 months for visible movement. Google Business Profile optimisation alone can move you 5-10 spots within 4-6 weeks. Suburb pages take 2-4 months to rank. Full local SEO dominance typically takes 3-6 months. We give you an honest timeline in your free audit." },
  { question: "How much does local SEO cost in Adelaide?", answer: "Our local SEO starts at $399/month (Google Business Profile optimisation, suburb pages, review generation) and Growth SEO is $699/month with more content, more suburbs, and citation building. Month-to-month, no lock-in — Adelaide agencies commonly charge $1,000-$2,500/month for comparable work." },
  { question: "Do I need local SEO if I already do regular SEO?", answer: "Yes — they're different. Regular SEO targets informational and national keywords (\"how to fix a leaking tap\"). Local SEO targets geographic searches (\"plumber Norwood\"). Most Adelaide tradies and small businesses need local SEO far more than regular SEO. If you can only afford one, local SEO is the higher-ROI choice for any Adelaide business that serves a specific geographic area." },
  { question: "Will I show up in Google Maps?", answer: "Yes — that's the whole point of local SEO. The local pack (map results at the top of Google) is the most valuable real estate for Adelaide service businesses. Our process specifically targets local pack rankings through GBP optimisation, reviews, suburb pages, and citations." },
  { question: "Do I need a physical address to rank in Adelaide?", answer: "You need a service area, not necessarily a storefront. Most Adelaide tradies work from home or a depot — that's fine. We configure your GBP with a service area (set of suburbs) rather than a public address, which works perfectly for local pack rankings." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function LocalSeoAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "SEO", href: "/seo" },
          { label: "Local SEO Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Local SEO Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">Local SEO Adelaide — Get Found by Adelaide Customers</h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            When someone in Norwood, Glenelg, Modbury, or Mount Barker Googles your service, do you show up — or does your competitor? Local SEO makes sure you're the business that gets the call. Adelaide-focused, no lock-in contracts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4">Book Free Local SEO Chat <span aria-hidden>→</span></Link>
            <Link href="/seo" className="btn-secondary px-8 py-4">See Full SEO Service <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What Adelaide Local SEO Includes</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {whatsIncluded.map((item, i) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">0{i + 1}</p>
                <h3 className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Local SEO Adelaide FAQs</h2>
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Show Up in Adelaide Google Searches?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Free 15-minute chat. We'll show you where you rank now, what's holding you back, and exactly what it would take to get you in front of more Adelaide customers.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free Local SEO Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}