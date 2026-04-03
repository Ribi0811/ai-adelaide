'use client';

import { useState } from 'react';

export default function AIReceptionistAdelaidePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-slate-900">
            AI Adelaide
          </a>
          <a
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="text-teal-200">📞</span> AI Phone Answering
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Receptionist Adelaide:<br />
            The Smartest Way to Never Miss Another Call
          </h1>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8">
            Discover how Adelaide businesses use AI receptionists to answer every call, 24/7.
            Learn the real cost of missed calls and how AI phone answering works.
          </p>
          <a
            href="/tools/ai-readiness-calculator"
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors shadow-lg"
          >
            Take the AI Readiness Quiz →
          </a>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Cost of Missed Calls */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            The Call You Missed Was Worth $1,200
          </h2>
          <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-teal-600">
            <p className="text-lg text-slate-600 leading-relaxed">
              You were on a job. Your phone rang. You didn't answer.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              By the time you called back, they'd already booked with someone who picked up.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              That one missed call cost you roughly <strong className="text-slate-900">$1,200 in lost revenue</strong>. And it happens more often than you think.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg my-8">
              <p className="text-amber-800 font-medium">
                The average small business in Adelaide misses 62% of their incoming calls. Most business owners don't find out until it's too late — when they check their voicemail at 7pm and realise three potential customers went elsewhere that afternoon.
              </p>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              There's a better way.
            </p>
          </div>
        </section>

        {/* What is an AI Receptionist */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Is an AI Receptionist?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed">
              An AI receptionist is a computer that answers your business phone calls — professionally, 24 hours a day, 7 days a week. It sounds like a human, understands what callers need, captures their details, and makes sure you never miss a genuine enquiry again.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Unlike a voicemail — where <strong className="text-slate-900">85% of callers never leave a message</strong> — an AI receptionist engages with every caller. It answers common questions, books appointments, and sends you a summary of every conversation.
            </p>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 my-8">
              <p className="text-teal-800 font-bold text-lg mb-2">No waiting. No missed calls. No apologising.</p>
              <p className="text-teal-700">An AI receptionist handles every call professionally so you can focus on your work.</p>
            </div>
          </div>
        </section>

        {/* Why Adelaide */}
        <section className="mb-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">
            Why Adelaide Businesses Are Switching
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Adelaide's business landscape is unique. Tradies on tools, physiotherapists between patients, electricians on job sites — nobody can answer the phone every time it rings.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Yet phone enquiries are often the highest-intent leads. Someone calling your business is ready to book. They're not browsing. They're not comparing. They're asking — and whoever answers first usually wins the job.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-bold text-lg mb-2">Tradies</h3>
              <p className="text-slate-300 text-sm">Can't answer calls while on tools. An AI receptionist catches every enquiry, even at 7am or 9pm.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-bold text-lg mb-2">Health Practices</h3>
              <p className="text-slate-300 text-sm">Miss calls between patients. AI handles intake calls so your team focuses on care.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🏪</div>
              <h3 className="font-bold text-lg mb-2">Local Services</h3>
              <p className="text-slate-300 text-sm">Lose leads to competitors who answer faster. AI means you're always the one who picked up.</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How AI Phone Answering Works
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Here's what happens when you connect an AI receptionist to your business number:
          </p>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Your phone rings',
                desc: "A caller dials your business number. Instead of ringing endlessly or going to voicemail, your AI receptionist answers — typically within one or two rings."
              },
              {
                step: '2',
                title: 'The AI greets professionally',
                desc: 'Your caller hears a friendly, Australian-trained voice. Something like: "Thanks for calling [Your Business]. This is your AI receptionist. How can I help?"'
              },
              {
                step: '3',
                title: 'The caller explains what they need',
                desc: 'The AI understands natural speech. A caller might say: "Hi, I need a plumber for a burst pipe at my place in Morphett Vale." The AI captures this — and everything else that matters.'
              },
              {
                step: '4',
                title: 'You receive a summary',
                desc: 'Within minutes, you get a message summarising the call with all the details — name, phone, service needed, urgency, and best time to call back.'
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 mt-8">
            <p className="text-slate-800 font-medium mb-1">You call back, you get the job.</p>
            <p className="text-slate-600 text-sm">It's that simple.</p>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Does an AI Receptionist Cost in Adelaide?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Compare the alternatives:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="px-6 py-4 font-bold text-slate-900">Solution</th>
                  <th className="px-6 py-4 font-bold text-slate-900">Monthly Cost</th>
                  <th className="px-6 py-4 font-bold text-slate-900">What You Get</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-4 text-slate-600">Part-time receptionist</td>
                  <td className="px-6 py-4 text-red-600 font-medium">$3,500+/month</td>
                  <td className="px-6 py-4 text-slate-600">Limited hours, human error</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-600">Call answering service</td>
                  <td className="px-6 py-4 text-amber-600 font-medium">$300-$800/month</td>
                  <td className="px-6 py-4 text-slate-600">Often offshore, generic scripts</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-600">Voicemail</td>
                  <td className="px-6 py-4 text-slate-500 font-medium">Free</td>
                  <td className="px-6 py-4 text-slate-600">85% of callers never leave a message</td>
                </tr>
                <tr className="bg-teal-50">
                  <td className="px-6 py-4 font-bold text-slate-900">AI Receptionist</td>
                  <td className="px-6 py-4 text-teal-700 font-bold text-xl">$197/month</td>
                  <td className="px-6 py-4 text-teal-700 font-medium">Every call, 24/7, Australian-trained</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mt-6">
            <p className="text-teal-800 font-medium">
              For less than the cost of one missed call per week, an AI receptionist covers your phone 24 hours a day.
            </p>
            <p className="text-teal-700 text-sm mt-1">
              One extra job per month — just one — covers the entire cost.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Common Questions Adelaide Businesses Ask
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Will customers know it's not a real person?",
                a: "Most callers can't tell. The technology has advanced significantly. The key is making sure the AI sounds natural and routes calls appropriately. If a caller asks to speak to a human, the AI transfers immediately."
              },
              {
                q: "What if the AI makes a mistake?",
                a: "The AI doesn't make outbound calls — it only receives and captures. You review every enquiry before calling back. Think of it as a very efficient receptionist who writes detailed notes but never books anything without your approval."
              },
              {
                q: "Can it handle my specific industry?",
                a: "Yes. The AI can be configured for your industry language, common questions, pricing, and booking workflows. A plumber's AI receptionist handles burst pipes and quote requests differently than a dentist's AI receptionist handles appointment bookings."
              },
              {
                q: "Do I need new equipment?",
                a: "No. The AI receptionist works with your existing phone number. No new hardware, no complicated setup. Most businesses are running within 24 hours of sign-up."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">{item.q}</h3>
                <p className="text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Stop Missing Calls?
          </h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            The businesses that win in Adelaide aren't the ones with the biggest advertising budget. They're the ones who answer the phone when it rings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tools/ai-readiness-calculator"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors shadow-lg"
            >
              Take the AI Readiness Quiz →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition-colors border-2 border-teal-500"
            >
              Book a Free Consultation
            </a>
          </div>
          <p className="text-teal-200 text-sm mt-6">
            Join 50+ Adelaide businesses who trust AI Adelaide
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm">
          <p>AI Adelaide — AI Automation for Adelaide Tradies & Health Practices</p>
          <p className="mt-2">© 2026 AI Adelaide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
