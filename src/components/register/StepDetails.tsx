"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface StepDetailsProps {
  onSubmit: (name: string, phone: string) => void;
  submitting: boolean;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
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

export default function StepDetails({ onSubmit, submitting }: StepDetailsProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const isValid = name.trim() !== "" && phone.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || submitting) return;
    onSubmit(name.trim(), phone.trim());
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-2">
          Your Details
        </h2>
        <p className="text-text-muted">
          We just need your name and number to get started
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <motion.div
          className="space-y-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={field}>
            <label htmlFor="reg-name" className={labelClasses}>
              Full Name *
            </label>
            <input
              id="reg-name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className={inputClasses}
            />
          </motion.div>

          <motion.div variants={field}>
            <label htmlFor="reg-phone" className={labelClasses}>
              Phone Number *
            </label>
            <input
              id="reg-phone"
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07XXX XXXXXX"
              className={inputClasses}
            />
          </motion.div>
        </motion.div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={!isValid || submitting}
            className="w-full bg-accent hover:bg-accent-bright text-white font-bold rounded-sm px-8 py-3 transition-colors min-h-[48px] font-[family-name:var(--font-display)] tracking-wider text-lg disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
              "Register"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
