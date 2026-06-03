const SERVICES = [
  {
    title: 'Agri-Tech',
    desc: 'Smart farming solutions and precision agriculture technologies.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 22h20L12 2z"/>
        <line x1="12" y1="10" x2="12" y2="22"/>
        <line x1="7" y1="22" x2="17" y2="22"/>
      </svg>
    ),
  },
  {
    title: 'AI in Agriculture',
    desc: 'AI-powered analytics for crop monitoring, prediction and decision support.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: 'Plant Biotechnology',
    desc: 'Advanced research in genetics, molecular biology and crop improvement.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8"/>
        <path d="M8 12c0-4 4-6 4-6s4 2 4 6"/>
        <path d="M16 8c0 2-2 4-4 4S8 10 8 8"/>
        <circle cx="12" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    title: 'Environmental Biosolutions',
    desc: 'Nature-based solutions for soil health, pollution management and sustainability.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10"/>
        <path d="M12 2a15.3 15.3 0 00-4 10 15.3 15.3 0 004 10"/>
      </svg>
    ),
  },
  {
    title: 'Molecular Diagnostics',
    desc: 'Rapid and accurate molecular testing for plants, pathogens and environments.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: 'Consultancy',
    desc: 'Expert advice and strategic support in biotechnology and biosciences.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Commercial R&D',
    desc: 'Contract research and product development solutions for industry partners.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-5 0v-15A2.5 2.5 0 019.5 2z"/>
        <path d="M14.5 7A2.5 2.5 0 0117 9.5v10a2.5 2.5 0 01-5 0v-10A2.5 2.5 0 0114.5 7z"/>
        <path d="M4.5 12A2.5 2.5 0 017 14.5v5a2.5 2.5 0 01-5 0v-5A2.5 2.5 0 014.5 12z"/>
        <path d="M19.5 4A2.5 2.5 0 0122 6.5v13a2.5 2.5 0 01-5 0v-13A2.5 2.5 0 0119.5 4z"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal opacity-0">
          <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-vibrant mb-3">
            Our Services
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0D0D0D] mb-5">
            Science. Technology. <span className="text-phyto-leaf">Impact.</span>
          </h2>
          <p className="text-[17px] text-[#5A6560] max-w-[620px] mx-auto leading-relaxed">
            Comprehensive bioscience solutions bridging cutting-edge research with real-world
            agricultural and environmental applications.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-4 md:gap-5">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-xl p-5 md:p-6 text-center flex flex-col items-center hover:-translate-y-1.5 hover:shadow-xl hover:border-phyto-light hover:bg-white transition-all duration-300 fade-in-${i + 1}`}
            >
              <div className="w-[52px] h-[52px] mb-4 flex items-center justify-center bg-phyto-pale rounded-md text-phyto-forest group-hover:bg-phyto-forest group-hover:text-white transition-colors">
                {svc.icon}
              </div>
              <h3 className="text-[15px] font-bold text-[#0D0D0D] mb-2 leading-tight">
                {svc.title}
              </h3>
              <p className="text-[13px] text-[#6B7570] leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
