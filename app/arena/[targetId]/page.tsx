'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import { CTFTerminal } from "@/components/CTFTerminal";
import { CTFFlagSubmit } from "@/components/CTFFlagSubmit";
import { 
  ArrowLeft, 
  Terminal, 
  Server, 
  ShieldAlert, 
  Activity, 
  CheckCircle2, 
  Copy, 
  Check, 
  RefreshCw,
  Cpu,
  Layers
} from "lucide-react";

interface TargetConfig {
  name: string;
  ip: string;
  os: string;
  difficulty: string;
  scenario: string;
  openPorts: string[];
  tasks: { id: number; title: string; hint: string }[];
}

const TARGET_REGISTRY: Record<string, TargetConfig> = {
  't1': {
    name: 'Metasploitable Web V2',
    ip: '10.10.14.88',
    os: 'Ubuntu Linux 22.04 LTS',
    difficulty: 'Easy',
    scenario: 'Target is hosting an unpatched internal portal with multiple injection vulnerabilities.',
    openPorts: ['22/TCP (SSH OpenSSH 8.9)', '80/TCP (HTTP Apache 2.4)', '3306/TCP (MySQL 8.0)'],
    tasks: [
      { id: 1, title: 'Network Service Discovery', hint: 'Run `nmap -sV -sC 10.10.14.88` to map open ports.' },
      { id: 2, title: 'Bypass Admin Auth', hint: 'Inject `\' OR 1=1 -- -` on HTTP port 80.' },
      { id: 3, title: 'Capture Flag in /root', hint: 'Inspect SUID binary `/usr/bin/find`.' }
    ]
  },
  't2': {
    name: 'Corp-DC-Windows-AD',
    ip: '10.10.14.102',
    os: 'Windows Server 2022',
    difficulty: 'Hard',
    scenario: 'Simulated Active Directory Domain Controller with vulnerable service accounts and Kerberos tickets.',
    openPorts: ['88/TCP (Kerberos)', '389/TCP (LDAP)', '445/TCP (SMB Microsoft-DS)'],
    tasks: [
      { id: 1, title: 'Enumerate Domain Users', hint: 'Use `rpcclient -U "" 10.10.14.102` with null session.' },
      { id: 2, title: 'Extract SPN Kerberos Ticket', hint: 'Run `GetUserSPNs.py corp.local/guest -request`.' },
      { id: 3, title: 'Pass-the-Hash to Domain Admin', hint: 'Exploit Administrator NTLM hash with wmiexec.' }
    ]
  },
  't3': {
    name: 'Cloud-Bucket-Gateway',
    ip: '10.10.14.215',
    os: 'Alpine Linux Container / IMDS',
    difficulty: 'Medium',
    scenario: 'Microservice API gateway susceptible to Server-Side Request Forgery against cloud metadata service.',
    openPorts: ['8080/TCP (HTTP Proxy)', '9090/TCP (Prometheus Metrics)'],
    tasks: [
      { id: 1, title: 'Locate SSRF Parameter', hint: 'Inspect `/api/fetch?url=` endpoint parameter.' },
      { id: 2, title: 'Dump AWS IAM Security Credentials', hint: 'Request `http://169.254.169.254/latest/meta-data/iam/security-credentials/`.' },
      { id: 3, title: 'Exfiltrate S3 Production Bucket', hint: 'Use stolen STS session tokens to sync bucket data.' }
    ]
  }
};

export default function DedicatedTargetSandbox() {
  const params = useParams();
  const targetId = (params?.targetId as string) || 't1';
  const target = TARGET_REGISTRY[targetId] || TARGET_REGISTRY['t1'];

  const [copiedIp, setCopiedIp] = useState(false);
  const [resetting, setResetting] = useState(false);

  const handleCopyIp = () => {
    navigator.clipboard.writeText(target.ip);
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  const handleResetVM = () => {
    setResetting(true);
    setTimeout(() => setResetting(false), 1500);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      <CyberSmokeHeader />

      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        
        {/* Navigation & Active Target Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/80 pb-3">
          <Link
            href="/arena"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition" />
            <span>← RETURN TO TARGET MATRIX</span>
          </Link>
          <div className="flex items-center space-x-3 text-xs">
            <div className="flex items-center space-x-1.5 text-green-400 bg-green-500/10 px-2.5 py-1 rounded-lg border border-green-500/20">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>CONTAINER POD: ACTIVE ({target.ip})</span>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Info & Controls on Left, Live Terminal on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Target Machine Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-cyan-500/30 backdrop-blur-md space-y-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
                <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <Server className="w-4 h-4" />
                  {target.name}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  {target.difficulty}
                </span>
              </div>

              {/* IP Copy Box */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs">
                <span className="text-zinc-400">Target IP Address:</span>
                <button
                  onClick={handleCopyIp}
                  className="flex items-center space-x-1.5 font-bold text-cyan-300 hover:text-cyan-200 transition"
                >
                  <span>{target.ip}</span>
                  {copiedIp ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* OS & Scenario */}
              <div className="space-y-1.5 text-xs">
                <p className="text-zinc-400"><strong>OS Architecture:</strong> {target.os}</p>
                <p className="text-zinc-400 leading-relaxed"><strong>Scenario:</strong> {target.scenario}</p>
              </div>

              {/* Open Ports */}
              <div className="space-y-1 text-xs">
                <span className="text-[10px] text-zinc-500 font-bold uppercase">Detected Services:</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {target.openPorts.map((p, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-cyan-400">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reboot Button */}
              <button
                onClick={handleResetVM}
                disabled={resetting}
                className="w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs flex items-center justify-center space-x-2 transition border border-zinc-700"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${resetting ? 'animate-spin text-cyan-400' : ''}`} />
                <span>{resetting ? 'Rebooting Sandbox Target...' : 'Reboot VM Instance'}</span>
              </button>
            </div>

            {/* Tactical Tasks / Attack Guide */}
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-cyan-500/20 backdrop-blur-md space-y-3">
              <h3 className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 border-b border-zinc-800 pb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>TACTICAL LAB OBJECTIVES</span>
              </h3>
              <div className="space-y-2">
                {target.tasks.map((task) => (
                  <div key={task.id} className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-1 text-xs">
                    <p className="font-bold text-zinc-200">{task.id}. {task.title}</p>
                    <p className="text-[10px] text-zinc-400 font-mono">{task.hint}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Flag Verification */}
            <CTFFlagSubmit />
          </div>

          {/* Right Column (7 Cols): Root Attack Shell */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-cyan-400 flex items-center space-x-2">
                <Terminal className="w-4 h-4" />
                <span>INTERACTIVE ROOT EXPLOITATION SHELL // TARGET: {target.ip}</span>
              </h2>
              <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/30">
                TTY LIVE
              </span>
            </div>

            <div className="h-[560px]">
              <CTFTerminal />
            </div>
          </div>

        </div>
      </div>

      <StudentAIAssistant />
    </main>
  );
}
