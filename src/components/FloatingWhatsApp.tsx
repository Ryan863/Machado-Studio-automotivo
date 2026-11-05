"use client";

import { MessageCircle } from "lucide-react";
import { STUDIO_INFO } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40"
    >
      <a
        href={STUDIO_INFO.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Orçar serviço no WhatsApp do Machado Studio"
        className="group relative flex items-center justify-center h-14 w-14 sm:w-auto sm:h-12 sm:px-5 rounded-full bg-[#DC2626] hover:bg-[#EF4444] text-white shadow-[0_8px_30px_rgba(220,38,38,0.55)] transition-all duration-200 active:scale-95 cursor-pointer border border-white/15"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white" />
        </span>
        <MessageCircle
          className="h-6 w-6 sm:h-5 sm:w-5 sm:mr-2 stroke-[2.2]"
          aria-hidden="true"
        />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
          Orçar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
