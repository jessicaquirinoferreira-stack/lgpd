import React, { useState } from 'react';
import { MAIN_CASE_STUDY } from '../data/lgpdData.ts';
import { CheckCircle2, XCircle, Award, Scale } from 'lucide-react';

export const DiscursivaComparator: React.FC = () => {
  const [activeView, setActiveView] = useState<'good' | 'bad'>('good');
  const study = MAIN_CASE_STUDY;

  return (
    <section className="py-20 bg-[#051218] border-t border-[#143644] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081e28] border border-[#143d4e] text-xs font-semibold text-teal-300">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Estudo de Caso Prático & Espelho Real</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            Antes vs. Depois: O Que Transforma uma Nota 3,5 em Nota 10
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            Veja a mesma situação-problema respondida de duas formas: uma por um candidato comum sem método e outra aplicando a técnica do <strong className="text-white font-semibold">Redação LGPD</strong>.
          </p>
        </div>

        {/* Case Scenario Box */}
        <div className="mt-12 bg-[#061821] border border-[#153e4f] rounded-2xl p-6 sm:p-7 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#143644]">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {study.banca} · {study.theme}
            </span>
            <span className="text-xs bg-[#05131a] border border-[#163f52] px-2.5 py-1 rounded text-slate-300">
              Caso Simulado de Prova Discursiva
            </span>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed italic">
            "{study.situation}"
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setActiveView('good')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeView === 'good'
                ? 'bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-[#081f29] text-slate-300 hover:text-white border border-[#143d4e]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Resposta com Redação LGPD (Nota 10,0)</span>
          </button>

          <button
            onClick={() => setActiveView('bad')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeView === 'bad'
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
                : 'bg-[#081f29] text-slate-300 hover:text-white border border-[#143d4e]'
            }`}
          >
            <XCircle className="w-4 h-4" />
            <span>Resposta Amadora Comum (Nota 3,5)</span>
          </button>
        </div>

        {/* Dynamic Display based on active view */}
        <div className="mt-6">
          {activeView === 'good' ? (
            <div className="petrol-card rounded-3xl p-6 sm:p-9 shadow-2xl space-y-6 border-teal-500/30">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#163f52]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Padrão de Resposta com o Esqueleto Coringa
                    </h3>
                    <span className="text-xs text-teal-300 font-medium">
                      Atendimento integral a todos os quesitos do espelho
                    </span>
                  </div>
                </div>

                <div className="px-4 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 font-code font-bold text-sm">
                  NOTA: {study.goodResponse.score}
                </div>
              </div>

              {/* Response Text */}
              <div className="bg-[#05141b]/80 p-6 rounded-2xl border border-[#143746] font-editorial text-sm sm:text-base text-slate-100 leading-relaxed whitespace-pre-line paper-lined">
                {study.goodResponse.text}
              </div>

              {/* Analysis of why it scored 10 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Pontos Validados pelo Examinador:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {study.goodResponse.keyPoints.map((kp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Artigos Subsumidos com Precisão:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {study.goodResponse.articlesCited.map((art, idx) => (
                      <span
                        key={idx}
                        className="font-code text-xs px-2.5 py-1 rounded bg-[#05131a] border border-teal-500/30 text-teal-300 font-semibold"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="petrol-card rounded-3xl p-6 sm:p-9 shadow-2xl space-y-6 border-red-500/30">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#163f52]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Resposta Amadora (Sem Técnica de Espelho)
                    </h3>
                    <span className="text-xs text-red-400 font-medium">
                      O candidato sabia a lei, mas redigiu de forma leiga e desestruturada
                    </span>
                  </div>
                </div>

                <div className="px-4 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-code font-bold text-sm">
                  NOTA: {study.badResponse.score}
                </div>
              </div>

              {/* Response Text */}
              <div className="bg-[#05141b]/80 p-6 rounded-2xl border border-[#143746] font-editorial text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line paper-lined">
                {study.badResponse.text}
              </div>

              {/* Critique of errors */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Por que a nota foi tão baixa? (Apontamentos do Examinador):
                </span>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {study.badResponse.critique.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
