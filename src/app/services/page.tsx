import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Durga Dulari Enterprises',
  description: 'Complete range of textile manpower, maintenance, automation, and project solutions.',
};

export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-20 border-b border-slate-100 dark:border-slate-800">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-orange/10 px-4 py-2 text-sm font-semibold text-primary-orange ring-1 ring-primary-orange/20">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Industrial support portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight text-slate-950 dark:text-white">Our Services</h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              12 comprehensive solutions for textile mills and industrial facilities, from manpower deployment to maintenance, automation, consultancy, and turnkey projects.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold text-primary-orange">Choose a service</p>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">Built for textile operations</h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 ring-1 ring-slate-100 dark:ring-slate-800">
              <CheckCircle2 className="h-4 w-4 text-primary-orange" aria-hidden="true" />
              {services.length} service lines
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group h-full">
                <Card hover className="relative h-full p-6 sm:p-7 group flex flex-col overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary-orange opacity-80" />
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange ring-1 ring-primary-orange/15">
                    <DynamicIcon name={service.icon} size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-3 group-hover:text-primary-orange transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow text-sm leading-6">{service.shortDescription}</p>
                  <div className="mt-auto flex items-center justify-between rounded-lg bg-slate-50 dark:bg-slate-950/60 px-4 py-3 text-primary-orange font-semibold text-sm transition-colors group-hover:bg-primary-orange group-hover:text-white">
                    <span>View Details</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900/60 text-center border-y border-slate-100 dark:border-slate-800">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-950 dark:text-white">Need a custom solution?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            We can create customized service packages tailored to your specific requirements.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-primary-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            Get in Touch
          </Link>
        </Container>
      </section>
    </main>
  );
}
