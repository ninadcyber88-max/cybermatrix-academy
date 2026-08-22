'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Download, 
  Cpu, 
  Sparkles, 
  QrCode, 
  Binary, 
  Terminal, 
  Zap, 
  Bot, 
  Scan
} from "lucide-react";

export default function CertificatePage() {
  const [certName, setCertName] = useState('NINAD PAWAR');
  const [trackName, setTrackName] = useState('Offensive Security & Advanced VAPT');
  const certRef = useRef<HTMLDivElement>(null);

  const certId = 'CMX-AI-2026-9842-ROOT';
  const issueDate = '23/08/2026';
  const shaSignature = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      <CyberSmokeHeader />

      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
        
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition" />
            <span>← RETURN TO DASHBOARD</span>
          </Link>
          <div className="flex items-center space-x-2 text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/30 animate-pulse">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>AI NEURAL ENGINE // VERIFIED CREDENTIAL</span>
          </div>
        </div>

        {/* Configuration Toolbar */}
        <div className="p-4 rounded-2xl bg-zinc-900/80 border border-cyan-500/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="w-full sm:w-auto">
              <label className="text-[10px] text-zinc-500 block mb-1">OPERATIVE IDENTITY</label>
              <input
                type="text"
                value={certName}
                onChange={(e) => setCertName(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-cyan-500/40 text-xs text-cyan-300 focus:outline-none focus:border-cyan-400 uppercase font-bold tracking-wider"
              />
            </div>
            <div className="w-full sm:w-auto">
              <label className="text-[10px] text-zinc-500 block mb-1">TACTICAL SPECIALIZATION</label>
              <select
                value={trackName}
                onChange={(e) => setTrackName(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-cyan-500/40 text-xs text-zinc-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="Offensive Security & Advanced VAPT">Offensive Security & VAPT</option>
                <option value="Digital Forensics & Incident Response (DFIR)">Digital Forensics & DFIR</option>
                <option value="Cloud DevSecOps & Container Defense">Cloud DevSecOps Hardening</option>
                <option value="Active Directory Red Teaming & Pwn">Active Directory Red Teaming</option>
              </select>
            </div>
          </div>

          <button
            onClick={handlePrint}
            className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-xs hover:bg-cyan-400 transition shadow-[0_0_25px_rgba(6,182,212,0.5)] flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>EXPORT / PRINT CERTIFICATE</span>
          </button>
        </div>

        {/* ---------------- CYBER DIGITAL AI CERTIFICATE CANVAS ---------------- */}
        <div
          ref={certRef}
          className="relative p-6 sm:p-12 rounded-3xl bg-zinc-950 border-2 border-cyan-500/60 shadow-[0_0_60px_rgba(6,182,212,0.25)] overflow-hidden text-center select-none"
        >
          {/* Cyber Scanning Laser Line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-75" />

          {/* Matrix Circuit Lines & Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          {/* Corner Cyber HUD Brackets */}
          <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-cyan-400" />

          {/* Side Binary Stream Watermark */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block text-[9px] text-cyan-500/20 font-mono space-y-1 text-left select-none pointer-events-none">
            <p>01000011 01011001</p>
            <p>01000010 01000101</p>
            <p>01010010 01001101</p>
            <p>01000001 01010100</p>
            <p>01010010 01001001</p>
            <p>01011000 00100000</p>
          </div>

          <div className="relative z-10 space-y-6">
            
            {/* Header Badge */}
            <div className="flex items-center justify-center space-x-2">
              <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 text-[10px] font-extrabold tracking-[0.25em] flex items-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Bot className="w-3.5 h-3.5" />
                <span>CYBERMATRIX AI PROTOCOL // RECON VERIFIED</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-1.5">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-cyan-400 tracking-wider drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                AI CYBER OPERATIVE CREDENTIAL
              </h1>
              <p className="text-[10px] sm:text-xs text-zinc-400 tracking-widest font-mono">
                SEC_CLEARANCE: LEVEL 5 // ADVANCED RED-BLUE SPECIALIST
              </p>
            </div>

            {/* Candidate Hologram Block */}
            <div className="py-4">
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest block font-bold">
                THIS AUTONOMOUS RECORD IS GRANTED TO
              </span>
              <div className="inline-block relative mt-2 group">
                <div className="absolute -inset-1 rounded-2xl bg-cyan-400/30 blur-md animate-pulse" />
                <div className="relative px-6 py-2 rounded-xl bg-zinc-950/90 border border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.35)]">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-cyan-300 tracking-widest uppercase drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
                    {certName}
                  </h2>
                </div>
              </div>
            </div>

            {/* Description & Track */}
            <div className="max-w-2xl mx-auto space-y-3">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
                For demonstrating advanced tactical proficiency in offensive exploitation, digital forensic artifact extraction, memory triaging, and bypassing security defenses in:
              </p>
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>{trackName}</span>
              </div>
            </div>

            {/* Digital AI Seal & QR Verification Grid */}
            <div className="pt-6 border-t border-cyan-500/20 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-left">
              
              {/* Left Authority */}
              <div className="space-y-1 text-xs">
                <span className="text-[9px] text-zinc-500 block uppercase">ISSUING AUTHORITY</span>
                <p className="font-bold text-zinc-200">CyberMatrix AI Engine</p>
                <p className="text-[10px] text-cyan-400 flex items-center gap-1 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Ninad Pawar (Lead Architect)
                </p>
              </div>

              {/* Center 3D AI Holographic Badge */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-16 h-16 rounded-2xl bg-zinc-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.6)] group">
                  <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 animate-ping opacity-30" />
                  <Bot className="w-9 h-9 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                </div>
                <span className="text-[9px] text-cyan-400/80 font-bold mt-1.5 tracking-wider">
                  AI DIGITAL SEAL
                </span>
              </div>

              {/* Right ID & Date */}
              <div className="sm:text-right space-y-1 text-xs">
                <span className="text-[9px] text-zinc-500 block uppercase">CREDENTIAL HASH ID</span>
                <p className="font-mono font-bold text-cyan-300 text-xs">{certId}</p>
                <p className="text-[10px] text-zinc-400 font-mono">TIMESTAMP: {issueDate}</p>
              </div>
            </div>

            {/* Cryptographic SHA-256 Ledger Hash */}
            <div className="pt-2">
              <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 text-[8px] text-zinc-500 font-mono break-all text-center">
                BLOCKCHAIN LEDGER SIGNATURE // SHA256: {shaSignature}
              </div>
            </div>

          </div>
        </div>
      </div>

      <StudentAIAssistant />
    </main>
  );
}
