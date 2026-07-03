import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'orange' | 'success' | 'warning';
  size?: 'sm' | 'md';
}

const variantClasses = {
  primary: 'bg-blue-100 text-primary-navy',
  secondary: 'bg-gray-100 text-gray-800',
  orange: 'bg-orange-100 text-primary-orange',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
};

const sizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
};

export function Badge({
  label,
  variant = 'primary',
  size = 'md',
}: BadgeProps) {
  return (
    <span className={`inline-block font-semibold rounded-full ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {label}
    </span>
  );
}
