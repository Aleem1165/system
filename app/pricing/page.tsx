import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | System Digital",
  description: "Clear, transparent pricing with no hidden fees.",
};

export default function pricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 sm:pt-36 pb-20 text-center flex flex-col items-center">
      {/* Category Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold uppercase tracking-wider mb-6">
        <span className="w-2 h-2 rounded-full bg-[#7c35ed]" />
        Company
      </div>

      {/* Page Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#101832] mb-6">
        Pricing
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-[#566073] max-w-2xl leading-relaxed mb-10">
        Clear, transparent pricing with no hidden fees.
      </p>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link
          href="/book-a-call"
          className="bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm px-6 py-3 rounded-full shadow-[0_8px_20px_rgba(124,58,237,0.25)] transition-all flex items-center gap-2"
        >
          <span>Book a Call</span>
          <span>→</span>
        </Link>
        <Link
          href="/"
          className="bg-white hover:bg-gray-50 text-[#101832] font-semibold text-sm px-6 py-3 rounded-full border border-gray-200 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
