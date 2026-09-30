import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#101832] text-white border-t border-gray-800 pt-16 pb-12 mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-gray-800">

          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 flex flex-col items-start gap-5">
            {/* Brand Short Logo */}
            <Link href="/" className="inline-flex items-center select-none" aria-label="Home">
              <Image
                src="/assets/images/logo-short-white.png"
                alt="Rendro Systems Logo"
                width={120}
                height={120}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Website and marketing systems for contractors who want more calls,
              better follow-up, and a cleaner way to grow.
            </p>

            <Link
              href="/book-a-call"
              className="relative group overflow-hidden mt-2 bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-6 py-3 rounded-[10px] border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center justify-center cursor-pointer"
            >
              <span className="relative z-10">Book a Call</span>
            </Link>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6">

            {/* System Column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                System
              </h3>
              <div className="flex flex-col gap-2.5 text-sm">
                <Link href="/functional-website" className="text-gray-300 hover:text-white transition-colors">
                  Functional Website
                </Link>
                <Link href="/ai-chat-agent" className="text-gray-300 hover:text-white transition-colors">
                  AI Chat 24/7
                </Link>
                <Link href="/missed-call-text-back" className="text-gray-300 hover:text-white transition-colors">
                  Missed Call Text Back
                </Link>
                <Link href="/local-seo" className="text-gray-300 hover:text-white transition-colors">
                  Local SEO
                </Link>
                <Link href="/review-funnel" className="text-gray-300 hover:text-white transition-colors">
                  Review Funnel
                </Link>
                <Link href="/automated-follow-up" className="text-gray-300 hover:text-white transition-colors">
                  Automated Follow Up
                </Link>
                <Link href="/all-in-one-inbox" className="text-gray-300 hover:text-white transition-colors">
                  Inbox & Mobile App
                </Link>
              </div>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Company
              </h3>
              <div className="flex flex-col gap-2.5 text-sm">
                <Link href="/our-process" className="text-gray-300 hover:text-white transition-colors">
                  Our Process
                </Link>
                <Link href="/who-we-help" className="text-gray-300 hover:text-white transition-colors">
                  Who We Help
                </Link>
                <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Other Services Column */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Other Services
              </h3>
              <div className="flex flex-col gap-2.5 text-sm">
                <Link href="/meta-ads" className="text-gray-300 hover:text-white transition-colors">
                  Meta Ads
                </Link>
                <Link href="/google-ads" className="text-gray-300 hover:text-white transition-colors">
                  Google Ads
                </Link>
                <Link href="/social-media-management" className="text-gray-300 hover:text-white transition-colors">
                  Social Media
                </Link>
                <Link href="/tiktok-ads" className="text-gray-300 hover:text-white transition-colors">
                  TikTok Ads
                </Link>
                <Link href="/ai-call-agent" className="text-gray-300 hover:text-white transition-colors">
                  AI Call Agent
                </Link>
                <Link href="/video-animation" className="text-gray-300 hover:text-white transition-colors">
                  Video Animation
                </Link>
                <Link href="/real-user-chat" className="text-gray-300 hover:text-white transition-colors">
                  Real User Chat
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Rendro Systems. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
