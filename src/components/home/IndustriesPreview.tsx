'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { industries } from '@/data/industries';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { DynamicIcon } from '@/components/common/DynamicIcon';

export function IndustriesPreview() {
  const [expandedIndustryId, setExpandedIndustryId] = React.useState<string | null>(null);

  return (
    <SectionWrapper bgColor="white" hasPadding={false} className="pt-6 md:pt-8 lg:pt-10 pb-16 md:pb-24 lg:pb-32">
      <Container>
        <SectionHeading
          subtitle="Market Expertise"
          title="Industries We Serve"
          description="Support across spinning, knitting, weaving, garmenting, dyeing, and industrial sectors"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-5 sm:gap-6">
          {industries.map((industry) => (
            <Card
              key={industry.id}
              hover
              className="group flex min-h-[360px] min-w-0 flex-col overflow-hidden p-5 sm:p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out"
            >
              <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange transition-colors group-hover:bg-primary-orange/15 dark:group-hover:bg-primary-orange/20">
                <DynamicIcon name={industry.icon} size={24} />
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-primary-navy dark:text-white mb-2 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300">
                {industry.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed font-medium break-words line-clamp-2">
                {industry.description}
              </p>

              <div className="mb-5 flex-grow overflow-hidden">
                <ul className="space-y-2.5">
                  {industry.how_we_help.slice(0, 2).map((help, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-orange" />
                      <span className="min-w-0 break-words">{help}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    expandedIndustryId === industry.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <ul className="min-h-0 overflow-hidden space-y-2.5 pt-2.5">
                    {industry.how_we_help.slice(2).map((help, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-orange" />
                        <span className="min-w-0 break-words">{help}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedIndustryId(expandedIndustryId === industry.id ? null : industry.id)}
                  className="gap-1.5 px-0 hover:bg-transparent text-primary-orange hover:text-primary-orange dark:hover:text-primary-orange"
                >
                  <span>{expandedIndustryId === industry.id ? 'View Less' : 'View More'}</span>
                  {expandedIndustryId === industry.id ? (
                    <ChevronUp size={15} className="shrink-0" />
                  ) : (
                    <ChevronDown size={15} className="shrink-0" />
                  )}
                </Button>

                <Link
                  href="/industries"
                  className="group/link inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary-orange hover:text-primary-orange"
                >
                  <span>Learn More</span>
                  <ArrowRight size={15} className="shrink-0 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
