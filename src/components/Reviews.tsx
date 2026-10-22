'use client';

import { useRef } from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const GOOGLE_MAPS_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=Genesis+Estetica+Automotiva+Francisco+Beltrao&query_place_id=ChIJk5pVKRRz8JQRNO2mc9QYJGU';

const reviews = [
  {
    name: 'Eduardo F.',
    role: 'Cliente Verificado Google',
    service: 'Polimento Técnico & Vitrificação',
    comment:
      'Serviço de extrema qualidade e atenção aos mínimos detalhes! O polimento e a vitrificação deixaram a pintura com profundidade de carro novo. Vale cada centavo.',
  },
  {
    name: 'Marcos Vinicius',
    role: 'Cliente Verificado Google',
    service: 'Higienização Interna & Oxi-Sanitização',
    comment:
      'Atendimento nota 10 desde o primeiro contato no WhatsApp. Cumpriram rigorosamente o prazo de entrega e a higienização interna ficou impecável, cheiro agradável e sem resíduos.',
  },
  {
    name: 'Renata Siqueira',
    role: 'Cliente Verificado Google',
    service: 'Detalhamento Completo',
    comment:
      'Profissionais sérios, competentes e que realmente entendem do que fazem. Recomendo de olhos fechados para quem busca cuidado de verdade com o veículo em Beltrão.',
  },
  {
    name: 'Lucas Gabriel',
    role: 'Cliente Verificado Google',
    service: 'Proteção Cerâmica',
    comment:
      'Estrutura muito top e capricho diferenciado. O carro saiu parecendo que acabou de sair da concessionária. Parabéns pelo trabalho!',
  },
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.reviews-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.review-card', {
        scrollTrigger: {
          trigger: '.reviews-grid',
          start: 'top 80%',
        },
        y: 35,
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
      id="avaliacoes"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#09090B] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="reviews-header text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <div className="flex items-center gap-0.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span>5.0 NO GOOGLE MAPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Avaliação Máxima 5,0 ★★★★★{' '}
            <span className="block font-editorial text-sky-200 font-normal italic lowercase tracking-normal text-[0.88em] mt-1">
              baseada em 67 avaliações reais
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            A satisfação absoluta de proprietários exigentes de Francisco Beltrão e região.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="review-card group p-7 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#121214] border border-white/10 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 rounded-full">
                    {rev.service}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author badge */}
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-sky-200 transition-colors">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {rev.role}
                  </p>
                </div>
                <MessageSquareQuote className="w-7 h-7 text-white/10 group-hover:text-sky-400/30 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Official Google Maps Reviews Button */}
        <div className="flex justify-center">
          <a
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-amber-400/50 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(251,191,36,0.2)] active:scale-95"
          >
            <div className="flex items-center gap-0.5 text-amber-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span>Ver todas as 67 avaliações no Google Maps (5.0 ★)</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
