import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  border?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
}

const shadowClasses = {
  sm: 'shadow-[0_4px_20px_rgba(0,0,0,0.03)]',
  md: 'shadow-[0_8px_30px_rgba(0,0,0,0.04)]',
  lg: 'shadow-[0_12px_40px_rgba(0,0,0,0.06)]',
  none: '',
};

export function Card({
  children,
  className,
  hover = true,
  border = true,
  shadow = 'md',
}: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-slate-900/60 rounded-xl overflow-hidden transition-all duration-300',
        border && 'border border-slate-100 dark:border-slate-800/80',
        shadow !== 'none' && shadowClasses[shadow],
        hover && 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 hover:border-slate-200/80 dark:hover:border-slate-700/80',
        className,
      )}
    >
      {children}
    </div>
  );
}
export default Card;
