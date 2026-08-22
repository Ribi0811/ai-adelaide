import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { siteConfig } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

type PageProps = {
  params: {
    slug: string;
  };
};

export const dynamic = "force-static";

type ArticlePath = {
  body: string;
  href: string;
  linkText: string;
  ctaTitle: string;
  ctaBody: string;
};

// Keep the post-to-service path topical. A website article should support the
// website hub; an SEO article should not be forced through website design.
const articlePathFor = (slug: string, category: string): ArticlePath => {
  if (/seo|google-business|google-ads/.test(slug)) {
    return {
      body: "AI Adelaide helps local businesses improve the pages, local signals and measurement behind sustainable search visibility.",
      href: slug.includes("local-seo") || slug.includes("google-business") ? "/local-seo-adelaide" : "/seo",
      linkText: "See our Adelaide SEO services",
      ctaTitle: "Want a clear SEO starting point?",
      ctaBody: "We will review the searches, pages and conversion paths that matter, then explain the highest-value next step without promising a ranking.",
    };
  }

  if (/website|web-design|websites/.test(slug)) {
    return {
      body: "AI Adelaide designs clear, mobile-first websites for Adelaide small businesses, with search foundations and enquiry paths included.",
      href: "/website-design-adelaide",
      linkText: "See our Adelaide website design service",
      ctaTitle: "Need a website scope and fixed quote?",
      ctaBody: "Tell us what the business does and what the website needs to achieve. We will recommend the smallest suitable package and explain what is included.",
    };
  }

  if (category === "Automation" || /receptionist|missed-call|phone|automation/.test(slug)) {
    return {
      body: "AI Adelaide builds practical automation for local businesses, focused on missed enquiries, follow-up and repetitive admin.",
      href: "/ai-automation-adelaide",
      linkText: "Explore Adelaide business automation",
      ctaTitle: "Where is your business losing time or leads?",
      ctaBody: "We will map the current process and tell you whether automation is worthwhile before recommending a system.",
    };
  }

  return {
    body: "AI Adelaide builds websites, SEO and practical automation for Adelaide small businesses.",
    href: "/services",
    linkText: "Explore our Adelaide business services",
    ctaTitle: "Want an honest starting point?",
    ctaBody: "We will review the business, website and lead flow, then explain which improvement is worth prioritising first.",
  };
};

/**
 * Extract Q&A pairs from blog post HTML.
 * Matches posts whose content has an FAQ-style section: <h2>FAQ / Frequently Asked...</h2>
 * followed by alternating <h3>"question"</h3> + <p>answer</p>.
 */
function extractFaqs(html: string): { question: string; answer: string }[] {
  const faqHeadingMatch = html.match(/<h2[^>]*>(?:FAQ|Frequently Asked)[^<]*<\/h2>/i);
  if (!faqHeadingMatch) return [];
  const start = html.indexOf(faqHeadingMatch[0]);
  const rest = html.slice(start);
  // Stop at the next <h2> after the FAQ heading, or end of content.
  const nextH2 = rest.slice(1).search(/<h2[\s>]/i);
  const faqSection = nextH2 >= 0 ? rest.slice(0, nextH2 + 1) : rest;

  const pairs: { question: string; answer: string }[] = [];
  const qRegex = /<h3[^>]*>(.*?)<\/h3>\s*<p>(.*?)<\/p>/gi;
  let m: RegExpExecArray | null;
  while ((m = qRegex.exec(faqSection)) !== null) {
    const question = m[1].replace(/<[^>]+>/g, "").trim();
    const answer = m[2].replace(/<[^>]+>/g, "").trim();
    if (question && answer) pairs.push({ question, answer });
  }
  return pairs;
}

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
      modifiedTime: post.updatedAt ?? post.date,
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

  const faqs = extractFaqs(post.content);
  const articlePath = articlePathFor(post.slug, post.category);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    wordCount,
    inLanguage: "en-AU",
    url: `${siteConfig.url}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteConfig.url}/blog/${post.slug}`,
      },
    ],
  };

  const faqJsonLd = faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <div className="section-shell bg-[#FBFBFD] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
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
            {formatDate(post.date)}
            {post.updatedAt && (
              <> <span className="mx-2">•</span> Updated {formatDate(post.updatedAt)}</>
            )}
            {" "}<span className="mx-2">•</span> {post.readTime}
          </p>

          <article
            className="text-body-mobile text-slate-700 md:text-body [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-h2-mobile [&_h2]:text-slate-950 md:[&_h2]:text-h2 [&_h3]:mt-7 [&_h3]:mb-3 [&_h3]:text-h3-mobile [&_h3]:text-slate-950 md:[&_h3]:text-h3 [&_p]:mb-5 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-10 border-t border-slate-200 pt-6">
            <p className="text-sm text-slate-600">
              <strong className="text-slate-900">AI Adelaide</strong> — {articlePath.body}{" "}
              <Link
                href={articlePath.href}
                className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-slate-900"
              >
                {articlePath.linkText}
              </Link>
              .
            </p>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <div className="panel-light grid-overlay-light p-6 md:p-8">
              <h2 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
                {articlePath.ctaTitle}
              </h2>
              <p className="mb-6 text-body-mobile text-slate-600 md:text-body">
                {articlePath.ctaBody}
              </p>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Link href={articlePath.href} className="btn-primary px-6 py-3 text-base">
                  View the Service <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-accent/40 bg-white px-6 py-3 text-base font-semibold text-accent transition-all hover:bg-accent/5"
                >
                  Book a Free Chat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
