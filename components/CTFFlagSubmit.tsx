'use client';

import { useState } from 'react';
import { Flag, CheckCircle2, AlertCircle, Trophy } from 'lucide-react';

export function CTFFlagSubmit() {
  const [flagInput, setFlagInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [score, setScore] = useState(250);

  const validFlags: Record<string, number> = {
    'FLAG{NINAD_PAWAR_CYBERMATRIX_ROOT_ACCESS}': 500,
    'NINAD_PAWAR_CYBERMATRIX_ROOT_ACCESS': 500,
    '{NINAD_PAWAR_CYBERMATRIX_ROOT_ACCESS}': 500,
    'FLAG{CYBER_MATRIX_SQLI_PWNED_2026}': 300,
    'CYBER_MATRIX_SQLI_PWNED_2026': 300,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanFlag = flagInput.trim();

    if (validFlags[cleanFlag]) {
      setStatus('success');
      setScore((prev) => prev + validFlags[cleanFlag]);
      setFlagInput('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="p-4 rounded-2xl bg-zinc-900/80 border border-cyan-500/30 backdrop-blur-md flex flex-col justify-between h-[210px] font-mono shadow-[0_0_20px_rgba(6,182,212,0.1)]">
      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
        <div className="flex items-center space-x-1.5">
          <Flag className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-bold text-zinc-100">SUBMIT FLAG</span>
        </div>
        <div className="flex items-center space-x-1 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold">
          <Trophy className="w-3 h-3 text-yellow-400" />
          <span>{score} PTS</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2 my-auto">
        <input
          type="text"
          value={flagInput}
          onChange={(e) => {
            setFlagInput(e.target.value);
            setStatus('idle');
          }}
          placeholder="FLAG{...}"
          className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition"
        />
        <button
          type="submit"
          className="w-full py-1.5 rounded-lg bg-cyan-500 text-zinc-950 font-bold text-xs hover:bg-cyan-400 transition cursor-pointer shadow-[0_0_12px_rgba(6,182,212,0.3)]"
        >
          Verify Flag
        </button>
      </form>

      <div className="text-[10px] min-h-[22px] flex items-center">
        {status === 'success' && (
          <span className="text-green-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" /> Captured! +500 PTS
          </span>
        )}
        {status === 'error' && (
          <span className="text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> Invalid flag token
          </span>
        )}
        {status === 'idle' && (
          <span className="text-zinc-500 truncate">Run "cat flag.txt" in sandbox</span>
        )}
      </div>
    </div>
  );
}
