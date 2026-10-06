import React from 'react';
import type { Metadata } from 'next';
import { CaseStudiesContent } from '@/components/case-studies/CaseStudiesContent';

export const metadata: Metadata = {
  title: 'Case Studies & Turnaround Results | Durga Dulari Enterprises',
  description:
    'Explore verified case studies, turnaround stories, and measurable productivity improvements from textile mills across India partnered with Durga Dulari Enterprises.',
  keywords: [
    'textile mill case studies',
    'spinning mill turnaround',
    'knitting mill waste reduction',
    'textile manpower case study',
    'NCLT sick mill revival textile',
    'spindle maintenance case study',
  ],
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}

