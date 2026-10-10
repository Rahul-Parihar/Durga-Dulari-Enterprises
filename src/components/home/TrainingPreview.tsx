import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

export function TrainingPreview() {
  return (
    <section className="py-8 sm:py-12 bg-slate-50/70 dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary-orange/[0.04] dark:bg-primary-orange/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Column: Intro & Features */}
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-orange-100/80 text-primary-orange border border-orange-200/80 dark:bg-orange-500/10 dark:text-primary-orange dark:border-orange-500/20 mb-4 sm:mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-orange animate-pulse" />
              SKILL DEVELOPMENT
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-primary-navy dark:text-white leading-tight tracking-tight">
              Durga Dulari{' '}
              <span className="text-primary-orange">School of Skills</span>
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-7 leading-relaxed font-normal">
              Bridging the skill gap in India&apos;s textile sectors. We run standard, machine-heavy vocational programs that deliver ready-to-work operators, fitters, and electrical technicians.
            </p>

            <div className="space-y-4 sm:space-y-5 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-orange-50 dark:bg-slate-850 dark:bg-slate-900 border border-orange-100 dark:border-slate-800 flex items-center justify-center flex-shrink-0 text-primary-orange shadow-xs">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-[15px] text-primary-navy dark:text-white mb-0.5 leading-snug">
                    Certified Training Modules
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    Comprehensive, on-machine curriculum tailored to modern spinning &amp; loom machinery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-orange-50 dark:bg-slate-900 border border-orange-100 dark:border-slate-800 flex items-center justify-center flex-shrink-0 text-primary-orange shadow-xs">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-[15px] text-primary-navy dark:text-white mb-0.5 leading-snug">
                    Expert Veteran Trainers
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    Instruction led by veteran mill operators with over <strong className="font-semibold text-slate-800 dark:text-slate-200">20+ years</strong> of hands-on floor experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-orange-50 dark:bg-slate-900 border border-orange-100 dark:border-slate-800 flex items-center justify-center flex-shrink-0 text-primary-orange shadow-xs">
                  <Briefcase className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-[15px] text-primary-navy dark:text-white mb-0.5 leading-snug">
                    Direct Industry Placement
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    Instant deployment matching into leading B2B mill facilities across our active networks.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="primary" size="md" className="w-full sm:w-auto font-semibold shadow-md shadow-orange-500/20 group" asChild>
              <Link href="/training-recruitment" className="inline-flex items-center justify-center gap-2">
                Explore Training Programs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Right Column: 4 Training Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5">
            <div className="bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-primary-orange/40 dark:hover:border-primary-orange/40 hover:-translate-y-1 transition-all duration-300 group min-w-0">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-slate-800/90 border border-orange-100 dark:border-slate-700/70 flex items-center justify-center mb-3 text-primary-orange group-hover:bg-primary-orange group-hover:text-white group-hover:border-primary-orange transition-colors duration-300">
                <BookOpen className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="font-bold text-sm sm:text-[15px] text-primary-navy dark:text-white mb-1 leading-snug group-hover:text-primary-orange transition-colors duration-300">
                Operator Training
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                Direct ring-frame, autoconer, and cards operational training.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-primary-orange/40 dark:hover:border-primary-orange/40 hover:-translate-y-1 transition-all duration-300 group min-w-0">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-slate-800/90 border border-orange-100 dark:border-slate-700/70 flex items-center justify-center mb-3 text-primary-orange group-hover:bg-primary-orange group-hover:text-white group-hover:border-primary-orange transition-colors duration-300">
                <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="font-bold text-sm sm:text-[15px] text-primary-navy dark:text-white mb-1 leading-snug group-hover:text-primary-orange transition-colors duration-300">
                Technical Certification
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                Industry-standard safety protocols and mechanical certifications.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-primary-orange/40 dark:hover:border-primary-orange/40 hover:-translate-y-1 transition-all duration-300 group min-w-0">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-slate-800/90 border border-orange-100 dark:border-slate-700/70 flex items-center justify-center mb-3 text-primary-orange group-hover:bg-primary-orange group-hover:text-white group-hover:border-primary-orange transition-colors duration-300">
                <Users className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="font-bold text-sm sm:text-[15px] text-primary-navy dark:text-white mb-1 leading-snug group-hover:text-primary-orange transition-colors duration-300">
                Recruitment Pipeline
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                Ready pipeline of vetted workers for seasonal mill requirements.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-primary-orange/40 dark:hover:border-primary-orange/40 hover:-translate-y-1 transition-all duration-300 group min-w-0">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-slate-800/90 border border-orange-100 dark:border-slate-700/70 flex items-center justify-center mb-3 text-primary-orange group-hover:bg-primary-orange group-hover:text-white group-hover:border-primary-orange transition-colors duration-300">
                <Briefcase className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="font-bold text-sm sm:text-[15px] text-primary-navy dark:text-white mb-1 leading-snug group-hover:text-primary-orange transition-colors duration-300">
                Long-Term Placement
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                Complete HR onboarding support with high worker retention rates.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TrainingPreview;
