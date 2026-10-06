'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { industries } from '@/data/industries';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  ShieldCheck,
  Clock,
  Users,
  Award,
  SlidersHorizontal,
  RotateCcw,
  Layers,
  MapPin,
} from 'lucide-react';

export function IndustriesContent() {
  const [activeSector, setActiveSector] = useState<string>('all');

  const isSingleSector = activeSector !== 'all';

  const filteredIndustries =
    activeSector === 'all'
      ? industries
      : industries.filter((ind) => ind.slug === activeSector);

  // Helper to turn comma-separated focus string into clean array of machine/process tags
  const parseFocusTags = (focusStr: string) => {
    return focusStr
      .replace(/and /gi, '')
      .replace(/\./g, '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  };

  return (
    <div className="bg-slate-50/70 dark:bg-slate-950">
      {/* 1. High-Impact Dark Industrial Hero Section with Cinematic Visual Showcase */}
      <section className="relative bg-gradient-to-br from-[#061528] via-[#091F38] to-[#030914] py-12 sm:py-16 lg:py-20 overflow-hidden text-white border-b border-slate-800">
        {/* Ambient background plant image with dark overlay & subtle blur */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity filter blur-[1px] scale-105 pointer-events-none"
          style={{ backgroundImage: "url('/images/industries-hero.jpg')" }}
        />

        {/* Gradient dark overlays to maintain high contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061528] via-[#091F38]/90 to-[#030914]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030914_90%)] pointer-events-none" />

        {/* Ambient glowing accent orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-orange/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <Container className="relative z-10">
          {/* Top 2-Column Hero Section: Content & Visual Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange border border-primary-orange/35 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit shadow-xs backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Sector-Focused Industrial Support</span>
              </div>

              {/* High-Impact Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-[1.15] text-white">
                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-amber-400 to-primary-orange">Power Across India</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal mb-6 max-w-2xl">
                Engineered manpower, scheduled maintenance, and operational solutions built specifically for textile and manufacturing production floors.
              </p>

              {/* Operational Highlights Badges */}
              <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold text-slate-300">
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Spinning & Weaving Mill Teams
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Preventive & Overhaul SOPs
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  100% Statutory & ESIC/PF Compliant
                </span>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#sectors"
                  className="inline-flex items-center gap-2 bg-primary-orange hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-md transition-all hover:scale-102 active:scale-98"
                >
                  <span>Explore 6+ Verticals</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg border border-white/15 backdrop-blur-sm transition-all hover:border-primary-orange/40"
                >
                  <span>Request Technical Manpower</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Unique Interactive Industrial Showcase Image Card */}
            <div className="lg:col-span-5 relative animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              {/* Outer decorative gradient border with glowing shadow */}
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-tr from-primary-orange/80 via-sky-400/30 to-white/20 shadow-[0_0_50px_rgba(244,121,31,0.22)] hover:shadow-[0_0_60px_rgba(244,121,31,0.38)] transition-all duration-500 group">
                {/* Image Container */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3] w-full">
                  <Image
                    src="/images/industries-hero.jpg"
                    alt="Industrial Floor Operations - Durga Dulari Enterprises Engineers & Technicians on Production Floor"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  />
                  {/* Subtle gradient overlay at top and bottom of photo for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-black/65 pointer-events-none" />

                  {/* Top Floating Badges: Live Operations status */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-2 bg-slate-950/85 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[11px] font-bold text-white shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>Live Floor Teams • 12+ States</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 bg-primary-orange/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                      <span>OEM Certified</span>
                    </div>
                  </div>

                  {/* Bottom Floating Stats / Highlight Panel */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 pointer-events-none">
                    <div className="bg-slate-950/85 backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-xl">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-primary-orange shrink-0" />
                          On-Floor Diagnostics & Maintenance
                        </span>
                        <span className="text-[11px] font-extrabold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                          99.8% Uptime SLA
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-normal leading-tight">
                        Rieter • LMW • Savio • Mayer & Cie • Trützschler specialized teams
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background glow behind the card */}
              <div className="absolute -bottom-6 -right-6 w-52 h-52 bg-primary-orange/20 rounded-full blur-3xl -z-10 pointer-events-none" />
            </div>
          </div>

          {/* Key Operational Metrics Counter Bar - Perfectly Aligned Full-Width Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-12 pt-8 border-t border-slate-700/60">
            {/* Card 1: 6+ Industrial Verticals */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/10 hover:border-primary-orange/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-orange tracking-tight leading-none whitespace-nowrap group-hover:scale-105 transition-transform">
                  6+
                </span>
                <div className="w-8 h-8 rounded-lg bg-primary-orange/15 border border-primary-orange/30 flex items-center justify-center text-primary-orange">
                  <Layers className="w-4 h-4" />
                </div>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                Industrial Verticals
              </div>
            </div>

            {/* Card 2: 10,000+ Skilled Technicians */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/10 hover:border-primary-orange/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-none whitespace-nowrap group-hover:scale-105 transition-transform">
                  10,000+
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                Skilled Technicians
              </div>
            </div>

            {/* Card 3: 99.8% Uptime Reliability */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/10 hover:border-primary-orange/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-orange tracking-tight leading-none whitespace-nowrap group-hover:scale-105 transition-transform">
                  99.8%
                </span>
                <div className="w-8 h-8 rounded-lg bg-primary-orange/15 border border-primary-orange/30 flex items-center justify-center text-primary-orange">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                Uptime Reliability
              </div>
            </div>

            {/* Card 4: PAN India 12+ States Deployed */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/10 hover:border-primary-orange/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-none whitespace-nowrap group-hover:scale-105 transition-transform">
                  PAN India
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                12+ States Deployed
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Sector Switcher Bar (Clean, Number Removed) */}
      <section id="sectors" className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-y border-slate-200 dark:border-slate-800 shadow-xs py-3.5 sm:py-4">
        <Container>
          <div className="flex items-center justify-start sm:justify-center gap-3 sm:gap-3.5 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center gap-1.5 shrink-0 text-slate-400 mr-2 sm:mr-3">
              <SlidersHorizontal size={14} className="text-primary-orange" />
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Sector:</span>
            </div>

            <button
              onClick={() => setActiveSector('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 select-none ${activeSector === 'all'
                ? 'bg-primary-navy text-white shadow-xs ring-1 ring-primary-orange/40 scale-102'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
            >
              All Sectors ({industries.length})
            </button>

            {industries.map((ind) => {
              const isActive = activeSector === ind.slug;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveSector(ind.slug)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 select-none ${isActive
                    ? 'bg-primary-navy text-white shadow-xs ring-1 ring-primary-orange/40 scale-102'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                >
                  <DynamicIcon name={ind.icon} size={14} />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Dynamic Sector Display (Full-Width for Single Sector, 2-Col Grid for All) */}
      <section className="py-10 sm:py-14">
        <Container>
          {isSingleSector ? (
            /* Full Width Expansive Card when a specific sector is selected */
            <div
              key={activeSector}
              className="w-full max-w-6xl mx-auto animate-fade-in-up"
            >
              {filteredIndustries.map((industry) => {
                const focusTags = parseFocusTags(industry.focus);

                return (
                  <div
                    key={industry.id}
                    id={industry.slug}
                    className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden"
                  >
                    {/* Top Header: Full Width Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-7 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-start gap-4 sm:gap-5">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm">
                          <DynamicIcon name={industry.icon} size={30} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700">
                              Featured Industrial Sector
                            </span>
                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-md">
                              24h Fast Deployment
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
                            {industry.name}
                          </h2>
                          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium mt-2 max-w-3xl leading-relaxed">
                            {industry.description}
                          </p>
                        </div>
                      </div>

                      {/* Header Quick Actions */}
                      <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-3 shrink-0">
                        <Link
                          href={`/contact?requirement=${industry.slug}`}
                          className="group/btn inline-flex items-center gap-2 px-6 py-3.5 bg-primary-navy hover:bg-[#071b33] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                          <span>Inquire for {industry.name}</span>
                          <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                        <button
                          onClick={() => setActiveSector('all')}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-primary-navy dark:hover:text-white transition-colors py-1"
                        >
                          <RotateCcw size={13} />
                          <span>View All 6 Sectors</span>
                        </button>
                      </div>
                    </div>

                    {/* Body: 2 Full-Width Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8">
                      {/* Left: Machinery Coverage & Measurable Outcomes */}
                      <div className="lg:col-span-5 space-y-6">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                            <Target className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                            <span>Machinery & Line Coverage</span>
                          </div>
                          <p className="text-xs text-slate-500 font-medium mb-3">
                            Trained operators & technical coverage across plant equipment:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {focusTags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold border border-slate-200/60 dark:border-slate-700 cursor-default"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Measurable Plant Outcomes */}
                        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200/70 dark:border-slate-700/60">
                          <div className="text-xs font-extrabold uppercase tracking-wider text-primary-navy dark:text-white mb-3 flex items-center gap-2">
                            <Sparkles size={14} className="text-slate-500 dark:text-slate-400" />
                            <span>Measurable Plant Outcomes</span>
                          </div>
                          <div className="space-y-2.5">
                            {industry.outcomes.map((outcome, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200"
                              >
                                <CheckCircle2 size={16} className="text-slate-600 dark:text-slate-300 shrink-0" />
                                <span>{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Operational Support Checklist */}
                      <div className="lg:col-span-7">
                        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
                          <ShieldCheck className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                          <span>Core Operational Support Areas</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {industry.how_we_help.map((help, idx) => (
                            <div
                              key={idx}
                              className="bg-slate-50 dark:bg-slate-800/70 rounded-xl p-4 border border-slate-100 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-800 transition-all flex items-start gap-3 shadow-xs"
                            >
                              <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-extrabold border border-slate-200 dark:border-slate-700">
                                ✓
                              </span>
                              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                                {help}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* 2-Column Grid when All Sectors is active */
            <div
              key={activeSector}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 animate-fade-in-up"
            >
              {filteredIndustries.map((industry, index) => {
                const focusTags = parseFocusTags(industry.focus);

                return (
                  <div
                    key={industry.id}
                    id={industry.slug}
                    style={{ animationDelay: `${index * 80}ms` }}
                    className="group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden animate-fade-in-up"
                  >
                    <div>
                      {/* Header: Icon, Badge, Title */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 shadow-xs group-hover:scale-105 transition-all duration-300">
                            <DynamicIcon name={industry.icon} size={22} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200/80 dark:border-slate-700">
                                Vertical 0{index + 1}
                              </span>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-primary-navy dark:text-white tracking-tight mt-0.5">
                              {industry.name}
                            </h2>
                          </div>
                        </div>

                        <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md shrink-0">
                          24h Dispatch
                        </span>
                      </div>

                      {/* Short Concise Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-4">
                        {industry.description}
                      </p>

                      {/* Machinery & Process Coverage Chips */}
                      <div className="mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          <Target className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" />
                          <span>Machinery & Line Coverage</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {focusTags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200/60 dark:border-slate-700 cursor-default"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Structured Support Areas */}
                      <div className="mb-4">
                        <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          <ShieldCheck className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" />
                          <span>Core Operational Support</span>
                        </div>
                        <div className="space-y-1.5">
                          {industry.how_we_help.map((help, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-snug p-1 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                            >
                              <span className="text-slate-400 dark:text-slate-500 font-extrabold text-xs shrink-0 mt-0.5">✓</span>
                              <span>{help}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom: Outcomes & Action Button */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {industry.outcomes.map((outcome, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                          >
                            <CheckCircle2 size={11} className="text-slate-500 dark:text-slate-400" />
                            <span>{outcome}</span>
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <Link
                          href={`/contact?requirement=${industry.slug}`}
                          className="group/btn inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-navy hover:bg-[#071b33] text-white font-bold text-xs rounded-xl transition-all shadow-xs hover:shadow-md hover:scale-102 active:scale-95"
                        >
                          <span>Inquire for {industry.name}</span>
                          <ArrowRight size={13} className="group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                        </Link>

                        <span className="text-xs text-slate-400 font-semibold">
                          PAN India Service
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* 4. Trust & Compliance Strip - Compact & Hover Animated */}
      <section className="py-10 sm:py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Why Mill Owners Depend On Durga Dulari
            </h3>
            <p className="text-slate-500 text-xs font-medium mt-1">
              Uncompromising operational standards designed to safeguard plant uptime and workforce integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="group bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 rounded-xl border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg hover:border-primary-orange/30 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-primary-orange/10 text-primary-orange flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary-orange group-hover:text-white transition-all duration-300">
                <Clock size={18} />
              </div>
              <h4 className="font-bold text-primary-navy dark:text-white text-sm mb-1">
                24-Hour Deployment
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Emergency staffing desks ready to deploy vetted operators within 24 hours to prevent shift stoppages.
              </p>
            </div>

            <div className="group bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 rounded-xl border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg hover:border-primary-orange/30 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-primary-orange/10 text-primary-orange flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary-orange group-hover:text-white transition-all duration-300">
                <ShieldCheck size={18} />
              </div>
              <h4 className="font-bold text-primary-navy dark:text-white text-sm mb-1">
                100% Legal Compliance
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Complete PF, ESIC, insurance, and statutory labor documentation managed transparently with zero mill liability.
              </p>
            </div>

            <div className="group bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 rounded-xl border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg hover:border-primary-orange/30 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-primary-orange/10 text-primary-orange flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary-orange group-hover:text-white transition-all duration-300">
                <Users size={18} />
              </div>
              <h4 className="font-bold text-primary-navy dark:text-white text-sm mb-1">
                Pre-Vetted Operators
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Rigorous multi-stage vetting ensuring experienced ring frame, carding, weaving, and dyeing operators.
              </p>
            </div>

            <div className="group bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 rounded-xl border border-slate-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-lg hover:border-primary-orange/30 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-primary-orange/10 text-primary-orange flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary-orange group-hover:text-white transition-all duration-300">
                <Award size={18} />
              </div>
              <h4 className="font-bold text-primary-navy dark:text-white text-sm mb-1">
                Zero Stoppage SLA
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Service Level Agreements focused on reducing machine downtime, waste realization, and CV% defects.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. High-Conversion Industrial CTA Section - Tight & Focused */}
      {/* <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950">
        <Container>
          <div className="bg-gradient-to-br from-[#0B2545] via-[#081f3b] to-[#040e1b] rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden border border-slate-700/50">
            <div className="absolute right-0 top-0 w-60 h-60 bg-primary-orange/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <span className="inline-block bg-primary-orange text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
                Get Industry Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                Need Customized Support for Your Facility?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 max-w-lg mx-auto font-medium leading-relaxed">
                Share your plant vertical, shift requirements, and operational challenges. Our technical team will structure a custom proposal.
              </p>

              <div className="flex items-center justify-center">
                <Link
                  href="/contact"
                  className="group/btn px-8 py-3.5 bg-primary-orange hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <span>Request Custom Plant Proposal</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section> */}
    </div>
  );
}
