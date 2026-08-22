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
  Bot,
  Palette
} from "lucide-react";

export default function CertificatePage() {
  const [certName, setCertName] = useState('NINAD PAWAR');
  const [trackName, setTrackName] = useState('Offensive Security & Advanced VAPT');
  const [bgTheme, setBgTheme] = useState<'midnight' | 'pureBlack' | 'deepTeal'>('midnight');

  const certId = 'CMX-AI-2026-9842-ROOT';
  const issueDate = '23/08/2026';
  const shaSignature = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';

  const handlePrint = () => {
    window.print();
  };

  const getThemeBgClass = () => {
    if (bgTheme === 'pureBlack') return 'bg-[#000000] border-cyan-500/50';
    if (bgTheme === 'deepTeal') return 'bg-gradient-to-br from-[#021b24] via-[#041318] to-[#01080a] border-cyan-400/60';
    return 'bg-gradient-to-br from-[#030b1e] via-[#020617] to-[#050515] border-cyan-500/50'; // Default Midnight Navy
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      {/* Web Header - Hidden on Print */}
      <div className="no-print">
        <CyberSmokeHeader />
      </div>

      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6">
        
        {/* Navigation - Hidden on Print */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition" />
            <span>← RETURN TO DASHBOARD</span>
          </Link>
          <div className="flex items-center space-x-2 text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/30">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>AI NEURAL ENGINE // VERIFIED SINGLE A4 CREDENTIAL</span>
          </div>
        </div>

        {/* Customization Toolbar - Hidden on Print */}
        <div className="no-print p-4 rounded-2xl bg-zinc-900/80 border border-cyan-500/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div>
              <label className="text-[10px] text-zinc-500 block mb-1">OPERATIVE NAME</label>
              <input
                type="text"
                value={certName}
                onChange={(e) => setCertName(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-cyan-500/40 text-xs text-cyan-300 focus:outline-none focus:border-cyan-400 uppercase font-bold tracking-wider"
              />
            </div>
            <div>
              <label className="text-[10px] text-zinc-500 block mb-1">TACTICAL TRACK</label>
              <select
                value={trackName}
                onChange={(e) => setTrackName(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-cyan-500/40 text-xs text-zinc-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="Offensive Security & Advanced VAPT">Offensive Security & VAPT</option>
                <option value="Digital Forensics & Incident Response (DFIR)">Digital Forensics & Incident Response (DFIR)</option>
                <option value="Cloud DevSecOps & Container Defense">Cloud DevSecOps Hardening</option>
                <option value="Active Directory Red Teaming & Pwn">Active Directory Red Teaming</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] text-zinc-500 block mb-1">BG THEME</label>
              <select
                value={bgTheme}
                onChange={(e) => setBgTheme(e.target.value as any)}
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-cyan-500/40 text-xs text-cyan-300 focus:outline-none focus:border-cyan-400"
              >
                <option value="midnight">Midnight Cyber Navy</option>
                <option value="deepTeal">Deep Matrix Teal</option>
                <option value="pureBlack">Pitch Pure Black</option>
              </select>
            </div>
          </div>

          <button
            onClick={handlePrint}
            className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-xs hover:bg-cyan-400 transition shadow-[0_0_25px_rgba(6,182,212,0.5)] flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>PRINT / SAVE AS A4 PDF</span>
          </button>
        </div>

        {/* ---------------- EXACT SINGLE A4 PRINTABLE CERTIFICATE ---------------- */}
        <div id="printable-certificate" className={`cert-a4-frame ${getThemeBgClass()}`}>
          <div className="cert-inner-content">
            
            {/* Corner Cyber HUD Brackets */}
            <div className="corner-bracket top-left" />
            <div className="corner-bracket top-right" />
            <div className="corner-bracket bottom-left" />
            <div className="corner-bracket bottom-right" />

            {/* Matrix Background Grid */}
            <div className="cert-matrix-grid" />

            {/* 1. Protocol Badge */}
            <div className="cert-header-badge">
              <Bot className="w-3.5 h-3.5" />
              <span>CYBERMATRIX AI PROTOCOL // RECON VERIFIED</span>
            </div>

            {/* 2. Main Titles */}
            <div className="cert-title-group">
              <h1 className="cert-heading">AI CYBER OPERATIVE CREDENTIAL</h1>
              <p className="cert-subheading">SEC_CLEARANCE: LEVEL 5 // ADVANCED RED-BLUE SPECIALIST</p>
            </div>

            {/* 3. Candidate Identity */}
            <div className="cert-identity-group">
              <span className="cert-grant-tag">THIS AUTONOMOUS RECORD IS GRANTED TO</span>
              <div className="cert-name-plate">
                <h2 className="cert-candidate-name">{certName}</h2>
              </div>
            </div>

            {/* 4. Description & Specialization */}
            <div className="cert-desc-group">
              <p className="cert-description">
                For demonstrating advanced tactical proficiency in offensive exploitation, digital forensic artifact extraction, memory triaging, and bypassing security defenses in:
              </p>
              <div className="cert-track-pill">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>{trackName}</span>
              </div>
            </div>

            {/* 5. Verification Footer */}
            <div className="cert-footer">
              <div className="footer-col-left">
                <span className="meta-label">ISSUING AUTHORITY</span>
                <p className="meta-title">CyberMatrix AI Engine</p>
                <p className="meta-sub">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 inline mr-1" />
                  Ninad Pawar (Lead Architect)
                </p>
              </div>

              <div className="footer-col-center">
                <div className="ai-seal-box">
                  <Bot className="w-7 h-7 text-cyan-300" />
                </div>
                <span className="ai-seal-text">AI DIGITAL SEAL</span>
              </div>

              <div className="footer-col-right">
                <span className="meta-label">CREDENTIAL HASH ID</span>
                <p className="meta-hash">{certId}</p>
                <p className="meta-time">TIMESTAMP: {issueDate}</p>
              </div>
            </div>

            {/* 6. Blockchain Signature */}
            <div className="cert-blockchain-bar">
              BLOCKCHAIN LEDGER SIGNATURE // SHA256: {shaSignature}
            </div>

          </div>
        </div>

      </div>

      <div className="no-print">
        <StudentAIAssistant />
      </div>

      {/* ---------------- CSS RULES FOR PERFECT 1-PAGE A4 ---------------- */}
      <style jsx global>{`
        .cert-a4-frame {
          position: relative;
          width: 100%;
          border-radius: 20px;
          border-width: 2px;
          border-style: solid;
          padding: 2rem 2.5rem;
          box-shadow: 0 0 45px rgba(6, 182, 212, 0.25);
          overflow: hidden;
          font-family: monospace;
          color: #f3f4f6;
          box-sizing: border-box;
        }

        .cert-inner-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          gap: 1rem;
        }

        .cert-matrix-grid {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .corner-bracket {
          position: absolute;
          width: 26px;
          height: 26px;
          border-color: #22d3ee;
        }
        .top-left { top: 0; left: 0; border-top: 3px solid #22d3ee; border-left: 3px solid #22d3ee; }
        .top-right { top: 0; right: 0; border-top: 3px solid #22d3ee; border-right: 3px solid #22d3ee; }
        .bottom-left { bottom: 0; left: 0; border-bottom: 3px solid #22d3ee; border-left: 3px solid #22d3ee; }
        .bottom-right { bottom: 0; right: 0; border-bottom: 3px solid #22d3ee; border-right: 3px solid #22d3ee; }

        .cert-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 14px;
          border-radius: 999px;
          background: rgba(34, 211, 238, 0.12);
          border: 1px solid rgba(34, 211, 238, 0.4);
          color: #22d3ee;
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .cert-heading {
          font-size: 1.75rem;
          font-weight: 900;
          color: #22d3ee;
          letter-spacing: 0.12em;
          text-shadow: 0 0 16px rgba(34, 211, 238, 0.45);
          margin: 0;
        }

        .cert-subheading {
          font-size: 10.5px;
          color: #94a3b8;
          letter-spacing: 0.16em;
          margin-top: 2px;
        }

        .cert-grant-tag {
          font-size: 9.5px;
          letter-spacing: 0.22em;
          color: #64748b;
          text-transform: uppercase;
          display: block;
        }

        .cert-name-plate {
          display: inline-block;
          margin-top: 6px;
          padding: 6px 30px;
          border-radius: 12px;
          background: rgba(2, 6, 23, 0.85);
          border: 1.5px solid rgba(34, 211, 238, 0.7);
          box-shadow: 0 0 25px rgba(34, 211, 238, 0.35);
        }

        .cert-candidate-name {
          font-size: 1.9rem;
          font-weight: 900;
          color: #67e8f9;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin: 0;
        }

        .cert-description {
          font-size: 11px;
          color: #cbd5e1;
          line-height: 1.55;
          max-width: 650px;
          margin: 0 auto;
        }

        .cert-track-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          padding: 6px 16px;
          border-radius: 10px;
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.45);
          color: #67e8f9;
          font-size: 11.5px;
          font-weight: 800;
        }

        .cert-footer {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(34, 211, 238, 0.25);
          text-align: left;
        }

        .meta-label { font-size: 8.5px; color: #64748b; text-transform: uppercase; display: block; }
        .meta-title { font-size: 11px; font-weight: 700; color: #f1f5f9; }
        .meta-sub { font-size: 9.5px; color: #22d3ee; font-weight: 700; }

        .footer-col-center { display: flex; flex-direction: column; align-items: center; }
        .ai-seal-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: #020617;
          border: 1.5px solid #22d3ee;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.4);
        }
        .ai-seal-text { font-size: 8.5px; font-weight: 800; color: #22d3ee; margin-top: 4px; }

        .footer-col-right { text-align: right; }
        .meta-hash { font-size: 10.5px; font-weight: 800; color: #67e8f9; }
        .meta-time { font-size: 9.5px; color: #94a3b8; }

        .cert-blockchain-bar {
          font-size: 8px;
          color: #475569;
          letter-spacing: 0.04em;
          word-break: break-all;
        }

        /* ---------------- STRICT SINGLE A4 PAGE PRINT SETTINGS ---------------- */
        @media print {
          @page {
            size: A4 landscape;
            margin: 0mm !important;
          }

          body, html {
            background-color: #030b1e !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            width: 297mm !important;
            height: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }

          .no-print {
            display: none !important;
          }

          .cert-a4-frame {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 275mm !important;
            height: 190mm !important;
            padding: 12mm 18mm !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: 2px solid #22d3ee !important;
            box-sizing: border-box !important;
            page-break-inside: avoid !important;
            page-break-after: avoid !important;
          }

          .cert-inner-content {
            height: 100% !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </main>
  );
}
