'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: string;
}

export function CTFTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'sys.init',
      output: 'CyberMatrix Virtual Kernel v5.10-sandbox loaded.\nTarget: 10.10.14.88 (Vulnerable Web Server)\nType "help" to list available operative commands.',
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
  apt update / apt upgrade - Update package repositories
  whoami                   - Display operative context
  ls / pwd                 - List directory contents / Current path
  ifconfig / ip a          - Show network interface status
  ping target              - Send ICMP echo requests to 10.10.14.88
  nmap -sV target          - Port scan target server (10.10.14.88)
  dirb http://target       - Enumerate hidden directories
  curl target/admin        - Query admin authentication vector
  sqlmap                   - Automated SQLi payload execution
  cat flag.txt             - Read captured root flag
  clear                    - Flush terminal buffer`;
    } else if (lower === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (lower.startsWith('apt update') || lower.startsWith('apt-get update')) {
      output = `Hit:1 http://security.cybermatrix.org/ubuntu jammy-security InRelease
Get:2 http://archive.cybermatrix.org/packages jammy InRelease [256 kB]
Get:3 http://archive.cybermatrix.org/packages jammy-updates [1,142 kB]
Fetched 1,398 kB in 1s (1,040 kB/s)
Reading package lists... Done
Building dependency tree... Done
All 42 security exploits & tool packages are up to date.`;
    } else if (lower.startsWith('apt upgrade') || lower.startsWith('apt-get upgrade')) {
      output = `Reading package lists... Done
Building dependency tree... Done
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.`;
    } else if (lower === 'whoami') {
      output = 'operative@cybermatrix-sandbox (UID=1001, GID=1001)';
    } else if (lower === 'pwd') {
      output = '/home/operative/labs/vapt-sandbox';
    } else if (lower === 'ls' || lower === 'ls -la') {
      output = `total 24
drwxr-xr-x 2 operative operative 4096 Aug 23 00:25 .
drwxr-xr-x 4 operative operative 4096 Aug 23 00:00 ..
-rw-r--r-- 1 operative operative  412 Aug 23 00:10 notes.txt
-rw-r--r-- 1 operative operative   45 Aug 23 00:20 exploits.py
-r-------- 1 root      root        48 Aug 23 00:00 flag.txt`;
    } else if (lower.startsWith('ping')) {
      output = `PING 10.10.14.88 (10.10.14.88) 56(84) bytes of data.
64 bytes from 10.10.14.88: icmp_seq=1 ttl=64 time=0.421 ms
64 bytes from 10.10.14.88: icmp_seq=2 ttl=64 time=0.389 ms
--- 10.10.14.88 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1002ms`;
    } else if (lower === 'ifconfig' || lower === 'ip a') {
      output = `eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.10.14.2  netmask 255.255.255.0  broadcast 10.10.14.255
        inet6 fe80::216:3eff:fe14:8800  prefixlen 64
        RX packets 2490  bytes 1823904 (1.8 MB)
        TX packets 1845  bytes 1293021 (1.2 MB)`;
    } else if (lower.includes('nmap')) {
      output = `Starting Nmap 7.94 scan on 10.10.14.88...
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.9p1 Ubuntu
80/tcp   open  http    Apache httpd 2.4.52 (Ubuntu)
8080/tcp open  http-proxy CyberMatrix Internal API`;
    } else if (lower.includes('dirb')) {
      output = `---- Scanning URL: http://10.10.14.88/ ----
+ http://10.10.14.88/admin (CODE:403|SIZE:280)
+ http://10.10.14.88/api/v1/debug (CODE:200|SIZE:1024)
+ http://10.10.14.88/login (CODE:200|SIZE:3421)`;
    } else if (lower.includes('curl')) {
      output = `HTTP/1.1 403 Forbidden
Server: Apache/2.4.52
X-Vulnerability-Hint: Header 'X-Forwarded-For: 127.0.0.1' bypass allowed.`;
    } else if (lower.includes('sqlmap')) {
      output = `[+] Target parameter 'id' injectable (Boolean-based blind).
[+] Database: 'cybermatrix_db'
[+] Found Flag -> FLAG{CYBER_MATRIX_SQLI_PWNED_2026}`;
    } else if (lower.includes('cat flag.txt')) {
      output = 'FLAG{NINAD_PAWAR_CYBERMATRIX_ROOT_ACCESS}';
    } else if (lower.includes('cat notes.txt')) {
      output = 'TODO: Exploit port 8080 API proxy using custom Authorization headers.';
    } else {
      output = `bash: ${cmd}: command not found. Type "help" for valid commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput('');
  };

  return (
    <div className="w-full rounded-2xl bg-zinc-950 border border-cyan-500/30 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-[380px] font-mono">
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

      <form onSubmit={handleCommand} className="p-3 bg-zinc-900/60 border-t border-cyan-500/20 flex items-center space-x-2">
        <span className="text-cyan-400 text-xs font-bold">root@matrix:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'apt update', 'help', 'ls', or 'nmap'..."
          className="flex-1 bg-transparent text-xs text-zinc-100 focus:outline-none placeholder-zinc-600 font-mono"
        />
      </form>
    </div>
  );
}
