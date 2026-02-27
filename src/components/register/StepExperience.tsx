"use client";

import { motion } from "framer-motion";
import { workerTypes } from "@/lib/wizard-data";

interface StepExperienceProps {
  tradeId: string;
  onSelect: (tier: string) => void;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function StepExperience({ tradeId, onSelect }: StepExperienceProps) {
  const trade = workerTypes.find((wt) => wt.id === tradeId);
  const tiers = trade?.tiers ?? [];
  const tierLabel = trade?.tierLabel ?? "Experience";
  const isYearsOfExperience = tierLabel === "Experience (years)";

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-3 text-center">
        {isYearsOfExperience ? "How many years of experience do you have?" : tierLabel}
      </h2>
      {!isYearsOfExperience && (
        <p className="text-text-muted text-center mb-8">
          Select the option that best describes you
        </p>
      )}
      {isYearsOfExperience && <div className="mb-8" />}

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {tiers.map((tier) => (
          <motion.button
            key={tier}
            type="button"
            variants={card}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(tier)}
            className="bg-card border border-white/5 rounded-lg p-6 text-center transition-colors hover:border-accent/50 focus:outline-none focus:border-accent/50 min-h-[48px]"
          >
            <p className="text-white font-bold text-lg">{tier}</p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
