import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | System Digital - Contractor Website & Automation",
  description:
    "Three direct steps. Zero agency drama. Discover how System Digital takes your trade business from initial discovery call to fully operational in 7-10 days.",
};

export default function OurProcessPage() {
  const steps = [
    {
      num: "01",
      duration: "20 Minutes",
      phase: "Day 1",
      title: "The 20-Minute Discovery Call",
      desc: "You tell us what trade services you specialize in, where your current leads get lost, and what bottlenecks you want solved. We ask direct, practical questions—no 47-slide PowerPoint decks.",
      outcome: "A tailored system blueprint & guaranteed launch date",
      points: [
        "Audit existing website, local rankings, & Google profile",
        "Identify high-intent, profitable service zip codes",
        "Confirm required workflows (AI chat, missed-call text-back, review funnel)",
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
      num: "02",
      duration: "5–7 Days",
      phase: "Days 2–7",
      title: "We Build Your Complete Ecosystem",
      desc: "You send over your basic logo and photos. Our engineering team handles 100% of the copywriting, design, workflow automation, and custom AI training around your exact trade.",
      outcome: "A fully working staging system ready for your review",
      points: [
        "High-performance, conversion-engineered contractor website",
        "Custom 24/7 AI chat agent trained on your pricing & services",
        "2-second missed call text-back & automated quote follow-up",
        "Automated 5-star Google review collection engine",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: "03",
      duration: "25 Minutes",
      phase: "Day 8",
      title: "Live Walkthrough & Launch",
      desc: "We hop on a quick screen share together, trigger live test calls, verify instant alerts on your smartphone app, and press the big launch button with zero downtime to your existing lines.",
      outcome: "A live, high-converting revenue machine capturing jobs 24/7",
      points: [
        "Live test call and text-back response verification",
        "Mobile inbox setup on your phone for instant crew notifications",
        "Official DNS cutover with zero interruption to your phone lines",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const guarantees = [
    {
      title: "Zero Homework For You",
      desc: "You don't have to write web copy, configure DNS records, or fiddle with software settings. We do the heavy lifting from A to Z.",
      badge: "Turnkey",
    },
    {
      title: "Zero Inbound Downtime",
      desc: "Your phone numbers and existing customer inquiries remain 100% active throughout the entire build. Not a single call is dropped.",
      badge: "Uninterrupted",
    },
    {
      title: "Guaranteed 7–10 Day Delivery",
      desc: "No open-ended agency timelines that drag into 4 months. We commit to a strict launch date on our very first call.",
      badge: "On Schedule",
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
              The System Onboarding Process
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200">
              <span>⚡</span>
              <span>From Call To Live In 7 Days</span>
            </div>
          </div>

          {/* Eyebrow */}
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7c35ed] mb-4 block">
            Three Steps. Zero Agency Obstacle Course.
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101832] leading-[1.12] mb-6 max-w-4xl">
            One Quick Call. One Focused Build.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c35ed] via-[#9333ea] to-[#a855f7]">
              One Clean Launch.
            </span>
          </h1>

          {/* Narrative */}
          <p className="text-base sm:text-xl text-[#566073] max-w-3xl leading-relaxed mb-10">
            Nobody running a trade business needs twelve status meetings to launch a marketing system. We respect your time, do the heavy lifting, and get your system live and capturing jobs in a single week.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm shadow-[0_8px_20px_rgba(124,58,237,0.28)] hover:shadow-[0_12px_24px_rgba(124,58,237,0.36)] transition-all transform hover:-translate-y-0.5"
            >
              <span>Book Your 20-Min Call</span>
              <span className="text-base font-bold">→</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-gray-50 text-[#101832] font-bold text-sm border border-gray-200 shadow-sm hover:border-gray-300 transition-all"
            >
              <span>Explore The System</span>
            </Link>
          </div>

          {/* Connected Timeline Stepper Bar */}
          <div className="w-full max-w-4xl bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
              {/* Timeline Connection Line */}
              <div className="hidden sm:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#7c35ed] via-[#9333ea] to-[#a855f7] -translate-y-5 -z-0 opacity-20" />

              {/* Step 1 Preview */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#f5f3ff] border-2 border-[#7c35ed] text-[#7c35ed] font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                  01
                </div>
                <div className="text-sm font-bold text-[#101832]">Demo Call</div>
                <div className="text-xs font-mono text-[#7c35ed] font-semibold mt-0.5">20 Minutes</div>
              </div>

              {/* Step 2 Preview */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#7c35ed] text-white font-black text-sm flex items-center justify-center mb-3 shadow-md">
                  02
                </div>
                <div className="text-sm font-bold text-[#101832]">System Build</div>
                <div className="text-xs font-mono text-[#7c35ed] font-semibold mt-0.5">7–10 Days</div>
              </div>

              {/* Step 3 Preview */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 font-black text-sm flex items-center justify-center mb-3 shadow-sm">
                  03
                </div>
                <div className="text-sm font-bold text-[#101832]">Live Launch</div>
                <div className="text-xs font-mono text-emerald-600 font-semibold mt-0.5">25 Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE 3-STEP DETAILED WALKTHROUGH                                        */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7c35ed] mb-3 block">
              The Entire Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] tracking-tight">
              Here Is The Whole Process. Seriously.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#566073]">
              No confusing account handoffs. No weekly committee check-ins. Just pure forward momentum.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number & Summary */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-12 h-12 rounded-2xl bg-[#f5f3ff] text-[#7c35ed] font-black text-xl flex items-center justify-center font-mono">
                          {step.num}
                        </span>
                        <div>
                          <span className="text-xs font-mono font-bold text-[#7c35ed] uppercase tracking-wider block">
                            {step.phase}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">
                            Duration: {step.duration}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#101832] mb-3 group-hover:text-[#7c35ed] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#566073] leading-relaxed mb-6">
                        {step.desc}
                      </p>
                    </div>

                    {/* Outcome Tag */}
                    <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#7c35ed] block mb-1">
                        You Leave With:
                      </span>
                      <span className="text-xs font-bold text-[#101832]">
                        {step.outcome}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Detailed Deliverables Checklist */}
                  <div className="lg:col-span-8 bg-[#faf8fd] rounded-2xl p-6 sm:p-8 border border-purple-50/80">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#7c35ed] mb-4">
                      Execution Milestones:
                    </div>
                    <ul className="space-y-3.5">
                      {step.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#101832]">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="font-medium">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CONTRACTOR EFFORT MATRIX (What You Do vs What We Build)                  */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-y border-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7c35ed] mb-3 block">
              Division of Labor
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] tracking-tight">
              We Handle 95% Of The Heavy Lifting
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#566073]">
              You don&apos;t have time to become a full-time web developer or copywriter. Here is how simple we keep it for you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What You Do */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#101832]">What You Provide</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Total time required: ~15 minutes</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-bold font-mono">
                    Minimal Effort
                  </span>
                </div>

                <ul className="space-y-4 text-sm text-[#566073]">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7c35ed] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Your company logo, brand colors, and team/jobsite photos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7c35ed] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Your core service territory zip codes and trade licenses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7c35ed] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Access to your existing domain registrar (we help you with this)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 text-xs font-medium text-emerald-600">
                ✓ That&apos;s literally it. You get back to running your crew.
              </div>
            </div>

            {/* What System Digital Does */}
            <div className="p-8 rounded-3xl bg-[#101832] text-white shadow-xl border border-white/10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-white">What We Build For You</h3>
                    <p className="text-xs text-gray-400 mt-0.5">100% turnkey execution</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30 font-mono">
                    Done-For-You
                  </span>
                </div>

                <ul className="space-y-4 text-sm text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Full conversion copywriting tailored to homeowner psychology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Ultra-fast, mobile-first responsive web architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>24/7 AI chat agent trained on trade services and emergency intake</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Automated missed-call text-back, review funnels, and SMS follow-ups</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-bold text-purple-300">
                ✓ Ready for live launch in 7–10 business days.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THREE OPERATIONAL GUARANTEES                                            */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((g, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[#faf8fd] border border-purple-100 hover:border-purple-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white text-[#7c35ed] text-xs font-bold uppercase tracking-wider mb-4 border border-purple-100">
                    {g.badge}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#101832] mb-2">
                    {g.title}
                  </h3>
                  <p className="text-sm text-[#566073] leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HIGH-CONVERTING CALL TO ACTION                                         */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
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
                Ready To Get This Off Your To-Do List?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10">
                Twenty minutes. No high-pressure sales pitch. No 47-slide PowerPoint deck. We promise.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/book-a-call"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm shadow-[0_8px_20px_rgba(124,58,237,0.35)] transition-all transform hover:-translate-y-0.5"
                >
                  <span>Book Step 1 Now</span>
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

