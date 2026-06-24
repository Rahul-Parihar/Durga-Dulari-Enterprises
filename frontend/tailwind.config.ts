import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0B2545',
          orange: '#F4791F',
        },
        neutral: {
          light: '#E7EEF5',
          text: '#2B2B2B',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #E7EEF5 1px, transparent 1px), linear-gradient(to bottom, #E7EEF5 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
