'use client';

import { useState, useEffect, useRef } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

const WHATSAPP_URL =
  'https://wa.me/5546988214928?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20ve%C3%ADculo%20na%20G%C3%AAnesis.';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    },
    { scope: navRef }
  );

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-md bg-black/85 border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-transparent border-b border-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/15 flex items-center justify-center text-white shadow-inner group-hover:border-sky-400/50 transition-colors">
              <Sparkles className="w-5 h-5 text-sky-400 transition-transform group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-[0.22em] uppercase text-white group-hover:text-sky-200 transition-colors">
                GÊNESIS
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-slate-400 font-medium -mt-0.5">
                Estética Automotiva
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#servicos"
              className="text-xs lg:text-sm font-medium tracking-wider text-slate-300 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-sky-400 hover:after:w-full after:transition-all after:duration-300"
            >
              SERVIÇOS
            </a>
            <a
              href="#diferenciais"
              className="text-xs lg:text-sm font-medium tracking-wider text-slate-300 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-sky-400 hover:after:w-full after:transition-all after:duration-300"
            >
              DIFERENCIAIS
            </a>
            <a
              href="#avaliacoes"
              className="text-xs lg:text-sm font-medium tracking-wider text-slate-300 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-sky-400 hover:after:w-full after:transition-all after:duration-300"
            >
              AVALIAÇÕES
            </a>
            <a
              href="#localizacao"
              className="text-xs lg:text-sm font-medium tracking-wider text-slate-300 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-sky-400 hover:after:w-full after:transition-all after:duration-300"
            >
              LOCALIZAÇÃO
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-sky-400/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] active:scale-95"
            >
              <span>Agendar Horário</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Abrir menu principal"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col justify-between px-6 pt-24 pb-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          <a
            href="#servicos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold tracking-wider text-slate-200 hover:text-sky-400 transition-colors py-2 border-b border-white/5"
          >
            SERVIÇOS
          </a>
          <a
            href="#diferenciais"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold tracking-wider text-slate-200 hover:text-sky-400 transition-colors py-2 border-b border-white/5"
          >
            DIFERENCIAIS
          </a>
          <a
            href="#avaliacoes"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold tracking-wider text-slate-200 hover:text-sky-400 transition-colors py-2 border-b border-white/5"
          >
            AVALIAÇÕES
          </a>
          <a
            href="#localizacao"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold tracking-wider text-slate-200 hover:text-sky-400 transition-colors py-2 border-b border-white/5"
          >
            LOCALIZAÇÃO
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 rounded-full text-center font-bold text-sm uppercase tracking-wider text-white bg-sky-500 hover:bg-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Agendar pelo WhatsApp</span>
          </a>
          <p className="text-center text-xs text-slate-500 tracking-wide mt-2">
            Francisco Beltrão - PR • Atendimento com hora marcada
          </p>
        </div>
      </div>
    </>
  );
}
