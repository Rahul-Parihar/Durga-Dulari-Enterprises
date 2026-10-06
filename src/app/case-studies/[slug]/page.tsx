import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from '@/data/caseStudies';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Wrench,
  CheckCircle2,
  MapPin,
  Calendar,
  Factory,
  ShieldCheck,
} from 'lucide-react';

const formatServiceName = (slug: string) => {
  const serviceMap: Record<string, string> = {
    'textile-manpower-supply': 'Textile Manpower Supply',
    'mechanical-maintenance': 'Mechanical Maintenance',
    'amc-services': 'AMC Services',
    'textile-consultancy': 'Textile Consultancy',
    'training-recruitment': 'Training & Recruitment',
    'projects-division': 'Projects Division',
    'utility-operations': 'Utility Operations',
    'plant-shifting': 'Plant Relocation & Shifting',
    'sick-mill-revival': 'Sick Mill Revival (NCLT)',
  };

  return serviceMap[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | Durga Dulari Enterprises',
    };
  }

  const title = `${study.clientName || study.clientProfile} Case Study | Durga Dulari Enterprises`;
  const description = `${study.challenge.substring(0, 150)}... Documented results: ${study.results.substring(0, 100)}`;

  return {
    title,
    description,
    keywords: [
      study.industry,
      'textile case study',
      'mill turnaround',
      'Durga Dulari Enterprises',
    ],
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen case-studies-bg text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/80 py-12 dark:border-slate-800/80 sm:py-16">
        <div className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-35 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary-orange/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        <Container className="relative">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Link href="/" className="transition-colors hover:text-primary-orange">
              Home
            </Link>
            <span>/</span>
            <Link href="/case-studies" className="transition-colors hover:text-primary-orange">
              Case Studies
            </Link>
            <span>/</span>
            <span className="truncate font-semibold text-slate-800 dark:text-slate-200">
              {study.clientName || `Case Study #${study.id}`}
            </span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-300">
                Case Study #{study.id.padStart(2, '0')}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-300">
                <Factory className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                {study.industry} Sector
              </span>
              {study.location && (
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                  {study.location}
                </span>
              )}
              {study.establishedYear && (
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-300">
                  <Calendar className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                  Est. {study.establishedYear}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {study.clientName || study.clientProfile}
            </h1>

            {study.keyMetric && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-primary-orange/25 bg-primary-orange/10 px-5 py-3 text-base font-extrabold text-primary-orange shadow-[0_10px_25px_rgba(249,115,22,0.12)] dark:border-primary-orange/30 dark:bg-primary-orange/15 dark:shadow-[0_10px_25px_rgba(249,115,22,0.2)]">
                <TrendingUp className="h-5 w-5" aria-hidden="true" />
                Key Outcome: {study.keyMetric}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Main Content Details */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Services Deployed */}
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                Services Deployed in this Project
              </h2>
              <div className="flex flex-wrap gap-2">
                {study.services.map((svc, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-200"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary-orange" aria-hidden="true" />
                    {formatServiceName(svc)}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/80">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-300">
                  <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" />
                  Operational Challenge
                </div>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {study.challenge}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/80">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-300">
                  <Wrench className="h-5 w-5 text-primary-orange" aria-hidden="true" />
                  Engineered Solution
                </div>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Verified Outcomes */}
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/80">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-800 dark:text-slate-100">
                <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                Verified Turnaround Results
              </div>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
                {study.results}
              </p>

              {study.metrics && study.metrics.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2.5 pt-2">
                  {study.metrics.map((metric, metricIndex) => (
                    <span
                      key={metricIndex}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary-orange" aria-hidden="true" />
                      {metric}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/90 p-6 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900/80">
              <div className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <ShieldCheck className="h-5 w-5 text-primary-orange" aria-hidden="true" />
                Verified performance record from on-site industrial logs.
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button variant="outline" size="md" asChild>
                  <Link href="/case-studies" className="inline-flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    All Studies
                  </Link>
                </Button>
                <Button variant="secondary" size="md" asChild>
                  <Link href={`/contact?requirement=${study.slug}`} className="inline-flex items-center gap-2">
                    Request Solution
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
