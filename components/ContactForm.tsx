"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    trade: "Plumbing",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-xl text-center flex flex-col items-center justify-center min-h-[460px]">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl font-black mb-5 shadow-sm">
          ✓
        </div>
        <h3 className="text-2xl font-extrabold text-[#101832] mb-3">
          Message Received!
        </h3>
        <p className="text-sm text-[#566073] max-w-sm leading-relaxed mb-6">
          Thank you, <strong>{formData.name || "friend"}</strong>. One of our lead contractor specialists will call or text you at <strong>{formData.phone || "your number"}</strong> within 2 business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold text-[#7c35ed] hover:underline"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-xl relative">
      <div className="flex items-center justify-between pb-5 border-b border-gray-100 mb-6">
        <div>
          <h3 className="text-xl font-extrabold text-[#101832]">Direct Project Inquiry</h3>
          <p className="text-xs text-gray-500 mt-0.5">Tell us about your trade business and what you want to fix</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#f5f3ff] text-[#7c35ed] text-xs font-bold uppercase tracking-wider font-mono">
          Fast Reply
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#101832] uppercase tracking-wider mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Mike Miller"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#101832] placeholder-gray-400 focus:outline-none focus:border-[#7c35ed] focus:ring-2 focus:ring-[#7c35ed]/20 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#101832] uppercase tracking-wider mb-1.5">
              Company Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Miller & Sons Plumbing"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#101832] placeholder-gray-400 focus:outline-none focus:border-[#7c35ed] focus:ring-2 focus:ring-[#7c35ed]/20 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#101832] uppercase tracking-wider mb-1.5">
              Direct Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#101832] placeholder-gray-400 focus:outline-none focus:border-[#7c35ed] focus:ring-2 focus:ring-[#7c35ed]/20 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#101832] uppercase tracking-wider mb-1.5">
              Work Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="mike@millerplumbing.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#101832] placeholder-gray-400 focus:outline-none focus:border-[#7c35ed] focus:ring-2 focus:ring-[#7c35ed]/20 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#101832] uppercase tracking-wider mb-1.5">
            Primary Trade Industry *
          </label>
          <select
            value={formData.trade}
            onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#101832] bg-white focus:outline-none focus:border-[#7c35ed] focus:ring-2 focus:ring-[#7c35ed]/20 transition-all"
          >
            <option value="Plumbing">Plumbing &amp; Drain Cleaning</option>
            <option value="HVAC">HVAC &amp; Heating/Air</option>
            <option value="Roofing">Roofing &amp; Gutters</option>
            <option value="Electrical">Electrical Services</option>
            <option value="Remodeling">Kitchen, Bath &amp; General Remodeling</option>
            <option value="Landscaping">Landscaping &amp; Tree Service</option>
            <option value="Other">Other Local Trade</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#101832] uppercase tracking-wider mb-1.5">
            What is your biggest current bottleneck? (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="e.g. Missing calls while working on jobsites, poor website rankings, or need more 5-star Google reviews..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#101832] placeholder-gray-400 focus:outline-none focus:border-[#7c35ed] focus:ring-2 focus:ring-[#7c35ed]/20 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 sm:py-4 rounded-[10px] bg-[#121316] hover:bg-[#20222a] text-white font-bold text-sm border border-white/12 hover:border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 ease-out flex items-center justify-center gap-2 mt-2 cursor-pointer"
        >
          <span>Send Quick Message</span>
          <span className="text-base font-bold">→</span>
        </button>
        <p className="text-[11px] text-gray-400 text-center mt-2">
          🔒 Zero spam. We only contact you regarding your system inquiry.
        </p>
      </form>
    </div>
  );
}
