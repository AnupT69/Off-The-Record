"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function WhyThisExists() {
  return (
    <section className="py-28 bg-[#0A0A0A] text-[#F5F3EE] px-6 md:px-12 border-t border-[#262626]/60 relative overflow-hidden bg-grain">
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#D8B45A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8B45A] uppercase tracking-[0.25em] mb-4 justify-center md:justify-start">
              <Compass className="w-3.5 h-3.5 text-[#D8B45A]" />
              <span>THE PHILOSOPHY</span>
            </div>
            <h2 className="font-editorial-heading text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#F5F3EE] leading-[0.95]">
              THE BEST <br />
              CONVERSATIONS <br />
              AREN&apos;T ALWAYS <br />
              ON STAGE.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#A5A5A5] font-light leading-relaxed border-l-0 lg:border-l border-[#262626] lg:pl-12">
            <p className="text-[#F5F3EE] font-normal text-xl sm:text-2xl font-serif-quote italic">
              &ldquo;At The Forum House, we believe meaningful business relationships begin with honest conversations.&rdquo;
            </p>

            <p>
              Off The Record creates an exclusive, unvarnished space for CFOs and CTOs to say what normally stays inside confidential boardroom walls.
            </p>

            <div className="py-4 border-y border-[#262626]/60 grid grid-cols-3 gap-4 text-center font-mono text-xs uppercase tracking-widest text-[#D8B45A]">
              <div>NO TITLES</div>
              <div>NO POSTURING</div>
              <div>NO CORPORATE SPEECH</div>
            </div>

            <p className="text-[#F5F3EE] font-medium text-lg">
              Just the raw, unedited conversation that drives true organizational progress.
            </p>

            <div className="pt-6 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs font-mono tracking-[0.2em] text-[#D8B45A] uppercase block font-bold">
                  THE FORUM HOUSE
                </span>
                <span className="text-sm font-serif italic text-[#F5F3EE]">
                  Belong. Express. Co-Create.
                </span>
              </div>
              <a
                href="https://www.theforumhouse.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#A5A5A5] hover:text-[#D8B45A] uppercase tracking-wider underline underline-offset-4"
              >
                VISIT THE FORUM HOUSE ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
