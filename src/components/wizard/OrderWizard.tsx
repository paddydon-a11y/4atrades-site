"use client";

import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "./ProgressBar";
import type { OrderItem, JobDetails } from "@/lib/wizard-data";

// Step components (to be created separately)
import StepContractor from "./StepContractor";
import StepLocation from "./StepLocation";
import StepWorkers from "./StepWorkers";
import StepReview from "./StepReview";
import StepDetails from "./StepDetails";
import StepConfirm from "./StepConfirm";

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

const INITIAL_JOB_DETAILS: JobDetails = {
  company: "",
  contactName: "",
  phone: "",
  email: "",
  siteAddress: "",
  postcode: "",
  startDate: "",
  duration: "",
  specialRequirements: "",
};

export default function OrderWizard() {
  const searchParams = useSearchParams();
  const preselectedTrade = searchParams.get("trade") ?? undefined;
  const preselectedRegion = searchParams.get("region") ?? undefined;

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [contractorType, setContractorType] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [county, setCounty] = useState<string | null>(null);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [jobDetails, setJobDetails] = useState<JobDetails>(INITIAL_JOB_DETAILS);
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

  // -- Order item management --

  const addItem = useCallback((item: OrderItem) => {
    setOrderItems((prev) => {
      // Merge if same worker type + tier
      const existing = prev.findIndex(
        (o) => o.workerType.id === item.workerType.id && o.tier === item.tier,
      );
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = {
          ...updated[existing],
          quantity: updated[existing].quantity + item.quantity,
        };
        return updated;
      }
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((index: number) => {
    setOrderItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateItemQuantity = useCallback((index: number, qty: number) => {
    setOrderItems((prev) => {
      if (qty <= 0) return prev.filter((_, i) => i !== index);
      const updated = [...prev];
      updated[index] = { ...updated[index], quantity: qty };
      return updated;
    });
  }, []);

  // -- Submit order --

  const handleSubmit = useCallback(async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contractorType,
          region,
          county,
          items: orderItems.map((item) => ({
            workerType: item.workerType.name,
            tier: item.tier,
            quantity: item.quantity,
            ratePerHour: item.ratePerHour,
          })),
          jobDetails,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit order");
      next();
    } catch {
      // Allow retry on failure
    } finally {
      setSubmitting(false);
    }
  }, [contractorType, region, county, orderItems, jobDetails, next]);

  // -- Reset wizard --

  const handleReset = useCallback(() => {
    setContractorType(null);
    setRegion(null);
    setCounty(null);
    setOrderItems([]);
    setJobDetails(INITIAL_JOB_DETAILS);
    setSubmitting(false);
    setDirection(-1);
    setStep(0);
  }, []);

  // -- Render the current step --

  function renderStep() {
    switch (step) {
      case 0:
        return (
          <StepContractor
            onSelect={(id) => {
              setContractorType(id);
              next();
            }}
          />
        );
      case 1:
        return (
          <StepLocation
            onSelect={(r, c) => {
              setRegion(r);
              setCounty(c);
              next();
            }}
            onBack={back}
            initialRegion={preselectedRegion}
          />
        );
      case 2:
        return (
          <StepWorkers
            contractorType={contractorType!}
            county={county!}
            region={region!}
            items={orderItems}
            onAddItem={addItem}
            onRemoveItem={removeItem}
            onUpdateQuantity={updateItemQuantity}
            onContinue={next}
            highlightTrade={preselectedTrade}
          />
        );
      case 3:
        return (
          <StepReview
            items={orderItems}
            county={county!}
            region={region!}
            onUpdateQuantity={updateItemQuantity}
            onRemoveItem={removeItem}
            onContinue={next}
            onBack={back}
          />
        );
      case 4:
        return (
          <StepDetails
            details={jobDetails}
            onChange={setJobDetails}
            onSubmit={handleSubmit}
            onBack={back}
            submitting={submitting}
          />
        );
      case 5:
        return (
          <StepConfirm
            onReset={handleReset}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="bg-darker min-h-screen pt-20 md:pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-32">
        <h1 className="sr-only">Order Construction Workers Online</h1>
        {/* Progress bar */}
        <ProgressBar currentStep={step} onStepClick={handleStepClick} />

        {/* Back button (not on first or last step) */}
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

        {/* Step content with slide animation */}
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
