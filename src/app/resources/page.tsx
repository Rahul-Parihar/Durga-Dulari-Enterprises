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
    <main className="bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-20 border-b border-slate-100 dark:border-slate-800">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-orange/10 px-4 py-2 text-sm font-semibold text-primary-orange ring-1 ring-primary-orange/20">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Textile knowledge hub
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight text-slate-950 dark:text-white">Resource Centre</h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Practical guides, industry insights, and operational best practices for textile mills that want better uptime, manpower readiness, and cost control.
            </p>
          </div>
        </Container>
      </section>

      {/* Resources */}
      <section className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-950">
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold text-primary-orange">Guides & Reports</p>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">Learn from field-tested textile expertise</h2>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white dark:bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 dark:border-slate-800">
              <SearchCheck className="h-4 w-4 text-primary-orange" aria-hidden="true" />
              {blogResources.length} curated resources
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {blogResources.slice(0, 12).map((resource) => (
              <Link key={resource.id} href={`/resources/${resource.slug}`} className="group h-full">
                <Card className="relative h-full p-6 flex flex-col border-slate-200/80 dark:border-slate-800">
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary-orange opacity-80" />
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-orange/10 text-primary-orange">
                      <FileText className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge label={resource.category} variant="orange" size="sm" />
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {resource.readTime} min read
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-slate-950 dark:text-white mb-3 group-hover:text-primary-orange transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-6 mb-6 flex-grow">{resource.description}</p>

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

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/downloads">View Downloads & Tools</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
