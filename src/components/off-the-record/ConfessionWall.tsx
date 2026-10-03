"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Lock, RefreshCw, MessageSquare } from "lucide-react";
import { ConfessionItem } from "@/types/confession";

interface ConfessionWallProps {
  confessions: ConfessionItem[];
  onRefresh: () => void;
  onOpenConfessModal: () => void;
}

export default function ConfessionWall({
  confessions,
  onRefresh,
  onOpenConfessModal,
}: ConfessionWallProps) {
  const [selectedRole, setSelectedRole] = useState<string>("ALL");
  const [likedMap, setLikedMap] = useState<Record<string, number>>({});

  useEffect(() => {
    const initialMap: Record<string, number> = {};
    confessions.forEach((c) => {
      initialMap[c.id] = c.likesCount || Math.floor(Math.random() * 40) + 12;
    });
    setLikedMap((prev) => ({ ...initialMap, ...prev }));
  }, [confessions]);

  const toggleLike = (id: string) => {
    setLikedMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const filteredConfessions = confessions.filter((item) => {
    if (selectedRole === "ALL") return true;
    return item.role === selectedRole;
  });

  const rolesList = [
    "ALL",
    "CFO",
    "CTO",
    "CIO",
    "Finance Leader",
    "Technology Leader",
  ];

  return (
    <section id="confessions" className="py-24 bg-[#0A0A0A] text-[#F5F3EE] px-6 md:px-12 border-t border-[#262626]/60 relative">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#D8B45A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 border-b border-[#262626] pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8B45A] uppercase tracking-[0.2em] mb-3">
              <Lock className="w-3.5 h-3.5" />
              <span>THE LIVE BOARDROOM WALL</span>
            </div>
            <h2 className="font-editorial-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F5F3EE]">
              WHAT THE ROOM IS REALLY THINKING.
            </h2>
            <p className="text-sm md:text-base text-[#A5A5A5] font-light max-w-xl mt-3 leading-relaxed">
              Anonymous thoughts from CFOs, CTOs, CIOs and senior finance/technology leaders.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onRefresh}
              className="p-3 bg-[#111111] border border-[#262626] text-[#A5A5A5] hover:text-[#D8B45A] rounded-sm transition-colors flex items-center gap-2 text-xs font-mono"
              title="Refresh Confessions"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">REFRESH</span>
            </button>
            <button
              onClick={onOpenConfessModal}
              className="px-6 py-3 bg-[#F5F3EE] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#D8B45A] transition-colors shadow-lg"
            >
              + ADD YOUR CONFESSION
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-[#262626]/40">
          <span className="text-xs font-mono text-[#A5A5A5] uppercase tracking-wider mr-2 hidden sm:inline">
            FILTER BY ROLE:
          </span>
          {rolesList.map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRole(r)}
              className={`px-4 py-2 rounded-sm text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
                selectedRole === r
                  ? "bg-[#D8B45A] text-[#0A0A0A] font-bold shadow-md"
                  : "bg-[#111111] border border-[#262626] text-[#A5A5A5] hover:text-[#F5F3EE] hover:border-[#D8B45A]/40"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {filteredConfessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredConfessions.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="bg-[#111111] border border-[#262626] rounded-sm p-8 flex flex-col justify-between hover:border-[#D8B45A]/60 transition-all duration-300 relative group shadow-xl"
                >
                  <div className="text-4xl font-serif text-[#D8B45A]/30 mb-4 select-none">
                    &ldquo;
                  </div>

                  <div className="mb-8">
                    <p className="font-serif-quote text-2xl text-[#F5F3EE] leading-relaxed font-normal italic">
                      &ldquo;{item.confession}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#262626]/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#D8B45A] uppercase tracking-wider block font-semibold">
                        — Anonymous
                        {item.role && item.role !== "Other" ? `, ${item.role}` : ""}
                      </span>
                      <span className="text-[10px] font-mono text-[#A5A5A5] block mt-0.5">
                        {new Date(item.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        · Verified C-Suite
                      </span>
                    </div>

                    <button
                      onClick={() => toggleLike(item.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0A0A0A] border border-[#262626] text-xs font-mono text-[#A5A5A5] hover:text-[#D8B45A] hover:border-[#D8B45A]/40 transition-all active:scale-95"
                    >
                      <Heart className="w-3.5 h-3.5 text-[#D8B45A] fill-[#D8B45A]/20" />
                      <span>{likedMap[item.id] || 0}</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-[#262626] rounded-sm bg-[#111111]/40">
            <MessageSquare className="w-10 h-10 text-[#D8B45A] mx-auto mb-4 opacity-50" />
            <h3 className="font-editorial-heading text-2xl text-[#F5F3EE] uppercase font-bold">
              NO CONFESSIONS IN THIS CATEGORY YET
            </h3>
            <p className="text-sm font-mono text-[#A5A5A5] mt-2 mb-6">
              Be the first executive to share an anonymous thought for {selectedRole}.
            </p>
            <button
              onClick={onOpenConfessModal}
              className="px-6 py-3 bg-[#D8B45A] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-sm"
            >
              BE THE FIRST TO CONFESS →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
