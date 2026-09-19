import type { Metadata } from "next";
import Link from "next/link";
import { PRICING, siteConfig } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "About AI Adelaide — Websites, SEO & AI Automation" },
  description: "AI Adelaide is a small Adelaide business providing practical website design, local SEO and automation, with clear project scope and helpful local support.",
  alternates: { canonical: "/about" },
};

const services = [
  { title: "A website that explains your business.", body: `Custom website builds ${PRICING.website.fromLabel}. Clear services, useful content and an easy way for customers to enquire.`, href: "/website-design-adelaide", label: "Website design" },
  { title: "Help being found locally.", body: `Local SEO ${PRICING.seo.fromLabel}. Improve your website and Google Business Profile around the services and areas you actually cover.`, href: "/local-seo-adelaide", label: "Local SEO" },
  { title: "A better way to handle the admin.", body: "Start with one repeatable task: enquiry follow-up, appointment reminders or bookkeeping preparation. Agree the workflow, test it and review the result.", href: "/ai-automation-adelaide", label: "Practical automation" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FBFBFD] pb-24 pt-28 md:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "AboutPage", "@id": `${siteConfig.url}/about#webpage`,
        name: "About AI Adelaide", url: `${siteConfig.url}/about`, inLanguage: "en-AU",
        about: { "@id": `${siteConfig.url}/#organization` },
      }) }} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <section className="mx-auto grid max-w-container gap-12 px-6 py-12 md:grid-cols-[1.4fr_1fr] md:items-center md:py-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#0C7A65]">AI Adelaide · Adelaide, SA</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-[#1D1D1F] md:text-6xl">Small business.<br />Practical digital help.</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">We are a small Adelaide business helping other small businesses build useful websites, improve their local visibility and make repetitive work easier.</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">We keep things personal and practical. The focus is on the work your business needs next, with a scope and price you can understand before you commit.</p>
          <Link href="/contact#send-message" className="btn-primary mt-8 inline-flex px-7 py-4">Tell us about your business <span aria-hidden>↗</span></Link>
        </div>
        <div className="rounded-[28px] bg-[#EAF3EF] p-10 md:p-14">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#0C7A65] text-3xl font-semibold text-white" aria-hidden>AI</div>
          <h2 className="mt-9 text-2xl font-semibold tracking-tight text-[#1D1D1F]">AI Adelaide</h2>
          <p className="mt-2 text-sm text-slate-600">Local support. A direct conversation.</p>
          <p className="mt-6 text-base leading-relaxed text-slate-600">Start with a conversation about your customers, your services and what is slowing you down. We can work out the right first step together.</p>
          <a href="https://cal.com/aiadelaide/15min" target="_blank" rel="noopener noreferrer" className="mt-7 inline-block font-semibold text-[#0C7A65] underline underline-offset-4">Book a free 15-minute call ↗</a>
        </div>
      </section>
      <section className="mx-auto max-w-container px-6 py-12">
        <h2 className="text-3xl font-semibold tracking-tight text-[#1D1D1F] md:text-4xl">Start where it helps most.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">{services.map((service) => <article key={service.href} className="rounded-[28px] border border-slate-200 p-7 md:p-8"><h3 className="text-xl font-semibold leading-snug text-[#1D1D1F]">{service.title}</h3><p className="mt-5 text-base leading-relaxed text-slate-600">{service.body}</p><Link href={service.href} className="mt-6 inline-block font-semibold text-[#0C7A65]">{service.label} →</Link></article>)}</div>
      </section>
      <section className="mx-auto max-w-container px-6 pt-12">
        <div className="rounded-[28px] bg-[#F2F4F3] p-8 md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1D1D1F]">See the work before you decide.</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">Explore our work on CarHire.global and 365CarHire. These live examples show the design, content and customer journeys. We will discuss what is relevant to your own project.</p>
          <Link href="/testimonials" className="mt-7 inline-block font-semibold text-[#0C7A65] underline underline-offset-4">Explore selected work →</Link>
        </div>
      </section>
    </main>
  );
}
