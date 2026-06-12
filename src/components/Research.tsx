import Image from "next/image";
import Link from "next/link";
import researchBg from "@/assets/driving-research.png";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "w-11 h-11",
};

const STATS = [
  {
    value: "20+",
    label: "Research Projects",
    icon: (
      <svg {...iconProps}>
        <path d="M9 3h6" />
        <path d="M10 3v6.5L4.6 18.2A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.7-2.8L14 9.5V3" />
        <path d="M7.5 14h9" />
      </svg>
    ),
  },
  {
    value: "15+",
    label: "Collaborating Institutions",
    icon: (
      <svg {...iconProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "5+",
    label: "Countries",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Commitment to Sustainability",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Research() {
  return (
    <section id="research" className="relative py-16 md:py-28 overflow-hidden">
      {/* Background image */}
      <Image
        src={researchBg}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay, makes text readable */}
      <div className="absolute inset-0 bg-[#0D0D0D]/80 z-[1]" />

      {/* Radial gradient accents */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(45,106,79,0.22),transparent_60%),radial-gradient(ellipse_at_70%_50%,rgba(82,183,136,0.12),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="reveal opacity-0">
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.16] tracking-[-0.02em] text-white mb-5">
            Driving Research.<br />
            <span className="text-phyto-bright">Delivering Solutions.</span>
          </h2>
          <p className="text-base text-[#B0B8B4] leading-relaxed mb-7 max-w-[480px]">
            Our interdisciplinary research programs span molecular biology, environmental science,
            and agricultural innovation, translating discoveries into practical, scalable solutions
            for global challenges.
          </p>
          <Link
            href="/research"
            className="inline-flex items-center justify-center bg-transparent text-white text-[15px] font-semibold px-8 py-3.5 rounded-full border-2 border-white hover:bg-white hover:text-phyto-deep hover:-translate-y-px hover:shadow-md transition-all duration-[280ms]"
          >
            Explore Our Research
          </Link>
        </div>

        {/* Right: Stats grid */}
        <div className="reveal opacity-0 grid grid-cols-2 gap-7 md:gap-9">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-start gap-3.5">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-[26px] font-extrabold text-white tracking-[-0.02em] leading-tight">
                  {stat.value}
                </h3>
                <p className="text-[12.5px] font-medium text-gray-400 uppercase tracking-[0.06em] mt-0.5">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
