import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PRICING } from "@/lib/constants";

// Tier 12 (2026-07-11): GSC shows "aged care seo services" (47 impr @ pos 81)
// with no page targeting it — same content-gap pattern that produced the
// automotive and hotel vertical pages. This completes the SEO vertical trio.
export const metadata: Metadata = {
  title: "Aged Care SEO Services Adelaide",
  description:
    `SEO for aged care providers in Adelaide and SA — home care, retirement living, allied health and NDIS. Improve visibility when families search. ${PRICING.seo.fromLabel}.`,
  alternates: { canonical: "/aged-care-seo-services" },
};

const whatsIncluded = [
  { title: "Google Business Profile for care providers", body: "We review categories, services, photos and attributes for accuracy and relevance when families search for care nearby. Reviews and important questions are made easy to find, without a local-pack guarantee." },
  { title: "Suburb + region service pages", body: "Families may search where their parent lives, such as ‘home care Glenelg’ or ‘retirement living Mount Barker’. We create pages only for genuine coverage areas where we can add useful, distinct information." },
  { title: "Family-focused content", body: "The person searching is usually an adult child, not the care recipient. We write content that answers their real questions — costs, waitlists, home care packages, what to look for — in plain English, not provider jargon." },
  { title: "Review requests + reputation", body: "Few decisions are more trust-driven than choosing care for a parent. We set up a respectful process for requesting genuine reviews and help you respond professionally. Reviews support trust and prominence but are not the only ranking factor." },
  { title: "Local schema markup", body: "LocalBusiness, Service, and FAQPage structured data so Google (and AI assistants) understand exactly what care types you offer, where you operate, and how to contact you." },
  { title: "Monthly plain-English reporting", body: "Where you rank for the searches that matter, what enquiries came from search, and what we're doing next. No jargon, no vanity metrics." },
];

const faqs = [
  { question: "Do you do SEO for aged care providers?", answer: "Yes — our local SEO process is built for aged care and community care providers across Adelaide and SA: home care and home care package providers, residential aged care, retirement living, allied health, and NDIS providers. The sector is unusually local and unusually trust-driven, which is exactly what local SEO is good at." },
  { question: "How much does aged care SEO cost?", answer: `Local SEO is ${PRICING.seo.tiers[0].price}; Growth SEO is ${PRICING.seo.tiers[1].price} for a broader content and authority scope. Both are month to month with no lock-in.` },
  { question: "How do families actually find aged care providers online?", answer: "An adult child may search phrases such as ‘home care packages Adelaide’, ‘aged care [suburb]’ or ‘respite care near me’, then compare eligibility, services, reviews, website information and contact options. The goal is to be discoverable and credible wherever that comparison happens." },
  { question: "Does this work for home care and NDIS providers, not just facilities?", answer: "Eligible service-area businesses can use Google Business Profile without displaying a public facility address. We configure genuine service areas and build local pages where useful. That improves relevance but does not create equal rankings across the whole coverage area." },
  { question: "How long does aged care SEO take to work?", answer: "There is no fixed timetable. Starting visibility, competition, service coverage, website quality and Google's systems affect the pace. The free audit establishes a baseline, and monthly reporting shows what changed rather than promise a particular ranking date." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function AgedCareSeoServicesPage() {
  return (
    <div className="section-shell bg-[#FBFBFD] pb-section-mobile pt-28 md:pb-section md:pt-32">
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
            Free 15-minute chat. We&apos;ll review relevant care searches, your service information and competitors, then explain which improvements we would prioritise. Related: <Link href="/local-seo-adelaide" className="underline underline-offset-4">local SEO Adelaide</Link> and <Link href="/websites-for-clinics-adelaide" className="underline underline-offset-4">websites for clinics &amp; health</Link>.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free Aged Care SEO Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}
