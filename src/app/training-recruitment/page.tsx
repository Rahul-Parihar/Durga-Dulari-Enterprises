import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import type { Metadata } from 'next';
import { BookOpen, CheckCircle, GraduationCap, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Training & Recruitment | Durga Dulari School of Skills',
  description: 'Certified vocational training programs and direct recruitment pipeline services for textile professionals and spinning mills.',
};

const courses = [
  {
    title: 'Spinning Operator Training',
    description: 'Comprehensive, machine-floor training for modern spinning mills with hands-on practice on ring frames and autoconers.',
    duration: '4 weeks',
  },
  {
    title: 'Maintenance Fitter Training',
    description: 'Specialized mechanical training for alignment, drafting adjustments, card settings, and speed frame maintenance.',
    duration: '6 weeks',
  },
  {
    title: 'Electrical Fitter Training',
    description: 'Industrial electrical safety, control panel troubleshooting, motor rewinding, and PLC calibration training.',
    duration: '6 weeks',
  },
  {
    title: 'Utility Operator Training',
    description: 'Technical training for water filtration units, boiler operations, compressor maintenance, and safety compliance.',
    duration: '8 weeks',
  },
  {
    title: 'Garment Operator Training',
    description: 'High-speed industrial sewing machine operations, pattern reading, and QC checking for garment facilities.',
    duration: '4 weeks',
  },
];

export default function TrainingPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] to-[#040e1b] text-white py-20 relative overflow-hidden dark-industrial-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <Container>
          <span className="inline-block bg-primary-orange text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Durga Dulari School of Skills
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Vocational Excellence & Staffing</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium">Bridging the skill gap in India's textile sectors through hands-on technical training.</p>
        </Container>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-navy mb-4 tracking-tight">Our Training Programs</h2>
          <p className="text-center text-slate-600 mb-14 max-w-2xl mx-auto font-medium">
            Tailored vocational courses designed by floor engineers to deliver immediate floor efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course, idx) => (
              <Card key={idx} className="bg-white border border-slate-100 p-8 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary-orange/10 flex items-center justify-center text-primary-orange mb-6">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-xl font-extrabold text-primary-navy mb-3">{course.title}</h3>
                  <p className="text-slate-650 text-sm leading-relaxed mb-6 font-medium">{course.description}</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                  <span className="text-xs font-extrabold text-primary-orange bg-primary-orange/5 px-2.5 py-1 rounded-md">
                    Duration: {course.duration}
                  </span>
                  <Button variant="outline" size="sm" className="font-bold" asChild>
                    <Link href="/contact">Enroll Info</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Features Strip */}
          <div className="bg-[#0b2545] text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden dark-industrial-grid">
            <h3 className="text-2xl font-extrabold mb-8 text-center text-white">Why Train With Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-primary-orange flex-shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Experienced Instructors</h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed">Classes led by retired mill engineers with 20+ years of floor practice.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-primary-orange flex-shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Actual Machine Practice</h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed">No pure theory. Candidates spend 80% of class time practicing on actual floor equipment.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-primary-orange flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Assured Placements</h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed">Direct entry route into leading spinning and knitting facilities across India.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Hiring Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 industrial-grid">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-navy mb-4 tracking-tight">B2B Recruitment Solutions</h2>
          <p className="text-center text-slate-650 mb-14 max-w-2xl mx-auto font-medium">
            Connecting textile mill HR directors and management with certified, floor-ready workers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-extrabold text-primary-navy mb-4 tracking-tight">For Mill Recruitment</h3>
              <ul className="space-y-3.5 text-slate-600 mb-8 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>Pre-vetted, certified floor candidates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>Rapid replacement support within 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span><strong>95% retention rate</strong> guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>Full statutory compliance (PF, ESI, Labor Laws)</span>
                </li>
              </ul>
              <Button variant="secondary" className="w-full font-bold" asChild>
                <Link href="/contact">Request Workers</Link>
              </Button>
            </Card>

            <Card className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-extrabold text-primary-navy mb-4 tracking-tight">For Aspiring Candidates</h3>
              <ul className="space-y-3.5 text-slate-600 mb-8 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>Government-aligned curriculum certificates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>Free accommodation assistance during courses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>Direct job interview placement upon completion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span>Clean environment and professional floor settings</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full font-bold" asChild>
                <Link href="/contact">Apply for Training</Link>
              </Button>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
