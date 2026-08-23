'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Radio, Cpu, Zap } from 'lucide-react';

export function CyberSmokeHeader() {
  const [timeString, setTimeString] = useState('');
  const [dateString, setDateString] = useState('');
  const [imgError, setImgError] = useState(false);

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
    <header className="relative w-full border-b border-cyan-500/25 bg-zinc-950/95 backdrop-blur-md font-mono select-none z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* 1. LEFT: INCREASED SIZE LOGO & BIGGER BRANDING */}
        <Link href="/" className="flex items-center space-x-3.5 group cursor-pointer">
          {/* Bigger Logo Container (w-14 h-14) */}
          <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-950 border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.5)] overflow-hidden group-hover:border-cyan-300 group-hover:scale-105 transition-all duration-300 shrink-0">
            {!imgError ? (
              <img
                src="/Ninadcyber.jpg"
                alt="CyberMatrix Official Logo"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <Shield className="w-8 h-8 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            )}
          </div>

          {/* Bigger Typography Titles */}
          <div className="space-y-0.5">
            <h1 className="text-base sm:text-lg md:text-xl font-black tracking-wider text-cyan-300 drop-shadow-[0_0_16px_rgba(6,182,212,0.6)] group-hover:text-cyan-200 transition leading-tight">
              CYBERMATRIX ACADEMY
            </h1>
            
            {/* Enhanced Embossed Text */}
            <p className="emboss-glow-subtext">
              BY NINAD PAWAR // LEAD ARCHITECT
            </p>
          </div>
        </Link>

        {/* 2. CENTER: CYBER TELEMETRY STATUS BAR */}
        <div className="hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-cyan-500/35 shadow-[0_0_18px_rgba(6,182,212,0.18)] text-xs">
          <div className="flex items-center space-x-1.5 text-cyan-300 font-bold">
            <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>OPERATIONAL STATUS:</span>
          </div>
          <span className="text-green-400 font-bold bg-green-500/10 px-2.5 py-0.5 rounded border border-green-500/20">
            DEFCON 5 // OPTIMAL
          </span>
          <span className="text-zinc-600">|</span>
          <div className="flex items-center space-x-1.5 text-zinc-400">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>SANDBOX KERNEL v5.10</span>
          </div>
        </div>

        {/* 3. RIGHT: LIVE CLOCK & TELEMETRY */}
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 shadow-inner">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-bold text-cyan-300">{timeString || '00:00:00'}</span>
            <span className="text-zinc-600 text-[10px]">|</span>
            <span className="text-[11px] text-zinc-400">{dateString || '00/00/0000'}</span>
          </div>
        </div>

      </div>

      {/* EMBOSSED CYAN NEON GLOW STYLING */}
      <style jsx>{`
        .emboss-glow-subtext {
          font-size: 11.5px;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #22d3ee;
          text-shadow:
            -1px -1px 0px rgba(255, 255, 255, 0.45),
            1px 1px 2px rgba(0, 0, 0, 0.95),
            0 0 8px rgba(34, 211, 238, 0.9),
            0 0 16px rgba(6, 182, 212, 0.7);
        }
      `}</style>
    </header>
  );
}

export default CyberSmokeHeader;
