import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Video Ads for Local Contractors | System Digital",
  description:
    "High-impact short-form video ads for local trade businesses. Capture neighborhood attention, demonstrate craftsmanship, and generate estimate leads with zero dancing.",
};

export default function TikTokAdsPage() {
  const capabilities = [
    {
      num: "01",
      title: "Hook Attention in the First 3 Seconds",
      desc: "Lead with the homeowner's immediate pain point—like ceiling water spots, freezing AC units, or dated kitchens—and deliver an instant visual payoff that stops the scroll.",
      points: [
        "Tested video hooks proven for home improvement niches",
        "Fast-paced visual storytelling that respects viewer attention",
        "Clear demonstration of problem to finished transformation",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Keep Targeting Strictly Local",
      desc: "Zero wasted views from distant states. We draw tight geographic geo-fences so your video ads only appear on the feeds of homeowners inside your actual service territory.",
      points: [
        "Granular county, town, and radius boundary controls",
        "Targeted specifically to homeowner age demographics (30-65+)",
        "Excludes renters, out-of-state accounts, and non-homeowners",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Frictionless Lead Capture in 2 Taps",
      desc: "No complicated website forms or multiple clicks. Native in-feed lead generation allows interested homeowners to submit their project request directly in 2 taps.",
      points: [
        "Auto-populates homeowner name, phone, and zip code",
        "Captures estimate requests without breaking video flow",
        "Instant SMS alerts dispatched to your mobile phone in seconds",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Build Unstoppable Local Brand Familiarity",
      desc: "When thousands of nearby homeowners see your branded trucks and crew videos weekly, your business becomes the trusted household name before they even have an emergency.",
      points: [
        "Fosters massive local community recognition",
        "Drives high-margin inbound word-of-mouth calls",
        "Makes closing estimates easier because prospects already know you",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  const valuePillars = [
    {
      badge: "Authenticity Wins",
      title: "Real Job Site Proof Over Glossy Ads",
      desc: "Authentic behind-the-scenes clips recorded on a smartphone outperform polished corporate commercials by 3x on TikTok because homeowners crave genuine craftsmanship.",
    },
    {
      badge: "Maximum Attention",
      title: "Lowest CPMs in Modern Advertising",
      desc: "TikTok delivers dramatically lower cost-per-thousand impressions than traditional search platforms, allowing you to dominate local attention on modest budgets.",
    },
    {
      badge: "Turnkey Production",
      title: "Professional Editing & Sound Design",
      desc: "You don't need a videographer. Text us raw 10-second job clips from your phone; our team handles motion graphics, captions, voiceovers, and licensing.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#101832] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: OTHER SERVICES SIGNATURE SPLIT LAYOUT */}
      {/* ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-10 sm:pb-14 relative overflow-hidden bg-gradient-to-b from-[#fff8f2] via-white to-white">
        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#ff7a1a]/10 to-[#ffaa47]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          {/* Breadcrumb */}
          {/* <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#566073] mb-6">
            <Link href="/" className="hover:text-[#ea580c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#566073]">Other Services</span>
            <span>/</span>
            <span className="text-[#ea580c] font-bold">TikTok Ads</span>
          </div> */}

          {/* Split Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ff7a1a]/15">
                <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
                Short-Form Video
              </div> */}

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
                TikTok Ads for Contractors. Zero Dancing Required.
              </h1>

              <p className="text-lg sm:text-xl text-[#566073] leading-relaxed mb-8">
                Homeowners are actively searching TikTok for renovation reveals, home maintenance guides, and local trade recommendations. We engineer authentic, hook-driven short-form video ads showcasing your real job site work that capture neighborhood attention and convert into booked estimates.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-3 gap-3 w-full mb-8 pt-4 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">Real Video</span>
                  <span className="text-xs font-semibold text-[#566073]">Job Site Proof</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">Local</span>
                  <span className="text-xs font-semibold text-[#566073]">Geo-Radius Targeting</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">Low CPM</span>
                  <span className="text-xs font-semibold text-[#566073]">High Attention Value</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center justify-center bg-[#121316] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-[10px] border border-white/12 cursor-pointer"
                >
                  <span>Book a Free Strategy Call</span>
                </Link>
                <Link
                  href="/"
                  className="bg-white hover:bg-gray-50 text-[#101832] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-[10px] border border-gray-200 transition-all cursor-pointer"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            {/* Right Column: Vertical TikTok Ad Mockup */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-[380px] bg-[#101832] rounded-[36px] p-4 border-4 border-gray-800 shadow-2xl relative overflow-hidden text-white flex flex-col justify-between aspect-[9/16]">
                {/* Top Video Overlay Bar */}
                <div className="flex items-center justify-between z-10 pt-2 px-2">
                  <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[11px] font-bold tracking-wide">Sponsored • 📍 5 mi radius</span>
                  </div>
                  <span className="text-xs bg-white/20 p-1.5 rounded-full backdrop-blur-sm">🔊</span>
                </div>

                {/* Floating Side Action Icons */}
                <div className="absolute right-4 bottom-24 flex flex-col items-center gap-4 z-10 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-rose-500 text-lg shadow-md">
                      ❤️
                    </div>
                    <span className="text-[11px] font-bold mt-1">2.4K</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-lg shadow-md">
                      💬
                    </div>
                    <span className="text-[11px] font-bold mt-1">184</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-lg shadow-md">
                      ↗
                    </div>
                    <span className="text-[11px] font-bold mt-1">342</span>
                  </div>
                </div>

                {/* Center Content Placeholder: Timelapse Animation preview */}
                <div className="my-auto flex flex-col items-center text-center px-4 py-8 z-10">
                  <div className="w-16 h-16 rounded-full bg-[#ff7a1a]/80 backdrop-blur-md flex items-center justify-center text-white text-2xl shadow-[0_0_30px_rgba(255,122,26,0.7)] mb-4 animate-bounce">
                    ▶
                  </div>
                  <span className="text-white font-black text-lg sm:text-xl tracking-tight block">
                    48-Hour Full Roof Overhaul
                  </span>
                  <span className="text-gray-300 text-xs mt-1 block">
                    Watch our master crew tackle storm damage in Oakmont Hills
                  </span>
                </div>

                {/* Bottom Overlay: Caption, Audio & Sticky CTA */}
                <div className="z-10 pb-2 px-2 flex flex-col gap-2.5">
                  <div className="bg-black/55 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-extrabold text-xs text-[#ff9838]">@systemtradecrew</span>
                      <span className="w-3 h-3 rounded-full bg-[#ff7a1a] text-[8px] flex items-center justify-center font-bold">✓</span>
                    </div>
                    <p className="text-[11px] text-gray-200 leading-snug">
                      Severe leaks fixed before the winter freeze. Tap below to claim $500 off your complete replacement! 🔨⚡ #homeowner #contractor
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mt-2">
                      <span>♫</span>
                      <span className="truncate">Original Trade Sound • System Media</span>
                    </div>
                  </div>

                  {/* Sticky 2-Tap Lead CTA Button */}
                  <div className="w-full bg-[#ff7a1a] hover:bg-[#c2410c] text-white text-xs font-bold py-3 rounded-xl shadow-lg flex items-center justify-between px-4 cursor-pointer transition-all">
                    <span>Get Free On-Site Estimate</span>
                    <span>Instant Quote →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE 4 CORE CAPABILITIES */}
      {/* ========================================================================= */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#fffbf7] border-t border-gray-200/70">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Short-Form Impact
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              How short-form video ads book real contractor jobs
            </h2>
            <p className="text-[#566073] text-base sm:text-lg leading-relaxed">
              We lead with fast hooks, show visual proof of quality work, and provide an effortless next step to request an estimate.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {capabilities.map((item) => (
              <article
                key={item.num}
                className="relative bg-white rounded-xl sm:rounded-2xl p-8 sm:p-9 border border-gray-200/80 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#fff7ed] border border-[#ff7a1a]/20 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm font-black text-gray-300">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#101832] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#566073] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <ul className="pt-6 border-t border-gray-100 flex flex-col gap-2.5">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#101832]">
                      <span className="text-[#ea580c] font-bold">✓</span>
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
      {/* 3. VALUE IMPACT: 3 STRATEGIC PILLARS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              The TikTok Advantage
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              Built specifically for modern trade contractors
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              Capture exclusive attention in your market before competitors catch on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {valuePillars.map((val, vIdx) => (
              <div
                key={vIdx}
                className="bg-[#fffbf7] rounded-xl sm:rounded-2xl p-7 border border-orange-100 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#ea580c] bg-[#fff7ed] px-2.5 py-1 rounded-full border border-[#ff7a1a]/15 inline-block mb-4">
                    {val.badge}
                  </span>
                  <h3 className="text-lg font-bold text-[#101832] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#566073] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FINAL HIGH-CONVERTING CTA CARD */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#fffbf7]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#101832] via-[#1b2240] to-[#25183f] text-white shadow-xl overflow-hidden text-center">
            {/* Ambient Purple Glow Orbs */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ff7a1a]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#ea580c]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[#ff9838] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-2">
                Dominate Local Attention
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Curious about TikTok—without the cringey dancing?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Let us show you how short-form video ads can position your trade business as the local authority and generate high-margin estimate leads this month.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center justify-center bg-[#121316] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-[10px] border border-white/12 cursor-pointer"
                >
                  <span>Book a Free Strategy Call</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
