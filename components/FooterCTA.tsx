import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export default function FooterCTA() {
  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light relative overflow-hidden p-8 text-left md:p-12 md:text-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-electric/10 via-transparent to-accent/10" />
          <div className="relative">
            <div className="mb-6 text-center">
              <span className="eyebrow">For Adelaide small businesses</span>
            </div>

            <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
              Ready to get online, get ranked, and stop losing leads?
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
              Two ways to reach us — pick what works for you. Both free, both no-pressure.
            </p>

            <div className="mx-auto mb-6 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="brand-card p-5 md:p-6 text-left">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-base">💬</span>
                  <h3 className="text-base font-semibold text-textPrimary">Send a message</h3>
                </div>
                <p className="mb-4 text-sm text-textSecondary">
                  Reply within 2 business hours. No phone call required. Best if you&apos;re browsing at night.
                </p>
                <Link href="/contact#send-message" className="btn-primary inline-flex w-full justify-center px-5 py-3 text-sm">
                  Send a Message <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="brand-card p-5 md:p-6 text-left">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-base">📞</span>
                  <h3 className="text-base font-semibold text-textPrimary">Book a free chat</h3>
                </div>
                <p className="mb-4 text-sm text-textSecondary">
                  15-minute video call. Best if you want to talk it through live. Adelaide hours.
                </p>
                <Link href="/contact" className="btn-secondary inline-flex w-full justify-center px-5 py-3 text-sm">
                  Book a Free Chat <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <p className="text-center text-sm text-textSecondary">
              Or call us directly:{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-textPrimary underline hover:text-accent">
                {siteConfig.phone}
              </a>{" "}
              &middot;{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-textPrimary underline hover:text-accent">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
