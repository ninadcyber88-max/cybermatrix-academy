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
    <div className="min-h-screen bg-[#070a12] text-zinc-100 font-mono selection:bg-cyan-500/30 selection:text-cyan-300 print:bg-black print:min-h-0 print:p-0 print:m-0">
      
      {/* 1. Global Header (Print मध्ये पूर्ण लपवले जाईल) */}
      <div className="print:hidden">
        <CyberSmokeHeader />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8 print:max-w-none print:p-0 print:m-0">
        
        {/* Navigation & Controls */}
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

        {/* Dynamic Controls */}
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

        {/* 2. THE OFFICIAL CERTIFICATE TEMPLATE */}
        <div className="cert-wrapper">
          <div className="certificate-page relative bg-gradient-to-br from-[#05070d] via-[#091122] to-[#04060a] border-4 border-cyan-500/60 p-8 md:p-10 flex flex-col justify-between overflow-hidden text-center select-none shadow-[0_0_50px_rgba(6,182,212,0.15)]">
            
            {/* Cyber Decorative Patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Certificate Header */}
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2.5 mb-1">
                <div className="w-9 h-9 rounded-xl bg-zinc-950 border border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.5)] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-cyan-300" />
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-black tracking-widest text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                  CYBERMATRIX ACADEMY
                </h2>
              </div>
              <p className="text-[9px] md:text-[10px] text-zinc-400 tracking-[0.3em] uppercase">
                CYBER DEFENSE & APPLIED OFFENSIVE RESEARCH LAB
              </p>
            </div>

            {/* Main Certificate Title */}
            <div className="relative z-10 my-auto py-2">
              <p className="text-[11px] md:text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                This is to cryptographically verify that
              </p>
              
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-wider text-white my-2 drop-shadow-[0_0_16px_rgba(255,255,255,0.3)]">
                {recipientName || 'OPERATIVE'}
              </h1>

              <p className="text-[10.5px] md:text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed">
                has successfully completed all rigorous sandbox penetration testing labs, vulnerability discovery exercises, and live offensive execution under the curriculum of:
              </p>

              <div className="inline-block mt-3 px-5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/50 text-cyan-300 text-xs sm:text-sm md:text-base font-black tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                {trackName}
              </div>
            </div>

            {/* Footer / Signatures & QR Verification */}
            <div className="relative z-10 pt-4 border-t border-zinc-800 flex items-end justify-between text-left text-[10px] md:text-[11px]">
              
              {/* Signature: Lead Architect */}
              <div className="space-y-0.5">
                <p className="font-serif italic text-base md:text-xl text-cyan-300">Ninad Pawar</p>
                <div className="w-28 md:w-40 h-0.5 bg-cyan-500/50"></div>
                <p className="font-bold text-zinc-200 text-[10px]">NINAD PAWAR</p>
                <p className="text-zinc-500 text-[8.5px]">Lead Security Architect & Instructor</p>
              </div>

              {/* Seal */}
              <div className="flex flex-col items-center justify-center text-center px-2">
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-cyan-400/80 flex items-center justify-center">
                  <Award className="w-5 h-5 text-cyan-300" />
                </div>
                <span className="text-[8.5px] text-cyan-400 mt-0.5 font-bold tracking-widest">VERIFIED AUTHENTIC</span>
              </div>

              {/* Hash & Verification */}
              <div className="space-y-0.5 text-right">
                <p className="text-zinc-400 text-[8.5px]">CREDENTIAL ID:</p>
                <p className="font-mono font-black text-cyan-300 text-[10px]">{certId}</p>
                <p className="text-zinc-500 text-[8.5px]">ISSUED: {issueDate}</p>
                <p className="text-green-400 text-[8px] font-bold">STATUS: ACTIVE & VERIFIED</p>
              </div>

            </div>

          </div>
        </div>

      </main>

      {/* STRICT SINGLE PAGE LANDSCAPE PRINT CSS */}
      <style jsx global>{`
        .cert-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }
        .certificate-page {
          width: 100%;
          min-height: 520px;
          border-radius: 1.5rem;
        }

        @media print {
          @page {
            size: A4 landscape !important;
            margin: 0 !important;
          }
          html, body {
            width: 297mm !important;
            height: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            overflow: hidden !important;
          }
          .cert-wrapper {
            max-width: none !important;
            width: 297mm !important;
            height: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .certificate-page {
            width: 285mm !important;
            height: 198mm !important;
            border-radius: 0px !important;
            border: 5px solid #06b6d4 !important;
            margin: auto !important;
            padding: 18mm !important;
            page-break-inside: avoid !important;
            page-break-after: avoid !important;
            page-break-before: avoid !important;
          }
        }
      `}</style>
    </div>
  );
}