'use client';

import { useState } from 'react';
import { Flag, Send, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';
import { useCTF } from '@/context/CTFContext';

export function CTFFlagSubmit() {
  const [flagInput, setFlagInput] = useState('');
  const [status, setStatus] = useState<{ msg: string; type: 'idle' | 'success' | 'error' }>({
    msg: '',
    type: 'idle',
  });
  const [showHints, setShowHints] = useState(false);

  const { score, challenges, submitFlag } = useCTF();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flagInput.trim()) return;

    const res = submitFlag(flagInput);
    if (res.success) {
      setStatus({ msg: res.message, type: 'success' });
      setFlagInput('');
    } else {
      setStatus({ msg: res.message, type: 'error' });
    }

    setTimeout(() => {
      setStatus({ msg: '', type: 'idle' });
    }, 4000);
  };

  return (
    <div className="p-4 rounded-2xl bg-zinc-900/80 border border-cyan-500/30 backdrop-blur-md font-mono space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
        <div className="flex items-center space-x-2">
          <Flag className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold text-cyan-300">CTF FLAG VERIFICATION</span>
        </div>
        <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
          SCORE: {score} PTS
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={flagInput}
          onChange={(e) => setFlagInput(e.target.value)}
          placeholder="FLAG{...}"
          className="flex-1 px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-cyan-300 placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-xs hover:bg-cyan-400 transition flex items-center space-x-1.5 shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
        >
          <span>SUBMIT</span>
          <Send className="w-3 h-3" />
        </button>
      </form>

      {status.msg && (
        <div
          className={`p-2.5 rounded-xl text-xs flex items-center space-x-2 ${
            status.type === 'success'
              ? 'bg-green-500/10 border border-green-500/30 text-green-400'
              : 'bg-red-500/10 border border-red-500/30 text-red-400'
          }`}
        >
          {status.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertTriangle className="w-4 h-4 shrink-0" />}
          <span>{status.msg}</span>
        </div>
      )}

      {/* Active Objectives Checklist */}
      <div className="pt-1">
        <button
          onClick={() => setShowHints(!showHints)}
          className="text-[10px] text-zinc-500 hover:text-cyan-400 flex items-center gap-1 transition"
        >
          <HelpCircle className="w-3 h-3" />
          <span>{showHints ? 'Hide Lab Targets' : 'Show Lab Objectives & Flags Checklist'}</span>
        </button>

        {showHints && (
          <div className="space-y-1.5 mt-2 pt-2 border-t border-zinc-800/80">
            {challenges.map((c) => (
              <div
                key={c.id}
                className={`p-2 rounded-lg text-[10px] flex items-center justify-between border ${
                  c.solved ? 'bg-green-500/10 border-green-500/30 text-green-300' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                }`}
              >
                <div>
                  <span className="font-bold">{c.title}</span>
                  <span className="text-zinc-500 ml-1.5">({c.category})</span>
                </div>
                <span className="font-bold">{c.solved ? 'CLEARED' : `+${c.points} PTS`}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
