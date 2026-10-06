import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import type { Metadata } from 'next';
import { ShieldAlert, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Durga Dulari Enterprises',
  description: 'Learn about Durga Dulari Enterprises - Your trusted partner in textile manpower, maintenance, and plant automation across India.',
};

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] to-[#040e1b] text-white py-20 relative overflow-hidden dark-industrial-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <Container>
          <span className="inline-block bg-primary-orange text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Our Legacy
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">About Durga Dulari Enterprises</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium">Textile industry expertise meets operational reliability and cost optimization.</p>
        </Container>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white mb-6 tracking-tight">Our Story</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                Durga Dulari Enterprises was founded under the vision of Vijay Kumar Ojha to solve systemic operational problems within the Indian textile ecosystem. Textile mill operators regularly face critical challenges that we directly solve:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">
                    <ShieldAlert size={16} />
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                    <strong className="text-slate-900 dark:text-white">Labor Fluctuations:</strong> Urgent worker shortages causing spinning spindles to sit idle during peak demand cycles.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">
                    <ShieldAlert size={16} />
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                    <strong className="text-slate-900 dark:text-white">Technical Breakdown Loss:</strong> Sudden mechanical or electrical failures leading to hours of lost production.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">
                    <ShieldAlert size={16} />
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                    <strong className="text-slate-900 dark:text-white">Regulatory Non-Compliance:</strong> Heavy legal burdens regarding PF, ESI, contract labor licensing, and GST structures.
                  </p>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Today, we operate as an approved B2B partner for over <strong className="text-slate-900 dark:text-white">150+ textile mills</strong>, deploying verified personnel, implementing preventive maintenance, and steering custom automation projects.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white mb-6 tracking-tight">Our Mission</h2>
              <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed mb-8 font-semibold">
                To empower textile mills with rapid-response manpower, expert maintenance, and advanced automation—enabling operational excellence, cost optimization, and sustainable B2B growth.
              </p>

              <h3 className="text-xl font-extrabold text-primary-navy dark:text-white mb-4 tracking-tight">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <span className="text-primary-orange">✓</span> Reliability
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Consistent, dependable service delivery with zero operational lags.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <span className="text-primary-orange">✓</span> Compliance
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">100% adherence to labor laws, ESI, PF, and corporate standards.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <span className="text-primary-orange">✓</span> Safety
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Zero-incident floor operations driven by robust training.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <span className="text-primary-orange">✓</span> Innovation
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Spindle automation upgrades for legacy production lines.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0b2545] text-white rounded-3xl p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 relative overflow-hidden dark-industrial-grid shadow-xl">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-primary-orange mb-2">20+</p>
              <p className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-wider">Years of Service</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-primary-orange mb-2">250+</p>
              <p className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-wider">Skilled Workforce</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-primary-orange mb-2">150+</p>
              <p className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-wider">Mills Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-primary-orange mb-2">98%</p>
              <p className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-wider">Client Retention</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800 industrial-grid">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-navy dark:text-white mb-14 tracking-tight">Our Leadership</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 lg:p-12 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                {/* Founder Photo */}
                <img
                  src="/images/founder.png"
                  alt="Vijay Kumar Ojha"
                  className="w-24 h-24 rounded-2xl object-cover object-top shadow-md border-2 border-primary-orange/40 flex-shrink-0"
                />
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-primary-navy dark:text-white">Vijay Kumar Ojha</h3>
                    <p className="text-primary-orange font-bold text-sm uppercase tracking-wider mt-1">Founder & Managing Director</p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                    Vijay Kumar Ojha brings over <strong className="text-slate-900 dark:text-white">20+ years</strong> of deep textile floor expertise, guiding operations across manpower supply, mechanical-electrical fit-outs, and sick mill revival programs under NCLT. His hands-on experience forms the technical core of the Durga Dulari School of Skills.
                  </p>
                  <Button variant="outline" size="md" className="font-bold" asChild>
                    <Link href="/founder">Read MD Vision</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Compliance / statutory link strip */}
      <section className="py-16 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <Container>
          <div className="bg-slate-900 text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-slate-800">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-orange/15 flex items-center justify-center text-primary-orange flex-shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">Looking for Compliance Certificates?</h4>
                <p className="text-slate-400 text-xs md:text-sm font-medium mt-1">We maintain 100% legal clearance. View our statutory reports and registrations online.</p>
              </div>
            </div>
            <Button variant="secondary" size="md" className="font-bold shrink-0" asChild>
              <Link href="/compliance">View Compliance Page</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-orange text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-4 text-white">Partner with Us</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-orange-100">
            Let's work together to optimize your mill operations, stabilize labor pools, and achieve your business goals.
          </p>
          <Button variant="primary" size="lg" className="bg-[#0b2545] hover:bg-slate-800 text-white font-bold" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}
