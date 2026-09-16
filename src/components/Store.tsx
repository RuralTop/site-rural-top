"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { storeTags, whatsappLink } from "@/data/content";

export default function Store() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  };

  const scale = hover ? 1.14 : 1.08;

  return (
    <section
      data-screen-label="Loja"
      className="bg-[#F7F5F0] px-4 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 font-mono text-xs font-semibold tracking-[0.16em] text-green">
            LOJA E BALCÃO TÉCNICO — SIA, BRASÍLIA
          </p>
          <h2 className="mb-5 max-w-[22ch] font-sans text-[28px] font-semibold uppercase leading-[1.04] tracking-[-0.03em] sm:text-[40px] lg:text-[52px]">
            Seu sistema parou? A gente sabe que o campo não espera.
          </h2>
          <p className="mb-7 max-w-[48ch] font-sans text-[15px] leading-[1.6] text-text-body sm:text-lg">
            Na loja você fala com vendedor que conhece irrigação, não com
            atendente de catálogo. Encontra componentes para gotejamento,
            aspersão, bombas, filtragem, automação, tubulações, conexões e
            manutenção.
          </p>
          <div className="mb-7 flex flex-wrap gap-2.5">
            {storeTags.map((tag) => (
              <span
                key={tag}
                className="cursor-default border border-line px-3.5 py-2.5 font-mono text-[11px] font-medium tracking-[0.08em] text-text-label transition-all hover:-translate-y-0.5 hover:border-green hover:bg-green hover:text-cream"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={whatsappLink("Olá! Preciso de peças / atendimento no balcão da Rural Top.")}
            target="_blank"
            rel="noopener"
            className="inline-block bg-green px-7 py-[18px] font-mono text-[13px] font-medium tracking-[0.08em] text-cream transition-colors hover:bg-green-hover"
          >
            FALAR COM O BALCÃO
          </a>
        </div>

        <div
          ref={ref}
          onMouseMove={handleMove}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            setHover(false);
            setPos({ x: 0, y: 0 });
          }}
          className="relative aspect-[4/5] overflow-hidden border border-line"
        >
          <div
            className="absolute -inset-[8%] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={{
              transform: `scale(${scale}) translate3d(${pos.x * -26}px, ${pos.y * -20}px, 0)`,
            }}
          >
            <Image
              src="/images/loja/balcao-loja.jpg"
              alt="Balcão de atendimento da loja Rural Top no SIA, Brasília"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_42%]"
            />
          </div>
          <p className="absolute bottom-0 left-0 bg-night/[.82] px-[18px] py-3.5 font-mono text-[11px] font-medium leading-[1.4] tracking-[0.06em] text-cream">
            BALCÃO DE ATENDIMENTO — SIA QUADRA 5C, BRASÍLIA
          </p>
        </div>
      </div>
    </section>
  );
}
