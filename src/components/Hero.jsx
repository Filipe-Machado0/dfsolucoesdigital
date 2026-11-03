import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2, UserCheck, TrendingUp, Layers } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5561999999999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20DF%20Solu%C3%A7%C3%B5es%20Digitais%20e%20gostaria%20de%20um%20diagn%C3%B3stico%20para%20minha%20empresa.";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-pattern">
      {/* Ambient Neon Lighting via Ultra-fast Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.15)_0%,rgba(2,132,199,0.05)_50%,transparent_75%)] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.10)_0%,transparent_70%)] pointer-events-none -z-0" />

      {/* Ambient Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-[0.035] pointer-events-none -z-0">
        <img src="/logo-horizontal-white.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Pill Tag com Logo Oficial */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <img src="/logo-horizontal-white.png" alt="DF Digital" className="h-3.5 w-auto object-contain filter drop-shadow-[0_0_4px_rgba(0,240,255,0.8)]" />
            <span>Consultoria, Desenvolvimento & Estratégia Digital</span>
          </div>

          {/* Main Headline - Black Italic */}
          <h1 className="font-heading font-black italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[1.08] mb-6">
            Sua presença online,{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-glow-neon">
              levada mais longe.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Desenvolvemos <strong className="text-white font-semibold">sites profissionais</strong>, estruturamos campanhas de <strong className="text-cyan-400 font-semibold">tráfego pago</strong> e criamos estratégias de <strong className="text-sky-300 font-semibold">marketing sob medida</strong> para empresas que buscam autoridade e vendas reais — com transparência de ponta a ponta.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary CTA - WhatsApp Neon */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-heading font-black italic tracking-wide text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 shadow-[0_0_25px_rgba(0,240,255,0.55)] hover:shadow-[0_0_40px_rgba(0,240,255,0.9)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300 -z-10 animate-pulse" />
              <MessageCircle className="w-5 h-5 stroke-[2.5]" />
              <span>SOLICITAR ORÇAMENTO NO WHATSAPP</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#catalogo-servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-heading font-bold italic text-base text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-md"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Explorar Catálogo de Serviços</span>
            </a>
          </div>

          {/* Quick Commitments */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Estratégia Orientada a Dados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Acesso Total às Suas Contas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Atendimento Consultivo Direto</span>
            </div>
          </div>

        </div>

        {/* Value Pillars (Refinados e Mascarados) */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-neon-card group text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-bold px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                Atendimento Dedicado
              </span>
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <UserCheck className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Acompanhamento Consultivo
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Comunicação ágil e sem burocracias. Quem planeja e executa sua estratégia tem compromisso direto com os seus resultados.
            </p>
          </div>

          {/* Card 2 - Mascarado com sofisticação */}
          <div className="glass-panel p-6 rounded-2xl border border-sky-500/20 hover:border-sky-400/50 transition-all duration-300 hover:shadow-neon-card group text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] uppercase tracking-wider text-sky-400 font-bold px-2.5 py-1 rounded-md bg-sky-950/60 border border-sky-500/30">
                Performance & Mídia
              </span>
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Buscando Sempre o Melhor Retorno
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Estratégias sob medida para a realidade do seu negócio. Gestão de anúncios orientada a resultados práticos, testes contínuos e cuidado com a sua verba.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-neon-card group text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] uppercase tracking-wider text-blue-400 font-bold px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">
                Engenharia Web
              </span>
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Estruturas de Alta Conversão
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Desenvolvimento moderno e responsivo, projetado para carregar instantaneamente no celular e passar credibilidade imediata.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
