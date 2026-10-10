import type { Metadata } from 'next';

import { ScrollReveal } from '@/components/common/ScrollReveal';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { ServiceSnapshot } from '@/components/home/ServiceSnapshot';
import { CaseStudiesPreview } from '@/components/home/CaseStudiesPreview';
import { TestimonialsPreview } from '@/components/home/TestimonialsPreview';
import { FinalCTA } from '@/components/home/FinalCTA';
import { ActivitiesSection } from '@/components/services/ActivitiesSection';

export const metadata: Metadata = {
  title: 'Durga Dulari Enterprises | Textile Manpower & Industrial Solutions',
  description: 'Emergency textile manpower deployment, maintenance, automation, and turnkey projects for spinning mills and textile facilities across India. 24×7 support.',
  keywords: ['textile manpower', 'spinning mill', 'maintenance services', 'textile automation', 'plant installation'],
};

export default function HomePage() {
  return (
    <>

      <HeroSection />
      
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>
      
      <ScrollReveal>
        <ServiceSnapshot />
      </ScrollReveal>
      
      <ScrollReveal>
        <ActivitiesSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <CaseStudiesPreview />
      </ScrollReveal>
      
      <ScrollReveal>
        <TestimonialsPreview />
      </ScrollReveal>
      
      <ScrollReveal>
        <FinalCTA />
      </ScrollReveal>
    </>
  );
}
