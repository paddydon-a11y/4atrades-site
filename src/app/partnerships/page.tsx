"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { partnershipTiers } from "@/lib/data";

export default function PartnershipsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 pt-40 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1920&q=80"
          alt="Construction handshake"
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
            Strategic <span className="text-accent">Partnerships</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text max-w-3xl mx-auto leading-relaxed"
          >
            Earn real money from your construction network. Three partnership tiers designed
            for professionals who want to build wealth while they build projects.
          </motion.p>
        </div>
      </section>

      <div className="construction-stripe" />

      {/* Tier Cards */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, i) => (
              <AnimatedSection key={tier.level} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(255,107,0,0.15)" }}
                  className={`bg-card border rounded-lg p-8 h-full flex flex-col ${
                    tier.level === 3 ? "border-accent" : "border-white/5"
                  }`}
                >
                  {tier.level === 3 && (
                    <span className="inline-block bg-accent text-darker text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-4 self-start">
                      Most Popular
                    </span>
                  )}

                  <p className="text-text-muted text-sm tracking-widest uppercase">Level {tier.level}</p>
                  <h3 className="text-3xl text-white mt-2">{tier.name}</h3>

                  <div className="mt-6">
                    <span className="font-[family-name:var(--font-display)] text-5xl text-accent">{tier.price}</span>
                    {tier.price !== "FREE" && <span className="text-text-muted ml-2">one-off</span>}
                  </div>

                  <div className="mt-4 bg-darker/50 rounded-sm p-4 text-center">
                    <p className="text-text-muted text-sm">Commission Rate</p>
                    <p className="font-[family-name:var(--font-display)] text-4xl text-white">{tier.commission}</p>
                    <p className="text-accent font-semibold mt-1">Earn up to {tier.earningsExample}</p>
                  </div>

                  <p className="mt-6 text-text-muted leading-relaxed">{tier.description}</p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm">
                        <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-text">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="tel:03301337901"
                    className={`mt-8 block text-center font-bold py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors ${
                      tier.level === 3
                        ? "bg-accent hover:bg-accent-bright text-white"
                        : "border-2 border-accent text-accent hover:bg-accent hover:text-white"
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Bounty */}
      <section className="bg-dark py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white">
              Simple <span className="text-accent">£150</span> Referral Bounty
            </h2>
            <p className="mt-6 text-text-muted text-lg leading-relaxed">
              Not ready for a full partnership? No problem. Refer a client to 4A Trades and earn a
              flat £150 bounty for every successful introduction. No tiers, no sign-up, no commitment.
              Just send us their details and get paid.
            </p>
            <a
              href="tel:03301337901"
              className="mt-8 inline-block bg-accent hover:bg-accent-bright text-white font-bold px-8 py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
            >
              Refer Someone Now
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-darker py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center text-white mb-12">Compare Partnership Tiers</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="overflow-x-auto rounded-lg border border-white/5">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-card">
                    <th className="px-6 py-4 text-text-muted uppercase tracking-wider font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-text-muted uppercase tracking-wider font-semibold">Level 1</th>
                    <th className="px-6 py-4 text-center text-text-muted uppercase tracking-wider font-semibold">Level 2</th>
                    <th className="px-6 py-4 text-center text-accent uppercase tracking-wider font-semibold">Level 3</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Commission Rate", l1: "1%", l2: "2%", l3: "3%" },
                    { feature: "Entry Cost", l1: "Free", l2: "£995", l3: "£4,995" },
                    { feature: "Labour Discount", l1: "5%", l2: "5%", l3: "5%" },
                    { feature: "Instant Credit", l1: "✓", l2: "✓", l3: "✓" },
                    { feature: "Network Access", l1: "—", l2: "✓", l3: "✓" },
                    { feature: "Priority Introductions", l1: "—", l2: "✓", l3: "✓" },
                    { feature: "Exclusive Territory", l1: "—", l2: "—", l3: "✓" },
                    { feature: "Tender List Inclusions", l1: "—", l2: "—", l3: "✓" },
                    { feature: "Dispute Resolution & QS", l1: "—", l2: "—", l3: "✓" },
                    { feature: "Marketing Support", l1: "—", l2: "—", l3: "✓" },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-card-light" : "bg-card"}>
                      <td className="px-6 py-3 text-white font-medium">{row.feature}</td>
                      <td className="px-6 py-3 text-center text-text-muted">{row.l1}</td>
                      <td className="px-6 py-3 text-center text-text-muted">{row.l2}</td>
                      <td className="px-6 py-3 text-center text-accent font-semibold">{row.l3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Inclusivity */}
      <section className="bg-accent py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-darker">Everyone Is Welcome In The 4A World</h2>
            <p className="mt-4 text-darker/80 text-lg leading-relaxed font-medium">
              We believe in building an open, inclusive network where construction professionals from
              all backgrounds can connect, collaborate, and earn. Your skills and your network are what
              matter — nothing else.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white">Ready To Start Earning?</h2>
            <p className="mt-6 text-text-muted text-lg leading-relaxed">
              Call us today to discuss which partnership tier is right for you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:03301337901"
                className="bg-accent hover:bg-accent-bright text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-wider transition-colors"
              >
                0330 133 7901
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
