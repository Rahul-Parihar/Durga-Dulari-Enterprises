'use client';

import React, { useEffect, useRef, useState } from 'react';
import { EmergencyBanner } from '@/components/layout/EmergencyBanner';
import { Header } from '@/components/layout/Header';

export function SiteHeader() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Measure banner and navbar heights
  useEffect(() => {
    const measureHeights = () => {
      if (bannerRef.current) {
        setBannerHeight(bannerRef.current.offsetHeight);
      }
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    measureHeights();

    // Use ResizeObserver for accurate dynamic measurements (e.g. screen resize, text wrap)
    const resizeObserver = new ResizeObserver(measureHeights);
    if (bannerRef.current) resizeObserver.observe(bannerRef.current);
    if (navbarRef.current) resizeObserver.observe(navbarRef.current);

    window.addEventListener('resize', measureHeights);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measureHeights);
    };
  }, []);

  // Update scroll state based on scroll position vs banner height
  useEffect(() => {
    const updateScrollState = () => {
      // Hide banner once we scroll past it
      setIsScrolled(window.scrollY > bannerHeight);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
  }, [bannerHeight]);

  const shouldHideEmergencyBanner = isScrolled;
  const totalUnscrolledHeight = bannerHeight + navbarHeight;

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50">
        <div
          className={`grid transition-[grid-template-rows,opacity,transform] duration-300 ease-out ${
            shouldHideEmergencyBanner
              ? 'grid-rows-[0fr] opacity-0 -translate-y-2'
              : 'grid-rows-[1fr] opacity-100 translate-y-0'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div ref={bannerRef}>
              <EmergencyBanner />
            </div>
          </div>
        </div>
        <div ref={navbarRef}>
          <Header />
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{ height: totalUnscrolledHeight }}
      />
    </>
  );
}

export default SiteHeader;

