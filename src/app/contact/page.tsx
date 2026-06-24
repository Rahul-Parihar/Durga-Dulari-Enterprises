import React from 'react';
import { Container } from '@/components/common/Container';
import { LeadForm } from '@/components/forms/LeadForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, BUSINESS_HOURS } from '@/lib/constants';
import type { Metadata } from 'next';
import { Card } from '@/components/common/Card';

export const metadata: Metadata = {
  title: 'Contact Us | Durga Dulari Enterprises',
  description: 'Get in touch with our team for manpower requirements, maintenance services, or custom solutions.',
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] to-[#040e1b] text-white py-20 relative overflow-hidden dark-industrial-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <Container>
          <span className="inline-block bg-primary-orange text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Contact Channels
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Get In Touch</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium">Available 24×7 for your urgent requirements.</p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-primary-navy mb-2 tracking-tight">Quick Contact</h2>
              <p className="text-slate-500 text-sm font-semibold mb-8">Reach our technical desk directly.</p>

              <Card className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-orange/10 flex items-center justify-center text-primary-orange flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-navy text-sm uppercase tracking-wide">Call Us</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-primary-orange hover:underline text-lg font-bold block mt-1">
                      {PHONE_NUMBER}
                    </a>
                    <p className="text-xs text-slate-500 font-semibold mt-1">24×7 Urgent Operations Support</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-55">
                  <div className="w-10 h-10 rounded-lg bg-primary-orange/10 flex items-center justify-center text-primary-orange flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-navy text-sm uppercase tracking-wide">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-slate-700 hover:text-primary-orange hover:underline font-bold text-sm block mt-1">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-55">
                  <div className="w-10 h-10 rounded-lg bg-primary-orange/10 flex items-center justify-center text-primary-orange flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-navy text-sm uppercase tracking-wide">Service Area</p>
                    <p className="text-slate-700 font-bold text-sm mt-1">PAN India Operations</p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Multiple support centers across Coimbatore, Ludhiana, & Tirupur.</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-55">
                  <div className="w-10 h-10 rounded-lg bg-primary-orange/10 flex items-center justify-center text-primary-orange flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-navy text-sm uppercase tracking-wide">Business Hours</p>
                    <p className="text-slate-700 font-bold text-sm mt-1">{BUSINESS_HOURS.weekday}</p>
                    <p className="text-xs text-primary-orange font-bold mt-1">{BUSINESS_HOURS.support}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm">
                <h2 className="text-3xl font-extrabold text-primary-navy mb-2 tracking-tight">Send Us a Message</h2>
                <p className="text-slate-500 font-semibold mb-8">We typically respond within <strong>2 hours</strong> during business shifts.</p>
                <LeadForm submitButtonText="Submit Inquiry" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-green-50/50 border-t border-green-100">
        <Container className="text-center space-y-4">
          <span className="relative flex h-3 w-3 mx-auto">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <h2 className="text-3xl font-extrabold text-primary-navy tracking-tight">Prefer Direct Chat?</h2>
          <p className="text-slate-655 font-medium max-w-md mx-auto">Skip the form entirely and initiate a direct technical chat with our support manager.</p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-500 text-white font-extrabold rounded-xl hover:bg-green-600 transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Open WhatsApp Live Chat
          </a>
        </Container>
      </section>
    </main>
  );
}
