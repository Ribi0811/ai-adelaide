import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "AI Automation Blog for Adelaide Businesses",
  description:
    "Practical AI and automation insights for Adelaide tradies, allied health, retail, and hospitality. Real results for real businesses — free to read.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "AI Automation Blog for Adelaide Businesses",
    description:
      "Practical AI and automation insights for Adelaide tradies, allied health, retail, and hospitality. Real results for real businesses.",
    url: "/blog",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AI Adelaide Blog" }],
    type: "website",
  },
  twitter: {
    title: "AI Automation Blog for Adelaide Businesses",
    description:
      "Practical AI and automation insights for Adelaide tradies, allied health, retail, and hospitality. Real results for real businesses.",
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

export default function BlogPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="mb-14 max-w-container mx-auto px-6 text-center">
        <div className="panel-light grid-overlay-light relative overflow-hidden p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-electric/8 via-transparent to-accent/8" />
          <div className="relative">
            <div className="mb-6">
              <span className="eyebrow-light">Adelaide business playbook</span>
            </div>
            <h1 className="mx-auto mb-6 max-w-3xl text-h1-mobile text-slate-950 md:text-h1">
              AI Automation Insights for Adelaide Businesses
            </h1>
            <p className="mx-auto max-w-2xl text-body-mobile text-slate-600 md:text-body">
              Real-world guides and case studies for tradies, allied health,
              hospitality, and retail owners who want practical systems that
              save time and recover revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="panel-light h-full p-6 transition-shadow hover:shadow-md md:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                    {post.category}
                  </span>
                  <span className="text-sm text-slate-500">{formatDate(post.date)}</span>
                  <span className="text-sm text-slate-500">• {post.readTime}</span>
                </div>

                <h2 className="mb-3 text-h3-mobile text-slate-950 transition-colors group-hover:text-accent md:text-h3">
                  {post.title}
                </h2>
                <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors group-hover:text-accent">
                  Read article <span aria-hidden>→</span>
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
