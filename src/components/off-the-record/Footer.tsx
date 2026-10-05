"use client";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 py-16 px-6 md:px-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-editorial-heading font-black text-2xl uppercase tracking-tighter text-gray-900">
              OFF THE RECORD
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-50 border border-gray-200 text-[10px] text-amber-600 uppercase tracking-widest font-semibold">
              CFO × CTO CONFESSIONS
            </span>
          </div>

          <p className="text-gray-600 text-xs font-light max-w-sm">
            An anonymous executive campaign for senior leaders in Finance and Technology.
          </p>

          <div className="pt-2 text-[11px] text-gray-600 flex items-center gap-2">
            <span>Presented by</span>
            <a
              href="https://www.theforumhouse.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-bold hover:text-amber-600 transition-colors"
            >
              The Forum House
            </a>
            <span className="text-[#262626]">·</span>
            <span className="font-serif italic text-amber-600">Belong. Express. Co-Create.</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 text-gray-600">
          <div className="space-y-2">
            <span className="text-gray-900 uppercase tracking-widest font-bold block mb-3 text-[11px]">
              CAMPAIGN
            </span>
            <a href="#confessions" className="block hover:text-amber-600 transition-colors">
              The Confessions
            </a>
            <a href="#prompts" className="block hover:text-amber-600 transition-colors">
              Confession Prompts
            </a>
            <a href="#cfo-vs-cto" className="block hover:text-amber-600 transition-colors">
              CFO vs CTO Dialectic
            </a>
            <a href="#questions" className="block hover:text-amber-600 transition-colors">
              Uncomfortable Questions
            </a>
          </div>

          <div className="space-y-2">
            <span className="text-gray-900 uppercase tracking-widest font-bold block mb-3 text-[11px]">
              THE SUMMIT
            </span>
            <a
              href="https://www.theforumhouse.in/conferences/the-house-of-cfo-x-cto-hyderabad-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-amber-600 transition-colors"
            >
              The House Of CFO × CTO 2026 ↗
            </a>
            <span className="block text-gray-600">20 November 2026 · Hyderabad</span>
            <a
              href="https://www.theforumhouse.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-amber-600 transition-colors pt-2"
            >
              The Forum House Official ↗
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200/50 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-600 gap-4">
        <div>
          © 2026 THE FORUM HOUSE. ALL RIGHTS RESERVED. OFF THE RECORD IS AN ANONYMOUS EXECUTIVE CAMPAIGN.
        </div>
        <div className="flex items-center gap-4">
          <span>PRIVACY GUARANTEED</span>
          <span>·</span>
          <span>NO NAMES RECORDED</span>
        </div>
      </div>
    </footer>
  );
}
