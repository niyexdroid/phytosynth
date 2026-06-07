import Image from "next/image";

const CONTACT_DETAILS = [
  {
    icon: "/cont-1.png",
    label: "Location",
    text: "Innovation Hub, London,\nUnited Kingdom",
  },
  {
    icon: "/cont-2.png",
    label: "Email",
    text: "info@phytosynth.co.uk",
  },
  {
    icon: "/cont-3.png",
    label: "Phone",
    text: "+447879460859",
  },
];

export default function CtaBanner() {
  return (
    <section id="contact" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background image */}
      <Image
        src="/contactus-bg.png"
        alt="Contact Phytosynth Bioscience"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1B4332]/75 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Left — heading + button */}
        <div>
          <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.22] tracking-[-0.02em] text-white max-w-[560px] reveal opacity-0 mb-6">
            Let&apos;s build a greener, smarter and healthier future together.
          </h2>
          <a
            href="mailto:info@phytosynth.co.uk"
            className="inline-flex items-center justify-center bg-white text-phyto-deep text-[16px] font-semibold px-9 py-4 rounded-full border-2 border-white hover:bg-phyto-pale hover:border-phyto-pale hover:-translate-y-px hover:shadow-md transition-all duration-[280ms] shrink-0 reveal opacity-0"
          >
            Contact Us Today
          </a>
        </div>

        {/* Right — contact details with icons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-5 reveal opacity-0">
          {CONTACT_DETAILS.map((item) => (
            <div key={item.label} className="flex items-center gap-3.5">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-white/10">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <p className="text-[14px] text-[#D8F3DC] leading-relaxed whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
