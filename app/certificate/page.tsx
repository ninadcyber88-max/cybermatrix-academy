'use client';

import Link from 'next/link';
import { 
  Lock, 
  ShieldAlert, 
  ArrowLeft, 
  Search, 
  Filter, 
  AlertTriangle 
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

const NAV_BUTTONS = [
  { name: 'ROADMAP', href: '/roadmap' },
  { name: 'COURSES', href: '/courses' },
  { name: 'WALKTHROUGH', href: '/walkthroughs' },
  { name: 'CVE', href: '/cve' },
  { name: 'CERTIFICATE', href: '/certificate' }
];

export default function CertificateDisabledPage() {
  return (
    <div className="min-h-screen bg-[#141b2c] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300 flex flex-col justify-between">
      
      <div>
        {/* 1. Global Smoke Header */}
        <CyberSmokeHeader />

        {/* 2. Top Navigation Sub-Header */}
        <div className="bg-[#0f1422] border-b border-zinc-800/80 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
            
            <div className="flex items-center space-x-4 sm:space-x-8 text-xs font-mono tracking-wider font-bold overflow-x-auto no-scrollbar">
              {NAV_BUTTONS.map((btn) => {
                const isActive = btn.name === 'CERTIFICATE';
                return (
                  <Link
                    key={btn.name}
                    href={btn.href}
                    className={`py-4 transition-all relative shrink-0 ${
                      isActive 
                        ? 'text-[#38bdf8] font-extrabold' 
                        : 'text-zinc-400 hover:text-zinc-100'
                    }`}
                  >
                    <span>{btn.name}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.9)]"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <div className="relative w-36 sm:w-60 md:w-64">
                <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="SEARCH_DB..."
                  disabled
                  className="w-full pl-9 pr-3 py-1.5 bg-[#171e30] border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-500 placeholder-zinc-600 cursor-not-allowed"
                />
              </div>
              <button 
                disabled
                className="p-2 rounded-md bg-[#171e30] border border-zinc-700/60 text-zinc-600 cursor-not-allowed"
              >
                <Filter className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* 3. Main Disabled State Container */}
        <main className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0f1524] border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
            
            {/* Ambient Red Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Lock Shield Icon */}
            <div className="w-20 h-20 mx-auto rounded-2xl bg-zinc-900/90 border border-zinc-700/80 flex items-center justify-center shadow-inner mb-6 relative">
              <Lock className="w-10 h-10 text-rose-500 drop-shadow-[0_0_12px_rgba(244,63,94,0.7)]" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500"></span>
              </span>
            </div>

            {/* Status Code & Title */}
            <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 uppercase tracking-widest inline-block mb-3">
              ACCESS STATUS: TEMPORARILY DISABLED
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-wide mb-3">
              Certificate Vault Offline
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md mx-auto mb-8 font-light">
              The automated certificate generation and verification registry is currently undergoing scheduled cryptographic key maintenance.
            </p>

            {/* Back to Dashboard Button */}
            <Link
              href="/courses"
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-[#38bdf8] text-[#38bdf8] hover:text-black border border-cyan-500/30 text-xs font-mono font-bold transition shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO COURSES</span>
            </Link>

          </div>
        </main>
      </div>

      {/* 4. Footer */}
      <footer className="border-t border-zinc-800/60 bg-[#0d121e] py-8 text-center text-xs font-mono text-zinc-500">
        CYBERMATRIX ACADEMY // ARCHITECTED BY NINAD PAWAR // DEFENSE MATRIX ACTIVE
      </footer>

    </div>
  );
}