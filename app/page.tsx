import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import { CTFTerminal } from "@/components/CTFTerminal";
import { CTFFlagSubmit } from "@/components/CTFFlagSubmit";
import { Leaderboard } from "@/components/Leaderboard";
import { BookOpen, Terminal, ShieldAlert, Cpu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-12">
      <CyberSmokeHeader />

      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
          <div className="flex items-center space-x-2 text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>CYBER LAB STATUS: OPERATIONAL</span>
          </div>
          <Link
            href="/courses"
            className="text-xs px-3.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition font-bold"
          >
            VIEW ALL COURSES →
          </Link>
        </div>

        {/* Top Grid: Expanded 2-Part Security Tracks + Compact Flag Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* SECURITY TRACKS (Expanded into 2 Parts / Spanning 2 Columns) */}
          <div className="lg:col-span-2 p-4 rounded-2xl bg-zinc-900/80 border border-cyan-500/20 backdrop-blur-md flex flex-col justify-between h-[210px]">
            <h2 className="text-xs font-bold text-cyan-400 flex items-center space-x-1.5 border-b border-cyan-500/20 pb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>SECURITY TRACKS (OPERATIVE PATHWAYS)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 flex-1 items-center pt-1">
              {/* Part 1 */}
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition cursor-pointer flex items-start space-x-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-100">Offensive Security & VAPT</p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">OWASP Top 10, Burp Suite, Exploits</p>
                </div>
              </div>

              {/* Part 2 */}
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition cursor-pointer flex items-start space-x-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-100">Cloud & Defense Hardening</p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">AWS IAM, SIEM, DFIR Playbooks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Flag Engine (1 Column) */}
          <div className="lg:col-span-1">
            <CTFFlagSubmit />
          </div>
        </div>

        {/* Bottom Grid: Sandbox Terminal & Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          <div className="lg:col-span-2 space-y-2.5">
            <h2 className="text-xs font-bold text-cyan-400 flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>LIVE CTF ATTACK SANDBOX</span>
            </h2>
            <CTFTerminal />
          </div>

          <div className="lg:col-span-1 space-y-2.5">
            <Leaderboard />
          </div>
        </div>
      </div>

      {/* Floating AI Mentor Button */}
      <StudentAIAssistant />
    </main>
  );
}
