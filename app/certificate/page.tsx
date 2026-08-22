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
        width: 840,
        height: 560,
      });

      const imgData = canvas.toDataURL('image/png');
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

        {/* Configuration Toolbar */}
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
            className="w-full md:w-auto px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer disabled:opacity-50"
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

        {/* ---------------- CERTIFICATE CANVAS ---------------- */}
        <div className="w-full flex justify-center items-center py-2 overflow-x-auto">
          <div
            ref={certRef}
            style={{ width: '840px', height: '560px' }}
            className="relative rounded-2xl bg-gradient-to-br from-[#0b1528] via-[#08101e] to-[#050b14] border-2 border-[#0284c7] p-8 flex flex-col justify-between items-center text-center shadow-[0_0_40px_rgba(2,132,199,0.25)] box-border font-mono text-slate-100"
          >
            {/* Corner Brackets */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

            {/* 1. Top Sub-Header */}
            <div style={{ width: '100%', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 16px', borderRadius: '999px', background: 'rgba(14, 165, 233, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)', color: '#38bdf8', fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em' }}>
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CYBERMATRIX CYBERSECURITY COUNCIL // GLOBAL ACCREDITATION</span>
              </div>
            </div>

            {/* 2. Header Titles */}
            <div style={{ width: '100%', textAlign: 'center' }}>
              <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#f8fafc', letterSpacing: '0.1em', margin: 0, textAlign: 'center' }}>
                CERTIFICATE OF TACTICAL EXCELLENCE
              </h1>
              <p style={{ fontSize: '10px', color: '#94a3b8', letterSpacing: '0.15em', margin: '4px 0 0 0', textAlign: 'center' }}>
                SPECIAL OPERATIVE CREDENTIAL // LEVEL 5 SECURITY CLEARANCE
              </p>
            </div>

            {/* 3. Candidate Identity */}
            <div style={{ width: '100%', textAlign: 'center' }}>
              <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#64748b', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '8px', textAlign: 'center' }}>
                THIS PROFESSIONAL ACCREDITATION IS CONFERRED UPON
              </span>
              <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{
                      backgroundColor: '#040812',
                      border: '2px solid #38bdf8',
                      borderRadius: '12px',
                      padding: '8px 36px',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      boxShadow: '0 0 25px rgba(56, 189, 248, 0.35)'
                    }}>
                      <h2 style={{
                        fontSize: '26px',
                        fontWeight: 900,
                        color: '#38bdf8',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        margin: 0,
                        padding: 0,
                        lineHeight: 1,
                        textAlign: 'center',
                        display: 'block'
                      }}>
                        {certName}
                      </h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4. Verification Narrative */}
            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '11px', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 8px 0', textAlign: 'center' }}>
                For demonstrating exceptional technical mastery in offensive penetration testing, live exploit weaponization, digital forensic triage, and defense architecture in:
              </p>
              <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{
                      backgroundColor: 'rgba(14, 165, 233, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      borderRadius: '8px',
                      padding: '6px 18px',
                      textAlign: 'center',
                      verticalAlign: 'middle'
                    }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#bae6fd', fontSize: '11.5px', fontWeight: 800 }}>
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{trackName}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 5. Signatures & Footer */}
            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid rgba(56, 189, 248, 0.25)' }}>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '8.5px', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>ACADEMIC DIRECTOR</span>
                <p style={{ fontSize: '11.5px', fontWeight: 800, color: '#f8fafc', margin: 0 }}>Ninad Pawar</p>
                <p style={{ fontSize: '9.5px', color: '#38bdf8', margin: 0 }}>CyberMatrix Academy India</p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#040812', border: '1.5px solid #38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 0 12px rgba(56, 189, 248, 0.35)' }}>
                  <Award className="w-5 h-5 text-cyan-300" />
                </div>
                <span style={{ fontSize: '8px', fontWeight: 800, color: '#38bdf8', display: 'block', marginTop: '3px' }}>VERIFIED CERTIFIED</span>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '8.5px', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>LEDGER IDENTIFIER</span>
                <p style={{ fontSize: '10.5px', fontWeight: 800, color: '#38bdf8', margin: 0 }}>{certId}</p>
                <p style={{ fontSize: '9px', color: '#94a3b8', margin: 0 }}>ISSUED: {issueDate}</p>
              </div>
            </div>

            {/* 6. Signature Hash Bar */}
            <div style={{ width: '100%', textAlign: 'center', fontSize: '7.5px', color: '#475569', letterSpacing: '0.04em' }}>
              IMMUTABLE DIGITAL PROOF // SHA-256: {shaSignature}
            </div>

          </div>
        </div>

      </div>

      <StudentAIAssistant />
    </main>
  );
}
