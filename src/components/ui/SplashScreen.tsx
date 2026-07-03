'use client';

import React, { useEffect, useState } from 'react';

export function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Prevent scrolling while splash screen is active
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // Smooth loading progression (1.8 seconds)
    const duration = 1800;
    const intervalTime = 16;
    const steps = duration / intervalTime;
    const increment = 100 / steps;
    
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        
        // Start slide-up exit sequence
        setTimeout(() => {
          setIsVisible(false);
          // Restore scrolling
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
          
          // Fully unmount after transition (1000ms cubic-bezier)
          setTimeout(() => {
            setIsActive(false);
          }, 1000);
        }, 300);
      }
      setProgress(Math.min(currentProgress, 100));
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted || !isActive) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 transition-transform duration-[1000ms] ease-[cubic-bezier(0.85,0,0.15,1)] select-none ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Premium CSS Keyframe Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes drawCircle {
          0% { stroke-dashoffset: 283; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes maskRevealUp {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.08); opacity: 0.25; }
        }
        .anim-draw-circle {
          stroke-dasharray: 283;
          stroke-dashoffset: 283;
          animation: drawCircle 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .anim-reveal-up {
          animation: maskRevealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-scale-in {
          animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-pulse-subtle {
          animation: subtlePulse 3s ease-in-out infinite;
        }
      `}} />

      {/* Decorative Brand Color Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-orange/5 dark:bg-primary-orange/10 blur-[120px] pointer-events-none anim-pulse-subtle" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary-navy/5 dark:bg-primary-navy/10 blur-[120px] pointer-events-none anim-pulse-subtle" style={{ animationDelay: '1.5s' }} />

      {/* Clean Faint Industrial Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.04] dark:opacity-[0.08] pointer-events-none" />

      {/* Center Layout Wrapper */}
      <div className="relative flex flex-col items-center max-w-md px-6 text-center z-10">
        
        {/* Elegant Drawing Circle & Logo Initials */}
        <div className="relative mb-8 w-32 h-32 flex items-center justify-center">
          
          {/* Circular Drawing Ring Path */}
          <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              className="dark:stroke-slate-800"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#brand-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="anim-draw-circle"
            />
            <defs>
              <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B2545" />
                <stop offset="100%" stopColor="#F4791F" />
              </linearGradient>
            </defs>
          </svg>

          {/* Minimalist Solid Logo Box */}
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-navy to-slate-900 flex items-center justify-center text-white font-extrabold text-3xl shadow-lg border border-white/15 anim-scale-in">
            <span className="bg-gradient-to-r from-white via-slate-100 to-primary-orange bg-clip-text text-transparent">
              DD
            </span>
          </div>
        </div>

        {/* Masked Slide-up Header Text */}
        <div className="overflow-hidden mb-1.5 h-11">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-navy dark:text-white tracking-tight leading-none anim-reveal-up">
            Durga Dulari
          </h1>
        </div>
        
        <div className="overflow-hidden mb-8 h-6">
          <p 
            className="text-xs md:text-sm text-primary-orange font-extrabold tracking-[0.3em] uppercase leading-tight anim-reveal-up"
            style={{ animationDelay: '0.2s' }}
          >
            Enterprises
          </p>
        </div>

        {/* Minimalist Progress Bar */}
        <div 
          className="w-40 h-[2px] bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative shadow-inner anim-scale-in"
          style={{ animationDelay: '0.4s' }}
        >
          <div
            className="h-full bg-gradient-to-r from-primary-navy to-primary-orange rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text status indicator */}
        <div 
          className="mt-3 text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest anim-scale-in"
          style={{ animationDelay: '0.5s' }}
        >
          {Math.round(progress)}% loaded
        </div>
      </div>
      
      {/* Footer Branding details */}
      <div 
        className="absolute bottom-8 left-0 right-0 text-center anim-scale-in"
        style={{ animationDelay: '0.6s' }}
      >
        <p className="text-[9px] md:text-[10px] text-slate-450 dark:text-slate-500 font-bold tracking-[0.25em] uppercase">
          Textile Manpower & Industrial Solutions
        </p>
      </div>
    </div>
  );
}
export default SplashScreen;
