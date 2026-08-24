'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  Signal, 
  Terminal, 
  ShieldAlert, 
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

interface TrackCard {
  id: string;
  title: string;
  category: 'COURSES' | 'ROADMAP' | 'WALKTHROUGHS' | 'CVE';
  description: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  levelColor: string;
  bannerGradient: string;
  bannerIcon: React.ReactNode;
  link: string;
}

const COURSES_DATA: TrackCard[] = [
  {
    id: 'win-fund',
    title: 'WINDOWS FUNDAMENTAL',
    category: 'COURSES',
    description: 'Start your journey into the world of hacking. Master core OS internals, registry architecture, and permissions.',
    level: 'BEGINNER',
    levelColor: 'text-emerald-400',
    bannerGradient: 'bg-gradient-to-b from-[#0078d4] to-[#004e8c]',
    bannerIcon: (
      <div className="grid grid-cols-2 gap-1.5 w-16 h-16 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        <div className="bg-[#f25022] rounded-tl-sm"></div>
        <div className="bg-[#7fba00] rounded-tr-sm"></div>
        <div className="bg-[#00a4ef] rounded-bl-sm"></div>
        <div className="bg-[#ffb900] rounded-br-sm"></div>
      </div>
    ),
    link: '/courses/win-fund'
  },
  {
    id: 'linux-mast',
    title: 'LINUX MASTERY',
    category: 'COURSES',
    description: 'Master Linux from the ground up — the way real hackers do it. From core bash scripts to root privilege escalation.',
    level: 'BEGINNER',
    levelColor: 'text-emerald-400',
    bannerGradient: 'bg-gradient-to-b from-[#8b151b] via-[#590d12] to-[#2b0507]',
    bannerIcon: (
      <div className="relative flex items-center justify-center">
        <span className="text-6xl drop-shadow-[0_6px_14px_rgba(0,0,0,0.8)] select-none">🐧</span>
      </div>
    ),
    link: '/courses/linux-mast'
  },
  {
    id: 'eth-hack',
    title: 'ETHICAL HACKING',
    category: 'COURSES',
    description: 'Learn ethical hacking from scratch — recon, exploitation, privilege escalation, and active directory penetration.',
    level: 'INTERMEDIATE',
    levelColor: 'text-amber-500',
    bannerGradient: 'bg-gradient-to-b from-[#800c15] via-[#4d070d] to-[#240306]',
    bannerIcon: (
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-black/40 border border-rose-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.4)]">
          <ShieldAlert className="w-9 h-9 text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
        </div>
      </div>
    ),
    link: '/courses/eth-hack'
  },
  {
    id: 'web-vapt',
    title: 'WEB APP PENTESTING',
    category: 'COURSES',
    description: 'OWASP Top 10 mastery, advanced SQLi, bypass techniques, SSRF exploitation, and Burp Suite automation protocols.',
    level: 'ADVANCED',
    levelColor: 'text-rose-500',
    bannerGradient: 'bg-gradient-to-b from-[#0e4d64] via-[#092d3b] to-[#04131a]',
    bannerIcon: (
      <div className="w-16 h-16 rounded-2xl bg-cyan-950/60 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
        <Terminal className="w-8 h-8 text-cyan-300" />
      </div>
    ),
    link: '/courses/win-fund'
  }
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = COURSES_DATA.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#1b2234] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* 1. Official Header */}
      <CyberSmokeHeader />

      {/* 2. Top Navigation Sub-Header */}
      <div className="bg-[#141b2b] border-b border-zinc-800/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
          
          <div className="flex items-center space-x-6 sm:space-x-8 text-xs font-mono tracking-wider font-bold">
            <Link href="/roadmap" className="text-zinc-400 hover:text-zinc-200 py-4 transition">
              ROADMAP
            </Link>
            <button className="text-cyan-400 font-extrabold py-4 relative">
              COURSES
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
            </button>
            <Link href="/walkthroughs" className="text-zinc-400 hover:text-zinc-200 py-4 transition">
              WALKTHROUGHS
            </Link>
            <Link href="/cve" className="text-zinc-400 hover:text-zinc-200 py-4 transition">
              CVE
            </Link>
            <Link href="/certificate" className="text-zinc-400 hover:text-cyan-300 py-4 transition hidden sm:inline-block">
              CERTIFICATES
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative w-48 sm:w-64 md:w-80">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH_DB..."
                className="w-full pl-9 pr-3 py-1.5 bg-[#1a2338] border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>
            <button className="p-2 rounded-md bg-[#1a2338] border border-zinc-700/60 hover:border-cyan-500/50 text-zinc-400 hover:text-cyan-300 transition">
              <Filter className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* 3. Main Content Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((course) => (
            <Link
              key={course.id}
              href={course.link}
              className="group flex flex-col justify-between rounded-xl bg-[#131929] border border-zinc-800/90 overflow-hidden hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer"
            >
              
              {/* Artwork Banner */}
              <div className={`h-48 w-full ${course.bannerGradient} flex items-center justify-center relative overflow-hidden border-b border-black/30`}>
                {course.bannerIcon}
                <div className="absolute inset-0 bg-black/10 backdrop-brightness-95"></div>
              </div>

              {/* Course Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-extrabold text-white tracking-wide group-hover:text-cyan-300 transition">
                    {course.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Level Indicator Footer */}
                <div className="mt-6 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500 group-hover:text-cyan-300 transition flex items-center space-x-1">
                    <span>Start Module</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <div className="flex items-center space-x-1.5">
                    <Signal className={`w-3.5 h-3.5 ${course.levelColor}`} />
                    <span className={`text-[11px] font-black tracking-wider ${course.levelColor}`}>
                      {course.level}
                    </span>
                  </div>
                </div>

              </div>

            </Link>
          ))}
        </div>
      </main>

      {/* 4. Footer */}
      <footer className="border-t border-zinc-800/60 bg-[#141b2b] py-6 text-center text-xs font-mono text-zinc-500">
        CYBERMATRIX ACADEMY // ARCHITECTED BY NINAD PAWAR // DEFENSE MATRIX ACTIVE
      </footer>

    </div>
  );
}