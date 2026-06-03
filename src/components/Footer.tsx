const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Research', href: '#research' },
  { label: 'Training', href: '#training' },
  { label: 'Projects', href: '#projects' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  { label: 'Agri-Tech', href: '#services' },
  { label: 'AI in Agriculture', href: '#services' },
  { label: 'Plant Biotechnology', href: '#services' },
  { label: 'Environmental Biosolutions', href: '#services' },
  { label: 'Molecular Diagnostics', href: '#services' },
  { label: 'Consultancy', href: '#services' },
  { label: 'Commercial R&D', href: '#services' },
];

const TRAINING_LINKS = [
  { label: 'HPLC Training', href: '#training' },
  { label: 'GC-MS Training', href: '#training' },
  { label: 'Phytochemical Analysis', href: '#training' },
  { label: 'Molecular Techniques', href: '#training' },
  { label: 'Customized Training', href: '#training' },
];

const CONTACT_INFO = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    text: 'Phytosynth Bioscience Ltd\nInnovation Hub, London,\nUnited Kingdom',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M22 4L12 13 2 4"/>
      </svg>
    ),
    text: 'info@phytosynthbio.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    text: '+44 (0) 20 XXXX XXXX',
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="max-w-8xl mx-auto px-6 md:px-8 pt-16 pb-0">
        {/* 4-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] gap-10 lg:gap-12 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="reveal opacity-0">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M24 6C24 6 8 10 8 26C8 34 14 42 24 44C34 42 40 34 40 26C40 10 24 6 24 6Z" fill="#2D6A4F" opacity="0.9"/>
                <path d="M24 10C24 6 28 4 28 4C28 4 30 10 28 16C26 22 20 24 20 24" fill="#52B788" opacity="0.7"/>
                <line x1="24" y1="14" x2="24" y2="42" stroke="#D8F3DC" strokeWidth="1.5" opacity="0.6"/>
                <line x1="18" y1="18" x2="30" y2="16" stroke="#95D5B2" strokeWidth="1.2" opacity="0.7"/>
                <line x1="16" y1="24" x2="32" y2="22" stroke="#95D5B2" strokeWidth="1.2" opacity="0.7"/>
                <line x1="16" y1="30" x2="32" y2="28" stroke="#95D5B2" strokeWidth="1.2" opacity="0.7"/>
                <line x1="18" y1="36" x2="30" y2="34" stroke="#95D5B2" strokeWidth="1.2" opacity="0.7"/>
              </svg>
              <span className="text-xl font-extrabold tracking-[0.04em] text-white leading-tight">
                PHYTOSYNTH<br />
                <span className="text-[11px] font-semibold tracking-[0.16em] text-phyto-bright">BIOSCIENCE LTD</span>
              </span>
            </div>
            <p className="text-sm text-[#9DA5A2] leading-relaxed mb-5">
              Phytosynth Bioscience Ltd is a leading agritech and biotechnology company delivering
              science-driven solutions for sustainable agriculture and environmental resilience
              across Africa and beyond.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-[38px] h-[38px] rounded-full bg-white/6 flex items-center justify-center hover:bg-phyto-vibrant transition-colors group">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="text-[#9DA5A2] group-hover:text-white transition-colors"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="w-[38px] h-[38px] rounded-full bg-white/6 flex items-center justify-center hover:bg-phyto-vibrant transition-colors group">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="text-[#9DA5A2] group-hover:text-white transition-colors"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="mailto:info@phytosynthbio.com" aria-label="Email" className="w-[38px] h-[38px] rounded-full bg-white/6 flex items-center justify-center hover:bg-phyto-vibrant transition-colors group">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9DA5A2] group-hover:text-white transition-colors"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="reveal opacity-0">
            <h4 className="text-[15px] font-bold text-white mb-5 tracking-[0.02em]">Quick Links</h4>
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-[#9DA5A2] py-1.5 hover:text-phyto-bright transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Our Services */}
          <div className="reveal opacity-0">
            <h4 className="text-[15px] font-bold text-white mb-5 tracking-[0.02em]">Our Services</h4>
            {SERVICE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-[#9DA5A2] py-1.5 hover:text-phyto-bright transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Training & Contact */}
          <div className="reveal opacity-0">
            <h4 className="text-[15px] font-bold text-white mb-5 tracking-[0.02em]">Training Programs</h4>
            {TRAINING_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-[#9DA5A2] py-1.5 hover:text-phyto-bright transition-colors"
              >
                {link.label}
              </a>
            ))}
            <h4 className="text-[15px] font-bold text-white mt-7 mb-4 tracking-[0.02em]">Contact Us</h4>
            {CONTACT_INFO.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 mb-3.5">
                <span className="text-phyto-bright mt-0.5 shrink-0">{item.icon}</span>
                <p className="text-sm text-[#9DA5A2] leading-relaxed whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-[#7A827E]">
            &copy; 2026 Phytosynth Bioscience Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-[#7A827E] hover:text-phyto-bright transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[13px] text-[#7A827E] hover:text-phyto-bright transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
