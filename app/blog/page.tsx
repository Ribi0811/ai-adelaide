import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogIndexClient from "@/components/BlogIndexClient";
import { posts } from "@/data/posts";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Adelaide Blog | AI Tips for Small Business",
  description:
    "Practical AI tips, automation guides, and SEO insights for Adelaide small businesses.",
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

      <BlogIndexClient posts={posts} />
    </div>
  );
}
