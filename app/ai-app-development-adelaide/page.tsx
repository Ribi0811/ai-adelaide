import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI App Development Adelaide — Custom AI Apps for Adelaide Businesses",
  description:
    "Custom AI app development for Adelaide businesses. AI chatbots, workflow automation tools, customer service AI, internal tools. Built for tradies, clinics, and Adelaide SMBs. From $2,497.",
  alternates: { canonical: "/ai-app-development-adelaide" },
};

const whatsIncluded = [
  { title: "AI chatbots for your website", body: "Trained on your business, your services, your FAQs. Answers customer questions 24/7, captures leads, books appointments. Replaces the contact form with an actual conversation." },
  { title: "Internal workflow AI tools", body: "Custom AI tools that handle quoting, scheduling, follow-ups, customer communication, job tracking. Built around how your business actually runs — not generic templates." },
  { title: "AI phone agents", body: "Voice AI that answers calls, books appointments, takes messages, routes urgent calls. Sounds human, works 24/7, costs less than a part-time receptionist. Already a hit with our tradie clients." },
  { title: "AI integrations", body: "Connect AI to your existing tools — JobAdder, ServiceM8, Xero, Google Calendar, your CRM. AI that actually plugs into your business, not a standalone toy." },
  { title: "Custom AI dashboards", body: "Real-time visibility into what's working. Call volumes, conversion rates, top customer questions, lead sources, ROI per channel. Plain-English, no PhD required." },
  { title: "Ongoing support + iteration", body: "AI models improve over time with usage. We monitor, tune, and improve your AI every month based on real customer conversations. Not a \"set and forget\" build." },
];

const faqs = [
  { question: "What is AI app development?", answer: "AI app development is building software that uses artificial intelligence (large language models, voice AI, computer vision, etc.) to do tasks that previously required a human. For Adelaide businesses, the most common AI apps we build are: AI chatbots for websites, AI phone agents for call handling, internal workflow automation tools, and custom AI integrations with existing software. It's not \"use ChatGPT\" — it's building specific AI-powered tools that solve specific problems in your business." },
  { question: "How much does custom AI app development cost in Adelaide?", answer: "Simple AI chatbots start at $2,497 one-off. AI phone agents (full setup with your phone number, scripts, calendar integration) start at $3,997 + $99-297/mo for the voice AI service. Internal workflow tools and dashboards range from $4,997-$15,000+ depending on complexity. All builds include 30 days post-launch support." },
  { question: "How long does it take to build a custom AI app?", answer: "AI chatbots: 1-2 weeks. AI phone agents: 1-2 weeks. Custom workflow tools and dashboards: 3-6 weeks. Complex integrations with multiple business systems: 6-10 weeks. We give you an exact timeline in your free consultation." },
  { question: "Can AI really replace a receptionist?", answer: "For 70-80% of inbound calls, yes. AI phone agents handle booking, FAQs, message-taking, and routing. They never miss a call, never put someone on hold, and work 24/7. For the 20-30% of complex calls that genuinely need a human, your AI takes a detailed message and texts you instantly. Most of our tradie clients find this combo replaces a $50k/year receptionist while capturing more after-hours work." },
  { question: "Do you build AI apps for specific Adelaide industries?", answer: "Yes — we specialise in AI for Adelaide tradies (plumbers, electricians, builders, auto), allied health (physio, chiro, dental, psychology), hospitality (cafes, restaurants, hotels), and professional services (lawyers, accountants, financial advisors). Each industry has different AI patterns that work, and we know them." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function AiAppDevelopmentAdelaidePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI App Development Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">AI App Development Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">AI App Development Adelaide — Custom AI for Your Business</h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Chatbots, voice agents, workflow tools, internal dashboards — built for your Adelaide business, integrated with your existing software, supported by a local team. Not "use ChatGPT". Real AI that solves real business problems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4">Book Free AI App Chat <span aria-hidden>→</span></Link>
            <Link href="/ai-automation-adelaide" className="btn-secondary px-8 py-4">See AI Automation Service <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What We Build</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {whatsIncluded.map((item, i) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">0{i + 1}</p>
                <h3 className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3">{item.title}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">AI App Development FAQs</h2>
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
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready to Build Your AI App?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Free 15-minute consultation. Tell us what problem you're trying to solve — we'll show you exactly what AI app would work, what it would cost, and how long it would take.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Book Free AI App Chat <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}