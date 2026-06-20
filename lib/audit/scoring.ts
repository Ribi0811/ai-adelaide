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
  band: 'Critical' | 'Behind' | 'Building' | 'Healthy' | 'Optimised';
  interpretation: string;
  categoryScores: CategoryScore[];
  businessType: string;
};

const BAND_TEXT: Record<AuditScoreResult['band'], string> = {
  Critical: 'Significant digital gaps detected. Your business is likely losing customers to competitors with better websites, stronger Google rankings, and faster lead capture. The good news: the fixes are mostly quick wins.',
  Behind: 'You\u2019re leaving customers and revenue on the table daily. A focused investment in website, SEO, and lead-capture automation would move the needle fast \u2014 most improvements pay back within weeks.',
  Building: 'You\u2019ve got some foundations in place, but there\u2019s meaningful room to improve. Targeted work on visibility (SEO), conversion (website), and speed (automation) would compound quickly.',
  Healthy: 'Solid digital foundation. The opportunity now is optimisation \u2014 faster site, deeper SEO, smarter automation, more reviews. You\u2019re in the top third of Adelaide small businesses.',
  Optimised: 'You\u2019re operating at a level most small businesses never reach. Focus now is on compounding \u2014 advanced SEO, multi-channel automation, and turning systems into a real growth engine.',
};

const CATEGORY_MAX_RAW: Record<AuditCategory, number> = {
  website: 50,
  'seo-visibility': 50,
  'lead-capture': 50,
  'automation-admin': 50,
  'business-profile': 25,
};

export function getScoreBand(score: number): AuditScoreResult['band'] {
  if (score <= 30) return 'Critical';
  if (score <= 50) return 'Behind';
  if (score <= 70) return 'Building';
  if (score <= 85) return 'Healthy';
  return 'Optimised';
}

export function calculateAuditScore(answers: AuditAnswers): AuditScoreResult {
  const scoreByCategory = new Map<AuditCategory, CategoryScore>([
    ['website', { key: 'website', label: 'Website', score: 0, max: 25, rawScore: 0, rawMax: 50 }],
    ['seo-visibility', { key: 'seo-visibility', label: 'SEO & Google Visibility', score: 0, max: 25, rawScore: 0, rawMax: 50 }],
    ['lead-capture', { key: 'lead-capture', label: 'Lead Capture', score: 0, max: 25, rawScore: 0, rawMax: 50 }],
    ['automation-admin', { key: 'automation-admin', label: 'Automation & Admin', score: 0, max: 25, rawScore: 0, rawMax: 50 }],
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
