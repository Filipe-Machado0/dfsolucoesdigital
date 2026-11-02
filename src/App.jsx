import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Results from './components/Results';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-[#00f0ff] selection:text-black">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Quem Somos */}
        <AboutUs />

        {/* Nossos Serviços (Cards Dinâmicos) */}
        <Services />

        {/* Resultados & Prova Social (Contadores Animados) */}
        <Results />

        {/* FAQ */}
        <FAQ />

        {/* Call to Action Final */}
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
