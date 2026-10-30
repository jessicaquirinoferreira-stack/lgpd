import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'terms' ? (
          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
              <FileText className="w-5 h-5" />
              <span>Termos de Uso · Redação LGPD</span>
            </div>
            <p>
              Estes Termos de Uso regulam a aquisição e o acesso ao produto digital <strong>“O LGPD na Prática: Módulo Discursivas & Casos Práticos”</strong> (Redação LGPD).
            </p>
            <h4 className="font-bold text-white text-sm pt-2">1. Natureza do Conteúdo</h4>
            <p>
              O material disponibilizado consiste em guias em formato digital (PDF), esquemas mnemônicos, modelos de resposta e materiais didáticos de apoio para provas discursivas e estudos de caso sobre a Lei nº 13.709/2018. O produto não substitui consultoria jurídica individualizada nem garante pontuação mínima por si só, dependendo do esforço e da aplicação pelo adquirente.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">2. Propriedade Intelectual</h4>
            <p>
              Todo o conteúdo, diagramação, marcas e textos disponibilizados são de titularidade exclusiva de seus idealizadores. É expressamente vedada a reprodução total ou parcial, rateio, revenda ou distribuição não autorizada, sob as penas da Lei nº 9.610/1998.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">3. Garantia e Cancelamento</h4>
            <p>
              Nos termos do Código de Defesa do Consumidor e da política do produto, o comprador dispõe do prazo incondicional de 7 (sete) dias corridos a contar da data de compra para solicitar o reembolso integral dos valores pagos.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <Shield className="w-5 h-5" />
              <span>Política de Privacidade · Redação LGPD</span>
            </div>
            <p>
              Em estrito respeito à Lei Geral de Proteção de Dados (Lei nº 13.709/2018), reafirmamos nosso compromisso com a privacidade e a segurança dos dados pessoais de nossos alunos e visitantes.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">1. Agente de Tratamento e Finalidade</h4>
            <p>
              Na qualidade de Controladora de dados, tratamos unicamente as informações cadastrais mínimas necessárias (nome e e-mail) com a finalidade exclusiva de processar sua inscrição, entregar os arquivos adquiridos e disponibilizar eventuais atualizações de conteúdo da ANPD.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">2. Bases Legais Utilizadas</h4>
            <p>
              O tratamento dos dados apoia-se precipuamente na execução de contrato (art. 7º, V, da LGPD) e no cumprimento de obrigação legal e fiscal (art. 7º, II, da LGPD). Não comercializamos nem compartilhamos seus dados com terceiros para fins de publicidade.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">3. Direitos do Titular (Art. 18)</h4>
            <p>
              O titular poderá, a qualquer tempo, solicitar a confirmação da existência de tratamento, o acesso aos seus dados, a retificação de dados incorretos ou a eliminação dos dados desnecessários, mediante simples contato com o nosso canal de atendimento.
            </p>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
