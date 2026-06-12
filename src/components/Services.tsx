import Image from "next/image";
import Link from "next/link";

const SLUGS: Record<string, string> = {
  "Agri-Tech": "/services/agric-tech",
  "AI in Agriculture": "/services/ai-in-agriculture",
  "Plant Biotechnology": "/services/plant-biotechnology",
  "Environmental Biosolutions": "/services/environmental-biosolutions",
  "Molecular Diagnostics": "/services/molecular-diagnostics",
  Consultancy: "/services/consultancy",
  "Commercial R&D": "/services/commercial-r-and-d",
  "Postharvest Loss Solutions": "/services/postharvest-loss-solutions",
};

const SERVICES = [
  {
    title: "Agri-Tech",
    desc: "Smart farming solutions and precision agriculture technologies.",
    icon: (
      <Image
        src="/ser-1.png"
        alt="Agri-Tech"
        width={80}
        height={80}
        className="w-full h-full object-contain mix-blend-multiply"
      />
    ),
  },
  {
    title: "AI in Agriculture",
    desc: "AI-powered analytics for crop monitoring, prediction and decision support.",
    icon: (
      <Image
        src="/ser-2.png"
        alt="AI in Agriculture"
        width={80}
        height={80}
        className="w-full h-full object-contain mix-blend-multiply"
      />
    ),
  },
  {
    title: "Plant Biotechnology",
    desc: "Advanced research in genetics, molecular biology and crop improvement.",
    icon: (
      <Image
        src="/ser-3.png"
        alt="Plant Biotechnology"
        width={80}
        height={80}
        className="w-full h-full object-contain mix-blend-multiply"
      />
    ),
  },
  {
    title: "Environmental Biosolutions",
    desc: "Nature-based solutions for soil health, pollution management and sustainability.",
    icon: (
      <Image
        src="/ser-4.png"
        alt="Environmental Biosolutions"
        width={80}
        height={80}
        className="w-full h-full object-contain mix-blend-multiply"
      />
    ),
  },
  {
    title: "Molecular Diagnostics",
    desc: "Rapid and accurate molecular testing for plants, pathogens and environments.",
    icon: (
      <Image
        src="/ser-5.png"
        alt="Molecular Diagnostics"
        width={80}
        height={80}
        className="w-full h-full object-contain mix-blend-multiply"
      />
    ),
  },
  {
    title: "Consultancy",
    desc: "Expert advice and strategic support in biotechnology and biosciences.",
    icon: (
      <Image
        src="/ser-6.png"
        alt="Consultancy"
        width={80}
        height={80}
        className="w-full h-full object-contain mix-blend-multiply"
      />
    ),
  },
  {
    title: "Commercial R&D",
    desc: "Contract research and product development solutions for industry partners.",
    icon: (
      <Image
        src="/ser-7.png"
        alt="Commercial R&D"
        width={80}
        height={80}
        className="w-full h-full object-contain mix-blend-multiply"
      />
    ),
  },
  {
    title: "Postharvest Loss Solutions",
    desc: "Natural preservation technologies for shelf-life extension and reduced food loss.",
    icon: (
      <Image
        src="/ser-8.png"
        alt="Postharvest Loss Solutions"
        width={80}
        height={80}
        className="w-full h-full object-contain mix-blend-multiply"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal opacity-0">
          <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
            Our Services
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0D0D0D] mb-5">
            Science. Technology.{" "}
            <span className="text-phyto-bright">Impact.</span>
          </h2>
          <p className="text-[17px] text-[#5A6560] max-w-[620px] mx-auto leading-relaxed">
            Comprehensive bioscience solutions bridging cutting-edge research
            with real-world agricultural and environmental applications.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4 md:gap-5">
          {SERVICES.map((svc, i) => (
            <Link
              key={svc.title}
              href={SLUGS[svc.title]}
              className={`reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-xl p-5 md:p-6 text-left hover:-translate-y-1.5 hover:shadow-xl hover:border-phyto-light hover:bg-white transition-all duration-300 fade-in-${i + 1} block`}
            >
              <div className="w-full h-[80px] mb-4 flex items-center justify-center text-phyto-bright">
                {svc.icon}
              </div>
              <h3 className="text-[15px] font-bold text-[#0D0D0D] mb-2 leading-tight">
                {svc.title}
              </h3>
              <p className="text-[13px] text-[#6B7570] leading-relaxed">
                {svc.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
