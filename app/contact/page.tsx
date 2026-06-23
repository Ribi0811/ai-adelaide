import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact AI Adelaide | Free Chat",
  description:
    "Free 15-minute consultation. Adelaide AI specialists — website, SEO, or automation advice. Fixed quote on the spot.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact AI Adelaide | Free Chat",
    description: "Free 15-minute consultation. We look at your Adelaide business and recommend the right website, SEO, or AI automation plan — with a fixed quote on the spot.",
    url: `${siteConfig.url}/contact`,
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Contact AI Adelaide | Free Chat",
    description: "Free 15-minute consultation. We look at your Adelaide business and recommend the right website, SEO, or AI automation plan — with a fixed quote on the spot.",
    images: ["/twitter-image"],
  },
};

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Websites are live in 48 hours (Starter) to 14 days (Growth). SEO shows first movement in 30-60 days. AI automation is live in 2-5 business days.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "None. We handle everything. You tell us what you do, we design, write, and build. You review once, then we push it live.",
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "That's what the free chat is for. If we don't think a website, SEO, or automation will genuinely help you, we'll tell you upfront — and recommend someone else if that's the right answer.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Websites from $699 (one-off). SEO from $399/month. AI automation from $199/month. No lock-in, no agency bloat. You'll get a fixed quote on the free chat.",
  },
];

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${siteConfig.url}/contact#webpage`,
        name: "Book Free Chat",
        url: `${siteConfig.url}/contact`,
        inLanguage: "en-AU",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/contact#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="mb-14 max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light relative overflow-hidden p-8 text-center md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-electric/8 via-transparent to-accent/8" />
          <div className="relative">
            <div className="mb-6">
              <span className="eyebrow-light">Message us — we reply within 2 business hours</span>
            </div>
            <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
              Send Us a Message
            </h1>
            <p className="mx-auto max-w-2xl text-body-mobile text-slate-600 md:text-body">
              Browsing at night? Send a message now, we&apos;ll reply in the morning. Tell us about your Adelaide business — what you do, what&apos;s not working, what you&apos;re trying to figure out. We&apos;ll send a useful reply (and a fixed quote if a website, SEO, or AI automation makes sense).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 max-w-container mx-auto px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["01", "Tell us about your business"],
            ["02", "We recommend the right service (website, SEO, or automation)"],
            ["03", "You get a fixed quote on the spot"],
          ].map(([step, copy]) => (
            <div key={step} className="panel-light-soft p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                Step {step}
              </p>
              <p className="mt-2 text-sm text-slate-900">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 max-w-container mx-auto px-6">
        <div id="send-message">
          <ContactForm />
        </div>
      </section>

      <section className="mb-20 max-w-container mx-auto px-6">
        <div className="panel-light p-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
            Prefer email?
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-3 block text-h3 text-accent hover:underline"
          >
            {siteConfig.email}
          </a>
          <p className="mt-4 text-body-mobile text-slate-600 md:text-body">
            Response time: Within 2 business hours
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6">
        <div className="mb-8 text-center">
          <span className="eyebrow-light">Questions before booking?</span>
          <h2 className="mt-4 text-h2-mobile text-slate-950 md:text-h2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="panel-light p-6 md:p-8">
              <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
                {faq.question}
              </h3>
              <p className="text-body-mobile text-slate-600 md:text-body">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
