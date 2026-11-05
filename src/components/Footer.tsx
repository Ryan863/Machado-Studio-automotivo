import {
  MessageCircle,
  Share2,
  MapPin,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { NAV_LINKS, STUDIO_INFO } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative bg-[#09090B] border-t border-white/10 overflow-hidden">
      {/* Brilho Vermelho Automotivo de Fechamento */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[680px] rounded-full bg-[#DC2626]/10 blur-[130px]"
      />

      {/* Bloco Monumental de Conversão Final */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-12 md:pt-20 md:pb-16">
        <div
          data-reveal
          className="studio-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#DC2626]/15 border border-[#DC2626]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#EF4444]">
              <Star
                className="h-3.5 w-3.5 fill-[#EF4444]"
                aria-hidden="true"
              />
              <span>ESTÉTICA AUTOMOTIVA DE ELITE EM UMUARAMA - PR</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.08] text-balance">
              Seu carro tratado com o padrão que ele exige.
            </h2>

            <p className="text-sm sm:text-lg text-[#E4E4E7]/85 max-w-2xl mx-auto leading-relaxed">
              Polimento de alta performance, proteção de pintura, limpeza
              técnica detalhada e restauração de faróis no estúdio ou na
              modalidade delivery com{" "}
              <strong className="text-white font-semibold">
                {STUDIO_INFO.founder}
              </strong>
              .
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={STUDIO_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#DC2626] hover:bg-[#EF4444] active:scale-[0.98] px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-[0_0_36px_rgba(220,38,38,0.5)] hover:shadow-[0_0_48px_rgba(239,68,68,0.75)] transition-all cursor-pointer"
              >
                <MessageCircle
                  className="h-5 w-5 stroke-[2]"
                  aria-hidden="true"
                />
                <span>Agendar Horário pelo WhatsApp</span>
                <ArrowUpRight
                  className="h-4 w-4 stroke-[2.2]"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#A1A1AA] tabular-nums">
              <span>★ 5.0 no Google (~40 Avaliações)</span>
              <span aria-hidden="true">•</span>
              <span>WhatsApp: {STUDIO_INFO.phoneDisplay}</span>
              <span aria-hidden="true">•</span>
              <span>{STUDIO_INFO.streetAddress} - Umuarama/PR</span>
            </div>
          </div>
        </div>

        {/* Rodapé Institucional */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-display text-lg font-extrabold uppercase tracking-tight text-white">
                {STUDIO_INFO.brandName}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626]" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A1A1AA]">
                Liderado por {STUDIO_INFO.founder}
              </span>
            </div>
            <p className="mt-2 text-xs text-[#A1A1AA] flex items-center gap-1.5 tabular-nums">
              <MapPin
                className="h-3.5 w-3.5 text-[#EF4444] shrink-0"
                aria-hidden="true"
              />
              <span>{STUDIO_INFO.fullAddress}</span>
            </p>
          </div>

          <nav
            aria-label="Links do Rodapé"
            className="flex flex-wrap items-center gap-5"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#EF4444] hover:text-white transition-colors"
            >
              <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{STUDIO_INFO.instagramHandle}</span>
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A1A1AA]/80 tabular-nums">
          <p>
            © {new Date().getFullYear()} {STUDIO_INFO.fullTitle}. Todos os
            direitos reservados.
          </p>
          <p>Umuarama - Paraná • Estética Automotiva de Alto Padrão</p>
        </div>
      </div>
    </footer>
  );
}
