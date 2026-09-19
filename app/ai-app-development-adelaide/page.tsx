import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  // Tier 12 (2026-07-11): the national "ai development company" cluster
  // (~325 impr/mo at pos 10-12: "ai app development company", "ai software
  // development company", "ai development company") ranks on the HOMEPAGE
  // while this page sits at pos 50. Title/copy now carry the "AI development
  // company" entity so Google hands this page the cluster. Also fixes
  // check-meta failures (title was 82 rendered chars, description 187).
  // 2026-09-18 (GSC P0): exact-match "ai application development adelaide"
  // gets 316 impr/week at pos 22-27 with 0 clicks. Page never used the
  // literal phrase — updated title/description/H1 to lock exact match.
  // NOTE: rendered title must stay <=60 chars (check-meta) — the layout
  // template appends " | AI Adelaide" (13 chars), so base title <=47.
  title: "AI Application Development Adelaide",
  description:
    "AI application development Adelaide: custom chatbots, voice agents, workflow tools and integrations for local businesses. From $2,497, free consult.",
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
  { question: "What is AI application development?", answer: "AI application development is building software that uses artificial intelligence (large language models, voice AI, computer vision, etc.) to do tasks that previously required a human. For Adelaide businesses, the most common applications we build are: AI chatbots for websites, AI phone agents for call handling, internal workflow automation tools, and custom AI integrations with existing software. It's not \"use ChatGPT\" — it's AI application development in Adelaide that solves specific business problems with specific tools built around your workflow." },
  { question: "How much does custom AI app development cost in Adelaide?", answer: "Simple AI chatbots start at $2,497 one-off. AI phone agents (full setup with your phone number, scripts, calendar integration) start at $3,997 + $99-297/mo for the voice AI service. Internal workflow tools and dashboards range from $4,997-$15,000+ depending on complexity. All builds include 30 days post-launch support." },
  { question: "How long does it take to build a custom AI app?", answer: "AI chatbots: 1-2 weeks. AI phone agents: 1-2 weeks. Custom workflow tools and dashboards: 3-6 weeks. Complex integrations with multiple business systems: 6-10 weeks. We give you an exact timeline in your free consultation." },
  { question: "Can AI really replace a receptionist?", answer: "It can handle defined tasks such as FAQs, message-taking, routing and simple booking, while sensitive or unusual calls still need a human escalation path. We scope the call types first and measure containment, transfer quality and customer outcomes rather than assume a replacement percentage." },
  { question: "Are you an AI software development company or an agency?", answer: "We're an AI development company in Adelaide, Australia — we design, build, and support the AI software ourselves rather than reselling someone else's platform. That matters for two reasons: your tools are built around how your business actually runs, and when something needs changing you talk to the people who built it, in your timezone, not an offshore ticket queue." },
  { question: "Do you build AI apps for specific Adelaide industries?", answer: "Yes — we specialise in AI for Adelaide tradies (plumbers, electricians, builders, auto), allied health (physio, chiro, dental, psychology), hospitality (cafes, restaurants, hotels), and professional services (lawyers, accountants, financial advisors). Each industry has different AI patterns that work, and we know them." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

export default function AiAppDevelopmentAdelaidePage() {
  return (
    <div className="section-shell bg-[#FBFBFD] pb-section-mobile pt-28 md:pb-section md:pt-32">
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
          <span className="eyebrow-light">AI Application Development Adelaide</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">AI Application Development Adelaide — Custom AI Apps for Your Business</h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            AI application development Adelaide businesses actually use — chatbots, voice agents, workflow tools, internal dashboards — built for your Adelaide business, integrated with your existing software, supported by a local team. We&apos;re an AI development company based in Adelaide, not an offshore dev shop. Not &quot;use ChatGPT&quot;. Real AI application development that solves real business problems.
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
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            How an AI Application Build Actually Runs
          </h2>
          <div className="space-y-6 text-body-mobile text-slate-700 md:text-body">
            <p>
              Most Adelaide businesses arrive with a symptom rather than a spec —
              quotes going out late, the phone ringing while someone is on the
              tools, admin eating a day a week. AI application development starts
              by turning that symptom into a defined scope, because the most
              expensive mistake in this work is building the wrong thing quickly.
            </p>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">
              Step one: scope the task, not the technology
            </h3>
            <p>
              We map the specific task you want handled — what triggers it, what
              information it needs, what a good outcome looks like, and where a
              person still needs to be in the loop. That conversation usually
              reveals that one narrow, well-built tool beats a broad one, and it
              tells us whether the right fit is a custom build at all. If our{" "}
              <Link href="/ai-automation-adelaide" className="underline decoration-accent/30 underline-offset-4 font-semibold text-accent">
                AI automation service
              </Link>{" "}
              covers it off the shelf, we will say so rather than sell you a build.
            </p>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">
              Step two: build against your real systems
            </h3>
            <p>
              An AI app that cannot reach your job system, calendar or accounting
              software is a demo, not a tool. Integration work is where most of
              the effort goes, which is why we scope it before quoting rather than
              after. For a bookkeeping workflow that means Xero or MYOB; for a
              tradie business it is typically ServiceM8, JobAdder or a phone
              system. If your workflow is closer to a process than a build, our{" "}
              <Link href="/bookkeeping-adelaide" className="underline decoration-accent/30 underline-offset-4 font-semibold text-accent">
                bookkeeping automation
              </Link>{" "}
              page covers those specific patterns.
            </p>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">
              Step three: measure whether it worked
            </h3>
            <p>
              We agree the number that matters before launch — calls contained
              without transfer, hours of admin removed, quotes followed up on
              time — then report against it. A build that cannot be measured
              cannot be defended, and we would rather tell you it is not working
              than let it sit there quietly costing money.
            </p>
            <h3 className="text-h3-mobile text-slate-950 md:text-h3">
              What we will not tell you
            </h3>
            <p>
              We will not promise a ranking position, a fixed percentage saving or
              a specific revenue lift, because those depend on factors outside any
              build. Sensitive or unusual cases still need human escalation, and
              a tool that quietly guesses on those is worse than no tool. Scope
              the task honestly, measure it properly, and improve it from there.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">
            AI Application Development Adelaide — FAQs
          </h2>
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
