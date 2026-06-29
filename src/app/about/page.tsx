"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import drivingResearch from "@/assets/driving-research.png";

/* ───────────────────────────── Icons ───────────────────────────── */
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "w-10 h-10",
};

const VALUES = [
  {
    title: "Scientific Rigour",
    desc: "Every recommendation is grounded in evidence and validated method, peer-reviewed where it counts, reproducible by design.",
    icon: (
      <svg {...iconProps}>
        <path d="M9 3v6l-5 9a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 18l-5-9V3" />
        <path d="M7.5 13h9" />
        <path d="M9 3h6" />
      </svg>
    ),
  },
  {
    title: "Sustainability First",
    desc: "We measure success by environmental outcomes, healthier soils, less water, lower carbon, and more resilient crops.",
    icon: (
      <svg {...iconProps}>
        {/* sprout */}
        <path d="M12 8V5.4" />
        <path d="M12 6.4C12 4.9 10.6 3.9 9 4.1 9 5.6 10.4 6.6 12 6.4z" />
        <path d="M12 5.9C12 4.4 13.4 3.4 15 3.6 15 5.1 13.6 6.1 12 5.9z" />
        {/* globe */}
        <circle cx="12" cy="11" r="3" />
        <path d="M9 10.4h6" />
        {/* cupping hands */}
        <path d="M4 15c0 3 3.6 5 8 5s8-2 8-5" />
        <path d="M4 15l2-1" />
        <path d="M20 15l-2-1" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    desc: "We embed alongside growers, researchers, and industry partners, building lasting capability, not dependency.",
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
    title: "Real-World Impact",
    desc: "Research only matters when it ships. We translate discovery into tools, decisions, and measurable results in the field.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    desc: "From AI and phenotyping to green nanotechnology, we bring emerging science to practical agricultural problems.",
    icon: (
      <svg {...iconProps}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    desc: "Honest reporting, transparent methods, and advice we would stand behind, whatever the result tells us.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const STATS = [
  {
    value: "20+",
    label: "Research Projects",
    icon: (
      <svg {...iconProps} className="w-11 h-11">
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
      <svg {...iconProps} className="w-11 h-11">
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
      <svg {...iconProps} className="w-11 h-11">
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
      <svg {...iconProps} className="w-11 h-11">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const DOMAINS = [
  "Agri-Tech",
  "AI in Agriculture",
  "Plant Biotechnology",
  "Environmental Biosolutions",
  "Molecular Diagnostics",
  "Consultancy",
  "Commercial R&D",
];

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* ═══════════ BANNER ═══════════ */}
        <section className="relative pt-[76px] h-[400px] md:h-[460px] flex items-center overflow-hidden">
          <Image
            src={drivingResearch}
            alt="About Phytosynth Bioscience"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B2F1F]/80 z-[1]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              About Us
            </span>
            <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white mb-5">
              Bioscience for a Greener, Smarter Future
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[680px] mx-auto leading-relaxed">
              Phytosynth Bioscience Ltd is a science-driven agritech and
              biotechnology company advancing global food security and
              environmental sustainability.
            </p>
          </div>
        </section>

        {/* ═══════════ WHO WE ARE ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal opacity-0">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Who We Are
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-5">
                Bridging the Lab and the Field
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                Phytosynth Bioscience Ltd is a UK–Africa bioscience innovation
                and capacity-building organization advancing food security,
                climate resilience, scientific education, and sustainable
                agricultural development through biotechnology, artificial
                intelligence, data science, plant phenotyping, and environmental
                analytics. Our mission is to bridge research and real-world
                impact by delivering innovative, science-driven solutions that
                empower researchers, growers, industry, policymakers, and future
                scientific leaders across the United Kingdom and Africa.
              </p>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                Our work bridges the gap between scientific discovery and
                real-world application, helping organizations improve
                productivity, sustainability and decision-making through
                evidence-based innovation.
              </p>
            </div>
            <div className="reveal opacity-0 relative h-[280px] sm:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={drivingResearch}
                alt="Phytosynth Bioscience team at work"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-phyto-deep/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* ═══════════ MISSION & VISION ═══════════ */}
        <section className="py-16 md:py-24 bg-[#F5F7F5]">
          <div className="max-w-5xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-6 md:gap-7">
            <div className="reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-8 md:p-9">
              <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#0D0D0D] mb-3">
                Our Mission
              </h3>
              <p className="text-[15px] text-[#5A6560] leading-relaxed">
                To develop innovative biotechnology, artificial intelligence and
                environmental solutions that enhance agricultural productivity,
                improve sustainability, support scientific discovery and
                contribute to global food security.
              </p>
            </div>
            <div className="reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-8 md:p-9">
              <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#0D0D0D] mb-3">
                Our Vision
              </h3>
              <p className="text-[15px] text-[#5A6560] leading-relaxed">
                To become a globally recognized leader in biotechnology and
                agricultural innovation, transforming how science, technology
                and data are used to build sustainable food systems and
                resilient ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ VALUES ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-12 md:mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                What Drives Us
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Our Values
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                The principles that shape every project, partnership, and
                recommendation we make.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {VALUES.map((value, i) => (
                <div
                  key={value.title}
                  className={`reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-7 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md hover:border-phyto-pale transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <div className="mb-4 text-phyto-bright">{value.icon}</div>
                  <h3 className="text-[17px] font-bold text-[#0D0D0D] mb-2 leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ STATS ═══════════ */}
        <section className="py-14 md:py-20 bg-phyto-deep">
          <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="reveal opacity-0 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <p className="text-[clamp(32px,5vw,44px)] font-extrabold text-white tracking-[-0.02em] leading-none mb-2">
                  {stat.value}
                </p>
                <p className="text-[12.5px] font-medium text-white uppercase tracking-[0.06em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ WHAT WE DO ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="reveal opacity-0">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                What We Do
              </span>
              <h2 className="text-[clamp(24px,3.5vw,34px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-5">
                Seven Connected Areas of Expertise
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-7">
                Our services span the full bioscience value chain, from
                molecular diagnostics and plant biotechnology to AI-driven
                agriculture, environmental biosolutions, and commercial R&amp;D.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-phyto-forest text-white text-[15px] font-semibold px-7 py-3.5 rounded-full border-2 border-phyto-forest hover:bg-phyto-deep hover:border-phyto-deep hover:-translate-y-px hover:shadow-md transition-all duration-[280ms]"
              >
                Explore Our Services
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="reveal opacity-0 flex flex-wrap gap-3">
              {DOMAINS.map((domain) => (
                <span
                  key={domain}
                  className="inline-flex items-center gap-2 bg-[#F5F7F5] border border-gray-200 rounded-full px-4 py-2.5 text-[14px] font-semibold text-[#3D4A44]"
                >
                  <span className="w-2 h-2 rounded-full bg-phyto-bright" />
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FOUNDER ═══════════ */}
        <section className="py-16 md:py-24 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mb-12 md:mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Leadership
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D]">
                Meet the Founder
              </h2>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-10 lg:gap-14 items-start">
              {/* Portrait + identity */}
              <div className="reveal opacity-0">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-phyto-pale">
                  <Image
                    src="/ceo.jpeg"
                    alt="Jane Nnamani Akinniyi, Founder & CEO of Phytosynth Bioscience Ltd"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 340px"
                  />
                </div>
                <h3 className="text-[21px] font-bold text-[#0D0D0D] mt-6 mb-1">
                  Jane Nnamani Akinniyi
                  <span className="text-[14px] font-semibold text-phyto-bright">
                    {" "}
                    RSci, MRSB
                  </span>
                </h3>
                <p className="text-[14.5px] font-semibold text-phyto-bright">
                  Founder &amp; Chief Executive Officer
                </p>
                <p className="text-[13.5px] text-[#6B7570]">
                  Phytosynth Bioscience Ltd
                </p>
              </div>

              {/* Bio */}
              <div className="reveal opacity-0">
                <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                  Jane Nnamani Akinniyi is a Registered Scientist (RSci) and
                  biotechnology innovator with over ten years of experience
                  spanning biotechnology, smart agriculture, molecular biology,
                  plant science, food systems, and research innovation. She
                  founded Phytosynth Bioscience Ltd to translate scientific
                  research into practical solutions for food security, climate
                  resilience, environmental sustainability, and agricultural
                  productivity across the UK and Africa.
                </p>
                <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                  Jane holds an MSc in Biotechnology with Distinction from
                  Nottingham Trent University , where she was awarded the NTU
                  International Scholarship, an MSc in Biochemistry from the
                  University of Lagos, and a BSc in Biochemistry from Obafemi
                  Awolowo University. Her career spans academia, government
                  research institutions, and industry-led innovation, with
                  technical leadership across hydroponics, aeroponics, plant
                  phenotyping, greenhouse automation, environmental sensing,
                  metabolomics, and AI-driven data analytics.
                </p>
                <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                  Her expertise covers plant biotechnology, crop phenotyping,
                  molecular diagnostics, metabolomics, food safety, postharvest
                  technology, and machine learning in agriculture. An active
                  scientific author and peer reviewer for international journals
                  published by Elsevier and Springer Nature, her publications
                  cover green nanotechnology, food waste valorisation,
                  postharvest biotechnology, and sustainable agriculture.
                </p>
                <p className="text-[16px] text-[#5A6560] leading-relaxed">
                  As CEO, Jane leads Phytosynth&apos;s vision of integrating
                  biotechnology, artificial intelligence, environmental
                  analytics, and sustainable agriculture into solutions for
                  researchers, growers, industry, and policymakers. She is
                  especially passionate about strengthening UK–Africa scientific
                  collaboration, supporting early-career researchers, and
                  promoting women in science.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-16 md:py-24 bg-phyto-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Work With Us
            </span>
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-white mb-5">
              Let&apos;s Build a Greener, Smarter Future Together
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd to discuss consultancy,
              training, research collaboration, or bespoke scientific solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-phyto-bright text-phyto-deep text-[15px] font-bold px-9 py-3.5 rounded-full hover:bg-white hover:-translate-y-px hover:shadow-lg transition-all duration-[280ms]"
              >
                Get in Touch
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-white text-[15px] font-semibold hover:text-phyto-bright transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Our Research
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
