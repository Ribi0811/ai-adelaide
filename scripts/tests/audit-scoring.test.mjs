import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const projectRoot = path.resolve(new URL('.', import.meta.url).pathname, '../..');
const moduleCache = new Map();

function loadTypeScriptModule(filePath) {
  const resolvedPath = path.resolve(filePath);
  if (moduleCache.has(resolvedPath)) return moduleCache.get(resolvedPath).exports;

  const module = { exports: {} };
  moduleCache.set(resolvedPath, module);
  const source = fs.readFileSync(resolvedPath, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: resolvedPath,
  });

  const localRequire = (request) => {
    if (!request.startsWith('.')) return require(request);
    const requestedPath = path.resolve(path.dirname(resolvedPath), request);
    return loadTypeScriptModule(requestedPath.endsWith('.ts') ? requestedPath : `${requestedPath}.ts`);
  };

  new Function('require', 'module', 'exports', outputText)(localRequire, module, module.exports);
  return module.exports;
}

const questionsModule = loadTypeScriptModule(path.join(projectRoot, 'lib/audit/questions.ts'));
const scoringModule = loadTypeScriptModule(path.join(projectRoot, 'lib/audit/scoring.ts'));
const recommendationsModule = loadTypeScriptModule(path.join(projectRoot, 'lib/audit/recommendations.ts'));
const { AUDIT_QUESTIONS } = questionsModule;
const { calculateAuditScore } = scoringModule;
const { getRecommendations } = recommendationsModule;

function answersFor(optionIndex) {
  return Object.fromEntries(
    AUDIT_QUESTIONS.map((question) => {
      const selectedOption = optionIndex === -1
        ? question.options[question.options.length - 1]
        : question.options[optionIndex] ?? question.options[0];
      return [question.id, selectedOption.value];
    }),
  );
}

test('highest valid answers produce four 25-point categories and a 100 maximum', () => {
  const result = calculateAuditScore(answersFor(-1));

  assert.equal(result.totalScore, 100);
  assert.equal(result.maxScore, 100);
  assert.deepEqual(
    result.categoryScores.map(({ key }) => key),
    ['website', 'seo-visibility', 'lead-capture', 'automation-admin'],
  );
  assert.equal(result.categoryScores.length, 4);
  for (const category of result.categoryScores) {
    assert.equal(category.score, 25);
    assert.equal(category.max, 25);
    assert.equal(category.rawScore, 50);
    assert.equal(category.rawMax, 50);
  }
});

test('lowest valid answers score the four scored areas without adding context points', () => {
  const result = calculateAuditScore(answersFor(0));

  assert.equal(result.totalScore, 20);
  assert.deepEqual(result.categoryScores.map(({ score }) => score), [5, 5, 5, 5]);
  assert.equal(result.categoryScores.every(({ score, max }) => score >= 0 && score <= max), true);
  assert.equal(AUDIT_QUESTIONS.find((question) => question.id === 'q9')?.scored, false);
  assert.equal(AUDIT_QUESTIONS.find((question) => question.id === 'q10')?.scored, false);
});

test('business type and staff context cannot change the readiness score', () => {
  const base = {
    q1: 'modern',
    q2: 'fast',
    q3: 'page1-partial',
    q4: 'good',
    q5: 'online',
    q6: 'within-15',
    q7: '2-5',
    q8: 'team',
  };
  const reference = calculateAuditScore({ ...base, q9: 'trade', q10: 'just-me' });

  for (const context of [
    { q9: 'other', q10: '20-plus' },
    { q9: 'allied-health', q10: '6-20' },
    { q9: 'hospitality', q10: '2-5' },
  ]) {
    const result = calculateAuditScore({ ...base, ...context });
    assert.equal(result.totalScore, reference.totalScore);
    assert.equal(result.band, reference.band);
    assert.deepEqual(result.categoryScores, reference.categoryScores);
  }
});

test('missing, invalid and context-only answers are safe and score only valid scored options', () => {
  assert.doesNotThrow(() => calculateAuditScore(null));
  assert.equal(calculateAuditScore(null).totalScore, 0);
  assert.equal(calculateAuditScore({ q9: 'trade', q10: '20-plus' }).totalScore, 0);

  const result = calculateAuditScore({ q1: 'not-an-option', q2: 'fast', q10: '20-plus' });
  assert.equal(result.totalScore, 10);
  assert.equal(result.categoryScores.find(({ key }) => key === 'website')?.rawScore, 20);
  assert.equal(result.businessType, 'Other');
});

test('strong scores receive maintenance guidance instead of an automatic rebuild or ROI promise', () => {
  const answers = answersFor(-1);
  const recommendations = getRecommendations(calculateAuditScore(answers), answers);
  const rendered = JSON.stringify(recommendations);

  assert.equal(recommendations.length, 3);
  assert.match(rendered, /measurementGuidance/);
  assert.doesNotMatch(rendered, /Build a website|48 hours|\$699|ROI/i);
});
