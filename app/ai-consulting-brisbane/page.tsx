import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Consulting Brisbane — Stop Losing Leads While You Sleep',
  description: 'Brisbane tradies, clinics & retailers: AI Adelaide automates your missed calls & bookings. Remote setup. From $247 audit. Stop losing jobs to competitors.',
}

export default function AIConsultingBrisbanePage() {
  return (
    <main className="pt-28 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: '#09162b' }}>
          AI Consulting Brisbane — Stop Losing Leads While You Sleep
        </h1>

        <p className="text-lg text-zinc-700 mb-6">If you&apos;re flat out all day and still missing calls, you&apos;re losing work to the next business on Google. That&apos;s the real cost of phone chaos in Brisbane.</p>
        <p className="text-lg text-zinc-700 mb-8">AI Adelaide helps Brisbane tradies, clinics, and retailers automate call handling and bookings, without hiring extra staff or adding more admin to your nights.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4" style={{ color: '#09162b' }}>What Brisbane Businesses Need</h2>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-lg text-zinc-700">
          <li>Reliable call answering while teams are on-site or on the floor</li>
          <li>Faster quote and booking workflows</li>
          <li>Less phone tag and fewer no-shows</li>
          <li>After-hours lead capture without extra wage cost</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4" style={{ color: '#09162b' }}>What We Implement</h2>
        <p className="text-lg text-zinc-700 mb-4">We build AI receptionist systems that:</p>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-lg text-zinc-700">
          <li>Answer 24/7, including weekends and public holidays</li>
          <li>Book directly into your calendar and scheduling tools</li>
          <li>Capture caller intent, details, and urgency</li>
          <li>Send summaries and reminders automatically</li>
          <li>Escalate complex cases for human follow-up</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-3" style={{ color: '#09162b' }}>Examples</h3>
        <p className="text-lg text-zinc-700 mb-3"><strong>Tradies:</strong> Enquiries get booked while you&apos;re still on the tools.</p>
        <p className="text-lg text-zinc-700 mb-3"><strong>Clinics:</strong> Booking and rescheduling calls are handled without front-desk bottlenecks.</p>
        <p className="text-lg text-zinc-700 mb-3"><strong>Retail:</strong> After-hours stock and availability questions still convert into sales.</p>
        <p className="text-lg text-zinc-700 mb-8"><strong>Hospitality:</strong> Peak-time calls don&apos;t get ignored during service rush.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4" style={{ color: '#09162b' }}>Our Process</h2>
        <h3 className="text-2xl font-semibold mt-6 mb-3" style={{ color: '#09162b' }}>Step 1: $247 Audit</h3>
        <p className="text-lg text-zinc-700 mb-6">We identify where your business is losing leads, time, and margin, then deliver a practical AI action plan.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3" style={{ color: '#09162b' }}>Step 2: Build & Setup ($1,500 to $3,000)</h3>
        <p className="text-lg text-zinc-700 mb-6">We configure voice AI, integrations, scripts, testing, and training so your team can use it immediately.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3" style={{ color: '#09162b' }}>Step 3: Ongoing Support ($500 to $1,500/month)</h3>
        <p className="text-lg text-zinc-700 mb-8">We handle maintenance, improvements, reporting, and ongoing optimisation as your operation scales.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4" style={{ color: '#09162b' }}>FAQ</h2>
        <p className="text-lg text-zinc-700 mb-3"><strong>How fast can this go live?</strong> Most Brisbane setups launch within 5 to 10 business days.</p>
        <p className="text-lg text-zinc-700 mb-3"><strong>Do I need new software?</strong> Usually no. We integrate with what you already use.</p>
        <p className="text-lg text-zinc-700 mb-3"><strong>What if the AI gets stuck?</strong> It captures details and routes to your team.</p>
        <p className="text-lg text-zinc-700 mb-8"><strong>Is there lock-in?</strong> Ongoing support is month-to-month.</p>

        <div className="mt-12 p-8 bg-slate-50 rounded-2xl text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white transition-colors" style={{ backgroundColor: '#00D4AA' }}>
            Book Your Free 15-Min Call →
          </Link>
        </div>
      </div>
    </main>
  )
}
