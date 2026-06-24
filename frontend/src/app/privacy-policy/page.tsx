import React from 'react';
import { Container } from '@/components/common/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Durga Dulari Enterprises',
  description: 'Our privacy policy and data protection practices.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="bg-primary-navy text-white py-16">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-200">How we collect, use, and protect your data</p>
        </Container>
      </section>

      <section className="py-24">
        <Container className="max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <p className="text-yellow-900 font-semibold mb-2">⚠️ Legal Notice</p>
              <p className="text-yellow-800 text-sm">
                This template privacy policy must be reviewed and customized by a qualified legal professional before publication. This is a legal document and requires jurisdiction-specific language and compliance.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect the following information through our website and service inquiries:</p>
            <ul>
              <li>Name, company, contact details</li>
              <li>Email addresses</li>
              <li>Phone numbers</li>
              <li>Inquiry details and requirements</li>
              <li>Usage data through cookies and analytics</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">2. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>Respond to your inquiries and provide services</li>
              <li>Send updates and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">3. Data Protection</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">4. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact us at [EMAIL] to exercise these rights.</p>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">5. Contact Us</h2>
            <p>For privacy-related inquiries, contact: [EMAIL]</p>

            <p className="mt-8 text-sm text-gray-600 italic">
              Last Updated: [DATE]. This privacy policy is subject to change at our discretion. Changes will be posted on this page with an updated "Last Updated" date.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
