'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration of animation in milliseconds
  threshold?: number; // Visibility threshold before trigger
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 800,
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it reveals, we can disconnect the observer so it doesn't trigger again
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before full entrance
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  const transitionStyles = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={elementRef}
      style={transitionStyles}
      className={`transform transition-all ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100 blur-none scale-100'
          : 'translate-y-8 opacity-0 blur-md scale-[0.98]'
      } ${className}`}
    >
      {children}
    </div>
  );
}
