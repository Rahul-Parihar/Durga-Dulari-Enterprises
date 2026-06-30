'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (savedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900 bg-white dark:bg-slate-950 shadow-sm"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-yellow-500 animate-pulse" />
      ) : (
        <Moon size={18} className="text-slate-600" />
      )}
    </button>
  );
}

export default ThemeToggle;
