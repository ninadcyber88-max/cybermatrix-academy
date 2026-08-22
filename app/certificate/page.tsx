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
      const element = certRef.current;
      const canvas = await html2canvas(element, {
        scale: 2.5,
        useCORS: true,
        backgroundColor: '#08101e',
        logging: false,
        scrollX: 0,
        scrollY: 0,
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

        {/* Controls Toolbar */}
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

        {/* ---------------- CENTERED CERTIFICATE CANVAS ---------------- */}
        <div className="w-full flex justify-center items-center py-2 overflow-x-auto">
          <div
            id="cert-render-box"
            ref={certRef}
            style={{
              width: '840px',
              height: '560px',
              backgroundColor: '#08101e',
              border: '2px solid #0284c7',
              borderRadius: '16px',
              padding: '24px 36px',
              boxSizing: 'border-box',
              position: 'relative',
              textAlign: 'center',
              fontFamily: 'monospace',
              color: '#f8fafc',
            }}
          >
            {/* Corner Brackets */}
            <div style={{ position: 'absolute', top: '12px', left: '12px', width: '22px', height: '22px', borderTop: '3px solid #38bdf8', borderLeft: '3px solid #38bdf8' }} />
            <div style={{ position: 'absolute', top: '12px', right: '12px', width: '22px', height: '22px', borderTop: '3px solid #38bdf8', borderRight: '3px solid #38bdf8' }} />
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', width: '22px', height: '22px', borderBottom: '3px solid #38bdf8', borderLeft: '3px solid #38bdf8' }} />
            <div style={{ position: 'absolute', bottom: '12px', right: '12px', width: '22px', height: '22px', borderBottom: '3px solid #38bdf8', borderRight: '3px solid #38bdf8' }} />

            {/* 1. Top Sub-Header */}
            <div style={{ width: '100%', textAlign: 'center', marginBottom: '14px' }}>
              <div style={{ display: 'inline-block', padding: '4px 18px', borderRadius: '999px', backgroundColor: 'rgba(14, 165, 233, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)', color: '#38bdf8', fontSize: '9.5px', fontWeight: 'bold', letterSpacing: '0.14em' }}>
                CYBERMATRIX CYBERSECURITY COUNCIL // GLOBAL ACCREDITATION
              </div>
            </div>

            {/* 2. Header Titles */}
            <div style={{ width: '100%', textAlign: 'center', marginBottom: '16px' }}>
              <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#f8fafc', letterSpacing: '0.1em', margin: '0 0 4px 0', textAlign: 'center' }}>
                CERTIFICATE OF TACTICAL EXCELLENCE
              </h1>
              <p style={{ fontSize: '10px', color: '#94a3b8', letterSpacing: '0.15em', margin: 0, textAlign: 'center' }}>
                SPECIAL OPERATIVE CREDENTIAL // LEVEL 5 SECURITY CLEARANCE
              </p>
            </div>

            {/* 3. Candidate Identity */}
            <div style={{ width: '100%', textAlign: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#64748b', textTransform: 'uppercase', fontWeight: 'bold', display: 'block', marginBottom: '8px', textAlign: 'center' }}>
                THIS PROFESSIONAL ACCREDITATION IS CONFERRED UPON
              </span>
              <div style={{ display: 'inline-block', backgroundColor: '#040812', border: '2px solid #38bdf8', borderRadius: '12px', padding: '8px 36px', boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' }}>
                <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#38bdf8', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0, padding: 0, textAlign: 'center', lineHeight: 1 }}>
                  {certName}
                </h2>
              </div>
            </div>

            {/* 4. Verification Narrative */}
            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto 16px auto', textAlign: 'center' }}>
              <p style={{ fontSize: '11px', color: '#cbd5e1', lineHeight: '1.5', margin: '0 0 10px 0', textAlign: 'center' }}>
                For demonstrating exceptional technical mastery in offensive penetration testing, live exploit weaponization, digital forensic triage, and defense architecture in:
              </p>
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(14, 165, 233, 0.12)', border: '1px solid rgba(56, 189, 248, 0.4)', borderRadius: '8px', padding: '6px 20px', color: '#bae6fd', fontSize: '11.5px', fontWeight: 'bold' }}>
                {trackName}
              </div>
            </div>

            {/* 5. Signatures & Footer */}
            <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '1px solid rgba(56, 189, 248, 0.25)', paddingTop: '10px', marginTop: '10px' }}>
              <tbody>
                <tr>
                  <td style={{ width: '33%', textAlign: 'left', verticalAlign: 'middle', padding: '8px 0' }}>
                    <span style={{ fontSize: '8.5px', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>ACADEMIC DIRECTOR</span>
                    <p style={{ fontSize: '11.5px', fontWeight: 800, color: '#f8fafc', margin: '2px 0 0 0' }}>Ninad Pawar</p>
                    <p style={{ fontSize: '9.5px', color: '#38bdf8', margin: '1px 0 0 0' }}>CyberMatrix Academy India</p>
                  </td>

                  <td style={{ width: '34%', textAlign: 'center', verticalAlign: 'middle', padding: '8px 0' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#040812', border: '1.5px solid #38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 0 12px rgba(56, 189, 248, 0.35)' }}>
                      <Award className="w-5 h-5 text-cyan-300" />
                    </div>
                    <span style={{ fontSize: '8px', fontWeight: 800, color: '#38bdf8', display: 'block', marginTop: '3px' }}>VERIFIED CERTIFIED</span>
                  </td>

                  <td style={{ width: '33%', textAlign: 'right', verticalAlign: 'middle', padding: '8px 0' }}>
                    <span style={{ fontSize: '8.5px', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>LEDGER IDENTIFIER</span>
                    <p style={{ fontSize: '10.5px', fontWeight: 800, color: '#38bdf8', margin: '2px 0 0 0' }}>{certId}</p>
                    <p style={{ fontSize: '9px', color: '#94a3b8', margin: '1px 0 0 0' }}>ISSUED: {issueDate}</p>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* 6. Signature Hash Bar */}
            <div style={{ position: 'absolute', bottom: '10px', left: 0, right: 0, textAlign: 'center', fontSize: '7.5px', color: '#475569', letterSpacing: '0.04em' }}>
              IMMUTABLE DIGITAL PROOF // SHA-256: {shaSignature}
            </div>

          </div>
        </div>

      </div>

      <StudentAIAssistant />
    </main>
  );
}
