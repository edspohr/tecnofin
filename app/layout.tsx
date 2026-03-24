import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import CookieConsent from "@/components/ui/CookieConsent";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tecnofin | Software de Crédito para Cooperativas en Ecuador",
    template: "%s | Tecnofin",
  },
  description:
    "Tecnofin ofrece soluciones tecnológicas para gestión crediticia en cooperativas e instituciones financieras de Ecuador y LATAM. 30+ años de experiencia.",
  keywords: ["software crédito cooperativas", "gestión crediticia Ecuador", "fintech cooperativas", "Cartera 365"],
  authors: [{ name: "Tecnofin" }],
  creator: "Tecnofin",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://tecnofin.ec",
    siteName: "Tecnofin",
    title: "Tecnofin | Software de Crédito para Cooperativas en Ecuador",
    description: "Soluciones tecnológicas para gestión crediticia. 30+ años de experiencia en el sector financiero de LATAM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnofin | Software de Crédito para Cooperativas",
    description: "Soluciones tecnológicas para gestión crediticia en cooperativas e instituciones financieras.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`}>
      <body className="bg-navy text-white font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
