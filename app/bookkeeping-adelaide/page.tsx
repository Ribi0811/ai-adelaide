import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "AI Bookkeeping Adelaide | From $299/mo",
  description:
    "AI bookkeeping for Adelaide small businesses. Automated invoice processing, BAS-ready reports, and Xero/MYOB workflows. From $299/mo.",
  alternates: {
    canonical: "/bookkeeping-adelaide",
  },
};

const faqItems = [
  {
    question: "What does AI bookkeeping actually automate?",
    answer:
      "We automate the repetitive bookkeeping prep that eats your week: receipt capture, invoice sorting, data entry, follow-up on missing paperwork, debtor reminders, and BAS prep checks. The goal isn't to replace your accountant — it's to hand them cleaner data faster so they spend less time untangling chaos and more time doing the work that actually matters.",
  },
  {
    question: "Does it work with Xero and MYOB?",
    answer:
      "Yes. Xero and MYOB are the main targets, but we also work with Google Drive, Gmail, ServiceM8, Tradify, Hubdoc, Dext, and most CRMs or job-management tools that expose an API or webhook. If your bookkeeping workflow already runs through a few systems, we layer automation on top instead of forcing you to change everything.",
  },
  {
    question: "Can AI bookkeeping help with BAS prep?",
    answer:
      "Absolutely. We can flag missing receipts, categorise transactions, chase up incomplete entries, and generate a clean prep pack for your bookkeeper or accountant before BAS time rolls around. That means fewer back-and-forth emails and fewer late-night data hunts.",
  },
  {
    question: "Will this replace my bookkeeper or accountant?",
    answer:
      "No. It makes them more efficient. A good bookkeeper or accountant should spend their time on advice, compliance, and high-value checks — not manual data entry and receipt chasing. The AI handles the grunt work so your humans can do the human work.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most bookkeeping automation setups go live in 2-5 business days. We start with a workflow audit, connect your tools, test the data flow, and then go live with a short handover so your team knows exactly how it works.",
  },
  {
    question: "What does AI bookkeeping cost in Adelaide?",
    answer:
      "From $299/month for a practical automation setup. Complex environments with multiple companies, approvals, or custom workflows may cost more, but most small businesses are well under the cost of even a part-time admin/bookkeeping hire.",
  },
  {
    question: "What if my invoices and receipts are a mess?",
    answer:
      "That&apos;s exactly the point. Messy inputs are where automation saves the most time. We can sort receipts from email, PDFs, scans, and uploads, then push them into the right workflow with the right labels so your accountant doesn&apos;t have to decipher everything by hand.",
  },
  {
    question: "Can it also do debtor follow-up and payment reminders?",
    answer:
      "Yes. We can set reminders for overdue invoices, trigger follow-up tasks, and notify you when a payment is late. For many Adelaide small businesses that alone is worth the monthly cost, because cash comes in faster and you spend less time chasing people who already owe you money.",
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
    name: "AI Bookkeeping Adelaide",
    serviceType: "AI Bookkeeping Automation",
    provider: {
      "@type": "LocalBusiness",
      name: "AI Adelaide",
      url: "https://aiadelaide.com.au",
    },
    areaServed: {
      "@type": "City",
      name: "Adelaide",
    },
    description:
      "AI bookkeeping automation for Adelaide small businesses — receipt capture, invoice processing, BAS prep support, and Xero/MYOB workflows.",
    offers: {
      "@type": "Offer",
      price: "299",
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "299",
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

export default function BookkeepingAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={faqItems} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI Bookkeeping Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI Bookkeeping</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI Bookkeeping Adelaide — Smarter Than a Bookkeeper, Cheaper Than an Agency
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            If BAS prep, invoice coding, receipt chasing, and Xero cleanup are chewing up your week, we automate the boring bits. We don&apos;t replace your accountant — we give them cleaner data, faster. Adelaide-based setup in 2-5 business days, from $299/month.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn-primary px-8 py-4">
              Book a Free Chat <span aria-hidden>→</span>
            </Link>
            <Link href="/ai-office-worker-adelaide" className="btn-secondary px-8 py-4">
              See AI Office Worker <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What AI bookkeeping automates first</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Receipt capture and sorting</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Receipts land in email, Drive, or a shared inbox and get captured automatically. The AI tags them, renames them, and pushes them into the right folder or workflow so your team isn&apos;t hunting for a blurry PDF at quarter end.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Invoice coding and data entry</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                We can classify invoices by supplier, project, or expense type, then hand the data to Xero, MYOB, or your bookkeeper with much less manual re-entry. Less typing, fewer mistakes, faster month-end.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">BAS prep support</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Missing docs, uncoded transactions, and oddball purchases get flagged early. That makes BAS prep less of a panic and more of a tidy handoff to the person who actually signs off the numbers.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Debtor follow-up</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Late invoices trigger polite reminders automatically, so you spend less time chasing money and more time doing the work that created the invoice in the first place.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Bank reconciliation prep</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                The AI matches receipts, invoices, and transactions before reconciliation day. Your bookkeeper still reviews the final numbers, but they start from cleaner inputs and finish faster.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Month-end clean-up</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Unmatched transactions, duplicate receipts, and missing categories are surfaced before they become a problem. That means fewer surprise cleanup fees and less stress at month-end.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">How it plugs into Xero, MYOB, and the tools you already use</h2>
          <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
            We don&apos;t make you swap software just to get automation. The point is to make your existing workflow less annoying, not add another app pile to the mess.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Xero and MYOB</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                We connect the flow so invoices, receipts, and categories land where they should. Your accountant still sees the same familiar system — just with less garbage to untangle.
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">ServiceM8, Tradify, Jobber</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                If you run a tradie business, the job-management side can feed bookkeeping prep automatically. Job complete, invoice sent, receipt captured, follow-up reminders queued. Too easy.
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Google Drive, Gmail, and email inboxes</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                We can watch shared inboxes and folders, extract the useful bits, and file them automatically. Good enough for the messy real world, not just the polished demo video.
              </p>
            </div>
            <div className="panel-light-soft p-5 md:p-6">
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Custom workflow hooks</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                If your business uses a tool with an API or webhook, we can usually connect it within a day or two. The boring admin flow becomes a straight line instead of a maze.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">AI bookkeeping vs manual bookkeeping</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-950">Task</th>
                  <th className="py-2 pr-4 font-semibold text-slate-950">Manual process</th>
                  <th className="py-2 font-semibold text-slate-950">With AI bookkeeping</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Receipt chasing</td>
                  <td className="py-3 pr-4">Email, text, and folder hunting</td>
                  <td className="py-3">Auto-captured and sorted on arrival</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Invoice coding</td>
                  <td className="py-3 pr-4">Manual data entry</td>
                  <td className="py-3">Categorised and queued for review</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">BAS prep</td>
                  <td className="py-3 pr-4">End-of-month panic</td>
                  <td className="py-3">Clean prep pack ready early</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4">Debtor follow-up</td>
                  <td className="py-3 pr-4">When someone remembers</td>
                  <td className="py-3">Triggered automatically</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-950">Time spent</td>
                  <td className="py-3 pr-4 font-semibold text-red-600">5-10 hrs/week</td>
                  <td className="py-3 font-semibold text-emerald-600">1-3 hrs/week</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            That&apos;s the real win: less admin, fewer errors, and faster handoff to the person who actually handles the numbers.
          </p>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide businesses say after we cut the admin"
        eyebrow="Real results"
        subheadline="These are the kinds of wins AI bookkeeping and automation create when the busywork is finally under control."
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Want the bookkeeping chaos to stop?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Start with a quick audit and we&apos;ll show you which bookkeeping tasks should be automated first. Clean data in, less drama out.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4">
              Book Free Chat <span aria-hidden>→</span>
            </Link>
            <Link href="/ai-office-worker-adelaide" className="btn-secondary px-8 py-4">
              See AI Office Worker <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
