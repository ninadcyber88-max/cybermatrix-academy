'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Terminal as TerminalIcon, 
  CheckCircle2, 
  Circle, 
  Play, 
  Flag, 
  ShieldAlert, 
  BookOpen, 
  ChevronRight,
  Sparkles,
  RefreshCw,
  Send
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'THEORY' | 'LAB' | 'SANDBOX';
  content: string;
  targetIp?: string;
  flagObjective?: string;
  expectedFlag?: string;
}

interface CourseDetail {
  id: string;
  title: string;
  track: string;
  level: string;
  modules: {
    id: string;
    title: string;
    lessons: Lesson[];
  }[];
}

const COURSES_DATA: Record<string, CourseDetail> = {
  'win-fund': {
    id: 'win-fund',
    title: 'Windows Fundamental',
    track: 'OPERATING SYSTEM SECURITY',
    level: 'BEGINNER',
    modules: [
      {
        id: 'mod-1',
        title: 'Module 1: Windows Architecture & Registry',
        lessons: [
          {
            id: 'win-1',
            title: '1. Windows Subsystems & SAM Database',
            duration: '15 min',
            type: 'THEORY',
            content: `### Windows Security Subsystem Overview\n\nThe Windows Security Architecture is anchored around the **Local Security Authority Subsystem Service (LSASS)** and the **Security Account Manager (SAM)** database.\n\n* **SAM File Location:** \`C:\\Windows\\System32\\config\\SAM\`\n* **LSASS Process:** Runs in user mode, authenticates local and domain users, and enforces security policies.\n* **Access Control Entries (ACEs):** Define individual permissions attached to Discretionary Access Control Lists (DACLs).`
          },
          {
            id: 'win-2',
            title: '2. Lab: Inspecting Windows Services & ACLs',
            duration: '25 min',
            type: 'SANDBOX',
            targetIp: '10.10.15.42',
            flagObjective: 'Enumerate unquoted service paths and locate the root flag.',
            expectedFlag: 'FLAG{WIN_SVC_UNQUOTED_PATH_ROOT}',
            content: `### Objective\nExecute PowerShell enumeration scripts against the virtual target machine to identify unquoted service path vulnerabilities.\n\n\`\`\`powershell\nGet-WmiObject -Class win32_service | Select-Object Name, PathName, StartMode\n\`\`\``
          }
        ]
      }
    ]
  },
  'linux-mast': {
    id: 'linux-mast',
    title: 'Linux Mastery',
    track: 'SYSTEM HARDENING & OFFENSIVE OPS',
    level: 'BEGINNER',
    modules: [
      {
        id: 'mod-1',
        title: 'Module 1: Linux Permissions & SUID Bits',
        lessons: [
          {
            id: 'lin-1',
            title: '1. Linux File System & SUID Privileges',
            duration: '20 min',
            type: 'THEORY',
            content: `### SUID / SGID Mechanics\n\nWhen the **SUID (Set User ID)** bit is set on an executable file, the process executes with the privileges of the file owner (typically \`root\`) rather than the calling user.\n\n* Finding SUID binaries: \`find / -perm -4000 -type f 2>/dev/null\`\n* Common GTFOBins targets: \`/usr/bin/find\`, \`/usr/bin/vim\`, \`/usr/bin/pkexec\``
          },
          {
            id: 'lin-2',
            title: '2. Interactive Lab: SUID Privilege Escalation',
            duration: '35 min',
            type: 'SANDBOX',
            targetIp: '10.10.18.99',
            flagObjective: 'Exploit the vulnerable SUID binary to capture root.txt.',
            expectedFlag: 'FLAG{SUID_ROOT_SHELL_PWNED}',
            content: `### Objective\nUse the embedded terminal below. Locate the misconfigured SUID binary on target \`10.10.18.99\` and escalate privileges to capture the root flag.`
          }
        ]
      }
    ]
  },
  'eth-hack': {
    id: 'eth-hack',
    title: 'Ethical Hacking',
    track: 'OFFENSIVE RECON & EXPLOITATION',
    level: 'INTERMEDIATE',
    modules: [
      {
        id: 'mod-1',
        title: 'Module 1: Network Recon & Exploitation',
        lessons: [
          {
            id: 'eth-1',
            title: '1. Nmap Port Scanning & Service Fingerprinting',
            duration: '25 min',
            type: 'THEORY',
            content: `### Advanced Scanning Methodologies\n\n* **SYN Stealth Scan:** \`nmap -sS -T4 -p- <target_ip>\`\n* **Service Version & Scripts:** \`nmap -sV -sC -p80,443,22 <target_ip>\`\n* **OS Fingerprinting:** Analyzes TCP/IP stack behavior through handcrafted probe packets.`
          },
          {
            id: 'eth-2',
            title: '2. Lab: Metasploit Remote Exploit Execution',
            duration: '45 min',
            type: 'SANDBOX',
            targetIp: '10.10.24.110',
            flagObjective: 'Launch exploit module against the vulnerable web daemon and grab root flag.',
            expectedFlag: 'FLAG{MSF_STAGED_PAYLOAD_EXECUTED}',
            content: `### Objective\nScan the target machine on the terminal below, discover the unpatched service vulnerability, and execute the payload to retrieve the flag.`
          }
        ]
      }
    ]
  }
};

export default function CourseLabPlayer({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const course = COURSES_DATA[resolvedParams.id] || COURSES_DATA['linux-mast'];

  const [activeLesson, setActiveLesson] = useState<Lesson>(course.modules[0].lessons[0]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [submittedFlag, setSubmittedFlag] = useState('');
  const [flagStatus, setFlagStatus] = useState<'IDLE' | 'CORRECT' | 'WRONG'>('IDLE');

  // Interactive In-Browser Terminal State
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'CYBERMATRIX SANDBOX v3.8 - ACTIVE INSTANCE',
    `Connected to isolated subnet [Target: ${activeLesson.targetIp || '10.10.18.99'}]`,
    'Type "help", "nmap", "cat flag.txt", or your shell commands below:'
  ]);
  const [cmdInput, setCmdInput] = useState('');

  const handleLessonSelect = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setFlagStatus('IDLE');
    setSubmittedFlag('');
    setTerminalHistory([
      'CYBERMATRIX SANDBOX v3.8 - REINITIALIZED',
      `Target Instance: ${lesson.targetIp || '10.10.18.99'}`,
      'Type "help" for a list of available emulator commands.'
    ]);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cmdInput.trim()) return;

    const cmd = cmdInput.trim();
    const newLogs = [...terminalHistory, `root@matrix:~$ ${cmd}`];

    if (cmd === 'help') {
      newLogs.push('Available Commands: help, nmap, whoami, id, ls, cat flag.txt, clear');
    } else if (cmd.startsWith('nmap')) {
      newLogs.push('Starting Nmap 7.94 scan on ' + (activeLesson.targetIp || '10.10.18.99') + '...');
      newLogs.push('PORT 22/tcp  OPEN  OpenSSH 8.9p1');
      newLogs.push('PORT 80/tcp  OPEN  Apache httpd 2.4.52');
      newLogs.push('PORT 8080/tcp OPEN  Vulnerable-Lab-Service v1.4');
    } else if (cmd === 'whoami') {
      newLogs.push('root');
    } else if (cmd === 'id') {
      newLogs.push('uid=0(root) gid=0(root) groups=0(root)');
    } else if (cmd === 'ls') {
      newLogs.push('app  bin  etc  flag.txt  root.sh');
    } else if (cmd === 'cat flag.txt') {
      newLogs.push(activeLesson.expectedFlag || 'FLAG{CYBERMATRIX_GENERIC_FLAG_2026}');
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setCmdInput('');
      return;
    } else {
      newLogs.push(`bash: ${cmd}: command executed in simulated container.`);
    }

    setTerminalHistory(newLogs);
    setCmdInput('');
  };

  const handleFlagSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeLesson.expectedFlag) return;

    if (submittedFlag.trim() === activeLesson.expectedFlag) {
      setFlagStatus('CORRECT');
      if (!completedLessons.includes(activeLesson.id)) {
        setCompletedLessons([...completedLessons, activeLesson.id]);
      }
    } else {
      setFlagStatus('WRONG');
    }
  };

  return (
    <div className="min-h-screen bg-[#0d121f] text-zinc-100 font-sans flex flex-col selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* 1. Global Header */}
      <CyberSmokeHeader />

      {/* 2. Breadcrumb & Course Status */}
      <div className="bg-[#111728] border-b border-zinc-800 px-4 md:px-8 py-3 flex items-center justify-between text-xs font-mono">
        <Link 
          href="/courses" 
          className="flex items-center space-x-2 text-zinc-400 hover:text-cyan-300 transition group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO COURSES</span>
        </Link>

        <div className="flex items-center space-x-3">
          <span className="text-zinc-500 font-bold">{course.track}</span>
          <span className="text-zinc-700">|</span>
          <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold">
            {course.level}
          </span>
        </div>
      </div>

      {/* 3. Main Workspace Grid */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto p-4 md:p-6 gap-6">
        
        {/* LEFT: Modules Syllabus Sidebar */}
        <aside className="w-full lg:w-80 shrink-0 space-y-4">
          <div className="p-4 rounded-xl bg-[#131a2e] border border-zinc-800">
            <h2 className="text-sm font-black text-white uppercase tracking-wider mb-1">
              {course.title}
            </h2>
            <p className="text-[11px] text-zinc-400 font-mono">
              Progress: {completedLessons.length} / {course.modules.flatMap(m => m.lessons).length} Completed
            </p>
          </div>

          <div className="space-y-4">
            {course.modules.map((module) => (
              <div key={module.id} className="rounded-xl bg-[#131a2e] border border-zinc-800/90 overflow-hidden">
                <div className="p-3 bg-zinc-900/70 border-b border-zinc-800 text-xs font-bold text-zinc-300">
                  {module.title}
                </div>
                <div className="divide-y divide-zinc-800/40">
                  {module.lessons.map((lesson) => {
                    const isSelected = activeLesson.id === lesson.id;
                    const isDone = completedLessons.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => handleLessonSelect(lesson)}
                        className={`w-full p-3 flex items-center justify-between text-left text-xs transition ${
                          isSelected 
                            ? 'bg-cyan-500/10 border-l-2 border-cyan-400 text-cyan-300' 
                            : 'hover:bg-zinc-800/40 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                          {isDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                          )}
                          <span className="truncate font-medium">{lesson.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500 shrink-0">
                          {lesson.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* CENTER & RIGHT: Theory Markdown & Live Terminal Sandbox */}
        <main className="flex-1 flex flex-col xl:flex-row gap-6">
          
          {/* Theory / Objective Workspace */}
          <div className="flex-1 flex flex-col justify-between p-6 rounded-2xl bg-[#131a2e] border border-zinc-800">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold font-mono text-zinc-300 uppercase">
                    LAB DOCUMENTATION & THEORY
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-400">
                  {activeLesson.type}
                </span>
              </div>

              <h1 className="text-xl font-black text-white mb-4">
                {activeLesson.title}
              </h1>

              <div className="text-xs text-zinc-300 leading-relaxed font-sans space-y-4 whitespace-pre-line">
                {activeLesson.content}
              </div>
            </div>

            {/* Flag Objective Checkpoint */}
            {activeLesson.expectedFlag && (
              <div className="mt-8 pt-4 border-t border-zinc-800/80">
                <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 mb-2 font-mono">
                  <Flag className="w-3.5 h-3.5" />
                  <span>SUBMIT ROOT LAB FLAG:</span>
                </div>

                <form onSubmit={handleFlagSubmit} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={submittedFlag}
                    onChange={(e) => setSubmittedFlag(e.target.value)}
                    placeholder="FLAG{...}"
                    className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs tracking-wider font-mono transition"
                  >
                    SUBMIT
                  </button>
                </form>

                {flagStatus === 'CORRECT' && (
                  <p className="mt-2 text-xs text-emerald-400 font-mono font-bold flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>FLAG VALIDATED // 100 POINTS AWARDED</span>
                  </p>
                )}
                {flagStatus === 'WRONG' && (
                  <p className="mt-2 text-xs text-rose-400 font-mono font-bold">
                    INVALID FLAG // RE-VERIFY TARGET SYSTEM
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Live In-Browser Simulated Terminal Sandbox */}
          <div className="w-full xl:w-[480px] flex flex-col rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
            <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-bold font-mono text-zinc-300">
                  SANDBOX TERMINAL
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                LIVE 10.10.X.X
              </span>
            </div>

            {/* Terminal Window Buffer */}
            <div className="flex-1 p-4 font-mono text-xs text-zinc-300 space-y-1.5 overflow-y-auto min-h-[320px] max-h-[480px] bg-black/60">
              {terminalHistory.map((line, idx) => (
                <div key={idx} className={line.startsWith('root@matrix') ? 'text-cyan-400 font-bold' : line.startsWith('FLAG{') ? 'text-amber-400 font-black' : 'text-zinc-400'}>
                  {line}
                </div>
              ))}
            </div>

            {/* Terminal Command Input Form */}
            <form onSubmit={handleTerminalSubmit} className="p-2.5 bg-zinc-900 border-t border-zinc-800 flex items-center gap-2">
              <span className="text-cyan-400 font-mono font-bold text-xs pl-1">root@matrix:~$</span>
              <input
                type="text"
                value={cmdInput}
                onChange={(e) => setCmdInput(e.target.value)}
                placeholder="run command..."
                className="flex-1 bg-transparent text-xs font-mono text-zinc-100 outline-none placeholder-zinc-600"
              />
              <button type="submit" className="p-1.5 rounded text-zinc-400 hover:text-cyan-300">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </main>

      </div>

    </div>
  );
}