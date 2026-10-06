import React from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { testimonials, clientCategories } from '@/data/testimonials';
import Link from 'next/link';
import {
  Sparkles,
  Star,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials & Mill Reviews | Durga Dulari Enterprises',
  description: 'Verified reviews and feedback from textile mill managers, spinning directors, and plant heads across India.',
};

export default function TestimonialsPage() {
  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#071b33] to-[#040e1b] text-white py-16 sm:py-20 relative overflow-hidden dark-industrial-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary-orange/20 border border-primary-orange/30 text-primary-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <Sparkles size={14} /> Client Trust & Performance
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              What Mill Leaders Say About <span className="text-gradient-orange">Durga Dulari</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-medium leading-relaxed">
              Read first-hand feedback from directors, general managers, and operational heads who rely on our emergency manpower, AMC maintenance, and plant automation.
            </p>
          </div>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 sm:py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-primary-orange font-bold text-xs uppercase tracking-widest mb-2">Verified Feedback</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
                Client Testimonials
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 size={16} />
              100% Verified Mill Operations
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {testimonials.map((t) => (
              <Card
                key={t.id}
                className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl flex flex-col justify-between shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-primary-orange/30 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary-orange/20" />
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8 font-medium">
                    "{t.content}"
                  </p>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-primary-navy dark:text-white text-base">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-0.5">
                      {t.role}
                    </p>
                    <p className="text-xs text-primary-orange font-extrabold uppercase tracking-wider mt-1">
                      {t.company}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    {t.industry}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* Real Metrics Section */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 mb-20 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-navy dark:text-white mb-2">
                Our Proven Footprint Across India
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Operational scale built over two decades of consistent floor delivery and audit clearance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm">
                <p className="text-3xl sm:text-4xl font-black text-primary-orange mb-1">20+</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Years Serving Industry</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm">
                <p className="text-3xl sm:text-4xl font-black text-primary-orange mb-1">150+</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Active Partner Mills</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm">
                <p className="text-3xl sm:text-4xl font-black text-primary-orange mb-1">10,000+</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Trained Personnel Deployed</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm">
                <p className="text-3xl sm:text-4xl font-black text-primary-orange mb-1">24×7</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Emergency Breakdown Response</p>
              </div>
            </div>
          </div>

          {/* Industry Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#041124] text-white rounded-3xl p-8 sm:p-12 border border-[#0d274c] shadow-2xl relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-primary-orange text-xs font-black uppercase tracking-widest block">
                Direct References
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need to Speak Directly With a Mill Owner in Your State?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We understand industrial due diligence. Upon mutual NDA clearance, we arrange direct peer-to-peer reference calls with plant general managers in Coimbatore, Surat, Ludhiana, or Bhilwara.
              </p>
              <div className="pt-2">
                <Button variant="secondary" size="md" className="font-bold shadow-lg" asChild>
                  <Link href="/contact">Request Peer References</Link>
                </Button>
              </div>
            </div>

            <div className="bg-[#071c36] border border-slate-800 rounded-2xl p-6 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                Sectors Active in Our Reference Network:
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-200">
                {clientCategories.map((cat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-primary-orange font-bold">✓</span>
                    <span>{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-orange text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-4 text-white">Experience the Durga Dulari Difference</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-orange-100">
            Let's evaluate your spinning floor, maintenance overhead, or operator requirements.
          </p>
          <Button variant="primary" size="lg" className="bg-[#0b2545] hover:bg-slate-800 text-white font-bold" asChild>
            <Link href="/contact">Schedule Plant Consultation</Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}
