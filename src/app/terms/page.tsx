import React from 'react';
import { Container } from '@/components/common/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Durga Dulari Enterprises',
  description: 'Terms and conditions of using our website and services.',
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="bg-primary-navy text-white py-16">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-200">Please read these terms carefully before using our website and services</p>
        </Container>
      </section>

      <section className="py-24">
        <Container className="max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <p className="text-yellow-900 font-semibold mb-2">⚠️ Legal Notice</p>
              <p className="text-yellow-800 text-sm">
                This template terms and conditions document must be reviewed and customized by a qualified legal professional before publication. This is a legal document and requires jurisdiction-specific language and compliance.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">3. Disclaimer</h2>
            <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">4. Limitations</h2>
            <p>In no event shall [COMPANY NAME] or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">5. Accuracy of Materials</h2>
            <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.</p>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">6. Links</h2>
            <p>We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.</p>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">7. Modifications</h2>
            <p>We may revise these terms of use for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of use.</p>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in [JURISDICTION].</p>

            <h2 className="text-2xl font-bold text-neutral-text mt-8 mb-4">9. Contact</h2>
            <p>If you have any questions about these Terms, please contact us at [EMAIL].</p>

            <p className="mt-8 text-sm text-gray-600 italic">
              Last Updated: [DATE]. These terms are subject to change at our discretion.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
