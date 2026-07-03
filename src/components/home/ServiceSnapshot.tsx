import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import { DynamicIcon } from '@/components/common/DynamicIcon';

export function ServiceSnapshot() {
  const midPoint = Math.ceil(services.length / 2);
  const row1 = services.slice(0, midPoint);
  const row2 = services.slice(midPoint);

  return (
    <SectionWrapper bgColor="white" hasPadding={false} className="pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 lg:pb-10">
      <Container>
        <SectionHeading
          subtitle="Our Capabilities"
          title="12 Core Services for the Textile Industry"
          description="Comprehensive solutions from skilled manpower to advanced electronics automation, plant setup, and maintenance."
          centered
        />
      </Container>

      {/* Edge-to-Edge Horizontal Scroll Containers */}
      <div className="flex flex-col gap-6 overflow-hidden py-2 select-none relative w-full mt-10">
        
        {/* Row 1: Right-to-Left Scrolling */}
        <div className="relative w-full overflow-hidden">
          {/* Fading Mask Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent dark:from-slate-950 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent dark:from-slate-950 z-10 pointer-events-none" />
          
          <div className="flex gap-4 sm:gap-6 w-max animate-marquee-left hover-pause py-4 px-4 sm:px-8">
            {/* Render Row 1 twice for seamless loop */}
            {[...row1, ...row1].map((service, index) => (
              <Link 
                key={`${service.id}-row1-${index}`} 
                href={`/services/${service.slug}`} 
                className="block group w-[240px] sm:w-[310px] shrink-0"
              >
                <Card 
                  hover={false} 
                  className="h-full flex flex-col p-5 sm:p-6 bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 group-hover:border-primary-orange/20 shadow-md group-hover:shadow-[0_20px_50px_rgba(244,121,31,0.12)] dark:group-hover:shadow-[0_20px_50px_rgba(244,121,31,0.06)] group-hover:-translate-y-3 transition-all duration-500 rounded-3xl min-w-0 relative overflow-hidden"
                >
                  {/* Decorative corner gradient */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-orange/5 to-transparent rounded-tr-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                  <div className="w-10 h-10 bg-primary-orange/10 text-primary-orange rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-orange group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110">
                    <div className="group-hover:rotate-12 transition-transform duration-300">
                      <DynamicIcon name={service.icon} size={20} />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-primary-navy dark:text-white mb-2 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 flex-grow font-medium break-words">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-1.5 text-primary-orange font-bold text-sm group-hover:gap-3 transition-all duration-200">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Row 2: Left-to-Right Scrolling */}
        <div className="relative w-full overflow-hidden">
          {/* Fading Mask Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent dark:from-slate-950 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent dark:from-slate-950 z-10 pointer-events-none" />
          
          <div className="flex gap-4 sm:gap-6 w-max animate-marquee-right hover-pause py-4 px-4 sm:px-8">
            {/* Render Row 2 twice for seamless loop */}
            {[...row2, ...row2].map((service, index) => (
              <Link 
                key={`${service.id}-row2-${index}`} 
                href={`/services/${service.slug}`} 
                className="block group w-[240px] sm:w-[310px] shrink-0"
              >
                <Card 
                  hover={false} 
                  className="h-full flex flex-col p-5 sm:p-6 bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 group-hover:border-primary-orange/20 shadow-md group-hover:shadow-[0_20px_50px_rgba(244,121,31,0.12)] dark:group-hover:shadow-[0_20px_50px_rgba(244,121,31,0.06)] group-hover:-translate-y-3 transition-all duration-500 rounded-3xl min-w-0 relative overflow-hidden"
                >
                  {/* Decorative corner gradient */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-orange/5 to-transparent rounded-tr-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                  <div className="w-10 h-10 bg-primary-orange/10 text-primary-orange rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-orange group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110">
                    <div className="group-hover:rotate-12 transition-transform duration-300">
                      <DynamicIcon name={service.icon} size={20} />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-primary-navy dark:text-white mb-2 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 flex-grow font-medium break-words">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-1.5 text-primary-orange font-bold text-sm group-hover:gap-3 transition-all duration-200">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <Container>
        <div className="text-center mt-14">
          <Button variant="outline" size="lg" className="shadow-sm font-bold" asChild>
            <Link href="/services">View All 12 Services</Link>
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
export default ServiceSnapshot;
