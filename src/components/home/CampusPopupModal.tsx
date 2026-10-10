'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';

// Module-level variable to track if the popup was shown in this page session.
// This persists across client-side router transitions in Next.js.
let hasShownPopupInSession = false;

export function CampusPopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // If the popup has already been shown in this page session, do not show it again.
    if (hasShownPopupInSession) {
      return;
    }

    // Small delay to make the entrance feel natural and premium
    const timer = setTimeout(() => {
      setIsOpen(true);
      hasShownPopupInSession = true; // Mark as shown
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          aria-label="Close Ad"
        >
          <X size={16} />
        </button>

        <Link href="/school-services" onClick={() => setIsOpen(false)} className="group block relative cursor-pointer overflow-hidden aspect-[4/3] w-full">
          <Image
            src="/images/DDTSDI_Campus_image.webp"
            alt="CSR donation poster for skills and education"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
          <div className="absolute left-3 top-3 rounded-md bg-primary-orange px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-widest">
            CSR Initiative
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-orange-200">Support Skill Education</p>
            <h3 className="mt-1 text-xl font-black uppercase leading-tight">Build Futures. Create Impact.</h3>
          </div>
        </Link>

        <div className="p-5 text-center">
          <h3 className="text-lg font-bold leading-tight text-slate-950 dark:text-white">
            Sponsor a learning opportunity for the next generation
          </h3>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Your CSR support can fund skill training, safe hostel facilities, and brighter career pathways for deserving youth.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/school-services"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-orange px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-primary-orange/90 transition-all active:scale-95"
            >
              Support the CSR Campaign <ArrowRight size={14} />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="py-1 text-[11px] font-semibold text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-200"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
