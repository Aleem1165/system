"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // If route is /home, root layout does not render default Header and Footer
  const isCustomHome = pathname === "/home" || pathname?.startsWith("/home");

  return (
    <>
      {!isCustomHome && <Header />}
      <main className="flex-1">{children}</main>
      {!isCustomHome && <Footer />}
    </>
  );
}
