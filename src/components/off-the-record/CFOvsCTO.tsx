"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const COMPARISONS = [
  {
    id: 1,
    cfo: "I need to know what this costs.",
    cto: "I need to know what it costs us if we DON'T do it.",
    theme: "Capital Allocation vs Risk of Inaction",
  },
  {
    id: 2,
    cfo: "What's the exact ROI of this technology initiative?",
    cto: "What's the cost of waiting until our competitors do it first?",
    theme: "Financial Metrics vs Market Speed",
  },
  {
    id: 3,
    cfo: "Can we defer this migration project to next quarter?",
    cto: "We already pushed it three quarters. The debt is compounding.",
    theme: "Cash Flow vs Tech Debt",
  },
  {
    id: 4,
    cfo: "Do we really need this infrastructure upgrade right now?",
    cto: "Probably not. Until the day we do, and then it's a crisis.",
    theme: "Prudence vs Resiliency",
  },
  {
    id: 5,
    cfo: "Why is the cloud budget 30% higher than forecast?",
    cto: "Because customer traffic grew 200% and legacy code isn't optimized.",
    theme: "Variance vs Scaling Realities",
  },
];

export default function CFOvsCTO() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePair = COMPARISONS[activeIndex];

  return (
    <section id="cfo-vs-cto" className="py-24 bg-white text-gray-900 px-6 md:px-12 border-t border-gray-200/60 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 uppercase tracking-[0.2em] mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>THE C-SUITE DIALECTIC</span>
            </div>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-light uppercase tracking-tight text-gray-900">
              SAME BOARDROOM. <br className="hidden sm:block" />
              DIFFERENT REALITIES.
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-600 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Select a boardroom debate scenario below.
          </p>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {COMPARISONS.map((comp, idx) => (
            <button
              key={comp.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-5 py-2.5 rounded-sm text-xs font-mono tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeIndex === idx
                  ? "bg-amber-600 text-white font-light shadow-lg"
                  : "bg-gray-50 border border-gray-200 text-gray-600 hover:text-gray-900"
              }`}
            >
              <span>SCENARIO 0{idx + 1}</span>
              <span className="opacity-60 hidden sm:inline">· {comp.theme}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-amber-600 text-amber-600 font-mono font-light text-xs items-center justify-center shadow-2xl">
            VS
          </div>

          <motion.div
            key={`cfo-${activePair.id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 border border-gray-200 rounded-sm p-8 sm:p-12 flex flex-col justify-between hover:border-amber-600/40 transition-colors gold-glow relative"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-8">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-600 font-light">
                  THE CHIEF FINANCIAL OFFICER
                </span>
                <span className="text-xs font-mono text-gray-600">CAPEX / OPEX LENS</span>
              </div>

              <div className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">
                WHAT THE CFO SAYS:
              </div>

              <p className="font-serif-quote text-2xl sm:text-3xl text-gray-900 leading-snug font-light italic">
                &ldquo;{activePair.cfo}&rdquo;
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200/50 flex items-center justify-between text-xs font-mono text-gray-600">
              <span>CORE FOCUS: ROI & FINANCIAL GOVERNANCE</span>
              <span className="text-amber-600">CFO</span>
            </div>
          </motion.div>

          <motion.div
            key={`cto-${activePair.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 border border-gray-200 rounded-sm p-8 sm:p-12 flex flex-col justify-between hover:border-amber-600/40 transition-colors gold-glow relative"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-8">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-600 font-light">
                  THE CHIEF TECHNOLOGY OFFICER
                </span>
                <span className="text-xs font-mono text-gray-600">ARCHITECTURE & SPEED LENS</span>
              </div>

              <div className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">
                WHAT THE CTO SAYS:
              </div>

              <p className="font-serif-quote text-2xl sm:text-3xl text-amber-600 leading-snug font-light italic">
                &ldquo;{activePair.cto}&rdquo;
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200/50 flex items-center justify-between text-xs font-mono text-gray-600">
              <span>CORE FOCUS: VELOCITY & AGILITY</span>
              <span className="text-amber-600">CTO</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : COMPARISONS.length - 1))}
            className="px-5 py-2.5 bg-gray-50 border border-gray-200 text-gray-900 hover:border-amber-600 font-mono text-xs uppercase tracking-wider rounded-sm transition-colors"
          >
            ← PREVIOUS DEBATE
          </button>
          <span className="text-xs font-mono text-gray-600">
            {activeIndex + 1} / {COMPARISONS.length}
          </span>
          <button
            onClick={() => setActiveIndex((prev) => (prev < COMPARISONS.length - 1 ? prev + 1 : 0))}
            className="px-5 py-2.5 bg-gray-50 border border-gray-200 text-gray-900 hover:border-amber-600 font-mono text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1"
          >
            NEXT DEBATE →
          </button>
        </div>
      </div>
    </section>
  );
}
