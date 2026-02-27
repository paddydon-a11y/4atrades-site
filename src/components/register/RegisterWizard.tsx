"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "@/components/wizard/ProgressBar";

import StepTrade from "./StepTrade";
import StepRegion from "./StepRegion";
import StepExperience from "./StepExperience";
import StepCSCS from "./StepCSCS";
import StepDetails from "./StepDetails";
import StepConfirm from "./StepConfirm";

const REGISTER_STEPS = ["Trade", "Location", "Experience", "CSCS", "Details", "Confirm"];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

export default function RegisterWizard() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [tradeId, setTradeId] = useState<string | null>(null);
  const [tradeName, setTradeName] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [county, setCounty] = useState<string | null>(null);
  const [experienceTier, setExperienceTier] = useState<string | null>(null);
  const [hasCSCS, setHasCSCS] = useState<boolean | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const goTo = useCallback(
    (target: number) => {
      setDirection(target > step ? 1 : -1);
      setStep(target);
      window.scrollTo(0, 0);
    },
    [step],
  );

  const next = useCallback(() => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 5));
    window.scrollTo(0, 0);
  }, []);

  const back = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo(0, 0);
  }, []);

  const handleStepClick = useCallback(
    (target: number) => {
      if (target < step) {
        goTo(target);
      }
    },
    [step, goTo],
  );

  const handleSubmit = useCallback(
    async (name: string, phone: string) => {
      setSubmitting(true);
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            trade: tradeName,
            tradeId,
            region,
            county,
            experienceTier,
            hasCSCS,
            name,
            phone,
          }),
        });
        if (!res.ok) throw new Error("Failed to submit registration");
        next();
      } catch {
        // Allow retry on failure
      } finally {
        setSubmitting(false);
      }
    },
    [tradeName, tradeId, region, county, experienceTier, hasCSCS, next],
  );

  function renderStep() {
    switch (step) {
      case 0:
        return (
          <StepTrade
            onSelect={(id, name) => {
              setTradeId(id);
              setTradeName(name);
              next();
            }}
          />
        );
      case 1:
        return (
          <StepRegion
            onSelect={(r, c) => {
              setRegion(r);
              setCounty(c);
              next();
            }}
          />
        );
      case 2:
        return (
          <StepExperience
            tradeId={tradeId!}
            onSelect={(tier) => {
              setExperienceTier(tier);
              next();
            }}
          />
        );
      case 3:
        return (
          <StepCSCS
            onSelect={(cscs) => {
              setHasCSCS(cscs);
              next();
            }}
          />
        );
      case 4:
        return (
          <StepDetails
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        );
      case 5:
        return <StepConfirm />;
      default:
        return null;
    }
  }

  return (
    <div className="bg-darker min-h-screen pt-20 md:pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-32">
        <h1 className="sr-only">Register as a Construction Worker</h1>

        <ProgressBar
          currentStep={step}
          onStepClick={handleStepClick}
          steps={REGISTER_STEPS}
        />

        {step > 0 && step < 5 && (
          <button
            type="button"
            onClick={back}
            className="flex items-center gap-2 text-text-muted hover:text-white transition-colors mb-4 group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 12L6 8L10 4" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </button>
        )}

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
