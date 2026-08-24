'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Printer, ArrowLeft } from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

export default function CertificatePage() {
  const [recipientName, setRecipientName] = useState('Ninad Pawar');
  const [trackName, setTrackName] = useState('Certified Ethical Hacker');
  const [certNumber, setCertNumber] = useState('ECC7498613205');
  const [issueDate, setIssueDate] = useState('24 August, 2026');
  const [expiryDate, setExpiryDate] = useState('23 August, 2029');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300 print:bg-black print:min-h-0 print:p-0 print:m-0">
      
      {/* 1. Global Header (Print मध्ये लपवले जाईल) */}
      <div className="print:hidden">
        <CyberSmokeHeader />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8 print:max-w-none print:p-0 print:m-0">
        
        {/* Navigation & Controls */}
        <div className="print:hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO ARENA DASHBOARD</span>
          </Link>

          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs tracking-wider transition shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer font-mono"
          >
            <Printer className="w-4 h-4" />
            <span>PRINT OFFICIAL CERTIFICATE</span>
          </button>
        </div>

        {/* Dynamic Controls */}
        <div className="print:hidden p-5 rounded-2xl bg-zinc-900/60 border border-cyan-500/30 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div>
            <label className="block text-zinc-400 mb-1 font-bold">RECIPIENT NAME:</label>
            <input 
              type="text" 
              value={recipientName} 
              onChange={(e) => setRecipientName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-cyan-300 font-bold focus:border-cyan-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-zinc-400 mb-1 font-bold">CERTIFICATION TITLE:</label>
            <input 
              type="text" 
              value={trackName} 
              onChange={(e) => setTrackName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-200 focus:border-cyan-400 outline-none"
            />
          </div>
        </div>

        {/* 2. OFFICIAL CYBER MATRIX CERTIFICATE TEMPLATE */}
        <div className="cert-outer-wrapper">
          <div className="certificate-card relative bg-[#0b0b0d] border border-zinc-800 text-white flex flex-col justify-between overflow-hidden select-none">
            
            {/* Background Texture & Watermark */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-[0.06] pointer-events-none"></div>
            <div className="absolute -left-20 top-1/4 w-96 h-96 rounded-full border border-zinc-700/20 pointer-events-none"></div>
            <div className="absolute -left-10 top-1/4 w-[450px] h-[450px] rounded-full border border-zinc-700/10 pointer-events-none"></div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
              <span className="text-[200px] font-black tracking-tighter">CY|MATRIX</span>
            </div>

            {/* TOP BAR: ABSOLUTE CENTERED CYBER MATRIX & RIGHT CERT NUMBER */}
            <div className="relative z-10 w-full px-8 pt-6 flex items-center justify-center min-h-[50px]">
              
              {/* Perfectly Centered Title */}
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider text-[#05CDF0] uppercase drop-shadow-[0_2px_10px_rgba(230,28,36,0.3)]">
                  CYBER MATRIX
                </h1>
              </div>

              {/* Right Aligned Credential Number */}
              <div className="absolute right-8 top-6 text-right">
                <p className="text-[10px] text-zinc-400 font-sans">Certification Number</p>
                <p className="text-xs sm:text-sm font-black text-white tracking-wider font-mono">{certNumber}</p>
              </div>
            </div>

            {/* PERFECTLY CENTERED BLACK & GOLD ACCENT RIBBON */}
            <div className="relative z-10 my-2">
              <div className="w-full bg-[#121214] border-t-2 border-b-2 border-[#b8860b] py-2.5 px-6 flex items-center justify-center shadow-md">
                
                <div className="flex items-center justify-center space-x-6">
                  {/* CEH Logo Badge */}
                  <div className="flex items-center space-x-2 border-r-2 border-zinc-700 pr-6 shrink-0">
                    <div className="flex items-center font-black tracking-tighter text-lg sm:text-xl">
                      <span className="text-white">CY</span>
                      <span className="text-[#e61c24] mx-0.5 text-2xl font-light">|</span>
                      <span className="text-white">MATRIX</span>
                    </div>
                    <div className="text-[8px] leading-tight text-zinc-400 uppercase font-sans text-left">
                      <p>Certified</p>
                      <p>Ethical Hacker</p>
                    </div>
                  </div>

                  {/* Centered Track Title */}
                  <h2 className="text-base sm:text-xl md:text-2xl font-bold tracking-wide text-white uppercase text-center">
                    {trackName}
                  </h2>
                </div>

              </div>

              {/* Golden Center Ribbon Emblem */}
              <div className="absolute centre-1/2 -translate-x-1/2 -top-2 flex flex-col items-center">
                <div className="w-16 h-4 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 rounded-b-md shadow-lg border border-amber-300"></div>
              </div>
            </div>

            {/* MAIN CERTIFICATE BODY */}
            <div className="relative z-10 px-8 py-3 text-center">
              <p className="text-xs sm:text-sm text-zinc-400 font-serif italic">
                This is to acknowledge that
              </p>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white my-2 tracking-wide font-sans">
                {recipientName || 'Candidate Name'}
              </h3>

              <p className="text-[11px] sm:text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed font-sans">
                has successfully completed all requirements and criteria for
              </p>

              <h4 className="text-sm sm:text-base md:text-lg font-bold text-zinc-100 mt-2 mb-1 tracking-wider">
                {trackName}
              </h4>

              <p className="text-[11px] sm:text-xs text-zinc-400 font-sans">
                certification through examination administered by Cyber Matrix
              </p>
            </div>

            {/* BOTTOM METRICS & SIGNATURES */}
            <div className="relative z-10 px-8 pb-6 flex items-end justify-between text-xs">
              
              {/* Left: ANSI Stamp & Issue Date */}
              <div className="flex flex-col space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-6 border-2 border-white rounded-full flex items-center justify-center font-black text-[9px] tracking-tight text-white">
                    ANSI
                  </div>
                  <div className="text-[8px] text-zinc-400 uppercase leading-tight font-mono">
                    <p className="font-bold text-zinc-200">ACCREDITED</p>
                    <p>ISO/IEC 17024</p>
                    <p>Personnel Certification</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-zinc-400 font-sans">
                    Issue Date: <span className="font-bold text-zinc-200">{issueDate}</span>
                  </p>
                </div>
              </div>

              {/* Right: Expiry Date & President Signature */}
              <div className="flex flex-col items-end space-y-1 text-right">
                <p className="text-[10px] text-zinc-400 font-sans mb-1">
                  Expiry Date: <span className="font-bold text-zinc-200">{expiryDate}</span>
                </p>

                <div className="pt-2 text-center">
                  <p className="font-serif italic text-base sm:text-lg text-cyan-300 leading-none">
                    Ninad Pawar
                  </p>
                  <div className="w-40 h-[1px] bg-zinc-600 my-1"></div>
                  <p className="text-[10px] font-bold text-zinc-300 font-sans">Ninad Pawar, President</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </main>

      {/* STRICT 1-PAGE AUTO-FIT PRINT STYLING */}
      <style jsx global>{`
        .cert-outer-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }
        .certificate-card {
          width: 100%;
          min-height: 520px;
          border-radius: 4px;
        }

        @media print {
          @page {
            size: A4 landscape !important;
            margin: 0 !important;
          }
          html, body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            overflow: hidden !important;
          }
          .cert-outer-wrapper {
            width: 100% !important;
            max-width: none !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 8mm !important;
            box-sizing: border-box !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            page-break-inside: avoid !important;
            page-break-after: avoid !important;
          }
          .certificate-card {
            width: 100% !important;
            max-height: 96vh !important;
            border-radius: 0px !important;
            border: 2px solid #333338 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
            page-break-inside: avoid !important;
            page-break-after: avoid !important;
          }
        }
      `}</style>
    </div>
  );
}