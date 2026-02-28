"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import type { LocationData } from "@/lib/seo/location-data";
import { allLocations } from "@/lib/seo/location-data";
import { allTrades } from "@/lib/seo/trade-data";
import { regionCounties } from "@/lib/rates";
import { regionSlug } from "@/lib/seo/utils";

export default function LocationPageContent({ location }: { location: LocationData }) {
  const counties = regionCounties[location.name as keyof typeof regionCounties] ?? [];
  const neighbours = allLocations.filter((l) =>
    location.neighbouringRegions.includes(l.name),
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
            Regional Coverage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white"
          >
            {location.heroHeadline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text max-w-3xl mx-auto leading-relaxed"
          >
            {location.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={`/order?region=${location.slug}`}
              className="bg-accent hover:bg-accent-bright text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-wider transition-colors"
            >
              Order Workers
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

      {/* Counties Covered */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white text-center">
              Counties We <span className="text-accent">Cover</span>
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {counties.map((county, i) => (
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

      {/* Regional Description */}
      <section className="bg-dark geo-pattern py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white text-center">
              Construction in the <span className="text-accent">{location.name}</span>
            </h2>
            <p className="mt-8 text-text-muted text-lg leading-relaxed">
              {location.regionalDescription}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Trades Available */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white text-center">
              Trades Available in the <span className="text-accent">{location.name}</span>
            </h2>
            <p className="text-center text-text-muted mt-4 max-w-2xl mx-auto">
              Click any trade to see rates and coverage for the {location.name}.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allTrades.map((trade, i) => (
              <AnimatedSection key={trade.slug} delay={i * 0.03}>
                <Link href={`/trades/${trade.slug}/${location.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, borderColor: "rgba(255,107,0,0.5)" }}
                    className="bg-card border border-white/5 rounded-sm px-5 py-4 flex items-center gap-3 transition-colors group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-white font-medium group-hover:text-accent transition-colors text-sm">
                      {trade.name}
                    </span>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why 4A for this region */}
      <section className="bg-dark geo-pattern py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white text-center">
              Why Choose 4A Trades in the <span className="text-accent">{location.name}</span>
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              { title: "Local Operatives", desc: `Our ${location.name} workers are based locally — reducing travel time and costs while understanding the regional construction market.` },
              { title: "Rapid Deployment", desc: `We can deploy workers across all ${counties.length} ${location.name} ${counties.length === 1 ? "area" : "counties"} within 24 hours of your order.` },
              { title: "Regional Rate Knowledge", desc: `We set competitive hourly rates based on local market conditions across the ${location.name}, ensuring fair pricing for your projects.` },
              { title: "Full Compliance", desc: "PAYE, pensions, holiday pay, Workers' Rights Bill compliance — all handled by us. You just get the tradespeople." },
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

      {/* Neighbouring Regions */}
      {neighbours.length > 0 && (
        <section className="bg-darker noise-bg py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl text-white text-center">
                Neighbouring <span className="text-accent">Regions</span>
              </h2>
            </AnimatedSection>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {neighbours.map((n, i) => (
                <AnimatedSection key={n.slug} delay={i * 0.1}>
                  <Link href={`/locations/${n.slug}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, borderColor: "rgba(255,107,0,0.5)" }}
                      className="bg-card border border-white/5 rounded-sm p-5 text-center group"
                    >
                      <p className="text-white group-hover:text-accent transition-colors font-medium">
                        {n.name}
                      </p>
                      <p className="mt-1 text-text-muted text-xs">{n.majorCities.slice(0, 3).join(", ")}</p>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-accent py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-darker">
              Need Workers in the {location.name}?
            </h2>
            <p className="mt-4 text-darker/80 text-lg font-medium leading-relaxed">
              Order online in minutes or call us for a quote. Workers on your site within 24 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/order?region=${location.slug}`}
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
