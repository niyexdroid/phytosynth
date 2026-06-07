import Image from "next/image";
import researchBg from "@/assets/driving-research.png";

const STATS = [
  { value: "20+", label: "Research Projects" },
  { value: "15+", label: "Collaborating Institutions" },
  { value: "5+", label: "Countries" },
  { value: "100%", label: "Commitment to Sustainability" },
];

const statIcons = [
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10"/></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
];

export default function Research() {
  return (
    <section id="research" className="relative py-24 md:py-28 overflow-hidden">
      {/* Background image */}
      <Image
        src={researchBg}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay — makes text readable */}
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
            and agricultural innovation — translating discoveries into practical, scalable solutions
            for global challenges.
          </p>
          <a
            href="#research-detail"
            className="inline-flex items-center justify-center bg-transparent text-white text-[15px] font-semibold px-8 py-3.5 rounded-full border-2 border-white hover:bg-white hover:text-phyto-deep hover:-translate-y-px hover:shadow-md transition-all duration-[280ms]"
          >
            Explore Our Research
          </a>
        </div>

        {/* Right: Stats grid */}
        <div className="reveal opacity-0 grid grid-cols-2 gap-7 md:gap-9">
          {STATS.map((stat, idx) => (
            <div key={stat.label} className="flex items-start gap-3.5">
              <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-md bg-phyto-bright/15 text-phyto-bright">
                {statIcons[idx]}
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
