import React from 'react';
import clsx from 'clsx';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'light' | 'navy' | 'transparent';
  hasPadding?: boolean;
}

const bgColorClasses = {
  white: 'bg-white dark:bg-slate-950 transition-colors duration-300',
  light: 'bg-neutral-light dark:bg-slate-900 transition-colors duration-300',
  navy: 'bg-primary-navy',
  transparent: 'bg-transparent',
};

export function SectionWrapper({
  children,
  className,
  bgColor = 'white',
  hasPadding = true,
}: SectionWrapperProps) {
  return (
    <section className={clsx(bgColorClasses[bgColor], hasPadding && 'py-16 md:py-24 lg:py-32', className)}>
      {children}
    </section>
  );
}
