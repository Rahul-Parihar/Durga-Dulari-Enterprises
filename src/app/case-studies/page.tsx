import React from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { caseStudies } from '@/data/caseStudies';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Durga Dulari Enterprises',
  description: 'Real success stories from our textile mill clients across India.',
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-white dark:bg-slate-950 py-16 border-b border-slate-100 dark:border-slate-800">
        <Container>
          <h1 className="text-5xl font-bold mb-4 text-slate-950 dark:text-white">Case Studies</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">Real results from textile mills we've partnered with</p>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <Container>
          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <div key={study.id} className="border-l-4 border-primary-orange bg-slate-50 dark:bg-slate-900/60 p-8 rounded border-y border-r border-slate-100 dark:border-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">Case #{idx + 1}</h2>
                    <p className="text-slate-700 dark:text-slate-200 mb-4 font-semibold">{study.clientProfile}</p>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      <strong>Industry:</strong> {study.industry}
                    </p>
                    <div className="space-y-3 text-sm">
                      {study.services.map((service, i) => (
                        <div key={i} className="inline-block bg-white dark:bg-slate-950 px-3 py-1 rounded-full text-xs text-slate-900 dark:text-slate-200 font-semibold mr-2 border border-slate-100 dark:border-slate-800">
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="bg-white dark:bg-slate-950 rounded-lg p-6 border border-slate-100 dark:border-slate-800">
                      <div className="mb-4">
                        <h3 className="font-bold text-slate-950 dark:text-white mb-2">Challenge</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">{study.challenge}</p>
                      </div>
                      <div className="mb-4">
                        <h3 className="font-bold text-slate-950 dark:text-white mb-2">Solution</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">{study.solution}</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/25 border border-green-200 dark:border-green-900/40 rounded p-4">
                        <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">Results</h3>
                        <p className="text-green-700 dark:text-green-300 text-sm">{study.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-lg p-8 text-center">
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Note:</strong> Real verified case studies with written permission from clients are available upon request. These are template examples showing our service delivery model.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Request Verified References</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
