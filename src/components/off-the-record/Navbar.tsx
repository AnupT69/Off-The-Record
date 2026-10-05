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
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200 py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-gray-900/80 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a
              href="https://www.theforumhouse.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2.5 text-xs tracking-[0.2em] font-mono text-gray-600 hover:text-amber-600 transition-colors duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-amber-600 inline-block animate-pulse" />
              <span className="font-medium uppercase">The Forum House</span>
            </a>
            <span className="text-gray-200">/</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-gray-600 hidden sm:inline-block">
              HYDERABAD 2026
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.15em] font-light text-gray-600">
            <button
              onClick={() => scrollToSection("confessions")}
              className="hover:text-gray-900 transition-colors duration-200"
            >
              The Confessions
            </button>

            <button
              onClick={() => scrollToSection("questions")}
              className="hover:text-gray-900 transition-colors duration-200"
            >
              Unspoken Questions
            </button>
            <button
              onClick={() => scrollToSection("summit")}
              className="hover:text-amber-600 transition-colors duration-200"
            >
              The Summit
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <span className="text-[10px] font-mono text-gray-600 flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-50 border border-gray-200">
              <Lock className="w-3 h-3 text-amber-600" />
              100% ANONYMOUS
            </span>
            <button
              onClick={onOpenConfessModal}
              className="relative group px-5 py-2 rounded-sm text-xs font-medium tracking-wider uppercase bg-gray-900 text-white hover:bg-amber-600 transition-all duration-300 transform active:scale-95 shadow-lg"
            >
              CONFESS <span className="text-amber-600 group-hover:text-white">→</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={onOpenConfessModal}
              className="px-3.5 py-1.5 bg-amber-600 text-white text-xs font-light uppercase tracking-wider rounded-sm"
            >
              CONFESS
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-900 hover:text-amber-600"
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
            className="fixed inset-x-0 top-[60px] z-30 bg-white/95 backdrop-blur-xl border-b border-gray-200 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-5 text-sm uppercase tracking-widest text-gray-600">
              <button
                onClick={() => scrollToSection("confessions")}
                className="text-left py-2 border-b border-gray-200/50 hover:text-gray-900"
              >
                The Confessions
              </button>

              <button
                onClick={() => scrollToSection("questions")}
                className="text-left py-2 border-b border-gray-200/50 hover:text-gray-900"
              >
                Boardroom Questions
              </button>
              <button
                onClick={() => scrollToSection("summit")}
                className="text-left py-2 border-b border-gray-200/50 hover:text-amber-600"
              >
                The Summit 2026
              </button>
              <div className="pt-2 flex items-center justify-between text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  No login required
                </span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConfessModal();
                  }}
                  className="px-5 py-2.5 bg-amber-600 text-white font-light text-xs tracking-widest rounded-sm"
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
