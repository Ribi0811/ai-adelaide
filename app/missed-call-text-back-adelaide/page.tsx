import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Missed Call Text Back Adelaide for Tradies",
  description:
    "Missed call text back Adelaide tradies use to recover lost leads fast. Automatic call reply with job qualification and follow-up",
  alternates: { canonical: "/missed-call-text-back-adelaide" },
};

const faqs = [
  {
    question: "How fast does the text-back send after a missed call?",
    answer:
      "Usually within 5-20 seconds. The customer gets an immediate response instead of waiting hours for a callback.",
  },
  {
    question: "Can messages ask qualifying questions?",
    answer:
      "Yes. We can ask suburb, job type, urgency, and preferred booking time, then route qualified leads to your calendar or inbox.",
  },
  {
    question: "Will this work with my existing mobile number?",
    answer:
      "Yes. We connect to your current number and workflow so you do not need to change how customers contact you.",
  },
  {
    question: "Can I customise wording for different services?",
    answer:
      "Absolutely. You can run different templates for emergency callouts, quote requests, or after-hours messaging.",
  },
  {
    question: "How much does missed call automation cost?",
    answer:
      "Most tradie setups are priced based on call volume based on call volume and automation depth.",
  },
];

export default function MissedCallTextBackPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AI Adelaide",
    url: "https://aiadelaide.com.au",
    telephone: "+61-8-7100-9788",
    areaServed: "Adelaide, South Australia",
    description:
      "Missed call text back Adelaide service for tradies using automatic call reply and lead recovery automation.",
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">missed call text back adelaide</span>
          <h1 className="mb-6 mt-4 text-h1-mobile text-slate-950 md:text-h1">Missed Call Text-Back for Adelaide Tradies</h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Miss a call, lose a job. Our automatic call reply system texts back instantly, qualifies
            the lead, and keeps your pipeline moving while you&apos;re on tools.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">The pain</h2><ul className="list-disc space-y-2 pl-6 text-body-mobile text-slate-700 md:text-body"><li>Calls missed during site work and driving between jobs</li><li>Slow callbacks causing leads to book competitors</li><li>No consistent follow-up on evenings and weekends</li><li>Messy lead details scattered across voicemail and SMS</li></ul></div></section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">How it works</h2><p className="text-body-mobile text-slate-700 md:text-body"><strong>1)</strong> Detect missed call instantly.</p><p className="text-body-mobile text-slate-700 md:text-body"><strong>2)</strong> Send personalised text response in seconds.</p><p className="text-body-mobile text-slate-700 md:text-body"><strong>3)</strong> Capture suburb, job type, and urgency via SMS flow.</p><p className="text-body-mobile text-slate-700 md:text-body"><strong>4)</strong> Notify your team and trigger callback/booking automations.</p></div></section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Who it&apos;s for</h2><ul className="grid gap-2 text-body-mobile text-slate-700 md:grid-cols-2 md:text-body"><li>• Plumbers</li><li>• Electricians</li><li>• HVAC and refrigeration</li><li>• Roofers and solar installers</li><li>• Locksmiths and emergency callout teams</li><li>• Any tradie business relying on inbound calls</li></ul></div></section>



      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">FAQs</h2><div className="space-y-5">{faqs.map((faq) => (<div key={faq.question}><h3 className="text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3><p className="mt-2 text-body-mobile text-slate-700 md:text-body">{faq.answer}</p></div>))}</div></div></section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16"><div className="panel-light p-8 md:p-10"><h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Recover leads before they go cold</h2><p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">Book Free Audit to see how many missed calls you can convert this month.</p><Link href="/contact" className="btn-primary px-8 py-4">Book Free Audit <span aria-hidden>→</span></Link><div className="mt-5 flex justify-center gap-6 text-sm text-slate-600"><Link href="/">Home</Link><Link href="/services">Services</Link></div></div></section>
    </div>
  );
}
