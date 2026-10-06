'use client';

import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Send,
  Wrench,
  Cpu,
  Truck,
  Layers,
} from 'lucide-react';

const vendorCategories = [
  {
    icon: <Wrench className="w-6 h-6 text-primary-orange" />,
    title: 'Textile Spares & Fitments',
    desc: 'Spindles, rings, cots, aprons, bearings, carding wires, and drafting components.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary-orange" />,
    title: 'Electrical & Drive Automation',
    desc: 'VFD drives, PLCs, industrial sensors, cables, contactors, and switchgear supplies.',
  },
  {
    icon: <Truck className="w-6 h-6 text-primary-orange" />,
    title: 'Machinery Logistics & Rigging',
    desc: 'Heavy industrial cranes, transport trailers, hydraulic jacks, and relocation rigging.',
  },
  {
    icon: <Layers className="w-6 h-6 text-primary-orange" />,
    title: 'Specialized Industrial Consumables',
    desc: 'Lubricants, spindle oils, boiler chemicals, safety PPE gear, and filtration media.',
  },
];

export default function VendorRegistrationPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    designation: '',
    mobile: '',
    email: '',
    gstNumber: '',
    category: '',
    locations: '',
    services: '',
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailBody = [
      'Vendor Onboarding Registration - Durga Dulari Enterprises:',
      '',
      `Company Name: ${formData.companyName}`,
      `Contact Person: ${formData.contactPerson} (${formData.designation})`,
      `Mobile Number: ${formData.mobile}`,
      `Email Address: ${formData.email}`,
      `GST Number: ${formData.gstNumber || 'Not provided / Applied for'}`,
      `Category: ${formData.category}`,
      `Locations Covered: ${formData.locations}`,
      `Products / Services Summary:`,
      formData.services,
    ].join('\n');

    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      tf: '1',
      to: 'info@durgadularienterprises.com',
      su: `Vendor Registration: ${formData.companyName} - ${formData.category}`,
      body: emailBody,
    });

    window.open(`https://mail.google.com/mail/u/0/?${params.toString()}`, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#071b33] to-[#040e1b] text-white py-16 sm:py-20 relative overflow-hidden dark-industrial-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary-orange/20 border border-primary-orange/30 text-primary-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <Sparkles size={14} /> Partner Ecosystem
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Vendor & Contractor <span className="text-gradient-orange">Onboarding</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-medium leading-relaxed">
              Register as an approved supply or contracting partner. We regularly procure spare parts, machinery rigging, and electrical spares for 150+ textile clients across India.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-20 sm:py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-primary-orange font-bold text-xs uppercase tracking-widest mb-2">Procurement Scope</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white mb-4 tracking-tight">
              Supplies & Services We Frequently Procure
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We work with verified suppliers on long-term procurement contracts with guaranteed prompt payment schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {vendorCategories.map((cat, idx) => (
              <Card
                key={idx}
                className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 hover:-translate-y-2 hover:border-primary-orange/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-orange/10 flex items-center justify-center mb-5 border border-primary-orange/20">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2 leading-tight">
                  {cat.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  {cat.desc}
                </p>
              </Card>
            ))}
          </div>

          {/* Form and Verification Checklist */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
            {/* Checklist */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={24} className="text-primary-orange" />
                  <h3 className="text-lg font-bold text-primary-navy dark:text-white">
                    Vendor Requirements
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  To ensure smooth statutory audit clearance for our client spinning mills, vendors must meet basic requirements:
                </p>
                <div className="space-y-3.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>Active GSTIN Registration (Monthly return filed)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>MSME / Udyam Certificate (Preferred for credit terms)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>Quality warranty on mechanical/electrical components</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>Delivery reliability for emergency breakdown spares</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-8">
              <div className="bg-[#041124] text-white rounded-3xl p-8 sm:p-12 border border-[#0d274c] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary-orange to-transparent" />
                
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Vendor Registration Form
                  </h2>
                  <p className="text-slate-300 text-sm mt-2">
                    Submit your organization details to enter our procurement database.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-emerald-950/60 border border-emerald-800 text-emerald-200 rounded-2xl p-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Vendor Form Prepared!</h3>
                    <p className="text-sm text-emerald-200">
                      Your vendor registration information draft has been prepared for <strong>info@durgadularienterprises.com</strong>.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 border-emerald-400 text-emerald-300 hover:bg-emerald-900/50"
                      onClick={() => setSubmitted(false)}
                    >
                      Register Another Entity
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                      label="Company / Enterprise Name"
                      placeholder="e.g. Paramount Textile Spares Pvt Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Contact Person Name"
                        placeholder="e.g. Ankit Verma"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        required
                      />
                      <Input
                        label="Designation"
                        placeholder="e.g. Sales Director / Partner"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Mobile Number (10 digits)"
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        required
                      />
                      <Input
                        label="Official Email Address"
                        type="email"
                        placeholder="e.g. sales@paramountspares.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="GST Number (15 digits)"
                        placeholder="e.g. 23AAAAA0000A1Z5"
                        value={formData.gstNumber}
                        onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value.toUpperCase() })}
                      />
                      <Select
                        label="Primary Supply Category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                        options={[
                          { value: '', label: 'Select your primary category' },
                          { value: 'Textile Spares & Components', label: 'Textile Spares & Components' },
                          { value: 'Electrical, Drives & Automation', label: 'Electrical, Drives & Automation' },
                          { value: 'Machinery Rigging & Crane Logistics', label: 'Machinery Rigging & Crane Logistics' },
                          { value: 'Industrial Lubricants & Consumables', label: 'Industrial Lubricants & Consumables' },
                          { value: 'Plant Erection Tools & Hardware', label: 'Plant Erection Tools & Hardware' },
                          { value: 'Other Specialized Supply', label: 'Other Specialized Supply' },
                        ]}
                      />
                    </div>

                    <Input
                      label="Service Locations / State Coverage"
                      placeholder="e.g. Madhya Pradesh, Gujarat, Tamil Nadu, Punjab"
                      value={formData.locations}
                      onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
                      required
                    />

                    <Textarea
                      label="Brief Product Catalog / Capability Details"
                      placeholder="Specify makes supplied, warehouse locations, and delivery turnaround capabilities..."
                      rows={3}
                      value={formData.services}
                      onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                      required
                    />

                    <div className="flex items-start gap-3 pt-2">
                      <input
                        id="agree"
                        type="checkbox"
                        checked={formData.agree}
                        onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-primary-orange focus:ring-primary-orange cursor-pointer"
                        required
                      />
                      <label htmlFor="agree" className="text-xs text-slate-300 cursor-pointer">
                        I confirm that the statutory details provided are accurate and authorize Durga Dulari Enterprises to contact us for supplier verification and RFQ submissions.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      fullWidth
                      loading={loading}
                      className="mt-6 font-bold shadow-lg"
                    >
                      <Send size={16} className="mr-2" />
                      Submit Vendor Registration
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
