"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Lock, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { useRef } from "react";

interface HeroProps {
  onOpenConfessModal: () => void;
  onExplorePrompts: () => void;
}

export default function Hero({ onOpenConfessModal, onExplorePrompts }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 60]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between bg-[#0A0A0A] text-[#F5F3EE] pt-28 pb-12 px-6 md:px-12 overflow-hidden bg-grain select-none"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-[#D8B45A]/10 via-[#D8B45A]/3 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 scanline-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-[0.2em] font-mono text-[#A5A5A5] border-b border-[#262626]/60 pb-4 z-10 gap-2">
        <div className="flex items-center space-x-2">
          <span className="text-[#D8B45A]">THE FORUM HOUSE</span>
          <span className="text-[#262626]">/</span>
          <span>PRESENTS</span>
        </div>
        <div className="flex items-center space-x-3 text-right">
          <span className="text-[#F5F3EE] font-medium">THE HOUSE OF CFO × CTO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D8B45A]" />
          <span className="text-[#D8B45A]">20 NOV 2026 · HYDERABAD</span>
        </div>
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-6xl w-full mx-auto my-auto text-center z-10 flex flex-col items-center justify-center py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111] border border-[#262626] text-[#D8B45A] text-xs font-mono tracking-[0.25em] uppercase mb-8 shadow-inner"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D8B45A]" />
          <span>AN ANONYMOUS C-SUITE CONFESSION CAMPAIGN</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-editorial-heading font-black tracking-tighter text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-[#F5F3EE] via-[#F5F3EE] to-[#A5A5A5] uppercase text-center my-2 drop-shadow-2xl"
        >
          OFF <br className="hidden sm:block" />
          THE <br className="hidden sm:block" />
          RECORD
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 flex items-center justify-center gap-3 text-sm md:text-xl font-mono uppercase tracking-[0.3em] text-[#D8B45A]"
        >
          <span className="h-[1px] w-8 md:w-16 bg-[#D8B45A]/50" />
          <span>CFO × CTO CONFESSIONS</span>
          <span className="h-[1px] w-8 md:w-16 bg-[#D8B45A]/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-serif-quote italic text-2xl md:text-4xl text-[#F5F3EE] mt-8 max-w-3xl leading-snug font-normal"
        >
          &ldquo;What would you say if nobody knew it was you?&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-sm md:text-base text-[#A5A5A5] mt-4 max-w-2xl font-light tracking-wide leading-relaxed"
        >
          No names. No titles. No boardroom politics.
          <br className="hidden sm:inline" />
          Just the things you really want to say.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenConfessModal}
            className="w-full sm:w-auto px-9 py-4 rounded-sm bg-[#F5F3EE] text-[#0A0A0A] font-bold text-sm tracking-[0.15em] uppercase hover:bg-[#D8B45A] transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-3 group gold-glow"
          >
            <span>CONFESS ANONYMOUSLY</span>
            <ArrowRight className="w-4 h-4 text-[#0A0A0A] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExplorePrompts}
            className="w-full sm:w-auto px-7 py-4 rounded-sm bg-[#111111] border border-[#262626] text-[#F5F3EE] font-medium text-xs tracking-[0.15em] uppercase hover:border-[#D8B45A]/60 hover:text-[#D8B45A] transition-all duration-300"
          >
            SEE PROMPTS ↓
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 flex items-center gap-2 text-xs font-mono text-[#A5A5A5]"
        >
          <Lock className="w-3.5 h-3.5 text-[#D8B45A]" />
          <span>100% Anonymous · No names required · Zero tracking</span>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono uppercase tracking-widest text-[#A5A5A5] border-t border-[#262626]/60 pt-4 z-10 gap-3">
        <div className="flex items-center gap-3">
          <span className="text-[#D8B45A]">THE FORUM HOUSE</span>
          <span>·</span>
          <span className="italic font-serif text-sm lowercase tracking-normal text-[#F5F3EE]">
            Belong. Express. Co-Create.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#A5A5A5]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D8B45A]" />
            EXECUTIVE CONFIDENTIALITY
          </span>
          <a
            href="https://www.theforumhouse.in/conferences/the-house-of-cfo-x-cto-hyderabad-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D8B45A] underline underline-offset-4 decoration-[#262626]"
          >
            SUMMIT DETAILS ↗
          </a>
        </div>
      </div>
    </section>
  );
}
