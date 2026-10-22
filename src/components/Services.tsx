'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ShieldCheck, Sparkles, Wind, Layers, Wrench, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  benefits: string[];
  image: string;
  icon: typeof ShieldCheck;
  waParam: string;
}

const services: ServiceItem[] = [
  {
    id: 'vitrificacao',
    title: 'Vitrificação & Proteção Cerâmica',
    tag: 'DURABILIDADE & BRILHO SUPREMO',
    description:
      'Criação de camada vítrea nanotecnológica sobre o verniz original. Garante proteção extrema contra intempéries, raios UV, fezes de aves e seiva, além de repelência hídrica e brilho espelhado duradouro.',
    benefits: [
      'Super repelência à água e sujidades',
      'Proteção UV contra desbotamento precoce',
      'Profundidade e reflexão de cor incomparável',
      'Facilidade extrema nas lavagens de manutenção',
    ],
    image: '/images/service-vitrificacao.jpg',
    icon: ShieldCheck,
    waParam: 'Vitrificação & Proteção Cerâmica',
  },
  {
    id: 'polimento',
    title: 'Correção de Pintura (Polimento Técnico)',
    tag: 'RESTAURAÇÃO DO VERNIZ',
    description:
      'Processo minucioso de nivelamento micrométrico do verniz para eliminação definitiva de teias de aranha (swirls), micro-arranhões, hologramas e marcas de lavagens incorretas.',
    benefits: [
      'Remoção de 85% a 95% dos defeitos superficiais',
      'Restauração da nitidez e espelhamento óptico',
      'Aferição constante de espessura com micrômetro digital',
      'Inspeção sob réguas e spots de LED multi-espectro',
    ],
    image: '/images/service-polimento.jpg',
    icon: Sparkles,
    waParam: 'Polimento Técnico e Correção de Pintura',
  },
  {
    id: 'higienizacao',
    title: 'Higienização Interna & Oxi-Sanitização',
    tag: 'SAÚDE & CONFORTO A BORDO',
    description:
      'Descontaminação profunda de estofados, carpetes, teto, forros de porta e condutas do ar-condicionado com vapor térmico e geração de ozônio para esterilização de fungos, ácaros e bactérias.',
    benefits: [
      'Eliminação biológica de ácaros e odores desagradáveis',
      'Secagem técnica sem deixar umidade residual',
      'Sanitização completa do sistema de ar-condicionado',
      'Acabamento fosco original de fábrica, sem silicone gorduroso',
    ],
    image: '/images/service-higienizacao.jpg',
    icon: Wind,
    waParam: 'Higienização Interna e Oxi-Sanitização',
  },
  {
    id: 'couro',
    title: 'Tratamento & Condicionamento de Couro',
    tag: 'PRESERVAÇÃO ARTESANAL',
    description:
      'Limpeza técnica com pH neutro para desobstrução dos poros do couro, seguida de hidratação profunda e aplicação de selante protetor para prevenir rachaduras, desbotamento e rigidez.',
    benefits: [
      'Devolução do toque aveludado e flexibilidade natural',
      'Acabamento fosco nobre (sem brilho artificial oleoso)',
      'Barreira contra transferência de tinta de roupas (jeans)',
      'Proteção contra ressecamento causado pelo sol',
    ],
    image: '/images/service-couro.jpg',
    icon: Layers,
    waParam: 'Tratamento e Condicionamento de Couro',
  },
  {
    id: 'motor',
    title: 'Detalhamento de Motor & Caixas de Roda',
    tag: 'ENGENHARIA & PRECISÃO VISUAL',
    description:
      'Limpeza técnica detalhada do cofre do motor com isolamento térmico e elétrico rigoroso. Aplicação de verniz protetor térmico que hidrata mangueiras, conectores e plásticos com acabamento acetinado.',
    benefits: [
      'Proteção dielétrica para componentes elétricos',
      'Prevenção contra corrosão prematura e oxidação',
      'Verniz específico que resiste a altas temperaturas',
      'Estética impecável de carro de exposição',
    ],
    image: '/images/service-motor.jpg',
    icon: Wrench,
    waParam: 'Detalhamento de Motor e Caixas de Roda',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.services-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#09090B] text-white overflow-hidden"
    >
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-sky-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="services-header max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            CATÁLOGO TÉCNICO EXCLUSIVO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            Tratamentos Especializados de{' '}
            <span className="font-editorial text-sky-200 font-normal italic lowercase tracking-normal">
              alta precisão
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Cada veículo possui uma necessidade individual. Empregamos protocolos internacionais e
            insumos de nível mundial para entregar o padrão estético definitivo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const waLink = `https://wa.me/5546988214928?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20servi%C3%A7o%20de%20${encodeURIComponent(
              service.waParam
            )}%20na%20G%C3%AAnesis.`;

            return (
              <div
                key={service.id}
                className={`service-card group rounded-2xl sm:rounded-3xl bg-[#121214] border border-white/10 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_20px_45px_-15px_rgba(56,189,248,0.15)] ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Image Container with Ambient Overlay */}
                  <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden bg-black/40">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-transparent" />

                    {/* Tag badge over image */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider bg-black/70 backdrop-blur-md text-sky-300 border border-white/10">
                        <IconComponent className="w-3.5 h-3.5 text-sky-400" />
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-sky-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Technical Benefits */}
                    <div className="mt-6 pt-6 border-t border-white/5 space-y-2.5">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Card */}
                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/5 group-hover:bg-sky-500 group-hover:text-black border border-white/10 group-hover:border-transparent transition-all duration-300"
                  >
                    <span>Consultar este serviço</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
