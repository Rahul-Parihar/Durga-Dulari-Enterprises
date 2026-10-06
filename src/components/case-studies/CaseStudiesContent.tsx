import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { caseStudies } from '@/data/caseStudies';
import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Wrench,
  CheckCircle2,
  ArrowRight,
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

export function CaseStudiesContent() {
  return (
    <div className="min-h-screen case-studies-bg text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <section className="relative overflow-hidden border-b border-slate-200/80 py-16 dark:border-slate-800/80 sm:py-20">
        {/* Decorative Grid & Glow Backgrounds */}
        <div className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary-orange/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-[0_4px_15px_rgba(15,23,42,0.05)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
                <Sparkles className="h-4 w-4 text-primary-orange" aria-hidden="true" />
                Verified Mill Performance Records
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                Proven Turnarounds & <span className="text-primary-orange">Operational Case Studies</span>
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                Real results from textile mills across India. Documented downtime reductions, cost savings, workforce mobilizations, and NCLT turnaround success stories.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#case-studies"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-orange px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Explore studies
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  Request similar solution
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '6', label: 'case studies' },
                { value: '₹22L', label: 'annual savings' },
                { value: '85%', label: 'capacity restored' },
                { value: '3 days', label: 'rapid manpower mobilization' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                >
                  <p className="text-2xl font-black tracking-[-0.05em] text-slate-950 dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="case-studies" className="py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-primary-orange">Success stories</p>
              <h2 className="max-w-2xl text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">
                Real operational outcomes from textile mills
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-[0_8px_25px_rgba(0,0,0,0.3)]">
              <TrendingUp className="h-4 w-4 text-primary-orange" aria-hidden="true" />
              {caseStudies.length} verified case studies
            </div>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                id={study.slug}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/95 p-0 shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/85 dark:hover:border-slate-700 dark:hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
              >
                <div className="h-1.5 bg-gradient-to-r from-primary-orange via-orange-400 to-amber-300" aria-hidden="true" />

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4 pb-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-300">
                          Case Study #{study.id.padStart(2, '0')}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-300">
                          <Factory className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                          {study.industry} Sector
                        </span>
                        {study.location && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-300">
                            <MapPin className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                            {study.location}
                          </span>
                        )}
                        {study.establishedYear && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-300">
                            <Calendar className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
                            Est. {study.establishedYear}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-[28px]">
                        {study.clientName || study.clientProfile}
                      </h3>
                    </div>

                    {study.keyMetric && (
                      <div className="inline-flex items-center gap-2 rounded-2xl border border-primary-orange/25 bg-primary-orange/10 px-4 py-3 text-sm font-extrabold text-primary-orange shadow-[0_10px_25px_rgba(249,115,22,0.12)] dark:border-primary-orange/30 dark:bg-primary-orange/15 dark:shadow-[0_10px_25px_rgba(249,115,22,0.2)]">
                        <TrendingUp className="h-4 w-4" aria-hidden="true" />
                        {study.keyMetric}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 border-y border-slate-200 py-4 dark:border-slate-800">
                    <span className="mr-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                      Services Deployed:
                    </span>
                    {study.services.map((svc, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-200"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-orange" aria-hidden="true" />
                        {formatServiceName(svc)}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800/80 dark:bg-slate-950/60">
                      <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-300">
                        <AlertTriangle className="h-4 w-4 text-amber-500" aria-hidden="true" />
                        Operational Challenge
                      </div>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{study.challenge}</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800/80 dark:bg-slate-950/60">
                      <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-300">
                        <Wrench className="h-4 w-4 text-primary-orange" aria-hidden="true" />
                        Engineered Solution
                      </div>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{study.solution}</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-100/80 p-5 dark:border-slate-800/80 dark:bg-slate-800/50">
                      <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-800 dark:text-slate-100">
                        <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        Verified Outcomes
                      </div>
                      <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{study.results}</p>

                      {study.metrics && study.metrics.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 pt-3">
                          {study.metrics.map((metric, metricIndex) => (
                            <span
                              key={metricIndex}
                              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary-orange" aria-hidden="true" />
                              {metric}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <ShieldCheck className="h-4 w-4 text-primary-orange" aria-hidden="true" />
                      Reference audit available upon verification request
                    </div>

                    <Link
                      href={`/contact?requirement=${study.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-navy px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-slate-800 dark:bg-primary-orange dark:hover:bg-orange-600 dark:text-white dark:shadow-[0_4px_20px_rgba(244,121,31,0.25)]"
                    >
                      Inquire for Similar Solution
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

