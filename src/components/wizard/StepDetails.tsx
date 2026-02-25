"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { durationOptions } from "@/lib/wizard-data";
import type { JobDetails } from "@/lib/wizard-data";

interface StepDetailsProps {
  details: JobDetails;
  onChange: (details: JobDetails) => void;
  onSubmit: () => void;
  onBack: () => void;
  submitting: boolean;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const field = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

const inputClasses =
  "w-full bg-card border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors min-h-[48px]";

const labelClasses =
  "block text-sm font-semibold text-text-muted uppercase tracking-wider mb-1.5";

export default function StepDetails({
  details,
  onChange,
  onSubmit,
  onBack,
  submitting,
}: StepDetailsProps) {
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const update = (key: keyof JobDetails, value: string) => {
    onChange({ ...details, [key]: value });
  };

  const isValid =
    details.company.trim() !== "" &&
    details.contactName.trim() !== "" &&
    details.phone.trim() !== "" &&
    details.email.trim() !== "" &&
    details.siteAddress.trim() !== "" &&
    details.postcode.trim() !== "" &&
    details.startDate.trim() !== "" &&
    details.duration.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || !agreedTerms || submitting) return;
    onSubmit();
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-2">
          Job Details
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <motion.div
          className="space-y-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Company name */}
          <motion.div variants={field}>
            <label htmlFor="company" className={labelClasses}>
              Company Name *
            </label>
            <input
              id="company"
              type="text"
              required
              value={details.company}
              onChange={(e) => update("company", e.target.value)}
              placeholder="Your company name"
              className={inputClasses}
            />
          </motion.div>

          {/* Contact name */}
          <motion.div variants={field}>
            <label htmlFor="contactName" className={labelClasses}>
              Contact Name *
            </label>
            <input
              id="contactName"
              type="text"
              required
              value={details.contactName}
              onChange={(e) => update("contactName", e.target.value)}
              placeholder="Full name"
              className={inputClasses}
            />
          </motion.div>

          {/* Phone + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={field}>
              <label htmlFor="phone" className={labelClasses}>
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={details.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="07XXX XXXXXX"
                className={inputClasses}
              />
            </motion.div>

            <motion.div variants={field}>
              <label htmlFor="email" className={labelClasses}>
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                value={details.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@company.co.uk"
                className={inputClasses}
              />
            </motion.div>
          </div>

          {/* Site address */}
          <motion.div variants={field}>
            <label htmlFor="siteAddress" className={labelClasses}>
              Site Address *
            </label>
            <textarea
              id="siteAddress"
              required
              rows={3}
              value={details.siteAddress}
              onChange={(e) => update("siteAddress", e.target.value)}
              placeholder="Full site address"
              className={`${inputClasses} resize-none`}
            />
          </motion.div>

          {/* Postcode + Start date row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={field}>
              <label htmlFor="postcode" className={labelClasses}>
                Site Postcode *
              </label>
              <input
                id="postcode"
                type="text"
                required
                value={details.postcode}
                onChange={(e) => update("postcode", e.target.value)}
                placeholder="e.g. NE1 4AA"
                className={inputClasses}
              />
            </motion.div>

            <motion.div variants={field}>
              <label htmlFor="startDate" className={labelClasses}>
                Start Date *
              </label>
              <input
                id="startDate"
                type="date"
                required
                value={details.startDate}
                onChange={(e) => update("startDate", e.target.value)}
                className={`${inputClasses} [color-scheme:dark]`}
              />
            </motion.div>
          </div>

          {/* Duration */}
          <motion.div variants={field}>
            <label htmlFor="duration" className={labelClasses}>
              Duration *
            </label>
            <select
              id="duration"
              required
              value={details.duration}
              onChange={(e) => update("duration", e.target.value)}
              className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23999%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}
            >
              <option value="" disabled>
                Select duration
              </option>
              {durationOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Special requirements */}
          <motion.div variants={field}>
            <label htmlFor="specialRequirements" className={labelClasses}>
              Special Requirements
            </label>
            <textarea
              id="specialRequirements"
              rows={4}
              value={details.specialRequirements}
              onChange={(e) => update("specialRequirements", e.target.value)}
              placeholder="e.g. special PPE required"
              className={`${inputClasses} resize-none`}
            />
          </motion.div>
        </motion.div>

        {/* Terms & Conditions checkbox */}
        <label className="flex items-start gap-3 mt-6 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={agreedTerms}
            onChange={(e) => setAgreedTerms(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-white/20 bg-card cursor-pointer accent-[#FF6B00]"
          />
          <span className="text-sm text-text-muted leading-relaxed">
            I agree to the 4A Trades{" "}
            <button
              type="button"
              onClick={() => setShowTerms(true)}
              className="text-accent hover:underline cursor-pointer font-semibold"
            >
              Terms &amp; Conditions
            </button>
          </span>
        </label>

        {/* T&C Modal */}
        <AnimatePresence>
          {showTerms && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.target === e.currentTarget && setShowTerms(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-darker border border-white/10 rounded-lg w-full max-w-2xl max-h-[80vh] flex flex-col"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
                  <h3 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-xl">
                    Terms &amp; Conditions
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowTerms(false)}
                    className="text-text-muted hover:text-white text-2xl leading-none"
                  >
                    &times;
                  </button>
                </div>
                <div className="overflow-y-auto px-6 py-5 text-sm text-text-muted leading-relaxed space-y-4">
                  <p className="text-accent font-bold text-base">Labour Agency CLIENT Terms &amp; Conditions</p>
                  <p className="text-white font-semibold">4A Trades (4A Ventures Limited) — Effective Immediately</p>

                  <TermsSection n="1" title="Parties to the Agreement">
                    <p>1.1 &quot;4A Trades&quot; means 4A Ventures Limited.</p>
                    <p>1.2 &quot;The Client&quot; means any person, company or firm instructing 4A Trades.</p>
                    <p>1.3 Instructions may be given verbally, in writing, or by conduct. Any person working for or acting on behalf of the Client is deemed authorised to issue and receive instructions.</p>
                    <p>1.4 Email confirmation from the Client must be received before any services are provided by 4A Trades.</p>
                  </TermsSection>

                  <TermsSection n="2" title="Agreement">
                    <p>2.1 4A Trades will use best endeavours to supply labour and tradespeople (&quot;Resources&quot;) as requested.</p>
                    <p>2.2 The Client agrees to pay all charges for Resources deployed, in accordance with these Terms and/or any written quotations issued by 4A Trades prior to the start of the contract.</p>
                  </TermsSection>

                  <TermsSection n="3" title="CIS and VAT Status">
                    <p>3.1 Neither the Construction Industry Scheme (CIS) nor the Domestic Reverse Charge for VAT apply to this supply.</p>
                    <p>3.2 4A Trades operates as an employment business, retaining full employer responsibility for workers, as confirmed by HMRC guidance.</p>
                    <p>3.3 4A Trades is a supplier, not a sub-contractor, for both CIS and VAT purposes.</p>
                    <p>3.4 On new build sites, standard VAT must still be charged, and is fully reclaimable by the Client as with all other suppliers.</p>
                  </TermsSection>

                  <TermsSection n="4" title="Precedence of Terms &amp; Surcharges">
                    <p>4.1 These Terms override all verbal agreements and all Client terms unless expressly accepted in writing by a 4A Trades director with independent witness signature.</p>
                    <p>4.2 All rates quoted are subject to VAT at the prevailing rate.</p>
                  </TermsSection>

                  <TermsSection n="5" title="Minimum Daily Charge &amp; Cancellations">
                    <p>5.1 Any request for a worker automatically commits the Client to a minimum charge of 9 hours, even if the Client cancels before the worker starts.</p>
                  </TermsSection>

                  <TermsSection n="6" title="Quality Control">
                    <p>6.1 The Client is solely responsible for quality control.</p>
                    <p>6.2 Any unsatisfactory work must be rejected immediately and communicated directly to the operative.</p>
                    <p>6.3 4A Trades accepts no responsibility for the quality of any operative&apos;s work.</p>
                    <p>6.4 No set-off, deduction or withholding is permitted.</p>
                  </TermsSection>

                  <TermsSection n="7" title="Best Endeavours Only / No Guarantees">
                    <p>7.1 4A Trades will use best endeavours to provide Resources quickly and efficiently.</p>
                    <p>7.2 No guarantee is given regarding worker quality, punctuality, performance or availability.</p>
                    <p>7.3 No liquidated damages, penalties, or set-off are permitted under any circumstances.</p>
                  </TermsSection>

                  <TermsSection n="8" title="Weekly Booking-In &amp; Payment Terms">
                    <p>8.1 Weekly booking-in sheets covering all operatives will be issued every Monday before 5.00pm.</p>
                    <p>8.2 Payment must be made by Friday of the same week, via BACS or Faster Payments to: 4A Ventures Limited — Sort Code: 60-83-71 — Account: 54288514.</p>
                    <p>8.3 Cheques are not accepted.</p>
                  </TermsSection>

                  <TermsSection n="9" title="Late Payment Charges">
                    <p>9.1 Late payments automatically attract a charge of £75 per week or part-week.</p>
                    <p>9.2 Additional recovery charges may also apply.</p>
                  </TermsSection>

                  <TermsSection n="10" title="Retention / MCD">
                    <p>10.1 Retentions and MCD do not apply to Resource Plus contracts.</p>
                  </TermsSection>

                  <TermsSection n="11" title="Insurance">
                    <p>11.1 The Client is fully responsible for insuring all works, operatives, visitors and members of the public, unless expressly agreed otherwise in writing.</p>
                  </TermsSection>

                  <TermsSection n="12" title="Minimum Hours, Start/Finish Times &amp; Overtime">
                    <p>12.1 All operatives, machinery and plant carry a minimum daily charge of 9 hours.</p>
                    <p>12.2 Standard hours are 7:30am–4:30pm, Monday–Friday, unless site dictates otherwise.</p>
                    <p>12.3 If longer hours are worked, 1 additional hour per day will be added for invoicing purposes.</p>
                  </TermsSection>

                  <TermsSection n="13" title="Health, Safety &amp; Welfare">
                    <p>13.1 The Client is fully responsible for all site Health, Safety and Welfare obligations.</p>
                    <p>13.2 These statutory duties cannot be delegated to 4A Trades or its operatives.</p>
                    <p>13.3 All 4A operatives must be inducted by the Client and must follow all Client HSE rules.</p>
                    <p>13.4 4A operatives are instructed never to take unnecessary risks under any circumstances.</p>
                  </TermsSection>

                  <TermsSection n="14" title="Charging Structure">
                    <p>Unless otherwise agreed in writing:</p>
                    <p>14.1 Labour and plant are charged at Cost + £3 per hour.</p>
                    <p>14.2 VAT and 5% surcharge are then added on top.</p>
                  </TermsSection>

                  <TermsSection n="15" title="Non-Solicitation of Staff">
                    <p>15.1 The Client shall not employ, engage or contract directly with any operative supplied by 4A Trades for 24 months after their last day on site.</p>
                    <p>15.2 Breach of this clause triggers an immediate fee equal to 20% of the operative&apos;s annual cost.</p>
                  </TermsSection>

                  <TermsSection n="16" title="Recruitment Services">
                    <p>16.1 If the Client requests permanent recruitment, a fee of 9% of annual salary will be charged.</p>
                    <p>16.2 No discount or reduction applies if employment lasts less than 12 months.</p>
                  </TermsSection>

                  <TermsSection n="17" title="Intellectual Property">
                    <p>17.1 All forms, templates, documents and schedules produced by 4A Trades are the intellectual property of 4A Trades.</p>
                    <p>17.2 They may only be used on live contracts involving 4A Trades.</p>
                  </TermsSection>

                  <TermsSection n="18" title="Site Ring-Fencing">
                    <p>18.1 Each site is treated as a separate project with ring-fenced resources and costs.</p>
                  </TermsSection>

                  <TermsSection n="19" title="Assignment &amp; Suspension Rights">
                    <p>19.1 4A Trades may assign, subcontract or transfer any part of the contract at any time.</p>
                    <p>19.2 4A Trades may suspend work at any time without notice.</p>
                    <p>19.3 4A Trades may assign any debt—disputed or undisputed, overdue or not—to any third party.</p>
                  </TermsSection>

                  <TermsSection n="20" title="Director Liability">
                    <p>20.1 Where the Client is a limited company, all company directors become jointly and severally liable for payment should the company be unable to pay.</p>
                  </TermsSection>

                  <TermsSection n="21" title="Payment Dependency">
                    <p>21.1 Operatives supplied by 4A Trades will not be paid unless and until the Client has paid 4A Trades.</p>
                  </TermsSection>

                  <TermsSection n="22" title="Governing Law &amp; Dispute Resolution">
                    <p>22.1 These Terms are governed by English Law.</p>
                    <p>22.2 Both parties agree to attempt amicable resolution and, if required, meet to discuss the matter prior to formal proceedings.</p>
                  </TermsSection>
                </div>
                <div className="px-6 py-4 border-t border-white/10 shrink-0">
                  <button
                    type="button"
                    onClick={() => setShowTerms(false)}
                    className="w-full bg-accent hover:bg-accent-bright text-white font-bold rounded-sm px-6 py-3 transition-colors font-[family-name:var(--font-display)] tracking-wider"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button
            type="button"
            onClick={onBack}
            className="sm:flex-none text-text-muted hover:text-white transition-colors text-sm font-medium min-h-[48px] px-6 py-3 border border-white/10 rounded-sm hover:border-white/20"
          >
            &larr; Back
          </button>
          <button
            type="submit"
            disabled={!isValid || !agreedTerms || submitting}
            className="flex-1 bg-accent hover:bg-accent-bright text-white font-bold rounded-sm px-8 py-3 transition-colors min-h-[48px] font-[family-name:var(--font-display)] tracking-wider text-lg disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {submitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </>
            ) : (
              "Submit Order"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function TermsSection({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-1">{n}. {title}</h4>
      <div className="space-y-1 pl-1">{children}</div>
    </div>
  );
}
