"use client";

import { useState } from "react";
import { challengeButtonLabels, challenges, whatsappLink } from "@/data/content";

export default function Diagnostic() {
  const [pick, setPick] = useState(0);
  const current = challenges[pick]!;

  return (
    <section
      data-screen-label="Desafio"
      className="bg-night px-4 py-16 text-cream sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-content">
        <p className="mb-4 font-mono text-xs font-semibold tracking-[0.16em] text-green-soft">
          DIAGNÓSTICO RÁPIDO
        </p>
        <h2 className="mb-8 max-w-[22ch] font-sans text-[30px] font-semibold uppercase leading-[1.03] tracking-[-0.03em] sm:mb-14 sm:text-[46px] lg:text-[58px]">
          O que você precisa resolver no campo?
        </h2>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-0.5">
            {challengeButtonLabels.map((label, i) => {
              const active = pick === i;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setPick(i)}
                  aria-pressed={active}
                  className="min-h-[60px] border-l-[3px] px-5 py-5 text-left font-sans text-base font-medium leading-[1.3] tracking-[-0.01em] transition-colors"
                  style={{
                    background: active ? "#16211A" : "transparent",
                    color: active ? "#F5F3EE" : "#AFB8AD",
                    borderColor: active ? "#2F7FA8" : "rgba(245,243,238,.14)",
                    borderTopColor: active ? "#2E6B3E" : "rgba(245,243,238,.14)",
                    borderRightColor: active ? "#2E6B3E" : "rgba(245,243,238,.14)",
                    borderBottomColor: active ? "#2E6B3E" : "rgba(245,243,238,.14)",
                    borderStyle: "solid",
                    borderWidth: "1px 1px 1px 3px",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-5 border border-cream/10 bg-night-alt p-6 sm:p-10">
            <p className="whitespace-nowrap font-mono text-xs font-semibold leading-[1.35] tracking-[0.08em] text-green-soft">
              COMO A RURAL TOP RESOLVE
            </p>
            <h3 className="font-sans text-2xl font-semibold uppercase leading-[1.1] tracking-[-0.02em] sm:text-[30px]">
              {current.title}
            </h3>
            <p className="max-w-[48ch] font-sans text-[15px] leading-[1.6] text-text-onDarkMuted sm:text-[17px]">
              {current.body}
            </p>
            <ul className="flex flex-col gap-3 border-t border-cream/10 pt-5">
              {current.bullets.map((b) => (
                <li key={b} className="flex items-baseline gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 bg-blue" />
                  <span className="font-sans text-[15px] leading-[1.5] text-text-onDark">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(`Olá! Sobre "${current.title}": ${current.body}`)}
              target="_blank"
              rel="noopener"
              className="self-start bg-green px-6 py-4 font-mono text-xs font-medium tracking-[0.08em] text-cream transition-colors hover:bg-green-hover"
            >
              FALAR COM UM ESPECIALISTA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
