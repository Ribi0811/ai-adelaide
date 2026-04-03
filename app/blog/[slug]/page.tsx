import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { siteConfig } from "@/lib/constants";

type PageProps = {
  params: {
    slug: string;
  };
};

export const dynamic = "force-static";

const withHomepageLink = (html: string) => {
  const linkedIntro =
    '<p><a href="/" class="font-semibold text-slate-900 underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent">AI Adelaide</a> helps Adelaide businesses automate missed calls, follow-ups, and admin without adding more office overhead.</p>';

  if (!html.includes("<p>")) {
    return `${linkedIntro}${html}`;
  }

  return html.replace("<p>", `${linkedIntro}<p>`);
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "Blog",
    };
  }

  const seoDescription = post.seoDescription || post.excerpt.slice(0, 155) + '...';

  return {
    title: post.title,
    description: seoDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: seoDescription,
      url: `/blog/${post.slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: post.title }],
      type: "article",
      publishedTime: post.date,
      authors: ["AI Adelaide"],
      tags: ["AI automation", "Adelaide", "small business", post.category],
    },
    twitter: {
      title: post.title,
      description: seoDescription,
      images: ["/twitter-image"],
      card: "summary_large_image",
    },
  };
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPostPage({ params }: PageProps) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const wordCount = post.content.replace(/<[^>]+>/g, "").split(/\s+/).length;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    wordCount,
    inLanguage: "en-AU",
    url: `${siteConfig.url}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "AI Adelaide",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "AI Adelaide",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light p-8 md:p-12">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"
          >
            <span aria-hidden>←</span> Back to blog
          </Link>

          <div className="mb-6">
            <span className="eyebrow-light">{post.category}</span>
          </div>

          <h1 className="mb-4 max-w-4xl text-h1-mobile text-slate-950 md:text-h1">
            {post.title}
          </h1>

          <p className="mb-10 text-sm text-slate-500">
            {formatDate(post.date)} <span className="mx-2">•</span> {post.readTime}
          </p>

          <article
            className="text-body-mobile text-slate-700 md:text-body [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-h2-mobile [&_h2]:text-slate-950 md:[&_h2]:text-h2 [&_h3]:mt-7 [&_h3]:mb-3 [&_h3]:text-h3-mobile [&_h3]:text-slate-950 md:[&_h3]:text-h3 [&_p]:mb-5 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: withHomepageLink(post.content) }}
          />

          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link href="/contact" className="btn-primary">
              Ready to automate your business? Book a free chat <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
