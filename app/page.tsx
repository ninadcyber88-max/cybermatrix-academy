'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, 
  Filter, 
  Signal, 
  Terminal, 
  ShieldAlert, 
  ArrowRight,
  ExternalLink,
  Zap,
  BookOpen
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

interface TrackCard {
  id: string;
  title: string;
  description: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  levelColor: string;
  bannerGradient: string;
  bannerArtwork: React.ReactNode;
  link: string;
  launchLabel: string;
}

const COURSES_DATA: TrackCard[] = [
  {
    id: 'win-fund',
    title: 'WINDOWS FUNDAMENTAL',
    description: 'Start your journey into the world of hacking. Master core OS internals, registry architecture, and permissions.',
    level: 'BEGINNER',
    levelColor: 'text-[#10b981]',
    bannerGradient: 'bg-gradient-to-b from-[#0062b8] via-[#00519a] to-[#003b70]',
    bannerArtwork: (
      <div className="grid grid-cols-2 gap-2.5 w-24 h-24 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
        <div className="bg-[#f25022] rounded-sm shadow-md"></div>
        <div className="bg-[#7fba00] rounded-sm shadow-md"></div>
        <div className="bg-[#00a4ef] rounded-sm shadow-md"></div>
        <div className="bg-[#ffb900] rounded-sm shadow-md"></div>
      </div>
    ),
    link: '/courses/win-fund',
    launchLabel: 'Start Windows Lab'
  },
  {
    id: 'linux-mast',
    title: 'LINUX MASTERY',
    description: 'Master Linux from the ground up — the way real hackers do it. From core bash scripts to root privilege escalation.',
    level: 'BEGINNER',
    levelColor: 'text-[#10b981]',
    bannerGradient: 'bg-gradient-to-b from-[#7a0c12] via-[#4d070b] to-[#240306]',
    bannerArtwork: (
      <div className="relative flex items-center justify-center">
        <span className="text-7xl drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] select-none">
          🐧
        </span>
      </div>
    ),
    link: '/courses/linux-mast',
    launchLabel: 'Launch Linux Terminal'
  },
  {
    id: 'eth-hack',
    title: 'ETHICAL HACKING',
    description: 'Learn ethical hacking from scratch — recon, exploitation, privilege escalation, and active directory penetration.',
    level: 'INTERMEDIATE',
    levelColor: 'text-[#f59e0b]',
    bannerGradient: 'bg-gradient-to-b from-[#6b0b10] via-[#400609] to-[#1c0204]',
    bannerArtwork: (
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-black/60 border border-rose-500/30 flex items-center justify-center shadow-[0_0_35px_rgba(225,29,72,0.45)]">
          <ShieldAlert className="w-11 h-11 text-rose-500 drop-shadow-[0_0_12px_rgba(225,29,72,0.9)]" />
        </div>
      </div>
    ),
    link: '/courses/eth-hack',
    launchLabel: 'Enter Attack Lab'
  },
  {
    id: 'web-vapt',
    title: 'WEB APP PENTESTING',
    description: 'OWASP Top 10 mastery, advanced SQLi, bypass techniques, SSRF exploitation, and Burp Suite automation...',
    level: 'ADVANCED',
    levelColor: 'text-[#f43f5e]',
    bannerGradient: 'bg-gradient-to-b from-[#0b3c4f] via-[#072633] to-[#04141b]',
    bannerArtwork: (
      <div className="w-20 h-20 rounded-2xl bg-cyan-950/70 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
        <Terminal className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
      </div>
    ),
    link: '/courses/win-fund',
    launchLabel: 'Start VAPT Sandbox'
  }
];

const NAV_BUTTONS = [
  { name: 'ROADMAP', href: '/roadmap' },
  { name: 'COURSES', href: '/courses' },
  { name: 'WALKTHROUGH', href: '/walkthroughs' },
  { name: 'CVE', href: '/cve' },
  { name: 'CERTIFICATE', href: '/certificate' }
];

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const filteredCourses = COURSES_DATA.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#141b2c] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300 flex flex-col justify-between">
      
      <div>
        {/* 1. Global Header */}
        <CyberSmokeHeader />

        {/* 2. Top Navigation Sub-Header With Interactive Links & Buttons */}
        <div className="bg-[#0f1422] border-b border-zinc-800/80 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
            
            {/* Sub Navigation Bar Buttons */}
            <div className="flex items-center space-x-4 sm:space-x-8 text-xs font-mono tracking-wider font-bold overflow-x-auto no-scrollbar">
              {NAV_BUTTONS.map((btn) => {
                const isActive = (pathname === btn.href) || (btn.name === 'COURSES' && pathname === '/');
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

            {/* Search Box & Filter Action */}
            <div className="flex items-center space-x-2 shrink-0">
              <div className="relative w-36 sm:w-60 md:w-64">
                <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="SEARCH_DB..."
                  className="w-full pl-9 pr-3 py-1.5 bg-[#171e30] border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#38bdf8] transition"
                />
              </div>
              <button 
                className="p-2 rounded-md bg-[#171e30] border border-zinc-700/60 text-zinc-400 hover:text-[#38bdf8] transition hover:border-[#38bdf8]/40 cursor-pointer"
                title="Filter Matrix"
              >
                <Filter className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* 3. Main Dashboard Course Grid (2x2) */}
        <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#0f1524] border border-zinc-800/90 overflow-hidden hover:border-[#38bdf8]/40 hover:shadow-[0_0_35px_rgba(0,0,0,0.6)] transition-all duration-300"
              >
                
                {/* Top Banner Artwork */}
                <Link href={course.link} className="block relative">
                  <div className={`h-56 w-full ${course.bannerGradient} flex items-center justify-center relative overflow-hidden border-b border-black/40`}>
                    {course.bannerArtwork}
                    <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors"></div>
                  </div>
                </Link>

                {/* Information Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <Link href={course.link} className="block">
                      <h3 className="text-base sm:text-lg font-black text-white tracking-wider group-hover:text-[#38bdf8] transition">
                        {course.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Dynamic Action Buttons & Signal Indicators */}
                  <div className="mt-7 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                    
                    {/* Direct Launch Action Button */}
                    <Link
                      href={course.link}
                      className="px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-[#38bdf8] text-cyan-300 hover:text-black border border-cyan-500/30 text-xs font-mono font-bold transition flex items-center space-x-1.5 shadow-sm"
                    >
                      <span>Start Module</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {/* Level Badge Indicator */}
                    <div className="flex items-center space-x-1.5">
                      <Signal className={`w-3.5 h-3.5 ${course.levelColor}`} />
                      <span className={`text-[11px] font-black tracking-wider ${course.levelColor}`}>
                        {course.level}
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>
        </main>
      </div>

      {/* 4. Footer */}
      <footer className="border-t border-zinc-800/60 bg-[#0d121e] py-8 text-center text-xs font-mono text-zinc-500">
        CYBERMATRIX ACADEMY // ARCHITECTED BY NINAD PAWAR // ALL CHANNELS OPERATIONAL
      </footer>

    </div>
  );
}