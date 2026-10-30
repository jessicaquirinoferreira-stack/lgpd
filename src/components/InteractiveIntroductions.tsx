import React, { useState } from 'react';
import { INTRODUCTIONS_DATA, IntroductionTemplate, WHATSAPP_LINK } from '../data/lgpdData.ts';
import { Sparkles, Copy, Check, BookOpen, Quote, MessageCircle } from 'lucide-react';

export const InteractiveIntroductions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(INTRODUCTIONS_DATA[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentIntro: IntroductionTemplate =
    INTRODUCTIONS_DATA.find((item) => item.id === activeTab) || INTRODUCTIONS_DATA[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="exemplos" className="py-20 bg-[#07171e] border-t border-[#143644] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exemplos Práticos & Modelos Prontos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            Sugestões de Introdução: Como Abrir Sua Resposta com Padrão Nota 10
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            O primeiro parágrafo é onde o examinador decide se você domina a matéria ou se é um candidato amador. Veja 3 modelos de abertura prontos para os temas mais incidentes em provas:
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {INTRODUCTIONS_DATA.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 font-bold'
                    : 'bg-[#081e28] text-slate-300 hover:text-white border border-[#143d4e] hover:border-slate-600'
                }`}
              >
                <BookOpen className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-teal-400'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Introduction Card */}
        <div className="mt-8 petrol-card rounded-3xl p-6 sm:p-9 shadow-2xl relative">
          <div className="space-y-6">
            {/* Context Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#163f52]">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Cenário do Caso Prático
                </span>
                <p className="text-sm font-medium text-slate-200 mt-0.5">
                  {currentIntro.context}
                </p>
              </div>

              <button
                onClick={() => handleCopy(currentIntro.openingText, currentIntro.id)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#09222c] hover:bg-[#0c2c39] border border-[#184557] text-xs font-semibold text-slate-200 transition-colors shrink-0 cursor-pointer self-start sm:self-center"
              >
                {copiedId === currentIntro.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-teal-400" />
                    <span className="text-teal-300">Copiado para Área de Transferência!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copiar Este Modelo</span>
                  </>
                )}
              </button>
            </div>

            {/* Quote / Model Text */}
            <div className="bg-[#05141b]/80 border border-[#153e4f] rounded-2xl p-6 sm:p-7 relative paper-lined">
              <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4" />
              <div className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider font-sans">
                Parágrafo de Abertura Recomendado:
              </div>
              <p className="font-editorial text-base sm:text-lg text-slate-100 leading-relaxed italic">
                "{currentIntro.openingText}"
              </p>
            </div>

            {/* Keyword badges and Pedagogical Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              <div className="lg:col-span-5 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Termos que o Examinador Procura:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentIntro.targetKeywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#05131a] border border-[#163f52] px-2.5 py-1 rounded text-slate-300 font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#05141b]/60 border border-[#143746] rounded-xl p-4 text-xs text-slate-300 leading-relaxed space-y-1">
                <strong className="text-teal-300 font-semibold block">
                  Por que esta introdução garante pontuação máxima?
                </strong>
                <p>{currentIntro.analysis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
