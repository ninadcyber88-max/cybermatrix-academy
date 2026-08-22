import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import { CTFTerminal } from "@/components/CTFTerminal";
import { CTFFlagSubmit } from "@/components/CTFFlagSubmit";
import { Leaderboard } from "@/components/Leaderboard";
import { BookOpen, Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-12">
      {/* Top Smoke Header */}
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
            VIEW COURSES →
          </Link>
        </div>

        {/* Main 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column (Width: 5 Cols) -> Tracks + Flag Engine */}
          <div className="lg:col-span-5 space-y-5">
            {/* Security Tracks */}
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-cyan-500/20 backdrop-blur-md space-y-3">
              <h2 className="text-xs font-bold text-cyan-400 flex items-center space-x-1.5 border-b border-cyan-500/20 pb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>SECURITY TRACKS</span>
              </h2>
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition cursor-pointer">
                  <p className="text-xs font-bold text-zinc-200">Offensive Security & VAPT</p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">Burp Suite, SQLi, Buffer Overflow</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/40 transition cursor-pointer">
                  <p className="text-xs font-bold text-zinc-200">Cloud & Defense Hardening</p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">AWS IAM, SIEM, DFIR Playbooks</p>
                </div>
              </div>
            </div>

            {/* Flag Verification Engine */}
            <CTFFlagSubmit />
          </div>

          {/* Right Column (Width: 7 Cols) -> Live CTF Sandbox Moved Here */}
          <div className="lg:col-span-7 space-y-3">
            <h2 className="text-xs font-bold text-cyan-400 flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>LIVE CTF ATTACK SANDBOX</span>
            </h2>
            <CTFTerminal />
          </div>

        </div>

        {/* Bottom Section: Full Width Leaderboard */}
        <div className="pt-2">
          <Leaderboard />
        </div>
      </div>

      {/* Floating AI Mentor Button */}
      <StudentAIAssistant />
    </main>
  );
}
