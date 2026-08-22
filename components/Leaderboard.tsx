'use client';

import { Trophy, ShieldCheck, Skull, Flame } from 'lucide-react';

const OPERATIVES = [
  { rank: 1, name: 'Ninad Pawar', handle: 'root_ninad', score: 750, badge: 'ELITE RED TEAM', streak: '7 Days' },
  { rank: 2, name: 'ViperX', handle: 'zero_day_viper', score: 550, badge: 'EXPLOIT DEV', streak: '4 Days' },
  { rank: 3, name: 'ShadowByte', handle: 'byte_walker', score: 400, badge: 'BUG HUNTER', streak: '2 Days' },
  { rank: 4, name: 'CipherGhost', handle: 'ghost_net', score: 250, badge: 'ANALYST', streak: '1 Day' },
];

export function Leaderboard() {
  return (
    <div className="p-5 rounded-2xl bg-zinc-900/80 border border-cyan-500/20 backdrop-blur-md space-y-4 font-mono">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-cyan-400 flex items-center space-x-2">
          <Trophy className="w-4 h-4 text-yellow-400" />
          <span>OPERATIVE RANKINGS</span>
        </h3>
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">SEASON 2026</span>
      </div>

      <div className="space-y-2.5">
        {OPERATIVES.map((user) => (
          <div
            key={user.rank}
            className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
              user.rank === 1
                ? 'bg-cyan-950/30 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                : 'bg-zinc-950/70 border-zinc-800/80'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span
                className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                  user.rank === 1
                    ? 'bg-yellow-500 text-zinc-950'
                    : user.rank === 2
                    ? 'bg-zinc-400 text-zinc-950'
                    : user.rank === 3
                    ? 'bg-amber-700 text-zinc-100'
                    : 'bg-zinc-800 text-zinc-400'
                }`}
              >
                {user.rank}
              </span>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-zinc-200">{user.name}</span>
                  <span className="text-[10px] text-cyan-400/80">@{user.handle}</span>
                </div>
                <span className="text-[9px] text-zinc-500 uppercase tracking-wide">{user.badge}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-right">
              <div className="hidden sm:flex items-center space-x-1 text-[10px] text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                <Flame className="w-3 h-3" />
                <span>{user.streak}</span>
              </div>
              <div className="text-xs font-bold text-cyan-400">{user.score} PTS</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
