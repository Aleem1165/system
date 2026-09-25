"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItemProps {
  title: string;
  href: string;
  desc?: string;
  icon?: React.ReactNode;
}

const systemSolutions: NavItemProps[] = [
  {
    title: "Functional Website",
    href: "/functional-website",
    desc: "Website in days",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="5" width="16" height="14" rx="2" strokeWidth="2" />
        <path d="M8 9h.01M11 9h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Missed Call Text Back",
    href: "/missed-call-text-back",
    desc: "Auto-text missed calls",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="6" y="3" width="9" height="18" rx="2" strokeWidth="2" />
        <path d="M18 8l-2 2 2 2M20 8l-2 2 2 2" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Live AI Chat 24/7",
    href: "/ai-chat-agent",
    desc: "24/7 lead capture",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 6h14v9H8l-3 3V6Z" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Mobile App & Inbox",
    href: "/all-in-one-inbox",
    desc: "One place for messages",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 5h14v14H5z" strokeWidth="2" />
        <path d="M5 13h4l2 3h2l2-3h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Business Phone",
    href: "/business-phone",
    desc: "Separate work calls",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="7" y="3" width="10" height="18" rx="2" strokeWidth="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Local SEO",
    href: "/local-seo",
    desc: "Found on Google",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="6" strokeWidth="2" />
        <path d="m16 16 4 4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "5-Star Review Funnel",
    href: "/review-funnel",
    desc: "More 5-star reviews",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "One-Click Campaigns",
    href: "/one-click-campaigns",
    desc: "Customer updates",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 19V5h10l4 4v10H5Z" strokeWidth="2" />
        <path d="M14 5v5h5M8 16v-4M12 16v-2M16 16v-5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Automated Follow Up",
    href: "/automated-follow-up",
    desc: "Text leads automatically",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M8 7h8M8 11h5M6 17l-3 3V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7" strokeWidth="2" />
        <circle cx="17" cy="17" r="4" strokeWidth="2" />
        <path d="M17 15v2l1.5 1" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const otherServices: NavItemProps[] = [
  {
    title: "Real User 24/7 Chat",
    href: "/real-user-chat",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 6h14v9H8l-3 3V6Z" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Social Media Management",
    href: "/social-media-management",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="7" cy="7" r="3" strokeWidth="2" />
        <circle cx="17" cy="12" r="3" strokeWidth="2" />
        <circle cx="8" cy="18" r="2" strokeWidth="2" />
        <path d="m10 8.5 4 2M14.5 14l-4.5 3" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Meta Ads (FB & Insta)",
    href: "/meta-ads",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 16c2.5-7 5-10 8-4s5.5 3 8-4" strokeWidth="2" />
        <path d="M4 8c2.5 7 5 10 8 4s5.5-3 8 4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Google Ads",
    href: "/google-ads",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="6" strokeWidth="2" />
        <path d="m16 16 4 4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "TikTok Ads",
    href: "/tiktok-ads",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M14 4v10a4 4 0 1 1-4-4" strokeWidth="2" />
        <path d="M14 4c1 3 3 4 6 4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "AI Call Agent 24/7",
    href: "/ai-call-agent",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M7 5h10v14H7z" strokeWidth="2" />
        <path d="M10 9h4M10 13h4M12 17h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Video Animation",
    href: "/video-animation",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="6" width="12" height="12" rx="2" strokeWidth="2" />
        <path d="m16 10 4-2v8l-4-2" strokeWidth="2" />
      </svg>
    ),
  },
];

const aboutPages: NavItemProps[] = [
  {
    title: "About Us",
    href: "/about-us",
    desc: "Get to know Rendro Systems",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3" strokeWidth="2" />
        <path d="M4 20c0-3 2-5 5-5s5 2 5 5" strokeWidth="2" />
        <path d="M17 9a3 3 0 1 0-1.5-5.6M16 15c2.5.4 4 2.2 4 5" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Our Process",
    href: "/our-process",
    desc: "Discover how we work",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 17 9 12l4 3 7-8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="4" cy="17" r="1.5" fill="currentColor" />
        <circle cx="9" cy="12" r="1.5" fill="currentColor" />
        <circle cx="13" cy="15" r="1.5" fill="currentColor" />
        <circle cx="20" cy="7" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Contact",
    href: "/contact",
    desc: "Chat with us",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
        <path d="m4 7 8 6 8-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Header() {
  const pathname = usePathname();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsExpand, setMobileSolutionsExpand] = useState(false);
  const [mobileAboutExpand, setMobileAboutExpand] = useState(false);

  const solutionsTimerRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on page navigation
  useEffect(() => {
    setSolutionsOpen(false);
    setAboutOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSolutionsEnter = () => {
    if (solutionsTimerRef.current) clearTimeout(solutionsTimerRef.current);
    setSolutionsOpen(true);
    setAboutOpen(false);
  };

  const handleSolutionsLeave = () => {
    solutionsTimerRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  const handleAboutEnter = () => {
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    setAboutOpen(true);
    setSolutionsOpen(false);
  };

  const handleAboutLeave = () => {
    aboutTimerRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Floating Glassmorphic Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[70] w-[calc(100%-24px)] sm:w-[calc(100%-32px)] max-w-[1440px] transition-all duration-300">
        <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_12px_36px_rgba(16,24,50,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] rounded-2xl sm:rounded-3xl px-4 sm:px-7 py-1.5 sm:py-2 flex items-center justify-between gap-4">

          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center select-none flex-shrink-0"
            aria-label="Home"
          >
            <Image
              src="/assets/images/logo.png"
              alt="Rendro Systems Logo"
              width={258}
              height={88}
              className="h-[30px] sm:h-[36px] md:h-[42px] w-auto object-contain transition-all"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-[#101832]">

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
            >
              <button
                type="button"
                className={`relative group/nav flex items-center gap-1.5 py-2 px-1 text-[#101832] hover:text-gray-600 transition-colors cursor-pointer ${solutionsOpen ? "text-gray-600" : ""}`}
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
              >
                <span>Solutions</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180 text-gray-600" : "text-gray-400"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
                {/* Animated Orange Underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#ff7a1a] rounded-full transition-all duration-300 ease-out ${solutionsOpen ? "w-full" : "w-0 group-hover/nav:w-full"
                    }`}
                />
              </button>

              {/* Mega Menu Overlay */}
              {solutionsOpen && (
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-[42%] w-[840px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-12 gap-6 animate-in fade-in zoom-in-95 duration-150">
                  {/* Left Column: Website & Marketing System */}
                  <div className="col-span-8 pr-5 border-r border-gray-100">
                    <div className="pb-3 mb-3 border-b border-gray-100">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Website & Marketing System
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {systemSolutions.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-100 text-[#101832] transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-white text-gray-700 flex items-center justify-center flex-shrink-0 transition-colors shadow-xs">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-[14px] font-bold leading-snug">{item.title}</div>
                            {item.desc && (
                              <div className="text-[12px] text-gray-500 font-normal">{item.desc}</div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Other Services */}
                  <div className="col-span-4 pl-1">
                    <div className="pb-3 mb-3 border-b border-gray-100">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Other Services
                      </h3>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {otherServices.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-100 text-[13px] font-semibold text-[#101832] transition-colors group"
                        >
                          <div className="w-6 h-6 rounded-md bg-gray-50 group-hover:bg-white text-gray-700 flex items-center justify-center flex-shrink-0">
                            {item.icon}
                          </div>
                          <span className="truncate">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Who We Help Link */}
            <Link
              href="/who-we-help"
              className={`relative group/nav py-2 text-[#101832] hover:text-gray-600 transition-colors ${pathname === "/who-we-help" ? "text-gray-600" : ""}`}
            >
              <span>Who We Help</span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#ff7a1a] rounded-full transition-all duration-300 ease-out ${pathname === "/who-we-help" ? "w-full" : "w-0 group-hover/nav:w-full"
                  }`}
              />
            </Link>

            {/* Pricing Link */}
            <Link
              href="/pricing"
              className={`relative group/nav py-2 text-[#101832] hover:text-gray-600 transition-colors ${pathname === "/pricing" ? "text-gray-600" : ""}`}
            >
              <span>Pricing</span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#ff7a1a] rounded-full transition-all duration-300 ease-out ${pathname === "/pricing" ? "w-full" : "w-0 group-hover/nav:w-full"
                  }`}
              />
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                type="button"
                className={`relative group/nav flex items-center gap-1.5 py-2 px-1 text-[#101832] hover:text-gray-600 transition-colors cursor-pointer ${aboutOpen ? "text-gray-600" : ""}`}
                onClick={() => setAboutOpen(!aboutOpen)}
                aria-expanded={aboutOpen}
              >
                <span>About</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? "rotate-180 text-gray-600" : "text-gray-400"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
                {/* Animated Orange Underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#ff7a1a] rounded-full transition-all duration-300 ease-out ${aboutOpen ? "w-full" : "w-0 group-hover/nav:w-full"
                    }`}
                />
              </button>

              {/* About Dropdown Panel */}
              {aboutOpen && (
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 flex flex-col gap-1 animate-in fade-in zoom-in-95 duration-150">
                  {aboutPages.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-100 text-[#101832] transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-white text-gray-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[14px] font-bold">{item.title}</div>
                        {item.desc && (
                          <div className="text-[12px] text-gray-500 font-normal">{item.desc}</div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Phone */}
            <a
              href="tel:+18888100013"
              className="hidden xl:flex items-center gap-1.5 text-[14px] font-semibold text-[#101832] hover:text-[#ea580c] transition-colors py-1.5 px-3 rounded-[10px] hover:bg-black/5"
            >
              <svg className="w-4 h-4 text-[#ea580c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>(888) 810-0013</span>
            </a>

            {/* Book a Call Primary Button */}
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center bg-[#121316] text-white font-bold text-[13px] sm:text-[14px] px-5 sm:px-6 py-2 sm:py-2.5 rounded-[10px] border border-white/12 cursor-pointer"
            >
              <span className="tracking-tight">Book a Call</span>
            </Link>



            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="lg:hidden w-10 h-10 rounded-xl bg-[#121316] hover:bg-[#20222a] active:scale-90 border border-white/15 flex flex-col items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-5 h-4 flex items-center justify-end">
                <span
                  className={`absolute left-0 right-0 h-[2px] rounded-full bg-white transition-all duration-300 origin-center ${mobileMenuOpen
                    ? "rotate-45 translate-y-0"
                    : "-translate-y-[6px]"
                    }`}
                />
                <span
                  className={`h-[2px] rounded-full bg-white transition-all duration-200 ${mobileMenuOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"
                    }`}
                />
                <span
                  className={`absolute left-0 right-0 h-[2px] rounded-full bg-white transition-all duration-300 origin-center ${mobileMenuOpen
                    ? "-rotate-45 translate-y-0"
                    : "translate-y-[6px]"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-backdrop-enter"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Body */}
          <div className="relative mt-24 sm:mt-26 mx-3 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 max-h-[calc(100vh-116px)] overflow-y-auto z-50 flex flex-col gap-5 animate-drawer-enter origin-top">
            {/* Top actions inside drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                Menu
              </span>
              <a
                href="tel:+18888100013"
                className="text-xs font-semibold text-[#ea580c] flex items-center gap-1"
              >
                (888) 810-0013
              </a>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-3">
              {/* Solutions Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileSolutionsExpand(!mobileSolutionsExpand)}
                  className="w-full flex items-center justify-between text-base font-bold text-[#101832] py-2 cursor-pointer"
                >
                  <span>Solutions</span>
                  <span className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-4 h-4 text-[#ea580c] transition-transform duration-200 ease-out origin-center ${mobileSolutionsExpand ? "rotate-45" : "rotate-0"
                        }`}
                    >
                      <line x1="12" y1="6" x2="12" y2="18" />
                      <line x1="6" y1="12" x2="18" y2="12" />
                    </svg>
                  </span>
                </button>

                {mobileSolutionsExpand && (
                  <div className="mt-2 pl-3 border-l-2 border-[#ff7a1a]/20 flex flex-col gap-2">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                      System Features
                    </div>
                    {systemSolutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-gray-700 hover:text-[#ea580c] py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}

                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-3">
                      Other Services
                    </div>
                    {otherServices.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-gray-700 hover:text-[#ea580c] py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Who We Help */}
              <Link
                href="/who-we-help"
                className="text-base font-bold text-[#101832] py-2 hover:text-[#ea580c]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Who We Help
              </Link>

              {/* Pricing */}
              <Link
                href="/pricing"
                className="text-base font-bold text-[#101832] py-2 hover:text-[#ea580c]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              {/* About Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileAboutExpand(!mobileAboutExpand)}
                  className="w-full flex items-center justify-between text-base font-bold text-[#101832] py-2 cursor-pointer"
                >
                  <span>About</span>
                  <span className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-4 h-4 text-[#ea580c] transition-transform duration-200 ease-out origin-center ${mobileAboutExpand ? "rotate-45" : "rotate-0"
                        }`}
                    >
                      <line x1="12" y1="6" x2="12" y2="18" />
                      <line x1="6" y1="12" x2="18" y2="12" />
                    </svg>
                  </span>
                </button>

                {mobileAboutExpand && (
                  <div className="mt-2 pl-3 border-l-2 border-[#ff7a1a]/20 flex flex-col gap-2">
                    {aboutPages.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-gray-700 hover:text-[#ea580c] py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Bottom CTAs */}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <Link
                href="/book-a-call"
                className="w-full bg-[#121316] text-white text-center font-bold py-3 rounded-[10px] border border-white/12 flex items-center justify-center cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Book a Call</span>
              </Link>


            </div>
          </div>
        </div>
      )}
    </>
  );
}
