import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { downloads } from '@/data/downloads';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads & Tools | Durga Dulari Enterprises',
  description: 'Free tools and templates for textile mill operations and management.',
};

export default function DownloadsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-primary-navy text-white py-16">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Downloads & Tools</h1>
          <p className="text-xl text-gray-200">Free resources to optimize your mill operations</p>
        </Container>
      </section>

      {/* Downloads */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloads.map((download) => (
              <div key={download.id} className="bg-neutral-light rounded-lg p-8 border-l-4 border-primary-orange">
                <div className="text-4xl mb-4">📥</div>
                <h3 className="text-xl font-bold text-neutral-text mb-3">{download.title}</h3>
                <p className="text-gray-600 mb-6">{download.description}</p>
                <Button variant="secondary" size="md" asChild>
                  <Link href="/contact">Get Access</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <p className="text-gray-700 mb-4">
              These resources require verification. Submit the form below to receive download links.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Request Resources</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
