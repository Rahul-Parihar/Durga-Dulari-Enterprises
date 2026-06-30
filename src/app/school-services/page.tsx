import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BookOpenCheck, GraduationCap, Handshake, ShieldCheck, UsersRound } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';

export const metadata: Metadata = {
  title: 'School Services | Durga Dulari Enterprises',
  description: 'School support services including staffing, vocational training, placement support, and operational assistance.',
};

const schoolServices = [
  {
    title: 'School Staffing Support',
    description: 'Reliable support staff and operational manpower for day-to-day school requirements.',
    icon: UsersRound,
  },
  {
    title: 'Vocational Training',
    description: 'Practical skill development programs for students, candidates, and entry-level workers.',
    icon: GraduationCap,
  },
  {
    title: 'Placement Assistance',
    description: 'Candidate screening and placement support for trained youth and institutional partners.',
    icon: Handshake,
  },
  {
    title: 'Compliance Guidance',
    description: 'Structured documentation and process support for smooth institutional operations.',
    icon: ShieldCheck,
  },
];

export default function SchoolServicesPage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="border-b border-slate-100 bg-white py-16 dark:border-slate-800 dark:bg-slate-950 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-orange/10 px-4 py-2 text-sm font-semibold text-primary-orange ring-1 ring-primary-orange/20">
              <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
              Institutional support
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl">
              School Services
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
              Support solutions for schools and skill development institutions, including staffing, vocational training, placement assistance, and operations coordination.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-sm font-semibold text-primary-orange">What we provide</p>
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white">Services for school operations and training</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {schoolServices.map((service) => {
              const Icon = service.icon;

              return (
                <Card key={service.title} hover className="h-full p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange ring-1 ring-primary-orange/15">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold leading-tight text-slate-950 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-20 text-center dark:border-slate-800 dark:bg-slate-900/60 sm:py-24">
        <Container>
          <h2 className="mb-4 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            Need school service support?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Share your requirement and our team will connect with you for a suitable support plan.
          </p>
          <Button variant="secondary" asChild>
            <Link href="/contact?requirement=school-services" className="gap-2">
              Contact Us <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}
