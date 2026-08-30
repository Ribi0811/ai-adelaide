import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StackCTA from "@/components/StackCTA";
import Reveal from "@/components/home-v3/Reveal";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Automation Setup for Adelaide Tradies | Plumbers, Sparkies, Builders",
  description:
    "AI automation setup for Adelaide tradies: missed-call text-back, quote follow-up, invoice chasing, review collection. Connected to your tools. Free audit.",
  alternates: { canonical: "/ai-automation-setup-tradies" },
};

const automations = [
  {
    title: "Missed-Call Text-Back",
    body: "You're under a house, on a roof, or elbow-deep in a switchboard. You can't answer. AI texts the caller back in 20 seconds, qualifies the job, and books it into your calendar.",
    stat: "Catches 80%+ of missed calls",
  },
  {
    title: "Quote Follow-Up That Actually Happens",
    body: "You sent the quote Tuesday. It's Friday. You forgot to follow up. AI sends the nudge for you — professionally, in your voice, at the right time.",
    stat: "30-40% more quotes accepted",
  },
  {
    title: "Invoice Chasing Without the Awkwardness",
    body: "AI sends payment reminders at 3 days, 7 days, 14 days. Polite but persistent. You don't have to make the 'hey mate, about that invoice' call.",
    stat: "25-40% faster payment",
  },
  {
    title: "Review Collection on Autopilot",
    body: "Job done → AI sends Google review link 24 hours later. One gentle reminder at day 7. Your rating climbs while you're on the tools.",
    stat: "3-5x more reviews per month",
  },
  {
    title: "After-Hours Call Handling",
    body: "Emergency call at 9pm? AI answers, qualifies urgency, books the job or escalates to your mobile. You decide what counts as urgent.",
    stat: "Never miss a $2K emergency job",
  },
  {
    title: "Booking Confirmations & Reminders",
    body: "Customer books Tuesday 9am. AI confirms Monday arvo, reminds Tuesday 8am. No-shows drop. Your schedule stays full.",
    stat: "50-70% fewer no-shows",
  },
];

const integrations = [
  { name: "ServiceM8", category: "Job management" },
  { name: "Tradify", category: "Job management" },
  { name: "Jobber", category: "Job management" },
  { name: "Xero", category: "Accounting" },
  { name: "MYOB", category: "Accounting" },
  { name: "Google Calendar", category: "Scheduling" },
  { name: "Calendly", category: "Scheduling" },
  { name: "Microsoft 365", category: "Email & calendar" },
];

const process = [
  {
    step: "01",
    title: "We Map Your Workflow",
    time: "30-60 min call",
    body: "We look at how calls, quotes, and admin are currently handled. Where are you losing leads? What's the first automation that pays for itself?",
  },
  {
    step: "02",
    title: "We Build & Connect",
    time: "2-5 business days",
    body: "We configure the AI, connect it to your ServiceM8/Tradify/Jobber, write your scripts, test everything, and train you on the walkthrough call.",
  },
  {
    step: "03",
    title: "You Stop Losing Leads",
    time: "Ongoing",
    body: "Every missed call gets texted back. Every quote gets followed up. Every invoice gets chased. You focus on the tools, we keep the system running.",
  },
];

const faqItems = [
  {
    question: "How much does AI automation setup cost for tradies?",
    answer:
      "Depends on your setup. Most tradies start with missed-call text-back and quote follow-up — that combo usually pays for itself in the first month if you're missing 2-3 calls a week. Book a free audit and we'll quote your specific workflow.",
  },
  {
    question: "Do I need to change my phone number or software?",
    answer:
      "No. Your number stays the same. We connect to whatever you're already using — ServiceM8, Tradify, Jobber, Xero, Google Calendar. If you don't use job management software yet, we can recommend one that fits your trade.",
  },
  {
    question: "What if the AI says something wrong to a customer?",
    answer:
      'It\'s trained on your scripts and your business info. It knows what it can answer (pricing, availability, booking) and what it should escalate (technical questions, complaints, quotes). If it\'s unsure, it takes a message and you call back. You set the rules.',
  },
  {
    question: "Can it handle after-hours emergencies?",
    answer:
      'Yes. You define what counts as an emergency (burst pipe, no power, gas leak). AI qualifies the call, books it if it fits your criteria, or escalates straight to your mobile if it\'s urgent. You decide when you want to be woken up.',
  },
  {
    question: "How long does setup take?",
    answer:
      "2-5 business days from our first call to going live. We do the work — you just need to be available for a 30-60 minute kickoff call and a 30-minute handover call.",
  },
  {
    question: "Is the audit really free?",
    answer:
      "Yes — 30-60 minutes, no charge, no obligation. We'll map your workflows, identify what you're losing, and quote your setup. If you proceed, great. If you don't, you keep the audit as a roadmap. We ask that you only book if you're genuinely considering automation — we're busy building systems, not just selling them.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "No lock-in. Cancel anytime. You keep any custom scripts or configurations we built. The AI platform stops working, but your business keeps running like it did before (just with more missed calls again).",
  },
];

export default function AiAutomationSetupTradiesPage() {
  return (
    <main className="pt-28 pb-16 bg-white">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI Automation Setup for Tradies" },
        ]}
      />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-4">
              For Adelaide Tradies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              AI Automation Setup — Miss Fewer Calls, Win More Jobs
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              You're a plumber, electrician, builder, or chippy. You're on the tools all day. You miss 10-15 calls a week. Each one is worth $200-2,000. AI automation catches them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all"
              >
                Book Free Automation Audit
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

      {/* The 6 Core Automations */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">The 6 Automations Every Tradie Needs</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            These aren't "nice to have" features. These are the difference between a $80K year and a $120K year for most Adelaide tradies.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {automations.map((automation, i) => (
            <Reveal key={i}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{automation.title}</h3>
                  <span className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                    {automation.stat}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed">{automation.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Works With Your Existing Tools</h2>
          <p className="text-lg text-slate-600 mb-8">
            We don't replace your software. We make it smarter. AI plugs into what you're already using:
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((tool, i) => (
            <Reveal key={i}>
              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                <div className="font-semibold text-slate-900 mb-1">{tool.name}</div>
                <div className="text-xs text-slate-500">{tool.category}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-slate-600 mt-6 text-center">
          Don't see your tool? <Link href="/contact" className="text-accent hover:underline">Ask us</Link> — we probably integrate with it.
        </p>
      </section>

      {/* Process */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-slate-900">How It Works</h2>
        </Reveal>

        <div className="space-y-8">
          {process.map((step, i) => (
            <Reveal key={i}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent text-white font-bold flex items-center justify-center text-lg">
                    {step.step}
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    <span className="text-sm text-slate-500">{step.time}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Real Example */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <div className="bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Real Example: Electrician in Morphett Vale</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong>Before:</strong> Missing 12-15 calls a week. Most went to voicemail. Maybe 2 called back. Lost roughly $3,000-4,000/month in missed work.
              </p>
              <p>
                <strong>After:</strong> AI texts back every missed call in 20 seconds. Books 6-8 extra jobs a month. Caught a $12,000 switchboard upgrade from a 6pm call he would have missed.
              </p>
              <p>
                <strong>ROI:</strong> $350/month cost. $3,500+/month in recovered jobs. Paid for itself week one.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">What It Costs</h2>
          <p className="text-lg text-slate-600 mb-8">
            Every tradie's setup is different. A plumber with ServiceM8 and Google Calendar is different from a builder using Tradify and Xero.
          </p>
        </Reveal>

        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold mb-4 text-slate-900">Here's how pricing works:</h3>
          <ol className="space-y-3 text-slate-700 mb-8">
            <li className="flex gap-3">
              <span className="font-bold text-accent">1.</span>
              <span><strong>Book a free audit.</strong> We map your workflow — calls, quotes, invoicing, calendar. 30-60 min.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-accent">2.</span>
              <span><strong>We quote your specific setup.</strong> One-off setup + monthly subscription. No surprises, no hourly billing.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-accent">3.</span>
              <span><strong>You decide.</strong> Proceed and we start building. Don't proceed, you keep the audit as a roadmap.</span>
            </li>
          </ol>
          <div className="bg-accent/10 rounded-xl p-4 mb-6">
            <p className="text-sm text-slate-700">
              <strong className="text-accent">Why we don't list pricing here:</strong> A solo plumber and a 5-person electrical crew have completely different needs. Public pricing would either scare one of you off or underquote the other. A 30-minute audit means you get a real number based on your actual situation.
            </p>
          </div>
          <p className="text-slate-700 text-center">
            <strong>No lock-in.</strong> Cancel anytime.
          </p>
        </div>
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
            <h2 className="text-3xl font-bold mb-4">Stop Losing Leads While You're on the Tools</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Book a free 15-minute audit. We'll look at how many calls you're missing and show you exactly what AI automation would catch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all"
              >
                Book Free Audit
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
