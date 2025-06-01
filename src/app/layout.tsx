import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SnackBarProvider } from "@/pokemon/context/SnackBar.context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon Next App",
  description: "A simple Pokémon app built with Next.js",
  openGraph: {
    title: "Pokemon Next App",
    description: "A simple Pokémon app built with Next.js",
    url: "https://pokemon-next-app.vercel.app",
    siteName: "Pokemon Next App",
    images: [
      {
        url: "https://pokemon-next-app.vercel.app/pokemon-logo-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Pokemon Next App OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SnackBarProvider>
          <div className="flex flex-col items-center justify-center min-h-screen py-6 gap-6">
            {children}
          </div>
        </SnackBarProvider>
      </body>
    </html>
  );
}
