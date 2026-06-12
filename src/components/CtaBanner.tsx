import Image from "next/image";
import Link from "next/link";

const CONTACT_DETAILS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    text: "50 Edale Road, Sneinton,\nNottingham, NG2 4HT, United Kingdom",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
    label: "Email",
    text: "info@phytosynth.co.uk",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
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
        {/* Left, heading + button */}
        <div>
          <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.22] tracking-[-0.02em] text-white max-w-[560px] reveal opacity-0 mb-6">
            Let&apos;s Build a Greener, Smarter and Healthier Future Together.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-phyto-deep text-[16px] font-semibold px-9 py-4 rounded-full border-2 border-white hover:bg-phyto-pale hover:border-phyto-pale hover:-translate-y-px hover:shadow-md transition-all duration-[280ms] shrink-0 reveal opacity-0"
          >
            Contact Us Today
          </Link>
        </div>

        {/* Right, contact details with icons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-5 reveal opacity-0">
          {CONTACT_DETAILS.map((item) => (
            <div key={item.label} className="flex items-center gap-3.5">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-white/10 text-phyto-bright">
                {item.icon}
              </div>
              <p className="text-[14px] text-[#75c402] leading-relaxed whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
