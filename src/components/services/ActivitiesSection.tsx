'use client';

import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { activities, activityCategories } from '@/data/activities';
import { ArrowRight, CheckCircle2, Sparkles, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface ActivitiesSectionProps {
  showTitle?: boolean;
  className?: string;
  defaultCategory?: string;
  initialLimit?: number;
}

export function ActivitiesSection({
  showTitle = true,
  className = '',
  defaultCategory = 'all',
  initialLimit = 6,
}: ActivitiesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

  // Mouse drag to scroll state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const checkScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const hasOverflow = el.scrollWidth > el.clientWidth + 2;
    setIsOverflowing(hasOverflow);
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  }, []);

  useEffect(() => {
    checkScrollState();
    const handleResize = () => checkScrollState();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [checkScrollState]);

  const scrollTabs = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 280;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const filteredActivities = useMemo(() => {
    if (selectedCategory === 'all') return activities;
    return activities.filter((act) => act.category === selectedCategory);
  }, [selectedCategory]);

  const displayedActivities = useMemo(() => {
    if (isExpanded) return filteredActivities;
    return filteredActivities.slice(0, initialLimit);
  }, [filteredActivities, isExpanded, initialLimit]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: activities.length };
    activities.forEach((act) => {
      counts[act.category] = (counts[act.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleCategorySelect = (categoryId: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(categoryId);
    setIsExpanded(false);
    if (e?.currentTarget) {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
      const section = document.getElementById('operational-activities');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section id="operational-activities" className={`py-10 sm:py-12 bg-slate-50/70 dark:bg-slate-900/40 relative overflow-hidden ${className}`}>
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-navy/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-orange/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-primary-orange ring-1 ring-primary-orange/20 mb-4 shadow-sm">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Specialized Industrial Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-navy dark:text-white tracking-tight mb-4">
              21 Core Activities & Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              From heavy machinery erection and power-saving audits to Lycra and Linen establishment — discover our end-to-end mill operation competencies.
            </p>
          </div>
        )}

        {/* Interactive Category Filter Tabs with Smooth Horizontal Scroll & Controls */}
        <div className="relative max-w-6xl mx-auto mb-10 sm:mb-12">
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scrollTabs('left')}
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-800 text-primary-navy dark:text-white border border-slate-200 dark:border-slate-700 shadow-lg hover:bg-primary-orange hover:text-white dark:hover:bg-primary-orange transition-all duration-200 flex items-center justify-center hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Scroll filters left"
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {/* Left fade gradient when scrollable left */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-slate-50/90 dark:from-slate-900/90 to-transparent pointer-events-none z-10" />
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollState}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex items-center gap-2.5 overflow-x-auto py-2.5 px-3 sm:px-6 no-scrollbar select-none touch-pan-x cursor-grab active:cursor-grabbing ${
              isOverflowing ? 'justify-start' : 'justify-center'
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {activityCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={(e) => handleCategorySelect(cat.id, e)}
                  className={`group shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 select-none shadow-sm cursor-pointer ${
                    isActive
                      ? 'bg-primary-navy text-white shadow-md scale-105 ring-2 ring-primary-orange/30'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/70 border border-slate-200/80 dark:border-slate-700'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                      isActive
                        ? 'bg-primary-orange text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 group-hover:bg-primary-orange/10 group-hover:text-primary-orange'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right fade gradient when scrollable right */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-slate-50/90 dark:from-slate-900/90 to-transparent pointer-events-none z-10" />
          )}

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scrollTabs('right')}
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-800 text-primary-navy dark:text-white border border-slate-200 dark:border-slate-700 shadow-lg hover:bg-primary-orange hover:text-white dark:hover:bg-primary-orange transition-all duration-200 flex items-center justify-center hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Scroll filters right"
            >
              <ChevronRight size={18} />
            </button>
          )}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedActivities.map((act) => (
            <Card
              key={act.id}
              hover={false}
              className="group flex flex-col justify-between bg-white dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/60 p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary-orange/30 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Strip on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-navy to-primary-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-orange/10 text-primary-orange flex items-center justify-center group-hover:bg-primary-orange group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110">
                    <DynamicIcon name={act.icon} size={22} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/60 px-2.5 py-1 rounded-md">
                    {act.categoryLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2.5 group-hover:text-primary-orange transition-colors">
                  {act.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 font-medium">
                  {act.shortDescription}
                </p>

                {/* Deliverables Checklist */}
                {act.deliverables && act.deliverables.length > 0 && (
                  <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                    {act.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={14} className="text-primary-orange shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href={`/contact?requirement=${act.slug}`}
                  className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 text-primary-navy dark:text-white hover:bg-primary-orange hover:text-white font-bold text-xs transition-all duration-200 group/btn border border-slate-100 dark:border-slate-700"
                >
                  <span>Inquire for {act.title}</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* View More / View Less Toggle Button */}
        {filteredActivities.length > initialLimit && (
          <div className="mt-10 sm:mt-12 text-center flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={handleToggle}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-primary-navy dark:text-white hover:bg-primary-orange hover:text-white dark:hover:bg-primary-orange font-extrabold text-sm sm:text-base border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105 active:scale-95 cursor-pointer"
              aria-expanded={isExpanded}
            >
              <span>
                {isExpanded
                  ? 'View Less Activities'
                  : `View More Activities (${filteredActivities.length - initialLimit} More)`}
              </span>
              {isExpanded ? (
                <ChevronUp size={18} className="transition-transform group-hover:-translate-y-0.5 text-primary-orange group-hover:text-white" />
              ) : (
                <ChevronDown size={18} className="transition-transform group-hover:translate-y-0.5 text-primary-orange group-hover:text-white" />
              )}
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 font-semibold">
              Showing {displayedActivities.length} of {filteredActivities.length} operational activities
            </p>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#071d38] border border-slate-200/90 dark:border-slate-800 shadow-md dark:shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300">
          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-primary-navy dark:text-white mb-1.5 tracking-tight transition-colors duration-300">
              Need custom engineering or operational support?
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium transition-colors duration-300">
              We provide tailored solutions matching your exact mill specifications and technical parameters.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3.5 bg-primary-orange hover:bg-orange-600 text-white font-bold rounded-xl text-sm transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
          >
            Discuss Your Requirement
          </Link>
        </div>
      </Container>
    </section>
  );
}
