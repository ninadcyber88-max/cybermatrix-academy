'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import { 
  ArrowLeft, 
  Award, 
  ShieldCheck, 
  Download, 
  Share2, 
  CheckCircle2, 
  QrCode, 
  Terminal,
  Lock
} from "lucide-react";

export default function CertificatePage() {
  const [certName, setCertName] = useState('NINAD PAWAR');
  const [trackName, setTrackName] = useState('Offensive Security & Advanced VAPT');
  const certRef = useRef<HTMLDivElement>(null);

  const certId = 'CMX-CERT-2026-8942-ELITE';
  const issueDate = '23 AUGUST 2026';
  const shaSignature = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      <CyberSmokeHeader />

      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
        
        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition" />
            <span>← RETURN TO DASHBOARD</span>
          </Link>
          <div className="flex items-center space-x-2 text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-lg border border-green-500/30">
            <ShieldCheck className="w-4 h-4" />
            <span>CREDENTIAL VERIFIED: ACTIVE ON-CHAIN LEDGER</span>
          </div>
        </div>

        {/* Certificate Configuration Panel */}
        <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="w-full sm:w-auto">
              <label className="text-[10px] text-zinc-500 block mb-1">OPERATIVE NAME</label>
              <input
                type="text"
                value={certName}
                onChange={(e) => setCertName(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-cyan-300 focus:outline-none focus:border-cyan-500 uppercase font-bold"
              />
            </div>
            <div className="w-full sm:w-auto">
              <label className="text-[10px] text-zinc-500 block mb-1">COMPLETED TRACK</label>
              <select
                value={trackName}
                onChange={(e) => setTrackName(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="Offensive Security & Advanced VAPT">Offensive Security & VAPT</option>
                <option value="Digital Forensics & Incident Response (DFIR)">Digital Forensics & DFIR</option>
                <option value="Cloud DevSecOps & AWS Hardening">Cloud DevSecOps Hardening</option>
                <option value="Active Directory Red Teaming">Active Directory Red Teaming</option>
              </select>
            </div>
          </div>

          <button
            onClick={handlePrint}
            className="w-full md:w-auto px-5 py-2 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-xs hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>EXPORT / PRINT CERTIFICATE</span>
          </button>
        </div>

        {/* Certificate Render Frame */}
        <div
          ref={certRef}
          className="relative p-8 sm:p-14 rounded-3xl bg-zinc-950 border-2 border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden"
        >
          {/* Cyber Watermark Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <Award className="w-[500px] h-[500px] text-cyan-400" />
          </div>

          {/* Corner Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

          {/* Certificate Content */}
          <div className="relative z-10 text-center space-y-6">
            
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-cyan-400 tracking-[0.3em] uppercase">
                CyberMatrix Cybersecurity Academy
              </span>
              <h1 className="text-xl sm:text-3xl font-black text-zinc-100 tracking-wider">
                CERTIFICATE OF CYBER EXCELLENCE
              </h1>
              <p className="text-[10px] text-zinc-500">OFFICIAL OPERATIVE CREDENTIAL VERIFICATION</p>
            </div>

            <div className="py-2">
              <p className="text-xs text-zinc-400">THIS IS OFFICIALLY PRESENTED TO</p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-cyan-300 tracking-widest mt-2 uppercase drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                {certName}
              </h2>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-3" />
            </div>

            <div className="max-w-2xl mx-auto space-y-2">
              <p className="text-xs text-zinc-300 leading-relaxed">
                For successfully completing extensive tactical laboratory simulations, vulnerability exploitation, root privilege escalation, and proving mastery in:
              </p>
              <p className="text-sm font-bold text-zinc-100 bg-zinc-900/90 py-2 px-4 rounded-xl border border-cyan-500/30 inline-block">
                {trackName}
              </p>
            </div>

            {/* Verification Footer */}
            <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div className="space-y-1 text-xs">
                <p className="text-[10px] text-zinc-500">ISSUING AUTHORITY</p>
                <p className="font-bold text-zinc-200">CyberMatrix Security Council</p>
                <p className="text-[10px] text-cyan-400">Director: Ninad Pawar</p>
              </div>

              <div className="text-center space-y-1">
                <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="text-[9px] text-zinc-500 block">TAMPER PROOF</span>
              </div>

              <div className="space-y-1 text-right text-xs">
                <p className="text-[10px] text-zinc-500">CREDENTIAL ID</p>
                <p className="font-mono font-bold text-cyan-300 text-[11px]">{certId}</p>
                <p className="text-[10px] text-zinc-400">{issueDate}</p>
              </div>
            </div>

            {/* Cryptographic SHA-256 Seal */}
            <div className="pt-2 text-center">
              <p className="text-[8px] text-zinc-600 font-mono break-all">
                SHA-256 HASH: {shaSignature}
              </p>
            </div>

          </div>
        </div>
      </div>

      <StudentAIAssistant />
    </main>
  );
}
