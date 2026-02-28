"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import type { TradeData } from "@/lib/seo/trade-data";
import { allLocations } from "@/lib/seo/location-data";
import { getNationalRateRange, formatRate } from "@/lib/seo/utils";
import type { WorkerType as RateWorkerType } from "@/lib/rates";

export default function TradePageContent({ trade }: { trade: TradeData }) {
  const rateRange = getNationalRateRange(trade.rateName as RateWorkerType);

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
            {trade.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white"
          >
            {trade.heroHeadline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text max-w-3xl mx-auto leading-relaxed"
          >
            {trade.heroSubtitle}
          </motion.p>
          {rateRange && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-accent text-lg font-semibold"
            >
              From {formatRate(rateRange.min)}/hr
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={`/order?trade=${trade.slug}`}
              className="bg-accent hover:bg-accent-bright text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-wider transition-colors"
            >
              Order {trade.name}
            </Link>
            <a
              href="tel:03301337901"
              className="border-2 border-white/30 hover:border-accent text-white hover:text-accent px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-wider transition-colors"
            >
              Call Us
            </a>
          </motion.div>
        </div>
      </section>

      <div className="construction-stripe" />

      {/* What We Provide */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white text-center">
              What We <span className="text-accent">Provide</span>
            </h2>
          </AnimatedSection>
          <div className="mt-12 space-y-4">
            {trade.whatWeProvide.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-card border border-white/5 rounded-sm p-5">
                  <span className="text-accent mt-0.5 flex-shrink-0">&#10003;</span>
                  <p className="text-text leading-relaxed">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Tiers */}
      <section className="bg-dark geo-pattern py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white text-center">
              Experience <span className="text-accent">Tiers</span>
            </h2>
            <p className="text-center text-text-muted mt-4 max-w-2xl mx-auto">
              Choose the experience level that matches your project requirements.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {trade.experienceTiers.map((tier, i) => (
              <AnimatedSection key={tier.label} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(255,107,0,0.5)" }}
                  className="bg-card border border-white/5 rounded-lg p-6 h-full"
                >
                  <p className="text-accent font-[family-name:var(--font-display)] text-2xl tracking-wider">
                    {tier.label}
                  </p>
                  <p className="mt-4 text-text-muted leading-relaxed text-sm">
                    {tier.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Covered */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white text-center">
              {trade.name} Across <span className="text-accent">England & Wales</span>
            </h2>
            <p className="text-center text-text-muted mt-4 max-w-2xl mx-auto">
              We supply {trade.name.toLowerCase()} in every region. Click a region to see local rates and coverage.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {allLocations.map((loc, i) => (
              <AnimatedSection key={loc.slug} delay={i * 0.05}>
                <Link href={`/trades/${trade.slug}/${loc.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, borderColor: "rgba(255,107,0,0.5)" }}
                    className="bg-card border border-white/5 rounded-sm p-4 text-center cursor-pointer group"
                  >
                    <p className="text-white group-hover:text-accent transition-colors font-medium text-sm">
                      {loc.name}
                    </p>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why 4A */}
      <section className="bg-dark geo-pattern py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white text-center">
              Why Hire {trade.name} Through <span className="text-accent">4A Trades</span>
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              { title: "24-Hour Deployment", desc: `Need ${trade.name.toLowerCase()} on site tomorrow? We move fast because construction doesn't wait.` },
              { title: "Fully Vetted Operatives", desc: "CSCS cards, qualifications, right to work, references — all checked before they reach your site." },
              { title: "Zero Payroll Risk", desc: "We handle PAYE, pensions, holiday pay, and compliance with the Workers' Rights Bill. You just get the workers." },
              { title: "Flexible Hire", desc: `From a single ${trade.name.toLowerCase().replace(/s$/, "")} for a day to a full team for six months. Scale up or down as your project demands.` },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div whileHover={{ x: 4 }} className="border-l-2 border-accent pl-6 py-2">
                  <h3 className="text-xl text-white font-[family-name:var(--font-display)] tracking-wider">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-text-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white text-center">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </AnimatedSection>
          <div className="mt-12 space-y-4">
            {trade.faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <FaqItem question={faq.question} answer={faq.answer} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-darker">
              Ready to Hire {trade.name}?
            </h2>
            <p className="mt-4 text-darker/80 text-lg font-medium leading-relaxed">
              Order online in minutes or call us for a quote. Workers on your site within 24 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/order?trade=${trade.slug}`}
                className="bg-darker hover:bg-dark text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-wider transition-colors"
              >
                Order Online
              </Link>
              <a
                href="tel:03301337901"
                className="border-2 border-darker/30 hover:border-darker text-darker font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-wider transition-colors"
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
        <span className="text-white font-medium pr-4 group-hover:text-accent transition-colors">
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
        <p className="px-5 pb-5 text-text-muted leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}
