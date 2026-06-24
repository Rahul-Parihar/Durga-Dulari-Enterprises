import React from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Durga Dulari Enterprises',
  description: 'Join our team and make an impact in the textile industry.',
};

export default function CareersPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-primary-navy text-white py-16">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Careers at Durga Dulari</h1>
          <p className="text-xl text-gray-200">Join our growing team of textile industry professionals</p>
        </Container>
      </section>

      {/* Opportunities */}
      <section className="py-24">
        <Container>
          <h2 className="text-4xl font-bold text-center text-neutral-text mb-4">Why Join Us?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Be part of a company transforming textile industry operations across India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-neutral-light rounded-lg p-8">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-neutral-text mb-3">Career Growth</h3>
              <p className="text-gray-600">
                Work with industry veterans, expand your expertise, and grow into leadership roles.
              </p>
            </div>
            <div className="bg-neutral-light rounded-lg p-8">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-neutral-text mb-3">Meaningful Impact</h3>
              <p className="text-gray-600">
                Directly impact mill operations and success across India.
              </p>
            </div>
            <div className="bg-neutral-light rounded-lg p-8">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-neutral-text mb-3">Competitive Comp</h3>
              <p className="text-gray-600">
                Competitive salary, benefits, and professional development support.
              </p>
            </div>
            <div className="bg-neutral-light rounded-lg p-8">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-neutral-text mb-3">Pan India Exposure</h3>
              <p className="text-gray-600">
                Work across different regions and textile sectors.
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto bg-primary-navy text-white rounded-lg p-12">
            <h2 className="text-2xl font-bold mb-6">Apply Now</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-blue-900 rounded text-white placeholder-gray-400" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-blue-900 rounded text-white placeholder-gray-400" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 bg-blue-900 rounded text-white placeholder-gray-400" placeholder="10-digit mobile" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Position of Interest</label>
                <select className="w-full px-4 py-3 bg-blue-900 rounded text-white">
                  <option>Select a position</option>
                  <option>Operations Manager</option>
                  <option>Field Technician</option>
                  <option>HR Manager</option>
                  <option>Business Development</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Experience (Years)</label>
                <input type="number" className="w-full px-4 py-3 bg-blue-900 rounded text-white placeholder-gray-400" placeholder="0" />
              </div>
              <Button variant="secondary" fullWidth className="mt-6">
                Submit Application
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
