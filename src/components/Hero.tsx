import Image from "next/image";
import {
  MessageCircle,
  ChevronRight,
  ChevronsRight,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { HERO_CONTENT, STUDIO_INFO } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="topo"
      aria-label="Apresentação Principal Machado Studio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-[#09090B]"
    >
      {/* Composição Visual: Fotografia em tela cheia (Desktop & Mobile dedicados) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Imagem Desktop (16:9 Studio Shot com pintura espelhada à direita) */}
        <div className="hidden md:block relative h-full w-full">
          <Image
            src="/images/hero-desktop.jpg"
            alt="Veículo esportivo preto com pintura espelhada sob iluminação recortada no Machado Studio em Umuarama"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right lg:object-center scale-[1.01]"
          />
        </div>

        {/* Imagem Mobile (Retrato vertical em estúdio escuro) */}
        <div className="block md:hidden relative h-full w-full">
          <Image
            src="/images/hero-mobile.jpg"
            alt="Detalhamento automotivo e pintura espelhada no Machado Studio em Umuarama"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-75"
          />
        </div>

        {/* Engrenagem / Emblema Geométrico Arquitetônico de Fundo (Inspiração Imagem 2) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 500 500"
          fill="none"
          className="
            absolute -top-24 -left-24 w-[360px] h-[360px]
            md:w-[540px] md:h-[540px] opacity-[0.045] text-white pointer-events-none
          "
        >
          <circle
            cx="250"
            cy="250"
            r="175"
            stroke="currentColor"
            strokeWidth="26"
            strokeDasharray="32 22"
          />
          <circle
            cx="250"
            cy="250"
            r="138"
            stroke="currentColor"
            strokeWidth="12"
          />
          <path
            d="M170 330L250 140L330 330H170Z"
            stroke="currentColor"
            strokeWidth="14"
          />
          <line
            x1="120"
            y1="250"
            x2="380"
            y2="250"
            stroke="currentColor"
            strokeWidth="10"
          />
        </svg>

        {/* Duplo Gradiente Estratégico de Proteção de Leitura */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950" />
      </div>

      {/* Conteúdo Editorial Principal */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Linha de Topo Inspirada na Referência (Metadata Técnica + Eyebrow) */}
          <div
            data-hero-item
            className="inline-flex flex-wrap items-center gap-2.5 rounded-full bg-[#121215]/90 border border-white/10 px-3.5 py-1.5 backdrop-blur-sm mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#DC2626] shadow-[0_0_10px_#EF4444]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#E4E4E7]">
              {HERO_CONTENT.eyebrow}
            </span>
          </div>

          {/* H1 com text-balance + Traço Vermelho Esportivo da Inspiração 2 */}
          <div data-hero-item className="relative">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.06] text-balance">
              {HERO_CONTENT.headline}
            </h1>
            <div className="mt-4 flex items-center gap-3" aria-hidden="true">
              <span className="h-1 w-16 sm:w-24 rounded-full bg-[#DC2626] shadow-[0_0_16px_rgba(220,38,38,0.8)]" />
              <span className="h-[1px] w-24 sm:w-40 bg-white/15" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A1A1AA]">
                LUCAS MACHADO • +50 SERVIÇOS
              </span>
            </div>
          </div>

          {/* Subheadline */}
          <p
            data-hero-item
            className="mt-6 text-base sm:text-lg lg:text-xl text-[#E4E4E7]/90 font-normal leading-relaxed max-w-2xl"
          >
            {HERO_CONTENT.subheadline}
          </p>

          {/* Ação Dupla (CRO) */}
          <div
            data-hero-item
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
          >
            <a
              href={STUDIO_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#DC2626] hover:bg-[#EF4444] active:scale-[0.99] px-7 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(220,38,38,0.45)] hover:shadow-[0_0_40px_rgba(239,68,68,0.7)] transition-all duration-200 cursor-pointer"
            >
              <MessageCircle
                className="h-5 w-5 stroke-[2]"
                aria-hidden="true"
              />
              <span>{HERO_CONTENT.primaryCta}</span>
              <ChevronRight
                className="h-4 w-4 stroke-[2.2] transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#121215]/90 hover:bg-white/[0.08] border border-white/15 hover:border-white/30 px-7 py-4 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#E4E4E7] hover:text-white backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              <span>{HERO_CONTENT.secondaryCta}</span>
            </a>
          </div>

          {/* Barra de Credibilidade na Hero (Inspirada nos indicadores >> da Imagem 2) */}
          <div
            data-hero-item
            className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          >
            <div className="flex items-start gap-3 rounded-2xl bg-[#121215]/80 border border-white/10 p-3.5 backdrop-blur-sm">
              <ChevronsRight
                className="h-5 w-5 text-[#EF4444] shrink-0 mt-0.5 stroke-[2.2]"
                aria-hidden="true"
              />
              <div>
                <div className="flex items-center gap-1.5 text-sm font-bold text-white tabular-nums">
                  <Star
                    className="h-3.5 w-3.5 text-[#EF4444] fill-[#EF4444]"
                    aria-hidden="true"
                  />
                  <span>5.0 no Google</span>
                </div>
                <p className="text-xs text-[#A1A1AA] mt-0.5 tabular-nums">
                  ~40 Avaliações Verificadas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-[#121215]/80 border border-white/10 p-3.5 backdrop-blur-sm">
              <ChevronsRight
                className="h-5 w-5 text-[#EF4444] shrink-0 mt-0.5 stroke-[2.2]"
                aria-hidden="true"
              />
              <div>
                <div className="flex items-center gap-1.5 text-sm font-bold text-white">
                  <Truck
                    className="h-3.5 w-3.5 text-[#EF4444]"
                    aria-hidden="true"
                  />
                  <span>Atendimento Delivery</span>
                </div>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Disponível em Umuarama
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-[#121215]/80 border border-white/10 p-3.5 backdrop-blur-sm">
              <ChevronsRight
                className="h-5 w-5 text-[#EF4444] shrink-0 mt-0.5 stroke-[2.2]"
                aria-hidden="true"
              />
              <div>
                <div className="flex items-center gap-1.5 text-sm font-bold text-white">
                  <ShieldCheck
                    className="h-3.5 w-3.5 text-[#EF4444]"
                    aria-hidden="true"
                  />
                  <span>Liderado por Lucas Machado</span>
                </div>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Rigor Técnico em Cada Entrega
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
