"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { trades } from "@/lib/data";

export default function TradesPage() {
  const categories = Object.entries(trades);
  const totalTrades = Object.values(trades).flat().length;

  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 pt-40 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
          alt="Construction workers"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-darker/90 to-darker/80" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white"
          >
            All <span className="text-accent">Trades</span> Supplied
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text max-w-3xl mx-auto leading-relaxed"
          >
            {totalTrades}+ construction trades across every discipline. From site labourers to
            quantity surveyors — one call gets you the people you need.
          </motion.p>
        </div>
      </section>

      <div className="construction-stripe" />

      {/* Workers' Rights Bill Alert */}
      <section className="bg-accent py-10 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="flex flex-col items-center text-center gap-6">
              <span className="font-[family-name:var(--font-display)] text-5xl text-darker">⚠️</span>
              <div>
                <h2 className="text-2xl md:text-3xl text-darker">The Workers&apos; Rights Bill Is Now Law</h2>
                <p className="mt-3 text-darker/80 font-medium leading-relaxed max-w-2xl mx-auto">
                  Using 4A Trades means zero payroll risk, zero tribunal exposure, and full compliance.
                  We handle employment law, PAYE, pensions, holiday pay — everything. You just get the tradespeople.
                </p>
              </div>
              <a
                href="tel:03301337901"
                className="bg-darker hover:bg-dark text-white font-bold px-8 py-3 rounded-sm font-[family-name:var(--font-display)] text-lg tracking-wider transition-colors"
              >
                Call Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Stand Out */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center text-white">How We Stand Out</h2>
          </AnimatedSection>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {[
              { title: "24-Hour Turnaround", desc: "Need tradespeople tomorrow? Call us today. We move fast because construction doesn't wait." },
              { title: "Fully Vetted Operatives", desc: "CSCS cards, qualifications, right to work, references — all checked before they reach your site." },
              { title: "One Invoice, Zero Hassle", desc: "Labour, plant, materials — one supplier, one invoice, one point of contact. No chasing multiple vendors." },
              { title: "Customer Service Guarantee", desc: "You get a dedicated account manager who answers the phone. No call centres, no robots, no excuses." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="border-l-2 border-accent pl-6 py-4"
                >
                  <h3 className="text-xl text-white font-[family-name:var(--font-display)] tracking-wider">{item.title}</h3>
                  <p className="mt-2 text-text-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trades Listing */}
      <section className="bg-dark geo-pattern py-24 px-6">
        <div className="mx-auto max-w-7xl">
          {categories.map(([category, tradeList], ci) => (
            <div key={category} className={ci > 0 ? "mt-20" : ""}>
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl text-white mb-2">{category}</h2>
                <div className="w-16 h-1 bg-accent mb-8" />
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tradeList.map((trade, ti) => (
                  <AnimatedSection key={trade} delay={ti * 0.03}>
                    <motion.div
                      whileHover={{ scale: 1.02, borderColor: "rgba(255,107,0,0.5)" }}
                      className="bg-card border border-white/5 rounded-sm px-5 py-4 flex items-center gap-3 transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-white font-medium">{trade}</span>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white">
              Need <span className="text-accent">Tradespeople</span> On Site?
            </h2>
            <p className="mt-6 text-text-muted text-lg leading-relaxed">
              One call. That&apos;s all it takes. Tell us what you need, when you need it,
              and we&apos;ll have vetted operatives on your site within 24 hours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:03301337901"
                className="bg-accent hover:bg-accent-bright text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-wider transition-colors"
              >
                Call 0330 133 7901
              </a>
              <a
                href="mailto:Sales@4ATrades.co.uk"
                className="border-2 border-white/30 hover:border-accent text-white hover:text-accent px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-wider transition-colors"
              >
                Email Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
