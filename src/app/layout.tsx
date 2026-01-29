import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Substrate — The Operating System for Modern Banking",
  description:
    "The next-generation banking core built for composability, auditability, and developer velocity. Powered by TigerBeetle, Authzed, and next-gen primitives for programmable money movement.",
  keywords: [
    "banking core",
    "fintech infrastructure",
    "core banking",
    "TigerBeetle",
    "modern banking",
    "composable banking",
    "programmable money",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
