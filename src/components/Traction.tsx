"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

function AnimatedRing({ percentage, size = 140 }: { percentage: number; size?: number }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const p = Math.min(elapsed / 1500, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setProgress(eased * percentage);
            if (p < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage]);

  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.05s linear" }}
        />
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

const metrics = [
  {
    value: "10M+",
    label: "Transactions Simulated",
    description: "Proven at scale with production-grade reliability",
    ring: 85,
  },
  {
    value: "99.999%",
    label: "System Uptime",
    description: "Five nines availability in testing environments",
    ring: 99,
  },
  {
    value: "1",
    label: "Active Pilot",
    description: "Regional bank design partner",
    ring: 20,
  },
];

export default function Traction() {
  return (
    <section id="traction" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-sm font-mono text-[#6366f1] tracking-wider uppercase mb-4 block">
              Traction
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Early Validation from
              <br />
              <span className="gradient-text">Builders and Banks</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, i) => (
            <AnimatedSection key={metric.label} delay={0.15 * (i + 1)}>
              <div className="glass-card p-8 text-center group hover:glow-accent transition-all duration-500">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <AnimatedRing percentage={metric.ring} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {metric.value}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-white/40">{metric.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Developer momentum */}
        <AnimatedSection delay={0.6}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#05060f] bg-gradient-to-br from-[#6366f1] to-[#06b6d4]"
                    style={{ opacity: 1 - i * 0.15 }}
                  />
                ))}
              </div>
              <span className="text-sm text-white/50">
                Growing waitlist of fintech builders eager to access the platform
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
