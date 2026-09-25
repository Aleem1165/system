import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import FollowUpDemoBox from "@/components/FollowUpDemoBox";

export const metadata: Metadata = {
  title: "Automated Follow-Up Sequences for Contractors | System Digital",
  description:
    "Never let another high-ticket estimate go cold. Our automated follow-up sequences nurture homeowner leads via SMS and email within seconds of inquiry.",
};

export default function AutomatedFollowUpPage() {
  const stats = [
    {
      num: "96%",
      badge: "Open Rate",
      highlight: "Opened Within 3 Minutes",
      desc: "of SMS text follow-up notifications are opened within 3 minutes of arrival, compared to just 18% of emails that get buried in spam.",
    },
    {
      num: "71%",
      badge: "Rapid Response",
      highlight: "Reply Same-Day",
      desc: "of prospective homeowners reply directly to automated text follow-ups within 24 hours to clarify project specifications.",
    },
    {
      num: "73%",
      badge: "Revenue Boost",
      highlight: "Higher Close Rate",
      desc: "higher estimate win rate achieved by trade contractors who deploy automated multi-touch follow-up compared to manual callbacks.",
    },
  ];

  const pillars = [
    {
      num: "01",
      title: "Strike While Buyer Intent is Boiling",
      desc: "Every minute a lead sits untouched increases the odds they dial your competitor. Our system dispatches an instant, personalized text within seconds so the homeowner knows they are in good hands.",
      points: [
        "Sub-30-second automated response to incoming requests",
        "Tailored text greeting based on their specific trade need",
        "Stops homeowners from continuing their search on Google",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Guide Prospects Effortlessly to the Next Step",
      desc: "Homeowners often get stuck unsure what photos, measurements, or details you need. Automated sequences politely guide them through scheduling an on-site walkthrough or sending job details.",
      points: [
        "Prompts clients for project photos and dimensions automatically",
        "Sends 1-tap calendar links for booking on-site estimates",
        "Answers common timeline and availability expectations",
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
    {
      num: "03",
      title: "Eliminate Sticky Note Chaos & Team Fatigue",
      desc: "Relying on tired technicians or scattered sticky notes on truck dashboards guarantees dropped estimates. Automation never forgets a prospect, misplaces a phone number, or takes a weekend off.",
      points: [
        "100% hands-free sequence running 24/7/365 without fail",
        "Consolidates every chat and text into one clean mobile inbox",
        "Frees your team to focus on estimating and high-margin craft",
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
      num: "04",
      title: "Project Unstoppable Reliability & Authority",
      desc: "Speed and consistent communication immediately position your company as the most professional contractor in town. Homeowners gladly pay premium prices for businesses that actually get back to them.",
      points: [
        "Establishes immediate pricing authority and peace of mind",
        "Cuts estimate appointment no-shows by over 60%",
        "Builds lasting trust with polite confirmation & reminder texts",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: "Multi-Channel SMS & Email Cadence",
      desc: "Sequences thoughtful text messages and emails at proven time intervals so your estimate remains top of mind without feeling pushy.",
    },
    {
      title: "Smart Auto-Pause on Reply",
      desc: "The second a customer responds or calls back, the automation intelligently halts so your team can step in naturally.",
    },
    {
      title: "Project Photo & Detail Prompts",
      desc: "Automatically asks homeowners to reply with photos of their issue, helping you scope projects accurately before driving out.",
    },
    {
      title: "Estimate & Appointment Reminders",
      desc: "Sends timely day-before and morning-of reminders with technician arrival windows, slashing costly no-shows and wasted trips.",
    },
    {
      title: "Stale Lead Re-Engagement",
      desc: "Revives past quotes and unclosed leads from 30, 60, or 90 days ago with seasonal check-ins that generate booked work on demand.",
    },
    {
      title: "Turnkey Setup & Seamless CRM Sync",
      desc: "Fully configured and managed for your business. Works out of the box with your existing schedule, numbers, and workflow.",
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
            <span className="text-[#ea580c] font-bold">Automated Follow-Up</span>
          </div> */}

          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ff7a1a]/15">
              <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
              Pipeline Automation
            </div> */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
              Hands-Free Follow-Up Sequences Built to Close More Contractor Jobs
            </h1>
            <p className="text-lg sm:text-xl text-[#566073] leading-relaxed max-w-3xl">
              Contractors lose thousands in revenue simply because leads go cold while crews are on job sites. Our automated system keeps the conversation moving via SMS within seconds of inquiry, so estimates get booked instead of forgotten.
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

            {/* Right Column: Interactive Video Container Box with Scenario Tabs */}
            <div className="lg:col-span-7 flex flex-col">
              <FollowUpDemoBox />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EXPLANATION SECTION: WHAT IS AUTOMATED FOLLOW-UP? (4 PILLARS) */}
      {/* ========================================================================= */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#fffbf7] border-t border-gray-200/70">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              The Conversion Edge
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              What is an automated contractor follow-up system?
            </h2>
            <p className="text-[#566073] text-base sm:text-lg leading-relaxed">
              Homeowners typically request 3 to 4 estimates when planning a project. The trade business that replies fastest and stays organized consistently wins the highest-paying jobs.
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
              No forgotten leads, no lost contact info, and zero awkward chasing required from your staff.
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
                Stop Leaving Money On Job Sites
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Still planning to follow up after lunch?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Let the system handle the messages, reminders, and next steps automatically—even when lunch turns into three emergency job visits and five supplier runs.
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
