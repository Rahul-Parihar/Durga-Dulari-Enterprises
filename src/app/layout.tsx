import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SplashScreen } from '@/components/ui/SplashScreen';
import { SmoothScroll } from '@/components/common/SmoothScroll';
import './globals.css';

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
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="font-body text-neutral-text bg-white dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
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
