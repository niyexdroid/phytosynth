import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Phytosynth Bioscience Ltd — Innovating for Sustainable Agriculture',
  description:
    'Phytosynth Bioscience Ltd delivers science-driven solutions in plant biotechnology and environmental biosolutions to advance global food security and environmental sustainability.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-charcoal bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
