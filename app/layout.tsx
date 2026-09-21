import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingScrollbar from "@/components/FloatingScrollbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contractor Website & Marketing System | System Digital",
  description:
    "System builds contractor websites and marketing systems that capture leads, follow up faster, improve reviews, and help book more local work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fdfdfd] text-[#101832] selection:bg-[#7c35ed] selection:text-white">
        <FloatingScrollbar />
        <Header />
        {/* Header floats fixed at top; individual pages control their top spacing */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
