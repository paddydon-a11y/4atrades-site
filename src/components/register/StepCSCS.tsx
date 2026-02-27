"use client";

import { motion } from "framer-motion";

interface StepCSCSProps {
  onSelect: (hasCSCS: boolean) => void;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function StepCSCS({ onSelect }: StepCSCSProps) {
  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-8 text-center">
        Do you have a CSCS card?
      </h2>

      <motion.div
        className="grid grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.button
          type="button"
          variants={card}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect(true)}
          className="bg-card border border-white/5 rounded-lg p-8 text-center transition-colors hover:border-accent/50 focus:outline-none focus:border-accent/50 min-h-[48px]"
        >
          <p className="text-white font-bold text-2xl">Yes</p>
        </motion.button>

        <motion.button
          type="button"
          variants={card}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect(false)}
          className="bg-card border border-white/5 rounded-lg p-8 text-center transition-colors hover:border-accent/50 focus:outline-none focus:border-accent/50 min-h-[48px]"
        >
          <p className="text-white font-bold text-2xl">No</p>
        </motion.button>
      </motion.div>
    </div>
  );
}
