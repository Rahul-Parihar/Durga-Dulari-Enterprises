import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { downloads } from '@/data/downloads';
import { Download, Sparkles, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads & Tools | Durga Dulari Enterprises',
  description: 'Free engineering templates, SOP checklists, and MTBF calculators for textile spinning and weaving mill operations.',
};

export default function DownloadsPage() {
  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#071b33] to-[#040e1b] text-white py-16 sm:py-20 relative overflow-hidden dark-industrial-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary-orange/20 border border-primary-orange/30 text-primary-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <Sparkles size={14} /> Industrial Tooling & SOPs
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Operational Checklists & <span className="text-gradient-orange">Mill Calculators</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-medium leading-relaxed">
              Tested templates, preventive maintenance checklists, and manpower calculators designed by floor veterans for Indian textile mills.
            </p>
          </div>
        </Container>
      </section>

      {/* Downloads Grid */}
      <section className="py-20 sm:py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-primary-orange font-bold text-xs uppercase tracking-widest mb-2">Technical Library</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
                Available Resources & Templates
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
              <ShieldCheck size={16} className="text-emerald-500" />
              Verified by Durga Dulari Engineers
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {downloads.map((item) => {
              const isExcel = item.downloadUrl.endsWith('.xlsx');
              return (
                <Card
                  key={item.id}
                  className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-2 hover:border-primary-orange/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-orange/5 to-transparent rounded-tr-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary-orange/10 text-primary-orange flex items-center justify-center border border-primary-orange/20 group-hover:bg-primary-orange group-hover:text-white transition-all duration-300 shadow-sm">
                        <DynamicIcon name={item.icon} size={22} />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                        isExcel
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                          : 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800'
                      }`}>
                        {isExcel ? 'XLSX SHEET' : 'PDF SOP'}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-primary-navy dark:text-white mb-3 group-hover:text-primary-orange transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                      {item.description}
                    </p>
                  </div>

                  <Button variant="secondary" size="md" className="w-full font-bold shadow-md gap-2" asChild>
                    <Link href={`/contact?requirement=download-${item.id}`}>
                      <Download size={16} />
                      <span>Request Free Access</span>
                    </Link>
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Need Custom Audit / Template Block */}
          <div className="mt-16 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-3">
              Need a Custom Preventive Maintenance Schedule for Your Mill?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              We create plant-specific SOPs calibrated to your machinery makes (LMW, Rieter, Truetzschler, Murata, Schlafhorst). Speak to our senior technical auditor today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="md" className="bg-[#0b2545] hover:bg-slate-800 text-white font-bold" asChild>
                <Link href="/contact">Schedule Technical Audit</Link>
              </Button>
              <Button variant="outline" size="md" asChild>
                <Link href="/case-studies">View Turnaround Case Studies</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
