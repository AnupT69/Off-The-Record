"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, ArrowRight, Award, Users } from "lucide-react";

export default function SummitCTA() {
  return (
    <section id="summit" className="py-24 bg-gray-50 text-gray-900 px-6 md:px-12 border-t border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white border border-gray-200 rounded-sm p-8 sm:p-14 gold-glow">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-50 border border-gray-200 text-xs font-mono text-amber-600 uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                <span>OFFICIAL SUMMIT & AWARDS 2026</span>
              </div>

              <h2 className="font-editorial-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 leading-none">
                THE CONVERSATION <br />
                CONTINUES IN HYDERABAD.
              </h2>

              <p className="font-serif-quote text-2xl text-amber-600 italic font-normal">
                &ldquo;Bring the questions you submitted here into the room.&rdquo;
              </p>

              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                An offline C-Suite forum bringing together Chief Financial Officers and Chief Technology Officers to debate capital allocation, AI investments, tech debt, and strategic decision-making.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-900">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded bg-gray-50 border border-gray-200">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>20 NOVEMBER 2026</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded bg-gray-50 border border-gray-200">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>HYDERABAD, INDIA</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded bg-gray-50 border border-gray-200">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span>CFO × CTO DELEGATE FORUM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
              <a
                href="https://www.theforumhouse.in/conferences/the-house-of-cfo-x-cto-hyderabad-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-sm bg-amber-600 text-white font-bold text-xs uppercase tracking-[0.15em] hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-3 group text-center shadow-xl"
              >
                <span>EXPLORE THE SUMMIT</span>
                <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://www.theforumhouse.in/conferences/the-house-of-cfo-x-cto-hyderabad-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-sm bg-gray-50 border border-gray-200 text-gray-900 font-bold text-xs uppercase tracking-[0.15em] hover:border-[#D8B45A] hover:text-amber-600 transition-all duration-300 flex items-center justify-center gap-3 text-center"
              >
                <span>REGISTER FOR THE SUMMIT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
