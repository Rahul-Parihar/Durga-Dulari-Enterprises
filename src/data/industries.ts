import type { Industry } from '@/types';

export const industries: Industry[] = [
  {
    id: '1',
    slug: 'spinning',
    name: 'Spinning Mills',
    description: 'End-to-end manpower, maintenance, and productivity support for cotton, polyester, and blended yarn production.',
    icon: 'Factory',
    focus: 'Ring frame, blow room, carding, drawing, simplex, autoconer, packing, and utility operations.',
    outcomes: ['Stable shift operations', 'Better yarn quality control', 'Reduced stoppage and manpower gaps'],
    how_we_help: [
      'Deploy trained ring frame, simplex, carding, drawing, autoconer, and packing operators',
      'Support spindle maintenance, electrical troubleshooting, and routine machine care',
      'Improve yarn quality through process discipline, waste control, and operator training',
      'Increase production consistency with shift-wise monitoring and supervisor support',
      'Identify cost reduction opportunities in manpower planning, downtime, and material handling',
    ],
  },
  {
    id: '2',
    slug: 'knitting',
    name: 'Knitting Mills',
    description: 'Operational support for circular knitting units focused on fabric output, machine uptime, and quality consistency.',
    icon: 'Package',
    focus: 'Circular knitting, fabric inspection, yarn feeding, machine setting, roll handling, and floor coordination.',
    outcomes: ['Improved machine utilization', 'Consistent fabric quality', 'Cleaner production flow'],
    how_we_help: [
      'Supply knitting machine operators, helpers, fabric checkers, and floor supervisors',
      'Support fabric inspection, defect reduction, roll tracking, and production reporting',
      'Coordinate routine knitting machine maintenance, setting support, and breakdown response',
      'Optimize shift planning, machine allocation, and operator productivity',
      'Maintain attendance, safety, documentation, and statutory compliance records',
    ],
  },
  {
    id: '3',
    slug: 'garmenting',
    name: 'Garmenting Units',
    description: 'Skilled staffing and line support for garment units that need disciplined production, quality, and dispatch readiness.',
    icon: 'Shirt',
    focus: 'Cutting, sewing, finishing, checking, ironing, packing, line balancing, and quality control.',
    outcomes: ['Faster line ramp-up', 'Lower rejection and rework', 'Reliable dispatch support'],
    how_we_help: [
      'Recruit and deploy sewing operators, helpers, checkers, pressmen, packers, and line supervisors',
      'Support cutting-to-packing workflow with process operators and production coordination',
      'Strengthen inline and final quality checks to reduce rework and shipment delays',
      'Assist line balancing, daily target tracking, absentee replacement, and productivity control',
      'Maintain worker documentation, attendance records, safety processes, and compliance files',
    ],
  },
  {
    id: '4',
    slug: 'fibre-dyeing',
    name: 'Fibre Dyeing Units',
    description: 'Technical and manpower support for dyeing operations where shade consistency, safety, and compliance matter.',
    icon: 'Droplet',
    focus: 'Dye house operations, chemical handling, batch preparation, shade checking, hydro/extractor, dryer, and ETP support.',
    outcomes: ['Safer chemical handling', 'Better batch discipline', 'Cleaner compliance records'],
    how_we_help: [
      'Train and deploy dye house operators, helpers, batch handlers, and utility support staff',
      'Support chemical weighing, recipe discipline, stock handling, and safe storage practices',
      'Assist effluent treatment plant operation, housekeeping, and environmental documentation',
      'Improve shade checking, batch traceability, and quality control coordination',
      'Maintain safety practices, PPE discipline, and pollution-control compliance support',
    ],
  },
  {
    id: '5',
    slug: 'weaving',
    name: 'Weaving Mills',
    description: 'Production and maintenance support for weaving units that need reliable loom operations and fabric quality control.',
    icon: 'Grid3x3',
    focus: 'Power loom, rapier, air jet, warping, sizing, beam handling, fabric inspection, and maintenance coordination.',
    outcomes: ['Higher loom running efficiency', 'Reduced fabric defects', 'Better operator availability'],
    how_we_help: [
      'Deploy weavers, loom operators, fitters, electricians, helpers, and inspection staff',
      'Support loom maintenance, changeover assistance, preventive checks, and breakdown coordination',
      'Improve production output through shift planning, loom allocation, and floor supervision',
      'Strengthen fabric inspection, defect tracking, and quality assurance reporting',
      'Assist compliance, licensing, safety, and manpower documentation for weaving operations',
    ],
  },
  {
    id: '6',
    slug: 'industrial-manufacturing',
    name: 'Industrial Manufacturing',
    description: 'Reliable manpower, technical maintenance, and facility support for industrial manufacturing plants.',
    icon: 'Wrench',
    focus: 'Plant maintenance, utilities, material handling, installation support, safety operations, and shift coverage.',
    outcomes: ['Reliable maintenance coverage', 'Safer plant operations', 'Controlled operating cost'],
    how_we_help: [
      'Provide maintenance technicians, electricians, fitters, helpers, operators, and supervisors',
      'Run preventive maintenance schedules, equipment checks, and basic breakdown support',
      'Assist equipment installation, shifting, alignment support, and commissioning coordination',
      'Optimize staffing, utility support, housekeeping, and operating cost controls',
      'Maintain safety training, PPE discipline, compliance records, and site documentation',
    ],
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find((industry) => industry.slug === slug);
};

export const getAllIndustrySlugs = (): string[] => {
  return industries.map((industry) => industry.slug);
};
