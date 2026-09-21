"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
}

const scenarios: Scenario[] = [
  {
    id: "missed-call",
    title: "Missed Call Nudge",
    subtitle: "Automated instant text within 30s to keep homeowners from dialing a competitor",
    duration: "2:15",
  },
  {
    id: "estimate-request",
    title: "Web Estimate Follow-Up",
    subtitle: "Immediate SMS prompt asking for project photos, address, and preferred timeline",
    duration: "2:40",
  },
  {
    id: "quote-nudge",
    title: "Quote Re-Engagement",
    subtitle: "Polite check-in on sent bids 48 hours later without awkward phone chasing",
    duration: "1:55",
  },
];

export default function FollowUpDemoBox() {
  const [activeTab, setActiveTab] = useState<string>("missed-call");
  const currentScenario = scenarios.find((s) => s.id === activeTab) || scenarios[0];

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-gray-200/80 shadow-xl h-full flex flex-col justify-between">
      {/* Frame Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#101832]">
            See A Short Demo Below
          </h2>
          <p className="text-xs sm:text-sm text-[#566073] mt-0.5">
            {currentScenario.subtitle}
          </p>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold self-start sm:self-center">
          <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
          Video Frame
        </span>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-4 p-1.5 bg-[#faf8fd] rounded-xl border border-gray-200/60">
        {scenarios.map((sc) => {
          const isActive = activeTab === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveTab(sc.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? "bg-[#7c35ed] text-white shadow-sm"
                  : "text-[#566073] hover:text-[#101832] hover:bg-white"
              }`}
            >
              <span>{sc.title}</span>
            </button>
          );
        })}
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
              {currentScenario.title} Video Demo
            </span>
            <span className="text-gray-300 text-xs sm:text-sm mt-1 block leading-snug">
              Full-width responsive video container • Ready for video upload
            </span>
          </div>
        </div>

        {/* Video Player Control Bar Mockup */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex items-center justify-between gap-4 text-white text-xs">
          <div className="flex items-center gap-3 w-full">
            <span className="text-gray-300 font-mono text-[11px] sm:text-xs">
              0:00 / {currentScenario.duration}
            </span>
            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-[#7c35ed] rounded-full" />
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
        <span className="text-[#7c35ed] font-semibold">
          Ready for MP4, YouTube, or Vimeo embed
        </span>
      </div>
    </div>
  );
}
