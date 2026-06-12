"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import researchBg from "@/assets/driving-research.png";
import { RESEARCH_PROJECTS } from "@/data/research-projects";

/* ═══════════════════════════════════════════════════════════════════════════
   Icons
   ═══════════════════════════════════════════════════════════════════════════ */

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "w-7 h-7",
};

// Plant Molecular Biology, DNA helix
const IconDNA = (
  <svg {...iconProps}>
    <path d="m10 16 1.5 1.5" />
    <path d="m14 8-1.5-1.5" />
    <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
    <path d="m16.5 10.5 1 1" />
    <path d="m17 6-2.891-2.891" />
    <path d="M2 15c6.667-6 13.333 0 20-6" />
    <path d="m20 9 .891.891" />
    <path d="M3.109 14.109 4 15" />
    <path d="m6.5 12.5 1 1" />
    <path d="m7 18 2.891 2.891" />
    <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
  </svg>
);
// Plant Stress Physiology, thermometer
const IconStress = (
  <svg {...iconProps}>
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
  </svg>
);
// Plant Phenotyping & Analytics, scan frame
const IconPheno = (
  <svg {...iconProps}>
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <path d="M7 12h10" />
  </svg>
);
// AI & Data Science, CPU chip
const IconAI = (
  <svg {...iconProps}>
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M15 2v2" />
    <path d="M15 20v2" />
    <path d="M2 15h2" />
    <path d="M2 9h2" />
    <path d="M20 15h2" />
    <path d="M20 9h2" />
    <path d="M9 2v2" />
    <path d="M9 20v2" />
  </svg>
);
// Environmental Bioscience, leaf
const IconEnv = (
  <svg {...iconProps}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);
// Molecular Diagnostics, microscope
const IconDiagnostics = (
  <svg {...iconProps}>
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  </svg>
);

const FOCUS_AREAS = [
  {
    icon: IconDNA,
    title: "Plant Molecular Biology",
    desc: "Gene expression, molecular markers, and biochemical analysis underpinning crop improvement and trait discovery.",
  },
  {
    icon: IconStress,
    title: "Plant Stress Physiology",
    desc: "How crops respond to drought, heat, salinity, and pathogens, and how we engineer resilience into the next generation of varieties.",
  },
  {
    icon: IconPheno,
    title: "Plant Phenotyping & Analytics",
    desc: "High-throughput imaging, NDVI, and biomass estimation that convert plant traits into quantitative, decision-ready data.",
  },
  {
    icon: IconAI,
    title: "AI & Data Science in Agriculture",
    desc: "Machine-learning models for yield prediction, stress detection, and decision support across field and controlled environments.",
  },
  {
    icon: IconEnv,
    title: "Environmental Bioscience",
    desc: "Biosolutions for soil health, waste valorisation, and climate resilience, applying bioscience to ecosystem-scale challenges.",
  },
  {
    icon: IconDiagnostics,
    title: "Molecular Diagnostics",
    desc: "PCR, qPCR, ELISA, and biomarker discovery for rapid, accurate detection in crop health and environmental monitoring.",
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

const APPROACH = [
  {
    step: "01",
    title: "Discovery & Scoping",
    desc: "We start with the question, not the technique, mapping the problem, the constraints, and what success actually looks like for you.",
  },
  {
    step: "02",
    title: "Experimental Design",
    desc: "Rigorous, statistically-sound study design with clear controls, endpoints, and reproducible protocols built in from day one.",
  },
  {
    step: "03",
    title: "Data Generation & Analysis",
    desc: "Bench work, phenotyping, and field trials feed into analytics pipelines that turn raw measurements into validated insight.",
  },
  {
    step: "04",
    title: "Translation & Delivery",
    desc: "Findings are packaged into reports, tools, and recommendations your team can act on, and capability you can keep.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function ResearchPage() {
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
            src={researchBg}
            alt="Phytosynth Bioscience research"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B2F1F]/80 z-[1]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Research &amp; Innovation
            </span>
            <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white mb-5">
              Driving Research. Delivering Solutions.
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[680px] mx-auto leading-relaxed">
              Our interdisciplinary research programmes span molecular biology, environmental
              science, and agricultural innovation, translating discoveries into practical,
              scalable solutions for global challenges.
            </p>
          </div>
        </section>

        {/* ═══════════ MISSION ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="reveal opacity-0">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Our Mission
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-5">
                Science With a Purpose Beyond the Paper
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                Phytosynth Bioscience exists to close the gap between the laboratory and the field.
                We pursue research that is both scientifically rigorous and immediately useful,
                addressing food security, crop resilience, and environmental sustainability head-on.
              </p>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                Working across plant biotechnology, AI-driven agriculture, and environmental
                bioscience, our teams partner with universities, institutes, and industry to turn
                fundamental discovery into deployable technology.
              </p>
            </div>
            <div className="reveal opacity-0 relative h-[260px] sm:h-[340px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={researchBg}
                alt="Researchers analysing plant samples"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-phyto-deep/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* ═══════════ FOCUS AREAS ═══════════ */}
        <section className="py-16 md:py-24 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-12 md:mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                What We Study
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Research Focus Areas
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                Six interconnected disciplines that let us tackle agricultural and environmental
                problems from the molecule to the ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {FOCUS_AREAS.map((area, i) => (
                <div
                  key={area.title}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                    {area.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0D0D0D] mb-2 leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ONGOING RESEARCH ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-12 md:mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                In Progress
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Ongoing Research
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                Explore our active research projects, each tackling a real-world question in
                agriculture, biotechnology, and sustainable food systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {RESEARCH_PROJECTS.map((project, i) => (
                <Link
                  key={project.slug}
                  href={`/research/${project.slug}`}
                  className={`group reveal opacity-0 flex flex-col overflow-hidden bg-[#F5F7F5] border border-gray-200 rounded-2xl hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light hover:bg-white transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-phyto-pale/30">
                    <Image
                      src={`/research/${project.slug}.jpeg`}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/90 backdrop-blur text-[13px] font-extrabold text-phyto-bright">
                      {String(project.number).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-[16.5px] font-bold text-[#0D0D0D] mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-[13.5px] text-[#6B7570] leading-relaxed mb-5">
                      {project.short}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-phyto-bright font-semibold text-[13.5px] group-hover:text-phyto-bright transition-colors">
                      View Project
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ STATS ═══════════ */}
        <section className="py-14 md:py-20 bg-phyto-deep">
          <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="reveal opacity-0 flex flex-col items-center text-center">
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

        {/* ═══════════ APPROACH ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-12 md:mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                How We Work
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Our Research Approach
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                A disciplined path from question to impact, designed for reproducibility and
                real-world delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {APPROACH.map((phase, i) => (
                <div
                  key={phase.step}
                  className={`reveal opacity-0 relative bg-[#F5F7F5] border border-gray-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-md transition-all duration-300 fade-in-${i + 1}`}
                >
                  <span className="text-[30px] font-extrabold text-phyto-light leading-none">
                    {phase.step}
                  </span>
                  <h3 className="text-[16px] font-bold text-[#0D0D0D] mt-3 mb-2 leading-tight">
                    {phase.title}
                  </h3>
                  <p className="text-[13.5px] text-[#6B7570] leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ COLLABORATION ═══════════ */}
        <section className="py-16 md:py-24 bg-[#F5F7F5]">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
              Partner With Us
            </span>
            <h2 className="text-[clamp(24px,3.5vw,34px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-5">
              Collaborative by Design
            </h2>
            <p className="text-[16px] text-[#5A6560] leading-relaxed">
              We co-develop research with universities, institutes, agritech ventures, and
              government bodies, from short consultancy engagements to multi-year programmes. If you
              have a problem worth solving, we would like to hear about it.
            </p>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-16 md:py-24 bg-phyto-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Let&apos;s Collaborate
            </span>
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-white mb-5">
              Have a Research Challenge in Mind?
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd to discuss research collaboration, consultancy, or a
              bespoke scientific programme.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-phyto-bright text-phyto-deep text-[15px] font-bold px-9 py-3.5 rounded-full hover:bg-white hover:-translate-y-px hover:shadow-lg transition-all duration-[280ms]"
              >
                Start a Conversation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-white text-[15px] font-semibold hover:text-phyto-bright transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
