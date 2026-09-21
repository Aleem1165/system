import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated Explainer Videos for Contractors | System Digital",
  description:
    "Explain your most complex home service offerings in 45 seconds flat. Turn technical trade work into high-converting 2D/3D animated videos homeowners understand and buy.",
};

export default function VideoAnimationPage() {
  const capabilities = [
    {
      num: "01",
      title: "Demystify Complex & High-Ticket Services",
      desc: "When homeowners hear 'trenchless pipe relining', 'SEER2 inverter systems', or 'structural foundation underpinning', they get confused. Custom animations make the process crystal clear and easy to say yes to.",
      points: [
        "Visualizes underground, inside-wall, and rooftop work seamlessly",
        "Breaks down complex engineering into simple 45-second concepts",
        "Builds immediate homeowner confidence in your technical expertise",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Zero Camera Anxiety & Zero Film Crews",
      desc: "No uncomfortable teleprompters, no spending all Tuesday retaking scenes, and no awkward smartphone videos. We produce studio-grade motion graphics without taking your crew off the jobsite.",
      points: [
        "100% turnkey production from scriptwriting to sound design",
        "Professional voiceover artists recorded in broadcast quality",
        "Your crew stays on billable jobs instead of playing actor for a day",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Omnichannel Revenue Engine",
      desc: "A single custom animation becomes a multi-channel revenue machine. Embed it on your website hero, run it as high-converting Meta and TikTok ads, and text it alongside estimates.",
      points: [
        "Dramatically boosts landing page time-on-site and conversion rates",
        "Drives cheaper clicks and higher watch-times on social ad campaigns",
        "Re-engages stalled quote recipients in automated SMS follow-up sequences",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Brisk 45-Second High-Retention Pacing",
      desc: "Homeowners have zero patience for a 10-minute documentary. We craft punchy 30-to-60 second animations engineered around hook, problem, solution, and an immediate call-to-action.",
      points: [
        "80%+ video completion rate compared to standard corporate videos",
        "Optimized for mobile viewing with clear typography and motion",
        "Direct CTA prompt guiding viewers to book a call or estimate",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const valuePillars = [
    {
      badge: "Eliminate Hesitation",
      title: "Confusion Kills High-Ticket Estimates",
      desc: "When homeowners don't understand the scope or why your estimate is $14,000, they either delay making a decision or choose the cheapest contractor. Clear animation makes the value obvious.",
    },
    {
      badge: "Elevate Brand Authority",
      title: "Command Premium Contractor Pricing",
      desc: "Pixar-grade animated visual storytelling instantly separates you from trunk-slammer competitors, positioning your company as the premier professional contractor in your local market.",
    },
    {
      badge: "Close More Quotes",
      title: "Supercharge Proposal Conversion",
      desc: "Including an animated explainer link inside your proposal text or email reassures anxious spouses and family members who weren't there during your in-home walkthrough.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#101832] font-sans selection:bg-[#7c35ed] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Asymmetric Split with Animated Explainer Mockup)          */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#faf8fd] via-white to-white border-b border-gray-100">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-purple-200/40 via-violet-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Copy & Value Proposition */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f3ff] border border-[#ede9fe] text-[#7c35ed] text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
                  Other Services
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200">
                  <span>🎬</span>
                  <span>Custom Motion Graphics</span>
                </div>
              </div>

              {/* Eyebrow */}
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7c35ed] mb-3">
                Clarity Drives Higher Estimates
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[2.9rem] font-extrabold tracking-tight text-[#101832] leading-[1.12] mb-6">
                Explain Your Complex Services In{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c35ed] via-[#9333ea] to-[#a855f7]">
                  45 Seconds Flat.
                </span>
              </h1>

              {/* Narrative Description */}
              <p className="text-base sm:text-lg text-[#566073] leading-relaxed mb-8">
                Trenchless sewer repairs, heat pump conversions, and full roof replacements are tough to explain over the phone. Our custom 2D/3D animated videos turn complex trade methods into engaging, simple visual stories that homeowners actually finish and buy.
              </p>

              {/* Key Trust Metrics */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg mb-8">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#7c35ed]">+140%</div>
                  <div className="text-[11px] sm:text-xs text-[#566073] font-medium mt-0.5">Page Conversion</div>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#101832]">82%</div>
                  <div className="text-[11px] sm:text-xs text-[#566073] font-medium mt-0.5">Full Watch Rate</div>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-600">0</div>
                  <div className="text-[11px] sm:text-xs text-[#566073] font-medium mt-0.5">Film Crews Needed</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/book-a-call"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm shadow-[0_8px_20px_rgba(124,58,237,0.28)] hover:shadow-[0_12px_24px_rgba(124,58,237,0.36)] transition-all transform hover:-translate-y-0.5"
                >
                  <span>Get Your Video Strategy</span>
                  <span className="text-base font-bold">→</span>
                </Link>
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-gray-50 text-[#101832] font-bold text-sm border border-gray-200 shadow-sm hover:border-gray-300 transition-all"
                >
                  <span>Explore Full System</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Animated Explainer Video Player & Storyboard Suite Mockup */}
            <div className="lg:col-span-6 w-full">
              <div className="relative mx-auto max-w-lg rounded-2xl bg-gradient-to-b from-[#121626] to-[#0c0e18] p-5 sm:p-6 text-white shadow-2xl border border-white/10">
                {/* Header: Video Studio Status */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
                    <span className="text-xs font-bold text-white tracking-wide uppercase">
                      Contractor Explainer Suite
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[11px] font-mono border border-purple-500/30">
                    HD 60fps • 45s
                  </span>
                </div>

                {/* 16:9 Video Animation Player Frame */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#1c1a3a] via-[#151728] to-[#0b0c16] border border-white/10 flex flex-col justify-between p-4 mb-4 group shadow-inner">
                  {/* Decorative Radial Backdrop Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(124,58,237,0.25),transparent_65%)] pointer-events-none" />

                  {/* Top Bar inside Player */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-semibold text-gray-200 border border-white/10">
                      Trenchless Sewer Relining vs Digging
                    </span>
                    <span className="px-2 py-0.5 rounded bg-purple-600/80 text-[10px] font-bold text-white uppercase tracking-wider">
                      Preview
                    </span>
                  </div>

                  {/* Centered Play Button & Graphic Illustration */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#7c35ed] to-[#9333ea] flex items-center justify-center shadow-[0_0_24px_rgba(124,58,237,0.6)] group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium mt-2.5 tracking-wide">
                      Click to watch 45-second explainer
                    </span>
                  </div>

                  {/* Player Timeline Bar */}
                  <div className="relative z-10 w-full">
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1">
                      <span className="text-purple-300 font-semibold">0:24</span>
                      <span>0:45</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#7c35ed] to-[#a855f7] w-[53%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* 3-Step Storyboard Scene Breakdown */}
                <div className="space-y-2 mb-4">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    High-Converting 3-Act Storyboard
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {/* Scene 1 */}
                    <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/10">
                      <div className="text-[10px] font-mono text-purple-400 font-bold mb-0.5">01 • THE PAIN</div>
                      <div className="text-xs font-semibold text-white leading-tight">Root Intrusion</div>
                      <div className="text-[10px] text-gray-400 mt-1">Cracked pipe beneath lawn</div>
                    </div>
                    {/* Scene 2 */}
                    <div className="p-2.5 rounded-lg bg-purple-900/30 border border-purple-500/30">
                      <div className="text-[10px] font-mono text-purple-300 font-bold mb-0.5">02 • THE FIX</div>
                      <div className="text-xs font-semibold text-white leading-tight">Epoxy Lining</div>
                      <div className="text-[10px] text-gray-300 mt-1">Zero digging, 50-yr seal</div>
                    </div>
                    {/* Scene 3 */}
                    <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/10">
                      <div className="text-[10px] font-mono text-emerald-400 font-bold mb-0.5">03 • THE CTA</div>
                      <div className="text-xs font-semibold text-white leading-tight">Book Camera</div>
                      <div className="text-[10px] text-gray-400 mt-1">$99 inspection hook</div>
                    </div>
                  </div>
                </div>

                {/* Footer Multi-Channel Deployment Tag */}
                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-purple-300">
                    <span className="text-sm">✓</span>
                    <div>
                      <span className="font-bold text-white">Multi-Channel Asset</span>: Website, Ads &amp; Quote Texts
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 font-bold uppercase">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE CAPABILITIES (4 Pillars)                                          */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7c35ed] mb-3 block">
              Engineered For High-Ticket Trades
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] tracking-tight">
              Turn Technical Trade Scopes Into Instant Homeowner Trust
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#566073]">
              Stop struggling with whiteboard diagrams or 10-paragraph emails. High-clarity animation shows homeowners exactly what they are paying for in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#f5f3ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {cap.icon}
                    </div>
                    <span className="text-2xl font-black text-gray-200 group-hover:text-[#7c35ed]/30 transition-colors font-mono">
                      {cap.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#101832] mb-3 group-hover:text-[#7c35ed] transition-colors">
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
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-y border-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7c35ed] mb-3 block">
              Why Animation Wins Deals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] tracking-tight">
              The Power of Visual Proof in Trade Contracting
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#566073]">
              Contractors who explain visually win higher average ticket jobs and close bids faster than those who rely solely on paper invoices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePillars.map((pillar, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ede9fe]">
                    {pillar.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#101832] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#566073] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-[#7c35ed]">
                  <span>Built for trade conversion</span>
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
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#7c35ed]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/15">
                Elevate Your Estimating Process
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
                Got A High-Ticket Service That Takes Forever To Explain?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10">
                Let us transform your most complex plumbing, HVAC, electrical, or roofing offering into a 45-second animated explainer that closes deals on autopilot.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/book-a-call"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm shadow-[0_8px_20px_rgba(124,58,237,0.35)] transition-all transform hover:-translate-y-0.5"
                >
                  <span>Schedule Your Animation Strategy Call</span>
                  <span className="text-base">→</span>
                </Link>
                <a
                  href="tel:8888100013"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all"
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

