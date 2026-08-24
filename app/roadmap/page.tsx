'use client';

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
  Filter,
  Sparkles
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

// 1. TOP FOUNDATION STATIC TILES
const FOUNDATIONS = [
  {
    id: 'cyber-101',
    title: 'CYBER SECURITY 101',
    badge: 'FOUNDATION',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600 shadow-[0_0_20px_rgba(6,182,212,0.6)]',
    icon: <Shield className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
  },
  {
    id: 'windows',
    title: 'WINDOWS',
    badge: 'FOUNDATION',
    iconBg: 'bg-gradient-to-br from-blue-600 to-indigo-700 shadow-[0_0_20px_rgba(37,99,235,0.6)]',
    icon: <Monitor className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
  },
  {
    id: 'linux',
    title: 'LINUX',
    badge: 'FOUNDATION',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-600 shadow-[0_0_20px_rgba(234,88,12,0.6)]',
    icon: <span className="font-mono font-black text-white text-base drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">&gt;_</span>
  },
  {
    id: 'networking',
    title: 'NETWORKING',
    badge: 'FOUNDATION',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-700 shadow-[0_0_20px_rgba(16,185,129,0.6)]',
    icon: <Globe className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
  },
  {
    id: 'python',
    title: 'PYTHON',
    badge: 'FOUNDATION',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.6)]',
    icon: <span className="font-mono font-black text-white text-base drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">&gt;_</span>
  }
];

// 2. BOTTOM 4 CAREER TILES
const CAREER_TRACKS = [
  {
    category: 'SECURITY ANALYST',
    subtitle: 'Threat detection & SOC ops',
    headerColor: 'text-[#38bdf8] drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]',
    cardBorderGlow: 'hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]',
    items: [
      {
        title: 'SOC ANALYST L1',
        level: 'INTERMEDIATE',
        isSoon: false,
        iconGlow: 'bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]',
        icon: <Shield className="w-4 h-4" />
      },
      {
        title: 'THREAT HUNTING',
        level: 'INTERMEDIATE',
        isSoon: true,
        iconGlow: 'bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]',
        icon: <Eye className="w-4 h-4" />
      },
      {
        title: 'DIGITAL FORENSICS',
        level: 'INTERMEDIATE',
        isSoon: true,
        iconGlow: 'bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]',
        icon: <Activity className="w-4 h-4" />
      }
    ]
  },
  {
    category: 'PENTESTER',
    subtitle: 'Offensive security & research',
    headerColor: 'text-[#f97316] drop-shadow-[0_0_12px_rgba(249,115,22,0.7)]',
    cardBorderGlow: 'hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]',
    items: [
      {
        title: 'ETHICAL HACKING',
        level: 'INTERMEDIATE',
        isSoon: false,
        iconGlow: 'bg-orange-500/20 border border-orange-400/40 text-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.4)]',
        icon: <Zap className="w-4 h-4" />
      },
      {
        title: 'WEB HACKING',
        level: 'INTERMEDIATE',
        isSoon: false,
        iconGlow: 'bg-orange-500/20 border border-orange-400/40 text-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.4)]',
        icon: <Globe className="w-4 h-4" />
      },
      {
        title: 'NETWORK HACKING + AD',
        level: 'INTERMEDIATE',
        isSoon: true,
        iconGlow: 'bg-orange-500/20 border border-orange-400/40 text-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.4)]',
        icon: <Network className="w-4 h-4" />
      }
    ]
  },
  {
    category: 'RED TEAM',
    subtitle: 'Adversary simulation & elite ops',
    headerColor: 'text-[#ef4444] drop-shadow-[0_0_12px_rgba(239,68,68,0.7)]',
    cardBorderGlow: 'hover:border-rose-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]',
    items: [
      {
        title: 'RED TEAM OPS',
        level: 'HARD',
        isSoon: true,
        iconGlow: 'bg-rose-500/20 border border-rose-400/40 text-rose-400 shadow-[0_0_12px_rgba(239,68,68,0.4)]',
        icon: <Lock className="w-4 h-4" />
      },
      {
        title: 'CLOUD RED TEAM',
        level: 'HARD',
        isSoon: true,
        iconGlow: 'bg-rose-500/20 border border-rose-400/40 text-rose-400 shadow-[0_0_12px_rgba(239,68,68,0.4)]',
        icon: <Globe className="w-4 h-4" />
      }
    ]
  },
  {
    category: 'AI SECURITY',
    subtitle: 'LLM hacking & AI red team',
    headerColor: 'text-[#c084fc] drop-shadow-[0_0_12px_rgba(192,132,252,0.7)]',
    cardBorderGlow: 'hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(192,132,252,0.25)]',
    items: [
      {
        title: 'AI & LLM HACKING',
        level: 'INTERMEDIATE',
        isSoon: true,
        iconGlow: 'bg-purple-500/20 border border-purple-400/40 text-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.4)]',
        icon: <Brain className="w-4 h-4" />
      }
    ]
  }
];

export default function GlassmorphismRoadmapPage() {
  return (
    <div className="min-h-screen bg-[#0d121f] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300 relative overflow-hidden">
      
      {/* Ambient Glowing Orbs */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none"></div>

      {/* 1. Global Header */}
      <CyberSmokeHeader />

      {/* 2. Top Blueprint Sub-Header */}
      <div className="bg-[#101627]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
          
          <div className="flex items-center space-x-6 sm:space-x-8 text-xs font-mono tracking-wider font-bold">
            <span className="text-cyan-400 font-extrabold py-4 relative cursor-default">
              ROADMAP
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]"></div>
            </span>
            <span className="text-zinc-400 py-4 cursor-default">COURSES</span>
            <span className="text-zinc-400 py-4 cursor-default">WALKTHROUGHS</span>
            <span className="text-zinc-400 py-4 cursor-default">CVE</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative w-44 sm:w-64">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                placeholder="SEARCH_DB..."
                className="w-full pl-9 pr-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-lg text-xs font-mono text-zinc-200 placeholder-zinc-500 backdrop-blur-md focus:outline-none cursor-default"
              />
            </div>
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-400 backdrop-blur-md">
              <Filter className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>
      </div>

      {/* 3. Blueprint Grid & Roadmap Container */}
      <div className="relative w-full pb-28 pt-10">
        
        {/* Subtle Background Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Hero Title */}
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2 relative z-10 mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-wider text-white uppercase drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]">
            CYBER SECURITY LEARNING ROADMAP
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
            From fundamental principles to advanced techniques, this roadmap provides clear steps and essential resources to help you build a robust skill set.
          </p>
        </div>

        {/* 4. TOP FOUNDATION TILES WITH GLASSMORPHISM & NEON FLOWLINES */}
        <div className="max-w-xl mx-auto px-4 relative z-10 space-y-6">
          {FOUNDATIONS.map((item, index) => (
            <div key={item.id} className="relative flex flex-col items-center">
              
              {/* Frosted Glass Pill Tile */}
              <div className="w-full flex items-center justify-between rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden transition-all duration-300">
                
                {/* Glowing Left Color Block */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${item.iconBg} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>

                {/* Center Content */}
                <div className="flex-1 px-4 sm:px-6 text-left">
                  <h3 className="text-xs sm:text-sm font-black text-white tracking-wider">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase block mt-0.5">
                    {item.badge}
                  </span>
                </div>

                {/* Right Subtle Arrow */}
                <div className="pr-5 text-zinc-600">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              {/* Connecting Down Arrow Flowline */}
              {index < FOUNDATIONS.length - 1 && (
                <div className="my-1.5 flex flex-col items-center">
                  <div className="w-[2px] h-5 bg-gradient-to-b from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                  <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-blue-500"></div>
                </div>
              )}

            </div>
          ))}

          {/* Connection to Career Skills Box */}
          <div className="flex flex-col items-center my-2">
            <div className="w-[2px] h-7 bg-gradient-to-b from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-purple-500"></div>
          </div>
        </div>

        {/* 5. CENTER FROSTED GLASS BOX: CYBER SECURITY CAREER SKILLS */}
        <div className="max-w-xl mx-auto px-4 relative z-10">
          <div className="p-7 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] text-center space-y-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-rose-500/5 pointer-events-none"></div>
            <h2 className="text-base sm:text-xl font-black tracking-widest text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              CYBER SECURITY CAREER SKILLS
            </h2>
            <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed font-light">
              Master the specific skills necessary for your career of interest. Not sure which path is right for you? Explore our tracks below.
            </p>
          </div>
        </div>

        {/* Horizontal Neon Circuit Branch to 4 Columns */}
        <div className="max-w-6xl mx-auto px-8 relative hidden lg:block my-6">
          <div className="w-[2px] h-6 bg-purple-500/80 shadow-[0_0_8px_rgba(168,85,247,0.8)] mx-auto"></div>
          <div className="w-full h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-rose-500 shadow-[0_0_10px_rgba(168,85,247,0.6)] relative">
            <div className="absolute left-[12.5%] -top-0 w-[2px] h-5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
            <div className="absolute left-[37.5%] -top-0 w-[2px] h-5 bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
            <div className="absolute left-[62.5%] -top-0 w-[2px] h-5 bg-rose-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
            <div className="absolute left-[87.5%] -top-0 w-[2px] h-5 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
          </div>
        </div>

        {/* 6. BOTTOM 4 FROSTED GLASS CAREER COLUMNS */}
        <main className="max-w-7xl mx-auto px-4 md:px-8 pt-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREER_TRACKS.map((col, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                
                {/* Column Header */}
                <div className="text-center pb-2 border-b border-white/5">
                  <h3 className={`text-sm sm:text-base font-black tracking-wider uppercase ${col.headerColor}`}>
                    {col.category}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5 font-medium">
                    {col.subtitle}
                  </p>
                </div>

                {/* Cards in Column */}
                <div className="space-y-3 flex-1">
                  {col.items.map((card, cardIdx) => (
                    <div
                      key={cardIdx}
                      className={`flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 ${col.cardBorderGlow}`}
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        
                        {/* Glowing Icon Block */}
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${card.iconGlow}`}>
                          {card.icon}
                        </div>

                        {/* Title & Level */}
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-white tracking-wide truncate">
                            {card.title}
                          </h4>
                          <span className="text-[9px] font-mono font-bold text-zinc-400 block mt-0.5">
                            {card.level}
                          </span>
                        </div>
                      </div>

                      {/* SOON Neon Badge */}
                      {card.isSoon && (
                        <span className="text-[8px] font-mono font-black px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_10px_rgba(6,182,212,0.4)] shrink-0">
                          SOON
                        </span>
                      )}
                    </div>
                  ))}

                  {/* AI SECURITY SPECIAL GLOWING CYBORG ROBOT */}
                  {col.category === 'AI SECURITY' && (
                    <div className="relative pt-6 flex flex-col items-center">
                      
                      {/* Purple Energy Beams */}
                      <div className="absolute top-0 w-28 h-20 border-t-2 border-l-2 border-r-2 border-purple-500/80 rounded-t-full shadow-[0_0_25px_rgba(168,85,247,0.8)]"></div>
                      
                      {/* Neon Energy Orb */}
                      <div className="w-3.5 h-3.5 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(192,132,252,1)] animate-ping mb-3"></div>

                      {/* Cyber Robotic Guardian */}
                      <div className="text-5xl drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] select-none">
                        🤖
                      </div>
                      <span className="text-[9px] font-mono font-bold text-purple-300 mt-2 tracking-widest drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">
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

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a0e1a]/80 backdrop-blur-md py-6 text-center text-xs font-mono text-zinc-500">
        CYBERMATRIX ACADEMY // ARCHITECTED BY NINAD PAWAR // ROADMAP SECURE
      </footer>

    </div>
  );
}