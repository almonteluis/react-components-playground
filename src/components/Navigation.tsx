"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [navBlur, setNavBlur] = useState(false);
  const [navOpacity, setNavOpacity] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setNavBlur(scrollY > 50);
      setNavOpacity(Math.min(1, scrollY / 200));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 px-6 py-5 transition-all duration-700"
      style={{
        backdropFilter: navBlur ? "blur(20px)" : "none",
        backgroundColor: navBlur ? "rgba(8, 8, 8, 0.7)" : "transparent",
        borderBottom: navBlur ? "1px solid rgba(191, 255, 0, 0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="relative group"
          style={{ opacity: navOpacity || 0.5 }}
        >
          <span className="font-mono text-sm tracking-[0.3em] text-[#bfff00] group-hover:text-white transition-colors duration-300">
            JLA_
          </span>
          <span className="absolute -bottom-1 left-0 h-[1px] bg-[#bfff00] w-0 group-hover:w-full transition-all duration-500 ease-out" />
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/routes"
            className="relative group"
            style={{ opacity: navOpacity || 0.6 }}
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#f5f4ef]/60 group-hover:text-[#bfff00] transition-colors duration-300">
              ROUTES
            </span>
            <span className="absolute -bottom-2 left-0 h-[1px] bg-[#bfff00] w-0 group-hover:w-full transition-all duration-500" />
          </Link>

          <Link
            href="mailto:almonteluis92@gmail.com"
            className="relative overflow-hidden font-mono text-[11px] tracking-[0.15em] border border-[#bfff00] text-[#bfff00] px-4 py-2.5 group block"
          >
            <span className="relative z-10 group-hover:text-[#080808] transition-colors duration-300">
              CONTACT_
            </span>
            <span className="absolute inset-0 bg-[#bfff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
