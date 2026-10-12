import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { getAllServiceSlugs, getServiceBySlug } from '@/data/services';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  AlertTriangle,
  HelpCircle,
  Clock,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Durga Dulari Enterprises',
    };
  }

  return {
    title: `${service.title} | Durga Dulari Enterprises`,
    description: service.description || service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const consultationHref = `/contact?requirement=${encodeURIComponent(service?.slug || '')}`;

  if (!service) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center bg-white dark:bg-slate-950 py-32 text-center transition-colors">
        <Container>
          <div className="max-w-md mx-auto space-y-5">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-orange/10 flex items-center justify-center text-primary-orange">
              <ShieldAlert size={32} />
            </div>
            <h1 className="text-3xl font-extrabold text-primary-navy dark:text-white">Service Not Found</h1>
            <p className="text-slate-600 dark:text-slate-400">
              The requested service profile does not exist or may have been relocated.
            </p>
            <Button variant="secondary" asChild>
              <Link href="/services">Browse All Services</Link>
            </Button>
          </div>
        </Container>
      </main>
    );
  }

  // Get related service objects
  const relatedServiceObjects = (service.relatedServices || [])
    .map((relSlug) => getServiceBySlug(relSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/70 dark:from-[#0B2545] dark:via-[#071b33] dark:to-[#040e1b] pt-10 sm:pt-14 pb-10 sm:pb-12 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        {/* Background Grids & Ambient Glows */}
        <div className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-primary-orange/10 dark:bg-primary-orange/15 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        <Container className="relative z-10">


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Specialized Service Line</span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-orange/15 dark:bg-primary-orange/20 text-primary-orange border border-primary-orange/30 shadow-md">
                  <DynamicIcon name={service.icon} size={30} />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-navy dark:text-white leading-[1.15] tracking-tight text-balance">
                    {service.title}
                  </h1>
                </div>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-medium text-balance">
                {service.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Button
                  variant="secondary"
                  size="lg"
                  className="shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 font-bold group btn-premium"
                  asChild
                >
                  <Link href={consultationHref} className="gap-2">
                    <span>Request Consultation</span>
                    <ArrowRight size={18} className="shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-primary-navy dark:text-white hover:bg-emerald-600 hover:border-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:border-emerald-600 dark:hover:text-white font-bold btn-premium shadow-sm hover:shadow-md transition-all duration-300"
                  asChild
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} className="shrink-0 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
                    <span className="group-hover:text-white transition-colors">WhatsApp Support</span>
                  </a>
                </Button>
              </div>

              {/* Key Quick Highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-primary-orange shrink-0" />
                  Immediate Capacity Dispatch
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-primary-orange shrink-0" />
                  Statutory Compliance Assured
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-primary-orange shrink-0" />
                  150+ Spinning Mills Backed
                </span>
              </div>
            </div>

            {/* Right Card: Operational Support Box */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 shadow-xl dark:shadow-2xl transition-all duration-300 overflow-hidden group hover:border-primary-orange/40 dark:hover:border-primary-orange/40">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 dark:bg-primary-orange/10 rounded-full blur-2xl pointer-events-none" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-orange/15 dark:bg-primary-orange/20 text-primary-orange border border-primary-orange/30 shadow-sm">
                  <ShieldCheck size={26} />
                </div>

                <h2 className="text-xl font-bold text-primary-navy dark:text-white mb-2.5 leading-snug">
                  Operational Support, Without Delay
                </h2>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-6 font-medium">
                  Share your mill requirement and our industrial engineering team will immediately assign the right personnel, machine specialists, and deployment timeline.
                </p>

                <div className="space-y-3.5 text-sm font-bold text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-primary-orange shrink-0" />
                    <span>PAN India service coverage</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-primary-orange shrink-0" />
                    <span>24×7 urgent breakdown response route</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-primary-orange shrink-0" />
                    <span>100% PF / ESI / Safety compliant</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active Deployment Desk
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                    24h Dispatch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* Key Benefits */}
      <section className="pt-8 sm:pt-10 pb-5 sm:pb-6 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container>
          <div className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary-orange bg-primary-orange/10 px-3.5 py-1 rounded-full">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Key Benefits of {service.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
              Measurable operational advantages engineered to elevate output, eliminate idle machines, and maximize mill profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary-orange/40 dark:hover:border-primary-orange/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex gap-4 items-start">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-colors duration-200 shadow-xs">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary-navy dark:text-white leading-snug">
                      {benefit}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      Audited benchmark for high-performance spinning, weaving, and processing plants.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Execution Process */}
      <section className="pt-6 sm:pt-8 pb-10 sm:pb-12 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <Container>
          <div className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary-orange bg-primary-orange/10 px-3.5 py-1 rounded-full">
              Systematic Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Our 4-Stage Execution Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
              Structured workflow ensuring zero disruption to existing shifts and immediate turnaround.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
            {service.process.map((step) => (
              <div key={step.step} className="relative group">
                <div className="h-full bg-white dark:bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-primary-orange/50 dark:hover:border-primary-orange/50 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-navy text-white dark:bg-primary-orange dark:text-white font-extrabold text-sm shadow-md">
                        0{step.step}
                      </div>
                      <Workflow className="h-5 w-5 text-primary-orange/70 group-hover:text-primary-orange transition-colors" />
                    </div>
                    <h3 className="font-extrabold mb-2.5 text-primary-navy dark:text-white text-lg group-hover:text-primary-orange transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-slate-400 dark:text-slate-500">
                    <Clock size={13} className="mr-1 text-primary-orange" /> Stage {step.step} of 4
                  </div>
                </div>

                {step.step < service.process.length && (
                  <div className="hidden xl:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-primary-orange to-primary-orange/20 z-10" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pain Points / Common Challenges */}
      <section className="py-10 sm:py-12 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container>
          <div className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary-orange bg-primary-orange/10 px-3.5 py-1 rounded-full">
              Problem to Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Critical Mill Challenges We Resolve
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
              Turn recurring operational friction points into sustained efficiency and uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {service.painPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 dark:bg-slate-900/60 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 space-y-4"
              >
                {/* Challenge Block */}
                <div className="rounded-xl border border-rose-200/80 dark:border-rose-900/40 bg-rose-50/80 dark:bg-rose-950/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/50 px-2 py-0.5 rounded">
                      <AlertTriangle size={12} />
                      Mill Challenge
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-rose-100 leading-snug">
                    {item.challenge}
                  </h3>
                </div>

                {/* Solution Block */}
                <div className="rounded-xl border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/80 dark:bg-emerald-950/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded">
                      <CheckCircle2 size={12} />
                      Our Engineered Solution
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-emerald-100/90 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-10 sm:py-14 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
          <Container>
            <div className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto space-y-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary-orange bg-primary-orange/10 px-3.5 py-1 rounded-full">
                Frequently Answered
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
                Direct clarity on deployment terms, commercial models, and service level agreements.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900/90 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-orange/15 text-primary-orange font-bold mt-0.5">
                      <HelpCircle size={17} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-primary-navy dark:text-white mb-2 leading-snug">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related Services */}
      {relatedServiceObjects.length > 0 && (
        <section className="py-10 sm:py-14 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-orange">
                  Complementary Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy dark:text-white tracking-tight">
                  Related Services You May Require
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-orange hover:text-orange-600 transition-colors"
              >
                <span>View All 12 Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServiceObjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group block p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-primary-orange/50 dark:hover:border-primary-orange/50 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-orange/15 text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-colors duration-200">
                      <DynamicIcon name={rel.icon} size={22} />
                    </div>
                    <h3 className="font-bold text-lg text-primary-navy dark:text-white group-hover:text-primary-orange transition-colors leading-tight">
                      {rel.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 font-medium leading-relaxed">
                    {rel.shortDescription}
                  </p>
                  <div className="flex items-center text-xs font-bold text-primary-orange group-hover:translate-x-1 transition-transform">
                    <span>Explore Service Line</span>
                    <ChevronRight size={14} className="ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Bottom Final CTA */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-primary-navy via-[#071b33] to-[#040e1b] text-white">
        <div className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-orange/15 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 bg-primary-orange/20 border border-primary-orange/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary-orange shadow-sm">
            Immediate Capacity Available
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Ready to Deploy <span className="text-primary-orange">{service.title}</span> at Your Mill?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Get an instant quotation, operator rosters, or machine audit schedule tailored to your spindle and loom capacities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 font-bold group btn-premium"
              asChild
            >
              <Link href={consultationHref}>
                <span>{service.cta.primary || 'Request Consultation'}</span>
                <ArrowRight size={18} className="shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/30 hover:border-emerald-500 bg-white/10 hover:bg-emerald-600 text-white font-bold btn-premium transition-all duration-300"
              asChild
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} className="shrink-0 text-emerald-400 group-hover:text-white transition-colors" />
                <span>WhatsApp Technical Team</span>
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-slate-800 text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Available 24×7 • Pan India Service • Strict Statutory Compliance
          </div>
        </Container>
      </section>
    </main>
  );
}
