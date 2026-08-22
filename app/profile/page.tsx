'use client';

import Link from 'next/link';
import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import { 
  Shield, 
  ArrowLeft, 
  Trophy, 
  Flame, 
  Award, 
  Terminal, 
  CheckCircle2, 
  Calendar, 
  ExternalLink,
  Target,
  Zap,
  Lock
} from "lucide-react";

export default function ProfilePage() {
  const user = {
    name: 'Ninad Pawar',
    handle: '@root_ninad',
    role: 'Lead Security Operative',
    rank: '#1 Global',
    score: 750,
    streak: 7,
    completedLabs: 14,
    totalLabs: 20,
  };

  const badges = [
    { title: 'Root Conqueror', desc: 'Captured root flags in all core VAPT labs', icon: Shield, unlocked: true },
    { title: 'Memory Triage Pro', desc: 'Identified injected DLLs in Volatility 3', icon: Zap, unlocked: true },
    { title: 'Cloud Infiltrator', desc: 'Exploited AWS metadata SSRF endpoints', icon: Target, unlocked: true },
    { title: 'Kerberoast Master', desc: 'Cracked active directory service tickets', icon: Lock, unlocked: false },
  ];

  const recentSubmissions = [
    { lab: 'Offensive VAPT: Module 03', flag: 'FLAG{NINAD_PAWAR_ROOT}', pts: '+500 PTS', date: 'Today' },
    { lab: 'Cloud Hardening: S3 Audit', flag: 'FLAG{CYBER_MATRIX_SQLI}', pts: '+300 PTS', date: 'Yesterday' },
    { lab: 'Network Recon: Nmap 101', flag: 'FLAG{RECON_DONE}', pts: '+100 PTS', date: '2 days ago' },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      <CyberSmokeHeader />

      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition" />
            <span>← RETURN TO OPERATIVE DASHBOARD</span>
          </Link>
          <div className="text-xs text-zinc-500 font-bold">
            SECURITY CLEARANCE: LEVEL 4 // CLASSIFIED
          </div>
        </div>

        {/* Profile Card Header */}
        <div className="p-6 rounded-2xl bg-zinc-900/80 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold text-zinc-100">{user.name}</h2>
                <span className="text-xs text-cyan-400 font-normal">{user.handle}</span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">{user.role}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-bold">
                  {user.rank}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold">
                  SEASON 2026 TOP GUN
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 w-full md:w-auto border-t md:border-t-0 border-zinc-800 pt-4 md:pt-0 justify-around">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 text-yellow-400 font-bold text-base">
                <Trophy className="w-4 h-4" />
                <span>{user.score}</span>
              </div>
              <p className="text-[10px] text-zinc-500 mt-0.5">TOTAL PTS</p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 text-orange-400 font-bold text-base">
                <Flame className="w-4 h-4" />
                <span>{user.streak} Days</span>
              </div>
              <p className="text-[10px] text-zinc-500 mt-0.5">ACTIVE STREAK</p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 text-cyan-400 font-bold text-base">
                <CheckCircle2 className="w-4 h-4" />
                <span>{user.completedLabs}/{user.totalLabs}</span>
              </div>
              <p className="text-[10px] text-zinc-500 mt-0.5">LABS CLEARED</p>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Badges & Submissions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Unlocked Badges */}
          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-cyan-500/20 backdrop-blur-md space-y-4">
            <h3 className="text-xs font-bold text-cyan-400 flex items-center space-x-2 border-b border-zinc-800 pb-3">
              <Award className="w-4 h-4" />
              <span>EARNED SPECIALIZATION BADGES</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {badges.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border transition flex flex-col justify-between space-y-2 ${
                      b.unlocked
                        ? 'bg-zinc-950 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                        : 'bg-zinc-950/40 border-zinc-800 opacity-40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg ${b.unlocked ? 'bg-cyan-500/10 text-cyan-400' : 'bg-zinc-900 text-zinc-600'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                        {b.unlocked ? 'UNLOCKED' : 'LOCKED'}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-200">{b.title}</p>
                      <p className="text-[10px] text-zinc-500 mt-0.5 leading-snug">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Flag Verification Logs */}
          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-cyan-500/20 backdrop-blur-md space-y-4">
            <h3 className="text-xs font-bold text-cyan-400 flex items-center space-x-2 border-b border-zinc-800 pb-3">
              <Terminal className="w-4 h-4" />
              <span>RECENT FLAG SUBMISSION LOGS</span>
            </h3>

            <div className="space-y-3">
              {recentSubmissions.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/90 flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <p className="font-bold text-zinc-200">{sub.lab}</p>
                    <p className="text-[10px] text-zinc-500 font-mono">{sub.flag}</p>
                  </div>
                  <div className="text-right space-y-0.5">
                    <span className="text-[11px] font-bold text-green-400">{sub.pts}</span>
                    <p className="text-[9px] text-zinc-600">{sub.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/courses"
                className="w-full py-2.5 rounded-xl bg-zinc-900 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition text-xs font-bold flex items-center justify-center space-x-2"
              >
                <span>CONTINUE TACTICAL TRAINING</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <StudentAIAssistant />
    </main>
  );
}
