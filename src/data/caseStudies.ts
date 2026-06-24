import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'case-study-1',
    clientProfile: 'Coimbatore Cottons - 2004 established spinning mill in Tamil Nadu',
    challenge: 'Client faced 18% production loss due to frequent spindle breakdowns and inability to source trained operators during peak season.',
    solution: 'Deployed 45 trained spinners, implemented preventive maintenance program, and provided emergency technical support. Installed real-time monitoring system for spindle health.',
    results: '35% reduction in downtime. Production increased by 12%. Cost savings of ₹22 Lakhs annually.',
    industry: 'Spinning',
    services: ['textile-manpower-supply', 'mechanical-maintenance', 'amc-services'],
  },
  {
    id: '2',
    slug: 'case-study-2',
    clientProfile: 'Ludhiana Knitwear - 2011 established knitting mill in Punjab',
    challenge: 'Quality consistency issues leading to customer complaints. 8% fabric wastage due to process variations.',
    solution: 'Conducted process audit, optimized production parameters, trained operator team, and implemented quality control framework.',
    results: 'Wastage reduced from 8% to 1.8%. Customer complaint rate dropped by 85%. Product value increased by ₹4.5 Lakhs per batch.',
    industry: 'Knitting',
    services: ['textile-consultancy', 'training-recruitment', 'projects-division'],
  },
  {
    id: '3',
    slug: 'case-study-3',
    clientProfile: 'Tirupur Apparels - Garmenting facility in Tamil Nadu',
    challenge: 'Urgent requirement for 150 trained garment workers due to sudden order surge. Local recruitment taking too long.',
    solution: 'Deployed 150 pre-trained garment operators from our Durga Dulari School of Skills within 3 days. Provided on-site supervisor support.',
    results: 'Met order deadline. 100% on-time delivery. Client satisfaction score: 4.9/5.0.',
    industry: 'Garmenting',
    services: ['textile-manpower-supply', 'training-recruitment'],
  },
  {
    id: '4',
    slug: 'case-study-4',
    clientProfile: 'Ahmedabad Spinning Mills - Utility operations in Gujarat',
    challenge: 'Utility costs consuming 15% of production budget. Water quality issues affecting yarn quality.',
    solution: 'Installed advanced water treatment system, optimized boiler operations, and deployed trained utility operators. Implemented utility tracking dashboard.',
    results: 'Utility costs reduced by 18%. Water quality improved by 95%. Annual savings: ₹14 Lakhs.',
    industry: 'Spinning',
    services: ['utility-operations', 'projects-division', 'textile-consultancy'],
  },
  {
    id: '5',
    slug: 'case-study-5',
    clientProfile: 'Ichalkaranji Weavers - Weaving mill in Maharashtra',
    challenge: 'Plant shift from Old MIDC Area to New Textile Hub required within 3 weeks with minimal production loss.',
    solution: 'Coordinated complete plant relocation: machinery dismantling, transport, installation, and recommissioning. Executed in 2 weeks.',
    results: 'Downtime: 2 weeks (target met). Zero equipment damage. Production resumed at full capacity.',
    industry: 'Weaving',
    services: ['plant-shifting', 'projects-division', 'mechanical-maintenance'],
  },
  {
    id: '6',
    slug: 'case-study-6',
    clientProfile: 'Bhilwara Textiles - Sick mill under NCLT revival in Rajasthan',
    challenge: 'Mill under NCLT with 20% capacity utilization. Operational turnaround required within 6 months.',
    solution: 'Implemented comprehensive turnaround program: process optimization, cost reduction, staff restructuring, and efficiency improvements. Dedicated management team on-site.',
    results: 'Capacity utilization improved to 85%. Profitability restored within 5 months. Ready for successful NCLT exit.',
    industry: 'Spinning',
    services: ['sick-mill-revival', 'textile-consultancy', 'projects-division'],
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((study) => study.slug === slug);
};

export const getAllCaseStudySlugs = (): string[] => {
  return caseStudies.map((study) => study.slug);
};
