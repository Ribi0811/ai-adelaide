import Link from "next/link";

// Permission-backed work sample (see /testimonials#carhire-mobile-search and
// lib/portfolio.ts). It is not a trade client or a measured result, so the
// copy says so plainly. HUMAN INPUT NEEDED: replace with trade-specific
// project proof once permission and screenshots are supplied.
export default function WorkSampleNote() {
  return (
    <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
      <div className="panel-light p-6 md:p-8">
        <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Work We Can Show You</h2>
        <p className="max-w-3xl text-body-mobile text-slate-700 md:text-body">
          We fixed a real mobile problem on CarHire.global: chat controls were covering the search
          form on phones. We changed when they appear so visitors could finish their search without
          anything in the way. For a trade business, the same thinking applies to the tap-to-call
          button and the quote form: find what gets in the customer&apos;s way, fix it, and check the
          enquiry still works.
        </p>
        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Link href="/testimonials#carhire-mobile-search" className="btn-secondary px-6 py-3">
            See the work sample <span aria-hidden>→</span>
          </Link>
          <Link href="/contact?service=website#send-message" className="font-semibold text-accent underline underline-offset-4">
            Ask about your website
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Featured with permission. It shows one specific update, not a trade client or a sales result.
        </p>
      </div>
    </section>
  );
}
