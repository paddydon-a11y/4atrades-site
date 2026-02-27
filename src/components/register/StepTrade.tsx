"use client";

import { motion } from "framer-motion";
import { workerTypes } from "@/lib/wizard-data";

interface StepTradeProps {
  onSelect: (tradeId: string, tradeName: string) => void;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function StepTrade({ onSelect }: StepTradeProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-8 text-center">
        What is your trade?
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {workerTypes.map((wt) => (
          <motion.button
            key={wt.id}
            type="button"
            variants={card}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(wt.id, wt.name)}
            className="bg-card border border-white/5 rounded-lg p-4 text-center transition-colors hover:border-accent/50 focus:outline-none focus:border-accent/50 min-h-[48px]"
          >
            <p className="text-white font-bold text-sm sm:text-base">{wt.name.replace(/s$/, '')}</p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
