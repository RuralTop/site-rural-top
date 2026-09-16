import { brandsRepresented, brandsSupplied, type Brand } from "@/data/content";
import { darkFade } from "@/lib/fade";

const accentStyles: Record<Brand["accent"], { bg: string; border: string; nameColor: string; dot: string }> = {
  "green-strong": { bg: "rgba(22,78,43,.06)", border: "#2E6B3E", nameColor: "#164E2B", dot: "#2E6B3E" },
  "green-soft": { bg: "rgba(46,107,62,.07)", border: "#8FBF6B", nameColor: "#164E2B", dot: "#8FBF6B" },
  blue: { bg: "rgba(47,127,168,.08)", border: "#2F7FA8", nameColor: "#2E6B3E", dot: "#2F7FA8" },
  lime: { bg: "rgba(198,217,59,.14)", border: "#C6D93B", nameColor: "#2F7FA8", dot: "#C6D93B" },
};

function BrandChip({ brand }: { brand: Brand }) {
  const s = accentStyles[brand.accent];
  return (
    <span
      className="group flex flex-shrink-0 items-center gap-3 px-6 py-3 transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1 hover:bg-[#FDFCF9] hover:shadow-[0_16px_30px_-20px_rgba(14,20,16,.55)] sm:px-9"
      style={{ background: s.bg, borderLeft: `2px solid ${s.border}` }}
    >
      <span className="h-2 w-2 flex-shrink-0" style={{ background: s.dot }} />
      <span className="flex flex-col gap-1.5">
        <span
          className="whitespace-nowrap font-sans text-xl font-semibold leading-none tracking-[-0.02em] sm:text-2xl"
          style={{ color: s.nameColor }}
        >
          {brand.name}
        </span>
        <span className="whitespace-nowrap font-mono text-[11px] font-medium uppercase leading-none tracking-[0.1em] text-[#3E443D]">
          {brand.tag}
        </span>
      </span>
    </span>
  );
}

function Marquee({ brands, direction }: { brands: Brand[]; direction: "A" | "B" }) {
  const doubled = [...brands, ...brands];
  return (
    <div
      aria-hidden
      className="overflow-hidden"
      style={{
        maskImage: "linear-gradient(90deg,transparent,#000 4%,#000 96%,transparent)",
        WebkitMaskImage: "linear-gradient(90deg,transparent,#000 4%,#000 96%,transparent)",
      }}
    >
      <div
        className={`flex w-max gap-2.5 [animation-play-state:running] hover:[animation-play-state:paused] ${
          direction === "A" ? "animate-rtmarqA" : "animate-rtmarqB"
        }`}
      >
        {doubled.map((b, i) => (
          <BrandChip key={`${b.name}-${i}`} brand={b} />
        ))}
      </div>
    </div>
  );
}

export default function Brands() {
  return (
    <section
      data-screen-label="Marcas"
      className="bg-[#F2F1E9] px-4 py-14 sm:px-8 sm:py-24"
      style={{
        backgroundImage: `${darkFade("180deg")},linear-gradient(180deg,#F4F2EB 0%,#EFF2E8 100%)`,
        backgroundSize: "100% clamp(190px,22vw,300px),100% 100%",
        backgroundPosition: "top,top",
        backgroundRepeat: "no-repeat,no-repeat",
      }}
    >
      <div className="relative mx-auto max-w-content">
        <h2 className="mb-7 max-w-[24ch] font-sans text-[22px] font-semibold uppercase leading-[1.1] tracking-[-0.025em] sm:mb-11 sm:text-[34px]">
          Tecnologia de quem é referência no campo.
        </h2>

        <div className="border-y border-line py-6 sm:py-8">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-green">
            Marcas que representamos
          </p>
          <Marquee brands={brandsRepresented} direction="A" />

          <p className="mb-3 mt-6 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-green sm:mt-8">
            Também fornecemos
          </p>
          <Marquee brands={brandsSupplied} direction="B" />
        </div>

        <ul className="sr-only">
          {brandsRepresented.map((b) => (
            <li key={b.name}>
              Representamos {b.name} — {b.tag}
            </li>
          ))}
          {brandsSupplied.map((b) => (
            <li key={b.name}>
              Fornecemos {b.name} — {b.tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
