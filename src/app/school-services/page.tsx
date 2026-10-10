import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  Droplets,
  Sun,
  ShieldCheck,
  Wrench,
  Cpu,
  Cable,
  Wind,
  Shirt,
  Layers,
  Monitor,
  Hammer,
  HardHat,
  CircuitBoard,
  CheckCircle2,
  Download,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { ScrollReveal } from '@/components/common/ScrollReveal';

/* ─────────────────────────── DATA ─────────────────────────── */







const labData = [
  { name: 'Spinning Lab', area: '120 sq.m.', batch: 30, icon: Layers, color: 'from-orange-500 to-red-500', equipment: ['Ring Frame (10-spindle)', 'Auto Coner', 'Speed Frame', 'Compact Spinning Setup', 'Uster Tester & Quality Inst.'] },
  { name: 'Mechanical Lab', area: '80 sq.m.', batch: 25, icon: Wrench, color: 'from-slate-500 to-zinc-600', equipment: ['Bearing Display (50 types)', 'Alignment Rig', 'Gear Box', 'Coupling Display', 'Pneumatic & Hydraulic Panel'] },
  { name: 'Electrical Lab', area: '80 sq.m.', batch: 25, icon: Zap, color: 'from-yellow-500 to-amber-600', equipment: ['DOL · Star Delta Panels', 'VFD Training Boards', 'MCC Panel Demo', 'LT Panel', 'Motor Rewinding'] },
  { name: 'Electronics / Automation Lab', area: '80 sq.m.', batch: 20, icon: Cpu, color: 'from-blue-500 to-indigo-600', equipment: ['5× PLC Trainers (Siemens)', 'HMI · Servo Drive Trainers', 'Encoder & Sensor Display', 'Profibus/Profinet Panel'] },
  { name: 'Utility Lab', area: '70 sq.m.', batch: 20, icon: Wind, color: 'from-teal-500 to-cyan-600', equipment: ['Screw Compressor (5HP)', 'Boiler Cut Section', 'Cooling Tower Model', 'Pump Trainer', 'RO Demo'] },
  { name: 'Garment Lab', area: '70 sq.m.', batch: 30, icon: Shirt, color: 'from-pink-500 to-rose-600', equipment: ['8× SNLS Machines', '4× Overlock Machines', '2× Flatlock Machines', 'Button Attach', 'Finishing'] },
  { name: 'Knitting Lab', area: '60 sq.m.', batch: 25, icon: Layers, color: 'from-violet-500 to-purple-600', equipment: ['4× Circular Knitting M/C', '2× Flat Knitting M/C', 'GSM Cutter', 'Creel', 'Fabric Inspection Board'] },
  { name: 'Computer Lab', area: '60 sq.m.', batch: 50, icon: Monitor, color: 'from-sky-500 to-blue-600', equipment: ['50 × HP i5 Systems', 'CISCO Switch', 'Server', '100 Mbps LAN', 'LMS Software'] },
  { name: 'Tool Room', area: '30 sq.m.', batch: null, icon: Hammer, color: 'from-stone-500 to-stone-600', equipment: ['All Hand Tools Display', 'Special Tools Kit', 'Complete tool set display'] },
  { name: 'Safety Room', area: '30 sq.m.', batch: null, icon: HardHat, color: 'from-red-500 to-rose-600', equipment: ['PPE Display Board', 'Safety Equipment Store', 'First Aid', 'Fire Demo'] },
  { name: 'Motor Rewinding Lab', area: '20 sq.m.', batch: 10, icon: Cable, color: 'from-amber-600 to-yellow-600', equipment: ['Winding Bench', 'Megger', 'Insulation Tester'] },
  { name: 'Pneumatic / Hydraulic Lab', area: '20 sq.m.', batch: 10, icon: CircuitBoard, color: 'from-emerald-500 to-green-600', equipment: ['Pneumatic Panel', 'Hydraulic Trainer'] },
];

const infraTable = [
  { lab: 'Spinning Lab', desc: 'Full working spinning models', area: '120', batch: '30', equipment: 'Ring Frame, Auto Coner, Speed Frame' },
  { lab: 'Mechanical Lab', desc: 'Bearings, alignment, workshop', area: '80', batch: '25', equipment: 'Lathe, Bearing Board, Alignment Rig' },
  { lab: 'Electrical Lab', desc: 'Panels, VFD, motor rewinding', area: '80', batch: '25', equipment: 'Star Delta, VFD, MCC, LT Panel' },
  { lab: 'Electronics Lab', desc: 'PLC, HMI, Servo, Sensors', area: '80', batch: '20', equipment: 'Siemens S7-1200, HMI, Servo Drive' },
  { lab: 'Utility Lab', desc: 'Compressor, Boiler, Pumps', area: '70', batch: '20', equipment: 'Atlas Copco, Boiler Cut, Pump Trainer' },
  { lab: 'Garment Lab', desc: 'Sewing, overlocking, finishing', area: '70', batch: '30', equipment: 'JUKI SNLS ×8, Overlock ×4, Flatlock ×2' },
  { lab: 'Knitting Lab', desc: 'Circular + flat knitting', area: '60', batch: '25', equipment: 'Circular ×4, Flat ×2, GSM Cutter' },
  { lab: 'Computer Lab', desc: '50 nodes, 100 Mbps, LMS', area: '60', batch: '50', equipment: 'HP i5, CISCO Switch, Server' },
  { lab: 'Tool Room', desc: 'Hand tools, special tools', area: '30', batch: '–', equipment: 'Complete tool set display' },
  { lab: 'Safety Room', desc: 'PPE, fire, first aid display', area: '30', batch: '–', equipment: 'PPE kits, fire extinguishers' },
  { lab: 'Motor Rewinding', desc: 'Rewinding bench, wire, test', area: '20', batch: '10', equipment: 'Winding bench, Megger, Insulation tester' },
  { lab: 'Pneumatic/Hydraulic', desc: 'Air circuits, hydraulics demo', area: '20', batch: '10', equipment: 'Pneumatic panel, Hydraulic trainer' },
];

const blockSummary = [
  { block: 'Admin Block', floors: 'G', area: '250', capacity: '25 staff', facilities: 'Director, Placement, Reception, Meeting, Accounts' },
  { block: 'Academic Block', floors: 'G+1', area: '600', capacity: '300 trainees', facilities: '4 Smart Classrooms, Seminar Hall, Library, Computer Lab' },
  { block: 'Boys Hostel', floors: 'G+1', area: '250', capacity: '150 beds', facilities: '38 rooms (4-bed), Warden, Toilet blocks, Study Room' },
  { block: 'Girls Hostel', floors: 'G+1', area: '250', capacity: '150 beds', facilities: '38 rooms (4-bed), Lady Warden, CCTV, Separate Entry' },
  { block: 'Dining + Kitchen', floors: 'G', area: '150', capacity: '200 diners', facilities: 'Commercial kitchen, 200-seat hall, Stores' },
  { block: 'Generator + OHT', floors: 'G', area: '40', capacity: '–', facilities: '62.5 KVA DG, Solar inverter, OHT, Pump room' },
  { block: 'Parking + Roads', floors: '–', area: '300', capacity: '30 vehicles', facilities: 'Car + 2-wheeler parking, internal road 5m wide' },
  { block: 'Open + Playground', floors: '–', area: '1,000', capacity: '–', facilities: 'Badminton, Volleyball, Morning PT ground' },
];



/* ─────────────────────── MAIN PAGE ─────────────────────── */

export default function SchoolServicesPage() {

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* ═══════════ HERO COVER PAGE — CSR DONATION POSTER ═══════════ */}
      <section className="relative overflow-hidden bg-[#f3f2ef] py-10 text-slate-800 sm:py-14 dark:bg-slate-950 dark:text-slate-100">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-[#081d30] shadow-[0_25px_60px_rgba(8,29,48,0.18)] dark:border-slate-800">
            <div className="grid gap-8 p-6 lg:grid-cols-[1.4fr_0.8fr] lg:p-10">
              <div className="flex flex-col justify-center">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-primary-orange sm:text-sm">
                  School Services(CSR)
                </p>

                <h1 className="mt-6 text-[2.5rem] font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-[3.25rem] lg:text-[5rem]">
                  Skill a child.
                  <span className="mt-2 block">Shape a future.</span>
                </h1>

                <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-slate-200 sm:text-lg lg:text-[1.4rem] lg:leading-[1.2]">
                  Support the Durga Dulari Skill Mission
                </p>

                <p className="mt-6 max-w-[680px] text-base leading-relaxed text-slate-300 sm:text-lg">
                  Your CSR partnership can help us train youth in textile, maintenance,
                  automation, and livelihood skills — turning potential into jobs,
                  dignity, and long-term growth.
                </p>

                <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
                  <Link href="#page-2" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-orange px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-primary-orange/20 transition-all hover:bg-primary-orange/90">
                    Support a CSR Donation <ArrowRight size={18} />
                  </Link>
                  <Link href="#page-3" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/5 px-6 py-4 text-base font-extrabold text-white/90 backdrop-blur-sm transition-all hover:border-slate-300/80 hover:bg-white/10">
                    View the Campus Plan
                  </Link>
                  <a
                    href="/downloads/DDTSDI-School-of-Skills-Brochure.pdf"
                    download="DDTSDI-School-of-Skills-Brochure.pdf"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-orange/40 bg-primary-orange/15 px-6 py-4 text-base font-extrabold text-primary-orange backdrop-blur-sm transition-all hover:bg-primary-orange hover:text-white"
                  >
                    <Download size={18} /> Download Brochure (PDF)
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { value: '₹25K', label: 'Funds one trainee kit' },
                    { value: '₹1L', label: 'Supports student placement' },
                    { value: '₹5L+', label: 'Builds scalable training impact' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-200/20 bg-white/5 p-4 backdrop-blur-sm">
                      <p className="text-2xl font-black text-primary-orange">{item.value}</p>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-[360px] items-end overflow-hidden rounded-[28px] bg-gradient-to-br from-[#071a2f] via-[#0b233d] to-[#d58a45] p-5 shadow-inner shadow-black/20 sm:min-h-[440px] lg:min-h-[540px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_35%),linear-gradient(to_top,rgba(0,0,0,0.28),rgba(0,0,0,0.05))]" />
                <div className="absolute right-4 top-4 rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                  Donation Poster
                </div>

                <div className="relative w-full space-y-5">
                  <div className="rounded-[18px] border border-white/15 bg-[#0c1e33]/70 p-4 backdrop-blur-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-orange-200">
                      Together we can
                    </p>
                    <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                      Empower rural youth through skilling and dignity.
                    </h3>
                  </div>

                  <div className="rounded-[18px] border border-orange-200/40 bg-[#d88d4a]/20 p-4 backdrop-blur-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.26em] text-orange-100">
                      Impact areas
                    </p>
                    <ul className="mt-3 space-y-2 text-sm font-medium text-orange-50 sm:text-base">
                      <li>• Skill-based education for underserved students</li>
                      <li>• Hostel, training and tool support</li>
                      <li>• Placement pathways and career readiness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              This initiative is designed to create a self-sustaining ecosystem where quality training,
              safe residential support, and industrial readiness transform lives across communities.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/90">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-3 text-center dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600 dark:text-primary-orange sm:text-sm">
                School Services Overview
              </p>
            </div>
            <div className="divide-y divide-slate-100 px-6 py-3 font-mono text-xs dark:divide-slate-800 sm:px-8">
              {[
                { pg: 2, desc: 'Campus Overview — Proposed Infrastructure & Aerial View' },
                { pg: 3, desc: '2-Acre Standard Campus — Master Layout Plan' },
                { pg: 4, desc: 'Administrative & Academic Block — Detailed Floor Plan' },
                { pg: 5, desc: 'Laboratory Complex — All 12 Labs Layout' },
                { pg: 6, desc: 'Hostel Block — Boys & Girls Residential Facility' },
                { pg: 7, desc: 'Infrastructure Specifications — Equipment & Area Table' },
              ].map((item) => (
                <a
                  key={item.pg}
                  href={`#page-${item.pg}`}
                  className="flex items-center justify-between py-2.5 transition-all hover:bg-amber-500/5 hover:px-3 rounded-lg dark:hover:bg-primary-orange/10"
                >
                  <span className="font-bold text-primary-orange">Page {item.pg}</span>
                  <span className="text-right text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white">{item.desc}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary-orange sm:text-xs">
              Durga Dulari Enterprises • CSR-led skill development for a stronger tomorrow
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ PAGE 2: CAMPUS INFRASTRUCTURE & AERIAL VIEW ═══════════ */}
      <ScrollReveal>
        <section id="page-2" className="py-8 sm:py-12 bg-white dark:bg-slate-950">
          <Container>
            {/* Blueprint Container (Width matches all other blueprint pages) */}
            <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-[#e8e8e8] shadow-2xl dark:border-slate-700 dark:bg-slate-900/95">

              {/* ── Top Header Bar (Navy) ── */}
              <div className="flex flex-col items-start justify-between gap-2 bg-[#0b2545] px-5 py-4 sm:flex-row sm:items-center sm:px-8 sm:py-5">
                <div>
                  <h2 className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
                    Durga Dulari Textile Skill Development Institute
                  </h2>
                  <p className="mt-0.5 text-sm font-bold uppercase tracking-wider text-primary-orange sm:text-base">
                    Proposed Campus Infrastructure &amp; Aerial View
                  </p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="text-xs font-medium text-slate-300 sm:text-sm">Architectural Rendering &amp; Layout</p>
                  <p className="text-[11px] text-slate-400">Durga Dulari Enterprises • Bhopal (M.P.)</p>
                </div>
              </div>

              {/* ── Campus Image Showcase (Full Uncropped Image) ── */}
              <div className="p-3 sm:p-5">
                <div className="overflow-hidden rounded-lg border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-md">
                  <img
                    src="/images/DDTSDI_Campus_image.webp"
                    alt="Durga Dulari Textile Skill Development Institute Proposed Campus View"
                    width={1000}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block rounded-md"
                  />
                </div>
              </div>

              {/* ── Bottom Footer ── */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t-2 border-slate-300 bg-[#f0f0f0] px-5 py-2.5 text-[10px] dark:border-slate-700 dark:bg-slate-950 sm:px-8">
                <p className="font-medium text-slate-500 dark:text-slate-400">Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential</p>
                <p className="text-primary-orange font-bold uppercase tracking-wider">Campus Master Architectural View</p>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* ═══════════ PAGE 3: MASTER LAYOUT PLAN — BLUEPRINT ═══════════ */}
      <ScrollReveal>
        <section id="page-3" className="border-y border-slate-100 bg-slate-50/50 py-8 dark:border-slate-800 dark:bg-slate-900/30 sm:py-12">
          <Container>
            {/* Blueprint Container */}
            <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-[#e8e8e8] shadow-2xl dark:border-slate-700 dark:bg-slate-900/95">

              {/* ── Top Header Bar (Navy) ── */}
              <div className="flex flex-col items-start justify-between gap-2 bg-[#0b2545] px-5 py-4 sm:flex-row sm:items-center sm:px-8 sm:py-5">
                <div>
                  <h2 className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
                    Durga Dulari Textile Skill Development Institute
                  </h2>
                  <p className="mt-0.5 text-sm font-bold uppercase tracking-wider text-primary-orange sm:text-base">
                    2-Acre Standard Campus — Master Layout Plan
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-medium text-slate-300 sm:text-sm">Campus Layout & Infrastructure Plan</p>
                  <p className="text-[11px] text-slate-400">Scale: Approx. 1:500 | All dimensions in metres</p>
                </div>
              </div>

              {/* ── Campus Map Body ── */}
              <div className="p-3 sm:p-5">

                {/* Legend + Compass Row */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { label: 'Administrative Block', color: 'bg-blue-500' },
                      { label: 'Academic Block', color: 'bg-indigo-500' },
                      { label: 'Laboratory Complex', color: 'bg-primary-orange' },
                      { label: 'Boys Hostel', color: 'bg-cyan-500' },
                      { label: 'Girls Hostel', color: 'bg-pink-500' },
                      { label: 'Dining & Kitchen', color: 'bg-amber-500' },
                      { label: 'Open / Playground', color: 'bg-emerald-500' },
                      { label: 'Internal Roads', color: 'bg-slate-400' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-1.5 text-[10px] font-medium text-slate-600 dark:text-slate-400">
                        <span className={`h-2.5 w-2.5 rounded-sm ${item.color}`} />
                        {item.label}
                      </div>
                    ))}
                  </div>
                  {/* Compass */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-400/50 bg-white text-sm font-black text-[#0b2545] dark:border-slate-600 dark:bg-slate-700 dark:text-white">
                    N
                  </div>
                </div>

                {/* ── Main Campus Grid ── */}
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_2fr]">

                  {/* ━━━ LEFT COLUMN ━━━ */}
                  <div className="space-y-3">

                    {/* Girls Hostel */}
                    <div className="overflow-hidden rounded-md border-2 border-pink-400/40 transition-all hover:shadow-lg">
                      <div className="bg-gradient-to-r from-pink-500 to-rose-600 px-3 py-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Girls Hostel</h4>
                        <p className="text-[11px] font-semibold text-pink-100">(250 sq.m.)</p>
                      </div>
                      <div className="bg-[#fff0f5] p-3 dark:bg-[#3a1e28]">
                        <div className="space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
                          <p className="font-semibold">150 Beds | 38 Rooms</p>
                          <p>Lady Warden | CCTV</p>
                          <p>Separate Entry</p>
                        </div>
                      </div>
                    </div>

                    {/* Dining Hall + Kitchen */}
                    <div className="overflow-hidden rounded-md border-2 border-amber-400/40 transition-all hover:shadow-lg">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Dining Hall + Kitchen</h4>
                        <p className="text-[11px] font-semibold text-amber-100">(150 sq.m.)</p>
                      </div>
                      <div className="bg-[#fef8e8] p-3 dark:bg-[#3a3520]">
                        <div className="space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
                          <p className="font-semibold">200-Seat Dining Hall</p>
                          <p>Commercial Kitchen</p>
                          <p>Stores & Pantry</p>
                        </div>
                      </div>
                    </div>

                    {/* Open Area */}
                    <div className="overflow-hidden rounded-md border-2 border-emerald-400/40 transition-all hover:shadow-lg">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-600 px-3 py-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Open Area & Playground</h4>
                        <p className="text-[11px] font-semibold text-emerald-100">(1,000 sq.m.)</p>
                      </div>
                      <div className="bg-[#e8fde8] p-3 dark:bg-[#1a3a1e]">
                        <div className="space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
                          <p className="font-semibold">Badminton + Volleyball</p>
                          <p>Morning PT Ground</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ━━━ RIGHT COLUMN ━━━ */}
                  <div className="space-y-3">

                    {/* Lab Complex — Full Width */}
                    <div className="overflow-hidden rounded-md border-2 border-orange-400/40 transition-all hover:shadow-lg">
                      <div className="bg-gradient-to-r from-primary-orange to-amber-500 px-4 py-2.5">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Laboratory Complex</h4>
                            <p className="text-[11px] font-semibold text-orange-100">(700 sq.m.)</p>
                          </div>
                          <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white">Ground Floor — East Wing</span>
                        </div>
                      </div>
                      <div className="bg-[#fff5ee] p-3 dark:bg-[#3a2c1e]">
                        <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
                          <span className="font-semibold">Spinning Lab</span> | <span className="font-semibold">Mechanical Lab</span> | <span className="font-semibold">Electrical Lab</span> | <span className="font-semibold">Electronics/PLC Lab</span>
                        </p>
                        <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
                          <span className="font-semibold">Utility Lab</span> | <span className="font-semibold">Garment Lab</span> | <span className="font-semibold">Knitting Lab</span> | <span className="font-semibold">Computer Lab</span>
                        </p>
                        <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
                          <span className="font-semibold">Tool Room</span> | <span className="font-semibold">Safety Equipment Room</span> | <span className="font-semibold">Motor Rewinding Lab</span> | <span className="font-semibold">Pneumatic/Hydraulic Lab</span>
                        </p>
                      </div>
                    </div>

                    {/* Row: Boys Hostel + Admin Block */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {/* Boys Hostel */}
                      <div className="overflow-hidden rounded-md border-2 border-cyan-400/40 transition-all hover:shadow-lg">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Boys Hostel</h4>
                          <p className="text-[11px] font-semibold text-cyan-100">(250 sq.m.)</p>
                        </div>
                        <div className="bg-[#e8f7fd] p-3 dark:bg-[#1a2a3a]">
                          <div className="space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
                            <p className="font-semibold">150 Beds | 38 Rooms</p>
                            <p>(4-bed each)</p>
                            <p>Toilet Blocks | Study Room</p>
                          </div>
                        </div>
                      </div>

                      {/* Administrative Block */}
                      <div className="overflow-hidden rounded-md border-2 border-blue-400/40 transition-all hover:shadow-lg">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-3 py-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Administrative Block</h4>
                          <p className="text-[11px] font-semibold text-blue-200">(250 sq.m.)</p>
                        </div>
                        <div className="bg-[#eef2ff] p-3 dark:bg-[#1e2540]">
                          <div className="space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
                            <p className="font-semibold">Director Office | Placement Cell</p>
                            <p>Reception | Meeting Room</p>
                            <p>Accounts | Record Room</p>
                            <span className="mt-1 inline-block rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Ground Floor</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Academic Block — Full Width */}
                    <div className="overflow-hidden rounded-md border-2 border-indigo-400/40 transition-all hover:shadow-lg">
                      <div className="bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2.5">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Academic Block</h4>
                            <p className="text-[11px] font-semibold text-indigo-100">(600 sq.m.)</p>
                          </div>
                          <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white">G+1 Floor</span>
                        </div>
                      </div>
                      <div className="bg-[#eef0ff] p-3 dark:bg-[#1e2040]">
                        <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
                          <span className="font-semibold">4 Smart Classrooms</span> (75 each) | <span className="font-semibold">Seminar Hall</span> (200-seat) | <span className="font-semibold">Library</span> (500 titles) | <span className="font-semibold">Computer Lab</span> (50 nodes)
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row: Utilities + Parking + Gate */}
                    <div className="grid grid-cols-3 gap-3">
                      {/* DG Set + Solar */}
                      <div className="overflow-hidden rounded-md border-2 border-yellow-400/40 transition-all hover:shadow-lg">
                        <div className="bg-gradient-to-r from-yellow-500 to-amber-600 px-3 py-2">
                          <h4 className="text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">DG Set + Solar Inverter</h4>
                        </div>
                        <div className="bg-[#fefbe8] p-2.5 dark:bg-[#3a3520]">
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-700 dark:text-slate-300">
                            <Zap size={12} className="text-yellow-600" />
                            <span className="font-semibold">62.5 KVA DG</span>
                          </div>
                          <div className="mt-1 flex items-center gap-1.5 text-[10px] text-slate-700 dark:text-slate-300">
                            <Sun size={12} className="text-orange-500" />
                            <span className="font-semibold">25 KW Solar</span>
                          </div>
                        </div>
                      </div>

                      {/* OHT + Pump */}
                      <div className="overflow-hidden rounded-md border-2 border-blue-300/40 transition-all hover:shadow-lg">
                        <div className="bg-gradient-to-r from-blue-400 to-cyan-500 px-3 py-2">
                          <h4 className="text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">OHT + Pump Room</h4>
                        </div>
                        <div className="bg-[#e8f4fd] p-2.5 dark:bg-[#1a2a3a]">
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-700 dark:text-slate-300">
                            <Droplets size={12} className="text-blue-500" />
                            <span className="font-semibold">Borewell + OHT + RO</span>
                          </div>
                        </div>
                      </div>

                      {/* Parking */}
                      <div className="overflow-hidden rounded-md border-2 border-slate-400/40 transition-all hover:shadow-lg">
                        <div className="bg-gradient-to-r from-slate-500 to-slate-600 px-3 py-2">
                          <h4 className="text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">Parking</h4>
                          <p className="text-[10px] font-semibold text-slate-200">(300 sq.m.)</p>
                        </div>
                        <div className="bg-[#f0f0ea] p-2.5 dark:bg-[#2a2a28]">
                          <div className="text-[10px] text-slate-700 dark:text-slate-300">
                            <p className="font-semibold">Cars + 2-wheelers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Security / Main Gate Strip ── */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
                  <div className="flex items-center gap-2 rounded-md border-2 border-slate-400/50 bg-white px-4 py-1.5 dark:border-slate-600 dark:bg-slate-700">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Security — Main Gate</p>
                  </div>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
                </div>
              </div>

              {/* ── Bottom Footer ── */}
              <div className="flex items-center justify-between border-t-2 border-slate-300 bg-[#f0f0f0] px-5 py-2.5 text-[10px] dark:border-slate-700 dark:bg-slate-950 sm:px-8">
                <p className="font-medium text-slate-500 dark:text-slate-400">Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential</p>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* ═══════════ PAGE 4: ADMIN & ACADEMIC BLOCK — BLUEPRINT ═══════════ */}
      <ScrollReveal>
        <section id="page-4" className="py-8 sm:py-12 bg-white dark:bg-slate-950">
          <Container>
            {/* Floor Plan Blueprint Container */}
            <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-[#e8e8e8] shadow-2xl dark:border-slate-700 dark:bg-slate-900/95">

              {/* ── Top Header Bar (Navy) ── */}
              <div className="flex flex-col items-start justify-between gap-2 bg-[#0b2545] px-5 py-4 sm:flex-row sm:items-center sm:px-8 sm:py-5">
                <div>
                  <h2 className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
                    Durga Dulari Textile Skill Development Institute
                  </h2>
                  <p className="mt-0.5 text-sm font-bold uppercase tracking-wider text-primary-orange sm:text-base">
                    Administrative & Academic Block — Floor Plan
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-medium text-slate-300 sm:text-sm">Campus Layout & Infrastructure Plan</p>
                  <p className="text-[11px] italic text-slate-400">Ground Floor | Scale: Approx. 1:200</p>
                </div>
              </div>

              {/* ── Floor Plan Body ── */}
              <div className="grid grid-cols-1 gap-0 lg:grid-cols-[38%_62%]">

                {/* ━━━ ADMINISTRATIVE BLOCK (Left) ━━━ */}
                <div className="border-b-2 border-r-0 border-slate-300 p-4 dark:border-slate-600 lg:border-b-0 lg:border-r-2 sm:p-5">
                  {/* Admin header bar */}
                  <div className="mb-4 rounded-t-lg bg-[#2b5797] px-4 py-2.5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                      Administrative Block <span className="font-normal text-blue-200">(250 sq.m.)</span>
                    </h3>
                  </div>

                  {/* Admin room grid — 3 rows × 2 cols */}
                  <div className="space-y-4">
                    {/* Row 1 — Director's Office + Conference Room */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex min-h-[130px] flex-col items-center justify-center rounded border-2 border-slate-400/60 bg-[#dce8d4] p-4 text-center transition-all hover:shadow-lg dark:border-slate-500 dark:bg-[#2a3a28]">
                        <p className="text-xs font-bold text-blue-700 dark:text-blue-400">Director&apos;s Office</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">400 sq.ft | Private cabin</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Meeting table | CCTV terminal</p>
                      </div>
                      <div className="flex min-h-[130px] flex-col items-center justify-center rounded border-2 border-slate-400/60 bg-[#c4daf0] p-4 text-center transition-all hover:shadow-lg dark:border-slate-500 dark:bg-[#1e2d40]">
                        <p className="text-xs font-bold text-blue-700 dark:text-blue-400">Conference Room</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">300 sq.ft | 20-seater</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Projector | Whiteboard</p>
                      </div>
                    </div>

                    {/* Row 2 — Placement Cell + Reception */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex min-h-[130px] flex-col items-center justify-center rounded border-2 border-slate-400/60 bg-[#dce8d4] p-4 text-center transition-all hover:shadow-lg dark:border-slate-500 dark:bg-[#2a3a28]">
                        <p className="text-xs font-bold text-blue-700 dark:text-blue-400">Placement Cell</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">300 sq.ft | 4 terminals</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Interview room | Portal</p>
                      </div>
                      <div className="flex min-h-[130px] flex-col items-center justify-center rounded border-2 border-slate-400/60 bg-[#f5ecd5] p-4 text-center transition-all hover:shadow-lg dark:border-slate-500 dark:bg-[#3a3520]">
                        <p className="text-xs font-bold text-blue-700 dark:text-blue-400">Reception</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">& Waiting</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">250 sq.ft</p>
                      </div>
                    </div>

                    {/* Row 3 — Accounts + Record Room */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex min-h-[130px] flex-col items-center justify-center rounded border-2 border-slate-400/60 bg-[#dce8d4] p-4 text-center transition-all hover:shadow-lg dark:border-slate-500 dark:bg-[#2a3a28]">
                        <p className="text-xs font-bold text-blue-700 dark:text-blue-400">Accounts</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">150 sq.ft</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Tally | GST</p>
                      </div>
                      <div className="flex min-h-[130px] flex-col items-center justify-center rounded border-2 border-slate-400/60 bg-[#f5ecd5] p-4 text-center transition-all hover:shadow-lg dark:border-slate-500 dark:bg-[#3a3520]">
                        <p className="text-xs font-bold text-blue-700 dark:text-blue-400">Record Room</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">& Store</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">200 sq.ft</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ━━━ ACADEMIC BLOCK (Right) ━━━ */}
                <div className="p-4 sm:p-5">
                  {/* Academic header bar */}
                  <div className="mb-4 rounded-t-lg bg-primary-orange px-4 py-2.5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                      Academic Block <span className="font-normal text-orange-100">(600 sq.m.)</span>
                    </h3>
                  </div>

                  {/* Academic room grid */}
                  <div className="space-y-4">
                    {/* Row 1 — Smart Classroom 1 & 2 */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex min-h-[120px] flex-col items-center justify-center rounded border-2 border-orange-300/50 bg-[#fce8d5] p-4 text-center transition-all hover:shadow-lg dark:border-orange-700/40 dark:bg-[#3a2c1e]">
                        <p className="text-xs font-bold text-orange-700 dark:text-orange-400">Smart Classroom 1</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">75 trainees | Smart Board</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Projector | AC | CCTV</p>
                      </div>
                      <div className="flex min-h-[120px] flex-col items-center justify-center rounded border-2 border-orange-300/50 bg-[#fce8d5] p-4 text-center transition-all hover:shadow-lg dark:border-orange-700/40 dark:bg-[#3a2c1e]">
                        <p className="text-xs font-bold text-orange-700 dark:text-orange-400">Smart Classroom 2</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">75 trainees | Smart Board</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Projector | AC | CCTV</p>
                      </div>
                    </div>

                    {/* Row 2 — Smart Classroom 3 & 4 */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex min-h-[120px] flex-col items-center justify-center rounded border-2 border-orange-300/50 bg-[#fce8d5] p-4 text-center transition-all hover:shadow-lg dark:border-orange-700/40 dark:bg-[#3a2c1e]">
                        <p className="text-xs font-bold text-orange-700 dark:text-orange-400">Smart Classroom 3</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">75 trainees | Smart Board</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Projector | AC | CCTV</p>
                      </div>
                      <div className="flex min-h-[120px] flex-col items-center justify-center rounded border-2 border-orange-300/50 bg-[#fce8d5] p-4 text-center transition-all hover:shadow-lg dark:border-orange-700/40 dark:bg-[#3a2c1e]">
                        <p className="text-xs font-bold text-orange-700 dark:text-orange-400">Smart Classroom 4</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">75 trainees | Smart Board</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Projector | AC | CCTV</p>
                      </div>
                    </div>

                    {/* Seminar Hall — Full Width */}
                    <div className="flex min-h-[100px] flex-col items-center justify-center rounded border-2 border-slate-300/60 bg-white p-5 text-center transition-all hover:shadow-lg dark:border-slate-600 dark:bg-slate-800/60">
                      <p className="text-base font-extrabold uppercase tracking-wider text-slate-800 dark:text-white">Seminar Hall</p>
                      <p className="mt-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">200-Seat | Stage | PA System | Projector | Inauguration / Placement Drives</p>
                    </div>

                    {/* Ground Floor label */}
                    <div className="text-center">
                      <p className="text-[11px] font-medium italic text-slate-400 dark:text-slate-500">Ground Floor</p>
                    </div>

                    {/* Row — Library & Computer Lab */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex min-h-[130px] flex-col items-center justify-center rounded border-2 border-green-300/50 bg-[#d4ecd4] p-4 text-center transition-all hover:shadow-lg dark:border-green-700/40 dark:bg-[#1e3a20]">
                        <p className="text-xs font-bold text-green-800 dark:text-green-400">Library</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">500 Titles</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">50-seat Reading Room</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Reference + Journals</p>
                      </div>
                      <div className="flex min-h-[130px] flex-col items-center justify-center rounded border-2 border-teal-300/50 bg-[#cce8e8] p-4 text-center transition-all hover:shadow-lg dark:border-teal-700/40 dark:bg-[#1a3030]">
                        <p className="text-xs font-bold text-teal-800 dark:text-teal-400">Computer Lab</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">50 Nodes | i5 Systems</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">100 Mbps Internet</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Online Assessment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Bottom Footer ── */}
              <div className="flex items-center justify-between border-t-2 border-slate-300 bg-[#f0f0f0] px-5 py-2.5 text-[10px] dark:border-slate-700 dark:bg-slate-950 sm:px-8">
                <p className="font-medium text-slate-500 dark:text-slate-400">Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential</p>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* ═══════════ PAGE 5: LABORATORY COMPLEX — FLOOR PLAN ═══════════ */}
      <ScrollReveal>
        <section id="page-5" className="border-y border-slate-100 bg-slate-50/50 py-8 dark:border-slate-800 dark:bg-slate-900/30 sm:py-12">
          <Container>
            {/* Floor Plan Blueprint Container */}
            <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-[#e8e8e8] shadow-2xl dark:border-slate-700 dark:bg-slate-900/95">

              {/* ── Top Header Bar (Navy) ── */}
              <div className="flex flex-col items-start justify-between gap-2 bg-[#0b2545] px-5 py-4 sm:flex-row sm:items-center sm:px-8 sm:py-5">
                <div>
                  <h2 className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
                    Durga Dulari Textile Skill Development Institute
                  </h2>
                  <p className="mt-0.5 text-sm font-bold uppercase tracking-wider text-primary-orange sm:text-base">
                    Laboratory Complex — All 12 Labs
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-medium text-slate-300 sm:text-sm">Campus Layout & Infrastructure Plan</p>
                  <p className="text-[11px] text-slate-400">Ground Floor | 700 sq.m. total | Scale: Approx. 1:250</p>
                </div>
              </div>

              {/* ── Lab Grid Body ── */}
              <div className="p-3 sm:p-5">
                {/* Row 1 — 4 Major Labs */}
                <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {/* Spinning Lab */}
                  <div className="overflow-hidden rounded-md border-2 border-orange-400/40 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 px-3 py-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">■ Spinning Lab</h4>
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">{labData[0].batch} seats</span>
                      </div>
                      <p className="text-[11px] font-semibold text-orange-100">({labData[0].area})</p>
                    </div>
                    <div className="bg-[#fff5ee] p-3 dark:bg-[#3a2c1e]">
                      <div className="space-y-1.5">
                        {labData[0].equipment.map((eq) => (
                          <div key={eq} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-orange-500" />
                            {eq}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mechanical Lab */}
                  <div className="overflow-hidden rounded-md border-2 border-slate-400/40 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-r from-slate-500 to-zinc-600 px-3 py-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">■ Mechanical Lab</h4>
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">{labData[1].batch} seats</span>
                      </div>
                      <p className="text-[11px] font-semibold text-slate-200">({labData[1].area})</p>
                    </div>
                    <div className="bg-[#f0f0ea] p-3 dark:bg-[#2a2a28]">
                      <div className="space-y-1.5">
                        {labData[1].equipment.map((eq) => (
                          <div key={eq} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-slate-500" />
                            {eq}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Electrical Lab */}
                  <div className="overflow-hidden rounded-md border-2 border-yellow-400/40 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-r from-yellow-500 to-amber-600 px-3 py-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">■ Electrical Lab</h4>
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">{labData[2].batch} seats</span>
                      </div>
                      <p className="text-[11px] font-semibold text-yellow-100">({labData[2].area})</p>
                    </div>
                    <div className="bg-[#fefbe8] p-3 dark:bg-[#3a3520]">
                      <div className="space-y-1.5">
                        {labData[2].equipment.map((eq) => (
                          <div key={eq} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-yellow-600" />
                            {eq}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Electronics / Automation Lab */}
                  <div className="overflow-hidden rounded-md border-2 border-blue-400/40 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">■ Electronics / Automation</h4>
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">{labData[3].batch} seats</span>
                      </div>
                      <p className="text-[11px] font-semibold text-blue-100">({labData[3].area})</p>
                    </div>
                    <div className="bg-[#eef2ff] p-3 dark:bg-[#1e2540]">
                      <div className="space-y-1.5">
                        {labData[3].equipment.map((eq) => (
                          <div key={eq} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-blue-500" />
                            {eq}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── CENTRAL CORRIDOR ── */}
                <div className="my-4 flex items-center gap-3">
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-primary-orange/50 to-transparent" />
                  <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-primary-orange">← Central Corridor →</p>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-primary-orange/50 to-transparent" />
                </div>

                {/* Row 2 — 4 Labs */}
                <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {/* Utility Lab */}
                  <div className="overflow-hidden rounded-md border-2 border-teal-400/40 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">■ Utility Lab</h4>
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">{labData[4].batch} seats</span>
                      </div>
                      <p className="text-[11px] font-semibold text-teal-100">({labData[4].area})</p>
                    </div>
                    <div className="bg-[#e6f7f7] p-3 dark:bg-[#1a3030]">
                      <div className="space-y-1.5">
                        {labData[4].equipment.map((eq) => (
                          <div key={eq} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-teal-500" />
                            {eq}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Garment Lab */}
                  <div className="overflow-hidden rounded-md border-2 border-pink-400/40 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-600 px-3 py-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">■ Garment Lab</h4>
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">{labData[5].batch} seats</span>
                      </div>
                      <p className="text-[11px] font-semibold text-pink-100">({labData[5].area})</p>
                    </div>
                    <div className="bg-[#fff0f5] p-3 dark:bg-[#3a1e28]">
                      <div className="space-y-1.5">
                        {labData[5].equipment.map((eq) => (
                          <div key={eq} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-pink-500" />
                            {eq}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Knitting Lab */}
                  <div className="overflow-hidden rounded-md border-2 border-violet-400/40 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">■ Knitting Lab</h4>
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">{labData[6].batch} seats</span>
                      </div>
                      <p className="text-[11px] font-semibold text-violet-100">({labData[6].area})</p>
                    </div>
                    <div className="bg-[#f3eeff] p-3 dark:bg-[#2a1e3a]">
                      <div className="space-y-1.5">
                        {labData[6].equipment.map((eq) => (
                          <div key={eq} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-violet-500" />
                            {eq}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tool Room & Safety Room */}
                  <div className="overflow-hidden rounded-md border-2 border-stone-400/40 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-r from-stone-500 to-stone-600 px-3 py-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">■ Tool Room & Safety Room</h4>
                      <p className="text-[11px] font-semibold text-stone-200">({labData[8].area} + {labData[9].area})</p>
                    </div>
                    <div className="bg-[#f5f0ea] p-3 dark:bg-[#2e2a25]">
                      <div className="space-y-1.5">
                        {[...labData[8].equipment, ...labData[9].equipment].map((eq) => (
                          <div key={eq} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-stone-500" />
                            {eq}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3 — Remaining Labs */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {/* Computer Lab */}
                  <div className="overflow-hidden rounded-md border-2 border-sky-400/40 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">■ Computer Lab</h4>
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">{labData[7].batch} seats</span>
                      </div>
                      <p className="text-[11px] font-semibold text-sky-100">({labData[7].area})</p>
                    </div>
                    <div className="bg-[#e8f4fd] p-3 dark:bg-[#1a2a3a]">
                      <div className="space-y-1.5">
                        {labData[7].equipment.map((eq) => (
                          <div key={eq} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-sky-500" />
                            {eq}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Motor Rewinding Lab */}
                  <div className="overflow-hidden rounded-md border-2 border-amber-400/40 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-3 py-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">■ Motor Rewinding</h4>
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">{labData[10].batch} seats</span>
                      </div>
                      <p className="text-[11px] font-semibold text-amber-100">({labData[10].area})</p>
                    </div>
                    <div className="bg-[#fef8e8] p-3 dark:bg-[#3a3020]">
                      <div className="space-y-1.5">
                        {labData[10].equipment.map((eq) => (
                          <div key={eq} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-amber-600" />
                            {eq}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pneumatic / Hydraulic Lab */}
                  <div className="overflow-hidden rounded-md border-2 border-emerald-400/40 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-600 px-3 py-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">■ Pneumatic / Hydraulic</h4>
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white">{labData[11].batch} seats</span>
                      </div>
                      <p className="text-[11px] font-semibold text-emerald-100">({labData[11].area})</p>
                    </div>
                    <div className="bg-[#e8fde8] p-3 dark:bg-[#1a3a1e]">
                      <div className="space-y-1.5">
                        {labData[11].equipment.map((eq) => (
                          <div key={eq} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-emerald-500" />
                            {eq}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Bottom Footer ── */}
              <div className="flex items-center justify-between border-t-2 border-slate-300 bg-[#f0f0f0] px-5 py-2.5 text-[10px] dark:border-slate-700 dark:bg-slate-950 sm:px-8">
                <p className="font-medium text-slate-500 dark:text-slate-400">Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential</p>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* ═══════════ PAGE 6: HOSTEL BLOCK — BLUEPRINT ═══════════ */}
      <ScrollReveal>
        <section id="page-6" className="py-8 sm:py-12 bg-white dark:bg-slate-950">
          <Container>
            {/* Floor Plan Blueprint Container */}
            <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-[#e8e8e8] shadow-2xl dark:border-slate-700 dark:bg-slate-900/95">

              {/* ── Top Header Bar (Navy) ── */}
              <div className="flex flex-col items-start justify-between gap-2 bg-[#0b2545] px-5 py-4 sm:flex-row sm:items-center sm:px-8 sm:py-5">
                <div>
                  <h2 className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
                    Durga Dulari Textile Skill Development Institute
                  </h2>
                  <p className="mt-0.5 text-sm font-bold uppercase tracking-wider text-primary-orange sm:text-base">
                    Hostel Block — Boys & Girls Residential Facility
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-medium text-slate-300 sm:text-sm">Campus Layout & Infrastructure Plan</p>
                  <p className="text-[11px] italic text-slate-400">G+1 Structure | 500 sq.m. Built-Up | 300 Beds Total</p>
                </div>
              </div>

              {/* ── Floor Plan Body ── */}
              <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">

                {/* ━━━ BOYS HOSTEL (Left) ━━━ */}
                <div className="border-b-2 border-r-0 border-slate-300 p-4 dark:border-slate-600 lg:border-b-0 lg:border-r-2 sm:p-5">
                  {/* Boys header bar */}
                  <div className="mb-4 rounded-t-lg bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-2.5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                      Boys Hostel <span className="font-normal text-cyan-100">(150 Beds | 38 Rooms)</span>
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {/* Ground floor */}
                    <div className="rounded border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900/40">
                      <p className="mb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Ground Floor — 19 Rooms (4-bed each = 74 beds)</p>
                      <div className="grid grid-cols-5 gap-1.5">
                        {Array.from({ length: 19 }, (_, i) => (
                          <div key={`bg-${i}`} className="flex items-center justify-center rounded bg-cyan-50 py-1.5 text-[10px] font-bold text-cyan-700 hover:bg-cyan-100 transition-colors dark:bg-cyan-900/30 dark:text-cyan-300">
                            R-{i + 1}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* First floor */}
                    <div className="rounded border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900/40">
                      <p className="mb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">First Floor — 19 Rooms (4-bed each = 76 beds)</p>
                      <div className="grid grid-cols-5 gap-1.5">
                        {Array.from({ length: 19 }, (_, i) => (
                          <div key={`bf-${i}`} className="flex items-center justify-center rounded bg-blue-50 py-1.5 text-[10px] font-bold text-blue-700 hover:bg-blue-100 transition-colors dark:bg-blue-900/30 dark:text-blue-300">
                            R-{i + 20}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Common Facilities */}
                    <div className="rounded border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900/40">
                      <p className="mb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Common Facilities</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Warden Room', 'Toilet Block 1', 'Toilet Block 2', 'Study Room', 'Store Room'].map((f) => (
                          <span key={f} className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ━━━ GIRLS HOSTEL (Right) ━━━ */}
                <div className="p-4 sm:p-5">
                  {/* Girls header bar */}
                  <div className="mb-4 rounded-t-lg bg-gradient-to-r from-pink-600 to-rose-700 px-4 py-2.5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                      Girls Hostel <span className="font-normal text-pink-100">(150 Beds | 38 Rooms)</span>
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {/* Ground floor */}
                    <div className="rounded border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900/40">
                      <p className="mb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Ground Floor — 19 Rooms (4-bed each = 74 beds)</p>
                      <div className="grid grid-cols-5 gap-1.5">
                        {Array.from({ length: 19 }, (_, i) => (
                          <div key={`gg-${i}`} className="flex items-center justify-center rounded bg-pink-50 py-1.5 text-[10px] font-bold text-pink-700 hover:bg-pink-100 transition-colors dark:bg-pink-900/30 dark:text-pink-300">
                            R-{i + 1}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* First floor */}
                    <div className="rounded border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-[#1a3030]/40">
                      <p className="mb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">First Floor — 19 Rooms (4-bed each = 76 beds)</p>
                      <div className="grid grid-cols-5 gap-1.5">
                        {Array.from({ length: 19 }, (_, i) => (
                          <div key={`gf-${i}`} className="flex items-center justify-center rounded bg-rose-50 py-1.5 text-[10px] font-bold text-rose-700 hover:bg-rose-100 transition-colors dark:bg-rose-900/30 dark:text-rose-300">
                            R-{i + 20}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Common Facilities */}
                    <div className="rounded border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900/40">
                      <p className="mb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Common Facilities</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Lady Warden Room', 'Toilet Block 1', 'Toilet Block 2', 'Study Room', 'Store Room', 'CCTV Monitoring', 'Separate Access Gate'].map((f) => (
                          <span key={f} className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Bottom Footer ── */}
              <div className="flex items-center justify-between border-t-2 border-slate-300 bg-[#f0f0f0] px-5 py-2.5 text-[10px] dark:border-slate-700 dark:bg-slate-950 sm:px-8">
                <p className="font-medium text-slate-500 dark:text-slate-400">Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential</p>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>

      {/* ═══════════ PAGE 7: INFRASTRUCTURE SPECS — BLUEPRINT ═══════════ */}
      <ScrollReveal>
        <section id="page-7" className="border-y border-slate-100 bg-slate-50/50 py-8 dark:border-slate-800 dark:bg-slate-900/30 sm:py-12">
          <Container>
            {/* Blueprint Container */}
            <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-[#e8e8e8] shadow-2xl dark:border-slate-700 dark:bg-slate-900/95">

              {/* ── Top Header Bar (Navy) ── */}
              <div className="flex flex-col items-start justify-between gap-2 bg-[#0b2545] px-5 py-4 sm:flex-row sm:items-center sm:px-8 sm:py-5">
                <div>
                  <h2 className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
                    Durga Dulari Textile Skill Development Institute
                  </h2>
                  <p className="mt-0.5 text-sm font-bold uppercase tracking-wider text-primary-orange sm:text-base">
                    Equipment, Area & Facility Summary
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-medium text-slate-300 sm:text-sm">Campus Layout & Infrastructure Plan</p>
                  <p className="text-[11px] italic text-slate-400">Detailed Specifications | Lab & Block Breakdown</p>
                </div>
              </div>

              {/* ── Floor Plan Body ── */}
              <div className="p-4 sm:p-6 space-y-6">

                {/* Lab Specs Table */}
                <div>
                  <div className="mb-3 px-3 py-1.5 bg-primary-orange rounded-t-lg">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                      Laboratory Complex — Area & Equipment Summary
                    </h3>
                  </div>
                  <div className="overflow-x-auto rounded-b-lg border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900/40">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800/80">
                          <th className="whitespace-nowrap px-4 py-2.5 font-bold text-slate-700 dark:text-slate-200">Lab / Area</th>
                          <th className="whitespace-nowrap px-4 py-2.5 font-bold text-slate-700 dark:text-slate-200">Description</th>
                          <th className="whitespace-nowrap px-4 py-2.5 text-center font-bold text-slate-700 dark:text-slate-200">Area (sq.m.)</th>
                          <th className="whitespace-nowrap px-4 py-2.5 text-center font-bold text-slate-700 dark:text-slate-200">Batch Cap.</th>
                          <th className="whitespace-nowrap px-4 py-2.5 font-bold text-slate-700 dark:text-slate-200">Key Equipment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {infraTable.map((row, i) => (
                          <tr
                            key={row.lab}
                            className={`border-b border-slate-200/60 transition-colors hover:bg-primary-orange/5 dark:border-slate-800/40 dark:hover:bg-primary-orange/5 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900/60' : 'bg-slate-50/50 dark:bg-slate-900/30'}`}
                          >
                            <td className="whitespace-nowrap px-4 py-2.5 font-semibold text-slate-800 dark:text-white">{row.lab}</td>
                            <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400">{row.desc}</td>
                            <td className="px-4 py-2.5 text-center font-bold text-primary-orange">{row.area}</td>
                            <td className="px-4 py-2.5 text-center font-semibold text-slate-700 dark:text-slate-300">{row.batch}</td>
                            <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400">{row.equipment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Block-wise Summary */}
                <div>
                  <div className="mb-3 px-3 py-1.5 bg-[#2b5797] rounded-t-lg">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                      Block-wise Area & Facility Summary
                    </h3>
                  </div>
                  <div className="overflow-x-auto rounded-b-lg border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900/40">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800/80">
                          <th className="whitespace-nowrap px-4 py-2.5 font-bold text-slate-700 dark:text-slate-200">Block</th>
                          <th className="whitespace-nowrap px-4 py-2.5 text-center font-bold text-slate-700 dark:text-slate-200">Floors</th>
                          <th className="whitespace-nowrap px-4 py-2.5 text-center font-bold text-slate-700 dark:text-slate-200">Area (sq.m.)</th>
                          <th className="whitespace-nowrap px-4 py-2.5 text-center font-bold text-slate-700 dark:text-slate-200">Capacity</th>
                          <th className="whitespace-nowrap px-4 py-2.5 font-bold text-slate-700 dark:text-slate-200">Key Facilities</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blockSummary.map((row, i) => (
                          <tr
                            key={row.block}
                            className={`border-b border-slate-200/60 transition-colors hover:bg-primary-orange/5 dark:border-slate-800/40 dark:hover:bg-primary-orange/5 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900/60' : 'bg-slate-50/50 dark:bg-slate-900/30'}`}
                          >
                            <td className="whitespace-nowrap px-4 py-2.5 font-semibold text-slate-800 dark:text-white">{row.block}</td>
                            <td className="px-4 py-2.5 text-center text-slate-600 dark:text-slate-400">{row.floors}</td>
                            <td className="px-4 py-2.5 text-center font-bold text-primary-orange">{row.area}</td>
                            <td className="px-4 py-2.5 text-center font-semibold text-slate-700 dark:text-slate-300">{row.capacity}</td>
                            <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400">{row.facilities}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              {/* ── Bottom Footer ── */}
              <div className="flex items-center justify-between border-t-2 border-slate-300 bg-[#f0f0f0] px-5 py-2.5 text-[10px] dark:border-slate-700 dark:bg-slate-950 sm:px-8">
                <p className="font-medium text-slate-500 dark:text-slate-400">Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential</p>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>


      {/* ═══════════ CTA SECTION ═══════════ */}
      <ScrollReveal>
        <section className="border-y border-slate-100 bg-gradient-to-br from-primary-navy via-slate-900 to-slate-950 py-20 text-center sm:py-24">
          <Container>
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="animate-glow-drift-1 absolute right-1/4 top-0 h-[300px] w-[300px] rounded-full bg-primary-orange/10 blur-3xl" />
              </div>
              <div className="relative">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary-orange">
                  Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh
                </p>
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                  Ready to help to Remote Durga Dulari School of Skills
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
                  Share your requirement and our team will connect with you for a suitable campus design and project plan.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button variant="secondary" asChild>
                    <Link href="/contact?requirement=campus-infrastructure" className="gap-2">
                      Contact Us <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="/downloads/DDTSDI-School-of-Skills-Brochure.pdf"
                      download="DDTSDI-School-of-Skills-Brochure.pdf"
                      className="gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white"
                    >
                      <Download size={18} aria-hidden="true" />
                      <span>Download Brochure (PDF)</span>
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-xs text-slate-500">2025–26 · Confidential</p>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>
    </div>
  );
}
