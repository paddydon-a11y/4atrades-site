"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workerTypes } from "@/lib/wizard-data";

export interface GangMember {
  tradeId: string;
  tradeName: string;
  quantity: number;
}

interface StepTeamProps {
  onSelect: (gangType: "individual" | "gang", members: GangMember[]) => void;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

function singularName(name: string) {
  return name.replace(/s$/, "");
}

export default function StepTeam({ onSelect }: StepTeamProps) {
  const [phase, setPhase] = useState<"choose" | "gang">("choose");
  const [direction, setDirection] = useState(1);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleGangSelect = () => {
    setDirection(1);
    setPhase("gang");
  };

  const handleBackToChoose = () => {
    setDirection(-1);
    setPhase("choose");
  };

  const setQty = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const totalMembers = Object.values(quantities).reduce((sum, q) => sum + q, 0);

  const handleContinue = () => {
    const members: GangMember[] = workerTypes
      .filter((wt) => (quantities[wt.id] || 0) > 0)
      .map((wt) => ({
        tradeId: wt.id,
        tradeName: wt.name,
        quantity: quantities[wt.id],
      }));
    onSelect("gang", members);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <AnimatePresence mode="wait" custom={direction}>
        {phase === "choose" ? (
          <motion.div
            key="choose"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-3 text-center">
              Are you an individual or part of a gang?
            </h2>
            <p className="text-text-muted text-center mb-8">
              Select how you&apos;d like to register
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.button
                type="button"
                variants={card}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSelect("individual", [])}
                className="bg-card border border-white/5 rounded-lg p-8 text-center transition-colors hover:border-accent/50 focus:outline-none focus:border-accent/50 min-h-[48px]"
              >
                <p className="text-3xl mb-2">👤</p>
                <p className="text-white font-bold text-xl">Individual</p>
                <p className="text-text-muted text-sm mt-1">Just me</p>
              </motion.button>

              <motion.button
                type="button"
                variants={card}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleGangSelect}
                className="bg-card border border-white/5 rounded-lg p-8 text-center transition-colors hover:border-accent/50 focus:outline-none focus:border-accent/50 min-h-[48px]"
              >
                <p className="text-3xl mb-2">👥</p>
                <p className="text-white font-bold text-xl">Part of a Gang</p>
                <p className="text-text-muted text-sm mt-1">I&apos;ve got a team</p>
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="gang"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-6 text-center">
              What&apos;s your gang made up of?
            </h2>

            <div className="text-center mb-6">
              <button
                type="button"
                onClick={handleBackToChoose}
                className="text-accent hover:text-accent-bright transition-colors text-sm font-medium min-h-[48px] px-4"
              >
                &larr; Back
              </button>
            </div>

            <motion.div
              className="space-y-2"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {workerTypes.map((wt) => {
                const qty = quantities[wt.id] || 0;
                return (
                  <motion.div
                    key={wt.id}
                    variants={card}
                    className="flex items-center justify-between bg-card border border-white/5 rounded-lg px-4 py-3"
                  >
                    <span className="text-white font-medium text-sm sm:text-base">
                      {singularName(wt.name)}
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setQty(wt.id, -1)}
                        disabled={qty === 0}
                        className="w-9 h-9 rounded-md bg-white/5 text-white font-bold text-lg flex items-center justify-center transition-colors hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed"
                      >
                        −
                      </button>
                      <span className={`w-6 text-center font-bold tabular-nums ${qty > 0 ? "text-accent" : "text-text-muted"}`}>
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(wt.id, 1)}
                        className="w-9 h-9 rounded-md bg-white/5 text-white font-bold text-lg flex items-center justify-center transition-colors hover:bg-white/10"
                      >
                        +
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-8">
              <button
                type="button"
                disabled={totalMembers === 0}
                onClick={handleContinue}
                className="w-full bg-accent hover:bg-accent-bright text-white font-bold rounded-sm px-8 py-3 transition-colors min-h-[48px] font-[family-name:var(--font-display)] tracking-wider text-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue ({totalMembers} {totalMembers === 1 ? "member" : "members"})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
