'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ArrowRight, Cpu } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-primary-navy to-slate-950 text-white py-20 sm:py-28 md:py-36 relative overflow-hidden">
      {/* Industrial Grid Background Layer (Separated to prevent background-image conflicts) */}
      <div className="absolute inset-0 dark-industrial-grid opacity-30 pointer-events-none" />

      {/* Decorative Blur Backgrounds with organic drift animations */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary-orange/10 rounded-full blur-[120px] pointer-events-none animate-glow-drift-1" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-glow-drift-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-primary-orange/10 to-blue-500/10 rounded-full blur-[130px] pointer-events-none animate-glow-drift-1" />

      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 sm:space-y-10 animate-fade-in-up min-w-0 relative z-10">

          {/* Subtitle Badge */}
          <span className="inline-flex max-w-full items-center gap-1.5 bg-primary-orange/15 border border-primary-orange/30 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase text-primary-orange leading-snug">
            <Cpu size={14} className="animate-spin-slow" />
            <span className="break-words">Next-Gen Textile Solutions</span>
          </span>

          {/* Heading with explicit text-white color override */}
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight break-words text-balance">
            Skilled Manpower & <br className="hidden sm:block" />
            <span className="text-gradient-orange">Industrial Automation</span> <br className="hidden sm:block" />
            Delivered Nationwide.
          </h1>

          {/* Description with explicit text-slate-300 color override */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-medium leading-relaxed break-words">
            Emergency technician deployment, preventive mechanical-electrical maintenance, spindle speed automation, and turnkey setup for spinning mills and weaving units across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto pt-2">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto shadow-lg group btn-premium" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <span>Request Immediate Personnel</span>
                <ArrowRight size={18} className="shrink-0 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-500 text-white hover:border-white hover:bg-white/10 hover:text-white btn-premium" asChild>
              <Link href="/services">
                Our 12 Core Services
              </Link>
            </Button>
          </div>
        </div>
      </Container>

      <WhatsAppButton message="Hi, I need immediate support for my textile mill operations" />
    </section>
  );
}

export default HeroSection;
