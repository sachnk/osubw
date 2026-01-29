"use client";

import AnimatedSection from "./AnimatedSection";

const layers = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Infrastructure Layer",
    description: "Distributed primitives and fault-tolerant foundations",
    color: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Banking Primitives",
    description: "Ledgers, accounts, transactions, and permissions",
    color: "from-[#8b5cf6] to-[#a78bfa]",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Financial Applications",
    description: "Products composed like cloud applications",
    color: "from-[#06b6d4] to-[#22d3ee]",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection>
              <span className="text-sm font-mono text-[#8b5cf6] tracking-wider uppercase mb-4 block">
                The Vision
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                The Open Core for
                <br />
                <span className="gradient-text">Money Movement</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed mb-8">
                Re-architect the bank core as an open, auditable, programmable
                substrate where developers compose financial products with the
                same ease as building cloud applications.
              </p>

              <div className="glass-card p-6 border-l-2 border-l-[#6366f1]">
                <p className="text-white/70 leading-relaxed">
                  <span className="font-semibold text-white">
                    Think of it as AWS for core banking logic
                  </span>{" "}
                  &mdash; infrastructure that just works, allowing teams to
                  focus on innovation rather than maintenance.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            {layers.map((layer, i) => (
              <AnimatedSection key={layer.title} delay={0.15 * (i + 1)}>
                <div className="glass-card p-6 group hover:glow-accent transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0 text-white`}
                    >
                      {layer.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {layer.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                    <div className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Connection lines */}
            <AnimatedSection delay={0.6}>
              <div className="flex justify-center">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-2 h-2 rounded-full bg-[#6366f1]" />
                  <div className="w-8 h-px bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]" />
                  <div className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
                  <div className="w-8 h-px bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]" />
                  <div className="w-2 h-2 rounded-full bg-[#06b6d4]" />
                  <span className="text-xs text-white/30 font-mono ml-2">
                    Composable
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
