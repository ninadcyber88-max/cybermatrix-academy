'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import { Shield, ArrowLeft, Search, Flame, Clock, Award, Terminal, Lock, CheckCircle2 } from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: 'Offensive' | 'Forensics' | 'Cloud' | 'AD';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  labsCount: number;
  description: string;
  topics: string[];
}

const COURSES_DATA: Course[] = [
  {
    id: 'vapt-101',
    title: 'Offensive Security & Web VAPT',
    category: 'Offensive',
    level: 'Intermediate',
    duration: '18 Hours',
    labsCount: 14,
    description: 'Master OWASP Top 10 vulnerabilities, SQL injection, Burp Suite automation, and privilege escalation vectors.',
    topics: ['SQLi & XSS', 'Authentication Bypass', 'Burp Suite Mastery', 'Linux PrivEsc'],
  },
  {
    id: 'dfir-201',
    title: 'Digital Forensics & Incident Response (DFIR)',
    category: 'Forensics',
    level: 'Advanced',
    duration: '22 Hours',
    labsCount: 12,
    description: 'Investigate live breaches using Autopsy, FTK Imager, Volatility memory analysis, and Windows registry triage.',
    topics: ['Prefetch & Shimcache', 'Volatility 3 Analysis', 'MFT Extraction', 'Network PCAP Forensics'],
  },
  {
    id: 'cloud-301',
    title: 'Cloud Security & DevSecOps Hardening',
    category: 'Cloud',
    level: 'Intermediate',
    duration: '15 Hours',
    labsCount: 10,
    description: 'Audit AWS/Azure IAM policies, exploit misconfigured S3 buckets, and secure CI/CD pipelines with container runtime defense.',
    topics: ['AWS IAM Exploitation', 'S3 & Metadata SSRF', 'Docker Breakouts', 'TruffleHog Scanning'],
  },
  {
    id: 'ad-401',
    title: 'Active Directory Attacks & Defense',
    category: 'AD',
    level: 'Advanced',
    duration: '25 Hours',
    labsCount: 16,
    description: 'Enumerate corporate domains using BloodHound, perform Kerberoasting, Pass-the-Hash, and execute Golden Ticket creation.',
    topics: ['BloodHound Graphing', 'Kerberoasting & AS-REP', 'Pass-the-Hash (PtH)', 'Domain Controller Defense'],
  },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCat = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      {/* Top Header */}
      <CyberSmokeHeader />

      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
        
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition" />
            <span>← RETURN TO OPERATIVE DASHBOARD</span>
          </Link>
          <div className="text-xs text-zinc-500 font-bold">
            ACADEMY CURRICULUM // 2026 COHORT
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {['All', 'Offensive', 'Forensics', 'Cloud', 'AD'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-zinc-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat === 'All' ? 'ALL TRACKS' : cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search labs & tracks..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="p-6 rounded-2xl bg-zinc-900/70 border border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-md transition-all shadow-[0_0_20px_rgba(0,0,0,0.4)] flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold uppercase tracking-wider">
                    {course.category} Track
                  </span>
                  <div className="flex items-center space-x-3 text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 text-cyan-300">
                      <Terminal className="w-3.5 h-3.5" />
                      {course.labsCount} Interactive Labs
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-zinc-100">{course.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{course.description}</p>

                {/* Topics Tag List */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {course.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs text-green-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Virtual Lab Ready</span>
                </div>
                <Link
                  href="/"
                  className="px-4 py-2 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-xs hover:bg-cyan-400 transition shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  Launch Sandbox →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating AI Mentor on Courses Page */}
      <StudentAIAssistant />
    </main>
  );
}
