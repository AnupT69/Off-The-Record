"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function WhyThisExists() {
  return (
    <section className="py-28 bg-transparent text-gray-900 px-6 md:px-12 border-t border-gray-200/60 relative overflow-hidden ">
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 uppercase tracking-[0.25em] mb-4 justify-center md:justify-start">
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>THE PHILOSOPHY</span>
            </div>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-light uppercase tracking-tighter text-gray-900 leading-[0.95]">
              THE BEST <br />
              CONVERSATIONS <br />
              AREN&apos;T ALWAYS <br />
              ON STAGE.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-gray-600 font-light leading-relaxed border-l-0 lg:border-l border-gray-200 lg:pl-12">
            <p className="text-gray-900 font-light text-lg sm:text-xl font-serif-quote italic">
              &ldquo;At The Forum House, we believe meaningful business relationships begin with honest conversations.&rdquo;
            </p>

            <p>
              An exclusive space for CFOs and CTOs to say what normally stays inside confidential boardroom walls.
            </p>

            <div className="py-4 border-y border-gray-200/60 grid grid-cols-3 gap-4 text-center font-mono text-xs uppercase tracking-widest text-amber-600">
              <div>NO TITLES</div>
              <div>NO POSTURING</div>
              <div>NO CORPORATE SPEECH</div>
            </div>

            <p className="text-gray-900 font-light text-base">
              Just the raw conversation that drives progress.
            </p>

            <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs font-mono tracking-[0.2em] text-amber-600 uppercase block font-light">
                  THE FORUM HOUSE
                </span>
                <span className="text-sm font-serif italic text-gray-900">
                  Belong. Express. Co-Create.
                </span>
              </div>
              <a
                href="https://www.theforumhouse.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-gray-600 hover:text-amber-600 uppercase tracking-wider underline underline-offset-4"
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
