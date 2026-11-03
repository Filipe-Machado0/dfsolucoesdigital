import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Sparkles, Send, CheckCircle2, PhoneCall } from 'lucide-react';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    service: 'Criação de Sites',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá! Me chamo ${formData.name || 'um cliente'}${formData.company ? ` da empresa ${formData.company}` : ''}. Tenho interesse em solicitar um orçamento para: *${formData.service}*. ${formData.notes ? `Observações: ${formData.notes}` : ''}`;
    const whatsappUrl = `https://wa.me/5515991359386?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="orcamento" className="relative py-28 bg-[#030712] overflow-hidden scroll-mt-10">
      {/* Background Neon Flare via Ultra-fast Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.14)_0%,rgba(14,165,233,0.06)_45%,transparent_75%)] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-b from-[#0e1726] via-[#080d1a] to-[#040813] border-2 border-cyan-400/40 shadow-[0_0_60px_rgba(0,240,255,0.25)] overflow-hidden">
          {/* Subtle Top Neon Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Pitch & Value proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center mb-2">
                <img
                  src="/logo-horizontal-white.png"
                  alt="DF Digital - Soluções Digitais"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Orçamento Rápido & Sem Compromisso</span>
              </div>

              <h2 className="font-heading font-black italic text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.1]">
                Solicite seu orçamento{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-glow-neon">
                  personalizado.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Conte-nos sobre o seu projeto e receba uma proposta técnica sob medida para a sua empresa, com total transparência e alinhamento de expectativas — sem custo e sem compromisso.
              </p>

              {/* Check list */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-slate-200 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 stroke-[2.5]" />
                  <span>Diagnóstico gratuito sem compromisso</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 stroke-[2.5]" />
                  <span>Proposta comercial detalhada em menos de 24 horas</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 stroke-[2.5]" />
                  <span>Estratégia personalizada para o seu nicho de atuação</span>
                </div>
              </div>

              {/* Direct Quick WhatsApp Button */}
              <div className="pt-4">
                <a
                  href="https://wa.me/5515991359386?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20personalizado%20com%20a%20DF%20Digital."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-black italic text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:shadow-[0_0_40px_rgba(0,240,255,0.9)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-5 h-5 stroke-[2.5]" />
                  <span>SOLICITAR ORÇAMENTO IMEDIATO</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Right Column: Quick Interactive Quote Form */}
            <div className="lg:col-span-5 bg-slate-950/80 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-md shadow-2xl">
              <div className="text-left mb-6">
                <h3 className="font-heading font-bold italic text-xl text-white mb-1">
                  Simule seu Orçamento
                </h3>
                <p className="text-xs text-slate-400">
                  Preencha abaixo e receba sua proposta técnica personalizada diretamente no WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Seu Nome ou Nome do Responsável
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João da Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Nome da Empresa / Negócio
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Minha Empresa Ltda"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Solução de Maior Interesse
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  >
                    <option value="Criação de Sites">Criação de Sites (Landing Pages & E-commerces)</option>
                    <option value="Marketing Digital">Marketing Digital & Redes Sociais</option>
                    <option value="Gestão de Tráfego">Gestão de Tráfego Pago (Meta/Google Ads)</option>
                    <option value="Combo Completo">Combo Completo (Site + Tráfego + Marketing)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Mensagem ou Objetivo (Opcional)
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Conte brevemente o que sua empresa precisa hoje..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-heading font-black italic text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>GERAR ORÇAMENTO NO WHATSAPP</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
