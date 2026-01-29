import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import MarketOpportunity from "@/components/MarketOpportunity";
import Vision from "@/components/Vision";
import TechStack from "@/components/TechStack";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Traction from "@/components/Traction";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="line-glow max-w-2xl mx-auto" />
        <Problem />
        <div className="line-glow max-w-2xl mx-auto" />
        <MarketOpportunity />
        <div className="line-glow max-w-2xl mx-auto" />
        <Vision />
        <div className="line-glow max-w-2xl mx-auto" />
        <TechStack />
        <div className="line-glow max-w-2xl mx-auto" />
        <Features />
        <div className="line-glow max-w-2xl mx-auto" />
        <Comparison />
        <div className="line-glow max-w-2xl mx-auto" />
        <Traction />
        <div className="line-glow max-w-2xl mx-auto" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
