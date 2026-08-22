import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import { CTFTerminal } from "@/components/CTFTerminal";
import { BookOpen, Terminal, Flag, Award } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono">
      {/* Top Smoke Header */}
      <CyberSmokeHeader />

      {/* Main Grid Content */}
      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
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

        {/* Top Grid: Security Tracks & AI Mentor */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6 lg:col-span-1">
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-cyan-500/20 backdrop-blur-md">
              <h2 className="text-sm font-bold text-cyan-400 mb-4 flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>SECURITY TRACKS</span>
              </h2>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <p className="text-xs font-bold text-zinc-200">Offensive Security & VAPT</p>
                  <p className="text-[10px] text-zinc-500 mt-1">Burp Suite, SQLi, Buffer Overflow</p>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <p className="text-xs font-bold text-zinc-200">Cloud & Defense Hardening</p>
                  <p className="text-[10px] text-zinc-500 mt-1">AWS IAM, SIEM, DFIR Playbooks</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-cyan-500/20 backdrop-blur-md">
              <h2 className="text-sm font-bold text-cyan-400 mb-3 flex items-center space-x-2">
                <Flag className="w-4 h-4" />
                <span>TARGET OBJECTIVE</span>
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Scan target 10.10.14.88 using the CTF terminal below. Exploit the web vector to obtain the root flag.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <StudentAIAssistant />
          </div>
        </div>

        {/* Bottom Section: CTF Terminal */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-cyan-400 flex items-center space-x-2">
            <Terminal className="w-4 h-4" />
            <span>LIVE CTF ATTACK SANDBOX</span>
          </h2>
          <CTFTerminal />
        </div>
      </div>
    </main>
  );
}
