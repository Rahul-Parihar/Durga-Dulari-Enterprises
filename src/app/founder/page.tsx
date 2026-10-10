import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import type { Metadata } from 'next';
import {
  Mail,
  Award,
  Users,
  CheckCircle2,
  Quote,
  Handshake,
  Target,
  Rocket,
  Sparkles,
  Factory,
  Calendar,
  MessageCircle,
  ArrowRight,
  Building,
} from 'lucide-react';
import { EMAIL, PHONE_NUMBER, COMPANY_NAME, WHATSAPP_NUMBER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Founder - Vijay Kumar Ojha | Durga Dulari Enterprises',
  description: 'Meet Vijay Kumar Ojha, founder and MD of Durga Dulari Enterprises — bringing 20+ years of hands-on textile mill operations and industrial maintenance leadership.',
};

const expertiseAreas = [
  'Textile mill operations and productivity audit',
  'Pan-India manpower recruitment & compliance',
  'Mechanical & Electrical preventive AMC setups',
  'Textile machinery installation & trial runs',
  'Legacy mill electronics & automation retrofitting',
  'Sick mill revival under NCLT-approved parameters',
];

const philosophies = [
  {
    icon: Handshake,
    title: 'Partnership',
    tag: 'Long-Term Trust',
    description: 'Long-term relationships built on strict SLA compliance, statutory transparency, and absolute operational trust with mill owners.',
  },
  {
    icon: Target,
    title: 'Excellence',
    tag: 'Rigorous Quality',
    description: 'Every fitter and technician undergoes pre-vetting and machinery training at our School of Skills before stepping onto client mill floors.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    tag: 'Modern Engineering',
    description: 'Integrating electronic retrofitting, PLC automation dashboards, and remote MTBF diagnostics for legacy mechanical spinning units.',
  },
];

export default function FounderPage() {
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
              Leadership Vision
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-navy dark:text-white leading-[1.15]">
              Vijay Kumar <span className="text-primary-orange">Ojha</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
              Founder & Managing Director of {COMPANY_NAME} — pioneering industrial manpower, mechanical maintenance, and spinning mill solutions across India.
            </p>

            {/* Credibility Chips */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <Award size={14} className="text-primary-orange" />
                20+ Years Floor Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <Users size={14} className="text-emerald-500" />
                10,000+ Workers Directed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <Building size={14} className="text-blue-500" />
                150+ Partner Mills
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Profile & Executive Story */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Visual MD Profile Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 p-7 sm:p-8 rounded-3xl text-center shadow-lg transition-colors duration-300">
                <div className="w-36 h-36 rounded-2xl mx-auto mb-6 overflow-hidden shadow-md relative bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/images/founder-thumb.webp"
                    alt="Vijay Kumar Ojha - Founder & MD"
                    fill
                    className="object-cover object-top"
                    sizes="144px"
                    priority
                  />
                </div>

                <h3 className="text-2xl font-extrabold text-primary-navy dark:text-white tracking-tight">
                  Vijay Kumar Ojha
                </h3>
                <span className="inline-block text-primary-orange font-bold text-xs uppercase tracking-wider mt-1 px-3 py-0.5 rounded-full bg-primary-orange/10 border border-primary-orange/20">
                  Founder & Managing Director
                </span>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3.5 text-left text-sm font-semibold">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-8 h-8 rounded-lg bg-primary-orange/10 flex items-center justify-center text-primary-orange shrink-0">
                      <Award size={16} />
                    </div>
                    <span>20+ Years Floor Experience</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-8 h-8 rounded-lg bg-primary-orange/10 flex items-center justify-center text-primary-orange shrink-0">
                      <Users size={16} />
                    </div>
                    <span>10K+ Workers Directed</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-8 h-8 rounded-lg bg-primary-orange/10 flex items-center justify-center text-primary-orange shrink-0">
                      <Factory size={16} />
                    </div>
                    <span>150+ Spinning & Weaving Mills</span>
                  </div>
                </div>

                {/* Direct Connect Buttons */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
                  <a
                    href={`mailto:${EMAIL}?subject=Executive Inquiry for MD Desk - Durga Dulari Enterprises`}
                    className="flex items-center justify-center gap-2 bg-primary-orange hover:bg-orange-600 text-white font-bold text-xs py-3 rounded-xl transition-all duration-200 shadow-sm"
                  >
                    <Mail size={15} /> Contact MD Desk
                  </a>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Vijay ji, I would like to schedule an executive consultation regarding textile mill operations with Durga Dulari Enterprises.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs py-2.5 rounded-xl transition-all duration-200 border border-emerald-500/30"
                  >
                    <MessageCircle size={15} className="text-emerald-500" /> Direct WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Content Profile Column */}
            <div className="lg:col-span-8 space-y-10">

              {/* Executive Quote Card */}
              <div className="bg-gradient-to-br from-orange-50/40 via-white to-slate-50 dark:from-[#0B2545]/40 dark:via-slate-900 dark:to-[#071b33] border border-primary-orange/20 dark:border-slate-800 rounded-3xl p-7 sm:p-10 relative overflow-hidden shadow-sm">
                <Quote className="absolute top-4 right-4 w-16 h-16 text-primary-orange/15 dark:text-primary-orange/10 pointer-events-none" />
                <p className="text-slate-800 dark:text-slate-100 text-lg md:text-xl italic font-medium leading-relaxed relative z-10">
                  &ldquo;Our mission is simple: to make sure Indian spinning mills never run below peak capacity due to operator shortages or electrical-mechanical breakdowns. We don&apos;t just supply manpower; we guarantee compliance and operational reliability.&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-orange">
                    Vijay Kumar Ojha
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    Managing Director
                  </span>
                </div>
              </div>

              {/* Professional Background */}
              <div>
                <span className="text-primary-orange font-bold text-xs uppercase tracking-widest block mb-1">
                  Proven Track Record
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy dark:text-white tracking-tight mb-3">
                  Professional Background
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium text-sm sm:text-base">
                  With over <strong className="text-primary-navy dark:text-white font-bold">20+ years</strong> of boots-on-the-ground experience across Indian textile hubs, Vijay Kumar Ojha has built direct leadership in:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {expertiseAreas.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80 flex items-start gap-3 hover:border-primary-orange/30 transition-colors duration-200"
                    >
                      <CheckCircle2 className="text-primary-orange flex-shrink-0 mt-0.5" size={17} />
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision for Durga Dulari */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800">
                <span className="text-primary-orange font-bold text-xs uppercase tracking-widest block mb-1">
                  Origin Story
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy dark:text-white tracking-tight mb-3">
                  Vision for Durga Dulari
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-sm sm:text-base">
                  Having spent decades on production floors across MP, Gujarat, and Punjab, Vijay recognized that mills faced recurring structural gaps: high temporary worker attrition, unqualified local electricians, and delays in critical spares. {COMPANY_NAME} was founded to resolve this by providing a single point of operational accountability — combining certified technical manpower with AMC maintenance and fast parts procurement.
                </p>
              </div>

              {/* MD Milestone Report */}
              <div className="bg-gradient-to-br from-[#0B2545] via-[#071b33] to-[#040e1b] text-white rounded-3xl p-7 sm:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-xl border border-slate-800">
                <div className="space-y-1.5">
                  <span className="text-primary-orange text-xs font-black uppercase tracking-widest block">
                    Leadership Milestones
                  </span>
                  <h4 className="font-extrabold text-xl text-white tracking-tight">
                    MD Milestone Report
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-lg">
                    Under his direction, the agency has expanded to service <strong className="text-white">150+ mills</strong>, deploy <strong className="text-white">10,000+ skilled workers</strong>, and successfully commission <strong className="text-white">120+ major industrial projects</strong> across India.
                  </p>
                </div>
                <Button variant="secondary" size="md" className="font-bold shrink-0 shadow-md" asChild>
                  <Link href="/contact" className="inline-flex items-center gap-1.5">
                    Schedule Consultation <ArrowRight size={15} />
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* Core Philosophies Section */}
      <section className="py-16 sm:py-24 bg-slate-50/80 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary-orange font-bold text-xs uppercase tracking-widest block mb-2">
              Values in Action
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight">
              Core Philosophies
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-2 font-medium">
              The foundational principles that guide every client partnership, technical contract, and manpower deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {philosophies.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-primary-orange/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-primary-orange/10 dark:bg-primary-orange/20 border border-primary-orange/20 dark:border-primary-orange/30 text-primary-orange flex items-center justify-center shrink-0">
                        <IconComp size={24} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-primary-orange bg-primary-orange/10 px-2.5 py-1 rounded-md">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-primary-navy dark:text-white mb-2.5 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Meeting Request CTA */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <Container className="max-w-4xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B2545] via-[#071b33] to-[#040e1b] text-white shadow-2xl border border-slate-800 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary-orange to-transparent" />
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-orange/20 border border-primary-orange/30 flex items-center justify-center text-primary-orange mx-auto mb-2">
                <Calendar size={28} />
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Request a Meeting with the MD
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                For large-scale mill turnarounds, NCLT revivals, multi-unit manpower contracts, or turnkey spinning machinery projects, schedule a confidential discussion directly with Vijay Kumar Ojha.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto font-bold shadow-lg"
                  asChild
                >
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Request Appointment <ArrowRight size={16} />
                  </Link>
                </Button>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Vijay ji, I would like to request an executive appointment regarding a textile mill project with ${COMPANY_NAME}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle size={16} className="text-emerald-400" />
                  Connect on WhatsApp
                </a>
              </div>

              <p className="text-xs text-slate-400 pt-2 font-medium">
                Executive Desk: <a href={`tel:${PHONE_NUMBER}`} className="text-primary-orange hover:underline font-bold">{PHONE_NUMBER}</a> · <a href={`mailto:${EMAIL}`} className="text-primary-orange hover:underline font-bold">{EMAIL}</a>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
