import React from 'react';
import type { Metadata } from 'next';
import { IndustriesContent } from '@/components/industries/IndustriesContent';

export const metadata: Metadata = {
  title: 'Industries We Serve | Durga Dulari Enterprises',
  description: 'Specialized industrial manpower, mechanical maintenance, electrical repair, and operational support for spinning mills, knitting units, weaving mills, garmenting, dyeing, and industrial manufacturing plants across India.',
  keywords: [
    'spinning mill manpower',
    'weaving loom maintenance',
    'knitting mill support',
    'dye house operators',
    'garmenting line balancing',
    'industrial manufacturing maintenance',
  ],
};

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesContent />
    </main>
  );
}
