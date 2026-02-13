import type { Metadata } from "next";
import { Geist, Geist_Mono, Genos, Dancing_Script, Oooh_Baby } from "next/font/google";
import "./globals.css";
import Navbar from './components/shared/Navbar';
import Footer from "./components/shared/Footer";

const DancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: "400",
})

const OoohBaby = Oooh_Baby({
  variable: "--font-oooh-baby",
  subsets: ["latin"],
  weight: "400",
})

const genos = Genos({
  variable: "--font-genos",
  subsets: ["latin"],
  weight: "400",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Glam Aesthethic and Wellness",
  description: "The Glam & Wellness es un centro de estética y bienestar que combina tecnología avanzada con tratamientos personalizados para realzar tu belleza natural. Ofrecemos servicios integrales para rostro, cuerpo y piel, utilizando lo último en innovación estética para transformar tu apariencia de manera integral. Nuestro equipo de expertos se dedica a brindarte una experiencia única y resultados excepcionales, ayudándote a sentirte radiante y seguro en tu propia piel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${genos.variable} ${DancingScript.variable} ${OoohBaby.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
