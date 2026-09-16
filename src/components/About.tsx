import Image from "next/image";
import { aboutPhotos, aboutStats } from "@/data/content";

export default function About() {
  return (
    <section
      id="empresa"
      data-screen-label="Empresa"
      className="bg-night px-4 py-16 text-cream sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-content">
        <p className="mb-6 font-mono text-xs font-semibold tracking-[0.16em] text-green-soft">
          A RURAL TOP
        </p>
        <h2 className="mb-9 max-w-[30ch] font-sans text-[26px] font-semibold leading-[1.15] tracking-[-0.025em] sm:mb-16 sm:text-[38px] lg:text-[46px]">
          A Rural Top nasceu em Brasília e construiu sua experiência
          acompanhando produtores e sistemas de irrigação no campo. Tem gente
          de verdade por trás da solução.
        </h2>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-14 sm:grid-cols-3 sm:gap-7">
          {aboutPhotos.map((p) => (
            <figure key={p.src} className="m-0 flex flex-col gap-2.5">
              <div className="relative aspect-[4/3] overflow-hidden border border-cream/10 bg-night-alt">
                <Image
                  data-reveal="out"
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                  style={p.src.includes("socios") ? { objectPosition: "center 22%" } : undefined}
                />
              </div>
              <figcaption className="font-mono text-xs leading-[1.5] text-text-onDarkLine">
                {p.cap}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 border-t border-cream/10 pt-7 sm:grid-cols-4 sm:gap-8 sm:pt-11">
          {aboutStats.map((s) => (
            <div key={s.title}>
              <p className="font-sans text-[30px] font-semibold leading-none tracking-[-0.03em] sm:text-[38px]">
                {s.title}
              </p>
              <p className="mt-2.5 font-sans text-[13px] leading-[1.55] text-text-onDarkFaint">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
