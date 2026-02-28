"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import type { CrossPageData } from "@/lib/seo/cross-data";
import { allTrades } from "@/lib/seo/trade-data";
import { allLocations } from "@/lib/seo/location-data";
import { formatRate } from "@/lib/seo/utils";

export default function CrossPageContent({ data }: { data: CrossPageData }) {
  const otherTradesInRegion = allTrades
    .filter((t) => t.slug !== data.tradeSlug)
    .slice(0, 8);

  const otherRegions = allLocations.filter(
    (l) => l.slug !== data.locationSlug,
  );

  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 pt-40 px-6 overflow-hidden bg-darker noise-bg">
        <div className="absolute inset-0 geo-pattern opacity-50" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm tracking-widest uppercase mb-4"
          >
            {data.tradeName} &middot; {data.locationName}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white"
          >
            Hire <span className="text-accent">{data.tradeName}</span> in the {data.locationName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text max-w-3xl mx-auto leading-relaxed"
          >
            {data.heroSubtitle}
          </motion.p>
          {data.rateRange && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-accent text-lg font-semibold"
            >
              From {formatRate(data.rateRange.min)}/hr in the {data.locationName}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={`/order?trade=${data.tradeSlug}&region=${data.locationSlug}`}
              className="bg-accent hover:bg-accent-bright text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
            >
              Order {data.tradeName}
            </Link>
            <a
              href="tel:03301337901"
              className="border-2 border-white/30 hover:border-accent text-white hover:text-accent px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
            >
              Call Us
            </a>
          </motion.div>
        </div>
      </section>

      <div className="construction-stripe" />

      {/* Counties */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white text-center">
              {data.locationName} Counties We Cover
            </h2>
          </AnimatedSection>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {data.counties.map((county, i) => (
              <AnimatedSection key={county} delay={i * 0.03}>
                <div className="bg-card border border-white/5 rounded-sm px-4 py-3 flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-text text-sm">{county}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Intro & Rates */}
      <section className="bg-dark geo-pattern py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white text-center">
              {data.tradeName} in the <span className="text-accent">{data.locationName}</span>
            </h2>
            <p className="mt-8 text-text-muted text-lg leading-relaxed">
              {data.introText}
            </p>
          </AnimatedSection>
          {data.rateRange && (
            <AnimatedSection delay={0.2}>
              <div className="mt-8 bg-card border border-accent/20 rounded-lg p-6 text-center">
                <p className="text-text-muted text-sm tracking-widest uppercase">
                  {data.tradeName} Hourly Rate Range — {data.locationName}
                </p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl text-accent tracking-wider">
                  {formatRate(data.rateRange.min)} – {formatRate(data.rateRange.max)}
                </p>
                <p className="mt-2 text-text-muted text-sm">per hour, depending on experience</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white text-center">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </AnimatedSection>
          <div className="mt-10 space-y-4">
            {data.faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <FaqItem question={faq.question} answer={faq.answer} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Other Trades in Region */}
      <section className="bg-dark geo-pattern py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white text-center">
              Other Trades in the <span className="text-accent">{data.locationName}</span>
            </h2>
          </AnimatedSection>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {otherTradesInRegion.map((trade, i) => (
              <AnimatedSection key={trade.slug} delay={i * 0.03}>
                <Link href={`/trades/${trade.slug}/${data.locationSlug}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, borderColor: "rgba(255,107,0,0.5)" }}
                    className="bg-card border border-white/5 rounded-sm px-4 py-3 text-center group"
                  >
                    <span className="text-white text-sm group-hover:text-accent transition-colors">
                      {trade.name}
                    </span>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Same Trade Other Regions */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white text-center">
              {data.tradeName} in <span className="text-accent">Other Regions</span>
            </h2>
          </AnimatedSection>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherRegions.map((loc, i) => (
              <AnimatedSection key={loc.slug} delay={i * 0.03}>
                <Link href={`/trades/${data.tradeSlug}/${loc.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, borderColor: "rgba(255,107,0,0.5)" }}
                    className="bg-card border border-white/5 rounded-sm p-4 text-center group"
                  >
                    <span className="text-white text-sm group-hover:text-accent transition-colors">
                      {loc.name}
                    </span>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-darker">
              Ready to Hire {data.tradeName} in the {data.locationName}?
            </h2>
            <p className="mt-4 text-darker/80 text-lg font-medium leading-relaxed">
              Order online in minutes or call us for a quote. Workers on your site within 24 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/order?trade=${data.tradeSlug}&region=${data.locationSlug}`}
                className="bg-darker hover:bg-dark text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
              >
                Order Online
              </Link>
              <a
                href="tel:03301337901"
                className="border-2 border-darker/30 hover:border-darker text-darker font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
              >
                0330 133 7901
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-card border border-white/5 rounded-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <span className="text-white font-medium pr-4 group-hover:text-accent transition-colors text-sm">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-accent text-xl flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-text-muted leading-relaxed text-sm">{answer}</p>
      </motion.div>
    </div>
  );
}
