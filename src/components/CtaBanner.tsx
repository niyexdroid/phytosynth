export default function CtaBanner() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-24 bg-phyto-forest overflow-hidden"
    >
      {/* Geometric biotech pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 30%, rgba(255,255,255,0.04) 0.5px, transparent 0.5px), radial-gradient(circle at 35% 70%, rgba(255,255,255,0.03) 1px, transparent 1px), radial-gradient(circle at 65% 20%, rgba(255,255,255,0.05) 0.8px, transparent 0.8px), radial-gradient(circle at 85% 60%, rgba(255,255,255,0.04) 0.6px, transparent 0.6px)',
          backgroundSize: '120px 120px, 180px 180px, 140px 140px, 160px 160px',
        }}
      />
      {/* Glow accents */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,rgba(82,183,136,0.25),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(149,213,178,0.12),transparent_50%)]" />

      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.22] tracking-[-0.02em] text-white max-w-[580px] reveal opacity-0">
          Let&apos;s build a greener, smarter and healthier future together.
        </h2>
        <a
          href="mailto:info@phytosynthbio.com"
          className="inline-flex items-center justify-center bg-white text-phyto-deep text-[16px] font-semibold px-9 py-4 rounded-full border-2 border-white hover:bg-phyto-pale hover:border-phyto-pale hover:-translate-y-px hover:shadow-md transition-all duration-[280ms] shrink-0 reveal opacity-0"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
}
