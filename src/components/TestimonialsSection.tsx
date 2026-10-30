import React from 'react';
import { TESTIMONIALS } from '../data/lgpdData.ts';
import { Star, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#051218] border-t border-[#143644] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Resultados e Credibilidade</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            Desenvolvido Especificamente para o que as Bancas Realmente Cobram
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            Veja como candidatos a concursos de alto nível e certificações profissionais transformaram suas notas nas provas discursivas:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="petrol-card rounded-3xl p-7 space-y-5 shadow-xl flex flex-col justify-between relative group petrol-card-interactive"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300">
                    {t.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-editorial italic relative">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1a4454] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
                <span className="text-[11px] text-slate-400">{t.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Customization */}
        <div className="mt-10 text-center text-xs text-slate-400">
          <span>* Relatos de alunos e participantes que utilizaram a metodologia estrutural do Redação LGPD.</span>
        </div>
      </div>
    </section>
  );
};
