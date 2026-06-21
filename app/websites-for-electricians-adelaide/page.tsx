import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Websites for Electricians Adelaide | Electrical Website Design",
  description:
    "Electrical websites for Adelaide sparkies. Emergency call buttons, safety compliance info, service area pages, quote forms. Mobile-first, from $699.",
  alternates: {
    canonical: "/websites-for-electricians-adelaide",
  },
};

const buildItems = [
  {
    title: "Tap-to-call emergency button",
    body:
      "Power out, spark spotted, switchboard failing? One tap connects the customer to your phone. Sticky on every page, including suburb landing pages.",
  },
  {
    title: "Service area pages for every suburb",
    body:
      "We build a page for every Adelaide suburb you service. &lsquo;Electrician Norwood&rsquo;, &lsquo;Sparky Glenelg&rsquo;, &lsquo;Emergency electrician Burnside&rsquo; — your own landing page for each, built to rank.",
  },
  {
    title: "Safety & compliance credentials",
    body:
      "Display your electrical licence number, insurance details, and CEC accreditation (if solar) prominently. Customers trust tradies who show their credentials upfront.",
  },
  {
    title: "Quote forms with job details",
    body:
      "Customers describe the job (rewire, switchboard upgrade, fault finding), upload photos, and submit. You get the details in your email before you call back.",
  },
  {
    title: "Mobile-first design",
    body:
      "Electrician searches are almost always on a phone — fault, blackout, or quote on the go. Your site loads in under 2 seconds, makes calling one tap, and looks professional on any screen.",
  },
  {
    title: "Google-ready local SEO",
    body:
      "Title tags, local schema, suburb pages, Google Business Profile integration. Your site is set up to rank for &lsquo;electrician [suburb]&rsquo; from day one. Add the SEO retainer ($399/mo) for sustained page-1 rankings.",
  },
];

const steps = [
  {
    title: "Step 1 — 15-min call",
    body:
      "Tell us about your electrical business — domestic, commercial, solar, emergency callouts, your licence details, and your service area.",
  },
  {
    title: "Step 2 — We build",
    body:
      "We write the copy, build your service pages, wire up the forms, and add your credentials. You don&apos;t write a word or touch a builder.",
  },
  {
    title: "Step 3 — You review",
    body:
      "One review round. Tweak the services, add suburbs, change the phone number. We update it same day.",
  },
  {
    title: "Step 4 — Live",
    body:
      "We push it live, set up Google, and hand you the keys. Total time: 48 hours from first call to live site.",
  },
];

const whoItsFor = [
  "Solo sparkies with no website, relying on word-of-mouth and Hipages",
  "Electrical businesses with multiple trucks wanting a professional online presence",
  "Solar installers needing CEC accreditation and product info front and centre",
  "Emergency electricians wanting 24/7 call capture with the AI receptionist",
  "Established electricians losing jobs to competitors who rank on Google",
  "Commercial electricians needing a portfolio and capability statement",
];

const localAdelaide = [
  "Norwood, Payneham & Campbelltown — established eastern suburbs, reno work common",
  "Glenelg & Brighton — coastal homes, switchboard upgrades frequent",
  "Mitcham & Belair — Hills properties, solar + battery enquiries strong",
  "Modbury & Tea Tree Gully — northern suburbs, family homes, EV charger installs",
  "Salisbury & Elizabeth — northern growth corridor, new builds + solar",
];

const faqs = [
  {
    question: "Can I have an emergency call button?",
    answer:
      "Yes. A sticky tap-to-call button is on every page. When someone&apos;s got a power emergency at 9pm, one tap connects them to your phone (or your AI receptionist if you have one).",
  },
  {
    question: "Can you display my electrical licence?",
    answer:
      "Absolutely. We add your licence number, insurance details, and any CEC accreditation (for solar) prominently — usually in the footer and on an &lsquo;About&rsquo; or &lsquo;Credentials&rsquo; section. Customers trust tradies who show their paperwork.",
  },
  {
    question: "What does it cost?",
    answer:
      "Websites start from $699 for a complete, custom-built electrical site. One setup fee, then a small monthly for hosting and maintenance. SEO add-on from $399/month. Book a call for a specific quote.",
  },
  {
    question: "Can I show my solar/CEC accreditation?",
    answer:
      "Yes. If you do solar work, we add a dedicated solar section with your CEC accreditation, product brands you install (Fronius, Enphase, etc.), and battery options. Helps you rank for &lsquo;solar installer [suburb]&rsquo;.",
  },
  {
    question: "Can you build suburb-specific pages?",
    answer:
      "Yes. If you service 15 suburbs, we build 15 suburb pages — each with local content, common electrical issues in that area, and your service details. Google ranks suburb pages for &lsquo;electrician [suburb]&rsquo; searches.",
  },
  {
    question: "Will it rank on Google for electricians in my area?",
    answer:
      "Yes — the site is set up with local SEO from day one. For competitive suburbs (&lsquo;electrician Norwood&rsquo;, &lsquo;electrician Glenelg&rsquo;), add the SEO retainer for sustained page-1 rankings. We&apos;ll give you an honest assessment on the free chat.",
  },
  {
    question: "Can customers upload photos of the job?",
    answer:
      "Yes. The quote form supports photo uploads — great for fault diagnosis (&lsquo;here&apos;s the switchboard&rsquo;) or for customers to show what they want done. Saves 10-15 minutes per enquiry.",
  },
  {
    question: "How long until I see SEO results?",
    answer:
      "Your site is live in 48 hours. Google movement depends on competition — niche suburbs in 2-4 weeks, competitive suburbs in 2-3 months. The SEO retainer accelerates this significantly.",
  },
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
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
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
            An Electrical Website That Books Jobs While You&apos;re on the Tools
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Adelaide customers search &lsquo;electrician near me&rsquo; from their phone — usually during an emergency. If your site is slow, doesn&apos;t have a call button, or doesn&apos;t show your licence and credentials, they call the next sparky. We build electrical websites for Adelaide — fast, mobile-first, with tap-to-call, suburb pages, and quote forms that work 24/7. From $699, live in 48 hours.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What You Get</h2>
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
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">From Brief to Live in 48 Hours</h2>
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
            Suburbs we build electrical websites for
          </h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We build electrician and solar websites right across Adelaide. Here are the suburbs we work in most:
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
              href="/blog/ai-automation-adelaide-electrical"
              className="panel-light-soft flex items-center justify-between p-5 transition-colors hover:border-accent/40 md:p-6"
            >
              <span className="font-semibold text-slate-900">AI Automation for Adelaide Electricians</span>
              <span className="text-accent" aria-hidden>→</span>
            </Link>
            <Link
              href="/blog/why-tradies-lose-money-missed-calls"
              className="panel-light-soft flex items-center justify-between p-5 transition-colors hover:border-accent/40 md:p-6"
            >
              <span className="font-semibold text-slate-900">Why Tradies Lose Money to Missed Calls</span>
              <span className="text-accent" aria-hidden>→</span>
            </Link>
            <Link
              href="/missed-call-text-back-adelaide"
              className="panel-light-soft flex items-center justify-between p-5 transition-colors hover:border-accent/40 md:p-6"
            >
              <span className="font-semibold text-slate-900">Missed Call Text-Back Adelaide</span>
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready for a Website That Books More Jobs?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat — no obligation. We&apos;ll scope your electrical site, show you examples, and give you a quote on the spot.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
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
