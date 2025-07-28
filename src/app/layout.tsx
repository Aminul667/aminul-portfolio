import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/context/NavigationContext";
import { Navbar } from "@/components/Shared/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Aminul - Fullstack Developer",
  description:
    "Fullstack developer portfolio showcasing the art of coding through beautiful, functional web experiences.",
  keywords: [
    "Fullstack developer",
    "web development",
    "frontend",
    "backend",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <NavigationProvider>
          <Navbar />
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}
