"use client";

import { motion } from "framer-motion";
import { MessageSquarePlus, ArrowUpRight } from "lucide-react";

interface PromptCardsProps {
  onSelectPrompt: (promptText: string) => void;
}

const PROMPTS = [
  {
    id: 1,
    num: "01",
    text: "The one thing I wish my CFO/CTO understood is...",
    tag: "Boardroom Dynamics",
  },
  {
    id: 2,
    num: "02",
    text: "The technology expense I still question is...",
    tag: "Capital Allocation",
  },
  {
    id: 3,
    num: "03",
    text: "The finance rule that makes absolutely no sense to me is...",
    tag: "Budget & ROI",
  },
  {
    id: 4,
    num: "04",
    text: "The biggest misunderstanding between Finance and Technology is...",
    tag: "Alignment",
  },
  {
    id: 5,
    num: "05",
    text: "If I could make one decision without consequences, I would...",
    tag: "Strategy",
  },
  {
    id: 6,
    num: "06",
    text: "The conversation CFOs and CTOs keep avoiding is...",
    tag: "Unspoken Truths",
  },
  {
    id: 7,
    num: "07",
    text: "The project everyone called mission-critical but...",
    tag: "Project Reality",
  },
  {
    id: 8,
    num: "08",
    text: "The biggest lesson I've learned from a technology investment is...",
    tag: "Retrospective",
  },
  {
    id: 9,
    num: "09",
    text: "If nobody knew this came from me, I'd say...",
    tag: "Off The Record",
  },
  {
    id: 10,
    num: "10",
    text: "Behind every 'quick project' is...",
    tag: "Tech Debt",
  },
];

export default function PromptCards({ onSelectPrompt }: PromptCardsProps) {
  return (
    <section id="prompts" className="py-24 bg-white text-gray-900 px-6 md:px-12 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 uppercase tracking-[0.2em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <span>CONFESSION STARTERS</span>
            </div>
            <h2 className="font-editorial-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-gray-900">
              WE&apos;LL START.
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-600 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            If you don&apos;t know what to say, start here. Click any prompt to use it as your starting point.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMPTS.map((prompt, index) => (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => onSelectPrompt(prompt.text)}
              className="group relative bg-gray-50 border border-gray-200 rounded-sm p-8 flex flex-col justify-between hover:border-[#D8B45A]/70 transition-all duration-300 cursor-pointer overflow-hidden gold-border-glow"
            >
              <div className="flex items-center justify-between text-xs font-mono text-gray-600 mb-8">
                <span className="text-amber-600 font-bold">{prompt.num}</span>
                <span className="px-2 py-0.5 rounded bg-white border border-gray-200 text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-amber-600 transition-colors">
                  {prompt.tag}
                </span>
              </div>

              <div className="my-auto">
                <p className="font-serif-quote text-2xl md:text-2xl text-gray-900 group-hover:text-amber-600 transition-colors duration-300 leading-snug italic font-normal">
                  &ldquo;{prompt.text}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200/50 flex items-center justify-between text-xs font-mono text-gray-600 group-hover:text-gray-900">
                <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  <MessageSquarePlus className="w-3.5 h-3.5 text-amber-600" />
                  COMPLETE THIS PROMPT
                </span>
                <ArrowUpRight className="w-4 h-4 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
