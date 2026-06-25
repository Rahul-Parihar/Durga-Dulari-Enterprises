import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, Users, Briefcase } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

export function TrainingPreview() {
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-br from-[#0B2545] to-[#081b33] text-white relative overflow-hidden dark-industrial-grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[100px] pointer-events-none animate-glow-drift-1" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            <div className="inline-block max-w-full bg-primary-orange text-white px-3.5 sm:px-4 py-1.5 rounded-full font-bold mb-6 text-[10px] sm:text-xs uppercase leading-snug shadow-md shadow-orange-500/10 break-words">
              SKILL DEVELOPMENT
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 sm:mb-6 text-white leading-tight break-words text-balance">
              Durga Dulari <br className="hidden sm:block" />
              <span className="text-primary-orange">School of Skills</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 leading-relaxed font-medium break-words">
              Bridging the skill gap in India's textile sectors. We run standard, machine-heavy vocational programs that deliver ready-to-work operators, fitters, and electrical technicians.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 border border-slate-700/60 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 leading-tight break-words">Certified Training Modules</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed break-words">Comprehensive, on-machine curriculum tailored to modern spinning & loom machinery.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 border border-slate-700/60 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 leading-tight break-words">Expert Veteran Trainers</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed break-words">Instruction led by veteran mill operators with over <strong>20+ years</strong> of hands-on floor experience.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 border border-slate-700/60 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-primary-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 leading-tight break-words">Direct Industry Placement</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed break-words">Instant deployment matching into leading B2B mill facilities across our active networks.</p>
                </div>
              </div>
            </div>

            <Button variant="secondary" size="lg" className="w-full sm:w-auto shadow-lg btn-premium" asChild>
              <Link href="/training-recruitment" className="font-bold">
                Explore Training Programs
              </Link>
            </Button>
          </div>

          {/* Cards Grid with Staggered floating animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-900/60 border border-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 transition-all duration-500 hover:bg-slate-900/80 hover:border-primary-orange/40 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(244,121,31,0.15)] group animate-float min-w-0">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 border border-white/10 group-hover:bg-primary-orange/20 group-hover:border-primary-orange/30 group-hover:scale-110 transition-all duration-300">
                <BookOpen className="w-6 h-6 text-primary-orange group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-extrabold text-white mb-2 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300 text-lg">Operator Training</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium break-words group-hover:text-slate-300 transition-colors duration-300">Direct ring-frame, autoconer, and cards operational training.</p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 transition-all duration-500 hover:bg-slate-900/80 hover:border-primary-orange/40 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(244,121,31,0.15)] group animate-float min-w-0 [animation-delay:1s]">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 border border-white/10 group-hover:bg-primary-orange/20 group-hover:border-primary-orange/30 group-hover:scale-110 transition-all duration-300">
                <Award className="w-6 h-6 text-primary-orange group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-extrabold text-white mb-2 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300 text-lg">Technical Certification</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium break-words group-hover:text-slate-300 transition-colors duration-300">Industry-standard safety protocols and mechanical certifications.</p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 transition-all duration-500 hover:bg-slate-900/80 hover:border-primary-orange/40 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(244,121,31,0.15)] group animate-float min-w-0 [animation-delay:1.5s]">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 border border-white/10 group-hover:bg-primary-orange/20 group-hover:border-primary-orange/30 group-hover:scale-110 transition-all duration-300">
                <Users className="w-6 h-6 text-primary-orange group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-extrabold text-white mb-2 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300 text-lg">Recruitment Pipeline</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium break-words group-hover:text-slate-300 transition-colors duration-300">Ready pipeline of vetted workers for seasonal mill requirements.</p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 transition-all duration-500 hover:bg-slate-900/80 hover:border-primary-orange/40 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(244,121,31,0.15)] group animate-float min-w-0 [animation-delay:2.5s]">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 border border-white/10 group-hover:bg-primary-orange/20 group-hover:border-primary-orange/30 group-hover:scale-110 transition-all duration-300">
                <Briefcase className="w-6 h-6 text-primary-orange group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="font-extrabold text-white mb-2 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300 text-lg">Long-Term Placement</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium break-words group-hover:text-slate-300 transition-colors duration-300">Complete HR onboarding support with high worker retention rates.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default TrainingPreview;
