import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SplashScreen } from '@/components/ui/SplashScreen';
import { SmoothScroll } from '@/components/common/SmoothScroll';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Durga Dulari Enterprises | Textile Manpower & Industrial Solutions',
  description: 'Leading provider of textile manpower, maintenance solutions, plant automation, and industrial projects across India.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning style={{ colorScheme: 'dark' }}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (_) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-body text-neutral-text bg-white dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        <SmoothScroll />
        <SplashScreen />
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton message="Hi, I need support with my textile operations" />
      </body>
    </html>
  );
}
