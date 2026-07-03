import React from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, CheckSquare } from 'lucide-react';
import type { Metadata } from 'next';
import { Card } from '@/components/common/Card';

export const metadata: Metadata = {
  title: 'Compliance & Certifications | Durga Dulari Enterprises',
  description: 'Our compliance credentials, statutory registrations, and industry certifications.',
};

const complianceItems = [
  {
    name: 'GST Registration',
    status: 'Verified & Fully Active — Monthly filings audit-cleared (GSTIN active).',
  },
  {
    name: 'Contract Labour License',
    status: 'Fully licensed under the Contract Labour (Regulation & Abolition) Act, 1970.',
  },
  {
    name: 'PF (Provident Fund) Registration',
    status: 'Active Employer EPFO Code. Monthly statutory contributions verified and documented.',
  },
  {
    name: 'ESI (Employee State Insurance) Registration',
    status: 'Active ESIC Employer Code. Complete medical and hazard coverage enabled for all floor workers.',
  },
  {
    name: 'MSME / Udyam Registration',
    status: 'Registered Medium Enterprise (Udyam-verified B2B industrial partner).',
  },
  {
    name: 'ISO / Quality Certifications',
    status: 'ISO 9001:2015 Compliant Operations Management workflow.',
  },
];

export default function CompliancePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] to-[#040e1b] text-white py-20 relative overflow-hidden dark-industrial-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <Container>
          <span className="inline-block bg-primary-orange text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Statutory Transparency
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Compliance & Certifications</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium">100% legal compliance and transparency in all state and central labor operations.</p>
        </Container>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-navy mb-4 tracking-tight">Our Registrations</h2>
          <p className="text-center text-slate-550 mb-14 max-w-2xl mx-auto font-medium">
            We maintain all necessary corporate and legal filings so your mill audit is always risk-free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
            {complianceItems.map((item, idx) => (
              <Card key={idx} className="bg-white border border-slate-100 p-8 rounded-2xl border-l-4 border-l-primary-orange shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={22} />
                  <div>
                    <h3 className="text-lg font-extrabold text-primary-navy mb-2">{item.name}</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.status}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Important Note */}
          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-primary-orange" size={28} />
              <h3 className="text-xl font-extrabold text-primary-navy">Compliance Commitment</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
              All registration certificates are audited quarterly by corporate legal counsels. We maintain strict compliance metrics including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Central & State Contract Labour Regulation compliance',
                'Punctual monthly GST-1 & GST-3B filings',
                'Timely deposit of PF & ESI deductions',
                'Statutory bonus and wage regulation codes',
                'Onsite safety training compliance registers',
              ].map((point, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <CheckSquare className="text-primary-orange flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-slate-650 text-xs md:text-sm font-semibold">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-primary-orange text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-4">Verify Our Credentials</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-orange-100">
            For due diligence audits, contact our compliance officer to receive official certificate copies.
          </p>
          <Button variant="primary" size="lg" className="bg-[#0b2545] hover:bg-slate-800 text-white font-bold animate-pulse-glow" asChild>
            <Link href="/contact">Request Compliance Copies</Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}
