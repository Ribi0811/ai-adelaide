import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Consulting Melbourne — Practical AI for Small Businesses',
  description: 'AI Adelaide helps Melbourne tradies, cafes, clinics & retail automate phone calls, bookings & admin. Remote setup. From $247 audit. Book your free call.',
}

export default function AIConsultingMelbournePage() {
  return (
    <main className="pt-28 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: '#09162b' }}>
          AI Consulting Melbourne — Practical AI for Melbourne Small Businesses
        </h1>

        <p className="text-lg text-zinc-700 mb-6">Running a small business in Melbourne is hard work. You&apos;re juggling jobs, staffing, bookings, stock, and admin. You don&apos;t need more buzzwords. You need fewer missed calls and less admin chaos.</p>
        <p className="text-lg text-zinc-700 mb-8">That&apos;s what we do. AI Adelaide helps Melbourne businesses set up practical AI systems remotely, so calls get answered, bookings happen, and evenings stop disappearing into admin.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4" style={{ color: '#09162b' }}>Why Melbourne Businesses Call Us</h2>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-lg text-zinc-700">
          <li><strong>Tradies</strong> across Melbourne can&apos;t always answer while on the tools.</li>
          <li><strong>Cafes and restaurants</strong> lose bookings during peak service rushes.</li>
          <li><strong>Retail stores</strong> get repetitive stock and opening-hours questions.</li>
          <li><strong>Clinics</strong> get overloaded with reschedules and reminder calls.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4" style={{ color: '#09162b' }}>What We Build (No Waffle)</h2>
        <p className="text-lg text-zinc-700 mb-4">We implement voice AI that works like a receptionist who never switches off.</p>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-lg text-zinc-700">
          <li>Answers every call, day and night</li>
          <li>Books straight into your calendar or booking tool</li>
          <li>Captures lead details and sends you instant summaries</li>
          <li>Handles common questions consistently</li>
          <li>Escalates edge cases when human follow-up is needed</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-3" style={{ color: '#09162b' }}>Typical Melbourne Use Cases</h3>
        <p className="text-lg text-zinc-700 mb-3"><strong>Tradies:</strong> Job enquiries get booked while you&apos;re still on-site.</p>
        <p className="text-lg text-zinc-700 mb-3"><strong>Cafes:</strong> Weekend table bookings and dietary notes are captured during rush hour.</p>
        <p className="text-lg text-zinc-700 mb-3"><strong>Clinics:</strong> Reschedules and reminders reduce phone tag and no-shows.</p>
        <p className="text-lg text-zinc-700 mb-8"><strong>Retail:</strong> After-hours calls about stock and sizes get answered even when closed.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4" style={{ color: '#09162b' }}>How It Works</h2>
        <h3 className="text-2xl font-semibold mt-6 mb-3" style={{ color: '#09162b' }}>1) AI Audit — $247</h3>
        <p className="text-lg text-zinc-700 mb-6">In 30 minutes, we identify where calls, bookings, and admin are leaking time and revenue. You get a written action plan with clear priorities and pricing.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3" style={{ color: '#09162b' }}>2) Implementation — $1,500 to $3,000</h3>
        <p className="text-lg text-zinc-700 mb-6">We build your custom AI call flow, integrate your calendar/CRM, test for accuracy and tone, and train your team.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3" style={{ color: '#09162b' }}>3) Ongoing Support — $500 to $1,500/month</h3>
        <p className="text-lg text-zinc-700 mb-8">Usage, updates, optimisation, and reporting. As your business changes, the AI changes with it.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4" style={{ color: '#09162b' }}>Remote Setup, Australian Support</h2>
        <p className="text-lg text-zinc-700 mb-6">We&apos;re Adelaide-based but work with Melbourne businesses every week. Setup is remote, quick, and practical: discovery call, implementation, handover, and ongoing support via phone, email, or WhatsApp.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4" style={{ color: '#09162b' }}>FAQ</h2>
        <p className="text-lg text-zinc-700 mb-3"><strong>Do I need to be technical?</strong> No. We handle setup and training.</p>
        <p className="text-lg text-zinc-700 mb-3"><strong>How long to go live?</strong> Usually 5 to 10 business days.</p>
        <p className="text-lg text-zinc-700 mb-3"><strong>What if AI can&apos;t answer something?</strong> It captures details and flags you for follow-up.</p>
        <p className="text-lg text-zinc-700 mb-8"><strong>Can I trial first?</strong> Start with the $247 audit and decide from there.</p>

        <div className="mt-12 p-8 bg-slate-50 rounded-2xl text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white transition-colors" style={{ backgroundColor: '#00D4AA' }}>
            Book Your Free 15-Min Call →
          </Link>
        </div>
      </div>
    </main>
  )
}
