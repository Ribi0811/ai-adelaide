import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StackCTA from "@/components/StackCTA";
import Reveal from "@/components/home-v3/Reveal";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Consulting for Small Business Adelaide | No-Bullshit Implementation",
  description:
    "AI consulting for Adelaide SMBs: free audit, transparent pricing, systems shipped in days. We build what we recommend. Tradies, clinics, retail, services.",
  alternates: { canonical: "/ai-consulting-small-business-adelaide" },
};

const problems = [
  {
    title: "You're Drowning in Admin",
    symptoms: [
      "Sunday night is invoice night",
      "Quotes get sent but never followed up",
      "Customer details live in 4 different places",
      "You're doing $40/hour work when you should be doing $150/hour work",
    ],
    cost: "10-15 hours/week on admin = $2,000-3,000/month of your time",
  },
  {
    title: "You're Losing Leads to Faster Competitors",
    symptoms: [
      "Calls go to voicemail while you're with another customer",
      "Quotes sit in your inbox for 3 days before you respond",
      "Prospects book with whoever answers first",
      "You know you're losing jobs but can't quantify it",
    ],
    cost: "5-10 missed calls/month = $2,000-5,000/month in lost revenue",
  },
  {
    title: "Your Business Doesn't Scale Past You",
    symptoms: [
      "You can't take a holiday without your phone going off",
      "Hiring staff feels like trading one set of problems for another",
      "You're already working 50-60 hours a week",
      "Growth means more admin, not more profit",
    ],
    cost: "Stuck at your current revenue ceiling because you can't clone yourself",
  },
];

const services = [
  {
    title: "AI Audit & Strategy",
    description: "We map your workflows, identify what's costing you time/money, and show you exactly what AI can fix — with ROI projections.",
    deliverable: "Action plan with priorities, costs, and expected returns",
    timeline: "1 week",
    price: "Free",
  },
  {
    title: "AI Implementation",
    description: "We build and deploy your AI systems — call answering, quote follow-up, invoice chasing, review collection, whatever your audit identified.",
    deliverable: "Working AI systems connected to your existing tools",
    timeline: "Days not months",
    price: "Quoted after audit",
  },
  {
    title: "Ongoing Support & Optimisation",
    description: "AI isn't set-and-forget. We monitor performance, tweak scripts, add new automations, and keep everything running smoothly.",
    deliverable: "Monthly check-ins, priority support, continuous improvement",
    timeline: "Ongoing",
    price: "Quoted after audit",
  },
];

const faqItems = [
  {
    question: "How is this different from enterprise AI consulting?",
    answer: "Enterprise consultants charge $50K-$500K, take 6-12 months, and deliver a strategy deck. We're priced for small businesses, implement in days, and deliver working systems - not PDFs.",
  },
  {
    question: "What if I don't know what AI could help with?",
    answer: "That's exactly what the free audit is for. We look at how your business actually runs and identify the 2-3 biggest time/money drains. Then we show you what AI could fix and what it would cost. You decide if it's worth it.",
  },
  {
    question: "Do you work with businesses outside Adelaide?",
    answer: "We're Adelaide-based and prefer working locally, but we've done remote setups for businesses in other SA regions and interstate. If the work can be done remotely and you're a good fit, we'll consider it.",
  },
  {
    question: "What tools do you integrate with?",
    answer: "ServiceM8, Tradify, Jobber, Xero, MYOB, Google Calendar, Calendly, Microsoft 365, HubSpot, and most other business software. If you're using something niche, ask — we probably integrate with it.",
  },
  {
    question: "Can I just buy the software myself?",
    answer: "You could, but you'd spend 20-30 hours figuring out which tools to use, how to connect them, and how to write the scripts. We've done this 50+ times. We know what works and what doesn't. You're paying for the shortcut.",
  },
  {
    question: "What if it doesn't work for my business?",
    answer: "No lock-in. Cancel anytime. You'll know within the first month if it's working — more booked jobs, faster payments, fewer Sunday nights doing admin. If you're not seeing ROI, we'll help you wind it down.",
  },
];

export default function AiConsultingSmallBusinessPage() {
  return (
    <main className="pt-28 pb-16 bg-white">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI Consulting for Small Business" },
        ]}
      />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-4">
              For Adelaide SMBs
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              AI Consulting That Actually Ships — Not Just Strategy Decks
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We don't write 200-page reports about "digital transformation." We identify what's costing you time and money, build the AI systems to fix it, and support you as you use them. Fixed pricing, no hourly billing.
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
          <h2 className="text-3xl font-bold mb-4 text-slate-900">The 3 Problems AI Solves for SMBs</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            If you're running a small business, you've probably got at least one of these. Most have all three.
          </p>
        </Reveal>

        <div className="space-y-8">
          {problems.map((problem, i) => (
            <Reveal key={i}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{problem.title}</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">What it looks like:</h4>
                    <ul className="space-y-2 text-slate-700">
                      {problem.symptoms.map((symptom, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">What it's costing you:</h4>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="text-red-900 font-semibold">{problem.cost}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">How We Work</h2>
          <p className="text-lg text-slate-600 mb-12">
            Three stages. Fixed pricing. No surprises.
          </p>
        </Reveal>

        <div className="space-y-8">
          {services.map((service, i) => (
            <Reveal key={i}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">{service.description}</p>
                  </div>
                  <div className="md:ml-8 md:text-right">
                    <div className="text-2xl font-bold text-accent mb-1">{service.price}</div>
                    <div className="text-sm text-slate-500">{service.timeline}</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    <strong>Deliverable:</strong> {service.deliverable}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who This Is For */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <div className="bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">This Is For You If...</h2>
            <div className="space-y-4 text-slate-700">
              <p className="flex gap-3">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span>You run a small business and you're wearing too many hats</span>
              </p>
              <p className="flex gap-3">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span>You're spending 10+ hours/week on admin that could be automated</span>
              </p>
              <p className="flex gap-3">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span>You're losing leads because you can't answer the phone fast enough</span>
              </p>
              <p className="flex gap-3">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span>You want practical AI that ships in days, not strategy that sits in a drawer</span>
              </p>
              <p className="flex gap-3">
                <span className="text-green-600 flex-shrink-0">✓</span>
                <span>You want fixed pricing, not hourly billing that balloons</span>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Common Questions</h2>
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
            <h2 className="text-3xl font-bold mb-4">Stop Drowning in Admin. Start Scaling Your Business.</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Book a free AI audit. We'll map your workflows, identify what's costing you time and money, and show you exactly what AI can fix.
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
