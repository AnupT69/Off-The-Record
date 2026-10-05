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
      className="relative min-h-screen flex flex-col justify-between bg-white text-gray-900 pt-28 pb-12 px-6 md:px-12 overflow-hidden  select-none"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] " />
      <div className="absolute inset-0  opacity-15 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-[0.2em] font-mono text-gray-600 border-b border-gray-200/60 pb-4 z-10 gap-2">
        <div className="flex items-center space-x-2">
          <span className="text-amber-600">THE FORUM HOUSE</span>
          <span className="text-gray-200">/</span>
          <span>PRESENTS</span>
        </div>
        <div className="flex items-center space-x-3 text-right">
          <span className="text-gray-900 font-light">THE HOUSE OF CFO × CTO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
          <span className="text-amber-600">20 NOV 2026 · HYDERABAD</span>
        </div>
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-6xl w-full mx-auto my-auto text-center z-10 flex flex-col items-center justify-center py-12"
      >


        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-editorial-heading font-light tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-800 to-gray-500 uppercase text-center my-2 drop-shadow-xl"
        >
          OFF <br className="hidden sm:block" />
          THE <br className="hidden sm:block" />
          RECORD
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 flex items-center justify-center gap-3 text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-amber-600 font-light"
        >
          <span className="h-[1px] w-6 md:w-12 bg-amber-600/50" />
          <span>CFO × CTO CONFESSIONS</span>
          <span className="h-[1px] w-6 md:w-12 bg-amber-600/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-serif-quote italic text-xl md:text-3xl text-gray-900 mt-8 max-w-2xl leading-snug font-light"
        >
          &ldquo;What would you say if nobody knew it was you?&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-xs md:text-sm text-gray-600 mt-3 max-w-xl font-light tracking-wide leading-relaxed"
        >
          No names. No titles. Just what you want to say.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenConfessModal}
            className="w-full sm:w-auto px-9 py-4 rounded-sm bg-gray-900 text-white font-light text-sm tracking-[0.15em] uppercase hover:bg-amber-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-3 group gold-glow"
          >
            <span>CONFESS ANONYMOUSLY</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExplorePrompts}
            className="w-full sm:w-auto px-7 py-4 rounded-sm bg-gray-50 border border-gray-200 text-gray-900 font-light text-xs tracking-[0.15em] uppercase hover:border-amber-600/60 hover:text-amber-600 transition-all duration-300"
          >
            SEE PROMPTS ↓
          </button>
        </motion.div>


      </motion.div>

      <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono uppercase tracking-widest text-gray-600 border-t border-gray-200/60 pt-4 z-10 gap-3">
        <div className="flex items-center gap-3">
          <span className="text-amber-600">THE FORUM HOUSE</span>
          <span>·</span>
          <span className="italic font-serif text-sm lowercase tracking-normal text-gray-900">
            Belong. Express. Co-Create.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-gray-600">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            EXECUTIVE CONFIDENTIALITY
          </span>
          <a
            href="https://www.theforumhouse.in/conferences/the-house-of-cfo-x-cto-hyderabad-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-600 underline underline-offset-4 decoration-gray-200"
          >
            SUMMIT DETAILS ↗
          </a>
        </div>
      </div>
    </section>
  );
}
