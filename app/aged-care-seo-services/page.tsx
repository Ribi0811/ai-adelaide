import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

// Tier 12 (2026-07-11): GSC shows "aged care seo services" (47 impr @ pos 81)
// with no page targeting it — same content-gap pattern that produced the
// automotive and hotel vertical pages. This completes the SEO vertical trio.
export const metadata: Metadata = {
  title: "Aged Care SEO Services Adelaide",
  description:
    "SEO for aged care providers in Adelaide and SA — home care, retirement living, allied health and NDIS. Be found when families search. From $399/mo.",
  alternates: { canonical: "/aged-care-seo-services" },
};

const whatsIncluded = [
  { title: "Google Business Profile for care providers", body: "Categories, services, photos, and attributes tuned for aged care — so you show up in the local pack when families search \"home care [suburb]\" or \"aged care near me\". Reviews highlighted, questions answered." },
  { title: "Suburb + region service pages", body: "Families search where mum or dad lives — \"home care Glenelg\", \"retirement living Mount Barker\". Every suburb and region you serve gets its own page with locally relevant content." },
  { title: "Family-focused content", body: "The person searching is usually an adult child, not the care recipient. We write content that answers their real questions — costs, waitlists, home care packages, what to look for — in plain English, not provider jargon." },
  { title: "Review generation + reputation", body: "Few decisions are more trust-driven than choosing care for a parent. We set up systems that ask happy families for Google reviews and help you respond to every review — the single strongest local ranking and conversion signal in this sector." },
  { title: "Local schema markup", body: "LocalBusiness, Service, and FAQPage structured data so Google (and AI assistants) understand exactly what care types you offer, where you operate, and how to contact you." },
  { title: "Monthly plain-English reporting", body: "Where you rank for the searches that matter, what enquiries came from search, and what we're doing next. No jargon, no vanity metrics." },
];

const faqs = [
  { question: "Do you do SEO for aged care providers?", answer: "Yes — our local SEO process is built for aged care and community care providers across Adelaide and SA: home care and home care package providers, residential aged care, retirement living, allied health, and NDIS providers. The sector is unusually local and unusually trust-driven, which is exactly what local SEO is good at." },
  { question: "How much does aged care SEO cost?", answer: "Our local SEO starts at $399/month (Google Business Profile optimisation, suburb pages, review generation) and Growth SEO is $699/month with more content and citation building. Month-to-month, no lock-in." },
  { question: "How do families actually find aged care providers online?", answer: "Usually an adult child Googles phrases like \"home care packages Adelaide\", \"aged care [suburb]\", or \"respite care near me\", then compares the top few providers by reviews and website. If you're not in the local pack or on page one with credible reviews, you're not in the comparison — no matter how good your care is." },
  { question: "Does this work for home care and NDIS providers, not just facilities?", answer: "Yes — service-area businesses are our specialty. You don't need a public facility address; we configure your Google Business Profile with the suburbs you actually service, and build suburb pages for each. That's how home care and NDIS providers win local searches across their whole coverage area." },
  { question: "How long does aged care SEO take to work?", answer: "Google Business Profile improvements can move rankings within 4-6 weeks. Suburb pages and content typically take 2-4 months. Competitive metro terms take longer — we give you an honest timeline for your suburbs and services in the free audit before you spend a dollar." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function AgedCareSeoServicesPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "SEO", href: "/seo" },
          { label: "Aged Care SEO Services" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Aged Care SEO Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">Aged Care SEO Services — Be Found When Families Search</h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Choosing care for a parent starts with a Google search. Aged care SEO puts your home care, residential, retirement living or NDIS service in front of Adelaide families at the exact moment they&apos;re comparing providers — with the reviews and answers that earn their trust.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4">Book Free Aged Care SEO Chat <span aria-hidden>→</span></Link>
            <Link href="/local-seo-adelaide" className="btn-secondary px-8 py-4">See Local SEO Service <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What&apos;s Included in Aged Care SEO</h2>
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
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Aged Care SEO FAQs</h2>
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Families Are Searching Right Now</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Free 15-minute chat. We&apos;ll show you where you rank for the care searches in your suburbs, what competitors are doing, and what it would take to be the provider families find first. Related: <Link href="/local-seo-adelaide" className="underline underline-offset-4">local SEO Adelaide</Link> and <Link href="/websites-for-clinics-adelaide" className="underline underline-offset-4">websites for clinics &amp; health</Link>.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free Aged Care SEO Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}
