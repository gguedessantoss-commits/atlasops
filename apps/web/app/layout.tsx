import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AtlasOps | Plataforma de Comando Operacional",
  description:
    "AtlasOps e um SaaS multi-tenant para comando operacional, gestao de incidentes, coordenacao de SLA e visibilidade executiva.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
