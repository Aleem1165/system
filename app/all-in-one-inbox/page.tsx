import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App & Unified Inbox for Contractors | System Digital",
  description:
    "Unify calls, SMS, web forms, AI chat leads, and Google reviews into one streamlined mobile inbox. Never juggle 5 messy apps again.",
};

export default function AllInOneInboxPage() {
  const stats = [
    {
      num: "71%",
      badge: "Response Speed",
      highlight: "Faster Lead Response",
      desc: "of trade contractors reply twice as fast when every customer conversation lands in a single centralized mobile stream.",
    },
    {
      num: "60%",
      badge: "Stress Reduction",
      highlight: "Zero App Overwhelm",
      desc: "drop in operational communication stress reported by business owners after switching from fragmented apps to one unified feed.",
    },
    {
      num: "84%",
      badge: "Operational Clarity",
      highlight: "Feel In Complete Control",
      desc: "of trade crews state they feel significantly more organized, keeping estimate requests from slipping through the cracks.",
    },
  ];

  const pillars = [
    {
      num: "01",
      title: "Run Your Entire Business from the Truck",
      desc: "Answer customer inquiries, check quote requests, and review technician notes while moving between job sites. Your leads will never have to wait until you get back to a home office desk.",
      points: [
        "Native iOS and Android mobile app built specifically for field use",
        "Real-time instant push notifications for calls, texts, and new quotes",
        "Full customer communication history accessible from anywhere in seconds",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Consolidate Every Channel into One Thread",
      desc: "Eliminate the daily headache of cross-referencing email, social DMs, personal text messages, voicemail, and website quote forms. Every prospect interaction is cleanly unified under one customer contact profile.",
      points: [
        "Aggregates SMS, website forms, AI chat, and business calls",
        "Zero copy-pasting customer phone numbers between scattered apps",
        "A single, organized source of truth for your entire trade team",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Lightning-Fast Two-Way Customer Messaging",
      desc: "Send quick project updates, request measurements, or share photos in real time. Customers get answers immediately, while your personal cell phone number stays 100% private and secure.",
      points: [
        "Two-way SMS texting directly with clients from your company number",
        "Send job site photos, documents, and estimate PDF links instantly",
        "Keeps your personal phone number completely private and off the clock",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Clear Pipeline Status & Next Steps",
      desc: "Never wonder who replied, what estimate is still pending, or who needs an on-site visit. Clear visual status tags ensure zero dropped balls after an exhausting 10-hour work day.",
      points: [
        "Instant lead source tracking (Google, Facebook, organic, referral)",
        "Visual status tags like 'Estimate Sent', 'Booked', or 'Needs Follow-Up'",
        "Team assignment to delegate conversations to specific staff in one tap",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: "Native iOS & Android Apps",
      desc: "Engineered specifically for quick thumbs in the field with sub-second load times, biometric login, and offline sync.",
    },
    {
      title: "Dedicated Business Calling",
      desc: "Make and receive calls directly through the mobile app using your official company caller ID while keeping your private phone shielded.",
    },
    {
      title: "Internal Notes & Crew Mentions",
      desc: "Leave private internal notes on customer files or tag estimators so everyone knows the context before arriving on site.",
    },
    {
      title: "1-Tap Saved Quick Replies",
      desc: "Fire off pre-written answers for directions, pricing FAQs, license numbers, and arrival notices with a single touch.",
    },
    {
      title: "Live Lead Source Attribution",
      desc: "Know exactly which marketing channel generated the lead—whether it was Google Search, local maps, referral, or Facebook.",
    },
    {
      title: "Bank-Grade Encryption & Cloud Backups",
      desc: "All messages, customer details, and call records are automatically backed up in real time with enterprise-grade security.",
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
            <span className="text-[#ea580c] font-bold">Mobile App &amp; Inbox</span>
          </div> */}

          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ff7a1a]/15">
              <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
              Command Center
            </div> */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
              One Unified Mobile Inbox Built for Trade Businesses on the Move
            </h1>
            <p className="text-lg sm:text-xl text-[#566073] leading-relaxed max-w-3xl">
              Trade contractors don&apos;t work behind a desk all day. Consolidate incoming phone calls, customer text messages, website quote forms, and live chats into one intuitive mobile app that lives right in your pocket.
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
                      Unified inbox walkthrough and real-time field messaging demo
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
                        Mobile App &amp; Inbox Video Demo
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm mt-1 block leading-snug">
                        Full-width responsive video container • Ready for video upload
                      </span>
                    </div>
                  </div>

                  {/* Video Player Control Bar Mockup */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex items-center justify-between gap-4 text-white text-xs">
                    <div className="flex items-center gap-3 w-full">
                      <span className="text-gray-300 font-mono text-[11px] sm:text-xs">0:00 / 2:20</span>
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
      {/* 2. EXPLANATION SECTION: WHAT IS THE MOBILE APP & INBOX? (4 PILLARS) */}
      {/* ========================================================================= */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#fffbf7] border-t border-gray-200/70">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Total Centralization
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              What is the Mobile App &amp; Unified Inbox?
            </h2>
            <p className="text-[#566073] text-base sm:text-lg leading-relaxed">
              Scattered communication kills deals. Here is how our centralized mobile inbox keeps your entire operation moving seamlessly from the job site.
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
              No messy app-switching, no lost messages, and zero technical maintenance required from you or your team.
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
                Field Operations Made Simple
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Your entire trade operation now fits in your pocket.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Use the System Digital mobile app to keep calls, texts, leads, and follow-ups organized from the truck, the supply house, or the roof. No desk, no problem.
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
