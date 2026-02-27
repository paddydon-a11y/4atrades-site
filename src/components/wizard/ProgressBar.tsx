"use client";

import { motion } from "framer-motion";

const DEFAULT_STEPS = ["Type", "Location", "Workers", "Review", "Details", "Confirm"];

interface ProgressBarProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
  steps?: string[];
}

export default function ProgressBar({
  currentStep,
  onStepClick,
  steps,
}: ProgressBarProps) {
  const STEPS = steps ?? DEFAULT_STEPS;
  return (
    <div className="w-full px-4 py-6">
      <div className="relative flex items-center justify-between max-w-2xl mx-auto">
        {/* Connecting line (background) */}
        <div className="absolute top-3 left-3 right-3 h-0.5 bg-white/10" />

        {/* Connecting line (filled progress) */}
        <motion.div
          className="absolute top-3 left-3 h-0.5 bg-accent"
          initial={false}
          animate={{
            width:
              currentStep === 0
                ? "0%"
                : `${(currentStep / (STEPS.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ maxWidth: "calc(100% - 24px)" }}
        />

        {STEPS.map((label, i) => {
          const isCompleted = i < currentStep;
          const isCurrent = i === currentStep;
          const isFuture = i > currentStep;
          const isClickable = isCompleted && onStepClick;

          return (
            <div
              key={label}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Step circle */}
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && onStepClick(i)}
                className={`
                  relative flex items-center justify-center w-6 h-6 rounded-full
                  transition-colors duration-300
                  ${isClickable ? "cursor-pointer" : "cursor-default"}
                  ${isCompleted ? "bg-accent" : ""}
                  ${isCurrent ? "border-2 border-accent bg-darker" : ""}
                  ${isFuture ? "border-2 border-white/20 bg-darker" : ""}
                `}
              >
                {/* Completed checkmark */}
                {isCompleted && (
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="w-3 h-3 text-white"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 6.5L5 9L9.5 3.5" />
                  </motion.svg>
                )}

                {/* Current step dot */}
                {isCurrent && (
                  <motion.span
                    className="w-2 h-2 rounded-full bg-accent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Pulsing ring on current step */}
                {isCurrent && (
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-accent"
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
              </button>

              {/* Step label (desktop only) */}
              <span
                className={`
                  hidden md:block mt-2 text-xs tracking-wide
                  font-[family-name:var(--font-display)]
                  ${isCurrent ? "text-accent" : ""}
                  ${isCompleted ? "text-text" : ""}
                  ${isFuture ? "text-text-muted" : ""}
                `}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
