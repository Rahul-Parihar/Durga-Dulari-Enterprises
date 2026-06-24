import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm text-gray-600 ${className}`}>
      <Link href="/" className="hover:text-primary-navy transition-colors">
        Home
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={`${item.href}-${index}`}>
          <ChevronRight size={16} />
          {index === items.length - 1 ? (
            <span className="text-neutral-text font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-primary-navy transition-colors">
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
