'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/constants';
import { Container } from '@/components/common/Container';

export function EmergencyBanner() {
  return (
    <div className="bg-red-600/95 backdrop-blur-md text-white py-2.5 shadow-lg border-b border-red-500/20">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <p className="font-semibold text-xs md:text-sm tracking-wide text-center sm:text-left">
              EMERGENCY DEPLOYMENT: Machine Breakdown? Need Operators? 24×7 Rapid Support
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-1.5 bg-white text-red-600 px-3 py-1.5 rounded-lg font-bold hover:bg-slate-50 transition-all duration-200 text-xs shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone size={14} className="fill-current" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 px-3 py-1.5 rounded-lg font-bold transition-all duration-200 text-xs text-white shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle size={14} className="fill-current" />
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default EmergencyBanner;
