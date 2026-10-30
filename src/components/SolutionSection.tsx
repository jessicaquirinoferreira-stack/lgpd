import React from 'react';
import { Layers, Database, BookMarked, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/lgpdData.ts';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solucao" className="py-20 bg-[#07171e] border-t border-[#143644] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300">
            <span>A Metodologia Prática</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            A Solução Definitiva: O Triângulo de Alta Pontuação da Redação LGPD
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            O <strong className="text-white font-semibold">Redação LGPD</strong> não é um curso teórico extenso de 80 horas. É um <strong className="text-amber-400 font-semibold">roteiro estratégico e cirúrgico</strong> que ensina você a transformar o que já sabe em respostas nota máxima no espelho da banca.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14">
          {/* Pillar 1 */}
          <div className="petrol-card rounded-2xl p-7 space-y-5 petrol-card-interactive flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Layers className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Pilar 01</span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Esqueleto de Resposta Coringa
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Uma matriz estrutural pronta em 3 blocos lógicos. Saiba exatamente o que escrever no primeiro parágrafo, como desenvolver a tese jurídica e como arrematar com as medidas práticas de mitigação exigidas.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-[#1a4454]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Enquadramento fático-jurídico imediato</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Subsunção de artigos sem generalismo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Encerramento com plano de ação mitigador</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 text-xs font-semibold text-amber-300">
              Adequado para 20 a 30 linhas
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="petrol-card rounded-2xl p-7 space-y-5 petrol-card-interactive flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Database className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Pilar 02</span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Banco de Casos Práticos Resolvidos
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Questões resolvidas e comentadas dos temas mais cobrados pelas principais bancas (Cebraspe, FGV, FCC, Vunesp), cobrindo vazamentos, IA, direitos do titular e sanções.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-[#1a4454]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Espelho oficial da banca dissecado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Análise de respostas erradas vs nota 10</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Artigos-chave para cada tipo de questão</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 text-xs font-semibold text-teal-300">
              Cobertura total dos temas recorrentes
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="petrol-card rounded-2xl p-7 space-y-5 petrol-card-interactive flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <BookMarked className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Pilar 03</span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Vocabulário Regulatório Oficial
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                O glossário objetivo que ensina a substituir termos genéricos pela linguagem técnica que a banca valoriza. Conheça as expressões que ativam os pontos na grade de correção.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-[#1a4454]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Termos técnicos da LGPD e Resoluções ANPD</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Tabela de "O que NÃO dizer vs O que escrever"</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Conectivos jurídicos de alta fluidez textual</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 text-xs font-semibold text-emerald-300">
              Vocabulário valorizado pelas bancas
            </div>
          </div>
        </div>

        {/* CTA Bar to WhatsApp */}
        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-lg shadow-amber-500/20 transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Falar no WhatsApp e garantir meu acesso</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
