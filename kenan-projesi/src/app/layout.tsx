import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TemaSaglayici from "./components/TemaSaglayici";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oyun Portalı - Web Tasarımı ve Programlama",
  description: "Web Tasarımı ve Programlama Dersi - Hafta 6 Tailwind CSS Uygulaması",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-200">
        <TemaSaglayici>{children}</TemaSaglayici>
      </body>
    </html>
  );
}
