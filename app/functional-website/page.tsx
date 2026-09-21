import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Functional Contractor Websites Built to Convert | System Digital",
  description: "Get a modern, mobile-first contractor website engineered to build trust, rank in local search, and convert casual visitors into booked jobs.",
};

export default function FunctionalWebsitePage() {
  const stats = [
    {
      num: "78%",
      badge: "First Impression",
      highlight: "Judge Credibility Online",
      desc: "of property owners judge a contractor's legitimacy and pricing authority based on the design and professionalism of their website.",
    },
    {
      num: "82%",
      badge: "Proven Growth",
      highlight: "Primary Lead Engine",
      desc: "of top-tier trade businesses report that their functional website is their single most consistent source of high-ticket booked estimates.",
    },
    {
      num: "71%",
      badge: "Mobile Factor",
      highlight: "Instant Mobile Trust",
      desc: "of homeowners immediately leave a contractor's page if it takes longer than 3 seconds to load or requires pinching and zooming on a phone.",
    },
  ];

  const pillars = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      num: "01",
      title: "Actually Show Up in Local Search",
      desc: "If homeowners in your service radius can't find you on Google, your competitors win the job. We construct fast, search-optimized pages designed to rank at the top of Google Maps and organic local search for your most profitable trade services.",
      points: [
        "Google Map Pack top 3 optimization",
        "Dedicated local town & county landing pages",
        "Schema markup built specifically for contractors",
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      num: "02",
      title: "Engineered Exclusively for Phone Users",
      desc: "Over 80% of homeowners look up contractors on their mobile phones in an urgent situation. They should never need two hands, three zooms, and a prayer to request an estimate. Our pages load instantly with effortless one-tap calling.",
      points: [
        "Sub-second mobile page load speed",
        "Sticky tap-to-call and quick-quote buttons",
        "Thumb-friendly forms with zero friction",
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      num: "03",
      title: "Showcase Verified Proof & Past Work",
      desc: "Homeowners hire contractors they trust. We strategically showcase your 5-star Google ratings, before-and-after photo galleries, license credentials, and active service areas so new prospects feel completely confident reaching out.",
      points: [
        "Live Google review badges & verified ratings",
        "High-definition project photo showcases",
        "Prominent licensing, bonding & insurance badges",
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      num: "04",
      title: "Turn Visits Into Confirmed Conversations",
      desc: "Website visitors mean nothing if your phone isn't ringing. Every layout, headline, and call-to-action is engineered with a single objective: converting passive visitors into direct phone calls, text messages, and booked estimates.",
      points: [
        "Direct SMS lead routing straight to your phone",
        "Instant auto-reply within 3 seconds",
        "Higher conversion rates on all inbound traffic",
      ],
    },
  ];

  const features = [
    {
      title: "Lightning-Fast Performance",
      desc: "Built on modern Jamstack technology that loads in under 1 second, keeping bounce rates low and Google search rankings high.",
    },
    {
      title: "Automated SMS Routing",
      desc: "Every estimate inquiry is delivered instantly to your phone via SMS so you can respond before your competitor even checks their email.",
    },
    {
      title: "Local SEO Architecture",
      desc: "Engineered with geographic service pages so you dominate local searches in all the specific towns and zip codes you want to work in.",
    },
    {
      title: "Review Funnel Automation",
      desc: "Continuously highlights your newest 5-star reviews to keep your credibility fresh and encourage past clients to leave feedback.",
    },
    {
      title: "Mobile-First Conversion UI",
      desc: "Designed from the screen up for thumb-driven mobile navigation, sticky contact bars, and effortless tap-to-call functionality.",
    },
    {
      title: "Bank-Grade SSL & Security",
      desc: "Encrypted, fully managed hosting with zero WordPress plugin vulnerabilities, updates, or maintenance headaches for you.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#101832] overflow-hidden">

      {/* ========================================================================= */}
      {/* 1. HERO / INTERACTIVE DEMO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 bg-gradient-to-b from-[#faf8fd] via-white to-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">

          {/* Breadcrumb & Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#566073] mb-6">
            <Link href="/" className="hover:text-[#7c35ed] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#system" className="hover:text-[#7c35ed] transition-colors">
              Solutions
            </Link>
            <span>/</span>
            <span className="text-[#7c35ed] font-bold">Functional Website</span>
          </div>

          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold uppercase tracking-wider mb-4 border border-[#7c35ed]/15">
              <span className="w-2 h-2 rounded-full bg-[#7c35ed]" />
              Core Foundation
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
              Contractor Websites Built to Turn Visits into Booked Jobs
            </h1>
            <p className="text-lg sm:text-xl text-[#566073] leading-relaxed max-w-3xl">
              Most contractor websites look outdated, load too slowly, and fail to turn visitors into phone calls. We build modern, mobile-first platforms engineered specifically to establish trust and capture quotes.
            </p>
          </div>

          {/* 2-Column Demo Layout: Left = 3 Stat Cards, Right = Video Frame Placeholder Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* Left Column: 3 Stat Cards (compacted to match video container height) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-3.5 h-full">
              {stats.map((s, idx) => (
                <article
                  key={idx}
                  className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-gray-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.1)] hover:border-[#7c35ed]/30 transition-all duration-300 group overflow-hidden flex-1 flex flex-col justify-center"
                >
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#7c35ed] to-[#9333ea]" />
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#7c35ed] via-[#9333ea] to-[#a855f7] bg-clip-text text-transparent">
                      {s.num}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-[#7c35ed] bg-[#f5f3ff] px-2.5 py-0.5 rounded-full border border-[#7c35ed]/15">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#101832] mb-1 group-hover:text-[#7c35ed] transition-colors">
                    {s.highlight}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#566073] leading-relaxed">
                    {s.desc}
                  </p>
                </article>
              ))}
            </div>

            {/* Right Column: Video Container Box (Dimensionally Mapped For Video) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-white rounded-3xl p-5 sm:p-7 border border-gray-200/80 shadow-xl h-full flex flex-col justify-between">

                {/* Frame Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#101832]">
                      See A Short Demo Below
                    </h2>
                    <p className="text-xs sm:text-sm text-[#566073] mt-0.5">
                      Interactive platform walkthrough and conversion demonstration
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
                    Video Frame
                  </span>
                </div>

                {/* EXACT VIDEO FRAME CONTAINER (16:9 Aspect Ratio) */}
                <div className="relative w-full aspect-video rounded-2xl bg-gradient-to-br from-[#101832] via-[#161f38] to-[#25183f] border-2 border-[#7c35ed]/30 overflow-hidden shadow-2xl flex flex-col items-center justify-center group select-none">

                  {/* Subtle Background Radial Ambient Aura */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.3)_0%,transparent_70%)] pointer-events-none" />

                  {/* Grid Lines Accent */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                  {/* Play Button & Placeholder Labels */}
                  <div className="relative z-10 flex flex-col items-center text-center p-6 gap-3 sm:gap-4">
                    <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#7c35ed] to-[#9333ea] flex items-center justify-center text-white shadow-[0_0_35px_rgba(124,58,237,0.6)] group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <span className="absolute inset-0 rounded-full bg-[#7c35ed] animate-ping opacity-25" />
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 translate-x-0.5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    <div className="max-w-md">
                      <span className="text-white font-extrabold text-base sm:text-xl block tracking-tight">
                        Functional Website Video Demo
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm mt-1 block leading-snug">
                        Full-width responsive video container • Ready for video upload
                      </span>
                    </div>
                  </div>

                  {/* Video Player Control Bar Mockup */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex items-center justify-between gap-4 text-white text-xs">
                    <div className="flex items-center gap-3 w-full">
                      <span className="text-gray-300 font-mono text-[11px] sm:text-xs">0:00 / 2:30</span>
                      <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-[#7c35ed] rounded-full" />
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-gray-300 uppercase tracking-wider flex-shrink-0">
                      1080p HD
                    </span>
                  </div>

                </div>

                {/* Dimension Note */}
                <div className="mt-3.5 pt-3.5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#566073]">
                  <span>16:9 standard video aspect ratio container</span>
                  <span className="text-[#7c35ed] font-semibold">Ready for MP4, YouTube, or Vimeo embed</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EXPLANATION SECTION: WHAT IS A FUNCTIONAL WEBSITE? (4 PILLARS) */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#faf8fd] border-t border-gray-200/70">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              The Fundamental Difference
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              What is a functional website?
            </h2>
            <p className="text-[#566073] text-base sm:text-lg leading-relaxed">
              Traditional web agencies build passive digital brochures that look nice but generate zero calls. We build functional business engines designed specifically to book contractor jobs.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pillars.map((item) => (
              <article
                key={item.num}
                className="relative bg-white rounded-3xl p-8 sm:p-9 border border-gray-200/80 shadow-md hover:shadow-xl hover:border-[#7c35ed]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#f5f3ff] border border-[#7c35ed]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#7c35ed] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm font-black text-gray-300 group-hover:text-[#7c35ed] transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#101832] mb-3 group-hover:text-[#7c35ed] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#566073] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <ul className="pt-6 border-t border-gray-100 flex flex-col gap-2.5">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#101832]">
                      <span className="text-[#7c35ed] font-bold">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ARCHITECTURE HIGHLIGHTS (EVERYTHING INCLUDED) */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Standard Across Every Build
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              Built specifically for modern trade workflows
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              No DIY templates, no bloated code, and zero technical maintenance required from you or your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="bg-[#faf8fd] rounded-2xl p-7 border border-purple-100 hover:border-[#7c35ed]/30 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-[#7c35ed]/20 text-[#7c35ed] font-bold text-sm flex items-center justify-center mb-4 shadow-xs">
                  {fIdx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#101832] mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#566073] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FINAL HIGH-CONVERTING CTA CARD */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#faf8fd]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">

          <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#101832] via-[#1b2240] to-[#25183f] text-white shadow-xl overflow-hidden text-center">

            {/* Ambient Purple Glow Orbs */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#7c35ed]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#9333ea]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[#c084fc] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-2">
                Ready to upgrade your web presence?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Is your website mostly standing around?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Let us show you how to turn it into an automated team member that answers homeowner questions, collects quote requests, and never asks for a day off.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/book-a-call"
                  className="bg-gradient-to-r from-[#7c35ed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7c35ed] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-[0_10px_24px_rgba(124,58,237,0.4)] hover:shadow-[0_14px_30px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Book a Free Strategy Call</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/"
                  className="bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/15 backdrop-blur-sm transition-all text-center cursor-pointer"
                >
                  Back to Home
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
