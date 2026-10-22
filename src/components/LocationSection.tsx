'use client';

import { useRef } from 'react';
import { MapPin, Clock, Phone, Navigation, ArrowUpRight, MessageSquareQuote } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const GOOGLE_MAPS_ROUTE_URL =
  'https://www.google.com/maps/search/?api=1&query=Genesis+Estetica+Automotiva+Francisco+Beltrao&query_place_id=ChIJk5pVKRRz8JQRNO2mc9QYJGU';

const WHATSAPP_URL =
  'https://wa.me/5546988214928?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20ve%C3%ADculo%20na%20G%C3%AAnesis.';

export default function LocationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.location-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="localizacao"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#121214] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            LOCALIZAÇÃO & ATENDIMENTO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Venha nos visitar em{' '}
            <span className="font-editorial text-sky-200 font-normal italic lowercase tracking-normal">
              Francisco Beltrão
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Estrutura climatizada, moderna e planejada para o cuidado minucioso do seu patrimônio com
            hora marcada no bairro São Miguel.
          </p>
        </div>

        {/* 2-Column Layout: Details + Map Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Info Cards (Horários, Endereço, Contato) */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {/* Address Card */}
            <div className="location-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#18181B] border border-white/10 hover:border-sky-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase font-semibold">
                    ENDEREÇO OFICIAL
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Bairro São Miguel</h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    Av. Progresso, 244 - São Miguel
                    <br />
                    Francisco Beltrão - PR, CEP 85602-100
                  </p>
                  <div className="mt-4">
                    <a
                      href={GOOGLE_MAPS_ROUTE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-sky-500/20 hover:bg-sky-500 text-sky-300 hover:text-black border border-sky-500/30 hover:border-transparent transition-all duration-300"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Abrir no Google Maps (Traçar Rota)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="location-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#18181B] border border-white/10 hover:border-sky-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase font-semibold">
                    HORÁRIOS DE ATENDIMENTO
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Semana & Finais de Semana</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="font-medium">Segunda a Sexta-feira:</span>
                      <span className="font-mono text-sky-300 font-semibold">07:00 às 18:00</span>
                    </li>
                    <li className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="font-medium">Sábado:</span>
                      <span className="font-mono text-sky-300 font-semibold">08:00 às 14:00</span>
                    </li>
                    <li className="flex items-center justify-between py-1">
                      <span className="font-medium text-slate-500">Domingo:</span>
                      <span className="text-slate-500 font-medium">Fechado</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-slate-400 italic">
                    * Atendimento com agendamento prévio para garantir a exclusividade do seu horário.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="location-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#18181B] border border-white/10 hover:border-sky-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                    WHATSAPP & CONTATO DIRETO
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">+55 (46) 98821-4928</h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Fale diretamente com nossa equipe técnica para tirar dúvidas e agendar sua avaliação.
                  </p>
                  <div className="mt-4">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 active:scale-95"
                    >
                      <MessageSquareQuote className="w-4 h-4" />
                      <span>Iniciar Conversa no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Stylized Map Card */}
          <div className="location-card lg:col-span-6 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#18181B] border border-white/10 relative min-h-[420px] flex flex-col justify-between">
            {/* Embedded Google Maps with Dark Filter */}
            <div className="relative w-full h-full min-h-[380px] lg:min-h-full">
              <iframe
                title="Localização da Gênesis Estética Automotiva no Google Maps"
                src="https://maps.google.com/maps?q=Av.%20Progresso,%20244%20-%20S%C3%A3o%20Miguel,%20Francisco%20Beltr%C3%A3o%20-%20PR,%2085602-100&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0 filter invert-[90%] hue-rotate-180 contrast-[88%] opacity-85"
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 right-4 sm:right-auto z-10 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 max-w-sm shadow-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Gênesis Estética Automotiva
                </div>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  Av. Progresso, 244 - São Miguel, Francisco Beltrão - PR
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={GOOGLE_MAPS_ROUTE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-300 hover:text-white uppercase tracking-wider"
                  >
                    <span>Ver no aplicativo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
