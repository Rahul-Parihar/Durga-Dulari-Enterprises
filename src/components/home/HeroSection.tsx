'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import {
  Zap,
  Calendar,
  Users,
  Award,
  PhoneCall,
  MapPin,
  Wrench,
  Cpu,
  Factory,
  TrendingUp,
  GraduationCap,
  Clock,
  ShieldCheck,
  Globe,
  ShieldAlert,
  Gauge,
  Building2,
  Layers,
  X
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export function HeroSection() {
  const [previewImage, setPreviewImage] = React.useState<{ src: string; alt: string } | null>(null);

  const coreServices = [
    { title: 'Textile Manpower', href: '/services/textile-manpower-supply', icon: <Users size={18} /> },
    { title: 'Mechanical Maintenance', href: '/services/mechanical-maintenance', icon: <Wrench size={18} /> },
    { title: 'Electrical Maintenance', href: '/services/electrical-maintenance', icon: <Zap size={18} /> },
    { title: 'Electronics & Automation', href: '/services/textile-electronics-automation', icon: <Cpu size={18} /> },
    { title: 'Plant Projects & Turnkey', href: '/services/projects-division', icon: <Factory size={18} /> },
    { title: 'Consultancy & Improvement', href: '/services/textile-consultancy', icon: <TrendingUp size={18} /> },
    { title: 'Training & Development', href: '/training-recruitment', icon: <GraduationCap size={18} /> },
  ];

  const results = [
    { value: '25%', change: 'down', desc: 'Reduction in Breakdown Time', icon: <Clock size={16} className="text-red-400" /> },
    { value: '15%', change: 'down', desc: 'Reduction in Maintenance Cost', icon: <span className="text-red-400 text-sm font-bold">₹</span> },
    { value: '20%', change: 'up', desc: 'Increase in Productivity', icon: <TrendingUp size={16} className="text-emerald-400" /> },
    { value: '30%', change: 'up', desc: 'Faster Response & Support', icon: <PhoneCall size={16} className="text-emerald-400" /> },
  ];

  const slantedPanels = [
    {
      title: 'Machine Erection',
      subtitle: '& Installation',
      img: '/images/hero-spinning-mill.png',
      icon: <Factory size={16} />
    },
    {
      title: 'Mechanical',
      subtitle: 'Maintenance',
      img: '/images/hero-maintenance.png',
      icon: <Wrench size={16} />
    },
    {
      title: 'Electrical &',
      subtitle: 'Electronics Repair',
      img: '/images/hero-electronics.png',
      icon: <Zap size={16} />
    },
    {
      title: 'Utility Operator',
      subtitle: 'Reading & Monitoring',
      img: '/images/hero-spinning-operator.png',
      icon: <Gauge size={16} />
    },
    {
      title: 'Spinning',
      subtitle: 'Operators',
      img: '/images/hero-spinning-operator.png',
      icon: <Users size={16} />
    }
  ];

  const trustedMills = [
    { name: 'KPR MILL LIMITED', icon: <Factory size={14} className="text-primary-orange group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'VARDHMAN TEXTILES', icon: <Layers size={14} className="text-sky-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'GOKALDAS EXPORTS', icon: <Globe size={14} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'RKG TEXTILE MILLS', icon: <Building2 size={14} className="text-primary-orange group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'SURYALAXMI GROUP', icon: <Award size={14} className="text-amber-400 group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'NITIN SPINNERS LTD.', icon: <Cpu size={14} className="text-sky-400 group-hover:scale-110 transition-transform duration-300" /> }
  ];

  return (
    <section
      className="relative text-white pt-14 pb-12 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-spinning-mill.png')" }}
    >
      {/* Dark overlay with horizontal gradient to fade out towards the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020813] via-[#020813]/95 to-[#020813]/60 z-0 pointer-events-none" />

      {/* Inject custom CSS rules for bulletproof skewed panel transforms */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 1024px) {
          .skew-container-custom {
            transform: skewX(-12deg) skewY(-2deg) !important;
            transition: all 0.3s ease-in-out;
          }
          .skew-child-custom {
            transform: skewY(2deg) skewX(12deg) scale(1.4) !important;
            transition: all 0.3s ease-in-out;
          }
          .unskew-content-custom {
            transform: skewY(2deg) skewX(12deg) !important;
          }
          .skew-container-custom:hover {
            box-shadow: 0 0 25px rgba(244, 121, 31, 0.25) !important;
            border-color: #F4791F !important;
          }
          .skew-container-custom:hover .skew-child-custom {
            transform: skewY(2deg) skewX(12deg) scale(1.45) !important;
          }
        }
      `}} />

      {/* Background industrial grid layer */}
      <div className="absolute inset-0 dark-industrial-grid opacity-20 pointer-events-none z-0" />

      {/* Decorative Glow Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <Container className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout: Info on Left, Slanted Collage on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-stretch">

          {/* Left Column (Content, Stats, Services, Results) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 flex flex-col justify-center">

            {/* Top Badge */}
            <div className="inline-flex self-start items-center gap-2 bg-[#091d37] border border-sky-500/30 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-400">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse shrink-0" />
              India's Textile Industry Support Partner
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
              YOUR TEXTILE PLANT'S<br />
              EXTENDED <span className="text-primary-orange text-gradient-orange font-black">TECHNICAL</span> TEAM
            </h1>

            {/* Service Subtitles Bar */}
            <div className="text-slate-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest leading-relaxed">
              Manpower <span className="text-slate-600 mx-1">|</span>
              Maintenance <span className="text-slate-600 mx-1">|</span>
              Automation <span className="text-slate-600 mx-1">|</span>
              Projects <span className="text-slate-600 mx-1">|</span>
              Training
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              From manpower to maintenance, automation to projects – we help spinning mills run at maximum efficiency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-orange hover:bg-orange-600 text-white px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_4px_20px_rgba(244,121,31,0.25)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Zap size={16} className="fill-current" />
                Request Immediate Support
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 hover:bg-white/5 text-white px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar size={16} />
                Schedule Plant Audit
              </Link>
            </div>

            {/* 4 Core Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              {[
                { label: 'Skilled Professionals', val: '250+', icon: <Users size={18} /> },
                { label: 'Years of Experience', val: '20+', icon: <Award size={18} /> },
                { label: 'Emergency Support', val: '24x7', icon: <PhoneCall size={18} className="animate-pulse" /> },
                { label: 'Service Network', val: 'PAN India', icon: <MapPin size={18} /> },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-primary-orange/10 p-2.5 rounded-xl border border-primary-orange/20 text-primary-orange shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-white leading-none">{stat.val}</div>
                    <div className="text-slate-400 text-[10px] sm:text-[11px] font-semibold mt-1 leading-tight">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Our Core Services Box */}
            <div className="bg-[#041124]/80 backdrop-blur-md border border-[#0d274c] rounded-2xl p-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-orange/30 to-transparent" />

              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-[1px] w-8 bg-slate-800" />
                <span className="text-primary-orange text-[10px] sm:text-xs font-black uppercase tracking-widest">Our Core Services</span>
                <div className="h-[1px] w-8 bg-slate-800" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 justify-items-center text-center">
                {coreServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex flex-col items-center group cursor-pointer rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-orange/80 focus:ring-offset-2 focus:ring-offset-[#041124]"
                    aria-label={`Open ${service.title} page`}
                  >
                    <div className="w-9 h-9 rounded-full bg-[#081b33] border border-[#0d2c52] flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-primary-orange/20 group-hover:border-primary-orange/50 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="text-slate-400 group-hover:text-white text-[8px] sm:text-[9px] font-bold mt-1.5 leading-tight max-w-[85px] transition-colors duration-200">
                      {service.title.toUpperCase()}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Typical Results We Deliver Box */}
            <div className="bg-[#041124]/80 backdrop-blur-md border border-[#0d274c] rounded-2xl p-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-[1px] w-8 bg-slate-800" />
                <span className="text-sky-400 text-[10px] sm:text-xs font-black uppercase tracking-widest">Typical Results We Deliver</span>
                <div className="h-[1px] w-8 bg-slate-800" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {results.map((result, index) => (
                  <div key={index} className="bg-[#061833] border border-[#0c2a55] rounded-xl p-3 flex flex-col items-center text-center">
                    <div className="flex items-center gap-1">
                      <span className="text-white text-sm sm:text-base font-black">{result.value}</span>
                      <span className={result.change === 'up' ? 'text-emerald-400 text-[10px] font-bold' : 'text-red-400 text-[10px] font-bold'}>
                        {result.change === 'up' ? '▲' : '▼'}
                      </span>
                    </div>
                    <div className="text-[9px] text-slate-400 font-bold mt-0.5 leading-snug">
                      {result.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Futuristic Slanted Collage and Helpline Card) */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:pt-16">

            {/* Collage Container (Only 5 panels now, spanning full width of the column) */}
            <div className="h-[500px] lg:h-[600px] relative">
              <div className="grid grid-rows-5 gap-3.5 h-full w-full">
                {slantedPanels.map((panel, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPreviewImage({ src: panel.img, alt: `${panel.title} ${panel.subtitle}` })}
                    className="group relative overflow-hidden rounded-xl border border-slate-800/80 skew-container-custom cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary-orange/80 focus:ring-offset-2 focus:ring-offset-[#020813]"
                    aria-label={`View ${panel.title} ${panel.subtitle} image`}
                  >
                    {/* The image container (skewed & scaled to cover corners) */}
                    <div className="h-full w-full relative skew-child-custom">
                      <img
                        src={panel.img}
                        alt={panel.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Gradient overlay (placed directly on parent container so it skews, but NOT scaled) */}
                    <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/85 to-transparent pointer-events-none z-10" />

                    {/* Right orange accent bar (skewed, sitting along right slanted border) */}
                    <div className="absolute inset-y-0 right-0 w-[3px] bg-primary-orange pointer-events-none z-25" />

                    {/* Panel Label Details (counter-skewed, NOT scaled, positioned on the right) */}
                    <div className="absolute inset-0 flex items-center justify-end pr-8 pl-4 z-30 unskew-content-custom">
                      <div className="flex items-center gap-2.5 max-w-[85%]">
                        {/* Double Circle Icon wrapping */}
                        <div className="w-8 h-8 rounded-full border border-primary-orange/30 flex items-center justify-center shrink-0 p-0.5">
                          <div className="w-full h-full rounded-full bg-primary-orange/15 border border-primary-orange flex items-center justify-center text-primary-orange">
                            {panel.icon}
                          </div>
                        </div>

                        {/* Both Title & Subtitle styled as uppercase, bold, white */}
                        <div className="flex flex-col text-left">
                          <span className="text-white text-[10px] sm:text-xs font-black uppercase tracking-wider leading-tight">
                            {panel.title}
                          </span>
                          <span className="text-white text-[10px] sm:text-xs font-black uppercase tracking-wider leading-tight mt-0.5">
                            {panel.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Founder Card */}
            <div className="bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 rounded-2xl p-5 relative overflow-hidden shadow-xl w-full flex items-stretch min-h-[220px]">
              {/* Decorative glows */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-orange/5 rounded-full blur-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-500/5 rounded-full blur-lg pointer-events-none" />

              {/* Photo on the Left */}
              <button
                type="button"
                onClick={() => setPreviewImage({ src: '/images/founder.png', alt: 'Vijay Kumar Ojha' })}
                className="w-[35%] shrink-0 select-none flex items-stretch py-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-orange/80 focus:ring-offset-2 focus:ring-offset-[#020813] rounded-xl"
                aria-label="View Vijay Kumar Ojha image"
              >
                <img
                  src="/images/founder.png"
                  alt="Vijay Kumar Ojha"
                  className="w-full h-full object-cover object-top rounded-xl border border-white/10 shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                />
              </button>

              {/* Content on the Right */}
              <div className="w-[65%] pl-4 flex flex-col justify-center relative z-20">
                <span className="text-primary-orange text-[8px] sm:text-[9px] font-black uppercase tracking-widest block leading-none mb-1">
                  Led by Experience, Built on Trust
                </span>
                <h4 className="text-white text-base sm:text-lg lg:text-xl font-black uppercase leading-tight tracking-wide">
                  Vijay Kumar Ojha
                </h4>
                <span className="text-primary-orange text-[9px] sm:text-[10px] lg:text-xs font-extrabold uppercase tracking-wide mt-1 block">
                  20+ Years of Textile Industry Expertise
                </span>

                <ul className="mt-3.5 space-y-2 text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-slate-350">
                  {[
                    'PV Dyed Yarn & Compact Siro Expert',
                    'Plant Maintenance & Operations Specialist',
                    'Project Execution & Turnkey Solutions',
                    'Sick Mill Revival & Turnaround Consultant',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-primary-orange flex items-center justify-center text-white shrink-0 p-0.5 mt-0.5">
                        <svg className="w-2 h-2 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="leading-tight text-slate-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Trusted Mills Section */}
        <div className="mt-8 border-t border-slate-800/80 pt-5">

          {/* Section Divider & Heading */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-[1px] bg-slate-800/60" />
            <span className="text-primary-orange text-[10px] sm:text-xs font-black uppercase tracking-widest text-center whitespace-nowrap px-2">
              Trusted by Spinning Mills Across India
            </span>
            <div className="flex-1 h-[1px] bg-slate-800/60" />
          </div>

          {/* Grid of Logos & Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">

            {/* Logos Grid Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[10px] sm:text-xs font-black tracking-wider text-slate-300">
                {trustedMills.map((mill, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 bg-[#041124]/40 border border-slate-800/40 hover:border-slate-800 hover:bg-[#03152d]/60 rounded-2xl py-2.5 px-3 hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                  >
                    <div className="bg-slate-900/80 p-1.5 rounded-lg border border-slate-800/60 group-hover:border-slate-700 shrink-0">
                      {mill.icon}
                    </div>
                    <span className="truncate">{mill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Pillars Column (5 cols) */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-4 lg:pt-0 lg:pl-5">
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { label: 'PAN India Operations', icon: <Globe size={18} className="text-sky-400" /> },
                  { label: 'Certified & Compliant', icon: <ShieldCheck size={18} className="text-emerald-400" /> },
                  { label: 'Safe & Trained Workforce', icon: <ShieldAlert size={18} className="text-red-400" /> },
                  { label: 'Advanced Tools & Tech', icon: <Cpu size={18} className="text-amber-400" /> },
                ].map((pillar, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2.5 p-2.5 bg-[#041124]/20 border border-slate-900/60 rounded-2xl hover:border-slate-800/80 hover:bg-[#03152d]/40 transition-all duration-300 text-slate-400 hover:text-white"
                  >
                    <div className="bg-slate-900/50 p-2 rounded-xl border border-slate-800/60 shrink-0">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider leading-tight">
                      {pillar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </Container>

      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-3 py-14 sm:px-6 sm:py-16">
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-default"
            onClick={() => setPreviewImage(null)}
            aria-label="Close image preview"
          />

          <div className="relative z-10 flex max-h-[88vh] w-full max-w-[94vw] items-center justify-center">
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              className="absolute right-0 top-0 -translate-y-12 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/90 text-white hover:border-primary-orange hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange"
              aria-label="Close image preview"
            >
              <X size={22} />
            </button>

            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="max-h-[88vh] max-w-full rounded-2xl border border-white/15 object-contain shadow-2xl bg-slate-950"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
