"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="relative glass-card p-12 md:p-20 text-center overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#06b6d4]/10" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/50 to-transparent" />

            {/* Floating orbs */}
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-[#6366f1]/10 blur-[80px] animate-float" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-[#06b6d4]/10 blur-[80px] animate-float-slow" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  Ready to Build the
                  <br />
                  <span className="gradient-text">Future of Banking?</span>
                </h2>
              </motion.div>

              <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
                Join our growing community of banks, fintechs, and developers
                building on the next-generation banking core.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@opensubstrate.io"
                  className="group relative px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full hover:shadow-xl hover:shadow-[#6366f1]/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request Early Access
                  <span className="ml-2 inline-block group-hover:translate-x-0.5 transition-transform">
                    &rarr;
                  </span>
                </a>
                <a
                  href="mailto:hello@opensubstrate.io"
                  className="px-8 py-4 text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 hover:bg-white/[0.03]"
                >
                  Talk to Our Team
                </a>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-white/30">
                <span className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  No long-term contracts
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Usage-based pricing
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Sandbox in minutes
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
