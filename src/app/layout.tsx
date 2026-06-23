import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RevealManager from '@/components/RevealManager';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Phytosynth Bioscience Ltd, Innovating for Sustainable Agriculture',
  description:
    'Phytosynth Bioscience Ltd delivers science-driven solutions in plant biotechnology and environmental biosolutions to advance global food security and environmental sustainability.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans text-charcoal bg-white antialiased" suppressHydrationWarning>
        {/* Pre-paint reveal flag + failed-hydration failsafe.
            Setting data-reveal="ready" before paint turns off the CSS fail-safe
            (so `.reveal` blocks start hidden and can animate in) without a flash.
            The actual scroll observer lives in <RevealManager>, which runs only
            AFTER hydration so it never mutates server-rendered elements early
            (that caused hydration mismatches). If React never hydrates, the
            timeout below reveals everything so the page is never left blank. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document,r=d.documentElement;r.setAttribute('data-reveal','ready');setTimeout(function(){if(r.getAttribute('data-hydrated'))return;var n=d.querySelectorAll('.reveal');for(var i=0;i<n.length;i++){n[i].classList.add('animate-fade-in');n[i].classList.remove('opacity-0');}},2000);})();`,
          }}
        />
        <RevealManager />
        {children}
      </body>
    </html>
  );
}
