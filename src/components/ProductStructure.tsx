import React from 'react';
import { Shield, BookOpen, Compass, FileText, Cpu, UserCheck, Scale, AlertOctagon } from 'lucide-react';

export const ProductStructure: React.FC = () => {
  return (
    <section id="conteudo" className="py-20 bg-[#051218] border-t border-[#143644] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#081f29] border border-[#143d4e] text-xs font-semibold text-teal-300">
            <span>Estrutura Completa do Material</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            O Que Você Vai Receber ao Acessar o Redação LGPD
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            Todo o conteúdo foi desenhado com foco total na prática discursiva. Nada de teorias soltas: você recebe a ferramenta exata que precisa para redigir com autoridade.
          </p>
        </div>

        {/* 3 Detailed Product Blocks */}
        <div className="space-y-10 mt-16">
          {/* Block 1 */}
          <div className="petrol-card rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>Bloco 01 · A Matriz Principal</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial">
                  Esqueleto de Resposta Coringa
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  O passo a passo arquitetural para estruturar qualquer discursiva da LGPD entre 20 e 30 linhas, garantindo que nenhum item essencial da grade de correção fique de fora.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#05141b] p-5 rounded-2xl border border-[#143d4e] space-y-2.5">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">Fase 1</div>
                  <h4 className="text-sm font-bold text-white">Introdução & Enquadramento</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Identificação imediata da ocorrência, qualificação dos agentes (Controlador, Operador e Encarregado/DPO) e categoria dos dados.
                  </p>
                </div>

                <div className="bg-[#05141b] p-5 rounded-2xl border border-[#143d4e] space-y-2.5">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">Fase 2</div>
                  <h4 className="text-sm font-bold text-white">Fundamentação Direcionada</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Indicação da base legal precisa (art. 7º ou 11) sem cair em generalismos, conjugada aos princípios da finalidade e necessidade.
                  </p>
                </div>

                <div className="bg-[#05141b] p-5 rounded-2xl border border-[#143d4e] space-y-2.5">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">Fase 3</div>
                  <h4 className="text-sm font-bold text-white">Ação & Mitigação Prática</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Comunicação à ANPD e aos titulares (art. 48), medidas de governança, RIPD/LIA e tutela dos direitos dos titulares (art. 18).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="petrol-card rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-500/10 text-teal-300 text-xs font-bold uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>Bloco 02 · Aplicação Real</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial">
                  Banco de Casos Práticos Mapeados
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Questões resolvidas e comentadas nos moldes das principais bancas examinadoras (Cebraspe, FGV, FCC e Vunesp), cobrindo os cenários com maior taxa de reprovação.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-[#05141b] p-4 rounded-xl border border-[#143d4e] flex items-start gap-3">
                  <AlertOctagon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">Vazamento & Segurança da Informação</h4>
                    <p className="text-xs text-slate-300">
                      Ransomware, dados sensíveis vazados e rito do art. 48 perante a ANPD.
                    </p>
                  </div>
                </div>

                <div className="bg-[#05141b] p-4 rounded-xl border border-[#143d4e] flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">Uso de IA & Decisões Automatizadas</h4>
                    <p className="text-xs text-slate-300">
                      Aplicação do art. 20, revisão de decisões, perfilamento e vedação à discriminação.
                    </p>
                  </div>
                </div>

                <div className="bg-[#05141b] p-4 rounded-xl border border-[#143d4e] flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">Direitos do Titular vs. Legítimo Interesse</h4>
                    <p className="text-xs text-slate-300">
                      Eliminação de dados, revogação, LIA e hipóteses de conservação do art. 16.
                    </p>
                  </div>
                </div>

                <div className="bg-[#05141b] p-4 rounded-xl border border-[#143d4e] flex items-start gap-3">
                  <Scale className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">Atuação da ANPD & Responsabilidade Civil</h4>
                    <p className="text-xs text-slate-300">
                      Poder fiscalizatório, sanções do art. 52 e solidariedade civil (art. 42).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="petrol-card rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Bloco 03 · O Refinamento Verbal</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial">
                  Guia de Vocabulário Técnico
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Um glossário objetivo que ensina a trocar termos genéricos por linguagem que a banca valoriza, demonstrando preparo técnico de excelência.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3">
                <div className="bg-[#05141b] p-4 rounded-xl border border-[#143d4e] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-red-400 line-through">"A empresa dona dos dados"</span>
                    <span className="mx-2 text-slate-500">→</span>
                    <strong className="text-teal-300">"Agentes de Tratamento / Controlador (art. 5º, VI)"</strong>
                  </div>
                  <span className="text-slate-400">Precisão conceitual imediata</span>
                </div>

                <div className="bg-[#05141b] p-4 rounded-xl border border-[#143d4e] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-red-400 line-through">"Documento de segurança da empresa"</span>
                    <span className="mx-2 text-slate-500">→</span>
                    <strong className="text-teal-300">"Relatório de Impacto à Proteção de Dados (RIPD)"</strong>
                  </div>
                  <span className="text-slate-400">Termo oficial do art. 5º, XVII</span>
                </div>

                <div className="bg-[#05141b] p-4 rounded-xl border border-[#143d4e] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-red-400 line-through">"Avisar a polícia ou o Procon"</span>
                    <span className="mx-2 text-slate-500">→</span>
                    <strong className="text-teal-300">"Comunicação tempestiva de incidente à ANPD (art. 48)"</strong>
                  </div>
                  <span className="text-slate-400">Rito procedimental da lei</span>
                </div>

                <div className="bg-[#05141b] p-4 rounded-xl border border-[#143d4e] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-red-400 line-through">"Coletar o mínimo de informação"</span>
                    <span className="mx-2 text-slate-500">→</span>
                    <strong className="text-teal-300">"Princípio da necessidade / minimização (art. 6º, III)"</strong>
                  </div>
                  <span className="text-slate-400">Subsunção principiológica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
