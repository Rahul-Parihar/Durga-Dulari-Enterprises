import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { industries } from '@/data/industries';
import { ArrowRight, CheckCircle2, Factory, Sparkles, Target } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | Durga Dulari Enterprises',
  description: 'Support for spinning mills, knitting units, weaving mills, garmenting, dyeing, and industrial manufacturing.',
};

export default function IndustriesPage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-20 border-b border-slate-100 dark:border-slate-800">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-orange/10 px-4 py-2 text-sm font-semibold text-primary-orange ring-1 ring-primary-orange/20">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Sector-focused support
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight text-slate-950 dark:text-white">
              Industries We Serve
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Structured manpower, maintenance, training, and operational support for textile and industrial sectors across India.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold text-primary-orange">Operational coverage</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white leading-tight">
                Built around real plant needs
              </h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 ring-1 ring-slate-100 dark:ring-slate-800">
              <Factory className="h-4 w-4 text-primary-orange" aria-hidden="true" />
              {industries.length} sectors covered
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-orange/30"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange ring-1 ring-primary-orange/15">
                    <DynamicIcon name={industry.icon} size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-2 leading-tight group-hover:text-primary-orange transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="mb-5 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-4 sm:p-5">
                  <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-950 dark:text-white">
                    <Target className="h-4 w-4 text-primary-orange" aria-hidden="true" />
                    Coverage
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7">
                    {industry.focus}
                  </p>
                </div>

                <div className="mb-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-4 sm:p-5">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-slate-950 dark:text-white mb-4">
                    Support areas
                  </h4>
                  <ul className="space-y-3">
                    {industry.how_we_help.map((help, idx) => (
                      <li key={idx} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 flex items-start gap-3 leading-6">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-orange" />
                        <span className="min-w-0">{help}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {industry.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="rounded-lg bg-primary-orange/10 px-3 py-2 text-xs sm:text-sm font-semibold text-primary-orange ring-1 ring-primary-orange/15"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="md" asChild>
                  <Link href="/contact" className="gap-2">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary-orange text-white rounded-2xl p-8 sm:p-12 text-center shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white dark:text-white">Need support for your industry?</h2>
            <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto text-white/90 leading-7">
              Share your plant type, manpower requirement, location, and urgency. Our team will structure the right operational support plan.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact" className="gap-2">
                Get Custom Solution <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
