import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads (Facebook & Instagram) for Contractors | System Digital",
  description:
    "High-converting Facebook and Instagram ad campaigns engineered to generate booked estimates—not vanity likes. Hyper-local contractor ad targeting that pays for itself.",
};

export default function MetaAdsPage() {
  const capabilities = [
    {
      num: "01",
      title: "Pinpoint Hyper-Local Zip Code Targeting",
      desc: "Reach homeowners located strictly within your exact service radius. Never waste a penny of your ad budget on renters, commercial accounts, or people three counties away.",
      points: [
        "Granular zip code and municipal boundary targeting",
        "Demographic filtering focused on property homeowners",
        "Exclude out-of-service areas and tire-kicking demographics",
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
      num: "02",
      title: "Compelling, Direct-Response Offers",
      desc: "No vague 'we are the best' slogans that get ignored. We craft irresistible, urgent seasonal promotions that give homeowners a compelling reason to request an estimate today.",
      points: [
        "Time-sensitive promotions (e.g. $500 off full roof replacements)",
        "Compelling ad copy engineered for local trade psychology",
        "High-contrast before/after imagery that grabs thumb attention",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Retarget Visitors Who Didn't Convert",
      desc: "Over 90% of homeowners browse your website but leave without calling. We deploy smart retargeting pixels to show reminder ads on Facebook and Instagram until they reach out.",
      points: [
        "Second-chance marketing keeps your brand top-of-mind",
        "Targets past website visitors and form abandoners",
        "Highest return on investment (ROI) segment in advertising",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Track Real Dollar Revenue (Not Fake Metrics)",
      desc: "We don't report vanity metrics like 'reach' or 'post impressions'. We measure incoming phone calls, booked estimates, and closed revenue so you know your exact return.",
      points: [
        "Tracks cost-per-lead and cost-per-booked-estimate",
        "Live campaign performance dashboard accessible 24/7",
        "Transparent attribution showing which ads closed paid jobs",
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
      badge: "Zero-Friction Forms",
      title: "Native In-App Instant Lead Forms",
      desc: "Homeowners submit contact information, address, and project requirements with just two taps without ever leaving the Facebook or Instagram app.",
    },
    {
      badge: "Seasonal Pipeline",
      title: "Weather & Seasonal Urgency Drives",
      desc: "Deploy pre-built campaigns for post-storm roof inspections, spring AC tune-ups, or winter pipe freeze prevention to keep your calendar full year-round.",
    },
    {
      badge: "Instant Lead Routing",
      title: "Sub-15s Automated Lead Notification",
      desc: "The second a homeowner submits an ad form, their details are texted to your mobile phone with an automatic SMS confirmation dispatched to the lead.",
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
            <span className="text-[#ea580c] font-bold">Meta Ads (Facebook &amp; Instagram)</span>
          </div> */}

          {/* Split Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ff7a1a]/15">
                <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
                Paid Acquisition
              </div> */}

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
                Meta Ads That Chase Booked Estimates. Not Vanity Likes.
              </h1>

              <p className="text-lg sm:text-xl text-[#566073] leading-relaxed mb-8">
                Boosting posts to collect thumbs-up emojis doesn&apos;t pay your crew. We engineer hyper-targeted Facebook and Instagram ad campaigns that put proven, irresistible offers directly in front of homeowners in your exact service zip codes—turning scrolling neighbors into confirmed estimate requests.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-3 gap-3 w-full mb-8 pt-4 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">Local</span>
                  <span className="text-xs font-semibold text-[#566073]">Zip-Code Targeting</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">4.6x</span>
                  <span className="text-xs font-semibold text-[#566073]">Average Client ROAS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">Instant</span>
                  <span className="text-xs font-semibold text-[#566073]">SMS Lead Alerts</span>
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

            {/* Right Column: Sponsored Ad & Performance Mockup */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-gray-200/80 shadow-2xl relative overflow-hidden">
                {/* Sponsored Post Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff7a1a] to-[#ea580c] text-white flex items-center justify-center font-black text-sm shadow-md">
                      SD
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-[#101832]">System Trade Co.</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#ff7a1a] text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                      </div>
                      <span className="text-xs text-gray-400">Sponsored • 📍 Near your location</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    Live Campaign
                  </span>
                </div>

                {/* Ad Creative Showcase Box */}
                <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#101832] via-[#1a2240] to-[#25183f] p-5 flex flex-col justify-between overflow-hidden shadow-inner border border-gray-200/40">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#ff7a1a] text-white text-[11px] font-bold shadow-md">
                      Limited Seasonal Offer
                    </span>
                    <span className="text-amber-400 text-xs font-bold bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      $500 Off Full Replacement
                    </span>
                  </div>

                  <div className="text-center py-2">
                    <span className="text-white font-extrabold text-lg sm:text-2xl block tracking-tight">
                      Need Roof or Siding Work Done Before Storm Season?
                    </span>
                    <span className="text-gray-300 text-xs mt-1 block">
                      Licensed &amp; Insured Master Crews • 0% Financing Available
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-black/60 p-2.5 rounded-xl backdrop-blur-xs">
                    <span className="text-xs text-gray-200 font-medium">Claim your free 15-minute on-site estimate</span>
                    <span className="text-xs font-bold text-white bg-[#ff7a1a] hover:bg-[#c2410c] px-3.5 py-1.5 rounded-lg shadow-sm">
                      Get Quote →
                    </span>
                  </div>
                </div>

                {/* Live Performance KPI Bar */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100 text-center">
                  <div className="p-2.5 rounded-xl bg-[#fffbf7] border border-gray-100">
                    <span className="text-[11px] text-[#566073] block font-medium">Cost Per Lead</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#101832]">$28.40</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#fffbf7] border border-gray-100">
                    <span className="text-[11px] text-[#566073] block font-medium">Monthly Leads</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#ea580c]">42 Booked</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#fffbf7] border border-gray-100">
                    <span className="text-[11px] text-[#566073] block font-medium">Campaign ROAS</span>
                    <span className="text-sm sm:text-base font-extrabold text-emerald-600">4.6x Return</span>
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
              Precision Targeting • Real Returns
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              How our contractor Meta ads generate real jobs
            </h2>
            <p className="text-[#566073] text-base sm:text-lg leading-relaxed">
              We eliminate ad waste by combining hyper-local geographic boundaries with proven trade offers that homeowners actually respond to.
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
              Engineered For Profit
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              Built specifically for high-ticket trade contractors
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              Drive consistent estimate inquiries so your sales pipeline never runs dry.
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
                Stop Wasting Ad Budget
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Want ads that generate revenue instead of just collecting likes?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Let us show you how a targeted, local Facebook &amp; Instagram campaign can fill your calendar with high-ticket estimate requests next week.
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
