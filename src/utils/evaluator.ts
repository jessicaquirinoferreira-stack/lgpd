import { CHECKLIST_ITEMS } from '../data/lgpdData.ts';

export interface ScoreResult {
  score: number;
  maxScore: number;
  percentage: number;
  level: 'Insuficiente' | 'Regular' | 'Bom' | 'Gabarito Oficial';
  feedback: string;
}

export interface TextAnalysisResult {
  scoreOutOfTen: number;
  foundTerms: string[];
  missingTerms: string[];
  warnings: string[];
  recommendation: string;
}

const REGULATORY_KEYWORDS = [
  { term: 'Controlador', pattern: /controlador(a|es|as)?/i, weight: 1.5 },
  { term: 'Operador', pattern: /operador(a|es|as)?/i, weight: 1.0 },
  { term: 'Encarregado / DPO', pattern: /(encarregado|dpo|data\s+protection)/i, weight: 1.0 },
  { term: 'ANPD (Autoridade Nacional)', pattern: /(anpd|autoridade\s+nacional)/i, weight: 1.5 },
  { term: 'Artigo da Lei (Art. 5º/6º/7º/11/48/52)', pattern: /art(igo)?\.?\s*\d+/i, weight: 1.5 },
  { term: 'Dados Pessoais Sensíveis', pattern: /dados?\s+pessoais?\s+sens[íi]ve(is|l)/i, weight: 1.5 },
  { term: 'Incidente de Segurança', pattern: /incidente\s+de\s+seguran[çc]a/i, weight: 1.0 },
  { term: 'Relatório de Impacto (RIPD / LIA)', pattern: /(ripd|lia|relat[óo]rio\s+de\s+impacto|leg[íi]timo\s+interesse)/i, weight: 1.0 },
];

export function calculateChecklistScore(selectedIds: string[]): ScoreResult {
  const selectedSet = new Set(selectedIds);
  let score = 0;
  let maxScore = 0;

  for (const item of CHECKLIST_ITEMS) {
    maxScore += item.points;
    if (selectedSet.has(item.id)) {
      score += item.points;
    }
  }

  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  let level: ScoreResult['level'] = 'Insuficiente';
  let feedback = 'Sua resposta carece de elementos estruturais primários para passar no crivo da banca.';

  if (percentage >= 90) {
    level = 'Gabarito Oficial';
    feedback = 'Excelente! Sua resposta contempla enquadramento, base legal estrita, subsunção principiológica e deveres procedimentais perante a ANPD.';
  } else if (percentage >= 70) {
    level = 'Bom';
    feedback = 'Boa estrutura jurídica. Atente-se apenas à citação dos artigos exatos e à menção das providências perante a autoridade regulatória.';
  } else if (percentage >= 30) {
    level = 'Regular';
    feedback = 'Você abordou pontos isolados, mas omitiu a qualificação dos agentes de tratamento ou as medidas mitigadoras formais.';
  }

  return {
    score: Number(score.toFixed(1)),
    maxScore: Number(maxScore.toFixed(1)),
    percentage,
    level,
    feedback,
  };
}

export function analyzeAnswerText(text: string): TextAnalysisResult {
  if (!text || text.trim().length === 0) {
    return {
      scoreOutOfTen: 0,
      foundTerms: [],
      missingTerms: REGULATORY_KEYWORDS.map(k => k.term),
      warnings: ['Nenhum texto inserido para avaliação.'],
      recommendation: 'Redija sua resposta ou copie um modelo para obter a análise da banca.',
    };
  }

  const foundTerms: string[] = [];
  const missingTerms: string[] = [];
  let rawScore = 0;

  for (const kw of REGULATORY_KEYWORDS) {
    if (kw.pattern.test(text)) {
      foundTerms.push(kw.term);
      rawScore += kw.weight;
    } else {
      missingTerms.push(kw.term);
    }
  }

  const warnings: string[] = [];
  if (/dona\s+dos\s+dados/i.test(text)) {
    warnings.push('Alerta: evite a expressão "dona dos dados". Use "Controladora" ou "Operadora".');
  }
  if (/pol[íi]cia/i.test(text) && !/anpd/i.test(text)) {
    warnings.push('Alerta: a autoridade prioritária na LGPD é a ANPD (art. 48), não a polícia.');
  }

  // Cap score to 10
  const finalScore = Math.min(10, Math.max(0, Number(rawScore.toFixed(1))));

  let recommendation = 'Adicione os termos técnicos faltantes para garantir pontuação máxima no espelho da banca examinadora.';
  if (finalScore >= 8.5) {
    recommendation = 'Padrão nota máxima! Vocabulário regulatório refinado e citação precisa de dispositivos legais.';
  } else if (finalScore >= 5.0) {
    recommendation = 'Resposta intermediária. Reforce a indicação de artigos da LGPD e os deveres procedimentais de mitigação.';
  }

  return {
    scoreOutOfTen: finalScore,
    foundTerms,
    missingTerms,
    warnings,
    recommendation,
  };
}
