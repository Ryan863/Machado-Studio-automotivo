"use client";

import { useRef, useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Droplets,
  Sun,
  Truck,
  CheckCircle2,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import {
  SERVICES_MENU,
  ServiceCardItem,
  buildWhatsAppUrl,
} from "@/data/site";

function ServiceIcon({ name }: { name: ServiceCardItem["iconName"] }) {
  const iconClass = "h-6 w-6 text-[#EF4444] stroke-[1.8]";
  switch (name) {
    case "sparkles":
      return <Sparkles className={iconClass} aria-hidden="true" />;
    case "shield":
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case "droplets":
      return <Droplets className={iconClass} aria-hidden="true" />;
    case "sun":
      return <Sun className={iconClass} aria-hidden="true" />;
    case "truck":
      return <Truck className={iconClass} aria-hidden="true" />;
  }
}

function BentoServiceCard({ item }: { item: ServiceCardItem }) {
  const cardRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const spanClasses =
    item.colSpan === "full"
      ? "lg:col-span-12"
      : item.colSpan === "wide"
      ? "lg:col-span-7"
      : "lg:col-span-5";

  const waHref = buildWhatsAppUrl(item.whatsappMessage);

  return (
    <article
      ref={cardRef}
      data-reveal-card
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoverOpacity(1)}
      onMouseLeave={() => setHoverOpacity(0)}
      className={`${spanClasses} studio-card-interactive relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden group`}
    >
      {/* Spotlight Radial Interativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: hoverOpacity,
          background: `radial-gradient(560px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.11), transparent 45%)`,
        }}
      />

      <div className="relative z-10">
        {/* Topo do Card: Código Técnico + Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-[#DC2626]/50 transition-colors">
              <ServiceIcon name={item.iconName} />
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#EF4444] block tabular-nums">
                {item.code}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A1A1AA]">
                {item.tag}
              </span>
            </div>
          </div>

          <span className="inline-flex items-center rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 text-[11px] font-medium text-[#E4E4E7]">
            Machado Studio
          </span>
        </div>

        {/* Título e Subtítulo */}
        <h3 className="mt-6 font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
          {item.title}
        </h3>

        <p className="mt-2 text-sm sm:text-base font-medium text-[#E4E4E7]">
          {item.subtitle}
        </p>

        <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
          {item.description}
        </p>

        {/* Lista de Especificações Técnicas */}
        <ul
          className={`mt-5 pt-5 border-t border-white/10 grid gap-2.5 ${
            item.colSpan === "full"
              ? "grid-cols-1 md:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {item.specs.map((spec) => (
            <li
              key={spec}
              className="flex items-start gap-2 text-xs sm:text-sm text-[#E4E4E7]/90"
            >
              <CheckCircle2
                className="h-4 w-4 text-[#EF4444] shrink-0 mt-0.5 stroke-[2]"
                aria-hidden="true"
              />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Botão Contextual de Conversão Direta */}
      <div className="relative z-10 mt-7 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="text-xs text-[#A1A1AA]">
          Orçamento personalizado pelo WhatsApp com Lucas Machado
        </span>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DC2626] hover:bg-[#EF4444] active:scale-[0.98] px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(220,38,38,0.35)] hover:shadow-[0_0_28px_rgba(239,68,68,0.6)] transition-all cursor-pointer shrink-0"
        >
          <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
          <span>{item.ctaLabel}</span>
          <ArrowUpRight className="h-4 w-4 stroke-[2]" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function ServicesBento() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="relative py-14 md:py-24 bg-[#09090B] border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho do Cardápio de Serviços */}
        <div
          data-reveal
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EF4444]">
              <span className="h-[2px] w-6 bg-[#DC2626]" aria-hidden="true" />
              <span>CARDÁPIO DE SERVIÇOS ESPECIALIZADOS</span>
            </div>
            <h2
              id="services-heading"
              className="mt-3 font-display text-2xl sm:text-4xl lg:text-[42px] font-bold uppercase tracking-tight text-white leading-[1.12] text-balance"
            >
              Mais de 50 Variações Técnicas para o Brilho e Conservação do Seu
              Veículo.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md leading-relaxed">
            Selecione a solução ideal para a necessidade atual do seu carro e
            solicite um diagnóstico direto com{" "}
            <strong className="text-white font-semibold">Lucas Machado</strong>{" "}
            no WhatsApp.
          </p>
        </div>

        {/* Bento Grid Editorial */}
        <div
          data-reveal-group
          className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5"
        >
          {SERVICES_MENU.map((service) => (
            <BentoServiceCard key={service.id} item={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
