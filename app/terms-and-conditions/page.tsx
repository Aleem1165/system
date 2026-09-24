"use client";

import React from "react";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  const quickLinks = [
    { id: "agreement", label: "1. Agreement" },
    { id: "services", label: "2. Services & Scope" },
    { id: "payments", label: "3. Payments & Guarantee" },
    { id: "responsibilities", label: "4. Client Duties" },
    { id: "sms", label: "5. SMS Terms" },
    { id: "ownership", label: "6. Ownership & IP" },
    { id: "third-party", label: "7. Third Parties" },
    { id: "warranties", label: "8. Results & Disclaimers" },
    { id: "liability", label: "9. Liability Limits" },
    { id: "termination", label: "10. Cancellation" },
    { id: "disputes", label: "11. Governing Law" },
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
            System Digital • Master Service Terms
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#101832] leading-[1.12] mb-6 max-w-3xl">
            Contractor terms.<br />
            <span className="bg-gradient-to-r from-[#7c35ed] via-[#9055ff] to-[#a855f7] bg-clip-text text-transparent italic font-serif font-normal">
              Built on transparency.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#566073] max-w-2xl leading-relaxed mb-6">
            These terms clarify exactly what System Digital delivers, what we require from your team, how subscription billing works, and the protections that keep both parties secure. Simple language. No deceptive clauses.
          </p>

          <p className="text-xs font-semibold text-gray-400">
            Effective & Updated: September 2026
          </p>

          {/* 3-Pill Executive Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 w-full text-left">
            <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
              <span className="text-xs font-bold text-[#7c35ed] uppercase tracking-wider block mb-1">
                30-Day Guarantee
              </span>
              <strong className="text-sm text-[#101832] block mb-1">
                Unconditional Money-Back
              </strong>
              <p className="text-xs text-[#566073] leading-relaxed">
                Both monthly and annual plans include a full 30-calendar-day refund window from your start date.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
              <span className="text-xs font-bold text-[#7c35ed] uppercase tracking-wider block mb-1">
                Deliverable Scope
              </span>
              <strong className="text-sm text-[#101832] block mb-1">
                Clear Order Specifications
              </strong>
              <p className="text-xs text-[#566073] leading-relaxed">
                Your selected subscription or approved proposal governs all technical deliverables and turnaround timelines.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs">
              <span className="text-xs font-bold text-[#7c35ed] uppercase tracking-wider block mb-1">
                Honest Execution
              </span>
              <strong className="text-sm text-[#101832] block mb-1">
                Proven Systems, No Fluff
              </strong>
              <p className="text-xs text-[#566073] leading-relaxed">
                We construct industry-grade digital infrastructure; nobody can ethically promise algorithm favoritism.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STICKY QUICK JUMP NAVIGATION BAR (Strictly 2 rows, horizontal scroll on mobile, NO scrollbar) */}
      {/* ========================================================================= */}
      <nav
        aria-label="Terms and conditions quick navigation"
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
      {/* 3. TERMS DOCUMENT BODY (Rewritten & Paraphrased Content) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-8">
          
          {/* Section 1: Agreement to Terms */}
          <div id="agreement" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              1. Acceptance & Scope of Agreement
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                These Terms and Conditions (&ldquo;Terms&rdquo;) establish the legally binding framework between your enterprise and System Digital LLC, operating as System Digital (&ldquo;System Digital,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By utilizing our website, confirming an onboarding agreement, activating an active subscription tier, or issuing payment against an invoice, you formally assent to these provisions.
              </p>
              <p>
                Should any specialized written proposal, statement of work (SOW), or custom client contract directly conflict with standard clauses in this master agreement, the stipulations of that signed contract shall control specifically for the disputed project item.
              </p>
            </div>
          </div>

          {/* Section 2: Services and scope */}
          <div id="services" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              2. Scope of Services, Deliverables & Operational Timing
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                System Digital engineers contractor digital assets, responsive web infrastructure, automated lead follow-up pipelines, missed-call recovery protocols, review generation systems, telecommunications routing, and technical marketing systems. Concrete deliverables, billing frequencies, revision allowances, and software access credentials are systematically cataloged in your active subscription agreement.
              </p>
              <p>
                Tasks extending outside designated plan scope require mutually approved change orders or separate project estimates. Delivery milestones remain contingent upon prompt receipt of required contractor assets, domain authentications, brand graphics, and timely written feedback. Schedule adjustments necessitated by third-party vendor downtime or pending client approvals will reasonably extend launch milestones. We reserve the authority to deploy optimal technical upgrades or platform substitutions to fulfill the core project objectives.
              </p>
            </div>
          </div>

          {/* Section 3: Payments and refund policy */}
          <div id="payments" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              3. Subscription Billing, Payment Obligations & 30-Day Guarantee
            </h2>
            
            <div className="space-y-4 text-sm text-[#566073] leading-relaxed">
              <p>
                You commit to satisfying all recurring subscription fees, statutory sales taxes, optional expansion modules, or advertising disbursements outlined during onboarding. Subscriptions are billed automatically in advance; unresolved payment defaults may prompt immediate temporary service suspension until current balances are settled.
              </p>

              <div className="p-5 rounded-2xl bg-[#faf8fd] border border-gray-200">
                <strong className="text-base text-[#101832] block mb-2">
                  Unconditional 30-Day Money-Back Guarantee
                </strong>
                <p className="text-xs text-[#566073] mb-3">
                  All first-time monthly and annual System Digital subscriptions feature an absolute, no-questions-asked 30-calendar-day refund policy. To exercise this guarantee, communicate in writing to <a href="mailto:support@systemdigital.com" className="text-[#7c35ed] font-semibold underline">support@systemdigital.com</a> within 30 days of initial checkout.
                </p>
                <p className="text-xs text-[#566073]">
                  Upon request verification, 100% of monies paid for that foundational subscription plan will be credited back. Once past the initial 30 calendar days, billing cycles become non-refundable (including prepaid annual commitments). The 30-day guarantee does not apply to renewals, subsequent billing cycles, third-party carrier disbursements, ad spend, or custom external development. Approved disbursements are submitted to payment gateways within 2&ndash;3 business days, though individual banking settlement networks may require standard processing intervals to reflect on statements.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#101832] mb-1.5">
                  Continuous Subscriptions & Cancellation Protocol
                </h3>
                <p>
                  Active memberships automatically renew at designated monthly or yearly intervals. You may terminate upcoming renewals at any time by dispatching a written request to <a href="mailto:support@systemdigital.com" className="text-[#7c35ed] font-semibold underline">support@systemdigital.com</a> prior to your scheduled renewal date. Cancellation ends future cycles upon completion of your paid term without retroactive refunds for elapsed periods.
                </p>
              </div>

              <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                <strong>Dispute Resolution Notice:</strong> If an unrecognized transaction arises, please contact our billing team first. Initiating unwarranted bank chargebacks for delivered systems may be classified as material default, and relevant contract documents, timestamped service deliveries, and verification logs will be forwarded directly to financial settlement providers.
              </div>
            </div>
          </div>

          {/* Section 4: Client duties and responsibilities */}
          <div id="responsibilities" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              4. Client Obligations, Asset Provision & Prohibited Uses
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                As a client partner, you affirm that all business documentation, photography, trademarks, customer claims, licensing certifications, and pricing data supplied to System Digital are precise and legally authorized for commercial publication. You maintain sole responsibility for auditing trade claims, service limitations, warranties, and regional contractor compliance prior to authorizing site launches.
              </p>
              <p>
                System Digital platforms must never be deployed for fraudulent advertising, defamatory messaging, intellectual infringement, deceptive consumer funnels, unsolicited bulk spamming, or operations violating local, state, or federal laws. You remain solely responsible for ensuring your sales practices comply with telemarketing mandates, carrier messaging rules, and professional trade licensing frameworks.
              </p>
            </div>
          </div>

          {/* Section 5: SMS and mobile terms */}
          <div id="sms" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-[#101832]">
                5. Mobile Telephony & SMS Compliance Framework
              </h2>
              <span className="text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-[#f5f3ff] text-[#7c35ed] border border-[#7c35ed]/20">
                A2P 10DLC
              </span>
            </div>

            <div className="space-y-4 text-sm text-[#566073] leading-relaxed">
              <p>
                Submitting a mobile number allows clients to independently opt in to (1) vital operational notifications concerning quote intakes, dispatch confirmations, missed-call text recoveries, and setup reminders, and/or (2) discretionary promotional notices detailing service expansion offers. Enrolling in operational messaging does not automatically subscribe you to marketing broadcasts. Both channels are elective, and consent to receive marketing SMS is never mandatory to obtain digital infrastructure.
              </p>
              <p>
                Message volume corresponds to ongoing system engagement. Wireless carrier message and data rates may apply. You may instantly revoke SMS enrollment at any moment by texting <strong>STOP</strong> in response to any System Digital broadcast. Text <strong>HELP</strong> for operational support, email <a href="mailto:support@systemdigital.com" className="text-[#7c35ed] font-semibold underline">support@systemdigital.com</a>, or call <a href="tel:+18888100013" className="text-[#7c35ed] font-semibold underline">(888) 810-0013</a>. Carriers cannot be held liable for delayed or unreceived dispatches.
              </p>
            </div>
          </div>

          {/* Section 6: Content ownership and IP */}
          <div id="ownership" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              6. Intellectual Property, Asset Ownership & Licensing
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                You retain complete, undisputed ownership over all proprietary contractor assets, project photography, logos, customer lists, and brand materials furnished to us. You grant System Digital a restricted, non-exclusive license to utilize these materials solely to execute and host your digital infrastructure.
              </p>
              <p>
                Following full payment of relevant invoices, you hold full commercial rights to customized web design deliverables expressly commissioned for your business. System Digital retains exclusive ownership over its proprietary underlying technology, proprietary code libraries, automation architectures, reusable components, workflow frameworks, and internal development methodologies. Third-party plugins, typography, and cloud engines remain under their individual commercial licenses.
              </p>
              <p>
                Unless confidential handling is formally established in writing, System Digital may present completed non-confidential project assets and contractor website builds within our digital design portfolio. You may opt out of portfolio publication at any time via written notice.
              </p>
            </div>
          </div>

          {/* Section 7: Third-party dependencies */}
          <div id="third-party" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              7. Third-Party Infrastructure, Cloud Networks & Ad Spend
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                Modern digital ecosystems rely on third-party cloud infrastructure, including high-availability web hosting, DNS registries, advertising platforms (Meta, Google), payment processors (Stripe), and telecommunications networks (Twilio). Server availability, review timelines, account policies, and carrier fee changes administered by external vendors operate beyond System Digital&apos;s direct governance.
              </p>
              <p>
                You retain direct responsibility for independent third-party software accounts maintained in your company name, as well as external platform disbursements or ad-spend budgets, unless explicitly bundled into your written plan specification.
              </p>
            </div>
          </div>

          {/* Section 8: Results and warranties */}
          <div id="warranties" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              8. Commercial Expectations, Warranties & Algorithm Realities
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                System Digital implements proven engineering practices, verified speed optimization, and responsive design systems tailored to maximize conversion rates. However, digital marketing outcomes are influenced by local market dynamics, contractor pricing, economic factors, and external search engine algorithms. We do not make misleading guarantees regarding organic search rankings, precise inbound lead volumes, guaranteed ad approvals, or unfluctuating sales revenue.
              </p>
              <p>
                To the fullest extent sanctioned by applicable legislation, our services and web software are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, devoid of implied warranties of merchantability, fitness for particular objectives, title, or non-infringement. No statement here circumvents consumer rights that cannot be lawfully waived.
              </p>
            </div>
          </div>

          {/* Section 9: Liability limitation */}
          <div id="liability" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              9. Limitation of Liability & Mutual Indemnification
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                To the maximum extent permitted by governing statute, System Digital LLC, its directors, and technical affiliates shall not be liable for incidental, special, punitive, exemplary, indirect, or consequential financial damages; lost business earnings, prospective revenue, interrupted operations, loss of client goodwill, or business disruption resulting from third-party vendor downtime, third-party account limitations, or client-provided content.
              </p>
              <p>
                System Digital&apos;s aggregate liability for all claims arising under this agreement shall be strictly capped at the total service fees paid by your business to System Digital for the specific service giving rise to the dispute during the three (3) calendar months immediately preceding the event. You agree to defend and hold harmless System Digital against third-party claims arising from unauthorized service deployment, intellectual infringement of supplied client assets, or violations of applicable regulations.
              </p>
            </div>
          </div>

          {/* Section 10: Cancellation and termination */}
          <div id="termination" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              10. Suspension, Termination & Contract Survival
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                Either party may terminate the ongoing engagement according to the parameters specified in the applicable order confirmation. System Digital reserves the right to immediately pause or terminate services upon non-payment, unlawful activity, abusive conduct toward team members, material breach, or security threats that jeopardize hosting integrity or partner compliance.
              </p>
              <p>
                Discontinuing active services does not forgive accrued balances earned prior to the termination date. Provisions concerning intellectual ownership, compensation obligations, liability caps, warranties, and dispute procedures survive the termination of services. We may update these terms periodically; continuous interaction with our digital platforms following modifications reflects acceptance of the revised standards.
              </p>
            </div>
          </div>

          {/* Section 11: Governing law and disputes */}
          <div id="disputes" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-4">
              11. Governing Law, Amicable Negotiation & Severability
            </h2>
            <div className="space-y-3 text-sm text-[#566073] leading-relaxed">
              <p>
                Prior to filing formal legal proceedings, both parties commit to an informal good-faith negotiation period of at least thirty (30) days to reach an amicable business resolution. Unless a separate bilateral agreement establishes otherwise, these Terms shall be construed and governed in accordance with applicable state laws, excluding conflict of legal principles.
              </p>
              <p>
                Should any provision within these Terms be judged invalid or unenforceable by a competent jurisdiction, the remaining terms shall continue in complete force and effect. Failure to enforce any clause does not constitute a waiver of future enforcement rights. Client agreements may not be assigned without our advance written consent; System Digital may reassign agreements in connection with corporate reorganizations, mergers, or asset acquisitions.
              </p>
            </div>
          </div>

          {/* Section 12: Inquiries and contact */}
          <div id="contact" className="bg-white rounded-3xl p-7 sm:p-10 border border-gray-200 shadow-sm scroll-mt-[195px] sm:scroll-mt-[204px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101832] mb-3">
              12. Questions or Agreement Support? Contact Us.
            </h2>
            <p className="text-sm text-[#566073] leading-relaxed mb-6">
              Connect directly with System Digital LLC for billing clarifications, subscription changes, or contract assistance.
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
