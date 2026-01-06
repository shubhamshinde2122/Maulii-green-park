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
  title: "Mauli Green Park | Mauli Developers",
  description: "Experience the art of modern living. Premium 3 & 4 BHK Residences.",
};

import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${manrope.variable} antialiased`}
      >
        <SmoothScroll />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
