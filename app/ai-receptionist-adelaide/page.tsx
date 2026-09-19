import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StackCTA from "@/components/StackCTA";
import Reveal from "@/components/home-v3/Reveal";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Receptionist Adelaide | 24/7 Call Answering & Booking",
  description:
    "AI receptionist for Adelaide businesses: 24/7 call answering, job booking, message taking. Never miss a lead. Part of AI automation stack. Free demo line.",
  alternates: { canonical: "/ai-receptionist-adelaide" },
};

const useCases = [
  {
    industry: "Tradies",
    examples: [
      "Emergency call screening — is this urgent or can it wait?",
      "After-hours booking — customer calls at 8pm, gets booked for tomorrow 9am",
      "Job intake — captures address, problem description, photos",
    ],
  },
  {
    industry: "Health Clinics",
    examples: [
      "Appointment booking and rescheduling",
      "New patient intake forms",
      "After-hours enquiries about parking, directions, services",
    ],
  },
  {
    industry: "Home Services",
    examples: [
      "Weekend quote requests",
      "Booking confirmations and reminders",
      "Following up no-shows automatically",
    ],
  },
  {
    industry: "Professional Services",
    examples: [
      "Initial consultation booking",
      "Fee and service FAQ answering",
      "Routing urgent matters to your mobile",
    ],
  },
];

const faqItems = [
  {
    question: "Will callers know it's AI?",
    answer:
      "Most callers don't realise. The voice sounds natural, uses an Australian accent, and follows your scripts. It introduces itself as your receptionist. You can tell customers it's AI if you want, but they usually just comment on how good your new receptionist is.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer:
      "It's trained to know its limits. If a caller asks something outside its knowledge, it takes a detailed message, sends you an SMS, and lets the caller know you'll call back. You set the escalation rules — technical questions, complaints, or quote requests can all route to you immediately.",
  },
  {
    question: "Can it handle multiple calls at once?",
    answer:
      "Yes — unlimited simultaneous calls. No busy signals, no hold music, no 'all our operators are busy.' If 5 people call at 6pm on a Friday, all 5 get answered instantly.",
  },
  {
    question: "Does it integrate with my calendar?",
    answer:
      "Yes — Google Calendar, Calendly, Microsoft 365, ServiceM8, Tradify, Jobber, and most other scheduling tools. It checks your availability in real-time and books appointments directly.",
  },
  {
    question: "What about after-hours emergencies?",
    answer:
      "You define what counts as urgent. Burst pipes, no power, gas leaks — whatever matters in your industry. The AI qualifies the call and can escalate straight to your mobile if it's genuinely urgent, or book it for tomorrow if it can wait.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The AI receptionist is part of our AI automation stack. Final pricing depends on your call volume and integrations — we'll quote your exact setup after a free audit. No lock-in contracts.",
  },
];

export default function AiReceptionistAdelaidePage() {
  return (
    <main className="pt-28 pb-16 bg-white">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI Receptionist Adelaide" },
        ]}
      />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-4">
              Part of AI Automation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              An AI Receptionist That Answers Every Call — So You Never Miss a Job
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              You're on the tools, with a customer, or closed for the weekend. Your phone rings. You can't answer. The AI receptionist picks up, has a real conversation, books the job, and texts you the details. You stay focused on the work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+61871009788"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all"
              >
                Hear It Live — Call Now
              </a>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-900 font-semibold rounded-xl hover:border-accent hover:text-accent transition-all"
              >
                Book Free Audit
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What It Does */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-8 text-slate-900">What an AI Receptionist Actually Does</h2>
        </Reveal>

        <div className="space-y-6">
          <Reveal>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Answers Every Call Instantly</h3>
              <p className="text-slate-700 leading-relaxed">
                No hold music. No "your call is important to us." No voicemail. Every call answered on the first or second ring, 24/7 — weekends, public holidays, 2am emergencies.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Has Real Conversations</h3>
              <p className="text-slate-700 leading-relaxed">
                It's not a phone menu. Callers can explain their problem naturally. The AI understands context, asks follow-up questions, and captures the details you actually need — address, urgency, what the job involves.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Books Jobs Directly Into Your Calendar</h3>
              <p className="text-slate-700 leading-relaxed">
                Customer calls at 7pm about a leaking tap. AI checks your availability, offers tomorrow at 9am, books it, sends a confirmation SMS to the customer, and texts you the job details. You wake up to a fuller calendar.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Answers Your FAQs</h3>
              <p className="text-slate-700 leading-relaxed">
                "Do you charge a call-out fee?" "What suburbs do you service?" "Do you do free quotes?" The AI knows your standard answers because we program them in. Consistent, accurate, every single time.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Knows When to Escalate</h3>
              <p className="text-slate-700 leading-relaxed">
                Some calls need you. The AI can transfer urgent calls, take detailed messages for complex enquiries, or SMS you immediately for emergencies. You set the rules.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How Adelaide Businesses Use It */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-8 text-slate-900">How Adelaide Businesses Use It</h2>
          <p className="text-lg text-slate-600 mb-12">
            Real examples from businesses already using AI receptionists:
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, i) => (
            <Reveal key={i}>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-slate-900">{useCase.industry}</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {useCase.examples.map((example, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-accent flex-shrink-0 mt-1">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How Setup Works */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Setup in 3 Steps</h2>
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
                <h3 className="text-xl font-bold mb-2 text-slate-900">We Map Your Call Flow</h3>
                <p className="text-slate-700 leading-relaxed">
                  30-60 minute call. We work out how you want calls handled — what questions should the AI ask? What counts as urgent? When should it escalate? Where do bookings go?
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
                <h3 className="text-xl font-bold mb-2 text-slate-900">We Configure & Test</h3>
                <p className="text-slate-700 leading-relaxed">
                  We program the AI with your business details, your services, your FAQs, your voice and tone. We connect it to your calendar and test it thoroughly before it goes live.
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
                <h3 className="text-xl font-bold mb-2 text-slate-900">You Start Answering Calls</h3>
                <p className="text-slate-700 leading-relaxed">
                  Your phone number stays the same. Your customers won't notice a difference — they just notice you answer faster. Most setups are live in 2-5 business days.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Try It Now */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <div className="bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Hear It in Action</h2>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Call <strong className="text-accent">(08) 7100 9788</strong> right now — the AI receptionist answers 24/7. Ask about pricing, booking a service, parking, or anything else. See how it handles real conversations.
            </p>
            <a
              href="tel:+61871009788"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all"
            >
              Call the Demo Line
            </a>
          </div>
        </Reveal>
      </section>

      {/* Related Services */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <Reveal>
          <h2 className="text-2xl font-bold mb-8 text-slate-900">Related Services</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/ai-automation-adelaide"
            className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-accent hover:bg-accent/5 transition-all group"
          >
            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-accent">AI Automation →</h3>
            <p className="text-sm text-slate-600">
              The full stack: missed-call text-back, quote follow-up, invoice chasing, review collection, and the AI receptionist. {PRICING.automation.fromLabel}.
            </p>
          </Link>

          <Link
            href="/ai-automation-setup-tradies"
            className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-accent hover:bg-accent/5 transition-all group"
          >
            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-accent">Setup for Tradies →</h3>
            <p className="text-sm text-slate-600">
              How we set up AI automation specifically for plumbers, electricians, builders, and other Adelaide tradies.
            </p>
          </Link>

          <Link
            href="/ai-for-sole-traders-adelaide"
            className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-accent hover:bg-accent/5 transition-all group"
          >
            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-accent">For Sole Traders →</h3>
            <p className="text-sm text-slate-600">
              Running a one-person business? AI handles the admin so you can focus on the work that pays.
            </p>
          </Link>

          <Link
            href="/ai-consulting-adelaide"
            className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-accent hover:bg-accent/5 transition-all group"
          >
            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-accent">AI Consulting →</h3>
            <p className="text-sm text-slate-600">
              Not sure what AI could help with? Book a free audit and we'll map it out with you.
            </p>
          </Link>
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
            <h2 className="text-3xl font-bold mb-4">Stop Missing Calls. Start Booking More Jobs.</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Book a free audit. We'll look at how many calls you're missing, show you exactly how the AI receptionist would handle them, and quote your specific setup.
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
