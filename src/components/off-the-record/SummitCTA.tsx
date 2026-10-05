"use client";

import { Calendar, MapPin, ArrowRight, Award } from "lucide-react";

const SPEAKERS = [
  { name: "Shrikant Bhakkad", role: "CFO", company: "Pennar Industries Ltd" },
  { name: "Murali Parameswaran", role: "VP & CIO", company: "CavinKare Group" },
  { name: "LP Tiwari", role: "Group CFO", company: "Radha Group" },
  { name: "Goutam Pudota", role: "CISO", company: "Page Industries Ltd (Jockey)" },
  { name: "Ramakant Tripathi", role: "Director", company: "Srinivasa Farms" },
  { name: "Dr Kishore Nuthalapati", role: "CFO", company: "BEKEM Infra Projects" },
  { name: "Ram Maddineni", role: "CFO", company: "Papcel" },
  { name: "Murali Mohan Raju", role: "CFO", company: "Dodla Dairy Ltd" },
  { name: "Sandeep Bansal", role: "CIO", company: "A-One Steels India Ltd" },
  { name: "Yogesh Bhalla", role: "CTO", company: "DSP" },
  { name: "Ramesh Rakesh", role: "Director of Tech", company: "Bosch" },
  { name: "Probal Kumar Roy", role: "CFO & Country Head", company: "Fishin' India Pvt Ltd" },
];

const AGENDA_HIGHLIGHTS = [
  {
    title: "THE ₹500 CRORE MISTAKE STARTED WITH A 'YES'",
    description: "When does technical debt become financial debt, and why does nobody want to own the bill?"
  },
  {
    title: "EVERYONE WANTS AI. NOBODY WANTS THE INVOICE.",
    description: "Which AI opportunities deserve capital, and which should be cancelled before another rupee is spent?"
  },
  {
    title: "CFO SAYS BUY. CTO SAYS BUILD. CEO SAYS MOVE.",
    description: "When should a company build, buy, partner or walk away when speed and control demand opposite answers?"
  }
];

export default function SummitCTA() {
  return (
    <section id="summit" className="py-24 bg-[#111827] text-white px-6 md:px-12 border-y border-gray-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* EVENT BRANDING */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1F2937] border border-gray-700 text-[10px] font-mono text-amber-600 uppercase tracking-widest mb-6 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>OFFICIAL SUMMIT & AWARDS 2026</span>
          </div>
          
          <div className="flex justify-center mb-6">
            <img 
              src="/cfoxcto-logo.jpg" 
              alt="The House of CFO x CTO" 
              className="w-full max-w-[280px] sm:max-w-[400px] h-auto object-contain drop-shadow-sm"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-mono text-white">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#1F2937] border border-gray-700 shadow-sm">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>20th November 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#1F2937] border border-gray-700 shadow-sm">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* AGENDA HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {AGENDA_HIGHLIGHTS.map((agenda, i) => (
            <div key={i} className="bg-[#FDFCF8] border border-gray-200 p-8 rounded-sm hover:border-amber-600/50 transition-colors shadow-sm">
              <h3 className="font-editorial-heading text-xl font-medium text-gray-900 mb-3 uppercase leading-tight">
                {agenda.title}
              </h3>
              <p className="text-sm font-light text-gray-800 leading-relaxed">
                {agenda.description}
              </p>
            </div>
          ))}
        </div>

        {/* THOUGHT LEADERS MARQUEE */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              FEATURING INSIGHTS FROM THOUGHT LEADERS AT:
            </span>
          </div>
          <div className="overflow-hidden relative w-full py-4 group pause-on-hover">
            <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#111827] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#111827] to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-4 w-max animate-marquee-ltr">
              {[...SPEAKERS, ...SPEAKERS, ...SPEAKERS].map((speaker, index) => (
                <div
                  key={index}
                  className="w-[280px] shrink-0 bg-[#1F2937] border border-gray-800 rounded-sm p-6 flex flex-col justify-center items-center text-center shadow-sm hover:border-amber-600/50 transition-colors"
                >
                  <h4 className="font-editorial-heading text-lg text-white font-medium">
                    {speaker.name}
                  </h4>
                  <p className="text-xs font-mono text-amber-600 mt-2 mb-1">
                    {speaker.role}
                  </p>
                  <p className="text-xs text-gray-400 font-light truncate w-full">
                    {speaker.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="bg-[#FDFCF8] border border-amber-600/20 rounded-sm p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-editorial-heading text-3xl font-light text-gray-900 mb-2 uppercase">
              The conversation continues in Hyderabad.
            </h3>
            <p className="text-gray-800 font-light text-sm">
              Secure your seat for the ultimate CFO × CTO showdown. Bring the questions you submitted here into the room.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href="https://www.theforumhouse.in/conferences/the-house-of-cfo-x-cto-hyderabad-2026/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-sm bg-amber-600 text-white font-light text-xs uppercase tracking-[0.15em] hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-md"
            >
              <span>REGISTER FOR THE SUMMIT</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
