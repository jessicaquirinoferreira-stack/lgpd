import React from 'react';
import { WHATSAPP_LINK, LOGO_URL } from '../data/lgpdData.ts';
import { ArrowRight, BookOpen, CheckCircle2, Award, Sparkles, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#040e13] via-[#071922] to-[#051218]">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Official Prominent Brand Logo */}
            <div className="relative inline-block mx-auto lg:mx-0 group">
              {/* Subtle radiant aura behind the logo to make the dark blue letters perfectly legible */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-teal-400/20 to-amber-500/10 rounded-3xl blur-2xl opacity-80 pointer-events-none transform scale-110" />
              
              <img
                src={LOGO_URL}
                alt="Logo Redação LGPD em Ouro e Azul"
                referrerPolicy="no-referrer"
                className="relative h-24 sm:h-32 md:h-36 w-auto object-contain filter drop-shadow-[0_0_2px_rgba(255,255,255,0.45)] drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)] transition-all duration-300 transform group-hover:scale-105"
              />
            </div>

            {/* Editorial Kicker / Credibility indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a232e] border border-teal-500/30 text-xs text-teal-300 font-medium shadow-sm">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Módulo Estratégico · Foco 100% em Discursivas & Casos Práticos</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.14]">
              <span className="font-editorial block text-slate-100">Redação LGPD</span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-normal block mt-2 text-slate-200">
                O caminho prático para dominar as <span className="text-amber-400 font-semibold underline decoration-amber-500/40 underline-offset-8">discursivas e casos práticos</span> da Lei Geral de Proteção de Dados
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Diferente dos materiais que só repetem a teoria dos artigos, este entrega o <strong className="font-semibold text-white">raciocínio prático</strong> e a <strong className="font-semibold text-teal-300">estrutura técnica</strong> que as bancas realmente esperam de um candidato de alto nível.
            </p>

            {/* Micro-Features Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 pb-2 max-w-xl mx-auto lg:mx-0 text-left text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#081f29] border border-[#143d4e]">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Esqueleto Coringa em 3 Fases</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#081f29] border border-[#143d4e]">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Banco de Casos Resolvidos</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#081f29] border border-[#143d4e]">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Glossário de Termos ANPD</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/35 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 shrink-0" />
                <span>Quero dominar a estrutura que a banca espera</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#exemplos"
                className="w-full sm:w-auto px-5 py-3 sm:py-4 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-[#0b2430]/80 hover:bg-[#0f2e3d] border border-[#1a4a5e] rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
              >
                <BookOpen className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Ver Modelo Nota 10</span>
              </a>
            </div>

            {/* Trust and Exam Boards Strip */}
            <div className="pt-4 border-t border-[#143644] flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Bancas & Exames Mapeados:</span>
              <span className="text-slate-300">Cebraspe</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">FGV Concursos</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">FCC</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">Vunesp</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">EXIN / IAPP</span>
            </div>
          </div>

          {/* Right Column: Visual Exam Sheet Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative shadow behind sheet */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-amber-500/20 rounded-2xl blur-lg opacity-70" />

              {/* Main Card: Discursiva Official Correction Sheet Mockup */}
              <div className="relative rounded-2xl petrol-card p-6 shadow-2xl space-y-4">
                {/* Header of the correction sheet */}
                <div className="flex items-center justify-between pb-3 border-b border-[#163e50]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                    <span className="text-xs font-semibold text-slate-200 tracking-wide uppercase">
                      Espelho Padrão de Resposta
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold font-code">
                    <span>NOTA: 10,0 / 10,0</span>
                  </div>
                </div>

                {/* Case Question Snippet */}
                <div className="bg-[#05131a] rounded-xl p-3.5 border border-[#133848] text-xs space-y-1">
                  <div className="text-slate-400 font-semibold flex items-center justify-between">
                    <span>CASO PRÁTICO #04: INCIDENTE CIBERNÉTICO</span>
                    <span className="text-amber-400 font-code">30 LINHAS</span>
                  </div>
                  <p className="text-slate-300 italic line-clamp-2">
                    "Rede varejista sofre invasão com vazamento de dados de cartões e saúde de colaboradores..."
                  </p>
                </div>

                {/* Annotated lines simulating real high-scoring answer */}
                <div className="bg-[#061821]/80 rounded-xl p-4 border border-[#163f52] space-y-3 font-editorial text-sm text-slate-200 leading-relaxed relative">
                  <div className="text-[11px] font-sans font-semibold text-amber-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Trecho da Resposta Estruturada Redação LGPD:</span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-200">
                    "Na qualidade de <mark className="bg-amber-500/20 text-amber-300 px-1 py-0.5 rounded border border-amber-500/30 font-semibold font-sans">Controladora (art. 5º, VI)</mark>, compete à entidade a tomada das decisões relativas ao tratamento. Em decorrência do incidente de segurança, incide o dever inafastável de <mark className="bg-teal-500/20 text-teal-300 px-1 py-0.5 rounded border border-teal-500/30 font-semibold font-sans">comunicação tempestiva à ANPD e aos titulares (art. 48)</mark>, procedendo-se à imediata revisão do <mark className="bg-amber-500/20 text-amber-300 px-1 py-0.5 rounded border border-amber-500/30 font-semibold font-sans">RIPD</mark> e aplicação das salvaguardas..."
                  </p>
                </div>

                {/* Rubric evaluation criteria checklist */}
                <div className="space-y-2 pt-1 text-xs">
                  <div className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider">
                    Critérios Atendidos no Espelho:
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-slate-300 bg-[#05141b] px-2.5 py-1.5 rounded-lg border border-[#133949]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                        <span>Qualificação de Agentes (Controlador vs Operador)</span>
                      </span>
                      <span className="font-code text-teal-400 font-semibold">+2,5</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300 bg-[#05141b] px-2.5 py-1.5 rounded-lg border border-[#133949]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                        <span>Enquadramento Art. 48 & Notificação à ANPD</span>
                      </span>
                      <span className="font-code text-teal-400 font-semibold">+3,0</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300 bg-[#05141b] px-2.5 py-1.5 rounded-lg border border-[#133949]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                        <span>Medidas Mitigadoras, RIPD e Sanções Art. 52</span>
                      </span>
                      <span className="font-code text-teal-400 font-semibold">+4,5</span>
                    </div>
                  </div>
                </div>

                {/* Footer callout inside card with WhatsApp action */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-r from-teal-500/10 to-amber-500/10 border border-teal-500/30 text-xs text-slate-200 flex items-center justify-between hover:border-amber-400/50 transition-colors"
                >
                  <span className="font-medium">Guia em PDF + Banco de Questões</span>
                  <span className="font-bold text-amber-400 flex items-center gap-1">
                    Liberar no WhatsApp
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
