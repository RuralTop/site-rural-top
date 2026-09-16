"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/data/content";

const subjects = ["Novo projeto", "Ampliação", "Manutenção", "Peças", "Bombeamento", "Outro"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [waMessage, setWaMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) || "").toString().trim();
    const nome = get("nome") || "produtor";
    const cidade = get("cidade") || "DF";
    const assunto = get("assunto");
    const mensagem = get("mensagem") || "Gostaria de falar sobre irrigação.";
    const telefone = get("telefone");

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, telefone, cidade, assunto, mensagem }),
    }).catch((err) => console.error("Falha ao notificar por e-mail:", err));

    setWaMessage(
      `Olá! Sou ${nome}, de ${cidade}. Assunto: ${assunto}. ${mensagem} Meu contato: ${telefone}`
    );
    setSent(true);
  };

  return (
    <section
      id="contato"
      data-screen-label="Contato"
      className="bg-night-alt px-4 py-16 text-cream sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-5 max-w-[16ch] font-sans text-[30px] font-semibold uppercase leading-[1.03] tracking-[-0.03em] sm:text-[46px] lg:text-[58px]">
              Vamos falar sobre sua área?
            </h2>
            <p className="mb-8 max-w-[42ch] font-sans text-[15px] leading-[1.6] text-text-onDarkMuted sm:mb-12 sm:text-lg">
              Peça, projeto ou manutenção: fale com quem entende de
              irrigação. Responda o básico e um especialista retorna com as
              perguntas técnicas.
            </p>
            <div className="flex flex-col gap-5 border-t border-cream/10 pt-6">
              <div>
                <p className="mb-2 whitespace-nowrap font-mono text-xs font-semibold tracking-[0.08em] text-green-soft">
                  TELEFONE
                </p>
                <a
                  href={site.phoneHref}
                  className="font-sans text-xl font-medium leading-none tracking-[-0.02em] text-cream transition-colors hover:text-green-soft sm:text-2xl"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="mb-2 whitespace-nowrap font-mono text-xs font-semibold tracking-[0.08em] text-green-soft">
                  WHATSAPP
                </p>
                <a
                  href={whatsappLink("Olá! Vim pelo site e gostaria de falar sobre irrigação.")}
                  target="_blank"
                  rel="noopener"
                  className="font-sans text-xl font-medium leading-none tracking-[-0.02em] text-cream transition-colors hover:text-green-soft sm:text-2xl"
                >
                  {site.whatsappLabel}
                </a>
              </div>
              <div>
                <p className="mb-2 whitespace-nowrap font-mono text-xs font-semibold tracking-[0.08em] text-green-soft">
                  ENDEREÇO
                </p>
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-block border-b border-green-soft/45 font-sans text-base leading-[1.5] text-text-onDark transition-colors hover:border-green-soft hover:text-green-soft"
                >
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </a>
              </div>
              <div>
                <p className="mb-2 whitespace-nowrap font-mono text-xs font-semibold tracking-[0.08em] text-green-soft">
                  ATENDIMENTO
                </p>
                <p className="font-sans text-base leading-[1.5] text-text-onDark">{site.hours}</p>
              </div>
            </div>
          </div>

          <div className="border border-cream/10 bg-night p-6 sm:p-10">
            {sent ? (
              <div className="flex min-h-[420px] flex-col justify-center gap-4">
                <p className="whitespace-nowrap font-mono text-xs font-semibold tracking-[0.08em] text-green-soft">
                  SOLICITAÇÃO REGISTRADA
                </p>
                <h3 className="font-sans text-2xl font-semibold uppercase leading-[1.1] tracking-[-0.02em] sm:text-[30px]">
                  Recebemos seu contato
                </h3>
                <p className="font-sans text-base leading-[1.6] text-text-onDarkMuted">
                  Um especialista retorna em horário comercial. Se for
                  urgente, chame direto no WhatsApp.
                </p>
                <a
                  href={whatsappLink(waMessage || "Olá! Vim pelo site da Rural Top.")}
                  target="_blank"
                  rel="noopener"
                  className="self-start bg-green px-6 py-4 font-mono text-xs font-medium tracking-[0.08em] text-cream transition-colors hover:bg-green-hover"
                >
                  CONTINUAR NO WHATSAPP
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="rt-nome" className="whitespace-nowrap font-mono text-xs font-semibold tracking-[0.08em] text-green-soft">
                    NOME
                  </label>
                  <input
                    id="rt-nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    className="border border-cream/25 bg-transparent px-3.5 py-[15px] font-sans text-base text-cream outline-none focus:border-green-soft"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="rt-tel" className="whitespace-nowrap font-mono text-xs font-semibold tracking-[0.08em] text-green-soft">
                      TELEFONE / WHATSAPP
                    </label>
                    <input
                      id="rt-tel"
                      name="telefone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="border border-cream/25 bg-transparent px-3.5 py-[15px] font-sans text-base text-cream outline-none focus:border-green-soft"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="rt-cidade" className="whitespace-nowrap font-mono text-xs font-semibold tracking-[0.08em] text-green-soft">
                      CIDADE
                    </label>
                    <input
                      id="rt-cidade"
                      name="cidade"
                      type="text"
                      className="border border-cream/25 bg-transparent px-3.5 py-[15px] font-sans text-base text-cream outline-none focus:border-green-soft"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="rt-assunto" className="whitespace-nowrap font-mono text-xs font-semibold tracking-[0.08em] text-green-soft">
                    O QUE PRECISA?
                  </label>
                  <select
                    id="rt-assunto"
                    name="assunto"
                    className="border border-cream/25 bg-night px-3.5 py-[15px] font-sans text-base text-cream outline-none focus:border-green-soft"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="rt-msg" className="whitespace-nowrap font-mono text-xs font-semibold tracking-[0.08em] text-green-soft">
                    CONTE RAPIDAMENTE O QUE VOCÊ PRECISA
                  </label>
                  <textarea
                    id="rt-msg"
                    name="mensagem"
                    rows={4}
                    placeholder="Área, cultura, fonte de água, o que já existe instalado…"
                    className="resize-y border border-cream/25 bg-transparent px-3.5 py-[15px] font-sans text-base leading-[1.45] text-cream outline-none focus:border-green-soft"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 border-0 bg-green px-6 py-[19px] font-mono text-[13px] font-medium tracking-[0.08em] text-cream transition-colors hover:bg-green-hover"
                >
                  ENVIAR SOLICITAÇÃO
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
