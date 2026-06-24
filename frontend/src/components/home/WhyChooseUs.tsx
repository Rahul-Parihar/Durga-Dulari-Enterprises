import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Users, Clock, TrendingUp, Factory, ShieldCheck, MapPin } from 'lucide-react';
import { Card } from '@/components/common/Card';

const features = [
  {
    icon: <Users className="w-6 h-6 text-primary-orange" />,
    title: 'Experienced Textile Professionals',
    description: 'Decades of combined expertise in textile manufacturing operations, maintenance, and process optimization.',
  },
  {
    icon: <Clock className="w-6 h-6 text-primary-orange" />,
    title: 'Fast Deployment',
    description: 'Deploy skilled workers and technical teams within 24 hours for emergency plant operations.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary-orange" />,
    title: 'Cost-Effective Solutions',
    description: 'Optimize your operational costs through smart staffing and efficiency improvements. Typical savings: 15% to 20%.',
  },
  {
    icon: <Factory className="w-6 h-6 text-primary-orange" />,
    title: 'Industry Expertise',
    description: 'Deep understanding of spinning mills, weaving, knitting, garmenting, and allied textile sectors.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary-orange" />,
    title: 'Compliance Ready',
    description: 'Full compliance with PF, ESI, GST, contract labor licensing, and all statutory requirements.',
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary-orange" />,
    title: 'PAN India Support',
    description: 'Present and active across major textile hubs. Emergency response available nationwide.',
  },
];

export function WhyChooseUs() {
  return (
    <SectionWrapper bgColor="light" className="industrial-grid">
      <Container>
        <SectionHeading
          subtitle="Why Textile Mills Trust Us"
          title="Why Choose Durga Dulari Enterprises?"
          description="Six core reasons why textile industry decision-makers partner with us"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative bg-white dark:bg-slate-900/60 rounded-3xl p-6 sm:p-8 hover:-translate-y-3 border border-slate-100 dark:border-slate-800 hover:border-primary-orange/20 shadow-md hover:shadow-[0_20px_50px_rgba(244,121,31,0.12)] dark:hover:shadow-[0_20px_50px_rgba(244,121,31,0.06)] transition-all duration-500 min-w-0 overflow-hidden"
            >
              {/* Subtle top-right gradient blob */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-orange/5 to-transparent rounded-tr-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
              
              <div className="w-12 h-12 bg-primary-orange/10 text-primary-orange rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-orange group-hover:text-white border border-transparent group-hover:border-primary-orange/20 transition-all duration-300 shadow-sm group-hover:scale-110">
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {React.cloneElement(feature.icon, { className: 'w-6 h-6 text-current' })}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-primary-navy dark:text-white mb-3 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium break-words">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
export default WhyChooseUs;
