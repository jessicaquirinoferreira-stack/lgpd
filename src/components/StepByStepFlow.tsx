import React from 'react';
import { Search, GitBranch, KeyRound, Award, ArrowRight } from 'lucide-react';

export const StepByStepFlow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Identifique o Caso',
      icon: Search,
      desc: 'Faça a triagem rápida dos elementos fáticos: qualifique imediatamente o Controlador, o Operador e a categoria dos dados pessoais envolvidos.',
    },
    {
      num: '02',
      title: 'Aplique o Esqueleto Coringa',
      icon: GitBranch,
      desc: 'Encaixe a resposta na matriz estrutural de 3 atos: Enquadramento fático no início, Fundamentação legal no meio e Mitigação no fechamento.',
    },
    {
      num: '03',
      title: 'Acione o Vocabulário Técnico',
      icon: KeyRound,
      desc: 'Insira os termos regulatórios oficiais que o examinador procura no espelho (RIPD, LIA, art. 48, minimização, dano relevante).',
    },
    {
      num: '04',
      title: 'Entregue a Resposta Nota 10',
      icon: Award,
      desc: 'Conclua dentro do limite de linhas com fluidez jurídica, precisão técnica e garantia de pontuação máxima no padrão de resposta.',
    },
  ];

  return (
    <section className="py-20 bg-[#07171e] border-t border-[#143644] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081e28] border border-[#143d4e] text-xs font-semibold text-teal-300">
            <span>O Método Passo a Passo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            Como Funciona o Caminho da Nota Máxima
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            Um fluxo visual intuitivo que você executa no dia da prova em menos de 3 minutos de planejamento antes de encostar a caneta na folha:
          </p>
        </div>

        {/* 4 Steps Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="petrol-card rounded-2xl p-6 space-y-4 relative flex flex-col justify-between group petrol-card-interactive"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-code text-2xl font-bold text-teal-400/50 group-hover:text-amber-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#09222c] border border-[#174658] flex items-center justify-center text-teal-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1 font-semibold uppercase tracking-wider">
                  <span>Etapa {idx + 1} de 4</span>
                  {idx < 3 && <ArrowRight className="w-3 h-3 text-slate-500 ml-auto hidden lg:block" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
