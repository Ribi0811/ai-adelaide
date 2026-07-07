import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  // Phase 8 punch list P4: rendered title was 82 chars (max 60); description
  // was 110 chars (want 140-160, and the checker's regex truncated on the
  // embedded escaped quotes — rewritten without them).
  title: "Automotive SEO Services Adelaide",
  description:
    "SEO for Adelaide mechanics, dealerships, panel beaters, auto electricians, and tyre shops. Rank for local service-area searches. From $399/mo.",
  alternates: { canonical: "/automotive-seo-services" },
};

const whatsIncluded = [
  { title: "Google Business Profile setup", body: "Categories tuned for auto services (mechanic, panel beater, auto electrician, tyre shop, etc.), service area mapped to your workshop radius, photos of your actual work." },
  { title: "Service-area suburb pages", body: "Every Adelaide suburb you service gets its own page — \"panel beater Norwood\", \"mechanic Glenelg\", \"auto electrician Modbury\". Each page is locally-targeted and conversion-focused." },
  { title: "Review generation for auto shops", body: "Auto work is high-consideration, high-trust. Reviews are make-or-break. We set up post-service SMS review requests that bring in 10-20 new Google reviews per month." },
  { title: "Service-page SEO", body: "Logbook servicing, brake repairs, clutches, transmissions, diagnostics — each common service gets its own optimised page targeting Adelaide searchers." },
  { title: "Fleet + commercial pages", body: "If you service fleets, mine sites, council, or commercial clients, we build dedicated pages targeting those commercial search terms — much less competition than consumer auto." },
  { title: "Local citations + directories", body: "Yellow Pages, True Local, hotfrog, StartLocal, AutoGuru — every relevant directory gets your consistent NAP (Name, Address, Phone). Inconsistencies hurt rankings." },
];

const faqs = [
  { question: "Do you do SEO for mechanics in Adelaide?", answer: "Yes — we work with mechanics, panel beaters, auto electricians, tyre shops, dealerships, and vehicle inspection stations across Adelaide. Our process is built around local search (Google Business Profile, suburb pages, reviews) which is exactly what auto services need — most car owners Google \"mechanic near me\" or \"panel beater [suburb]\" rather than browsing websites." },
  { question: "How much does automotive SEO cost?", answer: "Local SEO packages for Adelaide auto businesses start at $399/month (Google Business Profile, suburb pages, monthly content). Growth SEO runs $699/month with more content, more suburb pages, and review generation. Month-to-month, no lock-in." },
  { question: "How long does automotive SEO take to work?", answer: "Google Business Profile optimisations can show results in 4-6 weeks (you'll start appearing in more local pack searches). Suburb service pages take 2-4 months to rank. For competitive terms like \"mechanic Norwood\" expect 3-6 months. We give you an honest timeline in your free audit." },
  { question: "Will I rank for \"mechanic near me\" searches?", answer: "Yes — that's exactly what local SEO targets. \"Mechanic near me\" and \"panel beater near me\" are local pack searches. Ranking for them requires optimised GBP, reviews, suburb pages, citations, and local schema — all of which are in our standard local SEO package." },
  { question: "What about fleet and commercial work?", answer: "If you service commercial fleets, council vehicles, or mine-site equipment, we build dedicated commercial pages targeting those search terms (\"fleet mechanic Adelaide\", \"truck servicing SA\"). Much less competition than consumer auto, much higher job value per conversion." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function AutomotiveSeoServicesPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "SEO", href: "/seo" },
          { label: "Automotive SEO Services" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Automotive SEO Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">Automotive SEO Services — Rank Your Auto Business in Adelaide</h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            When Adelaide car owners Google "mechanic near me" or "panel beater Norwood", does your workshop come up — or your competitor's? Automotive SEO makes sure your shop gets the call. Built for mechanics, dealerships, panel beaters, and auto electricians across Adelaide.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4">Book Free Auto SEO Chat <span aria-hidden>→</span></Link>
            <Link href="/local-seo-adelaide" className="btn-secondary px-8 py-4">See Local SEO Service <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What's Included in Automotive SEO</h2>
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
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Automotive SEO FAQs</h2>
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Book Your Auto Shop More Jobs</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Free 15-minute chat. We'll show you where you rank now for auto searches in your service area, and exactly what it would take to get more Adelaide car owners through your door.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free Auto SEO Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}