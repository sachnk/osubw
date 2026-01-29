"use client";

import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Deterministic Double-Entry Accounting",
    description:
      "Process millions of transactions per second with zero data loss. Every transfer is a balanced, atomic double-entry operation.",
    metric: "1M+ TPS",
    metricLabel: "Throughput",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Cryptographic Audit Trails",
    description:
      "Authorization graphs provide complete compliance visibility and granular control. Every action is traceable and verifiable.",
    metric: "100%",
    metricLabel: "Auditability",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Extensible Modular Core",
    description:
      "Launch new financial products instantly without core system changes. Compose primitives into any financial product.",
    metric: "Zero",
    metricLabel: "Core Changes",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    title: "One-Line Deployment",
    description:
      "Terraform-ready infrastructure with sandbox environments in minutes. Go from zero to running core in a single command.",
    metric: "Minutes",
    metricLabel: "To Deploy",
  },
];

export default function Features() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-sm font-mono text-[#8b5cf6] tracking-wider uppercase mb-4 block">
              Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Built for Speed, Safety,
              <br />
              <span className="gradient-text">and Composability</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={0.1 * (i + 1)}>
              <div className="glass-card p-8 group hover:glow-accent transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#8b5cf6]">
                    {feature.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">
                      {feature.metric}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/30">
                      {feature.metricLabel}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
