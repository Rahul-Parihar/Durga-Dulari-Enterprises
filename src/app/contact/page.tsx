import React from 'react';
import { Container } from '@/components/common/Container';
import { LeadForm } from '@/components/forms/LeadForm';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, EMAIL, BUSINESS_HOURS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Durga Dulari Enterprises',
  description:
    'Get in touch with our team for manpower requirements, maintenance services, or custom solutions.',
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ requirement?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const defaultRequirement = resolvedSearchParams?.requirement;

  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300 text-slate-900 dark:text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/70 dark:from-[#0B2545] dark:via-[#071b33] dark:to-[#040e1b] py-12 md:py-16 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <div
          className="absolute inset-0 industrial-grid dark:dark-industrial-grid opacity-25 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/5 dark:bg-primary-orange/10 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />
        <Container className="text-center relative z-10">
          <span className="inline-block bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/25 dark:border-primary-orange/30 text-primary-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            Contact Channels
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight text-primary-navy dark:text-white">
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Available 24×7 for your urgent requirements.
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-navy dark:text-white mb-1.5 tracking-tight">
                  Quick Contact
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold mb-6">
                  Reach our technical desk directly.
                </p>
              </div>

              <div className="bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 rounded-3xl shadow-sm space-y-6 transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/20 flex items-center justify-center text-primary-orange shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-navy dark:text-white text-xs uppercase tracking-wider">
                      Call Us
                    </p>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="text-primary-orange hover:underline text-lg font-bold block mt-1 transition-colors"
                    >
                      {PHONE_NUMBER}
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">
                      24×7 Urgent Operations Support
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/20 flex items-center justify-center text-primary-orange shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-navy dark:text-white text-xs uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-slate-700 dark:text-slate-300 hover:text-primary-orange hover:underline font-bold text-sm block mt-1 transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/20 flex items-center justify-center text-primary-orange shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-navy dark:text-white text-xs uppercase tracking-wider">
                      Service Area
                    </p>
                    <p className="text-slate-800 dark:text-slate-200 font-bold text-sm mt-1">
                      PAN India Operations
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 font-semibold text-xs mt-1.5 leading-relaxed">
                      Madhya Pradesh · Himachal Pradesh · Punjab · Gujarat
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium leading-relaxed">
                      Multiple support centers across Coimbatore, Ludhiana, &amp; Tirupur.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/20 flex items-center justify-center text-primary-orange shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-navy dark:text-white text-xs uppercase tracking-wider">
                      Business Hours
                    </p>
                    <p className="text-slate-800 dark:text-slate-200 font-bold text-sm mt-1">
                      {BUSINESS_HOURS.weekday}
                    </p>
                    <p className="text-xs text-primary-orange font-bold mt-1">
                      {BUSINESS_HOURS.support}
                    </p>
                  </div>
                </div>
              </div>

              {/* Prefer Direct Chat right below Business Hours */}
              <div className="p-6 rounded-3xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/80 shadow-xs space-y-3.5 transition-all duration-300">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <h3 className="text-base font-extrabold text-primary-navy dark:text-white tracking-tight">
                    Prefer Direct Chat?
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                  Skip the form entirely and initiate a direct technical chat with our support manager.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-sm hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MessageCircle size={17} />
                  Open WhatsApp Live Chat
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300">
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-navy dark:text-white mb-1.5 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-semibold mb-6 text-sm">
                  We typically respond within <strong>2 hours</strong> during business shifts.
                </p>
                <LeadForm
                  submitButtonText="Submit Inquiry"
                  defaultRequirement={defaultRequirement}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
