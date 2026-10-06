import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandrarangel.com"),
  title: "Sandra Rangel | Marketing social para la gestión del riesgo de desastres",
  description:
    "Transformamos la exigencia legal de la gestión del riesgo de desastres (Ley 1523 de 2012 y Decreto 2157 de 2017) en campañas de marketing social que protegen la vida, aseguran la continuidad operativa de las empresas y garantizan la viabilidad de eventos masivos en Colombia.",
  openGraph: {
    title: "Sandra Rangel | Marketing social para la gestión del riesgo de desastres",
    description:
      "Consultoría en PGRDEPP, planes de emergencia y contingencia (PEC) y campañas de comunicación para el cambio de comportamiento, bajo la Ley 1523 de 2012 y el Decreto 2157 de 2017.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
