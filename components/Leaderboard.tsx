'use client';

import { useState } from 'react';
import { Trophy, ChevronDown, ChevronUp, Flame } from 'lucide-react';
import { useCTF } from '@/context/CTFContext';

export function Leaderboard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { leaderboard } = useCTF();

  const displayList = isExpanded ? leaderboard : leaderboard.slice(0, 3);

  return (
    <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-cyan-500/20 backdrop-blur-md font-mono shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
        <div className="flex items-center space-x-2">
          <Trophy className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-bold text-cyan-400">DYNAMIC OPERATIVE RANKINGS</span>
          <span className="text-[9px] text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
            SEASON 2026 LIVE
          </span>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-1 text-[10px] text-cyan-400/80 hover:text-cyan-300 px-2 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 transition cursor-pointer"
        >
          <span>{isExpanded ? 'MINIMIZE' : 'EXPAND ALL'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Dynamic List */}
      <div className="space-y-2 mt-2.5">
        {displayList.map((op) => (
          <div
            key={op.handle}
            className={`flex items-center justify-between p-2 rounded-xl border text-xs transition ${
              op.handle === '@root_ninad'
                ? 'bg-cyan-950/40 border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                : 'bg-zinc-950/80 border-zinc-800/80'
            }`}
          >
            <div className="flex items-center space-x-2.5">
              <span
                className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                  op.rank === 1
                    ? 'bg-yellow-400 text-zinc-950'
                    : op.rank === 2
                    ? 'bg-zinc-300 text-zinc-950'
                    : op.rank === 3
                    ? 'bg-amber-600 text-zinc-950'
                    : 'bg-zinc-800 text-zinc-400'
                }`}
              >
                {op.rank}
              </span>
              <div>
                <p className="text-[11px] font-bold text-zinc-200 leading-tight flex items-center gap-1.5">
                  {op.name}
                  <span className="text-[9px] font-normal text-zinc-500">{op.handle}</span>
                </p>
                <span className="text-[8px] text-cyan-400/80 uppercase">{op.badge}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="flex items-center text-[10px] text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">
                <Flame className="w-3 h-3 mr-0.5" />
                {op.streak}d
              </span>
              <span className="text-[11px] font-bold text-cyan-300">{op.points} PTS</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
