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
  Bot
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
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      {/* 1. Elements hidden during print */}
      <div className="no-print">
        <CyberSmokeHeader />
      </div>

      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
        
        {/* Navigation Bar - Hidden on print */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
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

        {/* Configuration Toolbar - Hidden on print */}
        <div className="no-print p-4 rounded-2xl bg-zinc-900/80 border border-cyan-500/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
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
                <option value="Offensive Security & Advanced VAPT">Offensive Security & Advanced VAPT</option>
                <option value="Digital Forensics & Incident Response (DFIR)">Digital Forensics & Incident Response (DFIR)</option>
                <option value="Cloud DevSecOps & Container Defense">Cloud DevSecOps & Container Defense</option>
                <option value="Active Directory Red Teaming & Pwn">Active Directory Red Teaming & Pwn</option>
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

        {/* ---------------- 2. ONLY THIS CERTIFICATE PRINTS ---------------- */}
        <div id="printable-certificate" className="cyber-certificate-wrapper">
          <div className="cyber-certificate-box">
            
            {/* Corner Cyber HUD Brackets */}
            <div className="corner-hud top-left" />
            <div className="corner-hud top-right" />
            <div className="corner-hud bottom-left" />
            <div className="corner-hud bottom-right" />

            {/* Top Badge */}
            <div className="cert-top-badge">
              <Bot className="w-3.5 h-3.5" />
              <span>CYBERMATRIX AI PROTOCOL // RECON VERIFIED</span>
            </div>

            {/* Main Header */}
            <h1 className="cert-main-title">
              AI CYBER OPERATIVE CREDENTIAL
            </h1>
            <p className="cert-sub-title">
              SEC_CLEARANCE: LEVEL 5 // ADVANCED RED-BLUE SPECIALIST
            </p>

            {/* Candidate Identity */}
            <div className="cert-candidate-section">
              <span className="cert-grant-text">THIS AUTONOMOUS RECORD IS GRANTED TO</span>
              <div className="cert-name-plate">
                <h2 className="cert-operative-name">{certName}</h2>
              </div>
            </div>

            {/* Description & Track */}
            <div className="cert-desc-block">
              <p className="cert-desc-text">
                For demonstrating advanced tactical proficiency in offensive exploitation, digital forensic artifact extraction, memory triaging, and bypassing security defenses in:
              </p>
              <div className="cert-track-badge">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>{trackName}</span>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="cert-footer-grid">
              
              {/* Left Authority */}
              <div className="cert-footer-left">
                <span className="footer-label">ISSUING AUTHORITY</span>
                <p className="footer-val-main">CyberMatrix AI Engine</p>
                <p className="footer-val-sub">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 inline mr-1" />
                  Ninad Pawar (Lead Architect)
                </p>
              </div>

              {/* Center 3D AI Holographic Badge */}
              <div className="cert-footer-center">
                <div className="ai-seal-icon">
                  <Bot className="w-8 h-8 text-cyan-300" />
                </div>
                <span className="ai-seal-label">AI DIGITAL SEAL</span>
              </div>

              {/* Right ID & Date */}
              <div className="cert-footer-right">
                <span className="footer-label">CREDENTIAL HASH ID</span>
                <p className="footer-hash-id">{certId}</p>
                <p className="footer-timestamp">TIMESTAMP: {issueDate}</p>
              </div>
            </div>

            {/* Blockchain SHA256 Signature */}
            <div className="cert-blockchain-stamp">
              BLOCKCHAIN LEDGER SIGNATURE // SHA256: {shaSignature}
            </div>

          </div>
        </div>

      </div>

      <div className="no-print">
        <StudentAIAssistant />
      </div>

      {/* ---------------- 3. PRINT STYLES ---------------- */}
      <style jsx global>{`
        .cyber-certificate-wrapper {
          position: relative;
          width: 100%;
          border-radius: 24px;
          background: #030712;
          border: 2px solid rgba(34, 211, 238, 0.4);
          padding: 2.5rem 2rem;
          box-shadow: 0 0 50px rgba(6, 182, 212, 0.2);
          overflow: hidden;
          font-family: monospace;
          color: #f3f4f6;
        }

        .cyber-certificate-box {
          position: relative;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          min-height: 480px;
          gap: 1.25rem;
        }

        .corner-hud {
          position: absolute;
          width: 24px;
          height: 24px;
          border-color: #22d3ee;
        }
        .top-left { top: -20px; left: -10px; border-top: 3px solid #22d3ee; border-left: 3px solid #22d3ee; }
        .top-right { top: -20px; right: -10px; border-top: 3px solid #22d3ee; border-right: 3px solid #22d3ee; }
        .bottom-left { bottom: -20px; left: -10px; border-bottom: 3px solid #22d3ee; border-left: 3px solid #22d3ee; }
        .bottom-right { bottom: -20px; right: -10px; border-bottom: 3px solid #22d3ee; border-right: 3px solid #22d3ee; }

        .cert-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 14px;
          border-radius: 999px;
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.4);
          color: #22d3ee;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .cert-main-title {
          font-size: 1.85rem;
          font-weight: 900;
          color: #22d3ee;
          letter-spacing: 0.1em;
          text-shadow: 0 0 15px rgba(34, 211, 238, 0.4);
          margin: 0;
        }

        .cert-sub-title {
          font-size: 11px;
          color: #94a3b8;
          letter-spacing: 0.15em;
        }

        .cert-candidate-section {
          margin: 0.5rem 0;
        }
        .cert-grant-text {
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #64748b;
          text-transform: uppercase;
          display: block;
        }
        .cert-name-plate {
          display: inline-block;
          margin-top: 6px;
          padding: 8px 32px;
          border-radius: 12px;
          background: #020617;
          border: 1.5px solid rgba(34, 211, 238, 0.6);
          box-shadow: 0 0 25px rgba(34, 211, 238, 0.35);
        }
        .cert-operative-name {
          font-size: 2rem;
          font-weight: 900;
          color: #67e8f9;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 0;
        }

        .cert-desc-block {
          max-width: 680px;
          margin: 0 auto;
        }
        .cert-desc-text {
          font-size: 11px;
          color: #cbd5e1;
          line-height: 1.6;
        }
        .cert-track-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
          padding: 6px 16px;
          border-radius: 10px;
          background: rgba(34, 211, 238, 0.08);
          border: 1px solid rgba(34, 211, 238, 0.4);
          color: #67e8f9;
          font-size: 12px;
          font-weight: 800;
        }

        .cert-footer-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(34, 211, 238, 0.2);
          text-align: left;
        }

        .footer-label {
          font-size: 9px;
          color: #64748b;
          display: block;
          text-transform: uppercase;
        }
        .footer-val-main {
          font-size: 12px;
          font-weight: 700;
          color: #f1f5f9;
        }
        .footer-val-sub {
          font-size: 10px;
          color: #22d3ee;
          font-weight: 700;
        }

        .cert-footer-center {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ai-seal-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #020617;
          border: 2px solid #22d3ee;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
        }
        .ai-seal-label {
          font-size: 9px;
          font-weight: 800;
          color: #22d3ee;
          margin-top: 4px;
        }

        .cert-footer-right {
          text-align: right;
        }
        .footer-hash-id {
          font-size: 11px;
          font-weight: 800;
          color: #67e8f9;
        }
        .footer-timestamp {
          font-size: 10px;
          color: #94a3b8;
        }

        .cert-blockchain-stamp {
          font-size: 8px;
          color: #475569;
          letter-spacing: 0.05em;
          word-break: break-all;
        }

        /* ---------------- PRINT ONLY ISOLATION ---------------- */
        @media print {
          @page {
            size: landscape;
            margin: 0;
          }

          body, html {
            background-color: #030712 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .no-print {
            display: none !important;
          }

          .cyber-certificate-wrapper {
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 95vw !important;
            max-width: 1000px !important;
            border: 2px solid #22d3ee !important;
            background: #030712 !important;
            box-shadow: none !important;
            margin: 0 auto !important;
            padding: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
}
