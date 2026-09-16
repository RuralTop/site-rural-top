import Image from "next/image";
import { site, whatsappLink } from "@/data/content";

const stats = [
  { value: "+15", label: "ANOS DE CAMPO" },
  { value: "DF", label: "BRASÍLIA E REGIÃO" },
  { value: "3 EM 1", label: "PROJETO • EQUIPAMENTO • IMPLANTAÇÃO" },
];

const flow = ["CAPTAÇÃO", "BOMBA", "FILTRO", "REDE", "EMISSORES"];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-night text-cream"
    >
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/web/aspersao-contraluz.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-rtken object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,#0E1410_0%,rgba(14,20,16,.96)_32%,rgba(14,20,16,.72)_58%,rgba(14,20,16,.5)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[clamp(120px,16vw,220px)] bg-gradient-to-t from-night to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[76vh] max-w-content grid-cols-1 items-center gap-8 px-4 pt-10 sm:px-8 sm:pt-16 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-[620px]">
          <p className="mb-5 font-mono text-xs font-semibold tracking-[0.16em] text-green-soft sm:mb-8">
            BRASÍLIA — DF E REGIÃO / DESDE 2009
          </p>
          <h1 className="font-sans text-[38px] font-semibold uppercase leading-[0.98] tracking-[-0.035em] sm:text-[54px] lg:text-[82px]">
            Irrigação,
            <br />
            do projeto
            <br />
            <span className="whitespace-nowrap">à implantação.</span>
          </h1>
          <p className="mt-5 max-w-[46ch] font-sans text-base leading-[1.55] text-text-onDarkMuted sm:mt-8 sm:text-xl">
            Projetamos, fornecemos e implantamos sistemas de irrigação para
            quem precisa produzir com segurança e eficiência.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 sm:mt-10">
            <a
              href="#contato"
              className="bg-green px-7 py-[18px] font-mono text-[13px] font-medium tracking-[0.08em] text-cream transition-colors hover:bg-green-hover"
            >
              SOLICITAR PROJETO
            </a>
            <a
              href={whatsappLink(
                "Olá! Vim pelo site e gostaria de falar sobre irrigação."
              )}
              target="_blank"
              rel="noopener"
              className="border border-cream/35 px-7 py-[18px] font-mono text-[13px] font-medium tracking-[0.08em] text-cream transition-colors hover:border-green-soft hover:text-green-soft"
            >
              FALAR COM ESPECIALISTA
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-6 border-t border-cream/10 pb-10 pt-6 sm:mt-14 sm:gap-11 sm:pb-16 sm:pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-sans text-[26px] font-semibold leading-none tracking-[-0.03em] sm:text-[34px]">
                  {s.value}
                </p>
                <p className="mt-1.5 font-mono text-xs font-medium leading-[1.4] tracking-[0.1em] text-text-onDarkSofter">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[320px] items-center self-stretch sm:min-h-[420px] lg:flex lg:min-h-[560px]">
          <div className="absolute bottom-2 left-0 flex flex-wrap gap-3.5 font-mono text-[11px] font-medium leading-none tracking-[0.1em] text-text-onDarkLine">
            {flow.map((step, i) => (
              <span key={step} className="flex items-center gap-3.5">
                {step}
                {i < flow.length - 1 && <span>→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="sr-only">{site.legalName}</p>
    </section>
  );
}
