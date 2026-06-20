import Link from "next/link";
import { Fragment } from "react";

export type Crumb = {
  label: string;
  href?: string;
};

export type BreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

/**
 * Breadcrumbs — server component.
 * Items are rendered as a horizontal list with chevron separators.
 * The last item is rendered as plain text (no link) to mark the current page.
 *
 * Example:
 *   <Breadcrumbs items={[
 *     { label: "Home", href: "/" },
 *     { label: "Websites", href: "/website-design-adelaide" },
 *     { label: "Websites for Plumbers Adelaide" },
 *   ]} />
 */
export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  // JSON-LD BreadcrumbList for Google rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://aiadelaide.com.au${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`mx-auto max-w-container px-6 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 py-3">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <Fragment key={`${item.label}-${index}`}>
                <li className="flex items-center gap-1.5">
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="rounded text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className="text-slate-700"
                      aria-current={isLast ? "page" : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
                {!isLast && (
                  <li aria-hidden className="text-slate-400">
                    ›
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
