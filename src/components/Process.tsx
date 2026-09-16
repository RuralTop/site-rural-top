"use client";

import { useEffect, useRef } from "react";
import { processSteps } from "@/data/content";

export default function Process() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.style.transform = "scaleX(1)";
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      data-screen-label="Processo"
      className="bg-cream px-4 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-content">
        <div className="mb-10 grid grid-cols-1 items-end gap-6 sm:mb-16 lg:grid-cols-2 lg:gap-16">
          <h2 className="max-w-[16ch] font-sans text-[30px] font-semibold uppercase leading-[1.03] tracking-[-0.03em] sm:text-[46px] lg:text-[58px]">
            Não vendemos apenas irrigação. Entregamos o sistema.
          </h2>
          <p className="max-w-[44ch] font-sans text-[15px] leading-[1.6] text-text-body sm:text-lg">
            Antes de vender equipamento, precisamos entender sua área. O
            projeto só está pronto quando a água chega na planta com a
            pressão certa.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[38px] hidden h-0.5 bg-line sm:block" />
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-[38px] hidden h-0.5 origin-left scale-x-0 bg-gradient-to-r from-green to-blue transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] sm:block"
          />
          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.n}>
                <div className="hidden h-[78px] items-center sm:flex">
                  <span
                    className="h-3.5 w-3.5 rounded-full ring-[6px] ring-cream"
                    style={{
                      background: step.accent === "blue" ? "#2F7FA8" : "#2E6B3E",
                    }}
                  />
                </div>
                <p className="mb-2.5 font-mono text-xs font-semibold tracking-[0.12em] text-text-label">
                  {step.n}
                </p>
                <h3 className="mb-2.5 font-sans text-[18px] font-semibold uppercase leading-[1.2] tracking-[-0.01em] sm:text-[21px]">
                  {step.title}
                </h3>
                <p className="font-sans text-sm leading-[1.55] text-text-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
