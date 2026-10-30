import React from 'react';
import { GraduationCap, Award, Briefcase, Check } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-[#07171e] border-t border-[#143644] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#09222c] border border-[#143d4e] text-xs font-semibold text-teal-300">
            <span>Público-Alvo Estratégico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            Para Quem Foi Desenvolvido o Redação LGPD?
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            O material foi lapidado especificamente para quem precisa traduzir conhecimento legal em notas máximas e manifestações técnicas seguras.
          </p>
        </div>

        {/* 3 Main Target Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14">
          {/* Profile 1 */}
          <div className="petrol-card rounded-2xl p-7 space-y-5 petrol-card-interactive flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <GraduationCap className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Candidatos de Concursos Públicos
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Carreiras Jurídicas (Magistratura, MP, DPE, Procuradorias) e Carreiras Administrativas, Fiscais, de Controle e TI (TCU, CGU, Receita Federal, CVM, Bacen) com discursiva sobre privacidade.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1a4454] text-xs text-amber-300 font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-400" />
              <span>Gabarite os quesitos do espelho oficial</span>
            </div>
          </div>

          {/* Profile 2 */}
          <div className="petrol-card rounded-2xl p-7 space-y-5 petrol-card-interactive flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Award className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Candidatos a Certificações de DPO
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Profissionais em preparação para certificações (EXIN CDPO, IAPP CIPP/E, CIPM etc.) que exigem análise de cenários práticos e raciocínio técnico apurado.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1a4454] text-xs text-teal-300 font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-400" />
              <span>Domínio do vocabulário regulatório e ANPD</span>
            </div>
          </div>

          {/* Profile 3 */}
          <div className="petrol-card rounded-2xl p-7 space-y-5 petrol-card-interactive flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Briefcase className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Advogados & Consultores
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Profissionais que precisam escrever pareceres técnicos curtos, memorandos e respostas a notificações regulatórias com estrutura formal impecável.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1a4454] text-xs text-emerald-300 font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-400" />
              <span>Modelos profissionais para manifestação real</span>
            </div>
          </div>
        </div>

        {/* Clear Non-Target callout (Transparency) */}
        <div className="mt-12 bg-[#061821]/70 border border-[#143644] rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Para Quem Este Produto NÃO É Recomendado:
            </span>
            <p className="text-xs sm:text-sm text-slate-300">
              Não adquira se você busca um curso acadêmico prolixo de 80 horas de teoria doutrinária. O Redação LGPD é um guia cirúrgico, estruturado e 100% focado em como pontuar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
