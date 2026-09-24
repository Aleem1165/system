import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 AI Call Agent for Local Contractors | System Digital",
  description:
    "Never miss another high-ticket job. Our 24/7 AI voice phone agent answers calls within 2 rings, qualifies emergency repairs, and books appointments directly to your calendar.",
};

export default function AICallAgentPage() {
  const capabilities = [
    {
      num: "01",
      title: "Instant Pick-Up Within 2 Rings",
      desc: "When a pipe bursts or an AC fails, homeowners call down the Google list until a live voice answers. Our AI voice agent picks up immediately so leads never bounce to your competitor.",
      points: [
        "Under 2-second pickup time on every inbound ring",
        "Handles unlimited simultaneous calls during storm or peak rushes",
        "Eliminates busy signals and dreaded voicemail dead-ends",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Trade-Specific Diagnostic Intake",
      desc: "Trained on real contractor workflows, the voice assistant collects vital job details—equipment model, symptom description, property type, and urgency level—before dispatching.",
      points: [
        "Identifies emergency vs routine estimate inquiries",
        "Collects caller full name, service address, and callback number",
        "Filters out spam, robo-telemarketers, and vendor sales pitches",
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
      num: "03",
      title: "24/7/365 After-Hours & Weekend Coverage",
      desc: "Plumbing disasters and furnace outages rarely happen between 9 AM and 5 PM on weekdays. The AI answers 24/7 so you capture premium after-hours emergency calls while you sleep.",
      points: [
        "Uninterrupted night, weekend, and holiday voice coverage",
        "Applies customized after-hours emergency dispatch protocols",
        "Gives homeowners peace of mind when your front office is closed",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Automated Calendar Booking & Crew Dispatch",
      desc: "Connects directly into your booking software. The assistant checks your team's live availability, confirms an arrival window with the caller, and alerts your crew via SMS.",
      points: [
        "Syncs with ServiceTitan, Housecall Pro, Jobber, and Google Calendar",
        "Dispatches instant text summaries and audio transcripts to on-call techs",
        "Sends instant calendar invites and confirmation texts to the homeowner",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const valuePillars = [
    {
      badge: "85% Abandonment Rate",
      title: "Homeowners Never Leave Voicemails",
      desc: "Studies show over 8 out of 10 homeowners hang up immediately if they hit an answering machine, immediately tapping the next contractor on Google. A live AI voice keeps them from calling anyone else.",
    },
    {
      badge: "100% Focused Crew",
      title: "Zero Dangerous Jobsite Distractions",
      desc: "Climbing down a two-story ladder or pulling your hands out from beneath a crawlspace just to answer a robocall ruins productivity. Let AI handle the intake while you finish the job safely.",
    },
    {
      badge: "Intelligent Routing",
      title: "Smart Warm Escalation for VIPs",
      desc: "Need commercial general contractors or high-priority accounts to reach you directly? The voice agent intelligently identifies VIP callers and can instantly warm-transfer the call straight to your personal cell.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#101832] font-sans selection:bg-[#ff7a1a] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Asymmetric Split with Live Voice AI Mockup)              */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-10 sm:pb-14 overflow-hidden bg-gradient-to-b from-[#fff8f2] via-white to-white border-b border-gray-100">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-orange-200/35 via-amber-100/35 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Copy & Value Proposition */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Badges */}
              {/* 
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff7ed] border border-[#ffedd5] text-[#ea580c] text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
                  Other Services
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold border border-orange-200">
                  <span>🎙️</span>
                  <span>24/7 AI Voice Dispatch</span>
                </div>
              </div>
              */}

              {/* Eyebrow */}
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#ea580c] mb-3">
                Zero Missed Inbound Calls
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[2.9rem] font-extrabold tracking-tight text-[#101832] leading-[1.12] mb-6">
                Calls Answered Instantly.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffae19] via-[#ff6818] to-[#d92323]">
                  Even When Your Hands Are On The Tools.
                </span>
              </h1>

              {/* Narrative Description */}
              <p className="text-base sm:text-lg text-[#566073] leading-relaxed mb-8">
                Up on a ladder, under a crawlspace, or driving between job sites—answering every inbound call is nearly impossible. Our conversational voice AI assistant answers instantly, speaks with natural human warmth, answers FAQs, qualifies job details, and books appointments straight into your calendar.
              </p>

              {/* Key Trust Metrics */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg mb-8">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#ea580c]">&lt; 2s</div>
                  <div className="text-[11px] sm:text-xs text-[#566073] font-medium mt-0.5">Answer Speed</div>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#101832]">100%</div>
                  <div className="text-[11px] sm:text-xs text-[#566073] font-medium mt-0.5">Call Capture</div>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-600">0</div>
                  <div className="text-[11px] sm:text-xs text-[#566073] font-medium mt-0.5">Lost Voicemails</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/book-a-call"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] transition-all transform hover:-translate-y-0.5 border border-white/12 hover:border-white/30"
                >
                  <span>Schedule Voice Demo</span>
                  <span className="text-base font-bold">→</span>
                </Link>
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[10px] bg-white hover:bg-gray-50 text-[#101832] font-bold text-sm border border-gray-200 shadow-sm hover:border-gray-300 transition-all"
                >
                  <span>Explore Full System</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Voice AI Call Simulation & Audio Waveform Mockup */}
            <div className="lg:col-span-6 w-full">
              <div className="relative mx-auto max-w-lg rounded-2xl bg-gradient-to-b from-[#121626] to-[#0c0e18] p-5 sm:p-6 text-white shadow-2xl border border-white/10">
                {/* Header: Live Call Status */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide uppercase">AI Voice Receptionist</div>
                      <div className="text-[11px] text-emerald-400 font-mono">Live Call Connected (00:48)</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold tracking-wider uppercase border border-emerald-500/30">
                    24/7 Active
                  </span>
                </div>

                {/* Caller Information Card */}
                <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-purple-500 flex items-center justify-center font-bold text-sm text-white shadow-md">
                      MS
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Mark Stevenson</div>
                      <div className="text-xs text-gray-300">Austin, TX • (512) 890-3412</div>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 text-[11px] font-semibold border border-amber-500/30">
                    HVAC Emergency
                  </span>
                </div>

                {/* Animated Audio Equalizer Waveform */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-5">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-2 font-mono">
                    <span className="flex items-center gap-1.5 text-violet-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
                      AI Voice Synthesizer Streaming
                    </span>
                    <span>HD Audio (16kHz)</span>
                  </div>
                  <div className="h-12 flex items-center justify-center gap-1.5 px-2">
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-4 animate-pulse"></div>
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-8 animate-pulse delay-75"></div>
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-11 animate-pulse delay-150"></div>
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-6 animate-pulse delay-100"></div>
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-10 animate-pulse delay-200"></div>
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-12 animate-pulse delay-300"></div>
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-7 animate-pulse delay-100"></div>
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-11 animate-pulse delay-150"></div>
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-9 animate-pulse delay-75"></div>
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-5 animate-pulse"></div>
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-10 animate-pulse delay-200"></div>
                    <div className="w-1.5 bg-gradient-to-t from-violet-500 to-purple-400 rounded-full h-6 animate-pulse delay-100"></div>
                  </div>
                </div>

                {/* Real-Time Conversation Dialogue Bubbles */}
                <div className="space-y-3 mb-5">
                  {/* Caller Bubble */}
                  <div className="flex gap-2.5 items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-600 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      MS
                    </div>
                    <div className="p-3 rounded-2xl rounded-tl-sm bg-white/10 text-xs text-gray-200 leading-relaxed max-w-[88%] border border-white/5">
                      &ldquo;Hey, our AC unit is blowing hot air and the house is 85 degrees. Can you get someone out here today?&rdquo;
                    </div>
                  </div>

                  {/* AI Agent Bubble */}
                  <div className="flex gap-2.5 items-start flex-row-reverse">
                    <div className="w-6 h-6 rounded-full bg-[#ff7a1a] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      AI
                    </div>
                    <div className="p-3 rounded-2xl rounded-tr-sm bg-gradient-to-br from-[#7c35ed]/90 to-[#c2410c]/90 text-xs text-white leading-relaxed max-w-[88%] shadow-md">
                      &ldquo;I understand how urgent that is, Mark. We have an on-call emergency technician in North Austin today between 2:00 PM and 4:00 PM. Would you like me to reserve that slot for you right now?&rdquo;
                    </div>
                  </div>

                  {/* Caller Response */}
                  <div className="flex gap-2.5 items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-600 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      MS
                    </div>
                    <div className="p-2.5 rounded-2xl rounded-tl-sm bg-white/10 text-xs text-gray-200 leading-relaxed max-w-[88%] border border-white/5">
                      &ldquo;Yes please! Address is 1420 Oak Creek Rd.&rdquo;
                    </div>
                  </div>
                </div>

                {/* Instant Dispatch Outcome Box */}
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <span className="text-base">✓</span>
                    <div>
                      <span className="font-bold text-white">2:30 PM Reserved</span> • Synced to Calendar &amp; Crew
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400/90 font-semibold uppercase">SMS Sent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE CAPABILITIES (4 Pillars)                                          */}
      {/* ========================================================================= */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#ea580c] mb-3 block">
              Built Specifically For Local Trades
            </span> */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] tracking-tight">
              An AI Receptionist That Truly Understands Contractor Workflows
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#566073]">
              Generic answering services take garbled notes or miss crucial details. Our AI voice agents are pre-trained with HVAC, plumbing, roofing, electrical, and remodeling terminology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="p-8 sm:p-10 rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#fff7ed] flex items-center justify-center">
                      {cap.icon}
                    </div>
                    <span className="text-2xl font-black text-gray-200 font-mono">
                      {cap.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#101832] mb-3">
                    {cap.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#566073] leading-relaxed mb-6">
                    {cap.desc}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <ul className="space-y-2.5">
                    {cap.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#566073]">
                        <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold shrink-0">
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
      {/* 3. STRATEGIC VALUE IMPACT (3 Core Pillars)                                 */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#fffbf7] border-y border-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#ea580c] mb-3 block">
              The Cost of a Missed Ring
            </span> */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] tracking-tight">
              Why Inbound Speed Wins The Contract Every Single Time
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#566073]">
              Contracting is an immediate-response industry. The company that picks up the call locks down the inspection and wins the contract.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, i) => (
              <div
                key={i}
                className="p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ffedd5]">
                    {pillar.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#101832] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#566073] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-[#ea580c]">
                  <span>Built for trade profitability</span>
                  <span className="ml-1">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HIGH-CONVERTING CALL TO ACTION                                         */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#101832] via-[#1a1c3d] to-[#2b1754] text-white p-10 sm:p-16 text-center shadow-2xl">
            {/* Ambient Background Blur */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#ff7a1a]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/15">
                Stop Bleeding High-Ticket Revenue
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
                Tired of Losing $5,000+ Jobs Just Because You Were Under A Sink?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10">
                Put a dedicated AI voice assistant on your phone line. It picks up within 2 rings 24/7, handles caller questions with confidence, and books jobs straight to your calendar.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/book-a-call"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-[10px] bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all transform hover:-translate-y-0.5 border border-white/12 hover:border-white/30"
                >
                  <span>Schedule Your AI Demo</span>
                </Link>
                <a
                  href="tel:8888100013"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all"
                >
                  <span>Call Us: (888) 810-0013</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

