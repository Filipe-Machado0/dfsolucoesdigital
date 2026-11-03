import React from 'react';
import { MessageCircle, Mail, MapPin, ArrowUp, Send } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02040a] border-t border-cyan-500/15 pt-16 pb-12 overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src="/logo-horizontal-white.png"
                alt="DF Digital - Soluções Digitais"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(0,240,255,0.35)]"
              />
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Agência especializada em acelerar empresas através da criação de sites de alta conversão, gestão de tráfego pago e estratégias avançadas de marketing digital.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/5515991359386?text=Ol%C3%A1%21%20Gostaria%20de%20um%20atendimento%20com%20a%20DF%20Digital."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#catalogo-servicos" className="hover:text-cyan-400 transition-colors">Catálogo de Serviços</a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-cyan-400 transition-colors">Solicitar Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Soluções
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors">Criação de Sites</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors">Marketing Digital</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors">Gestão de Tráfego Pago</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors">Otimização SEO</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors">Landing Pages de Alta Conversão</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Atendimento
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Brasília - DF | Atendimento em Todo o Brasil</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="https://wa.me/5515991359386?text=Ol%C3%A1%21%20Gostaria%20de%20um%20atendimento%20com%20a%20DF%20Digital." target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  +55 (15) 99135-9386
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:contato@dfsolucoesdigitais.com.br" className="hover:text-cyan-400 transition-colors">
                  contato@dfsolucoesdigitais.com.br
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} DF Soluções Digitais. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Tecnologia, Inovação e Resultados Reais</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-1.5"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Topo</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
