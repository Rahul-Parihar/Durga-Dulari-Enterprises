import React from 'react';
import { CheckCircle2, Quote, Star } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Card } from '@/components/common/Card';
import { testimonials } from '@/data/testimonials';

export function TestimonialsPreview() {
  return (
    <SectionWrapper bgColor="light" className="industrial-grid">
      <Container>
        <SectionHeading
          title="Our Impact"
          subtitle="Trusted by Industry Leaders"
          description="Read experiences from our active textile B2B clients, mill managers, and operational heads across India."
          centered
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <Card
              key={t.id}
              className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl flex flex-col justify-between shadow-md hover:shadow-2xl dark:hover:shadow-[0_20px_50px_rgba(244,121,31,0.06)] transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Star rating & quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary-orange/20" />
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed italic mb-8 font-medium">
                  "{t.content}"
                </p>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-850 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-primary-navy dark:text-white text-sm md:text-base">{t.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-0.5">{t.role}</p>
                  <p className="text-[11px] text-primary-orange font-extrabold tracking-wider uppercase mt-1">
                    {t.company}
                  </p>
                </div>
                {t.verified && (
                  <span className="inline-flex items-center gap-1 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-[10px] font-extrabold uppercase border border-green-200/50 dark:border-green-900/30">
                    <CheckCircle2 size={12} className="fill-current text-green-700 dark:text-green-400 text-white" />
                    Verified
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Info Strip and Confidentiality Statement */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Reach Stats */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-4">
            <div className="bg-[#0b2545] border border-slate-800 text-center py-6 px-3 rounded-2xl shadow-sm">
              <div className="text-2xl md:text-3xl font-black text-white">150+</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Mills Served</div>
            </div>
            
            <div className="bg-[#0b2545] border border-slate-800 text-center py-6 px-3 rounded-2xl shadow-sm">
              <div className="text-2xl md:text-3xl font-black text-white">PAN</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">India Reach</div>
            </div>

            <div className="bg-[#0b2545] border border-slate-800 text-center py-6 px-3 rounded-2xl shadow-sm">
              <div className="text-2xl md:text-3xl font-black text-white">15+</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Years Exp</div>
            </div>
          </div>

          {/* Audit Verification */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-orange/10 flex items-center justify-center text-primary-orange flex-shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-extrabold text-primary-navy dark:text-white mb-1.5">Direct References Available Under NDA</h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm font-medium leading-relaxed">
                  We respect client privacy. Detailed case study audits, system logs, and direct contact details of our active mill managers can be shared with qualified prospects upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

export default TestimonialsPreview;
