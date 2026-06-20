import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation for Adelaide Clinics | Reduce No-Shows, Streamline Admin",
  description:
    "AI automation for Adelaide clinics and allied health — cut no-shows by 65%, book appointments 24/7, and free your front desk from repetitive admin. Call 08 7100 9788.",
  alternates: { canonical: "/ai-automation-for-clinics-adelaide" },
};

const faqItems = [
  {
    question: "How does clinic automation reduce no-shows and late cancellations?",
    answer:
      "Automated SMS reminders at 24 hours and 2 hours before the appointment, with a simple 'Reply YES to confirm or R to reschedule' option. For higher-value appointments, we can add email confirmation links and calendar integration. Clinics using this system typically see no-shows drop from 20% to 7% — a Stirling physiotherapy clinic recovered ~$1,200/week in previously lost appointment slots after implementing automated reminders alone.",
  },
  {
    question: "Can AI handle patient communication after hours and on weekends?",
    answer:
      "Yes. An AI receptionist answers calls 24/7 — booking appointments, answering FAQs (parking, hours, rebates), taking new patient intake, and routing urgent clinical matters according to your escalation policy. It's not a robot reading a script; it sounds human, asks follow-up questions, and knows when to take a message for clinical staff. Most patients don't realise they're talking to AI.",
  },
  {
    question: "Will this work for my specific type of clinic?",
    answer:
      "We support physiotherapy, chiropractic, dental, psychology, podiatry, optometry, osteopathy, and multidisciplinary medical centres. Each clinic type has different workflows — physios need exercise reminder follow-ups, dentists need recall scheduling, psych clinics need sensitive intake handling. We configure the automation to your specific practice, not a generic template.",
  },
  {
    question: "Can we keep a human handoff for complex or clinical conversations?",
    answer:
      "Always. The AI is trained to recognise its limits. If a caller describes symptoms that need clinical judgment, mentions self-harm or crisis, or asks a question outside the knowledge base, it takes a detailed message and flags it for immediate staff attention. You set the escalation rules — we never pretend AI can replace clinical judgment.",
  },
  {
    question: "Will it integrate with my practice management software?",
    answer:
      "We connect with most practice management systems including Cliniko, Nookal, Gentu, Best Practice, MedicalDirector, and popular calendar platforms (Google Calendar, Microsoft 365). If your system has an API or webhook, we can typically integrate within 1-2 days. You keep your existing booking system — we layer automation on top.",
  },
  {
    question: "Is this HIPAA/Privacy Act compliant for Australian healthcare data?",
    answer:
      "We work within Australian Privacy Act requirements and the Notifiable Data Breaches scheme. Patient data is handled through encrypted channels, stored in Australian-based infrastructure where possible, and access is strictly role-based. We can provide a data handling statement for your practice's compliance records. For sensitive mental health or specialist clinics, we offer additional privacy configurations.",
  },
  {
    question: "What does clinic automation cost and how quickly does it pay for itself?",
    answer:
      "Most clinics start with a $99-497/mo implementation (automated reminders + basic AI receptionist for overflow calls). A more comprehensive setup with after-hours booking, recall automation, and multi-location support runs $299-699/mo. The ROI is fast — if you fill two extra cancellation slots per week at $120-150 per consultation, that's $240-300/week, or ~$1,000/month in recovered revenue. Most clinics see payback within the first 30 days.",
  },
];

export default function ClinicsAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AI Adelaide",
            url: "https://aiadelaide.com.au",
            telephone: "+61871009788",
            email: "hello@aiadelaide.com.au",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5 Peel St",
              addressLocality: "Adelaide",
              addressRegion: "SA",
              postalCode: "5000",
              addressCountry: "AU",
            },
            areaServed: { "@type": "City", name: "Adelaide" },
            description:
              "AI automation for Adelaide clinics and allied health — no-show reduction, 24/7 booking, patient communication, and admin workflows.",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Automation for Adelaide Clinics",
            provider: {
              "@type": "LocalBusiness",
              name: "AI Adelaide",
              url: "https://aiadelaide.com.au",
            },
            areaServed: { "@type": "City", name: "Adelaide" },
            description:
              "Custom AI automation for Adelaide clinics — no-show reduction, 24/7 patient booking, recall automation, and front desk support.",
            offers: { "@type": "Offer", price: "99.00", priceCurrency: "AUD" },
          }),
        }}
      />

      <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
        {/* Hero */}
        <section className="max-w-container mx-auto px-6">
          <div className="panel-light grid-overlay-light p-8 md:p-12">
            <div className="mb-6">
              <span className="eyebrow-light">AI Services for Clinics</span>
            </div>
            <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
              AI Automation for Adelaide Clinics — Fewer No-Shows, Less Admin, More Patient Care
            </h1>
            <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
              If your front desk is buried in reminder calls and your no-show rate is eating into
              billable hours, AI automation gives you that time back. We build clinic systems that
              handle reminders, bookings, recalls, and patient communication — so your team focuses
              on patients.{" "}
              <strong>Adelaide-based setup, 2-5 business days.</strong>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Book your free clinic audit <span aria-hidden>→</span>
              </Link>
              <a href="tel:+61871009788" className="btn-outline-light px-8 py-4">
                (08) 7100 9788
              </a>
            </div>
          </div>
        </section>

        {/* The Pain Points */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              The Numbers Every Clinic Owner Knows (But Hates to Look At)
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">No-Shows</h3>
                <p className="text-3xl font-bold text-red-600">20%</p>
                <p className="mt-1 text-sm text-slate-500">Average no-show rate without automation</p>
                <p className="mt-3 text-body-mobile text-slate-700 md:text-body">
                  For a clinic running 100 appointments/week at $120 avg, that's $2,400/week in
                  lost revenue — $124,800/year. With automated SMS reminders, no-shows drop to 7% —
                  recovering ~$81,000/year.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Front Desk Overload</h3>
                <p className="text-3xl font-bold text-amber-600">15+ hrs/wk</p>
                <p className="mt-1 text-sm text-slate-500">Time spent on reminder calls, rescheduling, FAQs</p>
                <p className="mt-3 text-body-mobile text-slate-700 md:text-body">
                  Your receptionist spends 2-3 hours daily on repetitive tasks — confirming tomorrow's
                  appointments, answering "what's your cancellation policy?", chasing late patient forms.
                  Automation handles this volume automatically.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">After-Hours Gaps</h3>
                <p className="text-3xl font-bold text-slate-700">0</p>
                <p className="mt-1 text-sm text-slate-500">After-hours appointments booked without AI</p>
                <p className="mt-3 text-body-mobile text-slate-700 md:text-body">
                  Patients try to book at 8pm or Sunday morning. Without AI, those calls go to
                  voicemail and 70% never call back. With AI, they book immediately — 24/7.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">Recall Gaps</h3>
                <p className="text-3xl font-bold text-slate-700">30-50%</p>
                <p className="mt-1 text-sm text-slate-500">Patients who miss their 6-month recall</p>
                <p className="mt-3 text-body-mobile text-slate-700 md:text-body">
                  Manual recall processes depend on someone remembering to check the list. AI sends
                  recall reminders automatically at the right interval — text, email, or both —
                  and tracks responses. Fill rates improve 30-50%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Automate */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              What We Automate for Clinics
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Appointment Reminders &amp; Confirmations
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  SMS at 24hr + 2hr before with confirm/reschedule options. Email reminders for
                  longer-lead appointments. Customisable message tone and timing per appointment
                  type. Integrates with your practice management calendar.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  AI Receptionist — 24/7 Booking
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Answers every call — peak overflow, after hours, weekends. Books appointments
                  directly into your calendar. Handles FAQs (parking, rebates, cancellation policy).
                  Routes clinical concerns to the right practitioner. Australian accent.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  New Patient Intake Automation
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Auto-sends intake forms via SMS/email after booking. Collects medical history,
                  Medicare details, and consent before the first visit. Chases incomplete forms
                  automatically. Patient arrives ready to go — no clipboard in the waiting room.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Recall &amp; Follow-Up Automation
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Dental 6-month checkup reminders, physio exercise program follow-ups, optometry
                  annual eye test nudges. Auto-sends at the right interval. Patients book directly
                  from the link. 30-50% better recall fill rates.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Waitlist &amp; Cancellation Fill
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  When a cancellation opens a prime slot, AI texts your waitlist immediately. First
                  to reply gets the slot. No manual phone-tree calling through a list of 20 patients.
                  Fills cancellation gaps within minutes, not days.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">
                  Google Review Requests
                </h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Auto-sends review link 24hr after appointment. Gentle nudge at Day 7 for non-responders.
                  Handles the awkwardness of asking — consistently and politely. Builds your online
                  reputation systematically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Types */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Clinic Types We Work With
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Physiotherapy</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Exercise program follow-up reminders, initial consult intake forms, EPC/CDM
                  care plan booking, post-session review requests. One Unley physio cut admin
                  by 50% after automating intake and reminders.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Chiropractic</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Treatment plan booking automation, X-ray referral reminders, Medicare rebate
                  FAQ handling. A Unley chiro clinic reduced missed calls by 90% in month one.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Dental</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  6-month recall automation, emergency toothache screening and triage, treatment
                  plan quote follow-up, payment plan FAQ handling. Recall fill rates improve 40% on
                  average.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Psychology</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Sensitive intake with mental health escalation protocols, GP referral and MHCP
                  document handling, cancellation policy reminders with clinical safety checks.
                  Privacy-first configuration with strict escalation rules.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Podiatry</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  EPC care plan booking and Medicare rebate FAQs, diabetic foot check recall
                  automation, orthotics fitting follow-up reminders, post-op care instruction delivery.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Optometry</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Annual eye test recall automation, frame collection ready notifications, contact
                  lens reorder reminders, Medicare bulk-billing FAQ handling, prescription expiry alerts.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Osteopathy</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Treatment plan booking, post-session care instruction delivery, EPC referral
                  intake, review request automation, same-day appointment waitlist management.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Multi-Disciplinary Medical Centres</h3>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  Multi-practitioner routing, GP vs specialist appointment sorting, pathology
                  result notification workflows, complex Medicare billing FAQ handling, cross-referral
                  coordination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Real Result: Stirling Physiotherapy Clinic
            </h2>
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              A busy physiotherapy practice in Stirling was losing approximately 20% of appointments
              to no-shows and late cancellations — creating scheduling gaps, lost revenue, and
              frustrated practitioners.
            </p>
            <p className="mb-4 text-body-mobile text-slate-700 md:text-body">
              After implementing automated SMS appointment reminders and an AI receptionist for
              overflow calls:
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-6 text-body-mobile text-slate-700 md:text-body">
              <li>No-show rate decreased from 20% to 7%</li>
              <li>Administrative time spent on reminder calls dropped by 80%</li>
              <li>Patient feedback highlighted appreciation for the helpful, consistent reminders</li>
              <li>Recovered approximately $1,200 in weekly revenue from previously lost appointment slots</li>
              <li>The clinic was able to accommodate 2-3 additional patients weekly from the recovered time slots</li>
            </ul>
            <p className="text-body-mobile text-slate-700 md:text-body">
              "I honestly didn't think it would work for a small clinic like mine. Now my front desk
              spends half the time on admin and we've had zero no-shows since we set up the reminders."
              — Dr. Sarah K., Physiotherapist
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              What It Costs
            </h2>
            <p className="mb-6 text-body-mobile text-slate-700 md:text-body">
              No lock-in contracts. Start with the one workflow that's hurting your utilisation the
              most and scale from there.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 ring-1 ring-accent/10">
                <div className="mb-2 text-sm font-semibold text-accent">START</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">Free Audit</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">$0</p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Review your current booking and no-show data</li>
                  <li>Map the fastest automation win for your clinic</li>
                  <li>Clear recommendation and implementation plan</li>
                  <li>No obligation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <div className="mb-2 text-sm font-semibold text-accent">SETUP</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">Implementation</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">
                  from $99 <span className="text-sm font-normal text-slate-500">/month</span>
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Automated SMS/email reminders</li>
                  <li>Basic AI receptionist for overflow calls</li>
                  <li>Calendar &amp; practice system integration</li>
                  <li>2-5 business day setup</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-white p-6">
                <div className="mb-2 text-sm font-semibold text-accent">GROW</div>
                <h3 className="mb-1 text-h3-mobile text-slate-950 md:text-h3">Full Clinic Suite</h3>
                <p className="mb-3 text-2xl font-bold text-slate-950">
                  $299-699 <span className="text-sm font-normal text-slate-500">/month</span>
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Full 24/7 AI receptionist</li>
                  <li>Recall + waitlist automation</li>
                  <li>New patient intake workflows</li>
                  <li>Priority support + monthly improvements</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              ROI: Fill two extra cancellation slots at $120-150 each = $240-300/week, or ~$1,000/month.
              Most clinics recover their investment within 30 days.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-4 text-center text-h2-mobile text-slate-950 md:text-h2">How It Works</h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-body-mobile text-slate-700 md:text-body">
              We respect that clinics have clinical workflows, compliance needs, and sensitive patient
              data. Our process is built around your practice, not around tech demos.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">01</div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">We Audit Your Workflow</h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">30-60 min call</p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  We map your booking process, identify your no-show patterns, and find the highest-ROI
                  automation opportunity for your specific clinic type.
                </p>
              </div>
              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">02</div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">We Set Up &amp; Test</h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">2-5 business days</p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  We configure reminders, AI receptionist, recall sequences. Integrate with your
                  practice system. Test with sample patients. Hand over with clear documentation.
                </p>
              </div>
              <div className="relative flex flex-col rounded-xl border border-slate-200/80 bg-white p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-xl font-bold text-accent">03</div>
                <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">You See Results Fast</h3>
                <p className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">Ongoing support</p>
                <p className="text-body-mobile text-slate-700 md:text-body">
                  No-shows drop within the first week. Your front desk gets hours back. We check in
                  regularly, refine scripts, and add workflows as your practice grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
          <div className="panel-light p-6 md:p-8">
            <h2 className="mb-6 text-h2-mobile text-slate-950 md:text-h2">FAQ</h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <div key={faq.question}>
                  <h3 className="mb-2 text-h3-mobile text-slate-950 md:text-h3">{faq.question}</h3>
                  <p className="text-body-mobile text-slate-700 md:text-body">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
          <div className="panel-light p-8 md:p-10">
            <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
              Ready to Cut No-Shows and Reclaim Your Front Desk?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
              Book a free 15-minute clinic audit. We'll look at your current booking data, show you
              how much no-shows are actually costing, and give you a clear automation plan — no
              obligation.
            </p>
            <Link href="/contact" className="btn-primary inline-flex px-8 py-4">
              Book your free clinic audit <span aria-hidden>→</span>
            </Link>
            <p className="mt-4 text-body-mobile text-slate-600 md:text-body">
              Or call <a href="tel:+61871009788" className="underline">(08) 7100 9788</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
