"use client";

import AnimatedSection from "./AnimatedSection";

const technologies = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7V4h16v3" />
        <path d="M9 20h6" />
        <path d="M12 4v16" />
      </svg>
    ),
    name: "TigerBeetle",
    category: "Ledger Engine",
    description:
      "Fault-tolerant double-entry ledger designed for financial-grade consistency and performance. Processes millions of transactions per second.",
    gradient: "from-[#6366f1] to-[#818cf8]",
    glow: "group-hover:shadow-[#6366f1]/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4V7" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    name: "Authzed (SpiceDB)",
    category: "Authorization",
    description:
      "Authorization graph enabling granular permissions and compliance at scale. Cryptographic audit trails for complete visibility.",
    gradient: "from-[#8b5cf6] to-[#a78bfa]",
    glow: "group-hover:shadow-[#8b5cf6]/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    name: "Event-Sourced Architecture",
    category: "Data Layer",
    description:
      "Real-time reconciliation and complete observability across all transactions. Every state change is an immutable, auditable event.",
    gradient: "from-[#06b6d4] to-[#22d3ee]",
    glow: "group-hover:shadow-[#06b6d4]/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    name: "Developer SDKs",
    category: "APIs & Tools",
    description:
      "GraphQL + REST APIs with sandbox-ready environments for rapid prototyping. Build, test, and deploy financial products in hours.",
    gradient: "from-[#ec4899] to-[#f472b6]",
    glow: "group-hover:shadow-[#ec4899]/20",
  },
];

export default function TechStack() {
  return (
    <section id="technology" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8b5cf6]/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-sm font-mono text-[#06b6d4] tracking-wider uppercase mb-4 block">
              Technology
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              A Composable
              <br />
              <span className="gradient-text">Banking Core</span>
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Purpose-built on best-in-class distributed systems primitives,
              assembled into a cohesive platform for modern finance.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, i) => (
            <AnimatedSection key={tech.name} delay={0.1 * (i + 1)}>
              <div
                className={`glass-card p-8 group transition-all duration-500 hover:shadow-2xl ${tech.glow}`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center flex-shrink-0 text-white shadow-lg`}
                  >
                    {tech.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {tech.name}
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-white/30 border border-white/[0.06] rounded-md">
                        {tech.category}
                      </span>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Built on Kotlin callout */}
        <AnimatedSection delay={0.6}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-sm text-white/50">
                <span className="text-white/70 font-medium">
                  Technical Excellence:
                </span>{" "}
                Built on Kotlin for memory safety and concurrency, with
                distributed systems expertise at the core.
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
