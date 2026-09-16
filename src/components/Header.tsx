"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#empresa", label: "Empresa" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-night">
      <div className="mx-auto flex h-[72px] max-w-content items-center gap-6 px-4 sm:px-8">
        <Link href="#inicio" className="flex flex-shrink-0 items-center gap-[11px]">
          <Image
            src="/images/icone-rural-top.png"
            alt="Rural Top"
            width={52}
            height={52}
            className="h-[52px] w-[52px] object-contain"
            priority
          />
          <span className="flex flex-col gap-[3px]">
            <span className="font-sans text-[22px] font-bold leading-none tracking-[-0.02em] text-cream">
              RURAL TOP
            </span>
            <span className="font-mono text-[9px] leading-none tracking-[0.16em] text-green-light">
              COMERCIAL AGRÍCOLA
            </span>
          </span>
        </Link>

        <nav className="no-scrollbar hidden flex-1 items-center gap-7 overflow-x-auto md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex-shrink-0 font-mono text-[13px] font-semibold tracking-[0.09em] text-text-onDark transition-colors hover:text-green-soft"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="ml-auto hidden flex-shrink-0 bg-green px-5 py-[13px] font-mono text-xs font-medium tracking-[0.08em] text-cream transition-colors hover:bg-green-hover md:inline-block"
        >
          SOLICITAR ORÇAMENTO
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center gap-[5px] border border-cream/25 md:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-cream transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span className={`h-[1.5px] w-5 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[1.5px] w-5 bg-cream transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-[65] flex flex-col bg-night md:hidden">
          <nav className="flex flex-1 flex-col gap-1 px-4 pt-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream/10 py-5 font-sans text-2xl font-medium uppercase tracking-[-0.01em] text-cream"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-4 pb-8 pt-4">
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="block w-full bg-green px-5 py-4 text-center font-mono text-xs font-medium tracking-[0.08em] text-cream"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
