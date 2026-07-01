import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Bed,
  FlaskConical,
  BookOpen,
  MapPin,
  Ruler,
  Users,
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
  ChevronRight,
  CheckCircle2,
  Star,
  Trophy,
  Target,

} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

/* ─────────────────────────── DATA ─────────────────────────── */

const heroStats = [
  { label: 'Campus Area', value: '2 Acres', sub: '(Recommended)', icon: MapPin },
  { label: 'Total Built-Up Area', value: '5,000 sq.m.', sub: '', icon: Ruler },
  { label: 'Trainees Per Batch', value: '300', sub: '', icon: Users },
  { label: 'Labs & Workshops', value: '12', sub: '', icon: FlaskConical },
  { label: 'Hostel Capacity', value: '300 Beds', sub: '', icon: Bed },
  { label: 'Training Courses', value: '8', sub: '', icon: BookOpen },
];

const modelComparison = [
  {
    name: '1-Acre Starter',
    budget: '₹2 Crore',
    recommended: false,
    color: 'from-slate-500 to-slate-600',
    borderColor: 'border-slate-500/30',
    specs: {
      totalLand: '4,047 sq.m.',
      builtUpArea: '1,200 sq.m.',
      adminBlock: '150 sq.m.',
      academicBlock: '300 sq.m.',
      labComplex: '350 sq.m.',
      hostel: '200 sq.m. (100 beds)',
      diningKitchen: '80 sq.m.',
      parking: '100 sq.m.',
      openPlayground: '400 sq.m.',
      expansionReserve: 'Nil',
      traineeCapacity: '100–150 / batch',
      annualTrainees: '300',
      staffCount: '15–18',
      powerLoad: '25 KVA DG',
      waterSupply: 'Borewell + OHT',
    },
  },
  {
    name: '2-Acre Standard',
    budget: '₹5 Crore',
    recommended: true,
    color: 'from-primary-orange to-amber-500',
    borderColor: 'border-primary-orange/40',
    specs: {
      totalLand: '8,094 sq.m.',
      builtUpArea: '2,400 sq.m.',
      adminBlock: '250 sq.m.',
      academicBlock: '600 sq.m.',
      labComplex: '700 sq.m.',
      hostel: '500 sq.m. (300 beds)',
      diningKitchen: '150 sq.m.',
      parking: '300 sq.m.',
      openPlayground: '1,000 sq.m.',
      expansionReserve: '500 sq.m.',
      traineeCapacity: '300 / batch',
      annualTrainees: '600',
      staffCount: '35–45',
      powerLoad: '62.5 KVA DG + 25KW Solar',
      waterSupply: 'Borewell + OHT + RO',
    },
  },
  {
    name: '5-Acre Full Campus',
    budget: '₹10 Crore',
    recommended: false,
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
    specs: {
      totalLand: '20,234 sq.m.',
      builtUpArea: '5,000 sq.m.',
      adminBlock: '500 sq.m.',
      academicBlock: '1,200 sq.m.',
      labComplex: '1,500 sq.m.',
      hostel: '1,200 sq.m. (300 beds)',
      diningKitchen: '300 sq.m.',
      parking: '600 sq.m.',
      openPlayground: '3,000 sq.m.',
      expansionReserve: '4,500 sq.m.',
      traineeCapacity: '300+ / batch',
      annualTrainees: '600+',
      staffCount: '80–110',
      powerLoad: '125 KVA DG + 100KW Solar',
      waterSupply: 'Borewell + OHT + RO + ETP',
    },
  },
];

const specLabels: Record<string, string> = {
  totalLand: 'Total Land',
  builtUpArea: 'Built-up Area',
  adminBlock: 'Admin Block',
  academicBlock: 'Academic Block',
  labComplex: 'Lab Complex',
  hostel: 'Hostel',
  diningKitchen: 'Dining & Kitchen',
  parking: 'Parking',
  openPlayground: 'Open / Playground',
  expansionReserve: 'Expansion Reserve',
  traineeCapacity: 'Trainee Capacity',
  annualTrainees: 'Annual Trainees',
  staffCount: 'Staff Count',
  powerLoad: 'Power Load',
  waterSupply: 'Water Supply',
};




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


/* ─────────────────────── COMPONENTS ─────────────────────── */

function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-orange/10 px-4 py-2 text-sm font-semibold text-primary-orange ring-1 ring-primary-orange/20">
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </div>
  );
}

function PageBadge({ page }: { page: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-slate-800/60 px-2 py-0.5 text-[10px] font-mono text-slate-400 ring-1 ring-slate-700/50">
      Page {page}
    </span>
  );
}

/* ─────────────────────── MAIN PAGE ─────────────────────── */

export default function SchoolServicesPage() {

  return (
    <main className="bg-white dark:bg-slate-950">

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white py-20 dark:border-slate-800 dark:bg-slate-950 sm:py-28">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-glow-drift-1 absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary-orange/10 to-amber-500/5 blur-3xl" />
          <div className="animate-glow-drift-2 absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-500/8 to-indigo-500/5 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <SectionBadge icon={Building2} label="Campus Layout & Infrastructure Plan" />
            <PageBadge page={1} />
          </div>

          <h1 className="mb-3 max-w-4xl text-4xl font-bold leading-[1.1] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            <span className="text-gradient-orange">Durga Dulari</span>{' '}
            Textile Skill Development Institute
          </h1>
          <p className="mb-2 max-w-2xl text-lg font-medium text-slate-500 dark:text-slate-400 sm:text-xl">
            Centre of Excellence for <span className="text-primary-orange">Spinning</span> · <span className="text-primary-orange">Maintenance</span> · <span className="text-primary-orange">Automation</span>
          </p>
          <p className="mb-12 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            This document presents the complete campus layout, space allocation, infrastructure specifications, and room-by-room design. Three layout models are presented: 1-Acre (Starter), 2-Acre (Standard), and 5-Acre (Full Campus).
          </p>

          {/* Hero stat cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-orange/30 hover:shadow-[0_12px_40px_rgba(244,121,31,0.1)] dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange transition-colors group-hover:bg-primary-orange group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <p className="text-2xl font-bold text-slate-950 dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                  {stat.sub && (
                    <span className="mt-1 inline-block rounded-full bg-primary-orange/10 px-2 py-0.5 text-[10px] font-semibold text-primary-orange">
                      {stat.sub}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═══════════ DOCUMENT CONTENTS NAV ═══════════ */}
      <section className="border-b border-slate-100 bg-slate-50/50 py-8 dark:border-slate-800 dark:bg-slate-900/40">
        <Container>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Document Contents</p>
          <div className="flex flex-wrap gap-2">
            {[
              { pg: 2, label: 'Model Comparison' },
              { pg: 3, label: 'Master Layout' },
              { pg: 4, label: 'Admin & Academic' },
              { pg: 5, label: 'Lab Complex' },
              { pg: 6, label: 'Hostel Block' },
              { pg: 7, label: 'Infrastructure Specs' },
              { pg: 8, label: '5-Acre Expansion' },
            ].map((item) => (
              <a
                key={item.pg}
                href={`#page-${item.pg}`}
                className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-all hover:border-primary-orange/40 hover:bg-primary-orange/5 hover:text-primary-orange dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-primary-orange/40 dark:hover:text-primary-orange"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-100 text-[10px] font-bold text-slate-500 transition-colors group-hover:bg-primary-orange group-hover:text-white dark:bg-slate-700 dark:text-slate-400">{item.pg}</span>
                {item.label}
                <ChevronRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ PAGE 2: MODEL COMPARISON — BLUEPRINT ═══════════ */}
      <section id="page-2" className="py-20 sm:py-28">
        <Container>
          {/* Blueprint Container */}
          <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-[#e8e8e8] shadow-2xl dark:border-slate-600 dark:bg-slate-800/50">

            {/* ── Top Header Bar (Navy) ── */}
            <div className="flex flex-col items-start justify-between gap-2 bg-[#0b2545] px-5 py-4 sm:flex-row sm:items-center sm:px-8 sm:py-5">
              <div>
                <h2 className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
                  Durga Dulari Textile Skill Development Institute
                </h2>
                <p className="mt-0.5 text-sm font-bold uppercase tracking-wider text-primary-orange sm:text-base">
                  Campus Model Comparison
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs font-medium text-slate-300 sm:text-sm">Campus Layout & Infrastructure Plan</p>
                <p className="text-[11px] text-slate-400">1 Acre · 2 Acre · 5 Acre</p>
              </div>
            </div>

            {/* ── Body ── */}
            <div className="p-3 sm:p-5">

              {/* Comparison cards */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {modelComparison.map((model) => (
                  <div
                    key={model.name}
                    className={`relative overflow-hidden rounded-md border-2 ${model.recommended ? 'border-primary-orange/50 ring-2 ring-primary-orange/20' : 'border-slate-300/60 dark:border-slate-700'} bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900/60`}
                  >
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${model.color} px-5 py-4`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-medium text-white/80">{model.budget} Project</p>
                          <h3 className="text-lg font-bold text-white">{model.name}</h3>
                        </div>
                        {model.recommended && (
                          <span className="flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                            <Star size={11} /> RECOMMENDED
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Specs list */}
                    <div className="p-4">
                      <div className="space-y-2">
                        {Object.entries(model.specs).map(([key, val]) => (
                          <div key={key} className="flex items-start justify-between gap-2 text-[12px]">
                            <span className="font-medium text-slate-500 dark:text-slate-400">{specLabels[key]}</span>
                            <span className="text-right font-semibold text-slate-800 dark:text-slate-200">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendation callout */}
              <div className="mt-4 flex items-center gap-3 rounded-md border-2 border-primary-orange/30 bg-white p-4 dark:border-primary-orange/20 dark:bg-slate-900/60">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-orange text-white">
                  <Trophy size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-primary-orange">Recommended Model for Initial Launch: 2-Acre Standard (■ ₹5 Crore)</p>
                  <p className="mt-0.5 text-[12px] font-medium text-slate-700 dark:text-slate-300">
                    Best balance of capacity (300 trainees), PMKVY eligibility, bank loan feasibility, and hostel residential facility.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Bottom Footer ── */}
            <div className="flex items-center justify-between border-t-2 border-slate-300 bg-[#f0f0f0] px-5 py-2.5 text-[10px] dark:border-slate-600 dark:bg-slate-800/40 sm:px-8">
              <p className="font-medium text-slate-500 dark:text-slate-400">Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential</p>
              <p className="font-bold text-slate-500 dark:text-slate-400">Page 2</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ PAGE 3: MASTER LAYOUT PLAN — BLUEPRINT ═══════════ */}
      <section id="page-3" className="border-y border-slate-100 bg-slate-50/50 py-20 dark:border-slate-800 dark:bg-slate-900/30 sm:py-28">
        <Container>
          {/* Blueprint Container */}
          <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-[#e8e8e8] shadow-2xl dark:border-slate-600 dark:bg-slate-800/50">

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
            <div className="flex items-center justify-between border-t-2 border-slate-300 bg-[#f0f0f0] px-5 py-2.5 text-[10px] dark:border-slate-600 dark:bg-slate-800/40 sm:px-8">
              <p className="font-medium text-slate-500 dark:text-slate-400">Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential</p>
              <p className="font-bold text-slate-500 dark:text-slate-400">Page 3</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ PAGE 4: ADMIN & ACADEMIC BLOCK — FLOOR PLAN ═══════════ */}
      <section id="page-4" className="py-20 sm:py-28">
        <Container>
          {/* Floor Plan Blueprint Container */}
          <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-[#e8e8e8] shadow-2xl dark:border-slate-600 dark:bg-slate-800/50">

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
            <div className="flex items-center justify-between border-t-2 border-slate-300 bg-[#f0f0f0] px-5 py-2.5 text-[10px] dark:border-slate-600 dark:bg-slate-800/40 sm:px-8">
              <p className="font-medium text-slate-500 dark:text-slate-400">Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential</p>
              <p className="font-bold text-slate-500 dark:text-slate-400">Page 4</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ PAGE 5: LABORATORY COMPLEX — FLOOR PLAN ═══════════ */}
      <section id="page-5" className="border-y border-slate-100 bg-slate-50/50 py-20 dark:border-slate-800 dark:bg-slate-900/30 sm:py-28">
        <Container>
          {/* Floor Plan Blueprint Container */}
          <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-[#e8e8e8] shadow-2xl dark:border-slate-600 dark:bg-slate-800/50">

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
            <div className="flex items-center justify-between border-t-2 border-slate-300 bg-[#f0f0f0] px-5 py-2.5 text-[10px] dark:border-slate-600 dark:bg-slate-800/40 sm:px-8">
              <p className="font-medium text-slate-500 dark:text-slate-400">Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential</p>
              <p className="font-bold text-slate-500 dark:text-slate-400">Page 5</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ PAGE 6: HOSTEL BLOCK ═══════════ */}
      <section id="page-6" className="py-20 sm:py-28">
        <Container>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <SectionBadge icon={Bed} label="Hostel Block — Boys & Girls Residential Facility" />
            <PageBadge page={6} />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            Residential Facility Layout
          </h2>
          <p className="mb-12 text-sm text-slate-500 dark:text-slate-400">
            G+1 Structure · 500 sq.m. Built-Up · 300 Beds Total
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Boys Hostel */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-5">
                <h3 className="text-xl font-bold text-white">Boys Hostel</h3>
                <p className="text-sm text-white/80">150 Beds · 38 Rooms</p>
              </div>
              <div className="p-6">
                {/* Ground floor */}
                <div className="mb-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">Ground Floor — 19 Rooms (4-bed each = 74 beds)</p>
                  <div className="grid grid-cols-5 gap-1.5">
                    {Array.from({ length: 19 }, (_, i) => (
                      <div key={`bg-${i}`} className="flex items-center justify-center rounded-md bg-cyan-50 px-1 py-2 text-[10px] font-bold text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-400">
                        R-{i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                {/* First floor */}
                <div className="mb-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">First Floor — 19 Rooms (4-bed each = 76 beds)</p>
                  <div className="grid grid-cols-5 gap-1.5">
                    {Array.from({ length: 19 }, (_, i) => (
                      <div key={`bf-${i}`} className="flex items-center justify-center rounded-md bg-blue-50 px-1 py-2 text-[10px] font-bold text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
                        R-{i + 20}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Common Facilities */}
                <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {['Warden Room', 'Toilet Block 1', 'Toilet Block 2', 'Study Room', 'Store Room'].map((f) => (
                    <span key={f} className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Girls Hostel */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60">
              <div className="bg-gradient-to-r from-pink-500 to-rose-600 px-6 py-5">
                <h3 className="text-xl font-bold text-white">Girls Hostel</h3>
                <p className="text-sm text-white/80">150 Beds · 38 Rooms</p>
              </div>
              <div className="p-6">
                {/* Ground floor */}
                <div className="mb-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">Ground Floor — 19 Rooms (4-bed each = 74 beds)</p>
                  <div className="grid grid-cols-5 gap-1.5">
                    {Array.from({ length: 19 }, (_, i) => (
                      <div key={`gg-${i}`} className="flex items-center justify-center rounded-md bg-pink-50 px-1 py-2 text-[10px] font-bold text-pink-700 dark:bg-pink-900/20 dark:text-pink-400">
                        R-{i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                {/* First floor */}
                <div className="mb-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">First Floor — 19 Rooms (4-bed each = 76 beds)</p>
                  <div className="grid grid-cols-5 gap-1.5">
                    {Array.from({ length: 19 }, (_, i) => (
                      <div key={`gf-${i}`} className="flex items-center justify-center rounded-md bg-rose-50 px-1 py-2 text-[10px] font-bold text-rose-700 dark:bg-rose-900/20 dark:text-rose-400">
                        R-{i + 20}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Common Facilities */}
                <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {['Lady Warden Room', 'Toilet Block 1', 'Toilet Block 2', 'Study Room', 'Store Room', 'CCTV', 'Separate Entry'].map((f) => (
                    <span key={f} className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ PAGE 7: INFRASTRUCTURE SPECS ═══════════ */}
      <section id="page-7" className="border-y border-slate-100 bg-slate-50/50 py-20 dark:border-slate-800 dark:bg-slate-900/30 sm:py-28">
        <Container>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <SectionBadge icon={Target} label="Infrastructure Specifications" />
            <PageBadge page={7} />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            Equipment, Area & Facility Summary
          </h2>
          <p className="mb-10 text-sm text-slate-500 dark:text-slate-400">
            Laboratory Complex — Area & Equipment Summary
          </p>

          {/* Lab Specs Table */}
          <div className="mb-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80">
                    <th className="whitespace-nowrap px-5 py-3.5 font-bold text-slate-700 dark:text-slate-200">Lab / Area</th>
                    <th className="whitespace-nowrap px-5 py-3.5 font-bold text-slate-700 dark:text-slate-200">Description</th>
                    <th className="whitespace-nowrap px-5 py-3.5 text-center font-bold text-slate-700 dark:text-slate-200">Area (sq.m.)</th>
                    <th className="whitespace-nowrap px-5 py-3.5 text-center font-bold text-slate-700 dark:text-slate-200">Batch Cap.</th>
                    <th className="whitespace-nowrap px-5 py-3.5 font-bold text-slate-700 dark:text-slate-200">Key Equipment</th>
                  </tr>
                </thead>
                <tbody>
                  {infraTable.map((row, i) => (
                    <tr
                      key={row.lab}
                      className={`border-b border-slate-100 transition-colors hover:bg-primary-orange/5 dark:border-slate-800 dark:hover:bg-primary-orange/5 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900/40' : 'bg-slate-50/50 dark:bg-slate-900/20'
                        }`}
                    >
                      <td className="whitespace-nowrap px-5 py-3 font-semibold text-slate-800 dark:text-white">{row.lab}</td>
                      <td className="px-5 py-3 text-slate-600 dark:text-slate-400">{row.desc}</td>
                      <td className="px-5 py-3 text-center font-bold text-primary-orange">{row.area}</td>
                      <td className="px-5 py-3 text-center font-semibold text-slate-700 dark:text-slate-300">{row.batch}</td>
                      <td className="px-5 py-3 text-slate-600 dark:text-slate-400">{row.equipment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Block-wise Summary */}
          <h3 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">Block-wise Area & Facility Summary</h3>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80">
                    <th className="whitespace-nowrap px-5 py-3.5 font-bold text-slate-700 dark:text-slate-200">Block</th>
                    <th className="whitespace-nowrap px-5 py-3.5 text-center font-bold text-slate-700 dark:text-slate-200">Floors</th>
                    <th className="whitespace-nowrap px-5 py-3.5 text-center font-bold text-slate-700 dark:text-slate-200">Area (sq.m.)</th>
                    <th className="whitespace-nowrap px-5 py-3.5 text-center font-bold text-slate-700 dark:text-slate-200">Capacity</th>
                    <th className="whitespace-nowrap px-5 py-3.5 font-bold text-slate-700 dark:text-slate-200">Key Facilities</th>
                  </tr>
                </thead>
                <tbody>
                  {blockSummary.map((row, i) => (
                    <tr
                      key={row.block}
                      className={`border-b border-slate-100 transition-colors hover:bg-primary-orange/5 dark:border-slate-800 dark:hover:bg-primary-orange/5 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900/40' : 'bg-slate-50/50 dark:bg-slate-900/20'
                        }`}
                    >
                      <td className="whitespace-nowrap px-5 py-3 font-semibold text-slate-800 dark:text-white">{row.block}</td>
                      <td className="px-5 py-3 text-center text-slate-600 dark:text-slate-400">{row.floors}</td>
                      <td className="px-5 py-3 text-center font-bold text-primary-orange">{row.area}</td>
                      <td className="px-5 py-3 text-center font-semibold text-slate-700 dark:text-slate-300">{row.capacity}</td>
                      <td className="px-5 py-3 text-slate-600 dark:text-slate-400">{row.facilities}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ PAGE 8: 5-ACRE EXPANSION — BLUEPRINT ═══════════ */}
      <section id="page-8" className="py-20 sm:py-28">
        <Container>
          {/* Blueprint Container */}
          <div className="overflow-hidden rounded-xl border-2 border-slate-300 bg-[#e8e8e8] shadow-2xl dark:border-slate-600 dark:bg-slate-800/50">

            {/* ── Top Header Bar (Navy) ── */}
            <div className="flex flex-col items-start justify-between gap-2 bg-[#0b2545] px-5 py-4 sm:flex-row sm:items-center sm:px-8 sm:py-5">
              <div>
                <h2 className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
                  Durga Dulari Textile Skill Development Institute
                </h2>
                <p className="mt-0.5 text-sm font-bold uppercase tracking-wider text-primary-orange sm:text-base">
                  5-Acre Full Campus Expansion Layout
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs font-medium text-slate-300 sm:text-sm">Campus Layout & Infrastructure Plan</p>
                <p className="text-[11px] text-slate-400">Scale: Approx. 1:800 | Total Built-up: 5,000 sq.m.</p>
              </div>
            </div>

            {/* ── Campus Expansion Body ── */}
            <div className="p-3 sm:p-5">

              {/* Top Row — Admin + Academic + Hostels */}
              <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {/* Admin Block */}
                <div className="overflow-hidden rounded-md border-2 border-blue-400/40 transition-all hover:shadow-lg">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-3 py-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Admin Block</h4>
                    <p className="text-[11px] font-semibold text-blue-200">(500 sq.m.)</p>
                  </div>
                  <div className="bg-[#eef2ff] p-3 dark:bg-[#1e2540]">
                    <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">G+1 | 50 staff</p>
                  </div>
                </div>

                {/* Academic Block */}
                <div className="overflow-hidden rounded-md border-2 border-indigo-400/40 transition-all hover:shadow-lg">
                  <div className="bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Academic Block</h4>
                    <p className="text-[11px] font-semibold text-indigo-100">(1,200 sq.m.)</p>
                  </div>
                  <div className="bg-[#eef0ff] p-3 dark:bg-[#1e2040]">
                    <p className="text-[11px] text-slate-700 dark:text-slate-300">4 Smart Classrooms</p>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300">Seminar Hall | Library</p>
                  </div>
                </div>

                {/* Boys Hostel */}
                <div className="overflow-hidden rounded-md border-2 border-cyan-400/40 transition-all hover:shadow-lg">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Boys Hostel</h4>
                    <p className="text-[11px] font-semibold text-cyan-100">(600 sq.m.)</p>
                  </div>
                  <div className="bg-[#e8f7fd] p-3 dark:bg-[#1a2a3a]">
                    <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">G+2 | 300 Beds Total</p>
                  </div>
                </div>

                {/* Girls Hostel */}
                <div className="overflow-hidden rounded-md border-2 border-pink-400/40 transition-all hover:shadow-lg">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-600 px-3 py-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Girls Hostel</h4>
                    <p className="text-[11px] font-semibold text-pink-100">(600 sq.m.)</p>
                  </div>
                  <div className="bg-[#fff0f5] p-3 dark:bg-[#3a1e28]">
                    <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">G+2 | 300 Beds Total</p>
                  </div>
                </div>
              </div>

              {/* ── MAIN ROAD ── */}
              <div className="my-4 flex items-center gap-3">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
                <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">← Main Road →</p>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
              </div>

              {/* Middle Row — Lab Phase 1 + Phase 2 */}
              <div className="mb-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
                {/* Lab Complex Phase 1 */}
                <div className="overflow-hidden rounded-md border-2 border-orange-400/40 transition-all hover:shadow-lg">
                  <div className="bg-gradient-to-r from-primary-orange to-amber-500 px-4 py-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Lab Complex Phase 1</h4>
                        <p className="text-[11px] font-semibold text-orange-100">(700 sq.m. — existing)</p>
                      </div>
                      <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white">All 12 Labs</span>
                    </div>
                  </div>
                  <div className="bg-[#fff5ee] p-3 dark:bg-[#3a2c1e]">
                    <p className="text-[11px] text-slate-700 dark:text-slate-300">Spinning | Mechanical | Electrical | Electronics/PLC</p>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300">Utility | Garment | Knitting | Computer | Tool | Safety</p>
                  </div>
                </div>

                {/* Lab Complex Phase 2 */}
                <div className="overflow-hidden rounded-md border-2 border-amber-400/40 transition-all hover:shadow-lg">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 px-4 py-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Lab Complex Phase 2</h4>
                        <p className="text-[11px] font-semibold text-amber-100">(800 sq.m. — expansion)</p>
                      </div>
                      <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white">NEW</span>
                    </div>
                  </div>
                  <div className="bg-[#fef8e8] p-3 dark:bg-[#3a3520]">
                    <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">Advanced CoE Labs</p>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300">R&D Lab | Testing Lab</p>
                  </div>
                </div>
              </div>

              {/* Row — Dining + Multipurpose + Parking */}
              <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Dining Hall */}
                <div className="overflow-hidden rounded-md border-2 border-amber-400/40 transition-all hover:shadow-lg">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-500 px-3 py-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Dining Hall & Kitchen</h4>
                    <p className="text-[11px] font-semibold text-amber-100">(300 sq.m.)</p>
                  </div>
                  <div className="bg-[#fef8e8] p-3 dark:bg-[#3a3520]">
                    <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">400-seat | Commercial Kitchen</p>
                  </div>
                </div>

                {/* Multipurpose Hall */}
                <div className="overflow-hidden rounded-md border-2 border-violet-400/40 transition-all hover:shadow-lg">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Multipurpose Hall</h4>
                    <p className="text-[11px] font-semibold text-violet-100">(500 sq.m.)</p>
                  </div>
                  <div className="bg-[#f3eeff] p-3 dark:bg-[#2a1e3a]">
                    <p className="text-[11px] text-slate-700 dark:text-slate-300">Events | Placement Drives</p>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300">Industry Exhibitions</p>
                  </div>
                </div>

                {/* Parking */}
                <div className="overflow-hidden rounded-md border-2 border-slate-400/40 transition-all hover:shadow-lg">
                  <div className="bg-gradient-to-r from-slate-500 to-slate-600 px-3 py-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Parking</h4>
                    <p className="text-[11px] font-semibold text-slate-200">(600 sq.m.)</p>
                  </div>
                  <div className="bg-[#f0f0ea] p-3 dark:bg-[#2a2a28]">
                    <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">60 cars + 100 two-wheelers</p>
                  </div>
                </div>
              </div>

              {/* ── SERVICE ROAD ── */}
              <div className="my-4 flex items-center gap-3">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
                <p className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">← Service Road →</p>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
              </div>

              {/* Bottom Row — Playground + Expansion Reserve */}
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1fr]">
                {/* Open Playground */}
                <div className="overflow-hidden rounded-md border-2 border-emerald-400/40 transition-all hover:shadow-lg">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Open Playground</h4>
                        <p className="text-[11px] font-semibold text-emerald-100">(3,000 sq.m.)</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#e8fde8] p-3 dark:bg-[#1a3a1e]">
                    <p className="text-[11px] text-slate-700 dark:text-slate-300">Football | Volleyball | Badminton Courts</p>
                  </div>
                </div>

                {/* Expansion Reserve */}
                <div className="overflow-hidden rounded-md border-2 border-dashed border-teal-400/60 transition-all hover:shadow-lg">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-4 py-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">Expansion Reserve</h4>
                        <p className="text-[11px] font-semibold text-teal-100">(4,500 sq.m.)</p>
                      </div>
                      <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white">FUTURE</span>
                    </div>
                  </div>
                  <div className="bg-[#e6f7f7] p-3 dark:bg-[#1a3030]">
                    <p className="text-[11px] italic text-slate-600 dark:text-slate-400">Future growth area</p>
                  </div>
                </div>
              </div>

              {/* ── Gate Strip ── */}
              <div className="mt-4 flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-md border-2 border-slate-400/50 bg-white px-5 py-1.5 dark:border-slate-600 dark:bg-slate-700">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Gate</p>
                </div>
              </div>
            </div>

            {/* ── Bottom Footer ── */}
            <div className="flex items-center justify-between border-t-2 border-slate-300 bg-[#f0f0f0] px-5 py-2.5 text-[10px] dark:border-slate-600 dark:bg-slate-800/40 sm:px-8">
              <p className="font-medium text-slate-500 dark:text-slate-400">Promoted by Durga Dulari Enterprises, Bhopal, Madhya Pradesh | Confidential</p>
              <p className="font-bold text-slate-500 dark:text-slate-400">Page 8</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ CTA SECTION ═══════════ */}
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
                Ready to Build Your Training Campus?
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
                  <Link href="/downloads" className="gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white">
                    Download Brochure
                  </Link>
                </Button>
              </div>
              <p className="mt-6 text-xs text-slate-500">2025–26 · Confidential</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
