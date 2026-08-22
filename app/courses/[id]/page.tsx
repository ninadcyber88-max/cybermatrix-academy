'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import { CTFTerminal } from "@/components/CTFTerminal";
import { CTFFlagSubmit } from "@/components/CTFFlagSubmit";
import { ArrowLeft, BookOpen, Terminal, CheckCircle2, PlayCircle, ShieldAlert, Cpu, Award } from "lucide-react";

interface LabModule {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  instructions: string;
}

const LAB_MODULES: Record<string, LabModule[]> = {
  'vapt-101': [
    {
      id: 'm1',
      title: 'Module 01: Reconnaissance & Target Probing',
      duration: '45 mins',
      completed: true,
      instructions: 'Run `nmap -sV 10.10.14.88` to identify open HTTP and SSH ports on the target host.',
    },
    {
      id: 'm2',
      title: 'Module 02: SQL Injection & Auth Bypass',
      duration: '60 mins',
      completed: false,
      instructions: 'Inject boolean payloads into the login form or run `sqlmap` in the terminal to dump the flags database.',
    },
    {
      id: 'm3',
      title: 'Module 03: Linux Privilege Escalation via SUID',
      duration: '90 mins',
      completed: false,
      instructions: 'Search for SUID binaries using `find / -perm -u=s -type f 2>/dev/null` and read `flag.txt`.',
    },
  ],
  'dfir-201': [
    {
      id: 'd1',
      title: 'Module 01: Windows Memory Dump Acquisition',
      duration: '60 mins',
      completed: true,
      instructions: 'Inspect `mem.raw` using Volatility 3 `windows.pslist` to identify rogue processes.',
    },
    {
      id: 'd2',
      title: 'Module 02: Prefetch & Shimcache Execution Proof',
      duration: '75 mins',
      completed: false,
      instructions: 'Extract timestamps of executed malware from `C:\\Windows\\Prefetch` and trace the infection vector.',
    },
  ],
};

export default function CourseLabPlayer() {
  const params = useParams();
  const courseId = (params?.id as string) || 'vapt-101';
  const modules = LAB_MODULES[courseId] || LAB_MODULES['vapt-101'];

  const [activeModule, setActiveModule] = useState<LabModule>(modules[0]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      <CyberSmokeHeader />

      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
          <Link
            href="/courses"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition" />
            <span>← ALL COURSES</span>
          </Link>
          <div className="flex items-center space-x-2 text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>LAB INSTANCE: ACTIVE (10.10.14.88)</span>
          </div>
        </div>

        {/* 2-Column Lab Layout: Left Modules / Right Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column (5 Cols) -> Modules Syllabus & Lab Objectives */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Lab Objective Card */}
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-cyan-500/30 backdrop-blur-md space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
                <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  CURRENT OBJECTIVE
                </span>
                <span className="text-[10px] text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                  {activeModule.duration}
                </span>
              </div>
              <h3 className="text-sm font-bold text-zinc-100">{activeModule.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed bg-zinc-950 p-3 rounded-xl border border-zinc-800/80">
                {activeModule.instructions}
              </p>
            </div>

            {/* Modules Playlist */}
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-cyan-500/20 space-y-3">
              <h4 className="text-xs font-bold text-zinc-300 flex items-center gap-2 border-b border-zinc-800 pb-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                COURSE MODULES
              </h4>
              <div className="space-y-2">
                {modules.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveModule(m)}
                    className={`w-full text-left p-3 rounded-xl transition flex items-center justify-between text-xs border ${
                      activeModule.id === m.id
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {m.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      ) : (
                        <PlayCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      )}
                      <span className="font-semibold truncate">{m.title}</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 ml-2">{m.duration}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Flag Submission */}
            <CTFFlagSubmit />
          </div>

          {/* Right Column (7 Cols) -> Integrated Attack Sandbox */}
          <div className="lg:col-span-7 space-y-3">
            <h2 className="text-xs font-bold text-cyan-400 flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>LIVE ATTACK SANDBOX // EXPLOITATION ENVIRONMENT</span>
            </h2>
            <div className="h-[490px]">
              <CTFTerminal />
            </div>
          </div>

        </div>
      </div>

      <StudentAIAssistant />
    </main>
  );
}
