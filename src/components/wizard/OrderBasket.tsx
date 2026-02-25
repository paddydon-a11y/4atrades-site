"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { OrderItem } from "@/lib/wizard-data";

interface BasketProps {
  items: OrderItem[];
  onRemove: (index: number) => void;
  onUpdateQuantity: (index: number, qty: number) => void;
  onContinue: () => void;
}

export default function OrderBasket({
  items,
  onRemove,
  onUpdateQuantity,
  onContinue,
}: BasketProps) {
  const [expanded, setExpanded] = useState(false);

  if (items.length === 0) return null;

  const totalWorkers = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-xl border-t border-white/10"
    >
      {/* Expanded item list */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="max-w-5xl mx-auto px-4 pt-4 pb-2 space-y-2 max-h-[50vh] overflow-y-auto">
              {items.map((item, index) => (
                <div
                  key={`${item.workerType.id}-${item.tier}-${index}`}
                  className="flex items-center gap-3 bg-darker/60 rounded-lg px-4 py-3"
                >
                  {/* Worker info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">
                      {item.workerType.name}
                    </p>
                    <p className="text-text-muted text-xs">
                      {item.workerType.tierLabel}: {item.tier}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        onUpdateQuantity(
                          index,
                          Math.max(1, item.quantity - 1),
                        )
                      }
                      className="w-7 h-7 flex items-center justify-center rounded bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-bold"
                    >
                      -
                    </button>
                    <span className="text-white text-sm w-6 text-center tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        onUpdateQuantity(index, item.quantity + 1)
                      }
                      className="w-7 h-7 flex items-center justify-center rounded bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Rate */}
                  <p className="text-text text-sm w-20 text-right tabular-nums">
                    {"\u00A3"}
                    {(item.ratePerHour * item.quantity).toFixed(2)}
                    <span className="text-text-muted text-xs">/hr</span>
                  </p>

                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="w-7 h-7 flex items-center justify-center rounded text-text-muted hover:text-red-400 hover:bg-red-400/10 transition-colors"
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
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed summary bar */}
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Summary text + expand toggle */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-3 flex-1 min-w-0 text-left"
        >
          <span className="text-accent font-bold text-sm whitespace-nowrap tabular-nums">
            {totalWorkers} worker{totalWorkers !== 1 ? "s" : ""}
          </span>

          {/* Chevron */}
          <motion.svg
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-5 text-text-muted ml-1 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </motion.svg>
        </button>

        {/* Continue button */}
        <button
          type="button"
          onClick={onContinue}
          className="bg-accent hover:bg-accent-bright text-white font-bold px-6 py-2.5 rounded-sm tracking-wide transition-colors font-[family-name:var(--font-display)] text-base flex-shrink-0"
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
}
