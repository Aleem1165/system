"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const quickLinks = [
    { id: "scope", label: "1. Scope" },
    { id: "collection", label: "2. Data We Collect" },
    { id: "use", label: "3. How We Use It" },
    { id: "sms", label: "4. SMS & Mobile" },
    { id: "sharing", label: "5. Information Sharing" },
    { id: "cookies", label: "6. Cookies & Pixels" },
    { id: "retention", label: "7. Storage & Security" },
    { id: "rights", label: "8. Your Rights" },
    { id: "children", label: "9. Children" },
    { id: "international", label: "10. International" },
    { id: "updates", label: "11. Policy Changes" },
    { id: "contact", label: "12. Inquiries" },
  ];

  // Clean URL if any leftover hash is present
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#faf8fd] text-[#101832]">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-36 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#7c35ed]/20 via-[#9055ff]/10 to-transparent blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c35ed]/10 text-[#7c35ed] border border-[#7c35ed]/20 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#7c35ed] animate-pulse" />
            System Digital • Legal & Data Protection
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#101832] leading-[1.12] mb-6 max-w-3xl">
            Your business data.<br />
            <span className="bg-gradient-to-r from-[#7c35ed] via-[#9055ff] to-[#a855f7] bg-clip-text text-transparent italic font-serif font-normal">
              Protected with integrity.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#566073] max-w-2xl leading-relaxed mb-6">
            This policy outlines what System Digital collects, how we put it to work for your business, under what circumstances it may be processed, and the authority you retain. Plain terms. Zero legal games.
          </p>

          <p className="text-xs font-semibold text-gray-400">
            Effective & Updated: September 2026
          </p>

          {/* 3-Pill Executive Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 w-full text-left">
            <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#7c35ed] block mb-1">
                Data Collection
              </span>
              <p className="text-xs text-[#566073] leading-relaxed">
                We collect only details you submit directly and essential diagnostic telemetry to keep your site online.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#7c35ed] block mb-1">
                Sole Purpose
              </span>
              <p className="text-xs text-[#566073] leading-relaxed">
                Used strictly to configure websites, route calls, deliver automated texts, manage billing, and defend lines.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#7c35ed] block mb-1">
                Your Control
              </span>
              <p className="text-xs text-[#566073] leading-relaxed">
                You maintain complete authority to inspect, update, export, or permanently erase your files anytime.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STICKY QUICK JUMP NAVIGATION BAR (Strictly 2 rows, horizontal scroll on mobile, NO scrollbar) */}
      {/* ========================================================================= */}
      <nav
        aria-label="Privacy policy quick navigation"
        className="sticky top-[80px] sm:top-[88px] z-30 py-2 sm:py-3 bg-[#faf8fd] transition-all"
      >
        <div className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 sm:px-6">
          <div className="flex flex-col gap-1.5 sm:gap-2 min-w-max mx-auto justify-center">
            {/* Line 1 */}
            <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2">
              {quickLinks.slice(0, 6).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-1.5 rounded-full bg-white text-[11px] sm:text-xs font-bold text-[#566073] hover:text-[#7c35ed] hover:border-[#7c35ed]/40 border border-gray-200 shadow-2xs transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Line 2 */}
            <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2">
              {quickLinks.slice(6).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-1.5 rounded-full bg-white text-[11px] sm:text-xs font-bold text-[#566073] hover:text-[#7c35ed] hover:border-[#7c35ed]/40 border border-gray-200 shadow-2xs transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 3. POLICY DOCUMENT BODY (Rewritten & Paraphrased Content) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-8">
          
          {/* Section 1: Who and what this covers */}
          <div id="scope" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              1. Scope & Covered Operations
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                This Privacy Policy establishes the standards under which System Digital LLC, operating as System Digital (&ldquo;System Digital,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), manages business and personal information across our website, discovery calls, customer onboarding, automated lead systems, and associated communications. System Digital LLC serves as the primary entity accountable for the data governed herein.
              </p>
              <p>
                This policy does not oversee or assume liability for independent external software, client-managed web portals, or third-party platforms hyperlinked from our pages. Third-party applications operate subject to their own respective terms and privacy documentation.
              </p>
            </div>
          </div>

          {/* Section 2: Information we collect */}
          <div id="collection" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              2. Data We Gather & How It Enters Our Systems
            </h2>
            
            <div className="space-y-5 text-sm text-[#566073] leading-relaxed">
              <div>
                <h3 className="text-base font-bold text-[#101832] mb-2.5">
                  Information submitted by you
                </h3>
                <ul className="space-y-2 pl-1">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                    <span>Business contact credentials, including your full name, enterprise entity name, business email address, cellular phone number, and targeted service counties.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                    <span>Project assets and trade details, such as existing domain names, trade licensing badges, marketing objectives, credentials, photography, and customer feedback.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                    <span>Subscription transaction data, encompassing plan selections, billing histories, and account statuses. Payment gateways securely tokenize financial transactions; raw card records are never stored on our servers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                    <span>Direct communications with our team, comprising emails, SMS messages, telephone consultations, and review notes recorded with appropriate advance notice or consent.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-base font-bold text-[#101832] mb-2">
                  Technical telemetry gathered automatically
                </h3>
                <p className="mb-3">
                  Whenever visitors navigate our web properties, automated security and hosting nodes record standard device headers, IP addresses, browser specifications, rough regional locations derived from IP, referral sources, and diagnostic request logs.
                </p>
                <div className="p-3.5 rounded-xl bg-[#faf8fd] border border-gray-100 text-xs text-gray-500">
                  Please never submit sensitive personal records such as Social Security numbers, government identification cards, medical data, or administrative passwords unless explicitly requested through an authorized, encrypted transmission channel.
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: How we use information */}
          <div id="use" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              3. Purpose & Utilization of Information
            </h2>
            <p className="text-sm text-[#566073] leading-relaxed mb-4">
              We process personal and contractor records strictly to execute legitimate business operations:
            </p>
            <ul className="space-y-2 pl-1 text-sm text-[#566073] mb-5">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Evaluating customer inquiries, preparing custom contractor proposals, and facilitating active communication;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Building, deploying, hosting, customizing, and continually refining your digital infrastructure;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Processing recurring software billing, generating accounting statements, and maintaining agreements;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Monitoring web platform performance, debugging server errors, and securing data pathways;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Delivering essential service alerts and, where legally authorized, relevant business growth announcements;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Deterring fraudulent inquiry submissions, abusive bot traffic, and cyber intrusions; and</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Fulfilling statutory legal mandates and defending legitimate rights of our organization and clients.</span>
              </li>
            </ul>
            <p className="text-sm text-[#566073] leading-relaxed">
              When contacting us by telephone or SMS, we may respond regarding your active inquiry or service setup. Marketing text alerts are dispatched solely if you have provided separate, explicit opt-in confirmation. Consent to promotional SMS is never mandatory to purchase services.
            </p>
          </div>

          {/* Section 4: SMS and mobile information */}
          <div id="sms" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-[#101832]">
                4. Mobile Telephony & SMS Compliance (A2P 10DLC Standards)
              </h2>
              <span className="text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-[#f5f3ff] text-[#7c35ed] border border-[#7c35ed]/20">
                A2P 10DLC Verified
              </span>
            </div>

            <div className="space-y-4 text-sm text-[#566073] leading-relaxed">
              <p>
                Whenever phone numbers are submitted, users may independently opt to receive (1) transactional and operational SMS regarding service requests, scheduled appointments, missed-call recoveries, and reminders, and (2) optional marketing announcements concerning service promotions. Each messaging stream is elective, utilizes separate unchecked opt-in mechanisms, and applies exclusively to the selected category. Marketing consent is never required to buy services. Message frequency varies, and standard wireless carrier message and data rates may apply.
              </p>

              <div className="p-4 rounded-2xl bg-[#faf8fd] border border-[#7c35ed]/20">
                <strong className="text-[#101832] block mb-1">
                  Our Uncompromising Mobile Sharing Commitment:
                </strong>
                <p className="text-xs text-[#566073]">
                  Mobile telephone numbers and SMS opt-in consent records are leveraged solely for the explicit operational functions outlined here. We do not sell, rent, lease, or share mobile phone numbers or SMS consent details with third parties, lead aggregators, or marketing affiliates for external promotional campaigns. This information is shared solely with telecommunications delivery vendors (such as Twilio) as strictly required to route and transmit System Digital communications.
                </p>
              </div>

              <p className="text-xs text-gray-500">
                You maintain the right to revoke SMS authorization at any time by sending <strong>STOP</strong> in response to any System Digital message. Reply <strong>HELP</strong> for operational assistance. Opting out of text messages does not limit communication via alternate approved channels.
              </p>
            </div>
          </div>

          {/* Section 5: When information is shared */}
          <div id="sharing" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              5. Authorized Disclosures & Infrastructure Partners
            </h2>
            <p className="text-sm text-[#566073] leading-relaxed mb-4">
              We disclose personal and operational data solely on an as-needed basis to vetted partners:
            </p>
            <ul className="space-y-2 pl-1 text-sm text-[#566073] mb-5">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Technology service providers managing web hosting, cloud telephony, meeting dispatch, analytics, secure payment gateways, and project pipelines;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Certified professional advisers, including corporate accountants, underwriters, auditors, and legal representatives;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Judicial bodies or law enforcement authorities whenever required by valid statute or when necessary to protect personal safety, platform integrity, or legal rights;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Prospective acquirers, successors, or financial evaluators in the event of an equity restructuring, asset sale, or corporate merger; and</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c35ed] mt-2 flex-shrink-0" />
                <span>Additional third parties whenever you explicitly direct or grant permission.</span>
              </li>
            </ul>
            <p className="text-sm text-[#566073] leading-relaxed">
              We never sell contractor records or customer information for financial gain. If advertising systems subject to statutory &ldquo;sale&rdquo; or &ldquo;cross-context behavioral advertising&rdquo; rules are implemented in the future, all required opt-out controls will be provided promptly.
            </p>
          </div>

          {/* Section 6: Cookies and similar technology */}
          <div id="cookies" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              6. Browser Storage, Cookies & Tracking Pixels
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                Our platform utilizes necessary browser session storage and performance cookies required for site navigation, user preferences, security defense, and load distribution. Host networks also log standard server access records.
              </p>
              <p>
                We employ Meta Pixel and Google Analytics integrations to assess advertising effectiveness, track completed quote requests, and optimize the delivery of Facebook and Instagram campaigns. These ad networks may employ cookies or digital identifiers subject to their proprietary privacy rules.
              </p>
              <p>
                You may modify cookie preferences through browser settings. Disabling essential storage may degrade interactive website components. While standardized &ldquo;Do Not Track&rdquo; protocols lack uniform consensus, we honor recognized Global Privacy Control (GPC) signals in jurisdictions where legally required.
              </p>
            </div>
          </div>

          {/* Section 7: Retention and security */}
          <div id="retention" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              7. Information Retention & Security Safeguards
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                We retain personal records only for the duration reasonably necessary to provide services, maintain accurate financial records, address disputes, enforce contractual terms, satisfy statutory tax mandates, and mitigate fraud. Retention timelines vary based on document classification.
              </p>
              <p>
                We enforce rigorous administrative, technical, and physical safeguards scaled to the sensitivity of processed data. Although no internet transmission or digital archive is 100% invulnerable, we implement industry-standard encryption protocols to safeguard your records against unauthorized access.
              </p>
            </div>
          </div>

          {/* Section 8: Your privacy choices */}
          <div id="rights" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              8. Your Statutory Rights & Privacy Options
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                Subject to your jurisdiction (including rights under state and regional frameworks such as CCPA/CPRA), you retain the right to request access to, rectification of, permanent deletion of, or an exportable copy of your personal data; to decline targeted advertising; or to contest decisions regarding your data.
              </p>
              <p>
                To lodge a request, email <a href="mailto:support@systemdigital.com" className="text-[#7c35ed] font-semibold underline">support@systemdigital.com</a> with the subject &ldquo;Privacy Rights Request&rdquo;, or call our hotline at <a href="tel:+18888100013" className="text-[#7c35ed] font-semibold underline">(888) 810-0013</a>. Provide your request details and jurisdiction. Identity verification may be required prior to fulfilling requests.
              </p>
              <p>
                System Digital guarantees non-discriminatory treatment when you exercise any statutory privacy right. Marketing emails can be discontinued via the embedded unsubscribe link. Service notifications may continue while your client relationship remains active.
              </p>
            </div>
          </div>

          {/* Section 9: Children's privacy */}
          <div id="children" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              9. Underage Individuals & Children&apos;s Privacy
            </h2>
            <p className="text-sm text-[#566073] leading-relaxed">
              Our website and business solutions are tailored exclusively for professional enterprises and adults aged 18 and older. We do not intentionally solicit or collect personal records from children under 13. If you believe a minor has submitted personal data to our servers, notify us immediately so we may investigate and purge the information.
            </p>
          </div>

          {/* Section 10: Visitors outside the United States */}
          <div id="international" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              10. International Visitors & Cross-Border Data Transfers
            </h2>
            <p className="text-sm text-[#566073] leading-relaxed">
              System Digital operates and maintains servers within the United States. If you connect to our services from abroad, your information will be transmitted, processed, and preserved in the United States and other global regions where our cloud partners operate, subject to established cross-border legal protections.
            </p>
          </div>

          {/* Section 11: Policy updates */}
          <div id="updates" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              11. Policy Modifications & Notification
            </h2>
            <p className="text-sm text-[#566073] leading-relaxed">
              We may revise this policy periodically to reflect enhancements in technology, carrier requirements, or legislative updates. Revised iterations will be published on this URL with an updated effective date. Continued engagement with our digital services following updates represents confirmation of the revised practices.
            </p>
          </div>

          {/* Section 12: Privacy questions? We answer those. */}
          <div id="contact" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-3">
              12. Questions or Privacy Requests? Contact Our Desk.
            </h2>
            <p className="text-sm text-[#566073] leading-relaxed mb-6">
              Reach out to System Digital LLC directly to discuss data protection, carrier compliance, or to initiate a privacy request.
            </p>

            <div className="p-6 rounded-2xl bg-[#faf8fd] border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <strong className="text-base text-[#101832] block">System Digital LLC</strong>
                <p className="text-xs text-gray-500 mt-1">Contractor Websites & Marketing Automation Systems</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:support@systemdigital.com"
                  className="px-5 py-2.5 rounded-[10px] bg-white border border-gray-200 text-xs font-bold text-[#7c35ed] hover:border-[#101832] transition-colors shadow-2xs text-center"
                >
                  support@systemdigital.com
                </a>
                <a
                  href="tel:+18888100013"
                  className="px-5 py-2.5 rounded-[10px] bg-[#121316] text-white text-xs font-bold hover:bg-[#20222a] transition-colors shadow-2xs text-center border border-white/12 hover:border-white/30"
                >
                  (888) 810-0013
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BOTTOM BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101832] mb-3">
            Ready to grow your contractor business?
          </h2>
          <p className="text-sm text-[#566073] mb-8 leading-relaxed">
            All-in-one functional website, missed-call text-back, and review automation for one simple price.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
            <Link
              href="/pricing"
              className="w-full sm:w-auto bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm px-7 py-3.5 rounded-[10px] shadow-md transition-all text-center whitespace-nowrap border border-white/12 hover:border-white/30"
            >
              View $297/mo Pricing
            </Link>
            <Link
              href="/book-a-call"
              className="w-full sm:w-auto px-6 py-3.5 rounded-[10px] border border-gray-200 text-sm font-bold text-[#101832] hover:bg-gray-50 transition-colors text-center whitespace-nowrap bg-white"
            >
              Book A Discovery Call
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
