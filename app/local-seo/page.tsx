import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local SEO & Google Maps Ranking for Contractors | System Digital",
  description:
    "Dominate local Google search and the Google Maps 3-Pack in your service towns. Proven organic contractor SEO built for high-ticket estimate calls.",
};

export default function LocalSEOPage() {
  const stats = [
    {
      num: "94%",
      badge: "Local Search Volume",
      highlight: "Search Google First",
      desc: "of property owners use Google search and Google Maps when searching for local contractors and trade specialists.",
    },
    {
      num: "96%",
      badge: "Online Vetting",
      highlight: "Research Before Calling",
      desc: "of homeowners evaluate a contractor's local search presence and reviews before requesting a quote.",
    },
    {
      num: "47%",
      badge: "High Buyer Intent",
      highlight: "Immediate Local Need",
      desc: "of all Google searches have explicit local buying intent, representing urgent jobs ready to book right now.",
    },
  ];

  const pillars = [
    {
      num: "01",
      title: "Show Up Where High-Ticket Jobs Are Searching",
      desc: "Homeowners don't scroll to page two of Google. We optimize your Google Business Profile and local keywords so you appear prominently in the coveted Google Map 3-Pack.",
      points: [
        "Google Maps 3-Pack rank optimization",
        "Targeted for your highest-margin trade services",
        "Direct tap-to-call links right on search result cards",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Crystal-Clear Service Area Architecture",
      desc: "Your website must tell Google exactly which towns, suburbs, and counties you serve. Google is powerful, but it isn't psychic. We build dedicated geo-targeted landing pages.",
      points: [
        "Town-by-town and county landing pages",
        "Local trade schema markup and geo-coordinates",
        "Consistent NAP (Name, Address, Phone) citation syndication",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Unshakeable Proof & Review Authority",
      desc: "Google prioritizes contractors with fresh reviews, verified project photos, and active customer engagement. We turn your completed jobs into undeniable ranking power.",
      points: [
        "Continuous Google review generation strategy",
        "Geotagged job site project photos and proof",
        "Demonstrates verified credibility before the homeowner calls",
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
    {
      num: "04",
      title: "Realistic, Sustainable Growth (No Gimmicks)",
      desc: "We don't sell snake oil or make false 'rank #1 overnight' claims. We construct solid, durable SEO architecture that compounds month after month and stays resilient.",
      points: [
        "Long-term organic traffic that doesn't stop when ad budgets pause",
        "Zero shady black-hat tactics that risk Google penalties",
        "Transparent monthly ranking and inbound call tracking reports",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: "Google Business Profile Optimization",
      desc: "Comprehensive profile buildout including primary trade categories, hours, services, and photo showcases to maximize Map Pack presence.",
    },
    {
      title: "City & Neighborhood Landing Pages",
      desc: "Engineered local landing pages for every specific municipality and county you want to win high-ticket jobs in.",
    },
    {
      title: "Contractor Schema Structured Data",
      desc: "Deep search engine code that tells Google algorithms your exact trade specialization, service radius, and customer reviews.",
    },
    {
      title: "High-Authority Citation Syndication",
      desc: "Consistent Name, Address, and Phone (NAP) synchronization across Yelp, BBB, Angi, and trade-specific regional directories.",
    },
    {
      title: "High-Intent Keyword Architecture",
      desc: "Keyword research focused purely on emergency and buying searches like 'roof repair near me' rather than useless generic traffic.",
    },
    {
      title: "Transparent Call Tracking & Reports",
      desc: "Live analytics dashboards tracking phone calls, Map Pack positions, and organic search impressions directly generated by SEO.",
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
            <span className="text-[#ea580c] font-bold">Local SEO</span>
          </div> */}

          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ff7a1a]/15">
              <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
              Search Authority
            </div> */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
              Dominate Local Google Search and the Google Maps 3-Pack
            </h1>
            <p className="text-lg sm:text-xl text-[#566073] leading-relaxed max-w-3xl">
              When homeowners in your territory search for emergency repairs or major renovations, the top 3 spots on Google get 80% of the phone calls. We engineer your local search footprint so your business shows up first when ready-to-hire clients search nearby.
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

            {/* Right Column: Video Container Box (Dimensionally Mapped For Video) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-gray-200/80 shadow-xl h-full flex flex-col justify-between">
                {/* Frame Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#101832]">
                      See A Short Demo Below
                    </h2>
                    <p className="text-xs sm:text-sm text-[#566073] mt-0.5">
                      Local Map Pack ranking walkthrough and organic traffic demonstration
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
                    Video Frame
                  </span>
                </div>

                {/* EXACT VIDEO FRAME CONTAINER (16:9 Aspect Ratio) */}
                <div className="relative w-full aspect-video rounded-xl bg-gradient-to-br from-[#101832] via-[#161f38] to-[#25183f] border-2 border-[#ff7a1a]/30 overflow-hidden shadow-2xl flex flex-col items-center justify-center group select-none">
                  {/* Subtle Background Radial Ambient Aura */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,26,0.3)_0%,transparent_70%)] pointer-events-none" />

                  {/* Grid Lines Accent */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                  {/* Play Button & Placeholder Labels */}
                  <div className="relative z-10 flex flex-col items-center text-center p-6 gap-3 sm:gap-4">
                    <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#ff7a1a] to-[#ea580c] flex items-center justify-center text-white shadow-[0_0_35px_rgba(255,122,26,0.6)] group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <span className="absolute inset-0 rounded-full bg-[#ff7a1a] animate-ping opacity-25" />
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
                        Local SEO Strategy Video Demo
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm mt-1 block leading-snug">
                        Full-width responsive video container • Ready for video upload
                      </span>
                    </div>
                  </div>

                  {/* Video Player Control Bar Mockup */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex items-center justify-between gap-4 text-white text-xs">
                    <div className="flex items-center gap-3 w-full">
                      <span className="text-gray-300 font-mono text-[11px] sm:text-xs">0:00 / 2:35</span>
                      <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-[#ff7a1a] rounded-full" />
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
                  <span className="text-[#ea580c] font-semibold">Ready for MP4, YouTube, or Vimeo embed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EXPLANATION SECTION: WHAT IS LOCAL SEO? (4 PILLARS) */}
      {/* ========================================================================= */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#fffbf7] border-t border-gray-200/70">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Organic Visibility
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              What is contractor local SEO?
            </h2>
            <p className="text-[#566073] text-base sm:text-lg leading-relaxed">
              Google doesn&apos;t guess which contractor to rank. Here is how our localized architecture signals authority, location relevance, and trust to Google&apos;s ranking algorithm.
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
      {/* 3. SYSTEM HIGHLIGHTS / EVERYTHING INCLUDED */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Standard Across Every Build
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              Built specifically for modern contractor workflows
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              No hollow promises, no black-hat tricks, and zero technical maintenance required from you or your team.
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
      </section>

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
                Own Your Local Territory
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Tired of being Google&apos;s best-kept secret?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Let us build the authoritative local signals that help nearby homeowners find your business first—before they call the contractor down the street.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/book-a-call"
                  className="bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out text-center flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Book a Free Strategy Call</span>
                </Link>
                <Link
                  href="/"
                  className="bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-[10px] border border-white/15 backdrop-blur-sm transition-all text-center cursor-pointer"
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
