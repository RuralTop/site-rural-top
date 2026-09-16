"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { fieldPhotos } from "@/data/content";

export default function FieldGallery() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        visibleRef.current = entries[0]?.isIntersecting ?? false;
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => {
      if (document.hidden || !visibleRef.current) return;
      setCurrent((c) => (c + 1) % fieldPhotos.length);
    }, 3400);
    return () => clearInterval(id);
  }, []);

  const photo = fieldPhotos[current];

  return (
    <section
      ref={sectionRef}
      data-screen-label="Campo"
      className="relative flex min-h-[520px] flex-col justify-end overflow-hidden bg-night px-4 py-14 text-cream sm:min-h-[84vh] sm:px-8 sm:py-20 lg:py-28"
    >
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {fieldPhotos.map((p, i) => (
          <Image
            key={p.src}
            src={p.src}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover transition-[opacity,transform] ease-[cubic-bezier(0.4,0,0.5,1)]"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "scale(1.09)" : "scale(1.01)",
              transitionDuration: i === current ? "1900ms, 6000ms" : "1900ms, 1900ms",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0E1410_0,rgba(14,20,16,.88)_clamp(70px,9vw,130px),rgba(14,20,16,.42)_38%,rgba(14,20,16,.58)_68%,rgba(14,20,16,.9)_calc(100%-clamp(70px,9vw,130px)),#0E1410_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-content">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-4 font-mono text-xs font-semibold tracking-[0.16em] text-green-light">
              SISTEMAS EM OPERAÇÃO
            </p>
            <h2 className="max-w-[20ch] font-sans text-[28px] font-semibold uppercase leading-[1.04] tracking-[-0.03em] [text-shadow:0_2px_24px_rgba(14,20,16,.6)] sm:text-[40px] lg:text-[52px]">
              Água chegando onde precisa chegar.
            </h2>
          </div>
          <p className="max-w-[34ch] font-sans text-base font-medium leading-[1.55] text-text-onDarkStrong">
            Registros de sistemas projetados, fornecidos e implantados pela
            Rural Top no Distrito Federal e região.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap items-end justify-between gap-4 sm:mt-14">
          <p className="max-w-[34ch] font-sans text-sm font-medium leading-[1.35] tracking-[-0.01em] text-cream [text-shadow:0_1px_12px_rgba(14,20,16,.8)] sm:text-lg">
            {photo?.cap}
          </p>
          <p className="font-mono text-[11px] font-medium leading-none tracking-[0.14em] text-text-onDarkMuted">
            {String(current + 1).padStart(2, "0")} / {String(fieldPhotos.length).padStart(2, "0")}
          </p>
        </div>

        <div className="mt-4 flex gap-1.5" role="tablist" aria-label="Fotos do sistema em operação">
          {fieldPhotos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Ver foto ${i + 1}: ${p.cap}`}
              onClick={() => setCurrent(i)}
              className="h-[3px] min-w-[18px] flex-1 border-0 p-0 transition-colors"
              style={{ background: i === current ? "#8FBF6B" : "rgba(245,243,238,.2)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
