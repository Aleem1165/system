"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Trade Items for Coverflow Carousel (12 trades)
const tradesList = [
  { name: "Roofing", image: "/assets/images/roofing.jpg", desc: "Roof replacement, storm repairs & inspections", tag: "Exterior & Structural" },
  { name: "Plumbing", image: "/assets/images/plumbing.jpg", desc: "Emergency calls, repiping & water heater installs", tag: "Emergency Services" },
  { name: "HVAC", image: "/assets/images/hvac.jpg", desc: "Heating, ventilation & AC repair and installation", tag: "Heating & Cooling" },
  { name: "Electrician", image: "/assets/images/electrician.jpg", desc: "Panel upgrades, EV chargers & residential wiring", tag: "Power & Electrical" },
  { name: "Painters", image: "/assets/images/painters.jpg", desc: "Interior, exterior & cabinet refinishing projects", tag: "Finishing & Coating" },
  { name: "Handyman", image: "/assets/images/handyman.jpg", desc: "General home maintenance, carpentry & minor repairs", tag: "General Maintenance" },
  { name: "Remodeling", image: "/assets/images/remodeling.jpg", desc: "Kitchen remodels, bathroom revamps & home additions", tag: "Design & Build" },
  { name: "Landscapers", image: "/assets/images/landscapers.jpg", desc: "Lawn care, landscape architecture & tree services", tag: "Outdoor Living" },
  { name: "Pressure Washing", image: "/assets/images/pressure-washing.jpg", desc: "Driveway sealing, siding wash & roof soft-washing", tag: "Surface Restoration" },
  { name: "Pest Control", image: "/assets/images/pest-control.jpg", desc: "Termite eradication, barrier treatments & rodent control", tag: "Extermination" },
  { name: "Flooring & Carpet", image: "/assets/images/flooring-carpet-cleaning.jpg", desc: "Hardwood install, tile restoration & deep carpet extraction", tag: "Flooring & Surfaces" },
  { name: "Windows & Doors", image: "/assets/images/windows-doors.jpg", desc: "Energy-efficient window upgrades & custom exterior doors", tag: "Energy & Security" },
];


// Proof / Review screenshots
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

// FAQs with rewritten copy
const faqs = [
  {
    q: "How fast can our new website and automation engine launch?",
    a: "Most contractor platforms are completely customized, tested, and live within 5 to 7 business days. We do all the heavy lifting, from content creation to tracking setup.",
  },
  {
    q: "Do I need any technical background to manage this system?",
    a: "Absolutely none. You get a simple, unified mobile application where all calls, texts, leads, and reviews appear. If you know how to send a text message on your phone, you already know how to use it.",
  },
  {
    q: "How does the instant missed-call text-back work in practice?",
    a: "Whenever you or your team cannot answer a call (because you are on a roof or talking to a client), our system immediately fires a polite, custom SMS to the caller within 3 seconds. This keeps them from calling your local competitor.",
  },
  {
    q: "Can I keep my current phone number and website domain?",
    a: "Yes! 100%. We seamlessly connect your existing web domain and integrate with your primary phone line without causing any downtime for your business.",
  },
  {
    q: "Are there long-term locked contracts?",
    a: "No long-term handcuffs. We believe in earning your trust month after month through measurable booked jobs and clear ROI.",
  },
];

const partnerLogos = [
  { name: "Google Business Profile", src: "/assets/images/partner-google-business-profile.png", h: "h-9 sm:h-11" },
  { name: "Google Ads", src: "/assets/images/partner-google-ads.png", h: "h-8 sm:h-10" },
  { name: "Meta", src: "/assets/images/partner-meta.png", h: "h-7 sm:h-9" },
  { name: "OpenAI", src: "/assets/images/partner-openai.png", h: "h-7 sm:h-9" },
  { name: "GoDaddy", src: "/assets/images/partner-godaddy.png", h: "h-7 sm:h-9" },
  { name: "Zapier", src: "/assets/images/partner-zapier.png", h: "h-8 sm:h-10" },
  { name: "Twilio", src: "/assets/images/partner-twilio.png", h: "h-8 sm:h-10" },
  { name: "Google Analytics", src: "/assets/images/partner-google-analytics.png", h: "h-9 sm:h-11" },
  { name: "Google Search Console", src: "/assets/images/partner-google-search-console.png", h: "h-8 sm:h-10" },
  { name: "Canva", src: "/assets/images/partner-canva.png", h: "h-9 sm:h-11" },
  { name: "Ahrefs", src: "/assets/images/partner-ahrefs.png", h: "h-8 sm:h-10" },
  { name: "Semrush", src: "/assets/images/partner-semrush.png", h: "h-7 sm:h-9" },
  { name: "Mailgun", src: "/assets/images/partner-mailgun.png", h: "h-8 sm:h-10" },
  { name: "LeadConnector", src: "/assets/images/partner-leadconnector.png", h: "h-7 sm:h-9" },
];

const heroBulletPairs = [
  ["Get found on Google", "Capture more leads"],
  ["Follow up automatically", "Build more 5–star reviews"],
  ["Bring past customers back", "Never miss a customer call"],
];

function MobileTypingBullets() {
  const [pairIdx, setPairIdx] = useState(0);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [phase, setPhase] = useState<"typing1" | "typing2" | "waiting" | "fading">("typing1");

  useEffect(() => {
    const [target1, target2] = heroBulletPairs[pairIdx];
    let timeout: NodeJS.Timeout;

    if (phase === "typing1") {
      if (text1.length < target1.length) {
        timeout = setTimeout(() => {
          setText1(target1.slice(0, text1.length + 1));
        }, 30);
      } else {
        timeout = setTimeout(() => {
          setPhase("typing2");
        }, 120);
      }
    } else if (phase === "typing2") {
      if (text2.length < target2.length) {
        timeout = setTimeout(() => {
          setText2(target2.slice(0, text2.length + 1));
        }, 30);
      } else {
        timeout = setTimeout(() => {
          setPhase("waiting");
        }, 2000);
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => {
        setPhase("fading");
      }, 50);
    } else if (phase === "fading") {
      timeout = setTimeout(() => {
        setText1("");
        setText2("");
        setPairIdx((prev) => (prev + 1) % heroBulletPairs.length);
        setPhase("typing1");
      }, 250);
    }

    return () => clearTimeout(timeout);
  }, [phase, text1, text2, pairIdx]);

  return (
    <div className="flex sm:hidden flex-col justify-center min-h-[58px] mb-6">
      <div
        className={`flex flex-col gap-2.5 transition-all duration-200 ${
          phase === "fading" ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Line 1 */}
        <div className="flex items-center gap-2.5 text-xs font-semibold text-[#101832] h-5">
          <span className="w-4 h-4 rounded-full bg-[#ff7a1a] text-white flex items-center justify-center text-[10px] flex-shrink-0 shadow-sm">
            ✓
          </span>
          <span className="whitespace-nowrap flex items-center">
            {text1}
          </span>
        </div>

        {/* Line 2 */}
        <div className="flex items-center gap-2.5 text-xs font-semibold text-[#101832] h-5">
          <span
            className={`w-4 h-4 rounded-full bg-[#ff7a1a] text-white flex items-center justify-center text-[10px] flex-shrink-0 shadow-sm transition-opacity duration-150 ${
              phase === "typing1" ? "opacity-0" : "opacity-100"
            }`}
          >
            ✓
          </span>
          <span className="whitespace-nowrap flex items-center">
            {text2}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTradeIndex, setActiveTradeIndex] = useState(2);
  const [tradeTouchStartX, setTradeTouchStartX] = useState<number | null>(null);
  const [selectedProofImg, setSelectedProofImg] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeProofIndex, setActiveProofIndex] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handlePrevTrade = () => {
    setActiveTradeIndex((prev) => (prev === 0 ? tradesList.length - 1 : prev - 1));
  };

  const handleNextTrade = () => {
    setActiveTradeIndex((prev) => (prev === tradesList.length - 1 ? 0 : prev + 1));
  };

  const handleTradeTouchStart = (e: React.TouchEvent) => {
    setTradeTouchStartX(e.touches[0].clientX);
  };

  const handleTradeTouchEnd = (e: React.TouchEvent) => {
    if (tradeTouchStartX === null) return;
    const diffX = tradeTouchStartX - e.changedTouches[0].clientX;
    if (diffX > 40) {
      handleNextTrade();
    } else if (diffX < -40) {
      handlePrevTrade();
    }
    setTradeTouchStartX(null);
  };

  const getTradeCardStyle = (idx: number): React.CSSProperties => {
    const totalTrades = tradesList.length;
    let diff = idx - activeTradeIndex;
    if (diff > Math.floor(totalTrades / 2)) diff -= totalTrades;
    if (diff < -Math.floor(totalTrades / 2)) diff += totalTrades;

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
          transform: "translate(calc(-50% - var(--trade-shift, 74%)), -50%) scale(0.85)",
          zIndex: 20,
          opacity: 0.75,
          pointerEvents: "auto",
          cursor: "pointer",
        };
      case 1:
        return {
          transform: "translate(calc(-50% + var(--trade-shift, 74%)), -50%) scale(0.85)",
          zIndex: 20,
          opacity: 0.75,
          pointerEvents: "auto",
          cursor: "pointer",
        };
      case -2:
        return {
          transform: "translate(calc(-50% - calc(var(--trade-shift, 74%) * 1.9)), -50%) scale(0.68)",
          zIndex: 10,
          opacity: 0.25,
          pointerEvents: "auto",
          cursor: "pointer",
        };
      case 2:
        return {
          transform: "translate(calc(-50% + calc(var(--trade-shift, 74%) * 1.9)), -50%) scale(0.68)",
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

  return (
        <div className="flex flex-col w-full overflow-hidden bg-white text-[#101832]">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[680px] lg:min-h-[760px] pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#fffbf7] via-white to-white">
        {/* Ambient Top Glow Orbs (Matching ai-chat-agent ambient shade) */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none"><div className="w-[750px] sm:w-[950px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#ff7a1a]/25 via-[#f97316]/18 to-[#ea580c]/18 rounded-full blur-3xl animate-ambient-1" /></div>
        <div className="absolute top-16 right-0 sm:right-10 pointer-events-none"><div className="w-[540px] h-[440px] bg-gradient-to-bl from-[#ff7a1a]/26 via-[#f97316]/18 to-transparent rounded-full blur-3xl animate-ambient-2" /></div>

        {/* Background Roofer Photo with Smooth Gradient Overlay (Commented out as requested) */}
        {/* 
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-roofer.jpg"
            alt="Contractor working on residential roof"
            className="w-full h-full object-cover object-center lg:object-right opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fffbf7] via-[#fffbf7]/95 lg:via-[#fffbf7]/80 to-transparent w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fffbf7] via-transparent to-transparent" />
        </div>
        */}

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="max-w-4xl flex flex-col items-start">

            {/* Pill Kicker */}


            {/* Paraphrased Main Headline with lighter font weight */}
            <h1 className="flex flex-col mb-6">
              <span className="text-3xl sm:text-4xl lg:text-[53px] font-black tracking-tight uppercase leading-[1.1] mb-3 bg-gradient-to-r from-[#ffae19] via-[#ff6818] to-[#d92323] bg-clip-text text-transparent w-fit">
                WEBSITE & MARKETING SYSTEM
              </span>
              <span className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#101832] leading-snug">
                Built for Contractors.
              </span>
              <span className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#101832] leading-snug">
                Built to Grow
              </span>
            </h1>

            {/* Subhead / Value Statement */}
            <div className="flex flex-col gap-2.5 mb-8 max-w-2xl">
              <p className="text-lg sm:text-xl font-extrabold text-[#101832] leading-snug">
                No OVERCOMMITMENT. No MAGIC formula. Just a SYSTEM that works.
              </p>
              <p className="text-base sm:text-lg text-[#566073] leading-relaxed">
                Marketing isn't magic. We'll give you the tools, build the system, and handle the heavy lifting. Your job is to use it and run your business.
              </p>
            </div>

            {/* Mobile Animated 2-Line Typewriter Bullets */}
            <MobileTypingBullets />

            {/* Desktop Full 2-Column Static Bullets */}
            <ul className="hidden sm:grid grid-cols-2 gap-x-10 gap-y-3.5 text-base font-semibold text-[#101832] mb-9 max-w-2xl">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#ff7a1a] text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                <span>Get found on Google</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#ff7a1a] text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                <span>Capture more leads</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#ff7a1a] text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                <span>Follow up automatically</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#ff7a1a] text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                <span>Build more 5–star reviews</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#ff7a1a] text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                <span>Bring past customers back</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#ff7a1a] text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                <span>Never miss a customer call</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="/book-a-call"
                className="relative group overflow-hidden bg-[#121316] hover:bg-[#20222a] text-white font-bold text-base px-6 py-3.5 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center justify-center gap-3 cursor-pointer"
              >
                <div className="relative z-10 flex items-center -space-x-2.5 flex-shrink-0">
                  <img
                    src="/assets/images/person.webp"
                    alt="Team member"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm relative z-0"
                  />
                  <img
                    src="/assets/images/person2.webp"
                    alt="Team member"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm relative z-10"
                  />
                </div>
                <span className="relative z-10">Book a call</span>
              </Link>

              <button
                type="button"
                className="bg-white hover:bg-gray-50 text-[#101832] font-bold text-base px-6 py-3.5 rounded-[10px] border border-gray-200/90 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-[#101832]" viewBox="0 0 24 24">
                  <path d="M6 4l15 8-15 8V4z" />
                </svg>
                <span>Watch demo</span>
              </button>
            </div>

            {/* 3 Review Badges: Google, Facebook, Trustpilot */}
            {/* Mobile: 3-in-1 Unified Trust Bar | Desktop: 3 Separate Cards */}
            <div className="w-full mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200/80">
              <div className="bg-white border border-gray-200/90 rounded-2xl shadow-xs grid grid-cols-3 divide-x divide-gray-100 py-3.5 px-2 sm:bg-transparent sm:border-0 sm:shadow-none sm:grid-cols-none sm:divide-x-0 sm:p-0 sm:flex sm:flex-wrap sm:items-center sm:gap-6">
                
                {/* Google */}
                <div className="flex flex-col items-center justify-center text-center px-1 py-1 sm:flex-row sm:items-center sm:text-left sm:gap-3.5 sm:bg-white sm:border sm:border-gray-200 sm:rounded-2xl sm:px-5 sm:py-3 sm:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                  <img
                    src="/assets/images/google-logo.png"
                    alt="Google reviews"
                    width="40"
                    height="40"
                    className="w-7 h-7 sm:w-10 sm:h-10 object-contain mb-1 sm:mb-0 flex-shrink-0"
                  />
                  <div className="flex flex-col items-center sm:items-start gap-0.5 sm:gap-1">
                    <span className="text-[12px] sm:text-[15px] font-bold text-[#101832] leading-tight">Google</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-[#f59e0b]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex flex-col items-center justify-center text-center px-1 py-1 sm:flex-row sm:items-center sm:text-left sm:gap-3.5 sm:bg-white sm:border sm:border-gray-200 sm:rounded-2xl sm:px-5 sm:py-3 sm:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                  <img
                    src="/assets/images/facebook-logo.png"
                    alt="Facebook reviews"
                    width="40"
                    height="40"
                    className="w-7 h-7 sm:w-10 sm:h-10 object-contain mb-1 sm:mb-0 flex-shrink-0"
                  />
                  <div className="flex flex-col items-center sm:items-start gap-0.5 sm:gap-1">
                    <span className="text-[12px] sm:text-[15px] font-bold text-[#101832] leading-tight">Facebook</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-[#f59e0b]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trustpilot */}
                <div className="flex flex-col items-center justify-center text-center px-1 py-1 sm:flex-row sm:items-center sm:text-left sm:gap-3.5 sm:bg-white sm:border sm:border-gray-200 sm:rounded-2xl sm:px-5 sm:py-3 sm:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                  <img
                    src="/assets/images/trustpilot-logo.png"
                    alt="Trustpilot reviews"
                    width="40"
                    height="40"
                    className="w-7 h-7 sm:w-10 sm:h-10 object-contain mb-1 sm:mb-0 flex-shrink-0"
                  />
                  <div className="flex flex-col items-center sm:items-start gap-0.5 sm:gap-1">
                    <span className="text-[12px] sm:text-[15px] font-bold text-[#101832] leading-tight">Trustpilot</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-[#f59e0b]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INSIDE THE SYSTEM SECTION (6 FEATURE ARTICLES WITH GIFS) */}
      {/* ========================================================================= */}
      <section id="system" className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8">

          {/* Section Header */}
          <div className="text-center max-w-5xl mx-auto mb-20 sm:mb-28">
            <span className="text-[#ea580c] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
              Inside The Rendro Systems Platform
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-bold tracking-tight text-[#101832] leading-[1.18] mb-5">
              Practical systems built for real results.<br className="hidden sm:inline" />{" "}
              Zero technical headaches, just booked jobs.
            </h2>
            <p className="text-base sm:text-lg text-[#566073] max-w-2xl mx-auto">
              Every module is designed specifically to solve the biggest growth bottlenecks trade contractors face every day.
            </p>
          </div>

          <div className="flex flex-col gap-28 sm:gap-36">

            {/* Feature 1: Functional Website */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 flex items-center justify-center bg-white">
                <div className="w-full max-w-[460px] sm:max-w-[500px] mx-auto flex items-center justify-center">
                  <img
                    src="/assets/gif/functional-site.gif"
                    alt="Functional contractor website mockup"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-2">Core Foundation</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  Functional Contractor Website
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  Get a modern, conversion-focused site that turns casual web browsers into direct text inquiries delivered straight to your phone.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Establish Real Credibility:</strong> When someone looks up your company, make a world-class impression that commands higher job prices.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Showcase Best Client Reviews:</strong> Prominently display verified customer ratings so newcomers feel immediate confidence.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Built For Smartphone Users:</strong> Over 75% of homeowners look for home repairs on their phones — your site looks razor sharp on all devices.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Optimized For Local Searches:</strong> Pre-configured with local schema and SEO best practices to attract nearby customers.</div>
                  </li>
                </ul>
                <Link
                  href="/functional-website"
                  className="relative group overflow-hidden bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-6 py-3 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center gap-2 cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-[#2b2d35] to-[#14151a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
                  />
                  <span className="relative z-10">Learn More About Websites</span>
                </Link>
              </div>
            </article>

            {/* Feature 2: 24/7 AI Chat Agent (Reversed) */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-2">Instant Lead Capture</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  24/7 Intelligent AI Chat Agent
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  Homeowners have questions at night and over weekends, but few want to call right away. Our custom AI answers instantly and secures their project info.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Zero Waiting Time:</strong> Responds to questions in under 2 seconds so prospective clients never leave for another provider.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Captures Full Project Details:</strong> Gathers name, street address, job description, and urgency automatically.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Direct Phone Notification:</strong> As soon as a lead submits their details, you receive an immediate text on your phone.</div>
                  </li>
                </ul>
                <Link
                  href="/ai-chat-agent"
                  className="relative group overflow-hidden bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-6 py-3 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center gap-2 cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-[#2b2d35] to-[#14151a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
                  />
                  <span className="relative z-10">Explore AI Chat Agent</span>
                </Link>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 flex items-center justify-center bg-white">
                <div className="w-full max-w-[460px] sm:max-w-[500px] mx-auto flex items-center justify-center">
                  <img
                    src="/assets/gif/ai-agent.gif"
                    alt="AI Chat assistant answering contractor leads"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </article>

            {/* Feature 3: Missed Call Text Back */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 flex items-center justify-center bg-white">
                <div className="w-full max-w-[460px] sm:max-w-[500px] mx-auto flex items-center justify-center">
                  <img
                    src="/assets/gif/missed-call.gif"
                    alt="Automatic missed call text back message"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-2">Revenue Protection</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  Missed Call Text Back
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  62% of calls to contractors go unanswered when crews are on jobsites. Rather than losing the job to the next guy, our system texts them immediately.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Immediate Response:</strong> Sends an automated SMS within seconds: “Hi, sorry we missed your call! How can our crew help?”</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Stops The Shopping Cycle:</strong> Homeowners stop calling down the Google search list because you engaged them first.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Two-Way Conversation:</strong> Homeowners reply with their project specs so you can respond whenever you step off the ladder.</div>
                  </li>
                </ul>
                <Link
                  href="/missed-call-text-back"
                  className="relative group overflow-hidden bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-6 py-3 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center gap-2 cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-[#2b2d35] to-[#14151a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
                  />
                  <span className="relative z-10">See Missed Call Workflow</span>
                </Link>
              </div>
            </article>

            {/* Feature 4: Review Funnel (Reversed) */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-2">Reputation Engine</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  5-Star Review Funnel
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  Online reviews make or break contractor pricing power. Automatically collect high-volume, 5-star Google feedback from happy homeowners after every job.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Hands-Free Requests:</strong> Timed text requests go out automatically when an invoice is marked paid.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Direct Google Review Links:</strong> One tap takes happy clients straight to your review form with zero friction.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Boost Local Google Rank:</strong> A high steady volume of 5-star ratings is the #1 ranking factor for Google Maps.</div>
                  </li>
                </ul>
                <Link
                  href="/review-funnel"
                  className="relative group overflow-hidden bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-6 py-3 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center gap-2 cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-[#2b2d35] to-[#14151a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
                  />
                  <span className="relative z-10">Discover Review Funnel</span>
                </Link>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 flex items-center justify-center bg-white">
                <div className="w-full max-w-[460px] sm:max-w-[500px] mx-auto flex items-center justify-center">
                  <img
                    src="/assets/gif/review-funnel.gif"
                    alt="Automatic 5-star review collection funnel"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </article>

            {/* Feature 5: One-Click Campaigns */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 flex items-center justify-center bg-white">
                <div className="w-full max-w-[460px] sm:max-w-[500px] mx-auto flex items-center justify-center">
                  <img
                    src="/assets/gif/campaign.gif"
                    alt="One-click database customer campaigns"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-2">Repeat Revenue</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  One-Click Customer Campaigns
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  Have a light schedule next week? Instantly reactivate past clients with seasonal tune-up specials, gutter cleaning promos, or annual maintenance reminders.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Fill Slow Seasons Fast:</strong> Send targeted SMS offers to 100s of past clients in literally under 60 seconds.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Pre-Written Contractor Templates:</strong> Proven copy crafted to generate bookings without sounding like spam.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Pure Profit:</strong> Zero ad spend required — leverage the client relationships you have already built.</div>
                  </li>
                </ul>
                <Link
                  href="/one-click-campaigns"
                  className="relative group overflow-hidden bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-6 py-3 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center gap-2 cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-[#2b2d35] to-[#14151a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
                  />
                  <span className="relative z-10">Explore Reactivation Campaigns</span>
                </Link>
              </div>
            </article>

            {/* Feature 6: Local SEO (Reversed) */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-2">Search Dominance</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  Dominant Local Google SEO
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  Capture high-intent homeowners at the exact second they search for emergency repairs or home remodeling in your specific zip codes.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Google Map Pack Top 3:</strong> Position your business where 70% of phone calls originate on Google Maps.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">Service Area Landing Pages:</strong> Dedicated pages for every town and community you want to win work in.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#ea580c] font-bold">High-Intent Inbound Calls:</strong> Genuine homeowners actively looking for work, not low-quality tire-kickers.</div>
                  </li>
                </ul>
                <Link
                  href="/local-seo"
                  className="relative group overflow-hidden bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-6 py-3 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center gap-2 cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-[#2b2d35] to-[#14151a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
                  />
                  <span className="relative z-10">See Local SEO Blueprint</span>
                </Link>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 flex items-center justify-center bg-white">
                <div className="w-full max-w-[460px] sm:max-w-[500px] mx-auto flex items-center justify-center">
                  <img
                    src="/assets/gif/seo.gif"
                    alt="Local SEO Google maps rankings demonstration"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRADES WE SERVE COVERFLOW CAROUSEL (IDENTICAL TO REVIEWS CAROUSEL)    */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#101832] text-white relative overflow-hidden">


        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Engineered specifically for trade &amp; contractor businesses
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Whether you install roofs, remodel bathrooms, or provide emergency HVAC repair, our system is tailored to your exact project workflow.
            </p>
          </div>

          {/* Coverflow Carousel Stage */}
          <div className="relative max-w-6xl mx-auto">

            {/* Slider viewport */}
            <div
              className="relative w-full h-[480px] sm:h-[530px] md:h-[560px] overflow-hidden flex items-center justify-center select-none [--trade-shift:74%] sm:[--trade-shift:95%] md:[--trade-shift:104%]"
              onTouchStart={handleTradeTouchStart}
              onTouchEnd={handleTradeTouchEnd}
            >
              {/* Previous Button (Floating Left) */}
              <button
                type="button"
                onClick={handlePrevTrade}
                className="absolute left-1 sm:left-3 md:left-6 z-40 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-gradient-to-b from-[#1e2026] to-[#0f1013] hover:from-[#2b2d36] hover:to-[#16171c] text-white flex items-center justify-center flex-shrink-0 border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous trade"
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
                onClick={handleNextTrade}
                className="absolute right-1 sm:right-3 md:right-6 z-40 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-gradient-to-b from-[#1e2026] to-[#0f1013] hover:from-[#2b2d36] hover:to-[#16171c] text-white flex items-center justify-center flex-shrink-0 border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Next trade"
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

              {/* Carousel Trade Cards */}
              {tradesList.map((trade, idx) => {
                const totalTrades = tradesList.length;
                let diff = idx - activeTradeIndex;
                if (diff > Math.floor(totalTrades / 2)) diff -= totalTrades;
                if (diff < -Math.floor(totalTrades / 2)) diff += totalTrades;

                const isCenter = diff === 0;

                return (
                  <div
                    key={trade.name}
                    style={getTradeCardStyle(idx)}
                    onClick={() => setActiveTradeIndex(idx)}
                    className="absolute top-1/2 left-1/2 w-[255px] xs:w-[275px] sm:w-[340px] md:w-[375px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] select-none"
                  >
                    <div
                      className={`w-full rounded-3xl overflow-hidden bg-white text-[#101832] transition-all duration-300 border ${isCenter
                        ? "shadow-2xl border-white"
                        : "shadow-xl border-gray-200/50"
                        }`}
                    >
                      {/* Trade Image */}
                      <div className="relative h-48 sm:h-56 md:h-60 w-full overflow-hidden bg-gray-100">
                        <img
                          src={trade.image}
                          alt={trade.name}
                          draggable={false}
                          className="w-full h-full object-cover transition-transform duration-500 select-none pointer-events-none"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#101832]/85 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/10">
                          {trade.tag}
                        </div>
                      </div>

                      {/* Trade Details */}
                      <div className="p-6 sm:p-7 flex flex-col items-center text-center bg-white">
                        <h3 className="text-2xl sm:text-3xl font-black text-[#101832] mb-2 tracking-tight">
                          {trade.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#566073] leading-relaxed line-clamp-2 mb-4">
                          {trade.desc}
                        </p>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold border border-[#fed7aa]">
                          <span>Tailored Automation</span>
                          <span>✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              {tradesList.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveTradeIndex(dotIdx)}
                  aria-label={`Go to trade ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${dotIdx === activeTradeIndex
                    ? "w-8 h-2.5 bg-[#ff7a1a]"
                    : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. STREAMLINED THREE-STEP PROCESS SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="process">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#ff7a1a]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-[#ff7a1a]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7a1a]/10 text-[#ea580c] border border-[#ff7a1a]/20 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              Three Simple Steps. Zero Drama.
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-4">
              From first conversation to fully live.
            </h2>
            <p className="text-[#566073] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We understand your trade, construct your complete automation system, and launch it without turning your busy workweek into a marathon of meetings.
            </p>
          </div>

          {/* 3 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

            {/* Step 1 */}
            <article className="relative bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/70 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff7a1a] to-[#ea580c] group-hover:h-1.5 transition-all duration-300" />
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-[#121316] text-white font-extrabold text-lg flex items-center justify-center border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] flex-shrink-0">
                    01
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold tracking-wide border border-[#ff7a1a]/15">
                    15–20 min intro
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101832] mb-3">
                  Discovery & Blueprint
                </h3>
                <p className="text-[#566073] text-sm sm:text-base leading-relaxed">
                  You walk us through your current trade setup and business goals. We ask practical questions to tailor the exact system — no 40-slide sales pitches.
                </p>
              </div>
            </article>

            {/* Step 2 */}
            <article className="relative bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/70 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff7a1a] to-[#ea580c] group-hover:h-1.5 transition-all duration-300" />
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-[#121316] text-white font-extrabold text-lg flex items-center justify-center border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] flex-shrink-0">
                    02
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold tracking-wide border border-[#ff7a1a]/15">
                    5–7 day turnaround
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101832] mb-3">
                  Architecture & Assembly
                </h3>
                <p className="text-[#566073] text-sm sm:text-base leading-relaxed">
                  You send over the basics (logo, photos & services). Our team builds your high-converting website, 24/7 AI chat agent, missed-call auto-text, and review engine.
                </p>
              </div>
            </article>

            {/* Step 3 */}
            <article className="relative bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/70 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff7a1a] to-[#ea580c] group-hover:h-1.5 transition-all duration-300" />
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-[#121316] text-white font-extrabold text-lg flex items-center justify-center border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] flex-shrink-0">
                    03
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold tracking-wide border border-[#ff7a1a]/15">
                    20–25 min handover
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101832] mb-3">
                  Walkthrough & Live Launch
                </h3>
                <p className="text-[#566073] text-sm sm:text-base leading-relaxed">
                  We test all workflows together, verify leads arriving on your mobile app, and hit the switch. Your automated growth system is live and working for you.
                </p>
              </div>
            </article>

          </div>

          {/* Bottom CTA prompt inside section */}
          <div className="mt-14 sm:mt-16 flex justify-center w-full px-4">
            <Link
              href="/book-a-call"
              className="relative group overflow-hidden inline-flex items-center justify-center text-center gap-2 bg-[#121316] hover:bg-[#20222a] text-white font-bold text-[11px] min-[390px]:text-xs sm:text-sm px-3.5 min-[390px]:px-5 sm:px-8 py-3 sm:py-4 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out whitespace-nowrap cursor-pointer"
            >
              <span className="relative z-10">Schedule Step 1: Your Free Discovery Call</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VERIFIED TECHNOLOGY PARTNERS / INTEGRATIONS */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-20 sm:pb-24 bg-[#101832] text-white">
        {/* Custom Smooth Wave Transition (distinct from the reference site's sharp notch) */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="relative block w-full h-7 sm:h-12 text-white fill-current"
          >
            <path d="M0,0 C480,50 960,50 1440,0 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1140px] mx-auto px-6 sm:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-12 sm:mb-14">
            Just so you know you're in trusted hands,<br className="hidden sm:inline" />
            we partner & integrate with...
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-7 sm:gap-10 lg:gap-12 max-w-4xl mx-auto">
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center p-2"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`${logo.h} w-auto object-contain opacity-85 hover:opacity-100 transition-opacity`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. REAL CLIENT RESULTS / CONVERSATIONS PROOF SECTION (SCREENSHOT 3) */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#fffbf7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-4">
              Authentic Results. Real Client Conversations.
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              Browse actual text messages and feedback sent directly by active trade businesses using our system.
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
                className="absolute left-1 sm:left-3 md:left-6 z-40 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[#121316] hover:bg-[#20222a] text-white flex items-center justify-center flex-shrink-0 border border-white/12 hover:border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
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
                className="absolute right-1 sm:right-3 md:right-6 z-40 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[#121316] hover:bg-[#20222a] text-white flex items-center justify-center flex-shrink-0 border border-white/12 hover:border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
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
                      className={`w-full h-full rounded-[22px] sm:rounded-[26px] bg-white border border-gray-200/90 transition-shadow duration-300 overflow-hidden ${diff === 0
                        ? "shadow-[0_25px_60px_rgba(0,0,0,0.18)] ring-2 ring-black/5"
                        : "shadow-md"
                        }`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        draggable={false}
                        className="w-full h-full object-cover rounded-[21px] sm:rounded-[25px] block select-none pointer-events-none"
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
                  className={`transition-all duration-300 rounded-full cursor-pointer ${dotIdx === activeProofIndex
                    ? "w-8 h-2.5 bg-[#ff7a1a]"
                    : "w-2.5 h-2.5 bg-[#ff7a1a]/25 hover:bg-[#ff7a1a]/50"
                    }`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

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
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-lg"
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
              Real client communication snapshot from Rendro Systems platform
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. WHY CONTRACTORS CHOOSE RENDRO SYSTEMS (COMPARISON TABLE / VALUE PROP) */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Why We Are Different
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-4">
              Traditional Marketing Agencies vs. Rendro Systems
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              Why hundreds of trade business owners ditch outdated retainers for a dedicated automation infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

            {/* The Old Way */}
            <div className="bg-[#fef4f4] rounded-3xl p-6 sm:p-8 border border-red-100 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-start gap-3.5 mb-5">
                  <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-red-950 leading-snug">Traditional Agencies & Web Freelancers</h3>
                </div>
                <ul className="flex flex-col gap-3.5 text-sm text-red-900/80">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Takes 3 to 6 months to launch an overpriced, static website with zero guarantees</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Zero missed-call automation — over 60% of incoming paid leads vanish forever</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">•</span>
                    <span>No 24/7 AI chat — homeowners leave for competitors when you are off the clock</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Huge monthly retainers with confusing vanity reports and zero accountability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Rendro Systems Way */}
            <div className="bg-[#fff7ed] rounded-3xl p-6 sm:p-8 border border-orange-200 shadow-lg flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#ff7a1a] text-white text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider">
                Recommended
              </div>
              <div>
                <div className="flex items-start gap-3.5 mb-5">
                  <span className="w-6 h-6 rounded-full bg-[#ff7a1a] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#101832] leading-snug">The Rendro Systems Ecosystem</h3>
                </div>
                <ul className="flex flex-col gap-3.5 text-sm text-[#101832]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#ea580c] font-bold">✓</span>
                    <span>Custom built, optimized, and launched in just 5–7 business days</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#ea580c] font-bold">✓</span>
                    <span>Instant 3-second missed call text-back keeps every caller engaged</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#ea580c] font-bold">✓</span>
                    <span>Custom AI assistant answers inquiries and collects lead data 24/7</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#ea580c] font-bold">✓</span>
                    <span>Automated 5-star Google review funnel that skyrockets your map rankings</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQS ACCORDION SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#fffbf7]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">

          <div className="text-center mb-16">
            <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-4">
              Common questions answered
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              Everything you need to know about partnering with Rendro Systems.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden transition-all hover:border-[#ff7a1a]/40 hover:shadow-md cursor-pointer"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#101832] hover:text-[#ea580c] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-4 h-4 text-[#ea580c] transition-transform duration-200 ease-out origin-center ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        <line x1="12" y1="6" x2="12" y2="18" />
                        <line x1="6" y1="12" x2="18" y2="12" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#566073] leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL HIGH-CONVERTING CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#101832] text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Stop losing high-ticket jobs to your local competitors.
          </h2>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl leading-relaxed mb-10">
            Schedule a brief 15-minute discovery session today. We will show you exactly where your current website is leaking leads and how our automated engine turns missed opportunities into revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto max-w-md sm:max-w-none">
            <Link
              href="/book-a-call"
              className="relative group overflow-hidden w-full sm:w-auto bg-[#121316] hover:bg-[#20222a] text-white font-bold text-xs min-[360px]:text-[13px] sm:text-base px-6 min-[360px]:px-7 sm:px-9 py-3.5 sm:py-4 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_8px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-[#2b2d35] to-[#14151a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
              />
              <span className="relative z-10">Book Your Free Growth Strategy Call</span>
            </Link>

            <a
              href="tel:+18888100013"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-semibold text-xs min-[360px]:text-[13px] sm:text-base px-5 sm:px-8 py-3.5 sm:py-4 rounded-[10px] border border-white/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Call Us: (888) 810-0013</span>
            </a>
          </div>
        </div>
      </section>

        </div>

  );
}
