"use client";

import AnimatedSection from "./AnimatedSection";

const rows = [
  {
    player: "Fiserv / FIS / Jack Henry",
    techAge: "30+ years",
    contractLockIn: "7–10 years",
    developerAPIs: "Limited",
    architecture: "Monolithic",
    highlight: false,
  },
  {
    player: "Thought Machine / Mambu",
    techAge: "5–10 years",
    contractLockIn: "3–5 years",
    developerAPIs: "Moderate",
    architecture: "Cloud monolith",
    highlight: false,
  },
  {
    player: "Open Substrate",
    techAge: "New",
    contractLockIn: "Usage-based",
    developerAPIs: "Full",
    architecture: "Distributed primitives",
    highlight: true,
  },
];

const columns = [
  { key: "player" as const, label: "Player" },
  { key: "techAge" as const, label: "Tech Age" },
  { key: "contractLockIn" as const, label: "Lock-In" },
  { key: "developerAPIs" as const, label: "Dev APIs" },
  { key: "architecture" as const, label: "Architecture" },
];

export default function Comparison() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/[0.02] to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-[#06b6d4] tracking-wider uppercase mb-4 block">
              Competitive Landscape
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              A New Core for the
              <br />
              <span className="gradient-text">Composable Era</span>
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              While legacy players retrofit cloud features onto decades-old
              architecture, Open Substrate is native to the composable era.
            </p>
          </div>
        </AnimatedSection>

        {/* Desktop table */}
        <AnimatedSection delay={0.2}>
          <div className="hidden md:block glass-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className="px-6 py-4 text-left text-xs font-mono uppercase tracking-wider text-white/30"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.player}
                    className={`border-b border-white/[0.04] last:border-0 transition-colors ${
                      row.highlight
                        ? "bg-[#6366f1]/[0.06]"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <td className="px-6 py-5">
                      <span
                        className={`font-semibold ${
                          row.highlight ? "gradient-text text-lg" : "text-white/70"
                        }`}
                      >
                        {row.player}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={
                          row.highlight
                            ? "text-emerald-400 font-medium"
                            : "text-white/40"
                        }
                      >
                        {row.techAge}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={
                          row.highlight
                            ? "text-emerald-400 font-medium"
                            : "text-white/40"
                        }
                      >
                        {row.contractLockIn}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                          row.highlight
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : row.developerAPIs === "Moderate"
                            ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            : "bg-red-500/10 text-red-400 border border-red-500/20"
                        }`}
                      >
                        {row.developerAPIs}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={
                          row.highlight
                            ? "text-white font-medium"
                            : "text-white/40"
                        }
                      >
                        {row.architecture}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <AnimatedSection key={row.player} delay={0.1 * (i + 1)}>
              <div
                className={`glass-card p-6 ${
                  row.highlight ? "border-[#6366f1]/30 glow-accent" : ""
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-4 ${
                    row.highlight ? "gradient-text" : "text-white"
                  }`}
                >
                  {row.player}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {columns.slice(1).map((col) => (
                    <div key={col.key}>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-1">
                        {col.label}
                      </div>
                      <div
                        className={
                          row.highlight ? "text-emerald-400 font-medium text-sm" : "text-white/50 text-sm"
                        }
                      >
                        {row[col.key]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
