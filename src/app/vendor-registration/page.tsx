import React from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vendor Registration | Durga Dulari Enterprises',
  description: 'Register as a vendor or contractor partner with us.',
};

export default function VendorRegistrationPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-primary-navy text-white py-16">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Vendor Registration</h1>
          <p className="text-xl text-gray-200">Partner with us as a service provider or contractor</p>
        </Container>
      </section>

      {/* Registration Form */}
      <section className="py-24">
        <Container className="max-w-2xl">
          <div className="bg-neutral-light rounded-lg p-12">
            <h2 className="text-3xl font-bold text-neutral-text mb-8">Vendor Registration Form</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-text mb-2">Company Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-text mb-2">Contact Person *</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-text mb-2">Designation *</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-text mb-2">Mobile *</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-text mb-2">Email *</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-text mb-2">GST Number</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="15-digit GST number" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-text mb-2">Services / Products Offered *</label>
                <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none" rows={4} required></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-text mb-2">Locations Covered *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="e.g., Maharashtra, Tamil Nadu" required />
              </div>

              <div className="flex items-start gap-3">
                <input id="agree" type="checkbox" className="mt-1" required />
                <label htmlFor="agree" className="text-sm text-gray-600">
                  I agree to the terms and conditions and authorize Durga Dulari to contact me regarding vendor opportunities.
                </label>
              </div>

              <Button variant="secondary" fullWidth>
                Submit Registration
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
