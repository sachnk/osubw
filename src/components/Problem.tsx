"use client";

import AnimatedSection from "./AnimatedSection";

export default function Problem() {
  return (
    <section id="problem" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-sm font-mono text-[#6366f1] tracking-wider uppercase mb-4 block">
              The Problem
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Legacy Cores Are the
              <br />
              <span className="gradient-text-warm">Bottleneck to Innovation</span>
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Fiserv, FIS, and Jack Henry lock clients into 7&ndash;10 year
              contracts with implementation cycles exceeding 24 months.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 9l-6 6M9 9l6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  COBOL-Era Monoliths
                </h3>
              </div>
              <p className="text-white/40 leading-relaxed mb-6">
                These legacy systems slow innovation and increase operational
                risk. Banks spend more time maintaining decades-old code than
                building for the future.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-red-400">80%</span>
                <span className="text-white/40 text-sm">
                  of bank tech spend goes to maintaining legacy systems
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 9v4M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Vendor Lock-In
                </h3>
              </div>
              <p className="text-white/40 leading-relaxed mb-6">
                Multi-year contracts, proprietary APIs, and monolithic
                architectures make it nearly impossible to innovate or switch
                vendors.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-amber-400">24+</span>
                <span className="text-white/40 text-sm">
                  months to implement a legacy core
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Timeline visual */}
        <AnimatedSection delay={0.3}>
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-xs font-medium text-red-400">
                    Legacy Core
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  24+ Months
                </h4>
                <p className="text-white/40 text-sm">
                  Average implementation timeline with legacy providers
                </p>
              </div>

              <div className="hidden md:block flex-1 relative">
                <div className="h-px w-full bg-gradient-to-r from-red-500/50 via-white/10 to-emerald-500/50" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500 border-2 border-red-500/30" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500 border-2 border-emerald-500/30" />
              </div>

              <div className="flex-1 text-center md:text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-emerald-400">
                    Open Substrate
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Days</h4>
                <p className="text-white/40 text-sm">
                  Deploy and start building with real-time updates
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
