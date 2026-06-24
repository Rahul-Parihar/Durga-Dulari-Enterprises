import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { ServiceSnapshot } from '@/components/home/ServiceSnapshot';
import { IndustriesPreview } from '@/components/home/IndustriesPreview';
import { ProcessSection } from '@/components/home/ProcessSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { CaseStudiesPreview } from '@/components/home/CaseStudiesPreview';
import { TrainingPreview } from '@/components/home/TrainingPreview';
import { ResourcesPreview } from '@/components/home/ResourcesPreview';
import { TestimonialsPreview } from '@/components/home/TestimonialsPreview';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Durga Dulari Enterprises | Textile Manpower & Industrial Solutions',
  description: 'Emergency textile manpower deployment, maintenance, automation, and turnkey projects for spinning mills and textile facilities across India. 24×7 support.',
  keywords: ['textile manpower', 'spinning mill', 'maintenance services', 'textile automation', 'plant installation'],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <WhyChooseUs />
      <ServiceSnapshot />
      <IndustriesPreview />
      <ProcessSection />
      <CaseStudiesPreview />
      <TrainingPreview />
      <ResourcesPreview />
      <TestimonialsPreview />
      <FinalCTA />
    </>
  );
}
