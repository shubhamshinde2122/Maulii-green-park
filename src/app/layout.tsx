import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Weights needed for headers
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Weights for body/UI
});

export const metadata: Metadata = {
  title: "Mauli Green Park | Premium 3 & 4 BHK Residences",
  description: "Experience the art of modern living in Kupa. Luxury homes with serene landscapes and premium amenities by Mauli Developers.",
  openGraph: {
    title: "Mauli Green Park | Premium 3 & 4 BHK Residences",
    description: "Experience the art of modern living in Kupa. Luxury homes with serene landscapes and premium amenities.",
    url: "https://maulii-green-park.vercel.app",
    siteName: "Mauli Green Park",
    images: [
      {
        url: "/mauli-hero.png",
        width: 1200,
        height: 630,
        alt: "Mauli Green Park Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauli Green Park | Premium 3 & 4 BHK Residences",
    description: "Experience the art of modern living in Kupa. Luxury homes with serene landscapes.",
    images: ["/mauli-hero.png"],
  },
};

import ThemeManager from "@/components/ThemeManager";
import { LanguageProvider } from "@/context/LanguageContext";
import Preloader from "@/components/Preloader";
import FilmGrain from "@/components/FilmGrain";
import AudioAmbiance from "@/components/AudioAmbiance";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${manrope.variable} antialiased selection:bg-raw-silk selection:text-midnight-silt`}
      >
        <Preloader />
        <FilmGrain />
        <AudioAmbiance />
        <ThemeManager />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
