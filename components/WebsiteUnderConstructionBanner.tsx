'use client';

import { Sparkles, Construction, Hammer, ShieldAlert } from 'lucide-react';

export default function WebsiteUnderConstructionBanner() {
  return (
    <div className="w-full flex justify-center pt-8 pb-4 px-4 relative z-30">
      <div className="relative group max-w-2xl w-full">
        
        {/* Multi-Layered Pulsing Ambient Glow Behind Card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-cyan-400 to-rose-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        {/* Main Glassmorphism Banner Container */}
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-[#0f1422]/90 backdrop-blur-2xl border border-amber-400/40 shadow-[0_0_35px_rgba(245,158,11,0.25)]">
          
          {/* Left Icon with Dual Beacon Glow */}
          <div className="flex items-center space-x-3.5">
            <div className="relative w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-400/50 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Construction className="w-6 h-6 text-amber-400 animate-bounce" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </div>

            {/* Glowing Neon Text Block */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <span className="text-[10px] font-mono font-black tracking-widest text-cyan-400 uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400 animate-spin" />
                  SYSTEM UPGRADE IN PROGRESS
                </span>
              </div>
              
              <h2 className="text-sm sm:text-base font-black text-white tracking-wider uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
                WEBSITE UNDER CONSTRUCTION
              </h2>
              
              <p className="text-[11px] font-mono text-zinc-400 font-medium">
                New modules, real-time lab sandboxes & certifications coming soon.
              </p>
            </div>
          </div>

          {/* Right Status Badge */}
          <div className="shrink-0 flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold shadow-[0_0_15px_rgba(245,158,11,0.25)]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>V2.0 DEPLOYING</span>
          </div>

        </div>
      </div>
    </div>
  );
}