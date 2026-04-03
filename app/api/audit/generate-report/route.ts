import { NextResponse } from 'next/server';
import { calculateAuditScore, type AuditAnswers } from '@/lib/audit/scoring';
import { getRecommendations } from '@/lib/audit/recommendations';
import { generateAuditPdf } from '@/lib/audit/pdf-generator';
import { sendAuditReportEmail } from '@/lib/audit/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, answers, sessionId } = body as {
      email?: string;
      answers?: AuditAnswers;
      sessionId?: string;
    };

    if (!email || !answers) {
      return NextResponse.json({ error: 'Missing email or answers' }, { status: 400 });
    }

    const score = calculateAuditScore(answers);
    const recommendations = getRecommendations(score, answers);

    const pdfBuffer = await generateAuditPdf({
      email,
      generatedAt: new Date().toLocaleDateString('en-AU'),
      answers,
      score,
      recommendations,
    });

    await sendAuditReportEmail({ to: email, score: score.totalScore, pdfBuffer });

    return NextResponse.json({ ok: true, sessionId: sessionId ?? null, score: score.totalScore });
  } catch (error) {
    console.error('generate-report error', error);
    return NextResponse.json({ error: 'Failed to generate report' }, { status: 500 });
  }
}
