import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StackCTA from "@/components/StackCTA";
import Reveal from "@/components/home-v3/Reveal";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Consulting Adelaide | No-Bullshit Implementation for SMBs",
  description:
    "AI consulting for Adelaide businesses: free audit, fixed pricing, implementation in days not months. For tradies, clinics, retailers, sole traders. Call 08 7100 9788.",
  alternates: { canonical: "/ai-consulting-adelaide" },
};

const problems = [
  {
    title: "You're Losing Leads to Missed Calls",
    stat: "5-15 calls/week missed",
    cost: "$2,000-5,000/month in lost revenue",
    fix: "AI answers every call, books jobs, sends you the details",
  },
  {
    title: "Quotes Get Sent But Never Followed Up",
    stat: "30-40% of quotes never get a second touch",
    cost: "$3,000-8,000/month in lost work",
    fix: "AI follows up every quote automatically, in your voice",
  },
  {
    title: "Admin Eats Your Evenings and Weekends",
    stat: "10-20 hours/week on paperwork",
    cost: "$2,000-4,000/month of your time",
    fix: "AI handles invoices, payments, bookings, reviews",
  },
];

const services = [
  {
    title: "AI Audit & Strategy",
    price: "Free",
    timeline: "1 week",
    deliverable:
      "We map your workflows, identify time/money drains, and give you an action plan with priorities, costs, and expected ROI. You get the full picture even if you don't work with us.",
    link: "/audit",
  },
  {
    title: "AI Implementation",
    price: "Quoted after audit",
    timeline: "Days not months",
    deliverable:
      "We build and deploy your AI systems — call answering, quote follow-up, invoice chasing, review collection. Connected to your existing tools (ServiceM8, Xero, Google Calendar).",
    link: "/ai-automation-setup-tradies",
  },
  {
    title: "Ongoing Support",
    price: "Quoted after audit",
    timeline: "Monthly",
    deliverable:
      "AI isn't set-and-forget. We monitor performance, tweak scripts, add new automations, and keep everything running. No lock-in, cancel anytime.",
    link: "/ai-automation-adelaide",
  },
];

const industries = [
  { name: "Tradies", examples: "Plumbers, electricians, builders, painters" },
  { name: "Health Clinics", examples: "Physios, chiros, dentists, psychologists" },
  { name: "Retail & Hospitality", examples: "Cafes, restaurants, salons, retail shops" },
  { name: "Professional Services", examples: "Accountants, lawyers, consultants, agencies" },
  { name: "Home Services", examples: "Cleaners, gardeners, pest control, mobile mechanics" },
  { name: "Sole Traders", examples: "One-person businesses wearing every hat", link: "/ai-for-sole-traders-adelaide" },
];

const faqItems = [
  {
    question: "How is AI consulting different from hiring a developer?",
    answer:
      "Developers build what you tell them to build. Consultants figure out what you should build in the first place. We do both — we identify the problem, recommend the solution, then build it for you. You don't need to know what API to use or which platform to choose.",
  },
  {
    question: "What's included in the free audit?",
    answer:
      "We spend 30-60 minutes on a call mapping your workflows. Where are you losing time? Where are you losing money? What could AI actually fix? You get a written action plan with priorities, estimated costs, and expected ROI. No sales pitch — if AI doesn't make sense for your business, we'll tell you.",
  },
  {
    question: "How much does AI consulting cost?",
    answer:
      "Audit is free — we'll map your workflows and identify what's costing you time and money. If you want us to build the fix, we'll quote the full project after the audit. No hourly billing, no surprise invoices. Final price depends on how many automations you need.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see measurable impact in the first week. Missed calls get answered immediately. Quotes get followed up on schedule. The ROI is usually obvious by week 2-3 when you see jobs you would have missed show up in your calendar.",
  },
  {
    question: "Do you work with businesses outside Adelaide?",
    answer:
      "We're Adelaide-based and prefer working locally, but we've done remote setups for businesses in other SA regions and interstate. If the work can be done remotely and you're a good fit, we'll consider it.",
  },
  {
    question: "What if I've already tried AI tools and they didn't work?",
    answer:
      "Most DIY AI fails because people try to automate everything at once or pick the wrong tool. We start small (usually just missed-call text-back), prove ROI in week one, then expand. We also know which tools actually work for Australian SMBs vs. which ones are just hype.",
  },
];

export default function AiConsultingAdelaidePage() {
  return (
    <main className="pt-28 pb-16 bg-white">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI Consulting Adelaide" },
        ]}
      />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-4">
              AI Consulting Adelaide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              AI Consulting That Actually Ships — No Strategy Decks, Just Working Systems
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Most AI consultants sell you a 200-page PDF and a $50K roadmap. We identify what's costing you money, build the fix in days, and support you as you use it. Fixed pricing, Adelaide-based, no lock-in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all"
              >
                Book Free AI Audit
              </Link>
              <a
                href="tel:+61871009788"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-900 font-semibold rounded-xl hover:border-accent hover:text-accent transition-all"
              >
                Call 08 7100 9788
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* The 3 Core Problems */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">The 3 Problems AI Solves for Adelaide SMBs</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            These aren't theoretical problems. These are what's actually costing you money right now.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <Reveal key={i}>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{problem.title}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-red-600">{problem.stat}</span>
                  </div>
                  <p className="text-sm text-slate-600">{problem.cost}</p>
                </div>
                <div className="pt-4 border-t border-slate-300">
                  <p className="text-sm text-slate-700">
                    <strong className="text-accent">Fix:</strong> {problem.fix}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">How We Work</h2>
          <p className="text-lg text-slate-600 mb-12">
            Three stages. Fixed pricing. No hourly billing.
          </p>
        </Reveal>

        <div className="space-y-8">
          {services.map((service, i) => (
            <Reveal key={i}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">{service.deliverable}</p>
                  </div>
                  <div className="md:ml-8 md:text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-accent mb-1">{service.price}</div>
                    <div className="text-sm text-slate-500">{service.timeline}</div>
                  </div>
                </div>
                {service.link && (
                  <div className="pt-4 border-t border-slate-200">
                    <Link
                      href={service.link}
                      className="text-accent hover:underline font-semibold"
                    >
                      Learn more →
                    </Link>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Industries We Work With */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Who We Work With</h2>
          <p className="text-lg text-slate-600 mb-8">
            Adelaide small to medium businesses across every industry. If you're losing time to admin or missing calls, we can help.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, i) => (
            <Reveal key={i}>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">
                  {industry.link ? (
                    <Link href={industry.link} className="text-accent hover:underline">
                      {industry.name}
                    </Link>
                  ) : (
                    industry.name
                  )}
                </h3>
                <p className="text-sm text-slate-600">{industry.examples}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <div className="bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Why Adelaide SMBs Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-700">
              <div>
                <h3 className="font-bold mb-3 text-slate-900">What We Do</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Fixed pricing — no hourly billing surprises</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Implementation in days, not months</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Adelaide-based, in your timezone</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>We build it, not just advise on it</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-slate-900">What We Don't Do</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    <span>200-page strategy decks that sit in drawers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    <span>$50K enterprise projects</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    <span>Lock-in contracts</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    <span>Offshore support teams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Common Questions About AI Consulting</h2>
        </Reveal>

        <div className="space-y-6">
          {faqItems.map((item, i) => (
            <Reveal key={i}>
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-lg font-bold mb-3 text-slate-900">{item.question}</h3>
                <p className="text-slate-700 leading-relaxed">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stop Paying for Strategy. Start Getting Systems.</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Book a free AI audit. We'll map your workflows, identify what's costing you time and money, and show you exactly what AI can fix — with real costs and expected ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all"
              >
                Book Free AI Audit
              </Link>
              <a
                href="tel:+61871009788"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-slate-900 transition-all"
              >
                Call 08 7100 9788
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <StackCTA variant="automation" />
    </main>
  );
}
