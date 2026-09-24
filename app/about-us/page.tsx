import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About System Digital | Contractor Growth & Marketing Systems",
  description:
    "We build the digital revenue engine that puts high-ticket trade jobs on your schedule. No fluff, no mystery dashboards, and no vanishing account managers.",
};

export default function AboutUsPage() {
  const systemSteps = [
    {
      num: "01",
      title: "Local Search Dominance",
      desc: "Ensure your company ranks at the very top of Google Maps and local search right when nearby homeowners need immediate help.",
      icon: (
        <svg className="w-5 h-5 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Instant Inbound Engagement",
      desc: "Convert curious website visitors into real phone calls and booked appointments before they bounce to your competitor.",
      icon: (
        <svg className="w-5 h-5 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
      title: "Automated Pipeline Follow-Up",
      desc: "Never let another profitable estimate go cold. Relentless, professional SMS follow-up locks in signatures without chasing.",
      icon: (
        <svg className="w-5 h-5 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const rules = [
    {
      num: "01",
      title: "Radical Simplicity Over Agency Fluff",
      desc: "If a marketing strategy requires a 45-minute slide deck or a 90-page PDF report to explain, it's probably bloated and ineffective. We build direct, crystal-clear conversion systems that respect your time and your homeowner's attention.",
      badge: "Rule #1",
    },
    {
      num: "02",
      title: "If It Doesn't Book Jobs, It Doesn't Ship",
      desc: "A pretty website or a creative award means nothing if your phone isn't ringing with profitable projects. Every headline, speed optimization, and call-to-action button we build is engineered strictly to convert visitors into booked work.",
      badge: "Rule #2",
    },
    {
      num: "03",
      title: "We Never Vanish Into Witness Protection",
      desc: "Traditional marketing agencies love to charge a massive upfront setup fee and then disappear behind a junior support inbox. We act as your ongoing digital crew: testing improvements, monitoring lines, and ensuring your pipeline stays full.",
      badge: "Rule #3",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#101832] font-sans selection:bg-[#7c35ed] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#faf8fd] via-white to-white border-b border-gray-100">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-purple-200/40 via-violet-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f3ff] border border-[#ede9fe] text-[#7c35ed] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
              About System Digital
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200">
              <span>🛠️</span>
              <span>Engineered For Local Trades</span>
            </div>
          </div>

          {/* Eyebrow */}
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7c35ed] mb-4 block">
            No Fluff. No Buzzwords. Just Booked Work.
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101832] leading-[1.12] mb-6 max-w-4xl">
            We Build The Revenue Engine That Puts{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c35ed] via-[#9333ea] to-[#a855f7]">
              High-Ticket Jobs On Your Schedule.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-[#566073] max-w-3xl leading-relaxed mb-10">
            No corporate jargon, no mystery dashboards, and no bloated 90-page strategy decks. Just a clean, battle-tested system that ensures local homeowners find you, trust you, and book estimates with your crew.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] transition-all transform hover:-translate-y-0.5 border border-white/12 hover:border-white/30"
            >
              <span>Schedule Strategy Call</span>
              <span className="text-base font-bold">→</span>
            </Link>
            <Link
              href="/our-process"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[10px] bg-white hover:bg-gray-50 text-[#101832] font-bold text-sm border border-gray-200 shadow-sm hover:border-gray-300 transition-all"
            >
              <span>See How We Work</span>
            </Link>
          </div>

          {/* 3 Connected System Pillars */}
          <div className="w-full max-w-5xl">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 text-center">
              One Unified Growth Architecture
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {systemSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-purple-200 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f5f3ff] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700">
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#101832] mb-2 group-hover:text-[#7c35ed] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#566073] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE & COMPARISON SECTION                                        */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Mission Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ede9fe]">
                <span>Our Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#101832] tracking-tight leading-[1.18] mb-6">
                You Master The Craft On The Jobsite.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c35ed] via-[#9333ea] to-[#a855f7]">
                  We Master The Revenue Pipeline.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#566073] leading-relaxed mb-6">
                Most digital agencies treat contractors like e-commerce brands or tech startups, throwing around meaningless vanity metrics like &ldquo;impressions&rdquo; and &ldquo;pageviews.&rdquo;
              </p>
              <p className="text-base text-[#566073] leading-relaxed mb-8">
                You don&apos;t care about impressions—you care about ringing phones, verified inspection addresses, and signed contracts. We bring your website, missed call capture, 5-star review engine, and automated quote follow-ups together into a single cohesive system so the digital side stops feeling like a second job.
              </p>

              {/* Bullet Checklist */}
              <div className="space-y-3.5 w-full">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div className="text-sm font-medium text-[#101832]">
                    <strong>Zero Junior Account Managers:</strong> Work directly with system architects who know trade operations.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div className="text-sm font-medium text-[#101832]">
                    <strong>Turnkey Setup:</strong> No endless homework assignments for you. We write the copy, design the assets, and launch.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div className="text-sm font-medium text-[#101832]">
                    <strong>Complete Ownership:</strong> You own 100% of your domain, reviews, customer data, and phone numbers.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: "Traditional Agency vs. System Digital" Comparison Card */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-2xl bg-[#101832] p-6 sm:p-8 text-white shadow-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white">The Contractor Reality Check</h3>
                    <p className="text-xs text-gray-400">Why typical agency promises fail local trades</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30">
                    Direct Comparison
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Traditional Agency Column */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-3">
                      <span>✕</span>
                      <span>Traditional Agency</span>
                    </div>
                    <ul className="space-y-3 text-xs text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold shrink-0">✕</span>
                        <span>60-90 day onboarding delay</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold shrink-0">✕</span>
                        <span>Reports full of vanity &ldquo;impressions&rdquo;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold shrink-0">✕</span>
                        <span>Passes you to inexperienced interns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold shrink-0">✕</span>
                        <span>Disconnected tools that don&apos;t talk</span>
                      </li>
                    </ul>
                  </div>

                  {/* System Digital Column */}
                  <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-3">
                      <span>✓</span>
                      <span>System Digital</span>
                    </div>
                    <ul className="space-y-3 text-xs text-gray-200 font-medium">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>Live and capturing leads in days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>Bottom-line calls &amp; booked estimates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>Direct access to lead technical team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>Unified system: Web, CRM, Chat &amp; AI</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Ready for a system that pulls its weight?</span>
                  <Link href="/book-a-call" className="text-purple-300 font-bold hover:text-white transition-colors">
                    Schedule a Consultation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE 3 UNCOMPROMISING RULES WE LIVE BY                                    */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-y border-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7c35ed] mb-3 block">
              The System Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] tracking-tight">
              Three Operating Rules We Never Break
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#566073]">
              Conveniently, none of them involve a twelve-page strategy presentation or endless status meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rules.map((rule) => (
              <div
                key={rule.num}
                className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold uppercase tracking-wider border border-[#ede9fe]">
                      {rule.badge}
                    </span>
                    <span className="text-3xl font-black text-gray-200 group-hover:text-[#7c35ed]/20 transition-colors font-mono">
                      {rule.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#101832] mb-4 group-hover:text-[#7c35ed] transition-colors">
                    {rule.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#566073] leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-[#7c35ed]">
                  <span>Contractor-first standard</span>
                  <span className="ml-1.5">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PERFORMANCE NUMBERS                                                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="p-6 rounded-2xl bg-[#faf8fd] border border-purple-50">
              <div className="text-3xl sm:text-4xl font-black text-[#7c35ed] mb-1">100%</div>
              <div className="text-xs sm:text-sm font-bold text-[#101832]">Trade Contractor Focus</div>
              <div className="text-[11px] text-[#566073] mt-0.5">Zero generalist distractions</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#faf8fd] border border-purple-50">
              <div className="text-3xl sm:text-4xl font-black text-[#101832] mb-1">&lt; 48h</div>
              <div className="text-xs sm:text-sm font-bold text-[#101832]">Deployment Speed</div>
              <div className="text-[11px] text-[#566073] mt-0.5">Live in days, not months</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#faf8fd] border border-purple-50">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 mb-1">99.9%</div>
              <div className="text-xs sm:text-sm font-bold text-[#101832]">Pipeline Reliability</div>
              <div className="text-[11px] text-[#566073] mt-0.5">Zero dropped inbound rings</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#faf8fd] border border-purple-50">
              <div className="text-3xl sm:text-4xl font-black text-[#7c35ed] mb-1">5-Star</div>
              <div className="text-xs sm:text-sm font-bold text-[#101832]">Direct Partnership</div>
              <div className="text-[11px] text-[#566073] mt-0.5">Always here when you need us</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HIGH-CONVERTING CALL TO ACTION                                         */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#101832] via-[#1a1c3d] to-[#2b1754] text-white p-10 sm:p-16 text-center shadow-2xl">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#7c35ed]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/15">
                Ready When You Are
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
                Want Your Online System To Start Pulling Its Own Weight?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10">
                Let&apos;s build a digital pipeline that reliably turns local homeowners into booked jobs on your crew&apos;s daily calendar.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/book-a-call"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-[10px] bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out cursor-pointer"
                >
                  <span>Book A Discovery Call</span>
                  <span className="text-base">→</span>
                </Link>
                <a
                  href="tel:8888100013"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
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

