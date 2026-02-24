"use client";

import { motion } from "framer-motion";
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
    if (!isValid || submitting) return;
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
              placeholder="PPE requirements, CSCS cards, certifications, site inductions etc."
              className={`${inputClasses} resize-none`}
            />
          </motion.div>
        </motion.div>

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
            disabled={!isValid || submitting}
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
