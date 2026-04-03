type SendAuditEmailParams = {
  to: string;
  score: number;
  pdfBuffer: Buffer;
};

export async function sendAuditReportEmail({ to, score, pdfBuffer }: SendAuditEmailParams) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('Missing RESEND_API_KEY');

  const from = process.env.RESEND_FROM_EMAIL ?? 'AI Adelaide <reports@aiadelaide.com.au>';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Your AI Readiness Report — Score: ${score}/100`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height:1.5">
          <h2 style="margin-bottom:8px">Your AI Readiness Report is here</h2>
          <p>Your score: <strong>${score}/100</strong></p>
          <p>We attached your personalised report with recommendations and ROI opportunities.</p>
          <p>Your <strong>$47</strong> is credited toward our full <strong>$247 AI Audit</strong>.</p>
          <p><a href="https://aiadelaide.com.au/contact">Book your full audit →</a></p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>
          <p style="font-size:12px;color:#475569">AI Adelaide · Adelaide, South Australia</p>
        </div>
      `,
      attachments: [
        {
          filename: 'ai-readiness-report.pdf',
          content: pdfBuffer.toString('base64'),
        },
      ],
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Resend failed: ${response.status} ${text}`);
  }

  return response.json();
}
