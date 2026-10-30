import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK, LOGO_URL } from '../data/lgpdData.ts';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Problema', href: '#problema' },
    { label: 'A Solução', href: '#solucao' },
    { label: 'Conteúdo', href: '#conteudo' },
    { label: 'Exemplos', href: '#exemplos' },
    { label: 'Checklist', href: '#checklist' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#040e13]/95 backdrop-blur-md border-b border-[#143644] shadow-xl shadow-black/40 py-2.5'
          : 'bg-[#051218]/85 backdrop-blur-sm border-b border-[#143644]/50 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Official Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group py-1"
            aria-label="Redação LGPD - Início"
          >
            <img
              src={LOGO_URL}
              alt="Logo Redação LGPD em Ouro e Azul"
              referrerPolicy="no-referrer"
              className="h-11 sm:h-14 w-auto object-contain filter drop-shadow-[0_0_1.5px_rgba(255,255,255,0.45)] drop-shadow-md transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary CTA leading to WhatsApp */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>Quero o material agora</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg border border-[#163a48] bg-[#091b23] focus:outline-none"
              aria-label="Alternar navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#040e13] border-b border-[#143644] px-4 pt-3 pb-5 space-y-3 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-amber-300 rounded-md hover:bg-[#0b232e] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#143644]">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-center text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Falar no WhatsApp e garantir meu acesso</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
