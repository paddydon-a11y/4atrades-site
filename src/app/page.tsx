"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
import { trades, regions, differentiators } from "@/lib/data";

function TrustBar() {
  const items = [
    { icon: "🛡️", text: "No Payroll Risk" },
    { icon: "✅", text: "Vetted Tradespeople" },
    { icon: "📞", text: "One Call Solutions" },
    { icon: "💳", text: "Instant Credit Account" },
  ];

  return (
    <section className="bg-card border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm md:text-base font-semibold text-white tracking-wide">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Labour Supply",
      desc: "From a single operative to full gangs. Skilled tradespeople on your site within 24 hours, fully vetted and ready to work.",
      icon: "👷",
      href: "/tt",
    },
    {
      title: "Fixed-Price Packages",
      desc: "Labour, plant, materials, and management — all under one roof. One price, one invoice, zero headaches.",
      icon: "📋",
      href: "/tt",
    },
    {
      title: "Territory Partnerships",
      desc: "Claim your exclusive territory. We'll provide telesales, marketing, QS support, and live leads — so you never chase a client again. £4,995 one-off.",
      icon: "🤝",
      href: "/join",
    },
  ];

  return (
    <section className="bg-darker noise-bg py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl text-center text-white">What We Do</h2>
          <p className="text-center text-text-muted mt-4 max-w-2xl mx-auto">
            Everything your construction project needs under one roof.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.15}>
              <Link href={service.href}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(255,107,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-white/5 rounded-lg p-8 h-full cursor-pointer group"
                >
                  <span className="text-4xl">{service.icon}</span>
                  <h3 className="mt-6 text-2xl text-white group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-text-muted leading-relaxed">
                    {service.desc}
                  </p>
                  <span className="inline-block mt-6 text-accent font-semibold text-sm tracking-wide group-hover:translate-x-2 transition-transform">
                    Learn More →
                  </span>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradesGrid() {
  const categories = Object.entries(trades);

  return (
    <section className="bg-dark geo-pattern py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl text-center text-white">50+ Trades Supplied</h2>
          <p className="text-center text-text-muted mt-4 max-w-2xl mx-auto">
            Whatever your project needs, we&apos;ve got the people.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {categories.map(([category, tradeList], ci) => (
            <AnimatedSection key={category} delay={ci * 0.15}>
              <div>
                <h3 className="text-xl text-accent mb-6 tracking-wider">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tradeList.map((trade, ti) => (
                    <motion.span
                      key={trade}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + ti * 0.03 }}
                      className="bg-card-light border border-white/10 text-text text-sm px-4 py-2 rounded-sm hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                    >
                      {trade}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/tt"
            className="inline-block bg-accent hover:bg-accent-bright text-white font-bold px-8 py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
          >
            View All Trades
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="bg-darker noise-bg py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              We&apos;re Not Kids In Suits<br />
              <span className="text-accent">Pushing CVs.</span>
            </h2>
            <p className="mt-6 text-text-muted text-lg leading-relaxed max-w-lg">
              We&apos;ve been in construction. We&apos;ve managed sites, run gangs, and know what happens
              when you get the wrong person on a job. That&apos;s why we do things differently.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {differentiators.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="border-l-2 border-accent pl-6 py-2"
                >
                  <h3 className="text-xl text-white tracking-wider">{item.title}</h3>
                  <p className="mt-2 text-text-muted leading-relaxed">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnershipCTA() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        alt="Construction site workers collaborating on a building project"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-darker/95 to-darker/70" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl">
            Tired of Quiet Weeks? <span className="text-accent">We&apos;ll Send the Work to You.</span>
          </h2>
          <p className="mt-6 text-text text-lg max-w-2xl leading-relaxed">
            Claim an exclusive territory for your trade. We&apos;ll provide telesales, marketing,
            QS support, and live project introductions — so you never chase a client again.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-12 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-lg p-8 max-w-md">
            <p className="text-text-muted text-sm tracking-widest uppercase">Territory Partner</p>
            <p className="font-[family-name:var(--font-display)] text-5xl text-accent mt-2">£4,995</p>
            <p className="mt-2 inline-block bg-red-500/15 border border-red-500/30 text-red-400 text-sm font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">Next 5 territories only</p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-10">
          <Link
            href="/claim"
            className="inline-block bg-accent hover:bg-accent-bright text-white font-bold px-8 py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
          >
            Claim Your Territory
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CoverageSection() {
  return (
    <section className="bg-dark py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl text-center text-white">UK-Wide Coverage</h2>
          <p className="text-center text-text-muted mt-4 max-w-2xl mx-auto">
            Six regions. Hundreds of sites. Your workforce, wherever you need them.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {regions.map((region, i) => (
            <AnimatedSection key={region.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "rgba(255,107,0,0.5)" }}
                className="bg-card border border-white/5 rounded-lg p-6 text-center transition-colors"
              >
                <h3 className="text-2xl text-white">{region.name}</h3>
                <p className="mt-2 text-text-muted text-sm">{region.cities}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkersRightsBanner() {
  return (
    <section className="bg-accent py-12 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl text-darker">
            The Workers&apos; Rights Bill Is Now Law
          </h2>
          <p className="mt-4 text-darker/80 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Avoid tribunals, payroll headaches, and compliance risk. Hire through 4A Trades and let us
            handle the legal complexities while you focus on building.
          </p>
          <a
            href="tel:03301337901"
            className="mt-8 inline-block bg-darker hover:bg-dark text-white font-bold px-8 py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
          >
            Talk To Us Today
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-darker noise-bg py-24 px-6" id="contact">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white">Get In Touch</h2>
            <p className="mt-4 text-text-muted text-lg leading-relaxed">
              Need tradespeople on site? Want to discuss a partnership? Give us a call or fill in the form.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-text-muted text-sm uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:03301337901" className="font-[family-name:var(--font-display)] text-3xl text-accent hover:text-accent-bright transition-colors">
                  0330 133 7901
                </a>
              </div>
              <div>
                <p className="text-text-muted text-sm uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:Sales@4ATrades.co.uk" className="text-lg text-white hover:text-accent transition-colors">
                  Sales@4ATrades.co.uk
                </a>
              </div>
              <div>
                <p className="text-text-muted text-sm uppercase tracking-widest mb-1">Hours</p>
                <p className="text-white">Monday - Friday, 8am - 5pm</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form className="bg-card border border-white/5 rounded-lg p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-text-muted mb-1 uppercase tracking-wider">Name</label>
                <input type="text" id="name" name="name" required className="w-full bg-darker border border-white/10 rounded-sm px-4 py-3 text-white outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm text-text-muted mb-1 uppercase tracking-wider">Company</label>
                <input type="text" id="company" name="company" className="w-full bg-darker border border-white/10 rounded-sm px-4 py-3 text-white outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-text-muted mb-1 uppercase tracking-wider">Phone</label>
                <input type="tel" id="phone" name="phone" required className="w-full bg-darker border border-white/10 rounded-sm px-4 py-3 text-white outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-text-muted mb-1 uppercase tracking-wider">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full bg-darker border border-white/10 rounded-sm px-4 py-3 text-white outline-none focus:border-accent transition-colors resize-none" />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-bright text-white font-bold py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
          alt="Construction site aerial view"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-darker/80 via-darker/60 to-darker" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none"
          >
            Your Workforce.<br />
            <span className="text-accent">Delivered.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text max-w-2xl mx-auto leading-relaxed"
          >
            The UK&apos;s first construction labour agency with fully online ordering.
            Pick your trade, choose your county, and get a live hourly rate — workers on site within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/order"
              className="bg-accent hover:bg-accent-bright text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-wider transition-colors"
            >
              Order Workers
            </Link>
            <Link
              href="/register"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-wider transition-colors"
            >
              Register as a Worker
            </Link>
          </motion.div>

          {/* Stat counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <Counter end={6} label="Regions" />
            <Counter end={50} suffix="+" label="Trades" />
            <Counter end={24} suffix="hr" label="Turnaround" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      <TrustBar />
      <ServicesSection />
      <TradesGrid />
      <WhySection />
      <PartnershipCTA />
      <CoverageSection />
      <WorkersRightsBanner />
      <ContactSection />
    </main>
  );
}
