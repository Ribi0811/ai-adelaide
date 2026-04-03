import type { AuditAnswers, AuditScoreResult } from './scoring';

export type AuditRecommendation = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  roiEstimate: string;
  complexity: 'Easy' | 'Medium' | 'Advanced';
  monthlyCost: string;
  categoryKey: string;
};

const ROI_TEXT_BY_BUSINESS: Record<string, string> = {
  trade: 'Missed calls cost tradies $300-800 per lost job. AI call answering can capture 90%+ of otherwise lost opportunities.',
  'allied-health': 'No-shows cost clinics $120-150 per empty slot. Automated reminders can reduce no-shows by 30-50%.',
  default: 'Quote follow-up automation typically improves conversion by 15-25% and reduces lead leakage.',
};

function roiTextFromAnswers(answers: AuditAnswers): string {
  if (answers.q9 === 'trade') return ROI_TEXT_BY_BUSINESS.trade;
  if (answers.q9 === 'allied-health') return ROI_TEXT_BY_BUSINESS['allied-health'];
  return ROI_TEXT_BY_BUSINESS.default;
}

const recommendationMap: Record<string, Omit<AuditRecommendation, 'roiEstimate'>> = {
  communication: {
    categoryKey: 'communication',
    title: 'Capture every inbound enquiry',
    summary: 'Set up AI call handling and instant SMS fallback so no lead gets lost while you are on-site.',
    problem: 'Missed calls and after-hours enquiries are likely leaking high-intent jobs to competitors.',
    solution: 'Deploy an AI receptionist with call answering, qualification, and follow-up SMS workflows.',
    complexity: 'Easy',
    monthlyCost: '$150-$300',
  },
  'lead-management': {
    categoryKey: 'lead-management',
    title: 'Automate quote follow-up and lead tracking',
    summary: 'Install simple CRM automation so every quote gets structured follow-up and conversion tracking.',
    problem: 'Manual follow-up leads to inconsistent conversion and poor visibility of lost opportunities.',
    solution: 'Use CRM + AI reminders to trigger same-day follow-up, nurture sequences, and status tracking.',
    complexity: 'Medium',
    monthlyCost: '$200-$400',
  },
  'booking-admin': {
    categoryKey: 'booking-admin',
    title: 'Reduce admin load with automated bookings',
    summary: 'Shift repetitive admin into self-serve scheduling, reminders, and workflow automation.',
    problem: 'Phone-only booking and manual admin consume productive hours each week.',
    solution: 'Implement an online booking workflow with AI confirmations, reminders, and intake forms.',
    complexity: 'Medium',
    monthlyCost: '$150-$350',
  },
  'business-profile': {
    categoryKey: 'business-profile',
    title: 'Scale your systems for team growth',
    summary: 'Align your workflows to current team size so systems keep pace as enquiries increase.',
    problem: 'As teams grow, manual processes break and response speed drops.',
    solution: 'Adopt role-based automations for lead routing, response templates, and handover workflows.',
    complexity: 'Advanced',
    monthlyCost: '$250-$400',
  },
};

export function getRecommendations(scoreResult: AuditScoreResult, answers: AuditAnswers): AuditRecommendation[] {
  const roiEstimate = roiTextFromAnswers(answers);
  const sortedLowest = [...scoreResult.categoryScores].sort((a, b) => a.score - b.score).slice(0, 3);

  return sortedLowest.map((category) => {
    const template = recommendationMap[category.key] ?? recommendationMap['business-profile'];
    return {
      ...template,
      roiEstimate,
    };
  });
}
