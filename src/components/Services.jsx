import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MessageCircle, 
  X, 
  Eye, 
  ShieldCheck, 
  ListOrdered,
  HelpCircle
} from 'lucide-react';
import { services, serviceCategories } from '../data/servicesData';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [activeModalService, setActiveModalService] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeModalService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalService]);

  const filteredServices = selectedCategory === 'todos'
    ? services
    : services.filter(s => s.category === selectedCategory);

  const getServiceIcon = (iconName, className = "w-7 h-7") => {
    switch (iconName) {
      case 'Layers':
        return <Layers className={`${className} text-cyan-400 stroke-[2]`} />;
      case 'Globe':
        return <Globe className={`${className} text-blue-400 stroke-[2]`} />;
      case 'Target':
        return <Target className={`${className} text-sky-400 stroke-[2]`} />;
      case 'TrendingUp':
        return <TrendingUp className={`${className} text-cyan-300 stroke-[2]`} />;
      case 'BarChart3':
        return <BarChart3 className={`${className} text-emerald-400 stroke-[2]`} />;
      case 'Cpu':
        return <Cpu className={`${className} text-sky-400 stroke-[2]`} />;
      default:
        return <Sparkles className={`${className} text-cyan-400`} />;
    }
  };

  return (
    <section id="catalogo-servicos" className="relative py-28 bg-[#020617] overflow-hidden">
      {/* Background neon ambient lights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catálogo Interativo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black italic text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase mb-6"
          >
            Nosso Catálogo de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-glow-neon">
              Soluções Digitais
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Explore nossos serviços especializados. Clique em qualquer card para ver entregáveis detalhados, para quem é indicado e como funciona nosso processo de execução.
          </motion.p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {serviceCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                    : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-cyan-500/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const waLink = `https://wa.me/5561999999999?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveModalService(service)}
                className={`relative group rounded-3xl p-8 bg-gradient-to-b from-[#0b1220]/95 via-[#070c18]/95 to-[#040812]/95 border border-white/10 ${service.borderGlow} transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] cursor-pointer`}
              >
                {/* Neon subtle background glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {service.subtitle}
                  </span>

                  {/* Title in Black Italic */}
                  <h3 className="font-heading font-black italic text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2 mb-8">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 stroke-[2.2]" />
                        <span className="text-xs text-slate-300">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-5 border-t border-white/10 flex flex-col gap-2.5">
                  {/* View Details Button (Trigger Modal) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalService(service);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/30 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver Detalhes do Serviço</span>
                  </button>

                  {/* Fast WhatsApp CTA */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-heading font-black italic text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* DETAILED INTERACTIVE SERVICE MODAL */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalService(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#090e1a] border-2 border-cyan-400/50 rounded-3xl shadow-[0_0_60px_rgba(0,240,255,0.3)] z-10 overflow-hidden max-h-[90vh] flex flex-col text-left"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-[#0d1627] to-[#080d19] relative">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800/80 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-cyan-500/40 p-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center justify-center">
                    <img src="/logo-white.png" alt="DF Digital" className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(0,240,255,0.7)]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
                      {activeModalService.badge}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {activeModalService.subtitle}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-black italic text-2xl sm:text-3xl text-white">
                  {activeModalService.title}
                </h3>
              </div>

              {/* Modal Body - Scrollable */}
              <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1 custom-scrollbar">
                
                {/* 1. Visão Geral */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Visão Geral & Importância</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {activeModalService.details.overview}
                  </p>
                </div>

                {/* 2. Para Quem é Indicado */}
                <div className="p-5 rounded-2xl bg-[#040812] border border-cyan-500/20">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2 mb-3">
                    <HelpCircle className="w-4 h-4" />
                    <span>Para Quem Esta Solução é Indicada?</span>
                  </h4>
                  <div className="space-y-2">
                    {activeModalService.details.targetAudience.map((target, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300">{target}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. O que Entregamos na Prática */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4" />
                    <span>O que Está Incluso na Nossa Entrega</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalService.details.deliverables.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5">
                        <span className="text-cyan-400 font-bold text-xs mt-0.5">•</span>
                        <span className="text-xs text-slate-200 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Nosso Processo Passo a Passo */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                    <ListOrdered className="w-4 h-4" />
                    <span>Como Funciona o Processo de Execução</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalService.details.process.map((p, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#060b17] border border-white/5">
                        <div className="font-heading font-black italic text-sm text-cyan-400 mb-1">
                          {p.step}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {p.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Alinhamento de Expectativas & Transparência */}
                <div className="p-4 rounded-xl bg-slate-900/40 border border-yellow-500/20 text-xs text-slate-300 flex items-start gap-3">
                  <div className="p-1 rounded bg-yellow-500/10 text-yellow-400 shrink-0 font-bold">
                    ⚖️
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Nosso Compromisso de Transparência:</strong>
                    <span>{activeModalService.details.commitment}</span>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-5 sm:p-6 border-t border-white/10 bg-[#060a14] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  Fechar Detalhes
                </button>

                <a
                  href={`https://wa.me/5561999999999?text=${encodeURIComponent(activeModalService.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-black italic text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all"
                >
                  <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                  <span>SOLICITAR PROPOSTA PARA ESTE SERVIÇO</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
