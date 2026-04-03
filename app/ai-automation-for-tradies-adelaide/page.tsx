import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation Tradies Adelaide | More Jobs, Less Admin",
  description:
    "AI automation tradies Adelaide teams use to stop missed leads, automate follow-ups, and win more jobs. Practical workflows",
  alternates: { canonical: "/ai-automation-for-tradies-adelaide" },
};

const faqs = [
  { question: "What tradie processes should be automated first?", answer: "Start with missed call recovery, quote follow-ups, booking reminders, and review requests. These produce fast ROI without operational risk." },
  { question: "Can AI automation work for a small 2-5 person team?", answer: "Yes. Small teams often see the biggest gains because admin load usually sits with owners and senior techs." },
  { question: "Will automation replace my office admin?", answer: "It usually supports them by removing repetitive tasks so they can focus on customer service and high-value coordination." },
  { question: "Does this integrate with my calendar and CRM?", answer: "Yes. We connect with common tradie stacks including Google Calendar, job management tools, and CRM systems." },
  { question: "What is the monthly investment?", answer: "Most deployments are priced based on call volume and features depending on call/SMS volume and integration requirements." },
];

export default function TradieAutomationPage() {
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map((f)=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness",name:"AI Adelaide",url:"https://aiadelaide.com.au",telephone:"+61-8-7100-9788",areaServed:"Adelaide, South Australia",description:"AI automation for Adelaide tradies including lead response, booking, and follow-up workflows."};

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <section className="max-w-container mx-auto px-6"><div className="panel-light grid-overlay-light p-8 md:p-12"><span className="eyebrow-light">ai automation tradies adelaide</span><h1 className="mb-6 mt-4 text-h1-mobile text-slate-950 md:text-h1">AI Automation for Adelaide Tradies</h1><p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">If your phone rings while you&apos;re on a roof, under a sink, or in transit, you are leaving money on the table. We build tradie automation that captures demand and keeps jobs moving.</p></div></section>
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Where tradies leak revenue</h2><ul className="list-disc space-y-2 pl-6 text-body-mobile text-slate-700 md:text-body"><li>Missed inbound calls from high-intent customers</li><li>Slow quote follow-up after site visits</li><li>No reminder system for scheduled bookings</li><li>Manual admin tasks that eat billable time</li></ul></div></section>
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">How it works</h2><p className="text-body-mobile text-slate-700 md:text-body"><strong>1)</strong> Audit your lead-to-job workflow.</p><p className="text-body-mobile text-slate-700 md:text-body"><strong>2)</strong> Build automation for missed calls, quotes, and reminders.</p><p className="text-body-mobile text-slate-700 md:text-body"><strong>3)</strong> Connect tools and train your team.</p><p className="text-body-mobile text-slate-700 md:text-body"><strong>4)</strong> Monitor conversion rates and optimise monthly.</p></div></section>
      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Who it&apos;s for</h2><ul className="grid gap-2 text-body-mobile text-slate-700 md:grid-cols-2 md:text-body"><li>• Plumbers</li><li>• Electricians</li><li>• Builders and carpenters</li><li>• Roofers and solar teams</li><li>• Landscapers and concreters</li><li>• Security and fire services</li></ul></div></section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">FAQs</h2><div className="space-y-5">{faqs.map((faq)=><div key={faq.question}><h3 className="text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3><p className="mt-2 text-body-mobile text-slate-700 md:text-body">{faq.answer}</p></div>)}</div></div></section>
      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16"><div className="panel-light p-8 md:p-10"><h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Build a tradie system that answers and follows up</h2><p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">Book Free Audit and get a clear 30-day automation plan for your team.</p><Link href="/contact" className="btn-primary px-8 py-4">Book Free Audit <span aria-hidden>→</span></Link><div className="mt-5 flex justify-center gap-6 text-sm text-slate-600"><Link href="/">Home</Link><Link href="/services">Services</Link></div></div></section>
    </div>
  );
}
