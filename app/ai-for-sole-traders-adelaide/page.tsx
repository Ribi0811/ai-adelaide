import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StackCTA from "@/components/StackCTA";
import Reveal from "@/components/home-v3/Reveal";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI for Sole Traders Adelaide | Automation for One-Person Businesses",
  description:
    "AI automation for Adelaide sole traders: calls, bookings, invoices, reviews handled without hiring staff. Priced for one-person businesses. Free audit.",
  alternates: { canonical: "/ai-for-sole-traders-adelaide" },
};

const painPoints = [
  {
    problem: "You're the receptionist",
    reality: "You're under a sink when the phone rings. By the time you call back, they've booked someone else.",
    solution: "AI answers every call, books jobs, and sends you the details. You stay on the tools.",
  },
  {
    problem: "You're the bookkeeper",
    reality: "Sunday night is invoice night. Chasing payments feels awkward. Tax time is a shoebox of receipts.",
    solution: "AI sends invoices, chases payments, and preps your books. Your accountant stops nagging.",
  },
  {
    problem: "You're the marketing department",
    reality: "You know you should ask for reviews, post on social, and update your Google profile. You don't.",
    solution: "AI requests reviews after every job, keeps your Google profile active, and drafts posts for you.",
  },
  {
    problem: "You're the sales team",
    reality: "You send a quote, then get busy and forget to follow up. They go with the other guy who called twice.",
    solution: "AI follows up every quote automatically. You win jobs without being pushy.",
  },
];

const automations = [
  {
    title: "Call Answering & Booking",
    body: "Every call answered, every job booked straight into your calendar. Works with Google Calendar, Calendly, or your job management app.",
    time: "Saves 5-10 hrs/week",
  },
  {
    title: "Quote Follow-Up",
    body: "Sends the quote, follows up at 3 days, 7 days, 14 days. Stops when they say yes or no. No more 'I forgot to call them back.'",
    time: "30-40% more quotes accepted",
  },
  {
    title: "Invoice & Payment Chasing",
    body: "Sends invoices automatically. Polite payment reminders at 3, 7, 14 days. You stop chasing money, cash flow improves.",
    time: "Get paid 25-40% faster",
  },
  {
    title: "Review Collection",
    body: "Job done → review request sent 24 hours later. Builds your Google rating without you asking awkwardly.",
    time: "3-5x more reviews",
  },
  {
    title: "Customer Replies",
    body: "AI answers 'how much?' and 'when can you come?' texts instantly. You only get involved when it's a real booking.",
    time: "Reclaim your evenings",
  },
  {
    title: "Bookkeeping Prep",
    body: "Receipts photographed, expenses categorised, mileage logged. Hand your accountant a clean file, not a shoebox.",
    time: "Saves 2-4 hrs/week",
  },
];

const faqItems = [
  {
    question: "Is this overkill for a one-person business?",
    answer:
      "No — it's actually perfect for sole traders. You can't answer the phone while you're with a customer or on the tools. That's exactly when you're losing jobs. AI handles the admin so you can focus on the work that actually pays.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Depends on your setup, but most sole traders land somewhere between a part-time VA and one missed job per month. Book a free audit and we'll quote your specific workflow — you'll know real numbers before you commit to anything.",
  },
  {
    question: "Do I need technical skills?",
    answer:
      "Zero. We set everything up. You get a simple app on your phone where you can see bookings, messages, and jobs. If you can use WhatsApp, you can use this.",
  },
  {
    question: "What if I want to try it first?",
    answer:
      "Book a free audit. We'll look at your call history, show you exactly what you're missing, and give you a clear quote. No obligation. You can even trial the AI receptionist for a week to see how many calls it catches.",
  },
  {
    question: "Will my customers know it's AI?",
    answer:
      "No. It sounds natural, uses your business name, and follows your scripts. Most callers just think you hired a really good receptionist. You can tell them if you want, but they usually don't ask.",
  },
  {
    question: "What happens when I want to cancel?",
    answer:
      "No lock-in. Cancel anytime. You keep your customer data, your phone number stays the same, and you go back to doing it all manually (but you'll probably miss the AI after a week of voicemail again).",
  },
];

export default function AiForSoleTradersPage() {
  return (
    <main className="pt-28 pb-16 bg-white">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI for Sole Traders Adelaide" },
        ]}
      />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-4">
              For One-Person Businesses
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              You're the Plumber, the Receptionist, the Bookkeeper — AI Handles Two of Three
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              You didn't go solo to do paperwork and chase payments. You went solo to do the work you're good at. AI handles the admin so you can focus on the tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all"
              >
                Book Free Audit
              </Link>
              <a
                href="tel:+61871009788"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-900 font-semibold rounded-xl hover:border-accent hover:text-accent transition-all"
              >
                Hear the AI in Action
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* The Sole Trader Problem */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">The Sole Trader Trap</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            You're wearing every hat. The work you love gets interrupted by the work you hate. Here's how AI fixes it:
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((point, i) => (
            <Reveal key={i}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{point.problem}</h3>
                <p className="text-slate-600 mb-4 italic">"{point.reality}"</p>
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-accent">Fix:</strong> {point.solution}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What AI Handles */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">What AI Handles for You</h2>
          <p className="text-lg text-slate-600 mb-12">
            Not generic "productivity tools." Specific automations that actually save you time:
          </p>
        </Reveal>

        <div className="space-y-6">
          {automations.map((automation, i) => (
            <Reveal key={i}>
              <div className="flex gap-6 items-start bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{automation.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{automation.body}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-mono text-sm font-semibold rounded-full whitespace-nowrap">
                    {automation.time}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Real Math */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <div className="bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">The Real Math for Sole Traders</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-slate-900">What You Lose Without AI</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-red-600">✗</span>
                    <span>10-15 missed calls/week = $2,000-4,000/month in lost jobs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600">✗</span>
                    <span>4-6 hours/week on admin = $800-1,200/month of your time</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600">✗</span>
                    <span>30-40% of quotes never followed up = thousands in lost work</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600">✗</span>
                    <span>Slow payment chasing = cash flow stress every month</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-slate-900">What You Get With AI</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Every call answered, 80%+ convert to bookings</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Admin drops to 1-2 hours/week</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Quotes get followed up automatically, 30-40% more accepted</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Invoices chased on schedule, paid 25-40% faster</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-accent/20 text-center">
              <p className="text-xl font-bold text-slate-900">
                Cost: {PRICING.automation.from} • Typical ROI: 10-15x in first month
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-slate-900">How It Works for Sole Traders</h2>
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold flex items-center justify-center text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Free Audit (15 min)</h3>
                <p className="text-slate-700 leading-relaxed">
                  We look at your call history, your quote process, your invoicing. We show you exactly what you're losing and what AI would catch. No sales pitch — if it doesn't make sense, we'll tell you.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold flex items-center justify-center text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">We Set It Up (2-3 days)</h3>
                <p className="text-slate-700 leading-relaxed">
                  We configure the AI with your business details, your pricing, your availability. We connect it to your calendar, your invoicing tool, your phone. You don't touch anything technical.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold flex items-center justify-center text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">You Get Your Time Back</h3>
                <p className="text-slate-700 leading-relaxed">
                  AI answers calls while you're with customers. Follows up quotes while you're on the tools. Chases payments while you sleep. You just do the work and watch the bookings come in.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who This Works For */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Sole Traders This Works For</h2>
          <p className="text-lg text-slate-600 mb-8">
            If you're a one-person business in Adelaide and any of these sound like you, AI automation makes sense:
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">🔧 Tradies</h3>
              <p className="text-slate-600 text-sm">
                Plumbers, electricians, builders, carpenters, painters — anyone on the tools all day who can't answer calls
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">💼 Consultants</h3>
              <p className="text-slate-600 text-sm">
                Business consultants, marketing consultants, bookkeepers, financial advisors — anyone juggling multiple clients
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">🏥 Health Professionals</h3>
              <p className="text-slate-600 text-sm">
                Physios, chiros, podiatrists, psychologists, massage therapists — anyone with back-to-back appointments
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">🏠 Home Services</h3>
              <p className="text-slate-600 text-sm">
                Cleaners, gardeners, pest control, mobile mechanics — anyone driving between jobs and can't answer the phone
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Common Questions from Sole Traders</h2>
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
            <h2 className="text-3xl font-bold mb-4">Stop Being the Receptionist. Start Being the Business Owner.</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Book a free 15-minute audit. We'll show you exactly what you're missing and what AI would handle for you.
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
