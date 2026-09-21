"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Trade Items for Carousel (12 trades across 2 pages)
const tradePages = [
  // Page 1
  [
    { name: "Roofing", image: "/assets/images/roofing.jpg", desc: "Roof replacement, storm repairs & inspections" },
    { name: "Plumbing", image: "/assets/images/plumbing.jpg", desc: "Emergency calls, repiping & water heater installs" },
    { name: "HVAC", image: "/assets/images/hvac.jpg", desc: "Heating, ventilation & AC repair and installation" },
    { name: "Electrician", image: "/assets/images/electrician.jpg", desc: "Panel upgrades, EV chargers & residential wiring" },
    { name: "Painters", image: "/assets/images/painters.jpg", desc: "Interior, exterior & cabinet refinishing projects" },
    { name: "Handyman", image: "/assets/images/handyman.jpg", desc: "General home maintenance, carpentry & minor repairs" },
  ],
  // Page 2
  [
    { name: "Remodeling", image: "/assets/images/remodeling.jpg", desc: "Kitchen remodels, bathroom revamps & home additions" },
    { name: "Landscapers", image: "/assets/images/landscapers.jpg", desc: "Lawn care, landscape architecture & tree services" },
    { name: "Pressure Washing", image: "/assets/images/pressure-washing.jpg", desc: "Driveway sealing, siding wash & roof soft-washing" },
    { name: "Pest Control", image: "/assets/images/pest-control.jpg", desc: "Termite eradication, quarterly barrier treatments & rodent control" },
    { name: "Flooring & Carpet Cleaning", image: "/assets/images/flooring-carpet-cleaning.jpg", desc: "Hardwood install, tile restoration & deep carpet extraction" },
    { name: "Windows & Doors", image: "/assets/images/windows-doors.jpg", desc: "Energy-efficient window upgrades & custom exterior doors" },
  ],
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

export default function Home() {
  const [currentTradePage, setCurrentTradePage] = useState(0);
  const [selectedProofImg, setSelectedProofImg] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeProofIndex, setActiveProofIndex] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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
          transform: "translate(calc(-50% - 104%), -50%) scale(0.82)",
          zIndex: 20,
          opacity: 0.65,
          pointerEvents: "auto",
          cursor: "pointer",
        };
      case 1:
        return {
          transform: "translate(calc(-50% + 104%), -50%) scale(0.82)",
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
      <section className="relative min-h-[680px] lg:min-h-[760px] pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-[#faf8fd]">
        {/* Background Roofer Photo with Smooth Gradient Overlay - Bleeds to very top under floating navbar */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-roofer.jpg"
            alt="Contractor working on residential roof"
            className="w-full h-full object-cover object-center lg:object-right opacity-90"
          />
          {/* Gradients to keep text crisp on the left while blending photo on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf8fd] via-[#faf8fd]/95 lg:via-[#faf8fd]/80 to-transparent w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf8fd] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="max-w-2xl flex flex-col items-start">
            
            {/* Pill Kicker */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] border border-[#7c35ed]/20 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
              Specialized Contractor Growth Architecture
            </div>

            {/* Paraphrased Main Headline with lighter font weight */}
            <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
              Contractor websites & automated systems engineered to{" "}
              <span className="bg-gradient-to-r from-[#7c35ed] via-[#9055ff] to-[#a855f7] bg-clip-text text-transparent italic font-serif font-normal">
                convert.
              </span>
            </h1>

            {/* Paraphrased Subhead */}
            <p className="text-lg sm:text-xl text-[#566073] leading-relaxed mb-8">
              A streamlined digital infrastructure built for trade contractors to get found in their service area, respond instantly to homeowners, and book more high-ticket projects.
            </p>

            {/* Paraphrased Key Bullets */}
            <ul className="flex flex-col gap-3 text-sm sm:text-base font-semibold text-[#101832] mb-9">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#7c35ed] text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                <span>Stand out prominently whenever local homeowners search for your trade</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#7c35ed] text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                <span>Instantly transform missed calls and visits into qualified text conversations</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#7c35ed] text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                <span>Experience a measurable 2x–3x lift in booked estimates within 90 days</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="/book-a-call"
                className="bg-[#7c35ed] hover:bg-[#6d28d9] text-white text-center font-bold text-base px-8 py-4 rounded-full shadow-[0_12px_28px_rgba(124,58,237,0.35)] hover:shadow-[0_16px_36px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book a Free Discovery Call</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  document.getElementById("system")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white/80 hover:bg-white text-[#101832] text-center font-semibold text-base px-7 py-4 rounded-full border border-gray-200/80 shadow-xs backdrop-blur-sm transition-all cursor-pointer"
              >
                Explore The System
              </button>
            </div>

            {/* 3 Review Badges: Google, Facebook, Trustpilot */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-12 pt-8 border-t border-gray-200/80 w-full">
              {/* Google */}
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-gray-200/70 rounded-xl px-3.5 py-2 shadow-xs">
                <img src="/assets/images/google-logo.png" alt="Google reviews" className="w-6 h-6 object-contain" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#101832] leading-tight">Google</span>
                  <span className="text-[12px] text-amber-500 font-bold leading-none">★★★★★</span>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-gray-200/70 rounded-xl px-3.5 py-2 shadow-xs">
                <img src="/assets/images/facebook-logo.png" alt="Facebook reviews" className="w-6 h-6 object-contain" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#101832] leading-tight">Facebook</span>
                  <span className="text-[12px] text-amber-500 font-bold leading-none">★★★★★</span>
                </div>
              </div>

              {/* Trustpilot */}
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-gray-200/70 rounded-xl px-3.5 py-2 shadow-xs">
                <img src="/assets/images/trustpilot-logo.png" alt="Trustpilot reviews" className="w-6 h-6 object-contain" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#101832] leading-tight">Trustpilot</span>
                  <span className="text-[12px] text-amber-500 font-bold leading-none">★★★★★</span>
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
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-5xl mx-auto mb-20 sm:mb-28">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
              Inside The System Digital Platform
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#7c35ed] mb-2">Core Foundation</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  Functional Contractor Website
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  Get a modern, conversion-focused site that turns casual web browsers into direct text inquiries delivered straight to your phone.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Establish Real Credibility:</strong> When someone looks up your company, make a world-class impression that commands higher job prices.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Showcase Best Client Reviews:</strong> Prominently display verified customer ratings so newcomers feel immediate confidence.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Built For Smartphone Users:</strong> Over 75% of homeowners look for home repairs on their phones — your site looks razor sharp on all devices.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Optimized For Local Searches:</strong> Pre-configured with local schema and SEO best practices to attract nearby customers.</div>
                  </li>
                </ul>
                <Link
                  href="/functional-website"
                  className="bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2"
                >
                  <span>Learn More About Websites</span>
                  <span>→</span>
                </Link>
              </div>
            </article>

            {/* Feature 2: 24/7 AI Chat Agent (Reversed) */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7c35ed] mb-2">Instant Lead Capture</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  24/7 Intelligent AI Chat Agent
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  Homeowners have questions at night and over weekends, but few want to call right away. Our custom AI answers instantly and secures their project info.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Zero Waiting Time:</strong> Responds to questions in under 2 seconds so prospective clients never leave for another provider.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Captures Full Project Details:</strong> Gathers name, street address, job description, and urgency automatically.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Direct Phone Notification:</strong> As soon as a lead submits their details, you receive an immediate text on your phone.</div>
                  </li>
                </ul>
                <Link
                  href="/ai-chat-agent"
                  className="bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2"
                >
                  <span>Explore AI Chat Agent</span>
                  <span>→</span>
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#7c35ed] mb-2">Revenue Protection</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  Missed Call Text Back
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  62% of calls to contractors go unanswered when crews are on jobsites. Rather than losing the job to the next guy, our system texts them immediately.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Immediate Response:</strong> Sends an automated SMS within seconds: “Hi, sorry we missed your call! How can our crew help?”</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Stops The Shopping Cycle:</strong> Homeowners stop calling down the Google search list because you engaged them first.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Two-Way Conversation:</strong> Homeowners reply with their project specs so you can respond whenever you step off the ladder.</div>
                  </li>
                </ul>
                <Link
                  href="/missed-call-text-back"
                  className="bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2"
                >
                  <span>See Missed Call Workflow</span>
                  <span>→</span>
                </Link>
              </div>
            </article>

            {/* Feature 4: Review Funnel (Reversed) */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7c35ed] mb-2">Reputation Engine</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  5-Star Review Funnel
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  Online reviews make or break contractor pricing power. Automatically collect high-volume, 5-star Google feedback from happy homeowners after every job.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Hands-Free Requests:</strong> Timed text requests go out automatically when an invoice is marked paid.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Direct Google Review Links:</strong> One tap takes happy clients straight to your review form with zero friction.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Boost Local Google Rank:</strong> A high steady volume of 5-star ratings is the #1 ranking factor for Google Maps.</div>
                  </li>
                </ul>
                <Link
                  href="/review-funnel"
                  className="bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2"
                >
                  <span>Discover Review Funnel</span>
                  <span>→</span>
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#7c35ed] mb-2">Repeat Revenue</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  One-Click Customer Campaigns
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  Have a light schedule next week? Instantly reactivate past clients with seasonal tune-up specials, gutter cleaning promos, or annual maintenance reminders.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Fill Slow Seasons Fast:</strong> Send targeted SMS offers to 100s of past clients in literally under 60 seconds.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Pre-Written Contractor Templates:</strong> Proven copy crafted to generate bookings without sounding like spam.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Pure Profit:</strong> Zero ad spend required — leverage the client relationships you have already built.</div>
                  </li>
                </ul>
                <Link
                  href="/one-click-campaigns"
                  className="bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2"
                >
                  <span>Explore Reactivation Campaigns</span>
                  <span>→</span>
                </Link>
              </div>
            </article>

            {/* Feature 6: Local SEO (Reversed) */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7c35ed] mb-2">Search Dominance</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#101832] tracking-tight mb-4">
                  Dominant Local Google SEO
                </h3>
                <p className="text-[#566073] text-base sm:text-lg leading-relaxed mb-6">
                  Capture high-intent homeowners at the exact second they search for emergency repairs or home remodeling in your specific zip codes.
                </p>
                <ul className="flex flex-col gap-4 text-sm text-[#566073] mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Google Map Pack Top 3:</strong> Position your business where 70% of phone calls originate on Google Maps.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">Service Area Landing Pages:</strong> Dedicated pages for every town and community you want to win work in.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div><strong className="text-[#101832]">High-Intent Inbound Calls:</strong> Genuine homeowners actively looking for work, not low-quality tire-kickers.</div>
                  </li>
                </ul>
                <Link
                  href="/local-seo"
                  className="bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2"
                >
                  <span>See Local SEO Blueprint</span>
                  <span>→</span>
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
      {/* 3. TRADES WE SERVE INTERACTIVE CAROUSEL (12 TRADES, MATCHING SCREENSHOTS) */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#101832] text-white relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Specialized Industry Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Engineered specifically for trade & contractor businesses
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Whether you install roofs, remodel bathrooms, or provide emergency HVAC repair, our system is tailored to your exact project workflow.
            </p>
          </div>

          {/* Carousel Container with Buttons on Left & Right */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 w-full">
              {/* Prev Button (Left) */}
              <button
                type="button"
                onClick={() => setCurrentTradePage(currentTradePage === 0 ? 1 : 0)}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-[#7c35ed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7c35ed] text-white flex items-center justify-center flex-shrink-0 shadow-[0_8px_24px_rgba(124,58,237,0.45)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.65)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous trades"
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

              {/* Grid Container (6 cards in between) */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 transition-all duration-500">
                {tradePages[currentTradePage].map((trade) => (
                  <div
                    key={trade.name}
                    className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-100">
                      <img
                        src={trade.image}
                        alt={trade.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col items-center text-center bg-white">
                      <h3 className="text-xl sm:text-2xl font-black text-[#101832] mb-1">
                        {trade.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#566073] line-clamp-2">
                        {trade.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Button (Right) */}
              <button
                type="button"
                onClick={() => setCurrentTradePage(currentTradePage === 1 ? 0 : 1)}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-[#7c35ed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7c35ed] text-white flex items-center justify-center flex-shrink-0 shadow-[0_8px_24px_rgba(124,58,237,0.45)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.65)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Next trades"
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
            </div>

            {/* Page Indicators */}
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentTradePage(0)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentTradePage === 0 ? "w-8 bg-[#7c35ed]" : "w-2.5 bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label="Trade page 1"
              />
              <button
                type="button"
                onClick={() => setCurrentTradePage(1)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentTradePage === 1 ? "w-8 bg-[#7c35ed]" : "w-2.5 bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label="Trade page 2"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. STREAMLINED THREE-STEP PROCESS SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="process">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#7c35ed]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-[#9333ea]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] border border-[#7c35ed]/20 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
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
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c35ed] to-[#9333ea] group-hover:h-1.5 transition-all duration-300" />
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7c35ed] to-[#6d28d9] text-white font-extrabold text-lg flex items-center justify-center shadow-[0_6px_16px_rgba(124,58,237,0.35)] flex-shrink-0">
                    01
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold tracking-wide border border-[#7c35ed]/15">
                    15–20 min intro
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101832] mb-3 group-hover:text-[#7c35ed] transition-colors">
                  Discovery & Blueprint
                </h3>
                <p className="text-[#566073] text-sm sm:text-base leading-relaxed">
                  You walk us through your current trade setup and business goals. We ask practical questions to tailor the exact system — no 40-slide sales pitches.
                </p>
              </div>
            </article>

            {/* Step 2 */}
            <article className="relative bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/70 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c35ed] via-[#9333ea] to-[#c084fc] group-hover:h-1.5 transition-all duration-300" />
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7c35ed] to-[#6d28d9] text-white font-extrabold text-lg flex items-center justify-center shadow-[0_6px_16px_rgba(124,58,237,0.35)] flex-shrink-0">
                    02
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold tracking-wide border border-[#7c35ed]/15">
                    5–7 day turnaround
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101832] mb-3 group-hover:text-[#7c35ed] transition-colors">
                  Architecture & Assembly
                </h3>
                <p className="text-[#566073] text-sm sm:text-base leading-relaxed">
                  You send over the basics (logo, photos & services). Our team builds your high-converting website, 24/7 AI chat agent, missed-call auto-text, and review engine.
                </p>
              </div>
            </article>

            {/* Step 3 */}
            <article className="relative bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/70 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9333ea] to-[#c084fc] group-hover:h-1.5 transition-all duration-300" />
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7c35ed] to-[#6d28d9] text-white font-extrabold text-lg flex items-center justify-center shadow-[0_6px_16px_rgba(124,58,237,0.35)] flex-shrink-0">
                    03
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold tracking-wide border border-[#7c35ed]/15">
                    20–25 min handover
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#101832] mb-3 group-hover:text-[#7c35ed] transition-colors">
                  Walkthrough & Live Launch
                </h3>
                <p className="text-[#566073] text-sm sm:text-base leading-relaxed">
                  We test all workflows together, verify leads arriving on your mobile app, and hit the switch. Your automated growth system is live and working for you.
                </p>
              </div>
            </article>

          </div>

          {/* Bottom CTA prompt inside section */}
          <div className="mt-14 sm:mt-16 text-center">
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-sm px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.45)] hover:scale-102 transition-all group"
            >
              <span>Schedule Step 1: Your Free Discovery Call</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
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

        {/* Ambient background glow & top purple accent line */}
        <div className="absolute top-10 sm:top-14 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-[1.5px] bg-gradient-to-r from-transparent via-[#7c35ed] to-transparent shadow-[0_0_12px_rgba(124,58,237,0.8)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#7c35ed]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1140px] mx-auto px-6 sm:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7c35ed]/20 text-[#c084fc] border border-[#7c35ed]/30 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] animate-pulse" />
            Verified Tech Ecosystem
          </div>
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
      <section className="py-24 sm:py-32 bg-[#faf8fd]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Verified Contractor Results
            </span>
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
              className="relative w-full h-[520px] sm:h-[610px] md:h-[670px] lg:h-[720px] overflow-hidden flex items-center justify-center select-none"
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
              Real client communication snapshot from System Digital platform
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. WHY CONTRACTORS CHOOSE SYSTEM DIGITAL (COMPARISON TABLE / VALUE PROP) */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Why We Are Different
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-4">
              Traditional Marketing Agencies vs. System Digital
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              Why hundreds of trade business owners ditch outdated retainers for a dedicated automation infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* The Old Way */}
            <div className="bg-[#fef4f4] rounded-3xl p-8 border border-red-100 shadow-sm flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center">✕</span>
                <h3 className="text-xl font-bold text-red-950">Traditional Agencies & Web Freelancers</h3>
              </div>
              <ul className="flex flex-col gap-3.5 text-sm text-red-900/80">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Takes 3 to 6 months to launch an overpriced, static website</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Zero missed-call automation — over 60% of paid ad leads vanish</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>No 24/7 AI chat — homeowners leave your site when you are off the clock</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Huge monthly retainers with confusing reports and zero accountability</span>
                </li>
              </ul>
            </div>

            {/* The System Digital Way */}
            <div className="bg-[#f5f3ff] rounded-3xl p-8 border border-purple-200 shadow-lg flex flex-col gap-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#7c35ed] text-white text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider">
                Recommended
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#7c35ed] text-white font-bold flex items-center justify-center">✓</span>
                <h3 className="text-xl font-bold text-[#101832]">The System Digital Ecosystem</h3>
              </div>
              <ul className="flex flex-col gap-3.5 text-sm text-[#101832]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#7c35ed] font-bold">✓</span>
                  <span>Custom built, optimized, and launched in just 5–7 business days</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#7c35ed] font-bold">✓</span>
                  <span>Instant 3-second missed call text-back keeps every caller engaged</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#7c35ed] font-bold">✓</span>
                  <span>Custom AI assistant answers inquiries and collects lead data 24/7</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#7c35ed] font-bold">✓</span>
                  <span>Automated 5-star Google review funnel that skyrockets your map rankings</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQS ACCORDION SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#faf8fd]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          
          <div className="text-center mb-16">
            <span className="text-[#7c35ed] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-4">
              Common questions answered
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              Everything you need to know about partnering with System Digital.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden transition-all hover:border-[#7c35ed]/40 hover:shadow-md cursor-pointer"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#101832] hover:text-[#7c35ed] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`text-[#7c35ed] text-2xl flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
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
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#7c35ed]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#7c35ed]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/15 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-ping" />
            Ready To Fill Your Project Board?
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Stop losing high-ticket jobs to your local competitors.
          </h2>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl leading-relaxed mb-10">
            Schedule a brief 15-minute discovery session today. We will show you exactly where your current website is leaking leads and how our automated engine turns missed opportunities into revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/book-a-call"
              className="w-full sm:w-auto bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-base px-9 py-4 rounded-full shadow-[0_12px_28px_rgba(124,58,237,0.4)] hover:shadow-[0_16px_36px_rgba(124,58,237,0.6)] hover:scale-102 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Book Your Free Growth Strategy Call</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <a
              href="tel:+18888100013"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Call Us: (888) 810-0013</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
