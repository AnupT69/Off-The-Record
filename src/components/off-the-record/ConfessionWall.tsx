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
    <section id="confessions" className="py-24 bg-transparent text-gray-900 px-6 md:px-12 border-t border-gray-200/60 relative">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 border-b border-gray-200 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 uppercase tracking-[0.2em] mb-3">
              <Lock className="w-3.5 h-3.5" />
              <span>THE LIVE BOARDROOM WALL</span>
            </div>
            <h2 className="font-editorial-heading text-4xl sm:text-6xl font-medium uppercase tracking-tight text-gray-900">
              WHAT THE ROOM IS REALLY THINKING.
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-light max-w-xl mt-3 leading-relaxed">
              Anonymous thoughts from CFOs, CTOs, CIOs and senior finance/technology leaders.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onRefresh}
              className="p-3 bg-white border border-gray-200 text-gray-600 hover:text-amber-600 rounded-sm transition-colors flex items-center gap-2 text-xs font-mono shadow-sm"
              title="Refresh Confessions"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">REFRESH</span>
            </button>
            <button
              onClick={onOpenConfessModal}
              className="px-6 py-3 bg-gray-900 text-white font-light text-xs uppercase tracking-widest rounded-sm hover:bg-amber-600 transition-colors shadow-lg"
            >
              + ADD YOUR CONFESSION
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-gray-200/40">
          <span className="text-xs font-mono text-gray-600 uppercase tracking-wider mr-2 hidden sm:inline">
            FILTER BY ROLE:
          </span>
          {rolesList.map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRole(r)}
              className={`px-4 py-2 rounded-sm text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
                selectedRole === r
                  ? "bg-amber-600 text-white font-light shadow-md"
                  : "bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-amber-600/40 shadow-sm"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {filteredConfessions.length > 0 ? (
          <div className="overflow-hidden relative w-full py-4 group pause-on-hover">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#FDFCF8] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#FDFCF8] to-transparent z-10 pointer-events-none" />
            
            <div
              className="flex gap-6 w-max animate-marquee-rtl"
            >
              {[...filteredConfessions, ...filteredConfessions, ...filteredConfessions, ...filteredConfessions].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="w-[300px] md:w-[400px] shrink-0 bg-white border border-gray-200 rounded-sm p-8 flex flex-col justify-between hover:border-amber-600/60 transition-all duration-300 relative shadow-md whitespace-normal"
                >
                  <div className="text-4xl font-serif text-amber-600/30 mb-4 select-none">
                    &ldquo;
                  </div>

                  <div className="mb-8">
                    <p className="font-serif-quote text-xl text-gray-900 leading-relaxed font-light italic">
                      &ldquo;{item.confession}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-amber-600 uppercase tracking-wider block font-medium">
                        — Anonymous
                        {item.role && item.role !== "Other" ? `, ${item.role}` : ""}
                      </span>
                      <span className="text-[10px] font-mono text-gray-600 block mt-0.5">
                        {new Date(item.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                        · Verified C-Suite
                      </span>
                    </div>

                    <button
                      onClick={() => toggleLike(item.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-gray-200 text-xs font-mono text-gray-600 hover:text-amber-600 hover:border-amber-600/40 transition-all active:scale-95"
                    >
                      <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600/20" />
                      <span>{likedMap[item.id] || 0}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-gray-200 rounded-sm bg-white shadow-sm">
            <MessageSquare className="w-10 h-10 text-amber-600 mx-auto mb-4 opacity-50" />
            <h3 className="font-editorial-heading text-2xl text-gray-900 uppercase font-light">
              NO CONFESSIONS IN THIS CATEGORY YET
            </h3>
            <p className="text-sm font-mono text-gray-600 mt-2 mb-6">
              Be the first executive to share an anonymous thought for {selectedRole}.
            </p>
            <button
              onClick={onOpenConfessModal}
              className="px-6 py-3 bg-amber-600 text-white font-light text-xs uppercase tracking-widest rounded-sm"
            >
              BE THE FIRST TO CONFESS →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
