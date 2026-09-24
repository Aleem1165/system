import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Search Ads & Local Services Ads for Contractors | System Digital",
  description:
    "Capture high-intent homeowners at the exact moment they need your trade service. Precision Google Ads engineered for high-ticket booked jobs.",
};

export default function GoogleAdsPage() {
  const capabilities = [
    {
      num: "01",
      title: "Capture Homeowners with Urgent Buying Intent",
      desc: "Connect with property owners actively searching for your service right now—not passive social scrollers. When a homeowner searches 'emergency plumber near me', your business appears first.",
      points: [
        "Targets active buyer keywords like 'contractor near me'",
        "High-intent prospects with credit cards ready to book",
        "Converts emergencies into immediate paid service calls",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Focus Strictly on High-Margin Trade Jobs",
      desc: "Stop wasting budget on low-ticket nuisance calls. We direct your ad dollars exclusively toward high-margin installations, full roof replacements, and whole-home remodels.",
      points: [
        "Focus on high-revenue projects that maximize profit",
        "Negative keyword filtering prevents small $50 repair clicks",
        "Strategic bidding adjusted for maximum return on ad spend",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Aggressive Negative Keyword Armor",
      desc: "Over 40% of wasted ad spend comes from junk searches like 'how to fix pipe DIY', 'cheap tools', or 'jobs hiring'. We eliminate these searches before they cost you a single cent.",
      points: [
        "Custom negative keyword library refined over hundreds of trade campaigns",
        "Blocks competitors, DIY researchers, and job applicants",
        "Protects every dollar of your monthly marketing budget",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
          />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Precision Call Tracking & Revenue Attribution",
      desc: "Know exactly which search query rang your phone and which ad converted into a signed contract. We deliver clear, transparent reports with zero marketing jargon.",
      points: [
        "Dynamic phone number insertion tracks every inbound call",
        "Call recordings and duration data accessible 24/7",
        "Direct calculation of customer acquisition cost and ROI",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  const valuePillars = [
    {
      badge: "Immediate Inflow",
      title: "Page-1 Visibility in 48 Hours",
      desc: "Don't wait 6 to 12 months for SEO algorithms to move. Launch ads on Monday and start receiving qualified inbound calls from ready-to-buy homeowners by Wednesday.",
    },
    {
      badge: "Mobile Call-Only Ads",
      title: "Tap-To-Call Direct Mobile Leads",
      desc: "Homeowners with flooded basements or damaged roofs search on mobile. One tap dials your office directly without even visiting a website first.",
    },
    {
      badge: "Territory Geo-Fencing",
      title: "Target Affluent Zip Codes",
      desc: "Draw precise geographic boundaries around the highest-income neighborhoods, subdivisions, and commercial zones you want to work in.",
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
            <span className="text-[#ea580c] font-bold">Google Ads</span>
          </div> */}

          {/* Split Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ff7a1a]/15">
                <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
                High-Intent Search
              </div> */}

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
                Show Up at the Exact Second Homeowners Need the Job Done.
              </h1>

              <p className="text-lg sm:text-xl text-[#566073] leading-relaxed mb-8">
                Unlike social media where people casually browse, Google searchers have broken furnaces, leaking roofs, or blueprints in hand. We engineer precision Google Ads campaigns that capture high-ticket, ready-to-hire homeowners right when their intent is at its absolute peak.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-3 gap-3 w-full mb-8 pt-4 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">#1 Spot</span>
                  <span className="text-xs font-semibold text-[#566073]">Top Page Placement</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">0% Waste</span>
                  <span className="text-xs font-semibold text-[#566073]">Negative Keyword Armor</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">Real ROI</span>
                  <span className="text-xs font-semibold text-[#566073]">Tracked Phone Calls</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/book-a-call"
                  className="bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-[10px] shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer border border-white/12 hover:border-white/30"
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

            {/* Right Column: Google Search Ad Mockup */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-gray-200/80 shadow-2xl relative overflow-hidden">
                {/* Search Bar Simulation */}
                <div className="flex items-center gap-3 bg-[#fffbf7] rounded-full px-4 py-2.5 border border-gray-200/60 mb-5 text-xs text-[#101832]">
                  <span className="text-gray-400">🔍</span>
                  <span className="font-medium flex-1">emergency roof leak repair near me</span>
                  <span className="text-gray-400">✕</span>
                </div>

                {/* Google Search Result Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#566073]">
                      <span className="font-bold text-[#101832] bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">
                        Sponsored
                      </span>
                      <span>•</span>
                      <span className="text-gray-500 font-mono">https://www.systemdigitaltrades.com</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#ea580c] bg-[#fff7ed] px-2 py-0.5 rounded-full border border-[#ff7a1a]/15">
                      Top Position
                    </span>
                  </div>

                  {/* Ad Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                    Fast Local Roof Repair | 24/7 Licensed Master Crews
                  </h3>

                  {/* Rating line */}
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-amber-500 font-bold">★★★★★ 4.9</span>
                    <span className="text-[#566073]">(142 verified homeowner reviews)</span>
                  </div>

                  {/* Snippet Description */}
                  <p className="text-xs sm:text-[13px] text-[#4d5156] leading-relaxed">
                    Emergency leak detection, storm damage repair &amp; full roof replacements. Same-day on-site estimates available in your zip code. $500 off complete jobs.
                  </p>

                  {/* Tap-To-Call Direct CTA Extension */}
                  <div className="mt-1 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200/60">
                      <span>📞</span>
                      <span>(888) 810-0013 — Tap to Call Now</span>
                    </div>
                    <span className="text-[11px] text-[#566073] font-medium text-center sm:text-right">
                      Response time: &lt;5 mins
                    </span>
                  </div>

                  {/* Sitelink Shortcuts */}
                  <div className="grid grid-cols-3 gap-2 mt-1 pt-2 border-t border-gray-100 text-[11px]">
                    <div className="text-[#1a0dab] font-semibold cursor-pointer hover:underline">
                      Free Estimate →
                    </div>
                    <div className="text-[#1a0dab] font-semibold cursor-pointer hover:underline">
                      View Recent Work →
                    </div>
                    <div className="text-[#1a0dab] font-semibold cursor-pointer hover:underline">
                      Service Guarantee →
                    </div>
                  </div>
                </div>

                {/* KPI Performance Bar */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-gray-100 text-center">
                  <div className="p-2 rounded-xl bg-[#fffbf7]">
                    <span className="text-[10px] text-[#566073] block">Target Audience</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#101832]">Ready Buyers</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#fffbf7]">
                    <span className="text-[10px] text-[#566073] block">Average CPC</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#ea580c]">Optimized Low</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#fffbf7]">
                    <span className="text-[10px] text-[#566073] block">Conversion Rate</span>
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-600">18.4% Calls</span>
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
              Intent-Driven Advertising
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              How our contractor Google ads generate real jobs
            </h2>
            <p className="text-[#566073] text-base sm:text-lg leading-relaxed">
              We cut through the noise by bidding strictly on high-intent keywords that homeowner prospects search when ready to hire immediately.
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
              Engineered For Results
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              Built specifically for high-ticket trade contractors
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              Capture exclusive inbound phone calls from ready buyers in your service radius.
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
                Capture Ready-to-Hire Searches
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Want customers who are actively searching to hire you today?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Let us map out the profitable trade keywords worth paying for—and eliminate the wasteful junk searches that burn through ad spend.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/book-a-call"
                  className="bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out text-center flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Book a Free Strategy Call</span>
                </Link>
                <Link
                  href="/"
                  className="bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-[10px] border border-white/15 backdrop-blur-sm transition-all text-center cursor-pointer"
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
