import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Award, ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';
import { pillars } from '../data/servicesData';

export default function AboutUs() {
  const getIcon = (name) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-8 h-8 text-cyan-400 stroke-[2.2]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-sky-400 stroke-[2.2]" />;
      case 'Award':
        return <Award className="w-8 h-8 text-blue-400 stroke-[2.2]" />;
      default:
        return <Zap className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="quem-somos" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <img src="/logo-white.png" alt="DF" className="w-4 h-4 object-contain filter drop-shadow-[0_0_4px_rgba(0,240,255,0.8)]" />
            <span>Quem Somos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black italic text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase mb-6"
          >
            Fortalecendo negócios através da{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-glow-neon">
              excelência digital
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            A <strong className="text-white font-semibold">DF Soluções Digitais</strong> nasceu com um propósito claro: impulsionar marcas e empresas que não aceitam ser apenas mais uma na internet. Unimos engenharia de software de ponta, design disruptivo e marketing de resposta direta para transformar simples visitas em clientes recorrentes.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative group rounded-3xl p-8 bg-gradient-to-b from-[#0b1220]/90 to-[#070c18]/90 border border-white/10 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] flex flex-col justify-between"
            >
              {/* Top ambient glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 group-hover:bg-cyan-400/15 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />

              <div>
                {/* Icon wrapper with glowing circle */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 mb-6">
                  {getIcon(pillar.icon)}
                </div>

                <div className="text-xs font-bold uppercase tracking-widest text-cyan-400/90 mb-1">
                  {pillar.tagline}
                </div>

                {/* Pillar Title */}
                <h3 className="font-heading font-black italic text-2xl sm:text-3xl text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Status footer inside card */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-cyan-300 transition-colors">
                <span>Pilar Estratégico DF</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agency Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-blue-950/40 border border-cyan-500/20 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-slate-900/90 border border-cyan-400/40 p-2.5 shadow-[0_0_20px_rgba(0,240,255,0.35)] shrink-0 flex items-center justify-center">
              <img src="/logo-white.png" alt="DF Digital" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]" />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <h4 className="font-heading font-black italic text-2xl text-white">
                Pronto para construir sua autoridade digital?
              </h4>
              <p className="text-sm text-slate-300 max-w-xl">
                A equipe DF Digital analisa gratuitamente o cenário atual da sua presença online e monta um plano de ação personalizado.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5515991359386?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20a%20presen%C3%A7a%20online%20da%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-black italic text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:scale-[1.02] transition-all whitespace-nowrap"
          >
            <span>FALAR COM NOSSO TIME</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
