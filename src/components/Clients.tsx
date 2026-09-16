"use client";

import Image from "next/image";
import { useState } from "react";
import { clientLogos, testimonials, type Testimonial } from "@/data/content";

const accentBorder: Record<Testimonial["accent"], string> = {
  green: "#2E6B3E",
  blue: "#2F7FA8",
  mid: "#5D8F2E",
};

function TestimonialCard({ t }: { t: Testimonial }) {
  const [open, setOpen] = useState(false);
  const color = accentBorder[t.accent];

  return (
    <blockquote
      className="relative flex flex-col gap-4 overflow-hidden border border-[#E2DED4] bg-[#FBFAF7] p-6 transition-all duration-[250ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(14,20,16,.45)] sm:p-8"
      style={{ borderTop: `3px solid ${color}` }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-[18px] right-3.5 font-sans text-[90px] font-bold leading-none opacity-[.13] sm:text-[110px]"
        style={{ color }}
      >
        &rdquo;
      </span>
      <p className="relative font-mono text-[11px] font-semibold tracking-[0.14em]" style={{ color }}>
        {t.eyebrow}
      </p>
      <p
        className="relative font-sans text-[15px] leading-[1.62] text-[#2C332C] sm:text-[17px]"
        style={
          t.clamp
            ? {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: open ? 60 : 6,
                overflow: "hidden",
              }
            : undefined
        }
      >
        {t.quote}
      </p>
      {t.clamp && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="self-start border-b border-green pb-[3px] font-mono text-[11px] font-semibold tracking-[0.12em] text-green transition-colors hover:border-green-deep hover:text-green-deep"
        >
          {open ? "MOSTRAR MENOS" : "LER COMPLETO"}
        </button>
      )}
      <footer className="mt-auto border-t border-[#E7E3D9] pt-1 font-mono text-[13px] font-semibold leading-[1.5] tracking-[0.08em] text-[#2C332C]">
        {t.name}
        <br />
        <span className="font-medium text-text-muted">{t.org}</span>
      </footer>
    </blockquote>
  );
}

export default function Clients() {
  return (
    <section data-screen-label="Clientes" className="bg-cream px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-content">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-6 sm:mb-12">
          <div>
            <p className="mb-4 font-mono text-xs font-semibold tracking-[0.16em] text-green">
              MARCAS QUE CONFIAM EM NÓS
            </p>
            <h2 className="max-w-[20ch] font-sans text-[28px] font-semibold uppercase leading-[1.04] tracking-[-0.03em] sm:text-[40px] lg:text-[52px]">
              Quem produz no DF já trabalha com a gente
            </h2>
          </div>
          <p className="max-w-[36ch] font-sans text-base font-medium leading-[1.55] text-text-label sm:text-lg">
            De fazendas e viveiros a vinícolas e indústrias: propriedades que
            voltaram a nos chamar no projeto seguinte.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3 sm:mb-20 sm:gap-5">
          {clientLogos.map((c) => (
            <div
              key={c.src}
              className="flex aspect-[3/2] flex-1 basis-[120px] items-center justify-center p-3 transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1.5 hover:scale-[1.04] sm:basis-[168px] sm:p-4"
            >
              <div className="relative h-full w-full">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="168px"
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mb-6 font-mono text-xs font-semibold tracking-[0.16em] text-green sm:mb-8">
          DEPOIMENTOS DE CLIENTES
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
