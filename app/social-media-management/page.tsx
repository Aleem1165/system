import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Content & Management for Contractors | System Digital",
  description:
    "Turn completed job photos, 5-star reviews, and trade expertise into consistent social media posts that build local credibility and win estimates. Zero dancing required.",
};

export default function SocialMediaManagementPage() {
  const capabilities = [
    {
      num: "01",
      title: "Your Real Work, Published Consistently",
      desc: "Turn raw job site photos snapped on your smartphone into polished, branded project showcases that highlight the quality of your craftsmanship.",
      points: [
        "Before-and-after transformation galleries",
        "Highlights your crew, materials, and attention to detail",
        "Positions you as the premier trade contractor in your area",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#ea580c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "End the Daily Content Panic",
      desc: "Never waste an hour in the morning wondering 'what are we supposed to post today?' We plan, write, design, and schedule every single post in advance.",
      points: [
        "100% hands-off publishing calendar",
        "Engaging trade captions written for local homeowners",
        "Includes trending local audio and targeted hashtags",
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
      title: "Signal Active Legitimacy to New Prospects",
      desc: "When homeowners research your business, active profiles reassure them that your crews are busy, licensed, and delivering great work every week.",
      points: [
        "Replaces ghost-town profiles with vibrant weekly posts",
        "Proves you are actively working in the local community",
        "Builds immediate peace of mind before the estimate call",
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
      title: "Establish Uncontested Local Trust",
      desc: "Tagging specific neighborhoods, towns, and landmarks ensures homeowners see your trucks and work right around the corner from where they live.",
      points: [
        "Hyper-local geographic tagging and neighborhood shoutouts",
        "Customer testimonial quotes and 5-star review highlights",
        "Drives direct estimate inquiries via direct message (DM)",
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
  ];

  const valuePillars = [
    {
      badge: "Visual Authority",
      title: "Before & After Transformations",
      desc: "High-contrast visual evidence of dirty old roofs, dated bathrooms, or broken HVAC units turned into brand-new masterpieces justify your premium estimate rates.",
    },
    {
      badge: "Reputation Amplification",
      title: "Automated 5-Star Review Showcases",
      desc: "We turn your best Google reviews into branded, eye-catching social graphics that build undeniable credibility across Facebook and Instagram.",
    },
    {
      badge: "Zero Time Drag",
      title: "100% Done For You",
      desc: "Simply text us raw job photos from your smartphone. Our dedicated designers and copywriters handle the editing, captions, and publishing.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#101832] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: OTHER SERVICES SIGNATURE SPLIT LAYOUT */}
      {/* ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-10 sm:pb-14 relative overflow-hidden bg-gradient-to-b from-[#fff8f2] via-white to-white">
        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#ff7a1a]/10 to-[#ffaa47]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          {/* Breadcrumb */}
          {/* <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#566073] mb-6">
            <Link href="/" className="hover:text-[#ea580c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#566073]">Other Services</span>
            <span>/</span>
            <span className="text-[#ea580c] font-bold">Social Media Management</span>
          </div> */}

          {/* Split Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ff7a1a]/15">
                <span className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-pulse" />
                Brand Visibility
              </div> */}

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101832] leading-[1.12] mb-6">
                Social Media for Contractors. No Influencer Dancing Required.
              </h1>

              <p className="text-lg sm:text-xl text-[#566073] leading-relaxed mb-8">
                Homeowners check your Facebook and Instagram before writing a deposit check. If your last post was from six months ago, they wonder if you&apos;re still in business. We transform your completed job photos and 5-star reviews into polished weekly posts that prove you are the premier contractor in town.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-3 gap-3 w-full mb-8 pt-4 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">3–4x</span>
                  <span className="text-xs font-semibold text-[#566073]">Posts Every Week</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">100%</span>
                  <span className="text-xs font-semibold text-[#566073]">Done-For-You</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c]">Local</span>
                  <span className="text-xs font-semibold text-[#566073]">Territory Focus</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/book-a-call"
                  className="bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-[10px] shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer border border-white/12 hover:border-white/30"
                >
                  <span>Book a Free Strategy Call</span>
                </Link>
                <Link
                  href="/"
                  className="bg-white hover:bg-gray-50 text-[#101832] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-[10px] border border-gray-200 transition-all cursor-pointer"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            {/* Right Column: Social Media Post Mockup Card */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-gray-200/80 shadow-2xl relative overflow-hidden">
                {/* Post Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff7a1a] to-[#ea580c] text-white flex items-center justify-center font-black text-sm shadow-md">
                      SD
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-[#101832]">System Trade Co.</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#ff7a1a] text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                      </div>
                      <span className="text-xs text-gray-400">Oakmont Hills • 2 hours ago</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#ea580c] bg-[#fff7ed] px-2.5 py-1 rounded-full border border-[#ff7a1a]/15">
                    Recent Job
                  </span>
                </div>

                {/* Simulated Post Image Box */}
                <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#101832] via-[#1a2240] to-[#25183f] p-5 flex flex-col justify-between overflow-hidden shadow-inner border border-gray-200/40">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 text-white text-[11px] font-bold backdrop-blur-sm border border-white/10">
                      Before &amp; After Transformation
                    </span>
                    <span className="text-amber-400 text-xs font-bold bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      ★★★★★ 5.0 Rating
                    </span>
                  </div>

                  {/* Centered Graphic Accent */}
                  <div className="text-center py-3">
                    <span className="text-white font-extrabold text-lg sm:text-xl block tracking-tight">
                      Full Architectural Roof &amp; Siding Overhaul
                    </span>
                    <span className="text-gray-300 text-xs mt-1 block">
                      Completed in 3 Days • Oakmont Hills, CA
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-gray-300 bg-black/50 p-2 rounded-xl backdrop-blur-xs">
                    <span>&ldquo;Our home looks brand new. Exceptional crew!&rdquo;</span>
                    <span className="text-[#ff9838] font-bold">— Mark T., Homeowner</span>
                  </div>
                </div>

                {/* Engagement Bar */}
                <div className="flex items-center justify-between pt-3.5 pb-2 text-xs text-[#566073] border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 font-semibold text-rose-500">
                      ❤️ 148 Likes
                    </span>
                    <span className="font-semibold">💬 26 Comments</span>
                    <span className="font-semibold">↗ 11 Shares</span>
                  </div>
                  <span className="text-emerald-600 font-bold text-[11px]">★ 100% Positive</span>
                </div>

                {/* Simulated Comment / Inbound Lead Bubble */}
                <div className="mt-3 p-3 rounded-2xl bg-[#fffbf7] border border-[#ff7a1a]/10 flex items-start gap-2.5 text-xs">
                  <div className="w-6 h-6 rounded-full bg-orange-200 text-[#ea580c] font-bold flex items-center justify-center flex-shrink-0 text-[10px]">
                    EL
                  </div>
                  <div>
                    <span className="font-bold text-[#101832]">Emily Lawson: </span>
                    <span className="text-[#566073]">
                      This looks stunning! We need our siding replaced on Elm Street. Just sent you a DM for an estimate! 👏
                    </span>
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
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#fffbf7] border-t border-gray-200/70">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Stay Visible • Win Jobs
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              How consistent social media drives contractor revenue
            </h2>
            <p className="text-[#566073] text-base sm:text-lg leading-relaxed">
              Social media for trade businesses isn&apos;t about viral dances. It&apos;s about showcasing finished projects and proving your legitimacy to clients ready to hire.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {capabilities.map((item) => (
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
      {/* 3. VALUE IMPACT: 3 STRATEGIC PILLARS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
              Strategic Impact
            </span> */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101832] leading-tight mb-5">
              Built specifically for high-ticket trade contractors
            </h2>
            <p className="text-[#566073] text-base sm:text-lg">
              Elevate your online brand so you can charge premium prices with total confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {valuePillars.map((val, vIdx) => (
              <div
                key={vIdx}
                className="bg-[#fffbf7] rounded-xl sm:rounded-2xl p-7 border border-orange-100 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#ea580c] bg-[#fff7ed] px-2.5 py-1 rounded-full border border-[#ff7a1a]/15 inline-block mb-4">
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
      <section className="py-12 sm:py-16 bg-[#fffbf7]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#101832] via-[#1b2240] to-[#25183f] text-white shadow-xl overflow-hidden text-center">
            {/* Ambient Purple Glow Orbs */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ff7a1a]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#ea580c]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[#ff9838] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-2">
                Elevate Your Local Reputation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                Ready to stop ghosting your own social media pages?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                You focus on delivering top-tier craftsmanship on the job site. We turn your daily work into consistent, polished content that homeowners notice and trust.
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
