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
    <SectionWrapper bgColor="light" className="industrial-grid">
      <Container>
        <SectionHeading
          subtitle="Our Structured Approach"
          title="How We Operationalize Success"
          description="A systematic roadmap designed to minimize mill downtime and optimize manpower."
          centered
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12 relative">
          {steps.map((step, index) => (
            <Card
              key={step.number}
              hover={false}
              className="group bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-3xl relative shadow-md hover:shadow-[0_20px_45px_rgba(244,121,31,0.08)] hover:-translate-y-2 hover:border-primary-orange/20 transition-all duration-500 min-w-0"
            >
              {/* Connector line for large screens using animated dashes */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[50px] left-[78px] right-[-100px] h-[8px] z-0 pointer-events-none">
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
                <div className="w-12 h-12 bg-primary-orange text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-orange-500/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {step.icon}
                </div>
                <div className="absolute top-2 right-2 text-6xl font-black text-slate-100 dark:text-slate-900 pointer-events-none select-none group-hover:text-primary-orange/10 dark:group-hover:text-primary-orange/20 group-hover:scale-110 transition-all duration-500">
                  0{step.number}
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-primary-navy dark:text-white mb-3 mt-2 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed break-words">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Operational Indicators */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B2545]/5 dark:bg-white/5 rounded-bl-full pointer-events-none" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-primary-navy dark:text-white text-center mb-8 sm:mb-10 leading-tight break-words">Our Operational Benchmarks</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="relative flex-shrink-0 mt-1">
                <span className="absolute inset-0 rounded-full bg-green-500/20 scale-125 animate-ping opacity-75"></span>
                <CheckCircle2 className="text-green-500 relative z-10" size={24} />
              </div>
              <div>
                <p className="font-bold text-primary-navy dark:text-white leading-tight break-words">Rapid Deployment Policy</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed break-words">
                  Urgent technician dispatch or operator replacement occurs within <strong>24 hours</strong>.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="relative flex-shrink-0 mt-1">
                <span className="absolute inset-0 rounded-full bg-green-500/20 scale-125 animate-ping opacity-75"></span>
                <CheckCircle2 className="text-green-500 relative z-10" size={24} />
              </div>
              <div>
                <p className="font-bold text-primary-navy dark:text-white leading-tight break-words">Proven Scaling Capacity</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed break-words">
                  Active operations successfully running in over <strong>150+ textile mills</strong>.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="relative flex-shrink-0 mt-1">
                <span className="absolute inset-0 rounded-full bg-green-500/20 scale-125 animate-ping opacity-75"></span>
                <CheckCircle2 className="text-green-500 relative z-10" size={24} />
              </div>
              <div>
                <p className="font-bold text-primary-navy dark:text-white leading-tight break-words">Account-Dedicated Supervision</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed break-words">
                  Every contract gets an assigned onsite engineer/manager to guarantee output compliance.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="relative flex-shrink-0 mt-1">
                <span className="absolute inset-0 rounded-full bg-green-500/20 scale-125 animate-ping opacity-75"></span>
                <CheckCircle2 className="text-green-500 relative z-10" size={24} />
              </div>
              <div>
                <p className="font-bold text-primary-navy dark:text-white leading-tight break-words">100% Statutory Compliance</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed break-words">
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
