import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { ActivitiesSection } from '@/components/services/ActivitiesSection';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Textile & Industrial Services | Durga Dulari Enterprises',
  description: 'Complete range of 12 specialized textile services: manpower supply, mechanical & electrical maintenance, utility operations, automation, and project revivals.',
};

export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300 text-slate-900 dark:text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/70 dark:from-[#0B2545] dark:via-[#071b33] dark:to-[#040e1b] py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <div className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-primary-orange/10 dark:bg-primary-orange/15 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Industrial Support Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight tracking-tight text-primary-navy dark:text-white">
              Industrial <span className="text-gradient-orange">Services</span> & Solutions
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              12 comprehensive service verticals engineered for spinning mills, composite textiles, and industrial plants across India — from urgent workforce mobilization to round-the-clock machine maintenance and automation.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-slate-100 dark:border-slate-800 pb-8">
            <div>
              <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-primary-orange">Select an Operational Vertical</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
                Built for High-Yield Textile Operations
              </h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-900/80 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <CheckCircle2 className="h-4 w-4 text-primary-orange" aria-hidden="true" />
              <span>{services.length} Specialized Service Lines</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group h-full block">
                <Card hover className="relative h-full p-6 sm:p-7 group flex flex-col justify-between overflow-hidden bg-slate-50/60 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:border-primary-orange/50 dark:hover:border-primary-orange/50 hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-orange to-amber-500 opacity-90 group-hover:h-1.5 transition-all" />

                  <div>
                    <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-primary-orange/10 dark:bg-primary-orange/20 text-primary-orange border border-primary-orange/20 group-hover:bg-primary-orange group-hover:text-white transition-colors duration-200 shadow-xs">
                      <DynamicIcon name={service.icon} size={26} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-primary-navy dark:text-white mb-3 group-hover:text-primary-orange transition-colors leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs sm:text-sm font-bold text-primary-orange group-hover:translate-x-0.5 transition-transform">
                    <span>Explore Service Line & Scope</span>
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 21 Specialized Industrial Activities */}
      <ActivitiesSection />

      {/* Custom Solution CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary-navy via-[#071b33] to-[#040e1b] text-white relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-orange/15 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 bg-primary-orange/20 border border-primary-orange/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary-orange shadow-sm">
            Tailored Engineering Packages
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Need a Customized Industrial Service Package?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            We structure turnkey operational contracts, blended manpower & maintenance agreements, and multi-unit cluster AMC plans tailored directly to your mill size.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 font-bold group btn-premium"
              asChild
            >
              <Link href="/contact">
                <span>Request Custom Package Quote</span>
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
                <span>WhatsApp Our Experts</span>
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
