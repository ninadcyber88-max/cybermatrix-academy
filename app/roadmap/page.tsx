'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Circle, 
  Lock, 
  ShieldCheck, 
  Terminal, 
  Flame, 
  Award, 
  Cpu, 
  ArrowRight,
  Crosshair,
  Layers,
  Sparkles
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

interface Milestone {
  id: string;
  title: string;
  description: string;
  skills: string[];
  courseId: string;
  points: number;
}

interface CareerTrack {
  id: string;
  tier: string;
  title: string;
  roleDescription: string;
  estimatedTime: string;
  badgeColor: string;
  milestones: Milestone[];
}

const ROADMAP_DATA: CareerTrack[] = [
  {
    id: 'tier-1',
    tier: 'TIER 01 // LEVEL: NOVICE',
    title: 'Cyber Foundations & OS Architecture',
    roleDescription: 'Build core networking, Linux administration, TCP/IP mechanics, and Windows registry fundamentals.',
    estimatedTime: '4 - 6 Weeks',
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    milestones: [
      {
        id: 'm1-1',
        title: 'Networking & TCP/IP Stack Fundamentals',
        description: 'Understand OSI layers, packet flow, DNS records, subnets, and packet analysis via Wireshark.',
        skills: ['Wireshark', 'TCP/IP', 'Subnetting', 'Routing'],
        courseId: 'win-fund',
        points: 150
      },
      {
        id: 'm1-2',
        title: 'Linux CLI & SUID Hardening',
        description: 'Master bash scripting, file system hierarchy, permissions, and SUID/SGID audit mechanisms.',
        skills: ['Bash', 'File Permissions', 'SUID Audit', 'Cronjobs'],
        courseId: 'linux-mast',
        points: 200
      }
    ]
  },
  {
    id: 'tier-2',
    tier: 'TIER 02 // LEVEL: DEFENSIVE SPECIALIST',
    title: 'SOC Analyst & DFIR Operations',
    roleDescription: 'Triage live SIEM security alerts, analyze memory dumps, perform registry triage, and mitigate incidents.',
    estimatedTime: '6 - 8 Weeks',
    badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    milestones: [
      {
        id: 'm2-1',
        title: 'SIEM Triage & Threat Intelligence Correlation',
        description: 'Analyze Splunk and ELK stack log streams, detect brute-force surges, and track lateral movement.',
        skills: ['Splunk', 'ELK', 'MITRE ATT&CK', 'Log Correlation'],
        courseId: 'soc-dfir-102',
        points: 350
      },
      {
        id: 'm2-2',
        title: 'Digital Forensics & Memory Analysis (Volatility)',
        description: 'Extract process trees from memory dumps, analyze registry hives, and trace malware footprints.',
        skills: ['Volatility 3', 'Autopsy', 'FTK Imager', 'RAM Triage'],
        courseId: 'soc-dfir-102',
        points: 400
      }
    ]
  },
  {
    id: 'tier-3',
    tier: 'TIER 03 // LEVEL: OFFENSIVE OPERATOR',
    title: 'VAPT & Web Application Penetration Testing',
    roleDescription: 'Discover and exploit OWASP Top 10 vulnerabilities, bypass Web Application Firewalls, and write PoC scripts.',
    estimatedTime: '8 - 12 Weeks',
    badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    milestones: [
      {
        id: 'm3-1',
        title: 'Reconnaissance & Attack Surface Mapping',
        description: 'Automate subdomain brute-forcing, JavaScript API endpoint extraction, and service fingerprinting.',
        skills: ['Nmap', 'Amass', 'Sublist3r', 'Burp Suite Pro'],
        courseId: 'off-sec-101',
        points: 500
      },
      {
        id: 'm3-2',
        title: 'OWASP Top 10 Exploitation & Logic Bypasses',
        description: 'Execute SQL Injection (Time/Error based), Stored XSS, SSRF, and JWT token forging attacks.',
        skills: ['SQLMap', 'XSS Hunter', 'JWT Tools', 'CSRF PoC'],
        courseId: 'off-sec-101',
        points: 650
      }
    ]
  },
  {
    id: 'tier-4',
    tier: 'TIER 04 // LEVEL: LEAD SECURITY ARCHITECT',
    title: 'Active Directory & Red Team Operations',
    roleDescription: 'Compromise domain controllers, execute Kerberoasting attacks, evade modern EDRs, and craft custom shellcodes.',
    estimatedTime: '12+ Weeks',
    badgeColor: 'text-rose-500 border-rose-500/30 bg-rose-500/10',
    milestones: [
      {
        id: 'm4-1',
        title: 'Active Directory Exploitation & Kerberoasting',
        description: 'Enumerate domain trusts with BloodHound, execute AS-REP roasting, pass-the-hash, and Golden Ticket forgery.',
        skills: ['BloodHound', 'Mimikatz', 'Impacket', 'Rubeus'],
        courseId: 'net-infra-201',
        points: 850
      },
      {
        id: 'm4-2',
        title: 'Binary Exploitation & Buffer Overflow (x86/x64)',
        description: 'Disassemble binaries in Ghidra, craft custom shellcodes, and construct ROP chains to bypass DEP/NX.',
        skills: ['GDB-Peda', 'Ghidra', 'Assembly', 'ROP Chains'],
        courseId: 'bin-exp-301',
        points: 1000
      }
    ]
  }
];

export default function CareerRoadmapPage() {
  const [completedMilestones, setCompletedMilestones] = useState<string[]>(['m1-1']);

  const toggleMilestone = (id: string) => {
    if (completedMilestones.includes(id)) {
      setCompletedMilestones(completedMilestones.filter((m) => m !== id));
    } else {
      setCompletedMilestones([...completedMilestones, id]);
    }
  };

  const totalMilestones = ROADMAP_DATA.flatMap((t) => t.milestones).length;
  const progressPercentage = Math.round((completedMilestones.length / totalMilestones) * 100);

  return (
    <div className="min-h-screen bg-[#1b2234] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* 1. Global Header */}
      <CyberSmokeHeader />

      {/* 2. Top Navigation Sub-Header */}
      <div className="bg-[#141b2b] border-b border-zinc-800/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
          
          <div className="flex items-center space-x-6 sm:space-x-8 text-xs font-mono tracking-wider font-bold">
            <button className="text-cyan-400 font-extrabold py-4 relative">
              ROADMAP
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
            </button>
            <Link href="/courses" className="text-zinc-400 hover:text-zinc-200 py-4">COURSES</Link>
            <Link href="/walkthroughs" className="text-zinc-400 hover:text-zinc-200 py-4">WALKTHROUGHS</Link>
            <Link href="/courses" className="text-zinc-400 hover:text-zinc-200 py-4">CVE</Link>
          </div>

          {/* Progress Widget */}
          <div className="hidden sm:flex items-center space-x-3 text-xs font-mono">
            <span className="text-zinc-400">PATHWAY PROGRESS:</span>
            <div className="w-32 h-2 rounded-full bg-zinc-900 border border-zinc-700 overflow-hidden">
              <div 
                className="h-full bg-cyan-400 transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <span className="text-cyan-300 font-bold">{progressPercentage}%</span>
          </div>

        </div>
      </div>

      {/* 3. Hero Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-2xl bg-[#131929] border border-zinc-800">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono font-bold uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>OFFICIAL OPERATIVE CURRICULUM // ARCHITECTED BY NINAD PAWAR</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Cybersecurity Operative Career Roadmap
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
              Progress from absolute foundations to Red Team Lead Architect. Check off completed objectives to synchronize your live matrix standing.
            </p>
          </div>

          <div className="flex items-center space-x-4 bg-[#0e1322] border border-zinc-800 px-4 py-3 rounded-xl font-mono text-xs shrink-0">
            <div>
              <p className="text-zinc-500">OBJECTIVES DONE</p>
              <p className="text-base font-black text-cyan-300">{completedMilestones.length} / {totalMilestones}</p>
            </div>
            <div className="w-px h-8 bg-zinc-800"></div>
            <div>
              <p className="text-zinc-500">OPERATIVE RANK</p>
              <p className="text-base font-black text-emerald-400">TIER {Math.min(completedMilestones.length + 1, 4)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Interactive Pathway Roadmap Tracks */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 pb-16 space-y-8">
        {ROADMAP_DATA.map((track, trackIdx) => (
          <div 
            key={track.id} 
            className="p-6 rounded-2xl bg-[#131a2e] border border-zinc-800/90 shadow-lg space-y-6"
          >
            {/* Track Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800">
              <div>
                <span className={`inline-block text-[10px] font-mono font-black px-2.5 py-0.5 rounded-full border mb-1.5 ${track.badgeColor}`}>
                  {track.tier}
                </span>
                <h2 className="text-xl font-black text-white">{track.title}</h2>
                <p className="text-xs text-zinc-400 mt-0.5">{track.roleDescription}</p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-[11px] font-mono text-zinc-500">ESTIMATED DURATION:</span>
                <p className="text-xs font-mono font-bold text-cyan-400">{track.estimatedTime}</p>
              </div>
            </div>

            {/* Milestones Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {track.milestones.map((milestone) => {
                const isCompleted = completedMilestones.includes(milestone.id);

                return (
                  <div
                    key={milestone.id}
                    className={`p-5 rounded-xl border transition-all flex flex-col justify-between ${
                      isCompleted
                        ? 'bg-[#0f1526] border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                        : 'bg-[#101626] border-zinc-800/80 hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      {/* Checkbox Trigger & Points */}
                      <div className="flex items-center justify-between mb-2">
                        <button
                          onClick={() => toggleMilestone(milestone.id)}
                          className="flex items-center space-x-2 text-xs font-mono font-bold transition"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-zinc-600 hover:text-zinc-400 shrink-0" />
                          )}
                          <span className={isCompleted ? 'text-emerald-300' : 'text-zinc-400'}>
                            {isCompleted ? 'COMPLETED' : 'MARK COMPLETE'}
                          </span>
                        </button>

                        <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-zinc-950 text-cyan-400 border border-zinc-800">
                          +{milestone.points} PTS
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-white mb-1.5 mt-1">
                        {milestone.title}
                      </h3>

                      <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                        {milestone.description}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {milestone.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Launch Lab Action */}
                    <Link
                      href={`/courses/${milestone.courseId}`}
                      className="mt-2 flex items-center justify-between px-3 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 hover:text-black text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold transition group"
                    >
                      <span>LAUNCH LAB SANDBOX</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-[#141b2b] py-6 text-center text-xs font-mono text-zinc-500">
        CYBERMATRIX ACADEMY // ARCHITECTED BY NINAD PAWAR // DEFENSE MATRIX ACTIVE
      </footer>

    </div>
  );
}