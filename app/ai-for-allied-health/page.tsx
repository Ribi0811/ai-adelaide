import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI for Allied Health Adelaide | Automate Appointments & Admin",
  description:
    "AI phone answering for Adelaide physios, chiros, OTs and allied health. Booking automation, after-hours calls, NDIS admin help. Call 08 7100 9788 today.",
  alternates: {
    canonical: "/ai-for-allied-health",
  },
};

export default function AIForAlliedHealthPage() {
  return (
    <div className="section-shell bg-[#edf4f8] pb-section-mobile pt-28 md:pb-section md:pt-32">
      <section className="max-w-container mx-auto px-6">
        <div className="panel-light grid-overlay-light p-8 md:p-12">
          <div className="mb-6">
            <span className="eyebrow-light">AI for Allied Health</span>
          </div>
          <h1 className="mb-6 text-h1-mobile text-slate-950 md:text-h1">
            AI Automation for Adelaide Physios, Chiros & Allied Health Clinics
          </h1>
          <p className="max-w-3xl text-body-mobile text-slate-600 md:text-body">
            AI phone answering for Adelaide physios, chiros, OTs, speech pathologists, podiatrists, and allied health clinics. Booking automation, after-hours calls, NDIS admin help. Call 08 7100 9788 today.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            The Admin Burden in Allied Health
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            You became a physio to help people move better. A chiro to fix backs. An OT to help people live independently.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            You didn't become a health professional to spend four hours a day on the phone.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            But that's what happens. Appointment bookings. Cancellations. Reschedules. NDIS enquiries. Insurance questions. New patient intake forms.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            The phone never stops. And every minute on the phone is a minute not with patients.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            What AI Can Handle for Your Clinic
          </h2>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Appointment Booking and Rescheduling</h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Your AI receptionist can book appointments directly into your calendar. It knows your available slots, your appointment types, and your clinician schedules.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Patient: "I need to see Sarah next week."
            <br />
            AI: "Sarah has Tuesday at 3pm or Thursday at 10am. Which works?"
            <br />
            Patient: "Thursday."
            <br />
            AI: "Booked. You'll get a confirmation SMS."
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Done. No back-and-forth emails. No phone tag.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">After-Hours Patient Enquiries</h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Your clinic closes at 5pm. But patients call at 6pm, 8pm, on weekends.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Before AI: voicemail, they wait until Monday, they book with someone else.
            <br />
            With AI: instant answer, booking confirmed, patient secured.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            A physio clinic in Burnside estimated they were losing 6-8 new patients a month to after-hours call abandonment. Their AI caught 92% of those calls in the first month.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">NDIS Participant Enquiries</h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            NDIS calls can be time-consuming. "Are you registered?" "What do you charge?" "Can you do plan management?" "Do you do reports?"
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Your AI can answer all the standard NDIS questions upfront. It can even collect plan details and participant info before the patient arrives.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Recall and Reminder Systems</h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Missed appointments cost you money. They also disrupt other patients who could have had that slot.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Your AI can:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Send SMS reminders 24 hours before appointments</li>
            <li>Call patients who haven't booked in 6+ months: "Time for your check-up?"</li>
            <li>Follow up on discharge plans: "How's the exercise program going?"</li>
          </ul>
          <p className="text-body-mobile text-slate-700 md:text-body">
            A podiatry clinic in Norwood reduced their no-show rate from 18% to 4% just by adding AI phone reminders.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">New Patient Intake</h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            First-time patients need to provide a lot of info:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Personal details</li>
            <li>Medical history</li>
            <li>Referral information</li>
            <li>Insurance/NDIS details</li>
            <li>Reason for visit</li>
          </ul>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Your AI can collect all of this before the first appointment. The patient fills in a quick form sent via SMS, or answers questions over the phone. Your clinician walks into the appointment already informed.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Which Health Professions Use This?
          </h2>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Physiotherapists</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Sports injury bookings (often same-day or next-day)</li>
            <li>Post-surgery rehab scheduling</li>
            <li>NDIS participant management</li>
            <li>Workplace injury enquiries (workers comp)</li>
            <li>Telehealth vs in-person call routing</li>
          </ul>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Chiropractors</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Acute pain emergency bookings</li>
            <li>Maintenance appointment scheduling</li>
            <li>Family package enquiries</li>
            <li>X-ray and imaging coordination queries</li>
          </ul>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Occupational Therapists</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>NDIS plan enquiries (common and time-consuming)</li>
            <li>Home assessment bookings</li>
            <li>Equipment prescription queries</li>
            <li>Report request handling</li>
          </ul>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Speech Pathologists</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Paediatric appointment bookings (often needs specific times)</li>
            <li>Adult neuro rehab enquiries</li>
            <li>School holiday program scheduling</li>
            <li>Telehealth setup questions</li>
          </ul>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Podiatrists</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Diabetic foot care recurring bookings</li>
            <li>Sports injury appointments</li>
            <li>Orthotic fitting and review scheduling</li>
            <li>Nail surgery enquiries (often need explanation of process)</li>
          </ul>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Psychologists</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>New patient screening (brief, not clinical)</li>
            <li>Appointment bookings with specific practitioners</li>
            <li>Telehealth vs in-person preferences</li>
            <li>Medicare Mental Health Plan questions</li>
          </ul>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Dietitians</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Weight management program bookings</li>
            <li>Medical condition-specific diet enquiries (diabetes, IBD, etc.)</li>
            <li>NDIS dietetics queries</li>
            <li>Corporate wellness program enquiries</li>
          </ul>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Important: What AI Does NOT Do
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Your AI receptionist handles phone calls and admin. It does not:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Make clinical decisions</li>
            <li>Provide diagnosis or treatment advice</li>
            <li>Handle sensitive clinical discussions</li>
            <li>Replace licensed health professionals</li>
          </ul>
          <p className="text-body-mobile text-slate-700 md:text-body">
            If a caller needs clinical input, the AI takes detailed information and routes it to the appropriate clinician. It knows its lane.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            We build this into every script: "I can help with booking and general questions. For anything clinical, I'll connect you with [clinician name] or take a detailed message for callback."
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Compliance and Privacy
          </h2>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            We understand health data is sensitive. Here's how we handle it:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li><strong>Australian Privacy Principles:</strong> All systems comply with APP requirements</li>
            <li><strong>Data Storage:</strong> Call recordings and messages stored securely in Australia</li>
            <li><strong>Access Controls:</strong> Only authorised clinic staff can access patient call data</li>
            <li><strong>Consent:</strong> Callers are informed they're speaking with an automated system</li>
          </ul>
          <p className="text-body-mobile text-slate-700 md:text-body">
            We're not providing clinical services. We're providing phone answering and booking services. But we still treat patient information with the care it deserves.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Pricing for Clinics
          </h2>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Standard Clinic Setup: $1,500-2,000 one-off</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Appointment booking integration</li>
            <li>NDIS FAQ scripting</li>
            <li>After-hours call handling</li>
            <li>SMS reminder automation</li>
            <li>Staff training</li>
          </ul>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Advanced Setup: $2,000-3,000 one-off</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-body-mobile text-slate-700 md:text-body">
            <li>Everything in Standard, plus:</li>
            <li>Multiple clinician calendars</li>
            <li>Custom intake forms</li>
            <li>CRM/Practice management integration (Cliniko, Power Diary, etc.)</li>
            <li>Multi-language support if needed</li>
          </ul>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">Monthly Platform Fee: $600-1,200/month</h3>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Varies based on call volume and number of clinicians. A solo practitioner might be at $600-700/month. A multi-clinic operation with 5+ clinicians might be $1,000-1,200/month.
          </p>
          <p className="text-body-mobile text-slate-700 md:text-body">
            Still cheaper than even one day a week of a receptionist.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pt-12 md:pt-16">
        <div className="panel-light p-6 md:p-8">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            FAQ: Allied Health Questions
          </h2>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
            Is this HIPAA compliant?
          </h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            We're Australian-based, so we follow Australian Privacy Principles and the Privacy Act 1988, not HIPAA. But yes, we treat patient data with equivalent care. All data is stored in Australia with appropriate security controls.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
            Can it integrate with Cliniko/Power Diary/Practicetrack?
          </h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Yes, we can integrate with most common practice management systems used in Australia. The AI can check availability, book appointments, and pull patient info for incoming calls.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
            What if a patient has a complex question?
          </h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            The AI is trained to recognise when something needs human input. It takes detailed information and routes it to the right staff member. "I'll get [receptionist/clinician] to call you back within 2 hours with that information."
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
            Can it handle NDIS participant calls specifically?
          </h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Absolutely. We script specific NDIS flows: registration status, pricing (NDIS price limits), plan management options, report availability. Many allied health clinics in Adelaide get 40-50% of calls from NDIS participants.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
            Will older patients be comfortable with AI?
          </h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            We've been surprised by this. Most patients just want to book an appointment quickly. They don't care if it's human or AI as long as it works. And for those who struggle, the AI can transfer to a human receptionist immediately.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
            How long to set up?
          </h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Most clinics are running within 3-5 business days. We need to understand your appointment types, your clinician schedules, and your common patient questions. Then we build, test, and launch.
          </p>

          <h3 className="mb-3 text-h3-mobile text-slate-950 md:text-h3">
            Can it send appointment reminders?
          </h3>
          <p className="text-body-mobile text-slate-700 md:text-body mb-4">
            Yes. SMS reminders are standard. We can also do automated phone call reminders for patients who prefer that (especially older demographics).
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 pb-2 pt-12 text-center md:pt-16">
        <div className="panel-light p-8 md:p-10">
          <h2 className="mb-4 text-h2-mobile text-slate-950 md:text-h2">
            Ready to Get Off the Phone?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-mobile text-slate-600 md:text-body">
            Book a free clinic audit. We'll review your current call volume, estimate how many hours your staff spend on the phone, and show you what AI could handle.
          </p>
          <p className="mb-4 text-body-mobile text-slate-600 md:text-body">
            Or call 08 7100 9788
          </p>
        </div>
      </section>
    </div>
  );
}
