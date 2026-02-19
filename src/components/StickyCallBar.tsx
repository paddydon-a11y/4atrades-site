"use client";

import { useState, useEffect } from "react";

export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero (roughly one viewport height)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="tel:03301337901"
        className="flex items-center justify-center gap-3 bg-accent text-white font-bold py-4 font-[family-name:var(--font-display)] text-xl tracking-wider"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
        </svg>
        Call 0330 133 7901
      </a>
    </div>
  );
}
