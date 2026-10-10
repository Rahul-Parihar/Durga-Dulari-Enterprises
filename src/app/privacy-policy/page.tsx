import React from 'react';
import { Container } from '@/components/common/Container';
import { Shield, Eye, Lock, UserCheck, Mail, FileText, Cookie, Server } from 'lucide-react';
import { EMAIL, COMPANY_NAME } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Durga Dulari Enterprises',
  description: 'Learn how Durga Dulari Enterprises collects, uses, and protects your personal data across our textile operations and services.',
};

const sections = [
  {
    id: 'information-we-collect',
    icon: <Eye size={22} />,
    title: 'Information We Collect',
    content: 'We collect the following information through our website forms, service inquiries, and operational interactions:',
    items: [
      'Full name, company name, and designation',
      'Email addresses and phone numbers',
      'Inquiry details, service requirements, and project specifications',
      'Location and state/region information',
      'Usage data through cookies and analytics (page visits, session duration)',
      'Device information and IP addresses for security purposes',
    ],
  },
  {
    id: 'how-we-use',
    icon: <FileText size={22} />,
    title: 'How We Use Your Information',
    content: 'Your information is used strictly for business purposes:',
    items: [
      'Responding to your service inquiries and providing quotations',
      'Deploying manpower, scheduling maintenance, and managing projects',
      'Sending operational updates and service confirmations',
      'Marketing communications only with your explicit consent',
      'Improving our website experience and service delivery',
      'Complying with legal, tax, and regulatory obligations (GST, PF, ESI)',
    ],
  },
  {
    id: 'data-protection',
    icon: <Lock size={22} />,
    title: 'Data Protection & Security',
    content: 'We implement industry-standard technical and organizational measures to safeguard your data:',
    items: [
      'Encrypted data transmission (SSL/TLS) across all web communications',
      'Restricted access controls — only authorized personnel handle client data',
      'Regular security audits and vulnerability assessments',
      'Secure cloud infrastructure with automated backups',
      'Compliance with Information Technology Act, 2000 and its amendments',
    ],
  },
  {
    id: 'cookies',
    icon: <Cookie size={22} />,
    title: 'Cookies & Analytics',
    content: 'Our website uses cookies and similar technologies to enhance your browsing experience:',
    items: [
      'Essential cookies for website functionality and form submissions',
      'Analytics cookies to understand visitor behavior and improve services',
      'No third-party advertising or tracking cookies are used',
      'You can disable cookies through your browser settings at any time',
    ],
  },
  {
    id: 'data-sharing',
    icon: <Server size={22} />,
    title: 'Data Sharing & Third Parties',
    content: 'We respect your privacy and limit data sharing:',
    items: [
      'We do not sell, trade, or rent your personal information to third parties',
      'Data may be shared with trusted service providers (email delivery, hosting) under strict agreements',
      'We may disclose information when required by law or court order',
      'Anonymized, aggregated data may be used for industry research and analysis',
    ],
  },
  {
    id: 'your-rights',
    icon: <UserCheck size={22} />,
    title: 'Your Rights',
    content: 'As a user, you have the following rights regarding your personal data:',
    items: [
      'Right to access — request a copy of the personal data we hold about you',
      'Right to correction — update or correct inaccurate information',
      'Right to deletion — request removal of your data from our systems',
      'Right to withdraw consent — opt out of marketing communications at any time',
      'Right to data portability — receive your data in a structured, machine-readable format',
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            <Shield size={14} />
            Your Data, Our Responsibility
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary-navy dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            How {COMPANY_NAME} collects, uses, and protects your personal information across our textile operations and services.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
            Last Updated: {lastUpdated}
          </p>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-10 sm:py-14">
        <Container className="max-w-4xl">

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
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

          {/* Contact for Privacy */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-orange-50/20 dark:from-[#0B2545] dark:to-[#071b33] border border-slate-200/90 dark:border-slate-800 shadow-sm dark:shadow-lg transition-colors duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/20 dark:border-primary-orange/30 flex items-center justify-center text-primary-orange shrink-0">
                <Mail size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-extrabold mb-1.5 text-primary-navy dark:text-white">
                  Privacy Inquiries & Data Requests
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  To exercise your data rights or for any privacy-related concerns, contact our team at{' '}
                  <a href={`mailto:${EMAIL}`} className="text-primary-orange hover:text-orange-600 dark:hover:text-primary-orange/80 font-bold hover:underline">
                    {EMAIL}
                  </a>
                  . We aim to respond within 48 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-left text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            <p>
              This privacy policy is subject to change at our discretion. Any changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the updated policy.
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
