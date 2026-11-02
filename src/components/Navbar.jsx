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
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'FAQ', href: '#faq' },
  ];

  const whatsappLink = "https://wa.me/5561999999999?text=Ol%C3%A1%21%20Gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20com%20a%20DF%20Solu%C3%A7%C3%B5es%20Digitais.";

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
          {/* Logo Oficial */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-1.5 shadow-[0_0_18px_rgba(0,240,255,0.35)] group-hover:shadow-[0_0_28px_rgba(0,240,255,0.7)] group-hover:border-cyan-400 transition-all duration-300">
              <img
                src="/logo-white.png"
                alt="DF Digital Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black italic tracking-wide text-lg text-white group-hover:text-cyan-400 transition-colors">
                DF <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">DIGITAL</span>
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-cyan-400/80 font-semibold -mt-1">
                Soluções Digitais
              </span>
            </div>
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
              <span>Falar no WhatsApp</span>
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
