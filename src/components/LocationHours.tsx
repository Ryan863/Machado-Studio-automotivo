import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  Share2,
  MessageCircle,
  ExternalLink,
  Compass,
} from "lucide-react";
import { SCHEDULE_ROWS, STUDIO_INFO } from "@/data/site";

export default function LocationHours() {
  return (
    <section
      id="localizacao"
      aria-labelledby="location-heading"
      className="relative py-14 md:py-24 bg-[#09090B] border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div data-reveal className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EF4444]">
            <span className="h-[2px] w-6 bg-[#DC2626]" aria-hidden="true" />
            <span>LOCALIZAÇÃO, HORÁRIOS & CONTATO DIRETO</span>
          </div>
          <h2
            id="location-heading"
            className="mt-3 font-display text-2xl sm:text-4xl lg:text-[42px] font-bold uppercase tracking-tight text-white leading-[1.12] text-balance"
          >
            Visite Nosso Estúdio em Umuarama ou Solicite Atendimento Delivery.
          </h2>
        </div>

        {/* Card Split de Alto Padrão */}
        <div
          data-reveal-group
          className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Lado Esquerdo: Endereço Físico, Rotas GPS e Canais Sociais */}
          <div
            data-reveal-card
            className="lg:col-span-7 studio-card rounded-3xl p-6 sm:p-10 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DC2626]/15 border border-[#DC2626]/30 text-[#EF4444]">
                  <MapPin
                    className="h-6 w-6 stroke-[1.8]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#EF4444] block">
                    ENDEREÇO OFICIAL DO ESTÚDIO
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                    {STUDIO_INFO.streetAddress}
                  </h3>
                  <p className="text-sm sm:text-base text-[#E4E4E7]/90 mt-1 tabular-nums">
                    {STUDIO_INFO.neighborhood} • {STUDIO_INFO.city} -{" "}
                    {STUDIO_INFO.state}, CEP {STUDIO_INFO.postalCode}
                  </p>
                </div>
              </div>

              {/* Botões de Rota GPS Direta (Google Maps / Waze) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <a
                  href={STUDIO_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#DC2626] hover:bg-[#EF4444] px-5 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(220,38,38,0.35)] transition-all cursor-pointer"
                >
                  <Navigation
                    className="h-4 w-4 stroke-[2]"
                    aria-hidden="true"
                  />
                  <span>Traçar Rota no Google Maps</span>
                </a>

                <a
                  href={STUDIO_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-5 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all cursor-pointer"
                >
                  <Compass
                    className="h-4 w-4 text-[#EF4444] stroke-[2]"
                    aria-hidden="true"
                  />
                  <span>Abrir Navegação no Waze</span>
                </a>
              </div>
            </div>

            {/* Canais Diretos: WhatsApp Corporativo & Instagram Oficial */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={STUDIO_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-[#09090B]/90 border border-white/10 hover:border-[#DC2626]/50 p-4 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-[#EF4444]">
                    <Phone
                      className="h-5 w-5 stroke-[1.8]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A1A1AA] block">
                      WhatsApp Oficial
                    </span>
                    <span className="font-mono text-sm font-bold text-white tabular-nums">
                      {STUDIO_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <ExternalLink
                  className="h-4 w-4 text-[#A1A1AA] group-hover:text-white transition-colors"
                  aria-hidden="true"
                />
              </a>

              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-[#09090B]/90 border border-white/10 hover:border-[#DC2626]/50 p-4 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-[#EF4444]">
                    <Share2
                      className="h-5 w-5 stroke-[1.8]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A1A1AA] block">
                      Instagram Oficial
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {STUDIO_INFO.instagramHandle}
                    </span>
                  </div>
                </div>
                <ExternalLink
                  className="h-4 w-4 text-[#A1A1AA] group-hover:text-white transition-colors"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Lado Direito: Tabela Clara de Horários (tabular-nums) */}
          <div
            data-reveal-card
            className="lg:col-span-5 studio-card rounded-3xl p-6 sm:p-10 flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DC2626]/15 border border-[#DC2626]/30 text-[#EF4444]">
                  <Clock
                    className="h-5 w-5 stroke-[1.8]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#EF4444] block">
                    CRONOGRAMA SEMANAL
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white">
                    Horário de Atendimento
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3 tabular-nums">
                {SCHEDULE_ROWS.map((row) => (
                  <div
                    key={row.days}
                    className="rounded-2xl bg-[#09090B]/90 border border-white/10 px-4 py-3.5 flex items-center justify-between gap-3"
                  >
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-white block">
                        {row.days}
                      </span>
                      <span className="text-[11px] text-[#A1A1AA]">
                        {row.status}
                      </span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        row.isOpen
                          ? "bg-[#DC2626]/15 text-[#EF4444] border border-[#DC2626]/30"
                          : "bg-white/[0.04] text-[#A1A1AA] border border-white/10"
                      }`}
                    >
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-4">
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Atendimentos no estúdio e na modalidade delivery são realizados
                com horário reservado para garantir dedicação exclusiva ao seu
                veículo.
              </p>

              <a
                href={STUDIO_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.07] hover:bg-[#DC2626] border border-white/15 hover:border-[#DC2626] py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all cursor-pointer"
              >
                <MessageCircle
                  className="h-4 w-4 stroke-[2]"
                  aria-hidden="true"
                />
                <span>Agendar Horário Agora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
