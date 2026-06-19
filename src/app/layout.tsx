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
  title: 'Phytosynth Bioscience Ltd, Innovating for Sustainable Agriculture',
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
      <body className="font-sans text-charcoal bg-white antialiased" suppressHydrationWarning>
        {/* Reveal-on-scroll, independent of React hydration. Marks data-reveal
            so the CSS fail-safe stops forcing content visible, then reveals
            `.reveal` blocks as they enter the viewport. Runs even if the React
            bundle fails to hydrate, so the site is never left styled-but-blank. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document;d.documentElement.setAttribute('data-reveal','ready');function show(n){n.classList.add('animate-fade-in');n.classList.remove('opacity-0');}function showAll(){var n=d.querySelectorAll('.reveal');for(var i=0;i<n.length;i++)show(n[i]);}function start(){try{if(!('IntersectionObserver' in window)){showAll();return;}var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){show(e.target);io.unobserve(e.target);}});},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});d.querySelectorAll('.reveal').forEach(function(n){io.observe(n);});}catch(e){showAll();}}if(d.readyState==='loading'){d.addEventListener('DOMContentLoaded',start);}else{start();}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
