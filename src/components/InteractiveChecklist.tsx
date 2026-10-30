import React, { useState } from 'react';
import { CHECKLIST_ITEMS, WHATSAPP_LINK } from '../data/lgpdData.ts';
import { calculateChecklistScore } from '../utils/evaluator.ts';
import { CheckSquare, Square, CheckCircle2, RotateCcw, Sparkles, MessageCircle } from 'lucide-react';

export const InteractiveChecklist: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'agentes',
    'base_legal',
    'incidente_anpd',
  ]);

  const toggleItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedIds(CHECKLIST_ITEMS.map((item) => item.id));
  };

  const handleReset = () => {
    setSelectedIds([]);
  };

  const scoreResult = calculateChecklistScore(selectedIds);

  return (
    <section id="checklist" className="py-20 bg-[#051218] border-t border-[#143644] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Ferramenta Interativa de Avaliação</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            Checklist Visual: O Que a Banca Espera Encontrar na Sua Resposta
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            Faça o teste agora mesmo. Marque os elementos que você costuma incluir na sua redação de caso prático da LGPD e veja como a banca examinadora calcularia sua nota:
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
          {/* Left Column: Interactive Checkbox List */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between pb-2 text-xs text-slate-400">
              <span>Selecione os critérios presentes na sua redação:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSelectAll}
                  className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                >
                  Marcar Todos
                </button>
                <span>·</span>
                <button
                  onClick={handleReset}
                  className="text-slate-400 hover:text-slate-200 cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Limpar</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {CHECKLIST_ITEMS.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-[#08222d] border-teal-500/40 shadow-sm'
                        : 'bg-[#061821]/60 border-[#143746] hover:border-slate-700 opacity-80'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isSelected ? (
                        <CheckSquare className="w-5 h-5 text-teal-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-600" />
                      )}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {item.label}
                        </span>
                        <span className="font-code text-xs px-2 py-0.5 rounded bg-[#05131a] text-amber-300 font-bold shrink-0">
                          +{item.points.toFixed(1)} pts
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Score Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="petrol-card rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#163f52]">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Simulação de Espelho Oficial
                </span>
                <span className="text-xs font-medium text-amber-400">
                  {selectedIds.length} de {CHECKLIST_ITEMS.length} itens marcados
                </span>
              </div>

              {/* Big Score Display */}
              <div className="text-center py-2 space-y-2">
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Nota Estimada da Discursiva
                </div>
                <div className="flex items-baseline justify-center gap-1.5 font-code">
                  <span className="text-5xl font-extrabold text-white">
                    {scoreResult.score.toFixed(1)}
                  </span>
                  <span className="text-2xl text-slate-500">
                    / {scoreResult.maxScore.toFixed(1)}
                  </span>
                </div>

                {/* Level Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-sans">
                  {scoreResult.level === 'Gabarito Oficial' && (
                    <span className="bg-teal-500/20 text-teal-300 border border-teal-500/40 px-3 py-1 rounded-full">
                      Padrão Gabarito Oficial (Aprovado com Louvor)
                    </span>
                  )}
                  {scoreResult.level === 'Bom' && (
                    <span className="bg-blue-500/20 text-blue-300 border border-blue-500/40 px-3 py-1 rounded-full">
                      Pontuação Competitiva (Com Pequenos Ajustes)
                    </span>
                  )}
                  {scoreResult.level === 'Regular' && (
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full">
                      Zona de Risco (Passível de Eliminação)
                    </span>
                  )}
                  {scoreResult.level === 'Insuficiente' && (
                    <span className="bg-red-500/20 text-red-300 border border-red-500/40 px-3 py-1 rounded-full">
                      Desclassificação Imediata
                    </span>
                  )}
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Conformidade com o Espelho</span>
                  <span className="font-code font-bold text-slate-200">{scoreResult.percentage}%</span>
                </div>
                <div className="h-2.5 bg-[#05131a] rounded-full overflow-hidden p-0.5 border border-[#143d4e]">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      scoreResult.percentage >= 90
                        ? 'bg-teal-400'
                        : scoreResult.percentage >= 70
                        ? 'bg-blue-400'
                        : scoreResult.percentage >= 30
                        ? 'bg-amber-400'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${scoreResult.percentage}%` }}
                  />
                </div>
              </div>

              {/* Diagnostic Feedback */}
              <div className="bg-[#05131a]/80 p-4 rounded-xl border border-[#143746] text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">Diagnóstico da Banca:</strong>
                {scoreResult.feedback}
              </div>

              {/* CTA Button to WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Quero dominar todos os critérios no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
