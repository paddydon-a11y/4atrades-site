"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { regionCounties } from "@/lib/rates";

interface StepLocationProps {
  onSelect: (region: string, county: string) => void;
  onBack: () => void;
  initialRegion?: string;
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

// Map URL slugs to regionCounties keys
function resolveRegionFromSlug(slug?: string): string | null {
  if (!slug) return null;
  const regions = Object.keys(regionCounties);
  const normalised = slug.toLowerCase().replace(/-/g, " ");
  return (
    regions.find(
      (r) => r.toLowerCase() === normalised || r.toLowerCase().replace(/ and the /g, " and the ") === normalised,
    ) ?? null
  );
}

export default function StepLocation({ onSelect, onBack, initialRegion }: StepLocationProps) {
  const resolved = resolveRegionFromSlug(initialRegion);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(resolved);
  const [direction, setDirection] = useState(resolved ? 1 : 1);

  const regions = Object.keys(regionCounties) as (keyof typeof regionCounties)[];

  const handleRegionSelect = (region: string) => {
    setDirection(1);
    setSelectedRegion(region);
  };

  const handleChangeRegion = () => {
    setDirection(-1);
    setSelectedRegion(null);
  };

  const counties = selectedRegion
    ? regionCounties[selectedRegion as keyof typeof regionCounties]
    : [];

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <AnimatePresence mode="wait" custom={direction}>
        {!selectedRegion ? (
          <motion.div
            key="regions"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-8 text-center">
              I am located in...
            </h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {regions.map((region) => (
                <motion.button
                  key={region}
                  type="button"
                  variants={card}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleRegionSelect(region)}
                  className="bg-card border border-white/5 rounded-lg p-6 text-left transition-colors hover:border-accent/50 focus:outline-none focus:border-accent/50 min-h-[48px]"
                >
                  <p className="text-white font-bold text-lg">{region}</p>
                  <p className="text-text-muted text-sm">
                    {regionCounties[region].length} {regionCounties[region].length === 1 ? "county" : "counties"}
                  </p>
                </motion.button>
              ))}
            </motion.div>

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={onBack}
                className="text-text-muted hover:text-white transition-colors text-sm font-medium min-h-[48px] px-4"
              >
                &larr; Back
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="counties"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-6 text-center">
              Select your county in {selectedRegion}
            </h2>

            <div className="text-center mb-6">
              <button
                type="button"
                onClick={handleChangeRegion}
                className="text-accent hover:text-accent-bright transition-colors text-sm font-medium min-h-[48px] px-4"
              >
                &larr; Change region
              </button>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {counties.map((county) => (
                <motion.button
                  key={county}
                  type="button"
                  variants={card}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelect(selectedRegion, county)}
                  className="bg-card border border-white/5 rounded-full px-5 py-3 text-text text-sm font-medium transition-colors hover:border-accent hover:text-accent focus:outline-none focus:border-accent focus:text-accent min-h-[48px]"
                >
                  {county}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
