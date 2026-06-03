import Image from 'next/image';
import heroBg from '../../hero-bg.png';

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* ── LEFT PANEL: Text + decorative plant illustration ── */}
        <div className="relative flex items-center bg-[#E8E5D5] px-8 md:px-14 xl:px-20 py-20 md:py-24 lg:py-0">
          {/* Decorative plant/leaf motif — positioned between heading lines */}
          <svg
            className="absolute left-8 md:left-14 xl:left-20 top-[28%] w-[280px] md:w-[340px] h-auto opacity-25 pointer-events-none"
            viewBox="0 0 400 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Stylized plant sprout / leaf pattern */}
            <g stroke="#2D6A4F" strokeWidth="1.6" strokeLinecap="round" opacity="0.7">
              {/* Main stem */}
              <path d="M40 55 Q50 40 55 30" />
              {/* Left leaf 1 */}
              <path d="M45 40 Q30 32 28 38 Q35 42 47 40" fill="#2D6A4F" fillOpacity="0.15"/>
              {/* Right leaf 1 */}
              <path d="M48 36 Q60 28 62 34 Q55 38 49 36" fill="#40916C" fillOpacity="0.12"/>
              {/* Left leaf 2 */}
              <path d="M52 30 Q38 22 35 28 Q42 32 53 30" fill="#2D6A4F" fillOpacity="0.12"/>
              {/* Right leaf 2 */}
              <path d="M50 28 Q64 18 66 24 Q58 28 51 28" fill="#52B788" fillOpacity="0.10"/>
              {/* Node circle */}
              <circle cx="52" cy="25" r="3" fill="#2D6A4F" fillOpacity="0.2"/>
            </g>
            {/* Small floating leaves */}
            <g stroke="#40916C" strokeWidth="1.2" strokeLinecap="round" opacity="0.5">
              <path d="M120 48 Q130 42 128 38 Q118 43 120 48" fill="#40916C" fillOpacity="0.08"/>
              <path d="M135 52 Q145 46 143 42 Q133 47 135 52" fill="#52B788" fillOpacity="0.06"/>
              <path d="M200 18 Q210 12 208 8 Q198 13 200 18" fill="#2D6A4F" fillOpacity="0.08"/>
              <path d="M215 22 Q225 16 223 12 Q213 17 215 22" fill="#40916C" fillOpacity="0.06"/>
              <path d="M280 50 Q290 44 288 40 Q278 45 280 50" fill="#52B788" fillOpacity="0.07"/>
              <path d="M300 44 Q310 38 308 34 Q298 39 300 44" fill="#2D6A4F" fillOpacity="0.05"/>
            </g>
          </svg>

          <div className="relative z-10 reveal opacity-0">
            <h1 className="text-[clamp(28px,4.2vw,48px)] font-black leading-[1.12] tracking-[-0.025em] text-[#111] mb-5">
              Innovating for<br />
              <span className="text-phyto-forest">Sustainable Agriculture</span><br />
              and a Resilient Future
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#5A5550] leading-relaxed mb-8 max-w-[440px]">
              Phytosynth Bioscience Ltd delivers science-driven solutions in plant biotechnology
              and environmental biosolutions to advance global food security and environmental
              sustainability.
            </p>
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-phyto-forest text-white text-[14px] md:text-[15px] font-semibold px-7 md:px-9 py-3.5 rounded-full border-2 border-phyto-forest hover:bg-phyto-deep hover:border-phyto-deep hover:-translate-y-px hover:shadow-md transition-all duration-[280ms]"
            >
              About Us
            </a>
          </div>
        </div>

        {/* ── RIGHT PANEL: Image with gradient blend at left edge ── */}
        <div className="relative w-full h-[380px] lg:h-[500px] xl:h-[560px] overflow-hidden">
          <Image
            src={heroBg}
            alt="Agricultural field with green foliage under open sky"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Gradient blend — smooths the transition from cream left panel into the image */}
          <div className="absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-[#E8E5D5] via-[#E8E5D5]/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
