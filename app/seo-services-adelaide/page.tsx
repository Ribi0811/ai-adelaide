import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Services Adelaide — Done-for-You SEO for Adelaide Businesses",
  description:
    "Done-for-you SEO services for Adelaide businesses. Local SEO, content, technical SEO, link building, monthly reporting. From $397/mo. No lock-in. Adelaide-based team.",
  alternates: { canonical: "/seo-services-adelaide" },
};

const services = [
  { title: "Local SEO", body: "Google Business Profile, suburb pages, citations, reviews. Rank in Adelaide's local pack.", href: "/local-seo-adelaide" },
  { title: "On-Page SEO", body: "Title tags, meta descriptions, headers, internal links, schema. Google-ready foundations.", href: "/seo" },
  { title: "Technical SEO", body: "Site speed, mobile usability, Core Web Vitals, crawl errors, structured data. The plumbing Google needs.", href: "/seo" },
  { title: "Content SEO", body: "Locally-focused blog content, service pages, FAQ pages. Answers the questions your customers actually Google.", href: "/blog" },
  { title: "Link Building", body: "Digital PR, local citations, industry partnerships, niche-relevant backlinks from real Adelaide and Australian sites.", href: "/seo" },
  { title: "Conversion Tracking", body: "Call tracking, form tracking, Google Analytics 4, Search Console. We measure what turns into jobs, not just traffic.", href: "/audit" },
];

const faqs = [
  { question: "What SEO services do you offer in Adelaide?", answer: "Full-stack SEO for Adelaide small businesses: local SEO (Google Business Profile, suburb pages, citations, reviews), on-page SEO (titles, metas, schema), technical SEO (speed, mobile, crawl errors), content SEO (blogs, service pages, FAQs), link building (digital PR, local citations), and conversion tracking. All packages include monthly reporting and strategy calls." },
  { question: "How much do SEO services cost in Adelaide?", answer: "SEO services for Adelaide businesses start at $397/month for the Local Starter package (GBP, 5 suburb pages, monthly content). Mid-tier packages run $697/month with more content and pages. Premium packages with link building start at $1,297/month. All month-to-month, no lock-in contracts." },
  { question: "How long until I see results from Adelaide SEO services?", answer: "Honestly: 3-6 months for sustainable page 1 rankings on competitive terms. Some quick wins (Google Business Profile moves, long-tail suburb queries) show up in 4-6 weeks. Competitive inner-Adelaide suburbs take longer. We'll give you an honest timeline in your free audit." },
  { question: "Do you guarantee #1 rankings on Google?", answer: "No reputable SEO agency guarantees rankings — anyone who does is lying. We guarantee we'll do the work (best-practice local SEO, quality content, proper technical setup) and we'll show you the progress monthly. Most of our Adelaide clients see page 1 rankings within 6 months for their core suburb + service terms." },
  { question: "What's the difference between your SEO services and a big agency?", answer: "Big agencies charge $2,000-5,000/month, lock you in for 12 months, and you'll never meet the people doing the work. We're Adelaide-based, transparent, and you get a direct line to the strategist running your account. Same or better results at a third of the price." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function SeoServicesAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Adelaide SEO Services</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">SEO Services Adelaide — Done-for-You</h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Full-service SEO for Adelaide businesses. Local SEO, content, technical SEO, link building, conversion tracking. Month-to-month, no lock-in. Adelaide-based team that picks up the phone.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4">Book Free SEO Chat <span aria-hidden>→</span></Link>
            <Link href="/local-seo-adelaide" className="btn-secondary px-8 py-4">Local SEO Service <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What Our Adelaide SEO Services Include</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s, i) => (
              <Link key={s.title} href={s.href} className="panel-light-soft block p-5 transition hover:border-accent md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">0{i + 1}</p>
                <h3 className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3">{s.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{s.body}</p>
                <p className="mt-3 text-sm font-medium text-accent">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Adelaide SEO Services FAQs</h2>
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Start Ranking?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute chat. We'll show you where you rank now, what your competitors are doing, and exactly what it would take to get you in front of more Adelaide customers.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free SEO Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}