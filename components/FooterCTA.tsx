export default function FooterCTA() {
  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light relative overflow-hidden p-8 text-left md:p-12 md:text-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-electric/10 via-transparent to-accent/10" />
          <div className="relative">
            <div className="mb-6 text-center">
              <span className="eyebrow">Built for Adelaide tradies</span>
            </div>

            <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
              Want to see how many calls you&apos;re losing?
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-center text-body-mobile text-textSecondary md:text-body">
              Start with a free missed call audit and we&apos;ll show you the easiest place to recover jobs first.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="/audit" className="btn-primary px-8 py-4">
                Get Free Missed Call Audit <span aria-hidden>→</span>
              </a>
              <a href="/contact" className="btn-primary px-8 py-4">
                Book Free Audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
