'use client';

import React, { useEffect, useRef, useState } from 'react';
import { EmergencyBanner } from '@/components/layout/EmergencyBanner';
import { Header } from '@/components/layout/Header';

export function SiteHeader() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const shouldHideEmergencyBanner = isScrolled;

  useEffect(() => {
    const updateHeaderHeight = () => {
      setHeaderHeight(headerRef.current?.offsetHeight ?? 0);
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            shouldHideEmergencyBanner
              ? 'max-h-0 opacity-0 -translate-y-3'
              : 'max-h-56 opacity-100 translate-y-0'
          }`}
        >
          <EmergencyBanner />
        </div>
        <Header />
      </div>
      <div
        aria-hidden="true"
        className="transition-[height] duration-300 ease-out"
        style={{ height: headerHeight }}
      />
    </>
  );
}
