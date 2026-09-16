import { site, whatsappLink } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-night px-4 pb-7 pt-12 text-cream sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 sm:gap-12 sm:pb-14 lg:grid-cols-4">
          <div>
            <p className="mb-2.5 font-sans text-[22px] font-bold leading-none tracking-[-0.02em]">
              RURAL TOP
            </p>
            <p className="max-w-[26ch] font-sans text-sm leading-[1.5] text-text-onDarkFaint">
              Irrigação, do projeto à implantação.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="mb-1 font-mono text-xs font-semibold tracking-[0.12em] text-text-onDarkFainter">
              NAVEGAÇÃO
            </p>
            <a href="#solucoes" className="font-sans text-[15px] leading-none text-text-onDarkStrong2 transition-colors hover:text-green-soft">
              Soluções
            </a>
            <a href="#empresa" className="font-sans text-[15px] leading-none text-text-onDarkStrong2 transition-colors hover:text-green-soft">
              Empresa
            </a>
            <a href="#contato" className="font-sans text-[15px] leading-none text-text-onDarkStrong2 transition-colors hover:text-green-soft">
              Contato
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="mb-1 font-mono text-xs font-semibold tracking-[0.12em] text-text-onDarkFainter">
              CONTATO
            </p>
            <a href={site.phoneHref} className="font-sans text-[15px] leading-none text-text-onDarkStrong2 transition-colors hover:text-green-soft">
              {site.phone}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="font-sans text-[15px] leading-none text-text-onDarkStrong2 transition-colors hover:text-green-soft"
            >
              WhatsApp
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener"
              className="font-sans text-[15px] leading-none text-text-onDarkStrong2 transition-colors hover:text-green-soft"
            >
              {site.instagramHandle}
            </a>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener"
              className="font-sans text-sm leading-[1.5] text-text-onDarkStrong2 transition-colors hover:text-green-soft"
            >
              {site.address.line1} — Brasília, DF
              <br />
              71200-055
            </a>
            <p className="font-sans text-sm leading-[1.5] text-text-onDarkFaint">{site.hours}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="mb-1 font-mono text-xs font-semibold tracking-[0.12em] text-text-onDarkFainter">
              ATUAÇÃO
            </p>
            <p className="max-w-[28ch] font-sans text-sm leading-[1.55] text-text-onDarkFaint">
              Projeto de irrigação, gotejamento, aspersão, pivô central,
              bombeamento, automação e manutenção em Brasília, no Distrito
              Federal e região.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-5">
          <p className="font-mono text-xs text-text-onDarkFainter">
            © {new Date().getFullYear()} {site.legalName.toUpperCase()}
          </p>
          <div className="flex gap-5">
            <a href="#contato" className="font-mono text-xs text-text-onDarkFainter transition-colors hover:text-green-soft">
              POLÍTICA DE PRIVACIDADE
            </a>
            <a href="#contato" className="font-mono text-xs text-text-onDarkFainter transition-colors hover:text-green-soft">
              INFORMAÇÕES LEGAIS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
