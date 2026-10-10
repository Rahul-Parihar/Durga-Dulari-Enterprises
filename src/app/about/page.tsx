import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import type { Metadata } from 'next';
import { ShieldAlert } from 'lucide-react';
import { ProcessSection } from '@/components/home/ProcessSection';
import { TrainingPreview } from '@/components/home/TrainingPreview';


export const metadata: Metadata = {
  title: 'About Us | Durga Dulari Enterprises',
  description:
    'Learn about Durga Dulari Enterprises - Your trusted partner in textile manpower, maintenance, and plant automation across India.',
};

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300 text-slate-900 dark:text-slate-100">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/70 dark:from-[#0B2545] dark:via-[#071b33] dark:to-[#040e1b] py-10 md:py-14 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <div
          className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-25 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/5 dark:bg-primary-orange/10 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />
        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-3">
          <span className="inline-block bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
            Our Legacy
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary-navy dark:text-white">
            About Durga Dulari Enterprises
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Textile industry expertise meets operational reliability and cost optimization.
          </p>
        </Container>
      </section>



      {/* 3. Our Story Section */}
      <section className="py-8 sm:py-12 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-6 sm:mb-8">
            <span className="inline-block bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Background &amp; Origins
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Our Story
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Durga Dulari Enterprises was founded under the vision of Vijay Kumar Ojha to solve systemic operational problems within the Indian textile ecosystem. Textile mill operators regularly face critical challenges that we directly solve:
            </p>
          </div>

          {/* 3-Column Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400">
                <ShieldAlert size={18} />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Labor Fluctuations
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                Urgent worker shortages causing spinning spindles to sit idle during peak demand cycles.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400">
                <ShieldAlert size={18} />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Technical Breakdown Loss
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                Sudden mechanical or electrical failures leading to hours of lost production.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400">
                <ShieldAlert size={18} />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Regulatory Non-Compliance
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                Heavy legal burdens regarding PF, ESI, contract labor licensing, and GST structures.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 text-center text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
            Today, we operate as an approved B2B partner for over <strong className="text-primary-navy dark:text-white font-bold">150+ textile mills</strong>, deploying verified personnel, implementing preventive maintenance, and steering custom automation projects.
          </div>
        </Container>
      </section>

      {/* 4. Our Mission & Core Values */}
      <section className="py-8 sm:py-12 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <Container>
          {/* Mission Card */}
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 space-y-3">
            <span className="inline-block bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Guiding Principle
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Our Mission
            </h2>
            <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <p className="text-slate-800 dark:text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed font-semibold">
                &ldquo;To empower textile mills with rapid-response manpower, expert maintenance, and advanced automation—enabling operational excellence, cost optimization, and sustainable B2B growth.&rdquo;
              </p>
            </div>
          </div>

          {/* Core Values 4-Column Grid */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-xl sm:text-2xl font-extrabold text-center text-primary-navy dark:text-white tracking-tight">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-primary-orange/40 transition-colors">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 text-sm sm:text-base mb-1.5">
                  <span className="text-primary-orange font-black">✓</span> Reliability
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                  Consistent, dependable service delivery with zero operational lags.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-primary-orange/40 transition-colors">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 text-sm sm:text-base mb-1.5">
                  <span className="text-primary-orange font-black">✓</span> Compliance
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                  100% adherence to labor laws, ESI, PF, and corporate standards.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-primary-orange/40 transition-colors">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 text-sm sm:text-base mb-1.5">
                  <span className="text-primary-orange font-black">✓</span> Safety
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                  Zero-incident floor operations driven by robust training.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-primary-orange/40 transition-colors">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 text-sm sm:text-base mb-1.5">
                  <span className="text-primary-orange font-black">✓</span> Innovation
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                  Spindle automation upgrades for legacy production lines.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Our Leadership */}
      <section className="py-8 sm:py-12 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
            <span className="inline-block bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Management
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Our Leadership
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-slate-50/70 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
                {/* Founder Photo */}
                <img
                  src="/images/founder-thumb.webp"
                  alt="Vijay Kumar Ojha"
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top shadow-md border-2 border-primary-orange/40 shrink-0"
                />
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-primary-navy dark:text-white">
                      Vijay Kumar Ojha
                    </h3>
                    <p className="text-primary-orange font-bold text-xs sm:text-sm uppercase tracking-wider mt-0.5">
                      Founder &amp; Managing Director
                    </p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    Vijay Kumar Ojha brings over <strong className="text-slate-900 dark:text-white">20+ years</strong> of deep textile floor expertise, guiding operations across manpower supply, mechanical-electrical fit-outs, and sick mill revival programs under NCLT. His hands-on experience forms the technical core of the Durga Dulari School of Skills.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    className="font-bold border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-primary-navy dark:text-white hover:bg-primary-orange hover:border-primary-orange hover:text-white transition-all shadow-xs"
                    asChild
                  >
                    <Link href="/founder">Read MD Vision</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* 6. Structured Approach & Operational Benchmarks */}
      <ProcessSection />

      {/* 7. Skill Development - School of Skills */}
      <TrainingPreview />



      {/* Key Numbers & Metrics Strip */}
      <section className="py-8 sm:py-10 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <p className="text-3xl sm:text-4xl font-black text-primary-orange mb-1">20+</p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider">
                Years of Service
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <p className="text-3xl sm:text-4xl font-black text-primary-orange mb-1">250+</p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider">
                Skilled Workforce
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <p className="text-3xl sm:text-4xl font-black text-primary-orange mb-1">150+</p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider">
                Mills Served
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <p className="text-3xl sm:text-4xl font-black text-primary-orange mb-1">98%</p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider">
                Client Retention
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
