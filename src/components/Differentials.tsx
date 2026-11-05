import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Award,
  MessageCircle,
  Sparkles,
  Clock,
} from "lucide-react";
import {
  DIFFERENTIALS_CONTENT,
  STUDIO_INFO,
  buildWhatsAppUrl,
} from "@/data/site";

export default function Differentials() {
  const deliveryWaUrl = buildWhatsAppUrl(
    "Olá Lucas! Visitei o site do Machado Studio e gostaria de saber como agendar um atendimento na Modalidade Delivery em Umuarama."
  );

  return (
    <section
      id="delivery"
      aria-labelledby="differentials-heading"
      className="relative py-14 md:py-24 bg-[#09090B] border-t border-white/5 overflow-hidden"
    >
      {/* Brilho sutil de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-[#DC2626]/[0.05] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Editorial da Seção */}
        <div
          data-reveal
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EF4444]">
              <span className="h-[2px] w-6 bg-[#DC2626]" aria-hidden="true" />
              <span>{DIFFERENTIALS_CONTENT.eyebrow}</span>
            </div>
            <h2
              id="differentials-heading"
              className="mt-3 font-display text-2xl sm:text-4xl lg:text-[42px] font-bold uppercase tracking-tight text-white leading-[1.12] text-balance"
            >
              {DIFFERENTIALS_CONTENT.title}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              {DIFFERENTIALS_CONTENT.lead}
            </p>
          </div>
        </div>

        {/* Três Pilares de Rigor Técnico */}
        <div
          data-reveal-group
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {DIFFERENTIALS_CONTENT.pillars.map((pillar) => (
            <article
              key={pillar.id}
              data-reveal-card
              className="studio-card-interactive rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#EF4444] uppercase px-3 py-1 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/25 tabular-nums">
                    PILAR // {pillar.number}
                  </span>
                  <span className="text-xs font-semibold text-[#E4E4E7] tabular-nums">
                    {pillar.metric}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#F4F4F5] transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#E4E4E7]/80">
                <span>Padrão Machado Studio</span>
                <ShieldCheck
                  className="h-4 w-4 text-[#EF4444] stroke-[1.8]"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Card Editorial Destaque: Modalidade Delivery & Atendimento Exclusivo */}
        <div
          data-reveal
          className="mt-8 rounded-3xl bg-[#121215]/95 border border-white/10 p-6 sm:p-10 lg:p-12 backdrop-blur-sm relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[#DC2626]/10 blur-[100px]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#DC2626]/15 border border-[#DC2626]/30 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#EF4444]">
                <Truck className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                <span>{DIFFERENTIALS_CONTENT.deliveryBadge}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-tight text-balance">
                {DIFFERENTIALS_CONTENT.deliveryTitle}
              </h3>

              <p className="text-sm sm:text-base text-[#E4E4E7]/85 leading-relaxed">
                {DIFFERENTIALS_CONTENT.deliveryDescription}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {DIFFERENTIALS_CONTENT.deliveryFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E4E4E7]"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-[#EF4444] shrink-0 mt-0.5 stroke-[2]"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Painel de Comparação Rápida Estúdio vs Delivery */}
            <div className="lg:col-span-5 rounded-2xl bg-[#09090B]/90 border border-white/10 p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#A1A1AA] block">
                    DUAS MODALIDADES DE ELITE
                  </span>
                  <h4 className="font-display text-lg font-bold uppercase text-white mt-0.5">
                    Você Escolhe Onde Atendemos
                  </h4>
                </div>
                <Award
                  className="h-7 w-7 text-[#EF4444] stroke-[1.8]"
                  aria-hidden="true"
                />
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="rounded-xl bg-[#121215] border border-white/10 p-3.5">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <Sparkles
                      className="h-4 w-4 text-[#EF4444]"
                      aria-hidden="true"
                    />
                    <span>1. No Estúdio Físico (Rua Imperatriz, 2099)</span>
                  </div>
                  <p className="text-[#A1A1AA] text-xs mt-1 leading-relaxed">
                    Ambiente controlado com iluminação técnica para polimentos
                    de alta performance, correção de verniz e proteções de longa
                    duração.
                  </p>
                </div>

                <div className="rounded-xl bg-[#121215] border border-white/10 p-3.5">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <Clock
                      className="h-4 w-4 text-[#EF4444]"
                      aria-hidden="true"
                    />
                    <span>2. Modalidade Delivery (Residência ou Empresa)</span>
                  </div>
                  <p className="text-[#A1A1AA] text-xs mt-1 leading-relaxed">
                    Cuidados estéticos detalhados executados no seu endereço em{" "}
                    {STUDIO_INFO.city}, otimizando o seu tempo com total
                    conveniência.
                  </p>
                </div>
              </div>

              <a
                href={deliveryWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#DC2626] hover:bg-[#EF4444] py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(220,38,38,0.4)] transition-all cursor-pointer"
              >
                <MessageCircle
                  className="h-4 w-4 stroke-[2]"
                  aria-hidden="true"
                />
                <span>Consultar Atendimento Delivery</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
