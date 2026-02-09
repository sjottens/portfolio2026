import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import MainMenu from "./components/MainMenu";
import CursorHover from "./components/CursorHover";
import ClickPulse from "./components/ClickPulse";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rogier Ottens Portfolio",
  description: "Build my website using Next.js and React, Tailwindcss, SCSS, TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.boxicons.com/3.0.8/fonts/basic/boxicons.min.css" rel="stylesheet" />
        <link href="https://cdn.boxicons.com/3.0.8/fonts/filled/boxicons-filled.min.css" rel="stylesheet" />
        <link href="https://cdn.boxicons.com/3.0.8/fonts/brands/boxicons-brands.min.css" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black`}>
        <CursorHover /><ClickPulse />
        <div className="cursor-circle"></div>
        <header className="header">
          <MainMenu />
        </header>
        
        {children}
      </body>
    </html>
  );
}
