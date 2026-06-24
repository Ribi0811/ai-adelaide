import Link from "next/link";
import suburbs from "@/data/suburbs.json";

type Suburb = (typeof suburbs)[number];

const REGION_ORDER = [
  "Inner Adelaide",
  "East & Hills",
  "South",
  "West & Coast",
  "Trade & Industrial",
  "North",
];

const REGION_LABEL: Record<string, string> = {
  "Inner Adelaide": "Inner Adelaide",
  "East & Hills": "East & Hills",
  "South": "South",
  "West & Coast": "West & Coast",
  "Trade & Industrial": "Trade & Industrial",
  "North": "North",
};

/**
 * Adelaide suburb navigation grouped by region.
 * Used in the site footer (full-width) and on the homepage (compact grid).
 *
 * Pass `variant="footer"` for the wide multi-column footer layout.
 * Pass `variant="homepage"` for the compact callout on the homepage.
 */
export default function SuburbNav({
  variant = "footer",
}: {
  variant?: "footer" | "homepage";
}) {
  const byRegion = REGION_ORDER.map((region) => ({
    region,
    items: (suburbs as Suburb[])
      .filter((s) => s.region === region)
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));

  if (variant === "footer") {
    return (
      <div className="mt-12 border-t border-slate-200/80 pt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Browse Adelaide Suburbs by Region
          </h4>
          <Link
            href="/locations"
            className="text-sm font-medium text-accent transition-colors hover:text-[#E55A2B]"
          >
            View all 34 →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {byRegion.map(({ region, items }) => (
            <details
              key={region}
              className="group rounded-lg border border-slate-200/70 bg-white/40 px-4 py-2 transition-colors open:bg-white open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-900 marker:hidden">
                <span>
                  {REGION_LABEL[region] ?? region}{" "}
                  <span className="ml-1 font-normal text-slate-400">({items.length})</span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-slate-400 transition-transform group-open:rotate-90"
                >
                  ›
                </span>
              </summary>
              <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 pb-1">
                {items.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-950"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    );
  }

  // homepage variant — compact, all 34 visible above the fold
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-container px-6">
        <div className="mb-10 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#FF6B35]">
            Adelaide Locations
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
            Web design & SEO for 34 Adelaide suburbs
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Every suburb gets a custom page with local SEO, suburb-specific FAQs, and a
            tailored pitch. Pick your region.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {byRegion.map(({ region, items }) => (
            <div
              key={region}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-slate-900">
                {REGION_LABEL[region] ?? region}{" "}
                <span className="ml-1 text-xs font-normal text-slate-400">
                  ({items.length})
                </span>
              </h3>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                {items.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="text-sm text-slate-700 transition-colors hover:text-accent"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-white"
          >
            View all locations →
          </Link>
        </div>
      </div>
    </section>
  );
}
