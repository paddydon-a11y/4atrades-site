"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import type { BlogPost } from "@/lib/seo/blog-data";
import { allTrades } from "@/lib/seo/trade-data";
import { allLocations } from "@/lib/seo/location-data";

interface BlogSection {
  heading: string;
  content: string;
}

export default function BlogPostContent({
  post,
  sections,
}: {
  post: BlogPost;
  sections: BlogSection[];
}) {
  const relatedTrades = allTrades.filter((t) =>
    post.relatedTrades.includes(t.slug),
  );
  const relatedLocations = allLocations.filter((l) =>
    post.relatedLocations.includes(l.slug),
  );

  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 pt-40 px-6 overflow-hidden bg-darker noise-bg">
        <div className="absolute inset-0 geo-pattern opacity-30" />
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent text-sm tracking-widest uppercase mb-4"
          >
            {post.readTime} &middot; {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-white leading-tight"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-text-muted"
          >
            By {post.author}
          </motion.p>
        </div>
      </section>

      <div className="construction-stripe" />

      {/* Article Body */}
      <article className="bg-darker py-24 px-6">
        <div className="mx-auto max-w-3xl">
          {sections.map((section, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className={i > 0 ? "mt-12" : ""}>
                <h2 className="text-2xl md:text-3xl text-white mb-4">
                  {section.heading}
                </h2>
                <div className="text-text-muted leading-relaxed space-y-4">
                  {section.content.split("\n\n").map((paragraph, pi) => (
                    <p key={pi}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </article>

      {/* Related Links */}
      {(relatedTrades.length > 0 || relatedLocations.length > 0) && (
        <section className="bg-dark geo-pattern py-24 px-6">
          <div className="mx-auto max-w-3xl">
            {relatedTrades.length > 0 && (
              <AnimatedSection>
                <h3 className="text-2xl text-white mb-6">Related Trades</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {relatedTrades.map((trade) => (
                    <Link
                      key={trade.slug}
                      href={`/trades/${trade.slug}`}
                      className="bg-card border border-white/5 hover:border-accent/50 rounded-sm px-4 py-2 text-sm text-text hover:text-accent transition-colors"
                    >
                      {trade.name}
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            )}
            {relatedLocations.length > 0 && (
              <AnimatedSection delay={0.1}>
                <h3 className="text-2xl text-white mb-6">Related Locations</h3>
                <div className="flex flex-wrap gap-3">
                  {relatedLocations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="bg-card border border-white/5 hover:border-accent/50 rounded-sm px-4 py-2 text-sm text-text hover:text-accent transition-colors"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-accent py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-darker">
              Need Construction Workers?
            </h2>
            <p className="mt-4 text-darker/80 text-lg font-medium">
              Order online in minutes or call us for a quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/order"
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
