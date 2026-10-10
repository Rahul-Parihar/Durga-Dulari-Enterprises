import React from 'react';
import { CheckCircle2, Quote, Star } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Card } from '@/components/common/Card';
import { testimonials } from '@/data/testimonials';

export function TestimonialsPreview() {
  return (
    <SectionWrapper bgColor="light" hasPadding={false} className="industrial-grid pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-10 lg:pb-12">
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

              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex items-center justify-between">
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

        {/* Reach Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
          <div className="bg-[#0b2545] border border-slate-800 text-center py-6 px-3 rounded-2xl shadow-sm">
            <div className="text-2xl md:text-3xl font-black text-white">150+</div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Mills Served</div>
          </div>

          <div className="bg-[#0b2545] border border-slate-800 text-center py-6 px-3 rounded-2xl shadow-sm">
            <div className="text-2xl md:text-3xl font-black text-white">PAN</div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">India Reach</div>
          </div>

          <div className="bg-[#0b2545] border border-slate-800 text-center py-6 px-3 rounded-2xl shadow-sm">
            <div className="text-2xl md:text-3xl font-black text-white">20+</div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Years Exp</div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

export default TestimonialsPreview;
