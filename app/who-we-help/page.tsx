"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WhoWeHelpPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tradeCategories = [
    {
      id: "exterior",
      categoryName: "Roofing & Exteriors",
      badge: "Exterior Crews",
      headline: "Big-ticket projects, severe storm calls, and homeowners needing instant proof of craftsmanship.",
      image: "/assets/images/roofing.jpg",
      trades: [
        { name: "Residential & Commercial Roofers", highlight: "Storm damage, emergency leak patches & complete replacements" },
        { name: "Siding & Gutter Contractors", highlight: "Seamless gutters, vinyl/fiber-cement siding & storm wrap" },
        { name: "Window & Exterior Door Installers", highlight: "Energy-efficient upgrades, custom sliders & entry door framing" },
        { name: "Custom Deck & Patio Builders", highlight: "Composite decking, pergolas & outdoor architectural framing" },
      ],
    },
    {
      id: "systems",
      categoryName: "HVAC, Plumbing & Electrical",
      badge: "Home Systems",
      headline: "When critical home systems break, customers don't browse for fun. They call the first business they trust.",
      image: "/assets/images/hvac.jpg",
      trades: [
        { name: "HVAC Heating & Cooling Specialists", highlight: "Seasonal AC tune-ups, furnace replacements & emergency repairs" },
        { name: "Licensed Residential Plumbers", highlight: "Water heater burst calls, sewer camera line repairs & repiping" },
        { name: "Master Electricians", highlight: "200A electrical panel upgrades, EV chargers & whole-home rewiring" },
        { name: "Pest & Termite Control Crews", highlight: "Quarterly perimeter barriers, termite eradication & wildlife exclusion" },
      ],
    },
    {
      id: "interior",
      categoryName: "Remodeling & Interior Crafts",
      badge: "Inside The Home",
      headline: "Highly visual work, longer decision cycles, and homeowners looking for dependable, licensed pros.",
      image: "/assets/images/remodeling.jpg",
      trades: [
        { name: "Kitchen & Bathroom Remodelers", highlight: "Turnkey layout renovations, custom tile work & luxury vanity builds" },
        { name: "Interior & Exterior Painters", highlight: "Cabinet spray finishing, trim work & whole-house repaints" },
        { name: "Finish Carpenters & Handyman Crews", highlight: "Drywall repairs, door hanging, punch-lists & structural fixes" },
        { name: "Flooring, Tile & Carpet Installers", highlight: "Hardwood refinishing, waterproof LVP laying & porcelain tile" },
      ],
    },
    {
      id: "outdoor",
      categoryName: "Landscaping & Property Services",
      badge: "Outside The Home",
      headline: "High seasonal surges, dramatic before-and-after transformations, and hyper-local route density.",
      image: "/assets/images/landscapers.jpg",
      trades: [
        { name: "Landscape Design & Hardscaping", highlight: "Paver driveways, retaining walls, sodding & irrigation install" },
        { name: "Pressure Washing & Soft Washing", highlight: "Driveway degreasing, exterior roof wash & commercial concrete" },
        { name: "Tree Care & Removal Arborists", highlight: "Hazardous tree removals, crane work & storm cleanup" },
        { name: "Pool Maintenance & Renovation", highlight: "Gunite resurfacing, equipment repairs & weekly care routes" },
      ],
    },
    {
      id: "general",
      categoryName: "General Contractors & Builders",
      badge: "Project Logistics",
      headline: "Complex multi-stage contracts that require unwavering homeowner trust and organized lead intake.",
      image: "/assets/images/handyman.jpg",
      trades: [
        { name: "Custom Home & Addition Builders", highlight: "Second-story add-ons, ADUs & architectural ground-up builds" },
        { name: "Commercial Fit-Out Contractors", highlight: "Retail tenant build-outs, office renovations & structural framing" },
        { name: "Damage Restoration & Mitigation", highlight: "24/7 water extraction, smoke drying & mold remediation insurance work" },
        { name: "Foundation & Waterproofing Teams", highlight: "Crawl space encapsulation, French drains & basement sealing" },
      ],
    },
  ];

  const filteredCategories =
    activeTab === "all"
      ? tradeCategories
      : tradeCategories.filter((cat) => cat.id === activeTab);

  const fitCriteria = [
    {
      num: "01",
      title: "You Serve A Defined Local Territory",
      desc: "Your most profitable jobs come from homeowners within driving radius of your trucks—not three states away. We build your local map prominence where your crews actually work.",
    },
    {
      num: "02",
      title: "Conversations Turn Directly Into Paid Jobs",
      desc: "A responsive 3-minute phone call or instant text exchange transforms into a paid diagnostic, an on-site quote, or an immediately scheduled service call.",
    },
    {
      num: "03",
      title: "Your Days Happen On Job Sites, Not Desks",
      desc: "Your crew is on roofs, under crawlspaces, and behind steering wheels. You don't have time to sit in an office monitoring incoming chat pings or tracking down sent estimates.",
    },
    {
      num: "04",
      title: "Verified Proof & Reviews Win The Quote",
      desc: "Homeowners choose you over competitors because of spotless 5-star Google reviews, crisp project photos, and transparent communication from the first hello.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white text-[#101832]">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-14 bg-[#faf8fd]">
        <div className="absolute inset-0 z-0 opacity-40 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#7c35ed]/20 via-[#9055ff]/10 to-transparent blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] border border-[#7c35ed]/20 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
            Built Strictly For Trade Contractors
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-[#101832] leading-[1.12] mb-6 max-w-4xl">
            Engineered for real crews.{" "}
            <span className="bg-gradient-to-r from-[#7c35ed] via-[#9055ff] to-[#a855f7] bg-clip-text text-transparent italic font-serif font-normal">
              Not conference rooms.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#566073] max-w-2xl leading-relaxed mb-10">
            We partner exclusively with local businesses that run on trucks, tools, quotes, and homeowners who always call at the least convenient moment.
          </p>

          {/* CTA & Anchor Link */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/book-a-call"
              className="bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-8 py-4 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center gap-2 group cursor-pointer"
            >
              <span>Book a Discovery Call</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>

            <a
              href="#trades-grid"
              className="px-6 py-4 rounded-[10px] border border-gray-200 text-sm font-bold text-[#101832] hover:border-[#101832] transition-colors cursor-pointer"
            >
              Explore Supported Trades &darr;
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* STICKY CATEGORY FILTER NAVIGATION BAR (Sticks under header, horizontal swipe on mobile) */}
      {/* ========================================================================= */}
      <nav
        aria-label="Trade categories quick filter"
        className="sticky top-[80px] sm:top-[88px] z-30 py-3 bg-[#faf8fd]/95 backdrop-blur-md border-y border-gray-200/70 transition-all shadow-2xs"
      >
        <div className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 sm:px-6">
          <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max mx-auto">
            {[
              { id: "all", label: "All 20+ Trades" },
              { id: "exterior", label: "Roofing & Exterior" },
              { id: "systems", label: "HVAC, Plumbing & Electric" },
              { id: "interior", label: "Remodeling & Interior" },
              { id: "outdoor", label: "Landscaping & Property" },
              { id: "general", label: "General Contracting" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  const grid = document.getElementById("trades-grid");
                  if (grid) {
                    const yOffset = -140;
                    const y = grid.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.id
                    ? "bg-[#7c35ed] text-white shadow-sm"
                    : "bg-white text-[#566073] hover:text-[#7c35ed] hover:border-[#7c35ed]/40 border border-gray-200 shadow-2xs"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 2. DETAILED TRADES DIRECTORY */}
      {/* ========================================================================= */}
      <section id="trades-grid" className="py-16 sm:py-20 bg-white scroll-mt-[140px]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
          
          {filteredCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className="rounded-3xl border border-gray-200 bg-[#faf8fd]/50 hover:bg-[#faf8fd] transition-all p-8 sm:p-12 shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Category Narrative */}
                <div className="lg:col-span-5 flex flex-col">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#7c35ed]">
                    {cat.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101832] mt-1 mb-3">
                    {cat.categoryName}
                  </h2>
                  <p className="text-sm text-[#566073] leading-relaxed mb-6">
                    {cat.headline}
                  </p>

                  {/* Representative photo preview */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-md border border-white">
                    <img
                      src={cat.image}
                      alt={cat.categoryName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101832]/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs font-bold text-white uppercase tracking-wider">
                      Contractor Proven System
                    </span>
                  </div>
                </div>

                {/* Right Column: 4 Key Trades List */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.trades.map((trade) => (
                    <div
                      key={trade.name}
                      className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs hover:border-[#7c35ed]/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-[#7c35ed]" />
                          <h3 className="text-sm font-extrabold text-[#101832]">
                            {trade.name}
                          </h3>
                        </div>
                        <p className="text-xs text-[#566073] leading-relaxed">
                          {trade.highlight}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-[#7c35ed]">
                        <span>Full Automation Ready</span>
                        <span>&rarr;</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. "USUALLY A GREAT FIT" CRITERIA */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#faf8fd] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#7c35ed] uppercase">
              Partnership Fit
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] mt-2 mb-4">
              Your business belongs here if...
            </h2>
            <p className="text-base text-[#566073]">
              We don&apos;t work with e-commerce shops or corporate enterprises. We specialize entirely in local trades where responsiveness drives revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fitCriteria.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#7c35ed]/40 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="text-2xl font-extrabold text-[#7c35ed] mb-4">
                    {item.num}
                  </div>
                  <h3 className="text-base font-bold text-[#101832] mb-2 leading-snug group-hover:text-[#7c35ed] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#566073] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Ideal Alignment
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. "DON'T SEE YOUR EXACT TRADE?" BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#101832] via-[#161f3a] to-[#251540] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#7c35ed]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#a855f7]">
                Unlisted Trades
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 leading-tight">
                Don&apos;t see your exact trade listed?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                If your business improves, repairs, or maintains residential properties—and you rely on local phone calls, estimates, and customer reviews—we should probably talk. Tell us what your crew does and where you operate. If System Digital isn&apos;t a sensible match, we will tell you directly on day one.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/book-a-call"
                  className="bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-8 py-4 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center gap-2 group cursor-pointer"
                >
                  <span>Check Your Trade Fit</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>

                <a
                  href="tel:+18888100013"
                  className="text-xs font-bold text-gray-300 hover:text-white transition-colors"
                >
                  Or talk to an onboarding specialist: (888) 810-0013
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FINAL DIRECT CTA */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#faf8fd] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-xs font-extrabold tracking-widest text-[#7c35ed] uppercase mb-2">
            Ready To Grow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] mb-4">
            Transform missed calls into booked crews.
          </h2>
          <p className="text-base text-[#566073] max-w-xl mb-8 leading-relaxed">
            Ready to give your contracting business an automated digital foundation that actually books jobs? Launch takes just 5 to 7 business days.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/book-a-call"
              className="bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-8 py-4 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center gap-2 group cursor-pointer"
            >
              <span>Book Your Free Discovery Call</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/pricing"
              className="px-6 py-4 rounded-[10px] border border-gray-200 text-sm font-bold text-[#101832] hover:border-[#101832] transition-colors cursor-pointer"
            >
              View Simple $297/mo Pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
