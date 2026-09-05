import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Websites for Electricians Adelaide | From ${PRICING.website.from}`,
  description:
    `Websites for Adelaide electricians ${PRICING.website.fromLabel}. Mobile design, clear services, licence details and quote forms. Compare scope and get a fixed quote.`,
  alternates: {
    canonical: "/websites-for-electricians-adelaide",
  },
};

const buildItems = [
  { title: "A clear call and quote path", body: "Help customers contact you from their phone. Show your actual hours and emergency availability, with tap-to-call and a straightforward enquiry form." },
  { title: "Services customers can understand", body: "Explain the electrical work you take on, such as switchboards, lighting or fault finding. A Starter site groups services on one page; dedicated service pages are scoped in larger builds." },
  { title: "Your verified credentials", body: "Display the licence, insurance and current accreditations you supply and approve. Use real team and job photos where available, with permission." },
  { title: "A useful project brief", body: "Collect contact details, the job type and suburb so you can follow up. Photo uploads, booking tools and connections to job-management software are optional work, quoted before setup." },
  { title: "Mobile design and a proper handover", body: "We check the call and enquiry steps across phone and desktop layouts. You review the site before launch and receive the agreed access and handover." },
  { title: "Search foundations with a clear scope", body: `The Starter build includes page titles and descriptions. More service-area content and ongoing local SEO are separate scopes; SEO starts ${PRICING.seo.fromLabel}.` },
];

const steps = [
  { title: "Step 1 — Agree the brief", body: "Tell us your services, service area, preferred jobs and how customers should contact you. We agree the pages, inclusions, price and delivery plan." },
  { title: "Step 2 — Build and write", body: "We prepare the design and copy from your brief. You provide or approve your licence details, photos, claims and any account access needed for launch." },
  { title: "Step 3 — Review together", body: "Check the services, phone number, forms and mobile layout. Revision scope and approval timing are agreed with your quote." },
  { title: "Step 4 — Launch and hand over", body: "A ready-to-start Starter build can be ready in 48 hours after the brief, content and access are confirmed. Larger builds and integrations follow an agreed schedule; final launch depends on approval and domain setup." },
];

const whoItsFor = [
  "Solo electricians who need a first website and a clear contact path",
  "Electrical businesses replacing an outdated or hard-to-use site",
  "Solar and battery installers who need to explain their actual services and credentials",
  "Emergency electricians who want their real availability easy to find",
  "Growing crews adding service detail, project photos or quote handling",
  "Commercial electricians presenting capabilities and completed work",
];

const localAdelaide = [
  "List the suburbs you actually attend and any travel or callout conditions.",
  "Separate emergency availability from routine installation and maintenance work.",
  "Explain whether you take residential, commercial, solar or specialist jobs.",
  "Use approved job photos and relevant project detail when adding local pages.",
];

const faqs = [
  { question: "What does the starting price include?", answer: `The ${PRICING.website.tiers[0].price} Starter is a three-page website: Home, Services and Contact, with mobile design, click-to-call, a contact form, basic page titles/descriptions and Google Business Profile setup. Dedicated suburb pages, photo uploads and integrations are not standard Starter inclusions. We confirm the scope before work begins.` },
  { question: "Can I have an emergency call button?", answer: "Yes. We can make tap-to-call prominent and show your actual emergency availability. It connects to your chosen number; the website does not answer calls or promise a response time on your behalf." },
  { question: "Can you display my licence and accreditations?", answer: "Yes. We use the current licence, insurance and accreditation details you supply and approve. We can also show your real project photos and the services or equipment you are qualified to work with." },
  { question: "Do I own the website, and is hosting included?", answer: "A one-off build is yours once paid in full. Domain registration, hosting and optional maintenance are separate and confirmed before work starts. The monthly website plan includes hosting and has different ownership and buy-out terms; the pricing page explains both options." },
  { question: "Can customers upload photos of a job?", answer: "Photo uploads can be scoped as an additional feature. We agree the file limits, destination and handling of the photos before building it, rather than assuming it is included in the Starter contact form." },
  { question: "Can you build suburb-specific pages?", answer: "Yes, when there is enough useful, genuine service information for each page. We agree which areas deserve their own page and quote that work separately from the Starter site." },
  { question: "Will the site rank on Google?", answer: "We build clear service information and sound search foundations, but no provider controls rankings. Ongoing SEO depends on your existing site, competition, business reputation and the services and suburbs you target." },
  { question: "How long does the build take?", answer: "A Starter build can be ready in 48 hours once the brief, content and access are confirmed. Larger builds, photo uploads and integrations need an agreed schedule. Your review, approvals and domain setup affect the final launch date." },
];

export default function WebsitesForElectriciansPage() {
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
    <div className="section-shell bg-[#FBFBFD] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Websites", href: "/website-design-adelaide" },
          { label: "Websites for Electricians Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design for Adelaide Electricians</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Websites for Adelaide Electricians
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Show customers what you do, where you work and how to reach you. We build mobile-first electrical websites with clear services, your verified credentials and a straightforward call or quote path. Starter websites from {PRICING.website.from} one-off, with scope agreed before we build.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact?service=website#send-message" className="btn-primary px-7 py-3.5" data-track="quote_electrician_hero">Get an electrical website quote <span aria-hidden>→</span></Link>
            <Link href="/website-pricing" className="btn-secondary px-7 py-3.5">Compare website packages</Link>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600">Starter: Home, Services and Contact. Domain and hosting are separate. Ready-to-start Starter builds can be ready in 48 hours; we confirm timing with your brief.</p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Build Around the Jobs You Want</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {buildItems.map((item, index) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <h3
                  className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">From Brief to a Working Website</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.title} className="panel-light-soft p-5 md:p-6">
                <h3
                  className="mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: step.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Built For</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {whoItsFor.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Make Your Service Area Clear
          </h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            Whether you cover a few nearby suburbs or a wider Adelaide service area, the site should help customers decide whether their job fits your business:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {localAdelaide.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  📍
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

            <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Related Resources for Adelaide Electricians
          </h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We build websites for all Adelaide trade businesses. Browse our industry-specific pages or read our latest electrical guides:
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <Link
              href="/websites-for-plumbers-adelaide"
              className="panel-light-soft flex items-center justify-between p-5 transition-colors hover:border-accent/40 md:p-6"
            >
              <span className="font-semibold text-slate-900">Plumber Websites Adelaide</span>
              <span className="text-accent" aria-hidden>→</span>
            </Link>
            <Link
              href="/blog/ai-for-electricians-adelaide"
              className="panel-light-soft flex items-center justify-between p-5 transition-colors hover:border-accent/40 md:p-6"
            >
              <span className="font-semibold text-slate-900">AI for Adelaide Electricians</span>
              <span className="text-accent" aria-hidden>→</span>
            </Link>
            <Link
              href="/website-pricing"
              className="panel-light-soft flex items-center justify-between p-5 transition-colors hover:border-accent/40 md:p-6"
            >
              <span className="font-semibold text-slate-900">Website Packages and Ownership</span>
              <span className="text-accent" aria-hidden>→</span>
            </Link>
            <Link
              href="/seo-for-tradies-adelaide"
              className="panel-light-soft flex items-center justify-between p-5 transition-colors hover:border-accent/40 md:p-6"
            >
              <span className="font-semibold text-slate-900">SEO for Adelaide Tradies</span>
              <span className="text-accent" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={2}
        heading="What Adelaide tradies say"
        eyebrow="From our clients"
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3
                  className="mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Improve Your Electrical Website?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Tell us about your existing website, electrical services and the jobs you want more of. We&apos;ll recommend a scope and provide a fixed quote before work begins.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact?service=website#send-message" className="btn-primary px-8 py-4">
              Get an electrical website quote <span aria-hidden>→</span>
            </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              See Website Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Looking for our general web design services?{" "}
            <Link href="/website-design-adelaide" className="underline hover:text-accent">
              See our Adelaide website design page
            </Link>{" "}
            or learn about our{" "}
            <Link href="/seo" className="underline hover:text-accent">
              SEO services
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
