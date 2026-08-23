'use client';

import { useState, useEffect } from 'react';
import { Shield, Radio, Wrench, AlertOctagon } from 'lucide-react';

export function CyberSmokeHeader() {
  const [timeString, setTimeString] = useState('');
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTimeString(`${hours}:${minutes}:${seconds}`);

      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      setDateString(`${day}/${month}/${year}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full border-b border-cyan-500/20 bg-zinc-950 font-mono select-none">
      
      {/* ---------------- 1. TOP UNDER CONSTRUCTION GLOWING FLEX BAR ---------------- */}
      <div className="w-full bg-gradient-to-r from-amber-950/80 via-zinc-950 to-amber-950/80 border-b border-amber-500/40 py-1.5 px-4 overflow-hidden relative shadow-[0_0_20px_rgba(245,158,11,0.2)]">
        {/* Animated Glow Grid Line */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse" />

        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          
          {/* Left Indicator */}
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest hidden sm:inline">
              SYS_ALERT // DEV_MODE
            </span>
          </div>

          {/* Center Text with High-Intensity Neon Glow Effect */}
          <div className="flex items-center space-x-2">
            <Wrench className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="construction-glow-text">
              ⚡ WEBSITE UNDER ACTIVE CONSTRUCTION // NEW LAB MODULES DEPLOYING ⚡
            </span>
            <AlertOctagon className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          </div>

          {/* Right Status */}
          <div className="text-[10px] text-amber-400/90 font-bold tracking-wider hidden md:block">
            STAGE: <span className="text-amber-300 underline">BETA 2.4</span>
          </div>

        </div>
      </div>

      {/* ---------------- 2. MAIN BRANDING & HUD HEADER ---------------- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-950 border border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)]">
            <Shield className="w-6 h-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </div>
          <div>
            <h1 className="text-sm md:text-base font-black tracking-wider text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
              CYBERMATRIX ACADEMY
            </h1>
            <p className="text-[10px] text-zinc-400 tracking-widest">
              BY NINAD PAWAR // LEAD ARCHITECT
            </p>
          </div>
        </div>

        {/* Right: Live Clock & HUD Status */}
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-[11px] font-bold">{timeString || '00:00:00'}</span>
            <span className="text-zinc-500 text-[10px]">|</span>
            <span className="text-[10px] text-zinc-400">{dateString || '00/00/0000'}</span>
          </div>
        </div>

      </div>

      {/* Glowing Neon Text CSS */}
      <style jsx>{`
        .construction-glow-text {
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.15em;
          color: #fbbf24;
          text-shadow: 
            0 0 5px #f59e0b,
            0 0 10px #d97706,
            0 0 20px #b45309;
          animation: textPulse 2s ease-in-out infinite alternate;
        }

        @keyframes textPulse {
          0% {
            opacity: 0.85;
            text-shadow: 0 0 4px #f59e0b, 0 0 8px #d97706;
          }
          100% {
            opacity: 1;
            text-shadow: 0 0 8px #fbbf24, 0 0 16px #f59e0b, 0 0 24px #d97706;
          }
        }
      `}</style>
    </header>
  );
}
