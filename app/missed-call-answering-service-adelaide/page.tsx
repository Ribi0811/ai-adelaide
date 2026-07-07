import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StackCTA from "@/components/StackCTA";
import DemoLine from "@/components/DemoLine";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Missed Call Answering Adelaide | AI From $199",
  description:
    "Never miss a lead again. Our AI answering service responds to missed calls within 60 seconds, 24/7. Adelaide small businesses and tradies — from $199/mo.",
  alternates: {
    canonical: "/missed-call-answering-service-adelaide",
  },
};

// Ported from /missed-call-service during Phase 2 cannibal-cluster
// consolidation (SEO audit 2026-07). One FAQ item was intentionally NOT
// ported — "How much does it cost?" (source cited a standalone $99/mo
// text-back tier). Resolved in Phase 4.2: Ivan confirmed automation floor is
// $199/mo sitewide, no separate $99/mo tier — the pricing section below now
// reflects that ($199/mo Starter, $399/mo Business).
const portedFaqs = [
  {
    question: "What is a missed call service?",
    answer:
      "A missed call service catches calls you can't pick up and responds on your behalf — usually with an instant SMS, sometimes with a live AI or human answer. The point is to keep the lead warm so they don't ring the next business on Google.",
  },
  {
    question: "What does the SMS say?",
    answer:
      "Whatever you want, in your voice. The default is something like: \"Hi, this is [Business]. Sorry we missed your call — we're on the tools. Can you tell us what you need help with? We'll get back to you within the hour.\" Then the AI asks 2-3 qualifying questions based on your services.",
  },
  {
    question: "Will it work with my existing mobile number?",
    answer:
      "Yes. We layer the automation on top of your current number — no porting, no new SIM, no app for your customers to learn. The number your customers have is the number that responds.",
  },
  {
    question: "Can I customise the messages for different services?",
    answer:
      "Yes. Emergency callouts, quote requests, after-hours, weekend bookings — each can have its own template, qualification questions, and routing rules.",
  },
  {
    question: "Does this include an AI receptionist?",
    answer:
      "It's part of the same stack. Missed-call text-back is the entry feature. Add live AI answering, booking automation, and quote follow-up for the full package.",
  },
  {
    question: "How do I know it's working?",
    answer:
      "Monthly reporting: how many missed calls, how many SMS sent, how many leads qualified, how many jobs booked. You'll see the recovery rate climb in the first 30 days.",
  },
];

function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      }}
    />
  );
}

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Missed Call Answering Service Adelaide",
    serviceType: "Missed Call Answering",
    provider: { "@type": "LocalBusiness", name: "AI Adelaide", url: "https://aiadelaide.com.au" },
    areaServed: { "@type": "City", name: "Adelaide" },
    description:
      "AI missed call answering service for Adelaide businesses. Responds within 60 seconds, 24/7, qualifies the lead. Part of AI automation from $199/mo.",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "AUD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "199", priceCurrency: "AUD", unitText: "MONTH" },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function MissedCallAnsweringServicePage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <ServiceJsonLd />
      <FaqJsonLd faqs={portedFaqs} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Missed Call Answering Service Adelaide" },
        ]}
      />

      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">Missed Call Service</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            Missed Call Answering Service for Adelaide Businesses
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            When a customer calls and you can't answer, what happens? Most of the time: nothing. They don't leave a voicemail. They call your competitor. Our AI responds within 60 seconds — every time, 24/7.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            The Problem: Most Missed Calls Are Lost Forever
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Here's what the data shows: 80% of callers who reach voicemail don't leave a message. They hang up. And most of them won't try again.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            The average business takes 27 hours to respond to a missed call or enquiry. By then, the customer has already booked with someone else.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            For a tradie in Adelaide taking 30–40 calls a week, missing even 20% of them could mean 6–8 lost leads. At $500 average job value, that's $3,000–$4,000 walking out the door every week.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            The problem isn't that you're not good at your job. It's that customers expect an instant response — and if they don't get one, they move on.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            How It Works: Missed Call → Instant Response → Booking
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-6">
            Our missed call answering service works in three steps:
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Customer calls, you can't answer</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  You're on the tools, in a meeting, or it's 8pm on a Sunday. Instead of going to voicemail, the system detects the missed call instantly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">AI responds within 60 seconds</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  The customer receives an automatic SMS from your business number. It's personalised, professional, and gets to the point: "Hi, thanks for calling [Your Business]. Sorry we missed you — reply here and we'll get back to you ASAP, or click to book a time."
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Lead is captured and routed to you</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  When the customer replies, you get notified. If they click to book, they go straight to your calendar. Either way — the lead is in your pipeline, not your competitor's.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Response Time: 60 Seconds vs 27 Hours
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-6">
            Speed matters more than almost anything else when someone is looking to book a service.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-slate-200 rounded-lg p-6 text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">27 hrs</div>
              <div className="text-slate-600 text-sm font-medium uppercase tracking-wide mb-3">Industry Average Response</div>
              <p className="text-body-mobile text-slate-600 md:text-body text-sm">
                Average time most businesses take to follow up a missed call. By then, most customers have already found someone else.
              </p>
            </div>
            <div className="border-2 border-blue-500 rounded-lg p-6 text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">&lt;60s</div>
              <div className="text-slate-600 text-sm font-medium uppercase tracking-wide mb-3">AI Adelaide Response</div>
              <p className="text-body-mobile text-slate-600 md:text-body text-sm">
                How fast your missed call gets an automatic response — 24 hours a day, 7 days a week, including weekends and public holidays.
              </p>
            </div>
          </div>

          <p className="mt-6 text-body-mobile text-slate-700 md:text-body">
            Studies consistently show that responding to an enquiry within 5 minutes makes you 9x more likely to win the job versus responding within an hour. At 60 seconds, you're ahead of almost every competitor in your industry.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Industries That Benefit Most
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-6">
            Missed call follow-up works best in high-intent, competitive industries where speed wins:
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-950 mb-2">Tradies</h3>
              <p className="text-sm text-slate-600">Plumbers, electricians, builders, painters. Customers in need call multiple tradies — first to respond often wins the job.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-950 mb-2">Allied Health</h3>
              <p className="text-sm text-slate-600">Physios, chiros, dentists, podiatrists. After-hours calls from new patients who want to book without waiting until morning.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-950 mb-2">Hospitality</h3>
              <p className="text-sm text-slate-600">Restaurants, cafes, function venues. Enquiries about bookings and events come at all hours — capture them before they book somewhere else.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-950 mb-2">Home Services</h3>
              <p className="text-sm text-slate-600">Cleaners, gardeners, pest control, removalists. Weekend and after-hours calls are when homeowners think of these jobs.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-950 mb-2">Professional Services</h3>
              <p className="text-sm text-slate-600">Accountants, mortgage brokers, financial planners. Clients want quick reassurance their enquiry was received.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-950 mb-2">Auto &amp; Mechanical</h3>
              <p className="text-sm text-slate-600">Mechanics, smash repairers, detailers. Emergency breakdowns and time-sensitive bookings need instant response.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            What Happens After the AI Responds
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            The AI doesn't just fire off a text and disappear. Here's the full handoff process:
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">If the customer replies to the SMS</h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            The AI continues the conversation — finding out what they need, qualifying the lead, and either booking them directly or capturing their details for you to follow up. You get a notification with the full conversation summary.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">If the customer clicks the booking link</h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            They go straight to your calendar and book a time. You get a booking confirmation. No back and forth.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">If there's no reply</h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            The lead is logged in your dashboard. You can choose to have a follow-up SMS sent 2–4 hours later if there's been no response.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">If it's an emergency</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            For industries like plumbing or electrical where some calls are genuine emergencies, you can set keywords that trigger an immediate alert to your mobile — so you know when to call back right away versus tomorrow morning.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Pricing: From $199/Month
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Missed call follow-up is included in all our plans. No per-SMS fees, no extra charges for after-hours responses.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li><strong>Starter — $199/month:</strong> Missed call text-back, AI conversation, message capture, SMS alerts to you</li>
            <li><strong>Business — $399/month:</strong> Full AI conversation, booking link, follow-up sequences, dashboard</li>
          </ul>
          <p className="text-body-mobile text-slate-700 md:text-body">
            One-off setup fee covers configuration, testing, and your 30-minute onboarding call. Most businesses are live within 2–5 business days.
          </p>
        </div>
      </section>

      <Testimonials
        industry="trades"
        count={3}
        heading="What Adelaide businesses say after switching to AI missed-call service"
        eyebrow="Real results"
        subheadline="The fastest SMS reply wins the job. Here's what that looks like in real numbers."
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {portedFaqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Explore More</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/ai-receptionist-cost-adelaide" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              AI Receptionist Cost Adelaide →
            </Link>
            <Link href="/missed-call-text-back-adelaide" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              Missed Call Text-Back Adelaide →
            </Link>
            <Link href="/websites-for-plumbers-adelaide" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              Websites for Plumbers Adelaide →
            </Link>
            <Link href="/websites-for-electricians-adelaide" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              Websites for Electricians Adelaide →
            </Link>
            <Link href="/salisbury" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              Missed Call Answering in Salisbury →
            </Link>
            <Link href="/elizabeth" className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 hover:border-accent/40 hover:bg-accent/5">
              Missed Call Answering in Elizabeth →
            </Link>
          </div>
        </div>
      </section>

      <StackCTA variant="automation" />
      <DemoLine />

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Get Set Up in 2–5 Days — Book a Free Audit
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free 15-minute audit. We'll look at how many calls you're currently missing, what they're costing you, and show you exactly how the system works for your industry. No obligation.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">
            Book your free audit <span aria-hidden>→</span>
          </Link>
          <p className="mt-4 text-body-mobile text-slate-600 md:text-body">
            Or call 08 7100 9788
          </p>
        </div>
      </section>
    </div>
  );
}
