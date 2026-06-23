'use client';

import { useEffect } from 'react';

/**
 * Drives the scroll-reveal animation AFTER React has hydrated, so it never
 * mutates server-rendered `.reveal` elements before hydration (which would
 * cause hydration-mismatch warnings).
 *
 * The pre-paint `data-reveal="ready"` flag and the failed-hydration failsafe
 * live in the inline script in layout.tsx. This component:
 *   1. marks `data-hydrated` so that failsafe stands down, and
 *   2. reveals `.reveal` blocks as they scroll into view.
 */
export default function RevealManager() {
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-hydrated', '1');

    const show = (n: Element) => {
      n.classList.add('animate-fade-in');
      n.classList.remove('opacity-0');
    };

    const els = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      els.forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((n) => io.observe(n));

    return () => io.disconnect();
  }, []);

  return null;
}
