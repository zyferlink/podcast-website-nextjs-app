"use client";
import { usePathname } from "next/navigation";
import type React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./footer/footer";
import Navbar from "./navigation/nav-bar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname === "/app/pages/not-found.tsx";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
