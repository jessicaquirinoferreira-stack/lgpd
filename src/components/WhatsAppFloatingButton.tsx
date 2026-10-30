import React from 'react';
import { WHATSAPP_LINK } from '../data/lgpdData.ts';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com o especialista para adquirir o Redação LGPD"
        className="group relative flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 rounded-full font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/60 border border-emerald-300/40 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-pulse-glow"
      >
        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 fill-slate-950" />
        </div>

        {/* Text */}
        <span className="font-semibold tracking-tight whitespace-nowrap">
          <span className="inline sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">Falar no WhatsApp</span>
        </span>

        {/* Subtle Online Badge */}
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
        </span>
      </a>
    </aside>
  );
};
