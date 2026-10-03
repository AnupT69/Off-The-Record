"use client";

import { motion } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";

interface QuestionsProps {
  onOpenConfessModalWithQuestion: (q: string) => void;
}

const BOARDROOM_QUESTIONS = [
  {
    num: "01",
    question: "What happens when AI investment doesn't deliver the expected ROI?",
    category: "AI & Innovation Risk",
  },
  {
    num: "02",
    question: "Who owns technology risk — Finance or Technology?",
    category: "Governance & Accountability",
  },
  {
    num: "03",
    question: "When does cost optimisation become underinvestment?",
    category: "Capital Allocation",
  },
  {
    num: "04",
    question: "How much tech debt is the business actually willing to carry?",
    category: "Legacy & Debt",
  },
  {
    num: "05",
    question: "Who gets the final word when Finance and Technology disagree?",
    category: "C-Suite Alignment",
  },
  {
    num: "06",
    question: "Is every AI project actually an AI project?",
    category: "Market Buzzwords",
  },
];

export default function Questions({ onOpenConfessModalWithQuestion }: QuestionsProps) {
  return (
    <section id="questions" className="py-24 bg-[#0A0A0A] text-[#F5F3EE] px-6 md:px-12 border-t border-[#262626]/60 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#262626] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8B45A] uppercase tracking-[0.2em] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>THE EXECUTIVE INQUIRY</span>
            </div>
            <h2 className="font-editorial-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F5F3EE]">
              QUESTIONS WE DON&apos;T ASK <br className="hidden sm:block" />
              IN THE BOARDROOM.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#A5A5A5] font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            The hard queries every senior executive thinks about, but rarely puts on the official slide deck.
          </p>
        </div>

        <div className="space-y-6">
          {BOARDROOM_QUESTIONS.map((q, idx) => (
            <motion.div
              key={q.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => onOpenConfessModalWithQuestion(`In response to: "${q.question}"`)}
              className="group bg-[#111111] border border-[#262626] hover:border-[#D8B45A]/70 rounded-sm p-8 md:p-10 transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6 gold-border-glow"
            >
              <div className="flex items-start gap-6">
                <span className="font-mono font-bold text-2xl text-[#D8B45A] pt-1">
                  {q.num}
                </span>
                <div>
                  <span className="text-[10px] font-mono text-[#A5A5A5] uppercase tracking-widest block mb-2">
                    {q.category}
                  </span>
                  <h3 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F3EE] group-hover:text-[#D8B45A] transition-colors leading-tight uppercase">
                    {q.question}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#A5A5A5] group-hover:text-[#F5F3EE] shrink-0 self-end md:self-center">
                <span>ANSWER ANONYMOUSLY</span>
                <ArrowRight className="w-4 h-4 text-[#D8B45A] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
