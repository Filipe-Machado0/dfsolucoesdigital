import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-[#00f0ff] selection:text-black">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Flow: Foco em Apresentação de Serviços & Solicitação de Orçamentos */}
      <main className="flex-grow">
        {/* 1. Apresentação Inicial & Chamadas Rápidas */}
        <Hero />

        {/* 2. Catálogo Interativo de Serviços (com Modais Detalhados) */}
        <Services />

        {/* 3. Solicitação de Orçamento Personalizado */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
