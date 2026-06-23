import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Answering Service Adelaide | 24/7 AI Call Handling",
  description:
    "AI answering service for Adelaide. 24/7 call handling, lead capture, SMS summaries. From $199/mo.",
  alternates: {
    canonical: "/answering-service-adelaide",
  },
  openGraph: {
    title: "Answering Service Adelaide | 24/7 AI Call Handling",
    description: "AI answering service for Adelaide small businesses. 24/7 call handling, lead capture, appointment booking, instant SMS summaries.",
    url: "https://aiadelaide.com.au/answering-service-adelaide",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Adelaide answering service workflow diagram",
      },
    ],
  },
};

const faqs = [
  {
    question: "How much does an answering service cost in Adelaide?",
    answer: "From $199/month as part of our full AI automation stack. No lock-in, no setup fees.",
  },
  {
    question: "Does the AI sound human?",
    answer:
      "Yes. Modern AI voices are genuinely good — Australian accent available, natural pace, professional tone. Most callers don't realise they're talking to AI unless you tell them.",
  },
  {
    question: "Can the AI book appointments?",
    answer:
      "Yes. It connects to your Google Calendar, Calendly, or booking software. It checks availability in real time and books the slot.",
  },
  {
    question: "What if I need to talk to the caller directly?",
    answer:
      "The AI can transfer urgent calls to your mobile, or send you an instant SMS with the caller's details so you can call back within minutes.",
  },
  {
    question: "How long does setup take?",
    answer: "Most answering services are live within 2-3 business days.",
  },
];

export default function AnsweringServiceAdelaidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI Automation Feature</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI Answering Service for Adelaide Small Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Our AI answering service is one feature of the full AI automation stack. It picks up every call 24/7, captures the lead, books appointments, and sends you a full summary in under 60 seconds. From $199/mo, no lock-in, Adelaide-based setup.
          </p>
          <div className="mt-6">
            <Link href="/ai-automation-adelaide" className="btn-primary px-6 py-3">
              See Full AI Automation Service →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">What an AI Answering Service Does</h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            An AI answering service picks up every call to your business — during work hours, after hours, weekends, public holidays. It sounds like a real person. It understands what the caller is asking. It captures their details, books an appointment, or takes a message.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            You get an SMS or email with the full summary within 60 seconds of the call ending. You decide which calls you want to be alerted about (urgent ones) and which can wait until morning.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Most Adelaide businesses recover 3-5 extra jobs per week just from calls they used to miss.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Ready to Never Miss Another Call?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Our AI answering service is part of a full AI automation stack. Book a free chat and we&apos;ll show you the complete setup — websites, SEO, and automation — with a fixed quote.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/ai-automation-adelaide" className="btn-primary px-8 py-4">
              See AI Automation Service <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4">
              Book Free Chat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
