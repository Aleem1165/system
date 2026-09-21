import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real User 24/7 Live Human Chat for Contractors | System Digital",
  description:
    "Live human chat specialists answer questions, pre-qualify homeowner estimates, and capture contractor leads 24/7. Zero robotic bot mazes.",
};

export default function RealUserChatPage() {
  const capabilities = [
    {
      num: "01",
      title: "A Real Trained Specialist Answers",
      desc: "No robotic loops, no 'press 4 to feel confused.' Visitors are greeted warmly by a real person who understands contractor trades and local service needs.",
      points: [
        "Friendly, articulate human conversation",
        "Trained specifically on your trade services & territory",
        "Treats every prospect with patience and professionalism",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Captures Project Scope & Verified Contact Info",
      desc: "Our human agents don't just chat—they qualify. They secure the caller's full name, cell number, job location, and specific repair requirements.",
      points: [
        "Collects project scope, timing urgency, and property address",
        "Verifies valid mobile numbers before ending the chat",
        "Screens out out-of-radius jobs and casual tire-kickers",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Covers Peak Busy Hours & Weekends",
      desc: "Contractors are on roofs, under sinks, or driving trucks during prime daytime hours. Our team maintains active chat coverage so you never drop the ball.",
      points: [
        "Instant replies while your hands are dirty on the job site",
        "24/7/365 night, weekend, and holiday chat monitoring",
        "Keeps visitors engaged so they don't bounce to a competitor",
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
    {
      num: "04",
      title: "Clean Handoff Directly to Your Phone",
      desc: "The second a lead is qualified, the full chat transcript and contact details land instantly in your unified mobile app and inbox ready for dispatch.",
      points: [
        "Immediate SMS and push notifications sent to your team",
        "Complete customer context so you can quote with confidence",
        "Direct calendar booking or callback scheduling included",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  const valuePillars = [
    {
      badge: "High-Ticket Empathy",
      title: "Human Connection for Big-Ticket Jobs",
      desc: "Homeowners spending $10,000+ on a new roof, HVAC replacement, or kitchen remodel want reassurance from a real person. Human warmth builds immediate confidence.",
    },
    {
      badge: "Tire-Kicker Screening",
      title: "Filter Out Time Wasters Politely",
      desc: "Our agents screen out solicitations, competitors, and out-of-service areas so your estimators only spend precious time quoting genuine, profitable projects.",
    },
    {
      badge: "Zero Staffing Overhead",
      title: "All the Power, None of the Payroll",
      desc: "Enjoy full 24/7 customer service coverage without hiring, scheduling, benefits, or HR management. We handle staffing end-to-end.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#101832] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: OTHER SERVICES SIGNATURE SPLIT LAYOUT */}
      {/* ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 relative overflow-hidden bg-gradient-to-b from-[#faf8fd] via-white to-white">
        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#7c35ed]/10 to-[#c084fc]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#566073] mb-6">
            <Link href="/" className="hover:text-[#7c35ed] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#566073]">Other Services</span>
            <span>/</span>
            <span className="text-[#7c35ed] font-bold">Real User 24/7 Chat</span>
          </div>

          {/* Split Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold uppercase tracking-wider mb-4 border border-[#7c35ed]/15">
                <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
                Human Concierge
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
                Live Human Chat Agents. Zero Robotic Bot Mazes.
              </h1>

              <p className="text-lg sm:text-xl text-[#566073] leading-relaxed mb-8">
                Homeowners seeking emergency trade repairs or high-ticket renovations hate hitting robotic menus or rigid decision trees. Our dedicated live human chat team answers your website visitors in real time, answers project questions, and books qualified estimates directly into your calendar.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-3 gap-3 w-full mb-8 pt-4 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#7c35ed]">100%</span>
                  <span className="text-xs font-semibold text-[#566073]">Real Live Humans</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#7c35ed]">&lt;30s</span>
                  <span className="text-xs font-semibold text-[#566073]">Average Response</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#7c35ed]">24/7</span>
                  <span className="text-xs font-semibold text-[#566073]">Year-Round Coverage</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/book-a-call"
                  className="bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-[0_8px_20px_rgba(124,58,237,0.25)] hover:shadow-[0_12px_24px_rgba(124,58,237,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Book a Free Strategy Call</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/"
                  className="bg-white hover:bg-gray-50 text-[#101832] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-gray-200 transition-all cursor-pointer"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Live Chat Mockup */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-white rounded-3xl p-5 sm:p-7 border border-gray-200/80 shadow-2xl relative overflow-hidden">
                {/* Chat Widget Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#7c35ed] to-[#9333ea] flex items-center justify-center text-white font-bold text-sm shadow-md">
                      <span>JD</span>
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-[#101832]">Jessica D.</h3>
                        <span className="text-[10px] uppercase font-bold text-[#7c35ed] bg-[#f5f3ff] px-2 py-0.5 rounded-full border border-[#7c35ed]/15">
                          Live Specialist
                        </span>
                      </div>
                      <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active now • Replying in &lt;15s
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">System Support</span>
                </div>

                {/* Simulated Conversation Feed */}
                <div className="flex flex-col gap-3 py-2 text-xs sm:text-sm">
                  {/* Visitor message */}
                  <div className="flex flex-col items-end">
                    <div className="bg-[#7c35ed] text-white p-3.5 rounded-2xl rounded-tr-xs max-w-[85%] shadow-sm">
                      Hi, I have an urgent pipe leak under my kitchen sink and need an estimate today. Are you available?
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1 mr-1">11:42 AM</span>
                  </div>

                  {/* Agent message */}
                  <div className="flex flex-col items-start">
                    <div className="bg-[#f5f3ff] text-[#101832] p-3.5 rounded-2xl rounded-tl-xs max-w-[85%] border border-[#7c35ed]/10 shadow-xs">
                      Hi Sarah! Yes, we can certainly help. We have a licensed master plumber in your neighborhood between 1:00 PM and 3:00 PM today. What is the best cell number and street address for the arrival notice?
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1 ml-1">11:43 AM</span>
                  </div>

                  {/* Visitor message */}
                  <div className="flex flex-col items-end">
                    <div className="bg-[#7c35ed] text-white p-3.5 rounded-2xl rounded-tr-xs max-w-[85%] shadow-sm">
                      Great! It&apos;s (555) 839-2041, 142 Elmwood Ave.
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1 mr-1">11:43 AM</span>
                  </div>

                  {/* Agent confirmation message */}
                  <div className="flex flex-col items-start">
                    <div className="bg-emerald-50 text-emerald-950 p-3.5 rounded-2xl rounded-tl-xs max-w-[85%] border border-emerald-200/60 shadow-xs">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-700 mb-1">
                        <span>✓</span>
                        <span>Estimate Booked for 1:30 PM</span>
                      </div>
                      You are all set! Our technician will text you when 15 minutes away.
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1 ml-1">11:44 AM</span>
                  </div>
                </div>

                {/* Simulated Input Bar Mockup */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                  <div className="flex-1 bg-gray-50 rounded-full px-4 py-2.5 text-xs text-gray-400 border border-gray-200/60 flex items-center justify-between">
                    <span>Type your project question...</span>
                    <span className="text-gray-300">📎</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#7c35ed] text-white flex items-center justify-center text-xs shadow-md">
                    ↑
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
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-t border-gray-200/70">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Real Humans • Real Results
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              How our human chat team converts more jobs
            </h2>
            <p className="text-[#566073] text-base sm:text-lg leading-relaxed">
              Every website visitor is a homeowner ready to spend money. Here is how trained human specialists protect your lead pipeline.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {capabilities.map((item) => (
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
      {/* 3. VALUE IMPACT: WHY CONTRACTORS CHOOSE LIVE HUMANS */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              The Human Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              Built for high-ticket trade services
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              Deliver white-glove customer care that sets your trade business apart from competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {valuePillars.map((val, vIdx) => (
              <div
                key={vIdx}
                className="bg-[#faf8fd] rounded-2xl p-7 border border-purple-100 hover:border-[#7c35ed]/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#7c35ed] bg-[#f5f3ff] px-2.5 py-1 rounded-full border border-[#7c35ed]/15 inline-block mb-4">
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
      <section className="py-12 sm:py-16 bg-[#faf8fd]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#101832] via-[#1b2240] to-[#25183f] text-white shadow-xl overflow-hidden text-center">
            {/* Ambient Purple Glow Orbs */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#7c35ed]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#9333ea]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[#c084fc] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-2">
                Capture Every Opportunity
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Stop giving good visitors the silent treatment.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Every day, ready-to-hire homeowners visit your website and leave without calling. Let real human chat turn casual visitors into booked estimates 24/7.
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
