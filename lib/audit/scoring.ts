import { AUDIT_QUESTIONS, type AuditCategory } from './questions';

export type AuditAnswers = Record<string, string>;

export type CategoryScore = {
  key: AuditCategory;
  label: string;
  score: number;
  max: number;
  rawScore: number;
  rawMax: number;
};

export type AuditScoreResult = {
  totalScore: number;
  maxScore: number;
  band: 'Critical' | 'Behind' | 'Average' | 'Good' | 'Excellent';
  interpretation: string;
  categoryScores: CategoryScore[];
  businessType: string;
};

const BAND_TEXT: Record<AuditScoreResult['band'], string> = {
  Critical: 'Massive opportunity detected — your business is likely leaking significant revenue that AI can recover quickly.',
  Behind: 'You are leaving money on the table daily. A few focused automations could move the needle fast.',
  Average: 'You have some systems in place, but there is still meaningful room to improve with AI support.',
  Good: 'You have a solid foundation. AI can now optimise speed, consistency, and conversion.',
  Excellent: 'You are already highly automated. Focus on advanced optimisation and scaling opportunities.',
};

const CATEGORY_MAX_RAW: Record<AuditCategory, number> = {
  communication: 75,
  'lead-management': 75,
  'booking-admin': 50,
  'business-profile': 25,
};

export function getScoreBand(score: number): AuditScoreResult['band'] {
  if (score <= 30) return 'Critical';
  if (score <= 50) return 'Behind';
  if (score <= 70) return 'Average';
  if (score <= 85) return 'Good';
  return 'Excellent';
}

export function calculateAuditScore(answers: AuditAnswers): AuditScoreResult {
  const scoreByCategory = new Map<AuditCategory, CategoryScore>([
    ['communication', { key: 'communication', label: 'Communication', score: 0, max: 25, rawScore: 0, rawMax: 75 }],
    ['lead-management', { key: 'lead-management', label: 'Lead Management', score: 0, max: 25, rawScore: 0, rawMax: 75 }],
    ['booking-admin', { key: 'booking-admin', label: 'Booking & Admin', score: 0, max: 25, rawScore: 0, rawMax: 50 }],
    ['business-profile', { key: 'business-profile', label: 'Business Profile', score: 0, max: 25, rawScore: 0, rawMax: 25 }],
  ]);

  for (const question of AUDIT_QUESTIONS) {
    const selectedValue = answers[question.id];
    const selectedOption = question.options.find((option) => option.value === selectedValue);
    if (!selectedOption) continue;

    const bucket = scoreByCategory.get(question.category);
    if (bucket) {
      bucket.rawScore += selectedOption.points;
    }
  }

  const categoryScores = Array.from(scoreByCategory.values()).map((category) => {
    const normalisedCategory = Math.round((category.rawScore / CATEGORY_MAX_RAW[category.key]) * 25);
    return {
      ...category,
      score: normalisedCategory,
      rawMax: CATEGORY_MAX_RAW[category.key],
    };
  });

  const totalScore = categoryScores.reduce((sum, category) => sum + category.score, 0);
  const band = getScoreBand(totalScore);

  const businessTypeLabel = AUDIT_QUESTIONS.find((q) => q.id === 'q9')?.options.find(
    (o) => o.value === answers.q9,
  )?.label;

  return {
    totalScore,
    maxScore: 100,
    band,
    interpretation: BAND_TEXT[band],
    categoryScores,
    businessType: businessTypeLabel ?? 'Other',
  };
}
