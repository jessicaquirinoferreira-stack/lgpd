import React from 'react';
import { WHATSAPP_LINK, WHATSAPP_PHONE_FORMATTED, LOGO_URL } from '../data/lgpdData.ts';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030a0e] border-t border-[#102d3a] py-14 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Footer Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#0f2a35]">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Logo Redação LGPD em Ouro e Azul"
              referrerPolicy="no-referrer"
              className="h-12 sm:h-16 w-auto object-contain filter drop-shadow-[0_0_1.5px_rgba(255,255,255,0.45)] drop-shadow-md"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <a href="#problema" className="hover:text-amber-300 transition-colors">O Problema</a>
            <a href="#solucao" className="hover:text-amber-300 transition-colors">A Solução</a>
            <a href="#conteudo" className="hover:text-amber-300 transition-colors">Conteúdo</a>
            <a href="#exemplos" className="hover:text-amber-300 transition-colors">Exemplos</a>
            <a href="#checklist" className="hover:text-amber-300 transition-colors">Checklist</a>
            <a href="#como-funciona" className="hover:text-amber-300 transition-colors">Como Funciona</a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors font-semibold text-teal-400 flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-teal-400" />
              <span>WhatsApp: {WHATSAPP_PHONE_FORMATTED}</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#071922] border border-[#143644] text-slate-300 hover:text-white hover:border-slate-600 transition-colors cursor-pointer flex items-center gap-1.5"
            title="Voltar ao início"
          >
            <span className="text-[11px] font-medium">Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Legal Disclaimer & Compliance */}
        <div className="space-y-4 max-w-4xl text-slate-400 text-[11px] leading-relaxed font-light">
          <p>
            <strong>Aviso Legal & Isenção de Responsabilidade:</strong> O "Redação LGPD" é um material educacional independente, desenvolvido com o objetivo de orientar estudantes e profissionais na estruturação técnica de respostas discursivas e resolução de casos práticos relativos à Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais). O produto não possui qualquer vínculo oficial com a Autoridade Nacional de Proteção de Dados (ANPD), Cebraspe, Fundação Getulio Vargas (FGV), Fundação Carlos Chagas (FCC), Fundação Vunesp, EXIN ou IAPP. As menções a tais entidades possuem caráter estritamente comparativo e metodológico.
          </p>
          <p>
            O rendimento em concursos públicos e exames de certificação decorre de estudo continuado, domínio integral do conteúdo programático e treino individual constante.
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#0d222b] text-[11px]">
          <div>
            © {new Date().getFullYear()} Redação LGPD. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-200 transition-colors cursor-pointer underline underline-offset-4"
            >
              Termos de Uso
            </button>
            <span>·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-200 transition-colors cursor-pointer underline underline-offset-4"
            >
              Política de Privacidade (LGPD)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
