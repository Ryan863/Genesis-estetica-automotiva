'use client';

import { useRef } from 'react';
import { Star, Clock, ShieldCheck, Award } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AuthorityMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const count67Ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      // Counter animation for 67 reviews
      const counterObj = { val: 0 };
      gsap.to(counterObj, {
        val: 67,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        onUpdate: () => {
          if (count67Ref.current) {
            count67Ref.current.innerText = Math.round(counterObj.val).toString();
          }
        },
      });

      // Staggered reveal for metric cards
      gsap.from('.metric-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="autoridade"
      ref={containerRef}
      className="relative z-20 py-16 sm:py-20 bg-[#09090B] border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {/* Metric 1: Google 5.0 Rating */}
          <div className="metric-card lg:px-8 py-4 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase font-semibold">
                GOOGLE REVIEWS
              </span>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-1.5">
                <span>5.0</span>
                <span className="text-sm font-medium text-slate-400">
                  (<span ref={count67Ref}>67</span> avaliações)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal leading-relaxed">
                Classificação máxima e 100% de satisfação dos clientes no Google Maps.
              </p>
            </div>
          </div>

          {/* Metric 2: Hora Marcada */}
          <div className="metric-card lg:px-8 py-4 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase font-semibold">
                EXCLUSIVIDADE
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                Hora Marcada
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal leading-relaxed">
                Planejamento minucioso e tempo dedicado com exclusividade ao seu veículo.
              </p>
            </div>
          </div>

          {/* Metric 3: Abertura às 07h */}
          <div className="metric-card lg:px-8 py-4 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase font-semibold">
                CONVENIÊNCIA
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                Abertura às 07h
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal leading-relaxed">
                Início matutino antecipado para você entregar seu carro antes do expediente.
              </p>
            </div>
          </div>

          {/* Metric 4: Alto Padrão */}
          <div className="metric-card lg:px-8 py-4 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase font-semibold">
                PRECISÃO
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                Alto Padrão
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal leading-relaxed">
                Processos técnicos certificados, químicos nobres e iluminação LED de inspeção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
