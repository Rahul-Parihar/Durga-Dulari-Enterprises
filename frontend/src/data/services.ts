import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    slug: 'textile-manpower-supply',
    title: 'Textile Manpower Supply',
    shortDescription: 'Skilled textile workers deployed across spinning, weaving, garmenting, and allied sectors.',
    description: 'Rapid deployment of pre-vetted, trained textile operators and technicians. We maintain a ready pool of 10,000+ skilled workers across PAN India locations. Our rigorous vetting process ensures only quality personnel for your mill operations.',
    icon: 'Users',
    benefits: [
      'Pre-vetted and trained workers',
      'Rapid deployment within 24 hours',
      '98% retention rate',
      'PAN India availability',
      'Compliance-ready documentation',
      'Transparent pricing model',
    ],
    process: [
      {
        step: 1,
        title: 'Requirement Discussion',
        description: 'Understand your mill profile, production needs, and worker specifications.',
      },
      {
        step: 2,
        title: 'Worker Selection',
        description: 'Match qualified workers from our active pool.',
      },
      {
        step: 3,
        title: 'Rapid Deployment',
        description: 'Deploy trained personnel within agreed timeframe.',
      },
      {
        step: 4,
        title: 'Ongoing Support',
        description: 'HR support, compliance, and replacement assurance.',
      },
    ],
    painPoints: [
      {
        challenge: 'Urgent worker shortage disrupting production',
        solution: 'Emergency deployment available 24×7. Call us immediately.',
      },
      {
        challenge: 'Quality inconsistency across temporary staff',
        solution: 'All workers pre-trained and verified. 99.8% quality benchmark.',
      },
      {
        challenge: 'Compliance and documentation burden',
        solution: 'We handle all PF, ESI, GST compliance.',
      },
    ],
    relatedServices: ['textile-consultancy', 'training-recruitment', 'projects-division'],
    faqs: [
      {
        question: 'How quickly can you deploy workers?',
        answer: 'For urgent requirements, within 24 hours. Standard deployments within 3 days.',
      },
      {
        question: 'Are workers trained?',
        answer: 'Yes. All workers are pre-trained by Durga Dulari School of Skills. We provide specialized training for your mill.',
      },
      {
        question: 'What locations do you cover?',
        answer: 'We operate PAN India. Currently serving 150+ spinning mills across major textile hubs in India.',
      },
    ],
    cta: {
      primary: 'Request Workers Now',
      secondary: 'Schedule Consultation',
    },
  },
  {
    id: '2',
    slug: 'mechanical-maintenance',
    title: 'Mechanical Maintenance Services',
    shortDescription: 'Complete mechanical preventive and breakdown maintenance for textile machinery.',
    description: 'Expert mechanical maintenance teams for spinning frames, drafting systems, winding machines, and all textile equipment. Minimize downtime with our preventive maintenance programs.',
    icon: 'Wrench',
    benefits: [
      'Preventive maintenance programs',
      'Emergency breakdown support 24×7',
      '35% downtime reduction',
      'Skilled technician pool',
      'Genuine spare parts network',
      'MTBF optimization',
    ],
    process: [
      {
        step: 1,
        title: 'Site Audit',
        description: 'Comprehensive equipment inspection and maintenance history review.',
      },
      {
        step: 2,
        title: 'Customized Program',
        description: 'Design preventive maintenance calendar for your equipment.',
      },
      {
        step: 3,
        title: 'Execution',
        description: 'Regular scheduled maintenance with detailed reporting.',
      },
      {
        step: 4,
        title: 'Performance Tracking',
        description: 'Monitor MTBF, MTTR, and cost metrics.',
      },
    ],
    painPoints: [
      {
        challenge: 'Unexpected machine breakdowns causing production loss',
        solution: 'Preventive maintenance program reduces breakdowns by 40%.',
      },
      {
        challenge: 'High maintenance costs and poor MTBF',
        solution: 'Predictive maintenance and spare parts optimization.',
      },
      {
        challenge: 'Lack of skilled mechanics in your area',
        solution: 'Dedicated technician team available on retainer or call basis.',
      },
    ],
    relatedServices: ['electrical-maintenance', 'utility-operations', 'amc-services'],
    faqs: [
      {
        question: 'What is your response time for breakdowns?',
        answer: '4 hours for emergency support in your location. We coordinate with local partners for instant response.',
      },
      {
        question: 'Do you provide spare parts?',
        answer: 'Yes. We have partnerships with authorized spare parts suppliers. Genuine parts guaranteed.',
      },
      {
        question: 'Can you improve our MTBF?',
        answer: 'Yes. Through preventive maintenance, we typically improve MTBF by 45% within 3 months.',
      },
    ],
    cta: {
      primary: 'Schedule Maintenance Audit',
      secondary: 'Get Retainer Quote',
    },
  },
  {
    id: '3',
    slug: 'electrical-maintenance',
    title: 'Electrical Maintenance Services',
    shortDescription: 'Electrical system maintenance, automation controls, and preventive electrical care.',
    description: 'Full-spectrum electrical maintenance: switchgear, motors, drives, PLCs, and control systems. Compliance with electrical safety standards and NFPA guidelines.',
    icon: 'Zap',
    benefits: [
      'Electrical safety compliance',
      'Preventive electrical care',
      'Motor and drive optimization',
      'PLC programming and repair',
      '24×7 emergency support',
      'Reduced power losses',
    ],
    process: [
      {
        step: 1,
        title: 'Electrical Audit',
        description: 'Complete electrical system assessment and compliance check.',
      },
      {
        step: 2,
        title: 'Risk Mitigation',
        description: 'Identify and address electrical hazards.',
      },
      {
        step: 3,
        title: 'Preventive Program',
        description: 'Scheduled maintenance and testing.',
      },
      {
        step: 4,
        title: 'Emergency Support',
        description: 'On-call support for electrical breakdowns.',
      },
    ],
    painPoints: [
      {
        challenge: 'Electrical failures causing production stoppage',
        solution: 'Preventive maintenance and 24×7 emergency response.',
      },
      {
        challenge: 'Safety compliance and electrical hazards',
        solution: 'Full compliance audit and remediation program.',
      },
      {
        challenge: 'High power bills due to inefficient systems',
        solution: 'Power factor correction and energy audit.',
      },
    ],
    relatedServices: ['mechanical-maintenance', 'utility-operations', 'amc-services'],
    faqs: [
      {
        question: 'Are you compliant with electrical safety standards?',
        answer: 'Yes. Our team follows IEC, NFPA, and Indian electrical code standards.',
      },
      {
        question: 'Can you reduce our power consumption?',
        answer: 'Yes. Through power factor correction and motor optimization, typically 12% to 15% reduction.',
      },
      {
        question: 'Do you service PLC and automation systems?',
        answer: 'Yes. We service industrial automation systems, motors, drives, and control panels.',
      },
    ],
    cta: {
      primary: 'Request Electrical Audit',
      secondary: 'Emergency Support',
    },
  },
  {
    id: '4',
    slug: 'utility-operations',
    title: 'Utility Operations & Management',
    shortDescription: 'Water management, steam systems, air compression, and utility infrastructure.',
    description: 'Expert management of plant utilities: water treatment, boiler operation, compressed air systems, thermal utilities, and waste management. Optimize utility costs and ensure zero downtime.',
    icon: 'Droplets',
    benefits: [
      'Utility cost optimization',
      'Water treatment expertise',
      'Steam system management',
      'Compressed air optimization',
      '24×7 operator availability',
      'Compliance ready',
    ],
    process: [
      {
        step: 1,
        title: 'Utility Assessment',
        description: 'Evaluate all utility systems and identify inefficiencies.',
      },
      {
        step: 2,
        title: 'Optimization Plan',
        description: 'Design cost reduction and efficiency initiatives.',
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Execute operational improvements.',
      },
      {
        step: 4,
        title: 'Monitoring',
        description: 'Continuous tracking of utility metrics and costs.',
      },
    ],
    painPoints: [
      {
        challenge: 'Utility costs consuming 18% of production budget',
        solution: 'Comprehensive optimization program typically saves 20% to 25%.',
      },
      {
        challenge: 'Water quality issues affecting production',
        solution: 'Advanced water treatment system installation and operation.',
      },
      {
        challenge: 'Finding skilled utility operators',
        solution: 'Trained operator pool available on permanent or contract basis.',
      },
    ],
    relatedServices: ['mechanical-maintenance', 'electrical-maintenance', 'amc-services'],
    faqs: [
      {
        question: 'Can you reduce our utility costs?',
        answer: 'Yes. Average savings are 22% annually through optimization.',
      },
      {
        question: 'Do you handle water treatment?',
        answer: 'Yes. We install and operate water treatment plants compliant with EPA and local standards.',
      },
      {
        question: 'Are your operators certified?',
        answer: 'Yes. All operators are trained and certified for boiler, water treatment, and utility operations.',
      },
    ],
    cta: {
      primary: 'Request Utility Audit',
      secondary: 'Operator Deployment',
    },
  },
  {
    id: '5',
    slug: 'plant-installation',
    title: 'Plant Installation & Commissioning',
    shortDescription: 'Complete turnkey plant installation services for spinning mills and textile units.',
    description: 'End-to-end installation of new textile plants: equipment placement, electrical infrastructure, utility setup, and commissioning. We ensure your plant is ready for production within 4 to 6 weeks.',
    icon: 'Building2',
    benefits: [
      'Turnkey installation',
      'Accelerated commissioning',
      'Production-ready setup',
      'Compliance documentation',
      'Training for operations team',
      'Performance guarantees',
    ],
    process: [
      {
        step: 1,
        title: 'Site Assessment',
        description: 'Evaluate site and prepare for installation.',
      },
      {
        step: 2,
        title: 'Equipment Installation',
        description: 'Install all machinery and auxiliary systems.',
      },
      {
        step: 3,
        title: 'Utility Integration',
        description: 'Connect electrical, water, and steam systems.',
      },
      {
        step: 4,
        title: 'Commissioning & Training',
        description: 'Commission plant and train operations team.',
      },
    ],
    painPoints: [
      {
        challenge: 'Plant installation taking 6 to 9 months, delaying revenue',
        solution: 'Accelerated commissioning process reduces timeline to 8 to 12 weeks.',
      },
      {
        challenge: 'Complex coordination between contractors',
        solution: 'We manage all vendors, coordination, and quality control.',
      },
      {
        challenge: 'Operational team not ready for new equipment',
        solution: 'Comprehensive training program included.',
      },
    ],
    relatedServices: ['plant-shifting', 'projects-division', 'textile-consultancy'],
    faqs: [
      {
        question: 'What is your typical commissioning timeline?',
        answer: 'Depends on plant scale. Average 6 to 8 weeks for a 25,000 spindle spinning mill.',
      },
      {
        question: 'Do you handle equipment procurement?',
        answer: 'Yes. We coordinate with OEMs and suppliers. We can source equipment and execute installation.',
      },
      {
        question: 'Will the plant be ready for production immediately?',
        answer: 'Yes. We provide 30 days of trial run support before handover.',
      },
    ],
    cta: {
      primary: 'Schedule Site Visit',
      secondary: 'Get Installation Quote',
    },
  },
  {
    id: '6',
    slug: 'plant-shifting',
    title: 'Plant Shifting & Relocation',
    shortDescription: 'Safe relocation of textile plants with minimal downtime.',
    description: 'Professional plant relocation: machinery dismantling, logistics, reinstallation, and recommissioning. Minimize downtime and ensure zero production loss during the shift.',
    icon: 'Truck',
    benefits: [
      'Minimal production downtime',
      'Safe equipment handling',
      'Complete reassembly',
      'Recommissioning support',
      'Risk mitigation',
      'Logistics management',
    ],
    process: [
      {
        step: 1,
        title: 'Planning & Logistics',
        description: 'Detailed shift plan, logistics coordination, and resource allocation.',
      },
      {
        step: 2,
        title: 'Dismantling',
        description: 'Careful machinery dismantling with documentation.',
      },
      {
        step: 3,
        title: 'Transportation',
        description: 'Secure logistics to new location.',
      },
      {
        step: 4,
        title: 'Installation & Commissioning',
        description: 'Reinstall and recommission at new location.',
      },
    ],
    painPoints: [
      {
        challenge: 'Plant shift causing 3 months of production loss',
        solution: 'Our processes reduce downtime to 2 weeks.',
      },
      {
        challenge: 'Risk of equipment damage during relocation',
        solution: 'Expert handling, insurance coverage, and damage prevention.',
      },
      {
        challenge: 'Coordination complexity across multiple vendors',
        solution: 'We manage entire logistics and installation process.',
      },
    ],
    relatedServices: ['plant-installation', 'projects-division', 'mechanical-maintenance'],
    faqs: [
      {
        question: 'How long does a plant shift take?',
        answer: 'Typically 3 to 4 weeks including planning, dismantling, transport, and installation.',
      },
      {
        question: 'Are you insured for equipment damage?',
        answer: 'Yes. Full insurance coverage for equipment during relocation.',
      },
      {
        question: 'Can you shift just specific equipment?',
        answer: 'Yes. We handle partial shifts and specific equipment relocation.',
      },
    ],
    cta: {
      primary: 'Request Shift Consultation',
      secondary: 'Get Relocation Quote',
    },
  },
  {
    id: '7',
    slug: 'amc-services',
    title: 'Annual Maintenance Contracts (AMC)',
    shortDescription: 'Comprehensive AMC packages for textile mills with guaranteed performance metrics.',
    description: 'All-inclusive annual maintenance contracts covering mechanical, electrical, and utility systems. Transparent pricing, guaranteed uptime, and performance accountability.',
    icon: 'CheckCircle',
    benefits: [
      'Predictable maintenance costs',
      'Guaranteed uptime 99.5%',
      'Comprehensive coverage',
      'Performance metrics tracking',
      'Emergency response included',
      'Spare parts budget clarity',
    ],
    process: [
      {
        step: 1,
        title: 'Scope Definition',
        description: 'Define equipment coverage and service level.',
      },
      {
        step: 2,
        title: 'Customized AMC',
        description: 'Create tailored contract with pricing and terms.',
      },
      {
        step: 3,
        title: 'Service Delivery',
        description: 'Regular maintenance per agreed schedule.',
      },
      {
        step: 4,
        title: 'Performance Tracking',
        description: 'Monthly reports on uptime, costs, and metrics.',
      },
    ],
    painPoints: [
      {
        challenge: 'Unpredictable maintenance costs straining budget',
        solution: 'Fixed AMC pricing provides cost certainty.',
      },
      {
        challenge: 'Fragmented vendors for mechanical, electrical, utilities',
        solution: 'Single AMC partner handles all systems.',
      },
      {
        challenge: 'Difficult to track maintenance ROI and performance',
        solution: 'Detailed monthly KPI reports and performance dashboards.',
      },
    ],
    relatedServices: ['mechanical-maintenance', 'electrical-maintenance', 'utility-operations'],
    faqs: [
      {
        question: 'What is covered in your AMC?',
        answer: 'Mechanical, electrical, utility operations, emergency response, and spare parts (as per contract).',
      },
      {
        question: 'Can I choose coverage options?',
        answer: 'Yes. We offer flexible AMC tiers: Basic, Standard, and Premium.',
      },
      {
        question: 'What is your uptime guarantee?',
        answer: 'Standard AMC guarantees 99.5% uptime with penalty clauses if not met.',
      },
    ],
    cta: {
      primary: 'View AMC Options',
      secondary: 'Get Custom Quote',
    },
  },
  {
    id: '8',
    slug: 'textile-consultancy',
    title: 'Textile Consultancy & Process Optimization',
    shortDescription: 'Expert consultancy for mill operations, process improvement, and efficiency optimization.',
    description: 'Strategic consultancy from industry veterans: production optimization, cost reduction, process improvement, and capability assessment. Transform mill performance through data-driven insights.',
    icon: 'Brain',
    benefits: [
      'Process efficiency improvement',
      'Cost reduction strategies',
      'Production rate optimization',
      'Quality improvement programs',
      'Lean manufacturing principles',
      'Custom capability assessment',
    ],
    process: [
      {
        step: 1,
        title: 'Current State Analysis',
        description: 'Comprehensive mill audit and performance analysis.',
      },
      {
        step: 2,
        title: 'Gap Identification',
        description: 'Identify improvement opportunities and inefficiencies.',
      },
      {
        step: 3,
        title: 'Improvement Plan',
        description: 'Develop actionable improvement roadmap.',
      },
      {
        step: 4,
        title: 'Implementation Support',
        description: 'Guide implementation and measure results.',
      },
    ],
    painPoints: [
      {
        challenge: 'Stagnant production rates despite equipment upgrades',
        solution: 'Process optimization typically improves output by 8% to 12%.',
      },
      {
        challenge: 'High production costs compared to competitors',
        solution: 'Cost analysis and reduction program targets 15% reduction.',
      },
      {
        challenge: 'Quality inconsistency causing customer complaints',
        solution: 'Quality control program and Six Sigma methodologies.',
      },
    ],
    relatedServices: ['textile-electronics-automation', 'projects-division', 'training-recruitment'],
    faqs: [
      {
        question: 'How long does the consultation process take?',
        answer: 'Initial audit: 2 weeks. Improvement implementation: 6 to 8 weeks depending on scope.',
      },
      {
        question: 'Will consultants be on-site?',
        answer: 'Yes. We typically have consultants on-site 2 to 3 days per week during engagement.',
      },
      {
        question: 'What is the typical ROI?',
        answer: 'Average ROI is 3x within 12 months through process improvements.',
      },
    ],
    cta: {
      primary: 'Schedule Audit',
      secondary: 'Consult Expert',
    },
  },
  {
    id: '9',
    slug: 'textile-electronics-automation',
    title: 'Textile Electronics & Automation',
    shortDescription: 'Automation upgrades, PLC programming, textile electronics repair and optimization.',
    description: 'Modern automation solutions for textile mills. We specialize in spindle drive automation, electronic package weighing, and process control systems. All work is compliant with industry standards.',
    icon: 'Cpu',
    benefits: [
      'Spindle speed optimization',
      'Electronic package weighing',
      'PLC programming and upgrades',
      'Process automation',
      'Real-time monitoring systems',
      'Production analytics',
    ],
    process: [
      {
        step: 1,
        title: 'System Assessment',
        description: 'Evaluate current automation systems and identify upgrade needs.',
      },
      {
        step: 2,
        title: 'Solution Design',
        description: 'Design custom automation solution.',
      },
      {
        step: 3,
        title: 'Installation & Programming',
        description: 'Install hardware and develop PLC programs.',
      },
      {
        step: 4,
        title: 'Commissioning & Training',
        description: 'Commission system and train operators.',
      },
    ],
    painPoints: [
      {
        challenge: 'Manual control limiting production speed and consistency',
        solution: 'Automation upgrade typically improves output by 15% to 20%.',
      },
      {
        challenge: 'Outdated electronics causing frequent breakdowns',
        solution: 'Modern PLC and sensor replacement.',
      },
      {
        challenge: 'No real-time production visibility',
        solution: 'Production analytics dashboard with live metrics.',
      },
    ],
    relatedServices: ['textile-consultancy', 'projects-division', 'electrical-maintenance'],
    faqs: [
      {
        question: 'Do you work with legacy textile machinery?',
        answer: 'Yes. We retrofit older machines with modern electronic controls.',
      },
      {
        question: 'Can you integrate with Murata/Schlafhorst systems?',
        answer: 'We work with all major textile electronics systems. Note: We are not authorized dealers, but our technicians are trained on these systems.',
      },
      {
        question: 'What is the typical ROI for automation?',
        answer: 'Typical payback period is 12 to 18 months through efficiency gains.',
      },
    ],
    cta: {
      primary: 'Request System Audit',
      secondary: 'Discuss Automation',
    },
  },
  {
    id: '10',
    slug: 'textile-spares-procurement',
    title: 'Textile Spares & Equipment Procurement',
    shortDescription: 'Reliable procurement of genuine textile spares, parts, and replacement equipment.',
    description: 'Access to our network of authorized suppliers. We source genuine OEM parts for all major textile machinery. Transparent pricing and assured quality.',
    icon: 'Package',
    benefits: [
      'OEM genuine parts',
      'Competitive pricing',
      'Fast delivery',
      'Quality assurance',
      'Stock management support',
      'Vendor relationships',
    ],
    process: [
      {
        step: 1,
        title: 'Part Specification',
        description: 'Provide part details or machinery specifications.',
      },
      {
        step: 2,
        title: 'Quotation',
        description: 'We source and quote competitive pricing.',
      },
      {
        step: 3,
        title: 'Procurement',
        description: 'Secure OEM parts from authorized suppliers.',
      },
      {
        step: 4,
        title: 'Delivery & Support',
        description: 'Fast delivery and technical support included.',
      },
    ],
    painPoints: [
      {
        challenge: 'Difficulty sourcing genuine OEM parts quickly',
        solution: 'Our vendor network ensures availability and fast delivery.',
      },
      {
        challenge: 'Counterfeit parts causing reliability issues',
        solution: 'All parts guaranteed OEM genuine with certificates.',
      },
      {
        challenge: 'High spare parts costs',
        solution: 'We negotiate volume discounts and pass savings to you.',
      },
    ],
    relatedServices: ['mechanical-maintenance', 'electrical-maintenance', 'projects-division'],
    faqs: [
      {
        question: 'How quickly can you deliver parts?',
        answer: 'Standard delivery within 2 to 3 days. Emergency parts within 12 hours.',
      },
      {
        question: 'Are all parts guaranteed genuine?',
        answer: 'Yes. All parts come with OEM authenticity certificates.',
      },
      {
        question: 'Do you stock common replacement parts?',
        answer: 'Yes. We maintain inventory of commonly used spares for same-day delivery.',
      },
    ],
    cta: {
      primary: 'Request Quote',
      secondary: 'Check Availability',
    },
  },
  {
    id: '11',
    slug: 'sick-mill-revival',
    title: 'Sick Mill Revival & NCLT Support',
    shortDescription: 'Specialized services for revival of non-performing mills and NCLT-related operational support.',
    description: 'We support NCLT-approved mill revival through operational expertise. Our team can help implement turnaround plans, improve operational efficiency, and restore profitability.',
    icon: 'RotateCcw',
    benefits: [
      'NCLT operational support',
      'Turnaround management',
      'Cost optimization programs',
      'Operational efficiency improvement',
      'Staff restructuring support',
      'Performance stabilization',
    ],
    process: [
      {
        step: 1,
        title: 'Situation Assessment',
        description: 'Comprehensive analysis of mill challenges and NCLT approval scope.',
      },
      {
        step: 2,
        title: 'Turnaround Plan',
        description: 'Develop detailed turnaround and recovery strategy.',
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Execute operational improvements and efficiency programs.',
      },
      {
        step: 4,
        title: 'Performance Monitoring',
        description: 'Track recovery metrics and NCLT compliance.',
      },
    ],
    painPoints: [
      {
        challenge: 'Mill under NCLT with unclear path to recovery',
        solution: 'Structured turnaround program with accountability.',
      },
      {
        challenge: 'Operational inefficiencies causing continued losses',
        solution: 'Comprehensive efficiency improvement program.',
      },
      {
        challenge: 'Lack of expert management bandwidth',
        solution: 'Dedicated turnaround team for on-site support.',
      },
    ],
    relatedServices: ['textile-consultancy', 'projects-division', 'amc-services'],
    faqs: [
      {
        question: 'Can you support NCLT revivals?',
        answer: 'Yes. Our team has experience supporting NCLT-approved mill recovery programs.',
      },
      {
        question: 'What is your success rate?',
        answer: 'We have successfully stabilized 18+ mills. Specific case data available under NDA.',
      },
      {
        question: 'Do you take operational control?',
        answer: 'No. We provide consultancy and operational support. Final decisions rest with mill management and NCLT.',
      },
    ],
    cta: {
      primary: 'Discuss Revival Plan',
      secondary: 'Schedule Consultation',
    },
  },
  {
    id: '12',
    slug: 'projects-division',
    title: 'Projects Division',
    shortDescription: 'Turnkey project execution for textile mills, including installation, optimization, and custom solutions.',
    description: 'Our Projects Division handles complex, large-scale initiatives: greenfield plant setup, brownfield expansion, technology upgrades, and comprehensive optimization projects.',
    icon: 'Zap',
    benefits: [
      'Turnkey project execution',
      'Fixed timeline and budget',
      'Complete accountability',
      'Multi-discipline coordination',
      'Quality assurance',
      'Post-completion support',
    ],
    process: [
      {
        step: 1,
        title: 'Project Scoping',
        description: 'Define project scope, timeline, and deliverables.',
      },
      {
        step: 2,
        title: 'Planning & Mobilization',
        description: 'Develop project plan and mobilize resources.',
      },
      {
        step: 3,
        title: 'Execution',
        description: 'Execute project with regular monitoring and reporting.',
      },
      {
        step: 4,
        title: 'Handover & Support',
        description: 'Handover and provide post-completion support.',
      },
    ],
    painPoints: [
      {
        challenge: 'Large projects taking longer and costing more than budgeted',
        solution: 'Fixed project timeline and cost commitments.',
      },
      {
        challenge: 'Lack of single accountability point across vendor ecosystem',
        solution: 'We are single point of accountability for entire project.',
      },
      {
        challenge: 'Complex coordination between multiple specialists',
        solution: 'Dedicated project management team coordinates all activities.',
      },
    ],
    relatedServices: ['plant-installation', 'plant-shifting', 'textile-consultancy'],
    faqs: [
      {
        question: 'What types of projects do you handle?',
        answer: 'Greenfield setups, brownfield expansions, technology upgrades, and comprehensive mill optimization.',
      },
      {
        question: 'Can you provide fixed timeline and cost?',
        answer: 'Yes. We provide fixed-price contracts with penalties for delays.',
      },
      {
        question: 'Do you provide project insurance?',
        answer: 'Yes. Project completion insurance is available.',
      },
    ],
    cta: {
      primary: 'Discuss Your Project',
      secondary: 'Get Project Quote',
    },
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return services.map((service) => service.slug);
};
