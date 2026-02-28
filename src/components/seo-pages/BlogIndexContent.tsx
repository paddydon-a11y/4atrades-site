"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { allBlogPosts } from "@/lib/seo/blog-data";

export default function BlogIndexContent() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 pt-40 px-6 overflow-hidden bg-darker noise-bg">
        <div className="absolute inset-0 geo-pattern opacity-30" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white"
          >
            Construction <span className="text-accent">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text max-w-3xl mx-auto leading-relaxed"
          >
            Expert guides on construction labour hire, rates, compliance, and workforce management.
          </motion.p>
        </div>
      </section>

      <div className="construction-stripe" />

      {/* Posts Grid */}
      <section className="bg-darker noise-bg py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {allBlogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`}>
                  <motion.article
                    whileHover={{ y: -4, borderColor: "rgba(255,107,0,0.5)" }}
                    className="bg-card border border-white/5 rounded-lg p-8 h-full group"
                  >
                    <p className="text-accent text-xs tracking-widest uppercase mb-3">
                      {post.readTime} &middot;{" "}
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h2 className="text-xl text-white group-hover:text-accent transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="mt-4 text-text-muted text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-6 text-accent font-semibold text-sm tracking-wide group-hover:translate-x-2 transition-transform">
                      Read More →
                    </span>
                  </motion.article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
