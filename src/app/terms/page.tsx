import React from 'react';
import { Container } from '@/components/common/Container';
import { 
  FileText, 
  CheckCircle2, 
  FileCheck, 
  AlertCircle, 
  Scale, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  Gavel, 
  Mail
} from 'lucide-react';
import { EMAIL, COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Durga Dulari Enterprises',
  description: 'Terms and conditions governing the use of Durga Dulari Enterprises website, textile manpower, and industrial maintenance services.',
};

const termsSections = [
  {
    id: 'acceptance',
    icon: <CheckCircle2 size={22} />,
    title: 'Acceptance of Terms',
    content: 'By accessing, browsing, or utilizing the website and services of Durga Dulari Enterprises, you confirm that you have read, understood, and agreed to be legally bound by these Terms and Conditions.',
    items: [
      'You agree to comply with all applicable local, national, and international laws and regulations.',
      'If you represent a corporate entity, you warrant having full legal authority to bind that organization.',
      'If you do not agree with any part of these terms, you must immediately discontinue using our services.',
    ],
  },
  {
    id: 'license',
    icon: <FileCheck size={22} />,
    title: 'Use License & Intellectual Property',
    content: 'Permission is granted to temporarily access and view the materials and information on our website for informational and personal evaluation purposes only.',
    items: [
      'You may not modify, reproduce, distribute, or publicly display website materials without written consent.',
      'Commercial exploitation, resale, or reverse engineering of proprietary workflows is strictly prohibited.',
      'All trademarks, logos, and service descriptions are intellectual property of Durga Dulari Enterprises.',
      'This license shall terminate automatically if you violate any of these restrictions.',
    ],
  },
  {
    id: 'disclaimer',
    icon: <AlertCircle size={22} />,
    title: 'Disclaimer of Warranties',
    content: 'All materials, brochures, and specifications published on this website are provided on an "as is" and "as available" basis without warranties of any kind.',
    items: [
      'We disclaim all express or implied warranties, including merchantability and fitness for a particular purpose.',
      'Website content does not substitute formal service agreements, engineering SLAs, or manpower contracts.',
      'We do not guarantee uninterrupted, error-free, or virus-free operation of web services.',
    ],
  },
  {
    id: 'limitations',
    icon: <Scale size={22} />,
    title: 'Limitation of Liability',
    content: 'Under no circumstances shall Durga Dulari Enterprises, its directors, employees, or partners be liable for any indirect, punitive, or consequential damages.',
    items: [
      'Exclusions include loss of profits, production downtime, data corruption, or business interruption.',
      'Liability in connection with professional textile contracts is strictly limited to the written agreement terms.',
      'Some jurisdictions may not permit certain limitations, in which case liability is limited to the extent permitted by law.',
    ],
  },
  {
    id: 'accuracy',
    icon: <Clock size={22} />,
    title: 'Accuracy of Materials & Specifications',
    content: 'The information on our website may occasionally include technical, typographical, photographic, or calculation errors.',
    items: [
      'We do not warrant that all specifications, case studies, or operational metrics are entirely current at all times.',
      'We reserve the right to revise service descriptions, machine capabilities, and terms without prior notice.',
      'Official commercial proposals and quotations supersede any informational text on this website.',
    ],
  },
  {
    id: 'links',
    icon: <ExternalLink size={22} />,
    title: 'External Links & Third Parties',
    content: 'Our website may contain references or links to third-party services, certifications, vendor portals, and external websites.',
    items: [
      'We have not reviewed all third-party sites and bear no responsibility for their content or data policies.',
      'Inclusion of any link does not imply formal endorsement or affiliation.',
      'Use of third-party websites and tools is undertaken solely at your own risk.',
    ],
  },
  {
    id: 'modifications',
    icon: <ShieldCheck size={22} />,
    title: 'Modifications to Terms',
    content: 'We reserve the right to amend, update, or revise these terms and conditions at our sole discretion at any time.',
    items: [
      'Any revisions take effect immediately upon publication on this page with an updated date.',
      'Your continued use of our website and services following updates constitutes acceptance of the new terms.',
      'We encourage regular review of this page to stay informed of our latest policies.',
    ],
  },
  {
    id: 'governing-law',
    icon: <Gavel size={22} />,
    title: 'Governing Law & Jurisdiction',
    content: 'These terms and conditions are governed by and construed in accordance with the substantive laws of the Republic of India.',
    items: [
      'Any dispute, controversy, or claim arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts in Madhya Pradesh, India.',
      'Parties agree to prioritize amicable dispute resolution before initiating formal legal proceedings.',
    ],
  },
];

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/70 dark:from-[#0B2545] dark:via-[#071b33] dark:to-[#040e1b] py-12 md:py-16 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <div className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-orange/5 dark:bg-primary-orange/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
        
        <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
            <FileText size={14} />
            Official Agreement & Guidelines
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary-navy dark:text-white">
            Terms & Conditions
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Please read these terms carefully before accessing our website or engaging with {COMPANY_NAME}&apos;s industrial solutions and services.
          </p>
          
          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
            Last Updated: {lastUpdated}
          </p>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-10 sm:py-14">
        <Container className="max-w-4xl">

          {/* Terms Section Cards */}
          <div className="space-y-8">
            {termsSections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-28 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-11 h-11 rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 text-primary-orange flex items-center justify-center shrink-0 mt-1">
                    {section.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-orange block mb-0.5">
                      Section {index + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-primary-navy dark:text-white tracking-tight mb-3">
                      {section.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-4">
                      {section.content}
                    </p>

                    <ul className="space-y-2.5">
                      {section.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-medium"
                        >
                          <div className="w-5 h-5 rounded-full bg-primary-orange/10 dark:bg-primary-orange/20 flex items-center justify-center text-primary-orange shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact & Inquiries Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-orange-50/20 dark:from-[#0B2545] dark:to-[#071b33] border border-slate-200/90 dark:border-slate-800 shadow-sm dark:shadow-lg transition-colors duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/20 dark:border-primary-orange/30 flex items-center justify-center text-primary-orange shrink-0">
                <Mail size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-extrabold mb-1.5 text-primary-navy dark:text-white">
                  Questions Regarding Our Terms?
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  For clarifications on our terms, master service agreements, or vendor compliance, contact our legal and support desk at{' '}
                  <a href={`mailto:${EMAIL}`} className="text-primary-orange hover:text-orange-600 dark:hover:text-primary-orange/80 font-bold hover:underline">
                    {EMAIL}
                  </a>
                  {' '}or call us at{' '}
                  <a href={`tel:${PHONE_NUMBER}`} className="text-primary-orange hover:text-orange-600 dark:hover:text-primary-orange/80 font-bold hover:underline">
                    {PHONE_NUMBER}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-left text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            <p>
              These terms are subject to periodic review and amendments in accordance with applicable laws in India.
            </p>
            <p className="mt-2 font-bold text-slate-400 dark:text-slate-500">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
