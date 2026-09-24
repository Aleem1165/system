"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Proof / Review screenshots from home page
const reviewImages = [
  { id: "t1", src: "/assets/images/t1.jpg", alt: "Client feedback conversation 1" },
  { id: "t2", src: "/assets/images/t2.jpg", alt: "Client feedback conversation 2" },
  { id: "t3", src: "/assets/images/t3.jpg", alt: "Client feedback conversation 3" },
  { id: "t4", src: "/assets/images/t4.jpg", alt: "Client feedback conversation 4" },
  { id: "t5", src: "/assets/images/t5.jpg", alt: "Client feedback conversation 5" },
  { id: "t6", src: "/assets/images/t6.jpg", alt: "Client feedback conversation 6" },
  { id: "t7", src: "/assets/images/t7.jpg", alt: "Client feedback conversation 7" },
  { id: "t8", src: "/assets/images/t8.jpg", alt: "Client feedback conversation 8" },
  { id: "t9", src: "/assets/images/t9.jpg", alt: "Client feedback conversation 9" },
];

export default function BookACallPage() {
  // Modal & Qualification State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [marketingSpend, setMarketingSpend] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Proof Carousel State
  const [activeProofIndex, setActiveProofIndex] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [selectedProofImg, setSelectedProofImg] = useState<string | null>(null);

  // Carousel Handlers
  const handlePrevProof = () => {
    setActiveProofIndex((prev) => (prev === 0 ? reviewImages.length - 1 : prev - 1));
  };

  const handleNextProof = () => {
    setActiveProofIndex((prev) => (prev === reviewImages.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diffX = touchStartX - e.changedTouches[0].clientX;
    if (diffX > 40) {
      handleNextProof();
    } else if (diffX < -40) {
      handlePrevProof();
    }
    setTouchStartX(null);
  };

  const getProofCardStyle = (idx: number): React.CSSProperties => {
    const totalProofs = reviewImages.length;
    let diff = idx - activeProofIndex;
    if (diff > Math.floor(totalProofs / 2)) diff -= totalProofs;
    if (diff < -Math.floor(totalProofs / 2)) diff += totalProofs;

    switch (diff) {
      case 0:
        return {
          transform: "translate(-50%, -50%) scale(1)",
          zIndex: 30,
          opacity: 1,
          pointerEvents: "auto",
          cursor: "pointer",
        };
      case -1:
        return {
          transform: "translate(calc(-50% - var(--proof-shift, 74%)), -50%) scale(0.82)",
          zIndex: 20,
          opacity: 0.65,
          pointerEvents: "auto",
          cursor: "pointer",
        };
      case 1:
        return {
          transform: "translate(calc(-50% + var(--proof-shift, 74%)), -50%) scale(0.82)",
          zIndex: 20,
          opacity: 0.65,
          pointerEvents: "auto",
          cursor: "pointer",
        };
      case -2:
        return {
          transform: "translate(calc(-50% - 196%), -50%) scale(0.68)",
          zIndex: 10,
          opacity: 0.25,
          pointerEvents: "auto",
          cursor: "pointer",
        };
      case 2:
        return {
          transform: "translate(calc(-50% + 196%), -50%) scale(0.68)",
          zIndex: 10,
          opacity: 0.25,
          pointerEvents: "auto",
          cursor: "pointer",
        };
      default:
        return {
          transform:
            diff > 0
              ? "translate(calc(-50% + 260%), -50%) scale(0.5)"
              : "translate(calc(-50% - 260%), -50%) scale(0.5)",
          zIndex: 0,
          opacity: 0,
          pointerEvents: "none",
          cursor: "default",
        };
    }
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setCurrentStep(0);
      setIsSubmitted(false);
      setMarketingSpend("");
      setCompanyName("");
      setClientName("");
      setPhone("");
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-[#faf8fd] text-[#101832] min-h-screen">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & VIDEO CONTAINER */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-36 pb-16 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#7c35ed]/25 via-[#9055ff]/15 to-transparent blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] border border-[#7c35ed]/20 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
            Built for Contractors
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#101832] leading-[1.08] mb-6">
            More Leads.<br />
            Faster Replies.<br />
            <span className="bg-gradient-to-r from-[#7c35ed] via-[#9055ff] to-[#a855f7] bg-clip-text text-transparent italic font-serif font-normal">
              More Jobs.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-[#566073] max-w-2xl leading-relaxed mb-6">
            A turnkey smart website and automated lead-recovery system engineered to help local contractors capture more jobs and grow revenue, while we handle every technical detail.
          </p>

          {/* Pricing Highlight Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-white border border-gray-200/90 shadow-sm text-xs sm:text-sm text-[#566073] mb-8">
            <span className="px-2.5 py-0.5 rounded-full bg-[#7c35ed] text-white text-[11px] font-extrabold uppercase tracking-wide">
              Brand New
            </span>
            <span className="font-bold text-[#101832]">FREE Custom Website</span>
            <span>+ Full Automation Suite for</span>
            <strong className="text-[#7c35ed] font-black">$297/month</strong>
          </div>

          {/* Step 1 & Step 2 Instructional Callout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-4 rounded-2xl bg-[#f5f3ff]/80 border border-[#7c35ed]/20 text-xs sm:text-sm text-[#101832] mb-10 max-w-2xl w-full">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7c35ed] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>Watch this 2-minute overview with sound on.</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-[#7c35ed]/20" />
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7c35ed] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>Click <strong className="text-[#7c35ed]">Book Free Demo Call</strong> below.</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* VIDEO DUMMY CONTAINER (Matches System Digital design specs) */}
          {/* ========================================================================= */}
          <div className="w-full max-w-3xl mb-8">
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative w-full aspect-video rounded-3xl bg-gradient-to-br from-[#101832] via-[#161f38] to-[#25183f] border-2 border-[#7c35ed]/30 overflow-hidden shadow-2xl flex flex-col items-center justify-center group cursor-pointer select-none"
            >
              {/* Radial ambient glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35)_0%,transparent_70%)] pointer-events-none" />

              {/* Grid texture */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

              {/* Play Button & Overlay */}
              <div className="relative z-10 flex flex-col items-center text-center p-6 gap-3 sm:gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#7c35ed] to-[#9333ea] flex items-center justify-center text-white shadow-[0_0_40px_rgba(124,58,237,0.7)] group-hover:scale-110 transition-transform duration-300">
                  <span className="absolute inset-0 rounded-full bg-[#7c35ed] animate-ping opacity-30" />
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 translate-x-0.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <div className="max-w-md">
                  <span className="text-white font-extrabold text-base sm:text-xl block tracking-tight">
                    Contractor Marketing System Overview
                  </span>
                  <span className="text-gray-300 text-xs sm:text-sm mt-1 block leading-snug">
                    Two-minute guided walkthrough • Ready for live video stream
                  </span>
                </div>
              </div>

              {/* Control Bar Mockup */}
              <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between gap-4 text-white text-xs">
                <div className="flex items-center gap-3 w-full">
                  <span className="text-gray-300 font-mono text-[11px] sm:text-xs">0:00 / 2:15</span>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-2/5 bg-[#7c35ed] rounded-full" />
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-300 uppercase tracking-wider flex-shrink-0">
                  1080p HD
                </span>
              </div>
            </div>

            {/* Video container footnote */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#566073] px-2">
              <span>16:9 responsive video frame</span>
              <span className="text-[#7c35ed] font-semibold">Click to book call & unlock strategy</span>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="flex flex-col items-center gap-3 mb-16">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-extrabold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-4.5 rounded-full shadow-[0_10px_28px_rgba(124,58,237,0.35)] hover:shadow-[0_14px_36px_rgba(124,58,237,0.5)] hover:scale-102 active:scale-98 transition-all flex items-center gap-3 cursor-pointer"
            >
              <span>Book Free Demo Call</span>
              <span className="text-xl">→</span>
            </button>
            <p className="text-xs text-[#566073] font-medium">
              Takes 20 seconds • Zero obligation • 30-day money back guarantee
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. REAL CLIENT RESULTS / CONVERSATIONS PROOF SECTION (SCREENSHOT 3 / HOME) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100" id="results">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Client Results
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-4">
              Real Results. Real Conversations.
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              See genuine feedback and results shared by businesses using System Digital. Click any image to view it full size.
            </p>
          </div>

          {/* Coverflow Carousel Stage */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* Slider viewport */}
            <div
              className="relative w-full h-[520px] sm:h-[610px] md:h-[670px] lg:h-[720px] overflow-hidden flex items-center justify-center select-none [--proof-shift:74%] sm:[--proof-shift:95%] md:[--proof-shift:104%]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Previous Button (Floating Left) */}
              <button
                type="button"
                onClick={handlePrevProof}
                className="absolute left-1 sm:left-3 md:left-6 z-40 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#7c35ed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7c35ed] text-white flex items-center justify-center flex-shrink-0 shadow-[0_8px_24px_rgba(124,58,237,0.45)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.65)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous screenshot"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button (Floating Right) */}
              <button
                type="button"
                onClick={handleNextProof}
                className="absolute right-1 sm:right-3 md:right-6 z-40 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#7c35ed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7c35ed] text-white flex items-center justify-center flex-shrink-0 shadow-[0_8px_24px_rgba(124,58,237,0.45)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.65)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Next screenshot"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Screenshot Cards */}
              {reviewImages.map((item, idx) => {
                const totalProofs = reviewImages.length;
                let diff = idx - activeProofIndex;
                if (diff > Math.floor(totalProofs / 2)) diff -= totalProofs;
                if (diff < -Math.floor(totalProofs / 2)) diff += totalProofs;

                return (
                  <figure
                    key={item.id}
                    style={getProofCardStyle(idx)}
                    onClick={() => {
                      if (diff === 0) {
                        setSelectedProofImg(item.src);
                      } else {
                        setActiveProofIndex(idx);
                      }
                    }}
                    className="absolute top-1/2 left-1/2 w-[220px] sm:w-[260px] md:w-[290px] lg:w-[315px] aspect-[852/1846] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] select-none"
                  >
                    <div
                      className={`w-full h-full p-1 sm:p-1.5 rounded-[22px] sm:rounded-[26px] bg-gradient-to-br from-[#7c35ed] via-[#9333ea] to-[#c084fc] transition-shadow duration-300 overflow-hidden ${
                        diff === 0
                          ? "shadow-[0_25px_60px_rgba(124,58,237,0.4)] ring-2 ring-[#7c35ed]/40"
                          : "shadow-[0_12px_30px_rgba(124,58,237,0.18)]"
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        draggable={false}
                        className="w-full h-full object-cover rounded-[18px] sm:rounded-[21px] block select-none pointer-events-none"
                      />
                    </div>
                  </figure>
                );
              })}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              {reviewImages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveProofIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    dotIdx === activeProofIndex
                      ? "w-8 h-2.5 bg-[#7c35ed]"
                      : "w-2.5 h-2.5 bg-[#7c35ed]/25 hover:bg-[#7c35ed]/50"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Secondary CTA below proof */}
          <div className="mt-14 sm:mt-16 text-center">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.45)] hover:scale-102 transition-all cursor-pointer"
            >
              <span>Ready for Similar Results? Book Your Call</span>
              <span>→</span>
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE QUALIFICATION MODAL */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={resetModal}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={resetModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
              aria-label="Close form"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-[#7c35ed] uppercase tracking-wider block mb-1">
                System Digital • Discovery Call
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#101832]">
                Let&apos;s get your call ready
              </h2>
              <p className="text-xs text-[#566073] mt-1">
                $297/month contractor growth system
              </p>
            </div>

            {/* Progress Bar */}
            {!isSubmitted && (
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-[#566073] font-semibold mb-1.5">
                  <span>Step {currentStep + 1} of 4</span>
                  <span>{Math.round(((currentStep + 1) / 4) * 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#7c35ed] transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Back Button */}
            {currentStep > 0 && !isSubmitted && (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="text-xs font-bold text-[#7c35ed] hover:underline mb-4 inline-flex items-center gap-1 cursor-pointer"
              >
                ← Back
              </button>
            )}

            {/* Form Steps */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                {/* Step 1: Marketing Spend */}
                {currentStep === 0 && (
                  <div>
                    <label className="block text-sm sm:text-base font-bold text-[#101832] mb-3">
                      How much do you currently spend on marketing per month?
                    </label>
                    <div className="space-y-2">
                      {["Nothing", "Up to $1k", "$1k–$3k", "$3k–$6k", "$6k+"].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => {
                            setMarketingSpend(tier);
                            setCurrentStep(1);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                            marketingSpend === tier
                              ? "border-[#7c35ed] bg-[#f5f3ff] text-[#7c35ed]"
                              : "border-gray-200 hover:border-[#7c35ed]/40 hover:bg-gray-50 text-[#101832]"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Company Name */}
                {currentStep === 1 && (
                  <div>
                    <label className="block text-sm sm:text-base font-bold text-[#101832] mb-2" htmlFor="company">
                      What is your trade company name?
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Apex Roofing & Remodeling LLC"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7c35ed] focus:ring-2 focus:ring-[#7c35ed]/20 outline-none text-sm text-[#101832] mb-4"
                    />
                    <button
                      type="button"
                      disabled={!companyName.trim()}
                      onClick={() => setCurrentStep(2)}
                      className="w-full bg-[#121316] disabled:opacity-50 hover:bg-[#20222a] text-white font-bold text-sm py-3.5 rounded-[10px] border border-white/12 transition-all cursor-pointer"
                    >
                      Continue →
                    </button>
                  </div>
                )}

                {/* Step 3: Name */}
                {currentStep === 2 && (
                  <div>
                    <label className="block text-sm sm:text-base font-bold text-[#101832] mb-2" htmlFor="name">
                      What is your full name?
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. John Miller"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7c35ed] focus:ring-2 focus:ring-[#7c35ed]/20 outline-none text-sm text-[#101832] mb-4"
                    />
                    <button
                      type="button"
                      disabled={!clientName.trim()}
                      onClick={() => setCurrentStep(3)}
                      className="w-full bg-[#121316] disabled:opacity-50 hover:bg-[#20222a] text-white font-bold text-sm py-3.5 rounded-[10px] border border-white/12 transition-all cursor-pointer"
                    >
                      Continue →
                    </button>
                  </div>
                )}

                {/* Step 4: Mobile Phone & Final Submit */}
                {currentStep === 3 && (
                  <div>
                    <label className="block text-sm sm:text-base font-bold text-[#101832] mb-2" htmlFor="phone">
                      What is your mobile phone number?
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7c35ed] focus:ring-2 focus:ring-[#7c35ed]/20 outline-none text-sm text-[#101832] mb-3"
                    />
                    <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">
                      By submitting, you authorize System Digital to send operational updates and scheduling confirmations. Message frequency varies. Reply STOP to cancel anytime.
                    </p>
                    <button
                      type="submit"
                      disabled={!phone.trim()}
                      className="w-full bg-[#121316] disabled:opacity-50 hover:bg-[#20222a] text-white font-bold text-sm py-3.5 rounded-[10px] border border-white/12 transition-all shadow-md cursor-pointer"
                    >
                      Book a Call With Us →
                    </button>
                  </div>
                )}
              </form>
            ) : (
              /* Step 5: Success Confirmation */
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto mb-4 font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-[#101832] mb-2">
                  You&apos;re in.
                </h3>
                <p className="text-sm text-[#566073] mb-6 leading-relaxed">
                  Thank you, <strong>{clientName || "Partner"}</strong>! Our senior trade growth strategist has received your details for <strong>{companyName || "your business"}</strong> and will reach out shortly.
                </p>
                <button
                  type="button"
                  onClick={resetModal}
                  className="px-6 py-2.5 rounded-[10px] bg-[#121316] text-white font-bold text-xs hover:bg-[#20222a] border border-white/12 transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lightbox Modal for Proof Images */}
      {selectedProofImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProofImg(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProofImg(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-lg cursor-pointer"
              aria-label="Close image"
            >
              ✕
            </button>
            <img
              src={selectedProofImg}
              alt="Expanded proof screenshot"
              className="max-h-[75vh] w-auto mx-auto object-contain rounded-xl"
            />
            <div className="text-center mt-3 text-xs text-gray-500 font-medium">
              Real client communication snapshot from System Digital platform
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. FOOTER LINKS */}
      {/* ========================================================================= */}
      <footer className="py-8 bg-white border-t border-gray-100 text-center text-xs text-gray-400">
        <div className="flex items-center justify-center gap-6">
          <Link href="/privacy-policy" className="hover:text-[#7c35ed] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-[#7c35ed] transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/pricing" className="hover:text-[#7c35ed] transition-colors">
            Pricing
          </Link>
        </div>
      </footer>

    </div>
  );
}
