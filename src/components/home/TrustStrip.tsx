import React from 'react';
import { Award, Users, Building, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/common/Container';

export function TrustStrip() {
  const stats = [
    {
      icon: <Award className="w-7 h-7 text-primary-orange" />,
      value: '15+',
      label: 'Years of Industry Experience',
    },
    {
      icon: <Users className="w-7 h-7 text-primary-orange" />,
      value: '10,000+',
      label: 'Workers Deployed Pan-India',
    },
    {
      icon: <Building className="w-7 h-7 text-primary-orange" />,
      value: '150+',
      label: 'Mills & Industries Served',
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-primary-orange" />,
      value: '98%',
      label: 'Client Retention Rate',
    },
  ];

  return (
    <section className="relative z-30 -mt-10 sm:-mt-16 md:-mt-20 px-4">
      <Container>
        <div className="bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-3xl p-6 sm:p-8 lg:p-10 dark-industrial-grid">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group flex min-w-0 flex-col items-center text-center p-4 sm:p-5 bg-slate-900/40 rounded-2xl border border-slate-800/60 backdrop-blur-sm transition-all duration-300 hover:border-primary-orange/40 hover:-translate-y-2 hover:bg-slate-900/70"
              >
                <div className="mb-4 bg-slate-950 p-3 rounded-xl border border-slate-800 group-hover:border-primary-orange/30 group-hover:scale-110 transition-all duration-300">
                  <div className="group-hover:rotate-12 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight break-words group-hover:text-primary-orange transition-colors duration-300">
                  {stat.value}
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm text-slate-400 font-semibold max-w-[180px] leading-snug break-words">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
export default TrustStrip;
