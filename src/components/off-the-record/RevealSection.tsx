"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Sparkles, Touchpad } from "lucide-react";

const REVEAL_ITEMS = [
  {
    id: 1,
    setup: "Sometimes the CFO is not asking for ROI because...",
    secret: "...we haven't figured out how to measure it.",
    role: "CFO",
  },
  {
    id: 2,
    setup: "We call it an AI Transformation Roadmap...",
    secret: "...but it's actually 12 legacy software vendor upgrades in a trench coat.",
    role: "CTO",
  },
  {
    id: 3,
    setup: "The CTO says the legacy system migration will take 6 months...",
    secret: "...because they know if they say 2 years, Finance will kill the budget immediately.",
    role: "Technology Leader",
  },
  {
    id: 4,
    setup: "The real reason we haven't cut our cloud infrastructure bill...",
    secret: "...is that no one on the current engineering team understands all the dependencies.",
    role: "CIO",
  },
  {
    id: 5,
    setup: "When we tell the board cybersecurity risk is fully mitigated...",
    secret: "...we mean we bought maximum liability insurance coverage and pray.",
    role: "Finance Leader",
  },
  {
    id: 6,
    setup: "Every quarterly tech budget approval is less about financial metrics...",
    secret: "...and more about which executive has the board's ear this month.",
    role: "CFO",
  },
];

export default function RevealSection() {
  const [revealedIds, setRevealedIds] = useState<number[]>([]);

  const toggleReveal = (id: number) => {
    if (revealedIds.includes(id)) {
      setRevealedIds(revealedIds.filter((i) => i !== id));
    } else {
      setRevealedIds([...revealedIds, id]);
    }
  };

  return (
    <section className="py-24 bg-white text-gray-900 px-6 md:px-12 border-t border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>INTERACTIVE REVEAL EXPERIMENT</span>
            </div>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-light uppercase tracking-tight text-gray-900">
              THINGS WE DON&apos;T SAY.
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-600 font-light max-w-md mt-4 md:mt-0 leading-relaxed flex items-center gap-2">
            <Touchpad className="w-4 h-4 text-amber-600" />
            Hover or tap any card below to unveil the unspoken reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVEAL_ITEMS.map((item) => {
            const isRevealed = revealedIds.includes(item.id);
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                onClick={() => toggleReveal(item.id)}
                className="group relative bg-gray-50 border border-gray-200 hover:border-amber-600/70 rounded-sm p-8 cursor-pointer flex flex-col justify-between transition-all duration-300 min-h-[280px] shadow-xl overflow-hidden"
              >
                <div className="flex items-center justify-between text-xs font-mono text-gray-600 mb-6">
                  <span className="text-amber-600 font-medium">{item.role} CONFESSION</span>
                  <span className="flex items-center gap-1.5 text-[11px]">
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5 text-amber-600" /> REVEALED
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5 text-gray-600 group-hover:text-amber-600" /> TAP TO UNVEIL
                      </>
                    )}
                  </span>
                </div>

                <div className="my-auto">
                  <p className="font-serif-quote text-xl text-gray-900 leading-snug font-light">
                    &ldquo;{item.setup}&rdquo;
                  </p>

                  <div className="mt-4 relative min-h-[3rem]">
                    <div
                      className={`transition-all duration-500 ${
                        isRevealed ? "opacity-0 blur-sm absolute inset-0" : "opacity-100"
                      }`}
                    >
                      <span className="inline-block bg-gray-200/80 text-transparent select-none rounded px-3 py-1 text-sm font-mono tracking-widest border border-gray-200">
                        ██████ ████████ ████████ ████████
                      </span>
                    </div>

                    <div
                      className={`transition-all duration-500 ${
                        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none absolute inset-0"
                      }`}
                    >
                      <p className="font-serif-quote text-xl text-amber-600 italic font-normal leading-snug">
                        {item.secret}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/40 flex items-center justify-between text-[11px] font-mono text-gray-600">
                  <span>OFF THE RECORD METAPHOR</span>
                  <span className="text-amber-600 group-hover:underline">
                    {isRevealed ? "HIDE AGAIN" : "TAP TO REVEAL →"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
