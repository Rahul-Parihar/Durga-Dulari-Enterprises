'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { mainNavigation } from '@/data/navigation';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 z-0 bg-black/45"
        aria-label="Close menu"
        onClick={onClose}
      />

      <aside className="absolute right-0 top-0 z-10 flex h-full w-[min(88vw,360px)] flex-col bg-white dark:bg-slate-950 shadow-2xl animate-drawer-in transition-colors duration-300">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 px-5 py-4">
          <Link href="/" className="flex-shrink-0" onClick={onClose}>
            <p className="text-xl font-bold text-primary-navy dark:text-white">Durga Dulari</p>
            <p className="text-xs text-gray-600 dark:text-slate-400">Enterprises</p>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="rounded p-2 text-neutral-text dark:text-slate-300 transition-colors hover:bg-neutral-light dark:hover:bg-slate-900 hover:text-primary-navy dark:hover:text-white"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          {mainNavigation.map((link) => (
            <div key={link.href} className="border-b border-gray-100 dark:border-slate-900 last:border-b-0">
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  className="block flex-grow px-2 py-3 text-sm font-semibold text-neutral-text dark:text-slate-300 hover:text-primary-navy dark:hover:text-white transition-colors"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedMenu(expandedMenu === link.href ? null : link.href)
                    }
                    className="inline-flex h-10 w-10 items-center justify-center rounded text-gray-500 dark:text-slate-400 hover:bg-neutral-light dark:hover:bg-slate-900 hover:text-primary-navy dark:hover:text-white transition-colors"
                    aria-label={`Toggle ${link.label} submenu`}
                    aria-expanded={expandedMenu === link.href}
                  >
                    <ChevronDown
                      size={18}
                      className={`transform transition-transform ${expandedMenu === link.href ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                )}
              </div>
              {link.submenu && expandedMenu === link.href && (
                <div className="space-y-1 pb-3 pl-4">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      className="block rounded px-3 py-2 text-sm text-gray-600 dark:text-slate-400 hover:bg-neutral-light dark:hover:bg-slate-900 hover:text-primary-navy dark:hover:text-white transition-colors"
                      onClick={onClose}
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="border-t border-gray-200 dark:border-slate-800 p-4">
          <Button variant="secondary" fullWidth asChild>
            <Link href="/contact" onClick={onClose}>
              Request Manpower
            </Link>
          </Button>
        </div>
      </aside>
    </div>,
    document.body
  );
}
