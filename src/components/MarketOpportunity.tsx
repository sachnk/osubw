"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 5000,
    prefix: "",
    suffix: "+",
    label: "U.S. Banks & Credit Unions",
    description: "Running on legacy cores ready for modernization",
  },
  {
    value: 25,
    prefix: "$",
    suffix: "B",
    label: "Market Opportunity",
    description: "Total addressable market for core banking transformation",
  },
  {
    value: 3,
    prefix: "",
    suffix: "X",
    label: "Growth Rate",
    description: "Cloud-native banking adoption accelerating",
  },
];

export default function MarketOpportunity() {
  return (
    <section className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/[0.03] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-sm font-mono text-[#06b6d4] tracking-wider uppercase mb-4 block">
              Market Opportunity
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              The $25B+ Core Modernization
              <br />
              <span className="gradient-text">Wave Has Begun</span>
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Cloud infrastructure, API-first design, and real-time payments are
              forcing complete rewrites. Fintechs and embedded finance platforms
              demand modular, composable cores.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.1 * (i + 1)}>
              <div className="glass-card p-10 text-center group hover:glow-accent transition-all duration-500">
                <div className="text-6xl sm:text-7xl font-bold gradient-text mb-4">
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-white/40">{stat.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
