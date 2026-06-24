import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { blogResources, getAllBlogSlugs } from '@/data/resources';

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export default function ResourceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const resource = blogResources.find((r) => r.slug === params.slug);

  if (!resource) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Resource not found</h1>
        <Button asChild>
          <Link href="/resources">Back to Resources</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-950 py-12 border-b border-slate-100 dark:border-slate-800">
        <Container>
          <div className="inline-block bg-primary-orange text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
            {resource.category}
          </div>
          <h1 className="text-5xl font-bold text-slate-950 dark:text-white mb-4">{resource.title}</h1>
          <p className="text-slate-600 dark:text-slate-300">Reading time: {resource.readTime} minutes</p>
        </Container>
      </div>

      {/* Content */}
      <section className="py-24">
        <Container className="max-w-3xl">
          <div className="prose prose-lg">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line mb-8">
              {resource.content}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-slate-50 dark:bg-slate-900/60 rounded-lg p-8 text-center border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">Need implementation support?</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">Our experts can help you apply these strategies to your operations.</p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get Consultation</Link>
            </Button>
          </div>

          {/* Related Resources */}
          {resource.relatedResources && resource.relatedResources.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-6">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resource.relatedResources.slice(0, 2).map((relSlug) => {
                  const relResource = blogResources.find((r) => r.slug === relSlug);
                  return relResource ? (
                    <Link key={relSlug} href={`/resources/${relSlug}`}>
                      <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-lg hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-800">
                        <p className="text-xs font-semibold text-primary-orange mb-2">{relResource.category}</p>
                        <h4 className="font-semibold text-slate-950 dark:text-white hover:text-primary-orange transition-colors">
                          {relResource.title}
                        </h4>
                      </div>
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
