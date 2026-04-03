"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this a real person or a robot?",
    answer:
      "It's AI — but it sounds like a real person. We're not talking about a robot voice reading from a script. The AI listens, responds naturally, handles interruptions, asks follow-up questions. Most callers won't realise they're talking to AI. That's the point.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer:
      "It handles what it knows — which is most calls. If something's outside its knowledge, it takes a message and sends it straight to you. You can also set escalation rules: complex questions go to voicemail, urgent calls forward to your mobile. You're always in control.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "That's what the $247 audit is. We look at your call history, show you what you're losing, and walk you through exactly how the AI would handle your calls. If it doesn't make sense for your business, we'll tell you. No hard sell.",
  },
  {
    question: "Do I need to change my phone number?",
    answer:
      "No. Your number stays the same. The AI answers when you can't. You can set it up as overflow (only after hours), as your main line, or somewhere in between. Your phone, your rules.",
  },
  {
    question: "What if I already have voicemail?",
    answer:
      "Voicemail is where leads go to die. Most people hang up and call the next business. The AI receptionist answers live, has a conversation, and captures the lead. That's the difference between \"leave a message\" and \"I've got you booked for Tuesday at 10am.\"",
  },
  {
    question: "How fast can this be set up?",
    answer:
      "Most businesses are live within a week. After your audit, we configure the AI to know your business, your services, your hours, your booking rules. A bit of back-and-forth to get the voice and responses right, and you're good to go.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`brand-card overflow-hidden p-5 transition-all duration-200 ${
        open ? "ring-1 ring-accent/20" : ""
      }`}
    >
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-semibold text-textPrimary">{question}</span>
        <span
          className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-white text-textSecondary transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <p className="mt-3 text-body-mobile text-textSecondary md:text-body">{answer}</p>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="section-shell bg-bgSecondary py-section-mobile md:py-section">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-6 text-center">
          <span className="eyebrow">FAQ</span>
        </div>

        <h2 className="mb-4 text-center text-h2-mobile text-textPrimary md:text-h2">
          Questions? Good — Here&apos;s What You&apos;re Probably Wondering
        </h2>

        <div className="mx-auto max-w-3xl space-y-4 mt-10">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
