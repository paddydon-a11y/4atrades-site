"use client";

import { motion } from "framer-motion";
import { contractorTypes } from "@/lib/wizard-data";

interface StepContractorProps {
  onSelect: (contractorId: string) => void;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function StepContractor({ onSelect }: StepContractorProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-8 text-center">
        I am a...
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {contractorTypes.map((ct) => (
          <motion.button
            key={ct.id}
            type="button"
            variants={card}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(ct.id)}
            className="bg-card border border-white/5 rounded-lg p-6 text-left transition-colors hover:border-accent/50 focus:outline-none focus:border-accent/50 min-h-[48px]"
          >
            <p className="text-white font-bold text-lg mb-1">{ct.name}</p>
            <p className="text-text-muted text-sm">{ct.description}</p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
