import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="text-primary-orange font-semibold text-sm sm:text-base md:text-lg mb-2 break-words">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-4 leading-tight break-words text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed break-words">
          {description}
        </p>
      )}
    </div>
  );
}
