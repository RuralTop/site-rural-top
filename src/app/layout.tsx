import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ruraltop.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rural Top | Irrigação, do projeto à implantação — Brasília e região",
    template: "%s | Rural Top",
  },
  description:
    "A Rural Top projeta, fornece e implanta sistemas de irrigação — gotejamento, aspersão, pivô central, bombeamento, automação e filtragem — em Brasília, no Distrito Federal e região. Mais de 15 anos de campo.",
  keywords: [
    "irrigação Brasília",
    "sistema de irrigação DF",
    "irrigação por gotejamento",
    "aspersão agrícola",
    "pivô central",
    "bombeamento agrícola",
    "automação de irrigação",
    "Rural Top",
  ],
  authors: [{ name: "Rural Top Comercial Agrícola Ltda." }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Rural Top",
    title: "Rural Top | Irrigação, do projeto à implantação",
    description:
      "Projetamos, fornecemos e implantamos sistemas de irrigação para quem precisa produzir com segurança e eficiência. Brasília — DF e região, desde 2009.",
    images: [{ url: "/images/logo-rural-top.png", width: 1200, height: 630, alt: "Rural Top" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rural Top | Irrigação, do projeto à implantação",
    description:
      "Projetamos, fornecemos e implantamos sistemas de irrigação em Brasília e região. Mais de 15 anos de campo.",
    images: ["/images/logo-rural-top.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${plexMono.variable}`}>
      <body className="bg-cream text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
