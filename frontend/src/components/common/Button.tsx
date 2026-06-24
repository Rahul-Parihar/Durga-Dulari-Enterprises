import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  primary: 'bg-primary-navy hover:bg-slate-800 text-white shadow-md hover:shadow-lg hover:shadow-slate-900/10 active:scale-[0.98]',
  secondary: 'bg-primary-orange hover:bg-orange-600 text-white shadow-md hover:shadow-lg hover:shadow-orange-500/10 active:scale-[0.98]',
  outline: 'border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white active:scale-[0.98]',
  ghost: 'text-primary-navy hover:bg-neutral-light active:scale-[0.98]',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-md font-medium',
  md: 'px-6 py-2.5 text-sm md:text-base rounded-lg font-semibold',
  lg: 'px-5 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base md:text-lg rounded-xl font-bold',
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  asChild = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const classes = clsx(
    'inline-flex max-w-full items-center justify-center text-center leading-snug transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className,
  );
  const isDisabled = disabled || loading;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: clsx(classes, children.props.className),
      'aria-disabled': isDisabled || undefined,
    });
  }

  const buttonProps = props as Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'asChild'>;

  return (
    <button
      className={classes}
      disabled={isDisabled}
      {...buttonProps}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : children}
    </button>
  );
}
export default Button;
