'use client';

import { useState } from 'react';
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
import jsPDF from 'jspdf';

export default function CertificatePage() {
  const [certName, setCertName] = useState('NINAD PAWAR');
  const [trackName, setTrackName] = useState('Offensive Security & Advanced VAPT');
  const [generating, setGenerating] = useState(false);

  const certId = 'CMX-AI-2026-9842-ROOT';
  const issueDate = '23/08/2026';
  const shaSignature = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';

  const handleDownloadPDF = async () => {
    setGenerating(true);

    try {
      // 1. Create Pure Canvas with strict 1920x1080 resolution (Zero CSS alignment bugs)
      const canvas = document.createElement('canvas');
      canvas.width = 1920;
      canvas.height = 1080;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Background Gradient
      const grad = ctx.createLinearGradient(0, 0, 1920, 1080);
      grad.addColorStop(0, '#0b1528');
      grad.addColorStop(0.5, '#08101e');
      grad.addColorStop(1, '#050b14');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1920, 1080);

      // Outer Glow Border
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 6;
      ctx.strokeRect(60, 60, 1800, 960);

      // Corner Brackets
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 8;
      // Top Left
      ctx.beginPath(); ctx.moveTo(90, 150); ctx.lineTo(90, 90); ctx.lineTo(150, 90); ctx.stroke();
      // Top Right
      ctx.beginPath(); ctx.moveTo(1830, 150); ctx.lineTo(1830, 90); ctx.lineTo(1770, 90); ctx.stroke();
      // Bottom Left
      ctx.beginPath(); ctx.moveTo(90, 930); ctx.lineTo(90, 990); ctx.lineTo(150, 990); ctx.stroke();
      // Bottom Right
      ctx.beginPath(); ctx.moveTo(1830, 930); ctx.lineTo(1830, 990); ctx.lineTo(1770, 990); ctx.stroke();

      // Top Badge
      ctx.fillStyle = 'rgba(14, 165, 233, 0.15)';
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(560, 120, 800, 48, 24);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold 20px monospace';
      ctx.fillStyle = '#38bdf8';
      ctx.textAlign = 'center';
      ctx.fillText('CYBERMATRIX CYBERSECURITY COUNCIL // GLOBAL ACCREDITATION', 960, 152);

      // Certificate Title
      ctx.font = '900 50px monospace';
      ctx.fillStyle = '#f8fafc';
      ctx.fillText('CERTIFICATE OF TACTICAL EXCELLENCE', 960, 235);

      ctx.font = '20px monospace';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('SPECIAL OPERATIVE CREDENTIAL // LEVEL 5 SECURITY CLEARANCE', 960, 275);

      // Sub-label
      ctx.font = 'bold 18px monospace';
      ctx.fillStyle = '#64748b';
      ctx.fillText('THIS PROFESSIONAL ACCREDITATION IS CONFERRED UPON', 960, 360);

      // Name Neon Box (Dead Centered)
      const nameWidth = Math.max(650, ctx.measureText(certName).width * 2.5);
      const nameBoxX = (1920 - nameWidth) / 2;

      ctx.fillStyle = '#040812';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(nameBoxX, 395, nameWidth, 100, 20);
      ctx.fill();
      ctx.stroke();

      // Candidate Name (Dead Center in Box)
      ctx.font = '900 52px monospace';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText(certName.toUpperCase(), 960, 465);

      // Description text
      ctx.font = '22px monospace';
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText('For demonstrating exceptional technical mastery in offensive penetration testing, live', 960, 560);
      ctx.fillText('exploit weaponization, digital forensic triage, and defense architecture in:', 960, 595);

      // Track Tag Box
      const trackWidth = ctx.measureText(trackName).width * 1.5 + 80;
      const trackBoxX = (1920 - trackWidth) / 2;
      ctx.fillStyle = 'rgba(14, 165, 233, 0.12)';
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(trackBoxX, 630, trackWidth, 54, 14);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold 24px monospace';
      ctx.fillStyle = '#bae6fd';
      ctx.fillText(trackName, 960, 666);

      // Divider Line
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(120, 750);
      ctx.lineTo(1800, 750);
      ctx.stroke();

      // Footer - Left (Academic Director)
      ctx.textAlign = 'left';
      ctx.font = '16px monospace';
      ctx.fillStyle = '#64748b';
      ctx.fillText('ACADEMIC DIRECTOR', 150, 795);
      ctx.font = 'bold 24px monospace';
      ctx.fillStyle = '#f8fafc';
      ctx.fillText('Ninad Pawar', 150, 830);
      ctx.font = '18px monospace';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('CyberMatrix Academy India', 150, 860);

      // Footer - Center (Seal)
      ctx.fillStyle = '#040812';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(915, 770, 90, 90, 18);
      ctx.fill();
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.font = '36px monospace';
      ctx.fillText('🛡️', 960, 825);
      ctx.font = 'bold 16px monospace';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('VERIFIED CERTIFIED', 960, 890);

      // Footer - Right (Ledger Identifier)
      ctx.textAlign = 'right';
      ctx.font = '16px monospace';
      ctx.fillStyle = '#64748b';
      ctx.fillText('LEDGER IDENTIFIER', 1770, 795);
      ctx.font = 'bold 22px monospace';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText(certId, 1770, 830);
      ctx.font = '18px monospace';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(`ISSUED: ${issueDate}`, 1770, 860);

      // SHA256 Signature Stamp at Bottom
      ctx.textAlign = 'center';
      ctx.font = '16px monospace';
      ctx.fillStyle = '#475569';
      ctx.fillText(`IMMUTABLE DIGITAL PROOF // SHA-256: ${shaSignature}`, 960, 960);

      // 2. Export Exactly 1 Landscape A4 Page
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

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

      <div className="max-w-5xl mx-auto p-4 md:p-6 space-y-5">
        
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
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

        {/* Configuration Controls */}
        <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3">
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

        {/* Web Preview Box */}
        <div className="w-full flex justify-center items-center py-2">
          <div className="relative w-full max-w-[800px] rounded-2xl bg-gradient-to-br from-[#0b1528] via-[#08101e] to-[#050b14] border-2 border-[#0284c7] p-6 flex flex-col justify-between items-center text-center shadow-[0_0_40px_rgba(2,132,199,0.25)] box-border font-mono text-slate-100 space-y-4">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/40 text-sky-400 text-[9.5px] font-bold tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CYBERMATRIX CYBERSECURITY COUNCIL // GLOBAL ACCREDITATION</span>
            </div>

            <div className="space-y-0.5">
              <h1 className="text-xl sm:text-2xl font-black text-slate-100 tracking-wider">
                CERTIFICATE OF TACTICAL EXCELLENCE
              </h1>
              <p className="text-[10px] text-slate-400 tracking-widest">
                SPECIAL OPERATIVE CREDENTIAL // LEVEL 5 SECURITY CLEARANCE
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full my-0.5">
              <span className="text-[9px] tracking-widest text-slate-500 uppercase font-bold block mb-1.5">
                THIS PROFESSIONAL ACCREDITATION IS CONFERRED UPON
              </span>
              <div className="px-8 py-2 rounded-xl bg-[#040812] border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                <h2 className="text-xl sm:text-2xl font-black text-cyan-300 tracking-widest uppercase m-0">
                  {certName}
                </h2>
              </div>
            </div>

            <div className="max-w-xl mx-auto space-y-2">
              <p className="text-[11px] text-slate-300 leading-relaxed">
                For demonstrating exceptional technical mastery in offensive penetration testing, live exploit weaponization, digital forensic triage, and defense architecture in:
              </p>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-sky-500/10 border border-sky-400/40 text-sky-200 text-[11px] font-bold">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>{trackName}</span>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 items-center pt-3 border-t border-cyan-500/25">
              <div className="text-left space-y-0.5">
                <span className="text-[8.5px] text-slate-500 uppercase block">ACADEMIC DIRECTOR</span>
                <p className="text-[11px] font-bold text-slate-100">Ninad Pawar</p>
                <p className="text-[9.5px] text-cyan-400 font-semibold">CyberMatrix Academy India</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="w-9 h-9 rounded-lg bg-[#040812] border border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.35)]">
                  <Award className="w-5 h-5 text-cyan-300" />
                </div>
                <span className="text-[7.5px] font-bold text-cyan-400 mt-1">VERIFIED CERTIFIED</span>
              </div>

              <div className="text-right space-y-0.5">
                <span className="text-[8.5px] text-slate-500 uppercase block">LEDGER IDENTIFIER</span>
                <p className="text-[10.5px] font-bold font-mono text-cyan-300">{certId}</p>
                <p className="text-[9px] text-slate-400">ISSUED: {issueDate}</p>
              </div>
            </div>

            <div className="text-[7.5px] text-slate-600 font-mono tracking-wider">
              IMMUTABLE DIGITAL PROOF // SHA-256: {shaSignature}
            </div>

          </div>
        </div>

      </div>

      <StudentAIAssistant />
    </main>
  );
}
