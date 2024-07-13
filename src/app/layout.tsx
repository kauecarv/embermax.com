import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#ef4444", // text-red-500 in hex
};

export const metadata: Metadata = {
  title: "Embermax — Contas Exclusivas de Valorant",
  description:
    "Encontre as melhores contas de Valorant à venda na Embermax. Contas exclusivas, seguras e prontas para jogar!",
  alternates: {
    canonical: "https://embermax.com",
  },
  authors: [{ name: "Embermax", url: "https://embermax.com" }],
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Embermax",
    "contas valorant",
    "comprar contas valorant",
    "vendas de contas valorant",
    "contas exclusivas valorant",
    "contas seguras valorant",
    "loja de contas valorant",
    "contas de jogos",
    "valorant",
    "comprar contas de jogos",
    "contas de valorant prontas",
  ],
  openGraph: {
    title: "Embermax — Contas Exclusivas de Valorant",
    siteName: "Embermax",
    url: "https://embermax.com",
    locale: "pt_BR",
    description:
      "Encontre as melhores contas de Valorant à venda na Embermax. Contas exclusivas, seguras e prontas para jogar!",
    images: ["/banner/embermax.png"],
  },
  twitter: {
    title: "Embermax — Contas Exclusivas de Valorant",
    description:
      "Encontre as melhores contas de Valorant à venda na Embermax. Contas exclusivas, seguras e prontas para jogar!",
    card: "summary_large_image",
    images: ["/banner/embermax.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-br">
        <head>
          <link rel="icon" href="/favicon.png" sizes="any" />
        </head>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
