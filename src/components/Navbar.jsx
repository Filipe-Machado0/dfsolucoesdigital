import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Catálogo de Serviços', href: '#catalogo-servicos' },
    { label: 'Solicitar Orçamento', href: '#orcamento' },
  ];

  const whatsappLink = "https://wa.me/5561999999999?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20DF%20Solu%C3%A7%C3%B5es%20Digitais.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Oficial Horizontal */}
          <a href="#" className="flex items-center group py-0.5">
            <img
              src="/logo-horizontal-white.png"
              alt="DF Digital - Soluções Digitais"
              className="h-11 sm:h-12 md:h-14 lg:h-[68px] w-auto object-contain filter drop-shadow-[0_0_15px_rgba(0,240,255,0.45)] group-hover:drop-shadow-[0_0_25px_rgba(0,240,255,0.85)] group-hover:scale-[1.03] transition-all duration-300"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold italic text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-cyan-500/20 text-slate-200 hover:text-cyan-400 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070c18]/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-cyan-400 transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-black italic text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(0,240,255,0.5)]"
            >
              <MessageCircle className="w-4 h-4 stroke-[2.5]" />
              <span>Falar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
