'use client';

import { Shield, Terminal, Zap, Lock, Cloud, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

const COURSES = [
  {
    id: "vapt-pro",
    title: "Advanced VAPT & Bug Bounty Hunting",
    domain: "Offensive Security",
    icon: Terminal,
    level: "Advanced",
    modules: 18,
    labs: 12,
    description: "Hands-on penetration testing covering OWASP Top 10, Burp Suite automation, privilege escalation, and real-world bounty methodologies.",
  },
  {
    id: "cloud-sec",
    title: "Enterprise Cloud Security & AWS Hardening",
    domain: "Cloud Security",
    icon: Cloud,
    level: "Intermediate",
    modules: 14,
    labs: 8,
    description: "Deep dive into IAM policies, misconfigured S3 buckets, Kubernetes container isolation, and automated cloud incident response.",
  },
  {
    id: "crypto-ops",
    title: "Applied Cryptography & Zero-Knowledge Systems",
    domain: "Cryptography",
    icon: Lock,
    level: "Expert",
    modules: 10,
    labs: 6,
    description: "Explore post-quantum algorithms, TLS 1.3 implementation, zero-knowledge proofs, and secure cryptographic key exchanges.",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-cyan-500/20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 transition">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold tracking-wider text-zinc-200">CYBERMATRIX // RETURN HOME</span>
          </Link>
          <div className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            CATALOG v16.0
          </div>
        </div>

        {/* Header Title */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 flex items-center space-x-3">
            <Zap className="w-6 h-6 text-cyan-400" />
            <span>SPECIALIZED OPERATIVE CURRICULUM</span>
          </h1>
          <p className="text-xs md:text-sm text-zinc-400">
            Real-world offensive security tracks engineered for technical superiority.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-4 backdrop-blur-md group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300">
                      {course.level}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-cyan-400 font-semibold">{course.domain}</span>
                    <h3 className="text-base font-bold text-zinc-100 mt-1 group-hover:text-cyan-300 transition">
                      {course.title}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <div className="flex space-x-3 text-zinc-500 text-[11px]">
                    <span>{course.modules} Modules</span>
                    <span>•</span>
                    <span>{course.labs} Labs</span>
                  </div>
                  <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-bold">
                    <span>Enroll</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
