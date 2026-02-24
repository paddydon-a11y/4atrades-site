"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { getSortedWorkerTypes } from "@/lib/wizard-data";
import type { OrderItem, WorkerType } from "@/lib/wizard-data";
import { getRate } from "@/lib/rates";
import OrderBasket from "./OrderBasket";

interface StepWorkersProps {
  contractorType: string;
  county: string;
  region: string;
  items: OrderItem[];
  onAddItem: (item: OrderItem) => void;
  onRemoveItem: (index: number) => void;
  onUpdateQuantity: (index: number, qty: number) => void;
  onContinue: () => void;
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

function WorkerCard({
  worker,
  county,
  isAdded,
  onAdd,
}: {
  worker: WorkerType;
  county: string;
  isAdded: boolean;
  onAdd: (item: OrderItem) => void;
}) {
  const [selectedTier, setSelectedTier] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const tier = worker.tiers[selectedTier];
  const rate = getRate(county, worker.rateName, tier);

  const handleAdd = () => {
    if (rate === null) return;
    onAdd({
      workerType: worker,
      tier,
      quantity,
      ratePerHour: rate,
    });
    // Reset quantity after adding
    setQuantity(1);
  };

  return (
    <motion.div
      variants={card}
      className="bg-card border border-white/5 rounded-lg p-5 md:p-6"
    >
      {/* Worker name */}
      <p className="text-white font-bold text-lg mb-4">{worker.name}</p>

      {/* Tier selector */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">
          {worker.tierLabel}
        </p>
        <div className="flex gap-2">
          {worker.tiers.map((t, i) => (
            <button
              key={t}
              type="button"
              onClick={() => setSelectedTier(i)}
              className={`
                flex-1 px-3 py-2.5 rounded-sm text-sm font-medium transition-colors min-h-[48px]
                ${
                  i === selectedTier
                    ? "bg-accent text-white"
                    : "bg-card-light border border-white/10 text-text-muted hover:text-white hover:border-white/20"
                }
              `}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Price display */}
      <div className="mb-4">
        {rate !== null ? (
          <p className="text-accent font-bold text-xl tabular-nums">
            {"\u00A3"}
            {rate.toFixed(2)}
            <span className="text-text-muted text-sm font-normal">/hr</span>
          </p>
        ) : (
          <p className="text-text-muted text-sm">Rate not available</p>
        )}
      </div>

      {/* Quantity + Add button */}
      <div className="flex items-center gap-4">
        {/* Quantity controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center rounded bg-white/10 text-white hover:bg-white/20 transition-colors text-lg font-bold min-h-[48px] min-w-[48px]"
          >
            -
          </button>
          <span className="text-white font-medium text-lg w-8 text-center tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center rounded bg-white/10 text-white hover:bg-white/20 transition-colors text-lg font-bold min-h-[48px] min-w-[48px]"
          >
            +
          </button>
        </div>

        {/* Add / Added button */}
        {isAdded ? (
          <span className="flex-1 bg-accent/20 text-accent font-bold rounded-sm px-6 py-3 text-center text-sm min-h-[48px] flex items-center justify-center">
            Added
          </span>
        ) : (
          <button
            type="button"
            onClick={handleAdd}
            disabled={rate === null}
            className="flex-1 bg-accent hover:bg-accent-bright text-white font-bold rounded-sm px-6 py-3 transition-colors disabled:opacity-40 disabled:cursor-not-allowed min-h-[48px]"
          >
            Add to Order
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function StepWorkers({
  contractorType,
  county,
  region,
  items,
  onAddItem,
  onRemoveItem,
  onUpdateQuantity,
  onContinue,
}: StepWorkersProps) {
  const sortedWorkers = useMemo(
    () => getSortedWorkerTypes(contractorType),
    [contractorType],
  );

  // Track which worker+tier combos are already in the order
  const addedWorkerIds = useMemo(() => {
    const ids = new Set<string>();
    items.forEach((item) => ids.add(item.workerType.id));
    return ids;
  }, [items]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-[120px]">
      <div className="text-center mb-8">
        <h2 className="font-[family-name:var(--font-display)] uppercase tracking-wider text-white text-3xl md:text-4xl mb-2">
          Select Workers
        </h2>
        <p className="text-text-muted">
          Ordering for{" "}
          <span className="text-text font-medium">{county}</span>,{" "}
          <span className="text-text font-medium">{region}</span>
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {sortedWorkers.map((worker) => (
          <WorkerCard
            key={worker.id}
            worker={worker}
            county={county}
            isAdded={addedWorkerIds.has(worker.id)}
            onAdd={onAddItem}
          />
        ))}
      </motion.div>

      {/* Sticky basket at bottom */}
      <OrderBasket
        items={items}
        onRemove={onRemoveItem}
        onUpdateQuantity={onUpdateQuantity}
        onContinue={onContinue}
      />
    </div>
  );
}
