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
  Award,
  Sparkles
} from "lucide-react";

export default function CertificatePage() {
  const [certName, setCertName] = useState('NINAD PAWAR');
  const [trackName, setTrackName] = useState('Offensive Security & Advanced VAPT');

  const certId = 'CMX-CERT-2026-9842-ROOT';
  const issueDate = '23/08/2026';
  const shaSignature = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      {/* Web Header */}
      <div className="no-print">
        <CyberSmokeHeader />
      </div>

      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6">
        
        {/* Navigation */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition" />
            <span>← RETURN TO DASHBOARD</span>
          </Link>
          <div className="flex items-center space-x-2 text-xs text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/30">
            <Award className="w-4 h-4" />
            <span>PROFESSIONAL EXECUTIVE ACCREDITATION</span>
          </div>
        </div>

        {/* Customization Toolbar */}
        <div className="no-print p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div>
              <label className="text-[10px] text-zinc-500 block mb-1">OPERATIVE NAME</label>
              <input
                type="text"
                value={certName}
                onChange={(e) => setCertName(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-700 text-xs text-cyan-300 focus:outline-none focus:border-cyan-400 uppercase font-bold"
              />
            </div>
            <div>
              <label className="text-[10px] text-zinc-500 block mb-1">TACTICAL SPECIALIZATION</label>
              <select
                value={trackName}
                onChange={(e) => setTrackName(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-700 text-xs text-zinc-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="Offensive Security & Advanced VAPT">Offensive Security & VAPT</option>
                <option value="Digital Forensics & Incident Response (DFIR)">Digital Forensics & Incident Response (DFIR)</option>
                <option value="Cloud DevSecOps & Container Defense">Cloud DevSecOps Hardening</option>
                <option value="Active Directory Red Teaming & Pwn">Active Directory Red Teaming</option>
              </select>
            </div>
          </div>

          <button
            onClick={handlePrint}
            className="w-full md:w-auto px-6 py-2.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs hover:bg-amber-400 transition shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD SINGLE A4 PDF</span>
          </button>
        </div>

        {/* ---------------- PROFESSIONAL EXECUTIVE CERTIFICATE ---------------- */}
        <div id="print-root">
          <div className="pro-cert-card">
            
            {/* Double Gold-Navy Border Frame */}
            <div className="pro-cert-border">
              
              {/* Corner Accents */}
              <div className="corner-gold tl" />
              <div className="corner-gold tr" />
              <div className="corner-gold bl" />
              <div className="corner-gold br" />

              {/* 1. Header Banner */}
              <div className="cert-head">
                <div className="cert-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>CYBERMATRIX CYBER DEFENSE COUNCIL</span>
                </div>
                <h1 className="cert-main-title">CERTIFICATE OF TACTICAL EXCELLENCE</h1>
                <p className="cert-sub-title">VERIFIED CYBERSECURITY SPECIALIST ACCREDITATION</p>
              </div>

              {/* 2. Candidate Presentation */}
              <div className="cert-middle">
                <span className="cert-presented-to">THIS IS PROUDLY PRESENTED TO</span>
                <h2 className="cert-candidate-name">{certName}</h2>
                <div className="cert-gold-line" />
              </div>

              {/* 3. Description & Track */}
              <div className="cert-body">
                <p className="cert-body-text">
                  For outstanding tactical proficiency, defensive hardening, offensive vulnerability assessment, and successfully clearing rigorous real-world cyber simulation challenges in:
                </p>
                <div className="cert-track-box">
                  <Cpu className="w-4 h-4 text-cyan-800" />
                  <span>{trackName}</span>
                </div>
              </div>

              {/* 4. Official Signatures & Seal */}
              <div className="cert-bottom">
                
                {/* Left Signature */}
                <div className="cert-sign-block left">
                  <div className="sign-line" />
                  <p className="sign-author">Ninad Pawar</p>
                  <p className="sign-role">Lead Security Architect & Director</p>
                </div>

                {/* Center Official Gold Seal */}
                <div className="cert-seal-center">
                  <div className="seal-outer">
                    <div className="seal-inner">
                      <ShieldCheck className="w-8 h-8 text-amber-700" />
                    </div>
                  </div>
                  <span className="seal-label">OFFICIAL SEAL</span>
                </div>

                {/* Right Metadata */}
                <div className="cert-sign-block right">
                  <p className="meta-row"><strong>CREDENTIAL ID:</strong> {certId}</p>
                  <p className="meta-row"><strong>ISSUE DATE:</strong> {issueDate}</p>
                  <p className="meta-row status"><strong>STATUS:</strong> VERIFIED ON-CHAIN</p>
                </div>

              </div>

              {/* 5. Cryptographic Security Hash */}
              <div className="cert-hash-footer">
                SHA-256 DIGITAL AUTHENTICATION KEY: {shaSignature}
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="no-print">
        <StudentAIAssistant />
      </div>

      {/* ---------------- 100% SINGLE A4 LANDSCAPE PRINT CSS ---------------- */}
      <style jsx global>{`
        /* Web View Styles */
        .pro-cert-card {
          width: 100%;
          background: #fdfbf7;
          border-radius: 16px;
          padding: 18px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          color: #0f172a;
          box-sizing: border-box;
        }

        .pro-cert-border {
          position: relative;
          border: 3px solid #b45309;
          outline: 1.5px solid #0284c7;
          outline-offset: 4px;
          border-radius: 10px;
          padding: 24px 32px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          gap: 12px;
        }

        .corner-gold {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: #b45309;
        }
        .tl { top: -2px; left: -2px; border-top: 4px solid #b45309; border-left: 4px solid #b45309; }
        .tr { top: -2px; right: -2px; border-top: 4px solid #b45309; border-right: 4px solid #b45309; }
        .bl { bottom: -2px; left: -2px; border-bottom: 4px solid #b45309; border-left: 4px solid #b45309; }
        .br { bottom: -2px; right: -2px; border-bottom: 4px solid #b45309; border-right: 4px solid #b45309; }

        .cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 12px;
          border-radius: 999px;
          background: #fef3c7;
          border: 1px solid #f59e0b;
          color: #92400e;
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .cert-main-title {
          font-size: 1.6rem;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: 0.08em;
          margin-top: 4px;
        }

        .cert-sub-title {
          font-size: 9.5px;
          color: #0369a1;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .cert-presented-to {
          font-size: 9px;
          color: #64748b;
          font-weight: 800;
          letter-spacing: 0.2em;
          display: block;
        }

        .cert-candidate-name {
          font-size: 2rem;
          font-weight: 900;
          color: #0369a1;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 4px 0 0 0;
        }

        .cert-gold-line {
          width: 140px;
          height: 2px;
          background: linear-gradient(to right, transparent, #b45309, transparent);
          margin: 6px auto 0 auto;
        }

        .cert-body-text {
          font-size: 10.5px;
          color: #334155;
          line-height: 1.5;
          max-width: 620px;
          margin: 0 auto;
        }

        .cert-track-box {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 6px;
          padding: 4px 14px;
          border-radius: 8px;
          background: #e0f2fe;
          border: 1px solid #0284c7;
          color: #0369a1;
          font-size: 11.5px;
          font-weight: 800;
        }

        .cert-bottom {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: flex-end;
          padding-top: 10px;
          border-top: 1px solid #e2e8f0;
          text-align: left;
        }

        .cert-sign-block.left {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .sign-line {
          width: 130px;
          height: 1.5px;
          background: #0f172a;
          margin-bottom: 3px;
        }
        .sign-author { font-size: 11px; font-weight: 800; color: #0f172a; }
        .sign-role { font-size: 8.5px; color: #64748b; font-weight: 600; }

        .cert-seal-center {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .seal-outer {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px dashed #b45309;
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fffbeb;
        }
        .seal-inner {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #fef3c7;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #d97706;
        }
        .seal-label {
          font-size: 8px;
          font-weight: 800;
          color: #b45309;
          margin-top: 2px;
          letter-spacing: 0.1em;
        }

        .cert-sign-block.right {
          text-align: right;
        }
        .meta-row {
          font-size: 9px;
          color: #334155;
        }
        .meta-row.status {
          color: #16a34a;
          font-weight: 800;
        }

        .cert-hash-footer {
          font-size: 7.5px;
          color: #64748b;
          letter-spacing: 0.05em;
          border-top: 1px dashed #cbd5e1;
          width: 100%;
          padding-top: 4px;
        }

        /* ---------------- STRICT SINGLE A4 PRINT ENGINE ---------------- */
        @media print {
          @page {
            size: A4 landscape;
            margin: 0 !important;
          }

          html, body {
            width: 297mm !important;
            height: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #fdfbf7 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            overflow: hidden !important;
          }

          .no-print {
            display: none !important;
          }

          #print-root {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 297mm !important;
            height: 210mm !important;
            margin: 0 !important;
            padding: 10mm !important;
            box-sizing: border-box !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .pro-cert-card {
            width: 277mm !important;
            height: 190mm !important;
            box-shadow: none !important;
            padding: 6mm !important;
            margin: 0 !important;
            border-radius: 8px !important;
          }

          .pro-cert-border {
            height: 100% !important;
            padding: 6mm 10mm !important;
            box-sizing: border-box !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </main>
  );
}
