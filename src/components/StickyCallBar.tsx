"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on the order wizard page
  if (pathname.startsWith("/order")) return null;

  if (!visible) return null;

  return (
    <a
      href="tel:03301337901"
      aria-label="Call 0330 133 7901"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-16 h-16 rounded-full bg-accent shadow-lg animate-[beat_1.2s_ease-in-out_infinite]"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
      </svg>
    </a>
  );
}
