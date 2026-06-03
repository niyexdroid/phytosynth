'use client';

import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Research', href: '#research' },
  { label: 'Training', href: '#training' },
  { label: 'Projects', href: '#projects' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-[76px] bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-6 md:px-8 h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <svg width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M24 6C24 6 8 10 8 26C8 34 14 42 24 44C34 42 40 34 40 26C40 10 24 6 24 6Z" fill="#2D6A4F" opacity="0.9"/>
            <path d="M24 10C24 6 28 4 28 4C28 4 30 10 28 16C26 22 20 24 20 24" fill="#52B788" opacity="0.7"/>
            <line x1="24" y1="14" x2="24" y2="42" stroke="#D8F3DC" strokeWidth="1.5" opacity="0.6"/>
            <line x1="18" y1="18" x2="30" y2="16" stroke="#95D5B2" strokeWidth="1.2" opacity="0.7"/>
            <line x1="16" y1="24" x2="32" y2="22" stroke="#95D5B2" strokeWidth="1.2" opacity="0.7"/>
            <line x1="16" y1="30" x2="32" y2="28" stroke="#95D5B2" strokeWidth="1.2" opacity="0.7"/>
            <line x1="18" y1="36" x2="30" y2="34" stroke="#95D5B2" strokeWidth="1.2" opacity="0.7"/>
          </svg>
          <span className="text-[15px] font-extrabold tracking-[0.04em] text-phyto-deep leading-tight">
            PHYTOSYNTH<br />
            <span className="text-[9px] font-semibold tracking-[0.18em] text-phyto-vibrant">BIOSCIENCE LTD</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13.5px] font-medium text-gray-600 hover:text-phyto-deep hover:bg-phyto-pale/60 px-3.5 py-2 rounded-full transition-colors duration-[180ms]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center bg-phyto-forest text-white text-[14px] font-semibold px-7 py-3 rounded-full border-2 border-phyto-forest hover:bg-phyto-deep hover:border-phyto-deep hover:-translate-y-px hover:shadow-md transition-all duration-[280ms] shrink-0"
        >
          Get in Touch
        </a>

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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[76px] inset-x-0 bottom-0 bg-white z-40 overflow-y-auto">
          <div className="px-8 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[17px] font-semibold text-charcoal py-3.5 border-b border-gray-100 hover:text-phyto-vibrant transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 w-full text-center bg-phyto-forest text-white text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-phyto-deep transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
