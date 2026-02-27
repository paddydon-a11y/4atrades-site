"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StepConfirm() {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-12 text-center">
      {/* Animated checkmark */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 12,
          delay: 0.1,
        }}
        className="mx-auto mb-8 w-24 h-24 rounded-full bg-green-500/15 border-2 border-green-500 flex items-center justify-center"
      >
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="w-12 h-12 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M5 13l4 4L19 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          />
        </motion.svg>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-4"
      >
        Registration Submitted
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="text-text-muted text-lg leading-relaxed mb-8 max-w-md mx-auto"
      >
        Thanks for registering! A member of the 4A team will be in touch
        shortly to discuss opportunities in your area.
      </motion.p>

      {/* Phone CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mb-8"
      >
        <p className="text-text-muted text-sm mb-2">Want to speak to us now?</p>
        <a
          href="tel:03301337901"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-bright font-bold text-xl transition-colors min-h-[48px]"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          0330 133 7901
        </a>
      </motion.div>

      {/* Back to home */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
      >
        <Link
          href="/"
          className="bg-accent hover:bg-accent-bright text-white font-bold rounded-sm px-8 py-3 transition-colors min-h-[48px] font-[family-name:var(--font-display)] tracking-wider text-lg inline-block"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
