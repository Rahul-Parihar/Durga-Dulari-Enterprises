import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '7xl': 'max-w-7xl',
};

export function Container({
  children,
  className,
  maxWidth = '7xl',
}: ContainerProps) {
  return (
    <div
      className={clsx('mx-auto px-4 md:px-6 lg:px-8', maxWidthClasses[maxWidth], className)}
    >
      {children}
    </div>
  );
}
