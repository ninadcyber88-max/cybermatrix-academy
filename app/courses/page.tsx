'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown, 
  Video, 
  Radio, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  ExternalLink,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { CyberSmokeHeader } from '@/components/CyberSmokeHeader';

interface Course {
  id: string;
  title: string;
  instructor: string;
  price: string;
  isFree?: boolean;
  originalPrice?: string;
  format: 'RECORDED' | 'LIVE';
  category: string;
  badgeColor: string;
  imageBg: string;
  topics: string[];
}

const COURSES_LIST: Course[] = [
  {
    id: 'c1',
    title: 'Ethical Hacking Full Certification Masterclass',
    instructor: 'Ninad Pawar',
    price: 'Free',
    isFree: true,
    format: 'RECORDED',
    category: 'Ethical Hacking',
    badgeColor: 'bg-indigo-600 text-white',
    imageBg: 'from-blue-900 via-indigo-950 to-slate-950',
    topics: ['Footprinting & Recon', 'System Hacking', 'Metasploit Pro', 'Privilege Escalation']
  },
  {
    id: 'c2',
    title: 'Dark Web Mastery & Intelligence Defense',
    instructor: 'Ninad Pawar',
    price: '₹4,999',
    originalPrice: '₹14,999',
    format: 'LIVE',
    category: 'OSINT & Dark Web',
    badgeColor: 'bg-rose-600 text-white',
    imageBg: 'from-purple-950 via-slate-900 to-zinc-950',
    topics: ['Tor Architecture', 'Threat Recon', 'Encrypted Networks', 'OpSec Protocols']
  },
  {
    id: 'c3',
    title: 'Practical Web Application Penetration Testing (VAPT)',
    instructor: 'Ninad Pawar',
    price: '₹1,499',
    originalPrice: '₹4,999',
    format: 'RECORDED',
    category: 'VAPT',
    badgeColor: 'bg-cyan-600 text-black',
    imageBg: 'from-cyan-950 via-slate-900 to-black',
    topics: ['OWASP Top 10', 'Burp Suite Suite', 'SQL Injection', 'API Pentesting']
  },
  {
    id: 'c4',
    title: 'Bug Bounty Bootcamp: Zero to Hero',
    instructor: 'Ninad Pawar',
    price: '₹4,999',
    originalPrice: '₹12,000',
    format: 'LIVE',
    category: 'Bug Bounty',
    badgeColor: 'bg-rose-600 text-white',
    imageBg: 'from-rose-950 via-zinc-900 to-black',
    topics: ['Subdomain Takeover', 'Business Logic Flaws', 'IDOR Exploitation', 'HackerOne Proofs']
  },
  {
    id: 'c5',
    title: '1-on-1 Elite Mentorship & Offensive Operations',
    instructor: 'Ninad Pawar',
    price: '₹79,999',
    originalPrice: '₹1,20,000',
    format: 'LIVE',
    category: 'Mentorship',
    badgeColor: 'bg-amber-500 text-black',
    imageBg: 'from-amber-950 via-zinc-900 to-black',
    topics: ['Custom Exploitation', 'Direct Live Mentorship', 'Job Placement Prep', 'Active Sandboxes']
  },
  {
    id: 'c6',
    title: 'Cloud Security Hardening & AWS DFIR',
    instructor: 'Ninad Pawar',
    price: '₹2,499',
    originalPrice: '₹6,999',
    format: 'RECORDED',
    category: 'Cloud Security',
    badgeColor: 'bg-indigo-600 text-white',
    imageBg: 'from-blue-950 via-slate-900 to-zinc-950',
    topics: ['AWS IAM Security', 'S3 Bucket Leaks', 'SIEM Correlation', 'Incident Forensics']
  }
];

export default function CoursesMarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState<'ALL' | 'FREE' | 'PREMIUM'>('ALL');
  const [formatFilter, setFormatFilter] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'courses' | 'instructors'>('courses');

  const handleFormatChange = (fmt: 'RECORDED' | 'LIVE') => {
    if (formatFilter.includes(fmt)) {
      setFormatFilter(formatFilter.filter((f) => f !== fmt));
    } else {
      setFormatFilter([...formatFilter, fmt]);
    }
  };

  const filteredCourses = COURSES_LIST.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice =
      priceFilter === 'ALL'
        ? true
        : priceFilter === 'FREE'
        ? course.isFree
        : !course.isFree;

    const matchesFormat =
      formatFilter.length === 0 ? true : formatFilter.includes(course.format);

    return matchesSearch && matchesPrice && matchesFormat;
  });

  return (
    <div className="min-h-screen bg-[#0b0f19] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* 1. Global Header */}
      <CyberSmokeHeader />

      {/* 2. Sub Navigation Bar */}
      <div className="border-b border-zinc-800/80 bg-[#0d1322]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between text-xs">
          
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-zinc-400 hover:text-cyan-400 flex items-center space-x-1.5 transition">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>CTF Sandbox</span>
            </Link>
            <button className="text-white font-semibold border-b-2 border-cyan-400 pb-4 pt-4">
              Courses
            </button>
            <Link href="/" className="text-zinc-400 hover:text-zinc-200 transition">
              CCEH Program ↗
            </Link>
            <Link href="/" className="text-zinc-400 hover:text-zinc-200 transition">
              Articles
            </Link>
            <Link href="/" className="text-zinc-400 hover:text-zinc-200 transition">
              Verify Certificate
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition shadow-sm"
            >
              Log in
            </Link>
          </div>

        </div>
      </div>

      {/* 3. Hero Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-6">
        <p className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase font-mono">
          Course Marketplace
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
          Explore Courses
        </h1>
        <p className="text-sm text-zinc-400 mt-2">
          Hands-on cybersecurity courses from CyberMatrix Academy and industry instructors.
        </p>

        {/* Tab Selection */}
        <div className="flex items-center space-x-6 mt-6 border-b border-zinc-800 text-sm">
          <button
            onClick={() => setActiveTab('courses')}
            className={`flex items-center space-x-2 pb-3 font-medium transition border-b-2 ${
              activeTab === 'courses'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Courses</span>
            <span className="px-1.5 py-0.2 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">
              {COURSES_LIST.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('instructors')}
            className={`flex items-center space-x-2 pb-3 font-medium transition border-b-2 ${
              activeTab === 'instructors'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Instructors</span>
            <span className="px-1.5 py-0.2 rounded-full bg-zinc-800 text-zinc-400 text-xs">
              1
            </span>
          </button>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses or instructors..."
              className="w-full pl-10 pr-4 py-2 bg-[#131b2e] border border-zinc-800 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div className="flex items-center space-x-2 text-xs text-zinc-400 w-full md:w-auto justify-end">
            <div className="flex items-center space-x-2 px-3 py-2 bg-[#131b2e] border border-zinc-800 rounded-xl cursor-pointer">
              <span>Newest</span>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Main Marketplace Body (Sidebar Filters + Cards Grid) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-56 shrink-0 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Filters</span>
          </div>

          {/* Price Filter */}
          <div className="space-y-2.5">
            <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Price</p>
            <div className="space-y-2 text-xs">
              {[
                { label: 'All courses', val: 'ALL' },
                { label: 'Free', val: 'FREE' },
                { label: 'Premium', val: 'PREMIUM' },
              ].map((opt) => (
                <label key={opt.val} className="flex items-center space-x-2.5 cursor-pointer text-zinc-300 hover:text-white">
                  <input
                    type="radio"
                    name="priceFilter"
                    checked={priceFilter === opt.val}
                    onChange={() => setPriceFilter(opt.val as any)}
                    className="accent-blue-500 w-3.5 h-3.5"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Format Filter */}
          <div className="space-y-2.5 pt-4 border-t border-zinc-800">
            <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Format</p>
            <div className="space-y-2 text-xs">
              {[
                { label: 'Recorded', val: 'RECORDED' },
                { label: 'Live', val: 'LIVE' },
              ].map((fmt) => (
                <label key={fmt.val} className="flex items-center space-x-2.5 cursor-pointer text-zinc-300 hover:text-white">
                  <input
                    type="checkbox"
                    checked={formatFilter.includes(fmt.val)}
                    onChange={() => handleFormatChange(fmt.val as any)}
                    className="accent-blue-500 w-3.5 h-3.5 rounded"
                  />
                  <span>{fmt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Instructor Filter */}
          <div className="space-y-2.5 pt-4 border-t border-zinc-800">
            <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Instructor</p>
            <div className="space-y-2 text-xs">
              <label className="flex items-center space-x-2.5 cursor-pointer text-zinc-300 hover:text-white">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-blue-500 w-3.5 h-3.5 rounded"
                />
                <span>Ninad Pawar</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Courses Marketplace Grid */}
        <section className="flex-1">
          <p className="text-xs text-zinc-400 mb-4 font-mono">
            {filteredCourses.length} courses
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#111728] border border-zinc-800/90 overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer"
              >
                {/* Course Card Banner / Image Area */}
                <div className={`relative h-44 bg-gradient-to-br ${course.imageBg} p-4 flex flex-col justify-between overflow-hidden border-b border-zinc-800/80`}>
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between z-10">
                    <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider ${course.badgeColor}`}>
                      {course.format === 'LIVE' ? (
                        <>
                          <Radio className="w-2.5 h-2.5 animate-pulse" />
                          <span>LIVE</span>
                        </>
                      ) : (
                        <>
                          <Video className="w-2.5 h-2.5" />
                          <span>RECORDED</span>
                        </>
                      )}
                    </span>

                    {course.originalPrice && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 text-zinc-300 border border-white/10 backdrop-blur-sm">
                        {course.price}
                      </span>
                    )}
                  </div>

                  {/* Banner Graphic Content */}
                  <div className="z-10 mt-auto">
                    <div className="flex items-center space-x-1.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1 font-mono">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{course.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center font-black text-[10px] text-cyan-300">
                        NP
                      </div>
                      <span className="text-[11px] text-zinc-300 font-medium">CYBERMATRIX LAB</span>
                    </div>
                  </div>

                  {/* Aesthetic Grid Watermark */}
                  <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                </div>

                {/* Course Card Details */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition line-clamp-2 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 font-medium">
                      {course.instructor}
                    </p>
                  </div>

                  {/* Pricing and Action */}
                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-extrabold text-white">
                        {course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-[10px] text-zinc-500 line-through ml-2">
                          {course.originalPrice}
                        </span>
                      )}
                    </div>

                    <span className="text-xs text-blue-400 font-semibold group-hover:underline flex items-center space-x-1">
                      <span>View Course</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 5. Footer */}
      <footer className="border-t border-zinc-900 bg-[#090d16] py-8 text-center text-xs text-zinc-500">
        CYBERMATRIX ACADEMY // ARCHITECTED BY NINAD PAWAR // DEFENSE MATRIX ACTIVE
      </footer>

    </div>
  );
}