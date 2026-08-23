'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Printer, ArrowLeft } from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

export default function CertificatePage() {
  const [recipientName, setRecipientName] = useState('Ninad Pawar');
  const [courseTitle, setCourseTitle] = useState('Certified Ethical Hacker');
  const [certNumber, setCertNumber] = useState('ECC7498613205');
  const [issueDate, setIssueDate] = useState('23 August, 2026');
  const [expiryDate, setExpiryDate] = useState('22 August, 2029');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#06080e] text-zinc-100 font-sans selection:bg-red-500/30 selection:text-red-300 print:bg-black print:min-h-0 print:p-0 print:m-0">
      
      {/* 1. Global Header (Print मध्ये लपवले जाईल) */}
      <div className="print:hidden">
        <CyberSmokeHeader />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8 print:max-w-none print:p-0 print:m-0">
        
        {/* Navigation & Controls */}
        <div className="print:hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-red-400 transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO DASHBOARD</span>
          </Link>

          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs tracking-wider transition shadow-[0_0_20px_rgba(220,38,38,0.5)] cursor-pointer font-mono"
          >
            <Printer className="w-4 h-4" />
            <span>PRINT / SAVE EC-COUNCIL PDF</span>
          </button>
        </div>

        {/* Dynamic Controls Bar */}
        <div className="print:hidden p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div>
            <label className="block text-zinc-400 mb-1 font-bold">RECIPIENT NAME:</label>
            <input 
              type="text" 
              value={recipientName} 
              onChange={(e) => setRecipientName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-white font-bold focus:border-red-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-zinc-400 mb-1 font-bold">CERTIFICATION PROGRAM:</label>
            <select 
              value={courseTitle} 
              onChange={(e) => setCourseTitle(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-200 focus:border-red-500 outline-none"
            >
              <option value="Certified Ethical Hacker">Certified Ethical Hacker (CEH)</option>
              <option value="Certified Penetration Testing Professional">Certified Penetration Testing Professional (CPENT)</option>
              <option value="Computer Hacking Forensic Investigator">Computer Hacking Forensic Investigator (CHFI)</option>
              <option value="Certified Security Analyst">Certified Security Analyst (ECSA)</option>
            </select>
          </div>
          <div>
            <label className="block text-zinc-400 mb-1 font-bold">CERTIFICATE NUMBER:</label>
            <input 
              type="text" 
              value={certNumber} 
              onChange={(e) => setCertNumber(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-red-400 font-bold focus:border-red-500 outline-none"
            />
          </div>
        </div>

        {/* 2. EXACT EC-COUNCIL AUTHENTIC CERTIFICATE TEMPLATE */}
        <div className="ec-cert-wrapper">
          <div className="ec-certificate relative bg-[#0d0f12] text-white flex flex-col justify-between overflow-hidden select-none border-2 border-zinc-800 shadow-2xl">
            
            {/* Background Digital Globe Dot Matrix & Curved Grids */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:22px_22px] opacity-15 pointer-events-none"></div>
            
            <div className="absolute -left-20 -top-20 w-[420px] h-[420px] rounded-full border border-zinc-700/40 pointer-events-none"></div>
            <div className="absolute -left-32 -top-32 w-[580px] h-[580px] rounded-full border border-zinc-700/20 pointer-events-none"></div>

            {/* Top Bar: EC-Council Red Header & Certification Number */}
            <div className="relative z-10 px-8 pt-6 flex items-start justify-between">
              <div className="w-1/3"></div>
              
              {/* Bold Red EC-Council Branding */}
              <div className="w-1/3 text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#e50914] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
                  EC-Council
                </h1>
              </div>

              {/* Top-Right Credential Meta */}
              <div className="w-1/3 text-right">
                <p className="text-[10px] md:text-[11px] text-zinc-400 font-medium">Certification Number</p>
                <p className="text-xs md:text-sm font-extrabold tracking-wider text-white font-mono">{certNumber}</p>
              </div>
            </div>

            {/* Center Strip: Golden Ribbon & Black CEH Banner */}
            <div className="relative z-10 my-auto py-2">
              
              {/* Golden Metallic Laurel Ring (Top/Bottom Accent) */}
              <div className="flex justify-center -mb-2 relative z-20">
                <div className="w-32 h-6 rounded-full border-t-2 border-b-2 border-[#d4af37] bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-90 shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
              </div>

              {/* Solid Black Horizontal Bar */}
              <div className="bg-[#050608] border-y-2 border-[#d4af37] py-3.5 px-8 flex items-center shadow-lg">
                
                {/* Left CEH Logo Emblem */}
                <div className="flex items-center space-x-2 border-r border-zinc-700 pr-6 mr-6">
                  <span className="text-2xl md:text-3xl font-black tracking-tighter text-white">C</span>
                  <div className="w-1 h-8 bg-red-600 mx-0.5"></div>
                  <span className="text-2xl md:text-3xl font-black tracking-tighter text-white">EH</span>
                  <div className="leading-none text-[7px] text-zinc-400 tracking-tighter uppercase pl-1">
                    <p>Certified</p>
                    <p>Ethical</p>
                    <p>Hacker</p>
                  </div>
                </div>

                {/* Right Big Banner Title */}
                <h2 className="text-xl md:text-2xl font-bold tracking-wide text-white uppercase font-sans">
                  {courseTitle}
                </h2>
              </div>

              {/* Golden Ribbon Bottom Accent */}
              <div className="flex justify-center -mt-2 relative z-20">
                <div className="w-32 h-6 rounded-full border-t-2 border-b-2 border-[#d4af37] bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 opacity-90 shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
              </div>

              {/* Certificate Verification Body Text */}
              <div className="text-center mt-5 px-6 space-y-2">
                <p className="text-xs md:text-sm text-zinc-300 font-medium">
                  This is to acknowledge that
                </p>

                <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-wide py-1 font-sans">
                  {recipientName || 'OPERATIVE'}
                </h3>

                <p className="text-xs md:text-sm text-zinc-300 font-medium max-w-2xl mx-auto">
                  has successfully completed all requirements and criteria for
                </p>

                <p className="text-sm md:text-base font-bold text-white tracking-wide">
                  {courseTitle}
                </p>

                <p className="text-[11px] md:text-xs text-zinc-400 font-medium">
                  certification through examination administered by EC-Council
                </p>
              </div>

            </div>

            {/* Bottom Footer: ANSI Accredited Logo + Dates + President Signature */}
            <div className="relative z-10 px-8 pb-6 flex items-end justify-between text-xs">
              
              {/* ANSI ACCREDITED SEAL */}
              <div className="flex items-center space-x-2">
                <div className="border-2 border-white rounded-full px-2.5 py-1 text-center bg-black/40">
                  <p className="text-xs md:text-sm font-black tracking-widest text-white leading-none font-sans">ANSI</p>
                  <p className="text-[6.5px] uppercase tracking-wider text-zinc-300 font-bold">ACCREDITED</p>
                </div>
                <div className="text-[7.5px] text-zinc-400 font-mono leading-tight">
                  <p>#0732</p>
                  <p>ISO/IEC 17024</p>
                  <p>Personnel Certification Program</p>
                </div>
              </div>

              {/* Issue Date & Expiry Date */}
              <div className="text-center font-medium text-[11px] md:text-xs space-y-1">
                <p className="text-zinc-300">
                  <span className="text-zinc-400">Issue Date:</span> <span className="font-bold text-white">{issueDate}</span>
                </p>
                <p className="text-zinc-300">
                  <span className="text-zinc-400">Expiry Date:</span> <span className="font-bold text-white">{expiryDate}</span>
                </p>
              </div>

              {/* Official Signature */}
              <div className="text-right space-y-1">
                <p className="font-serif italic text-lg md:text-2xl text-zinc-200 leading-none">
                  Jaybavisi
                </p>
                <div className="w-36 h-[1.5px] bg-zinc-600 ml-auto"></div>
                <p className="text-[10px] md:text-[11px] font-bold text-zinc-200">
                  Sanjay Bavisi, President
                </p>
              </div>

            </div>

          </div>
        </div>

      </main>

      {/* STRICT 1-PAGE A4 LANDSCAPE PRINT CSS */}
      <style jsx global>{`
        .ec-cert-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }
        .ec-certificate {
          width: 100%;
          min-height: 560px;
          border-radius: 4px;
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
          .ec-cert-wrapper {
            width: 297mm !important;
            height: 210mm !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            page-break-inside: avoid !important;
            page-break-after: avoid !important;
          }
          .ec-certificate {
            width: 297mm !important;
            height: 210mm !important;
            min-height: 210mm !important;
            border-radius: 0 !important;
            border: none !important;
            padding: 10mm 15mm !important;
            box-sizing: border-box !important;
            page-break-inside: avoid !important;
            page-break-after: avoid !important;
          }
        }
      `}</style>
    </div>
  );
}