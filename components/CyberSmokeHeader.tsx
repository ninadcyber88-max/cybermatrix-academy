'use client';

import { useState, useEffect } from 'react';
import { Shield, Radio } from 'lucide-react';

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

        {/* Right: Live Clock & Realtime HUD */}
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-[11px] font-bold">{timeString || '00:00:00'}</span>
            <span className="text-zinc-500 text-[10px]">|</span>
            <span className="text-[10px] text-zinc-400">{dateString || '00/00/0000'}</span>
          </div>
        </div>

      </div>
    </header>
  );
}
