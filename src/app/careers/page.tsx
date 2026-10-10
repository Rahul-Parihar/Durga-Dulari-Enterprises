'use client';

import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
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
  MessageCircle,
  ShieldCheck,
  Award,
  Users,
  Zap,
  ChevronRight,
} from 'lucide-react';
import { WHATSAPP_NUMBER, COMPANY_NAME } from '@/lib/constants';
import { validateEmail } from '@/lib/validations';

const perks = [
  {
    icon: TrendingUp,
    badge: 'Growth Path',
    title: 'Rapid Career Growth',
    description: 'Work alongside senior textile mill veterans, master high-speed spinning & automation technologies, and step up into plant engineering roles.',
    highlight: 'Master LMW & Rieter Systems',
  },
  {
    icon: HeartHandshake,
    badge: 'Impact',
    title: 'Meaningful Industry Impact',
    description: 'Directly eliminate production bottlenecks for 150+ partner mills across India, preventing costly downtime and powering the textile supply chain.',
    highlight: '150+ Partner Spinning Mills',
  },
  {
    icon: Briefcase,
    badge: 'Benefits',
    title: 'Competitive Compensation & Perks',
    description: 'Market-leading salaries, guaranteed on-time statutory PF/ESI coverage, performance incentives, and travel allowances for field assignments.',
    highlight: '100% PF & ESIC Compliance',
  },
  {
    icon: Compass,
    badge: 'Exposure',
    title: 'PAN India Mill Exposure',
    description: 'Gain hands-on exposure to modern spinning machinery (LMW, Rieter, Schlafhorst, Murata) in Madhya Pradesh, Gujarat, Punjab, and Himachal clusters.',
    highlight: 'Multi-State Mill Clusters',
  },
];

const hiringSteps = [
  {
    step: '01',
    title: 'Submit Application',
    desc: 'Fill out our online form or message our HR desk with your trade & experience.',
  },
  {
    step: '02',
    title: 'Technical Discussion',
    desc: 'Quick phone or video evaluation with our senior textile maintenance team.',
  },
  {
    step: '03',
    title: 'Mill Alignment',
    desc: 'Matching your skills with the right plant location, shift timing, and machinery.',
  },
  {
    step: '04',
    title: 'Offer & Onboarding',
    desc: 'Formal appointment letter, immediate PF/ESI enrollment, and safety gear issuance.',
  },
];

const openPositions = [
  {
    id: 'fitter',
    title: 'Mechanical Maintenance Fitter',
    department: 'Plant Operations',
    location: 'Baddi (HP) / Mandideep (MP)',
    type: 'Full-time / Onsite',
    experience: '2–5 Years in Spinning/Weaving',
    machines: 'Ring Frame · Speed Frame · Blowroom',
    urgent: true,
  },
  {
    id: 'plc-engineer',
    title: 'Electrical & PLC Automation Engineer',
    department: 'Technical Services',
    location: 'Ludhiana / Coimbatore / Bhilwara',
    type: 'Full-time / Cluster-based',
    experience: '3–6 Years in Drives & Panels',
    machines: 'Siemens PLC · VFD Drives · LT Panels',
    urgent: true,
  },
  {
    id: 'supervisor',
    title: 'Spinning Mill Shift Supervisor',
    department: 'Manpower Management',
    location: 'Ahmedabad / Indore / Surat',
    type: 'Full-time / Rotational Shifts',
    experience: '4+ Years in Ring Frame/Carding',
    machines: 'Shift Productivity · Manpower Allocation',
    urgent: false,
  },
  {
    id: 'hr-executive',
    title: 'Statutory HR & Labor Compliance Executive',
    department: 'Administration',
    location: 'Central Office / Hybrid',
    type: 'Full-time',
    experience: '2–4 Years in Factory Compliance',
    machines: 'Factory Act · PF / ESI · Wage Code',
    urgent: false,
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedRoleNotice, setSelectedRoleNotice] = useState<string | null>(null);

  const handleSelectRole = (title: string) => {
    setFormData((prev) => ({ ...prev, position: title }));
    if (errors.position) {
      setErrors((prev) => ({ ...prev, position: '' }));
    }
    setSelectedRoleNotice(`Selected: ${title}`);
    const formElement = document.getElementById('apply-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handlePhoneChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: cleaned }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter at least 2 characters';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.position) {
      newErrors.position = 'Please select a position';
    }

    if (!formData.experience.trim()) {
      newErrors.experience = 'Please specify your relevant experience';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          position: formData.position || 'General Application',
          experience: formData.experience.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application.');
      }

      setSubmitted(true);
      setErrors({});
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
      });
    } catch (err: any) {
      console.error('Job application error:', err);
      setErrorMsg(err.message || 'Something went wrong while submitting. Please try again or apply via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppApply = () => {
    const text = encodeURIComponent(
      `Hello HR Team, I want to apply for a role at ${COMPANY_NAME}.\n` +
      `Name: ${formData.name || 'Candidate'}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Position: ${formData.position || 'Technical Maintenance'}\n` +
      `Experience: ${formData.experience || 'N/A'}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/70 dark:from-[#0B2545] dark:via-[#071b33] dark:to-[#040e1b] py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <div className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary-orange/5 dark:bg-primary-orange/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles size={14} />
              Join Our Technical Team
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-navy dark:text-white leading-[1.15]">
              Build Your Industrial Career with{' '}
              <span className="text-primary-orange">
                Durga Dulari
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
              We are actively hiring passionate fitters, electrical technicians, shift supervisors, and operations managers to support India&apos;s leading spinning and textile mills.
            </p>

            {/* Reassurance pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <ShieldCheck size={14} className="text-emerald-500" />
                100% PF & ESIC Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <Users size={14} className="text-primary-orange" />
                150+ Partner Textile Mills
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <Award size={14} className="text-blue-500" />
                20+ Years Domain Trust
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Build Your Career With Us */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary-orange font-bold text-xs uppercase tracking-widest block mb-2">
              Empowering Talent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Why Build Your Career With Us?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-2 font-medium">
              Join a dedicated industrial ecosystem with over 20+ years of textile domain expertise and guaranteed job security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {perks.map((perk, index) => {
              const IconComponent = perk.icon;
              return (
                <div
                  key={index}
                  className="group p-6 sm:p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-primary-orange/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <IconComponent size={24} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary-orange bg-primary-orange/10 px-2.5 py-1 rounded-lg">
                        {perk.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-primary-navy dark:text-white mb-2.5 tracking-tight">
                      {perk.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium mb-4">
                      {perk.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>{perk.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4-Step Hiring Process */}
      <section className="py-14 bg-slate-50/80 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 transition-colors duration-300">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-primary-orange font-bold text-xs uppercase tracking-widest block mb-1">
              Transparent Recruitment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Our 4-Step Hiring Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {hiringSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs relative"
              >
                <span className="text-2xl font-black text-primary-orange/30 dark:text-primary-orange/20 block mb-2 font-mono">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-primary-navy dark:text-white mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Job Openings */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container className="max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-primary-orange font-bold text-xs uppercase tracking-widest block mb-2">
                Available Roles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
                Featured Job Openings
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200/80 dark:border-emerald-800/80 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Actively Hiring for Mill Clusters
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="group p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-primary-orange/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary-orange bg-primary-orange/10 px-2.5 py-1 rounded-md">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-slate-700">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-primary-navy dark:text-white tracking-tight group-hover:text-primary-orange transition-colors duration-200">
                    {job.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin size={15} className="text-primary-orange shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-primary-orange shrink-0" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={15} className="text-primary-orange shrink-0" />
                      <span className="text-slate-500 dark:text-slate-400 font-semibold">{job.machines}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                  {job.urgent ? (
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded border border-red-200 dark:border-red-900/60">
                      Immediate Joining
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-slate-400">
                      Regular Shift
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => handleSelectRole(job.title)}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-primary-orange hover:text-orange-600 transition-colors uppercase tracking-wider group-hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    Apply For Position <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Direct Application Form */}
      <section id="apply-form" className="py-16 sm:py-20 bg-slate-50/70 dark:bg-slate-900/30 border-t border-slate-200/70 dark:border-slate-800/70 scroll-mt-20">
        <Container className="max-w-3xl">
          <div className="bg-white dark:bg-slate-900/90 rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 dark:border-slate-800 shadow-xl relative overflow-hidden transition-colors duration-300">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-navy via-primary-orange to-primary-navy" />

            <div className="text-center mb-8">
              <span className="text-primary-orange text-xs font-black uppercase tracking-widest block mb-2">
                Direct HR Application
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy dark:text-white tracking-tight">
                Submit Your Job Application
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 max-w-md mx-auto font-medium">
                Send your details directly to our hiring panel. We review profiles and contact qualified candidates within 48 hours.
              </p>

              {selectedRoleNotice && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-orange/10 border border-primary-orange/20 text-primary-orange text-xs font-bold animate-fadeIn">
                  <CheckCircle2 size={14} />
                  {selectedRoleNotice}
                </div>
              )}
            </div>

            {submitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 rounded-2xl p-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-extrabold text-primary-navy dark:text-white">
                  Application Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 dark:text-emerald-200 font-medium max-w-md mx-auto">
                  Your job application has been sent directly to our HR recruitment desk. Our hiring panel will review your profile and contact you within <strong>48 hours</strong>.
                </p>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-500 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 font-bold"
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedRoleNotice(null);
                    }}
                  >
                    Submit Another Application
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs font-semibold text-center">
                    {errorMsg}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    placeholder="e.g. Ramesh Sharma"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    error={errors.name}
                    required
                  />
                  <Input
                    label="Mobile Number (10 digits)"
                    type="tel"
                    placeholder="e.g. 9876543210"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    error={errors.phone}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="e.g. ramesh@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    error={errors.email}
                    required
                  />
                  <Select
                    label="Position Applied For"
                    value={formData.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    error={errors.position}
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
                  placeholder="e.g. 3 Years in Ring Frames / Speed Frames"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  error={errors.experience}
                  required
                />

                <Textarea
                  label="Brief Introduction / Current Mill (Optional)"
                  placeholder="Tell us about the spinning machines you have worked on (e.g. LMW LR6, Rieter K44) or your current plant location..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                  <Button
                    type="submit"
                    variant="primary"
                    loading={loading}
                    className="w-full h-12 sm:h-13 py-0 px-4 rounded-xl font-bold text-sm sm:text-base shadow-md flex items-center justify-center transition-all"
                  >
                    <Send size={18} className="mr-2 shrink-0" />
                    Submit Application to HR Desk
                  </Button>

                  <button
                    type="button"
                    onClick={handleWhatsAppApply}
                    className="w-full h-12 sm:h-13 px-4 rounded-xl border-2 border-emerald-500/50 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 active:scale-[0.98] transition-all shadow-md cursor-pointer"
                  >
                    <MessageCircle size={18} className="text-emerald-500 shrink-0" />
                    Apply via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
