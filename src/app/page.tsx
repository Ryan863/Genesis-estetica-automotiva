import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AuthorityMetrics from '@/components/AuthorityMetrics';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Reviews from '@/components/Reviews';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="relative bg-[#09090B] text-[#F8FAFC] min-h-screen selection:bg-sky-500/20 selection:text-sky-200">
      {/* 100% Transparent-to-frosted Glass Navbar */}
      <Navbar />

      {/* Dobra 1: Hero Section (100vh Full-Bleed Studio Automotive Photography) */}
      <Hero />

      {/* Dobra 2: Faixa de Autoridade & Métricas Técnicas */}
      <AuthorityMetrics />

      {/* Dobra 3: Catálogo de Serviços Especializados */}
      <Services />

      {/* Dobra 4: Por Que Escolher a Gênesis? (Diferenciais de Estúdio) */}
      <WhyUs />

      {/* Dobra 5: Prova Social (Google Maps 5.0 ★ baseada em 67 avaliações reais) */}
      <Reviews />

      {/* Dobra 6: Localização, Horários e Agendamento */}
      <LocationSection />

      {/* Dobra 7: Rodapé Minimalista */}
      <Footer />

      {/* High Conversion Floating WhatsApp Trigger */}
      <FloatingWhatsApp />
    </main>
  );
}
