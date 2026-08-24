'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Terminal, 
  ChevronRight, 
  Search,
  Bot,
  Flame,
  Binary,
  Layers,
  Sparkles
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

// 1. TOP FOUNDATION DATA
const FOUNDATIONS = [
  {
    id: 'cyber-101',
    title: 'CYBER SECURITY 101',
    badge: 'FOUNDATION',
    iconBg: 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300',
    link: '/courses/win-fund',
    icon: (
      <div className="w-5 h-5 flex items-center justify-center">
        <Shield className="w-5 h-5 text-cyan-400" />
      </div>
    )
  },
  {
    id: 'windows',
    title: 'WINDOWS',
    badge: 'FOUNDATION',
    iconBg: 'bg-blue-600/30 border-blue-400/50 text-blue-300',
    link: '/courses/win-fund',
    icon: (
      <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
        <div className="bg-blue-400"></div>
        <div className="bg-blue-400"></div>
        <div className="bg-blue-400"></div>
        <div className="bg-blue-400"></div>
      </div>
    )
  },
  {
    id: 'linux',
    title: 'LINUX',
    badge: 'FOUNDATION',
    iconBg: 'bg-orange-600/30 border-orange-500/50 text-orange-400',
    link: '/courses/linux-mast',
    icon: <span className="text-xs font-mono font-black text-orange-400">&gt;_</span>
  },
  {
    id: 'networking',
    title: 'NETWORKING',
    badge: 'FOUNDATION',
    iconBg: 'bg-emerald-600/30 border-emerald-400/50 text-emerald-300',
    link: '/courses/win-fund',
    icon: <Binary className="w-4 h-4 text-emerald-400" />
  },
  {
    id: 'python',
    title: 'PYTHON',
    badge: 'FOUNDATION',
    iconBg: 'bg-blue-500/30 border-cyan-400/50 text-cyan-300',
    link: '/courses/linux-mast',
    icon: <Terminal className="w-4 h-4 text-cyan-300" />
  }
];

// 2. CAREER TRACK COLUMNS DATA
const CAREER_COLUMNS = [
  {
    category: 'SECURITY ANALYST',
    subtitle: 'Threat detection & SOC ops',
    themeColor: 'text-cyan-400',
    items: [
      {
        title: 'SOC ANALYST L1',
        level: 'INTERMEDIATE',
        isNew: false,
        iconBg: 'bg-cyan-500/20 border-cyan-400/40 text-cyan-400',
        link: '/courses/win-fund'
      },
      {
        title: 'THREAT HUNTING',
        level: 'INTERMEDIATE',
        isNew: true,
        iconBg: 'bg-cyan-500/20 border-cyan-400/40 text-cyan-400',
        link: '/courses/win-fund'
      },
      {
        title: 'DIGITAL FORENSICS',
        level: 'INTERMEDIATE',
        isNew: true,
        iconBg: 'bg-cyan-500/20 border-cyan-400/40 text-cyan-400',
        link: '/courses/win-fund'
      }
    ]
  },
  {
    category: 'PENTESTER',
    subtitle: 'Offensive security & research',
    themeColor: 'text-amber-400',
    items: [
      {
        title: 'ETHICAL HACKING',
        level: 'INTERMEDIATE',
        isNew: false,
        iconBg: 'bg-amber-500/20 border-amber-400/40 text-amber-400',
        link: '/courses/eth-hack'
      },
      {
        title: 'WEB HACKING',
        level: 'INTERMEDIATE',
        isNew: false,
        iconBg: 'bg-amber-500/20 border-amber-400/40 text-amber-400',
        link: '/courses/win-fund'
      },
      {
        title: 'NETWORK HACKING',
        level: 'INTERMEDIATE',
        isNew: true,
        iconBg: 'bg-amber-500/20 border-amber-400/40 text-amber-400',
        link: '/courses/win-fund'
      }
    ]
  },
  {
    category: 'RED TEAM',
    subtitle: 'Adversary simulation & elite ops',
    themeColor: 'text-rose-500',
    items: [
      {
        title: 'RED TEAM OPS',
        level: 'HARD',
        isNew: true,
        iconBg: 'bg-rose-500/20 border-rose-400/40 text-rose-500',
        link: '/courses/eth-hack'
      },
      {
        title: 'CLOUD RED TEAM',
        level: 'HARD',
        isNew: true,
        iconBg: 'bg-rose-500/20 border-rose-400/40 text-rose-500',
        link: '/courses/win-fund'
      }
    ]
  },
  {
    category: 'AI SECURITY',
    subtitle: 'LLM hacking & AI red team',
    themeColor: 'text-purple-400',
    items: [
      {
        title: 'AI & LLM HACKING',
        level: 'INTERMEDIATE',
        isNew: true,
        iconBg: 'bg-purple-500/20 border-purple-400/40 text-purple-400',
        link: '/courses/eth-hack'
      }
    ]
  }
];

export default function CyberSecurityRoadmap() {
  return (
    <div className="min-h-screen bg-[#101420] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* 1. Official Header */}
      <CyberSmokeHeader />

      {/* 2. Sub-Header Navigation */}
      <div className="bg-[#0b0e17] border-b border-zinc-800/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
          
          <div className="flex items-center space-x-6 sm:space-x-8 text-xs font-mono tracking-wider font-bold">
            <button className="text-cyan-400 font-extrabold py-4 relative">
              ROADMAP
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
            </button>
            <Link href="/courses" className="text-zinc-400 hover:text-zinc-200 py-4 transition">
              COURSES
            </Link>
            <Link href="/walkthroughs" className="text-zinc-400 hover:text-zinc-200 py-4 transition">
              WALKTHROUGHS
            </Link>
            <Link href="/cve" className="text-zinc-400 hover:text-zinc-200 py-4 transition">
              CVE
            </Link>
          </div>

          <div className="relative w-44 sm:w-60">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="SEARCH_DB..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#141a29] border border-zinc-800 rounded-md text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>

        </div>
      </div>

      {/* 3. HERO ROADMAP TITLE */}
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-6 text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          CYBER SECURITY LEARNING ROADMAP
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
          From fundamental principles to advanced techniques, this roadmap provides clear steps and essential resources to help you build a robust skill set.
        </p>
      </div>

      {/* 4. TOP SECTION: FOUNDATION STACK WITH NEON CONNECTING LINES */}
      <div className="max-w-xl mx-auto px-4 py-4 relative">
        
        {/* Connecting Vertical Circuit Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500/60 via-blue-500/40 to-purple-500/60 z-0"></div>

        <div className="space-y-4 relative z-10">
          {FOUNDATIONS.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group block p-3.5 sm:p-4 rounded-xl bg-[#141b2c] border border-zinc-800 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                
                <div className="flex items-center space-x-3.5">
                  {/* Icon Box */}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border shadow-inner ${item.iconBg}`}>
                    {item.icon}
                  </div>

                  {/* Title & Badge */}
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-white tracking-wider group-hover:text-cyan-300 transition">
                      {item.title}
                    </h3>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Right Arrow */}
                <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-300 group-hover:translate-x-1 transition-transform" />

              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* 5. CENTER SECTION DIVIDER */}
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-8 text-center space-y-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-widest text-white uppercase">
          CYBER SECURITY CAREER SKILLS
        </h2>
        <p className="text-xs text-zinc-400 max-w-lg mx-auto">
          Master the specific skills necessary for your career of interest. Not sure which path is right for you? Explore our tracks below.
        </p>
      </div>

      {/* 6. BOTTOM 4 CAREER COLUMNS GRID */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_COLUMNS.map((col, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              
              {/* Column Header */}
              <div className="text-center pb-2 border-b border-zinc-800">
                <h3 className={`text-sm sm:text-base font-extrabold tracking-wider uppercase ${col.themeColor}`}>
                  {col.category}
                </h3>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  {col.subtitle}
                </p>
              </div>

              {/* Column Cards */}
              <div className="space-y-3 flex-1">
                {col.items.map((card, cardIdx) => (
                  <Link
                    key={cardIdx}
                    href={card.link}
                    className="group block p-3.5 rounded-xl bg-[#141b2c] border border-zinc-800/90 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition duration-200"
                  >
                    <div className="flex items-center justify-between">
                      
                      <div className="flex items-center space-x-3">
                        {/* Icon */}
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${card.iconBg}`}>
                          <Shield className="w-4 h-4" />
                        </div>

                        {/* Title & Level */}
                        <div>
                          <h4 className="text-xs font-bold text-white tracking-wide group-hover:text-cyan-300 transition line-clamp-1">
                            {card.title}
                          </h4>
                          <span className="text-[9px] font-mono font-semibold text-zinc-400 tracking-wider">
                            {card.level}
                          </span>
                        </div>
                      </div>

                      {/* NEW Badge */}
                      {card.isNew && (
                        <span className="text-[8.5px] font-mono font-black px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                          NEW
                        </span>
                      )}

                    </div>
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>
      </main>

      {/* 7. Footer */}
      <footer className="border-t border-zinc-800/60 bg-[#0b0e17] py-6 text-center text-xs font-mono text-zinc-500">
        CYBERMATRIX ACADEMY // ARCHITECTED BY NINAD PAWAR // ALL PATHS ACTIVE
      </footer>

    </div>
  );
}