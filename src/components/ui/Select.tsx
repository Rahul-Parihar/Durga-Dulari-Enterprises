import React from 'react';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: Option[];
  placeholder?: string;
  fullWidth?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, placeholder, fullWidth = true, className, ...props }, ref) => {
    return (
      <div className={clsx(fullWidth && 'w-full')}>
        {label && (
          <label className="block text-sm font-medium text-neutral-text mb-2">
            {label}
            {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={clsx(
              'w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg font-body appearance-none',
              'focus:outline-none focus:border-primary-navy focus:ring-2 focus:ring-blue-100',
              'transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed bg-white cursor-pointer',
              error && 'border-red-500 focus:ring-red-100',
              className,
            )}
            {...props}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" size={20} />
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        {hint && <p className="text-gray-500 text-sm mt-1">{hint}</p>}
      </div>
    );
  },
);

Select.displayName = 'Select';
