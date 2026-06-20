import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Websites for Clinics Adelaide | Health Practice Website Design",
  description:
    "Healthcare websites for Adelaide clinics — physio, chiro, dental, allied health. Online booking, practitioner profiles, patient forms. From $699.",
  alternates: {
    canonical: "/websites-for-clinics-adelaide",
  },
};

const buildItems = [
  {
    title: "Online booking integration",
    body:
      "Patients book appointments 24/7 from their phone. We integrate with Cliniko, Nookal, Halaxy, Jane, Power Diary, or your existing system. No more phone tag during peak hours.",
  },
  {
    title: "Practitioner profiles",
    body:
      "Each practitioner gets a profile page with their specialties, qualifications, and treatment approach. Patients book with the person they trust, not just the clinic.",
  },
  {
    title: "Patient forms (digital intake)",
    body:
      "Medical history, consent forms, Medicare details — all completed online before the appointment. Saves 10-15 minutes per patient and reduces front-desk admin dramatically.",
  },
  {
    title: "No-show reduction system",
    body:
      "Connect with our AI automation to send SMS + email reminders 24hr and 2hr before appointments. Most clinics cut no-shows by 30-65% — that&apos;s thousands in recovered revenue each month.",
  },
  {
    title: "Treatment & service pages",
    body:
      "Clear, accessible descriptions of your services (physio, chiro, dry needling, etc.) with FAQs and pricing. Patients understand what they&apos;re booking before they arrive.",
  },
  {
    title: "Google reviews + practitioner listings",
    body:
      "Display your Google reviews and integrate practitioner listings on Google. Healthcare buyers heavily research before booking — your digital presence needs to inspire confidence.",
  },
];

const steps = [
  {
    title: "Step 1 — 15-min call",
    body:
      "Tell us about your clinic, your practitioners, your services, and your patient demographics. We need to know your booking platform and any compliance considerations.",
  },
  {
    title: "Step 2 — We build",
    body:
      "We write the copy, design the layout, build practitioner profiles, wire up the booking integration, and set up patient forms. You don&apos;t write a word.",
  },
  {
    title: "Step 3 — You review",
    body:
      "One review round. Tweak practitioner bios, adjust service descriptions, refine the booking flow. We update it same day.",
  },
  {
    title: "Step 4 — Live",
    body:
      "We push it live, set up Google, and hand you the keys. Total time: 48 hours for Starter, 5-7 days for Business, 10-14 days for Growth.",
  },
];

const whoItsFor = [
  "Physiotherapy, chiropractic, and osteopathy clinics",
  "Dental practices wanting a modern online presence",
  "Allied health practices (psychology, dietetics, podiatry, OT)",
  "Multi-practitioner clinics needing individual booking pages",
  "New clinics launching and need a website from day one",
  "Established clinics whose current site is slow or doesn't show on mobile",
];

const localAdelaide = [
  "Norwood & Stepney — established eastern suburbs, family practices strong",
  "Unley & Malvern — premium clientele, professional design matters most",
  "Burnside & Glen Osmond — Hills families, long-term patient relationships",
  "Glenelg & Brighton — coastal suburbs, family + retirement demographics",
  "Mitcham & Cumberland Park — family-friendly, paediatrics + general practice",
];

const faqs = [
  {
    question: "Can you integrate with Cliniko / Nookal / Jane?",
    answer:
      "Yes. We work with all major practice management systems — Cliniko, Nookal, Halaxy, Jane, Power Diary, Simple Clinic, and most others. Patients can book and the data flows straight into your system.",
  },
  {
    question: "Are the patient forms secure?",
    answer:
      "Yes. We build forms that submit securely to your email or practice management system. We never store patient data on the website. Compliance with the Privacy Act 1988 and AHPRA guidelines is built in.",
  },
  {
    question: "What about the no-show problem?",
    answer:
      "The site is built to connect with our AI automation system. SMS + email reminders at 24hr and 2hr before appointments cut no-shows by 30-65%. Most clinics recover $2-8k/month in previously lost revenue.",
  },
  {
    question: "What does it cost?",
    answer:
      "Websites start from $699 for a complete Starter site (3 pages). Business tier is $1,299 for 5-7 pages with full booking + practitioner profiles. Growth tier is $2,499 for 10+ pages with automation integrations. SEO add-on from $399/month.",
  },
  {
    question: "Can patients see which practitioner is available?",
    answer:
      "Yes. The booking integration pulls real-time availability from your practice management system. Patients pick a practitioner, see open slots, and book — all without calling.",
  },
  {
    question: "Can we do telehealth bookings?",
    answer:
      "Yes. If you offer telehealth, we add a service type and the booking page lets patients choose in-person or video. The video link is generated automatically and emailed to the patient on confirmation.",
  },
  {
    question: "How long until I see SEO results?",
    answer:
      "Your site is live in 48 hours. Google movement depends on competition — niche practices (&lsquo;physio Mitcham&rsquo;) in 2-4 weeks, competitive areas (&lsquo;physio Norwood&rsquo;) in 2-3 months. We&apos;ll give you an honest timeline.",
  },
  {
    question: "Are you AHPRA-compliant?",
    answer:
      "We follow AHPRA advertising guidelines — no testimonials on the homepage, no misleading claims, clear practitioner credentials. If you have a specific compliance concern, raise it on the free chat and we&apos;ll design around it.",
  },
];

export default function WebsitesForClinicsPage() {
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
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Websites", href: "/website-design-adelaide" },
          { label: "Websites for Clinics Adelaide" },
        ]}
      />
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <span className="eyebrow-light">Website Design for Adelaide Clinics & Allied Health</span>
          <h1 className="mt-4 mb-6 text-h1-mobile text-slate-950 md:text-h1">
            A Clinic Website That Books Patients 24/7 — Even When You&apos;re Closed
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            Adelaide patients book healthcare online. If your clinic doesn&apos;t have a fast, professional website with online booking, they&apos;re calling the practice down the road that does — or worse, putting off the appointment entirely. We build clinic websites for physios, chiros, dentists, and allied health practices across Adelaide. Online booking, practitioner profiles, patient forms, no-show reduction. From $699.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">What You Get</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {buildItems.map((item, index) => (
              <div key={item.title} className="panel-light-soft p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <h3
                  className="mt-3 mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">From Brief to Live in Days</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.title} className="panel-light-soft p-5 md:p-6">
                <h3
                  className="mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: step.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Built For</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {whoItsFor.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Suburbs we build clinic websites for
          </h2>
          <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
            We build clinic and allied health websites right across Adelaide. Here are the suburbs we work in most:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {localAdelaide.map((item) => (
              <li
                key={item}
                className="panel-light-soft flex items-start gap-3 p-5 text-body-mobile text-slate-700 md:p-6 md:text-body"
              >
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-xs text-accent">
                  📍
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials
        industry="health"
        count={2}
        heading="What Adelaide clinic owners say"
        eyebrow="From our clients"
      />

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">Common Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel-light-soft p-5 md:p-6">
                <h3
                  className="mb-3 text-h3-mobile text-slate-950 md:text-h3"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                />
                <p
                  className="text-body-mobile text-slate-700 md:text-body"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">Ready for a Website That Books Patients 24/7?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free chat — no obligation. We&apos;ll scope your clinic site, walk through compliance considerations, and give you a fixed quote on the spot.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#send-message" className="btn-primary px-8 py-4">
              Send a Message <span aria-hidden>→</span>
            </Link>
            <Link href="/website-pricing" className="btn-secondary px-8 py-4">
              See Website Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Looking for our general web design services?{" "}
            <Link href="/website-design-adelaide" className="underline hover:text-accent">
              See our Adelaide website design page
            </Link>{" "}
            or learn about our{" "}
            <Link href="/seo" className="underline hover:text-accent">
              SEO services
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
