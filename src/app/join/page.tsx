"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const benefits = [
  {
    icon: "📞",
    title: "Dedicated Telesales Team",
    description:
      "Our team works your territory daily — cold calling, following up, and booking meetings so you don't have to.",
  },
  {
    icon: "📣",
    title: "Marketing & Lead Generation",
    description:
      "Google Ads, social media, email campaigns — all targeted at your territory. Leads come straight to you.",
  },
  {
    icon: "📋",
    title: "QS & Estimating Support",
    description:
      "We help you price jobs properly. Quantity surveying, estimating, and tender support so you win more work at the right margin.",
  },
  {
    icon: "🔒",
    title: "Exclusive Territory",
    description:
      "Your county. Your patch. We won't represent another contractor in your trade within your territory. Full exclusivity.",
  },
  {
    icon: "🤝",
    title: "Live Project Introductions",
    description:
      "We connect you directly to main contractors, developers, and clients with live projects that need your trade — right now.",
  },
  {
    icon: "📈",
    title: "Business Growth Support",
    description:
      "From branding to tender writing, we help you look the part and land the jobs that grow your business.",
  },
];

const steps = [
  {
    number: "01",
    title: "Pick Your Territory",
    description:
      "Choose your county and your trade. Once it's yours, it's yours — we won't work with anyone else in that space.",
  },
  {
    number: "02",
    title: "We Go to Work",
    description:
      "Our telesales team starts generating leads. Marketing campaigns go live. We actively hunt for projects in your area.",
  },
  {
    number: "03",
    title: "You Get the Work",
    description:
      "Live opportunities land in your inbox. Qualified leads, warm introductions, tender invitations — you just turn up and do what you do best.",
  },
];

export default function TerritoryPartnerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 pt-40 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construction site"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-darker/90 to-darker/80" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-accent/10 border border-accent/30 text-accent text-sm font-bold px-4 py-2 rounded-sm uppercase tracking-wider mb-6"
          >
            Territory Partnerships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
          >
            Tired of Quiet Weeks?{" "}
            <span className="text-accent">We&apos;ll Send the Work to You.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text max-w-3xl mx-auto leading-relaxed"
          >
            4A Trades connects skilled contractors and subbies with live projects across
            the UK. Join our partner network and never chase a client again.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:03301337901"
              className="bg-accent hover:bg-accent-bright text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
            >
              Call Us Now
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-white/30 hover:border-accent text-white hover:text-accent px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </section>

      <div className="construction-stripe" />

      {/* The Offer */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white">
              One Price. <span className="text-accent">Your Territory. Locked In.</span>
            </h2>
            <p className="mt-6 text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
              For a one-off investment of <strong className="text-accent">£4,995</strong>, you
              get exclusive rights to your trade in your chosen county. We become your
              sales team, your marketing department, and your back office — so you can
              focus on the tools.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-12 bg-card border border-accent rounded-lg p-10">
              <p className="text-text-muted text-sm tracking-widest uppercase">
                Territory Partner
              </p>
              <p className="font-[family-name:var(--font-display)] text-6xl md:text-7xl text-accent mt-3">
                £4,995
              </p>
              <p className="text-text-muted mt-2 text-lg">One-off. No monthly fees. No hidden costs.</p>
              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="text-white text-xl font-bold">Everything included:</p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  {[
                    "Exclusive Territory",
                    "Telesales Team",
                    "Marketing & Ads",
                    "Lead Generation",
                    "QS Support",
                    "Tender Introductions",
                  ].map((item) => (
                    <span
                      key={item}
                      className="bg-accent/10 border border-accent/20 text-accent text-sm font-semibold px-4 py-2 rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="tel:03301337901"
                className="mt-10 inline-block bg-accent hover:bg-accent-bright text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-xl tracking-wider transition-colors"
              >
                Claim Your Territory
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-dark py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center text-white mb-16">
              What You <span className="text-accent">Get</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <div className="bg-card border border-white/5 rounded-lg p-8 h-full hover:border-accent/30 transition-colors">
                  <span className="text-3xl">{benefit.icon}</span>
                  <h3 className="text-xl text-white mt-4">{benefit.title}</h3>
                  <p className="mt-3 text-text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center text-white mb-16">
              How It <span className="text-accent">Works</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-display)] text-2xl text-accent">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl text-white">{step.title}</h3>
                    <p className="mt-2 text-text-muted text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="bg-accent py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-darker">
              Example: Groundworker buys Lancashire
            </h2>
            <p className="mt-4 text-darker/80 text-lg leading-relaxed font-medium">
              You&apos;re a groundwork contractor. You pay £4,995 and choose Lancashire as
              your territory. From that day, we represent nobody else doing groundwork in
              Lancashire. Our telesales team is on the phone daily hunting projects for
              you. Google Ads run in your area. When a main contractor needs groundwork
              in Lancashire, your name is the only one we put forward.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-dark py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center text-white mb-12">
              Common <span className="text-accent">Questions</span>
            </h2>
          </AnimatedSection>

          {[
            {
              q: "What exactly do I get for £4,995?",
              a: "Exclusive territory rights for your trade in your chosen county. A dedicated telesales team generating leads. Google Ads and marketing campaigns. QS and estimating support. Live project introductions. Basically, a full sales and marketing department working for you.",
            },
            {
              q: "Are there any monthly fees?",
              a: "No. It's a one-off payment. No subscriptions, no hidden charges, no small print.",
            },
            {
              q: "What does 'exclusive' actually mean?",
              a: "It means we will not represent any other contractor in your trade within your territory. If you're the groundworker for Lancashire, we don't work with another groundworker in Lancashire. Full stop.",
            },
            {
              q: "How quickly will I start getting leads?",
              a: "Most partners start seeing introductions within the first few weeks. Our telesales team starts working your area immediately and marketing campaigns go live within days of you signing up.",
            },
            {
              q: "Can I have more than one territory?",
              a: "Absolutely. Many of our partners lock down multiple counties. Each territory is a separate £4,995 investment.",
            },
            {
              q: "What trades can buy a territory?",
              a: "Any construction trade — groundworkers, bricklayers, electricians, roofers, the lot. If you're in construction and you want more work, this is for you.",
            },
          ].map((faq, i) => (
            <AnimatedSection key={faq.q} delay={i * 0.08}>
              <div className="border-b border-white/10 py-6">
                <h3 className="text-lg text-white font-bold">{faq.q}</h3>
                <p className="mt-2 text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-white">
              Stop Chasing Work.{" "}
              <span className="text-accent">Let It Come to You.</span>
            </h2>
            <p className="mt-6 text-text-muted text-lg leading-relaxed">
              Call us today to check availability in your area and lock down your territory.
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
