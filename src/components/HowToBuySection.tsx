import React from 'react';
import { WHATSAPP_LINK } from '../data/lgpdData.ts';
import { MousePointerClick, MessageSquare, DownloadCloud, ArrowRight, ShieldCheck } from 'lucide-react';

export const HowToBuySection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Clique no Botão de Acesso',
      desc: 'Escolha qualquer botão da página e inicie o atendimento direto e exclusivo com o especialista responsável.',
      icon: MousePointerClick,
      badge: '1 Clique',
    },
    {
      step: '02',
      title: 'Fale no WhatsApp Oficial',
      desc: 'Tire qualquer dúvida pontual, confirme as opções de pagamento (PIX ou Cartão) e garanta a condição especial.',
      icon: MessageSquare,
      badge: 'Atendimento Rápido',
    },
    {
      step: '03',
      title: 'Receba o Material Imediatamente',
      desc: 'Após a confirmação, seu acesso aos guias em PDF, modelos de espelho e bônus é liberado instantaneamente.',
      icon: DownloadCloud,
      badge: 'Envio Imediato',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#051218] via-[#081a22] to-[#051218] border-t border-[#143644] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Processo Simples, Transparente & Seguro</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            Como Funciona a Sua Aquisição
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            Sem cadastros burocráticos ou plataformas complicadas. Você é atendido com agilidade e recebe o material direto no seu WhatsApp e e-mail:
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="petrol-card rounded-2xl p-7 space-y-5 relative petrol-card-interactive flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-code text-2xl font-bold text-teal-400/60">
                      {s.step}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300">
                      {s.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-400/25 flex items-center justify-center text-teal-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1a4454] flex items-center justify-between text-xs text-slate-400">
                  <span>Etapa {idx + 1} de 3</span>
                  <span className="text-teal-400 font-semibold">100% Seguro</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-CTA leading to WhatsApp */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 hover:from-teal-300 hover:to-emerald-300 shadow-xl shadow-teal-950/40 border border-teal-200/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Falar no WhatsApp e garantir meu acesso</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
