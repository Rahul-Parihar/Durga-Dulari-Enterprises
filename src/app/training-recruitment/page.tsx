import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  Factory,
  GraduationCap,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Training & Recruitment | Durga Dulari School of Skills',
  description: 'Certified vocational training programs and direct recruitment pipeline services for textile professionals and textile mills.',
};

const courses = [
  {
    title: 'Spinning Operator Training',
    description:
      'Comprehensive, machine-floor training for modern spinning mills with hands-on practice on ring frames and autoconers.',
    duration: '4 weeks',
  },
  {
    title: 'Maintenance Fitter Training',
    description:
      'Specialized mechanical training for alignment, drafting adjustments, card settings, and speed frame maintenance.',
    duration: '6 weeks',
  },
  {
    title: 'Electrical Fitter Training',
    description:
      'Industrial electrical safety, control panel troubleshooting, motor rewinding, and PLC calibration training.',
    duration: '6 weeks',
  },
  {
    title: 'Utility Operator Training',
    description:
      'Technical training for water filtration units, boiler operations, compressor maintenance, and safety compliance.',
    duration: '8 weeks',
  },
  {
    title: 'Garment Operator Training',
    description:
      'High-speed industrial sewing machine operations, pattern reading, and QC checking for garment facilities.',
    duration: '4 weeks',
  },
];

const trainingContactHref = '/contact?requirement=training-recruitment';

export default function TrainingPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2545] via-[#071b33] to-[#040e1b] py-20 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:28px_28px]" aria-hidden="true" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-orange/10 blur-[120px]" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-100 backdrop-blur-md">
                <Factory className="h-4 w-4 text-primary-orange" aria-hidden="true" />
                Durga Dulari School of Skills
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Vocational Excellence & Staffing
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                Bridging the skill gap in India&apos;s textile sectors through hands-on technical training.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#programs">
                    Explore Programs
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                  <Link href={trainingContactHref}>Request Workers</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '4-8', label: 'weeks per course' },
                { value: '80%', label: 'hands-on practice' },
                { value: '24 hrs', label: 'rapid staffing support' },
                { value: '95%', label: 'retention rate' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.16)] backdrop-blur-sm"
                >
                  <p className="text-2xl font-black tracking-[-0.04em] text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="programs" className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-primary-orange">Our Training Programs</p>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">
              Tailored vocational courses designed by floor engineers to deliver immediate floor efficiency.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="group flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-orange/30 hover:shadow-[0_24px_50px_rgba(249,115,22,0.12)] dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-orange/10 text-primary-orange ring-1 ring-primary-orange/15">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mb-3 text-xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                  {course.title}
                </h3>

                <p className="mb-6 flex-grow text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {course.description}
                </p>

                <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
                  <span className="inline-flex items-center rounded-full bg-primary-orange/10 px-2.5 py-1 text-xs font-bold text-primary-orange">
                    Duration: {course.duration}
                  </span>

                  <Link
                    href={trainingContactHref}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary-navy transition-colors hover:text-primary-orange dark:text-white dark:hover:text-primary-orange"
                  >
                    Enroll Info
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-950/80">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-primary-orange">How it works</p>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">
              A practical training model built for real textile floor performance.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Assess the Skill Gap',
                text: 'We identify the exact machine and operational gaps in your mill or candidate profile.',
              },
              {
                number: '02',
                title: 'Train on Real Equipment',
                text: 'Candidates work on actual floor machines with guided practice and supervision.',
              },
              {
                number: '03',
                title: 'Deploy to Production',
                text: 'We place certified workers or trained operators directly into live production environments.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary-orange/10 text-sm font-black text-primary-orange">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-primary-orange">Why Train With Us</p>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Floor-ready training with real industry impact</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: 'Experienced Instructors',
                text: 'Classes led by retired mill engineers with 20+ years of floor practice.',
              },
              {
                icon: BookOpen,
                title: 'Actual Machine Practice',
                text: 'No pure theory. Candidates spend 80% of class time practicing on actual floor equipment.',
              },
              {
                icon: Users,
                title: 'Assured Placements',
                text: 'Direct entry route into leading spinning and knitting facilities across India.',
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[26px] border border-slate-800 bg-slate-900/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-orange/10 text-primary-orange">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-primary-orange">B2B Recruitment Solutions</p>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">
              Connecting textile mill HR directors and management with certified, floor-ready workers.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900/80">
              <h3 className="mb-5 text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                For Mill Recruitment
              </h3>

              <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
                {[
                  'Pre-vetted, certified floor candidates',
                  'Rapid replacement support within 24 hours',
                  '95% retention rate guarantee',
                  'Full statutory compliance (PF, ESI, Labor Laws)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <Button variant="secondary" size="lg" className="w-full" asChild>
                  <Link href={trainingContactHref}>Request Workers</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900/80">
              <h3 className="mb-5 text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
                For Aspiring Candidates
              </h3>

              <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
                {[
                  'Government-aligned curriculum certificates',
                  'Free accommodation assistance during courses',
                  'Direct job interview placement upon completion',
                  'Clean environment and professional floor settings',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href={trainingContactHref}>Apply for Training</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
