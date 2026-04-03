import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tradie Website, AI Receptionist & Local SEO Bundle",
  description:
    "Website built in 48hrs, 24/7 AI call capture, and local SEO — everything Adelaide tradies need to stop losing jobs online. No lock-in. Book a free chat.",
  alternates: {
    canonical: "/tradie-website-bundle",
  },
};

export default function TradieWebsiteBundlePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">AI Receptionist Tradie Website Bundle</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Your Complete Online Presence — Website, AI Call Capture & Local SEO
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Most tradies in Adelaide have one of three problems: a weak website, missed calls going to voicemail, and zero visibility when customers search Google. We fix all three with one done-for-you tradie website Adelaide package.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Why this works</h2>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Instead of stitching random tools together, you get one clear system: a conversion-focused website, 24/7 AI call capture, and local SEO setup from day one. One flat monthly fee, no lock-in, and one team handling everything.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What’s included</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">1) Professional tradie website</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Built for you and live in 48 hours. Mobile-first, fast loading, and built to convert enquiry traffic into booked jobs.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">2) 24/7 AI Call Capture</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Every missed call is answered by AI. Callers are qualified, told what happens next, and you receive an instant summary on your phone. No voicemail dead ends.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">3) Local SEO setup</h3>
              <p className="text-body-mobile text-slate-700 md:text-body">
                Google-ready foundation from day one: Google Business Profile alignment, local schema, and suburb page structure so your business can be found by the right Adelaide customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">How it works</h2>
          <ol className="list-decimal space-y-2 pl-6 text-body-mobile text-slate-700 md:text-body">
            <li>Book a free chat</li>
            <li>We build and configure your system in 48 hours</li>
            <li>You stop missing calls and start capturing more jobs</li>
          </ol>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">FAQ</h2>
          <div className="space-y-5 text-body-mobile text-slate-700 md:text-body">
            <div>
              <h3 className="font-semibold text-slate-950">Do I need to do anything technical?</h3>
              <p>No — we handle everything from setup to launch and optimisation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950">What does the AI actually do?</h3>
              <p>It answers calls 24/7, asks the right qualifying questions, and sends you a summary instantly — no voicemail.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950">Can I keep my existing number?</h3>
              <p>Yes. The system works with your current business number.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950">Is there a lock-in contract?</h3>
              <p>No lock-in — month to month.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950">What if I already have a website?</h3>
              <p>We can replace it, or keep it and add AI call capture plus local SEO.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to fix the full funnel?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            If you want a tradie website Adelaide customers trust, AI receptionist coverage, and local SEO in one done-for-you setup, let&apos;s map it out.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">
            Book a Free Chat <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
