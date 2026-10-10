import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import {
  industries,
  getIndustryBySlug,
  getAllIndustrySlugs,
} from '@/data/industries';
import { caseStudies } from '@/data/caseStudies';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target,
  ChevronRight,
} from 'lucide-react';

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: 'Industry Not Found | Durga Dulari Enterprises',
    };
  }

  return {
    title: `${industry.name} Manpower & Operations Support | Durga Dulari Enterprises`,
    description: industry.description,
    keywords: [
      industry.name,
      `${industry.name} manpower`,
      `${industry.name} maintenance`,
      'textile plant solutions',
      'Durga Dulari Enterprises',
    ],
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const consultationHref = `/contact?requirement=${encodeURIComponent(industry.slug)}`;

  // Parse equipment focus tags
  const focusTags = industry.focus
    .replace(/and /gi, '')
    .replace(/\./g, '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  // Find relevant case studies for this industry
  const relevantCaseStudies = caseStudies.filter(
    (cs) =>
      cs.industry.toLowerCase().includes(industry.slug.split('-')[0]) ||
      industry.name.toLowerCase().includes(cs.industry.toLowerCase())
  );

  // Other industries to explore
  const otherIndustries = industries.filter((ind) => ind.slug !== industry.slug);

  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* 1. Dark Industrial Hero Section */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#071b33] to-[#040e1b] text-white py-14 sm:py-20 relative overflow-hidden dark-industrial-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary-orange/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
              <li>
                <Link href="/" className="hover:text-primary-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={13} className="text-slate-500" />
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary-orange transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <ChevronRight size={13} className="text-slate-500" />
              </li>
              <li className="text-primary-orange font-bold truncate max-w-[200px]">
                {industry.name}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Specialized Sector Expertise
              </div>

              <div className="mb-6 flex items-start gap-4">
                <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-orange/20 text-primary-orange border border-primary-orange/30 shadow-lg">
                  <DynamicIcon name={industry.icon} size={32} />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight text-white tracking-tight">
                    {industry.name}
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
                <Button variant="secondary" asChild>
                  <Link href={consultationHref} className="gap-2 font-bold shadow-md">
                    <span>Deploy Teams for {industry.name}</span>
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2 font-bold"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Specialist</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Trust & SLA Card */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-md p-6 sm:p-7 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/10 rounded-full blur-2xl pointer-events-none" />

                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    24h Deployment
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white mb-2">
                  Guaranteed Plant Operational Reliability
                </h2>
                <p className="text-xs leading-relaxed text-slate-300 mb-5">
                  Pre-trained, technically audited manpower and quick breakdown response engineered specifically for {industry.name.toLowerCase()}.
                </p>

                <div className="space-y-3 text-xs font-semibold text-slate-200 border-t border-slate-800 pt-4">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>100% Statutory, ESIC & PF Compliant</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>PAN India Footprint (12+ Industrial Hubs)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Immediate Replacement Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Machinery & Lines Covered */}
      <section className="py-14 sm:py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800">
        <Container>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-extrabold text-primary-orange uppercase tracking-wider mb-2 block">
              Equipment & Process Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
              Machinery Lines Supported in {industry.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Our operators, technicians, and supervisors bring verified operational experience across these critical machinery sections:
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {focusTags.map((tag, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-primary-orange transition-all duration-200 group"
              >
                <div className="w-2 h-2 rounded-full bg-primary-orange group-hover:scale-125 transition-transform" />
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Measurable Plant Outcomes */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider mb-2 block">
              Proven Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
              Measurable Outcomes We Deliver
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Tangible efficiency improvements achieved across operations, quality, and manpower stabilization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
                    <Target size={20} />
                  </div>
                  <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">
                    Deliverable 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {outcome}
                  </h3>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={15} />
                  <span>Verified SOP & KPI</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Core Operational Support Areas (How We Help) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-extrabold text-primary-orange uppercase tracking-wider mb-2 block">
              On-Floor Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
              How We Support {industry.name} Operations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Every deployment is backed by standard operating procedures, seasoned floor managers, and skill-tested personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.how_we_help.map((help, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-xs hover:border-primary-orange/40 hover:shadow-md transition-all duration-300 flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-lg bg-primary-orange/10 text-primary-orange flex items-center justify-center shrink-0 mt-0.5 font-black text-xs border border-primary-orange/20">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                    {help}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Relevant Case Studies if any */}
      {relevantCaseStudies.length > 0 && (
        <section className="py-16 sm:py-20 bg-white dark:bg-slate-950">
          <Container>
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-extrabold text-sky-500 uppercase tracking-wider mb-2 block">
                Documented Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                Case Studies in this Sector
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relevantCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      {study.location || 'India'}
                    </span>
                    {study.keyMetric && (
                      <span className="text-xs font-black text-primary-orange bg-primary-orange/10 px-2.5 py-1 rounded-md border border-primary-orange/20">
                        {study.keyMetric}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">
                    {study.clientName || study.clientProfile}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {study.challenge}
                  </p>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-orange hover:text-orange-600 transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6. Other Industries Switcher */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                Explore More Verticals
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                Other Industries We Serve
              </h2>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary-orange hover:text-orange-600 transition-colors"
            >
              <span>View All 6 Industries</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherIndustries.map((ind) => (
              <Link
                key={ind.id}
                href={`/industries/${ind.slug}`}
                className="group bg-white dark:bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-primary-orange/60 hover:shadow-md transition-all text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-primary-orange/15 group-hover:text-primary-orange text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all mb-3">
                  <DynamicIcon name={ind.icon} size={22} />
                </div>
                <span className="text-xs font-black text-slate-900 dark:text-white group-hover:text-primary-orange transition-colors">
                  {ind.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-1 flex items-center gap-1 group-hover:text-primary-orange transition-colors">
                  Explore <ChevronRight size={10} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Bottom CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#041124] to-[#071b33] text-white text-center relative overflow-hidden border-t border-slate-800">
        <Container className="relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 text-white">
            Need Expert Manpower or Maintenance for {industry.name}?
          </h2>
          <p className="text-sm sm:text-base mb-8 max-w-2xl mx-auto text-slate-300">
            Talk to our engineering and deployment leads to assess your plant requirement and secure deployment schedules.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href={consultationHref} className="gap-2 font-bold">
                <PhoneCall size={18} />
                <span>Schedule Plant Audit</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-bold"
              asChild
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Urgent Query</span>
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
