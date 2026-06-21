import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Plumber Website Adelaide | From $699",
  description:
    "Plumber websites built for Adelaide tradies. Mobile-first, Google-ready, click-to-call, quote forms. AI-built in 48 hours. From $699.",
  alternates: {
    canonical: "/websites-for-plumbers-adelaide",
  },
};

const buildItems = [
  {
    title: "Tap-to-call emergency button",
    body:
      "When someone&apos;s got a burst pipe, they&apos;re not scrolling through a pretty website. One tap on the call button from any page, from any phone. That&apos;s the difference between a lead and a bounce.",
  },
  {
    title: "Service area maps",
    body:
      "Show exactly which suburbs you cover. We build suburb service pages so when someone in Norwood searches &lsquo;plumber Norwood&rsquo;, you have a page Google can rank.",
  },
  {
    title: "Quote request forms",
    body:
      "Not every job is an emergency. A clean quote form lets customers describe their problem, upload a photo, and get a response — without a phone call.",
  },
  {
    title: "Mobile-first design",
    body:
      "80%+ of plumbing searches happen on a phone. Your site loads fast, shows your number prominently, and makes contact effortless on any screen.",
  },
  {
    title: "24/7 lead capture ready",
    body:
      "We connect your site with our AI missed-call system. When you&apos;re on a job or asleep, the AI answers, captures the lead, and texts you the details. Set up in 2-5 days.",
  },
  {
    title: "Google-ready local SEO",
    body:
      "Proper title tags, local schema markup, suburb targeting, and Google Business Profile sync. Your site is set up to rank for &lsquo;plumber [suburb]&rsquo; from day one.",
  },
];

const steps = [
  {
    title: "Step 1 — 15-min call",
    body:
      "Tell us about your plumbing business, your service areas, your emergency services, and your ideal jobs. That&apos;s all we need.",
  },
  {
    title: "Step 2 — We build",
    body:
      "We write the copy, design the layout, build the service pages, and wire up the forms. You don&apos;t write a word or touch a builder.",
  },
  {
    title: "Step 3 — You review",
    body:
      "One review round. Tell us what to change — tweak the service list, add a suburb, adjust the phone number. We update it same day.",
  },
  {
    title: "Step 4 — Live",
    body:
      "We push it live on your domain, set up Google, and hand you the keys. Total time: 48 hours from first call to live site.",
  },
];

const whoItsFor = [
  "Plumbers with no website, or one that's slow, outdated, and invisible on Google",
  "Plumbing businesses relying on word-of-mouth and Facebook (it's not enough anymore)",
  "Emergency plumbers who need a tap-to-call site that loads instantly on mobile",
  "Plumbers quoting thousands by big agencies and walking away",
  "Established plumbing businesses wanting to dominate their service areas on Google",
  "Plumbing companies with multiple service areas needing suburb pages for each",
];

const localAdelaide = [
  "Norwood, Payneham & Campbelltown — dense eastern suburbs, fast response is the selling point",
  "Glenelg, Somerton Park & Brighton — coastal homes, emergency callouts common",
  "Prospect, Enfield & Sefton Park — family suburbs, trust + reviews drive bookings",
  "Burnside, Glen Osmond & Crafers — Hills properties, established clientele",
  "Mitcham, Belair & Blackwood — southern suburbs, reliable local service wins",
];

const faqs = [
  {
    question: "Can I have a tap-to-call button for emergencies?",
    answer:
      "Yes. Every page has a prominent tap-to-call button that works on any mobile phone. When someone has a plumbing emergency, one tap connects them straight to your phone.",
  },
  {
    question: "Can you show which suburbs I service?",
    answer:
      "Absolutely. We build dedicated suburb pages so you rank for &lsquo;plumber [suburb]&rsquo; searches. If you cover 20 suburbs, we build 20 pages. Google loves that.",
  },
  {
    question: "What does it cost?",
    answer:
      "Websites start from $699 for a complete, custom-built plumbing site. One setup fee, then a small monthly for hosting and maintenance. SEO add-on from $399/month. Book a call for a specific quote.",
  },
  {
    question: "Can I add the AI receptionist for after-hours calls?",
    answer:
      "Yes. Our website is built to connect with our AI missed call system. When you&apos;re on a job or asleep, the AI answers, captures the lead, and texts you the details. See our AI automation page for details.",
  },
  {
    question: "Will it rank on Google for plumbers in my area?",
    answer:
      "Yes. We build every site with local SEO — suburb targeting, Google Business Profile integration, and schema markup. Your site is set up to rank for &lsquo;plumber [your suburb]&rsquo; from day one.",
  },
  {
    question: "Do I need to provide photos of past jobs?",
    answer:
      "Ideally yes — before/after shots, hot water installs, bathroom renos. Your own work converts better than stock. We can launch with curated stock and swap yours in later.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Your site is live in 48 hours. Google ranking depends on competition — niche suburbs can move in 2-4 weeks, competitive areas take 2-3 months. We&apos;ll give you an honest timeline.",
  },
  {
    question: "Can the site handle quote forms with photos?",
    answer:
      "Yes. Customers can describe their plumbing issue, upload photos (great for leak diagnosis), and submit. You get the details in your email with the photos attached. Saves 10 minutes per enquiry.",
  },
];

export default function WebsitesForPlumbersPage() {
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
          { label: "Websites for Plumbers Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design for Adelaide Plumbers</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            A Plumbing Website That Picks Up the Phone While You&apos;re on a Job
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            When someone searches &lsquo;plumber near me&rsquo;, they need help right now. If your website is slow, confusing, or doesn&apos;t have a call button, they&apos;re calling the next result on Google. We build websites for Adelaide plumbers — with tap-to-call, service area pages, and quote forms that capture leads even when you can&apos;t answer. From $699, live in 48 hours.
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
            Suburbs we build plumbing websites for
          </h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We build plumbing websites right across Adelaide. Here are the suburbs we work in most:
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready for a Website That Catches Every Call?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat — no obligation. We&apos;ll scope your plumbing site, show you examples, and give you a quote on the spot.
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
