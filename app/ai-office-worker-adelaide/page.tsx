import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "AI Office Worker Adelaide | $399/mo",
  description:
    "AI office worker for Adelaide. Automated admin, scheduling, email, data entry. From $399/mo.",
  alternates: {
    canonical: "/ai-office-worker-adelaide",
  },
};

const tasks = [
  {
    title: "Inbox triage",
    body:
      "Reads, sorts, drafts, and tags your inbox so you only see what needs you. Most Adelaide SMB owners lose 30-60 minutes a day to email sorting — we hand it back.",
  },
  {
    title: "Document handling",
    body:
      "Pulls data from PDFs, scans, invoices, and receipts, then files it in the right place with the right labels. Pairs with Xero, MYOB, Google Drive, and most CRMs.",
  },
  {
    title: "Calendar & scheduling",
    body:
      "Books meetings, juggles timezones, handles reschedules, and sends confirmations. Works with Google Calendar, Outlook, Calendly, and clinic systems.",
  },
  {
    title: "Quote & invoice follow-up",
    body:
      "Sends quotes, chases unpaid invoices, and pushes reminders on overdue accounts. Cuts average collection from 22 to 14 days.",
  },
  {
    title: "CRM updates",
    body:
      "Logs calls, updates contact records, tags leads, and syncs notes between your phone, email, and CRM. No more manual data entry at 9pm.",
  },
  {
    title: "Report drafts",
    body:
      "Pulls weekly numbers, drafts the summary, and posts it to your dashboard or inbox. You review, edit, and send — instead of building it from scratch.",
  },
];

const who = [
  "Tradies and small business owners who handle their own admin",
  "Allied health clinics juggling patient intake, notes, and recalls",
  "Professional services firms (accountants, lawyers, real estate agents)",
  "Retail and hospitality operators tired of copy-pasting between systems",
  "Anyone running Xero/MYOB + a CRM + Google Workspace who wants them to talk to each other",
];

const faqItems = [
  {
    question: "What does an AI office worker actually do?",
    answer:
      "An AI office worker is software that takes over the repetitive admin work that eats your day — inbox triage, calendar scheduling, document handling, quote follow-up, CRM updates, report drafting. It's not a person you hire. It's automation that plugs into the tools you already use (Xero, MYOB, Google Workspace, ServiceM8, Tradify, HubSpot, Calendly) and does the work between them so you don't have to.",
  },
  {
    question: "How much does an AI office worker cost in Adelaide?",
    answer:
      "From $399/month for a typical Adelaide small business. That's a fraction of a part-time admin hire ($2,500-$3,500/month) and far less than a full-time office manager ($55K-$65K/year). The setup is a one-off fee depending on scope, usually $500-$1,500.",
  },
  {
    question: "How is this different from a virtual assistant?",
    answer:
      "A virtual assistant is a person you hire (locally or offshore) and pay by the hour. An AI office worker is software that runs 24/7, doesn't take breaks, doesn't need management, and gets faster as you use it. For repetitive, rules-based admin (filing, drafting, scheduling, follow-up), AI is cheaper and more consistent. For human-judgment work, you still want a person.",
  },
  {
    question: "Will it work with my existing tools?",
    answer:
      "Almost certainly yes. We connect with Xero, MYOB, ServiceM8, Tradify, Jobber, Google Workspace, Microsoft 365, HubSpot, Calendly, Cliniko, Nookal, and most CRMs. If your tool has an API or webhook, we can usually plug in within 1-2 days.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most setups are live in 2-5 business days. We start with a workflow audit, map out which admin tasks to automate first, configure the system, test it on real data, then hand it over with a 30-minute walkthrough.",
  },
  {
    question: "Will my customers know they're talking to AI?",
    answer:
      "For email and scheduling, no — the AI writes in your voice using your actual templates. For voice calls, only if you tell them. For internal admin tasks (filing, sorting, drafting), it doesn't matter — no one but you and your team sees it.",
  },
  {
    question: "What if I want to change how it works later?",
    answer:
      "Easy. Message us or jump on a quick call. We can update rules, add new workflows, swap integrations, or change routing within 24-48 hours. The system evolves with your business — no big migrations, no lock-in.",
  },
  {
    question: "Is this just for big businesses?",
    answer:
      "No — it's built for Adelaide small businesses. Tradies, clinics, retail shops, professional services. The pricing assumes 1-15 staff, not enterprise. If you've got more than that, we'll scope a custom build.",
  },
];

function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      }}
    />
  );
}

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Office Worker Adelaide",
    serviceType: "AI Office Automation",
    provider: {
      "@type": "LocalBusiness",
      name: "AI Adelaide",
      url: "https://aiadelaide.com.au",
    },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "AI office worker for Adelaide small businesses. Automated admin, inbox triage, scheduling, document handling, CRM updates. From $399/month.",
    offers: {
      "@type": "Offer",
      price: "399",
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "399",
        priceCurrency: "AUD",
        unitText: "MONTH",
      },
    },
      };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AIOfficeWorkerAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqItems} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI Office Worker Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI Office Worker</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI Office Worker Adelaide — Your Admin, On Autopilot
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            If your day is half inbox triage, half calendar juggling, half CRM updates — and somehow you still don&apos;t get to the actual work — an AI office worker fixes that. We build automations that handle the repetitive admin between your existing tools (Xero, MYOB, Google Workspace, ServiceM8, Tradify, HubSpot, Calendly) so you and your team can focus on the work that actually pays. Adelaide-built, 2-5 day setup, from $399/month.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn-primary px-8 py-4">
              Book Free Audit <span aria-hidden>→</span>
            </Link>
            <Link href="/ai-automation-adelaide" className="btn-secondary px-8 py-4">
              See Full AI Automation Stack <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What an AI office worker handles</h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            The point isn&apos;t to replace your team. The point is to take the boring 70% of admin off their plate so they can do the 30% that actually needs a human. Here&apos;s what we typically automate first:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {tasks.map((t) => (
              <div key={t.title} className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{t.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">AI office worker vs virtual assistant vs in-house hire</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Option</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Monthly cost</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Coverage</th>
                  <th className="py-2 font-semibold text-slate-950">Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">AI office worker</td>
                  <td className="py-3 pr-4"><strong>From $399</strong></td>
                  <td className="py-3 pr-4">24/7, scales instantly</td>
                  <td className="py-3">Repetitive admin, integrations, follow-ups</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Virtual assistant (local)</td>
                  <td className="py-3 pr-4">$1,500-$3,500</td>
                  <td className="py-3 pr-4">Business hours</td>
                  <td className="py-3">Human-judgment tasks, calls, scheduling</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-semibold text-slate-950">Virtual assistant (offshore)</td>
                  <td className="py-3 pr-4">$600-$1,500</td>
                  <td className="py-3 pr-4">Their business hours</td>
                  <td className="py-3">Time-zone-flexible admin tasks</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-950">In-house office manager</td>
                  <td className="py-3 pr-4">$4,500-$6,500</td>
                  <td className="py-3 pr-4">9-5 plus on-call</td>
                  <td className="py-3">Larger teams with complex workflows</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            For most Adelaide small businesses, the answer is AI plus a part-time VA — not AI alone, not a full-time hire. The AI handles the volume; the VA handles the nuance.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Who it&apos;s built for</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {who.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide businesses say after automating the admin"
        eyebrow="Real results"
        subheadline="These are the wins that happen when the boring admin is finally off your plate."
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqItems.map((faq) => (
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Want your admin handled while you work?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free audit and we&apos;ll show you which admin tasks should be AI, which should be part-time VA, and which should stay on your plate. No pressure, no fluff.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See Full AI Automation <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4">
              Book Free Chat <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}