import React, { useState, useRef, useEffect } from 'react';
import { ASSISTANT_FAQS, WHATSAPP_PHONE, WHATSAPP_PHONE_FORMATTED } from '../data/lgpdData.ts';
import { X, MessageCircle, Send, Sparkles, ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  whatsappLink?: string;
  time: string;
}

export const VirtualAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Olá! Sou a Dra. Clara, consultora virtual do Redação LGPD. Posso responder rapidamente às suas dúvidas sobre o material ou te conectar direto com nosso especialista no WhatsApp. Como posso te ajudar?',
      time: 'Agora',
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSelectFaq = (faqId: string) => {
    const faq = ASSISTANT_FAQS.find((f) => f.id === faqId);
    if (!faq) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: faq.question,
      time: 'Agora',
    };

    const waText = faq.whatsappPrompt || `Olá! Quero tirar uma dúvida sobre o material Redação LGPD: ${faq.question}`;
    const waLink = `https://wa.me/55${WHATSAPP_PHONE}?text=${encodeURIComponent(waText)}`;

    const assistantMsg: ChatMessage = {
      id: `assistant_${Date.now()}`,
      sender: 'assistant',
      text: faq.answer,
      whatsappLink: waLink,
      time: 'Agora',
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const question = inputText.trim();
    setInputText('');

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: question,
      time: 'Agora',
    };

    const lowerQ = question.toLowerCase();
    let responseText = '';
    let waPrompt = `Olá! Tenho uma dúvida sobre o material Redação LGPD: "${question}"`;

    if (lowerQ.includes('preço') || lowerQ.includes('valor') || lowerQ.includes('quanto') || lowerQ.includes('custa') || lowerQ.includes('desconto')) {
      responseText = 'Liberamos uma condição especial de lançamento com desconto exclusivo diretamente no WhatsApp! Toque no botão abaixo para consultar o valor promocional e garantir todos os bônus inclusos.';
      waPrompt = 'Olá! Gostaria de consultar a condição promocional com desconto exclusivo do Redação LGPD.';
    } else if (lowerQ.includes('banca') || lowerQ.includes('fgv') || lowerQ.includes('cebraspe') || lowerQ.includes('fcc') || lowerQ.includes('vunesp')) {
      responseText = 'Sim! O método foi estruturado para atender aos espelhos de bancas exigentes como FGV, Cebraspe, FCC, Vunesp e bancas de concursos jurídicos e certificações (EXIN/IAPP).';
    } else if (lowerQ.includes('como recebo') || lowerQ.includes('envio') || lowerQ.includes('prazo') || lowerQ.includes('download')) {
      responseText = 'O envio é imediato! Assim que você fala com a gente no WhatsApp e confirma, os links dos arquivos em PDF são liberados na mesma hora no seu WhatsApp e e-mail.';
    } else if (lowerQ.includes('esqueleto') || lowerQ.includes('modelo') || lowerQ.includes('discursiva')) {
      responseText = 'O Esqueleto Coringa é uma matriz em 3 blocos: Introdução/Enquadramento de agentes, Fundamentação precisa nos artigos da LGPD e Medidas de Mitigação/ANPD. Cabe com perfeição em 20 a 30 linhas.';
    } else {
      responseText = `Entendido! Nossa equipe pode te dar todos os detalhes específicos sobre isso agora no WhatsApp oficial. Clique no botão abaixo para conversar:`;
    }

    const waLink = `https://wa.me/55${WHATSAPP_PHONE}?text=${encodeURIComponent(waPrompt)}`;

    const assistantMsg: ChatMessage = {
      id: `assistant_${Date.now()}`,
      sender: 'assistant',
      text: responseText,
      whatsappLink: waLink,
      time: 'Agora',
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
  };

  // AI-generated photorealistic portrait of female legal advisor
  const AvatarSVG = () => (
    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 shadow-md bg-gradient-to-tr from-[#0b2834] to-[#124255]">
      {/* SVG stylized photorealistic AI portrait avatar */}
      <svg viewBox="0 0 100 100" className="w-full h-full object-cover" aria-hidden="true">
        <defs>
          <radialGradient id="faceGrad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#ffdfca" />
            <stop offset="60%" stopColor="#f3c2a2" />
            <stop offset="100%" stopColor="#dfa785" />
          </radialGradient>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2c1a11" />
            <stop offset="50%" stopColor="#1e1009" />
            <stop offset="100%" stopColor="#140904" />
          </linearGradient>
          <linearGradient id="suitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0c232f" />
            <stop offset="100%" stopColor="#051016" />
          </linearGradient>
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        {/* Background circle */}
        <circle cx="50" cy="50" r="50" fill="#0d2833" />
        {/* Soft studio back illumination */}
        <circle cx="50" cy="42" r="38" fill="#184a5c" opacity="0.6" />
        
        {/* Hair Back */}
        <ellipse cx="50" cy="42" rx="28" ry="32" fill="url(#hairGrad)" />
        
        {/* Suit & Shoulders */}
        <path d="M12 96 C14 74, 30 70, 50 70 C70 70, 86 74, 88 96 Z" fill="url(#suitGrad)" />
        {/* Blouse White Collar */}
        <polygon points="50,68 40,84 60,84" fill="url(#shirtGrad)" />
        {/* Blazer Lapels */}
        <path d="M30 72 L45 92 L36 96 Z" fill="#091b24" />
        <path d="M70 72 L55 92 L64 96 Z" fill="#091b24" />
        {/* Gold Lapel Pin */}
        <circle cx="34" cy="78" r="2" fill="#d4af37" />

        {/* Neck */}
        <rect x="44" y="55" width="12" height="15" rx="4" fill="#dfa785" />
        
        {/* Face */}
        <ellipse cx="50" cy="44" rx="19" ry="22" fill="url(#faceGrad)" />
        
        {/* Hair Front / Bangs */}
        <path d="M31 38 C32 20, 68 20, 69 38 C62 30, 48 26, 31 38 Z" fill="url(#hairGrad)" />
        <path d="M30 40 C31 48, 33 55, 36 60 C33 50, 31 44, 30 40 Z" fill="url(#hairGrad)" />
        <path d="M70 40 C69 48, 67 55, 64 60 C67 50, 69 44, 70 40 Z" fill="url(#hairGrad)" />
        
        {/* Eyes & Brows */}
        <ellipse cx="43" cy="42" rx="2.2" ry="1.4" fill="#301b0f" />
        <ellipse cx="57" cy="42" rx="2.2" ry="1.4" fill="#301b0f" />
        <path d="M39 38 Q43 36 47 38" stroke="#2b1509" strokeWidth="1.2" fill="none" />
        <path d="M53 38 Q57 36 61 38" stroke="#2b1509" strokeWidth="1.2" fill="none" />
        
        {/* Soft Smile & Cheeks */}
        <ellipse cx="40" cy="48" rx="3" ry="1.5" fill="#f87171" opacity="0.3" />
        <ellipse cx="60" cy="48" rx="3" ry="1.5" fill="#f87171" opacity="0.3" />
        <path d="M45 52 Q50 56 55 52" stroke="#b91c1c" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </svg>
      {/* Active Green Dot */}
      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#051218]"></span>
    </div>
  );

  return (
    <>
      {/* Floating Button on the Left Corner */}
      <aside aria-label="Assistente Virtual" className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir assistente virtual Dra. Clara"
          className="group relative flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-r from-[#0b2430] to-[#0d2f3e] hover:from-[#0f3445] hover:to-[#134156] text-white rounded-full font-bold text-xs sm:text-sm shadow-2xl shadow-black/60 border border-teal-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          {/* Avatar Icon */}
          <AvatarSVG />

          {/* Text Info */}
          <div className="text-left hidden sm:block">
            <span className="block text-xs font-bold text-white leading-tight">
              Dra. Clara
            </span>
            <span className="block text-[10px] text-teal-300 font-medium">
              Assistente LGPD
            </span>
          </div>

          <span className="text-xs font-semibold text-teal-300 sm:hidden">
            Tirar Dúvidas
          </span>

          {/* Golden Notification Dot */}
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
          </span>
        </button>
      </aside>

      {/* Assistant Modal / Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-start p-3 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full sm:max-w-md bg-[#071922] border border-[#164052] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[620px] ml-0 sm:ml-4 mb-2 sm:mb-12">
            {/* Header */}
            <div className="p-4 bg-[#05131a] border-b border-[#143d4e] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AvatarSVG />
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Dra. Clara</span>
                    <span className="text-[10px] bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded font-mono">
                      IA Especialista
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                    <span>Consultora Redação LGPD · Online</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-[#0b2430] hover:bg-[#0f2e3d] transition-colors cursor-pointer"
                aria-label="Fechar assistente virtual"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs leading-relaxed">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 space-y-2 ${
                      msg.sender === 'user'
                        ? 'bg-amber-400 text-slate-950 font-medium rounded-tr-xs'
                        : 'bg-[#0b2532] text-slate-100 border border-[#174659] rounded-tl-xs'
                    }`}
                  >
                    <p>{msg.text}</p>

                    {/* Direct WhatsApp Action attached to assistant message */}
                    {msg.whatsappLink && (
                      <div className="pt-1 border-t border-[#1a4a5e]">
                        <a
                          href={msg.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md w-full justify-center"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                          <span>Falar no WhatsApp com o Especialista</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Question Chips */}
            <div className="p-3 bg-[#05141c] border-t border-[#123847] space-y-2">
              <span className="text-[11px] font-semibold text-slate-400 block">
                Perguntas Frequentes Rápidas:
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                {ASSISTANT_FAQS.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleSelectFaq(faq.id)}
                    className="text-[11px] bg-[#09222c] hover:bg-[#0e3343] text-teal-200 hover:text-white px-2.5 py-1.5 rounded-lg border border-[#164355] transition-colors cursor-pointer text-left"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-[#040e13] border-t border-[#102d3a] flex gap-2">
              <input
                type="text"
                placeholder="Digite sua dúvida aqui..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#081e28] border border-[#164052] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
              />
              <button
                type="submit"
                className="px-3.5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold transition-colors cursor-pointer shrink-0"
                aria-label="Enviar mensagem"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
