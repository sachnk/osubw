"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#vision" },
  { label: "Technology", href: "#technology" },
  { label: "White Paper", href: "#whitepaper" },
  { label: "Traction", href: "#traction" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#05060f]/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-white font-bold text-sm">
              OS
            </div>
            <span className="font-semibold text-white tracking-tight text-[15px]">
              Open Substrate
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full hover:shadow-lg hover:shadow-[#6366f1]/25 transition-all duration-300"
            >
              Get Early Access
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/60 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[#05060f]/95 backdrop-blur-xl pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-lg text-white/80 hover:text-white transition-colors border-b border-white/[0.06]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-5 py-3 text-center font-medium text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full"
              >
                Get Early Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
