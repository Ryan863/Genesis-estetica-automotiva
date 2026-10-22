'use client';

import { MessageSquareQuote } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5546988214928?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20ve%C3%ADculo%20na%20G%C3%AAnesis.';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Atendimento Direto no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group select-none"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative flex items-center justify-center gap-2.5 h-14 px-4 sm:px-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-300/30 backdrop-blur-sm"
      >
        {/* Pulsing online badge indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-[#09090B]" />
        </span>

        {/* WhatsApp Chat Icon */}
        <MessageSquareQuote className="w-6 h-6 text-white stroke-[2.2]" />

        <div className="hidden sm:flex flex-col text-left">
          <span className="font-bold text-xs uppercase tracking-wider text-white leading-tight">
            Falar no WhatsApp
          </span>
          <span className="text-[10px] text-emerald-100 font-medium leading-none">
            Atendimento imediato
          </span>
        </div>
      </a>
    </aside>
  );
}
