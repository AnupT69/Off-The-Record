"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenConfessModal: () => void;
}

export default function Navbar({ onOpenConfessModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-[#0A0A0A]/80 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a
              href="https://www.theforumhouse.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2.5 text-xs tracking-[0.2em] font-mono text-[#A5A5A5] hover:text-[#D8B45A] transition-colors duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-[#D8B45A] inline-block animate-pulse" />
              <span className="font-semibold uppercase">The Forum House</span>
            </a>
            <span className="text-[#262626]">/</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#A5A5A5] hidden sm:inline-block">
              HYDERABAD 2026
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.15em] font-medium text-[#A5A5A5]">
            <button
              onClick={() => scrollToSection("confessions")}
              className="hover:text-[#F5F3EE] transition-colors duration-200"
            >
              The Confessions
            </button>
            <button
              onClick={() => scrollToSection("cfo-vs-cto")}
              className="hover:text-[#F5F3EE] transition-colors duration-200"
            >
              CFO × CTO
            </button>
            <button
              onClick={() => scrollToSection("questions")}
              className="hover:text-[#F5F3EE] transition-colors duration-200"
            >
              Unspoken Questions
            </button>
            <button
              onClick={() => scrollToSection("summit")}
              className="hover:text-[#D8B45A] transition-colors duration-200"
            >
              The Summit
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <span className="text-[10px] font-mono text-[#A5A5A5] flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111111] border border-[#262626]">
              <Lock className="w-3 h-3 text-[#D8B45A]" />
              100% ANONYMOUS
            </span>
            <button
              onClick={onOpenConfessModal}
              className="relative group px-5 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase bg-[#F5F3EE] text-[#0A0A0A] hover:bg-[#D8B45A] transition-all duration-300 transform active:scale-95 shadow-lg"
            >
              CONFESS <span className="text-[#D8B45A] group-hover:text-[#0A0A0A]">→</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={onOpenConfessModal}
              className="px-3.5 py-1.5 bg-[#D8B45A] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider rounded-sm"
            >
              CONFESS
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F3EE] hover:text-[#D8B45A]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#262626] p-6 md:hidden"
          >
            <div className="flex flex-col space-y-5 text-sm uppercase tracking-widest text-[#A5A5A5]">
              <button
                onClick={() => scrollToSection("confessions")}
                className="text-left py-2 border-b border-[#262626]/50 hover:text-[#F5F3EE]"
              >
                The Confessions
              </button>
              <button
                onClick={() => scrollToSection("cfo-vs-cto")}
                className="text-left py-2 border-b border-[#262626]/50 hover:text-[#F5F3EE]"
              >
                CFO × CTO Perspectives
              </button>
              <button
                onClick={() => scrollToSection("questions")}
                className="text-left py-2 border-b border-[#262626]/50 hover:text-[#F5F3EE]"
              >
                Boardroom Questions
              </button>
              <button
                onClick={() => scrollToSection("summit")}
                className="text-left py-2 border-b border-[#262626]/50 hover:text-[#D8B45A]"
              >
                The Summit 2026
              </button>
              <div className="pt-2 flex items-center justify-between text-xs text-[#A5A5A5]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#D8B45A]" />
                  No login required
                </span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConfessModal();
                  }}
                  className="px-5 py-2.5 bg-[#D8B45A] text-[#0A0A0A] font-bold text-xs tracking-widest rounded-sm"
                >
                  CONFESS ANONYMOUSLY →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
