"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Automation" | "AI Tools" | "Case Study" | "How-To";
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogIndexClient({ posts }: { posts: Post[] }) {
  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [posts]);

  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    const list = active === "All" ? posts : posts.filter((p) => p.category === active);
    return [...list].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [active, posts]);

  return (
    <>
      {/* Category filter pills */}
      <section className="max-w-container mx-auto px-6 pt-10 md:pt-12">
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter posts by category">
          <span className="mr-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Filter:
          </span>
          {categories.map((cat) => {
            const isActive = active === cat;
            const count = cat === "All" ? posts.length : posts.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors " +
                  (isActive
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-slate-200 bg-white text-slate-700 hover:border-accent/40 hover:text-accent")
                }
              >
                {cat}
                <span
                  className={
                    "rounded-full px-1.5 py-0.5 font-mono text-[10px] " +
                    (isActive ? "bg-accent/20 text-accent" : "bg-slate-100 text-slate-500")
                  }
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-8 md:pt-10">
        {filtered.length === 0 ? (
          <div className="panel-light p-10 text-center">
            <p className="text-slate-600">No posts in this category yet. Try another filter.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((post) => (
              <article key={post.slug} className="panel-light flex h-full flex-col p-6 md:p-8">
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
        )}
      </section>
    </>
  );
}
