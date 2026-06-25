import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { ArrowRight, PhoneCall } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-[#0B2545] to-[#040e1b] py-16 sm:py-20 text-white relative overflow-hidden dark-industrial-grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-orange/5 rounded-full blur-[140px] pointer-events-none animate-glow-drift-2" />

      <Container>
        <div className="text-center space-y-7 sm:space-y-8 max-w-4xl mx-auto min-w-0">
          <div className="space-y-4">
            <span className="inline-flex max-w-full items-center gap-1.5 bg-primary-orange/15 border border-primary-orange/30 px-3 py-1.5 sm:px-3.5 rounded-full text-[10px] sm:text-xs font-bold uppercase text-primary-orange leading-snug">
              Immediate Capacity Available
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight break-words text-balance">
              Need Skilled Textile Manpower or <br className="hidden sm:block" />
              <span className="text-gradient-orange">Emergency Maintenance</span> This Week?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed break-words">
              Don't let production bottlenecks, machine breakdowns, or labor shortages disrupt your spinning or weaving schedules. Deploy pre-vetted teams instantly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto flex items-center gap-2 shadow-lg font-bold group btn-premium"
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
              className="w-full sm:w-auto border-slate-500 text-white hover:bg-white/10 hover:border-white flex items-center gap-2 font-bold btn-premium"
              asChild
            >
              <Link href="/contact">
                <PhoneCall size={18} className="shrink-0" />
                <span>Request Callback</span>
              </Link>
            </Button>
          </div>

          <div className="pt-8 border-t border-slate-800">
            <p className="text-slate-400 text-[11px] sm:text-xs md:text-sm font-semibold uppercase leading-relaxed break-words">
              Available 24×7 • Pan India Service • Local Cluster-based Support
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;
