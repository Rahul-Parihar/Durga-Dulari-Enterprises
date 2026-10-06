'use client';

import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import {
  TrendingUp,
  HeartHandshake,
  Briefcase,
  Compass,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  Send,
} from 'lucide-react';

const perks = [
  {
    icon: <TrendingUp className="w-6 h-6 text-primary-orange" />,
    title: 'Rapid Career Growth',
    description: 'Work alongside senior textile mill veterans, master high-speed spinning & automation technologies, and step up into plant engineering roles.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-primary-orange" />,
    title: 'Meaningful Industry Impact',
    description: 'Directly eliminate production bottlenecks for 150+ partner mills across India, preventing costly downtime and powering the supply chain.',
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary-orange" />,
    title: 'Competitive Compensation & Perks',
    description: 'Market-leading salaries, guaranteed on-time statutory PF/ESI coverage, performance incentives, and travel allowances for field assignments.',
  },
  {
    icon: <Compass className="w-6 h-6 text-primary-orange" />,
    title: 'PAN India Mill Exposure',
    description: 'Gain hands-on exposure to modern spinning machinery (LMW, Rieter, Schlafhorst, Murata) in Madhya Pradesh, Gujarat, Punjab, and Himachal clusters.',
  },
];

const openPositions = [
  {
    title: 'Mechanical Maintenance Fitter',
    department: 'Plant Operations',
    location: 'Baddi (HP) / Mandideep (MP)',
    type: 'Full-time / Onsite',
    experience: '2–5 Years in Spinning/Weaving',
  },
  {
    title: 'Electrical & PLC Automation Engineer',
    department: 'Technical Services',
    location: 'Ludhiana / Coimbatore / Bhilwara',
    type: 'Full-time / Cluster-based',
    experience: '3–6 Years in Drives & Panels',
  },
  {
    title: 'Spinning Mill Shift Supervisor',
    department: 'Manpower Management',
    location: 'Ahmedabad / Indore / Surat',
    type: 'Full-time / Rotational Shifts',
    experience: '4+ Years in Ring Frame/Carding',
  },
  {
    title: 'Statutory HR & Labor Compliance Executive',
    department: 'Administration',
    location: 'Central Office / Hybrid',
    type: 'Full-time',
    experience: '2–4 Years in Factory Compliance',
  },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailBody = [
      'Job Application for Durga Dulari Enterprises:',
      '',
      `Applicant Name: ${formData.name}`,
      `Email Address: ${formData.email}`,
      `Mobile Number: ${formData.phone}`,
      `Position Applied For: ${formData.position}`,
      `Years of Experience: ${formData.experience}`,
      `Cover Note: ${formData.message || 'N/A'}`,
    ].join('\n');

    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      tf: '1',
      to: 'info@durgadularienterprises.com',
      su: `Job Application: ${formData.position} - ${formData.name}`,
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#071b33] to-[#040e1b] text-white py-16 sm:py-20 relative overflow-hidden dark-industrial-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary-orange/20 border border-primary-orange/30 text-primary-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <Sparkles size={14} /> Join Our Technical Team
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
              Build Your Industrial Career with <span className="text-gradient-orange">Durga Dulari</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-medium leading-relaxed">
              We are actively hiring passionate fitters, electrical technicians, shift supervisors, and operations managers to support India's leading spinning and textile mills.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Join Us */}
      <section className="py-20 sm:py-24 bg-white dark:bg-slate-950">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary-orange font-bold text-xs uppercase tracking-widest mb-2">Empowering Talent</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white mb-4 tracking-tight">
              Why Build Your Career With Us?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Join a dedicated industrial ecosystem with over 20+ years of textile domain expertise and guaranteed job security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {perks.map((perk, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 hover:-translate-y-2 hover:border-primary-orange/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-orange/10 flex items-center justify-center mb-6 border border-primary-orange/20">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3">
                  {perk.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                  {perk.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-primary-orange font-bold text-xs uppercase tracking-widest mb-2">Available Roles</p>
                <h2 className="text-3xl font-extrabold text-primary-navy dark:text-white tracking-tight">
                  Featured Job Openings
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Hiring Urgently
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openPositions.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 hover:border-primary-orange/40 transition-all duration-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary-orange bg-primary-orange/10 px-2.5 py-1 rounded-md">
                        {job.department}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary-navy dark:text-white mt-2">
                      {job.title}
                    </h3>
                    <div className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-slate-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-slate-400" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#apply-form"
                    onClick={() => setFormData((prev) => ({ ...prev, position: job.title }))}
                    className="mt-6 inline-flex items-center justify-center gap-1 text-xs font-bold text-primary-orange hover:text-orange-600 transition-colors uppercase tracking-wider"
                  >
                    Apply For This Position →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div id="apply-form" className="max-w-3xl mx-auto scroll-mt-28">
            <div className="bg-[#041124] text-white rounded-3xl p-8 sm:p-12 border border-[#0d274c] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary-orange to-transparent" />
              
              <div className="text-center mb-8">
                <span className="text-primary-orange text-xs font-black uppercase tracking-widest block mb-2">
                  Direct HR Application
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Submit Your Job Application
                </h2>
                <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                  Send your resume and profile directly to our hiring panel. We respond to shortlisted candidates within 48 hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-950/60 border border-emerald-800 text-emerald-200 rounded-2xl p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Application Draft Prepared!</h3>
                  <p className="text-sm text-emerald-200">
                    Your email draft has been generated for <strong>info@durgadularienterprises.com</strong>. You can attach your resume document in the email window.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 border-emerald-400 text-emerald-300 hover:bg-emerald-900/50"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      label="Mobile Number (10 digits)"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="e.g. ramesh@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <Select
                      label="Position Applied For"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      required
                      options={[
                        { value: '', label: 'Select a position' },
                        { value: 'Mechanical Maintenance Fitter', label: 'Mechanical Maintenance Fitter' },
                        { value: 'Electrical & PLC Automation Engineer', label: 'Electrical & PLC Automation Engineer' },
                        { value: 'Spinning Mill Shift Supervisor', label: 'Spinning Mill Shift Supervisor' },
                        { value: 'Statutory HR & Labor Compliance Executive', label: 'Statutory HR & Labor Compliance Executive' },
                        { value: 'Machine Operator / Floor Trainee', label: 'Machine Operator / Floor Trainee' },
                        { value: 'Other Technical Profile', label: 'Other Technical Profile' },
                      ]}
                    />
                  </div>

                  <Input
                    label="Relevant Experience (Years)"
                    placeholder="e.g. 3 Years in Ring Frames"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    required
                  />

                  <Textarea
                    label="Brief Introduction / Current Mill (Optional)"
                    placeholder="Tell us about the spinning machines you have worked on or your current location..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    fullWidth
                    loading={loading}
                    className="mt-6 font-bold shadow-lg"
                  >
                    <Send size={16} className="mr-2" />
                    Submit Application to HR Desk
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
