import { whatsappLink } from "@/data/content";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo site e gostaria de falar sobre irrigação.")}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-3 right-3 z-[60] flex items-center gap-2.5 bg-green px-5 py-4 font-mono text-xs font-medium tracking-[0.08em] text-cream shadow-[0_10px_30px_rgba(14,20,16,.35)] transition-colors hover:bg-green-hover sm:bottom-6 sm:right-6"
    >
      <span className="h-2 w-2 rounded-full bg-green-soft" />
      WHATSAPP
    </a>
  );
}
