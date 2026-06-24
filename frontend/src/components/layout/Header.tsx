'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { mainNavigation } from '@/data/navigation';
import { ThemeToggle } from '@/components/common/ThemeToggle';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-900 shadow-sm sticky top-0 z-40 transition-colors duration-300">
      <Container>
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-navy to-slate-800 flex items-center justify-center text-white font-black text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
                DD
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-extrabold text-primary-navy dark:text-white tracking-tight leading-none group-hover:text-primary-orange transition-colors whitespace-nowrap">
                  Durga Dulari
                </h1>
                <p className="text-[9px] text-slate-500 font-bold tracking-[0.22em] uppercase leading-tight">
                  Enterprises
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-center gap-1 flex-1 min-w-0">
            {mainNavigation.map((link) => {
              const isActive = isActiveLink(link.href);

              return (
                <div key={link.href} className="relative group py-2">
                  <Link
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-2.5 2xl:px-3 py-2 text-sm 2xl:text-[15px] font-semibold rounded-lg transition-all duration-200 flex items-center gap-1 whitespace-nowrap border-b-2 ${
                      isActive
                        ? 'border-primary-orange bg-primary-orange/10 text-primary-orange dark:bg-primary-orange/15 dark:text-primary-orange'
                        : 'border-transparent text-slate-700 dark:text-slate-300 hover:text-primary-navy dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-primary-orange/50'
                    }`}
                  >
                    {link.label}
                    {link.submenu && <ChevronDown size={14} className="opacity-60" />}
                  </Link>
                  {link.submenu && (
                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-72 z-50">
                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl p-2 animate-fade-in-up">
                        {link.submenu.map((sublink) => {
                          const isSubActive = isActiveLink(sublink.href);

                          return (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              aria-current={isSubActive ? 'page' : undefined}
                              className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-150 font-medium border-l-2 ${
                                isSubActive
                                  ? 'border-primary-orange bg-primary-orange/10 text-primary-orange'
                                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-primary-navy dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                              }`}
                            >
                              {sublink.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <ThemeToggle />
            
            <Button
              variant="secondary"
              size="sm"
              className="hidden md:inline-flex shadow-sm px-4 py-2.5"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-1.5 font-bold whitespace-nowrap">
                Request Manpower <ArrowRight size={16} />
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 xl:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
    </header>
  );
}
export default Header;
