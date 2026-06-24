import type { Suburb } from "@/lib/types";

/**
 * Inline hero image for a suburb page.
 * Renders a real <img> tag (so Google Image Search can index it)
 * pointing at the per-suburb OG image generator.
 *
 * The OG route already produces a 1200x630 PNG with the suburb name,
 * postcode, heroLine, and brand — perfect for both visual hero
 * and image-search ranking.
 */
export default function SuburbHero({ suburb }: { suburb: Suburb }) {
  const src = `/${suburb.slug}/opengraph-image`;
  const alt = `AI Adelaide — ${suburb.name} (${suburb.postcode}) website design, SEO and AI automation services for local small businesses`;
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        title={alt}
        width={1200}
        height={630}
        loading="eager"
        decoding="async"
        className="h-auto w-full"
      />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}
