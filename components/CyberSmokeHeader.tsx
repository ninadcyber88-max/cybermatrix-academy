'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Cpu, Zap, Calendar, Clock } from 'lucide-react';

export function CyberSmokeHeader() {
  const [timeString, setTimeString] = useState('');
  const [dateString, setDateString] = useState('');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const formattedHours = String(hours).padStart(2, '0');
      setTimeString(`${formattedHours}:${minutes}:${seconds} ${ampm}`);

      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      setDateString(`${day}-${month}-${year}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full border-b border-cyan-500/25 bg-zinc-950/95 backdrop-blur-md font-mono select-none z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* 1. LEFT: OFFICIAL LOGO & EMBOSSED BRANDING (TIGHT GAP space-x-2) */}
        <Link href="/" className="flex items-center space-x-2.5 group cursor-pointer shrink-0">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-950 border-2 border-cyan-300 logo-neon-box overflow-hidden group-hover:scale-105 transition-all duration-300 shrink-0">
              {!imgError ? (
                <img
                  src="/Ninadcyber.jpg"
                  alt="CyberMatrix Official Logo"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <Shield className="w-7 h-7 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
              )}
            </div>
          </div>

          <div className="space-y-0 text-left pl-1">
            <h1 className="text-sm sm:text-base md:text-lg font-black tracking-wider text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)] group-hover:text-cyan-200 transition leading-none">
              CYBERMATRIX ACADEMY
            </h1>
            <p className="emboss-glow-subtext">
              BY NINAD PAWAR // LEAD ARCHITECT
            </p>
          </div>
        </Link>

        {/* 2. RIGHT SIDE STACK: TIME/DATE ON TOP + COMPACT STATUS BAR BELOW */}
        <div className="flex flex-col items-end space-y-1 shrink-0">
          
          {/* Top: Large Live Time + Large Date Widget */}
          <div className="flex items-center gap-2.5 px-3 py-1 rounded-xl bg-zinc-900/90 border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-black text-cyan-300 tracking-wider drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
                {timeString || '06:46:57 PM'}
              </span>
            </div>

            <span className="text-cyan-500/50 font-bold text-xs">|</span>

            <div className="flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs sm:text-sm font-black text-zinc-100 tracking-wider">
                {dateString || '23-08-2026'}
              </span>
            </div>
          </div>

          {/* Bottom: Compact Status Bar */}
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-zinc-900/80 border border-cyan-500/25 text-[9px]">
            <div className="flex items-center space-x-1 text-cyan-400 font-bold">
              <Zap className="w-2.5 h-2.5 text-amber-400 animate-pulse" />
              <span>STATUS:</span>
            </div>
            <span className="text-green-400 font-bold bg-green-500/10 px-1.5 py-0.2 rounded border border-green-500/20">
              DEFCON 5 // OPTIMAL
            </span>
            <span className="text-zinc-600">|</span>
            <div className="flex items-center space-x-1 text-zinc-400">
              <Cpu className="w-2.5 h-2.5 text-cyan-400" />
              <span>v5.10 KERNEL</span>
            </div>
          </div>

        </div>

      </div>

      {/* EMBOSSED & GLOW STYLING */}
      <style jsx>{`
        .logo-neon-box {
          box-shadow: 
            0 0 12px rgba(34, 211, 238, 0.6),
            inset 0 0 8px rgba(6, 182, 212, 0.5);
        }

        .emboss-glow-subtext {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #22d3ee;
          text-shadow:
            -1px -1px 0px rgba(255, 255, 255, 0.4),
            1px 1px 1px rgba(0, 0, 0, 0.9),
            0 0 6px rgba(34, 211, 238, 0.8);
          margin-top: 2px;
          display: block;
        }
      `}</style>
    </header>
  );
}

export default CyberSmokeHeader;