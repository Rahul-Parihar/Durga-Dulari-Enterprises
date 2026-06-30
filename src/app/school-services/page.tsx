import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  GraduationCap,
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
  Maximize2,
  LayoutGrid,
  Home,
  UtensilsCrossed,
  Car,
  Trees,
  LandPlot,
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

const masterLayoutBlocks = [
  { name: 'Administrative Block', area: '250 sq.m.', detail: 'Director Office · Placement Cell · Reception · Meeting Room · Accounts · Record Room', color: 'bg-blue-500', icon: Building2 },
  { name: 'Academic Block', area: '600 sq.m.', detail: '4 Smart Classrooms (75 each) · Seminar Hall (200-seat) · Library (500 titles) · Computer Lab (50 nodes)', color: 'bg-indigo-500', icon: GraduationCap },
  { name: 'Laboratory Complex', area: '700 sq.m.', detail: 'Spinning · Mechanical · Electrical · Electronics/PLC · Utility · Garment · Knitting · Computer · Tool Room · Safety · Motor Rewinding · Pneumatic/Hydraulic', color: 'bg-primary-orange', icon: FlaskConical },
  { name: 'Boys Hostel', area: '250 sq.m.', detail: '150 Beds · 38 Rooms (4-bed each) · Toilet Blocks · Study Room · Warden', color: 'bg-cyan-500', icon: Home },
  { name: 'Girls Hostel', area: '250 sq.m.', detail: '150 Beds · 38 Rooms (4-bed each) · Lady Warden · CCTV · Separate Entry', color: 'bg-pink-500', icon: Home },
  { name: 'Dining Hall + Kitchen', area: '150 sq.m.', detail: '200-Seat Dining Hall · Commercial Kitchen · Stores & Pantry', color: 'bg-amber-500', icon: UtensilsCrossed },
  { name: 'Parking', area: '300 sq.m.', detail: 'Cars + 2-wheelers · Internal Road 5m wide', color: 'bg-slate-500', icon: Car },
  { name: 'Open / Playground', area: '1,000 sq.m.', detail: 'Badminton · Volleyball · Morning PT Ground', color: 'bg-emerald-500', icon: Trees },
];

const adminRooms = [
  { name: "Director's Office", area: '400 sq.ft', detail: 'Private cabin · Meeting table · CCTV terminal' },
  { name: 'Conference Room', area: '300 sq.ft', detail: '20-seater · Projector · Whiteboard' },
  { name: 'Placement Cell', area: '300 sq.ft', detail: '4 terminals · Interview room · Portal' },
  { name: 'Reception & Waiting', area: '250 sq.ft', detail: 'Visitor registration · Display' },
  { name: 'Accounts', area: '150 sq.ft', detail: 'Tally · GST billing' },
  { name: 'Record Room & Store', area: '200 sq.ft', detail: 'Documentation archive' },
];

const academicRooms = [
  { name: 'Smart Classroom 1–4', area: '75 trainees each', detail: 'Smart Board · Projector · AC · CCTV' },
  { name: 'Seminar Hall', area: '200-Seat', detail: 'Stage · PA System · Projector · Inauguration / Placement Drives' },
  { name: 'Library', area: '500 Titles', detail: '50-seat Reading Room · Reference + Journals' },
  { name: 'Computer Lab', area: '50 Nodes', detail: 'i5 Systems · 100 Mbps Internet · Online Assessment' },
];

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

const expansionBlocks = [
  { name: 'Admin Block', area: '500 sq.m.', detail: 'G+1 · 50 staff', icon: Building2, color: 'bg-blue-500' },
  { name: 'Academic Block', area: '1,200 sq.m.', detail: '4 Smart Classrooms · Seminar Hall · Library', icon: GraduationCap, color: 'bg-indigo-500' },
  { name: 'Lab Complex Phase 1', area: '700 sq.m.', detail: 'Existing — All 12 Labs', icon: FlaskConical, color: 'bg-primary-orange' },
  { name: 'Lab Complex Phase 2', area: '800 sq.m.', detail: 'Expansion — Advanced CoE Labs · R&D · Testing', icon: FlaskConical, color: 'bg-amber-500' },
  { name: 'Boys Hostel', area: '600 sq.m.', detail: 'G+2 · 300 Beds Total', icon: Home, color: 'bg-cyan-500' },
  { name: 'Girls Hostel', area: '600 sq.m.', detail: 'G+2 · 300 Beds Total', icon: Home, color: 'bg-pink-500' },
  { name: 'Multipurpose Hall', area: '500 sq.m.', detail: 'Events · Placement Drives · Industry Exhibitions', icon: LayoutGrid, color: 'bg-violet-500' },
  { name: 'Dining & Kitchen', area: '300 sq.m.', detail: '400-seat · Commercial Kitchen', icon: UtensilsCrossed, color: 'bg-amber-600' },
  { name: 'Open Playground', area: '3,000 sq.m.', detail: 'Football · Volleyball · Badminton Courts', icon: Trees, color: 'bg-emerald-500' },
  { name: 'Parking', area: '600 sq.m.', detail: '60 cars + 100 two-wheelers', icon: Car, color: 'bg-slate-500' },
  { name: 'Expansion Reserve', area: '4,500 sq.m.', detail: 'Future growth area', icon: LandPlot, color: 'bg-teal-500' },
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

      {/* ═══════════ PAGE 2: MODEL COMPARISON ═══════════ */}
      <section id="page-2" className="py-20 sm:py-28">
        <Container>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <SectionBadge icon={LayoutGrid} label="Campus Model Comparison" />
            <PageBadge page={2} />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            1 Acre · 2 Acre · 5 Acre
          </h2>
          <p className="mb-12 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Three campus models designed for phased growth — from a lean starter unit to a full-scale Centre of Excellence.
          </p>

          {/* Comparison cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {modelComparison.map((model) => (
              <div
                key={model.name}
                className={`relative overflow-hidden rounded-2xl border ${model.recommended ? 'border-primary-orange/50 ring-2 ring-primary-orange/20' : 'border-slate-200 dark:border-slate-800'} bg-white transition-all duration-300 hover:-translate-y-1 dark:bg-slate-900/60`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${model.color} px-6 py-5`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white/80">{model.budget} Project</p>
                      <h3 className="text-xl font-bold text-white">{model.name}</h3>
                    </div>
                    {model.recommended && (
                      <span className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                        <Star size={12} /> RECOMMENDED
                      </span>
                    )}
                  </div>
                </div>

                {/* Specs list */}
                <div className="p-5">
                  <div className="space-y-2.5">
                    {Object.entries(model.specs).map(([key, val]) => (
                      <div key={key} className="flex items-start justify-between gap-2 text-sm">
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
          <div className="mt-8 rounded-2xl border border-primary-orange/30 bg-gradient-to-r from-primary-orange/5 via-amber-500/5 to-transparent p-6 dark:from-primary-orange/10 dark:via-amber-500/5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-orange text-white">
                <Trophy size={20} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-primary-orange">Recommended Model for Initial Launch</p>
                <p className="text-base font-semibold text-slate-700 dark:text-slate-200">
                  2-Acre Standard (₹5 Crore) — Best balance of capacity (300 trainees), PMKVY eligibility, bank loan feasibility, and hostel residential facility.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ PAGE 3: MASTER LAYOUT PLAN ═══════════ */}
      <section id="page-3" className="border-y border-slate-100 bg-slate-50/50 py-20 dark:border-slate-800 dark:bg-slate-900/30 sm:py-28">
        <Container>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <SectionBadge icon={MapPin} label="2-Acre Standard Campus" />
            <PageBadge page={3} />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            Master Layout Plan
          </h2>
          <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
            Scale: Approx. 1:500 · All dimensions in metres
          </p>

          {/* Campus Map - Interactive blocks */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-900/80 sm:p-8">
            {/* Layout legend */}
            <div className="mb-6 flex flex-wrap gap-3">
              {masterLayoutBlocks.map((b) => (
                <div key={b.name} className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className={`h-3 w-3 rounded-sm ${b.color}`} />
                  {b.name}
                </div>
              ))}
            </div>

            {/* Campus Grid Representation */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {masterLayoutBlocks.map((block) => {
                const Icon = block.icon;
                return (
                  <div
                    key={block.name}
                    className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700/60 dark:from-slate-800/60 dark:to-slate-900/60"
                  >
                    <div className={`absolute right-0 top-0 h-1 w-full ${block.color} opacity-60`} />
                    <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${block.color} text-white`}>
                      <Icon size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">{block.name}</h4>
                    <p className="mb-2 text-lg font-bold text-primary-orange">{block.area}</p>
                    <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{block.detail}</p>
                  </div>
                );
              })}
            </div>

            {/* Infrastructure strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl bg-slate-100/80 p-4 dark:bg-slate-800/50">
              <div className="flex items-center gap-2 text-sm">
                <Zap size={16} className="text-yellow-500" />
                <span className="font-medium text-slate-600 dark:text-slate-300">DG Set + Solar Inverter</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Droplets size={16} className="text-blue-500" />
                <span className="font-medium text-slate-600 dark:text-slate-300">OHT + Pump Room</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span className="font-medium text-slate-600 dark:text-slate-300">Security · Main Gate</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Sun size={16} className="text-orange-400" />
                <span className="font-medium text-slate-600 dark:text-slate-300">25 KW Solar</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ PAGE 4: ADMIN & ACADEMIC BLOCK ═══════════ */}
      <section id="page-4" className="py-20 sm:py-28">
        <Container>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <SectionBadge icon={Building2} label="Administrative & Academic Block" />
            <PageBadge page={4} />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            Detailed Floor Plan
          </h2>
          <p className="mb-12 text-sm text-slate-500 dark:text-slate-400">
            Ground Floor · Scale: Approx. 1:200
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Admin Block */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">Administrative Block</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">250 sq.m. · Ground Floor</p>
                </div>
              </div>
              <div className="space-y-3">
                {adminRooms.map((room) => (
                  <div
                    key={room.name}
                    className="rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-blue-300/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500/30"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white">{room.name}</h4>
                      <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        {room.area}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{room.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Block */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">Academic Block</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">600 sq.m. · Ground + First Floor</p>
                </div>
              </div>
              <div className="space-y-3">
                {academicRooms.map((room) => (
                  <div
                    key={room.name}
                    className="rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-indigo-300/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-500/30"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white">{room.name}</h4>
                      <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                        {room.area}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{room.detail}</p>
                  </div>
                ))}
              </div>
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

      {/* ═══════════ PAGE 8: 5-ACRE EXPANSION ═══════════ */}
      <section id="page-8" className="py-20 sm:py-28">
        <Container>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <SectionBadge icon={Maximize2} label="5-Acre Full Campus Expansion" />
            <PageBadge page={8} />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            Expansion Layout
          </h2>
          <p className="mb-12 text-sm text-slate-500 dark:text-slate-400">
            Scale: Approx. 1:800 · Total Built-up: 5,000 sq.m.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {expansionBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.name}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className={`absolute right-0 top-0 h-1 w-full ${block.color} opacity-60`} />
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${block.color} text-white shadow-sm`}>
                    <Icon size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">{block.name}</h4>
                  <p className="text-xl font-bold text-primary-orange">{block.area}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{block.detail}</p>
                </div>
              );
            })}
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
