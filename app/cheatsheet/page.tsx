'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { CyberSmokeHeader } from "@/components/CyberSmokeHeader";
import { StudentAIAssistant } from "@/components/StudentAIAssistant";
import cheatsheetData from "@/data/cheatsheets.json";
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  Search, 
  ChevronLeft, 
  ChevronRight,
  Database,
  Layers
} from "lucide-react";

const ITEMS_PER_PAGE = 8;

export default function CheatSheetPage() {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Recon', 'Web Security', 'PrivEsc', 'Forensics', 'Cloud Security', 'Active Directory'];

  const filteredPayloads = useMemo(() => {
    return cheatsheetData.filter((item) => {
      const matchesCat = selectedCat === 'All' || item.category === selectedCat;
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.code.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCat, search]);

  const totalPages = Math.ceil(filteredPayloads.length / ITEMS_PER_PAGE) || 1;
  const displayedItems = filteredPayloads.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono pb-16">
      <CyberSmokeHeader />

      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
        {/* Navigation & Header Stats */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 transition group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition" />
            <span>← RETURN TO DASHBOARD</span>
          </Link>
          <div className="flex items-center space-x-2 text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARSENAL DATABASE: <strong>{filteredPayloads.length}</strong> ENTRIES</span>
          </div>
        </div>

        {/* Filters & Real-Time Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCat(cat);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-cyan-500 text-zinc-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search 1,000+ payloads..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedItems.map((payload) => (
            <div
              key={payload.id}
              className="p-4 rounded-2xl bg-zinc-900/70 border border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-md transition flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold uppercase">
                    {payload.category}
                  </span>
                  <span className="text-[9px] text-zinc-600 font-mono">#{payload.id}</span>
                </div>
                <h3 className="text-xs font-bold text-zinc-100">{payload.title}</h3>
                <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">{payload.description}</p>
              </div>

              <div className="relative group">
                <pre className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-cyan-300 overflow-x-auto whitespace-pre-wrap font-mono select-all">
                  {payload.code}
                </pre>
                <button
                  onClick={() => handleCopy(payload.id, payload.code)}
                  className="absolute right-2 top-2 p-1 rounded-md bg-zinc-800/90 border border-zinc-700 text-zinc-300 hover:text-cyan-400 transition cursor-pointer"
                  title="Copy payload"
                >
                  {copiedId === payload.id ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controller */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
            <span className="text-xs text-zinc-500">
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 disabled:opacity-30 hover:bg-zinc-800 transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 disabled:opacity-30 hover:bg-zinc-800 transition cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      <StudentAIAssistant />
    </main>
  );
}
