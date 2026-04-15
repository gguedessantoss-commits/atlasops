import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AtlasOps | Operational Command Platform",
  description:
    "AtlasOps is a multi-tenant SaaS for operational command, incident management, SLA coordination, and executive visibility.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
