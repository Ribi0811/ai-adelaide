import PDFDocument from 'pdfkit';
import type { AuditAnswers, AuditScoreResult } from './scoring';
import type { AuditRecommendation } from './recommendations';

export type AuditReportPayload = {
  email: string;
  generatedAt: string;
  answers: AuditAnswers;
  score: AuditScoreResult;
  recommendations: AuditRecommendation[];
};

const BRAND = {
  primary: '#00D4AA',
  dark: '#0F172A',
  muted: '#475569',
  border: '#E2E8F0',
};

function drawSectionTitle(doc: PDFKit.PDFDocument, title: string) {
  doc.moveDown(0.6);
  doc.font('Helvetica-Bold').fontSize(16).fillColor(BRAND.primary).text(title);
  doc.moveDown(0.2);
  doc.strokeColor(BRAND.border).lineWidth(1).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
  doc.moveDown(0.4);
}

function ensurePageSpace(doc: PDFKit.PDFDocument, needed = 140) {
  if (doc.y + needed > doc.page.height - 70) {
    doc.addPage();
  }
}

export async function generateAuditPdf(payload: AuditReportPayload): Promise<Buffer> {
  const { score, recommendations, generatedAt, email } = payload;

  return new Promise<Buffer>((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    const chunks: Buffer[] = [];

    doc.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    doc.font('Helvetica-Bold').fontSize(28).fillColor(BRAND.primary).text('AI Readiness Report');
    doc.moveDown(0.3);
    doc.font('Helvetica').fontSize(11).fillColor(BRAND.dark).text(`Prepared for: ${score.businessType}`);
    doc.text(`Email: ${email}`);
    doc.text(`Generated: ${generatedAt}`);
    doc.text('By AI Adelaide');

    drawSectionTitle(doc, 'Score Overview');
    doc.font('Helvetica-Bold').fontSize(14).fillColor(BRAND.dark).text(`Readiness Band: ${score.band}`);
    doc.moveDown(0.2);
    doc.font('Helvetica-Bold').fontSize(44).fillColor(BRAND.dark).text(`${score.totalScore}/100`);
    doc.font('Helvetica').fontSize(11).fillColor(BRAND.dark).text(score.interpretation);

    drawSectionTitle(doc, 'Category Breakdown');
    for (const category of score.categoryScores) {
      ensurePageSpace(doc, 70);
      doc.font('Helvetica-Bold').fontSize(12).fillColor(BRAND.dark).text(category.label);
      doc.font('Helvetica').fontSize(11).fillColor(BRAND.dark).text(`Category Score: ${category.score}/25`);
      doc.moveDown(0.2);
    }

    drawSectionTitle(doc, 'Top 3 Personalised Recommendations');
    recommendations.slice(0, 3).forEach((item, index) => {
      ensurePageSpace(doc, 130);
      doc.font('Helvetica-Bold').fontSize(12).fillColor(BRAND.dark).text(`${index + 1}. ${item.title}`);
      doc.moveDown(0.15);
      doc.font('Helvetica').fontSize(11).fillColor(BRAND.dark).text(item.summary);
      doc.moveDown(0.1);
      doc.text(`Problem: ${item.problem}`);
      doc.text(`AI Solution: ${item.solution}`);
      doc.text(`Estimated ROI: ${item.roiEstimate}`);
      doc.text(`Complexity: ${item.complexity} • Estimated monthly cost: ${item.monthlyCost}`);
      doc.moveDown(0.4);
    });

    drawSectionTitle(doc, 'Next Steps');
    doc.font('Helvetica').fontSize(11).fillColor(BRAND.dark)
      .text('Your $47 assessment fee is credited toward our $247 Full AI Audit.');
    doc.moveDown(0.2);
    doc.text('The full audit includes:');
    doc.text('• On-site or remote process analysis');
    doc.text('• Tailored implementation roadmap');
    doc.text('• Vendor/tool recommendations for your budget');
    doc.moveDown(0.4);
    doc.font('Helvetica-Bold').text('Book your full audit: https://aiadelaide.com.au/contact');
    doc.moveDown(0.5);
    doc.font('Helvetica').fontSize(10).fillColor(BRAND.muted).text('AI Adelaide · Adelaide, South Australia');

    doc.end();
  });
}
