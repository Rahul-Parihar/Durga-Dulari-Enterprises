import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import type { Metadata } from 'next';
import { Mail, Award, Users, CheckCircle, Quote, Handshake, Target, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Founder - Vijay Kumar Ojha | Durga Dulari Enterprises',
  description: 'Meet Vijay Kumar Ojha, founder of Durga Dulari Enterprises - bringing over 20+ years of textile industry expertise.',
};

export default function FounderPage() {
  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] to-[#040e1b] text-white py-20 relative overflow-hidden dark-industrial-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <Container>
          <span className="inline-block bg-primary-orange text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Leadership Vision
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Vijay Kumar Ojha</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium">Founder & Managing Director of Durga Dulari Enterprises</p>
        </Container>
      </section>

      {/* Profile */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Visual MD Badge Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <Card className="bg-gradient-to-br from-[#0B2545] to-[#07172c] border border-slate-800 p-8 rounded-3xl text-center shadow-xl text-white">
                <div className="w-32 h-32 rounded-2xl mx-auto mb-6 overflow-hidden border-2 border-primary-orange shadow-lg">
                  <img
                    src="/images/founder.png"
                    alt="Vijay Kumar Ojha"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Vijay Kumar Ojha</h3>
                <p className="text-primary-orange font-bold text-xs uppercase tracking-wider mt-1.5">Founder & MD</p>
                
                <div className="mt-8 pt-6 border-t border-slate-800 space-y-4 text-left">
                  <div className="flex items-center gap-3 text-slate-300 text-sm font-semibold">
                    <Award size={18} className="text-primary-orange shrink-0" />
                    <span>20+ Years Floor Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm font-semibold">
                    <Users size={18} className="text-primary-orange shrink-0" />
                    <span>10K+ Workers Directed</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <a 
                    href="mailto:info@durgadularienterprises.com"
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-3 rounded-xl transition-all duration-200 border border-slate-700/60"
                  >
                    <Mail size={14} /> Contact MD Desk
                  </a>
                </div>
              </Card>
            </div>

            {/* Content Profile */}
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 lg:p-10 relative">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-200 dark:text-slate-800 pointer-events-none" />
                <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg italic font-semibold leading-relaxed relative z-10">
                  "Our mission is simple: to make sure Indian spinning mills never run below peak capacity due to operator shortages or electrical-mechanical breakdowns. We don't just supply manpower; we guarantee compliance and operational reliability."
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-primary-navy dark:text-white mb-4 tracking-tight">Professional Background</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                  With over <strong className="text-slate-900 dark:text-white">20+ years</strong> of experience in textile manufacturing, floor operations, and industrial management, Vijay Kumar Ojha has built direct expertise in:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Textile mill operations and productivity audit',
                    'Pan-India manpower recruitment & compliance',
                    'Mechanical & Electrical preventive AMC setups',
                    'Textile machinery installation & trial runs',
                    'Legacy mill electronics & automation retrofitting',
                    'Sick mill revival under NCLT-approved parameters',
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <CheckCircle className="text-primary-orange flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-primary-navy dark:text-white mb-4 tracking-tight">Vision for Durga Dulari</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Having spent decades on production floors, Vijay recognized that mills faced systematic gaps: high temporary worker attrition, unqualified local electricians, and delays in parts sourcing. Durga Dulari Enterprises was founded to resolve this by providing a single point of operational accountability.
                </p>
              </div>

              <div className="bg-[#0b2545] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden dark-industrial-grid shadow-xl">
                <div>
                  <h4 className="font-extrabold text-lg text-white">MD Milestone Report</h4>
                  <p className="text-slate-300 text-xs md:text-sm font-semibold mt-1 max-w-md">
                    Under his direction, the agency has grown to service <strong className="text-white">150+ mills</strong>, deploy <strong className="text-white">10,000+ workers</strong>, and commission <strong className="text-white">120+ major industrial projects</strong>.
                  </p>
                </div>
                <Button variant="secondary" size="md" className="font-bold shrink-0" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 industrial-grid">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-navy dark:text-white mb-14 tracking-tight">Core Philosophies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-orange/10 flex items-center justify-center text-primary-orange mb-6">
                <Handshake size={24} />
              </div>
              <h3 className="text-xl font-extrabold text-primary-navy dark:text-white mb-3">Partnership</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                Long-term relationships built on strict SLA compliance, statutory transparency, and absolute operational trust.
              </p>
            </Card>
            
            <Card className="bg-white dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-orange/10 flex items-center justify-center text-primary-orange mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-extrabold text-primary-navy dark:text-white mb-3">Excellence</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                Every worker undergoes pre-vetting and machinery training at our School of Skills before stepping onto client floors.
              </p>
            </Card>

            <Card className="bg-white dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-orange/10 flex items-center justify-center text-primary-orange mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-extrabold text-primary-navy dark:text-white mb-3">Innovation</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                Integrating electronic retrofitting, PLC dashboards, and remote MTBF diagnostics for legacy mechanical units.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-orange text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-4 text-white">Request a Meeting with the MD</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-orange-100">
            For large-scale mill turnarounds, NCLT revivals, or nationwide staffing AMCs, discuss directly with our MD.
          </p>
          <Button variant="primary" size="lg" className="bg-[#0b2545] hover:bg-slate-800 text-white font-bold" asChild>
            <Link href="/contact">Request Appointment</Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}
