'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Award, 
  Printer, 
  ArrowLeft
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

export default function CertificatePage() {
  const [recipientName, setRecipientName] = useState('Ninad Pawar');
  const [trackName, setTrackName] = useState('Offensive Security & VAPT Mastery');
  const [certId, setCertId] = useState('CMA-2026-8891-NP');
  const [issueDate, setIssueDate] = useState('23-08-2026');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-zinc-100 font-mono selection:bg-cyan-500/30 selection:text-cyan-300 print:bg-black print:min-h-0 print:p-0">
      
      {/* 1. Global Header (Hidden during print) */}
      <div className="print:hidden">
        <CyberSmokeHeader />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8 print:max-w-none print:p-0 print:m-0">
        
        {/* Navigation & Controls (Hidden during print) */}
        <div className="print:hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xs text-zinc-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO ARENA DASHBOARD</span>
          </Link>

          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs tracking-wider transition shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>PRINT LANDSCAPE CERTIFICATE</span>
          </button>
        </div>

        {/* Dynamic Customization Bar (Hidden during print) */}
        <div className="print:hidden p-5 rounded-2xl bg-zinc-900/60 border border-cyan-500/30 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-zinc-400 mb-1 font-bold">RECIPIENT NAME (OPERATIVE):</label>
            <input 
              type="text" 
              value={recipientName} 
              onChange={(e) => setRecipientName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-cyan-300 font-bold focus:border-cyan-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-zinc-400 mb-1 font-bold">COMPLETED TRACK / SPECIALIZATION:</label>
            <select 
              value={trackName} 
              onChange={(e) => setTrackName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-200 focus:border-cyan-400 outline-none"
            >
              <option value="Offensive Security & VAPT Mastery">Offensive Security & VAPT Mastery</option>
              <option value="Advanced Red Teaming & Buffer Overflow">Advanced Red Teaming & Buffer Overflow</option>
              <option value="Digital Forensics & Incident Response (DFIR)">Digital Forensics & Incident Response (DFIR)</option>
              <option value="Cloud Security & AWS Hardening">Cloud Security & AWS Hardening</option>
            </select>
          </div>
        </div>

        {/* 2. THE OFFICIAL CERTIFICATE TEMPLATE (FITTED FOR SINGLE PAGE A4 LANDSCAPE) */}
        <div className="certificate-container relative w-full aspect-[1.414/1] bg-gradient-to-br from-zinc-950 via-[#0a1120] to-zinc-950 border-4 border-cyan-500/50 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col justify-between overflow-hidden text-center select-none print:border-4 print:border-cyan-400 print:rounded-none print:shadow-none print:m-0">
          
          {/* Cyber Decorative Watermark Patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Certificate Header */}
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <ShieldCheck className="w-7 h-7 text-cyan-300" />
              </div>
              <h2 className="text-lg md:text-xl font-black tracking-widest text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                CYBERMATRIX ACADEMY
              </h2>
            </div>
            <p className="text-[10px] md:text-xs text-zinc-500 tracking-[0.35em] uppercase">
              CYBER DEFENSE & APPLIED OFFENSIVE RESEARCH LAB
            </p>
          </div>

          {/* Main Certificate Content */}
          <div className="relative z-10 my-auto py-2">
            <p className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest font-semibold">
              This is to cryptographically verify that
            </p>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-wider text-white my-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">
              {recipientName || 'OPERATIVE'}
            </h1>

            <p className="text-xs md:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              has successfully completed all rigorous sandbox penetration testing labs, vulnerability discovery exercises, and live offensive execution under the curriculum of:
            </p>

            <div className="inline-block mt-4 px-6 py-2 rounded-full bg-cyan-500/10 border-2 border-cyan-400/50 text-cyan-300 text-sm md:text-lg font-black tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              {trackName}
            </div>
          </div>

          {/* Footer / Signatures & QR Verification */}
          <div className="relative z-10 pt-6 border-t border-zinc-800/80 flex items-end justify-between text-left text-[11px] md:text-xs">
            
            {/* Signature 1: Lead Architect */}
            <div className="space-y-1">
              <p className="font-serif italic text-lg md:text-2xl text-cyan-300">Ninad Pawar</p>
              <div className="w-36 md:w-48 h-0.5 bg-cyan-500/50"></div>
              <p className="font-bold text-zinc-200 text-xs">NINAD PAWAR</p>
              <p className="text-zinc-500 text-[10px]">Lead Security Architect & Instructor</p>
            </div>

            {/* Official Cryptographic Seal */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-cyan-400/80 flex items-center justify-center">
                <Award className="w-8 h-8 text-cyan-300" />
              </div>
              <span className="text-[10px] text-cyan-400 mt-1 font-bold tracking-widest">VERIFIED AUTHENTIC</span>
            </div>

            {/* Signature 2: Hash & Verification */}
            <div className="space-y-1 text-right">
              <p className="text-zinc-400 text-[10px]">CREDENTIAL ID:</p>
              <p className="font-mono font-black text-cyan-300 text-xs">{certId}</p>
              <p className="text-zinc-500 text-[10px]">ISSUED: {issueDate}</p>
              <p className="text-green-400 text-[9.5px] font-bold">STATUS: ACTIVE & VERIFIED</p>
            </div>

          </div>

        </div>

      </main>

      {/* PRINT CSS: FORCES SINGLE PAGE LANDSCAPE WITHOUT HEADERS/MARGINS */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            background-color: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .certificate-container {
            width: 100vw !important;
            height: 100vh !important;
            border-radius: 0 !important;
            border: 8px solid #06b6d4 !important;
            page-break-inside: avoid !important;
            page-break-after: avoid !important;
          }
        }
      `}</style>
    </div>
  );
}