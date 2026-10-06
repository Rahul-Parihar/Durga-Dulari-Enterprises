import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, FileText, SearchCheck } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { blogResources } from '@/data/resources';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources & Blog | Durga Dulari Enterprises',
  description: 'Industry insights, guides, and best practices for textile mills.',
};

export default function ResourcesPage() {
  return (
    <div className="case-studies-bg text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <section className="relative overflow-hidden border-b border-slate-200/80 py-16 sm:py-20 dark:border-slate-800">
        <div className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-30 pointer-events-none" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-orange/10 px-4 py-2 text-sm font-semibold text-primary-orange ring-1 ring-primary-orange/20">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Textile knowledge hub
              </div>

              <h1 className="mb-5 max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                Resource Centre
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                Practical guides, industry insights, and operational best practices for textile mills that want better uptime, manpower readiness, and cost control.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#resources">Explore insights</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/downloads">View Downloads & Tools</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '12+', label: 'curated resources' },
                { value: '6', label: 'capability areas' },
                { value: '8–14 min', label: 'average read' },
                { value: '100%', label: 'field-focused' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <p className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="resources" className="py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-primary-orange">Guides & Reports</p>
              <h2 className="max-w-2xl text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">
                Learn from field-tested textile expertise
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200">
              <SearchCheck className="h-4 w-4 text-primary-orange" aria-hidden="true" />
              {blogResources.length} curated resources
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogResources.slice(0, 12).map((resource) => (
              <Link key={resource.id} href={`/resources/${resource.slug}`} className="group h-full">
                <Card className="relative h-full overflow-hidden border-slate-200/80 bg-white/90 p-0 shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/80">
                  <div className="h-1.5 bg-gradient-to-r from-primary-orange via-orange-400 to-amber-300" aria-hidden="true" />

                  <div className="p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange ring-1 ring-primary-orange/15">
                        <FileText className="h-5 w-5" aria-hidden="true" />
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge label={resource.category} variant="orange" size="sm" />
                      </div>
                    </div>

                    <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {resource.readTime} min read
                    </div>

                    <h3 className="mb-3 text-xl font-bold leading-snug tracking-[-0.03em] text-slate-950 transition-colors duration-200 group-hover:text-primary-orange dark:text-white">
                      {resource.title}
                    </h3>

                    <p className="mb-6 flex-grow text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {resource.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-primary-orange transition-all duration-200 group-hover:border-primary-orange/20 group-hover:bg-primary-orange group-hover:text-white dark:border-slate-800 dark:bg-slate-950/60 dark:group-hover:bg-primary-orange">
                      <span className="inline-flex items-center gap-2">
                        <BookOpen className="h-4 w-4" aria-hidden="true" />
                        Read Article
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-14">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.2)] sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">Need practical tools?</p>
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                    Download mill-ready checklists, reports, and implementation guides.
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/downloads">View Downloads & Tools</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
