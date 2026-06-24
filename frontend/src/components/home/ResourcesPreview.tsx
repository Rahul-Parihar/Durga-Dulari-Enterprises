import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, FileText } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { blogResources } from '@/data/resources';

const resourceHighlights = ['Practical checklist', 'Mill-ready insights', 'Action steps'];

export function ResourcesPreview() {
  const featuredResources = blogResources.slice(0, 3);

  return (
    <SectionWrapper bgColor="light" className="industrial-grid">
      <Container>
        <SectionHeading
          title="Industry Resources"
          subtitle="Learn from Experts"
          description="Access practical guides, industry reports, and best practices that help textile mills improve uptime, manpower planning, and operational control."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredResources.map((resource) => (
            <Link key={resource.id} href={`/resources/${resource.slug}`} className="group h-full">
              <Card className="relative h-full cursor-pointer p-6 flex flex-col border-slate-200/80 dark:border-slate-800">
                <div className="absolute inset-x-0 top-0 h-1 bg-primary-orange opacity-80" />

                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-orange/10 text-primary-orange shadow-sm border border-primary-orange/10 dark:border-primary-orange/20">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge label={resource.category} variant="orange" size="sm" />
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-slate-400">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {resource.readTime} min read
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold leading-snug text-primary-navy dark:text-white mb-3 group-hover:text-primary-orange transition-colors">
                  {resource.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-6 mb-6 flex-grow">
                  {resource.description}
                </p>

                <div className="mb-6 space-y-2 border-t border-slate-100 dark:border-slate-800 pt-5">
                  {resourceHighlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-orange" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-transparent dark:border-slate-800/80 px-4 py-3 text-primary-orange font-semibold text-sm transition-colors group-hover:bg-primary-orange group-hover:text-white">
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="w-4 h-4" aria-hidden="true" />
                    Read Article
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/resources"
            className="inline-flex items-center text-primary-orange font-bold hover:text-primary-navy dark:hover:text-white transition-colors"
          >
            Explore All Resources
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}
