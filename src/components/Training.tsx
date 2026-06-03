import Image from 'next/image';

const PROGRAMS = [
  {
    title: 'HPLC Training',
    desc: 'Hands-on training in High Performance Liquid Chromatography.',
    img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80&fit=crop',
    gradient: 'from-phyto-forest to-phyto-vibrant',
  },
  {
    title: 'GC-MS Training',
    desc: 'Comprehensive training in Gas Chromatography-Mass Spectrometry.',
    img: 'https://images.unsplash.com/photo-1582719471384-894fbb4c4a5d?w=600&q=80&fit=crop',
    gradient: 'from-[#1B4332] to-[#52B788]',
  },
  {
    title: 'Phytochemical Analysis',
    desc: 'Extraction, screening and analysis of bioactive plant compounds.',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80&fit=crop',
    gradient: 'from-phyto-leaf to-phyto-light',
  },
  {
    title: 'Molecular Techniques',
    desc: 'PCR, qPCR, sequencing and other molecular diagnostics techniques.',
    img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80&fit=crop',
    gradient: 'from-phyto-deep to-phyto-vibrant',
  },
  {
    title: 'Customized Training',
    desc: 'Tailored training programs to meet specific research and industry needs.',
    img: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=600&q=80&fit=crop',
    gradient: 'from-phyto-forest to-phyto-vibrant',
  },
];

export default function Training() {
  return (
    <section id="training" className="py-24 md:py-28 bg-[#F5F7F5]">
      <div className="max-w-8xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal opacity-0">
          <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-vibrant mb-3">
            Training &amp; Capacity Building
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0D0D0D] mb-5">
            Advanced Training. <span className="text-phyto-leaf">Practical Expertise.</span>
          </h2>
          <p className="text-[17px] text-[#5A6560] max-w-[620px] mx-auto leading-relaxed">
            Specialized training programs for researchers, students and industry professionals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
          {PROGRAMS.map((prog, i) => (
            <div
              key={prog.title}
              className={`reveal opacity-0 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 fade-in-${i + 1}`}
            >
              <div className="relative h-[170px] overflow-hidden">
                <Image
                  src={prog.img}
                  alt={prog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-bold text-[#0D0D0D] mb-1.5 leading-tight">
                  {prog.title}
                </h3>
                <p className="text-[13px] text-[#6B7570] leading-relaxed">
                  {prog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal opacity-0">
          <a
            href="#all-training"
            className="inline-flex items-center justify-center bg-transparent text-phyto-forest text-[15px] font-semibold px-8 py-3.5 rounded-full border-2 border-phyto-forest hover:bg-phyto-forest hover:text-white hover:-translate-y-px hover:shadow-md transition-all duration-[280ms]"
          >
            View All Training Programs
          </a>
        </div>
      </div>
    </section>
  );
}
