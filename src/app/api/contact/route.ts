import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const nome = (body?.nome || "").toString().trim();
  const telefone = (body?.telefone || "").toString().trim();
  const cidade = (body?.cidade || "").toString().trim();
  const assunto = (body?.assunto || "").toString().trim();
  const mensagem = (body?.mensagem || "").toString().trim();

  if (!nome || !telefone) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    // Email notification isn't configured — the WhatsApp flow still works
    // on its own, so this isn't treated as a hard failure.
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 200 });
  }

  try {
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL || "Rural Top <onboarding@resend.dev>";

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `Nova solicitação pelo site — ${assunto || "Contato"}`,
      text: [
        `Nome: ${nome}`,
        `Telefone/WhatsApp: ${telefone}`,
        `Cidade: ${cidade || "não informado"}`,
        `Assunto: ${assunto || "não informado"}`,
        "",
        "Mensagem:",
        mensagem || "(sem mensagem)",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend recusou o envio do e-mail de contato:", error);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (error) {
    console.error("Falha ao enviar e-mail de notificação de contato:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
