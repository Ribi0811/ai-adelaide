import Image from "next/image";
import Link from "next/link";

export type PortfolioItem = {
  name: string;
  industry: string;
  scope: string;
  platform: string;
  url: string;
  screenshotSrc: string;
  screenshotAlt: string;
  description: string;
};

type PortfolioProps = {
  items: PortfolioItem[];
  heading?: string;
  eyebrow?: string;
  subheadline?: string;
};

export default function Portfolio({
  items,
  heading = "Selected work",
  eyebrow = "Proof",
  subheadline = "A closer look at live platforms and the work behind them.",
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
              We&apos;re adding permission-backed examples as site owners approve
              the screenshots and live links. In the meantime, book a free chat
              and we&apos;ll walk you through the right examples directly.
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
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="w-fit rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      {item.industry}
                    </span>
                    <span className="w-fit rounded-full border border-textSecondary/20 bg-bgSecondary px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-textSecondary">
                      {item.platform}
                    </span>
                    <span className="text-xs font-medium text-textSecondary">
                      {item.scope}
                    </span>
                  </div>
                  <p className="font-semibold text-textPrimary">{item.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-textSecondary">
                    {item.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-accent">
                    Visit live site <span aria-hidden>→</span>
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
