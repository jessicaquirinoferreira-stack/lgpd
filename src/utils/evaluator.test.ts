import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateChecklistScore, analyzeAnswerText } from './evaluator.ts';
import { CHECKLIST_ITEMS } from '../data/lgpdData.ts';

test('calculateChecklistScore calculates full points when all items are selected', () => {
  const allIds = CHECKLIST_ITEMS.map((item) => item.id);
  const result = calculateChecklistScore(allIds);
  assert.equal(result.percentage, 100);
  assert.equal(result.level, 'Gabarito Oficial');
  assert.equal(result.score, result.maxScore);
});

test('calculateChecklistScore handles empty selection safely', () => {
  const result = calculateChecklistScore([]);
  assert.equal(result.score, 0);
  assert.equal(result.percentage, 0);
  assert.equal(result.level, 'Insuficiente');
});

test('calculateChecklistScore calculates partial points accurately', () => {
  const selected = ['agentes', 'natureza_dados'];
  const result = calculateChecklistScore(selected);
  assert.equal(result.score, 3.0);
  assert.ok(result.percentage > 0 && result.percentage < 50);
  assert.equal(result.level, 'Regular');
});

test('analyzeAnswerText identifies high scoring response with legal terms', () => {
  const text = 'Na condição de Controladora, a entidade violou o art. 48 da Lei nº 13.709/2018 perante a ANPD, gerando incidente de segurança com dados pessoais sensíveis e necessidade de RIPD.';
  const analysis = analyzeAnswerText(text);
  assert.ok(analysis.scoreOutOfTen >= 7.0);
  assert.ok(analysis.foundTerms.includes('Controlador'));
  assert.ok(analysis.foundTerms.includes('ANPD (Autoridade Nacional)'));
  assert.ok(analysis.foundTerms.includes('Dados Pessoais Sensíveis'));
});

test('analyzeAnswerText flags amateur warning words', () => {
  const text = 'A empresa dona dos dados deve avisar a polícia.';
  const analysis = analyzeAnswerText(text);
  assert.ok(analysis.warnings.some((w) => w.includes('dona dos dados')));
  assert.ok(analysis.warnings.some((w) => w.includes('polícia')));
});
