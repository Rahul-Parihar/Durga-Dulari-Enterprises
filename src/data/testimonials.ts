import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'K. Srinivasan',
    role: 'Managing Director',
    company: 'Coimbatore Spinners Ltd.',
    content: 'Vijay Kumar Ojha and the Durga Dulari team deployed 120 skilled ring-frame operators to our mill in less than 48 hours during a critical seasonal labor shortage. Their speed and compliance-ready documentation are unmatched in the industry.',
    industry: 'Spinning',
    verified: false,
  },
  {
    id: '2',
    name: 'Rajesh Mehra',
    role: 'General Manager of Operations',
    company: 'Ludhiana Knitwear Hub',
    content: 'Their mechanical preventive maintenance AMC has reduced our circular knit machinery breakdown rates by 42% over the last 12 months. The technicians are highly trained, punctual, and require minimal supervision.',
    industry: 'Knitting',
    verified: false,
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Director of HR',
    company: 'Tirupur Apparel Exports',
    content: 'Durga Dulari School of Skills is our go-to partner for pre-trained garmenting operators. Deploying 150 certified operators within 3 days saved our export order deadline. Their support is truly 24x7.',
    industry: 'Garmenting',
    verified: false,
  },
];

export const industryReferences = {
  spinning: '90+ spinning mills served across India',
  knitting: '45+ knitting mills and processing units',
  garmenting: '30+ garmenting facilities and apparel manufacturers',
  general: '180+ textile industry clients',
};

export const clientCategories = [
  'Spinning Mills',
  'Knitting Units',
  'Weaving Mills',
  'Garmenting Facilities',
  'Fiber Dyeing Units',
  'Industrial Manufacturing',
];
