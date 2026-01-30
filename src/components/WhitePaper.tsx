"use client";

import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    title: "Command Sovereignty",
    description:
      "All state mutations flow through a single serialized gateway. Every change is captured, validated, and logged before execution.",
  },
  {
    title: "Event Materialization",
    description:
      "Commands produce immutable events that capture not just what changed, but the causal context of why it changed.",
  },
  {
    title: "Temporal Abstraction",
    description:
      "Wall-clock time is replaced with a logical clock that advances only through explicit tick commands, eliminating non-determinism at the source.",
  },
  {
    title: "Durable Orchestration",
    description:
      "Long-running workflows persist state at each step, enabling deterministic replay of complex multi-step financial operations.",
  },
];

export default function WhitePaper() {
  return (
    <section id="whitepaper" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06b6d4]/[0.03] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            <AnimatedSection>
              <span className="text-sm font-mono text-[#06b6d4] tracking-wider uppercase mb-4 block">
                White Paper
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Fully Deterministic
                <br />
                <span className="gradient-text">Financial Systems</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed mb-6">
                Traditional CRUD architectures overwrite history on every update.
                When regulators ask &ldquo;how did you arrive at this state?&rdquo;,
                the answer is often forensic archaeology. We took a different approach.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                Open Substrate is built on a fully deterministic distributed
                architecture where system state is a pure function of its
                command history. Time itself is abstracted into a logical clock
                that advances only through explicit tick events &mdash; eliminating
                the last source of non-determinism. The result: any state, at any
                point in history, can be reconstructed with bit-perfect fidelity
                by replaying the command log.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card p-6 border-l-2 border-l-[#06b6d4] mb-8">
                <p className="text-white/70 leading-relaxed text-sm">
                  <span className="font-semibold text-white">
                    Replay(S&#8320;, L<sub>C</sub>) = (S<sub>n</sub>, L<sub>E</sub>)
                  </span>{" "}
                  &mdash; Given an initial state and a command log, replaying
                  commands always produces identical state and event sequences.
                  Not probabilistically. Not approximately.{" "}
                  <span className="text-[#06b6d4]">Provably identical.</span>
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <a
                href="/deterministic_architectures.pdf"
                download
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-[#06b6d4] to-[#0891b2] rounded-full hover:shadow-xl hover:shadow-[#06b6d4]/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download White Paper
                <span className="text-white/50 text-xs font-mono">PDF</span>
              </a>
            </AnimatedSection>
          </div>

          {/* Right: Four pillars */}
          <div className="space-y-5">
            <AnimatedSection delay={0.1}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-white/30 mb-5">
                Four Pillars of Determinism
              </h3>
            </AnimatedSection>

            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={0.15 * (i + 1)}>
                <div className="glass-card p-6 group hover:glow-cyan transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center flex-shrink-0 text-[#06b6d4] text-sm font-mono font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1.5">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.8}>
              <div className="flex items-center gap-3 pt-2 px-2">
                <div className="flex items-center gap-1.5">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]"
                      style={{ opacity: 1 - i * 0.2 }}
                    />
                  ))}
                  <div className="w-12 h-px bg-gradient-to-r from-[#06b6d4]/50 to-transparent ml-1" />
                </div>
                <span className="text-xs text-white/30 font-mono">
                  Bit-perfect replay guaranteed
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
