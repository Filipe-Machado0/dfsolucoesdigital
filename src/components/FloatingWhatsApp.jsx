import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = "https://wa.me/5515991359386?text=Ol%C3%A1%21%20Gostaria%20de%20um%20atendimento%20r%C3%A1pido%20com%20a%20DF%20Digital.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative bg-slate-900/95 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.3)] rounded-2xl p-3.5 max-w-xs text-xs text-slate-200 backdrop-blur-md flex items-start gap-2.5 transition-all animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-800 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar mensagem"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-1 text-cyan-400 font-bold uppercase tracking-wider text-[10px]">
              <img src="/logo-horizontal-white.png" alt="DF" className="h-3 w-auto object-contain" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Atendimento DF Digital</span>
            </div>
            <p className="font-medium text-slate-200">
              Olá! Quer tirar dúvidas sobre criação de sites ou anúncios online? Fale conosco agora no WhatsApp!
            </p>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(0,240,255,0.7)] hover:shadow-[0_0_40px_rgba(0,240,255,1)] hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Falar com DF Soluções Digitais no WhatsApp"
      >
        {/* Radar ping effect */}
        <span className="absolute -inset-1 rounded-full bg-cyan-400 opacity-60 animate-ping -z-10" />

        <MessageCircle className="w-8 h-8 text-slate-950 stroke-[2.4]" />

        {/* Live status badge */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-slate-950 rounded-full shadow-sm" />
      </a>
    </div>
  );
}
