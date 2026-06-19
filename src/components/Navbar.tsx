'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS: { label: string; href: string; highlight?: boolean }[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Research', href: '/research' },
  { label: 'Training', href: '/training' },
  { label: 'Inclusive Programme', href: '/inclusive-programme', highlight: true },
  { label: 'Impact', href: '/impact' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/services')) return pathname.startsWith('/services');
    if (href.startsWith('/#')) {
      // Section links are only "active" when on the homepage
      // We treat them as inactive visually since they scroll to sections
      return false;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
    <nav className="fixed top-0 inset-x-0 z-50 h-[76px] bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-6 md:px-8 h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Phytosynth Bioscience"
            width={2400}
            height={771}
            priority
            className="h-14 md:h-16 w-auto"
          />
        </Link>

        {/* Tagline */}
        <span className="hidden xl:block italic text-[12px] leading-tight text-center text-phyto-bright/70 shrink-0">
          Innovating Nature,<br />Enhancing Life….
        </span>

        {/* Mobile motto, between logo and hamburger */}
        <span className="lg:hidden flex-1 min-w-0 text-center px-2 italic text-[11px] leading-tight text-phyto-bright/70">
          Innovating Nature,<br />Enhancing Life….
        </span>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[13.5px] px-3.5 py-2 rounded-full transition-colors duration-[180ms] ${
                    active
                      ? 'text-phyto-deep bg-phyto-pale/80 font-semibold'
                      : link.highlight
                        ? 'text-phyto-forest font-semibold hover:text-phyto-deep hover:bg-phyto-pale/60'
                        : 'text-gray-600 font-medium hover:text-phyto-deep hover:bg-phyto-pale/60'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center justify-center bg-phyto-forest text-white text-[14px] font-semibold px-7 py-3 rounded-full border-2 border-phyto-forest hover:bg-phyto-deep hover:border-phyto-deep hover:-translate-y-px hover:shadow-md transition-all duration-[280ms] shrink-0"
        >
          Get in Touch
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-phyto-deep rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-phyto-deep rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-phyto-deep rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
    </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[76px] inset-x-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xl z-40 max-h-[calc(100dvh-76px)] overflow-y-auto">
          <div className="px-8 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-[17px] font-semibold py-3.5 border-b border-gray-100 transition-colors ${
                    active
                      ? 'text-phyto-bright'
                      : link.highlight
                        ? 'text-phyto-forest hover:text-phyto-vibrant'
                        : 'text-charcoal hover:text-phyto-bright'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 w-full text-center bg-phyto-forest text-white text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-phyto-deep transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
