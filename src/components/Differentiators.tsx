import React from 'react';
import { Zap, LayoutTemplate, Eye, PenTool, Check, X } from 'lucide-react';

export const Differentiators: React.FC = () => {
  return (
    <section className="py-20 bg-[#051218] border-t border-[#143644] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300">
            <span>Diferenciais Reais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            Por Que o Redação LGPD Não Se Parece com Nada que Você Já Viu
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            Cursos tradicionais repetem artigos da lei de forma estéril. Nós ensinamos você a garantir a pontuação máxima no dia da sua prova.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {/* Diff 1 */}
          <div className="petrol-card rounded-2xl p-6 space-y-3.5 petrol-card-interactive">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Direto ao Ponto
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Zero enrolação acadêmica. Vá direto ao que o examinador procura em 20 ou 30 linhas na folha de resposta.
            </p>
          </div>

          {/* Diff 2 */}
          <div className="petrol-card rounded-2xl p-6 space-y-3.5 petrol-card-interactive">
            <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center text-teal-400">
              <LayoutTemplate className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Modelos Prontos & Espelhos
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Espelhos comentados linha por linha. Veja exatamente como construir a argumentação passo a passo.
            </p>
          </div>

          {/* Diff 3 */}
          <div className="petrol-card rounded-2xl p-6 space-y-3.5 petrol-card-interactive">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Checklists & Esquemas Visuais
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mapas conceituais, esquemas mnemônicos e checklists para revisar de forma rápida no dia da prova.
            </p>
          </div>

          {/* Diff 4 */}
          <div className="petrol-card rounded-2xl p-6 space-y-3.5 petrol-card-interactive">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400">
              <PenTool className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Da Teoria para o Papel
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              O foco é transformar o conhecimento dos artigos em parágrafos coesos, técnicos e aprovados pela banca.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-14 petrol-card rounded-2xl overflow-hidden shadow-xl">
          <div className="p-5 bg-[#05131a] border-b border-[#143644] flex items-center justify-between">
            <span className="text-sm font-bold text-white">Comparativo Estratégico</span>
            <span className="text-xs text-amber-400 font-semibold">Decisão Inteligente para a Sua Prova</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-[#05141b]/90 border-b border-[#143644] text-slate-400 uppercase text-[11px] font-semibold">
                <tr>
                  <th className="py-3.5 px-6">Critério</th>
                  <th className="py-3.5 px-6 text-red-400">Cursos Teóricos Tradicionais</th>
                  <th className="py-3.5 px-6 text-teal-300 font-bold bg-teal-950/20">Módulo Redação LGPD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#143644]/70">
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Tempo total de dedicação</td>
                  <td className="py-4 px-6 text-slate-400">60 a 100 horas de videoaulas prolixas</td>
                  <td className="py-4 px-6 font-semibold text-teal-300 bg-teal-950/10">Poucas horas de estudo estratégico e aplicação</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Foco na folha de resposta</td>
                  <td className="py-4 px-6 text-slate-400">Quase nulo (apenas teoria e doutrina)</td>
                  <td className="py-4 px-6 font-semibold text-teal-300 bg-teal-950/10">100% focado em discursivas e casos práticos</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Esqueleto coringa pronto</td>
                  <td className="py-4 px-6 text-slate-400 flex items-center gap-1.5"><X className="w-4 h-4 text-red-400 shrink-0" /> Não oferece</td>
                  <td className="py-4 px-6 font-semibold text-teal-300 bg-teal-950/10 flex items-center gap-1.5"><Check className="w-4 h-4 text-teal-400 shrink-0" /> Sim, validado nas principais bancas</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Vocabulário regulatório ANPD</td>
                  <td className="py-4 px-6 text-slate-400">Terminologia dispersa e confusa</td>
                  <td className="py-4 px-6 font-semibold text-teal-300 bg-teal-950/10">Glossário analítico com termos que pontuam</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-white">Formato do material</td>
                  <td className="py-4 px-6 text-slate-400">PDFs de 500 páginas e aulas cansativas</td>
                  <td className="py-4 px-6 font-semibold text-teal-300 bg-teal-950/10">Guia condensado, checklists e modelos visuais</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
