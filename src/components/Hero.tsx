'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, MessageSquareQuote, Star, ShieldCheck, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

const WHATSAPP_HERO_URL =
  'https://wa.me/5546988214928?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20ve%C3%ADculo%20na%20G%C3%AAnesis.';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          '.hero-title-line-1',
          {
            y: 35,
            opacity: 0,
            duration: 1,
          },
          '-=0.5'
        )
        .from(
          '.hero-title-line-2',
          {
            y: 35,
            opacity: 0,
            duration: 1.1,
          },
          '-=0.7'
        )
        .from(
          '.hero-subtitle',
          {
            y: 25,
            opacity: 0,
            duration: 0.9,
          },
          '-=0.6'
        )
        .from(
          '.hero-cta-group',
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          '.hero-trust-tag',
          {
            y: 15,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#09090B]"
    >
      {/* Background Image: Desktop (Landscape) */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/images/hero-car-desktop.png"
          alt="Gênesis Estética Automotiva - Estúdio Escuro com Iluminação Técnica LED"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 select-none"
        />
      </div>

      {/* Background Image: Mobile (Portrait) */}
      <div className="block md:hidden absolute inset-0 z-0">
        <Image
          src="/images/hero-car-mobile.png"
          alt="Gênesis Estética Automotiva - Estúdio Escuro Mobile"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none"
        />
      </div>

      {/* Cinematic Studio Gradient Masks */}
      {/* Top gradient for navbar clarity */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/85 via-black/40 to-transparent z-[1] pointer-events-none" />

      {/* Left & Center editorial gradient for crisp typography contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30 md:via-black/55 md:to-transparent z-[1] pointer-events-none" />

      {/* Bottom smooth dark transition to the next section */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent z-[1] pointer-events-none" />

      {/* Subtle Cyan Studio Glow in background */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none z-[1]" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-36 lg:pt-40 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
              FRANCISCO BELTRÃO - PR <span className="text-sky-400 mx-1">|</span> ESTÉTICA AUTOMOTIVA DE ALTA PRECISÃO
            </span>
          </div>

          {/* H1 Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            <span className="hero-title-line-1 block font-extrabold uppercase tracking-tight">
              A Restauração Minuciosa &
            </span>
            <span className="hero-title-line-2 block font-editorial text-sky-200/95 font-normal tracking-wide text-[1.12em] mt-1 sm:mt-2">
              A Proteção Definitiva
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-base sm:text-lg md:text-xl text-slate-300/90 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Tratamentos técnicos de polimento, vitrificação cerâmica e higienização detalhada.
            Cuidado artesanal com atendimento por hora marcada no bairro São Miguel.
          </p>

          {/* Clean CTA Buttons Group */}
          <div className="hero-cta-group flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            {/* Primary Action Button */}
            <a
              href={WHATSAPP_HERO_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-whatsapp"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-sky-300 via-sky-200 to-white hover:from-white hover:to-sky-200 shadow-[0_0_35px_rgba(56,189,248,0.4)] transition-all duration-300 active:scale-95"
            >
              <MessageSquareQuote className="w-5 h-5 text-sky-900 group-hover:scale-110 transition-transform" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-sky-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Secondary Action Button */}
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-300 active:scale-95"
            >
              <span>Ver Tratamentos</span>
            </a>
          </div>

          {/* Clean Trust Rating Indicator (Discreet & Elegant) */}
          <div className="hero-trust-tag flex items-center gap-3 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-semibold text-slate-200">5.0 ★</span>
            <span className="text-slate-500">•</span>
            <span>67 avaliações reais no Google Maps</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt Indicator */}
      <div className="relative z-10 pb-6 flex justify-center">
        <a
          href="#autoridade"
          aria-label="Rolar para a seção de autoridade e diferenciais"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-sky-400 transition-colors group"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold">DESCUBRA</span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-sky-400" />
        </a>
      </div>
    </section>
  );
}
