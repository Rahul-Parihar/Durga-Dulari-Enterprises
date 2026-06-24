export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: string[];
  process: ProcessStep[];
  painPoints: PainPoint[];
  relatedServices: string[];
  faqs: FAQ[];
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PainPoint {
  challenge: string;
  solution: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  focus: string;
  outcomes: string[];
  how_we_help: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  clientProfile: string;
  challenge: string;
  solution: string;
  results: string;
  industry: string;
  services: string[];
}

export interface BlogResource {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime: number;
  content: string;
  relatedResources: string[];
}

export interface Download {
  id: string;
  title: string;
  description: string;
  icon: string;
  downloadUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  industry: string;
  verified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface LeadFormData {
  name: string;
  company: string;
  mobile: string;
  email: string;
  location: string;
  requirement: string;
  details: string;
  consent: boolean;
}

export interface ChatbotLead {
  industry: string;
  requirement: string;
  scope: string;
  location: string;
  urgency: 'immediate' | 'month' | 'exploring';
  timestamp: Date;
}
