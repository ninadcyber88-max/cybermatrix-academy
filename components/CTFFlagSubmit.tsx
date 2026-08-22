'use client';

import { useState } from 'react';
import { Flag, CheckCircle2, AlertCircle, Trophy } from 'lucide-react';

export function CTFFlagSubmit() {
  const [flagInput, setFlagInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [score, setScore] = useState(250);
  const [solvedChallenges, setSolvedChallenges] = useState<string[]>(['Reconnaissance 101']);

  const validFlags: Record<string, { challenge: string; points: number }> = {
    'FLAG{NINAD_PAWAR_CYBERMATRIX_ROOT_ACCESS}': { challenge: 'Root Privilege Escalation', points: 500 },
    'NINAD_PAWAR_CYBERMATRIX_ROOT_ACCESS': { challenge: 'Root Privilege Escalation', points: 500 },
    '{NINAD_PAWAR_CYBERMATRIX_ROOT_ACCESS}': { challenge: 'Root Privilege Escalation', points: 500 },
    'FLAG{CYBER_MATRIX_SQLI_PWNED_2026}': { challenge: 'SQL Injection Database Dump', points: 300 },
    'CYBER_MATRIX_SQLI_PWNED_2026': { challenge: 'SQL Injection Database Dump', points: 300 },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanFlag = flagInput.trim();

    if (validFlags[cleanFlag] && !solvedChallenges.includes(validFlags[cleanFlag].challenge)) {
      const reward = validFlags[cleanFlag];
      setStatus('success');
      setScore((prev) => prev + reward.points);
      setSolvedChallenges((prev) => [...prev, reward.challenge]);
      setFlagInput('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="p-5 rounded-2xl bg-zinc-900/80 border border-cyan-500/20 backdrop-blur-md space-y-4 font-mono">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-cyan-400 flex items-center space-x-2">
          <Flag className="w-4 h-4" />
          <span>FLAG VERIFICATION ENGINE</span>
        </h3>
        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
          <Trophy className="w-3.5 h-3.5" />
          <span>{score} PTS</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={flagInput}
          onChange={(e) => {
            setFlagInput(e.target.value);
            setStatus('idle');
          }}
          placeholder="FLAG{...}"
          className="flex-1 px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition"
        />
        <button
          type="submit"
          className="px-4 py-2.5 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-xs hover:bg-cyan-400 transition cursor-pointer"
        >
          Submit
        </button>
      </form>

      {status === 'success' && (
        <div className="flex items-center space-x-2 text-[11px] text-green-400 bg-green-500/10 border border-green-500/30 p-2.5 rounded-lg">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span>Flag Captured! +500 PTS added to your operative profile.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center space-x-2 text-[11px] text-red-400 bg-red-500/10 border border-red-500/30 p-2.5 rounded-lg">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>Invalid or already claimed flag token. Try enumerating the sandbox.</span>
        </div>
      )}

      <div className="pt-2 border-t border-zinc-800">
        <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-2">Solved Objectives ({solvedChallenges.length})</p>
        <div className="space-y-1.5">
          {solvedChallenges.map((item, idx) => (
            <div key={idx} className="text-[11px] text-zinc-300 flex items-center justify-between bg-zinc-950/60 px-2.5 py-1.5 rounded border border-zinc-800/80">
              <span>{item}</span>
              <span className="text-cyan-400 text-[10px]">VERIFIED</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
