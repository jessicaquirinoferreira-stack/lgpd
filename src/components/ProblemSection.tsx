import React from 'react';
import { AlertTriangle, FileX, MessageSquareX, BookX, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/lgpdData.ts';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-20 bg-[#051218] border-t border-[#143644] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-semibold text-red-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>A Realidade Oculta das Discursivas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-editorial">
            Você conhece os artigos da LGPD, mas na hora de escrever a discursiva parece que trava?
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            A maioria dos candidatos estuda centenas de páginas de teoria, decora os 65 artigos da lei, mas na hora de enfrentar o caso prático na folha de resposta, comete os mesmos erros que derrubam a nota.
          </p>
        </div>

        {/* 3 Main Friction Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14">
          {/* Pain 1 */}
          <div className="petrol-card rounded-2xl p-6 sm:p-7 space-y-4 petrol-card-interactive group border-red-500/20 hover:border-red-500/40">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <FileX className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              1. O "Bloqueio do Primeiro Parágrafo"
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Você lê o caso, entende a matéria, mas gasta 15 minutos preciosos sem saber por onde começar. Não tem um esqueleto mental pronto para abrir a resposta com segurança e autoridade jurídica.
            </p>
            <div className="pt-2 text-xs text-red-300/90 bg-red-950/30 p-3 rounded-xl border border-red-900/40">
              <strong>Impacto no Espelho:</strong> Perda de tempo crucial e parágrafos sem enquadramento técnico.
            </div>
          </div>

          {/* Pain 2 */}
          <div className="petrol-card rounded-2xl p-6 sm:p-7 space-y-4 petrol-card-interactive group border-red-500/20 hover:border-red-500/40">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <MessageSquareX className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              2. Vocabulário Leigo e Amador
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Usa termos cotidianos como "a empresa dona dos dados", "avisar a polícia" ou "pedir desculpas aos clientes". O examinador da banca procura as palavras-chave do espelho e simplesmente não encontra.
            </p>
            <div className="pt-2 text-xs text-red-300/90 bg-red-950/30 p-3 rounded-xl border border-red-900/40">
              <strong>Impacto no Espelho:</strong> Desconto severo no quesito terminologia regulatória e precisão.
            </div>
          </div>

          {/* Pain 3 */}
          <div className="petrol-card rounded-2xl p-6 sm:p-7 space-y-4 petrol-card-interactive group border-red-500/20 hover:border-red-500/40">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <BookX className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              3. Citação Solta Sem Subsunção
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Menciona artigos de forma decorada, mas não conecta a norma à solução concreta que o examinador pediu para o caso apresentado no enunciado.
            </p>
            <div className="pt-2 text-xs text-red-300/90 bg-red-950/30 p-3 rounded-xl border border-red-900/40">
              <strong>Impacto no Espelho:</strong> Nota mínima no quesito de resolução prática do caso fático.
            </div>
          </div>
        </div>

        {/* Highlight Callout */}
        <div className="mt-12 petrol-card rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-amber-500/30">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              A Regra de Ouro das Bancas Examinadoras
            </div>
            <div className="text-lg sm:text-xl font-semibold text-white font-editorial">
              "A banca não mede quem leu mais doutrina. A banca confere quem atende rigorosamente ao espelho."
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              O que separa uma nota 4,0 de uma nota 10,0 não é a quantidade de horas de estudo, mas sim a técnica de estruturação da resposta.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Receber o guia completo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
