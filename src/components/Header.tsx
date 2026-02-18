"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/tt", label: "Trades" },
  { href: "/join", label: "Partnerships" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darker/90 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-display)] text-3xl md:text-4xl tracking-wider text-white">
            4A<span className="text-accent">TRADES</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-display)] text-lg tracking-wider text-text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:03301337901"
            className="bg-accent hover:bg-accent-bright text-white font-bold px-6 py-2.5 rounded-sm tracking-wide transition-colors font-[family-name:var(--font-display)] text-lg"
          >
            0330 133 7901
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-16 bg-darker/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 z-40"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-white hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:03301337901"
              className="bg-accent text-white font-bold px-10 py-4 rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-wider"
            >
              0330 133 7901
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
