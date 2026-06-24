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
  return (
    <SectionWrapper bgColor="white">
      <Container>
        <SectionHeading
          subtitle="Our Capabilities"
          title="12 Core Services for the Textile Industry"
          description="Comprehensive solutions from skilled manpower to advanced electronics automation, plant setup, and maintenance."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="block group">
              <Card 
                hover={false} 
                className="h-full flex flex-col p-6 sm:p-8 bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 group-hover:border-primary-orange/20 shadow-md group-hover:shadow-[0_20px_50px_rgba(244,121,31,0.12)] dark:group-hover:shadow-[0_20px_50px_rgba(244,121,31,0.06)] group-hover:-translate-y-3 transition-all duration-500 rounded-3xl min-w-0 relative overflow-hidden"
              >
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-orange/5 to-transparent rounded-tr-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                <div className="w-12 h-12 bg-primary-orange/10 text-primary-orange rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-orange group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110">
                  <div className="group-hover:rotate-12 transition-transform duration-300">
                    <DynamicIcon name={service.icon} size={24} />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-primary-navy dark:text-white mb-3 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-medium break-words">
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
