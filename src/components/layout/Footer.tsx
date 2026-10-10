'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUp,
  ChevronRight,
  Send,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/common/Button';
import { Toast } from '@/components/ui/Toast';
import { footerLinks } from '@/data/navigation';
import { PHONE_NUMBER, EMAIL, COMPANY_NAME, BUSINESS_HOURS } from '@/lib/constants';
import { validateIndianPhone } from '@/lib/validations';

export function Footer() {
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setCallbackForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handlePhoneChange = (value: string) => {
    let val = value.replace(/\D/g, '');
    if (val.length === 12 && val.startsWith('91')) {
      val = val.slice(2);
    }
    val = val.slice(0, 10);
    setCallbackForm((prev) => ({ ...prev, phone: val }));
    if (errors.phone && val.length === 10 && /^[6-9]/.test(val)) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!callbackForm.name.trim()) newErrors.name = 'Name is required';
    if (!callbackForm.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (callbackForm.phone.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    } else if (!validateIndianPhone(callbackForm.phone)) {
      newErrors.phone = 'Valid 10-digit mobile required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: callbackForm.name.trim(),
            company: 'Callback Request',
            mobile: callbackForm.phone.trim(),
            email: `${callbackForm.phone.trim()}@callback.durgadulari.com`,
            location: 'Not specified',
            requirement: 'Callback Request',
            details: callbackForm.message.trim() || 'Callback requested from footer form.',
            consent: true,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to send callback request');
        }

        setSubmitted(true);
        setShowToast(true);
        setCallbackForm({ name: '', phone: '', message: '' });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } catch (err) {
        console.error('Callback submission error:', err);
        setShowToast(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051428] text-slate-200 relative overflow-hidden border-t border-slate-800">
      {/* Ambient background glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />


      {/* Main Footer Content */}
      <Container className="pt-6 sm:pt-8 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Contact Info (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-orange to-amber-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
                DD
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight leading-none block group-hover:text-primary-orange transition-colors">
                  Durga Dulari
                </span>
                <span className="text-[10px] text-primary-orange font-bold tracking-[0.25em] uppercase block mt-1">
                  Enterprises
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Premier industrial provider of skilled textile manpower, mechanical maintenance crews, electrical automation, and statutory labor operations across Indian textile clusters.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-primary-orange">
                  <Phone size={14} />
                </div>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hover:text-primary-orange transition-colors font-semibold"
                >
                  {PHONE_NUMBER}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-primary-orange">
                  <Mail size={14} />
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-primary-orange transition-colors font-medium text-slate-300"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-primary-orange mt-0.5">
                  <MapPin size={14} />
                </div>
                <span className="text-slate-400 font-medium">
                  Pan-India Mill Clusters (MP, Gujarat, Punjab, HP)
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-primary-orange mt-0.5">
                  <Clock size={14} />
                </div>
                <span className="text-slate-400 font-medium">
                  {BUSINESS_HOURS.weekday} · <span className="text-emerald-400 font-semibold">{BUSINESS_HOURS.support}</span>
                </span>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold">
              <span className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/70 text-slate-300">
                EPFO Active
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/70 text-slate-300">
                ESIC Covered
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/70 text-slate-300">
                GSTIN Verified
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/70 text-slate-300">
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Services Links (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-orange" />
              Core Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors py-1"
                  >
                    <ChevronRight
                      size={13}
                      className="text-slate-600 group-hover:text-primary-orange group-hover:translate-x-1 transition-all shrink-0"
                    />
                    <span className="group-hover:text-primary-orange transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-orange" />
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors py-1"
                  >
                    <ChevronRight
                      size={13}
                      className="text-slate-600 group-hover:text-primary-orange group-hover:translate-x-1 transition-all shrink-0"
                    />
                    <span className="group-hover:text-primary-orange transition-colors">
                      {link.label}
                    </span>
                    {link.label === 'Careers' && (
                      <span className="ml-1 text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary-orange text-white">
                        Hiring
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/case-studies"
                  className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors py-1"
                >
                  <ChevronRight
                    size={13}
                    className="text-slate-600 group-hover:text-primary-orange group-hover:translate-x-1 transition-all shrink-0"
                  />
                  <span className="group-hover:text-primary-orange transition-colors">
                    Case Studies
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors py-1"
                >
                  <ChevronRight
                    size={13}
                    className="text-slate-600 group-hover:text-primary-orange group-hover:translate-x-1 transition-all shrink-0"
                  />
                  <span className="group-hover:text-primary-orange transition-colors">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Request Callback Card (lg:col-span-3) */}
          <div id="request-callback" className="lg:col-span-3 scroll-mt-28">
            <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/95 to-[#08182D] border border-slate-700/80 shadow-2xl relative">
              <div className="mb-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    Quick Response
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-orange shrink-0" />
                  Request Callback
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium pt-0.5">
                  Need skilled mill workers or emergency maintenance? Submit your number for a prompt callback.
                </p>
              </div>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2 animate-fadeIn">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={20} />
                  </div>
                  <h5 className="text-sm font-bold text-white">Callback Request Sent!</h5>
                  <p className="text-xs text-emerald-300 font-medium">
                    Our technical manager will contact your phone shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} noValidate className="space-y-2.5">
                  <Input
                    placeholder="Your Name"
                    value={callbackForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    error={errors.name}
                    className="!bg-[#040e1c] !text-white !border-slate-700/90 placeholder:!text-slate-400 focus:!border-primary-orange focus:!ring-orange-500/20 text-xs sm:text-sm h-10 py-2"
                  />
                  <Input
                    placeholder="Phone Number (10 digits)"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={callbackForm.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    error={errors.phone}
                    className="!bg-[#040e1c] !text-white !border-slate-700/90 placeholder:!text-slate-400 focus:!border-primary-orange focus:!ring-orange-500/20 text-xs sm:text-sm h-10 py-2"
                  />
                  <Textarea
                    placeholder="Message / Requirement (optional)"
                    value={callbackForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={2}
                    className="!bg-[#040e1c] !text-white !border-slate-700/90 placeholder:!text-slate-400 focus:!border-primary-orange focus:!ring-orange-500/20 text-xs sm:text-sm py-2 resize-none"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    size="sm"
                    fullWidth
                    loading={isLoading}
                    className="h-10 font-bold shadow-md hover:shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                  >
                    <Send size={14} />
                    <span>Request Callback</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-5 mt-6 sm:mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p className="text-center md:text-left font-medium">
              &copy; {new Date().getFullYear()}{' '}
              <strong className="text-white font-semibold">{COMPANY_NAME}</strong>. All rights reserved. Registered under MSME &amp; Contract Labour (R&amp;A) Act.
            </p>

            <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary-orange transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}

              {/* Back to top button */}
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700/60 transition-colors font-bold cursor-pointer"
                title="Back to Top"
                aria-label="Back to top"
              >
                <ArrowUp size={13} />
                <span>Top</span>
              </button>
            </div>
          </div>
        </div>
      </Container>

      {showToast && (
        <Toast
          type="success"
          message="Callback request received! Our technical team will call you shortly."
          onClose={() => setShowToast(false)}
          autoClose
          duration={4000}
        />
      )}
    </footer>
  );
}
