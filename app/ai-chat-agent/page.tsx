import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 AI Website Chat for Contractors | System Digital",
  description:
    "Answer website questions, pre-qualify homeowner estimates, and capture contractor leads 24/7 with intelligent website chat from System Digital.",
};

export default function AIChatAgentPage() {
  const stats = [
    {
      num: "64%",
      badge: "Fast Answers",
      highlight: "Expect Instant Answers",
      desc: "of homeowners browsing contractor websites expect rapid answers about service coverage and availability before picking up the phone.",
    },
    {
      num: "52%",
      badge: "Bounce Risk",
      highlight: "Leave Without Answers",
      desc: "of website visitors bounce to a competitor within seconds if they cannot get basic project or pricing guidance immediately.",
    },
    {
      num: "4x",
      badge: "Lead Multiplier",
      highlight: "Faster Lead Capture",
      desc: "higher conversion rate when an intelligent chat qualifies project requirements and secures contact details the moment a visitor lands.",
    },
  ];

  const pillars = [
    {
      num: "01",
      title: "Answer Questions Instantly",
      desc: "Property owners ask about service radius, booking availability, estimate procedures, and common trade requirements. The AI chat answers accurately in seconds, keeping visitors engaged.",
      points: [
        "Trained specifically on your trade & local services",
        "Answers common pricing & timeline questions",
        "Reduces repetitive tire-kicker inquiries",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Capture & Pre-Qualify Job Details",
      desc: "Collects customer name, verified mobile phone number, project address, scope of work, and urgency timeline directly into your inbox before your estimator reaches out.",
      points: [
        "Captures full name, cell phone & project address",
        "Asks customized trade-specific qualification questions",
        "Direct instant notifications to your phone & CRM",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Capture High-Ticket Jobs After Hours",
      desc: "Your website stays active at night, across weekends, and holidays — especially when an emergency pipe bursts or roof leak appears at 11:47 p.m. while you sleep.",
      points: [
        "Operates 24 hours a day, 365 days a year",
        "Locks in urgent repair requests before competitors wake up",
        "Never takes sick days or leaves visitors waiting",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Frictionless & Simple for Homeowners",
      desc: "No complicated menus or frustrating chatbots. It feels like a natural, polite conversation that guides homeowners straight toward scheduling an estimate.",
      points: [
        "Lightweight widget that loads in milliseconds",
        "Intuitive mobile-first chatting experience",
        "Seamless transition to your real team anytime",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Visitor Lands on Your Site",
      desc: "A homeowner visits your site searching for roofing, plumbing, HVAC, or remodeling services. The AI chat greets them warmly with context.",
    },
    {
      step: "02",
      title: "Intelligent Qualification",
      desc: "The AI agent answers their specific service questions and asks for their contact info, address, and project details in a friendly dialogue.",
    },
    {
      step: "03",
      title: "Instant Lead Alert to Your Phone",
      desc: "A pre-qualified lead notification lands directly on your mobile device and CRM with the full transcript, ready for booking the job.",
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
            <span className="text-[#ea580c] font-bold">Live AI Chat 24/7</span>
          </div> */}

          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ff7a1a]/15">
              <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
              Instant Lead Capture
            </div> */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
              24/7 AI Website Chat Built to Turn Visitors into Booked Estimates
            </h1>
            <p className="text-lg sm:text-xl text-[#566073] leading-relaxed max-w-3xl">
              Most homeowners leave contractor websites if they don't get answers right away. Our 24/7 AI chat agent greets every visitor, answers project questions, qualifies their needs, and captures their contact info before they bounce.
            </p>
          </div>

          {/* 2-Column Demo Layout: Left = 3 Compact Stat Cards, Right = Video Frame Placeholder Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* Left Column: 3 Stat Cards (compacted to match video container height) */}
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
                      Interactive platform walkthrough and conversion demonstration
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
                        24/7 AI Chat Agent Video Demo
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
      {/* 2. EXPLANATION SECTION: WHAT IS AI CHAT FOR CONTRACTORS? (4 PILLARS) */}
      {/* ========================================================================= */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#fffbf7] border-t border-gray-200/70">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Automated Customer Engagement
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101832] leading-tight mb-5">
              What is 24/7 AI chat for contractors?
            </h2>
            <p className="text-base sm:text-lg text-[#566073] leading-relaxed">
              An intelligent, responsive assistant trained specifically on your trade business that chats with prospective clients in real time, answers project questions, and locks in estimate requests.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-8 sm:p-10 border border-gray-200/80 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#fff7ed] border border-[#ff7a1a]/15 flex items-center justify-center">
                      {p.icon}
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-gray-200">
                      {p.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#101832] mb-3">
                    {p.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-[#566073] leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <ul className="space-y-2.5">
                    {p.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#566073]">
                        <span className="w-4 h-4 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                          ✓
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WORKFLOW SECTION: HOW IT WORKS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Simple 3-Step Process
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101832] leading-tight mb-5">
              How the AI chat agent captures estimates
            </h2>
            <p className="text-base sm:text-lg text-[#566073] leading-relaxed">
              Designed to connect seamlessly into your workflow without complicated technical steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st, sIdx) => (
              <div
                key={sIdx}
                className="relative bg-[#fffbf7] rounded-xl sm:rounded-2xl p-8 border border-gray-200/70 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] text-xs font-bold mb-4">
                    Step {st.step}
                  </span>
                  <h3 className="text-xl font-bold text-[#101832] mb-3">
                    {st.title}
                  </h3>
                  <p className="text-sm text-[#566073] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FINAL HIGH-CONVERTING COMPACT CTA CARD */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#fffbf7]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">

          <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#101832] via-[#1b2240] to-[#25183f] text-white shadow-xl overflow-hidden text-center">

            {/* Ambient Purple Glow Orbs */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ff7a1a]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#ea580c]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[#ff9838] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-2">
                Never miss an after-hours lead
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Visitors have questions at 11:47 p.m. Let's make sure they get answered.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                See how 24/7 AI chat answers project basics, gathers essential estimate details, and books jobs around the clock while your team sleeps.
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
