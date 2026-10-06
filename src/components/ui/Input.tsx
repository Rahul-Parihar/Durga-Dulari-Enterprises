import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, fullWidth = true, className, ...props }, ref) => {
    return (
      <div className={clsx(fullWidth && 'w-full')}>
        {label && (
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            'w-full px-4 py-3 border border-slate-200 dark:border-slate-700/80 rounded-xl font-body',
            'bg-white dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500',
            'focus:outline-none focus:border-primary-orange focus:ring-2 focus:ring-orange-500/20',
            'transition-all duration-200 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:cursor-not-allowed shadow-sm',
            error && 'border-red-500 dark:border-red-500 focus:ring-red-500/20 focus:border-red-500',
            className,
          )}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        {hint && <p className="text-gray-500 text-sm mt-1">{hint}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
