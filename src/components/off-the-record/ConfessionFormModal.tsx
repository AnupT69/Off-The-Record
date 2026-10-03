"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, CheckCircle2, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { RoleType } from "@/types/confession";

interface ConfessionFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
  onSuccessConfessionAdded: () => void;
}

export default function ConfessionFormModal({
  isOpen,
  onClose,
  initialPrompt = "",
  onSuccessConfessionAdded,
}: ConfessionFormModalProps) {
  const [confession, setConfession] = useState("");
  const [role, setRole] = useState<RoleType | "">("");
  const [selectedPrompt, setSelectedPrompt] = useState(initialPrompt);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialPrompt) {
      setSelectedPrompt(initialPrompt);
      if (!confession.startsWith(initialPrompt)) {
        setConfession(initialPrompt + " ");
      }
    }
  }, [initialPrompt]);

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setConfession("");
        setRole("");
        setSelectedPrompt("");
        setIsSubmitted(false);
        setErrorMessage("");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (confession.trim().length < 10) {
      setErrorMessage("Please share a confession of at least 10 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/confessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          confession: confession.trim(),
          role: role || undefined,
          prompt: selectedPrompt || undefined,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
        onSuccessConfessionAdded();

        try {
          confetti({
            particleCount: 45,
            spread: 60,
            origin: { y: 0.6 },
            colors: ["#D8B45A", "#F5F3EE", "#333333"],
          });
        } catch (err) {}
      } else {
        setErrorMessage(data.error || "Failed to record confession. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0A0A]/90 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-2xl w-full bg-[#111111] border border-[#262626] rounded-sm p-6 sm:p-10 z-10 shadow-2xl overflow-hidden gold-glow"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D8B45A]/10 rounded-full blur-3xl pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#A5A5A5] hover:text-[#F5F3EE] hover:bg-[#262626]/50 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D8B45A] uppercase tracking-widest mb-2">
                  <Lock className="w-3.5 h-3.5" />
                  <span>100% ANONYMOUS SUBMISSION</span>
                </div>
                <h2 className="font-editorial-heading text-4xl sm:text-5xl font-extrabold uppercase text-[#F5F3EE] tracking-tight">
                  SAY IT.
                </h2>
                <p className="text-sm font-mono text-[#A5A5A5] mt-1 tracking-wide">
                  No names. No titles. No consequences.
                </p>
              </div>

              {selectedPrompt && (
                <div className="mb-4 p-3 bg-[#0A0A0A] border border-[#262626] rounded text-xs text-[#D8B45A] font-mono">
                  <span className="text-[#A5A5A5] uppercase tracking-wider block text-[10px] mb-1">
                    SELECTED PROMPT:
                  </span>
                  &ldquo;{selectedPrompt}&rdquo;
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="relative">
                    <textarea
                      value={confession}
                      onChange={(e) => setConfession(e.target.value)}
                      maxLength={1000}
                      rows={5}
                      placeholder="Something I've always wanted to say about Finance × Technology..."
                      className="w-full bg-[#0A0A0A] border border-[#262626] rounded-sm p-4 text-[#F5F3EE] placeholder-[#A5A5A5]/40 text-base font-serif-quote focus:outline-none focus:border-[#D8B45A] transition-colors resize-none leading-relaxed"
                      required
                    />
                    <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#A5A5A5]">
                      {confession.length} / 1000
                    </div>
                  </div>
                  {errorMessage && (
                    <p className="text-xs text-red-400 mt-2 font-mono">{errorMessage}</p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#F5F3EE] font-semibold">
                      WHO ARE YOU? <span className="text-[#A5A5A5] font-normal">(OPTIONAL)</span>
                    </label>
                    <span className="text-[11px] font-mono text-[#D8B45A]">
                      Identity not required
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {(
                      [
                        "CFO",
                        "CTO",
                        "CIO",
                        "Finance Leader",
                        "Technology Leader",
                        "Other",
                      ] as RoleType[]
                    ).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(role === r ? "" : r)}
                        className={`px-3 py-2 text-xs font-mono rounded-sm border text-left transition-all ${
                          role === r
                            ? "bg-[#D8B45A] text-[#0A0A0A] border-[#D8B45A] font-bold"
                            : "bg-[#0A0A0A] border-[#262626] text-[#A5A5A5] hover:border-[#D8B45A]/50 hover:text-[#F5F3EE]"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] font-mono text-[#A5A5A5] mt-2.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D8B45A]" />
                    You don&apos;t have to tell us who you are.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || confession.trim().length < 10}
                    className="w-full py-4 rounded-sm bg-[#F5F3EE] text-[#0A0A0A] font-extrabold text-xs uppercase tracking-[0.2em] hover:bg-[#D8B45A] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 group shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" />
                        <span>ENTERING THE RECORD...</span>
                      </>
                    ) : (
                      <>
                        <span>PUT IT ON THE RECORD</span>
                        <ArrowRight className="w-4 h-4 text-[#0A0A0A] group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#D8B45A]/10 border border-[#D8B45A]/30 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#D8B45A]" />
              </div>

              <div className="text-xs font-mono text-[#D8B45A] uppercase tracking-widest mb-2">
                CONFESSION RECORDED
              </div>

              <h2 className="font-editorial-heading text-4xl sm:text-5xl font-black uppercase text-[#F5F3EE] tracking-tight mb-3">
                IT&apos;S OFF THE RECORD.
              </h2>

              <p className="font-serif-quote italic text-xl text-[#F5F3EE] mb-4">
                &ldquo;Your confession has entered the House.&rdquo;
              </p>

              <p className="text-sm text-[#A5A5A5] max-w-md font-light leading-relaxed mb-8">
                Thank you for saying what usually stays unsaid. Your thought will be displayed anonymously on the wall.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="px-8 py-3.5 rounded-sm bg-[#F5F3EE] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest hover:bg-[#D8B45A] transition-colors"
                >
                  RETURN TO SITE →
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setConfession("");
                    setRole("");
                    setSelectedPrompt("");
                  }}
                  className="px-6 py-3.5 rounded-sm bg-[#0A0A0A] border border-[#262626] text-[#A5A5A5] hover:text-[#F5F3EE] font-mono text-xs uppercase tracking-widest transition-colors"
                >
                  ADD ANOTHER CONFESSION
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
