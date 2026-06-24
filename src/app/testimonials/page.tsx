import React from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Durga Dulari Enterprises',
  description: 'Hear from textile mill owners and industrial leaders about their experience with us.',
};

export default function TestimonialsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-primary-navy text-white py-16">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-200">Industry leaders share their experience with us</p>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto bg-neutral-light rounded-lg p-12 text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-text mb-4">References Available On Request</h2>
            <p className="text-gray-600 text-lg mb-6">
              We protect client privacy. Real verified testimonials and case studies are available upon request with written client permission.
            </p>
            <div className="space-y-4 text-left mb-8 max-w-xl mx-auto">
              <div className="flex gap-3">
                <span className="text-primary-orange font-bold">✓</span>
                <p className="text-gray-600">Verified client references across spinning, knitting, weaving, and garmenting sectors</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary-orange font-bold">✓</span>
                <p className="text-gray-600">Direct contact with satisfied mill owners and operations heads</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary-orange font-bold">✓</span>
                <p className="text-gray-600">Case studies demonstrating tangible ROI and operational improvements</p>
              </div>
            </div>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Request Client References</Link>
            </Button>
          </div>

          {/* Industry Reach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border-2 border-primary-navy">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">Our Reach</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="font-semibold">[YEARS]+ Years Serving Industry</li>
                <li>[NUMBER]+ Spinning Mills</li>
                <li>[NUMBER]+ Textile Facilities</li>
                <li>PAN India Coverage</li>
                <li>Multiple State Presences</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-primary-orange">
              <h3 className="text-2xl font-bold text-primary-orange mb-4">Sectors Served</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Spinning Mills</li>
                <li>✓ Knitting Facilities</li>
                <li>✓ Weaving Mills</li>
                <li>✓ Garmenting Units</li>
                <li>✓ Dyeing Plants</li>
                <li>✓ Industrial Manufacturing</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-orange text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-4">Talk to Our Clients</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Speak directly with textile mill owners who have benefited from our services.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">Request References</Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}
