import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Metal_Mania } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navigation/nav-bar";

const kanit = Kanit({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  subsets: ["latin"],
});

const metalMania = Metal_Mania({
  weight: ["400"],
  variable: "--font-metal-mania",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoiceFlow",
  description: "The Future of Podcast Platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${metalMania.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
