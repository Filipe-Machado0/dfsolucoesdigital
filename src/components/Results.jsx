import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Users2, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { workPhilosophy } from '../data/servicesData';

export default function Results() {
  const getPillarIcon = (name) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-cyan-400 stroke-[2.2]" />;
      case 'Eye':
        return <Eye className="w-7 h-7 text-sky-400 stroke-[2.2]" />;
      case 'Users2':
        return <Users2 className="w-7 h-7 text-blue-400 stroke-[2.2]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 text-cyan-300 stroke-[2.2]" />;
      default:
        return <Sparkles className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="metodologia" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background glow mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossa Metodologia</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black italic text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase mb-6"
          >
            Estratégia digital focada em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-glow-neon">
              eficiência e crescimento
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Combinamos planejamento sob medida, engenharia web de alta performance e gestão técnica de anúncios para extrair o melhor rendimento do investimento da sua empresa.
          </motion.p>
        </div>

        {/* Strategic Framework Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0b1424] via-[#070c18] to-[#040812] border-2 border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] mb-16 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Alinhamento & Gestão Inteligente
            </span>

            <h3 className="font-heading font-black italic text-2xl sm:text-3xl text-white">
              Como atuamos na aceleração do seu negócio
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Analisamos a fundo a margem do seu produto, o público-alvo e o ciclo comercial antes de estruturar qualquer ação de mídia. Desenvolvemos soluções personalizadas que conectam design profissional, tráfego qualificado e leitura contínua de métricas.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Nosso compromisso com a sua marca: <strong className="text-white">gestão técnica rigorosa</strong>, clareza total sobre os números das suas campanhas, <strong className="text-cyan-400">testes constantes de criativos e páginas</strong>, e atendimento consultivo direto com quem realmente executa o seu projeto.
            </p>
          </div>
        </motion.div>

        {/* 4 Pillars of Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {workPhilosophy.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-[#070c18] border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center mb-4">
                  {getPillarIcon(item.icon)}
                </div>
                <h4 className="font-heading font-bold text-base text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
