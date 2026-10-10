import React from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Landmark,
  Building2,
  HeartPulse,
  Award,
  BadgeCheck,
  ArrowRight,
  Scale,
  CalendarCheck,
  HardHat,
  Receipt,
  FileText,
  Lock,
} from 'lucide-react';
import type { Metadata } from 'next';
import { PHONE_NUMBER, EMAIL, COMPANY_NAME, WHATSAPP_NUMBER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Compliance & Certifications | Durga Dulari Enterprises',
  description: '100% legal compliance, statutory registrations (GST, PF, ESI, Labor License), and ISO-certified operations for risk-free textile mill audits.',
};

const registrations = [
  {
    id: 'gst',
    name: 'GST Registration',
    codeType: 'GSTIN Verified',
    icon: Landmark,
    category: 'Tax & Fiscal Compliance',
    status: 'Verified & Fully Active — Monthly filings audit-cleared (GST-1 & GST-3B).',
    detail: 'Full input tax credit eligibility with zero delay in GST compliance for all invoicing.',
    badge: 'Active & Filed',
  },
  {
    id: 'labour-license',
    name: 'Contract Labour License',
    codeType: 'Labour Act 1970',
    icon: FileCheck,
    category: 'Statutory Workforce Licensing',
    status: 'Fully licensed under the Contract Labour (Regulation & Abolition) Act, 1970.',
    detail: 'Authorizes full-scale deployment of skilled fitters, technicians, and floor operators pan-India.',
    badge: 'Govt. Licensed',
  },
  {
    id: 'epfo',
    name: 'PF (Provident Fund) Registration',
    codeType: 'EPFO Active Code',
    icon: Building2,
    category: 'Social Security Administration',
    status: 'Active Employer EPFO Code. Monthly statutory contributions verified and documented.',
    detail: 'Automated electronic challan return (ECR) generation with transparent monthly member passbooks.',
    badge: '100% Remittance',
  },
  {
    id: 'esic',
    name: 'ESI (Employee State Insurance)',
    codeType: 'ESIC Employer Code',
    icon: HeartPulse,
    category: 'Health & Hazard Protection',
    status: 'Active ESIC Employer Code. Complete medical and hazard coverage enabled for all floor workers.',
    detail: 'Comprehensive medical protection and accidental insurance for factory-floor technicians.',
    badge: 'Full Coverage',
  },
  {
    id: 'msme',
    name: 'MSME / Udyam Registration',
    codeType: 'Udyam Certified',
    icon: Award,
    category: 'Govt. Enterprise Recognition',
    status: 'Registered Enterprise under Ministry of Micro, Small & Medium Enterprises (Govt. of India).',
    detail: 'Official recognition as a certified industrial B2B vendor partner for large spinning mills.',
    badge: 'Govt. of India',
  },
  {
    id: 'iso',
    name: 'ISO 9001:2015 Certification',
    codeType: 'Quality Standards',
    icon: BadgeCheck,
    category: 'Quality Management Systems',
    status: 'ISO 9001:2015 Compliant Operations Management & Technical Maintenance workflow.',
    detail: 'Structured standard operating procedures (SOPs) for predictive, breakdown, and AMC maintenance.',
    badge: 'Certified QMS',
  },
];

const auditPillars = [
  {
    icon: Receipt,
    title: 'Monthly Statutory Remittances',
    desc: 'Guaranteed on-time monthly filings of GST-1, GST-3B, EPFO challans, and ESIC contributions by the 15th of every calendar month.',
  },
  {
    icon: Scale,
    title: 'Wage & Code Compliance',
    desc: 'Strict adherence to Minimum Wages Act, Payment of Wages Act, and statutory bonus guidelines across all operating state clusters.',
  },
  {
    icon: HardHat,
    title: 'Occupational Health & Safety',
    desc: 'Mandatory PPE kit issuance, machine floor hazard briefings, safety induction registers, and continuous shop-floor safety audits.',
  },
  {
    icon: CalendarCheck,
    title: 'Quarterly Legal Audits',
    desc: 'Independent reviews conducted quarterly by accredited corporate labor law counsels to verify 100% audit-proof documentation.',
  },
];

export default function CompliancePage() {
  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/70 dark:from-[#0B2545] dark:via-[#071b33] dark:to-[#040e1b] py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <div className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary-orange/5 dark:bg-primary-orange/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
              <ShieldCheck size={14} />
              Statutory Transparency & Trust
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-navy dark:text-white leading-[1.15]">
              Compliance & <span className="text-primary-orange">Certifications</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
              100% legal compliance and statutory transparency in all state and central labor operations. Your textile mill audits remain risk-free.
            </p>

            {/* Quick trust metrics */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={14} className="text-emerald-500" />
                Zero Statutory Default Record
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <FileCheck size={14} className="text-primary-orange" />
                Central & State Acts Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <Lock size={14} className="text-blue-500" />
                Audit-Ready Guarantee
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Registrations Grid */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary-orange font-bold text-xs uppercase tracking-widest block mb-2">
              Statutory Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Our Registrations & Licenses
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-2 font-medium">
              We maintain all necessary corporate, labor, and fiscal filings so your spinning or weaving mill is always 100% audit-proof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {registrations.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="group p-6 sm:p-7 rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-primary-orange/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <IconComponent size={24} />
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 px-2.5 py-1 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {item.badge}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      {item.category}
                    </span>

                    <h3 className="text-xl font-extrabold text-primary-navy dark:text-white tracking-tight mb-2.5 group-hover:text-primary-orange transition-colors duration-200">
                      {item.name}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium mb-3">
                      {item.status}
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                    <span className="text-slate-400 dark:text-slate-500 font-semibold">{item.codeType}</span>
                    <span className="text-primary-orange flex items-center gap-1 font-bold">
                      Audit Cleared <CheckCircle2 size={14} className="text-emerald-500" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Compliance Commitment & Audit Pillars */}
      <section className="py-16 sm:py-20 bg-slate-50/80 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 transition-colors duration-300">
        <Container className="max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary-orange font-bold text-xs uppercase tracking-widest block mb-2">
              Strict Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Our 4-Pillar Compliance Framework
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-2 font-medium">
              Every month, our legal desk oversees rigorous audits across all contract labor deployments and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {auditPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 text-primary-orange flex items-center justify-center shrink-0 mt-1">
                    <PillarIcon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Audit Guarantee Banner */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-orange-50/20 dark:from-[#0B2545] dark:to-[#071b33] border border-slate-200/90 dark:border-slate-800 shadow-sm dark:shadow-lg transition-colors duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/20 dark:border-primary-orange/30 flex items-center justify-center text-primary-orange shrink-0">
                <FileText size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-extrabold mb-1 text-primary-navy dark:text-white">
                  24-Hour Mill Audit Dossier Guarantee
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  In case of client mill inspections, state labor commissioner inquiries, or buyer statutory audits, our central legal desk provides complete signed documentation dossiers within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Verification CTA */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container className="max-w-4xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B2545] via-[#071b33] to-[#040e1b] text-white shadow-2xl border border-slate-800 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary-orange to-transparent" />
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-orange/20 border border-primary-orange/30 flex items-center justify-center text-primary-orange mx-auto mb-2">
                <ShieldCheck size={28} />
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Verify Our Compliance Credentials
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                Conducting vendor due diligence or supplier onboarding? Contact our compliance officer to receive attested copies of all statutory registrations.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto font-bold shadow-lg"
                  asChild
                >
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Request Compliance Copies <ArrowRight size={16} />
                  </Link>
                </Button>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Compliance Desk at ${COMPANY_NAME}, we need to verify your statutory compliance certificates for vendor onboarding.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  Direct WhatsApp Verification
                </a>
              </div>

              <p className="text-xs text-slate-400 pt-2 font-medium">
                Direct HR/Compliance Desk: <a href={`tel:${PHONE_NUMBER}`} className="text-primary-orange hover:underline font-bold">{PHONE_NUMBER}</a> · <a href={`mailto:${EMAIL}`} className="text-primary-orange hover:underline font-bold">{EMAIL}</a>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
