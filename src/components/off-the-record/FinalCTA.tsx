"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

interface FinalCTAProps {
  onOpenConfessModal: () => void;
}

export default function FinalCTA({ onOpenConfessModal }: FinalCTAProps) {
  return (
    <section className="py-32 bg-[#0A0A0A] text-[#F5F3EE] px-6 md:px-12 border-t border-[#262626] relative overflow-hidden bg-grain select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#D8B45A]/12 via-[#D8B45A]/2 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#D8B45A] uppercase tracking-[0.3em] mb-8"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>ONE LAST THING.</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial-heading font-black tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.88] text-[#F5F3EE] mb-12"
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
            className="px-10 py-5 rounded-sm bg-[#F5F3EE] text-[#0A0A0A] font-extrabold text-sm uppercase tracking-[0.2em] hover:bg-[#D8B45A] transition-all duration-300 transform hover:-translate-y-1 shadow-2xl flex items-center gap-4 group gold-glow"
          >
            <span>CONFESS ANONYMOUSLY</span>
            <ArrowRight className="w-5 h-5 text-[#0A0A0A] group-hover:translate-x-1.5 transition-transform" />
          </button>
          <span className="text-xs font-mono text-[#A5A5A5] mt-2">
            100% Anonymous · No registration · Zero tracking
          </span>
        </motion.div>
      </div>
    </section>
  );
}
