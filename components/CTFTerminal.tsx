'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minimize2 } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: string;
}

export function CTFTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'sys.init',
      output: 'CyberMatrix Virtual Kernel v5.10-sandbox loaded.\nTarget: 10.10.14.88 (Vulnerable Web Server)\nType "help" to list available offensive commands.',
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    let output = '';
    const lower = cmd.toLowerCase();

    if (lower === 'help') {
      output = `Available Commands:
  help               - Show command list
  whoami             - Display current user context
  nmap -sV target    - Port scan target server (10.10.14.88)
  curl target/admin  - Inspect admin endpoint
  sqlmap             - Automated SQL injection probe
  cat flag.txt       - Read captured flag
  clear              - Clear terminal display`;
    } else if (lower === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (lower === 'whoami') {
      output = 'operative@cybermatrix-sandbox (UID=1001, GID=1001)';
    } else if (lower.includes('nmap')) {
      output = `Starting Nmap 7.94 scan on 10.10.14.88...
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.9p1
80/tcp   open  http    Apache httpd 2.4.52 (Ubuntu)
8080/tcp open  http-proxy CyberMatrix Internal API`;
    } else if (lower.includes('curl')) {
      output = `HTTP/1.1 403 Forbidden
Server: Apache/2.4.52
X-Vulnerability-Hint: Header 'X-Forwarded-For: 127.0.0.1' bypass possible.`;
    } else if (lower.includes('sqlmap')) {
      output = `[+] Target parameter 'id' appears injectable (Boolean-based blind).
[+] Fetched Database: 'cybermatrix_db'
[+] Dumping table 'flags' -> FLAG{CYBER_MATRIX_SQLI_PWNED_2026}`;
    } else if (lower.includes('cat flag.txt')) {
      output = 'FLAG{NINAD_PAWAR_CYBERMATRIX_ROOT_ACCESS}';
    } else {
      output = `bash: ${cmd}: command not found. Type "help" for valid commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput('');
  };

  return (
    <div className="w-full rounded-2xl bg-zinc-950 border border-cyan-500/30 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-[380px] font-mono">
      {/* Terminal Title Bar */}
      <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-cyan-500/20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-[11px] text-zinc-400 font-bold ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            sandbox@cybermatrix:~ (Target: 10.10.14.88)
          </span>
        </div>
        <div className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
          CTF SANDBOX ACTIVE
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center space-x-2 text-cyan-400">
              <span className="text-zinc-500">root@matrix:~$</span>
              <span className="text-zinc-100 font-semibold">{item.command}</span>
            </div>
            <pre className="text-zinc-400 whitespace-pre-wrap leading-relaxed pl-2 border-l border-zinc-800">
              {item.output}
            </pre>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Prompt Input */}
      <form onSubmit={handleCommand} className="p-3 bg-zinc-900/60 border-t border-cyan-500/20 flex items-center space-x-2">
        <span className="text-cyan-400 text-xs font-bold">root@matrix:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'help', 'nmap', 'sqlmap', or 'cat flag.txt'..."
          className="flex-1 bg-transparent text-xs text-zinc-100 focus:outline-none placeholder-zinc-600 font-mono"
        />
      </form>
    </div>
  );
}
