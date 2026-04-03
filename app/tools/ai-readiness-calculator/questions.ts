export type ReadinessOption = {
  label: string;
  value: string;
  points: number;
  hint?: string;
};

export type ReadinessQuestion = {
  id: string;
  category: string;
  question: string;
  options: ReadinessOption[];
};

export const READINESS_QUESTIONS: ReadinessQuestion[] = [
  {
    id: "tech-stack",
    category: "Systems",
    question: "How would you describe your current tech stack?",
    options: [
      { label: "Mostly manual tools and email", value: "manual", points: 1, hint: "Spreadsheets, paper, inbox-driven work." },
      { label: "A few cloud apps but not integrated", value: "basic-cloud", points: 2 },
      { label: "Core systems are digital with light integrations", value: "core-digital", points: 3 },
      { label: "Modern cloud stack with solid integrations", value: "integrated", points: 4 },
      { label: "Well-integrated systems with automation already in place", value: "advanced", points: 5 },
    ],
  },
  {
    id: "data-quality",
    category: "Data",
    question: "How available and reliable is your business data for decision-making?",
    options: [
      { label: "Data is scattered or hard to trust", value: "scattered", points: 1 },
      { label: "Some useful data exists, but quality is inconsistent", value: "inconsistent", points: 2 },
      { label: "We have usable data in a few important areas", value: "usable", points: 3 },
      { label: "Good reporting and reasonably clean data", value: "good", points: 4 },
      { label: "Clean, accessible data with strong reporting discipline", value: "excellent", points: 5 },
    ],
  },
  {
    id: "automation-level",
    category: "Operations",
    question: "How automated are your key business processes today?",
    options: [
      { label: "Almost everything is manual", value: "manual", points: 1 },
      { label: "We use templates and a few shortcuts", value: "templates", points: 2 },
      { label: "Some repeatable tasks are automated", value: "some", points: 3 },
      { label: "Several workflows are automated across teams", value: "several", points: 4 },
      { label: "Automation is a core part of how we operate", value: "core", points: 5 },
    ],
  },
  {
    id: "team-literacy",
    category: "People",
    question: "What is your team’s current AI literacy?",
    options: [
      { label: "Very low — little awareness or confidence", value: "very-low", points: 1 },
      { label: "Some curiosity, but no structured use", value: "curious", points: 2 },
      { label: "A few people actively experiment with AI tools", value: "experimenting", points: 3 },
      { label: "The team understands practical use cases", value: "practical", points: 4 },
      { label: "AI capability is broad and embedded in the team", value: "embedded", points: 5 },
    ],
  },
  {
    id: "budget",
    category: "Investment",
    question: "How ready is your budget for AI initiatives over the next 12 months?",
    options: [
      { label: "No budget allocated", value: "none", points: 1 },
      { label: "Only small ad hoc spend", value: "small", points: 2 },
      { label: "A modest budget exists for pilot projects", value: "pilot", points: 3 },
      { label: "A clear budget exists for rollout", value: "rollout", points: 4 },
      { label: "We can fund pilots, implementation, and optimisation", value: "strategic", points: 5 },
    ],
  },
  {
    id: "decision-speed",
    category: "Leadership",
    question: "How quickly can your business make decisions on new initiatives?",
    options: [
      { label: "Very slowly — approvals often stall", value: "stalled", points: 1 },
      { label: "Slow — decisions take weeks or months", value: "slow", points: 2 },
      { label: "Moderate — we can move when needed", value: "moderate", points: 3 },
      { label: "Fast — decisions usually happen quickly", value: "fast", points: 4 },
      { label: "Very fast — we can pilot and learn rapidly", value: "very-fast", points: 5 },
    ],
  },
  {
    id: "competitive-pressure",
    category: "Market",
    question: "How much competitive pressure do you feel to improve with AI?",
    options: [
      { label: "Very little pressure right now", value: "low", points: 1 },
      { label: "Some pressure, but not urgent", value: "some", points: 2 },
      { label: "Competitors are starting to move", value: "building", points: 3 },
      { label: "Pressure is real and increasing", value: "real", points: 4 },
      { label: "Urgent — we need to move to stay ahead", value: "urgent", points: 5 },
    ],
  },
  {
    id: "customer-data",
    category: "Customers",
    question: "How effectively do you use customer data today?",
    options: [
      { label: "We barely capture or use it", value: "barely", points: 1 },
      { label: "We capture some data but rarely act on it", value: "capture-some", points: 2 },
      { label: "We use customer data in a few workflows", value: "few-workflows", points: 3 },
      { label: "Customer data actively informs service and sales", value: "active", points: 4 },
      { label: "Customer data is central to personalisation and growth", value: "central", points: 5 },
    ],
  },
  {
    id: "use-case-clarity",
    category: "Strategy",
    question: "How clearly have you identified business use cases for AI?",
    options: [
      { label: "We have not defined any", value: "none", points: 1 },
      { label: "We have vague ideas only", value: "vague", points: 2 },
      { label: "We have a shortlist of possible use cases", value: "shortlist", points: 3 },
      { label: "We have prioritised use cases and owners", value: "prioritised", points: 4 },
      { label: "We already evaluate use cases against ROI and execution", value: "roi-driven", points: 5 },
    ],
  },
];

export type ReadinessTierKey = "AI Novice" | "AI Explorer" | "AI Ready" | "AI Leader";

export const READINESS_TIERS: {
  key: ReadinessTierKey;
  min: number;
  max: number;
  subtitle: string;
  summary: string;
  nextStep: string;
}[] = [
  {
    key: "AI Novice",
    min: 0,
    max: 25,
    subtitle: "Foundational work comes first",
    summary: "You have genuine upside, but your systems, data, or team readiness need a stronger base before AI can deliver reliably.",
    nextStep: "Start with clarity: map your biggest bottlenecks, centralise core data, and identify one practical workflow to improve.",
  },
  {
    key: "AI Explorer",
    min: 26,
    max: 50,
    subtitle: "Experimenting, but not yet structured",
    summary: "You can see the opportunity and may already be testing tools, but the structure to scale AI impact is still forming.",
    nextStep: "Prioritise 1–2 use cases with measurable ROI and build a lightweight roadmap around them.",
  },
  {
    key: "AI Ready",
    min: 51,
    max: 75,
    subtitle: "Good foundations, ready to implement",
    summary: "Your business has enough operational maturity to turn AI into a real advantage with the right implementation plan.",
    nextStep: "Move from exploration into deployment: pick a pilot, define success metrics, and align ownership across the team.",
  },
  {
    key: "AI Leader",
    min: 76,
    max: 100,
    subtitle: "Advanced and optimising",
    summary: "You already have the ingredients many businesses lack. The focus now is deeper optimisation, speed, and sustained advantage.",
    nextStep: "Look at advanced orchestration, internal enablement, and continuous improvement to widen the gap on slower competitors.",
  },
];

export function scoreAnswers(answers: Record<string, string>) {
  const rawScore = READINESS_QUESTIONS.reduce((sum, question) => {
    const selected = question.options.find((option) => option.value === answers[question.id]);
    return sum + (selected?.points ?? 0);
  }, 0);

  const maxRawScore = READINESS_QUESTIONS.length * 5;
  const score = Math.round((rawScore / maxRawScore) * 100);
  const tier = READINESS_TIERS.find((item) => score >= item.min && score <= item.max) ?? READINESS_TIERS[0];

  return {
    rawScore,
    maxRawScore,
    score,
    tier,
  };
}
