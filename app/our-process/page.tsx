import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | System Digital",
  description: "Our streamlined 3-step contractor growth process: from discovery call to fully operational in 7 days.",
};

export default function OurProcessPage() {
  const steps = [
    {
      num: "01",
      duration: "15–20 min intro",
      title: "Discovery & Strategy",
      desc: "You walk us through your current trade setup, target service locations, and biggest growth bottlenecks. We ask straightforward, practical questions to tailor your architecture — absolutely zero 40-slide sales pitches.",
      details: [
        "Audit existing website & Google profile",
        "Identify high-intent local service zip codes",
        "Determine needed workflows (Chat, Reviews, Missed Call)",
      ],
    },
    {
      num: "02",
      duration: "5–7 day turnaround",
      title: "Architecture & Assembly",
      desc: "You send over your basic business assets (logo, photos, credentials, and job list). Our specialized team builds and configures your entire automated ecosystem from the ground up.",
      details: [
        "Modern conversion-focused contractor website",
        "Custom 24/7 AI chat agent with trade knowledge",
        "Automated 3-second missed call text back",
        "5-star Google review collection funnel",
      ],
    },
    {
      num: "03",
      duration: "20–25 min handover",
      title: "Walkthrough & Live Launch",
      desc: "We test all workflows together in real time, verify that inquiries arrive instantly on your smartphone app, and flip the switch to go live. Your business is now ready to book jobs on autopilot.",
      details: [
        "Live test call & text-back verification",
        "Mobile app walkthrough for you & your staff",
        "Official launch & DNS cutover",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#fdfdfd] text-[#101832] pt-32 sm:pt-36 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] border border-[#7c35ed]/20 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            Three Simple Steps. Zero Drama.
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#101832] leading-tight mb-6">
            From first conversation to fully live.
          </h1>
          <p className="text-[#566073] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We understand the trades, build your complete digital automation system, and launch it without turning your busy week into an endless meeting marathon.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white rounded-3xl p-8 sm:p-9 border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7c35ed] via-[#9333ea] to-[#c084fc]" />
              
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#7c35ed] to-[#6d28d9] text-white font-extrabold text-xl flex items-center justify-center shadow-[0_6px_16px_rgba(124,58,237,0.35)] flex-shrink-0">
                    {step.num}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold tracking-wide border border-[#7c35ed]/15">
                    {step.duration}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#101832] mb-3 group-hover:text-[#7c35ed] transition-colors">
                  {step.title}
                </h2>

                <p className="text-[#566073] text-base leading-relaxed mb-6">
                  {step.desc}
                </p>

                <div className="pt-6 border-t border-gray-100 flex flex-col gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    What Happens:
                  </span>
                  {step.details.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#101832]">
                      <span className="text-[#7c35ed] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#101832] to-[#1d2746] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7c35ed]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#a855f7] mb-3">
              Ready To Get Started?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
              Book Your 15-Minute Discovery Session
            </h2>
            <p className="text-gray-300 max-w-xl text-sm sm:text-base mb-8">
              Let us demonstrate exactly how System Digital helps trade contractors capture missed calls, boost reviews, and consistently book more high-ticket projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/book-a-call"
                className="bg-[#7c35ed] hover:bg-[#6d28d9] text-white font-bold text-base px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(124,58,237,0.35)] transition-all flex items-center gap-2 group"
              >
                <span>Book Step 1 Now</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/"
                className="bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-full border border-white/20 transition-all"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
