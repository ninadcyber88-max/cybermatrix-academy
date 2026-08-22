'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Challenge {
  id: string;
  title: string;
  category: string;
  points: number;
  flag: string;
  solved: boolean;
  hint: string;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  handle: string;
  badge: string;
  streak: number;
  points: number;
}

interface CTFContextType {
  score: number;
  streak: number;
  challenges: Challenge[];
  leaderboard: LeaderboardUser[];
  submitFlag: (flagInput: string) => { success: boolean; message: string; pts?: number };
}

const INITIAL_CHALLENGES: Challenge[] = [
  {
    id: 'c1',
    title: 'SQLi Boolean Extraction',
    category: 'Web Security',
    points: 150,
    flag: 'FLAG{SQLI_AUTH_BYPASS_2026}',
    solved: false,
    hint: 'Try injecting standard boolean conditions like `OR 1=1` into the query input.',
  },
  {
    id: 'c2',
    title: 'SUID Privilege Escalation',
    category: 'Linux PrivEsc',
    points: 250,
    flag: 'FLAG{NINAD_PAWAR_ROOT}',
    solved: false,
    hint: 'Inspect binaries with SUID bit enabled using `find / -perm -u=s`.',
  },
  {
    id: 'c3',
    title: 'Volatility 3 Process Infiltration',
    category: 'Forensics',
    points: 200,
    flag: 'FLAG{VOLATILITY_INJECTED_DLL}',
    solved: false,
    hint: 'Use `windows.malfind` to scan unmapped memory pages.',
  },
  {
    id: 'c4',
    title: 'AWS IMDSv1 SSRF Extraction',
    category: 'Cloud DevSecOps',
    points: 300,
    flag: 'FLAG{AWS_IAM_ROLE_EXPLOITED}',
    solved: false,
    hint: 'Query the internal metadata IP 169.254.169.254.',
  },
];

const INITIAL_LEADERBOARD: LeaderboardUser[] = [
  { rank: 1, name: 'Ninad Pawar (You)', handle: '@root_ninad', badge: 'ELITE RED TEAM', streak: 7, points: 0 },
  { rank: 2, name: 'ViperX', handle: '@zero_day_viper', badge: 'EXPLOIT DEV', streak: 4, points: 550 },
  { rank: 3, name: 'ShadowByte', handle: '@byte_walker', badge: 'BUG HUNTER', streak: 2, points: 400 },
  { rank: 4, name: 'CipherGhost', handle: '@cipher_g', badge: 'DFIR LEAD', streak: 5, points: 380 },
  { rank: 5, name: 'NullPointer', handle: '@null_sec', badge: 'CLOUD AUDIT', streak: 1, points: 290 },
];

const CTFContext = createContext<CTFContextType | undefined>(undefined);

export function CTFProvider({ children }: { children: React.ReactNode }) {
  const [score, setScore] = useState<number>(0);
  const [streak] = useState<number>(7);
  const [challenges, setChallenges] = useState<Challenge[]>(INITIAL_CHALLENGES);
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>(INITIAL_LEADERBOARD);

  // Load from LocalStorage if available
  useEffect(() => {
    const savedScore = localStorage.getItem('cmx_ctf_score');
    const savedChallenges = localStorage.getItem('cmx_ctf_challenges');
    if (savedScore) setScore(parseInt(savedScore, 10));
    if (savedChallenges) setChallenges(JSON.parse(savedChallenges));
  }, []);

  // Recalculate leaderboard positions dynamically
  useEffect(() => {
    setLeaderboard((prev) => {
      const updated = prev.map((u) => (u.handle === '@root_ninad' ? { ...u, points: score } : u));
      return updated.sort((a, b) => b.points - a.points).map((u, idx) => ({ ...u, rank: idx + 1 }));
    });
  }, [score]);

  const submitFlag = (flagInput: string) => {
    const cleanFlag = flagInput.trim();
    const matched = challenges.find((c) => c.flag.toLowerCase() === cleanFlag.toLowerCase());

    if (!matched) {
      return { success: false, message: 'INCORRECT FLAG // ACCESS DENIED' };
    }

    if (matched.solved) {
      return { success: false, message: 'FLAG ALREADY CAPTURED PREVIOUSLY' };
    }

    // Mark as solved
    const updatedChallenges = challenges.map((c) => (c.id === matched.id ? { ...c, solved: true } : c));
    const newScore = score + matched.points;

    setChallenges(updatedChallenges);
    setScore(newScore);

    localStorage.setItem('cmx_ctf_challenges', JSON.stringify(updatedChallenges));
    localStorage.setItem('cmx_ctf_score', newScore.toString());

    return {
      success: true,
      message: `FLAG VERIFIED! +${matched.points} PTS AWARDED TO OPERATIVE`,
      pts: matched.points,
    };
  };

  return (
    <CTFContext.Provider value={{ score, streak, challenges, leaderboard, submitFlag }}>
      {children}
    </CTFContext.Provider>
  );
}

export function useCTF() {
  const context = useContext(CTFContext);
  if (!context) throw new Error('useCTF must be used within a CTFProvider');
  return context;
}
