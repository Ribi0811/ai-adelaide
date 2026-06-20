import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Local SEO Adelaide — Get Your Business Found on Google",
  description:
    "Local SEO for Adelaide small businesses. We get you found on Google — suburb targeting, Google Business Profile, content, citations. No lock-in contracts.",
  alternates: {
    canonical: "/seo",
  },
};

const includedItems = [
  {
    title: "Google Business Profile optimisation",
    body:
      "Your GBP is your most powerful free tool — if it's set up right. We optimise your categories, services, photos, and get you set up for reviews that build trust.",
  },
  {
    title: "Suburb targeting pages",
    body:
      "We build clean, Google-friendly pages for every suburb you work in — Glenelg, Norwood, Modbury, Salisbury, you name it. Each page ranks for \"[your trade] [suburb]\" searches.",
  },
  {
    title: "On-page SEO",
    body:
      "Title tags, meta descriptions, heading structure, internal links — all the technical foundations that tell Google your site is the real deal.",
  },
  {
    title: "Content that ranks",
    body:
      "We write practical, useful content that answers the questions your customers are actually Googling. Not filler. Not keyword stuffing. Stuff people actually read.",
  },
  {
    title: "Monthly reporting",
    body:
      "You see exactly where you're ranking, what's improving, and what we're working on. Plain English, no jargon.",
  },
];

const whoItsFor = [
  "Trades businesses — plumbers, electricians, builders, painters, landscapers",
  "HVAC and air conditioning installers",
  "Allied health clinics — physio, chiro, dental, massage",
  "Cafes, restaurants, and retail shops",
  "Beauty salons, hairdressers, and wellness studios",
  "Professional services — accountants, real estate, legal",
  "Any Adelaide small business that relies on inbound leads",
];

const timeline = [
  {
    label: "First 30 days",
    body:
      "Foundation work — GBP optimisation, suburb pages built, on-page fixes complete",
  },
  {
    label: "Days 30–90",
    body:
      "Content published, local signals building, rankings start moving",
  },
  {
    label: "3–6 months",
    body:
      "Sustainable visibility for your core keywords and service areas",
  },
];

const faqs = [
  {
    question: "Do I need a new website to do SEO?",
    answer:
      "Not necessarily. If your current site is functional, we can work with it. If it's genuinely holding you back, we'll tell you honestly — and we can build you a new one fast.",
  },
  {
    question: "How is this different from what my web guy already does?",
    answer:
      "Most web developers don't do ongoing SEO. They build the site and move on. We specifically focus on local visibility — suburb targeting, GBP, content — the stuff that gets Adelaide customers finding you.",
  },
  {
    question: "Do you lock me into a contract?",
    answer:
      "No lock-in. We work month to month. If you're not happy with the progress, you can walk away. We'd rather keep you because the results are good.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Depends on your trade and competition. Niche trades in outer suburbs can see movement in 4-6 weeks. Competitive trades in inner Adelaide take 3-6 months for solid page 1 rankings. We'll give you an honest assessment before we start.",
  },
];

export default function SeoPage() {
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
          { label: "Services", href: "/services" },
          { label: "Local SEO Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Local SEO for Adelaide Businesses</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Get Found on Google Before Your Competitors Do
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Most Adelaide small businesses have great service and zero Google visibility. When someone in Norwood searches &quot;plumber near me&quot; or a homeowner in Salisbury types &quot;electrician Adelaide&quot;, the jobs go to whoever shows up first. We help you be that business — across trades, clinics, retail, hospitality, and professional services.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Your Next Customer Is Already Searching</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            70% of people searching for a tradie click one of the first three results. If you're not there, you're invisible — and your competitor who is ranked is taking those calls.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Local SEO isn't about tricks. It's about making sure Google understands exactly what you do, where you work, and who you serve. We do that setup once, and it keeps working for you 24/7.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What's Included in Our SEO Setup</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {includedItems.map((item, index) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Built for Adelaide Small Businesses</h2>
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
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">How Long Does It Take?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.label} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {item.label}
                </p>
                <p className="mt-3 text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-body-mobile text-slate-700 md:text-body">
            SEO isn't instant. But it's the only marketing that keeps working after you stop paying for ads.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Start Showing Up on Google?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free audit — no obligation. We'll look at where you're ranking now and tell you exactly what it would take to get you in front of more Adelaide customers.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <Link href="/audit" className="btn-secondary px-8 py-4">
              Book Free Chat <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
