import React, { useState } from 'react';
import { FAQ_ITEMS, WHATSAPP_LINK } from '../data/lgpdData.ts';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#051218] border-t border-[#143644] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081e28] border border-[#143d4e] text-xs font-semibold text-teal-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            Perguntas Frequentes
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light">
            Tudo o que você precisa saber antes de iniciar o seu treinamento prático com o Redação LGPD:
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="petrol-card rounded-2xl overflow-hidden transition-colors border-[#143d4e]"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#0b2430]/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {item.q}
                  </span>
                  <div className={`p-1 rounded-lg text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-400' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#143644] animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Ask on WhatsApp */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#061821] border border-[#143644] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-bold text-white">Ainda tem alguma dúvida pontual?</h4>
            <p className="text-xs text-slate-300">Fale diretamente com nossa equipe no WhatsApp oficial.</p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
