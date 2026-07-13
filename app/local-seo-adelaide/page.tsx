import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  // Phase 8 punch list P4: rendered title was 83 chars (max 60); description
  // was 211 chars (want 140-160).
  title: "Local SEO Adelaide — Get Found on Google",
  description:
    `Local SEO for Adelaide businesses: improve Google Business Profile, local pages, reviews, citations, tracking and enquiries. ${PRICING.seo.fromLabel}, no lock-in.`,
  alternates: { canonical: "/local-seo-adelaide" },
};

const whatsIncluded = [
  { title: "Google Business Profile optimisation", body: "We review categories, services, photos, hours, attributes, service areas and business details. The goal is a complete, accurate profile that better matches relevant Adelaide searches and gives customers enough confidence to act." },
  { title: "Useful local service pages", body: "Where your coverage and search demand support them, we create distinct pages for the Adelaide areas you genuinely serve. Each page explains the service, local context and next step instead of repeating a suburb name through generic copy." },
  { title: "Core citations and NAP consistency", body: "We audit your business name, address and phone across relevant platforms such as Apple Maps, Bing Places, Yellow Pages and industry directories, then prioritise useful listings rather than chasing an arbitrary directory count." },
  { title: "Review request workflow", body: "We set up a simple post-job request process and make it easy for happy customers to leave genuine Google reviews. The number earned depends on your job volume and customer response; reviews are never bought or fabricated." },
  { title: "Local structured data", body: "We add appropriate LocalBusiness, Service and FAQPage structured data where it matches visible page content. It helps search engines understand the business; it does not guarantee a rich result or ranking." },
  { title: "Local visibility and lead reporting", body: "Plain-English reporting covers priority queries, Google Business Profile activity, calls and forms where tracking is available, completed work, and the next actions worth taking." },
];

const faqs = [
  { question: "What is local SEO and why does it matter for Adelaide businesses?", answer: "Local SEO improves how a business appears for searches with geographic intent, such as ‘plumber Norwood’, ‘physio Glenelg’ or ‘cafe Mount Barker’. It connects your website, Google Business Profile, reviews and wider business information so nearby customers can find accurate information and decide whether to contact you." },
  { question: "How long does local SEO take to work in Adelaide?", answer: "There is no fixed timetable. Your starting visibility, competition, location, website quality and Google's crawl and ranking systems all affect the pace. We establish a baseline, complete the highest-impact work first, and review early signals over the first few months rather than promising a particular position by a particular date." },
  { question: "How much does local SEO cost in Adelaide?", answer: `Local SEO is ${PRICING.seo.tiers[0].price} and Growth SEO is ${PRICING.seo.tiers[1].price}. Both are month to month with no lock-in. We agree the scope before starting so you know which profile, content, citation, technical and reporting work is included.` },
  { question: "Do I need local SEO if I already do regular SEO?", answer: "If nearby customers are important to your business, local SEO should be part of the wider SEO plan. Broad SEO can target service and informational searches, while local SEO concentrates on the locations you genuinely serve, your Google Business Profile and local trust signals." },
  { question: "Will I show up in Google Maps?", answer: "We can improve the relevance, accuracy and prominence signals within your control, but nobody can guarantee a Google Maps or local-pack position. Distance from the searcher and Google's ranking systems also affect what appears. We report the searches and locations where visibility changes." },
  { question: "Do I need a physical address to rank in Adelaide?", answer: "Eligible service-area businesses can use a Google Business Profile without displaying a storefront address. We configure the profile to match Google's eligibility rules and the areas you genuinely serve. A service area does not make a business rank equally across every listed suburb." },
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
            We improve how your business appears when Adelaide customers search by service, suburb, or &quot;near me&quot;. That means accurate Google Business Profile information, useful local pages, genuine reviews, consistent business details, and measurement tied to enquiries—not ranking guarantees.
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
            Free 15-minute chat. We&apos;ll establish your current visibility, identify the clearest gaps and explain which local-search improvements we would prioritise.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free Local SEO Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}
