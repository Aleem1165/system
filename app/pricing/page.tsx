"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const includedFeatures = [
    {
      title: "Functional Contractor Website",
      desc: "Custom-built, ultra-fast website optimized for mobile conversion and phone call taps.",
      href: "/functional-website",
    },
    {
      title: "Instant Missed-Call Text Back",
      desc: "Sends an immediate SMS within 3 seconds of a missed call so homeowners never call competitors.",
      href: "/missed-call-text-back",
    },
    {
      title: "24/7 Live AI Chat Agent",
      desc: "Captures, qualifies, and books emergency service appointments around the clock without manual intervention.",
      href: "/ai-chat-agent",
    },
    {
      title: "Local SEO & Google Profile Engine",
      desc: "Optimized geographic schema, citations, and metadata to capture high-intent local trade searches.",
      href: "/local-seo",
    },
    {
      title: "5-Star Review Funnel Automation",
      desc: "Systematically requests verified Google reviews via SMS immediately following completed jobs.",
      href: "/review-funnel",
    },
    {
      title: "1-Click Client Broadcast Campaigns",
      desc: "Send seasonal weather promos, filter changes, or maintenance reminders to your entire client book.",
      href: "/one-click-campaigns",
    },
    {
      title: "Automated Estimate Follow-Up",
      desc: "Relentless, polite SMS & email follow-up sequences that lock in sent quotes without you having to chase.",
      href: "/automated-follow-up",
    },
    {
      title: "Dedicated Business Phone Line",
      desc: "Clean separation of customer calls and texts from your personal cellular device.",
      href: "/business-phone",
    },
    {
      title: "All-in-One Team Mobile & Desktop Inbox",
      desc: "One central hub on iOS, Android, and web for every lead, call recording, text, and Google review.",
      href: "/all-in-one-inbox",
    },
  ];

  const addOnServices = [
    {
      name: "24/7 AI Voice Dispatch Agent",
      desc: "Answers incoming phone calls live with natural human speech, answers FAQs, and books jobs directly.",
      tag: "Autonomous Voice",
      href: "/ai-call-agent",
    },
    {
      name: "Real Human 24/7 Chat Receptionists",
      desc: "Trained live operators monitoring your website chat day and night for personalized concierge triage.",
      tag: "Live Staff",
      href: "/real-user-chat",
    },
    {
      name: "Google Local Services & Search Ads",
      desc: "High-intent Pay-Per-Click campaigns designed to dominate top-of-page emergency homeowner searches.",
      tag: "PPC Management",
      href: "/google-ads",
    },
    {
      name: "Meta Ads (Facebook & Instagram)",
      desc: "Visual before-and-after project campaigns and neighborhood targeting to build homeowner authority.",
      tag: "Social Ads",
      href: "/meta-ads",
    },
    {
      name: "TikTok Short-Form Video Ads",
      desc: "Engaging, high-reach video campaigns reaching modern property owners and first-time home buyers.",
      tag: "Video Reach",
      href: "/tiktok-ads",
    },
    {
      name: "Social Media Brand & Content Management",
      desc: "Consistent, professional weekly project postings that showcase craftsmanship and boost community credibility.",
      tag: "Content Suite",
      href: "/social-media-management",
    },
    {
      name: "Custom 3D & 2D Video Animation",
      desc: "Studio-grade animated commercials demonstrating your trade process, warranty guarantees, and craftsmanship.",
      tag: "Creative Media",
      href: "/video-animation",
    },
  ];

  const faqs = [
    {
      q: "Are there any long-term contracts or cancellation penalties?",
      a: "None whatsoever. You are completely free to cancel at any time. We believe in earning your business every single month through demonstrable lead volume and responsive service.",
    },
    {
      q: "How fast can my new website and automated system go live?",
      a: "Most contractor platforms are completely built, integrated with your phone lines, and live within 5 to 7 business days from our initial onboarding discovery session.",
    },
    {
      q: "Do I own my website, phone number, and customer database?",
      a: "100% yes. You retain full ownership of your custom domain, business phone numbers, customer records, and review profiles. We do not hold contractor assets hostage.",
    },
    {
      q: "How does the annual billing discount work?",
      a: "When you choose yearly billing ($2,673/year), you pay for 9 months and receive 3 full months free. That calculates to an effective $222.75/month, saving you $891 instantly.",
    },
    {
      q: "What if I already have an existing domain name and phone number?",
      a: "We seamlessly point your existing domain to our ultra-fast infrastructure and either forward your current number or port it smoothly with zero downtime or missed calls.",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white text-[#101832]">
      
      {/* ========================================================================= */}
      {/* 1. HERO & BILLING TOGGLE */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#faf8fd]">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#7c35ed]/20 via-[#9055ff]/10 to-transparent blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] border border-[#7c35ed]/20 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
            Transparent Contractor Investment
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#101832] leading-[1.15] mb-6 max-w-3xl">
            One simple monthly price.{" "}
            <span className="bg-gradient-to-r from-[#7c35ed] via-[#9055ff] to-[#a855f7] bg-clip-text text-transparent italic font-serif font-normal">
              Zero surprises.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#566073] max-w-2xl leading-relaxed mb-10">
            No bronze, silver, or mysterious &ldquo;call for enterprise&rdquo; tiers. Everything a trade business needs to dominate locally, capture every lead, and scale profitably in one connected engine.
          </p>

          {/* Interactive Billing Switcher */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white border border-gray-200 shadow-md">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#7c35ed] text-white shadow-sm"
                  : "text-gray-600 hover:text-[#101832]"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "bg-[#7c35ed] text-white shadow-sm"
                  : "text-gray-600 hover:text-[#101832]"
              }`}
            >
              <span>Yearly</span>
              <span className="px-2 py-0.5 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-[11px] font-extrabold uppercase tracking-wide">
                Save 25% (3 Mo Free)
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE FLAGSHIP PLAN CARD */}
      {/* ========================================================================= */}
      <section className="relative -mt-8 max-w-5xl mx-auto px-6 w-full z-20 pb-20">
        <div className="relative rounded-3xl bg-white border-2 border-[#7c35ed]/30 shadow-[0_25px_65px_rgba(124,58,237,0.12)] p-8 sm:p-12 overflow-hidden">
          
          {/* Top highlight ribbon */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#7c35ed] to-[#6d28d9] text-white text-xs font-extrabold uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl shadow-sm">
            Everything Included
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Plan Summary & Price */}
            <div className="lg:col-span-5 flex flex-col items-start justify-between h-full">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-[#7c35ed] uppercase">
                  Complete Growth Package
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101832] mt-1 mb-3">
                  The System Digital Engine
                </h2>
                <p className="text-sm text-[#566073] leading-relaxed mb-6">
                  Website, missed call auto-text, 24/7 AI chat, automated estimate follow-up, reviews, and unified mobile inbox in one synchronized system.
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-gray-100 w-full">
                  {billingCycle === "monthly" ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl font-extrabold text-[#101832] tracking-tight">
                        $297
                      </span>
                      <span className="text-base font-bold text-gray-500">/ month</span>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl sm:text-6xl font-extrabold text-[#101832] tracking-tight">
                          $2,673
                        </span>
                        <span className="text-base font-bold text-gray-500">/ year</span>
                      </div>
                      <div className="text-sm font-semibold text-[#7c35ed] mt-1 flex items-center gap-1.5">
                        <span>Equivalent to $222.75 / mo</span>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-[#f5f3ff] text-[#7c35ed] font-bold">
                          Pay 9 mo, get 3 free
                        </span>
                      </div>
                    </div>
                  )}
                  <p className="text-xs text-gray-400 mt-2">
                    Billed {billingCycle}. Cancel anytime with 0 fees.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 w-full">
                <Link
                  href="/book-a-call"
                  className="w-full bg-[#121316] hover:bg-[#20222a] text-white text-center font-bold text-base py-4 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Book a Free Discovery Call</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="text-center text-xs font-semibold text-gray-500  transition-colors py-1"
                >
                  Already ready to get started? Make a secure payment &rarr;
                </Link>
              </div>
            </div>

            {/* Right: Included 9-Point Feature Checklist */}
            <div className="lg:col-span-7 bg-[#faf8fd] rounded-2xl p-6 sm:p-8 border border-[#7c35ed]/10 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#101832]">
                Everything Included In The System:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-1">
                {includedFeatures.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white transition-all group"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#7c35ed] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-xs">
                      ✓
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#101832] group-hover:text-[#7c35ed] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#566073] leading-snug mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Guarantees footer note */}
              <div className="pt-4 mt-2 border-t border-[#7c35ed]/15 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  No setup fees or hidden surprises
                </span>
                <span className="font-semibold text-[#7c35ed]">
                  5-7 Day Fast Deployment
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. "SIMPLE ON PURPOSE" COMPARISON MATRIX */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#faf8fd] border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#7c35ed] uppercase">
              Transparent Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] mt-2 mb-4">
              Simple on purpose.
            </h2>
            <p className="text-base text-[#566073]">
              What is included in the base platform—and what is available as an optional growth accelerator.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Column 1: Core Plan Features */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Base Platform
                    </span>
                    <h3 className="text-2xl font-bold text-[#101832] mt-0.5">
                      Included in the Main Plan
                    </h3>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-extrabold">
                    $297 / mo
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {includedFeatures.map((feat) => (
                    <div key={feat.title} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <span className="text-sm font-bold text-[#101832]">{feat.title}</span>
                        <p className="text-xs text-[#566073] mt-0.5">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="/book-a-call"
                  className="w-full bg-[#121316] hover:bg-[#20222a] text-white text-center font-bold text-sm py-3.5 rounded-[10px] transition-all block border border-white/12 hover:border-white/30"
                >
                  Get Started With The Main Plan
                </Link>
              </div>
            </div>

            {/* Column 2: Optional Growth Add-Ons */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Growth Accelerators
                    </span>
                    <h3 className="text-2xl font-bold text-[#101832] mt-0.5">
                      Available Separately
                    </h3>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-extrabold">
                    Optional Add-Ons
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {addOnServices.map((addon) => (
                    <Link
                      key={addon.name}
                      href={addon.href}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#faf8fd] transition-all group"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#f5f3ff] text-[#7c35ed] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 group-hover:bg-[#7c35ed] group-hover:text-white transition-colors">
                        +
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-[#101832] group-hover:text-[#7c35ed] transition-colors">
                            {addon.name}
                          </span>
                          <span className="text-[10px] uppercase font-bold text-gray-400 px-2 py-0.5 rounded bg-gray-50">
                            {addon.tag}
                          </span>
                        </div>
                        <p className="text-xs text-[#566073] mt-0.5">{addon.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="/book-a-call"
                  className="w-full bg-[#121316] hover:bg-[#20222a] text-white border border-white/12 text-center font-bold text-sm py-3.5 rounded-[10px] transition-all block"
                >
                  Discuss Custom Growth Add-Ons
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CONTRACTOR ROI JUSTIFICATION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#101832] via-[#161f3a] to-[#24133b] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#7c35ed]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#a855f7]">
                The Contractor Math
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 leading-tight">
                How one saved job pays for your entire year.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                In trade businesses, a single lost homeowner call can cost between $1,500 to $12,000 in lost estimate revenue. By instantly sending an automated text back within 3 seconds, System Digital recovers an average of 4 to 9 jobs per month that otherwise would have hired the next contractor on Google.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <div className="text-2xl font-black text-[#a855f7]">1 Roof Repair</div>
                  <div className="text-xs text-gray-300 mt-1">Average ticket: $3,500</div>
                  <div className="text-[11px] text-emerald-400 font-bold mt-2">Pays for 12 months</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <div className="text-2xl font-black text-[#a855f7]">1 HVAC Install</div>
                  <div className="text-xs text-gray-300 mt-1">Average ticket: $7,800</div>
                  <div className="text-[11px] text-emerald-400 font-bold mt-2">Immediate 2.9x ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <div className="text-2xl font-black text-[#a855f7]">1 Repiping Call</div>
                  <div className="text-xs text-gray-300 mt-1">Average ticket: $4,200</div>
                  <div className="text-[11px] text-emerald-400 font-bold mt-2">Pays for 14 months</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/book-a-call"
                  className="bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-7 py-3.5 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out inline-flex items-center justify-center cursor-pointer"
                >
                  Calculate Your Service Area Revenue
                </Link>
                <span className="text-xs text-gray-400">
                  Zero obligation • Takes under 15 minutes
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PRICING FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#faf8fd] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold tracking-widest text-[#7c35ed] uppercase">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] mt-2 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#566073]">
              Straightforward answers about our pricing, commitments, and onboarding.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base text-[#101832] hover:text-[#7c35ed] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="w-7 h-7 rounded-full bg-[#f5f3ff] text-[#7c35ed] flex items-center justify-center flex-shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-4 h-4 transition-transform duration-200 ease-out origin-center ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        <line x1="12" y1="6" x2="12" y2="18" />
                        <line x1="6" y1="12" x2="18" y2="12" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#566073] leading-relaxed border-t border-gray-100 pt-4">
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
      {/* 6. BOTTOM CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-xs font-extrabold tracking-widest text-[#7c35ed] uppercase mb-2">
            Need Guidance?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] mb-4">
            Not sure what your business needs?
          </h2>
          <p className="text-base text-[#566073] max-w-xl mb-8 leading-relaxed">
            Book a quick 15-minute call. We will review your current website, Google ranking, and call flow—and keep the answer even simpler than this pricing page.
          </p>

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
              href="tel:+18888100013"
              className="px-6 py-4 rounded-[10px] border border-gray-200 text-sm font-bold text-[#101832] hover:border-[#101832] transition-colors cursor-pointer"
            >
              Call Directly: (888) 810-0013
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
