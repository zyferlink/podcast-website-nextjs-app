import type { Metadata } from "next";
import { Geist, Geist_Mono, Poiret_One, Zain } from "next/font/google";
import "./globals.css";

const fontZain = Zain({
  weight: ["200", "300", "400", "700", "800", "900"],
  variable: "--font-zain",
  subsets: ["latin"],
});

const fontPoiretOne = Poiret_One({
  weight: ["400"],
  variable: "--font-poiret-one",
  subsets: ["latin"],
});

const fontGeistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontGeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoiceFlow",
  description: "The Future of Podcast Platforms",
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      {
        url: "/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
};

import ClientWrapper from "@/components/client-wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontGeistSans.variable} ${fontGeistMono.variable} ${fontZain.variable} ${fontPoiretOne.variable} antialiased`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
