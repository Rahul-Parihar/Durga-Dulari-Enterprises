import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { industries } from '@/data/industries';
import { ArrowRight } from 'lucide-react';
import { DynamicIcon } from '@/components/common/DynamicIcon';

export function IndustriesPreview() {
  return (
    <SectionWrapper bgColor="white">
      <Container>
        <SectionHeading
          subtitle="Market Expertise"
          title="Industries We Serve"
          description="Support across spinning, knitting, weaving, garmenting, dyeing, and industrial sectors"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {industries.map((industry) => (
            <Card
              key={industry.id}
              hover
              className="group flex h-full min-w-0 flex-col p-5 sm:p-6"
            >
              <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange transition-colors group-hover:bg-primary-orange/15 dark:group-hover:bg-primary-orange/20">
                <DynamicIcon name={industry.icon} size={24} />
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-primary-navy dark:text-white mb-2 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300">
                {industry.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-5 leading-relaxed font-medium break-words">
                {industry.description}
              </p>

              <ul className="space-y-2.5 mb-6 flex-grow">
                {industry.how_we_help.slice(0, 3).map((help, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-orange" />
                    <span className="min-w-0 break-words">{help}</span>
                  </li>
                ))}
              </ul>

              <Button variant="ghost" size="sm" className="mt-auto w-fit gap-2 px-0 hover:bg-transparent text-primary-orange hover:text-primary-orange dark:hover:text-primary-orange" asChild>
                <Link href="/industries" className="group/link">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="shrink-0 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
