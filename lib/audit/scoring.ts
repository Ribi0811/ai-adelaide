import { AUDIT_QUESTIONS, type AuditCategory } from './questions';

export type AuditAnswers = Record<string, string>;
type ScoredAuditCategory = Exclude<AuditCategory, 'business-profile'>;

export type CategoryScore = {
  key: ScoredAuditCategory;
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
  scoreNote: string;
};

export const AUDIT_SCORE_NOTE =
  'Based on your answers about four areas of your business. This is not an independent assessment or a comparison with other businesses.';

const BAND_TEXT: Record<AuditScoreResult['band'], string> = {
  Critical: 'Your answers point to significant digital gaps across the website, visibility, lead capture and automation areas. Start with the practical fixes that remove the biggest barriers to enquiries.',
  Behind: 'Your answers suggest meaningful room to improve. Review the website, SEO and lead-capture baseline first, then prioritise changes you can measure against real enquiries and response times.',
  Building: 'You have some foundations in place, with clear room to improve. Targeted work on visibility, conversion and automation can be assessed against your own business baseline.',
  Healthy: 'Your answers indicate a solid foundation. Review the remaining opportunities in site speed, visibility, lead capture and automation using your own baseline.',
  Optimised: 'Your answers indicate strong foundations across the four areas. Focus on the next measurable improvement and keep checking the result against your own baseline.',
};

const SCORED_CATEGORIES: ReadonlyArray<{ key: ScoredAuditCategory; label: string }> = [
  { key: 'website', label: 'Website' },
  { key: 'seo-visibility', label: 'SEO & Google Visibility' },
  { key: 'lead-capture', label: 'Lead Capture' },
  { key: 'automation-admin', label: 'Automation & Admin' },
];

const CATEGORY_MAX_RAW = Object.fromEntries(
  SCORED_CATEGORIES.map(({ key }) => [
    key,
    AUDIT_QUESTIONS
      .filter((question) => question.scored && question.category === key)
      .reduce((sum, question) => sum + Math.max(0, ...question.options.map((option) => option.points)), 0),
  ]),
) as Record<ScoredAuditCategory, number>;

export function getScoreBand(score: number): AuditScoreResult['band'] {
  if (score <= 30) return 'Critical';
  if (score <= 50) return 'Behind';
  if (score <= 70) return 'Building';
  if (score <= 85) return 'Healthy';
  return 'Optimised';
}

export function calculateAuditScore(answers: AuditAnswers | null | undefined): AuditScoreResult {
  const safeAnswers = answers && typeof answers === 'object' ? answers : {};
  const scoreByCategory = new Map<Exclude<AuditCategory, 'business-profile'>, CategoryScore>(
    SCORED_CATEGORIES.map((category) => [
      category.key,
      {
        key: category.key,
        label: category.label,
        score: 0,
        max: 25,
        rawScore: 0,
        rawMax: CATEGORY_MAX_RAW[category.key],
      },
    ]),
  );

  for (const question of AUDIT_QUESTIONS) {
    if (!question.scored) continue;
    if (question.category === 'business-profile') continue;

    const selectedValue = safeAnswers[question.id];
    const selectedOption = question.options.find((option) => option.value === selectedValue);
    if (!selectedOption) continue;

    const bucket = scoreByCategory.get(question.category);
    if (bucket) {
      bucket.rawScore += selectedOption.points;
    }
  }

  const categoryScores = Array.from(scoreByCategory.values()).map((category) => {
    const normalisedCategory = Math.min(
      25,
      Math.max(0, Math.round((category.rawScore / CATEGORY_MAX_RAW[category.key]) * 25)),
    );
    return {
      ...category,
      score: normalisedCategory,
      rawMax: CATEGORY_MAX_RAW[category.key],
    };
  });

  const totalScore = categoryScores.reduce((sum, category) => sum + category.score, 0);
  const band = getScoreBand(totalScore);

  const businessTypeLabel = AUDIT_QUESTIONS.find((q) => q.id === 'q9')?.options.find(
    (o) => o.value === safeAnswers.q9,
  )?.label;

  return {
    totalScore,
    maxScore: 100,
    band,
    interpretation: BAND_TEXT[band],
    categoryScores,
    businessType: businessTypeLabel ?? 'Other',
    scoreNote: AUDIT_SCORE_NOTE,
  };
}
