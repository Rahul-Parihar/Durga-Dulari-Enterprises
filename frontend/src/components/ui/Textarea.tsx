import React from 'react';
import clsx from 'clsx';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, fullWidth = true, className, rows = 4, ...props }, ref) => {
    return (
      <div className={clsx(fullWidth && 'w-full')}>
        {label && (
          <label className="block text-sm font-medium text-neutral-text mb-2">
            {label}
            {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={clsx(
            'w-full px-4 py-3 border border-gray-300 rounded-lg font-body resize-none',
            'focus:outline-none focus:border-primary-navy focus:ring-2 focus:ring-blue-100',
            'transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed',
            error && 'border-red-500 focus:ring-red-100',
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

Textarea.displayName = 'Textarea';
