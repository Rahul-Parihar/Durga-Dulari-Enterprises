import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { CheckCircle2, MessageSquare, Clipboard, Users, Activity } from 'lucide-react';
import { Card } from '@/components/common/Card';

const steps = [
  {
    number: 1,
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: 'Requirement Discussion',
    description: 'Understand your specific operational profiles, shifts, machinery, and operator requirements.',
  },
  {
    number: 2,
    icon: <Clipboard className="w-6 h-6 text-white" />,
    title: 'Site & Technical Understanding',
    description: 'Assess machine makes (Rieter, LMW, Schlafhorst, Murata), electrical specifications, and local context.',
  },
  {
    number: 3,
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'Rapid Deployment & Shift Placement',
    description: 'Deploy pre-trained operators or setup maintenance AMCs with zero lag and full documentation.',
  },
  {
    number: 4,
    icon: <Activity className="w-6 h-6 text-white" />,
    title: 'Ongoing Monitoring & Support',
    description: 'Provide persistent supervisor feedback, quality auditing, and 24x7 support coverage.',
  },
];

export function ProcessSection() {
  return (
    <SectionWrapper bgColor="light" hasPadding={false} className="industrial-grid py-10 sm:py-14">
      <Container>
        <SectionHeading
          subtitle="Our Structured Approach"
          title="How We Operationalize Success"
          description="A systematic roadmap designed to minimize mill downtime and optimize manpower."
          centered
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8 relative">
          {steps.map((step, index) => (
            <Card
              key={step.number}
              hover={false}
              className="group bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 p-5 sm:p-6 rounded-2xl relative shadow-sm hover:shadow-[0_15px_35px_rgba(244,121,31,0.08)] hover:-translate-y-1.5 hover:border-primary-orange/20 transition-all duration-300 min-w-0"
            >
              {/* Connector line for large screens using animated dashes */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[44px] left-[72px] right-[-90px] h-[8px] z-0 pointer-events-none">
                  <svg className="w-full h-full" fill="none">
                    <line
                      x1="0" y1="4" x2="100%" y2="4"
                      stroke="#e2e8f0" strokeWidth="2"
                      className="dark:hidden"
                    />
                    <line
                      x1="0" y1="4" x2="100%" y2="4"
                      stroke="#1e293b" strokeWidth="2"
                      className="hidden dark:block"
                    />
                    <line
                      x1="0" y1="4" x2="100%" y2="4"
                      stroke="#F4791F" strokeWidth="2.5"
                      className="animate-dash-flow"
                    />
                  </svg>
                </div>
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-11 h-11 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold mb-3 shadow-md shadow-orange-500/10 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                  {step.icon}
                </div>
                <div className="absolute top-1 right-1 text-4xl sm:text-5xl font-black text-slate-200/70 dark:text-slate-800/80 pointer-events-none select-none group-hover:text-primary-orange/15 dark:group-hover:text-primary-orange/25 group-hover:scale-105 transition-all duration-300">
                  0{step.number}
                </div>
                <h3 className="text-sm sm:text-[15px] font-bold text-primary-navy dark:text-white mb-1.5 leading-snug break-words group-hover:text-primary-orange transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs font-normal leading-relaxed break-words">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Operational Indicators */}
        <div className="mt-10 sm:mt-12 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm max-w-6xl mx-auto relative overflow-hidden">
          <div className="text-center mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-primary-navy dark:text-white tracking-tight">
              Our Operational Benchmarks
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/50 border border-slate-200/70 dark:border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="relative flex-shrink-0 mb-1.5 flex items-center gap-1.5">
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 scale-125 animate-ping opacity-75" />
                    <CheckCircle2 className="text-emerald-500 relative z-10" size={15} />
                  </div>
                </div>
                <p className="font-bold text-primary-navy dark:text-white text-xs sm:text-[13px] leading-snug">Rapid Deployment Policy</p>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-normal mt-1 leading-relaxed">
                  Urgent technician dispatch or operator replacement occurs within <strong>24 hours</strong>.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/50 border border-slate-200/70 dark:border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="relative flex-shrink-0 mb-1.5 flex items-center gap-1.5">
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 scale-125 animate-ping opacity-75" />
                    <CheckCircle2 className="text-emerald-500 relative z-10" size={15} />
                  </div>
                </div>
                <p className="font-bold text-primary-navy dark:text-white text-xs sm:text-[13px] leading-snug">Proven Scaling Capacity</p>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-normal mt-1 leading-relaxed">
                  Active operations successfully running in over <strong>150+ textile mills</strong>.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/50 border border-slate-200/70 dark:border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="relative flex-shrink-0 mb-1.5 flex items-center gap-1.5">
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 scale-125 animate-ping opacity-75" />
                    <CheckCircle2 className="text-emerald-500 relative z-10" size={15} />
                  </div>
                </div>
                <p className="font-bold text-primary-navy dark:text-white text-xs sm:text-[13px] leading-snug">Account-Dedicated Supervision</p>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-normal mt-1 leading-relaxed">
                  Every contract gets an assigned onsite engineer/manager to guarantee output compliance.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/50 border border-slate-200/70 dark:border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="relative flex-shrink-0 mb-1.5 flex items-center gap-1.5">
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 scale-125 animate-ping opacity-75" />
                    <CheckCircle2 className="text-emerald-500 relative z-10" size={15} />
                  </div>
                </div>
                <p className="font-bold text-primary-navy dark:text-white text-xs sm:text-[13px] leading-snug">100% Statutory Compliance</p>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-normal mt-1 leading-relaxed">
                  Fully licensed operations matching all GST, PF, ESI, and labor laws with audited reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
export default ProcessSection;
