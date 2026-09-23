import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Outfit } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";
import FloatingScrollbar from "@/components/FloatingScrollbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Contractor Website & Marketing System | Rendro Systems",
  description:
    "Rendro Systems builds contractor websites and marketing systems that capture leads, follow up faster, improve reviews, and help book more local work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fdfdfd] text-[#101832]">
        <FloatingScrollbar />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
