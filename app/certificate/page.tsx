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
  Award
} from "lucide-react";

export default function CertificatePage() {
  const [certName, setCertName] = useState('NINAD PAWAR');
  const [trackName, setTrackName] = useState('Offensive Security & Advanced VAPT');

  const certId = 'CMX-AI-2026-9842-ROOT';
  const issueDate = '23/08/2026';
  const shaSignature = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-mono pb-16">
      {/* Web Header */}
      <div className="no-print">
        <CyberSmokeHeader />
      </div>

      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6">
        
        {/* Navigation Bar */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
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
        <div className="no-print p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
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
            onClick={handlePrint}
            className="w-full md:w-auto px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <Download className="w-4 h-4" />
            <span>SAVE AS 1-PAGE PDF</span>
          </button>
        </div>

        {/* ---------------- PERFECT CENTERED CERTIFICATE ---------------- */}
        <div id="print-zone" className="cert-container">
          <div className="cert-card">
            
            {/* Guilloche Brackets */}
            <div className="corner-bracket top-left" />
            <div className="corner-bracket top-right" />
            <div className="corner-bracket bottom-left" />
            <div className="corner-bracket bottom-right" />

            {/* Top Sub-Header */}
            <div className="cert-badge">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CYBERMATRIX CYBERSECURITY COUNCIL // GLOBAL ACCREDITATION</span>
            </div>

            {/* Header Titles */}
            <div className="cert-title-section">
              <h1 className="cert-main-title">CERTIFICATE OF TACTICAL EXCELLENCE</h1>
              <p className="cert-subtitle">SPECIAL OPERATIVE CREDENTIAL // LEVEL 5 SECURITY CLEARANCE</p>
            </div>

            {/* Candidate Identity - Dead Center Box */}
            <div className="cert-candidate-section">
              <span className="cert-grant-text">THIS PROFESSIONAL ACCREDITATION IS CONFERRED UPON</span>
              <div className="name-box-wrapper">
                <div className="cert-name-box">
                  <h2 className="cert-name-text">{certName}</h2>
                </div>
              </div>
            </div>

            {/* Verification Narrative */}
            <div className="cert-body-section">
              <p className="cert-body-text">
                For demonstrating exceptional technical mastery in offensive penetration testing, live exploit weaponization, digital forensic triage, and defense architecture in:
              </p>
              <div className="cert-track-tag">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>{trackName}</span>
              </div>
            </div>

            {/* Signatures & Footer Section */}
            <div className="cert-footer-section">
              
              {/* Left Authority */}
              <div className="footer-side text-left">
                <span className="footer-label">ACADEMIC DIRECTOR</span>
                <p className="footer-val-bold">Ninad Pawar</p>
                <p className="footer-val-cyan">CyberMatrix Academy India</p>
              </div>

              {/* Center Seal */}
              <div className="footer-center">
                <div className="seal-emblem">
                  <Award className="w-7 h-7 text-cyan-300" />
                </div>
                <span className="seal-text">VERIFIED CERTIFIED</span>
              </div>

              {/* Right Details */}
              <div className="footer-side text-right">
                <span className="footer-label">LEDGER IDENTIFIER</span>
                <p className="footer-val-bold font-mono text-cyan-300">{certId}</p>
                <p className="footer-val-gray">ISSUED: {issueDate}</p>
              </div>

            </div>

            {/* Signature Hash Bar */}
            <div className="cert-hash-bar">
              IMMUTABLE DIGITAL PROOF // SHA-256: {shaSignature}
            </div>

          </div>
        </div>

      </div>

      <div className="no-print">
        <StudentAIAssistant />
      </div>

      {/* ---------------- CSS ENGINE ---------------- */}
      <style jsx global>{`
        .cert-container {
          width: 100%;
          border-radius: 16px;
          background: linear-gradient(135deg, #0b1528 0%, #08101e 50%, #050b14 100%);
          border: 2px solid #0284c7;
          box-shadow: 0 0 40px rgba(2, 132, 199, 0.25);
          padding: 2.5rem 2rem;
          color: #f8fafc;
          font-family: monospace;
          box-sizing: border-box;
        }

        .cert-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          gap: 1.2rem;
          width: 100%;
          margin: 0 auto;
        }

        .corner-bracket {
          position: absolute;
          width: 24px;
          height: 24px;
          border-color: #38bdf8;
        }
        .top-left { top: -14px; left: -14px; border-top: 3px solid #38bdf8; border-left: 3px solid #38bdf8; }
        .top-right { top: -14px; right: -14px; border-top: 3px solid #38bdf8; border-right: 3px solid #38bdf8; }
        .bottom-left { bottom: -14px; left: -14px; border-bottom: 3px solid #38bdf8; border-left: 3px solid #38bdf8; }
        .bottom-right { bottom: -14px; right: -14px; border-bottom: 3px solid #38bdf8; border-right: 3px solid #38bdf8; }

        .cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 14px;
          border-radius: 999px;
          background: rgba(14, 165, 233, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: #38bdf8;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.14em;
          margin: 0 auto;
        }

        .cert-main-title {
          font-size: 1.65rem;
          font-weight: 900;
          color: #f0f9ff;
          letter-spacing: 0.12em;
          text-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
          margin: 0 auto;
        }

        .cert-subtitle {
          font-size: 10px;
          color: #94a3b8;
          letter-spacing: 0.16em;
          margin-top: 3px;
        }

        /* Perfectly Centered Candidate Identity */
        .cert-candidate-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0.2rem 0;
        }

        .cert-grant-text {
          font-size: 9.5px;
          letter-spacing: 0.2em;
          color: #64748b;
          text-transform: uppercase;
          text-align: center;
          display: block;
          margin-bottom: 8px;
        }

        .name-box-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .cert-name-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 36px;
          border-radius: 12px;
          background: #040812;
          border: 1.5px solid #38bdf8;
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.35);
          margin: 0 auto;
        }

        .cert-name-text {
          font-size: 1.85rem;
          font-weight: 900;
          color: #38bdf8;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin: 0;
          text-align: center;
        }

        .cert-body-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cert-body-text {
          font-size: 11px;
          color: #cbd5e1;
          line-height: 1.5;
          max-width: 620px;
          margin: 0 auto;
          text-align: center;
        }

        .cert-track-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
          padding: 6px 18px;
          border-radius: 8px;
          background: rgba(14, 165, 233, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: #bae6fd;
          font-size: 11.5px;
          font-weight: 800;
        }

        .cert-footer-section {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(56, 189, 248, 0.2);
        }

        .footer-label { font-size: 8.5px; color: #64748b; text-transform: uppercase; display: block; }
        .footer-val-bold { font-size: 11.5px; font-weight: 800; color: #f8fafc; }
        .footer-val-cyan { font-size: 9.5px; color: #38bdf8; }
        .footer-val-gray { font-size: 9px; color: #94a3b8; }

        .footer-center { display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .seal-emblem {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: #040812;
          border: 1.5px solid #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.35);
        }
        .seal-text { font-size: 8px; font-weight: 800; color: #38bdf8; margin-top: 3px; }

        .cert-hash-bar {
          font-size: 7.5px;
          color: #475569;
          letter-spacing: 0.04em;
          word-break: break-all;
          text-align: center;
        }

        /* ---------------- 1-PAGE LANDSCAPE PRINT ENGINE ---------------- */
        @media print {
          @page {
            size: landscape;
            margin: 0 !important;
          }

          html, body {
            background: #070d18 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            width: 100vw !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }

          .no-print {
            display: none !important;
          }

          .cert-container {
            position: fixed !important;
            inset: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            max-width: none !important;
            border-radius: 0 !important;
            border: 8px solid #0369a1 !important;
            background: linear-gradient(135deg, #0b1528 0%, #08101e 50%, #050b14 100%) !important;
            box-shadow: none !important;
            padding: 2cm 2.5cm !important;
            margin: 0 !important;
            box-sizing: border-box !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            page-break-before: avoid !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
          }

          .cert-card {
            width: 100% !important;
            height: 100% !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </main>
  );
}
