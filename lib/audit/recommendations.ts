import type { AuditAnswers, AuditScoreResult } from './scoring';

export type AuditRecommendation = {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  measurementGuidance: string;
  complexity: 'Easy' | 'Medium' | 'Advanced';
  monthlyCost: string;
  categoryKey: string;
};

const MEASUREMENT_GUIDANCE_BY_BUSINESS: Record<string, string> = {
  trade: 'Measure missed calls, qualified website enquiries and quote follow-up from your current baseline. Value depends on lead volume, average job, close rate and response process.',
  'allied-health': 'Measure completed bookings, no-shows, waitlist fills and qualified patient enquiries from the clinic\u2019s current baseline.',
  hospitality: 'Measure direct bookings, menu views, calls and direction requests. Compare the owned journey with platform fees using real transaction data.',
  retail: 'Measure calls, direction requests, product enquiries and tracked in-store actions rather than applying an invented walk-in uplift.',
  beauty: 'Measure completed online bookings, booking abandonment and relevant local-search enquiries before and after the work.',
  default: 'Start with your current enquiry, booking and search numbers, then judge the work against measurable business outcomes.',
};

function measurementGuidanceFromAnswers(answers: AuditAnswers): string {
  if (answers.q9 === 'trade') return MEASUREMENT_GUIDANCE_BY_BUSINESS.trade;
  if (answers.q9 === 'allied-health') return MEASUREMENT_GUIDANCE_BY_BUSINESS['allied-health'];
  if (answers.q9 === 'hospitality') return MEASUREMENT_GUIDANCE_BY_BUSINESS.hospitality;
  if (answers.q9 === 'retail') return MEASUREMENT_GUIDANCE_BY_BUSINESS.retail;
  if (answers.q9 === 'beauty') return MEASUREMENT_GUIDANCE_BY_BUSINESS.beauty;
  return MEASUREMENT_GUIDANCE_BY_BUSINESS.default;
}

const recommendationMap: Record<string, Omit<AuditRecommendation, 'measurementGuidance'>> = {
  website: {
    categoryKey: 'website',
    title: 'Improve the website enquiry path',
    summary: 'Check that visitors can find your services, use your site on a phone and contact you easily. Start with missing pages or broken enquiry steps.',
    problem: 'Visitors may leave before they find the right service or contact step. Check the site and enquiry path before deciding what to change.',
    solution: 'Review mobile performance, service pages, analytics and completed enquiries. Fix the clearest problem first and check whether the change helps.',
    complexity: 'Easy',
    monthlyCost: 'Quote after reviewing your current setup',
  },
  'seo-visibility': {
    categoryKey: 'seo-visibility',
    title: 'Strengthen local search visibility',
    summary: 'Check which services and suburbs bring useful enquiries, then improve the page or business-profile detail that supports that demand.',
    problem: 'Search visibility depends on the starting position, competition and the page that matches the search. Check the actual gap before adding more content.',
    solution: 'Review Search Console, your Google Business Profile and relevant pages. Improve the clearest gap, then track qualified enquiries rather than promise a ranking.',
    complexity: 'Medium',
    monthlyCost: 'Quote after reviewing your current setup',
  },
  'lead-capture': {
    categoryKey: 'lead-capture',
    title: 'Make lead capture easier to measure',
    summary: 'Check the path from first contact to a qualified conversation, then fix the response or follow-up step where enquiries are stalling.',
    problem: 'Enquiries can stall through missed calls, unclear forms or slow follow-up. Check the channel and current response times first.',
    solution: 'Review forms, calls, bookings and response times. Add the follow-up or routing that fits your workflow and measure qualified enquiries.',
    complexity: 'Easy',
    monthlyCost: 'Quote after reviewing your current setup',
  },
  'automation-admin': {
    categoryKey: 'automation-admin',
    title: 'Reduce repeat admin safely',
    summary: 'List the repetitive work that consumes time, then choose one task with a clear human handoff and a way to measure the result.',
    problem: 'Automation works best when the task, exceptions and owner are clear. Measure avoidable work before choosing a tool.',
    solution: 'Record admin time and failure points. Try one task, keep a human review path and compare the result with your current numbers.',
    complexity: 'Medium',
    monthlyCost: 'Quote after reviewing your current setup',
  },
  'business-profile': {
    categoryKey: 'business-profile',
    title: 'Build a system that scales with your team',
    summary: 'As your team grows, your digital systems should keep pace \u2014 not break. Role-based routing, shared inboxes, automated handovers.',
    problem: 'Manual processes break as you hire. Response time drops, leads fall through cracks, team members duplicate work.',
    solution: 'Role-based lead routing, shared inbox, automated handovers, response templates, performance dashboards. We configure it for your current team size and growth path.',
    complexity: 'Advanced',
    monthlyCost: 'Quote after reviewing your current setup',
  },
};

const strongRecommendationMap: Record<string, Omit<AuditRecommendation, 'measurementGuidance'>> = {
  website: {
    categoryKey: 'website',
    title: 'Maintain what is working on your website',
    summary: 'Your answers suggest the website is already a strength. Check mobile performance and enquiry data before changing it.',
    problem: 'A high self-reported score does not prove that every page converts or that a rebuild is needed.',
    solution: 'Review analytics, search entry pages, mobile performance and completed enquiries. Fix a measured problem and leave working parts alone.',
    complexity: 'Medium',
    monthlyCost: 'Quote after reviewing your current setup',
  },
  'seo-visibility': {
    categoryKey: 'seo-visibility',
    title: 'Protect and extend current visibility',
    summary: 'Your answers suggest search visibility is already a strength. Check which searches bring useful enquiries before adding more pages.',
    problem: 'A strong self-reported position is not an independent ranking or demand assessment.',
    solution: 'Review Search Console, your Google Business Profile and enquiry sources. Improve the clearest opportunity and track the result over time.',
    complexity: 'Medium',
    monthlyCost: 'Quote after reviewing your current setup',
  },
  'lead-capture': {
    categoryKey: 'lead-capture',
    title: 'Keep lead capture measurable',
    summary: 'Your answers suggest the enquiry path is already a strength. Keep the working flow and monitor response, qualification and booking outcomes.',
    problem: 'A high self-reported score does not establish the quality or profitability of every enquiry channel.',
    solution: 'Review calls, forms, bookings and follow-up against current numbers. Improve only the stage where qualified enquiries are actually stalling.',
    complexity: 'Medium',
    monthlyCost: 'Quote after reviewing your current setup',
  },
  'automation-admin': {
    categoryKey: 'automation-admin',
    title: 'Refine automation around real work',
    summary: 'Your answers suggest automation is already a strength. Keep human handoffs clear and measure the next task before adding more.',
    problem: 'A high self-reported score does not confirm reliability, safety or time saved across every workflow.',
    solution: 'Review task logs, failure rates, human handoffs and time saved. Extend only the task that performs reliably against your current numbers.',
    complexity: 'Advanced',
    monthlyCost: 'Quote after reviewing your current setup',
  },
};

export function getRecommendations(scoreResult: AuditScoreResult, answers: AuditAnswers): AuditRecommendation[] {
  const measurementGuidance = measurementGuidanceFromAnswers(answers);
  const sortedLowest = [...scoreResult.categoryScores].sort((a, b) => a.score - b.score).slice(0, 3);

  return sortedLowest.map((category) => {
    const template = category.score >= 20
      ? strongRecommendationMap[category.key] ?? recommendationMap[category.key] ?? recommendationMap['business-profile']
      : recommendationMap[category.key] ?? recommendationMap['business-profile'];
    return {
      ...template,
      measurementGuidance,
    };
  });
}
