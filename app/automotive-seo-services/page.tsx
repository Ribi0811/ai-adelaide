import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  // Phase 8 punch list P4: rendered title was 82 chars (max 60); description
  // was 110 chars (want 140-160, and the checker's regex truncated on the
  // embedded escaped quotes — rewritten without them).
  title: "Automotive SEO Services Adelaide",
  description:
    `SEO for Adelaide mechanics, dealerships, panel beaters, auto electricians and tyre shops. Improve local service-area visibility. ${PRICING.seo.fromLabel}.`,
  alternates: { canonical: "/automotive-seo-services" },
};

const whatsIncluded = [
  { title: "Google Business Profile setup", body: "Categories tuned for auto services (mechanic, panel beater, auto electrician, tyre shop, etc.), service area mapped to your workshop radius, photos of your actual work." },
  { title: "Service-area suburb pages", body: "Where real coverage and search demand justify it, we build useful pages around searches such as ‘panel beater Norwood’, ‘mechanic Glenelg’ and ‘auto electrician Modbury’. Each page needs distinct service and local detail." },
  { title: "Review workflow for auto shops", body: "Auto work is high-consideration and trust matters. We set up post-service SMS review requests and a response process. Review volume depends on completed jobs and customer choice; it is never guaranteed." },
  { title: "Service-page SEO", body: "Logbook servicing, brake repairs, clutches, transmissions, diagnostics — each common service gets its own optimised page targeting Adelaide searchers." },
  { title: "Fleet + commercial pages", body: "If you service fleets, mine sites, council, or commercial clients, we build dedicated pages targeting those commercial search terms — much less competition than consumer auto." },
  { title: "Local citations + directories", body: "Yellow Pages, True Local, hotfrog, StartLocal, AutoGuru — every relevant directory gets your consistent NAP (Name, Address, Phone). Inconsistencies hurt rankings." },
];

const faqs = [
  { question: "Do you do SEO for mechanics in Adelaide?", answer: "Yes. The process can be applied to mechanics, panel beaters, auto electricians, tyre shops, dealerships and inspection stations. We start with the services, locations, Google Business Profile and enquiry path, then prioritise searches with evidence of customer demand." },
  { question: "How much does automotive SEO cost?", answer: `Local SEO is ${PRICING.seo.tiers[0].price}; Growth SEO is ${PRICING.seo.tiers[1].price} for a broader content and authority scope. Both are month to month with no lock-in.` },
  { question: "How long does automotive SEO take to work?", answer: "There is no fixed timetable. Your workshop location, starting visibility, competition, reviews, website and Google's processing all affect movement. We establish a baseline in the free audit and report changes over the following months rather than promise a date or position." },
  { question: "Will I rank for \"mechanic near me\" searches?", answer: "Those are relevant target searches, but nobody can guarantee the result. We improve the Google Business Profile, reviews workflow, useful local pages, citations and website foundations within your control; distance, competition and Google's systems also affect what each searcher sees." },
  { question: "What about fleet and commercial work?", answer: "If you service commercial fleets, council vehicles, or mine-site equipment, we build dedicated commercial pages targeting those search terms (\"fleet mechanic Adelaide\", \"truck servicing SA\"). Much less competition than consumer auto, much higher job value per conversion." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function AutomotiveSeoServicesPage() {
  return (
    <div className="section-shell bg-[#FBFBFD] pb-section-mobile pt-28 md:pb-section md:pt-32">
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
            When Adelaide car owners Google &quot;mechanic near me&quot; or &quot;panel beater Norwood&quot;, they compare location, reviews, services and trust. We improve the search presence and enquiry path for mechanics, dealerships, panel beaters and auto electricians—without guaranteeing a ranking.
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
            Free 15-minute chat. We&apos;ll review your visibility for relevant auto searches and explain which profile, website and review improvements we would prioritise.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free Auto SEO Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}
