'use client';

import { Sparkles, MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5546988214928?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20ve%C3%ADculo%20na%20G%C3%AAnesis.';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#09090B] text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#" className="inline-flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/15 flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5 text-sky-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg tracking-[0.22em] uppercase text-white">
                    GÊNESIS
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-slate-400 font-medium -mt-0.5">
                    Estética Automotiva
                  </span>
                </div>
              </a>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
                Estúdio especializado em restauração minuciosa e proteção definitiva de veículos.
                Padrão internacional de detalhamento no bairro São Miguel em Francisco Beltrão - PR.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
                Google 5.0 ★★★★★ (67 Avaliações)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços Especializados
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais do Estúdio
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações no Google
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização e Horários
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Info */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold mb-4">
              CONTATO & ATENDIMENTO
            </h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span>Av. Progresso, 244 - São Miguel, Francisco Beltrão - PR</span>
              </p>
              <p className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition-colors"
                >
                  +55 (46) 98821-4928
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Seg a Sex: 07:00 - 18:00 | Sáb: 08:00 - 14:00</span>
              </p>
            </div>

            <div className="mt-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Solicitar agendamento exclusivo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Gênesis Estética Automotiva. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <span>Desenvolvido com padrão editorial automotivo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
