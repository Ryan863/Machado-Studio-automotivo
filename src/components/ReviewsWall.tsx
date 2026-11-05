import {
  Star,
  CheckCircle2,
  Quote,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";
import { REVIEWS_DATA, STUDIO_INFO } from "@/data/site";

export default function ReviewsWall() {
  return (
    <section
      id="avaliacoes"
      aria-labelledby="reviews-heading"
      className="relative py-14 md:py-24 bg-[#09090B] border-t border-white/5 overflow-hidden"
    >
      {/* Brilho sutil de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#DC2626]/[0.04] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho + Placar Oficial Google Reviews 5.0 */}
        <div
          data-reveal
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EF4444]">
              <span className="h-[2px] w-6 bg-[#DC2626]" aria-hidden="true" />
              <span>PROVA SOCIAL VERIFICADA EM UMUARAMA</span>
            </div>
            <h2
              id="reviews-heading"
              className="mt-3 font-display text-2xl sm:text-4xl lg:text-[42px] font-bold uppercase tracking-tight text-white leading-[1.12] text-balance"
            >
              Reputação Máxima 5.0 Estrelas Construída no Capricho e na
              Honestidade.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
              Cerca de 40 proprietários de veículos em Umuarama avaliaram o{" "}
              <strong className="text-white font-semibold">
                Machado Studio
              </strong>{" "}
              com nota máxima no Google, destacando o atendimento pessoal do{" "}
              <strong className="text-white font-semibold">
                Lucas Machado
              </strong>{" "}
              e o nível de detalhamento entregue.
            </p>
          </div>

          {/* Selo Monumental 5.0 Google */}
          <div className="lg:col-span-5">
            <div className="studio-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tabular-nums">
                    {STUDIO_INFO.ratingValue}
                  </span>
                  <div className="flex flex-col">
                    <div
                      className="flex items-center gap-1"
                      aria-label="5 de 5 estrelas"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-[#EF4444] fill-[#EF4444]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-[#E4E4E7] mt-1 tabular-nums">
                      ~{STUDIO_INFO.reviewCount} Avaliações no Google
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-[#A1A1AA]">
                  100% de aprovação em polimento de alta performance, limpeza
                  técnica e modalidade delivery.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DC2626]/15 border border-[#DC2626]/30 text-[#EF4444]">
                <ThumbsUp className="h-6 w-6 stroke-[1.8]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Depoimentos Reais */}
        <div
          data-reveal-group
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {REVIEWS_DATA.map((review) => (
            <article
              key={review.id}
              data-reveal-card
              className="studio-card-interactive rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div
                    className="flex items-center gap-1"
                    aria-label={`Nota ${review.rating} de 5 estrelas`}
                  >
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 text-[#EF4444] fill-[#EF4444]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#A1A1AA]">
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-[#EF4444]"
                      aria-hidden="true"
                    />
                    <span>{review.dateLabel}</span>
                  </span>
                </div>

                <div className="mt-5 relative">
                  <Quote
                    className="h-6 w-6 text-white/10 mb-2"
                    aria-hidden="true"
                  />
                  <p className="text-sm sm:text-base text-[#E4E4E7] leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                    {review.author}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    {review.vehicle} •{" "}
                    <span className="text-[#E4E4E7]/85">{review.service}</span>
                  </p>
                </div>
                <span className="font-mono text-xs font-bold text-[#EF4444] tabular-nums">
                  5.0 ★
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Rodapé de Conversão da Prova Social */}
        <div
          data-reveal
          className="mt-8 rounded-2xl bg-[#121215]/70 border border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs sm:text-sm text-[#E4E4E7] text-center sm:text-left">
            Quer o mesmo acabamento de vitrine no seu veículo em Umuarama?
          </p>
          <a
            href={STUDIO_INFO.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EF4444] hover:text-white transition-colors"
          >
            <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
            <span>Falar Diretamente com Lucas Machado</span>
          </a>
        </div>
      </div>
    </section>
  );
}
