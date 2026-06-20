import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "FAQ — AI Adelaide | Common Questions Answered",
  description:
    "Got questions about AI automation for your Adelaide business? Here are the most common ones we hear — answered straight.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        question: "How long does setup take?",
        answer:
          "Most clients are live within 2–5 business days. We handle everything — there's nothing technical you need to do on your end.",
      },
      {
        question: "Do I need to change my phone number?",
        answer:
          "No. We forward calls through to our system — your existing number stays exactly the same. Customers call you the same way they always have.",
      },
      {
        question: "What do I need to get started?",
        answer:
          "Just a 15-minute call with us. We'll get the info we need, set everything up, and have you live within a few days. No tech skills required.",
      },
      {
        question: "Can I try it before committing?",
        answer:
          "That's what the audit is. We look at your call history, show you what you're losing, and walk you through exactly how the AI would handle your calls. If it doesn't make sense for your business, we'll tell you. No hard sell.",
      },
    ],
  },
  {
    category: "How the AI Receptionist Works",
    items: [
      {
        question: "Does the AI actually talk to my customers?",
        answer:
          "Yes — it answers the call, has a real conversation, and collects the caller's name, number, and what they need. It's not a robot menu. It speaks naturally and handles the call professionally.",
      },
      {
        question: "What does the AI say to the customer?",
        answer:
          "It introduces itself as your receptionist, finds out what the customer needs, and lets them know someone will call them back shortly. The caller always feels looked after — not ignored.",
      },
      {
        question: "What happens after the AI takes the call?",
        answer:
          "You get an SMS and/or email immediately with a full summary: caller's name, number, and exactly what they wanted. You call them back when you're ready — with full context already in hand.",
      },
      {
        question: "What if the AI can't handle a question?",
        answer:
          "It takes a message and flags it for you. You'll still get the caller's details and what they were asking — nothing falls through the cracks.",
      },
      {
        question: "Can the AI book appointments directly?",
        answer:
          "Yes — we can set it up to send a booking link or integrate with your calendar so customers can book a time themselves during the call.",
      },
      {
        question: "Is this a real person or a robot?",
        answer:
          "It's AI — but it sounds like a real person. We're not talking about a robot voice reading from a script. The AI listens, responds naturally, handles interruptions, asks follow-up questions. Most callers won't realise they're talking to AI. That's the point.",
      },
      {
        question: "What if I already have voicemail?",
        answer:
          "Voicemail is where leads go to die. Most people hang up and call the next business. The AI receptionist answers live, has a conversation, and captures the lead. That's the difference between \"leave a message\" and \"I've got you booked for Tuesday at 10am.\"",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
  items: [
      {
        question: "Is there a lock-in contract?",
        answer:
          "No lock-in. We work month to month. If you're not seeing value, you can cancel anytime — no awkward conversations required.",
      },
      {
        question: "How much does it cost?",
        answer:
          "We keep pricing simple — a small monthly fee based on call volume. Book a free audit and we'll give you an exact quote for your situation.",
      },
      {
        question: "Is there a setup fee?",
        answer:
          "Sometimes a small one-time setup fee applies depending on the complexity of your workflow. We'll be upfront about that on the call before you commit to anything.",
      },
    ],
  },
  {
    category: "Who It's For",
    items: [
      {
        question: "What trades do you work with?",
        answer:
          "Plumbers, electricians, builders, HVAC, painters, landscapers, allied health clinics, cafes, beauty salons, hairdressers, and retail shops. If you're getting calls from customers and missing some of them, we can help.",
      },
      {
        question: "Do you only work with tradies?",
        answer:
          "We work with tradies, allied health clinics, cafes, beauty salons, hairdressers, retail shops, and any local Adelaide business that relies on phone enquiries and online leads.",
      },
      {
        question: "I'm a one-man band — is this overkill?",
        answer:
          "Actually it's perfect for solo operators. You can't answer calls while you're on the tools — that's exactly where you're losing jobs. The AI handles it so you don't have to.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">FAQ</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Common Questions, Straight Answers
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            No fluff. Just the questions we hear most often from Adelaide small businesses — answered plainly.
          </p>
        </div>
      </section>

      {faqs.map((section) => (
        <section key={section.category} className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">{section.category}</h2>
            <div className="space-y-4">
              {section.items.map((faq) => (
                <details
                  key={faq.question}
                  className="panel-light-soft group p-5 open:ring-1 open:ring-accent/20"
                >
                  <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-950 marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Still got questions?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute call. We'll answer everything specific to your business and tell you exactly what we'd recommend.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </a>
            <a href="/services" className="btn-secondary px-8 py-4">
              See Our Services <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
