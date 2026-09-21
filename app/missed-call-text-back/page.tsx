import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instant Missed Call Text Back for Contractors | System Digital",
  description:
    "Never lose another high-ticket job to a competitor because your hands were full. Automatically text callers within seconds of a missed call.",
};

export default function MissedCallTextBackPage() {
  const stats = [
    {
      num: "84%",
      badge: "Customer Preference",
      highlight: "Prefer Immediate Texting",
      desc: "of homeowners prefer receiving an instant text acknowledging their call rather than waiting hours for a voicemail callback.",
    },
    {
      num: "73%",
      badge: "Higher Engagement",
      highlight: "Reply to Text vs Voicemail",
      desc: "higher response rate to an immediate text message compared to traditional voicemail greetings that get ignored.",
    },
    {
      num: "68%",
      badge: "Revenue Captured",
      highlight: "Retain The Job",
      desc: "of callers who would have hired a competitor are retained and booked when an immediate text conversation begins.",
    },
  ];

  const pillars = [
    {
      num: "01",
      title: "Outpace Your Local Competitors Instantly",
      desc: "Most contractors take 4 to 6 hours to return a missed call. By texting the homeowner within 15 seconds, you show extreme responsiveness and claim the job before rivals even check their voicemail.",
      points: [
        "Sub-15 second lightning-fast automated SMS dispatch",
        "Stops callers from clicking down the Google search list",
        "Gives homeowners the instant reassurance they need",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Eliminate Vanishing Voicemails Forever",
      desc: "Less than 20% of homeowners leave voicemails today—they just hang up and call the next listing. An instant text greets them directly and opens a frictionless two-way chat.",
      points: [
        "Converts silent hangups into active, booked conversations",
        "No more playing phone tag back and forth for three days",
        "Captures homeowner name and job description immediately",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Prove Top-Tier Craftsmanship & Care",
      desc: "A prompt, courteous message proves to property owners that you run a modern, dependable business. That first impression sets a standard of trust before you even shake their hand.",
      points: [
        "Polite, personalized greeting customized to your specific trade",
        "Allows clients to reply with project photos and job address",
        "Immediately positions your business as organized and reliable",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Protect Your Pipeline 24/7/365",
      desc: "Emergency pipe leaks and roof damage happen on Sunday nights and holiday weekends. The system works tirelessly after hours, collecting project details while you rest.",
      points: [
        "Operates around the clock across weekends and holidays",
        "Custom after-hours emergency or next-morning scheduling logic",
        "Delivers notifications directly into your mobile app inbox",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: "Sub-15 Second Instant Trigger",
      desc: "The moment an inbound call drops without being answered, a custom text sequence is dispatched automatically.",
    },
    {
      title: "Intelligent After-Hours Logic",
      desc: "Configure different response scripts for daytime job hours versus late-night emergency repairs or weekends.",
    },
    {
      title: "Project Photo & Scope Inquiries",
      desc: "Prompt callers to reply with photos of their problem so you can review details before returning the call.",
    },
    {
      title: "Seamless Transition to Live Staff",
      desc: "Step in and take over the text chat in real time from your mobile app the moment you have free hands.",
    },
    {
      title: "Dedicated Business Line Protection",
      desc: "Keeps your personal mobile number completely private while texting from your verified business caller ID.",
    },
    {
      title: "Full Call Recording & AI Transcription",
      desc: "Missed voicemails are automatically transcribed into readable text and delivered straight to your mobile screen.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#101832] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO / INTERACTIVE DEMO SECTION */}
      {/* ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 relative overflow-hidden bg-gradient-to-b from-[#faf8fd] via-white to-white">
        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#7c35ed]/10 to-[#c084fc]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
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
            <span className="text-[#7c35ed] font-bold">Missed Call Text Back</span>
          </div>

          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold uppercase tracking-wider mb-4 border border-[#7c35ed]/15">
              <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
              Instant Revenue Recovery
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
              Never Lose Another High-Ticket Job to an Unanswered Call
            </h1>
            <p className="text-lg sm:text-xl text-[#566073] leading-relaxed max-w-3xl">
              When an urgent homeowner calls and gets voicemail, they don&apos;t leave a message—they immediately hang up and dial your competitor. Our system fires an instant, polite SMS within 15 seconds to lock in the lead while your hands are busy on site.
            </p>
          </div>

          {/* 2-Column Demo Layout: Left = 3 Compact Stat Cards, Right = Video Frame Placeholder Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: 3 Stat Cards */}
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
                      Instant text response walkthrough and homeowner conversation preview
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
                        Missed Call Text Back Video Demo
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm mt-1 block leading-snug">
                        Full-width responsive video container • Ready for video upload
                      </span>
                    </div>
                  </div>

                  {/* Video Player Control Bar Mockup */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex items-center justify-between gap-4 text-white text-xs">
                    <div className="flex items-center gap-3 w-full">
                      <span className="text-gray-300 font-mono text-[11px] sm:text-xs">0:00 / 2:05</span>
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
      {/* 2. EXPLANATION SECTION: WHAT IS MISSED CALL TEXT BACK? (4 PILLARS) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-t border-gray-200/70">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Instant Lead Defense
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              What is an automated missed call text back system?
            </h2>
            <p className="text-[#566073] text-base sm:text-lg leading-relaxed">
              Every contractor misses phone calls while on a ladder, driving, or meeting clients. Here is how our automated text-back converts missed rings into confirmed estimates.
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
      {/* 3. SYSTEM HIGHLIGHTS / EVERYTHING INCLUDED */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Standard Across Every Build
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              Built specifically for modern contractor workflows
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              No lost phone numbers, no three-day voicemail delays, and zero technical maintenance required from you or your team.
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
                Stop Losing Inbound Leads
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Missed a call? Your competitor heard it too.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                A lightning-fast text response keeps the conversation alive while you are on a roof, under a sink, or meeting another client. Never let another estimate walk away.
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
