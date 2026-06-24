import type { BlogResource } from '@/types';

export const blogResources: BlogResource[] = [
  {
    id: '1',
    slug: 'preventive-maintenance-guide',
    title: 'Complete Guide to Preventive Maintenance in Textile Mills',
    category: 'Maintenance',
    description: 'A practical maintenance playbook to reduce downtime, improve MTBF, and extend machine life.',
    readTime: 8,
    content: 'Preventive maintenance is crucial for textile operations. This guide covers best practices for spindle maintenance, mechanical systems, and utilities. Implementing a structured maintenance program can reduce MTTR by 25% and improve MTBF significantly. Key topics: maintenance scheduling, documentation, spare parts management, and KPI tracking.',
    relatedResources: ['mechanical-maintenance-checklist', 'maintenance-roi-calculator'],
  },
  {
    id: '2',
    slug: 'textile-automation-trends',
    title: 'Textile Automation & Digitalization Trends for Modern Mills',
    category: 'Technology',
    description: 'Explore Industry 4.0 tools, IoT monitoring, and automation ideas for more predictable output.',
    readTime: 10,
    content: 'Textile industry is rapidly adopting automation and digital solutions. This article covers spindle speed automation, real-time production monitoring, AI-powered quality control, and IoT sensors. Benefits include 18% production improvement, 40% quality improvement, and better decision-making through data analytics.',
    relatedResources: ['automation-implementation-guide', 'textile-electronics-overview'],
  },
  {
    id: '3',
    slug: 'hiring-trained-textile-workers',
    title: 'How to Hire Trained Textile Workers Without Recruitment Headaches',
    category: 'HR',
    description: 'A step-by-step approach to source, verify, and deploy skilled textile manpower with less friction.',
    readTime: 7,
    content: 'Recruiting quality textile workers is challenging. Learn how to partner with specialized agencies, assess worker skills, and ensure cultural fit. Topics covered: worker verification, training assessment, compliance documentation, and retention strategies. Deploy trained workers within 24 hours with our model.',
    relatedResources: ['worker-training-standards', 'hr-compliance-checklist'],
  },
  {
    id: '4',
    slug: 'utility-cost-reduction-strategies',
    title: '15% Utility Cost Reduction: Real Strategies That Work',
    category: 'Operations',
    description: 'Actionable strategies to optimize power, water, and steam costs in textile mills.',
    readTime: 9,
    content: 'Utilities can account for 15% of mill operating costs. This guide covers water treatment optimization, compressed air efficiency, boiler optimization, and power factor correction. Case studies show average savings of 22% within 6 months. Implementation ROI typically 4x.',
    relatedResources: ['utility-audit-checklist', 'energy-efficiency-guide'],
  },
  {
    id: '5',
    slug: 'quality-control-textile-production',
    title: 'Quality Control Best Practices in Textile Production',
    category: 'Quality',
    description: 'Establish robust quality control processes to reduce wastage and customer complaints.',
    readTime: 8,
    content: 'Quality consistency is critical in textile manufacturing. This guide covers in-process QC, end-product testing, defect analysis, and continuous improvement. Learn how to reduce wastage by 45% and improve customer satisfaction scores by 92%. Includes templates for QC documentation and KPI tracking.',
    relatedResources: ['quality-checklist', 'defect-analysis-guide'],
  },
  {
    id: '6',
    slug: 'plant-installation-timeline',
    title: 'Realistic Timeline & Checklist for New Mill Installation',
    category: 'Projects',
    description: 'Step-by-step guide for planning and executing textile mill installation.',
    readTime: 12,
    content: 'Installing a new textile mill requires careful planning. This comprehensive guide covers site assessment, equipment procurement, installation phases, commissioning, and handover. Learn the typical timeline, budget considerations, and risk mitigation strategies. Includes detailed project checklist and vendor selection criteria.',
    relatedResources: ['project-planning-template', 'vendor-selection-guide'],
  },
  {
    id: '7',
    slug: 'compliance-requirements-textile-india',
    title: 'Complete Compliance Checklist for Textile Operations in India',
    category: 'Compliance',
    description: 'GST, labor laws, environmental regulations, and operational compliance for textile mills.',
    readTime: 10,
    content: 'Compliance is complex for textile mills. This guide covers GST requirements, contract labor licensing, PF/ESI obligations, environmental clearances, and safety standards. Ensure your mill meets all regulatory requirements and avoid penalties. Includes compliance checklist, document templates, and audit requirements.',
    relatedResources: ['compliance-audit-template', 'regulatory-updates'],
  },
  {
    id: '8',
    slug: 'nclt-mill-revival-strategies',
    title: 'Turnaround Strategies for NCLT Mills: Path to Recovery',
    category: 'Revival',
    description: 'Proven strategies for sick mill revival and return to profitability.',
    readTime: 14,
    content: 'NCLT revival requires structured approach. Learn proven turnaround strategies: operational optimization, cost reduction, staff restructuring, market repositioning. This guide covers revival planning, KPI setting, implementation milestones, and success metrics. Includes case studies of successful mill revivals and recovery timelines.',
    relatedResources: ['turnaround-planning-guide', 'nclt-compliance-guide'],
  },
  {
    id: '9',
    slug: 'spinning-mill-kpis',
    title: 'Essential KPIs Every Spinning Mill Manager Should Track',
    category: 'Management',
    description: 'Key performance indicators for operational excellence and decision-making.',
    readTime: 9,
    content: 'Track the right KPIs to make informed decisions. This guide covers production KPIs (spindle hours, TFO, TM%), efficiency KPIs (OEE, spindle utilization), quality KPIs (wastage %, breakage rate), and financial KPIs (cost per kg, margins). Learn benchmarking standards and how to set improvement targets.',
    relatedResources: ['kpi-dashboard-template', 'benchmarking-guide'],
  },
  {
    id: '10',
    slug: 'textile-worker-training-program',
    title: 'Designing Effective Textile Worker Training Programs',
    category: 'Training',
    description: 'Create training curriculum for textile operators and technicians.',
    readTime: 11,
    content: 'Quality training improves worker productivity by 30%. Learn curriculum design, training delivery methods, assessment techniques, and certification. Topics covered: spinning operator training, maintenance fitter certification, loom technician development, soft skills training. Includes training module templates.',
    relatedResources: ['training-curriculum-template', 'trainer-certification-guide'],
  },
  {
    id: '11',
    slug: 'environmental-sustainability-textile',
    title: 'Environmental Sustainability in Textile Manufacturing',
    category: 'Sustainability',
    description: 'Eco-friendly practices and waste management for textile mills.',
    readTime: 9,
    content: 'Sustainability is increasingly important. This guide covers effluent treatment, water recycling, energy efficiency, waste management, and carbon footprint reduction. Learn compliance with environmental regulations and customer sustainability requirements. Includes best practices and ROI calculations for green initiatives.',
    relatedResources: ['environmental-audit-template', 'waste-management-guide'],
  },
  {
    id: '12',
    slug: 'cost-analysis-textile-operations',
    title: 'Comprehensive Cost Analysis Framework for Textile Operations',
    category: 'Finance',
    description: 'Break down and analyze costs to identify optimization opportunities.',
    readTime: 10,
    content: 'Understanding cost structure is critical. This guide covers fixed vs variable costs, departmental cost analysis, cost per unit calculation, and cost reduction opportunities. Learn benchmarking against industry standards, identifying cost leakages, and implementing cost control measures. Includes cost analysis templates.',
    relatedResources: ['cost-analysis-template', 'budgeting-guide'],
  },
];

export const getBlogBySlug = (slug: string): BlogResource | undefined => {
  return blogResources.find((blog) => blog.slug === slug);
};

export const getAllBlogSlugs = (): string[] => {
  return blogResources.map((blog) => blog.slug);
};

export const getBlogsByCategory = (category: string): BlogResource[] => {
  return blogResources.filter((blog) => blog.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(blogResources.map((blog) => blog.category));
  return Array.from(categories).sort();
};
