import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { ArrowRight, PhoneCall } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#0B2545] dark:to-[#040e1b] pt-10 sm:pt-12 pb-5 sm:pb-6 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-orange/5 dark:bg-primary-orange/10 rounded-full blur-[140px] pointer-events-none animate-glow-drift-2" />

      <Container className="relative z-10">
        <div className="text-center space-y-7 sm:space-y-8 max-w-4xl mx-auto min-w-0">
          <div className="space-y-4">
            <span className="inline-flex max-w-full items-center gap-1.5 bg-primary-orange/10 dark:bg-primary-orange/15 border border-primary-orange/30 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase text-primary-orange leading-snug shadow-sm">
              Immediate Capacity Available
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-navy dark:text-white leading-tight break-words text-balance transition-colors duration-300">
              Need Skilled Textile Manpower or <br className="hidden sm:block" />
              <span className="text-primary-orange">Emergency Maintenance</span> This Week?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed break-words transition-colors duration-300">
              Don't let production bottlenecks, machine breakdowns, or labor shortages disrupt your spinning or weaving schedules. Deploy pre-vetted teams instantly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 font-bold group btn-premium"
              asChild
            >
              <Link href="/contact">
                <span>Talk to Our Expert Now</span>
                <ArrowRight size={20} className="shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group w-full sm:w-auto flex items-center gap-2 border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-primary-navy dark:text-white hover:bg-primary-orange hover:border-primary-orange hover:text-white dark:hover:bg-primary-orange dark:hover:border-primary-orange dark:hover:text-white font-bold btn-premium shadow-sm hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/#request-callback">
                <PhoneCall size={18} className="shrink-0 text-primary-orange group-hover:text-white transition-colors" />
                <span className="transition-colors group-hover:text-white">Request Callback</span>
              </Link>
            </Button>
          </div>

          <div className="pt-5 sm:pt-6 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <p className="text-slate-500 dark:text-slate-400 text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider leading-relaxed break-words transition-colors duration-300">
              Available 24×7 • Pan India Service • Local Cluster-based Support
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;
