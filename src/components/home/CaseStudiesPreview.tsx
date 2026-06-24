import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { caseStudies } from '@/data/caseStudies';

export function CaseStudiesPreview() {
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <SectionWrapper bgColor="white">
      <Container>
        <SectionHeading
          title="Success Stories"
          subtitle="Real Results from Real Clients"
          description="See how we've helped mills and industries optimize their operations and achieve measurable results"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCaseStudies.map((caseStudy) => (
            <Link key={caseStudy.id} href={`/case-studies/${caseStudy.slug}`}>
              <Card className="cursor-pointer h-full p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary-navy dark:bg-slate-900 border border-transparent dark:border-slate-800 text-white px-4 py-2 rounded-lg inline-block mb-4">
                  <p className="text-sm font-semibold">{caseStudy.industry}</p>
                </div>
                
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3 hover:text-primary-orange transition-colors">
                  {caseStudy.clientProfile}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  <strong>Challenge:</strong> {caseStudy.challenge.substring(0, 100)}...
                </p>
                
                <div className="flex gap-2 flex-wrap mb-4">
                  {caseStudy.services.map((service, idx) => (
                    <span key={idx} className="text-xs bg-orange-100 dark:bg-primary-orange/15 text-primary-orange px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-primary-orange font-semibold text-sm">
                  Read Full Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" asChild>
            <Link href="/case-studies">
              View All Case Studies
            </Link>
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
