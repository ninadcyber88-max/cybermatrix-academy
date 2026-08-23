'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Radio, Terminal, Cpu, Zap } from 'lucide-react';

export default function CyberSmokeHeader() {
  return <CyberSmokeHeaderComponent />;
}

export function CyberSmokeHeaderComponent() {
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
    <header className="relative w-full border-b border-cyan-500/20 bg-zinc-950/90 backdrop-blur-md font-mono select-none z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* 1. LEFT: LOGO & BRANDING */}
        <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-950 border border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.4)] overflow-hidden group-hover:border-cyan-300 transition">
            {!imgError ? (
              <img
                src="/logo.png"
                alt="CyberMatrix Logo"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <Shield className="w-6 h-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            )}
          </div>
          <div>
            <h1 className="text-sm md:text-base font-black tracking-wider text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)] group-hover:text-cyan-200 transition">
              CYBERMATRIX ACADEMY
            </h1>
            <p className="text-[9.5px] text-zinc-400 tracking-widest uppercase">
              BY NINAD PAWAR // LEAD ARCHITECT
            </p>
          </div>
        </Link>

        {/* 2. CENTER: CYBER STATUS / DIRECT ACCESS BAR */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] text-[11px]">
          <div className="flex items-center space-x-1.5 text-cyan-300 font-bold">
            <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>OPERATIONAL STATUS:</span>
          </div>
          <span className="text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
            DEFCON 5 // OPTIMAL
          </span>
          <span className="text-zinc-600">|</span>
          <div className="flex items-center space-x-1 text-zinc-400">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>SANDBOX KERNEL v5.10</span>
          </div>
        </div>

        {/* 3. RIGHT: LIVE CLOCK & TELEMETRY */}
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 shadow-inner">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-[11px] font-bold text-cyan-300">{timeString || '00:00:00'}</span>
            <span className="text-zinc-600 text-[10px]">|</span>
            <span className="text-[10px] text-zinc-400">{dateString || '00/00/0000'}</span>
          </div>
        </div>

      </div>
    </header>
  );
}
