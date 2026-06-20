import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts } from "@/data/posts";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Adelaide Blog | Websites, SEO & Automation for Adelaide Businesses",
  description:
    "Practical insights on websites, local SEO, and AI automation for Adelaide small businesses across trades, allied health, retail, hospitality, and professional services.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "AI Adelaide Blog | Websites, SEO & Automation for Adelaide Businesses",
    description: "Practical insights on websites, local SEO, and AI automation for Adelaide small businesses.",
    url: `${siteConfig.url}/blog`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AI Adelaide Blog" }],
    type: "website",
  },
  twitter: {
    title: "AI Adelaide Blog | Websites, SEO & Automation for Adelaide Businesses",
    description: "Practical insights on websites, local SEO, and AI automation for Adelaide small businesses.",
    images: ["/twitter-image"],
  },
};

export const dynamic = "force-static";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function BlogIndexPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">AI Adelaide Blog</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Practical insights for Adelaide small businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Real numbers, real examples, and real advice on websites, local SEO, and AI automation for Adelaide small businesses — across trades, allied health, retail, hospitality, beauty, and professional services.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sortedPosts.map((post) => (
            <article
              key={post.slug}
              className="panel-light flex h-full flex-col p-6 md:p-8"
            >
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{formatDate(post.date)}</span>
                <span className="text-xs text-slate-500">· {post.readTime}</span>
              </div>
              <h2 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="flex-1 text-body-mobile text-slate-600 md:text-body">
                {post.excerpt.slice(0, 180)}
                {post.excerpt.length > 180 ? "…" : ""}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                Read more <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
