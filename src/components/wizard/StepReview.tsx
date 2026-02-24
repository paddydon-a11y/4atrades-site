"use client";

import { motion } from "framer-motion";
import type { OrderItem } from "@/lib/wizard-data";

interface StepReviewProps {
  items: OrderItem[];
  county: string;
  region: string;
  onUpdateQuantity: (index: number, qty: number) => void;
  onRemoveItem: (index: number) => void;
  onContinue: () => void;
  onBack: () => void;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const row = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export default function StepReview({
  items,
  county,
  region,
  onUpdateQuantity,
  onRemoveItem,
  onContinue,
  onBack,
}: StepReviewProps) {
  const totalWorkers = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalRate = items.reduce(
    (sum, item) => sum + item.ratePerHour * item.quantity,
    0,
  );

  // Empty state
  if (items.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-text-muted text-lg mb-8">Your order is empty.</p>
          <button
            type="button"
            onClick={onBack}
            className="bg-accent hover:bg-accent-bright text-white font-bold rounded-sm px-8 py-3 transition-colors min-h-[48px] font-[family-name:var(--font-display)] tracking-wider text-lg"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-2">
          Review Your Order
        </h2>
        <p className="text-text-muted">
          Workers for{" "}
          <span className="text-text font-medium">{county}</span>,{" "}
          <span className="text-text font-medium">{region}</span>
        </p>
      </div>

      {/* Items list */}
      <motion.div
        className="space-y-3 mb-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {items.map((item, index) => (
          <motion.div
            key={`${item.workerType.id}-${item.tier}-${index}`}
            variants={row}
            className="bg-card border border-white/5 rounded-lg p-4 md:p-5"
          >
            <div className="flex flex-wrap items-center gap-4">
              {/* Worker info */}
              <div className="flex-1 min-w-[140px]">
                <p className="text-white font-bold">{item.workerType.name}</p>
                <p className="text-text-muted text-sm">
                  {item.workerType.tierLabel}: {item.tier}
                </p>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    onUpdateQuantity(index, Math.max(1, item.quantity - 1))
                  }
                  className="w-9 h-9 flex items-center justify-center rounded bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-bold min-h-[48px] min-w-[48px]"
                >
                  -
                </button>
                <span className="text-white font-medium w-8 text-center tabular-nums">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center rounded bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-bold min-h-[48px] min-w-[48px]"
                >
                  +
                </button>
              </div>

              {/* Rate */}
              <div className="text-right min-w-[80px]">
                <p className="text-text-muted text-xs">Rate</p>
                <p className="text-text text-sm tabular-nums">
                  {"\u00A3"}
                  {item.ratePerHour.toFixed(2)}/hr
                </p>
              </div>

              {/* Line total */}
              <div className="text-right min-w-[90px]">
                <p className="text-text-muted text-xs">Line total</p>
                <p className="text-white font-bold tabular-nums">
                  {"\u00A3"}
                  {(item.ratePerHour * item.quantity).toFixed(2)}
                  <span className="text-text-muted text-xs font-normal">
                    /hr
                  </span>
                </p>
              </div>

              {/* Remove button */}
              <button
                type="button"
                onClick={() => onRemoveItem(index)}
                className="w-9 h-9 flex items-center justify-center rounded text-text-muted hover:text-red-400 hover:bg-red-400/10 transition-colors min-h-[48px] min-w-[48px]"
                aria-label={`Remove ${item.workerType.name}`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <path d="M2 2L12 12M12 2L2 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Totals */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-card border border-white/10 rounded-lg p-5 mb-8"
      >
        <div className="flex items-center justify-between">
          <p className="text-white font-medium">
            Total:{" "}
            <span className="text-text-muted font-normal">
              {totalWorkers} worker{totalWorkers !== 1 ? "s" : ""}
            </span>
          </p>
          <p className="text-accent font-bold text-2xl tabular-nums">
            {"\u00A3"}
            {totalRate.toFixed(2)}
            <span className="text-text-muted text-sm font-normal">/hr</span>
          </p>
        </div>
      </motion.div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={onBack}
          className="sm:flex-none text-text-muted hover:text-white transition-colors text-sm font-medium min-h-[48px] px-6 py-3 border border-white/10 rounded-sm hover:border-white/20"
        >
          &larr; Edit Workers
        </button>
        <button
          type="button"
          onClick={onContinue}
          className="flex-1 bg-accent hover:bg-accent-bright text-white font-bold rounded-sm px-8 py-3 transition-colors min-h-[48px] font-[family-name:var(--font-display)] tracking-wider text-lg"
        >
          Confirm & Continue
        </button>
      </div>
    </div>
  );
}
