import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation Clinics Adelaide | Reduce No-Shows Fast",
  description:
    "AI automation clinics Adelaide teams use to reduce no-shows, improve patient communication, and streamline admin. Practical systems",
  alternates: { canonical: "/ai-automation-for-clinics-adelaide" },
};

const faqs = [
  { question: "How does clinic automation reduce no-shows?", answer: "Automated reminders, confirmation links, and smart follow-ups reduce forgotten appointments and late cancellations." },
  { question: "Can AI help with patient communication after hours?", answer: "Yes. AI can answer common queries, capture requests, and route urgent matters according to your escalation policy." },
  { question: "Will this work for allied health and specialist clinics?", answer: "Yes. We support physiotherapy, psychology, dental, chiropractic, imaging, and multidisciplinary practices." },
  { question: "Can we keep a human handoff for complex cases?", answer: "Always. We design workflows so sensitive or clinical conversations transfer cleanly to your team." },
  { question: "What does clinic automation cost?", answer: "Most Adelaide clinic packages are priced based on patient volume depending on volume and integrations." },
];

export default function ClinicsAutomationPage() {
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map((f)=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness",name:"AI Adelaide",url:"https://aiadelaide.com.au",telephone:"+61-8-7100-9788",areaServed:"Adelaide, South Australia",description:"AI automation for Adelaide clinics and allied health to improve patient communication and reduce no-shows."};

  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="max-w-container mx-auto px-6"><div className="panel-light grid-overlay-light p-8 md:p-12"><span className="eyebrow-light">ai automation clinics adelaide</span><h1 className="mb-6 mt-4 text-h1-mobile text-slate-950 md:text-h1">AI Automation for Adelaide Clinics &amp; Allied Health</h1><p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">Patient communication automation helps your clinic reduce no-shows, respond faster, and free front-desk staff for high-value patient care.</p></div></section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">The clinic pain points</h2><ul className="list-disc space-y-2 pl-6 text-body-mobile text-slate-700 md:text-body"><li>No-shows and late cancellations hurting utilisation</li><li>Front desk overloaded with repetitive calls and texts</li><li>Delayed responses causing poor patient experience</li><li>Manual follow-up for forms, reminders, and recalls</li></ul></div></section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">How it works</h2><p className="text-body-mobile text-slate-700 md:text-body"><strong>1)</strong> Map your current booking and communication workflow.</p><p className="text-body-mobile text-slate-700 md:text-body"><strong>2)</strong> Deploy reminder, confirmation, and follow-up automations.</p><p className="text-body-mobile text-slate-700 md:text-body"><strong>3)</strong> Integrate with your calendar/practice systems.</p><p className="text-body-mobile text-slate-700 md:text-body"><strong>4)</strong> Optimise scripts to improve attendance and patient response times.</p></div></section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Who it&apos;s for</h2><ul className="grid gap-2 text-body-mobile text-slate-700 md:grid-cols-2 md:text-body"><li>• Physio clinics</li><li>• Psychology practices</li><li>• Dental clinics</li><li>• Chiropractic and osteo clinics</li><li>• Podiatry and allied health teams</li><li>• Multi-disciplinary medical centres</li></ul></div></section>



      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16"><div className="panel-light p-6 md:p-8"><h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">FAQs</h2><div className="space-y-5">{faqs.map((faq)=><div key={faq.question}><h3 className="text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3><p className="mt-2 text-body-mobile text-slate-700 md:text-body">{faq.answer}</p></div>)}</div></div></section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16"><div className="panel-light p-8 md:p-10"><h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Lift attendance and reduce admin overload</h2><p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">Book Free Audit for a practical clinic automation plan tailored to your workflow.</p><Link href="/contact" className="btn-primary px-8 py-4">Book Free Audit <span aria-hidden>→</span></Link><div className="mt-5 flex justify-center gap-6 text-sm text-slate-600"><Link href="/">Home</Link><Link href="/services">Services</Link></div></div></section>
    </div>
  );
}
