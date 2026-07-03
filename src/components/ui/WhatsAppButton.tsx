'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppContactLink } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  message?: string;
  position?: 'fixed' | 'relative';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
};

const iconSizes = {
  sm: 24,
  md: 32,
  lg: 40,
};

export function WhatsAppButton({
  message = 'Hello, I would like to inquire about your services.',
  position = 'fixed',
  size = 'md',
  label,
}: WhatsAppButtonProps) {
  const link = getWhatsAppContactLink(message);

  if (link === '#') {
    return null; // Don't render if WhatsApp number is not configured
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={label || 'Chat with us on WhatsApp'}
      className={`${position === 'fixed' ? 'fixed bottom-6 right-6 z-40' : 'relative'} inline-flex ${sizeClasses[size]} items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
      aria-label="Open WhatsApp chat"
    >
      <MessageCircle size={iconSizes[size]} />
    </a>
  );
}
