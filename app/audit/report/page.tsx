'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { jsPDF } from 'jspdf';
import { AUDIT_EMAIL_KEY, AUDIT_STORAGE_KEY } from '@/lib/audit/questions';
import { calculateAuditScore, type AuditAnswers } from '@/lib/audit/scoring';
import { getRecommendations } from '@/lib/audit/recommendations';

export default function AuditReportPage() {
  const [email, setEmail] = useState('');
  const [answers, setAnswers] = useState<AuditAnswers | null>(null);
  const [status, setStatus] = useState<'idle' | 'generating' | 'done' | 'error'>('idle');

  useEffect(() => {
    const storedEmail = localStorage.getItem(AUDIT_EMAIL_KEY);
    const storedAnswers = localStorage.getItem(AUDIT_STORAGE_KEY);
    if (storedEmail) setEmail(storedEmail);
    if (storedAnswers) setAnswers(JSON.parse(storedAnswers));
  }, []);

  const score = useMemo(() => (answers ? calculateAuditScore(answers) : null), [answers]);
  const recommendations = useMemo(() => (score && answers ? getRecommendations(score, answers) : []), [score, answers]);

  const handleGeneratePdf = () => {
    if (!score) return;

    try {
      setStatus('generating');
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      let y = 56;

      const write = (text: string, size = 11, color: [number, number, number] = [15, 23, 42], gap = 18) => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(size);
        doc.setTextColor(color[0], color[1], color[2]);
        const lines = doc.splitTextToSize(text, 490);
        doc.text(lines, 52, y);
        y += lines.length * (size + 3) + gap;
        if (y > 760) {
          doc.addPage();
          y = 56;
        }
      };

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(24);
      doc.setTextColor(0, 184, 148);
      doc.text('AI Adelaide - Digital Health Report', 52, y);
      y += 34;

      write(`Generated: ${new Date().toLocaleDateString('en-AU')}`, 10, [71, 85, 105], 8);
      write(`Email: ${email || 'Not provided'}`, 10, [71, 85, 105], 16);

      doc.setDrawColor(226, 232, 240);
      doc.line(52, y, 545, y);
      y += 22;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(15, 23, 42);
      doc.text('Your Score', 52, y);
      y += 24;
      write(`${score.totalScore}/100 (${score.band})`, 20, [15, 23, 42], 8);
      write(score.interpretation, 11, [15, 23, 42], 8);

      y += 6;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('Category Breakdown', 52, y);
      y += 24;
      score.categoryScores.forEach((category) => {
        write(`${category.label}: ${category.score}/25`, 12, [15, 23, 42], 6);
      });

      y += 10;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('Top Recommendations', 52, y);
      y += 24;
      recommendations.slice(0, 3).forEach((item, index) => {
        write(`${index + 1}. ${item.title}`, 12, [15, 23, 42], 4);
        write(item.summary, 11, [51, 65, 85], 4);
        write(`Estimated ROI: ${item.roiEstimate}`, 10, [71, 85, 105], 8);
      });

      y += 8;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('Next Step: Book your $247 Efficiency Audit at aiadelaide.com.au/contact', 52, y);

      doc.save('ai-adelaide-audit-report.pdf');
      setStatus('done');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-10 sm:px-6 sm:py-16">
      <div className="w-full max-w-2xl">
        <section className="panel-light p-6 sm:p-8">
        <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Generate Your Full PDF Report</h1>
        <p className="mt-3 text-sm text-slate-700">
          Thanks for purchasing the detailed digital health report. Click below to generate and download your personalised PDF covering websites, SEO, and AI automation for your Adelaide business.
        </p>

        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          {score ? (
            <>
              <p>
                Score summary: <strong>{score.totalScore}/100 ({score.band})</strong>
              </p>
              {email ? <p className="mt-1">Email: {email}</p> : null}
            </>
          ) : (
            <>
              <p>No quiz answers found yet.</p>
              <Link href="/audit/quiz" className="btn-secondary mt-3 inline-flex">Take the quiz first</Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={handleGeneratePdf}
          disabled={!score || status === 'generating'}
          className="btn-primary mt-6 w-full disabled:opacity-50"
        >
          {status === 'generating' ? 'Generating PDF...' : 'Download My PDF Report'}
        </button>

        {status === 'done' ? <p className="mt-3 text-sm text-[#00B894]">Done! Your report has been downloaded.</p> : null}
        {status === 'error' ? <p className="mt-3 text-sm text-red-600">Something went wrong. Please try again.</p> : null}

        <div className="mt-6 rounded-2xl border border-[#00D4AA]/30 bg-[#00D4AA]/10 p-4">
          <p className="text-sm text-slate-800">
            Want help implementing this roadmap? Book a free chat and we can scope your next website, SEO, or AI automation win.
          </p>
          <Link href="/contact" className="btn-primary mt-4 inline-flex w-full justify-center">
            Book Free Chat →
          </Link>
        </div>
      </section>
      </div>
    </main>
  );
}
