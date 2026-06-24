import type { Metadata } from 'next';
import { SITE_URL } from './constants';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
}

export const generateMetadata = (seo: SEOMetadata): Metadata => {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: (seo.type || 'website') as 'website' | 'article',
      images: seo.image
        ? [
            {
              url: seo.image,
              width: 1200,
              height: 630,
              alt: seo.title,
            },
          ]
        : undefined,
      url: SITE_URL,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : undefined,
    },
  };
};

export const createPageTitle = (pageTitle: string): string => {
  return `${pageTitle} | Durga Dulari Enterprises`;
};

export const createPageDescription = (description: string): string => {
  if (description.length > 160) {
    return description.slice(0, 157) + '...';
  }
  return description;
};
