"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQ_ITEMS, STUDIO_INFO } from "@/data/site";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-14 md:py-24 bg-[#09090B] border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Coluna Esquerda: Título & Suporte Direto */}
          <div data-reveal className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EF4444]">
              <span className="h-[2px] w-6 bg-[#DC2626]" aria-hidden="true" />
              <span>DÚVIDAS FREQUENTES (FAQ)</span>
            </div>

            <h2
              id="faq-heading"
              className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-[1.12] text-balance"
            >
              Transparência Antes Mesmo do Primeiro Atendimento.
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Confira as respostas para as principais dúvidas sobre a modalidade
              delivery, prazos de execução de polimento e horários na Rua
              Imperatriz.
            </p>

            <div className="studio-card rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DC2626]/15 border border-[#DC2626]/30 text-[#EF4444]">
                  <HelpCircle
                    className="h-5 w-5 stroke-[1.8]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase text-white">
                    Precisa de uma Avaliação Específica?
                  </h3>
                  <p className="text-xs text-[#A1A1AA]">
                    Envie uma foto ou vídeo do estado atual da pintura no
                    WhatsApp.
                  </p>
                </div>
              </div>

              <a
                href={STUDIO_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.06] hover:bg-[#DC2626] border border-white/10 hover:border-[#DC2626] py-3 px-5 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer"
              >
                <MessageCircle
                  className="h-4 w-4 stroke-[2]"
                  aria-hidden="true"
                />
                <span>Tirar Dúvida com Lucas Machado</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Accordion Estruturado */}
          <div
            data-reveal-group
            className="lg:col-span-7 space-y-3.5"
          >
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  data-reveal-card
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? "bg-[#121215] border-[#DC2626]/45"
                      : "bg-[#121215]/70 border-white/10 hover:border-white/20"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      id={`faq-trigger-${item.id}`}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-2xl"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="font-mono text-xs font-bold text-[#EF4444] tabular-nums">
                          0{idx + 1}
                        </span>
                        <span className="font-display text-sm sm:text-base font-bold text-white">
                          {item.question}
                        </span>
                      </div>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 border-[#DC2626] bg-[#DC2626]/20 text-[#EF4444]"
                            : "border-white/10 bg-white/[0.03] text-[#A1A1AA]"
                        }`}
                      >
                        <ChevronDown
                          className="h-4 w-4 stroke-[2]"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#E4E4E7]/85 leading-relaxed border-t border-white/5"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
