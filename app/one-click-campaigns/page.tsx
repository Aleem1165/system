import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One-Click Database Reactivation & SMS Campaigns | System Digital",
  description:
    "Reactivate past customer lists and book high-ticket jobs on demand with done-for-you SMS and email campaigns. No marketing agency required.",
};

export default function OneClickCampaignsPage() {
  const stats = [
    {
      num: "97%",
      badge: "Immediate Reach",
      highlight: "Opened in Under 5 Minutes",
      desc: "of SMS text broadcasts are read by homeowners within five minutes of hitting their phone screen.",
    },
    {
      num: "31%",
      badge: "Rapid Conversion",
      highlight: "Direct Estimate Requests",
      desc: "of targeted contractor SMS campaigns generate immediate quote requests within 48 hours of launch.",
    },
    {
      num: "63%",
      badge: "Homeowner Preference",
      highlight: "Prefer SMS Service Updates",
      desc: "of previous clients actively prefer receiving seasonal maintenance offers and discounts via simple text messages.",
    },
  ];

  const pillars = [
    {
      num: "01",
      title: "Done-For-You Pre-Written Trade Templates",
      desc: "Never stare at a blank screen wondering what to write. Access plug-and-play templates engineered specifically for roofing, HVAC, plumbing, remodeling, and electrical services.",
      points: [
        "Battle-tested copy tailored to homeowner psychology",
        "Seasonal service reminders (spring tune-ups, winter storm prep)",
        "Click, review, and broadcast in less than 60 seconds",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "High-Value Customer Referral Drives",
      desc: "Delighted past clients have friends, neighbors, and family members who need your craftsmanship. Automated referral prompts politely incentivize them to send work your way.",
      points: [
        "Turns satisfied clients into a reliable referral network",
        "Polite, non-pushy reward offers and neighbor incentives",
        "Zero awkward salesperson cold calling required",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Repeat Service & Maintenance Reactivation",
      desc: "The easiest customer to close is someone who already paid you. Reignite relationships with homeowners who haven't booked work in the last 6 to 18 months.",
      points: [
        "Reactivates dormant customer contact lists instantly",
        "Fills sudden calendar gaps during seasonal slowdowns",
        "Zero expensive ad spend required to generate bookings",
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
      title: "Frictionless Single-Click Execution",
      desc: "No complicated ad dashboards, bidding strategies, or tracking pixels. Select your customer segment, hit send, and watch estimate requests flow into your mobile inbox.",
      points: [
        "Point-and-click simplicity from your phone or laptop",
        "Instant 2-way text responses routed directly to your team",
        "Full TCPA and carrier 10DLC automated compliance",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: "Pre-Built Seasonal Trade Campaigns",
      desc: "Ready-to-fire templates engineered for specific weather triggers, spring cleanouts, furnace checkups, and summer roofing checks.",
    },
    {
      title: "Smart Past-Client Segmentation",
      desc: "Filter clients by past job type, geographic neighborhood, or date of last service to ensure the right offer reaches the right homeowner.",
    },
    {
      title: "Two-Way Direct SMS Routing",
      desc: "Every reply routes straight into your unified mobile inbox so estimators can reply in real time and lock in the appointment.",
    },
    {
      title: "Full 10DLC & TCPA Carrier Compliance",
      desc: "Built-in automated opt-out keywords (STOP, UNSUBSCRIBE) and verified A2P carrier registration protecting your phone deliverability.",
    },
    {
      title: "Automated Referral Reward Sequences",
      desc: "Pre-configured gift card or discount incentive programs that give happy past clients an exciting reason to share your business.",
    },
    {
      title: "Real-Time Campaign ROI Dashboards",
      desc: "Track delivery rates, open rates, inbound response volume, and dollar revenue directly generated by each broadcast.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#101832] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO / INTERACTIVE DEMO SECTION */}
      {/* ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-10 sm:pb-14 relative overflow-hidden bg-gradient-to-b from-[#fff8f2] via-white to-white">
        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#ff7a1a]/10 to-[#ffaa47]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          {/* Breadcrumb & Kicker */}
          {/* <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#566073] mb-6">
            <Link href="/" className="hover:text-[#ea580c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#system" className="hover:text-[#ea580c] transition-colors">
              Solutions
            </Link>
            <span>/</span>
            <span className="text-[#ea580c] font-bold">One-Click Campaigns</span>
          </div> */}

          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ff7a1a]/15">
              <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
              Database Reactivation
            </div> */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
              Turn Your Past Customer List into High-Ticket Jobs on Demand
            </h1>
            <p className="text-lg sm:text-xl text-[#566073] leading-relaxed max-w-3xl">
              Your past client database is a goldmine waiting to be tapped. Launch proven, pre-written seasonal promotions, referral requests, and maintenance reminders with a single click—filling your schedule without spending thousands on new ads.
            </p>
          </div>

          {/* 2-Column Demo Layout: Left = 3 Compact Stat Cards, Right = Video Frame Placeholder Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: 3 Stat Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-3.5 h-full">
              {stats.map((s, idx) => (
                <article
                  key={idx}
                  className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)]  overflow-hidden flex-1 flex flex-col justify-center"
                >
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#ff7a1a] to-[#ea580c]" />
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#ffae19] via-[#ff6818] to-[#d92323] bg-clip-text text-transparent">
                      {s.num}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-[#ea580c] bg-[#fff7ed] px-2.5 py-0.5 rounded-full border border-[#ff7a1a]/15">
                      {s.badge}
                    </span>
                  </div>
                  {/* <h3 className="text-sm sm:text-base font-bold text-[#101832] mb-1 group-hover:text-[#ea580c] transition-colors">
                    {s.highlight}
                  </h3> */}
                  <p className="text-xs sm:text-[13px] text-[#566073] leading-relaxed">
                    {s.desc}
                  </p>
                </article>
              ))}
            </div>

            {/* Right Column: Video Container Box (Dimensionally Mapped For Video) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-gray-200/80 shadow-xl h-full flex flex-col justify-between">
                {/* Frame Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#101832]">
                      See A Short Demo Below
                    </h2>
                    <p className="text-xs sm:text-sm text-[#566073] mt-0.5">
                      One-click reactivation campaign walkthrough and live broadcast demo
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
                    Video Frame
                  </span>
                </div>

                {/* EXACT VIDEO FRAME CONTAINER (16:9 Aspect Ratio) */}
                <div className="relative w-full aspect-video rounded-xl bg-gradient-to-br from-[#101832] via-[#161f38] to-[#25183f] border-2 border-[#ff7a1a]/30 overflow-hidden shadow-2xl flex flex-col items-center justify-center group select-none">
                  {/* Subtle Background Radial Ambient Aura */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,26,0.3)_0%,transparent_70%)] pointer-events-none" />

                  {/* Grid Lines Accent */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                  {/* Play Button & Placeholder Labels */}
                  <div className="relative z-10 flex flex-col items-center text-center p-6 gap-3 sm:gap-4">
                    <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#ff7a1a] to-[#ea580c] flex items-center justify-center text-white shadow-[0_0_35px_rgba(255,122,26,0.6)] group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <span className="absolute inset-0 rounded-full bg-[#ff7a1a] animate-ping opacity-25" />
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
                        One-Click Campaigns Video Demo
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm mt-1 block leading-snug">
                        Full-width responsive video container • Ready for video upload
                      </span>
                    </div>
                  </div>

                  {/* Video Player Control Bar Mockup */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex items-center justify-between gap-4 text-white text-xs">
                    <div className="flex items-center gap-3 w-full">
                      <span className="text-gray-300 font-mono text-[11px] sm:text-xs">0:00 / 2:10</span>
                      <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-[#ff7a1a] rounded-full" />
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
                  <span className="text-[#ea580c] font-semibold">Ready for MP4, YouTube, or Vimeo embed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EXPLANATION SECTION: WHAT ARE ONE-CLICK CAMPAIGNS? (4 PILLARS) */}
      {/* ========================================================================= */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#fffbf7] border-t border-gray-200/70">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Zero-Friction Marketing
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              What are one-click contractor campaigns?
            </h2>
            <p className="text-[#566073] text-base sm:text-lg leading-relaxed">
              You shouldn&apos;t need a 10-person marketing agency or a blank cursor staring back at you. Here is how our push-button campaigns unlock hidden revenue from existing contacts.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pillars.map((item) => (
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
      {/* 3. SYSTEM HIGHLIGHTS / EVERYTHING INCLUDED (COMMENTED OUT) */}
      {/* ========================================================================= */}
      {/* <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              Built specifically for modern contractor workflows
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              No complex ad managers, no writer&apos;s block, and zero technical maintenance required from you or your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="bg-[#fffbf7] rounded-xl sm:rounded-2xl p-7 border border-orange-100"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-[#ff7a1a]/20 text-[#ea580c] font-bold text-sm flex items-center justify-center mb-4 shadow-xs">
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
      </section> */}

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
                Predictable Revenue On Demand
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Marketing shouldn&apos;t steal your whole Saturday.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Deploy battle-tested campaigns for repeat jobs, seasonal checkups, and referrals in minutes—without having to become a full-time copywriter.
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
