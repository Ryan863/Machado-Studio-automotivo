"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  MessageCircle,
  MapPin,
  Star,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { NAV_LINKS, STUDIO_INFO } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-zinc-950/90 border-b border-white/5 py-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.65)]"
            : "bg-gradient-to-b from-zinc-950/95 via-zinc-950/60 to-transparent border-b border-white/[0.03] py-4 md:py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logotipo à esquerda */}
          <a
            href="#topo"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-lg"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#121215] border border-white/10 group-hover:border-[#DC2626]/60 transition-colors">
              <span className="font-display text-lg font-extrabold tracking-tighter text-white">
                M
              </span>
              <span
                aria-hidden="true"
                className="absolute bottom-1.5 left-2 right-2 h-[2px] rounded-full bg-[#DC2626]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white uppercase leading-none">
                  {STUDIO_INFO.brandName}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-[#DC2626]"
                />
              </div>
              <span className="mt-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-[#A1A1AA] uppercase leading-none">
                {STUDIO_INFO.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Menu central Desktop */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-1 rounded-full bg-[#121215]/90 border border-white/10 px-2 py-1.5 backdrop-blur-sm"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-[#E4E4E7]/85 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop + Botão Menu Mobile */}
          <div className="flex items-center gap-3">
            <a
              href={STUDIO_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#DC2626] hover:bg-[#EF4444] active:scale-[0.98] px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(220,38,38,0.4)] hover:shadow-[0_0_32px_rgba(239,68,68,0.65)] transition-all duration-200 cursor-pointer"
            >
              <MessageCircle
                className="h-4 w-4 stroke-[2]"
                aria-hidden="true"
              />
              <span>Agendar Horário</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#121215] border border-white/10 text-[#E4E4E7] hover:text-white hover:border-[#DC2626]/50 transition-colors cursor-pointer"
            >
              <Menu className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Mobile Nativo */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Menu Mobile Machado Studio"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Painel do Drawer */}
          <div className="relative z-10 w-full max-w-sm bg-[#09090B] border-l border-white/10 h-full flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="font-display text-base font-bold uppercase tracking-tight text-white block">
                    {STUDIO_INFO.brandName}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[#A1A1AA] uppercase mt-0.5 block">
                    {STUDIO_INFO.brandSubtitle}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar menu de navegação"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#121215] border border-white/10 text-[#E4E4E7] hover:text-white cursor-pointer"
                >
                  <X className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
                </button>
              </div>

              {/* Selo 5.0 no topo do Drawer */}
              <div className="mt-5 rounded-2xl bg-[#121215] border border-white/10 p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-[#E4E4E7]">
                  <Star
                    className="h-4 w-4 text-[#EF4444] fill-[#EF4444]"
                    aria-hidden="true"
                  />
                  <span>Nota 5.0 no Google (~40 Avaliações)</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF4444]">
                  Verificado
                </span>
              </div>

              {/* Links de Navegação */}
              <nav className="mt-6 flex flex-col gap-2" aria-label="Links Mobile">
                {NAV_LINKS.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between rounded-2xl bg-[#121215]/70 hover:bg-[#121215] border border-white/5 hover:border-[#DC2626]/40 px-4 py-3.5 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#DC2626] tabular-nums">
                        0{index + 1}
                      </span>
                      <span className="font-display text-sm font-bold uppercase tracking-wider text-white">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-[#A1A1AA] group-hover:text-[#EF4444] transition-colors"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </nav>
            </div>

            {/* Rodapé do Drawer com Informações e CTA */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="space-y-2 text-xs text-[#A1A1AA]">
                <div className="flex items-start gap-2.5">
                  <MapPin
                    className="h-4 w-4 text-[#EF4444] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{STUDIO_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2.5 tabular-nums">
                  <Clock
                    className="h-4 w-4 text-[#EF4444] shrink-0"
                    aria-hidden="true"
                  />
                  <span>Seg-Sex: 08:00–19:30 | Sáb: 08:00–18:00</span>
                </div>
              </div>

              <a
                href={STUDIO_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#DC2626] hover:bg-[#EF4444] py-3.5 px-6 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(220,38,38,0.45)] transition-all"
              >
                <MessageCircle
                  className="h-4 w-4 stroke-[2]"
                  aria-hidden="true"
                />
                <span>Agendar Horário no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
