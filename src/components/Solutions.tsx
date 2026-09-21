import Image from "next/image";
import { solutions, maintenanceCard, whatsappLink } from "@/data/content";
import { darkFade } from "@/lib/fade";

export default function Solutions() {
  return (
    <section
      id="solucoes"
      data-screen-label="Soluções"
      className="bg-cream-alt px-4 py-16 sm:px-8 sm:py-24 lg:py-32"
      style={{
        backgroundImage: `${darkFade("180deg")},${darkFade("0deg")}`,
        backgroundSize: "100% clamp(190px,22vw,300px),100% clamp(190px,22vw,300px)",
        backgroundPosition: "top,bottom",
        backgroundRepeat: "no-repeat,no-repeat",
      }}
    >
      <div className="mx-auto max-w-content">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 sm:mb-14">
          <div>
            <p className="mb-4 font-mono text-xs font-semibold tracking-[0.16em] text-green-deep">
              SOLUÇÕES
            </p>
            <h2 className="max-w-[20ch] font-sans text-[30px] font-semibold uppercase leading-[1.03] tracking-[-0.03em] sm:text-[46px] lg:text-[58px]">
              Cada área pede um sistema diferente.
            </h2>
          </div>
          <p className="max-w-[38ch] font-sans text-base font-medium leading-[1.55] text-text-label sm:text-lg">
            Gotejamento, aspersão, pivô, bombeamento, automação e filtragem:
            dimensionamos o que faz sentido para a sua cultura e para a água
            que você tem.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <article
              key={s.n}
              className={`flex flex-col border border-line ${
                s.dark ? "bg-night text-cream" : "bg-[#FBFAF7]"
              } ${s.span === 2 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              {s.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-night-alt">
                  <Image
                    data-reveal="out"
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div
                className={`flex flex-1 flex-col gap-3 ${
                  s.image ? "p-5 sm:p-8" : "p-5 sm:p-6"
                }`}
              >
                <p
                  className={`font-mono text-xs font-semibold tracking-[0.12em] ${
                    s.dark ? "text-green-soft" : "text-text-label"
                  }`}
                >
                  {s.n} / {s.tag}
                </p>
                <h3 className="font-sans text-xl font-semibold uppercase leading-[1.12] tracking-[-0.02em] sm:text-2xl">
                  {s.title}
                </h3>
                <p
                  className={`max-w-[52ch] font-sans text-sm leading-[1.6] ${
                    s.dark ? "text-text-onDarkMuted" : "text-text-muted"
                  }`}
                >
                  {s.body}
                </p>
              </div>
            </article>
          ))}

          <article className="flex flex-col gap-6 border border-night-soft bg-night-soft p-5 text-cream sm:col-span-2 sm:grid sm:grid-cols-[minmax(0,220px)_1fr_auto] sm:items-center sm:p-8 lg:col-span-4">
            <div className="aspect-[4/3] overflow-hidden bg-night">
              <div className="relative h-full w-full">
                <Image
                  data-reveal="out"
                  src={maintenanceCard.image.src}
                  alt={maintenanceCard.image.alt}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="whitespace-nowrap font-mono text-xs font-semibold leading-[1.35] tracking-[0.08em] text-green-soft">
                {maintenanceCard.tag}
              </p>
              <h3 className="font-sans text-xl font-semibold uppercase leading-[1.12] tracking-[-0.02em] sm:text-2xl">
                {maintenanceCard.title}
              </h3>
              <p className="font-sans text-sm leading-[1.6] text-text-onDarkMuted">
                {maintenanceCard.body}
              </p>
            </div>
            <a
              href={whatsappLink(
                "Olá! Vim pelo site e gostaria de falar sobre manutenção da minha irrigação."
              )}
              target="_blank"
              rel="noopener"
              className="justify-self-start whitespace-nowrap border border-cream/35 px-6 py-4 font-mono text-xs font-medium tracking-[0.08em] text-cream transition-colors hover:border-green-soft hover:text-green-soft"
            >
              CHAMAR NO WHATSAPP
            </a>
          </article>
        </div>

        <p className="mt-6 font-mono text-[13px] leading-[1.55] text-text-label sm:mt-8">
          Também atendemos nutrição de plantas e fertirrigação, carretel /
          autopropelido e cultivo protegido (filmes e telas).
        </p>
      </div>
    </section>
  );
}
