"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ProgressBar from "@/components/wizard/ProgressBar";
import { workerTypes } from "@/lib/wizard-data";
import { regionCounties } from "@/lib/rates";

const STEPS = ["Trade", "Territory", "Details", "Confirm"];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -200 : 200, opacity: 0 }),
};

const field = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

const inputClasses =
  "w-full bg-card border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors min-h-[48px]";

const labelClasses =
  "block text-sm font-semibold text-text-muted uppercase tracking-wider mb-1.5";

export default function TerritoryWizard() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [tradeName, setTradeName] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [county, setCounty] = useState<string | null>(null);
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
    setStep((s) => Math.min(s + 1, 3));
    window.scrollTo(0, 0);
  }, []);

  const back = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo(0, 0);
  }, []);

  const handleStepClick = useCallback(
    (target: number) => {
      if (target < step) goTo(target);
    },
    [step, goTo],
  );

  const handleSubmit = useCallback(
    async (name: string, phone: string) => {
      setSubmitting(true);
      try {
        const res = await fetch("/api/claim", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ trade: tradeName, region, county, name, phone }),
        });
        if (!res.ok) throw new Error("Failed");
        next();
      } catch {
        // Allow retry
      } finally {
        setSubmitting(false);
      }
    },
    [tradeName, region, county, next],
  );

  function renderStep() {
    switch (step) {
      case 0:
        return <StepTrade onSelect={(name) => { setTradeName(name); next(); }} />;
      case 1:
        return (
          <StepTerritory
            onSelect={(r, c) => { setRegion(r); setCounty(c); next(); }}
          />
        );
      case 2:
        return <StepDetails onSubmit={handleSubmit} submitting={submitting} />;
      case 3:
        return <StepConfirm trade={tradeName!} county={county!} />;
      default:
        return null;
    }
  }

  return (
    <div className="bg-darker min-h-screen pt-20 md:pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-32">
        <h1 className="sr-only">Claim Your Territory</h1>

        <ProgressBar currentStep={step} onStepClick={handleStepClick} steps={STEPS} />

        {step > 0 && step < 3 && (
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

/* ── Step Components (inline, same patterns as register wizard) ── */

function StepTrade({ onSelect }: { onSelect: (name: string) => void }) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-3 text-center">
        What is your trade?
      </h2>
      <p className="text-text-muted text-center mb-8">Select the trade you want to claim a territory for</p>

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
            onClick={() => onSelect(wt.name)}
            className="bg-card border border-white/5 rounded-lg p-4 text-center transition-colors hover:border-accent/50 focus:outline-none focus:border-accent/50 min-h-[48px]"
          >
            <p className="text-white font-bold text-sm sm:text-base">{wt.name.replace(/s$/, "")}</p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

function StepTerritory({ onSelect }: { onSelect: (region: string, county: string) => void }) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [dir, setDir] = useState(1);

  const regions = Object.keys(regionCounties) as (keyof typeof regionCounties)[];
  const counties = selectedRegion ? regionCounties[selectedRegion as keyof typeof regionCounties] : [];

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <AnimatePresence mode="wait" custom={dir}>
        {!selectedRegion ? (
          <motion.div
            key="regions"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-3 text-center">
              Which territory do you want?
            </h2>
            <p className="text-text-muted text-center mb-8">Select a region, then choose your county</p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {regions.map((r) => (
                <motion.button
                  key={r}
                  type="button"
                  variants={card}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setDir(1); setSelectedRegion(r); }}
                  className="bg-card border border-white/5 rounded-lg p-6 text-left transition-colors hover:border-accent/50 focus:outline-none focus:border-accent/50 min-h-[48px]"
                >
                  <p className="text-white font-bold text-lg">{r}</p>
                  <p className="text-text-muted text-sm">
                    {regionCounties[r].length} {regionCounties[r].length === 1 ? "county" : "counties"}
                  </p>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="counties"
            custom={dir}
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
                onClick={() => { setDir(-1); setSelectedRegion(null); }}
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
              {counties.map((c) => (
                <motion.button
                  key={c}
                  type="button"
                  variants={card}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelect(selectedRegion, c)}
                  className="bg-card border border-white/5 rounded-full px-5 py-3 text-text text-sm font-medium transition-colors hover:border-accent hover:text-accent focus:outline-none focus:border-accent focus:text-accent min-h-[48px]"
                >
                  {c}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StepDetails({ onSubmit, submitting }: { onSubmit: (name: string, phone: string) => void; submitting: boolean }) {
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
        <p className="text-text-muted">We just need your name and number to get started</p>
      </div>

      <form onSubmit={handleSubmit}>
        <motion.div className="space-y-5" variants={container} initial="hidden" animate="show">
          <motion.div variants={field}>
            <label htmlFor="claim-name" className={labelClasses}>Full Name *</label>
            <input
              id="claim-name"
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
            <label htmlFor="claim-phone" className={labelClasses}>Phone Number *</label>
            <input
              id="claim-phone"
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
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </>
            ) : (
              "Claim My Territory"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function StepConfirm({ trade, county }: { trade: string; county: string }) {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-12 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
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

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-4"
      >
        Application Received
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="text-text-muted text-lg leading-relaxed mb-8 max-w-md mx-auto"
      >
        We&apos;ve received your interest in {trade} for {county}. A member of the 4A team will be in touch shortly to discuss your territory.
      </motion.p>

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
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          0330 133 7901
        </a>
      </motion.div>

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
