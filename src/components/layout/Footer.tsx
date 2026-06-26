'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/common/Button';
import { Toast } from '@/components/ui/Toast';
import { footerLinks } from '@/data/navigation';
import { PHONE_NUMBER, WHATSAPP_NUMBER, EMAIL, COMPANY_NAME } from '@/lib/constants';
import { validateIndianPhone } from '@/lib/validations';

const callbackRecipientEmail = 'anandcoder0@gmail.com';

export function Footer() {
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!callbackForm.name.trim()) newErrors.name = 'Name is required';
    if (!validateIndianPhone(callbackForm.phone)) {
      newErrors.phone = 'Valid phone number required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const params = new URLSearchParams({
        view: 'cm',
        fs: '1',
        tf: '1',
        to: callbackRecipientEmail,
        su: `Callback Request from ${callbackForm.name}`,
        body: [
          'New callback request received from Durga Dulari Enterprises website:',
          '',
          `Name: ${callbackForm.name}`,
          `Phone Number: ${callbackForm.phone}`,
          `Message: ${callbackForm.message.trim() || 'Not provided'}`,
        ].join('\n'),
      });

      window.open(`https://mail.google.com/mail/u/0/?${params.toString()}`, '_blank', 'noopener,noreferrer');

      setSubmitted(true);
      setShowToast(true);
      setCallbackForm({ name: '', phone: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-primary-navy text-white">
      {/* Main Footer */}
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white dark:text-white">{COMPANY_NAME}</h3>
            <p className="text-gray-300 mb-4">
              Premier provider of textile manpower, maintenance solutions, and industrial automation across India.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary-orange transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href={`mailto:${EMAIL}`} className="hover:text-primary-orange transition-colors">
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300">Pan India Operations</span>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-orange px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:border-primary-orange hover:text-primary-orange"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-white">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Request Callback */}
          <div id="request-callback" className="scroll-mt-28">
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-white">Request Callback</h4>
            {submitted ? (
              <div className="bg-green-600 text-white p-4 rounded text-center">
                <p className="font-semibold">Thank you!</p>
                <p className="text-sm">Your email draft is ready.</p>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-3">
                <Input
                  placeholder="Your Name"
                  value={callbackForm.name}
                  onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                  error={errors.name}
                  className="bg-gray-100 text-neutral-text placeholder-gray-500"
                />
                <Input
                  placeholder="Phone Number"
                  value={callbackForm.phone}
                  onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                  error={errors.phone}
                  className="bg-gray-100 text-neutral-text placeholder-gray-500"
                />
                <Textarea
                  placeholder="Message"
                  value={callbackForm.message}
                  onChange={(e) => setCallbackForm({ ...callbackForm, message: e.target.value })}
                  rows={3}
                  className="bg-gray-100 text-neutral-text placeholder-gray-500"
                />
                <Button type="submit" variant="secondary" size="sm" fullWidth>
                  Request Callback
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700" />

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {showToast && (
        <Toast
          type="success"
          message="Callback email draft is ready. Please press Send in Gmail."
          onClose={() => setShowToast(false)}
          autoClose
          duration={4000}
        />
      )}
    </footer>
  );
}
