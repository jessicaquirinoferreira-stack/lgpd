import React from 'react';
import { WHATSAPP_LINK, WHATSAPP_PHONE_FORMATTED } from '../data/lgpdData.ts';
import { ShieldCheck, Check, Sparkles, ArrowRight, Zap, Lock, MessageCircle, PhoneCall } from 'lucide-react';

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="py-24 bg-gradient-to-b from-[#07171e] via-[#040f14] to-[#040e13] border-t border-[#143644] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Condição Especial de Acesso Direto</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-editorial">
            Garanta Seu Acesso ao Módulo Redação LGPD
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light">
            Tenha em mãos o método definitivo para nunca mais travar diante de uma discursiva ou caso prático da Lei nº 13.709/2018.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mt-12 petrol-card rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border-teal-500/40">
          {/* Top Badge Banner */}
          <div className="absolute -top-1 right-6 sm:right-10 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-b-xl shadow-md">
            Envio Imediato via WhatsApp
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: What's included */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Produto Digital Estratégico
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-editorial mt-1">
                  O LGPD na Prática: Módulo Discursivas & Casos Práticos
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Guia estratégico condensado + modelos de espelho passo a passo + banco de questões comentadas.
                </p>
              </div>

              {/* Benefits list */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Esqueleto de Resposta Coringa:</strong> A estrutura em 3 atos para gabaritar entre 20 e 30 linhas</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Banco de Casos Práticos Resolvidos:</strong> Espelhos oficiais comentados (Cebraspe, FGV, FCC, Vunesp)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Guia de Vocabulário Técnico:</strong> Glossário para trocar termos leigos por linguagem que pontua</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>BÔNUS #1:</strong> Checklist de Bolso para o Dia da Prova (PDF para impressão)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>BÔNUS #2:</strong> Esquemas Mnemônicos das Bases Legais e deveres perante a ANPD</span>
                </div>
              </div>

              {/* Instant access tag */}
              <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-teal-400" />
                  <span>Liberação Instantânea após confirmação</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Atendimento Seguro e Direto</span>
                </span>
              </div>
            </div>

            {/* Right: Pricing & WhatsApp Action */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#061822] to-[#041017] p-6 sm:p-7 rounded-2xl border border-teal-500/40 text-center space-y-4 shadow-xl relative">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-semibold text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Condição Especial de Lançamento</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white font-editorial">
                  Consulte a Condição Promocional
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                  Liberamos um <strong className="text-teal-300">desconto exclusivo de lançamento</strong> para quem entrar em contato diretamente pelo WhatsApp oficial.
                </p>

                <div className="pt-2 pb-1 space-y-1.5 text-left bg-[#030d12]/60 p-3 rounded-xl border border-[#143644] text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Desconto exclusivo liberado no 1 a 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Todos os bônus inclusos sem custo extra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Pagamento facilitado (PIX ou Cartão)</span>
                  </div>
                </div>

                <div className="text-[11px] text-amber-400 font-medium">
                  Atendimento direto e envio imediato dos PDFs
                </div>
              </div>

              {/* Big Buy Button leading to WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 hover:from-teal-300 hover:to-emerald-300 rounded-xl transition-all shadow-xl shadow-teal-950/40 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Consultar Condição no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Visible WhatsApp Contact Strip */}
              <div className="pt-2 border-t border-[#143644] text-xs text-slate-300 flex items-center justify-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-teal-400" />
                <span>WhatsApp Vendas:</span>
                <strong className="text-white font-code">{WHATSAPP_PHONE_FORMATTED}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Guarantee Box */}
        <div className="mt-8 petrol-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 border-[#143644]">
          <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-300 shrink-0">
            <ShieldCheck className="w-9 h-9" />
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white font-editorial">
              Garantia Incondicional de 7 Dias: Risco Zero
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Você pode acessar o material, ler os esqueletos coringa e conferir o banco de casos. Se por qualquer motivo achar que o conteúdo não transformou a qualidade da sua escrita discursiva, basta nos mandar uma mensagem no WhatsApp para ter 100% do seu valor reembolsado.
            </p>
          </div>
        </div>

        {/* Final Strong CTA Callout Block */}
        <div className="mt-14 petrol-card rounded-3xl p-8 sm:p-10 text-center space-y-5 border-amber-500/40 bg-gradient-to-r from-[#071922] via-[#0a2734] to-[#071922]">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Pronto para destravar sua aprovação?
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-editorial max-w-2xl mx-auto">
            Não vá para a discursiva sem dominar a estrutura que a banca exige.
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Fale conosco agora pelo WhatsApp <strong className="text-white font-code">{WHATSAPP_PHONE_FORMATTED}</strong> e receba imediatamente o seu acesso completo.
          </p>
          <div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4.5 rounded-2xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-2xl shadow-amber-500/30 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Falar no WhatsApp e garantir meu acesso</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
