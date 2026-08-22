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
  Award,
  Loader2
} from "lucide-react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function CertificatePage() {
  const [certName, setCertName] = useState('NINAD PAWAR');
  const [trackName, setTrackName] = useState('Offensive Security & Advanced VAPT');
  const [generating, setGenerating] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  const certId = 'CMX-AI-2026-9842-ROOT';
  const issueDate = '23/08/2026';
  const shaSignature = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';

  const handleDownloadPDF = async () => {
    if (!certRef.current) return;
    setGenerating(true);

    try {
      const canvas = await html2canvas(certRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#070d18',
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      // Exact A4 dimensions: 297mm x 210mm (Zero margins, exactly 1 page)
      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
      pdf.save(`CyberMatrix_Certificate_${certName.replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error(err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-mono pb-16">
      <CyberSmokeHeader />

      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6">
        
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← RETURN TO DASHBOARD</span>
          </Link>
          <div className="flex items-center space-x-2 text-xs text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-500/40">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>EXECUTIVE CYBER CREDENTIAL</span>
          </div>
        </div>

        {/* Configuration Toolbar */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div>
              <label className="text-[10px] text-slate-400 block mb-1">OPERATIVE NAME</label>
              <input
                type="text"
                value={certName}
                onChange={(e) => setCertName(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-cyan-500/40 text-xs text-cyan-300 focus:outline-none focus:border-cyan-400 uppercase font-bold tracking-wider"
              />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 block mb-1">SPECIALIZATION TRACK</label>
              <select
                value={trackName}
                onChange={(e) => setTrackName(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-cyan-500/40 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="Offensive Security & Advanced VAPT">Offensive Security & Advanced VAPT</option>
                <option value="Digital Forensics & Incident Response (DFIR)">Digital Forensics & Incident Response (DFIR)</option>
                <option value="Cloud DevSecOps & Container Defense">Cloud DevSecOps & Container Defense</option>
                <option value="Active Directory Red Teaming & Pwn">Active Directory Red Teaming & Pwn</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleDownloadPDF}
            disabled={generating}
            className="w-full md:w-auto px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer disabled:opacity-50"
          >
            {generating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>GENERATING A4 PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>DOWNLOAD 1-PAGE PDF</span>
              </>
            )}
          </button>
        </div>

        {/* ---------------- 100% PERFECT CENTERED CERTIFICATE ---------------- */}
        <div className="w-full overflow-x-auto pb-4">
          <div
            ref={certRef}
            style={{ width: '1000px', height: '680px' }}
            className="relative mx-auto rounded-2xl bg-gradient-to-br from-[#0b1528] via-[#08101e] to-[#050b14] border-4 border-[#0284c7] p-10 flex flex-col justify-between items-center text-center shadow-[0_0_50px_rgba(2,132,199,0.3)] box-border font-mono text-slate-100"
          >
            {/* Corner Brackets */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-4 border-l-4 border-cyan-400" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-4 border-r-4 border-cyan-400" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-4 border-l-4 border-cyan-400" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-4 border-r-4 border-cyan-400" />

            {/* Top Sub-Header */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-500/15 border border-sky-400/40 text-sky-400 text-xs font-bold tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>CYBERMATRIX CYBERSECURITY COUNCIL // GLOBAL ACCREDITATION</span>
            </div>

            {/* Header Titles */}
            <div className="space-y-1">
              <h1 className="text-3xl font-black text-slate-100 tracking-wider">
                CERTIFICATE OF TACTICAL EXCELLENCE
              </h1>
              <p className="text-xs text-slate-400 tracking-widest">
                SPECIAL OPERATIVE CREDENTIAL // LEVEL 5 SECURITY CLEARANCE
              </p>
            </div>

            {/* Candidate Identity (Dead Center) */}
            <div className="flex flex-col items-center justify-center w-full my-1">
              <span className="text-xs tracking-widest text-slate-500 uppercase font-bold block mb-2">
                THIS PROFESSIONAL ACCREDITATION IS CONFERRED UPON
              </span>
              <div className="px-10 py-3 rounded-xl bg-[#040812] border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                <h2 className="text-3xl font-black text-cyan-300 tracking-widest uppercase m-0">
                  {certName}
                </h2>
              </div>
            </div>

            {/* Verification Narrative */}
            <div className="max-w-2xl mx-auto space-y-3">
              <p className="text-xs text-slate-300 leading-relaxed">
                For demonstrating exceptional technical mastery in offensive penetration testing, live exploit weaponization, digital forensic triage, and defense architecture in:
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-sky-500/10 border border-sky-400/40 text-sky-200 text-xs font-bold">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>{trackName}</span>
              </div>
            </div>

            {/* Signatures & Footer */}
            <div className="w-full grid grid-cols-3 items-center pt-4 border-t border-cyan-500/30">
              
              {/* Left Authority */}
              <div className="text-left space-y-0.5">
                <span className="text-[10px] text-slate-500 uppercase block">ACADEMIC DIRECTOR</span>
                <p className="text-xs font-bold text-slate-100">Ninad Pawar</p>
                <p className="text-[11px] text-cyan-400 font-semibold">CyberMatrix Academy India</p>
              </div>

              {/* Center Seal */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-[#040812] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  <Award className="w-7 h-7 text-cyan-300" />
                </div>
                <span className="text-[9px] font-bold text-cyan-400 mt-1">VERIFIED CERTIFIED</span>
              </div>

              {/* Right Details */}
              <div className="text-right space-y-0.5">
                <span className="text-[10px] text-slate-500 uppercase block">LEDGER IDENTIFIER</span>
                <p className="text-xs font-bold font-mono text-cyan-300">{certId}</p>
                <p className="text-[10px] text-slate-400">ISSUED: {issueDate}</p>
              </div>

            </div>

            {/* Signature Hash Bar */}
            <div className="text-[9px] text-slate-600 font-mono tracking-wider">
              IMMUTABLE DIGITAL PROOF // SHA-256: {shaSignature}
            </div>

          </div>
        </div>

      </div>

      <StudentAIAssistant />
    </main>
  );
}
