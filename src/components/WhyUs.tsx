'use client';

import { useRef } from 'react';
import { ShieldCheck, Clock, Sparkles, MapPin, Eye, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const differentials = [
  {
    icon: Eye,
    title: 'Iluminação Técnica LED Multidirecional',
    description:
      'Estúdio equipado com luminárias geométricas em LED de alto índice de reprodução de cor (CRI), revelando micro-imperfeições invisíveis sob a luz solar comum.',
  },
  {
    icon: Sparkles,
    title: 'Químicos Nobres & Tecnologia Internacional',
    description:
      'Utilizamos exclusivamente compostos polidores, selantes cerâmicos e condicionadores de marcas líderes globais, livres de silicone e aditivos nocivos ao verniz.',
  },
  {
    icon: Clock,
    title: 'Atendimento Exclusivo por Hora Marcada',
    description:
      'Eliminamos filas e pressa. Cada veículo recebe o tempo necessário para a execução perfeita de cada etapa, com cronograma rigorosamente respeitado.',
  },
  {
    icon: ShieldCheck,
    title: 'Abertura Matutina às 07:00',
    description:
      'Flexibilidade de horário para facilitar o seu dia a dia. Você pode entregar seu veículo antes do início do expediente de trabalho.',
  },
  {
    icon: MapPin,
    title: 'Estrutura Ampla & Acessibilidade Completa',
    description:
      'Localização estratégica na Av. Progresso no bairro São Miguel em Francisco Beltrão, com ambiente seguro, coberto e monitorado.',
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.why-left',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.diff-card',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#121214] border-t border-white/10 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Manifesto / Craftsmanship Philosophy */}
          <div className="why-left lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                DIFERENCIAL DE ATELIER
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
                Distante da correria de lavagens{' '}
                <span className="font-editorial text-sky-200 font-normal italic lowercase tracking-normal">
                  convencionais
                </span>
              </h2>
              <p className="mt-6 text-base text-slate-300 leading-relaxed font-normal">
                Na <strong className="text-white">Gênesis</strong>, encaramos cada automóvel como uma obra de
                engenharia que merece respeito e dedicação artesanal. Diferente de lavajatos rápidos que
                utilizam produtos agressivos e panos contaminados que riscam a pintura, nosso processo
                é estritamente cirúrgico.
              </p>
              <p className="mt-4 text-base text-slate-400 leading-relaxed font-normal">
                Nossos clientes não buscam apenas um carro limpo; buscam a conservação do patrimônio,
                o resgate da profundidade de fábrica e o prazer de dirigir um veículo com visual
                impecável.
              </p>
            </div>

            {/* Quote badge */}
            <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-sky-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                  Compromisso com o Cliente
                </span>
              </div>
              <p className="text-sm italic text-slate-300">
                &ldquo;Transparência total no diagnóstico da pintura e honestidade absoluta quanto ao
                resultado que cada técnica pode entregar.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Practical Differentials Cards */}
          <div className="diff-list lg:col-span-7 flex flex-col gap-4">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="diff-card group p-6 rounded-2xl bg-[#18181B] border border-white/5 hover:border-sky-500/30 transition-all duration-300 flex items-start gap-5 hover:translate-x-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-sky-500/10 border border-white/10 group-hover:border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-sky-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
