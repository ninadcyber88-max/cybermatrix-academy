'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import { CTFTerminal } from "@/components/CTFTerminal";
import { CTFFlagSubmit } from "@/components/CTFFlagSubmit";
import { 
  ArrowLeft, 
  Terminal, 
  ShieldAlert, 
  Cpu, 
  Activity, 
  Zap, 
  Server, 
  Network, 
  Play, 
  RefreshCw, 
  CheckCircle2 
} from "lucide-react";

interface TargetMachine {
  id: string;
  name: string;
  ip: string;
  os: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Insane';
  services: string[];
  status: 'Running' | 'Booting' | 'Offline';
}

const TARGETS: TargetMachine[] = [
  {
    id: 't1',
    name: 'Metasploitable Web V2',
    ip: '10.10.14.88',
    os: 'Ubuntu Linux 22.04 LTS',
    difficulty: 'Easy',
    services: ['HTTP (80)', 'SSH (22)', 'MySQL (3306)'],
    status: 'Running',
  },
  {
    id: 't2',
    name: 'Corp-DC-Windows-AD',
    ip: '10.10.14.102',
    os: 'Windows Server 2022',
    difficulty: 'Hard',
    services: ['Kerberos (88)', 'LDAP (389)', 'SMB (445)'],
    status: 'Running',
  },
  {
    id: 't3',
    name: 'Cloud-Bucket-Gateway',
    ip: '10.10.14.215',
    os: 'Alpine Container / AWS IMDS',
    difficulty: 'Medium',
    services: ['API Proxy (8080)', 'SSRF Gateway'],
    status: 'Running',
  },
];

export default function CTFArenaPage() {
  const [selectedTarget, setSelectedTarget] = useState<TargetMachine>(TARGETS[0]);
  const [resetting, setResetting] = useState(false);

  const handleResetTarget = () => {
    setResetting(true);
    setTimeout(() => {
      setResetting(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      <CyberSmokeHeader />

      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
        
        {/* Navigation & Live HUD */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-3">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition" />
            <span>← RETURN TO DASHBOARD</span>
          </Link>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1.5 text-green-400 bg-green-500/10 px-2.5 py-1 rounded-lg border border-green-500/20">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>VPN TUNNEL: CONNECTED (tun0: 10.10.14.2)</span>
            </div>
          </div>
        </div>

        {/* 3-Column Arena Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Column 1 (4 Cols): Target Machines & Control Deck */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Target Controller */}
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-cyan-500/30 backdrop-blur-md space-y-4 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
                <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <Server className="w-4 h-4" />
                  TARGET MATRIX
                </span>
                <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/30">
                  {selectedTarget.status}
                </span>
              </div>

              <div className="space-y-2">
                {TARGETS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTarget(t)}
                    className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between text-xs cursor-pointer ${
                      selectedTarget.id === t.id
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      <p className="font-bold text-zinc-200">{t.name}</p>
                      <p className="text-[10px] text-cyan-400/80 mt-0.5">{t.ip}</p>
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${
                      t.difficulty === 'Easy'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : t.difficulty === 'Medium'
                        ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {t.difficulty}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected Target Specs */}
              <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>OS Architecture:</span>
                  <span className="text-zinc-200 font-bold">{selectedTarget.os}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Open Ports:</span>
                  <span className="text-cyan-400">{selectedTarget.services.join(', ')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-1">
                <button
                  onClick={handleResetTarget}
                  disabled={resetting}
                  className="flex-1 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs flex items-center justify-center space-x-1.5 transition cursor-pointer border border-zinc-700"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${resetting ? 'animate-spin text-cyan-400' : ''}`} />
                  <span>{resetting ? 'Rebooting VM...' : 'Reset Target'}</span>
                </button>
              </div>
            </div>

            {/* Quick Flag Submission */}
            <CTFFlagSubmit />
          </div>

          {/* Column 2 (8 Cols): Attack Sandbox Terminal */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-cyan-400 flex items-center space-x-2">
                <Terminal className="w-4 h-4" />
                <span>ROOT EXPLOITATION TERMINAL // ACTIVE TARGET: {selectedTarget.ip}</span>
              </h2>
              <span className="text-[10px] text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                TTY SHELL // ROOT ACCESS READY
              </span>
            </div>

            <div className="h-[540px]">
              <CTFTerminal />
            </div>
          </div>

        </div>
      </div>

      <StudentAIAssistant />
    </main>
  );
}
