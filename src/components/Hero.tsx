"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 mesh-gradient" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#6366f1]/10 blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#06b6d4]/10 blur-[120px] animate-float-slow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8b5cf6]/5 blur-[150px] animate-pulse-glow"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-white/60 font-medium tracking-wide">
              Now accepting design partners
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
        >
          <span className="text-white">The Operating System</span>
          <br />
          <span className="gradient-text">for Modern Banking</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The next-generation core built for composability, auditability, and
          developer velocity. Compose financial products with the same ease as
          building cloud applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#cta"
            className="group relative px-8 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full hover:shadow-xl hover:shadow-[#6366f1]/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Request Early Access
            <span className="ml-2 inline-block group-hover:translate-x-0.5 transition-transform">
              &rarr;
            </span>
          </a>
          <a
            href="#vision"
            className="px-8 py-3.5 text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 hover:bg-white/[0.03]"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-3"
        >
          {[
            "TigerBeetle",
            "Authzed",
            "Event-Sourced",
            "GraphQL",
            "Kotlin",
            "Terraform",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-white/30 border border-white/[0.06] rounded-md bg-white/[0.02]"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05060f] to-transparent" />
    </section>
  );
}
