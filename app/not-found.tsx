import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6 text-center">
        <div className="panel-light grid-overlay-light relative overflow-hidden p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-electric/8 via-transparent to-accent/8" />
          <div className="relative">
            <h1 className="mb-4 text-h1-mobile text-slate-950 md:text-h1">
              Oops — this page doesn't exist
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
              But you're in the right place for AI automation help.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/" className="btn-primary px-6 py-3">
                ← Go Home
              </Link>
              <Link href="/services" className="btn-secondary px-6 py-3">
                View Services
              </Link>
              <Link href="/contact" className="btn-secondary px-6 py-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
