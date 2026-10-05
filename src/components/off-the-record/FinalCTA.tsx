"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

interface FinalCTAProps {
  onOpenConfessModal: () => void;
}

export default function FinalCTA({ onOpenConfessModal }: FinalCTAProps) {
  return (
    <section className="py-32 bg-white text-gray-900 px-6 md:px-12 border-t border-gray-200 relative overflow-hidden  select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] " />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-mono text-amber-600 uppercase tracking-[0.3em] mb-8"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>ONE LAST THING.</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial-heading font-medium tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.88] text-gray-900 mb-12"
        >
          WHAT WOULD <br />
          YOU SAY <br />
          IF NOBODY <br />
          KNEW IT <br />
          WAS YOU?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <button
            onClick={onOpenConfessModal}
            className="px-10 py-5 rounded-sm bg-gray-900 text-white font-extrabold text-sm uppercase tracking-[0.2em] hover:bg-amber-600 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl flex items-center gap-4 group gold-glow"
          >
            <span>CONFESS ANONYMOUSLY</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
          </button>
          <span className="text-xs font-mono text-gray-600 mt-2">
            100% Anonymous · No registration · Zero tracking
          </span>
        </motion.div>
      </div>
    </section>
  );
}
