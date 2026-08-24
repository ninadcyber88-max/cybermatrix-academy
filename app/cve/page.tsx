'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  ShieldAlert, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  Copy, 
  Check, 
  Flame, 
  Terminal, 
  Radio, 
  Bug,
  ShieldCheck
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

interface CVEItem {
  id: string;
  cveId: string;
  title: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  cvssScore: number;
  publishDate: string;
  affectedSoftware: string;
  vector: string;
  pocStatus: 'PUBLIC_POC' | 'IN_THE_WILD' | 'PATCHED_ONLY';
  description: string;
  mitigation: string;
  references: string[];
}

const CVE_DATABASE: CVEItem[] = [
  {
    id: 'cve-1',
    cveId: 'CVE-2026-2184',
    title: 'Linux Kernel eBPF Subsystem Privilege Escalation',
    severity: 'CRITICAL',
    cvssScore: 9.8,
    publishDate: '2026-08-18',
    affectedSoftware: 'Linux Kernel >= 5.15 & < 6.9',
    vector: 'CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H',
    pocStatus: 'IN_THE_WILD',
    description: 'Improper bounds checking in the eBPF bytecode verifier allows local unprivileged users to achieve out-of-bounds kernel memory write and root execution.',
    mitigation: 'Upgrade kernel packages to version 6.9.12 or apply sysctl setting `kernel.unprivileged_bpf_disabled=1`.',
    references: ['https://nvd.nist.gov', 'https://github.com/torvalds/linux']
  },
  {
    id: 'cve-2',
    cveId: 'CVE-2026-3091',
    title: 'OpenSSH Pre-Auth Remote Code Execution (regreSSHion v2)',
    severity: 'CRITICAL',
    cvssScore: 9.6,
    publishDate: '2026-08-10',
    affectedSoftware: 'OpenSSH 8.5p1 through 9.7p1 on glibc-based systems',
    vector: 'CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:C/C:H/I:H/A:H',
    pocStatus: 'PUBLIC_POC',
    description: 'Signal handler race condition in sshd allows unauthenticated remote attackers to execute arbitrary code with root privileges.',
    mitigation: 'Update OpenSSH to 9.8p1 or set `LoginGraceTime 0` in sshd_config as a temporary workaround.',
    references: ['https://www.openssh.com/security.html', 'https://nvd.nist.gov']
  },
  {
    id: 'cve-3',
    cveId: 'CVE-2026-1402',
    title: 'Apache HTTP Server Path Traversal & Source Disclosure',
    severity: 'HIGH',
    cvssScore: 8.4,
    publishDate: '2026-07-28',
    affectedSoftware: 'Apache HTTP Server 2.4.50 through 2.4.58',
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N',
    pocStatus: 'PUBLIC_POC',
    description: 'Flaw in URI path normalization logic enables remote attackers to map URLs to files outside the document root and disclose source scripts.',
    mitigation: 'Upgrade to Apache HTTP Server 2.4.59 or later. Verify that `Require all denied` is enforced on root directives.',
    references: ['https://httpd.apache.org/security/vulnerabilities_24.html']
  },
  {
    id: 'cve-4',
    cveId: 'CVE-2026-0925',
    title: 'Spring Framework SpEL Injection Remote Code Execution',
    severity: 'HIGH',
    cvssScore: 8.8,
    publishDate: '2026-06-14',
    affectedSoftware: 'Spring Framework 6.0.0 - 6.1.4',
    vector: 'CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H',
    pocStatus: 'PATCHED_ONLY',
    description: 'Unsanitized input evaluation via Spring Expression Language (SpEL) parser leads to arbitrary remote command execution in authenticated context.',
    mitigation: 'Upgrade Spring Framework dependencies to 6.1.5 or apply strict SimpleEvaluationContext filters.',
    references: ['https://spring.io/security/cve']
  },
  {
    id: 'cve-5',
    cveId: 'CVE-2026-0418',
    title: 'Windows Active Directory Kerberos PAC Validation Spoofing',
    severity: 'MEDIUM',
    cvssScore: 6.8,
    publishDate: '2026-05-22',
    affectedSoftware: 'Windows Server 2019, 2022, 2025',
    vector: 'CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:N',
    pocStatus: 'PATCHED_ONLY',
    description: 'Privilege escalation vulnerability in Kerberos Key Distribution Center (KDC) allows domain users to forge PAC signatures during ticket granting.',
    mitigation: 'Deploy Microsoft Security Update KB5036893 and enforce PAC signature validation across all Domain Controllers.',
    references: ['https://msrc.microsoft.com']
  }
];

export default function CVETrackerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [severityFilter, setSeverityFilter] = useState<string>('ALL');
  const [copiedCve, setCopiedCve] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCve(text);
    setTimeout(() => setCopiedCve(null), 2000);
  };

  const filteredCVEs = CVE_DATABASE.filter(c => {
    const matchesSearch = c.cveId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.affectedSoftware.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSeverity = severityFilter === 'ALL' || c.severity === severityFilter;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="min-h-screen bg-[#1b2234] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* 1. Global Header */}
      <CyberSmokeHeader />

      {/* 2. Top Navigation Sub-Header */}
      <div className="bg-[#141b2b] border-b border-zinc-800/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
          
          <div className="flex items-center space-x-6 sm:space-x-8 text-xs font-mono tracking-wider font-bold">
            <Link href="/roadmap" className="text-zinc-400 hover:text-zinc-200 py-4">ROADMAP</Link>
            <Link href="/courses" className="text-zinc-400 hover:text-zinc-200 py-4">COURSES</Link>
            <Link href="/walkthroughs" className="text-zinc-400 hover:text-zinc-200 py-4">WALKTHROUGHS</Link>
            <button className="text-cyan-400 font-extrabold py-4 relative">
              CVE
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-2">
            <div className="relative w-48 sm:w-64 md:w-80">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH_CVE_DATABASE..."
                className="w-full pl-9 pr-3 py-1.5 bg-[#1a2338] border border-zinc-700/60 rounded-md text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 3. Hero Header & Filters */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-2xl bg-[#131929] border border-zinc-800">
          <div>
            <div className="flex items-center space-x-2 text-rose-400 text-xs font-mono font-bold uppercase mb-1">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>LIVE VULNERABILITY INTELLIGENCE FEED // UPDATED 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Real-Time CVE Intelligence Tracker
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
              Track critical security vulnerabilities, zero-days, exploit payloads in the wild, and official remediation advisories verified by CyberMatrix Academy.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center space-x-1.5 bg-[#0e1322] border border-zinc-800 p-1.5 rounded-xl font-mono text-xs">
            {['ALL', 'CRITICAL', 'HIGH', 'MEDIUM'].map((sev) => (
              <button
                key={sev}
                onClick={() => setSeverityFilter(sev)}
                className={`px-3 py-1 rounded-lg font-bold transition ${
                  severityFilter === sev
                    ? 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CVE Cards Feed */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 pb-16 space-y-4">
        {filteredCVEs.map((cve) => (
          <div 
            key={cve.id}
            className="p-6 rounded-2xl bg-[#131a2e] border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 shadow-md space-y-4"
          >
            {/* CVE Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleCopy(cve.cveId)}
                  className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-700 text-cyan-300 font-mono font-black text-xs hover:border-cyan-400 transition"
                  title="Copy CVE ID"
                >
                  <span>{cve.cveId}</span>
                  {copiedCve === cve.cveId ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-500" />
                  )}
                </button>

                <span className={`text-[10px] font-mono font-black px-2.5 py-0.5 rounded border ${
                  cve.severity === 'CRITICAL'
                    ? 'text-rose-400 bg-rose-500/10 border-rose-500/30'
                    : cve.severity === 'HIGH'
                    ? 'text-amber-400 bg-amber-500/10 border-amber-500/30'
                    : 'text-blue-400 bg-blue-500/10 border-blue-500/30'
                }`}>
                  CVSS {cve.cvssScore} // {cve.severity}
                </span>

                <span className={`text-[9.5px] font-mono px-2 py-0.5 rounded ${
                  cve.pocStatus === 'IN_THE_WILD'
                    ? 'text-red-400 bg-red-950/60 border border-red-800 animate-pulse'
                    : cve.pocStatus === 'PUBLIC_POC'
                    ? 'text-amber-400 bg-amber-950/40 border border-amber-800'
                    : 'text-emerald-400 bg-emerald-950/40 border border-emerald-800'
                }`}>
                  {cve.pocStatus.replace(/_/g, ' ')}
                </span>
              </div>

              <span className="text-[11px] font-mono text-zinc-500">
                PUBLISHED: {cve.publishDate}
              </span>
            </div>

            {/* CVE Content */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                {cve.title}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {cve.description}
              </p>
            </div>

            {/* Affected Software & Vector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#0f1424] border border-zinc-800/80">
                <span className="text-zinc-500 block text-[10px] font-bold">AFFECTED SYSTEMS / PACKAGES:</span>
                <span className="text-rose-300 font-semibold">{cve.affectedSoftware}</span>
              </div>

              <div className="p-3 rounded-xl bg-[#0f1424] border border-zinc-800/80">
                <span className="text-zinc-500 block text-[10px] font-bold">CVSS VECTOR STRING:</span>
                <span className="text-zinc-300 truncate block">{cve.vector}</span>
              </div>
            </div>

            {/* Mitigation / Patch Advisory */}
            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-start space-x-2.5 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-emerald-400 font-bold block">OFFICIAL MITIGATION / REMEDIATION:</span>
                <span className="text-zinc-300">{cve.mitigation}</span>
              </div>
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