'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Monitor, 
  Globe, 
  ChevronRight, 
  Search, 
  Eye, 
  Activity, 
  Zap, 
  Lock, 
  Network, 
  Brain,
  Filter
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

// 1. TOP FOUNDATION TILES DATA
const FOUNDATIONS = [
  {
    id: 'cyber-101',
    title: 'CYBER SECURITY 101',
    badge: 'FOUNDATION',
    iconBg: 'bg-[#0070f3]',
    icon: <Shield className="w-5 h-5 text-white" />,
    link: '/courses/win-fund'
  },
  {
    id: 'windows',
    title: 'WINDOWS',
    badge: 'FOUNDATION',
    iconBg: 'bg-[#1e50c4]',
    icon: <Monitor className="w-5 h-5 text-white" />,
    link: '/courses/win-fund'
  },
  {
    id: 'linux',
    title: 'LINUX',
    badge: 'FOUNDATION',
    iconBg: 'bg-[#d94a14]',
    icon: <span className="font-mono font-black text-white text-base">&gt;_</span>,
    link: '/courses/linux-mast'
  },
  {
    id: 'networking',
    title: 'NETWORKING',
    badge: 'FOUNDATION',
    iconBg: 'bg-[#059669]',
    icon: <Globe className="w-5 h-5 text-white" />,
    link: '/courses/win-fund'
  },
  {
    id: 'python',
    title: 'PYTHON',
    badge: 'FOUNDATION',
    iconBg: 'bg-[#2563eb]',
    icon: <span className="font-mono font-black text-white text-base">&gt;_</span>,
    link: '/courses/linux-mast'
  }
];

// 2. BOTTOM 4 CAREER TRACKS DATA
const CAREER_TRACKS = [
  {
    category: 'SECURITY ANALYST',
    subtitle: 'Threat detection & SOC ops',
    headerColor: 'text-[#38bdf8]',
    items: [
      {
        title: 'SOC ANALYST L1',
        level: 'INTERMEDIATE',
        isSoon: false,
        iconBg: 'bg-[#0284c7]/20 text-[#38bdf8]',
        icon: <Shield className="w-5 h-5" />,
        link: '/courses/win-fund'
      },
      {
        title: 'THREAT HUNTING',
        level: 'INTERMEDIATE',
        isSoon: true,
        iconBg: 'bg-[#0284c7]/20 text-[#38bdf8]',
        icon: <Eye className="w-5 h-5" />,
        link: '/courses/win-fund'
      },
      {
        title: 'DIGITAL FORENSICS',
        level: 'INTERMEDIATE',
        isSoon: true,
        iconBg: 'bg-[#0284c7]/20 text-[#38bdf8]',
        icon: <Activity className="w-5 h-5" />,
        link: '/courses/win-fund'
      }
    ]
  },
  {
    category: 'PENTESTER',
    subtitle: 'Offensive security & research',
    headerColor: 'text-[#f97316]',
    items: [
      {
        title: 'ETHICAL HACKING',
        level: 'INTERMEDIATE',
        isSoon: false,
        iconBg: 'bg-[#c2410c]/20 text-[#f97316]',
        icon: <Zap className="w-5 h-5" />,
        link: '/courses/eth-hack'
      },
      {
        title: 'WEB HACKING',
        level: 'INTERMEDIATE',
        isSoon: false,
        iconBg: 'bg-[#c2410c]/20 text-[#f97316]',
        icon: <Globe className="w-5 h-5" />,
        link: '/courses/win-fund'
      },
      {
        title: 'NETWORK HACKING + AD',
        level: 'INTERMEDIATE',
        isSoon: true,
        iconBg: 'bg-[#c2410c]/20 text-[#f97316]',
        icon: <Network className="w-5 h-5" />,
        link: '/courses/win-fund'
      }
    ]
  },
  {
    category: 'RED TEAM',
    subtitle: 'Adversary simulation & elite ops',
    headerColor: 'text-[#ef4444]',
    items: [
      {
        title: 'RED TEAM OPS',
        level: 'HARD',
        isSoon: true,
        iconBg: 'bg-[#b91c1c]/20 text-[#ef4444]',
        icon: <Lock className="w-5 h-5" />,
        link: '/courses/eth-hack'
      },
      {
        title: 'CLOUD RED TEAM',
        level: 'HARD',
        isSoon: true,
        iconBg: 'bg-[#b91c1c]/20 text-[#ef4444]',
        icon: <Globe className="w-5 h-5" />,
        link: '/courses/win-fund'
      }
    ]
  },
  {
    category: 'AI SECURITY',
    subtitle: 'LLM hacking & AI red team',
    headerColor: 'text-[#c084fc]',
    items: [
      {
        title: 'AI & LLM HACKING',
        level: 'INTERMEDIATE',
        isSoon: true,
        iconBg: 'bg-[#7e22ce]/20 text-[#c084fc]',
        icon: <Brain className="w-5 h-5" />,
        link: '/courses/eth-hack'
      }
    ]
  }
];

const NAV_BUTTONS = [
  { name: 'ROADMAP', href: '/roadmap' },
  { name: 'COURSES', href: '/courses' },
  { name: 'WALKTHROUGH', href: '/walkthroughs' },
  { name: 'CVE', href: '/cve' },
  { name: 'CERTIFICATE', href: '/certificate' }
];

export default function RoadmapPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-[#1c2438] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300 relative overflow-hidden flex flex-col justify-between">
      
      <div>
        {/* 1. Global Header */}
        <CyberSmokeHeader />

        {/* 2. Top Blueprint Sub-Header */}
        <div className="bg-[#161d2e] border-b border-zinc-800/80 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
            
            <div className="flex items-center space-x-4 sm:space-x-8 text-xs font-mono tracking-wider font-bold overflow-x-auto no-scrollbar">
              {NAV_BUTTONS.map((btn) => {
                const isActive = btn.name === 'ROADMAP';
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="SEARCH_DB..."
                  className="w-full pl-9 pr-3 py-1.5 bg-[#1f283d] border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#38bdf8] transition"
                />
              </div>
              <button 
                className="p-2 rounded-md bg-[#1f283d] border border-zinc-700/60 text-zinc-400 hover:text-[#38bdf8] transition hover:border-[#38bdf8]/40 cursor-pointer"
                title="Filter Matrix"
              >
                <Filter className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* 3. Blueprint Grid & Roadmap Flow Container */}
        <div className="relative w-full pb-28 pt-10">
          
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none" 
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>

          {/* Hero Title */}
          <div className="max-w-4xl mx-auto px-4 text-center space-y-2 relative z-10 mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider text-white uppercase">
              CYBER SECURITY LEARNING ROADMAP
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              From fundamental principles to advanced techniques, this roadmap provides clear steps and essential resources to help you build a robust skill set.
            </p>
          </div>

          {/* 4. Top Foundation Stack */}
          <div className="max-w-xl mx-auto px-4 relative z-10 space-y-6">
            {FOUNDATIONS.map((item, index) => (
              <div key={item.id} className="relative flex flex-col items-center">
                
                <Link
                  href={item.link}
                  className="w-full flex items-center justify-between rounded-xl bg-[#171e30] border border-zinc-700/40 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden shadow-lg group"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 ${item.iconBg} flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>

                  <div className="flex-1 px-4 sm:px-6 text-left">
                    <h3 className="text-xs sm:text-sm font-black text-white tracking-wider group-hover:text-cyan-300 transition">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#38bdf8] uppercase block mt-0.5">
                      {item.badge}
                    </span>
                  </div>

                  <div className="pr-4 text-zinc-600 group-hover:text-cyan-300 transition">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>

                {index < FOUNDATIONS.length - 1 && (
                  <div className="my-1 flex flex-col items-center">
                    <div className="w-[2px] h-4 bg-zinc-600/60"></div>
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-zinc-600/60"></div>
                  </div>
                )}

              </div>
            ))}

            <div className="flex flex-col items-center my-2">
              <div className="w-[2px] h-6 bg-zinc-600/60"></div>
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-zinc-600/60"></div>
            </div>
          </div>

          {/* 5. Center Section: Career Skills Box */}
          <div className="max-w-xl mx-auto px-4 relative z-10">
            <div className="p-6 rounded-2xl bg-[#141b2c] border border-zinc-700/50 shadow-2xl text-center space-y-2">
              <h2 className="text-base sm:text-lg md:text-xl font-black tracking-widest text-white uppercase">
                CYBER SECURITY CAREER SKILLS
              </h2>
              <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
                Master the specific skills necessary for your career of interest. Not sure which path is right for you? Explore our tracks below.
              </p>
            </div>
          </div>

          {/* Connecting Circuit Line */}
          <div className="max-w-6xl mx-auto px-8 relative hidden lg:block my-4">
            <div className="w-[2px] h-6 bg-zinc-600/60 mx-auto"></div>
            <div className="w-full h-[2px] bg-zinc-600/60 relative">
              <div className="absolute left-[12.5%] -top-0 w-[2px] h-4 bg-zinc-600/60"></div>
              <div className="absolute left-[37.5%] -top-0 w-[2px] h-4 bg-zinc-600/60"></div>
              <div className="absolute left-[62.5%] -top-0 w-[2px] h-4 bg-zinc-600/60"></div>
              <div className="absolute left-[87.5%] -top-0 w-[2px] h-4 bg-zinc-600/60"></div>
            </div>
          </div>

          {/* 6. Bottom 4 Career Tracks Grid */}
          <main className="max-w-7xl mx-auto px-4 md:px-8 pt-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CAREER_TRACKS.map((col, idx) => (
                <div key={idx} className="flex flex-col space-y-4">
                  
                  <div className="text-center pb-2 border-b border-zinc-800">
                    <h3 className={`text-sm sm:text-base font-extrabold tracking-wider uppercase ${col.headerColor}`}>
                      {col.category}
                    </h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5 font-medium">
                      {col.subtitle}
                    </p>
                  </div>

                  <div className="space-y-3 flex-1">
                    {col.items.map((card, cardIdx) => (
                      <Link
                        key={cardIdx}
                        href={card.link}
                        className="group flex items-center justify-between p-3 rounded-xl bg-[#171e30] border border-zinc-700/40 hover:border-cyan-400/50 hover:shadow-lg transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${card.iconBg}`}>
                            {card.icon}
                          </div>

                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-white tracking-wide group-hover:text-cyan-300 transition truncate">
                              {card.title}
                            </h4>
                            <span className="text-[9px] font-mono font-bold text-zinc-400 block mt-0.5">
                              {card.level}
                            </span>
                          </div>
                        </div>

                        {card.isSoon && (
                          <span className="text-[8px] font-mono font-black px-1.5 py-0.5 rounded bg-[#0284c7] text-white shrink-0 shadow-sm">
                            SOON
                          </span>
                        )}
                      </Link>
                    ))}

                    {/* AI Security Robotic Neon Aura */}
                    {col.category === 'AI SECURITY' && (
                      <div className="relative pt-6 flex flex-col items-center">
                        <div className="absolute top-0 w-24 h-16 border-t-2 border-l-2 border-r-2 border-purple-500/80 rounded-t-full shadow-[0_0_15px_rgba(168,85,247,0.6)]"></div>
                        <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,1)] animate-ping mb-2"></div>
                        <div className="text-5xl drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] select-none">
                          🤖
                        </div>
                        <span className="text-[9px] font-mono font-bold text-purple-400 mt-2 tracking-widest">
                          AI RED TEAM OPERATIVE
                        </span>
                      </div>
                    )}

                  </div>

                </div>
              ))}
            </div>
          </main>

        </div>
      </div>

      {/* 7. Footer */}
      <footer className="border-t border-zinc-800/60 bg-[#141b2c] py-6 text-center text-xs font-mono text-zinc-500">
        CYBERMATRIX ACADEMY // ARCHITECTED BY NINAD PAWAR // ALL PATHS ACTIVE
      </footer>

    </div>
  );
}