import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { getAllServiceSlugs } from '@/data/services';
import { getAllIndustrySlugs } from '@/data/industries';
import { getAllCaseStudySlugs } from '@/data/caseStudies';
import { getAllBlogSlugs } from '@/data/resources';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/training-recruitment`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/downloads`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'never',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/founder`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/compliance`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/vendor-registration`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/testimonials`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Dynamic service pages
  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic industry pages (if used)
  const industryPages: MetadataRoute.Sitemap = getAllIndustrySlugs().map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic case study pages
  const caseStudyPages: MetadataRoute.Sitemap = getAllCaseStudySlugs().map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic blog/resource pages
  const blogPages: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...caseStudyPages, ...blogPages];
}
