import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact System Digital | Contractor Inbound Strategy & Support",
  description:
    "Direct communication with contractor marketing specialists. Call, text, email, or schedule a 20-minute strategy session to start booking more high-ticket trade work.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "How fast can our contractor system go live?",
      a: "Our standard turnkey build takes between 7 to 10 business days from the initial discovery call. You get a fully responsive website, 24/7 AI chat, and automated missed-call follow-ups ready to capture jobs immediately.",
    },
    {
      q: "Do I have to change my existing business phone number?",
      a: "No! Your existing phone number stays 100% active. We integrate our missed-call text-back and smart call routing right over your current carrier without any interruption to your daily operations.",
    },
    {
      q: "Do I own all my digital assets and customer data?",
      a: "Yes, 100%. You own your domain, website, Google profile, customer list, and all reviews collected. Unlike traditional agencies, we never hold your business assets hostage.",
    },
    {
      q: "What if I am not technical?",
      a: "You don't need to be technical at all. We write all the copy, build the graphics, train the AI, and walk you through everything on your smartphone. If you know how to send a text message, you can run this system.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#101832] font-sans selection:bg-[#7c35ed] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#faf8fd] via-white to-white border-b border-gray-100">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-purple-200/40 via-violet-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f3ff] border border-[#ede9fe] text-[#7c35ed] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
              Direct Contractor Access
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200">
              <span>📞</span>
              <span>Live Inbound Desk</span>
            </div>
          </div>

          {/* Eyebrow */}
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7c35ed] mb-4 block">
            No Sales Reps. No Junior Gatekeepers.
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101832] leading-[1.12] mb-6 max-w-4xl">
            Real People. Direct Answers.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c35ed] via-[#9333ea] to-[#a855f7]">
              Let&apos;s Talk About More Booked Work.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-[#566073] max-w-3xl leading-relaxed mb-10">
            Whether you need to plug missed-call revenue leaks, dominate Google Maps in your county, or upgrade an outdated website, our team is ready. Pick up the phone, send a quick text, or drop us a message below.
          </p>

          {/* Response Metrics */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl">
            <div className="p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-black text-[#7c35ed]">&lt; 15 min</div>
              <div className="text-[11px] sm:text-xs text-[#566073] font-medium mt-0.5">Average Reply Time</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-black text-[#101832]">100%</div>
              <div className="text-[11px] sm:text-xs text-[#566073] font-medium mt-0.5">Direct Tech Access</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-600">Mon–Sat</div>
              <div className="text-[11px] sm:text-xs text-[#566073] font-medium mt-0.5">Live Contractor Lines</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN COMMUNICATIONS SUITE (Split Layout)                                */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Direct Communication Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold uppercase tracking-wider mb-3 border border-[#ede9fe]">
                  <span>Instant Reach</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101832] tracking-tight">
                  Reach Our Team Directly
                </h2>
                <p className="text-sm text-[#566073] mt-2 leading-relaxed">
                  We don&apos;t hide behind automated ticketing systems. Connect directly with trade marketing specialists.
                </p>
              </div>

              {/* Phone / SMS Card */}
              <a
                href="tel:8888100013"
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f3ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7c35ed] block">
                      Direct Phone &amp; SMS
                    </span>
                    <span className="text-xl font-black text-[#101832] group-hover:text-[#7c35ed] transition-colors">
                      (888) 810-0013
                    </span>
                  </div>
                </div>
                <div className="text-xs text-[#566073] flex items-center justify-between pt-3 border-t border-gray-100">
                  <span>Call or text anytime • 8:00 AM – 7:00 PM EST</span>
                  <span className="font-bold text-[#7c35ed] group-hover:translate-x-0.5 transition-transform">Call Now →</span>
                </div>
              </a>

              {/* Email Desk Card */}
              <a
                href="mailto:support@systemdigital.com"
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f3ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-[#7c35ed]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7c35ed] block">
                      Direct Email Desk
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#101832] group-hover:text-[#7c35ed] transition-colors">
                      support@systemdigital.com
                    </span>
                  </div>
                </div>
                <div className="text-xs text-[#566073] flex items-center justify-between pt-3 border-t border-gray-100">
                  <span>Guaranteed reply within 2 business hours</span>
                  <span className="font-bold text-[#7c35ed] group-hover:translate-x-0.5 transition-transform">Email Us →</span>
                </div>
              </a>

              {/* Emergency Assistance Note */}
              <div className="p-5 rounded-2xl bg-[#faf8fd] border border-purple-100">
                <div className="flex items-start gap-3">
                  <span className="text-lg">🚨</span>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#101832]">
                      Emergency Contractor Fix Desk
                    </h4>
                    <p className="text-xs text-[#566073] mt-1 leading-relaxed">
                      Facing a Google Business profile suspension or a crashed domain? Call us immediately and mention emergency restoration for same-day priority routing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quick-Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 20-MINUTE STRATEGY BANNER                                              */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#faf8fd] border-y border-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#101832] to-[#1c1c38] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
                <span>⚡ Best Place To Start</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Book A 20-Minute Strategy Session
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xl leading-relaxed">
                Show us what is currently happening with your website and phone lines. We&apos;ll audit your local service market live and show you exactly what we would fix first.
              </p>
            </div>
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out shrink-0 cursor-pointer"
            >
              <span>Schedule 20-Min Call</span>
              <span className="text-base font-bold">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PRE-CONTACT CONTRACTOR FAQS                                            */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7c35ed] mb-3 block">
              Clear Expectations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101832] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-[#566073]">
              Quick answers to common questions contractors ask before getting in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-[#faf8fd] border border-purple-50 hover:border-purple-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#101832] mb-3 flex items-start gap-2.5">
                    <span className="text-[#7c35ed] font-black">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-[#566073] leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HIGH-CONVERTING CALL TO ACTION                                         */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#101832] via-[#1a1c3d] to-[#2b1754] text-white p-10 sm:p-16 text-center shadow-2xl">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#7c35ed]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/15">
                Ready When You Are
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
                Ready To Put Your Marketing System On Autopilot?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10">
                Let&apos;s build a digital pipeline that reliably turns local homeowners into booked jobs on your crew&apos;s daily calendar.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/book-a-call"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-[10px] bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out cursor-pointer"
                >
                  <span>Book A Strategy Call</span>
                  <span className="text-base">→</span>
                </Link>
                <a
                  href="tel:8888100013"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
                >
                  <span>Call Us: (888) 810-0013</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

