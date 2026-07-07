import Image from "next/image";
import Link from "next/link";

// Portfolio — grid of real built sites (screenshot + live link each).
// Per IMPLEMENTATION-PLAN.md 5.5: build the component and layout now,
// populate behind a human-gated flag since we don't yet have a client
// list, screenshot permissions, or hosted screenshots to show.
//
// HUMAN INPUT NEEDED: client list, permissions to display their site,
// and real screenshots. Once supplied, add entries to `portfolioItems`
// below (or wherever this component is used) — do not fabricate entries.
// Logged in docs/claims-to-verify.md.

export type PortfolioItem = {
  name: string;
  industry: string;
  url: string;
  screenshotSrc: string;
  screenshotAlt: string;
};

type PortfolioProps = {
  items: PortfolioItem[];
  heading?: string;
  eyebrow?: string;
  subheadline?: string;
};

export default function Portfolio({
  items,
  heading = "Recent Work",
  eyebrow = "Portfolio",
  subheadline = "A look at real websites we've built for Adelaide small businesses.",
}: PortfolioProps) {
  return (
    <section className="section-shell bg-bgPrimary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-8 text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 text-h2-mobile text-textPrimary md:text-h2">{heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-body-mobile text-textSecondary md:text-body">
            {subheadline}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="brand-card mx-auto flex max-w-2xl flex-col items-center gap-4 p-8 text-center md:p-10">
            <p className="text-body-mobile text-textSecondary md:text-body">
              We're building out a public portfolio of client sites — screenshots and live links are going up here as we confirm permission with each client. In the meantime, book a free chat and we'll walk you through recent examples directly.
            </p>
            <Link href="/contact" className="btn-secondary px-6 py-3">
              Ask to See Examples <span aria-hidden>→</span>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-card group flex h-full flex-col overflow-hidden p-0 transition-all hover:border-accent/40"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.screenshotSrc}
                    alt={item.screenshotAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <span className="mb-2 w-fit rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    {item.industry}
                  </span>
                  <p className="font-semibold text-textPrimary">{item.name}</p>
                  <span className="mt-3 text-sm font-semibold text-accent">
                    Visit site <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
