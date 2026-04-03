import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book Free Chat",
  description:
    "15-minute free discovery call. We'll tell you exactly what would make the biggest difference for your Adelaide business.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book Free Chat | AI Adelaide",
    description:
      "15-minute free discovery call. We'll tell you exactly what would make the biggest difference for your Adelaide business.",
    url: "/contact",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Book Free Chat | AI Adelaide",
    description:
      "15-minute free discovery call. We'll tell you exactly what would make the biggest difference for your Adelaide business.",
    images: ["/twitter-image"],
  },
};

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Most implementations are live within 2-5 business days from the day we start.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "None. We handle everything. You just tell us what's driving you crazy — we handle the rest.",
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "That's what the free chat is for. If we don't think automation will genuinely help you, we'll tell you upfront.",
  },
];

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://aiadelaide.com.au/contact#webpage",
        name: "Book Free Chat",
        url: "https://aiadelaide.com.au/contact",
        inLanguage: "en-AU",
      },
      {
        "@type": "FAQPage",
        "@id": "https://aiadelaide.com.au/contact#faq",
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
      <section className="mb-14 max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light relative overflow-hidden p-8 text-center md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-electric/8 via-transparent to-accent/8" />
          <div className="relative">
            <div className="mb-6">
              <span className="eyebrow-light">Free 15-minute discovery chat</span>
            </div>
            <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
              Let&apos;s Talk
            </h1>
            <p className="mx-auto max-w-2xl text-body-mobile text-slate-600 md:text-body">
              Tell us what&apos;s eating your time. 15 minutes. No pressure. No hard
              sell. We&apos;ll tell you the fastest automation win first.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 max-w-container mx-auto px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["01", "Bring your biggest bottleneck"],
            ["02", "We map the workflow leak"],
            ["03", "You get a clear next step"],
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
        <ContactForm />
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
